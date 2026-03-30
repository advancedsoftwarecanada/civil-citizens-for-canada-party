import { NavLink } from 'react-router-dom'
import SiteFooter from './SiteFooter'

export default function SiteLayout({ children }) {
  return (
    <div className="page-shell">
      <div className="page-background" aria-hidden="true" />
      <header className="site-header">
        <div className="site-header__inner">
          <p className="site-brand">Civil Citizens Canada</p>
          <nav className="site-nav" aria-label="Primary">
            <NavLink to="/" end>
              Home
            </NavLink>
            <NavLink to="/economic-policy">Economic Policy</NavLink>
          </nav>
        </div>
      </header>
      <main className="site-main">{children}</main>
      <SiteFooter />
    </div>
  )
}
