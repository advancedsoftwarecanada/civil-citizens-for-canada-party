import { Link } from 'react-router-dom'

const principles = [
  {
    number: '1',
    title: 'Citizen-Led, Not Institution-Led',
    bullets: [
      'Power originates from citizens, not centralized institutions.',
      'Representation must be built from the ground up.',
      'Participation is expected, not optional.',
    ],
  },
  {
    number: '2',
    title: 'System Over Fragmentation',
    bullets: [
      'Canada does not need more platforms. It needs a unified system.',
      'Communication, commerce, and governance must operate together.',
      'Efficiency comes from integration, not duplication.',
    ],
  },
  {
    number: '3',
    title: 'Local First, National Always',
    bullets: [
      'Every citizen is rooted in an Electoral District.',
      'Strong local communities create a strong nation.',
      'National coordination emerges from local organization.',
    ],
  },
  {
    number: '4',
    title: 'Economic Self-Sufficiency',
    bullets: [
      'Canadians should be able to earn, trade, and build within their own network.',
      'Value created in Canada should remain in Canada.',
      'Local economies must be strengthened, not extracted from.',
    ],
  },
  {
    number: '5',
    title: 'Real Identity, Real Accountability',
    bullets: [
      'Verified participation builds trust.',
      'Actions carry responsibility.',
      'No anonymous influence over real-world systems.',
    ],
  },
  {
    number: '6',
    title: 'Builders Over Spectators',
    bullets: [
      'Civil is for people who act, not observe.',
      'Leadership is demonstrated through contribution.',
      'Responsibility replaces complaint.',
    ],
  },
  {
    number: '7',
    title: 'Open Participation',
    bullets: [
      'Every Canadian has the right to participate meaningfully.',
      'Systems must be accessible, transparent, and fair.',
      'Opportunity is not restricted to elites or institutions.',
    ],
    note: 'Aligned with core Canadian democratic rights like participation and representation.',
  },
  {
    number: '8',
    title: 'Freedom with Responsibility',
    bullets: [
      'Freedom of expression, association, and action are foundational.',
      'With freedom comes accountability to community and country.',
    ],
    note: 'Reflects Charter principles of freedoms and rights.',
  },
  {
    number: '9',
    title: 'Merit, Contribution, and Work',
    bullets: [
      'Value is created through effort and contribution.',
      'Systems should reward those who build, create, and serve.',
      'Personal responsibility is a core expectation.',
    ],
    note: 'Consistent with Canadian civic values of responsibility and contribution.',
  },
  {
    number: '10',
    title: 'Technology as Infrastructure',
    bullets: [
      'Technology is not entertainment. It is coordination infrastructure.',
      'Civil exists to enable real-world outcomes.',
      'Digital systems must serve physical communities.',
    ],
  },
  {
    number: '11',
    title: 'Unity Through Shared Purpose',
    bullets: [
      'Canada is strongest when aligned toward common goals.',
      'Differences are resolved through participation, not division.',
      'A functioning system reduces conflict by enabling action.',
    ],
  },
  {
    number: '12',
    title: 'Build the Future, Don’t Wait for It',
    bullets: [
      'Change does not come from critique. It comes from construction.',
      'Citizens must actively shape the systems they live in.',
      'The future belongs to those who build it.',
    ],
  },
]

export default function FoundingPrinciplesPage() {
  return (
    <div className="policy-detail founding-principles-page">
      <section className="policy-detail__panel founding-principles-page__hero">
        <p className="eyebrow">About CCC</p>
        <h1 className="policy-detail__title">Founding Principles</h1>
        <p className="policy-detail__summary">
          These are the operating principles behind Civil Citizens for Canada Party. They are not
          abstract values. They are expectations for how a real citizen system should function.
        </p>
        <div className="policy-aside__list founding-principles-page__tags" aria-label="Founding themes">
          <span>Citizens</span>
          <span>Responsibility</span>
          <span>Local First</span>
          <span>National Coordination</span>
          <span>Infrastructure</span>
          <span>Builders</span>
        </div>
      </section>

      <section className="policy-foundation founding-principles-page__section">
        <div className="policy-grid founding-principles-page__grid">
          {principles.map((principle) => (
            <article key={principle.number} className="policy-card founding-principles-page__card">
              <p className="policy-card__number">{principle.number}</p>
              <h3 className="policy-card__title">{principle.title}</h3>
              <div className="founding-principles-page__list">
                {principle.bullets.map((bullet) => (
                  <p key={bullet} className="policy-card__description founding-principles-page__item">
                    {bullet}
                  </p>
                ))}
              </div>
              {principle.note ? (
                <p className="founding-principles-page__note">{principle.note}</p>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="policy-foundation founding-principles-page__section founding-principles-page__closing">
        <h2 className="founding-principles-page__expectation">
          These principles are not statements. They are expectations of every Civil Citizen.
        </h2>
        <div className="nav-placeholder__actions founding-principles-page__actions">
          <Link to="/about/leadership" className="button button--secondary">
            Back to Leadership
          </Link>
        </div>
      </section>
    </div>
  )
}