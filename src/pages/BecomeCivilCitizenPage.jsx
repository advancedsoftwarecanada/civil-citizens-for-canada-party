import civilCitizensLiveMapImage from '../../assets/img/become-a-civil-citizen/1-civil-citizens-live-eda-map.jpg'
import civilCitizensAppImage from '../../assets/img/become-a-civil-citizen/2-civil-citizens-app.jpg'
import joinCivilCitizensImage from '../../assets/img/become-a-civil-citizen/3-join-civil-citizens.jpg'
import signUpNowImage from '../../assets/img/become-a-civil-citizen/4-sign-up-now.jpg'

const civilPlatformUrl = 'https://civilcitizens.ca'
const chambersPath = '/the-civil-app/chambers-of-citizens'

export default function BecomeCivilCitizenPage() {
  return (
    <div className="cta-page">
      <section className="cta-page__hero">
        <div className="cta-page__hero-grid">
          <div className="cta-page__hero-content">
            <h1 className="cta-page__hero-title">How to Become a Civil Citizen</h1>
            <p className="cta-page__hero-copy">
              Civil is a technology platform designed to turn citizens into active participants
              in shaping Canada&apos;s future.
            </p>
            <p className="cta-page__hero-note">The app is 100% free for all Canadian Citizens.</p>
            <div className="cta-page__hero-actions">
              <a
                href={civilPlatformUrl}
                className="button button--primary cta-page__hero-button"
                target="_blank"
                rel="noreferrer"
              >
                Join Civil Citizens.ca
              </a>
            </div>
          </div>
          <a
            href={civilPlatformUrl}
            className="cta-page__visual cta-page__visual--link"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={joinCivilCitizensImage}
              alt="Join Civil Citizens promotional interface for creating an account"
              className="cta-page__image"
            />
          </a>
        </div>
      </section>

      <section className="cta-page__section">
        <h2 className="cta-page__section-title">It Starts With The Civil Citizens App / Website</h2>
        <div className="cta-page__section-grid">
          <div className="cta-page__panel">
            <p className="cta-page__body">
              Civil is more than a social network, it&apos;s a tool we can utilize to create
              change that is recognized at the Federal level.
            </p>
            <p className="cta-page__body">
              With Civil, we can restore Canada&apos;s economic layer. Civil has many features
              that allow Canadians to conduct commerce in a peer to peer way, with super low
              transaction fees.
            </p>
            <div className="cta-page__feature-list" aria-label="Civil platform features">
              <span>Social</span>
              <span>Marketplace</span>
              <span>Events</span>
              <span>Organizations</span>
              <span>Virtual Meeting Rooms</span>
              <span>Careers</span>
              <span>Rides</span>
              <span>Causes</span>
            </div>
            <div className="cta-page__panel-actions">
              <a href={civilPlatformUrl} className="button button--primary" target="_blank" rel="noreferrer">
                Get The App
              </a>
            </div>
          </div>
          <div className="cta-page__visual cta-page__visual--section">
            <img
              src={civilCitizensAppImage}
              alt="Civil Citizens application interface showing the platform in use"
              className="cta-page__image"
            />
          </div>
        </div>
      </section>

      <section className="cta-page__section">
        <h2 className="cta-page__section-title">Chambers Of Citizens</h2>
        <div className="cta-page__section-grid">
          <div className="cta-page__panel">
            <p className="cta-page__body">
              By joining the Civil Citizens network, we organically organize ourselves by
              federally recognized Electoral District Associations, which we call Chambers of
              Citizens.
            </p>
            <p className="cta-page__participation-statement">
              This is where our power to build the future is.
            </p>
            <p className="cta-page__body">
              The more users we have, the stronger the network becomes.
            </p>
            <div className="cta-page__panel-actions">
              <a href={chambersPath} className="button button--secondary">
                Learn About Chambers
              </a>
            </div>
          </div>
          <div className="cta-page__visual cta-page__visual--section">
            <img
              src={civilCitizensLiveMapImage}
              alt="Civil Citizens map showing local district participation across Canada"
              className="cta-page__image"
            />
          </div>
        </div>
      </section>

      <section className="cta-page__section">
        <h2 className="cta-page__section-title">How The App Creates A Civil Society</h2>
        <div className="cta-page__steps">
          <article className="cta-page__step-card">
            <span className="cta-page__step-number">Step 1</span>
            <h3 className="cta-page__step-title">Create Your Account</h3>
            <p className="cta-page__step-copy">
              Sign up on CivilCitizens.ca and enter the system.
            </p>
          </article>
          <article className="cta-page__step-card">
            <span className="cta-page__step-number">Step 2</span>
            <h3 className="cta-page__step-title">Join Your Chamber of Citizens</h3>
            <p className="cta-page__step-copy">
              You will be automatically connected to your local Electoral District (EDA),
              forming your Chamber of Citizens.
            </p>
          </article>
          <article className="cta-page__step-card">
            <span className="cta-page__step-number">Step 3</span>
            <h3 className="cta-page__step-title">Connect and Coordinate</h3>
            <p className="cta-page__step-copy">
              Meet other Civil Citizens in your district. Discuss ideas. Organize locally.
              Plan real initiatives.
            </p>
          </article>
          <article className="cta-page__step-card">
            <span className="cta-page__step-number">Step 4</span>
            <h3 className="cta-page__step-title">Grow the Network</h3>
            <p className="cta-page__step-copy">
              Invite your friends, family, and local businesses. Every new member
              strengthens your district and increases collective influence.
            </p>
          </article>
        </div>
      </section>

      <section className="cta-page__final">
        <h2 className="cta-page__final-title">
          TOGETHER,
          <br />
          WE BUILD AN IDEAL SOCIETY
        </h2>
        <div className="cta-page__section-grid cta-page__section-grid--final">
          <div className="cta-page__panel cta-page__panel--final">
            <p className="cta-page__lead">Civil is not just a social network.</p>
            <p className="cta-page__body">
              It is a system designed to:
            </p>
            <div className="cta-page__beats" aria-label="What Civil is designed to do">
              <span>connect citizens locally</span>
              <span>organize communities</span>
              <span>coordinate action</span>
              <span>build real change</span>
            </div>
            <p className="cta-page__closing">This is where participation actually happens.</p>
            <p className="cta-page__final-question">
              Are you ready to join and become a Civil Citizen?
            </p>
            <div className="cta-page__final-actions">
              <a href={civilPlatformUrl} className="button button--primary cta-page__final-button" target="_blank" rel="noreferrer">
                YES! I want to build the future!
              </a>
            </div>
          </div>
          <a
            href={civilPlatformUrl}
            className="cta-page__visual cta-page__visual--link cta-page__visual--section"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={signUpNowImage}
              alt="Sign up now promotional image for joining Civil Citizens"
              className="cta-page__image"
            />
          </a>
        </div>
      </section>
    </div>
  )
}