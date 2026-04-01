import { Link } from 'react-router-dom'

const sovereigntyPoints = [
  'Building a national east-west pipeline network',
  'Ending reliance on imported foreign oil where domestic supply exists',
  'Ensuring Canadian energy reaches Canadian markets efficiently',
]

const nationalSystemPoints = [
  'Coordinated national energy planning',
  'Interconnected infrastructure across regions',
  'Efficient movement of energy from production to consumption',
]

const majorInfrastructurePoints = [
  'Pipelines',
  'Refineries',
  'Electrical grid modernization',
  'Energy storage systems',
]

const balancedEnergyPoints = [
  'Oil and gas as a current economic driver',
  'Expansion of nuclear energy as a long-term stable source',
  'Continued use and development of hydroelectric power',
  'Targeted use of renewables where they are effective and reliable',
]

const investmentPoints = [
  'End inefficient and politically driven subsidies',
  'Invest in projects that deliver measurable national benefit',
  'Support technologies that improve output, efficiency, and reliability',
]

const technologyPoints = [
  'Carbon capture and emissions reduction technologies',
  'More efficient extraction and production methods',
  'Intelligent grid systems and energy optimization',
]

const affordableEnergyPoints = [
  'Strengthen households',
  'Support small business growth',
  'Increase national competitiveness',
]

const civilStandardPoints = ['Build', 'Produce', 'Innovate', 'Lead']

export default function EnergyInfrastructurePage() {
  return (
    <div className="policy-detail governance-page energy-page">
      <section className="policy-detail__panel governance-page__hero energy-page__hero">
        <div className="technology-ai-page__hero-grid">
          <div>
            <p className="eyebrow">Platform / Energy & Infrastructure</p>
            <h1 className="policy-detail__title">Canada Must Power Itself First</h1>
            <p className="policy-detail__summary">
              Energy is the foundation of a functioning nation.
            </p>
            <p className="policy-detail__summary">
              Without reliable, affordable, and domestically controlled energy, nothing else
              works: not industry, not housing, not growth.
            </p>
            <p className="policy-detail__summary">Canada will take control of its energy future.</p>
          </div>

          <aside className="policy-aside technology-ai-page__aside">
            <p className="policy-aside__eyebrow">The Civil Standard</p>
            <h2 className="policy-aside__title">Energy security is national security.</h2>
            <p className="policy-aside__copy">
              Canada should power its homes, industries, and future from a position of domestic
              strength rather than external dependence.
            </p>
          </aside>
        </div>
      </section>

      <section className="policy-foundation governance-page__section energy-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">National Energy Sovereignty</h2>
          </div>
          <p className="section-copy">
            Canada will prioritize its own energy needs before relying on foreign supply.
          </p>
        </div>
        <div className="technology-ai-page__panel">
          <p className="policy-detail__summary">This includes:</p>
          <div className="founding-principles-page__list technology-ai-page__list">
            {sovereigntyPoints.map((point) => (
              <p key={point} className="policy-card__description founding-principles-page__item">
                {point}
              </p>
            ))}
          </div>
          <p className="policy-detail__summary energy-page__followup-copy">
            Canada will use its own resources to power its own people.
          </p>
        </div>
      </section>

      <section className="policy-foundation governance-page__section energy-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">End Fragmentation - Build a National System</h2>
          </div>
          <p className="section-copy">
            Canada&apos;s energy infrastructure is currently fragmented across provinces.
          </p>
        </div>
        <div className="technology-ai-page__panel technology-ai-page__panel--accent">
          <p className="policy-detail__summary">Civil will establish:</p>
          <div className="founding-principles-page__list technology-ai-page__list">
            {nationalSystemPoints.map((point) => (
              <p key={point} className="policy-card__description founding-principles-page__item">
                {point}
              </p>
            ))}
          </div>
          <p className="technology-ai-page__card-line energy-page__statement">
            Energy must function as a unified national system.
          </p>
        </div>
      </section>

      <section className="policy-foundation governance-page__section energy-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">Build Major Infrastructure - Fast</h2>
          </div>
          <p className="section-copy">Canada must return to building.</p>
        </div>
        <div className="policy-grid technology-ai-page__grid technology-ai-page__grid--four">
          {majorInfrastructurePoints.map((point) => (
            <article key={point} className="policy-card technology-ai-page__card technology-ai-page__card--tight">
              <p className="technology-ai-page__card-line">{point}</p>
            </article>
          ))}
        </div>
        <div className="technology-ai-page__panel energy-page__panel-spaced">
          <p className="policy-detail__summary">
            Projects of national importance will be prioritized and executed with urgency.
          </p>
        </div>
      </section>

      <section className="policy-foundation governance-page__section energy-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">A Balanced Energy Mix</h2>
          </div>
          <p className="section-copy">
            Canada will pursue a practical and resilient energy strategy, including:
          </p>
        </div>
        <div className="technology-ai-page__split-grid">
          <div className="technology-ai-page__panel">
            <div className="founding-principles-page__list technology-ai-page__list">
              {balancedEnergyPoints.map((point) => (
                <p key={point} className="policy-card__description founding-principles-page__item">
                  {point}
                </p>
              ))}
            </div>
          </div>
          <div className="technology-ai-page__panel technology-ai-page__panel--accent">
            <p className="policy-detail__summary">No single solution will carry the country.</p>
            <p className="technology-ai-page__card-line governance-page__card-line--statement">
              Strength comes from balance.
            </p>
          </div>
        </div>
      </section>

      <section className="policy-foundation governance-page__section energy-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">Smart Investment - Not Blind Subsidies</h2>
          </div>
          <p className="section-copy">
            Government spending on energy will be disciplined and results-driven.
          </p>
        </div>
        <div className="technology-ai-page__panel">
          <p className="policy-detail__summary">Canada will:</p>
          <div className="founding-principles-page__list technology-ai-page__list">
            {investmentPoints.map((point) => (
              <p key={point} className="policy-card__description founding-principles-page__item">
                {point}
              </p>
            ))}
          </div>
          <p className="policy-detail__summary energy-page__followup-copy">
            Public funds must produce real outcomes.
          </p>
        </div>
      </section>

      <section className="policy-foundation governance-page__section energy-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">Technology Over Restriction</h2>
          </div>
          <p className="section-copy">Canada will innovate forward.</p>
        </div>
        <div className="technology-ai-page__panel technology-ai-page__panel--accent">
          <p className="policy-detail__summary">This includes:</p>
          <div className="founding-principles-page__list technology-ai-page__list">
            {technologyPoints.map((point) => (
              <p key={point} className="policy-card__description founding-principles-page__item">
                {point}
              </p>
            ))}
          </div>
          <p className="policy-detail__summary energy-page__followup-copy">
            Progress will come from building better systems, not limiting growth.
          </p>
        </div>
      </section>

      <section className="policy-foundation governance-page__section energy-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">Affordable Energy for Canadians</h2>
          </div>
          <p className="section-copy">Energy must remain accessible and affordable.</p>
        </div>
        <div className="technology-ai-page__split-grid">
          <div className="technology-ai-page__panel">
            <p className="policy-detail__summary">Lower energy costs will:</p>
            <div className="founding-principles-page__list technology-ai-page__list">
              {affordableEnergyPoints.map((point) => (
                <p key={point} className="policy-card__description founding-principles-page__item">
                  {point}
                </p>
              ))}
            </div>
          </div>
          <div className="technology-ai-page__panel">
            <p className="technology-ai-page__card-line governance-page__card-line--statement">
              High-cost energy weakens the entire economy.
            </p>
          </div>
        </div>
      </section>

      <section className="policy-foundation governance-page__section energy-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">The Civil Standard</h2>
          </div>
          <p className="section-copy">Canada will not weaken itself to meet external expectations.</p>
        </div>
        <div className="technology-ai-page__panel energy-page__full-panel">
          <p className="policy-detail__summary">It will:</p>
          <div className="policy-aside__list technology-ai-page__outcomes" aria-label="Energy and infrastructure standard">
            {civilStandardPoints.map((point) => (
              <span key={point}>{point}</span>
            ))}
          </div>
          <p className="policy-detail__summary energy-page__followup-copy">From a position of strength.</p>
        </div>
      </section>

      <section className="policy-foundation governance-page__section governance-page__closing energy-page__closing">
        <div className="technology-ai-page__panel governance-page__full-panel">
          <h2 className="section-title">Closing</h2>
          <p className="policy-detail__summary energy-page__closing-line">
            Canada will power itself first - then the world.
          </p>
        </div>
        <div className="policy-detail__actions">
          <Link to="/platform" className="button button--secondary">
            Back to Platform
          </Link>
        </div>
      </section>
    </div>
  )
}