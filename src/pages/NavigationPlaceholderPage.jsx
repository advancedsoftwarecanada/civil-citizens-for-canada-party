import { useTranslation } from 'react-i18next'
import { Link, Navigate, useLocation } from 'react-router-dom'
import { getNavigationLookup } from '../data/localizedNavigation'

export default function NavigationPlaceholderPage() {
  const { t, i18n } = useTranslation()
  const location = useLocation()
  const navigationLookup = getNavigationLookup(i18n)
  const page = navigationLookup[location.pathname]

  if (!page) {
    return <Navigate to="/" replace />
  }

  const backPath = page.parentPath && page.parentPath !== location.pathname ? page.parentPath : '/'
  const backLabel = page.parentLabel || t('placeholder.defaultBack')

  return (
    <section className="nav-placeholder">
      <div className="nav-placeholder__panel">
        <p className="eyebrow">{page.parentLabel || t('placeholder.defaultParent')}</p>
        <h1 className="nav-placeholder__title">{page.label}</h1>
        <p className="nav-placeholder__summary">{page.summary}</p>
        <div className="nav-placeholder__coming-soon">{t('placeholder.comingSoon')}</div>
        <div className="nav-placeholder__actions">
          <Link to={backPath} className="button button--secondary">
            {t('placeholder.backTo', { label: backLabel })}
          </Link>
        </div>
      </div>
    </section>
  )
}
