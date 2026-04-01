import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { localizeByLanguage } from '../lib/locale'

export default function GovernancePage() {
  const { i18n } = useTranslation()
  const content = localizeByLanguage(i18n, {
    en: {
      eyebrow: 'Platform / Governance',
      title: 'Governance Must Be Lived — Not Observed',
      hero: ['For most Canadians, governance happens at a distance.', 'This creates disconnection, frustration, and stagnation.'],
      statement: 'Civil changes that.',
      asideEyebrow: 'The Civil Model',
      asideTitle: 'Governance is continuous, local, and participatory.',
      asideCopy: 'Not once every election. Not limited to institutions. Always active.',
      problemTitle: 'The Problem',
      problemPoints: ['Decisions are made elsewhere', 'Participation is limited to voting', 'Influence is minimal'],
      chambersTitle: 'Chambers of Citizens',
      chambersCopy: 'At the core of Civil governance are Chambers of Citizens, organized by Electoral District.',
      everyCitizen: 'Every Canadian is:',
      chamberPoints: ['Automatically connected to their local district', 'Part of a real, structured community', 'Able to participate in discussions and decisions'],
      creates: 'This creates:',
      createsPoints: ['Local coordination', 'Local accountability', 'Local leadership'],
      shiftTitle: 'From Top-Down → Bottom-Up',
      oldModel: 'Old Model',
      oldLine: 'Government decides Citizens react',
      civilModel: 'Civil Model',
      civilLine: 'Citizens organize Communities coordinate Leadership emerges from participation',
      participationTitle: 'Continuous Participation',
      participationCopy: 'Governance is not an event.',
      participationPoints: ['Discuss local and national issues', 'Organize initiatives', 'Coordinate action in real time', 'Support ideas, leaders, and solutions'],
      participationClosing: 'This is governance as a living system.',
      accountabilityTitle: 'Real Identity, Real Accountability',
      accountabilityPoints: ['Verified identity', 'Real communities', 'Real consequences'],
      accountabilityNote: 'No anonymous influence over real-world outcomes.',
      integrationTitle: 'Integration with the Platform',
      integrationCopy: 'Governance is not separate.',
      connectedTo: 'It is connected to:',
      integrationPoints: ['Community (discussion and organization)', 'Commerce (economic coordination)', 'Careers (leadership and opportunity)'],
      integrationStatement: 'One system. Not fragmented tools.',
      outcomeTitle: 'The Outcome',
      outcomePoints: ['Stronger local representation', 'Faster coordination', 'Higher trust between citizens', 'Leadership based on action, not status'],
      standardTitle: 'The Civil Standard',
      standardOne: 'Governance is not something done to you.',
      standardTwo: 'It is something you participate in.',
      oneLine: 'If you are not participating, you are being governed by those who are.',
      closingCopy: 'Civil does not replace democracy. It completes it.',
      back: 'Back to Platform',
    },
    fr: {
      eyebrow: 'Plateforme / Gouvernance',
      title: 'La gouvernance doit être vécue, non observée',
      hero: ['Pour la plupart des Canadiens, la gouvernance se déroule à distance.', 'Cela crée de la déconnexion, de la frustration et de la stagnation.'],
      statement: 'Civil change cela.',
      asideEyebrow: 'Le modèle Civil',
      asideTitle: 'La gouvernance est continue, locale et participative.',
      asideCopy: 'Pas seulement à chaque élection. Pas limitée aux institutions. Toujours active.',
      problemTitle: 'Le problème',
      problemPoints: ['Les décisions sont prises ailleurs', 'La participation se limite au vote', 'L’influence est minimale'],
      chambersTitle: 'Chambres de citoyens',
      chambersCopy: 'Au cœur de la gouvernance Civil se trouvent les Chambres de citoyens, organisées par district électoral.',
      everyCitizen: 'Chaque Canadien est :',
      chamberPoints: ['Automatiquement relié à son district local', 'Partie d’une communauté réelle et structurée', 'Capable de participer aux discussions et aux décisions'],
      creates: 'Cela crée :',
      createsPoints: ['Coordination locale', 'Responsabilité locale', 'Leadership local'],
      shiftTitle: 'Du haut vers le bas → du bas vers le haut',
      oldModel: 'Ancien modèle',
      oldLine: 'Le gouvernement décide, les citoyens réagissent',
      civilModel: 'Modèle Civil',
      civilLine: 'Les citoyens s’organisent Les communautés coordonnent Le leadership émerge de la participation',
      participationTitle: 'Participation continue',
      participationCopy: 'La gouvernance n’est pas un événement.',
      participationPoints: ['Discuter des enjeux locaux et nationaux', 'Organiser des initiatives', 'Coordonner l’action en temps réel', 'Soutenir des idées, des leaders et des solutions'],
      participationClosing: 'C’est la gouvernance comme système vivant.',
      accountabilityTitle: 'Vraie identité, vraie responsabilité',
      accountabilityPoints: ['Identité vérifiée', 'Communautés réelles', 'Conséquences réelles'],
      accountabilityNote: 'Aucune influence anonyme sur des résultats du monde réel.',
      integrationTitle: 'Intégration à la plateforme',
      integrationCopy: 'La gouvernance n’est pas séparée.',
      connectedTo: 'Elle est reliée à :',
      integrationPoints: ['Communauté (discussion et organisation)', 'Commerce (coordination économique)', 'Carrières (leadership et opportunité)'],
      integrationStatement: 'Un système. Pas des outils fragmentés.',
      outcomeTitle: 'Le résultat',
      outcomePoints: ['Une représentation locale plus forte', 'Une coordination plus rapide', 'Une confiance plus élevée entre citoyens', 'Un leadership fondé sur l’action, non sur le statut'],
      standardTitle: 'La norme Civil',
      standardOne: 'La gouvernance n’est pas quelque chose qu’on vous impose.',
      standardTwo: 'C’est quelque chose auquel vous participez.',
      oneLine: 'Si vous ne participez pas, vous êtes gouverné par ceux qui le font.',
      closingCopy: 'Civil ne remplace pas la démocratie. Il la complète.',
      back: 'Retour à la plateforme',
    },
  })

  return (
    <div className="policy-detail governance-page">
      <section className="policy-detail__panel governance-page__hero">
        <div className="technology-ai-page__hero-grid">
          <div>
            <p className="eyebrow">{content.eyebrow}</p>
            <h1 className="policy-detail__title">{content.title}</h1>
            {content.hero.map((paragraph) => (
              <p key={paragraph} className="policy-detail__summary">{paragraph}</p>
            ))}
            <p className="technology-ai-page__card-line governance-page__card-line--statement">
              {content.statement}
            </p>
          </div>

          <aside className="policy-aside technology-ai-page__aside">
            <p className="policy-aside__eyebrow">{content.asideEyebrow}</p>
            <h2 className="policy-aside__title">{content.asideTitle}</h2>
            <p className="policy-aside__copy">{content.asideCopy}</p>
          </aside>
        </div>
      </section>

      <section className="policy-foundation governance-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">{content.problemTitle}</h2>
          </div>
        </div>
        <div className="policy-grid governance-page__grid governance-page__grid--three">
          {content.problemPoints.map((point) => (
            <article key={point} className="policy-card technology-ai-page__card technology-ai-page__card--tight">
              <p className="technology-ai-page__card-line">{point}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="policy-foundation governance-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">{content.chambersTitle}</h2>
          </div>
          <p className="section-copy">{content.chambersCopy}</p>
        </div>
        <div className="technology-ai-page__split-grid">
          <div className="technology-ai-page__panel">
            <p className="policy-detail__summary">{content.everyCitizen}</p>
            <div className="founding-principles-page__list technology-ai-page__list">
              {content.chamberPoints.map((point) => (
                <p key={point} className="policy-card__description founding-principles-page__item">
                  {point}
                </p>
              ))}
            </div>
          </div>

          <div className="technology-ai-page__panel technology-ai-page__panel--accent">
            <h3 className="technology-ai-page__subhead">{content.creates}</h3>
            <div className="founding-principles-page__list technology-ai-page__list">
              {content.createsPoints.map((point) => (
                <p key={point} className="policy-card__description founding-principles-page__item">
                  {point}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="policy-foundation governance-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">{content.shiftTitle}</h2>
          </div>
        </div>
        <div className="economic-detail__shift-grid">
          <article className="economic-detail__shift-card">
            <p className="economic-detail__shift-label">{content.oldModel}</p>
            <p className="economic-detail__shift-line">{content.oldLine}</p>
          </article>
          <article className="economic-detail__shift-card economic-detail__shift-card--to">
            <p className="economic-detail__shift-label">{content.civilModel}</p>
            <p className="economic-detail__shift-line">{content.civilLine}</p>
          </article>
        </div>
      </section>

      <section className="policy-foundation governance-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">{content.participationTitle}</h2>
          </div>
          <p className="section-copy">{content.participationCopy}</p>
        </div>
        <div className="policy-grid governance-page__grid">
          {content.participationPoints.map((point, index) => (
            <article key={point} className="policy-card technology-ai-page__card">
              <p className="policy-card__number">{index + 1}</p>
              <p className="policy-card__description technology-ai-page__card-copy">{point}</p>
            </article>
          ))}
        </div>
        <div className="technology-ai-page__panel governance-page__full-panel">
          <p className="policy-detail__summary">{content.participationClosing}</p>
        </div>
      </section>

      <section className="policy-foundation governance-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">{content.accountabilityTitle}</h2>
          </div>
        </div>
        <div className="policy-aside__list technology-ai-page__outcomes" aria-label="Governance accountability">
          {content.accountabilityPoints.map((point) => (
            <span key={point}>{point}</span>
          ))}
        </div>
        <p className="policy-detail__summary governance-page__note">
          {content.accountabilityNote}
        </p>
      </section>

      <section className="policy-foundation governance-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">{content.integrationTitle}</h2>
          </div>
          <p className="section-copy">{content.integrationCopy}</p>
        </div>
        <div className="technology-ai-page__split-grid">
          <div className="technology-ai-page__panel">
            <p className="policy-detail__summary">{content.connectedTo}</p>
            <div className="founding-principles-page__list technology-ai-page__list">
              {content.integrationPoints.map((point) => (
                <p key={point} className="policy-card__description founding-principles-page__item">
                  {point}
                </p>
              ))}
            </div>
          </div>

          <div className="technology-ai-page__panel technology-ai-page__panel--accent">
            <p className="technology-ai-page__card-line governance-page__card-line--statement">
              {content.integrationStatement}
            </p>
          </div>
        </div>
      </section>

      <section className="policy-foundation governance-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">{content.outcomeTitle}</h2>
          </div>
        </div>
        <div className="policy-grid governance-page__grid">
          {content.outcomePoints.map((point, index) => (
            <article key={point} className="policy-card technology-ai-page__card">
              <p className="policy-card__number">{index + 1}</p>
              <p className="policy-card__description technology-ai-page__card-copy">{point}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="policy-foundation governance-page__section governance-page__closing">
        <div className="technology-ai-page__panel governance-page__full-panel">
          <h2 className="section-title">{content.standardTitle}</h2>
          <p className="policy-detail__summary">{content.standardOne}</p>
          <p className="policy-detail__summary governance-page__note-strong">
            {content.standardTwo}
          </p>
        </div>
        <p className="technology-ai-page__one-line">
          {content.oneLine}
        </p>
        <p className="policy-detail__summary governance-page__closing-copy">
          {content.closingCopy}
        </p>
        <div className="policy-detail__actions">
          <Link to="/platform" className="button button--secondary">
            {content.back}
          </Link>
        </div>
      </section>
    </div>
  )
}