import { Link, Navigate, useParams } from 'react-router-dom'
import { economicPolicyPoints } from '../data/economicPolicy'

const workWorthItMeaning = [
  'Your first earnings go to you, not the system.',
  'Work immediately translates into real progress.',
  'Canadians can build stability before being burdened.',
  'Entry into the workforce becomes worth it again.',
]

const workWorthItAffects = [
  'Young workers entering the workforce',
  'Families trying to get ahead',
  'Individuals rebuilding their lives',
  'Entrepreneurs in early stages',
]

const workWorthItOutcome = [
  'Stronger participation in the workforce',
  'Increased economic activity',
  'More people moving from survival to progress',
  'A system that rewards effort from day one',
]

export default function EconomicPolicyDetailPage() {
  const { slug } = useParams()
  const point = economicPolicyPoints.find((entry) => entry.slug === slug)

  if (!point) {
    return <Navigate to="/platform/economic-foundation" replace />
  }

  if (slug === 'make-work-worth-it-again') {
    return (
      <div className="policy-detail economic-detail">
        <section className="policy-detail__panel economic-detail__hero">
          <div className="economic-detail__hero-grid">
            <div>
              <p className="eyebrow">CCC Economic Foundation</p>
              <p className="policy-detail__number">{point.number}</p>
              <h1 className="policy-detail__title">{point.title}</h1>
              <p className="economic-detail__dek">No tax on the first meaningful layer of income</p>
              <p className="policy-detail__summary">
                Work should mean progress.
              </p>
              <p className="policy-detail__summary">
                Right now, too many Canadians put in the effort, take on responsibility, and
                still feel like they&apos;re standing still. Before a paycheque even reaches their
                hands, a portion is already gone.
              </p>
              <p className="economic-detail__statement">This is backwards.</p>
            </div>

            <aside className="policy-aside economic-detail__aside">
              <p className="policy-aside__eyebrow">Civil Position</p>
              <h2 className="policy-aside__title">If someone is working, they should be moving forward.</h2>
              <p className="policy-aside__copy">Not catching up. Not falling behind.</p>
              <p className="economic-detail__statement economic-detail__statement--aside">Moving forward.</p>
            </aside>
          </div>
        </section>

        <section className="policy-foundation economic-detail__section">
          <div className="policy-foundation__heading">
            <div>
              <h2 className="section-title">The Principle</h2>
            </div>
          </div>
          <div className="economic-detail__principle-panel">
            <p className="policy-detail__summary">
              The first layer of income, the income people rely on to live, build, and stabilize
              their lives, should not be taxed.
            </p>
            <p className="policy-detail__summary">
              This is not about eliminating taxes. It is about protecting the foundation of
              working life.
            </p>
          </div>
        </section>

        <section className="policy-foundation economic-detail__section">
          <div className="policy-foundation__heading">
            <div>
              <h2 className="section-title">What This Means</h2>
            </div>
          </div>
          <div className="policy-grid economic-detail__grid">
            {workWorthItMeaning.map((item, index) => (
              <article key={item} className="policy-card economic-detail__card">
                <p className="policy-card__number">{index + 1}</p>
                <p className="policy-card__description economic-detail__card-copy">{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="policy-foundation economic-detail__section">
          <div className="policy-foundation__heading">
            <div>
              <h2 className="section-title">Why It Matters</h2>
            </div>
            <p className="section-copy">
              When people feel like their work doesn&apos;t move them forward, motivation collapses.
            </p>
          </div>
          <div className="economic-detail__two-column">
            <div className="economic-detail__list-panel">
              <h3 className="economic-detail__subhead">This affects:</h3>
              <div className="founding-principles-page__list">
                {workWorthItAffects.map((item) => (
                  <p key={item} className="policy-card__description founding-principles-page__item">
                    {item}
                  </p>
                ))}
              </div>
            </div>
            <div className="economic-detail__list-panel economic-detail__list-panel--accent">
              <p className="policy-detail__summary">
                If the system takes too early, people stop believing in it.
              </p>
            </div>
          </div>
        </section>

        <section className="policy-foundation economic-detail__section">
          <div className="policy-foundation__heading">
            <div>
              <h2 className="section-title">The Shift</h2>
            </div>
          </div>
          <div className="economic-detail__shift-grid">
            <article className="economic-detail__shift-card">
              <p className="economic-detail__shift-label">From</p>
              <p className="economic-detail__shift-line">Work → Tax → Struggle</p>
            </article>
            <article className="economic-detail__shift-card economic-detail__shift-card--to">
              <p className="economic-detail__shift-label">To</p>
              <p className="economic-detail__shift-line">Work → Stability → Growth</p>
            </article>
          </div>
        </section>

        <section className="policy-foundation economic-detail__section">
          <div className="policy-foundation__heading">
            <div>
              <h2 className="section-title">The Outcome</h2>
            </div>
          </div>
          <div className="policy-aside__list economic-detail__outcomes" aria-label="Policy outcomes">
            {workWorthItOutcome.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>

        <section className="policy-foundation economic-detail__section economic-detail__closing">
          <p className="economic-detail__closing-line">
            Work must be the starting point of opportunity, not the starting point of loss.
          </p>
          <p className="economic-detail__closing-line economic-detail__closing-line--small">
            That is where we begin.
          </p>
          <div className="policy-detail__actions">
            <Link to="/platform/economic-foundation" className="button button--secondary">
              Back to Economic Policy
            </Link>
          </div>
        </section>
      </div>
    )
  }

  return (
    <section className="policy-detail">
      <div className="policy-detail__panel">
        <p className="policy-detail__number">{point.number}</p>
        <h1 className="policy-detail__title">{point.title}</h1>
        <p className="policy-detail__summary">{point.description}</p>
        <p className="policy-detail__coming-soon">Coming Soon</p>
        <div className="policy-detail__actions">
          <Link to="/platform/economic-foundation" className="button button--secondary">
            Back to Economic Policy
          </Link>
        </div>
      </div>
    </section>
  )
}