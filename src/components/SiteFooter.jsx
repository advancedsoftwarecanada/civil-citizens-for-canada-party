const githubUrl = 'https://github.com/advancedsoftwarecanada/civil-citizens-for-canada-party'

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <img
            src="/assets/img/CCC-512.png"
            alt="Civil Citizens For Canada Party logo"
            className="footer-brand__logo"
          />
          <div>
          <p className="footer-title">Civil Citizens For Canada Party</p>
          <p className="footer-copy">
            A developing platform for citizens who want a simpler, fairer, and more transparent Canada.
          </p>
          </div>
        </div>
        <nav className="footer-nav" aria-label="Footer">
          <a href="/">Home</a>
          <a href="/economic-policy">Economic Policy</a>
          <a href={githubUrl} target="_blank" rel="noreferrer">GitHub</a>
        </nav>
      </div>
    </footer>
  )
}
