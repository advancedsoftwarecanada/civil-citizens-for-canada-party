import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { getSupportItems } from '../data/localizedNavigation'
import { localizeByLanguage } from '../lib/locale'

export default function SupportPage() {
  const { i18n } = useTranslation()
  const pages = getSupportItems(i18n).filter((item) => !item.hideInNav)
  const content = localizeByLanguage(i18n, {
    en: {
      eyebrow: 'Support CCC',
      title: 'Support CCC',
      summary:
        'Direct pathways to support Civil Citizens for Canada Party through participation and funding.',
    },
    fr: {
      eyebrow: 'Soutenir le CCC',
      title: 'Soutenir le CCC',
      summary:
        'Des voies directes pour soutenir le Parti Citoyens Civils du Canada par la participation et le financement.',
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