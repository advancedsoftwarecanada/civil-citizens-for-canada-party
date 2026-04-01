import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { primaryNavigation } from '../data/navigation'
import SiteFooter from './SiteFooter'

export default function SiteLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.pathname])

  function isSectionActive(section) {
    if (section.path && pathMatches(location.pathname, section.path)) {
      return true
    }

    if (section.overview && pathMatches(location.pathname, section.overview.path)) {
      return true
    }

    if (section.items?.some((item) => pathMatches(location.pathname, item.path))) {
      return true
    }

    if (section.groups?.some((group) => pathMatches(location.pathname, group.path))) {
      return true
    }

    if (
      section.groups?.some((group) =>
        group.items.some((item) => pathMatches(location.pathname, item.path)),
      )
    ) {
      return true
    }

    return false
  }

  return (
    <div className="page-shell">
      <div className="page-background" aria-hidden="true" />
      <header className="site-header">
        <div className="site-header__inner">
          <div className="site-header__top">
            <button
              type="button"
              className="site-menu-button"
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMenuOpen}
              aria-controls="primary-navigation"
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              <span className="site-menu-button__line" />
              <span className="site-menu-button__line" />
              <span className="site-menu-button__line" />
            </button>
            <Link to="/" className="site-brand" aria-label="Civil Citizens For Canada Party home">
              <img
                src="/assets/img/CCC-512.png"
                alt="Civil Citizens For Canada Party logo"
                className="site-brand__logo"
              />
              <span className="site-brand__text">CCC</span>
            </Link>
          </div>
          <div className="site-header__desktop">
            <nav className="site-nav" aria-label="Primary">
              {primaryNavigation.map((section) => {
                const isActive = isSectionActive(section)

                return (
                  <div
                    key={section.id}
                    className={`site-nav__item${isActive ? ' is-active' : ''}`}
                  >
                    <NavLink to={section.path} className="site-nav__trigger site-nav__trigger--link">
                      <span>{section.label}</span>
                    </NavLink>
                  </div>
                )
              })}
            </nav>
            <div className="site-header__cta-wrap">
              <Link to="/become-a-civil-citizen" className="site-header__cta">
                <span>Become a Civil Citizen</span>
              </Link>
            </div>
          </div>
        </div>
        <div
          id="primary-navigation"
          className={`mobile-nav${isMenuOpen ? ' is-open' : ''}`}
          aria-label="Mobile primary navigation"
        >
          {primaryNavigation.map((section) => {
            return (
              <NavLink key={section.id} to={section.path} className="mobile-nav__summary mobile-nav__summary--link">
                {section.label}
              </NavLink>
            )
          })}
          <NavLink
            to="/become-a-civil-citizen"
            className="mobile-nav__summary mobile-nav__summary--cta mobile-nav__summary--cta-link"
          >
            Become a Civil Citizen
          </NavLink>
        </div>
      </header>
      <main className="site-main">{children}</main>
      <SiteFooter />
    </div>
  )
}

function pathMatches(currentPath, targetPath) {
  if (targetPath === '/') {
    return currentPath === '/'
  }

  return currentPath === targetPath || currentPath.startsWith(`${targetPath}/`)
}
