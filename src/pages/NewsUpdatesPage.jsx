import { useTranslation } from 'react-i18next'

import joinCivilCitizensImage from '../../assets/img/become-a-civil-citizen/3-join-civil-citizens.jpg'
import { localizeByLanguage } from '../lib/locale'

const newsUpdatesUrl = 'https://civilcitizens.ca/com/on/york-durham/orgs/civil-citizens-incorporated'

export default function NewsUpdatesPage() {
  const { i18n } = useTranslation()
  const content = localizeByLanguage(i18n, {
    en: {
      title: 'News & Updates',
      copy:
        'We post regular updates on the Civil Citizens app. Join us there to follow new announcements, movement progress, and ongoing activity.',
      cta: 'Join Us On Civil Citizens',
      alt: 'Join Civil Citizens to receive updates and announcements',
    },
    fr: {
      title: 'Nouvelles et mises à jour',
      copy:
        'Nous publions des mises à jour régulières dans l’application Civil Citizens. Rejoignez-nous là-bas pour suivre les nouvelles annonces, l’avancement du mouvement et l’activité en cours.',
      cta: 'Rejoignez-nous sur Civil Citizens',
      alt: 'Rejoindre Civil Citizens pour recevoir des mises à jour et des annonces',
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
              <a href={newsUpdatesUrl} className="button button--primary" target="_blank" rel="noreferrer">
                {content.cta}
              </a>
            </div>
          </div>
          <a
            href={newsUpdatesUrl}
            className="donate-page__visual"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={joinCivilCitizensImage}
              alt={content.alt}
              className="donate-page__image"
            />
          </a>
        </div>
      </section>
    </div>
  )
}