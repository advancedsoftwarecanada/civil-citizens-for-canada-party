import { Link, Navigate, useParams } from 'react-router-dom'
import { economicPolicyPoints } from '../data/economicPolicy'

export default function EconomicPolicyDetailPage() {
  const { slug } = useParams()
  const point = economicPolicyPoints.find((entry) => entry.slug === slug)

  if (!point) {
    return <Navigate to="/economic-policy" replace />
  }

  return (
    <section className="policy-detail">
      <div className="policy-detail__panel">
        <p className="policy-detail__number">{point.number}</p>
        <h1 className="policy-detail__title">{point.title}</h1>
        <p className="policy-detail__summary">{point.description}</p>
        <p className="policy-detail__coming-soon">Coming Soon</p>
        <div className="policy-detail__actions">
          <Link to="/economic-policy" className="button button--secondary">
            Back to Economic Policy
          </Link>
        </div>
      </div>
    </section>
  )
}