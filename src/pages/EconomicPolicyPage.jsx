import { Link } from 'react-router-dom'
import { economicPolicyPoints } from '../data/economicPolicy'

const groupedPolicySections = [
  {
    title: 'Tax Reform',
    pointNumbers: ['1', '2', '3', '4'],
  },
  {
    title: 'Business and Economic Growth',
    pointNumbers: ['5', '6', '7'],
  },
  {
    title: 'Future Economy and Workforce',
    pointNumbers: ['8'],
  },
  {
    title: 'Families and Long-Term Stability',
    pointNumbers: ['9'],
  },
  {
    title: 'System-Level Goal',
    pointNumbers: ['10'],
  },
]

const policyLookup = economicPolicyPoints.reduce((lookup, point) => {
  lookup[point.number] = point
  return lookup
}, {})

export default function EconomicPolicyPage() {
  return (
    <div className="policy-page economic-policy-page">
      <div className="policy-hero-grid">
        <section className="hero-panel hero-panel--policy">
          <p className="eyebrow">Platform / Economic Policy</p>
          <h1 className="hero-title hero-title--policy">Economic Policy</h1>
          <p className="hero-copy hero-copy--policy">
            A final structure built around work, growth, stability, and a Canadian economy that
            serves citizens instead of extracting from them.
          </p>
          <div className="hero-actions hero-actions--left">
            <Link to="/platform" className="button button--secondary">
              Back to Platform
            </Link>
          </div>
        </section>

        <aside className="policy-aside">
          <p className="policy-aside__eyebrow">Final Structure</p>
          <h2 className="policy-aside__title">An economy designed for participation.</h2>
          <p className="policy-aside__copy">
            This structure starts with tax reform, extends into business growth, addresses the
            future economy, supports families, and ends with a system-level goal that puts
            citizens first.
          </p>
          <div className="policy-aside__list" aria-label="Core principles">
            <span>Reward Work</span>
            <span>Build In Canada</span>
            <span>Support Families</span>
            <span>System That Works</span>
          </div>
        </aside>
      </div>

      {groupedPolicySections.map((section) => (
        <section key={section.title} id="foundation" className="policy-foundation economic-policy-page__group">
          <div className="policy-foundation__heading">
            <div>
              <h2 className="section-title">{section.title}</h2>
            </div>
          </div>

          <div className="policy-grid">
            {section.pointNumbers.map((number) => {
              const point = policyLookup[number]

              return (
                <Link key={point.slug} to={`/platform/economic-foundation/${point.slug}`} className="policy-card">
                  <p className="policy-card__number">{point.number}</p>
                  <h3 className="policy-card__title">{point.title}</h3>
                  <p className="policy-card__description">{point.description}</p>
                </Link>
              )
            })}
          </div>
        </section>
      ))}
    </div>
  )
}
