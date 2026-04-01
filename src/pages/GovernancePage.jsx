import { Link } from 'react-router-dom'

const problemPoints = [
  'Decisions are made elsewhere',
  'Participation is limited to voting',
  'Influence is minimal',
]

const chamberPoints = [
  'Automatically connected to their local district',
  'Part of a real, structured community',
  'Able to participate in discussions and decisions',
]

const createsPoints = [
  'Local coordination',
  'Local accountability',
  'Local leadership',
]

const participationPoints = [
  'Discuss local and national issues',
  'Organize initiatives',
  'Coordinate action in real time',
  'Support ideas, leaders, and solutions',
]

const integrationPoints = [
  'Community (discussion and organization)',
  'Commerce (economic coordination)',
  'Careers (leadership and opportunity)',
]

const outcomePoints = [
  'Stronger local representation',
  'Faster coordination',
  'Higher trust between citizens',
  'Leadership based on action, not status',
]

export default function GovernancePage() {
  return (
    <div className="policy-detail governance-page">
      <section className="policy-detail__panel governance-page__hero">
        <div className="technology-ai-page__hero-grid">
          <div>
            <p className="eyebrow">Platform / Governance</p>
            <h1 className="policy-detail__title">Governance Must Be Lived — Not Observed</h1>
            <p className="policy-detail__summary">
              For most Canadians, governance happens at a distance.
            </p>
            <p className="policy-detail__summary">
              This creates disconnection, frustration, and stagnation.
            </p>
            <p className="technology-ai-page__card-line governance-page__card-line--statement">
              Civil changes that.
            </p>
          </div>

          <aside className="policy-aside technology-ai-page__aside">
            <p className="policy-aside__eyebrow">The Civil Model</p>
            <h2 className="policy-aside__title">
              Governance is continuous, local, and participatory.
            </h2>
            <p className="policy-aside__copy">
              Not once every election. Not limited to institutions. Always active.
            </p>
          </aside>
        </div>
      </section>

      <section className="policy-foundation governance-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">The Problem</h2>
          </div>
        </div>
        <div className="policy-grid governance-page__grid governance-page__grid--three">
          {problemPoints.map((point) => (
            <article key={point} className="policy-card technology-ai-page__card technology-ai-page__card--tight">
              <p className="technology-ai-page__card-line">{point}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="policy-foundation governance-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">Chambers of Citizens</h2>
          </div>
          <p className="section-copy">
            At the core of Civil governance are Chambers of Citizens, organized by Electoral
            District.
          </p>
        </div>
        <div className="technology-ai-page__split-grid">
          <div className="technology-ai-page__panel">
            <p className="policy-detail__summary">Every Canadian is:</p>
            <div className="founding-principles-page__list technology-ai-page__list">
              {chamberPoints.map((point) => (
                <p key={point} className="policy-card__description founding-principles-page__item">
                  {point}
                </p>
              ))}
            </div>
          </div>

          <div className="technology-ai-page__panel technology-ai-page__panel--accent">
            <h3 className="technology-ai-page__subhead">This creates:</h3>
            <div className="founding-principles-page__list technology-ai-page__list">
              {createsPoints.map((point) => (
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
            <h2 className="section-title">From Top-Down → Bottom-Up</h2>
          </div>
        </div>
        <div className="economic-detail__shift-grid">
          <article className="economic-detail__shift-card">
            <p className="economic-detail__shift-label">Old Model</p>
            <p className="economic-detail__shift-line">Government decides Citizens react</p>
          </article>
          <article className="economic-detail__shift-card economic-detail__shift-card--to">
            <p className="economic-detail__shift-label">Civil Model</p>
            <p className="economic-detail__shift-line">
              Citizens organize Communities coordinate Leadership emerges from participation
            </p>
          </article>
        </div>
      </section>

      <section className="policy-foundation governance-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">Continuous Participation</h2>
          </div>
          <p className="section-copy">Governance is not an event.</p>
        </div>
        <div className="policy-grid governance-page__grid">
          {participationPoints.map((point, index) => (
            <article key={point} className="policy-card technology-ai-page__card">
              <p className="policy-card__number">{index + 1}</p>
              <p className="policy-card__description technology-ai-page__card-copy">{point}</p>
            </article>
          ))}
        </div>
        <div className="technology-ai-page__panel governance-page__full-panel">
          <p className="policy-detail__summary">This is governance as a living system.</p>
        </div>
      </section>

      <section className="policy-foundation governance-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">Real Identity, Real Accountability</h2>
          </div>
        </div>
        <div className="policy-aside__list technology-ai-page__outcomes" aria-label="Governance accountability">
          <span>Verified identity</span>
          <span>Real communities</span>
          <span>Real consequences</span>
        </div>
        <p className="policy-detail__summary governance-page__note">
          No anonymous influence over real-world outcomes.
        </p>
      </section>

      <section className="policy-foundation governance-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">Integration with the Platform</h2>
          </div>
          <p className="section-copy">Governance is not separate.</p>
        </div>
        <div className="technology-ai-page__split-grid">
          <div className="technology-ai-page__panel">
            <p className="policy-detail__summary">It is connected to:</p>
            <div className="founding-principles-page__list technology-ai-page__list">
              {integrationPoints.map((point) => (
                <p key={point} className="policy-card__description founding-principles-page__item">
                  {point}
                </p>
              ))}
            </div>
          </div>

          <div className="technology-ai-page__panel technology-ai-page__panel--accent">
            <p className="technology-ai-page__card-line governance-page__card-line--statement">
              One system. Not fragmented tools.
            </p>
          </div>
        </div>
      </section>

      <section className="policy-foundation governance-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">The Outcome</h2>
          </div>
        </div>
        <div className="policy-grid governance-page__grid">
          {outcomePoints.map((point, index) => (
            <article key={point} className="policy-card technology-ai-page__card">
              <p className="policy-card__number">{index + 1}</p>
              <p className="policy-card__description technology-ai-page__card-copy">{point}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="policy-foundation governance-page__section governance-page__closing">
        <div className="technology-ai-page__panel governance-page__full-panel">
          <h2 className="section-title">The Civil Standard</h2>
          <p className="policy-detail__summary">Governance is not something done to you.</p>
          <p className="policy-detail__summary governance-page__note-strong">
            It is something you participate in.
          </p>
        </div>
        <p className="technology-ai-page__one-line">
          If you are not participating, you are being governed by those who are.
        </p>
        <p className="policy-detail__summary governance-page__closing-copy">
          Civil does not replace democracy. It completes it.
        </p>
        <div className="policy-detail__actions">
          <Link to="/platform" className="button button--secondary">
            Back to Platform
          </Link>
        </div>
      </section>
    </div>
  )
}