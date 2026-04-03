import { localizeByLanguage } from '../lib/locale'

function enhanceEntries(entries, metadata) {
  return entries.map((entry) => {
    const routeMetadata = metadata[entry.route]

    if (!routeMetadata) {
      return entry
    }

    return {
      ...entry,
      keywords: [...(entry.keywords || []), ...(routeMetadata.keywords || [])],
      facts: [...entry.facts, ...(routeMetadata.extraFacts || [])],
    }
  })
}

const routeMetadataByLanguage = {
  en: {
    '/': {
      keywords: ['movement', 'participation', 'future', 'citizen', 'responsibility', 'constructive politics'],
      extraFacts: [
        'The homepage rejects passive spectatorship and asks people to help shape civic outcomes.',
        'Its framing is future-facing, practical, and built around contribution rather than grievance.',
      ],
    },
    '/about/founding-principles': {
      keywords: ['principles', 'civic responsibility', 'transparency', 'accountability', 'participation'],
      extraFacts: [
        'The founding principles emphasize practical civic duty instead of performative politics.',
        'They position transparency and participation as structural features, not campaign slogans.',
      ],
    },
    '/about/leadership': {
      keywords: ['leadership', 'chairman', 'founder', 'candidates', 'electoral district association'],
      extraFacts: [
        'Leadership is presented as both current direction and an open invitation to future candidates.',
        'The page ties leadership growth to district-level organization and local participation.',
      ],
    },
    '/about/leadership/andy-normore': {
      keywords: ['Andrew Normore', 'founder', 'chairman', 'software', 'AI', 'systems', 'armed forces'],
      extraFacts: [
        'The page presents Andrew Normore as a builder of systems, not only a public-facing political figure.',
        'It emphasizes an intersection of civic vision, software architecture, automation, and organizational design.',
      ],
    },
    '/about/leadership/andy-normore/humans-in-the-singularity': {
      keywords: ['book', 'Humans in the Singularity', 'foreword', 'AI transition', 'future of humanity'],
      extraFacts: [
        'The book page positions the work as a guide to navigating civilizational transition rather than a narrow tech manual.',
        'It links intellectual framing to the broader Civil system vision.',
      ],
    },
    '/become-a-civil-citizen': {
      keywords: ['join', 'membership', 'sign up', 'become a member', 'participation'],
      extraFacts: [
        'The route is meant for action, not just reading, and points people toward structured involvement.',
        'Membership is framed as practical participation inside a larger civic system.',
      ],
    },
    '/platform': {
      keywords: ['platform', 'policy', 'economy', 'governance', 'implementation', 'immigration', 'agriculture', 'energy', 'defense', 'family'],
      extraFacts: [
        'The platform overview acts as the policy map for the site.',
        'It groups policy into a coherent systems view rather than isolated promises.',
      ],
    },
    '/platform/implementation/roadmap': {
      keywords: ['roadmap', 'phase 1', 'phase 2', 'district activation', 'governance deployment', 'political integration', 'national scale'],
      extraFacts: [
        'The roadmap is organized into five phases running from foundation build-out to national scale.',
        'It frames the transition as moving from low-participation closed systems toward transparent citizen-driven governance.',
      ],
    },
    '/platform/implementation/restoring-power-to-citizens': {
      keywords: ['riding', 'citizen power', 'district', 'EDA', 'local participation', 'candidate selection', 'transparent voting'],
      extraFacts: [
        'The page argues that local political power has been trapped inside small closed EDA structures.',
        'It proposes Chambers of Citizens, open proposals, transparent funding, merit-based candidate selection, and continuous accountability at the riding level.',
      ],
    },
    '/platform/implementation/chambers-of-citizens': {
      keywords: ['chambers of citizens', 'district infrastructure', 'riding', 'members', 'contributors', 'coordinators', 'local governance'],
      extraFacts: [
        'The page defines Chambers of Citizens as the official Civil Citizens organization within each federal riding.',
        'It presents Chambers as structured digital assemblies with members, contributors, coordinators, proposals, voting, funding, and execution loops.',
      ],
    },
    '/platform/implementation/candidate-selection': {
      keywords: ['candidate selection', 'nomination', 'merit-based selection', 'candidate profiles', 'community voting', 'open pathway'],
      extraFacts: [
        'The page rejects closed nomination contests in favor of continuous, transparent candidate development inside each riding.',
        'It emphasizes open access, contribution-based evaluation, visible candidate profiles, community voting, and accountability before election.',
      ],
    },
    '/platform/implementation/civil-wallet': {
      keywords: ['civil wallet', 'funding model', 'transparent funding', 'member-controlled funds', 'micro-fee', 'digital wallet'],
      extraFacts: [
        'The page presents Civil Wallet as a transparent, citizen-controlled funding system for each Civil Chamber.',
        'It emphasizes visible funds, vote-based allocations, micro-fee sustainability, secure infrastructure, and user data control.',
      ],
    },
    '/platform/implementation/member-growth': {
      keywords: ['member growth', 'participation growth', 'onboarding', 'network effects', 'active members', 'critical mass'],
      extraFacts: [
        'The page presents member growth as continuous, local, utility-driven participation rather than campaign-only recruitment.',
        'It emphasizes frictionless onboarding, local relevance, everyday utility, referral loops, and a target of 1,000 active members per riding.',
      ],
    },
    '/platform/implementation/mp-accountability': {
      keywords: ['mp accountability', 'member of parliament accountability', 'citizen feedback', 'public activity reporting', 'confidence signals'],
      extraFacts: [
        'The page presents continuous, citizen-driven accountability for elected representatives within each riding.',
        'It emphasizes public reporting, open communication, issue escalation, feedback loops, and measurable support signals.',
      ],
    },
    '/platform/implementation/trust-safety': {
      keywords: ['trust system', 'verification', 'human verification', 'gold maple leaf', 'community validation', 'bot prevention'],
      extraFacts: [
        'The page presents a layered human verification model that avoids centralized identity control while increasing trust over time.',
        'It emphasizes verification levels, community validation, minimal data collection, and the Gold Maple Leaf as the highest-trust designation.',
      ],
    },
    '/platform/implementation/digital-governance': {
      keywords: ['digital governance', 'digital democracy', 'proposal engine', 'voting system', 'budget transparency', 'identity verification'],
      extraFacts: [
        'The page frames digital governance as a way to extend democratic participation beyond infrequent elections.',
        'It emphasizes proposal submission, secure voting, budget transparency, identity verification, and continuous feedback loops.',
      ],
    },
    '/platform/economic-foundation': {
      keywords: ['tax', 'income', 'small business', 'earned income', 'economic growth', 'reinvestment', 'cost of living'],
      extraFacts: [
        'The page argues that work should clearly outperform dependency and bureaucratic drag.',
        'Its tax reform position is centered on simplification, visibility, and rewarding production.',
        'It supports stronger conditions for small business formation, expansion, and reinvestment inside Canada.',
      ],
    },
    '/platform/technology-ai': {
      keywords: ['AI', 'automation', 'technology', 'innovation', 'workers', 'standards', 'national policy'],
      extraFacts: [
        'The page treats AI governance as a national systems issue instead of a narrow private-sector trend.',
        'It stresses that citizens and workers should benefit from automation gains.',
        'It frames innovation as legitimate only when it remains accountable to the public interest.',
      ],
    },
    '/platform/governance': {
      keywords: ['governance', 'chambers of citizens', 'district', 'identity', 'participation', 'voting'],
      extraFacts: [
        'The governance model is built around persistent participation rather than occasional election engagement.',
        'It emphasizes district-based civic structure, verified identity, and accountable public input.',
        'The page treats legitimacy as something strengthened by ongoing citizen involvement.',
      ],
    },
    '/platform/immigration': {
      keywords: ['immigration', 'housing capacity', 'integration', 'temporary pause', 'stabilization', 'border enforcement'],
      extraFacts: [
        'The page links immigration levels directly to housing, jobs, and infrastructure capacity.',
        'It argues that restoring system balance is required before renewed growth in intake.',
        'It frames lawful enforcement and integration capacity as prerequisites for public trust.',
      ],
    },
    '/platform/agriculture-food': {
      keywords: ['food', 'farming', 'agriculture', 'organic', 'greenhouse', 'domestic production', 'food sovereignty'],
      extraFacts: [
        'The page argues that Canada should treat food supply resilience as a matter of sovereignty.',
        'It supports a transition toward cleaner food production with lower long-term public health costs.',
        'It also supports expanding year-round greenhouse output and modern crop management tools.',
      ],
    },
    '/platform/energy-infrastructure': {
      keywords: ['energy', 'infrastructure', 'pipeline', 'refinery', 'nuclear', 'hydro', 'grid', 'affordability'],
      extraFacts: [
        'The page argues that Canadian resources should first serve Canadian affordability and national strength.',
        'It supports major build-out in transport, refining, grid resilience, and storage.',
        'It treats practical energy abundance as a foundation for productivity and sovereignty.',
      ],
    },
    '/platform/defense-sovereignty': {
      keywords: ['defense', 'sovereignty', 'public safety', 'justice', 'self-defense', 'homelessness', 'readiness'],
      extraFacts: [
        'The page defines sovereignty in domestic as well as military terms.',
        'It combines public order, justice enforcement, recovery systems, and national readiness into one security frame.',
        'It treats chronic disorder and state weakness as sovereignty problems, not isolated local issues.',
      ],
    },
    '/platform/family-society': {
      keywords: ['family', 'housing', 'society', 'speculation', 'community', 'cost of living', 'building homes'],
      extraFacts: [
        'The page treats stable family life as dependent on affordable housing and functioning communities.',
        'It supports faster approvals, more building, and reduced speculative pressure in housing.',
        'It links family security to lower costs and stronger local social conditions.',
      ],
    },
    '/support-ccc': {
      keywords: ['support', 'donate', 'join', 'participate', 'contribute'],
      extraFacts: [
        'Support routes are framed around direct participation and contribution.',
      ],
    },
    '/support-ccc/donate': {
      keywords: ['donate', 'financial support', 'contribution', 'funding'],
      extraFacts: [
        'The donation route is the primary public entry for direct financial support.',
      ],
    },
    '/the-civil-app': {
      keywords: ['Civil app', 'platform', 'civic operating layer', 'participation system', 'governance tool'],
      extraFacts: [
        'The Civil app is described as infrastructure for civic participation rather than a one-off campaign product.',
        'It is presented as a system for coordinating governance, participation, and economic activity together.',
      ],
    },
    '/news-updates': {
      keywords: ['news', 'updates', 'announcements', 'campaign progress'],
      extraFacts: [
        'The route is intended as the public stream for official movement updates.',
      ],
    },
    '/national-discussions': {
      keywords: ['national discussions', 'national priorities', 'public discussion', 'alberta independence', 'housing affordability'],
      extraFacts: [
        'The page presents National Discussions as a public hub for Canadians to shape national priorities through open community discussion.',
        'Its current topics include Alberta Independence, Canadian Energy and Oil, Jobs and Economic Growth, Housing Affordability, Election Integrity, High Speed Rail, Strategic Oil Reserve, East Coast Refinery, The Carbon Tax, Tariffs, Political Floor Crossings, Gun Control and Safety, Covid 19 Immunization Shots, and Government Transparency and Freedom of Information.',
      ],
    },
  },
  fr: {
    '/': {
      keywords: ['mouvement', 'participation', 'avenir', 'citoyen', 'responsabilite', 'politique constructive'],
      extraFacts: [
        'La page d accueil rejette le role de simple spectateur et demande aux gens de contribuer aux resultats civiques.',
        'Son ton est axe sur l avenir, le concret et la contribution plutot que sur le ressentiment.',
      ],
    },
    '/about/founding-principles': {
      keywords: ['principes', 'responsabilite civique', 'transparence', 'responsabilite', 'participation'],
      extraFacts: [
        'Les principes fondateurs mettent l accent sur le devoir civique concret plutot que sur une politique performative.',
        'Ils presentent la transparence et la participation comme des caracteristiques structurelles et non comme des slogans.',
      ],
    },
    '/about/leadership': {
      keywords: ['leadership', 'president', 'fondateur', 'candidats', 'association de district electoral'],
      extraFacts: [
        'Le leadership est presente a la fois comme direction actuelle et comme invitation a de futurs candidats.',
        'La page relie la croissance du leadership a l organisation locale par district.',
      ],
    },
    '/about/leadership/andy-normore': {
      keywords: ['Andrew Normore', 'fondateur', 'president', 'logiciel', 'IA', 'systemes', 'Forces armees'],
      extraFacts: [
        'La page presente Andrew Normore comme un batisseur de systemes et non seulement comme une figure politique publique.',
        'Elle souligne le lien entre vision civique, architecture logicielle, automatisation et conception organisationnelle.',
      ],
    },
    '/about/leadership/andy-normore/humans-in-the-singularity': {
      keywords: ['livre', 'Humans in the Singularity', 'preface', 'transition IA', 'avenir de l humanite'],
      extraFacts: [
        'La page du livre presente l ouvrage comme un guide pour traverser une transition civilisationnelle plutot qu un manuel technique restreint.',
        'Elle relie ce cadre intellectuel a la vision plus large du systeme Civil.',
      ],
    },
    '/become-a-civil-citizen': {
      keywords: ['adhesion', 'rejoindre', 'inscription', 'devenir membre', 'participation'],
      extraFacts: [
        'Cette route est concue pour l action concrete et non pour une simple lecture.',
        'L adhesion y est presentee comme une participation pratique a l interieur d un systeme civique plus vaste.',
      ],
    },
    '/platform': {
      keywords: ['plateforme', 'politique', 'economie', 'gouvernance', 'mise en oeuvre', 'immigration', 'agriculture', 'energie', 'defense', 'famille'],
      extraFacts: [
        'La vue d ensemble de la plateforme agit comme carte politique du site.',
        'Elle regroupe les politiques dans une logique de systeme plutot que comme une liste de promesses isolees.',
      ],
    },
    '/platform/implementation/roadmap': {
      keywords: ['feuille de route', 'phase 1', 'phase 2', 'activation des districts', 'deploiement de la gouvernance', 'integration politique', 'echelle nationale'],
      extraFacts: [
        'La feuille de route est organisee en cinq phases allant de la fondation a l echelle nationale.',
        'Elle presente la transition comme un passage de systemes fermes et peu participatifs vers une gouvernance transparente dirigee par les citoyens.',
      ],
    },
    '/platform/implementation/restoring-power-to-citizens': {
      keywords: ['circonscription', 'pouvoir citoyen', 'district', 'ADE', 'participation locale', 'selection des candidats', 'vote transparent'],
      extraFacts: [
        'La page soutient que le pouvoir politique local est reste enferme dans de petites structures ADE fermees.',
        'Elle propose les Chambres de citoyens, les propositions ouvertes, le financement transparent, la selection par le merite et une responsabilite continue a l echelle de la circonscription.',
      ],
    },
    '/platform/implementation/chambers-of-citizens': {
      keywords: ['chambres de citoyens', 'infrastructure de district', 'circonscription', 'membres', 'contributeurs', 'coordinateurs', 'gouvernance locale'],
      extraFacts: [
        'La page definit les Chambres de citoyens comme l organisation officielle de Civil Citizens dans chaque circonscription federale.',
        'Elle presente les Chambres comme des assemblees numeriques structurees avec membres, contributeurs, coordinateurs, propositions, vote, financement et execution.',
      ],
    },
    '/platform/implementation/candidate-selection': {
      keywords: ['selection des candidats', 'nomination', 'selection par le merite', 'profils candidats', 'vote communautaire', 'parcours ouvert'],
      extraFacts: [
        'La page rejette les concours de nomination fermes au profit d un developpement continu et transparent des candidats dans chaque circonscription.',
        'Elle met l accent sur l acces ouvert, l evaluation par la contribution, les profils visibles, le vote communautaire et la responsabilite avant l election.',
      ],
    },
    '/platform/implementation/civil-wallet': {
      keywords: ['portefeuille civil', 'modele de financement', 'financement transparent', 'fonds controles par les membres', 'microfrais', 'portefeuille numerique'],
      extraFacts: [
        'La page presente le Portefeuille Civil comme un systeme de financement transparent et controle par les citoyens dans chaque Chambre Civil.',
        'Elle met l accent sur la visibilite des fonds, les allocations par vote, les microfrais durables, l infrastructure securisee et le controle des donnees par l utilisateur.',
      ],
    },
    '/platform/implementation/member-growth': {
      keywords: ['croissance des membres', 'croissance de la participation', 'integration', 'effets de reseau', 'membres actifs', 'masse critique'],
      extraFacts: [
        'La page presente la croissance des membres comme une participation continue, locale et utile, plutot qu un recrutement limite aux campagnes.',
        'Elle met l accent sur une integration sans friction, la pertinence locale, l utilite quotidienne, les boucles de recommandation et une cible de 1 000 membres actifs par circonscription.',
      ],
    },
    '/platform/implementation/mp-accountability': {
      keywords: ['responsabilite des deputes', 'responsabilite parlementaire', 'retroaction citoyenne', 'rapports publics d activite', 'signaux de confiance'],
      extraFacts: [
        'La page presente une responsabilite continue, dirigee par les citoyens, pour les representants elus dans chaque circonscription.',
        'Elle met l accent sur les rapports publics, la communication ouverte, l escalade des enjeux, les boucles de retroaction et des signaux mesurables d appui.',
      ],
    },
    '/platform/implementation/trust-safety': {
      keywords: ['systeme de confiance', 'verification', 'verification humaine', 'feuille d erable d or', 'validation communautaire', 'prevention des robots'],
      extraFacts: [
        'La page presente un modele de verification humaine par couches qui evite le controle centralise de l identite tout en augmentant la confiance avec le temps.',
        'Elle met l accent sur des niveaux de verification, la validation communautaire, la collecte minimale de donnees et la Feuille d erable d or comme designation de confiance maximale.',
      ],
    },
    '/platform/implementation/digital-governance': {
      keywords: ['gouvernance numerique', 'democratie numerique', 'moteur de propositions', 'systeme de vote', 'transparence budgetaire', 'verification d identite'],
      extraFacts: [
        'La page presente la gouvernance numerique comme moyen d etendre la participation democratique au-dela des elections peu frequentes.',
        'Elle met l accent sur les propositions, le vote securise, la transparence budgetaire, la verification d identite et les boucles de retroaction continues.',
      ],
    },
    '/platform/economic-foundation': {
      keywords: ['taxe', 'revenu', 'petite entreprise', 'revenu gagne', 'croissance economique', 'reinvestissement', 'cout de la vie'],
      extraFacts: [
        'La page soutient que le travail doit clairement mieux recompenser que la dependance et la lourdeur bureaucratique.',
        'La reforme fiscale y est centree sur la simplicite, la lisibilite et la recompense de la production.',
        'Elle soutient de meilleures conditions pour la creation, l expansion et le reinvestissement des petites entreprises au Canada.',
      ],
    },
    '/platform/technology-ai': {
      keywords: ['IA', 'automatisation', 'technologie', 'innovation', 'travailleurs', 'normes', 'politique nationale'],
      extraFacts: [
        'La page traite la gouvernance de l IA comme un enjeu de systeme national.',
        'Elle insiste pour que les citoyens et les travailleurs beneficient des gains d automatisation.',
        'Elle presente l innovation comme legitime seulement si elle reste responsable envers l interet public.',
      ],
    },
    '/platform/governance': {
      keywords: ['gouvernance', 'chambres de citoyens', 'district', 'identite', 'participation', 'vote'],
      extraFacts: [
        'Le modele de gouvernance repose sur une participation persistante plutot que sur un engagement electoral occasionnel.',
        'Il met l accent sur la structure civique par district, l identite verifiee et la responsabilite publique.',
        'La page traite la legitimite comme quelque chose qui se renforce par l implication continue des citoyens.',
      ],
    },
    '/platform/immigration': {
      keywords: ['immigration', 'capacite de logement', 'integration', 'pause temporaire', 'stabilisation', 'application de la loi'],
      extraFacts: [
        'La page relie directement les niveaux d immigration au logement, aux emplois et a la capacite des infrastructures.',
        'Elle soutient qu un retour a l equilibre du systeme est necessaire avant une reprise de la croissance.',
        'Elle presente l application de la loi et la capacite d integration comme conditions de la confiance publique.',
      ],
    },
    '/platform/agriculture-food': {
      keywords: ['alimentation', 'agriculture', 'fermes', 'biologique', 'serre', 'production nationale', 'souverainete alimentaire'],
      extraFacts: [
        'La page soutient que la resilience de l approvisionnement alimentaire doit etre traitee comme une question de souverainete.',
        'Elle appuie une transition vers une production plus propre avec des couts de sante publique plus faibles a long terme.',
        'Elle soutient aussi l expansion de la production en serre a l annee et des outils modernes de gestion des cultures.',
      ],
    },
    '/platform/energy-infrastructure': {
      keywords: ['energie', 'infrastructures', 'pipeline', 'raffinerie', 'nucleaire', 'hydro', 'reseau', 'abordabilite'],
      extraFacts: [
        'La page soutient que les ressources canadiennes doivent d abord servir l abordabilite et la puissance nationale du Canada.',
        'Elle appuie une grande expansion du transport, du raffinage, de la resilience du reseau et du stockage.',
        'Elle traite l abondance energetique pratique comme base de productivite et de souverainete.',
      ],
    },
    '/platform/defense-sovereignty': {
      keywords: ['defense', 'souverainete', 'securite publique', 'justice', 'legitime defense', 'itinerance', 'preparation'],
      extraFacts: [
        'La page definit la souverainete en termes interieurs aussi bien que militaires.',
        'Elle rassemble ordre public, application de la justice, systemes de retablissement et preparation nationale dans un meme cadre de securite.',
        'Elle considere le desordre chronique et la faiblesse de l Etat comme des problemes de souverainete.',
      ],
    },
    '/platform/family-society': {
      keywords: ['famille', 'logement', 'societe', 'speculation', 'communaute', 'cout de la vie', 'construction'],
      extraFacts: [
        'La page soutient que la stabilite familiale depend d un logement abordable et de communautes fonctionnelles.',
        'Elle appuie des approbations plus rapides, plus de construction et une reduction de la pression speculative.',
        'Elle relie la securite familiale a des couts plus bas et a de meilleures conditions locales.',
      ],
    },
    '/support-ccc': {
      keywords: ['soutien', 'don', 'rejoindre', 'participer', 'contribuer'],
      extraFacts: [
        'Les routes de soutien sont formulees autour de la participation et de la contribution directes.',
      ],
    },
    '/support-ccc/donate': {
      keywords: ['don', 'soutien financier', 'contribution', 'financement'],
      extraFacts: [
        'La route de don est le principal point d entree public pour un soutien financier direct.',
      ],
    },
    '/the-civil-app': {
      keywords: ['application Civil', 'plateforme', 'couche operationnelle civique', 'systeme de participation', 'outil de gouvernance'],
      extraFacts: [
        'L application Civil est decrite comme une infrastructure de participation civique et non comme un simple produit de campagne.',
        'Elle est presentee comme un systeme qui coordonne ensemble gouvernance, participation et activite economique.',
      ],
    },
    '/news-updates': {
      keywords: ['nouvelles', 'mises a jour', 'annonces', 'progres de campagne'],
      extraFacts: [
        'Cette route est destinee a servir de flux public pour les mises a jour officielles du mouvement.',
      ],
    },
    '/national-discussions': {
      keywords: ['discussions nationales', 'priorites nationales', 'discussion publique', 'independance de l Alberta', 'abordabilite du logement'],
      extraFacts: [
        'La page presente les Discussions nationales comme un carrefour public ou les Canadiens peuvent contribuer aux priorites nationales par des discussions communautaires ouvertes.',
        'Les sujets actuels comprennent l independance de l Alberta, l energie et le petrole canadiens, les emplois et la croissance economique, l abordabilite du logement, l integrite electorale, le train a grande vitesse, la reserve strategique de petrole, la raffinerie de la cote Est, la taxe sur le carbone, les tarifs douaniers, les changements de parti en cours de mandat, le controle des armes et la securite, les vaccins de vaccination contre la Covid 19 et la transparence gouvernementale avec l acces a l information.',
      ],
    },
  },
}

export function getCivilAiPageIndex(i18n) {
  const entries = localizeByLanguage(i18n, {
    en: [
      {
        route: '/',
        title: 'Homepage',
        summary: 'CCC presents itself as a constructive movement building an ideal future through participation, work, growth, and transparent systems.',
        facts: [
          'The homepage frames Civil Citizens as constructive and system-building rather than reactive.',
          'A Civil Citizen is described as moving from passive participation to active responsibility.',
          'The homepage emphasizes continuous participation, local involvement, and shaping outcomes instead of only reacting.',
        ],
      },
      {
        route: '/about',
        title: 'About',
        summary: 'The public About area currently centers on Leadership and Founding Principles.',
        facts: ['About currently points users to Leadership and Founding Principles as the main public sections.'],
      },
      {
        route: '/about/founding-principles',
        title: 'Founding Principles',
        summary: 'Founding Principles focuses on civic responsibility, constructive participation, transparency, and system-building.',
        facts: [
          'The page presents the movement as constructive, civic-minded, and oriented around responsibility.',
          'The principles page is written as a set of direct foundational commitments rather than generic branding language.',
        ],
      },
      {
        route: '/about/leadership',
        title: 'Leadership',
        summary: 'Leadership introduces Andrew Normore, federal candidate recruitment, and Electoral District Association participation.',
        facts: [
          'Andrew Normore is presented as Chairman and Founder.',
          'The leadership section includes federal candidate recruitment messaging.',
          'The page also links users toward Electoral District Association exploration.',
        ],
      },
      {
        route: '/about/leadership/andy-normore',
        title: 'Andrew Normore',
        summary: 'Andrew Normore is presented as Chairman and Founder of Civil Citizens and the architect of its core system.',
        facts: [
          'Andrew Normore is described as the founder of Civil Citizens and the architect behind its core system.',
          'He is described as having more than two decades of experience in software development, systems design, and business strategy.',
          'His background includes advanced AI-driven platforms, automation systems, and next-generation marketplaces.',
          'The page states that his background includes service in the Canadian Armed Forces.',
          'The page includes contact details, a Civil profile, an X profile, a full biography presentation, and a book feature.',
        ],
      },
      {
        route: '/about/leadership/andy-normore/humans-in-the-singularity',
        title: 'Humans in the Singularity',
        summary: 'The book page presents the foreword, a compact table of contents, and purchase direction for Humans in the Singularity.',
        facts: [
          'The page frames the book around a historic transition in intelligence, skill, and knowledge.',
          'It includes the foreword and a compact table of contents.',
          'It also includes a purchase path through the Civil platform shop.',
        ],
      },
      {
        route: '/become-a-civil-citizen',
        title: 'Become a Civil Citizen',
        summary: 'This page is the direct entry point for becoming a member and joining through the Civil app.',
        facts: [
          'The page acts as a structured call to action for membership and formal participation.',
          'It connects becoming a Civil Citizen to participation through the Civil app.',
        ],
      },
      {
        route: '/platform',
        title: 'Platform',
        summary: 'The platform overview groups the movement into economic, technological, governance, immigration, agriculture, energy, defense, and family policy areas.',
        facts: ['Platform sections include Economic Foundation, Technology & AI, Governance, Immigration, Agriculture & Food, Energy & Infrastructure, Defense & Sovereignty, and Family & Society.'],
      },
      {
        route: '/platform/economic-foundation',
        title: 'Economic Foundation',
        summary: 'Economic Foundation centers on tax reform, work, growth, productive reinvestment, small business, and an economy that rewards participation.',
        facts: [
          'Economic Foundation includes Make Work Worth It Again, Collapse the Tax Maze, Stop Punishing Earned Income, and No More Stealth Taxes.',
          'It also includes small business growth, Canadian reinvestment, internal economic strength, automation-era protections, family support, and a citizen-centered system.',
        ],
      },
      {
        route: '/platform/technology-ai',
        title: 'Technology & AI',
        summary: 'Technology & AI emphasizes national standards, citizen benefit, worker protection, and accountable innovation.',
        facts: [
          'The page argues that AI and automation should strengthen citizens rather than displace them without a plan.',
          'It emphasizes accountability, citizen protection, and national standards.',
        ],
      },
      {
        route: '/platform/governance',
        title: 'Governance',
        summary: 'Governance emphasizes Chambers of Citizens, local participation, verified identity, and continuous civic input.',
        facts: [
          'The page presents governance as continuous and participatory rather than something only observed during elections.',
          'It emphasizes Chambers of Citizens organized by Electoral District.',
          'It also emphasizes real identity and accountability.',
        ],
      },
      {
        route: '/platform/implementation/roadmap',
        title: 'Roadmap',
        summary: 'The roadmap lays out a five-phase transition from foundation launch to national-scale citizen-powered governance.',
        facts: [
          'Phase 1 covers foundation build and launch of the Civil platform, wallet, chambers framework, and early adopter onboarding.',
          'Later phases cover district activation, governance deployment, political integration, and national scale.',
        ],
      },
      {
        route: '/platform/implementation/restoring-power-to-citizens',
        title: 'Restoring Power to Citizens in Every Riding',
        summary: 'This page focuses on shifting local political control from closed insider structures toward transparent, large-scale citizen participation in every riding.',
        facts: [
          'It identifies weak EDA participation, low transparency, insider control, and election-only engagement as the core local governance problem.',
          'It proposes mass riding-level participation, transparent financial control, open proposals, merit-based candidate selection, and continuous accountability.',
        ],
      },
      {
        route: '/platform/implementation/chambers-of-citizens',
        title: 'Chambers of Citizens',
        summary: 'Chambers of Citizens are presented as the district-level operating infrastructure for local governance, participation, funding, coordination, and representation.',
        facts: [
          'The page defines three functional layers: Members, Contributors, and Coordinators.',
          'It also explains how proposals, voting, funding through the Civil Wallet, and execution work inside each Chamber.',
        ],
      },
      {
        route: '/platform/implementation/candidate-selection',
        title: 'Candidate Selection System',
        summary: 'This page presents a transparent, merit-based, community-driven system for identifying, evaluating, and selecting candidates within each riding.',
        facts: [
          'It rejects closed nomination contests and insider influence in favor of open candidate pathways and contribution-based evaluation.',
          'It includes transparent profiles, community voting, continuous selection, and accountability before election.',
        ],
      },
      {
        route: '/platform/implementation/civil-wallet',
        title: 'Civil Wallet & Funding Model',
        summary: 'This page presents Civil Wallet as a transparent, secure, citizen-controlled funding system for Chamber-level participation and decision-making.',
        facts: [
          'It explains visible funds, public spending proposals, vote-based allocations, and a micro-fee model capped at two dollars for larger transactions.',
          'It also frames the wallet around security, privacy, interoperability, and user control over financial and participation data.',
        ],
      },
      {
        route: '/platform/implementation/member-growth',
        title: 'Member Growth Strategy',
        summary: 'This page presents a strategy for building large, active, and sustained riding-level participation through local relevance, everyday utility, and continuous engagement.',
        facts: [
          'It emphasizes frictionless onboarding, local-first participation, network effects, creator activation, and ongoing engagement loops.',
          'It also identifies a target of more than one thousand active members per riding as the threshold for self-sustaining local governance.',
        ],
      },
      {
        route: '/platform/implementation/mp-accountability',
        title: 'MP Accountability System',
        summary: 'This page presents a continuous accountability system that keeps MPs visible, measurable, and directly connected to their riding between elections.',
        facts: [
          'It includes communication loops, public activity reporting, citizen feedback, support signals, and issue escalation inside each riding.',
          'It also frames Civil as extending accountability from Parliament directly to citizens.',
        ],
      },
      {
        route: '/platform/implementation/trust-safety',
        title: 'Human Verification & Trust System',
        summary: 'This page presents a layered trust and verification system that protects participation integrity without creating centralized identity control.',
        facts: [
          'It defines verification levels from open access through the Gold Maple Leaf highest-trust status.',
          'It also emphasizes community validation, minimal data collection, anti-bot protection, and inclusive participation at different trust levels.',
        ],
      },
      {
        route: '/platform/implementation/digital-governance',
        title: 'Digital Governance System',
        summary: 'This page presents a secure and transparent digital governance model for proposals, voting, budget visibility, identity verification, and continuous citizen feedback.',
        facts: [
          'It frames digital governance as a response to low participation, declining trust, and expectations for modern public interaction.',
          'It emphasizes transparency by default, participation at scale, security, integrity, and citizen control.',
        ],
      },
      {
        route: '/platform/immigration',
        title: 'Immigration',
        summary: 'Immigration emphasizes stabilize first, then grow, with levels tied to housing, jobs, infrastructure, and lawful enforcement.',
        facts: [
          'The page argues for a temporary stabilization phase before resumed growth.',
          'It ties immigration to capacity, integration, labour alignment, and public trust.',
        ],
      },
      {
        route: '/platform/agriculture-food',
        title: 'Agriculture & Food',
        summary: 'Agriculture & Food emphasizes food sovereignty, Canadian labour, clean production, innovation, and domestic-first supply.',
        facts: [
          'The page treats food as national infrastructure.',
          'It emphasizes domestic production, clean organic transition, greenhouse expansion, and innovation in crop management.',
        ],
      },
      {
        route: '/platform/energy-infrastructure',
        title: 'Energy & Infrastructure',
        summary: 'Energy & Infrastructure emphasizes domestic energy sovereignty, major infrastructure build-out, a balanced energy mix, and affordability.',
        facts: [
          'The page prioritizes Canadian energy use for Canadian markets.',
          'It supports pipelines, refineries, grid modernization, storage, and a balanced energy mix including oil and gas, nuclear, hydro, and practical renewables.',
        ],
      },
      {
        route: '/platform/defense-sovereignty',
        title: 'Defense & Sovereignty',
        summary: 'Defense & Sovereignty emphasizes public order, personal security, justice balance, recovery, homelessness intervention, and readiness.',
        facts: [
          'The page connects sovereignty to domestic order, public safety, and functioning systems.',
          'It includes lawful self-defense, stronger justice enforcement, treatment and recovery, ending chronic homelessness, and national readiness.',
        ],
      },
      {
        route: '/platform/family-society',
        title: 'Family & Society',
        summary: 'Family & Society emphasizes housing as national infrastructure, anti-speculation, fast building approvals, lower cost of living, and stronger communities.',
        facts: [
          'The page treats housing as national infrastructure.',
          'It emphasizes building more homes faster, cutting approval delays, reducing speculation, and lowering cost-of-living pressure on families.',
        ],
      },
      {
        route: '/support-ccc',
        title: 'Support CCC',
        summary: 'Support CCC directs users toward donations and participation pathways.',
        facts: ['Support currently points users toward donating and becoming a Civil Citizen.'],
      },
      {
        route: '/support-ccc/donate',
        title: 'Donate',
        summary: 'The donation page is the direct public route for financial support.',
        facts: ['It acts as the main financial contribution page for the movement.'],
      },
      {
        route: '/the-civil-app',
        title: 'The Civil App',
        summary: 'The Civil App is presented as a continuous civic operating layer for participation, governance, and economic coordination.',
        facts: [
          'The Civil app is framed as an operating layer rather than a simple website feature.',
          'It connects participation, governance, and economic coordination in one system.',
        ],
      },
      {
        route: '/national-discussions',
        title: 'National Discussions',
        summary: 'National Discussions is a public hub for shaping national priorities through open and transparent discussion inside Canadian communities.',
        facts: [
          'The current discussion topics include Alberta Independence, Canadian Energy and Oil, Jobs and Economic Growth, Housing Affordability, Election Integrity, High Speed Rail, Strategic Oil Reserve, East Coast Refinery, The Carbon Tax, Tariffs, Political Floor Crossings, Gun Control and Safety, Covid 19 Immunization Shots, and Government Transparency and Freedom of Information.',
          'The page frames discussion as direct civic participation rather than passive commentary.',
        ],
      },
      {
        route: '/news-updates',
        title: 'News & Updates',
        summary: 'News & Updates is the route for public announcements, campaign progress, and published updates.',
        facts: ['The page acts as the public stream for movement updates and announcements.'],
      },
    ],
    fr: [
      {
        route: '/',
        title: 'Accueil',
        summary: 'Le CCC se presente comme un mouvement constructif qui batit un avenir ideal par la participation, le travail, la croissance et des systemes transparents.',
        facts: [
          'La page d accueil presente Citoyens Civils comme un mouvement constructif et axe sur la construction de systemes.',
          'Un citoyen civil est decrit comme quelqu un qui passe d une participation passive a une responsabilite active.',
          'La page d accueil met l accent sur la participation continue, l implication locale et la creation de resultats.',
        ],
      },
      {
        route: '/about',
        title: 'A propos',
        summary: 'La section publique A propos se concentre actuellement sur le leadership et les principes fondateurs.',
        facts: ['La section A propos dirige actuellement vers le leadership et les principes fondateurs comme sections publiques principales.'],
      },
      {
        route: '/about/founding-principles',
        title: 'Principes fondateurs',
        summary: 'Les principes fondateurs mettent l accent sur la responsabilite civique, la participation constructive, la transparence et la construction de systemes.',
        facts: [
          'La page presente le mouvement comme constructif, civique et axe sur la responsabilite.',
          'Elle expose des engagements fondateurs directs plutot qu un langage de marque generique.',
        ],
      },
      {
        route: '/about/leadership',
        title: 'Leadership',
        summary: 'Le leadership presente Andrew Normore, le recrutement de candidats federaux et la participation aux associations de district electoral.',
        facts: [
          'Andrew Normore est presente comme president et fondateur.',
          'La section comprend un message de recrutement de candidats federaux.',
          'La page renvoie aussi vers l exploration des associations de district electoral.',
        ],
      },
      {
        route: '/about/leadership/andy-normore',
        title: 'Andrew Normore',
        summary: 'Andrew Normore est presente comme president et fondateur de Civil Citizens et comme l architecte de son systeme central.',
        facts: [
          'Andrew Normore est decrit comme le fondateur de Civil Citizens et l architecte de son systeme central.',
          'Il est decrit comme ayant plus de vingt ans d experience en developpement logiciel, en conception de systemes et en strategie d affaires.',
          'Son parcours comprend des plateformes avancees alimentees par l IA, des systemes d automatisation et des marches de nouvelle generation.',
          'La page indique que son parcours comprend un service au sein des Forces armees canadiennes.',
          'La page comprend des coordonnees, un profil Civil, un profil X, une biographie complete et une mise en avant du livre.',
        ],
      },
      {
        route: '/about/leadership/andy-normore/humans-in-the-singularity',
        title: 'Humans in the Singularity',
        summary: 'La page du livre presente la preface, une table des matieres compacte et un lien d achat pour Humans in the Singularity.',
        facts: [
          'La page presente le livre comme une reflexion sur une transition historique de l intelligence, de la competence et du savoir.',
          'Elle comprend la preface et une table des matieres compacte.',
          'Elle comprend aussi un lien d achat vers la boutique Civil.',
        ],
      },
      {
        route: '/become-a-civil-citizen',
        title: 'Devenir un citoyen civil',
        summary: 'Cette page est le point d entree direct pour devenir membre et rejoindre le mouvement par l application Civil.',
        facts: [
          'La page sert d appel a l action structure pour l adhesion et la participation formelle.',
          'Elle relie l idee de devenir un citoyen civil a la participation par l application Civil.',
        ],
      },
      {
        route: '/platform',
        title: 'Plateforme',
        summary: 'La page plateforme regroupe les domaines economiques, technologiques, de gouvernance, d immigration, d agriculture, d energie, de defense et de famille.',
        facts: ['La plateforme comprend la fondation economique, la technologie et l IA, la gouvernance, l immigration, l agriculture et l alimentation, l energie et les infrastructures, la defense et la souverainete, puis la famille et la societe.'],
      },
      {
        route: '/platform/economic-foundation',
        title: 'Fondation economique',
        summary: 'La fondation economique se concentre sur la reforme fiscale, le travail, la croissance, le reinvestissement productif, les petites entreprises et une economie qui recompense la participation.',
        facts: [
          'La fondation economique comprend le travail, la simplification fiscale, la fin des taxes furtives et la protection du revenu gagne.',
          'Elle couvre aussi les petites entreprises, le reinvestissement canadien, la force economique interne, les protections a l ere de l automatisation, les familles et un systeme centre sur les citoyens.',
        ],
      },
      {
        route: '/platform/technology-ai',
        title: 'Technologie et IA',
        summary: 'Technologie et IA met l accent sur des normes nationales, le benefice pour les citoyens, la protection des travailleurs et une innovation responsable.',
        facts: [
          'La page soutient que l IA et l automatisation doivent renforcer les citoyens plutot que les deplacer sans plan.',
          'Elle met l accent sur la responsabilite, la protection des citoyens et des normes nationales.',
        ],
      },
      {
        route: '/platform/governance',
        title: 'Gouvernance',
        summary: 'La gouvernance met l accent sur les Chambres de citoyens, la participation locale, l identite verifiee et l apport civique continu.',
        facts: [
          'La page presente la gouvernance comme un processus continu et participatif plutot qu un simple moment electoral.',
          'Elle met l accent sur les Chambres de citoyens organisees par district electoral.',
          'Elle insiste aussi sur l identite reelle et la responsabilite.',
        ],
      },
      {
        route: '/platform/implementation/roadmap',
        title: 'Feuille de route',
        summary: 'La feuille de route presente une transition en cinq phases, du lancement de la base a une gouvernance nationale dirigee par les citoyens.',
        facts: [
          'La phase 1 couvre la fondation, le lancement de la plateforme Civil, le portefeuille, le cadre des chambres et l integration initiale.',
          'Les phases suivantes couvrent l activation des districts, le deploiement de la gouvernance, l integration politique et l echelle nationale.',
        ],
      },
      {
        route: '/platform/implementation/restoring-power-to-citizens',
        title: 'Redonner le pouvoir aux citoyens dans chaque circonscription',
        summary: 'Cette page porte sur le transfert du controle politique local de structures fermees vers une participation citoyenne transparente et a grande echelle dans chaque circonscription.',
        facts: [
          'Elle identifie la faible participation ADE, le manque de transparence, le controle interne et l engagement limite aux elections comme probleme central.',
          'Elle propose une participation de masse au niveau local, un controle financier transparent, des propositions ouvertes, une selection par le merite et une responsabilite continue.',
        ],
      },
      {
        route: '/platform/implementation/chambers-of-citizens',
        title: 'Chambres de citoyens',
        summary: 'Les Chambres de citoyens sont presentees comme l infrastructure de district pour la gouvernance locale, la participation, le financement, la coordination et la representation.',
        facts: [
          'La page definit trois couches fonctionnelles : Membres, Contributeurs et Coordinateurs.',
          'Elle explique aussi le fonctionnement des propositions, du vote, du financement par Portefeuille Civil et de l execution dans chaque Chambre.',
        ],
      },
      {
        route: '/platform/implementation/candidate-selection',
        title: 'Systeme de selection des candidats',
        summary: 'Cette page presente un systeme transparent, fonde sur le merite et dirige par la communaute pour identifier, evaluer et selectionner les candidats dans chaque circonscription.',
        facts: [
          'Elle rejette les concours de nomination fermes et l influence interne au profit de parcours ouverts et d une evaluation par la contribution.',
          'Elle comprend des profils transparents, le vote de la communaute, une selection continue et une responsabilite avant l election.',
        ],
      },
      {
        route: '/platform/implementation/civil-wallet',
        title: 'Portefeuille Civil et modele de financement',
        summary: 'Cette page presente le Portefeuille Civil comme un systeme de financement transparent, securise et controle par les citoyens pour la participation et la prise de decision au niveau des Chambres.',
        facts: [
          'Elle explique la visibilite des fonds, les propositions publiques de depense, les allocations par vote et un modele a microfrais plafonne a deux dollars pour les transactions plus elevees.',
          'Elle encadre aussi le portefeuille autour de la securite, de la vie privee, de l interoperabilite et du controle des donnees financieres et de participation par l utilisateur.',
        ],
      },
      {
        route: '/platform/implementation/member-growth',
        title: 'Strategie de croissance des membres',
        summary: 'Cette page presente une strategie pour construire une participation importante, active et durable a l echelle des circonscriptions par la pertinence locale, l utilite quotidienne et l engagement continu.',
        facts: [
          'Elle met l accent sur une integration sans friction, une participation d abord locale, les effets de reseau, l activation des createurs et des boucles d engagement continu.',
          'Elle fixe aussi une cible de plus de mille membres actifs par circonscription comme seuil d une gouvernance locale autosuffisante.',
        ],
      },
      {
        route: '/platform/implementation/mp-accountability',
        title: 'Systeme de responsabilite des deputes',
        summary: 'Cette page presente un systeme continu de responsabilite qui garde les deputes visibles, mesurables et directement relies a leur circonscription entre les elections.',
        facts: [
          'Elle comprend des boucles de communication, des rapports publics d activite, la retroaction citoyenne, des signaux d appui et l escalade des enjeux dans chaque circonscription.',
          'Elle presente aussi Civil comme une extension de la responsabilite du Parlement directement vers les citoyens.',
        ],
      },
      {
        route: '/platform/implementation/trust-safety',
        title: 'Systeme de verification humaine et de confiance',
        summary: 'Cette page presente un systeme de confiance et de verification par couches qui protege l integrite de la participation sans creer de controle centralise de l identite.',
        facts: [
          'Elle definit des niveaux de verification allant de l acces ouvert jusqu a la Feuille d erable d or comme statut de confiance maximale.',
          'Elle met aussi l accent sur la validation communautaire, la collecte minimale de donnees, la protection contre les robots et une participation inclusive selon plusieurs niveaux de confiance.',
        ],
      },
      {
        route: '/platform/implementation/digital-governance',
        title: 'Systeme de gouvernance numerique',
        summary: 'Cette page presente un modele de gouvernance numerique sur et transparent pour les propositions, le vote, la visibilite budgetaire, la verification d identite et la retroaction continue des citoyens.',
        facts: [
          'Elle presente la gouvernance numerique comme reponse a la faible participation, a la baisse de confiance et aux attentes de modernite publique.',
          'Elle met l accent sur la transparence par defaut, la participation a grande echelle, la securite, l integrite et le controle citoyen.',
        ],
      },
      {
        route: '/platform/immigration',
        title: 'Immigration',
        summary: 'L immigration met l accent sur stabiliser d abord, puis croitre, avec des niveaux lies au logement, aux emplois, aux infrastructures et a l application de la loi.',
        facts: [
          'La page soutient une phase temporaire de stabilisation avant une reprise de la croissance.',
          'Elle relie l immigration a la capacite, a l integration, a l alignement economique et a la confiance publique.',
        ],
      },
      {
        route: '/platform/agriculture-food',
        title: 'Agriculture et alimentation',
        summary: 'Agriculture et alimentation met l accent sur la souverainete alimentaire, la main-d oeuvre canadienne, la production propre, l innovation et l approvisionnement domestique d abord.',
        facts: [
          'La page traite l alimentation comme une infrastructure nationale.',
          'Elle met l accent sur la production nationale, la transition propre et organique, les serres et l innovation agricole.',
        ],
      },
      {
        route: '/platform/energy-infrastructure',
        title: 'Energie et infrastructures',
        summary: 'Energie et infrastructures met l accent sur la souverainete energetique domestique, les grandes infrastructures, un bouquet energetique equilibre et l abordabilite.',
        facts: [
          'La page priorise l usage de l energie canadienne pour les marches canadiens.',
          'Elle soutient les pipelines, les raffineries, la modernisation du reseau, le stockage et un bouquet energetique equilibre.',
        ],
      },
      {
        route: '/platform/defense-sovereignty',
        title: 'Defense et souverainete',
        summary: 'Defense et souverainete met l accent sur l ordre public, la securite personnelle, l equilibre judiciaire, le retablissement, l intervention sur l itinerance et la preparation.',
        facts: [
          'La page relie la souverainete a l ordre interieur, a la securite publique et au bon fonctionnement des systemes.',
          'Elle comprend la legitime defense, une justice plus ferme, le traitement et le retablissement, la reduction de l itinerance chronique et la preparation nationale.',
        ],
      },
      {
        route: '/platform/family-society',
        title: 'Famille et societe',
        summary: 'Famille et societe met l accent sur le logement comme infrastructure nationale, l anti-speculation, des approbations rapides, un cout de la vie plus bas et des communautes plus fortes.',
        facts: [
          'La page traite le logement comme une infrastructure nationale.',
          'Elle met l accent sur la construction acceleree, la reduction des retards, l anti-speculation et la baisse de la pression sur le cout de la vie des familles.',
        ],
      },
      {
        route: '/support-ccc',
        title: 'Soutenir le CCC',
        summary: 'Soutenir le CCC dirige les utilisateurs vers les dons et les voies de participation.',
        facts: ['La section de soutien dirige actuellement vers les dons et l adhesion comme citoyen civil.'],
      },
      {
        route: '/support-ccc/donate',
        title: 'Faire un don',
        summary: 'La page de dons est la route publique directe pour soutenir financierement le mouvement.',
        facts: ['Elle sert de page principale de contribution financiere pour le mouvement.'],
      },
      {
        route: '/the-civil-app',
        title: 'L application Civil',
        summary: 'L application Civil est presentee comme une couche operationnelle civique continue pour la participation, la gouvernance et la coordination economique.',
        facts: [
          'L application Civil est presentee comme une couche operationnelle et non comme une simple fonctionnalite de site.',
          'Elle relie participation, gouvernance et coordination economique dans un seul systeme.',
        ],
      },
      {
        route: '/national-discussions',
        title: 'Discussions nationales',
        summary: 'Les Discussions nationales forment un carrefour public pour orienter les priorites nationales par des discussions ouvertes et transparentes dans les communautes canadiennes.',
        facts: [
          'Les sujets actuels comprennent l independance de l Alberta, l energie et le petrole canadiens, les emplois et la croissance economique, l abordabilite du logement, l integrite electorale, le train a grande vitesse, la reserve strategique de petrole, la raffinerie de la cote Est, la taxe sur le carbone, les tarifs douaniers, les changements de parti en cours de mandat, le controle des armes et la securite, les vaccins de vaccination contre la Covid 19 et la transparence gouvernementale avec l acces a l information.',
          'La page presente la discussion comme une participation civique directe plutot que comme un simple commentaire passif.',
        ],
      },
      {
        route: '/news-updates',
        title: 'Nouvelles et mises a jour',
        summary: 'Nouvelles et mises a jour est la route publique des annonces, du progres de campagne et des mises a jour publiees.',
        facts: ['La page sert de flux public pour les mises a jour et les annonces du mouvement.'],
      },
    ],
  })

  const metadata = localizeByLanguage(i18n, routeMetadataByLanguage)

  return enhanceEntries(entries, metadata)
}

export function getCivilAiKnowledge(i18n, routes) {
  const index = getCivilAiPageIndex(i18n)
  const selectedRoutes = Array.isArray(routes) && routes.length > 0 ? new Set(routes) : null
  const entries = selectedRoutes ? index.filter((entry) => selectedRoutes.has(entry.route)) : index

  return entries
    .map(
      (entry) =>
        `${entry.title}\nRoute: ${entry.route}\n${entry.keywords?.length ? `Keywords: ${entry.keywords.join(', ')}\n` : ''}Summary: ${entry.summary}\nFacts:\n${entry.facts.map((fact) => `- ${fact}`).join('\n')}`,
    )
    .join('\n\n')
}