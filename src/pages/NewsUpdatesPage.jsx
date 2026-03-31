import joinCivilCitizensImage from '../../assets/img/become-a-civil-citizen/3-join-civil-citizens.jpg'

const newsUpdatesUrl = 'https://civilcitizens.ca/com/on/york-durham/orgs/civil-citizens-incorporated'

export default function NewsUpdatesPage() {
  return (
    <div className="donate-page">
      <section className="donate-page__section">
        <h1 className="donate-page__title">News &amp; Updates</h1>
        <div className="donate-page__grid">
          <div className="donate-page__panel">
            <p className="donate-page__copy">
              We post regular updates on the Civil Citizens app. Join us there to follow new
              announcements, movement progress, and ongoing activity.
            </p>
            <div className="donate-page__actions">
              <a href={newsUpdatesUrl} className="button button--primary" target="_blank" rel="noreferrer">
                Join Us On Civil Citizens
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
              alt="Join Civil Citizens to receive updates and announcements"
              className="donate-page__image"
            />
          </a>
        </div>
      </section>
    </div>
  )
}