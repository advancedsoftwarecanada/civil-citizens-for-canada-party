import { useTranslation } from 'react-i18next'

const githubUrl = 'https://github.com/advancedsoftwarecanada/civil-citizens-for-canada-party'

export default function SiteFooter() {
  const { t } = useTranslation()

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
          <p className="footer-title">{t('footer.brand')}</p>
          <p className="footer-copy">{t('footer.copy')}</p>
          </div>
        </div>
        <nav className="footer-nav" aria-label={t('footer.navLabel')}>
          <a href="/">{t('footer.home')}</a>
          <a href="/privacy-policy">{t('footer.privacy')}</a>
          <a href="/terms-and-conditions">{t('footer.terms')}</a>
          <a href={githubUrl} target="_blank" rel="noreferrer">{t('footer.github')}</a>
        </nav>
      </div>
    </footer>
  )
}
