import { Link } from 'react-router-dom'

const stabilizationPoints = [
  'Expanding housing supply',
  'Strengthening healthcare and infrastructure',
  'Integrating newcomers already in Canada',
  'Supporting workforce participation',
]

const capacityPoints = [
  'Housing availability',
  'Employment conditions',
  'Wage growth',
  'Infrastructure capacity',
]

const economicAlignmentPoints = [
  'Addressing verified labour shortages',
  'Supporting key industries',
  'Strengthen local economies',
]

const enforcementPoints = [
  'Timely processing of all immigration decisions',
  'Enforcement of removal orders where legal status no longer applies',
  'Efficient systems to ensure compliance with Canadian law',
]

const enforcementStandards = ['Firm', 'Fair', 'Consistent', 'Lawful']

const integrityPoints = [
  'Those who follow the process are respected',
  'Decisions are upheld',
  'Outcomes are carried through',
]

const contributionPoints = [
  'Participate in the workforce',
  'Contribute to their communities',
  'Integrate into Canadian civic life',
]

export default function ImmigrationPage() {
  return (
    <div className="policy-detail immigration-page">
      <section className="policy-detail__panel immigration-page__hero">
        <div className="technology-ai-page__hero-grid">
          <div>
            <p className="eyebrow">Platform / Immigration</p>
            <h1 className="policy-detail__title">Stabilize First. Then Grow.</h1>
            <p className="policy-detail__summary">
              Canada must align immigration with its ability to support people already here and
              those who arrive.
            </p>
            <p className="policy-detail__summary">
              Immigration will continue, but it must be structured, measured, and tied to real
              capacity.
            </p>
          </div>

          <aside className="policy-aside technology-ai-page__aside">
            <p className="policy-aside__eyebrow">The Civil Standard</p>
            <h2 className="policy-aside__title">
              Canada remains open.
            </h2>
            <p className="policy-aside__copy">
              But openness must be structured, sustainable, and aligned with the well-being of all Canadians.
            </p>
          </aside>
        </div>
      </section>

      <section className="policy-foundation immigration-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">Temporary Stabilization Phase</h2>
          </div>
          <p className="section-copy">
            Canada will implement a period of stabilization where immigration levels are reduced
            to sustainable levels.
          </p>
        </div>
        <div className="policy-grid technology-ai-page__grid technology-ai-page__grid--four">
          {stabilizationPoints.map((point) => (
            <article key={point} className="policy-card technology-ai-page__card technology-ai-page__card--tight">
              <p className="technology-ai-page__card-line">{point}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="policy-foundation immigration-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">Capacity-Based Growth</h2>
          </div>
          <p className="section-copy">
            Future immigration levels will be determined by Canada&apos;s readiness, not arbitrary targets.
          </p>
        </div>
        <div className="technology-ai-page__panel">
          <p className="policy-detail__summary">Key indicators include:</p>
          <div className="founding-principles-page__list technology-ai-page__list">
            {capacityPoints.map((point) => (
              <p key={point} className="policy-card__description founding-principles-page__item">
                {point}
              </p>
            ))}
          </div>
          <p className="policy-detail__summary immigration-page__followup-copy">
            Immigration will increase only when these conditions support it.
          </p>
        </div>
      </section>

      <section className="policy-foundation immigration-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">Economic Alignment</h2>
          </div>
          <p className="section-copy">
            Immigration must directly support Canada&apos;s needs.
          </p>
        </div>
        <div className="technology-ai-page__split-grid">
          <div className="technology-ai-page__panel">
            <div className="founding-principles-page__list technology-ai-page__list">
              {economicAlignmentPoints.map((point) => (
                <p key={point} className="policy-card__description founding-principles-page__item">
                  {point}
                </p>
              ))}
            </div>
          </div>
          <div className="technology-ai-page__panel technology-ai-page__panel--accent">
            <p className="policy-detail__summary">
              Through Chambers of Citizens, local communities will help signal real demand and readiness.
            </p>
          </div>
        </div>
      </section>

      <section className="policy-foundation immigration-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">Lawful Immigration and Enforcement</h2>
          </div>
          <p className="section-copy">
            Canada is a nation governed by law. A credible immigration system requires that rules are clearly defined and consistently enforced.
          </p>
        </div>
        <div className="technology-ai-page__split-grid">
          <div className="technology-ai-page__panel">
            <p className="policy-detail__summary">This includes:</p>
            <div className="founding-principles-page__list technology-ai-page__list">
              {enforcementPoints.map((point) => (
                <p key={point} className="policy-card__description founding-principles-page__item">
                  {point}
                </p>
              ))}
            </div>
          </div>
          <div className="technology-ai-page__panel technology-ai-page__panel--accent">
            <p className="policy-detail__summary">
              Those who are not authorized to remain in Canada will be processed through a system that is:
            </p>
            <div className="policy-aside__list immigration-page__inline-tags" aria-label="Enforcement standards">
              {enforcementStandards.map((point) => (
                <span key={point}>{point}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="policy-foundation immigration-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">System Integrity and Public Trust</h2>
          </div>
          <p className="section-copy">A system that is not enforced loses legitimacy.</p>
        </div>
        <div className="technology-ai-page__panel">
          <p className="policy-detail__summary">Fairness requires that:</p>
          <div className="founding-principles-page__list technology-ai-page__list">
            {integrityPoints.map((point) => (
              <p key={point} className="policy-card__description founding-principles-page__item">
                {point}
              </p>
            ))}
          </div>
          <p className="policy-detail__summary immigration-page__followup-copy">
            Restoring integrity to the system is essential to maintaining public confidence.
          </p>
        </div>
      </section>

      <section className="policy-foundation immigration-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">Integration and Contribution</h2>
          </div>
        </div>
        <div className="technology-ai-page__panel">
          <p className="policy-detail__summary">Newcomers to Canada are expected to:</p>
          <div className="founding-principles-page__list technology-ai-page__list">
            {contributionPoints.map((point) => (
              <p key={point} className="policy-card__description founding-principles-page__item">
                {point}
              </p>
            ))}
          </div>
          <p className="policy-detail__summary immigration-page__followup-copy">
            This ensures long-term success for both individuals and the country.
          </p>
        </div>
      </section>

      <section className="policy-foundation immigration-page__section immigration-page__closing">
        <div className="technology-ai-page__panel immigration-page__full-panel">
          <h2 className="section-title">Closing</h2>
          <p className="policy-detail__summary immigration-page__note-strong">
            Canada will not grow beyond its capacity.
          </p>
          <p className="policy-detail__summary immigration-page__note-strong">
            It will grow with strength, stability, and purpose.
          </p>
        </div>
        <p className="policy-detail__summary immigration-page__closing-copy">
          Canada remains open. But openness must be structured, sustainable, and aligned with the well-being of all Canadians.
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