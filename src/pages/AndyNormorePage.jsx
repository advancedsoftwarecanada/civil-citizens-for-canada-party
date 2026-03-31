import { Link } from 'react-router-dom'

import bookCoverImage from '../../assets/img/andy-normore/andy-normore-humans-in-the-singularity-book-cover.jpg'
import andyNormoreImage from '../../assets/img/andy-normore/andy-normore.jpg'

const fullBioUrl =
  'https://docs.google.com/presentation/d/1J0I963BStFUz4eleudN3ZH3TN2Xksf4t3Ou87XdbsRY/edit?usp=sharing'

const purchaseUrl = 'https://civilcitizens.ca/com/on/york-durham/orgs/civil-citizens-incorporated/shop'
const civilProfileUrl = 'https://civilcitizens.ca/u/andynormore'
const xProfileUrl = 'https://x.com/AndyNormore'

const systemPoints = [
  'Communicate',
  'Build businesses',
  'Earn income',
  'Coordinate locally',
  'Participate meaningfully in shaping their communities',
]

const bookBlurb = [
  'We are entering a moment in history where the rules that governed humanity for thousands of years are beginning to break.',
  'For most of our existence, intelligence was scarce. Skill was scarce. Knowledge was scarce.',
  'Those who possessed it led. Those who did not followed. That era is ending.',
]

export default function AndyNormorePage() {
  return (
    <div className="leadership-page leadership-page--profile">
      <section className="leadership-page__section leadership-page__section--profile">
        <div className="leadership-profile__hero">
          <div className="leadership-profile__visual-wrap">
            <img
              src={andyNormoreImage}
              alt="Andrew Normore, Chairman and Founder"
              className="leadership-profile__image"
            />
          </div>

          <div className="leadership-profile__hero-copy">
            <p className="eyebrow">Leadership</p>
            <h1 className="leadership-page__title leadership-page__title--profile">Andrew Normore</h1>
            <p className="leadership-profile__role">Chairman &amp; Founder</p>
            <p className="section-copy leadership-page__intro">
              Andrew Normore is the founder of Civil Citizens and the architect behind its core
              system, a unified platform designed to rebuild how Canadians connect, work, trade,
              and participate in society.
            </p>
          </div>
        </div>

        <div className="leadership-profile__body">
          <div className="leadership-profile__panel">
            <p className="leadership-profile__paragraph">
              With over two decades of experience in software development, systems design, and
              business strategy, Andrew has built and scaled products across multiple industries.
              His work has generated over $1 million in revenue for organizations and led the
              development of advanced AI-driven platforms, automation systems, and next-generation
              marketplaces.
            </p>
            <p className="leadership-profile__paragraph">Civil Citizens is the culmination of that experience.</p>
            <p className="leadership-profile__statement">It was not built as another startup.</p>
            <p className="leadership-profile__statement">It was built as infrastructure.</p>
            <p className="leadership-profile__paragraph">
              Andrew recognized a fundamental problem: Canadians create value every day, but that
              value is fragmented across foreign-owned platforms that do not serve the long-term
              interests of the people using them.
            </p>
            <p className="leadership-profile__paragraph leadership-profile__paragraph--strong">
              Civil is the response.
            </p>
          </div>

          <div className="leadership-profile__panel">
            <h2 className="section-title leadership-profile__section-title">Under His Leadership</h2>
            <p className="leadership-profile__paragraph">
              Civil Citizens is being developed as a fully integrated system where citizens can:
            </p>
            <div className="cta-page__feature-list leadership-profile__feature-list">
              {systemPoints.map((point) => (
                <span key={point}>{point}</span>
              ))}
            </div>
            <p className="leadership-profile__paragraph leadership-profile__paragraph--strong">
              All within a single network.
            </p>
            <p className="leadership-profile__paragraph">
              Andrew&apos;s approach is direct and execution-driven. He does not focus on theory, he
              builds systems that work.
            </p>
            <p className="leadership-profile__paragraph">
              His background includes service in the Canadian Armed Forces, where discipline,
              structure, and resilience became foundational to his leadership style. That
              philosophy now carries into Civil: a system designed not for spectators, but for
              builders.
            </p>
            <p className="leadership-profile__paragraph">
              He believes the future belongs to those who create real systems, not just ideas.
            </p>
            <p className="leadership-profile__paragraph leadership-profile__paragraph--strong">
              Civil Citizens is his commitment to that belief.
            </p>
          </div>

          <div className="leadership-profile__panel leadership-profile__book-panel">
            <div className="leadership-profile__book-grid">
              <Link
                to="/about/leadership/andy-normore/humans-in-the-singularity"
                className="leadership-book__visual-wrap leadership-profile__book-link"
                aria-label="Humans In The Singularity"
              >
                <img
                  src={bookCoverImage}
                  alt="Humans In The Singularity book cover"
                  className="leadership-book__image"
                />
              </Link>
              <div className="leadership-profile__book-copy">
                <h2 className="section-title leadership-profile__section-title">Humans In The Singularity</h2>
                <div className="leadership-book__intro leadership-book__intro--compact">
                  {bookBlurb.map((paragraph) => (
                    <p key={paragraph} className="leadership-profile__paragraph">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <div className="donate-page__actions">
                  <a href={purchaseUrl} className="button button--primary" target="_blank" rel="noreferrer">
                    Preorder Andys first book with the Civil App!
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="leadership-profile__panel leadership-profile__panel--cta">
            <h2 className="section-title leadership-profile__section-title">Contact Andrew Normore</h2>
            <div className="leadership-profile__contact-list">
              <p className="leadership-profile__paragraph">
                <strong>Email:</strong>{' '}
                <a href="mailto:AndrewNormore@gmail.com" className="leadership-profile__contact-link">
                  AndrewNormore@gmail.com
                </a>
              </p>
              <p className="leadership-profile__paragraph">
                <strong>Email:</strong>{' '}
                <a href="mailto:Andy@CivilCitizens.ca" className="leadership-profile__contact-link">
                  Andy@CivilCitizens.ca
                </a>
              </p>
              <p className="leadership-profile__paragraph">
                <strong>Civil:</strong>{' '}
                <a href={civilProfileUrl} className="leadership-profile__contact-link" target="_blank" rel="noreferrer">
                  {civilProfileUrl}
                </a>
              </p>
              <p className="leadership-profile__paragraph">
                <strong>X:</strong>{' '}
                <a href={xProfileUrl} className="leadership-profile__contact-link" target="_blank" rel="noreferrer">
                  {xProfileUrl}
                </a>
              </p>
            </div>
          </div>

          <div className="leadership-profile__panel leadership-profile__panel--cta">
            <h2 className="section-title leadership-profile__section-title">Full Biography</h2>
            <p className="leadership-profile__paragraph">
              Read Andrew Normore&apos;s full biography and background presentation.
            </p>
            <div className="donate-page__actions">
              <a href={fullBioUrl} className="button button--primary" target="_blank" rel="noreferrer">
                View Full Biography
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}