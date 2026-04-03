import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { getNationalDiscussionsItems } from '../data/localizedNavigation'
import { localizeByLanguage } from '../lib/locale'

export default function NationalDiscussionsPage() {
  const { i18n } = useTranslation()
  const pages = getNationalDiscussionsItems(i18n).filter((item) => !item.hideInNav)
  const content = localizeByLanguage(i18n, {
    en: {
      title: 'National Discussions',
      summary:
        'Civil Citizens enables Canadians to engage directly in shaping national priorities through open, transparent discussion within their communities.',
    },
    fr: {
      title: 'Discussions nationales',
      summary:
        'Civil Citizens permet aux Canadiens de participer directement a l orientation des priorites nationales par des discussions ouvertes et transparentes dans leurs communautes.',
    },
  })

  return (
    <div className="policy-detail">
      <section className="policy-detail__panel">
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
