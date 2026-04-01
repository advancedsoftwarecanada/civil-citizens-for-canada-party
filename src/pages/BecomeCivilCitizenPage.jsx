import { useTranslation } from 'react-i18next'

import civilCitizensLiveMapImage from '../../assets/img/become-a-civil-citizen/1-civil-citizens-live-eda-map.jpg'
import civilCitizensAppImage from '../../assets/img/become-a-civil-citizen/2-civil-citizens-app.jpg'
import joinCivilCitizensImage from '../../assets/img/become-a-civil-citizen/3-join-civil-citizens.jpg'
import signUpNowImage from '../../assets/img/become-a-civil-citizen/4-sign-up-now.jpg'
import { localizeByLanguage } from '../lib/locale'

const civilPlatformUrl = 'https://civilcitizens.ca'
const chambersPath = '/the-civil-app/chambers-of-citizens'

export default function BecomeCivilCitizenPage() {
  const { i18n } = useTranslation()
  const content = localizeByLanguage(i18n, {
    en: {
      heroTitle: 'How to Become a Civil Citizen',
      heroCopy:
        'Civil is a technology platform designed to turn citizens into active participants in shaping Canada\'s future.',
      heroNote: 'The app is 100% free for all Canadian Citizens.',
      heroCta: 'Join Civil Citizens.ca',
      sectionOneTitle: 'It Starts With The Civil Citizens App / Website',
      sectionOneBodyOne:
        'Civil is more than a social network, it\'s a tool we can utilize to create change that is recognized at the Federal level.',
      sectionOneBodyTwo:
        'With Civil, we can restore Canada\'s economic layer. Civil has many features that allow Canadians to conduct commerce in a peer to peer way, with super low transaction fees.',
      features: ['Social', 'Marketplace', 'Events', 'Organizations', 'Virtual Meeting Rooms', 'Careers', 'Rides', 'Causes'],
      appCta: 'Get The App',
      sectionTwoTitle: 'Chambers Of Citizens',
      sectionTwoBodyOne:
        'By joining the Civil Citizens network, we organically organize ourselves by federally recognized Electoral District Associations, which we call Chambers of Citizens.',
      sectionTwoStatement: 'This is where our power to build the future is.',
      sectionTwoBodyTwo: 'The more users we have, the stronger the network becomes.',
      sectionTwoCta: 'Learn About Chambers',
      sectionThreeTitle: 'How The App Creates A Civil Society',
      steps: [
        ['Step 1', 'Create Your Account', 'Sign up on CivilCitizens.ca and enter the system.'],
        ['Step 2', 'Join Your Chamber of Citizens', 'You will be automatically connected to your local Electoral District (EDA), forming your Chamber of Citizens.'],
        ['Step 3', 'Connect and Coordinate', 'Meet other Civil Citizens in your district. Discuss ideas. Organize locally. Plan real initiatives.'],
        ['Step 4', 'Grow the Network', 'Invite your friends, family, and local businesses. Every new member strengthens your district and increases collective influence.'],
      ],
      finalTitle: 'TOGETHER,\nWE BUILD AN IDEAL SOCIETY',
      finalLead: 'Civil is not just a social network.',
      finalBody: 'It is a system designed to:',
      beats: ['connect citizens locally', 'organize communities', 'coordinate action', 'build real change'],
      finalClosing: 'This is where participation actually happens.',
      finalQuestion: 'Are you ready to join and become a Civil Citizen?',
      finalCta: 'YES! I want to build the future!',
      altJoin: 'Join Civil Citizens promotional interface for creating an account',
      altApp: 'Civil Citizens application interface showing the platform in use',
      altMap: 'Civil Citizens map showing local district participation across Canada',
      altSignup: 'Sign up now promotional image for joining Civil Citizens',
    },
    fr: {
      heroTitle: 'Comment devenir un citoyen civil',
      heroCopy:
        'Civil est une plateforme technologique conçue pour transformer les citoyens en participants actifs à la construction de l\'avenir du Canada.',
      heroNote: 'L’application est 100 % gratuite pour tous les citoyens canadiens.',
      heroCta: 'Rejoindre Civil Citizens.ca',
      sectionOneTitle: 'Tout commence avec l’application / le site Civil Citizens',
      sectionOneBodyOne:
        'Civil est plus qu’un réseau social: c’est un outil que nous pouvons utiliser pour créer un changement reconnu au niveau fédéral.',
      sectionOneBodyTwo:
        'Avec Civil, nous pouvons rétablir la couche économique du Canada. Civil offre de nombreuses fonctions qui permettent aux Canadiens de faire du commerce de pair à pair avec des frais de transaction très faibles.',
      features: ['Social', 'Marché', 'Événements', 'Organisations', 'Salles de réunion virtuelles', 'Carrières', 'Trajets', 'Causes'],
      appCta: 'Obtenir l’application',
      sectionTwoTitle: 'Chambres de citoyens',
      sectionTwoBodyOne:
        'En rejoignant le réseau Civil Citizens, nous nous organisons naturellement par associations de district électoral reconnues au niveau fédéral, que nous appelons Chambres de citoyens.',
      sectionTwoStatement: 'C’est là que se trouve notre pouvoir de bâtir l’avenir.',
      sectionTwoBodyTwo: 'Plus nous avons d’utilisateurs, plus le réseau devient fort.',
      sectionTwoCta: 'Découvrir les chambres',
      sectionThreeTitle: 'Comment l’application crée une société civile',
      steps: [
        ['Étape 1', 'Créez votre compte', 'Inscrivez-vous sur CivilCitizens.ca et entrez dans le système.'],
        ['Étape 2', 'Rejoignez votre chambre de citoyens', 'Vous serez automatiquement relié à votre district électoral local (ADE), formant ainsi votre Chambre de citoyens.'],
        ['Étape 3', 'Connectez-vous et coordonnez-vous', 'Rencontrez d’autres citoyens civils dans votre district. Discutez des idées. Organisez-vous localement. Planifiez de vraies initiatives.'],
        ['Étape 4', 'Faites croître le réseau', 'Invitez vos amis, votre famille et les entreprises locales. Chaque nouveau membre renforce votre district et augmente l’influence collective.'],
      ],
      finalTitle: 'ENSEMBLE,\nNOUS BÂTISSONS UNE SOCIÉTÉ IDÉALE',
      finalLead: 'Civil n’est pas seulement un réseau social.',
      finalBody: 'C’est un système conçu pour:',
      beats: ['connecter les citoyens localement', 'organiser les communautés', 'coordonner l’action', 'bâtir un vrai changement'],
      finalClosing: 'C’est ici que la participation se produit réellement.',
      finalQuestion: 'Êtes-vous prêt à vous joindre et à devenir un citoyen civil?',
      finalCta: 'OUI! Je veux bâtir l’avenir!',
      altJoin: 'Interface promotionnelle de Join Civil Citizens pour créer un compte',
      altApp: 'Interface de l’application Civil Citizens montrant la plateforme en usage',
      altMap: 'Carte de Civil Citizens montrant la participation locale par district au Canada',
      altSignup: 'Image promotionnelle pour s’inscrire à Civil Citizens',
    },
  })
  const finalTitleLines = content.finalTitle.split('\n')

  return (
    <div className="cta-page">
      <section className="cta-page__hero">
        <div className="cta-page__hero-grid">
          <div className="cta-page__hero-content">
            <h1 className="cta-page__hero-title">{content.heroTitle}</h1>
            <p className="cta-page__hero-copy">{content.heroCopy}</p>
            <p className="cta-page__hero-note">{content.heroNote}</p>
            <div className="cta-page__hero-actions">
              <a
                href={civilPlatformUrl}
                className="button button--primary cta-page__hero-button"
                target="_blank"
                rel="noreferrer"
              >
                {content.heroCta}
              </a>
            </div>
          </div>
          <a
            href={civilPlatformUrl}
            className="cta-page__visual cta-page__visual--link"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={joinCivilCitizensImage}
              alt={content.altJoin}
              className="cta-page__image"
            />
          </a>
        </div>
      </section>

      <section className="cta-page__section">
        <h2 className="cta-page__section-title">{content.sectionOneTitle}</h2>
        <div className="cta-page__section-grid">
          <div className="cta-page__panel">
            <p className="cta-page__body">{content.sectionOneBodyOne}</p>
            <p className="cta-page__body">{content.sectionOneBodyTwo}</p>
            <div className="cta-page__feature-list" aria-label="Civil platform features">
              {content.features.map((feature) => (
                <span key={feature}>{feature}</span>
              ))}
            </div>
            <div className="cta-page__panel-actions">
              <a href={civilPlatformUrl} className="button button--primary" target="_blank" rel="noreferrer">
                {content.appCta}
              </a>
            </div>
          </div>
          <div className="cta-page__visual cta-page__visual--section">
            <img
              src={civilCitizensAppImage}
              alt={content.altApp}
              className="cta-page__image"
            />
          </div>
        </div>
      </section>

      <section className="cta-page__section">
        <h2 className="cta-page__section-title">{content.sectionTwoTitle}</h2>
        <div className="cta-page__section-grid">
          <div className="cta-page__panel">
            <p className="cta-page__body">{content.sectionTwoBodyOne}</p>
            <p className="cta-page__participation-statement">{content.sectionTwoStatement}</p>
            <p className="cta-page__body">{content.sectionTwoBodyTwo}</p>
            <div className="cta-page__panel-actions">
              <a href={chambersPath} className="button button--secondary">
                {content.sectionTwoCta}
              </a>
            </div>
          </div>
          <div className="cta-page__visual cta-page__visual--section">
            <img
              src={civilCitizensLiveMapImage}
              alt={content.altMap}
              className="cta-page__image"
            />
          </div>
        </div>
      </section>

      <section className="cta-page__section">
        <h2 className="cta-page__section-title">{content.sectionThreeTitle}</h2>
        <div className="cta-page__steps">
          {content.steps.map(([number, title, copy]) => (
            <article key={number} className="cta-page__step-card">
              <span className="cta-page__step-number">{number}</span>
              <h3 className="cta-page__step-title">{title}</h3>
              <p className="cta-page__step-copy">{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-page__final">
        <h2 className="cta-page__final-title">
          {finalTitleLines[0]}
          <br />
          {finalTitleLines[1]}
        </h2>
        <div className="cta-page__section-grid cta-page__section-grid--final">
          <div className="cta-page__panel cta-page__panel--final">
            <p className="cta-page__lead">{content.finalLead}</p>
            <p className="cta-page__body">{content.finalBody}</p>
            <div className="cta-page__beats" aria-label="What Civil is designed to do">
              {content.beats.map((beat) => (
                <span key={beat}>{beat}</span>
              ))}
            </div>
            <p className="cta-page__closing">{content.finalClosing}</p>
            <p className="cta-page__final-question">{content.finalQuestion}</p>
            <div className="cta-page__final-actions">
              <a href={civilPlatformUrl} className="button button--primary cta-page__final-button" target="_blank" rel="noreferrer">
                {content.finalCta}
              </a>
            </div>
          </div>
          <a
            href={civilPlatformUrl}
            className="cta-page__visual cta-page__visual--link cta-page__visual--section"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={signUpNowImage}
              alt={content.altSignup}
              className="cta-page__image"
            />
          </a>
        </div>
      </section>
    </div>
  )
}