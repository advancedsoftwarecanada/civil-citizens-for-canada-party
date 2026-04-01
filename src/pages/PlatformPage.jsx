import { Link } from 'react-router-dom'

import { platformGroups } from '../data/navigation'

export default function PlatformPage() {
  return (
    <div className="policy-detail">
      <section className="policy-detail__panel">
        <p className="eyebrow">CCC Platform</p>
        <h1 className="policy-detail__title">Platform</h1>
        <p className="policy-detail__summary">
          These are the major policy areas Civil Citizens for Canada Party is organizing into a
          national platform.
        </p>
        <div className="policy-grid">
          {platformGroups.map((group, index) => (
            <Link key={group.path} to={group.path} className="policy-card">
              <p className="policy-card__number">{index + 1}</p>
              <h2 className="policy-card__title">{group.title}</h2>
              <p className="policy-card__description">{group.summary}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}