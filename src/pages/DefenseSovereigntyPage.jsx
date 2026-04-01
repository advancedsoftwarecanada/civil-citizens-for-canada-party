import { Link } from 'react-router-dom'

const personalSecurityPoints = [
  'Strengthen the legal right of individuals to defend themselves within their homes',
  'Ensure laws clearly support lawful self-defense',
  'Prioritize the protection of victims over offenders',
]

const justiceSystemPoints = ['Fair', 'Predictable', 'Enforced']

const justiceMeasures = [
  'Limiting repeat release of high-risk offenders',
  'Ensuring serious crimes result in meaningful consequences',
  'Aligning bail decisions with public safety risk',
]

const violencePoints = [
  'Threats or actions that create fear or intimidation',
  'Organized or coordinated attempts to incite harm',
  'Public conduct that crosses into intimidation or coercion',
]

const addictionPoints = [
  'Expand access to treatment and recovery centres',
  'Provide structured rehabilitation programs',
  'Support reintegration into society through work and community',
]

const housingPoints = [
  'Establish pathways to stable housing',
  'Connect housing with treatment, work, and support systems',
  'Ensure that long-term homelessness is addressed through coordinated intervention',
]

const defenseReadinessPoints = [
  'Defend its territory',
  'Support its allies',
  'Respond to global instability',
]

const civilStandardPoints = [
  'Protects its citizens',
  'Enforces its laws',
  'Maintains order with fairness and strength',
]

const closingPoints = ['Safe', 'Stable', 'Disciplined', 'Sovereign']

export default function DefenseSovereigntyPage() {
  return (
    <div className="policy-detail governance-page defense-page">
      <section className="policy-detail__panel governance-page__hero defense-page__hero">
        <div className="technology-ai-page__hero-grid">
          <div>
            <p className="eyebrow">Platform / Defense & Sovereignty</p>
            <h1 className="policy-detail__title">A Safe Nation is a Strong Nation</h1>
            <p className="policy-detail__summary">Sovereignty begins at home.</p>
            <p className="policy-detail__summary">
              A country cannot be strong abroad if it is unstable within its own borders.
            </p>
            <p className="policy-detail__summary">
              Canada must ensure that its citizens are safe, its laws are respected, and its
              systems are functioning.
            </p>
          </div>

          <aside className="policy-aside technology-ai-page__aside">
            <p className="policy-aside__eyebrow">The Civil Standard</p>
            <h2 className="policy-aside__title">Domestic order is the foundation of sovereignty.</h2>
            <p className="policy-aside__copy">
              Canada must be secure at the level of the home, the street, the justice system, and
              the nation itself.
            </p>
          </aside>
        </div>
      </section>

      <section className="policy-foundation governance-page__section defense-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">The Right to Personal Security</h2>
          </div>
          <p className="section-copy">
            Law-abiding Canadians have the right to feel safe in their homes and communities.
          </p>
        </div>
        <div className="technology-ai-page__panel">
          <p className="policy-detail__summary">Canada will:</p>
          <div className="founding-principles-page__list technology-ai-page__list">
            {personalSecurityPoints.map((point) => (
              <p key={point} className="policy-card__description founding-principles-page__item">
                {point}
              </p>
            ))}
          </div>
          <p className="policy-detail__summary defense-page__followup-copy">
            Public safety begins with empowering responsible citizens.
          </p>
        </div>
      </section>

      <section className="policy-foundation governance-page__section defense-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">Restoring Balance in the Justice System</h2>
          </div>
          <p className="section-copy">Canada&apos;s justice system must be:</p>
        </div>
        <div className="policy-grid governance-page__grid governance-page__grid--three">
          {justiceSystemPoints.map((point) => (
            <article key={point} className="policy-card technology-ai-page__card technology-ai-page__card--tight">
              <p className="technology-ai-page__card-line">{point}</p>
            </article>
          ))}
        </div>
        <div className="technology-ai-page__panel defense-page__panel-spaced">
          <p className="policy-detail__summary">This includes:</p>
          <div className="founding-principles-page__list technology-ai-page__list">
            {justiceMeasures.map((point) => (
              <p key={point} className="policy-card__description founding-principles-page__item">
                {point}
              </p>
            ))}
          </div>
          <p className="policy-detail__summary defense-page__followup-copy">
            Those who pose a clear threat to others should not be repeatedly returned to the public
            without accountability.
          </p>
        </div>
      </section>

      <section className="policy-foundation governance-page__section defense-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">Zero Tolerance for Violence and Intimidation</h2>
          </div>
          <p className="section-copy">Canada must remain a peaceful and civil society.</p>
        </div>
        <div className="technology-ai-page__split-grid">
          <div className="technology-ai-page__panel">
            <p className="policy-detail__summary">
              Acts that promote or incite violence will be treated seriously under the law.
            </p>
            <p className="policy-detail__summary">This includes:</p>
            <div className="founding-principles-page__list technology-ai-page__list">
              {violencePoints.map((point) => (
                <p key={point} className="policy-card__description founding-principles-page__item">
                  {point}
                </p>
              ))}
            </div>
          </div>
          <div className="technology-ai-page__panel technology-ai-page__panel--accent">
            <p className="technology-ai-page__card-line governance-page__card-line--statement">
              Freedom of expression does not include the right to threaten others.
            </p>
          </div>
        </div>
      </section>

      <section className="policy-foundation governance-page__section defense-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">Addressing Addiction and Recovery</h2>
          </div>
          <p className="section-copy">
            Addiction is both a health crisis and a public safety issue.
          </p>
        </div>
        <div className="technology-ai-page__split-grid">
          <div className="technology-ai-page__panel">
            <p className="policy-detail__summary">Canada will:</p>
            <div className="founding-principles-page__list technology-ai-page__list">
              {addictionPoints.map((point) => (
                <p key={point} className="policy-card__description founding-principles-page__item">
                  {point}
                </p>
              ))}
            </div>
          </div>
          <div className="technology-ai-page__panel technology-ai-page__panel--accent">
            <p className="policy-detail__summary">
              Where individuals repeatedly pose a risk to themselves or others, structured
              intervention will be required.
            </p>
            <p className="policy-detail__summary defense-page__followup-copy">
              Programs will be enforced through the justice system where necessary.
            </p>
            <p className="technology-ai-page__card-line governance-page__card-line--statement">
              The goal is recovery, not abandonment.
            </p>
          </div>
        </div>
      </section>

      <section className="policy-foundation governance-page__section defense-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">Ending Chronic Homelessness</h2>
          </div>
          <p className="section-copy">
            In a functioning society, no citizen should be left without shelter.
          </p>
        </div>
        <div className="technology-ai-page__panel">
          <p className="policy-detail__summary">Canada will:</p>
          <div className="founding-principles-page__list technology-ai-page__list">
            {housingPoints.map((point) => (
              <p key={point} className="policy-card__description founding-principles-page__item">
                {point}
              </p>
            ))}
          </div>
          <p className="policy-detail__summary defense-page__followup-copy">This is not optional.</p>
          <p className="policy-detail__summary defense-page__followup-copy">
            It is a baseline standard of a civilized country.
          </p>
        </div>
      </section>

      <section className="policy-foundation governance-page__section defense-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">National Defense and Readiness</h2>
          </div>
          <p className="section-copy">Canada must maintain the ability to:</p>
        </div>
        <div className="policy-grid governance-page__grid governance-page__grid--three">
          {defenseReadinessPoints.map((point) => (
            <article key={point} className="policy-card technology-ai-page__card technology-ai-page__card--tight">
              <p className="technology-ai-page__card-line">{point}</p>
            </article>
          ))}
        </div>
        <div className="technology-ai-page__panel defense-page__panel-spaced">
          <p className="policy-detail__summary">
            A strong domestic foundation supports a strong international presence.
          </p>
        </div>
      </section>

      <section className="policy-foundation governance-page__section defense-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">The Civil Standard</h2>
          </div>
        </div>
        <div className="policy-aside__list technology-ai-page__outcomes" aria-label="Defense and sovereignty standard">
          {civilStandardPoints.map((point) => (
            <span key={point}>{point}</span>
          ))}
        </div>
      </section>

      <section className="policy-foundation governance-page__section governance-page__closing defense-page__closing">
        <div className="technology-ai-page__panel governance-page__full-panel">
          <h2 className="section-title">Closing</h2>
          <p className="policy-detail__summary">Canada will be:</p>
          <div className="policy-aside__list technology-ai-page__outcomes defense-page__outcomes" aria-label="Closing defense outcomes">
            {closingPoints.map((point) => (
              <span key={point}>{point}</span>
            ))}
          </div>
          <p className="policy-detail__summary defense-page__closing-line">
            Because without order, nothing else functions.
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