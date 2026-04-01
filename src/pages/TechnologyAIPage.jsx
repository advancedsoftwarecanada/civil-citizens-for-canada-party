import { Link } from 'react-router-dom'

const problemPoints = [
  'Costs go down',
  'Profits go up',
  'Workers are displaced',
  'Communities lose stability',
]

const contributionPoints = [
  'Contribute a fair portion of increased profits',
  'Direct those contributions to local Chambers of Citizens',
  'Support workforce transition, retraining, and local economic development',
]

const ensuresPoints = [
  'Communities remain stable',
  'Workers are supported through transition',
  'Economic gains are shared, not extracted',
]

const whyItMattersPoints = [
  'Automation can increase inequality',
  'Entry-level and routine jobs are most at risk',
  'Labour protections are already lagging behind AI adoption',
]

const civilStandardPoints = [
  'AI must enhance society — not destabilize it',
  'Innovation is encouraged',
  'But responsibility is required',
]

const outcomePoints = [
  'Stronger local economies',
  'Protected workers during transition',
  'Continued innovation without social collapse',
  'A system where technology serves people',
]

export default function TechnologyAIPage() {
  return (
    <div className="policy-detail technology-ai-page">
      <section className="policy-detail__panel technology-ai-page__hero">
        <div className="technology-ai-page__hero-grid">
          <div>
            <p className="eyebrow">Platform / Technology &amp; Artificial Intelligence</p>
            <h1 className="policy-detail__title">AI is Coming. Canada Must Be Ready.</h1>
            <p className="policy-detail__summary">
              Artificial Intelligence is not a future risk. It is a present reality.
            </p>
            <p className="policy-detail__summary">
              Across Canada, jobs are already being reshaped, automated, or redefined. Up to 60%
              of Canadian workers may be affected by AI-driven changes in their roles.
            </p>
            <p className="policy-detail__summary">
              This transformation will create massive wealth. But without structure, it will also
              create instability.
            </p>
          </div>

          <aside className="policy-aside technology-ai-page__aside">
            <p className="policy-aside__eyebrow">The Civil Position</p>
            <h2 className="policy-aside__title">
              If a company replaces human labour with AI or robotics, a portion of the value
              created must return to the people and communities affected.
            </h2>
            <p className="policy-aside__copy">Not as charity. As structure.</p>
          </aside>
        </div>
      </section>

      <section className="policy-foundation technology-ai-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">The Problem</h2>
          </div>
          <p className="section-copy">
            Today, the burden of this transition falls on the individual. This is unacceptable.
          </p>
        </div>
        <div className="policy-grid technology-ai-page__grid technology-ai-page__grid--four">
          {problemPoints.map((point) => (
            <article key={point} className="policy-card technology-ai-page__card technology-ai-page__card--tight">
              <p className="technology-ai-page__card-line">{point}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="policy-foundation technology-ai-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">Community Contribution Model</h2>
          </div>
        </div>
        <div className="technology-ai-page__split-grid">
          <div className="technology-ai-page__panel">
            <p className="policy-detail__summary">
              Companies operating in Canada that automate or eliminate jobs must:
            </p>
            <div className="founding-principles-page__list technology-ai-page__list">
              {contributionPoints.map((point) => (
                <p key={point} className="policy-card__description founding-principles-page__item">
                  {point}
                </p>
              ))}
            </div>
          </div>

          <div className="technology-ai-page__panel technology-ai-page__panel--accent">
            <h3 className="technology-ai-page__subhead">This ensures:</h3>
            <div className="founding-principles-page__list technology-ai-page__list">
              {ensuresPoints.map((point) => (
                <p key={point} className="policy-card__description founding-principles-page__item">
                  {point}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="policy-foundation technology-ai-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">Why This Matters</h2>
          </div>
          <p className="section-copy">
            AI will not eliminate all jobs. But it will change who benefits from work.
          </p>
        </div>
        <div className="policy-grid technology-ai-page__grid">
          {whyItMattersPoints.map((point, index) => (
            <article key={point} className="policy-card technology-ai-page__card">
              <p className="policy-card__number">{index + 1}</p>
              <p className="policy-card__description technology-ai-page__card-copy">{point}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="policy-foundation technology-ai-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">The Shift</h2>
          </div>
        </div>
        <div className="economic-detail__shift-grid">
          <article className="economic-detail__shift-card">
            <p className="economic-detail__shift-label">From</p>
            <p className="economic-detail__shift-line">Automation benefits corporations only</p>
          </article>
          <article className="economic-detail__shift-card economic-detail__shift-card--to">
            <p className="economic-detail__shift-label">To</p>
            <p className="economic-detail__shift-line">Automation strengthens both companies and communities</p>
          </article>
        </div>
      </section>

      <section className="policy-foundation technology-ai-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">The Civil Standard</h2>
          </div>
        </div>
        <div className="policy-aside__list technology-ai-page__outcomes" aria-label="Civil standard">
          {civilStandardPoints.map((point) => (
            <span key={point}>{point}</span>
          ))}
        </div>
      </section>

      <section className="policy-foundation technology-ai-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">The Outcome</h2>
          </div>
        </div>
        <div className="policy-grid technology-ai-page__grid">
          {outcomePoints.map((point, index) => (
            <article key={point} className="policy-card technology-ai-page__card">
              <p className="policy-card__number">{index + 1}</p>
              <p className="policy-card__description technology-ai-page__card-copy">{point}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="policy-foundation technology-ai-page__section technology-ai-page__closing">
        <p className="economic-detail__closing-line">We are not here to stop the future.</p>
        <p className="economic-detail__closing-line economic-detail__closing-line--small">
          We are here to structure it properly.
        </p>
        <p className="technology-ai-page__one-line">
          If machines create the wealth, Canadians must share in it.
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