import { useTranslation } from 'react-i18next'

import donateImage from '../../assets/img/donate/1-donate.webp'
import { localizeByLanguage } from '../lib/locale'

const donateUrl = 'https://civilcitizens.ca/on/york-durham/causes/andynormore-civil-citizens-development-fund-post-619dcc'

export default function DonatePage() {
  const { i18n } = useTranslation()
  const content = localizeByLanguage(i18n, {
    en: {
      title: 'Donate To CCC',
      copy: 'If you would like to donate, please do so directly with the Civil Citizens app.',
      cta: 'Donate Through Civil Citizens',
      alt: 'Donate to Civil Citizens development fund',
    },
    fr: {
      title: 'Faire un don au CCC',
      copy: 'Si vous souhaitez faire un don, veuillez le faire directement dans l’application Civil Citizens.',
      cta: 'Faire un don par Civil Citizens',
      alt: 'Faire un don au fonds de développement de Civil Citizens',
    },
  })

  return (
    <div className="donate-page">
      <section className="donate-page__section">
        <h1 className="donate-page__title">{content.title}</h1>
        <div className="donate-page__grid">
          <div className="donate-page__panel">
            <p className="donate-page__copy">{content.copy}</p>
            <div className="donate-page__actions">
              <a href={donateUrl} className="button button--primary" target="_blank" rel="noreferrer">
                {content.cta}
              </a>
            </div>
          </div>
          <a
            href={donateUrl}
            className="donate-page__visual"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={donateImage}
              alt={content.alt}
              className="donate-page__image"
            />
          </a>
        </div>
      </section>
    </div>
  )
}