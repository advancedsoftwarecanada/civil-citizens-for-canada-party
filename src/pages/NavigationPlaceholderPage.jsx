import { Link, Navigate, useLocation } from 'react-router-dom'
import { navigationLookup } from '../data/navigation'

export default function NavigationPlaceholderPage() {
  const location = useLocation()
  const page = navigationLookup[location.pathname]

  if (!page) {
    return <Navigate to="/" replace />
  }

  const backPath = page.parentPath && page.parentPath !== location.pathname ? page.parentPath : '/'
  const backLabel = page.parentLabel || 'Home'

  return (
    <section className="nav-placeholder">
      <div className="nav-placeholder__panel">
        <p className="eyebrow">{page.parentLabel || 'Civil Citizens For Canada Party'}</p>
        <h1 className="nav-placeholder__title">{page.label}</h1>
        <p className="nav-placeholder__summary">{page.summary}</p>
        <div className="nav-placeholder__coming-soon">Coming Soon</div>
        <div className="nav-placeholder__actions">
          <Link to={backPath} className="button button--secondary">
            Back to {backLabel}
          </Link>
        </div>
      </div>
    </section>
  )
}
