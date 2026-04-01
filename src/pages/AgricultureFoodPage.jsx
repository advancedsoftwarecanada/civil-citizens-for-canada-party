import { Link } from 'react-router-dom'

const workforcePoints = [
  'Creating stable, well-compensated agricultural careers',
  'Building long-term workforce pathways in farming and food systems',
  'Supporting training, apprenticeship, and entry into agricultural work',
]

const technologyPoints = [
  'Invest in workforce development for agriculture',
  'Improve working conditions and compensation',
  'Introduce technology to increase productivity and reduce strain',
]

const advancedToolsPoints = [
  'Drone-based crop monitoring',
  'Precision agriculture systems',
  'Emerging technologies such as automated and laser-assisted weeding',
]

const cleanProductionPoints = [
  'A phased reduction in synthetic pesticides, herbicides, and fungicides',
  'Adoption of regenerative and organic farming practices',
  'Investment in natural soil health and biodiversity',
]

const foodGoalPoints = ['Nutrient-dense', 'Clean', 'Sustainable over generations']

const weedInnovationPoints = [
  'Mechanical and manual weed control',
  'Precision-targeted farming techniques',
  'Technology-assisted crop management',
]

const weedOutcomePoints = [
  'More jobs in agriculture',
  'Healthier ecosystems',
  'Reduced long-term environmental damage',
]

const fourSeasonPoints = [
  'Expansion of greenhouse and controlled-environment agriculture',
  'Emphasis on soil-based growing systems',
  'Development of scalable, climate-resilient infrastructure',
]

const fourSeasonOutcomePoints = [
  'Stable domestic supply',
  'Reduced reliance on imports',
  'Greater national food security',
]

const domesticFirstPoints = [
  'Ensuring abundance and stability within Canada',
  'Building a surplus only after domestic needs are met',
  'Exporting high-quality Canadian food from a position of strength',
]

const civilStandardPoints = [
  'The most nutritious food',
  'At scale',
  'For its own people first',
]

export default function AgricultureFoodPage() {
  return (
    <div className="policy-detail agriculture-page">
      <section className="policy-detail__panel agriculture-page__hero">
        <div className="technology-ai-page__hero-grid">
          <div>
            <p className="eyebrow">Platform / Agriculture &amp; Food</p>
            <h1 className="policy-detail__title">Food is National Infrastructure</h1>
            <p className="policy-detail__summary">
              Food production is not just an industry. It is the foundation of national stability,
              health, and independence.
            </p>
            <p className="policy-detail__summary">
              Canada must take full control of how its food is grown, who grows it, and who
              benefits from it.
            </p>
          </div>

          <aside className="policy-aside technology-ai-page__aside">
            <p className="policy-aside__eyebrow">The Civil Standard</p>
            <h2 className="policy-aside__title">Canada should produce the most nutritious food, at scale, for its own people first.</h2>
          </aside>
        </div>
      </section>

      <section className="policy-foundation agriculture-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">Canadian Workforce First</h2>
          </div>
          <p className="section-copy">
            Canada will transition away from reliance on temporary foreign labour in agriculture.
          </p>
        </div>
        <div className="technology-ai-page__panel">
          <p className="policy-detail__summary">Food production must directly benefit Canadian citizens by:</p>
          <div className="founding-principles-page__list technology-ai-page__list">
            {workforcePoints.map((point) => (
              <p key={point} className="policy-card__description founding-principles-page__item">{point}</p>
            ))}
          </div>
          <p className="policy-detail__summary agriculture-page__followup-copy">
            Agriculture must become a respected, scalable, and national career path.
          </p>
        </div>
      </section>

      <section className="policy-foundation agriculture-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">Modernizing Agricultural Labour</h2>
          </div>
        </div>
        <div className="technology-ai-page__split-grid">
          <div className="technology-ai-page__panel">
            <div className="founding-principles-page__list technology-ai-page__list">
              {technologyPoints.map((point) => (
                <p key={point} className="policy-card__description founding-principles-page__item">{point}</p>
              ))}
            </div>
          </div>
          <div className="technology-ai-page__panel technology-ai-page__panel--accent">
            <p className="policy-detail__summary">Food production will be built on a combination of human labour and advanced tools, including:</p>
            <div className="founding-principles-page__list technology-ai-page__list">
              {advancedToolsPoints.map((point) => (
                <p key={point} className="policy-card__description founding-principles-page__item">{point}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="policy-foundation agriculture-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">A Transition to Clean, Organic Production</h2>
          </div>
        </div>
        <div className="technology-ai-page__split-grid">
          <div className="technology-ai-page__panel">
            <div className="founding-principles-page__list technology-ai-page__list">
              {cleanProductionPoints.map((point) => (
                <p key={point} className="policy-card__description founding-principles-page__item">{point}</p>
              ))}
            </div>
          </div>
          <div className="technology-ai-page__panel technology-ai-page__panel--accent">
            <p className="policy-detail__summary">The goal is a system that produces food that is:</p>
            <div className="policy-aside__list technology-ai-page__outcomes" aria-label="Food goals">
              {foodGoalPoints.map((point) => (
                <span key={point}>{point}</span>
              ))}
            </div>
            <p className="policy-detail__summary agriculture-page__health-copy">
              When Canadians eat cleaner, more natural, and less chemically burdened food, the
              long-term burden of chronic disease can fall. Over time, that means fewer diet-linked
              health crises, lower strain on emergency rooms, and lower medical costs associated
              with conditions such as type 2 diabetes, heart disease, stroke, and some cancers.
            </p>
          </div>
        </div>
      </section>

      <section className="policy-foundation agriculture-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">Weed and Crop Management Innovation</h2>
          </div>
        </div>
        <div className="technology-ai-page__split-grid">
          <div className="technology-ai-page__panel">
            <div className="founding-principles-page__list technology-ai-page__list">
              {weedInnovationPoints.map((point) => (
                <p key={point} className="policy-card__description founding-principles-page__item">{point}</p>
              ))}
            </div>
          </div>
          <div className="technology-ai-page__panel technology-ai-page__panel--accent">
            <p className="policy-detail__summary">This creates:</p>
            <div className="founding-principles-page__list technology-ai-page__list">
              {weedOutcomePoints.map((point) => (
                <p key={point} className="policy-card__description founding-principles-page__item">{point}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="policy-foundation agriculture-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">Four-Season Growing Capacity</h2>
          </div>
        </div>
        <div className="technology-ai-page__split-grid">
          <div className="technology-ai-page__panel">
            <div className="founding-principles-page__list technology-ai-page__list">
              {fourSeasonPoints.map((point) => (
                <p key={point} className="policy-card__description founding-principles-page__item">{point}</p>
              ))}
            </div>
          </div>
          <div className="technology-ai-page__panel technology-ai-page__panel--accent">
            <p className="policy-detail__summary">Four-season production ensures:</p>
            <div className="founding-principles-page__list technology-ai-page__list">
              {fourSeasonOutcomePoints.map((point) => (
                <p key={point} className="policy-card__description founding-principles-page__item">{point}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="policy-foundation agriculture-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">Domestic First, Then Export</h2>
          </div>
        </div>
        <div className="technology-ai-page__panel">
          <div className="founding-principles-page__list technology-ai-page__list">
            {domesticFirstPoints.map((point) => (
              <p key={point} className="policy-card__description founding-principles-page__item">{point}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="policy-foundation agriculture-page__section agriculture-page__closing">
        <div className="technology-ai-page__panel agriculture-page__full-panel">
          <h2 className="section-title">Closing</h2>
          <p className="policy-detail__summary agriculture-page__note-strong">A strong nation feeds itself.</p>
          <p className="policy-detail__summary">Canada will build a food system that is:</p>
          <div className="policy-aside__list technology-ai-page__outcomes" aria-label="Closing agriculture outcomes">
            <span>Independent</span>
            <span>Sustainable</span>
            <span>Designed for the health of its people</span>
          </div>
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