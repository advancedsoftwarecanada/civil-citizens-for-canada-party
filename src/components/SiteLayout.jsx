import { useEffect, useLayoutEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { getPrimaryNavigation } from '../data/localizedNavigation'
import CivilAiWidget from './CivilAiWidget'
import SiteFooter from './SiteFooter'

export default function SiteLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const { t, i18n } = useTranslation()
  const primaryNavigation = getPrimaryNavigation()

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (typeof window === 'undefined' || !window.history) {
      return
    }

    const previousScrollRestoration = window.history.scrollRestoration
    window.history.scrollRestoration = 'manual'

    return () => {
      window.history.scrollRestoration = previousScrollRestoration
    }
  }, [])

  useLayoutEffect(() => {
    if (location.hash) {
      scrollToHash(location.hash)

      const firstFrame = window.requestAnimationFrame(() => {
        scrollToHash(location.hash)

        window.requestAnimationFrame(() => {
          scrollToHash(location.hash)
        })
      })

      const timeoutId = window.setTimeout(() => {
        scrollToHash(location.hash)
      }, 80)

      return () => {
        window.cancelAnimationFrame(firstFrame)
        window.clearTimeout(timeoutId)
      }
    }

    resetPageScroll()

    const firstFrame = window.requestAnimationFrame(() => {
      resetPageScroll()

      window.requestAnimationFrame(() => {
        resetPageScroll()
      })
    })

    const timeoutId = window.setTimeout(() => {
      resetPageScroll()
    }, 80)

    return () => {
      window.cancelAnimationFrame(firstFrame)
      window.clearTimeout(timeoutId)
    }
  }, [location.pathname, location.search, location.hash])

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
            <Link to="/" className="site-brand" aria-label={t('nav.homeAria')}>
              <img
                src="/assets/img/CCC-512.png"
                alt="Civil Citizens For Canada Party logo"
                className="site-brand__logo"
              />
              <span className="site-brand__text">CCC</span>
            </Link>
            <div className="site-header__mobile-tools">
              <LanguageToggle t={t} i18n={i18n} mobile />
              <button
                type="button"
                className="site-menu-button"
                aria-label={isMenuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
                aria-expanded={isMenuOpen}
                aria-controls="primary-navigation"
                onClick={() => setIsMenuOpen((open) => !open)}
              >
                <span className="site-menu-button__line" />
                <span className="site-menu-button__line" />
                <span className="site-menu-button__line" />
              </button>
            </div>
          </div>
          <div className="site-header__desktop">
            <nav className="site-nav" aria-label={t('nav.primary')}>
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
            <LanguageToggle t={t} i18n={i18n} />
            <div className="site-header__cta-wrap">
              <Link to="/become-a-civil-citizen" className="site-header__cta">
                <span>{t('nav.becomeCivilCitizen')}</span>
              </Link>
            </div>
          </div>
        </div>
        <div
          id="primary-navigation"
          className={`mobile-nav${isMenuOpen ? ' is-open' : ''}`}
          aria-label={t('nav.mobilePrimary')}
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
            {t('nav.becomeCivilCitizen')}
          </NavLink>
        </div>
      </header>
      <main className="site-main">{children}</main>
      <CivilAiWidget />
      <SiteFooter />
    </div>
  )
}

function LanguageToggle({ t, i18n, mobile = false }) {
  const isFrench = i18n.resolvedLanguage === 'fr-QC'

  return (
    <div
      className={`language-toggle${mobile ? ' language-toggle--mobile' : ''}`}
      role="group"
      aria-label={t('ui.languageToggle')}
    >
      <button
        type="button"
        className={`language-toggle__button${!isFrench ? ' is-active' : ''}`}
        onClick={() => i18n.changeLanguage('en-CA')}
      >
        {t('ui.english')}
      </button>
      <button
        type="button"
        className={`language-toggle__button${isFrench ? ' is-active' : ''}`}
        onClick={() => i18n.changeLanguage('fr-QC')}
      >
        {t('ui.french')}
      </button>
    </div>
  )
}

function pathMatches(currentPath, targetPath) {
  if (targetPath === '/') {
    return currentPath === '/'
  }

  return currentPath === targetPath || currentPath.startsWith(`${targetPath}/`)
}

function resetPageScroll() {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return
  }

  window.scrollTo(0, 0)
  document.documentElement.scrollTop = 0
  document.body.scrollTop = 0

  const siteMain = document.querySelector('.site-main')

  if (siteMain instanceof HTMLElement) {
    siteMain.scrollTop = 0
  }
}

function scrollToHash(hash) {
  if (typeof window === 'undefined' || typeof document === 'undefined' || !hash) {
    return
  }

  const targetId = decodeURIComponent(hash.replace(/^#/, ''))

  if (!targetId) {
    return
  }

  const target = document.getElementById(targetId)

  if (!(target instanceof HTMLElement)) {
    return
  }

  target.scrollIntoView({ block: 'start', behavior: 'auto' })
}
