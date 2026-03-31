import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { primaryNavigation } from '../data/navigation'
import SiteFooter from './SiteFooter'

export default function SiteLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openSectionId, setOpenSectionId] = useState(null)
  const location = useLocation()
  const headerRef = useRef(null)

  useEffect(() => {
    setIsMenuOpen(false)
    setOpenSectionId(null)
  }, [location.pathname])

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.pathname])

  useEffect(() => {
    function handlePointerDown(event) {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setOpenSectionId(null)
      }
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setOpenSectionId(null)
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

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

  function renderMenuItems(items, className) {
    return items.filter((item) => !item.hideInNav).map((item) => (
      <NavLink
        key={item.path}
        to={item.path}
        className={({ isActive }) => `${className}${isActive ? ' active' : ''}`}
      >
        <span className={`${className}__label`}>{item.label}</span>
        <span className={`${className}__summary`}>{item.summary}</span>
      </NavLink>
    ))
  }

  function renderConceptItems(items, className) {
    return items.map((item) => (
      <NavLink key={item.path} to={item.path} className={className}>
        <span className={`${className}__label`}>{item.title}</span>
        <span className={`${className}__summary`}>{item.summary}</span>
      </NavLink>
    ))
  }

  return (
    <div className="page-shell">
      <div className="page-background" aria-hidden="true" />
      <header className="site-header" ref={headerRef}>
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
                const isOpen = openSectionId === section.id
                const isActive = isSectionActive(section)

                if (section.type === 'direct') {
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
                }

                return (
                  <div
                    key={section.id}
                    className={`site-nav__item${isOpen ? ' is-open' : ''}${isActive ? ' is-active' : ''}`}
                  >
                    <button
                      type="button"
                      className="site-nav__trigger"
                      aria-expanded={isOpen}
                      aria-controls={`nav-panel-${section.id}`}
                      onClick={() => setOpenSectionId((current) => (current === section.id ? null : section.id))}
                    >
                      <span>{section.label}</span>
                      <span className="site-nav__caret" aria-hidden="true">
                        ▾
                      </span>
                    </button>
                    <div
                      id={`nav-panel-${section.id}`}
                      className={`site-dropdown site-dropdown--${section.type}`}
                    >
                      {section.type === 'mega' ? (
                        <>
                          <div className="site-dropdown__concept-grid">
                            {renderConceptItems(section.groups, 'site-dropdown__concept')}
                          </div>
                        </>
                      ) : (
                        <div className="site-dropdown__menu">
                          {renderMenuItems(section.items, 'site-dropdown__link')}
                        </div>
                      )}
                    </div>
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
            if (section.type === 'direct') {
              return (
                <NavLink key={section.id} to={section.path} className="mobile-nav__summary mobile-nav__summary--link">
                  {section.label}
                </NavLink>
              )
            }

            return (
              <details key={section.id} className="mobile-nav__section">
                <summary className="mobile-nav__summary">{section.label}</summary>
                <div className="mobile-nav__content">
                  {section.type === 'mega' ? (
                    <>
                      <div className="mobile-nav__concept-grid">
                        {renderConceptItems(section.groups, 'mobile-nav__concept')}
                      </div>
                    </>
                  ) : (
                    <div className="mobile-nav__links">{renderMenuItems(section.items, 'mobile-nav__link')}</div>
                  )}
                </div>
              </details>
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
