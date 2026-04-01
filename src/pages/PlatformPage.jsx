import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { getPlatformGroups } from '../data/localizedNavigation'
import { localizeByLanguage } from '../lib/locale'

export default function PlatformPage() {
  const { i18n } = useTranslation()
  const platformGroups = getPlatformGroups(i18n)
  const content = localizeByLanguage(i18n, {
    en: {
      eyebrow: 'CCC Platform',
      title: 'Platform',
      summary:
        'These are the major policy areas Civil Citizens for Canada Party is organizing into a national platform.',
    },
    fr: {
      eyebrow: 'Plateforme du CCC',
      title: 'Plateforme',
      summary:
        'Voici les grands domaines politiques que le Parti Citoyens Civils du Canada organise dans une plateforme nationale.',
    },
  })

  return (
    <div className="policy-detail">
      <section className="policy-detail__panel">
        <p className="eyebrow">{content.eyebrow}</p>
        <h1 className="policy-detail__title">{content.title}</h1>
        <p className="policy-detail__summary">{content.summary}</p>
        <div className="policy-grid">
          {platformGroups.map((group, index) => (
            <Link key={group.path} to={group.path} className="policy-card">
              <p className="policy-card__number">{index + 1}</p>
              <h2 className="policy-card__title">{group.title}</h2>
              <p className="policy-card__description">{group.summary}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}