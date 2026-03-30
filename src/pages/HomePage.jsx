import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <section className="hero-panel hero-panel--home">
      <img
        src="/assets/img/Civil-Citizens-For-Canada-Party.png"
        alt="Civil Citizens For Canada Party logo"
        className="hero-logo"
      />
      <h1 className="hero-title">Building a Fairer Canada</h1>
      <p className="hero-copy">
        Civil Citizens For Canada Party is laying out a platform focused on work, growth,
        transparency, and a tax system ordinary citizens can understand.
      </p>
      <div className="hero-actions">
        <Link to="/economic-policy" className="button button--primary">
          Economic Policy
        </Link>
        <Link to="/economic-policy#foundation" className="button button--secondary">
          Tax Reform Foundation
        </Link>
      </div>
    </section>
  )
}
