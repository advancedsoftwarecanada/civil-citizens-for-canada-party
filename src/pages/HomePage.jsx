import { Link } from 'react-router-dom'

import becomingCivilCitizenImage from '../../assets/img/home/1-becoming-a-civil-citizen.jpg'
import theChangeImage from '../../assets/img/home/2-the-change.jpg'
import turnOffTvImage from '../../assets/img/home/3-turn-off-tv.jpg'

export default function HomePage() {
  return (
    <div className="home-page">
      <section className="hero-panel hero-panel--home">
        <img
          src="/assets/img/Civil-Citizens-For-Canada-Party.jpg"
          alt="Civil Citizens For Canada Party logo"
          className="hero-logo"
        />
        <h1 className="hero-title">
          TOGETHER,
          <br />
          WE BUILD AN IDEAL FUTURE
        </h1>
        <p className="hero-copy">
          Civil Citizens For Canada Party is laying out a platform focused on work, growth,
          transparency, and a tax system ordinary citizens can understand.
        </p>
      </section>

      <section className="home-feature home-feature--split">
        <div className="home-feature__content">
          <h2 className="section-title">From Passive Status To Active Responsibility</h2>
          <p className="section-copy home-feature__copy">
            A Civil Citizen is someone who has chosen to move from passive participation to
            active responsibility in shaping Canada&apos;s future.
          </p>
          <p className="home-feature__copy">
            In today&apos;s system, most people engage with politics only during elections,
            casting a vote and then stepping back while decisions are made on their behalf.
          </p>
          <p className="home-feature__copy home-feature__copy--strong">A Civil Citizen does more.</p>
        </div>
        <div className="home-visual">
          <img
            src={becomingCivilCitizenImage}
            alt="People gathered together, representing becoming a Civil Citizen"
            className="home-visual__image"
          />
        </div>
      </section>

      <section className="home-feature home-feature--stack">
        <div className="home-feature__header">
          <h2 className="section-title">What A Civil Citizen Actually Does</h2>
          <p className="section-copy">
            This is made possible through Civil, a platform designed to give citizens real tools
            to participate in governance, economics, and community building.
          </p>
        </div>
        <div className="home-points">
          <article className="home-point">
            <h3 className="home-point__title">Participates Continuously</h3>
            <p className="home-point__copy">Not just periodically or at election time.</p>
          </article>
          <article className="home-point">
            <h3 className="home-point__title">Contributes Ideas</h3>
            <p className="home-point__copy">Offers feedback, solutions, and practical direction.</p>
          </article>
          <article className="home-point">
            <h3 className="home-point__title">Works Locally</h3>
            <p className="home-point__copy">Engages at the community level where outcomes begin.</p>
          </article>
          <article className="home-point">
            <h3 className="home-point__title">Shapes Outcomes</h3>
            <p className="home-point__copy">Helps build economic and social results instead of only reacting.</p>
          </article>
        </div>
      </section>

      <section className="home-feature home-feature--split home-feature--reverse">
        <div className="home-visual home-visual--compact">
          <img
            src={theChangeImage}
            alt="Hands joined in solidarity, representing change through civic participation"
            className="home-visual__image"
          />
        </div>
        <div className="home-feature__content">
          <h2 className="section-title">Being A Civil Citizen Is A Decision</h2>
          <div className="home-contrast">
            <div className="home-contrast__item">
              <span className="home-contrast__label">Status</span>
              <p className="home-contrast__text">Being a Canadian citizen is a status.</p>
            </div>
            <div className="home-contrast__item">
              <span className="home-contrast__label">Decision</span>
              <p className="home-contrast__text">Being a Civil Citizen is a decision.</p>
            </div>
          </div>
          <ul className="home-list" aria-label="Civil Citizen choices">
            <li>Choosing to be involved.</li>
            <li>Choosing to contribute.</li>
            <li>Choosing to build, not just observe.</li>
          </ul>
        </div>
      </section>

      <section className="home-feature home-feature--stack">
        <div className="home-feature__header">
          <h2 className="section-title">Shift From Reaction To Construction</h2>
        </div>
        <div className="home-compare">
          <article className="home-compare__card home-compare__card--muted">
            <span className="home-compare__tag">Instead Of</span>
            <p className="home-compare__quote">
              &ldquo;Damn politicians don&apos;t do anything&rdquo;
              <br />
              &ldquo;This system is broken&rdquo;
              <br />
              &ldquo;It&apos;s not fair&rdquo;
              <br />
              &ldquo;Burn it all down&rdquo;
            </p>
          </article>
          <article className="home-compare__card home-compare__card--accent">
            <span className="home-compare__tag">Say</span>
            <p className="home-compare__quote">
              &ldquo;I&apos;m going to be part of the solution&rdquo;
              <br />
              &ldquo;We&apos;re going to build something better&rdquo;
              <br />
              &ldquo;If the system doesn&apos;t work, we redesign it&rdquo;
              <br />
              &ldquo;We don&apos;t wait, we build&rdquo;
            </p>
          </article>
        </div>
        <div className="home-micro-points" aria-label="Message framing">
          <span>This is anger without direction.</span>
          <span>This is power with direction.</span>
        </div>
      </section>

      <section className="home-feature home-feature--statement">
        <div className="home-statement-panel">
          <img
            src={turnOffTvImage}
            alt="Citizen taking action instead of passively watching politics"
            className="home-statement-panel__image"
          />
          <blockquote className="home-statement">
            Democracy should not be something you visit every four years. It should be something
            you live in every day.
          </blockquote>
          <Link to="/become-a-civil-citizen" className="button button--primary home-statement__cta">
            Become a Civil Citizen
          </Link>
        </div>
      </section>
    </div>
  )
}
