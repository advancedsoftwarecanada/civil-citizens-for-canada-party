import donateImage from '../../assets/img/donate/1-donate.webp'

const donateUrl = 'https://civilcitizens.ca/on/york-durham/causes/andynormore-civil-citizens-development-fund-post-619dcc'

export default function DonatePage() {
  return (
    <div className="donate-page">
      <section className="donate-page__section">
        <h1 className="donate-page__title">Donate To CCC</h1>
        <div className="donate-page__grid">
          <div className="donate-page__panel">
            <p className="donate-page__copy">
              If you would like to donate, please do so directly with the Civil Citizens app.
            </p>
            <div className="donate-page__actions">
              <a href={donateUrl} className="button button--primary" target="_blank" rel="noreferrer">
                Donate Through Civil Citizens
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
              alt="Donate to Civil Citizens development fund"
              className="donate-page__image"
            />
          </a>
        </div>
      </section>
    </div>
  )
}