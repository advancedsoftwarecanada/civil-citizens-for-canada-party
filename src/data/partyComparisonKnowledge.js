const PARTY_SOURCES = [
  {
    key: 'ppc',
    name: "People's Party of Canada",
    aliases: [
      'ppc',
      'people s party',
      'peoples party',
      'peoples party of canada',
      'people s party of canada',
      'maxime bernier',
      'bernier',
    ],
    loadContent: () => import('../../parties/ppc/combined.txt?raw').then((module) => module.default),
  },
  {
    key: 'liberal',
    name: 'Liberal Party of Canada',
    aliases: ['liberal', 'liberals', 'liberal party', 'mark carney', 'carney'],
    loadContent: () => import('../../parties/liberal/combined.txt?raw').then((module) => module.default),
  },
  {
    key: 'conservative',
    name: 'Conservative Party of Canada',
    aliases: ['conservative', 'conservatives', 'conservative party', 'cpc', 'poilievre', 'pierre'],
    loadContent: () =>
      import('../../parties/conservative/combined.txt?raw').then((module) => module.default),
  },
  {
    key: 'ndp',
    name: 'New Democratic Party',
    aliases: ['ndp', 'new democratic party', 'new democrats'],
    loadContent: () => import('../../parties/ndp/combined.txt?raw').then((module) => module.default),
  },
  {
    key: 'green',
    name: 'Green Party of Canada',
    aliases: ['green', 'greens', 'green party'],
    loadContent: () => import('../../parties/green/combined.txt?raw').then((module) => module.default),
  },
  {
    key: 'block',
    name: 'Bloc Quebecois',
    aliases: ['bloc', 'block', 'bloc quebecois', 'bloc québécois'],
    loadContent: () => import('../../parties/block/combined.txt?raw').then((module) => module.default),
  },
]

const GENERIC_COMPARISON_TERMS = [
  'other party',
  'other parties',
  'compare',
  'comparison',
  'versus',
  'vs',
  'difference',
  'different from',
]

const partyContentCache = new Map()

export async function getPartyComparisonContext(inputText) {
  const normalizedInput = normalizeSearchText(inputText)
  const selectedParties = PARTY_SOURCES.filter(
    (party) =>
      party.aliases.some((alias) => normalizedInput.includes(normalizeSearchText(alias))) ||
      GENERIC_COMPARISON_TERMS.some((term) => normalizedInput.includes(term)),
  ).slice(0, 3)

  if (selectedParties.length === 0) {
    return {
      selectedParties: [],
      knowledge: '',
    }
  }

  const loadedParties = await Promise.all(
    selectedParties.map(async (party) => ({
      ...party,
      content: await getPartyContent(party),
    })),
  )

  return {
    selectedParties,
    knowledge: loadedParties
      .map((party) => buildPartyContextSnippet(party, normalizedInput))
      .join('\n\n'),
  }
}

async function getPartyContent(party) {
  if (partyContentCache.has(party.key)) {
    return partyContentCache.get(party.key)
  }

  const content = await party.loadContent()
  partyContentCache.set(party.key, content)
  return content
}

function buildPartyContextSnippet(party, normalizedInput) {
  const chunks = splitIntoChunks(party.content)
  const rankedChunks = chunks
    .map((chunk) => ({
      chunk,
      score: scoreChunk(chunk, party, normalizedInput),
    }))
    .sort((left, right) => right.score - left.score)
    .slice(0, 6)
    .map((entry) => entry.chunk.trim())
    .filter(Boolean)

  return `Comparison party: ${party.name}\n${rankedChunks.join('\n\n')}`.trim()
}

function splitIntoChunks(text) {
  return text
    .split(/\n\n+/)
    .map((chunk) => chunk.trim())
    .filter((chunk) => chunk.length > 40)
}

function scoreChunk(chunk, party, normalizedInput) {
  const normalizedChunk = normalizeSearchText(chunk)
  const terms = normalizedInput.split(' ').filter(Boolean)
  let score = 0

  for (const alias of party.aliases) {
    if (normalizedChunk.includes(normalizeSearchText(alias))) {
      score += 4
    }
  }

  for (const term of terms) {
    if (term.length < 3) {
      continue
    }

    if (normalizedChunk.includes(term)) {
      score += 3
    }
  }

  if (normalizedChunk.includes('our plan') || normalizedChunk.includes('platform')) {
    score += 2
  }

  return score
}

function normalizeSearchText(text) {
  return text.toLowerCase().replace(/[^a-z0-9\s]+/g, ' ')
}