import { Link } from 'react-router-dom'

import { aboutItems } from '../data/navigation'

export default function AboutPage() {
  const pages = aboutItems.filter((item) => !item.hideInNav)

  return (
    <div className="policy-detail">
      <section className="policy-detail__panel">
        <p className="eyebrow">About CCC</p>
        <h1 className="policy-detail__title">About</h1>
        <p className="policy-detail__summary">
          Explore the current public leadership profile and the founding principles behind Civil
          Citizens for Canada Party.
        </p>
        <div className="policy-grid">
          {pages.map((page, index) => (
            <Link key={page.path} to={page.path} className="policy-card">
              <p className="policy-card__number">{index + 1}</p>
              <h2 className="policy-card__title">{page.label}</h2>
              <p className="policy-card__description">{page.summary}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}