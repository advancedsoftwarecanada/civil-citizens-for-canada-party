import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { getAboutItems } from '../data/localizedNavigation'
import { localizeByLanguage } from '../lib/locale'

export default function AboutPage() {
  const { i18n } = useTranslation()
  const pages = getAboutItems(i18n).filter((item) => !item.hideInNav)
  const content = localizeByLanguage(i18n, {
    en: {
      eyebrow: 'About CCC',
      title: 'About',
      summary:
        'Explore the current public leadership profile and the founding principles behind Civil Citizens for Canada Party.',
    },
    fr: {
      eyebrow: 'À propos du CCC',
      title: 'À propos',
      summary:
        'Découvrez le profil public actuel du leadership et les principes fondateurs derrière le Parti Citoyens Civils du Canada.',
    },
  })

  return (
    <div className="policy-detail">
      <section className="policy-detail__panel">
        <p className="eyebrow">{content.eyebrow}</p>
        <h1 className="policy-detail__title">{content.title}</h1>
        <p className="policy-detail__summary">{content.summary}</p>
        <div className="policy-grid">
          {pages.map((page, index) => (
            <Link key={page.path} to={page.path} className="policy-card">
              <p className="policy-card__number">{index + 1}</p>
              <h2 className="policy-card__title">{page.label}</h2>
              <p className="policy-card__description">{page.summary}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}