import { Link } from 'react-router-dom'

import { supportItems } from '../data/navigation'

export default function SupportPage() {
  const pages = supportItems.filter((item) => !item.hideInNav)

  return (
    <div className="policy-detail">
      <section className="policy-detail__panel">
        <p className="eyebrow">Support CCC</p>
        <h1 className="policy-detail__title">Support CCC</h1>
        <p className="policy-detail__summary">
          Direct pathways to support Civil Citizens for Canada Party through participation and
          funding.
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