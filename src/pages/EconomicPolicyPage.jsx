import { Link } from 'react-router-dom'
import { economicPolicyPoints } from '../data/economicPolicy'

export default function EconomicPolicyPage() {
  return (
    <div className="policy-page">
      <div className="policy-hero-grid">
        <section className="hero-panel hero-panel--policy">
          <p className="eyebrow">CCC Economic Foundation</p>
          <h1 className="hero-title hero-title--policy">Tax Reform That Puts Citizens First</h1>
          <p className="hero-copy hero-copy--policy">
            This foundation sets out a simpler, fairer approach to taxation: reward work,
            support families, strengthen small business, and keep Canadian capital building in
            Canada.
          </p>
          <div className="hero-actions hero-actions--left">
            <Link to="/" className="button button--secondary">
              Back to Home
            </Link>
          </div>
        </section>

        <aside className="policy-aside">
          <p className="policy-aside__eyebrow">CCC Principles</p>
          <h2 className="policy-aside__title">Work. Growth. Transparency.</h2>
          <p className="policy-aside__copy">
            A cleaner tax system should be understandable to ordinary citizens, reliable for
            employers, and strong enough to support Canada&apos;s long-term future.
          </p>
          <div className="policy-aside__list" aria-label="Core principles">
            <span>Reward Work</span>
            <span>Support Families</span>
            <span>Build In Canada</span>
          </div>
        </aside>
      </div>

      <section id="foundation" className="policy-foundation">
        <div className="policy-foundation__heading">
          <div>
            <p className="section-label">Policy Outline</p>
            <h2 className="section-title">Economic Policy Priorities</h2>
          </div>
          <p className="section-copy">
            Ten priorities designed to make the tax system more understandable, more productive,
            and more aligned with the long-term interests of Canadian citizens.
          </p>
        </div>

        <div className="policy-grid">
          {economicPolicyPoints.map((point) => (
            <Link key={point.slug} to={`/economic-policy/${point.slug}`} className="policy-card">
              <p className="policy-card__number">{point.number}</p>
              <h3 className="policy-card__title">{point.title}</h3>
              <p className="policy-card__description">{point.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
