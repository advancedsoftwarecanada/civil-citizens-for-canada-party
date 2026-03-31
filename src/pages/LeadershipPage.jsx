import { Link } from 'react-router-dom'

import andyNormoreImage from '../../assets/img/andy-normore/andy-normore.jpg'
import edaMapImage from '../../assets/img/eda-map.jpg'
import federalCandidateImage from '../../assets/img/become-a-federal-candidate-skyscraper.jpg'

const chambersUrl = 'https://civilcitizens.ca/politicians/federal/current'

const meaningPoints = [
  'You are choosing to represent your community',
  'You are choosing to participate — not complain',
  'You are choosing to help build something real',
]

const missionPoints = [
  'We need representation in all 343 districts across Canada',
  'Every filled position strengthens the network',
  'Every candidate brings us closer to a functioning system',
]

export default function LeadershipPage() {
  return (
    <div className="leadership-page">
      <section className="leadership-page__section">
        <div className="leadership-page__header">
          <p className="eyebrow">About CCC</p>
          <h1 className="leadership-page__title">Leadership</h1>
          <p className="section-copy leadership-page__intro">
            Civil Citizens for Canada is being built by people focused on execution, structure,
            and long-term Canadian capacity. Meet the current founder profile below.
          </p>
        </div>

        <Link to="/about/leadership/andy-normore" className="leadership-page__card">
          <div className="leadership-page__visual-wrap">
            <img
              src={andyNormoreImage}
              alt="Andrew Normore, Chairman and Founder"
              className="leadership-page__image"
            />
          </div>
          <div className="leadership-page__content">
            <p className="leadership-page__label">Chairman &amp; Founder</p>
            <h2 className="leadership-page__name">Andrew Normore</h2>
            <p className="leadership-page__summary">
              Founder of Civil Citizens and architect of its core system, focused on building a
              unified platform for how Canadians connect, work, trade, and participate in society.
            </p>
            <span className="button button--primary leadership-page__button">Read Full Profile</span>
          </div>
        </Link>

        <div className="leadership-page__candidate-panel">
          <div className="leadership-page__candidate-grid">
            <div className="leadership-page__visual-wrap leadership-page__candidate-visual-wrap">
              <img
                src={federalCandidateImage}
                alt="Prospective federal candidate positions across Canada"
                className="leadership-page__image leadership-page__candidate-image"
              />
            </div>

            <div className="leadership-page__candidate-copy">
              <p className="leadership-page__label">A Call To Civil Citizens</p>
              <h2 className="leadership-page__name leadership-page__name--candidate">
                Become a Civil Citizens For Canada Party Federal Candidate!
              </h2>
              <p className="leadership-page__summary">
                This image represents the reality of Canada today.
              </p>
              <p className="leadership-page__summary">
                Some are already stepping forward. Many are not.
              </p>
              <p className="leadership-page__summary">
                Those empty profiles are not placeholders. They are positions of responsibility,
                waiting to be filled.
              </p>
              <p className="leadership-page__summary leadership-page__summary--strong">
                We are building representation across all 343 Electoral District Associations in
                Canada. Not someday. Now.
              </p>
              <p className="leadership-page__summary">
                We are not asking for spectators. We are calling on builders, leaders, and those
                willing to take responsibility for their communities.
              </p>
              <p className="leadership-page__summary">
                If you believe Canada can be stronger, more connected, and more self-sufficient,
                then this is your moment to step forward.
              </p>

              <div className="leadership-page__candidate-steps">
                <div className="leadership-page__candidate-block">
                  <h3 className="leadership-page__candidate-title">How to Become a Candidate</h3>
                  <p className="leadership-page__summary">
                    <strong>Step 1</strong>
                    <br />
                    Create your account on Civil Citizens.
                  </p>
                  <p className="leadership-page__summary">
                    <strong>Step 2</strong>
                    <br />
                    Send a message to Andy Normore with your Electoral District. State clearly
                    that you are stepping forward as a candidate.
                  </p>
                </div>

                <div className="leadership-page__candidate-block">
                  <h3 className="leadership-page__candidate-title">What This Means</h3>
                  <div className="leadership-book__toc-list leadership-page__candidate-list">
                    {meaningPoints.map((point) => (
                      <p key={point} className="leadership-book__toc-item">
                        {point}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="leadership-page__candidate-block">
                  <h3 className="leadership-page__candidate-title">The Mission</h3>
                  <div className="leadership-book__toc-list leadership-page__candidate-list">
                    {missionPoints.map((point) => (
                      <p key={point} className="leadership-book__toc-item">
                        {point}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="leadership-page__candidate-block leadership-page__candidate-moment">
                <h3 className="leadership-page__candidate-title">The Moment</h3>
                <p className="leadership-page__summary">The time is now. The future is moving fast.</p>
                <p className="leadership-page__summary">This is where it begins.</p>
                <p className="leadership-page__summary leadership-page__summary--strong">
                  Together, we build an ideal society.
                </p>
              </div>

              <div className="leadership-page__candidate-actions">
                <Link to="/become-a-civil-citizen" className="button button--primary">
                  Create Your Civil Account
                </Link>
                <Link to="/about/leadership/andy-normore" className="button button--secondary">
                  Contact Andy Normore
                </Link>
              </div>
            </div>
          </div>
        </div>

        <a
          href={chambersUrl}
          className="leadership-page__card"
          target="_blank"
          rel="noreferrer"
        >
          <div className="leadership-page__visual-wrap">
            <img
              src={edaMapImage}
              alt="Explore Electoral District Associations on Civil"
              className="leadership-page__image"
            />
          </div>
          <div className="leadership-page__content">
            <p className="leadership-page__label">Chambers of Citizens</p>
            <h2 className="leadership-page__name">Explore Your Electoral District Association</h2>
            <p className="leadership-page__summary">
              Explore your Electoral District Association with our Chambers of Citizens feature,
              exclusively on Civil.
            </p>
            <span className="button button--primary leadership-page__button">Explore EDA&apos;s on Civil</span>
          </div>
        </a>
      </section>
    </div>
  )
}