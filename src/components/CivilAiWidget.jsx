import { useEffect, useMemo, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import civilAiImage from '../../assets/img/civil-ai.png'
import civilAiInstructions from '../../ai-agents/civil-ai.md?raw'
import { civilAiConfig, hasCivilAiConfig } from '../config/civilAi'
import { getCivilAiKnowledge, getCivilAiPageIndex } from '../data/civilAiKnowledge'
import { localizeByLanguage } from '../lib/locale'

const MAX_CONTEXT_MESSAGES = 10
const MAX_INPUT_LENGTH = 1000
const CIVIL_AI_STORAGE_KEY = 'civil-ai-chat-history'
const CIVIL_AI_OPEN_STATE_KEY = 'civil-ai-chat-open'
const TYPING_INTERVAL_MS = 10

function createMessage(role, content) {
  return {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
    role,
    content,
  }
}

function getStoredMessages() {
  if (typeof window === 'undefined') {
    return []
  }

  try {
    const rawValue = window.localStorage.getItem(CIVIL_AI_STORAGE_KEY)

    if (!rawValue) {
      return []
    }

    const parsedValue = JSON.parse(rawValue)

    if (!Array.isArray(parsedValue)) {
      return []
    }

    return parsedValue
      .filter(
        (message) =>
          message &&
          (message.role === 'user' || message.role === 'assistant') &&
          typeof message.content === 'string',
      )
      .map((message, index) => ({
        id: typeof message.id === 'string' ? message.id : `stored-${index}`,
        role: message.role,
        content: message.content,
      }))
  } catch (error) {
    console.error(error)
    return []
  }
}

function getStoredOpenState() {
  if (typeof window === 'undefined') {
    return false
  }

  return window.localStorage.getItem(CIVIL_AI_OPEN_STATE_KEY) === 'true'
}

export default function CivilAiWidget() {
  const { i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(() => getStoredOpenState())
  const [messages, setMessages] = useState(() => getStoredMessages())
  const [input, setInput] = useState('')
  const [isSending, setIsSending] = useState(false)
  const [sitemapRoutes, setSitemapRoutes] = useState([])
  const [animatedMessageIds, setAnimatedMessageIds] = useState([])
  const [retrievalStatus, setRetrievalStatus] = useState({ phase: 'idle', routeTitles: [] })
  const scrollRef = useRef(null)

  const content = localizeByLanguage(i18n, {
    en: {
      openLabel: 'Open Civil AI',
      closeLabel: 'Close Civil AI',
      kicker: 'Civil AI',
      title: 'Intelligence for a Civil Society.',
      subtitle: 'Ask Civil AI your political questions...',
      welcome:
        'I am Civil AI. Ask about a community issue, a civic process, or what to do next inside Civil Citizens.',
      placeholder: 'Ask Civil AI a question based on the CCC site...',
      send: 'Send',
      characterCount: '{{count}} / 1000',
      thinking: 'Civil AI is thinking...',
      searching: 'Searching CCC pages...',
      reviewing: 'Reviewing pages: {{pages}}',
      error: 'Civil AI could not complete that request. Please try again in a moment.',
      unconfigured: 'Civil AI is not configured in this environment yet.',
      youJustAsked: 'You asked: "{{message}}"',
      iJustSaid: 'I said: "{{message}}"',
      noRecentMessage: 'There is no earlier message in the current memory window yet.',
    },
    fr: {
      openLabel: 'Ouvrir Civil AI',
      closeLabel: 'Fermer Civil AI',
      kicker: 'Civil AI',
      title: 'Une intelligence pour une societe civile.',
      subtitle: 'Posez vos questions politiques a Civil AI...',
      welcome:
        'Je suis Civil AI. Posez une question sur un enjeu communautaire, un processus civique ou la prochaine action a faire dans Civil Citizens.',
      placeholder: 'Posez une question a Civil AI a partir du site CCC...',
      send: 'Envoyer',
      characterCount: '{{count}} / 1000',
      thinking: 'Civil AI reflechit...',
      searching: 'Recherche dans les pages du CCC...',
      reviewing: 'Verification des pages : {{pages}}',
      error: 'Civil AI n a pas pu terminer cette demande. Veuillez reessayer dans un instant.',
      unconfigured: 'Civil AI n est pas configure dans cet environnement pour le moment.',
      youJustAsked: 'Vous avez demande : "{{message}}"',
      iJustSaid: 'J ai repondu : "{{message}}"',
      noRecentMessage: 'Il n y a pas encore de message precedent dans la fenetre de memoire actuelle.',
    },
  })

  function scrollToBottom() {
    if (!scrollRef.current) {
      return
    }

    window.requestAnimationFrame(() => {
      if (!scrollRef.current) {
        return
      }

      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    })
  }

  const pageIndex = useMemo(() => {
    const allEntries = getCivilAiPageIndex(i18n)

    if (sitemapRoutes.length === 0) {
      return allEntries
    }

    const routeSet = new Set(sitemapRoutes)
    return allEntries.filter((entry) => routeSet.has(entry.route))
  }, [i18n.resolvedLanguage, sitemapRoutes])

  useEffect(() => {
    let isDisposed = false

    async function loadSitemap() {
      try {
        const response = await fetch('/sitemap.xml', { cache: 'no-store' })

        if (!response.ok) {
          return
        }

        const xml = await response.text()
        const routes = parseSitemapRoutes(xml)

        if (!isDisposed && routes.length > 0) {
          setSitemapRoutes(routes)
        }
      } catch (error) {
        console.error(error)
      }
    }

    loadSitemap()

    return () => {
      isDisposed = true
    }
  }, [])

  useEffect(() => {
    if (!isOpen || messages.length > 0) {
      return
    }

    setMessages([createMessage('assistant', content.welcome)])
  }, [content.welcome, isOpen, messages.length])

  useEffect(() => {
    scrollToBottom()
  }, [messages, isOpen, isSending, retrievalStatus.phase, retrievalStatus.routeTitles.length])

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    window.localStorage.setItem(CIVIL_AI_STORAGE_KEY, JSON.stringify(messages))
  }, [messages])

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    window.localStorage.setItem(CIVIL_AI_OPEN_STATE_KEY, String(isOpen))
  }, [isOpen])

  async function handleSubmit(event) {
    event.preventDefault()

    const trimmedInput = input.trim()

    if (!trimmedInput || isSending) {
      return
    }

    const userMessage = createMessage('user', trimmedInput)
    const nextMessages = [...messages, userMessage]

    setMessages(nextMessages)
    setInput('')

    if (!hasCivilAiConfig()) {
      setMessages([...nextMessages, createMessage('assistant', content.unconfigured)])
      return
    }

    setIsSending(true)
    setRetrievalStatus({ phase: 'searching', routeTitles: [] })

    try {
      const memoryReply = getMemoryRecallReply(trimmedInput, nextMessages, content)

      if (memoryReply) {
        const assistantMessage = createMessage('assistant', memoryReply)
        setMessages((currentMessages) => [...currentMessages, assistantMessage])
        setAnimatedMessageIds((currentIds) => [...currentIds, assistantMessage.id])
        return
      }

      const relevantRoutes = await selectRelevantRoutes(trimmedInput, pageIndex, nextMessages)
      const routeTitles = getRouteTitles(relevantRoutes, pageIndex)

      if (routeTitles.length > 0) {
        setRetrievalStatus({ phase: 'reviewing', routeTitles })
      }

      const relevantKnowledge = getCivilAiKnowledge(i18n, relevantRoutes)
      const response = await fetch(
        `${civilAiConfig.baseUrl}/deployments/${civilAiConfig.model}/chat/completions?api-version=${civilAiConfig.apiVersion}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'api-key': civilAiConfig.apiKey,
          },
          body: JSON.stringify({
            messages: buildAnswerRequestMessages(nextMessages, relevantKnowledge),
            temperature: 0.25,
          }),
        },
      )

      if (!response.ok) {
        throw new Error(`Civil AI request failed with ${response.status}`)
      }

      const payload = await response.json()
      const reply = normalizeAssistantReply(extractAssistantReply(payload)) || content.error
      const assistantMessage = createMessage('assistant', reply)

      setMessages((currentMessages) => [...currentMessages, assistantMessage])
      setAnimatedMessageIds((currentIds) => [...currentIds, assistantMessage.id])
    } catch (error) {
      console.error(error)
      const assistantMessage = createMessage('assistant', content.error)
      setMessages((currentMessages) => [...currentMessages, assistantMessage])
      setAnimatedMessageIds((currentIds) => [...currentIds, assistantMessage.id])
    } finally {
      setRetrievalStatus({ phase: 'idle', routeTitles: [] })
      setIsSending(false)
    }
  }

  return (
    <>
      {!isOpen ? (
        <button
          type="button"
          className="civil-ai-launcher"
          aria-label={content.openLabel}
          onClick={() => setIsOpen(true)}
        >
          <img src={civilAiImage} alt="" className="civil-ai-launcher__image" />
        </button>
      ) : null}

      <section className={`civil-ai-panel${isOpen ? ' is-open' : ''}`} aria-label="Civil AI chat">
        <header className="civil-ai-panel__header">
          <div className="civil-ai-panel__brand">
            <img src={civilAiImage} alt="" className="civil-ai-panel__logo" />
            <div>
              <p className="civil-ai-panel__kicker">{content.kicker}</p>
              <h2 className="civil-ai-panel__title">{content.title}</h2>
              <p className="civil-ai-panel__subtitle">{content.subtitle}</p>
            </div>
          </div>
          <button
            type="button"
            className="civil-ai-panel__close"
            aria-label={content.closeLabel}
            onClick={() => setIsOpen(false)}
          >
            <span aria-hidden="true">×</span>
          </button>
        </header>

        <div ref={scrollRef} className="civil-ai-panel__messages">
          {messages.map((message) => (
            <article key={message.id} className={`civil-ai-message civil-ai-message--${message.role}`}>
              <div className="civil-ai-message__copy">
                <CivilAiMessageContent
                  content={message.content}
                  animate={message.role === 'assistant' && animatedMessageIds.includes(message.id)}
                  scrollContainerRef={scrollRef}
                  onAnimationComplete={() => {
                    setAnimatedMessageIds((currentIds) =>
                      currentIds.filter((currentId) => currentId !== message.id),
                    )
                  }}
                />
              </div>
            </article>
          ))}
          {isSending ? (
            <article className="civil-ai-message civil-ai-message--assistant civil-ai-message--status">
              <div className="civil-ai-message__copy">{content.thinking}</div>
            </article>
          ) : null}
          {retrievalStatus.phase !== 'idle' ? (
            <article className="civil-ai-message civil-ai-message--assistant civil-ai-message--status civil-ai-message--searching">
              <div className="civil-ai-message__copy">
                <p className="civil-ai-message__status-label">
                  {retrievalStatus.phase === 'searching'
                    ? content.searching
                    : content.reviewing.replace(
                        '{{pages}}',
                        formatRoutePreview(retrievalStatus.routeTitles),
                      )}
                </p>
              </div>
            </article>
          ) : null}
        </div>

        <form className="civil-ai-panel__composer" onSubmit={handleSubmit}>
          <div className="civil-ai-panel__input-wrap">
            <textarea
              className="civil-ai-panel__input"
              value={input}
              onChange={(event) => setInput(event.target.value.slice(0, MAX_INPUT_LENGTH))}
              onKeyDown={handleKeyDown}
              placeholder={content.placeholder}
              rows={3}
              maxLength={MAX_INPUT_LENGTH}
            />
            <p className="civil-ai-panel__count">
              {content.characterCount.replace('{{count}}', String(input.length))}
            </p>
          </div>
          <button type="submit" className="civil-ai-panel__send" disabled={isSending || !input.trim()}>
            <span aria-hidden="true">↑</span>
            <span className="civil-ai-panel__send-label">{content.send}</span>
          </button>
        </form>
      </section>
    </>
  )
}

function CivilAiMessageContent({ content, animate, onAnimationComplete, scrollContainerRef }) {
  const blocks = useMemo(() => splitMessageBlocks(content), [content])
  const totalTextLength = useMemo(() => getAnimatedTextLength(blocks), [blocks])
  const [visibleChars, setVisibleChars] = useState(animate ? 0 : totalTextLength)

  useEffect(() => {
    if (!scrollContainerRef?.current) {
      return
    }

    const frameId = window.requestAnimationFrame(() => {
      if (!scrollContainerRef.current) {
        return
      }

      scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight
    })

    return () => window.cancelAnimationFrame(frameId)
  }, [scrollContainerRef, visibleChars])

  useEffect(() => {
    if (!animate) {
      setVisibleChars(totalTextLength)
      return
    }

    setVisibleChars(0)

    const intervalId = window.setInterval(() => {
      setVisibleChars((currentValue) => {
        if (currentValue >= totalTextLength) {
          window.clearInterval(intervalId)
          onAnimationComplete?.()
          return totalTextLength
        }

        return Math.min(totalTextLength, currentValue + 3)
      })
    }, TYPING_INTERVAL_MS)

    return () => window.clearInterval(intervalId)
  }, [animate, onAnimationComplete, totalTextLength])

  const state = { remaining: visibleChars }

  return blocks.map((block, index) => {
    if (block.type === 'list') {
      return (
        <ul key={`list-${index}`} className="civil-ai-message__list">
          {block.items.map((item, itemIndex) => (
            <li key={`item-${itemIndex}`} className="civil-ai-message__list-item">
              {renderInlineTokens(tokenizeInlineContent(item), state)}
            </li>
          ))}
        </ul>
      )
    }

    return (
      <p key={`paragraph-${index}`} className="civil-ai-message__paragraph">
        {renderInlineTokens(tokenizeInlineContent(block.content), state)}
      </p>
    )
  })
}

function handleKeyDown(event) {
  if (event.key !== 'Enter' || event.shiftKey) {
    return
  }

  event.preventDefault()
  event.currentTarget.form?.requestSubmit()
}

function buildAnswerRequestMessages(messages, knowledgeBase) {
  const recentMessages = getRecentConversationMessages(messages)
  const recentConversationSummary = recentMessages
    .map((message) => `- ${message.role}: ${message.content}`)
    .join('\n')

  return [
    {
      role: 'system',
      content: `${civilAiInstructions.trim()}\n\nConversation continuity rules:\n- The recent conversation window below is part of the usable context.\n- If the user refers to a previous question, answer, person, policy, or topic from that recent chat window, resolve that reference before answering.\n- If the user asks what they just asked or what you just said, answer directly from the recent chat window.\n\nAuthority rules:\n- Answer in a direct CCC voice, not as a narrator of retrieved documents.\n- Do not write phrases like "CCC says", "the page says", "the site says", or "according to the platform" unless the user asks for sources.\n- Give the conclusion first in plain declarative language.\n- Add links only when they materially help.\n\nRecent conversation window:\n${recentConversationSummary || '- None'}\n\nRelevant CCC pages:\n${knowledgeBase}`,
    },
    ...recentMessages.map((message) => ({ role: message.role, content: message.content })),
  ]
}

function getRecentConversationMessages(messages) {
  return messages
    .filter((message) => message.role === 'user' || message.role === 'assistant')
    .slice(-MAX_CONTEXT_MESSAGES)
}

async function selectRelevantRoutes(question, pageIndex, messages) {
  if (!hasCivilAiConfig() || pageIndex.length === 0) {
    return []
  }

  const recentMessages = getRecentConversationMessages(messages)
  const conversationContext = recentMessages
    .map((message) => `${message.role}: ${message.content}`)
    .join('\n')

  try {
    const response = await fetch(
      `${civilAiConfig.baseUrl}/deployments/${civilAiConfig.model}/chat/completions?api-version=${civilAiConfig.apiVersion}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-key': civilAiConfig.apiKey,
        },
        body: JSON.stringify({
          messages: [
            {
              role: 'system',
              content:
                'You select the most relevant routes from the provided CCC sitemap route catalog for answering a user question. Return strict JSON only in the shape {"routes":["/route"]}. Use up to 6 routes. Only return routes that exist in the catalog.',
            },
            {
              role: 'user',
              content: `Question: ${question}\n\nRecent conversation:\n${conversationContext || 'None'}\n\nRoute catalog:\n${pageIndex.map((entry) => `- ${entry.route} | ${entry.title} | ${entry.summary} | Keywords: ${(entry.keywords || []).join(', ')} | Facts: ${entry.facts.slice(0, 3).join(' ')}`).join('\n')}`,
            },
          ],
          temperature: 0,
        }),
      },
    )

    if (!response.ok) {
      throw new Error(`Civil AI route selection failed with ${response.status}`)
    }

    const payload = await response.json()
    const reply = extractAssistantReply(payload)
    const selectedRoutes = parseRouteSelection(reply, pageIndex.map((entry) => entry.route))

    if (selectedRoutes.length > 0) {
      return selectedRoutes
    }
  } catch (error) {
    console.error(error)
  }

  return keywordRouteSelection(question, pageIndex)
}

function extractAssistantReply(payload) {
  const content = payload?.choices?.[0]?.message?.content

  if (typeof content === 'string') {
    return content.trim()
  }

  if (Array.isArray(content)) {
    return content
      .map((item) => item?.text || item?.content || '')
      .join(' ')
      .trim()
  }

  return ''
}

function parseRouteSelection(reply, allowedRoutes) {
  if (!reply) {
    return []
  }

  const routeSet = new Set(allowedRoutes)
  const jsonMatch = reply.match(/\{[\s\S]*\}/)
  const candidate = jsonMatch ? jsonMatch[0] : reply

  try {
    const parsed = JSON.parse(candidate)
    const routes = Array.isArray(parsed.routes) ? parsed.routes : []
    return routes.filter((route) => routeSet.has(route)).slice(0, 6)
  } catch {
    return []
  }
}

function keywordRouteSelection(question, pageIndex) {
  const normalizedQuestion = normalizeSearchText(question)
  const terms = normalizedQuestion.split(' ').filter(Boolean)

  return pageIndex
    .map((entry) => {
      const title = normalizeSearchText(entry.title)
      const summary = normalizeSearchText(entry.summary)
      const facts = normalizeSearchText(entry.facts.join(' '))
      const keywords = normalizeSearchText((entry.keywords || []).join(' '))
      const route = normalizeSearchText(entry.route)
      const score = terms.reduce((total, term) => {
        let nextTotal = total

        if (title.includes(term)) {
          nextTotal += 4
        }

        if (keywords.includes(term)) {
          nextTotal += 5
        }

        if (summary.includes(term)) {
          nextTotal += 3
        }

        if (facts.includes(term)) {
          nextTotal += 2
        }

        if (route.includes(term)) {
          nextTotal += 2
        }

        return nextTotal
      }, 0)

      return { route: entry.route, score }
    })
    .filter((entry) => entry.score > 0)
    .sort((left, right) => right.score - left.score)
    .slice(0, 6)
    .map((entry) => entry.route)
}

function normalizeAssistantReply(reply) {
  if (!reply) {
    return ''
  }

  return reply
    .replace(/^CCC['’]s [^.\n]+ position says\s+/i, '')
    .replace(/^CCC['’]s [^.\n]+ policy says\s+/i, '')
    .replace(/^The page says\s+/i, '')
    .replace(/^According to (?:the )?(?:page|platform|site),?\s+/i, '')
    .replace(/\n\n?Relevant page:\s*\n?/gi, '\n\n')
    .replace(/\n\n?Relevant pages:\s*\n?/gi, '\n\n')
    .replace(/(?:^|\n)-\s+\*\*([^*]+)\*\*:\s+`([^`]+)`/g, '\n- [$1]($2)')
    .replace(/(?:^|\n)\*\*([^*]+)\*\*:\s+`([^`]+)`/g, '\n- [$1]($2)')
    .trim()
}

function getMemoryRecallReply(question, messages, content) {
  const normalizedQuestion = normalizeSearchText(question).trim()
  const recentMessages = getRecentConversationMessages(messages)

  if (isPreviousUserQuestionRequest(normalizedQuestion)) {
    const previousUserMessage = [...recentMessages]
      .slice(0, -1)
      .reverse()
      .find((message) => message.role === 'user')

    if (!previousUserMessage) {
      return content.noRecentMessage
    }

    return content.youJustAsked.replace('{{message}}', previousUserMessage.content)
  }

  if (isPreviousAssistantAnswerRequest(normalizedQuestion)) {
    const previousAssistantMessage = [...recentMessages]
      .slice(0, -1)
      .reverse()
      .find((message) => message.role === 'assistant')

    if (!previousAssistantMessage) {
      return content.noRecentMessage
    }

    return content.iJustSaid.replace('{{message}}', previousAssistantMessage.content)
  }

  return ''
}

function isPreviousUserQuestionRequest(question) {
  return [
    'what did i just ask',
    'what was my last question',
    'what did i ask',
    'what was the last thing i asked',
    'qu est ce que je viens de demander',
    'quelle etait ma derniere question',
    'qu ai je demande',
  ].some((pattern) => question.includes(pattern))
}

function isPreviousAssistantAnswerRequest(question) {
  return [
    'what did you just say',
    'what was your last answer',
    'what did you say',
    'what was the last thing you said',
    'qu est ce que tu viens de dire',
    'quelle etait ta derniere reponse',
    'qu as tu dit',
  ].some((pattern) => question.includes(pattern))
}

function parseSitemapRoutes(xmlText) {
  const matches = [...xmlText.matchAll(/<loc>([^<]+)<\/loc>/g)]

  return matches
    .map((match) => {
      try {
        return new URL(match[1]).pathname
      } catch {
        return ''
      }
    })
    .filter(Boolean)
}

function splitMessageBlocks(content) {
  const lines = content.replace(/\r/g, '').split('\n')
  const blocks = []
  let paragraphLines = []
  let listItems = []

  const flushParagraph = () => {
    if (paragraphLines.length > 0) {
      blocks.push({ type: 'paragraph', content: paragraphLines.join(' ').trim() })
      paragraphLines = []
    }
  }

  const flushList = () => {
    if (listItems.length > 0) {
      blocks.push({ type: 'list', items: [...listItems] })
      listItems = []
    }
  }

  for (const rawLine of lines) {
    const line = rawLine.trim()

    if (!line) {
      flushParagraph()
      flushList()
      continue
    }

    const bulletMatch = line.match(/^[-*]\s+(.*)$/)

    if (bulletMatch) {
      flushParagraph()
      listItems.push(bulletMatch[1].trim())
      continue
    }

    flushList()
    paragraphLines.push(line)
  }

  flushParagraph()
  flushList()

  return blocks
}

function tokenizeInlineContent(text) {
  const tokens = []
  const pattern = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^\)]+\)|`[^`]+`)/g
  let lastIndex = 0
  let match

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      tokens.push({ type: 'text', text: text.slice(lastIndex, match.index) })
    }

    const token = match[0]

    if (token.startsWith('**') && token.endsWith('**')) {
      tokens.push({ type: 'strong', text: token.slice(2, -2) })
    } else if (token.startsWith('[')) {
      const linkMatch = token.match(/^\[([^\]]+)\]\(([^\)]+)\)$/)
      if (linkMatch) {
        tokens.push({ type: 'link', text: linkMatch[1], href: linkMatch[2] })
      }
    } else if (token.startsWith('`') && token.endsWith('`')) {
      tokens.push({ type: 'code', text: token.slice(1, -1) })
    }

    lastIndex = match.index + token.length
  }

  if (lastIndex < text.length) {
    tokens.push({ type: 'text', text: text.slice(lastIndex) })
  }

  return tokens
}

function getAnimatedTextLength(blocks) {
  return blocks.reduce((total, block) => {
    const texts = block.type === 'list' ? block.items : [block.content]

    return (
      total +
      texts.reduce(
        (blockTotal, text) =>
          blockTotal +
          tokenizeInlineContent(text).reduce(
            (tokenTotal, token) => tokenTotal + (token.type === 'link' ? 0 : token.text.length),
            0,
          ),
        0,
      )
    )
  }, 0)
}

function renderInlineTokens(tokens, state) {
  return tokens.map((token, index) => {
    if (token.type === 'link') {
      return (
        <a
          key={`token-${index}`}
          className="civil-ai-message__link"
          href={token.href}
          target={token.href.startsWith('http') ? '_blank' : undefined}
          rel={token.href.startsWith('http') ? 'noreferrer' : undefined}
        >
          {token.text}
        </a>
      )
    }

    const visibleText = takeAnimatedText(token.text, state)

    if (!visibleText) {
      return null
    }

    if (token.type === 'strong') {
      return <strong key={`token-${index}`}>{visibleText}</strong>
    }

    if (token.type === 'code') {
      return <code key={`token-${index}`}>{visibleText}</code>
    }

    return <span key={`token-${index}`}>{visibleText}</span>
  })
}

function takeAnimatedText(text, state) {
  if (state.remaining <= 0) {
    return ''
  }

  if (state.remaining >= text.length) {
    state.remaining -= text.length
    return text
  }

  const partialText = text.slice(0, state.remaining)
  state.remaining = 0
  return partialText
}

function normalizeSearchText(text) {
  return text.toLowerCase().replace(/[^a-z0-9\s/]+/g, ' ')
}

function getRouteTitles(routes, pageIndex) {
  const pageMap = new Map(pageIndex.map((entry) => [entry.route, entry.title]))

  return routes.map((route) => pageMap.get(route)).filter(Boolean)
}

function formatRoutePreview(routeTitles) {
  if (routeTitles.length <= 3) {
    return routeTitles.join(', ')
  }

  return `${routeTitles.slice(0, 3).join(', ')} +${routeTitles.length - 3}`
}