import { Link } from 'react-router-dom'

const foundationPoints = [
  'A place to live',
  'The ability to raise a family',
  'Safe communities',
  'Real opportunity to move forward',
]

const housingFirstPoints = [
  'Prioritizing citizens and lawful residents in housing access',
  'Aligning housing capacity with immigration policy',
  'Ensuring demand does not exceed what Canada can support',
]

const speculationPoints = [
  'Restrict large-scale corporate ownership of single-family homes',
  'Limit practices that treat housing as a purely financial asset',
  'Continue to support builders who create new housing supply',
]

const buildingScalePoints = [
  'A national housing construction strategy',
  'Scalable and repeatable housing models',
  'Expansion of modular and efficient building methods',
  'Rapid deployment of new housing across the country',
]

const redTapePoints = [
  'Standardized building approvals',
  'Pre-approved designs and zoning templates',
  'Digitized permit systems',
  'Strict approval timelines measured in days, not months',
]

const resetPoints = [
  'Removing redundant and overlapping permits',
  'Prioritizing safety, structure, and speed',
  'Accelerating projects that increase supply immediately',
]

const accountabilityPoints = [
  'Strict building code compliance',
  'Post-construction inspections',
  'Strong penalties for unsafe or non-compliant builds',
]

const zoningPoints = [
  'Enabling higher-density housing in urban areas',
  'Reducing restrictions on multi-unit developments',
  'Aligning zoning with real population needs',
]

const homelessnessPoints = [
  'Provide pathways to stable housing',
  'Integrate housing with treatment, work, and support systems',
  'Address long-term homelessness through structured intervention',
]

const familyCostPoints = [
  'Affordable housing',
  'Stable access to food and essentials',
  'Real opportunity to raise children',
]

const participationPoints = [
  'Local communities will identify housing needs',
  'Coordinate development priorities',
  'Support local solutions',
]

const outcomePoints = [
  'Increased housing supply',
  'Lower cost of living',
  'Stronger communities',
  'A system that works for citizens',
]

export default function FamilySocietyPage() {
  return (
    <div className="policy-detail governance-page family-page">
      <section className="policy-detail__panel governance-page__hero family-page__hero">
        <div className="technology-ai-page__hero-grid">
          <div>
            <p className="eyebrow">Platform / Family & Society</p>
            <h1 className="policy-detail__title">A Nation That Works for Its People</h1>
            <p className="policy-detail__summary">A strong society is built on stability.</p>
            <p className="policy-detail__summary">Today, too many Canadians are locked out of that foundation.</p>
            <p className="policy-detail__summary">Civil will restore it.</p>
          </div>

          <aside className="policy-aside technology-ai-page__aside">
            <p className="policy-aside__eyebrow">The Foundation</p>
            <h2 className="policy-aside__title">A functioning country makes ordinary life possible.</h2>
            <div className="policy-aside__list technology-ai-page__outcomes" aria-label="Family foundation needs">
              {foundationPoints.map((point) => (
                <span key={point}>{point}</span>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="policy-foundation governance-page__section family-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">Housing Is National Infrastructure</h2>
          </div>
          <p className="section-copy">
            Housing is not just a market. It is essential infrastructure, as critical as roads,
            energy, and food.
          </p>
        </div>
        <div className="technology-ai-page__panel family-page__full-panel">
          <p className="policy-detail__summary">
            Canada will treat housing as a national priority and rebuild the system to ensure
            supply, affordability, and access.
          </p>
        </div>
      </section>

      <section className="policy-foundation governance-page__section family-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">Housing First - For Canadians</h2>
          </div>
          <p className="section-copy">Canadian housing must serve Canadians first.</p>
        </div>
        <div className="technology-ai-page__panel">
          <p className="policy-detail__summary">This means:</p>
          <div className="founding-principles-page__list technology-ai-page__list">
            {housingFirstPoints.map((point) => (
              <p key={point} className="policy-card__description founding-principles-page__item">
                {point}
              </p>
            ))}
          </div>
          <p className="policy-detail__summary family-page__followup-copy">
            A functioning country ensures its people have a place to live.
          </p>
        </div>
      </section>

      <section className="policy-foundation governance-page__section family-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">End Speculative Ownership</h2>
          </div>
          <p className="section-copy">Homes are for living, not speculation.</p>
        </div>
        <div className="technology-ai-page__split-grid">
          <div className="technology-ai-page__panel">
            <p className="policy-detail__summary">Canada will:</p>
            <div className="founding-principles-page__list technology-ai-page__list">
              {speculationPoints.map((point) => (
                <p key={point} className="policy-card__description founding-principles-page__item">
                  {point}
                </p>
              ))}
            </div>
          </div>
          <div className="technology-ai-page__panel technology-ai-page__panel--accent">
            <p className="policy-detail__summary">Development is necessary.</p>
            <p className="technology-ai-page__card-line governance-page__card-line--statement">
              Speculation is not.
            </p>
          </div>
        </div>
      </section>

      <section className="policy-foundation governance-page__section family-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">Build at Scale - Immediately</h2>
          </div>
          <p className="section-copy">Canada must return to building.</p>
        </div>
        <div className="policy-grid technology-ai-page__grid technology-ai-page__grid--four">
          {buildingScalePoints.map((point) => (
            <article key={point} className="policy-card technology-ai-page__card technology-ai-page__card--tight">
              <p className="technology-ai-page__card-line">{point}</p>
            </article>
          ))}
        </div>
        <div className="technology-ai-page__panel family-page__panel-spaced">
          <p className="policy-detail__summary">The goal is simple:</p>
          <p className="technology-ai-page__card-line family-page__statement">Build more homes. Faster.</p>
        </div>
      </section>

      <section className="policy-foundation governance-page__section family-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">Cut the Red Tape - Build at Speed</h2>
          </div>
          <p className="section-copy">Canada&apos;s housing delays are driven by system inefficiency.</p>
        </div>
        <div className="technology-ai-page__split-grid">
          <div className="technology-ai-page__panel">
            <p className="policy-detail__summary">Civil will implement:</p>
            <div className="founding-principles-page__list technology-ai-page__list">
              {redTapePoints.map((point) => (
                <p key={point} className="policy-card__description founding-principles-page__item">
                  {point}
                </p>
              ))}
            </div>
          </div>
          <div className="technology-ai-page__panel technology-ai-page__panel--accent">
            <p className="policy-detail__summary">For qualified projects:</p>
            <p className="technology-ai-page__card-line governance-page__card-line--statement">
              Permits will be issued within days.
            </p>
          </div>
        </div>
      </section>

      <section className="policy-foundation governance-page__section family-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">Temporary Regulatory Reset</h2>
          </div>
          <p className="section-copy">
            For a defined period, Canada will streamline housing approvals to essential
            requirements.
          </p>
        </div>
        <div className="technology-ai-page__panel">
          <p className="policy-detail__summary">This includes:</p>
          <div className="founding-principles-page__list technology-ai-page__list">
            {resetPoints.map((point) => (
              <p key={point} className="policy-card__description founding-principles-page__item">
                {point}
              </p>
            ))}
          </div>
          <p className="policy-detail__summary family-page__followup-copy">This is not deregulation.</p>
          <p className="policy-detail__summary family-page__followup-copy">It is focused execution.</p>
        </div>
      </section>

      <section className="policy-foundation governance-page__section family-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">Accountability in Building</h2>
          </div>
          <p className="section-copy">Speed will not come at the expense of safety.</p>
        </div>
        <div className="technology-ai-page__split-grid">
          <div className="technology-ai-page__panel">
            <p className="policy-detail__summary">Canada will enforce:</p>
            <div className="founding-principles-page__list technology-ai-page__list">
              {accountabilityPoints.map((point) => (
                <p key={point} className="policy-card__description founding-principles-page__item">
                  {point}
                </p>
              ))}
            </div>
          </div>
          <div className="technology-ai-page__panel technology-ai-page__panel--accent">
            <p className="technology-ai-page__card-line governance-page__card-line--statement">
              Builders will move faster and remain accountable.
            </p>
          </div>
        </div>
      </section>

      <section className="policy-foundation governance-page__section family-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">Zoning and Density Reform</h2>
          </div>
          <p className="section-copy">Canada will unlock its cities.</p>
        </div>
        <div className="technology-ai-page__panel">
          <p className="policy-detail__summary">This includes:</p>
          <div className="founding-principles-page__list technology-ai-page__list">
            {zoningPoints.map((point) => (
              <p key={point} className="policy-card__description founding-principles-page__item">
                {point}
              </p>
            ))}
          </div>
          <p className="policy-detail__summary family-page__followup-copy">
            Communities must be allowed to grow.
          </p>
        </div>
      </section>

      <section className="policy-foundation governance-page__section family-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">End Chronic Homelessness</h2>
          </div>
          <p className="section-copy">In a functioning society, no citizen should be without shelter.</p>
        </div>
        <div className="technology-ai-page__panel">
          <p className="policy-detail__summary">Canada will:</p>
          <div className="founding-principles-page__list technology-ai-page__list">
            {homelessnessPoints.map((point) => (
              <p key={point} className="policy-card__description founding-principles-page__item">
                {point}
              </p>
            ))}
          </div>
          <p className="policy-detail__summary family-page__followup-copy">
            This is a baseline standard of a civilized country.
          </p>
        </div>
      </section>

      <section className="policy-foundation governance-page__section family-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">Families and the Cost of Living</h2>
          </div>
          <p className="section-copy">
            Canada must become a place where people can build a life again.
          </p>
        </div>
        <div className="technology-ai-page__split-grid">
          <div className="technology-ai-page__panel">
            <p className="policy-detail__summary">This includes:</p>
            <div className="founding-principles-page__list technology-ai-page__list">
              {familyCostPoints.map((point) => (
                <p key={point} className="policy-card__description founding-principles-page__item">
                  {point}
                </p>
              ))}
            </div>
          </div>
          <div className="technology-ai-page__panel">
            <p className="technology-ai-page__card-line governance-page__card-line--statement">
              Families should not be priced out of their own country.
            </p>
          </div>
        </div>
      </section>

      <section className="policy-foundation governance-page__section family-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">Stronger Communities Through Participation</h2>
          </div>
          <p className="section-copy">Through Civil and the Chambers of Citizens:</p>
        </div>
        <div className="technology-ai-page__panel technology-ai-page__panel--accent">
          <div className="founding-principles-page__list technology-ai-page__list">
            {participationPoints.map((point) => (
              <p key={point} className="policy-card__description founding-principles-page__item">
                {point}
              </p>
            ))}
          </div>
          <p className="policy-detail__summary family-page__followup-copy">
            Housing will be built based on real demand, not disconnected planning.
          </p>
        </div>
      </section>

      <section className="policy-foundation governance-page__section family-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">The Outcome</h2>
          </div>
        </div>
        <div className="policy-grid technology-ai-page__grid technology-ai-page__grid--four">
          {outcomePoints.map((point) => (
            <article key={point} className="policy-card technology-ai-page__card technology-ai-page__card--tight">
              <p className="technology-ai-page__card-line">{point}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="policy-foundation governance-page__section governance-page__closing family-page__closing">
        <div className="technology-ai-page__panel governance-page__full-panel">
          <h2 className="section-title">The Civil Standard</h2>
          <p className="policy-detail__summary">
            A civilized nation ensures its people can live, build, and raise families.
          </p>
          <h2 className="section-title family-page__closing-title">Closing</h2>
          <p className="policy-detail__summary family-page__closing-line">Canada will build again.</p>
          <p className="policy-detail__summary family-page__closing-line">Homes for Canadians.</p>
          <p className="policy-detail__summary family-page__closing-line">Communities that function.</p>
          <p className="policy-detail__summary family-page__closing-line">A society that works.</p>
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