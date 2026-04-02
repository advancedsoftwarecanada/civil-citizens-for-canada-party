import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import andyNormoreImage from '../../assets/img/andy-normore/andy-normore.jpg'
import edaMapImage from '../../assets/img/eda-map.jpg'
import federalCandidateImage from '../../assets/img/become-a-federal-candidate-skyscraper.jpg'
import { localizeByLanguage } from '../lib/locale'

const chambersUrl = 'https://civilcitizens.ca/politicians/federal/current'

export default function LeadershipPage() {
  const { i18n } = useTranslation()
  const content = localizeByLanguage(i18n, {
    en: {
      eyebrow: 'About CCC',
      title: 'Leadership',
      intro:
        'Civil Citizens for Canada is being built by people focused on execution, structure, and long-term Canadian capacity. Meet the current founder profile below.',
      founderLabel: 'Chairman & Founder',
      founderSummary:
        'Founder of Civil Citizens and architect of its core system, focused on building a unified platform for how Canadians connect, work, trade, and participate in society.',
      founderCta: 'Read Full Profile',
      founderAlt: 'Andrew Normore, Chairman and Founder',
      callLabel: 'A Call To Civil Citizens',
      callTitle: 'Become a Civil Citizens For Canada Party Federal Candidate!',
      callParagraphs: [
        'This image represents the reality of Canada today.',
        'Some are already stepping forward. Many are not.',
        'Those empty profiles are not placeholders. They are positions of responsibility, waiting to be filled.',
        'We are building representation across all 343 Electoral District Associations in Canada. Not someday. Now.',
        'We are not asking for spectators. We are calling on builders, leaders, and those willing to take responsibility for their communities.',
        'If you believe Canada can be stronger, more connected, and more self-sufficient, then this is your moment to step forward.',
      ],
      candidateImageAlt: 'Prospective federal candidate positions across Canada',
      howTitle: 'How to Become a Candidate',
      stepOneLabel: 'Step 1',
      stepOneText: 'Create your account on Civil Citizens.',
      stepTwoLabel: 'Step 2',
      stepTwoText:
        'Send a message to Andy Normore with your Electoral District. State clearly that you are stepping forward as a candidate.',
      whatTitle: 'What This Means',
      meaningPoints: [
        'You are choosing to represent your community',
        'You are choosing to participate — not complain',
        'You are choosing to help build something real',
      ],
      missionTitle: 'The Mission',
      missionPoints: [
        'We need representation in all 343 districts across Canada',
        'Every filled position strengthens the network',
        'Every candidate brings us closer to a functioning system',
      ],
      momentTitle: 'The Moment',
      momentLines: ['The time is now. The future is moving fast.', 'This is where it begins.', 'Together, we build an ideal society.'],
      createAccount: 'Create Your Civil Account',
      contactAndy: 'Contact Andy Normore',
      chambersLabel: 'Chambers of Citizens',
      chambersTitle: 'Explore Your Electoral District Association',
      chambersSummary:
        'Explore your Electoral District Association with our Chambers of Citizens feature, exclusively on Civil.',
      chambersCta: 'Explore EDA\'s on Civil',
      chambersAlt: 'Explore Electoral District Associations on Civil',
    },
    fr: {
      eyebrow: 'À propos du CCC',
      title: 'Leadership',
      intro:
        'Citoyens Civils du Canada est construit par des personnes axées sur l’exécution, la structure et la capacité canadienne à long terme. Découvrez ci-dessous le profil actuel du fondateur.',
      founderLabel: 'Président et fondateur',
      founderSummary:
        'Fondateur de Civil Citizens et architecte de son système central, axé sur la construction d’une plateforme unifiée pour la façon dont les Canadiens se connectent, travaillent, échangent et participent à la société.',
      founderCta: 'Lire le profil complet',
      founderAlt: 'Andrew Normore, président et fondateur',
      callLabel: 'Un appel aux citoyens civils',
      callTitle: 'Devenez candidat fédéral du Parti Citoyens Civils du Canada!',
      callParagraphs: [
        'Cette image représente la réalité du Canada aujourd’hui.',
        'Certains se manifestent déjà. Beaucoup ne le font pas.',
        'Ces profils vides ne sont pas des espaces réservés. Ce sont des postes de responsabilité qui attendent d’être occupés.',
        'Nous construisons une représentation dans les 343 associations de circonscription électorale du Canada. Pas un jour peut-être. Maintenant.',
        'Nous ne cherchons pas des spectateurs. Nous faisons appel à des bâtisseurs, à des leaders et à ceux qui sont prêts à assumer une responsabilité envers leur communauté.',
        'Si vous croyez que le Canada peut être plus fort, plus connecté et plus autonome, c’est le moment pour vous d’avancer.',
      ],
      candidateImageAlt: 'Postes potentiels de candidats fédéraux partout au Canada',
      howTitle: 'Comment devenir candidat',
      stepOneLabel: 'Étape 1',
      stepOneText: 'Créez votre compte sur Civil Citizens.',
      stepTwoLabel: 'Étape 2',
      stepTwoText:
        'Envoyez un message à Andy Normore avec votre circonscription électorale. Indiquez clairement que vous vous présentez comme candidat.',
      whatTitle: 'Ce que cela signifie',
      meaningPoints: [
        'Vous choisissez de représenter votre communauté',
        'Vous choisissez de participer, pas de vous plaindre',
        'Vous choisissez d’aider à bâtir quelque chose de réel',
      ],
      missionTitle: 'La mission',
      missionPoints: [
        'Nous avons besoin d’une représentation dans les 343 districts du Canada',
        'Chaque poste pourvu renforce le réseau',
        'Chaque candidat nous rapproche d’un système fonctionnel',
      ],
      momentTitle: 'Le moment',
      momentLines: ['Le moment, c’est maintenant. L’avenir avance vite.', 'C’est ici que tout commence.', 'Ensemble, nous bâtissons une société idéale.'],
      createAccount: 'Créez votre compte Civil',
      contactAndy: 'Contacter Andy Normore',
      chambersLabel: 'Chambres des citoyens',
      chambersTitle: 'Explorez votre association de circonscription électorale',
      chambersSummary:
        'Explorez votre association de circonscription électorale grâce à notre fonctionnalité Chambres des citoyens, exclusivement sur Civil.',
      chambersCta: 'Explorer les A.C.E. sur Civil',
      chambersAlt: 'Explorer les associations de circonscription électorale sur Civil',
    },
  })

  return (
    <div className="leadership-page">
      <section className="leadership-page__section">
        <div className="leadership-page__header">
          <p className="eyebrow">{content.eyebrow}</p>
          <h1 className="leadership-page__title">{content.title}</h1>
          <p className="section-copy leadership-page__intro">{content.intro}</p>
        </div>

        <Link to="/about/leadership/andy-normore" className="leadership-page__card">
          <div className="leadership-page__visual-wrap">
            <img
              src={andyNormoreImage}
              alt={content.founderAlt}
              className="leadership-page__image"
            />
          </div>
          <div className="leadership-page__content">
            <p className="leadership-page__label">{content.founderLabel}</p>
            <h2 className="leadership-page__name">Andrew Normore</h2>
            <p className="leadership-page__summary">{content.founderSummary}</p>
            <span className="button button--primary leadership-page__button">{content.founderCta}</span>
          </div>
        </Link>

        <div className="leadership-page__candidate-panel">
          <div className="leadership-page__candidate-grid">
            <div className="leadership-page__visual-wrap leadership-page__candidate-visual-wrap">
              <img
                src={federalCandidateImage}
                alt={content.candidateImageAlt}
                className="leadership-page__image leadership-page__candidate-image"
              />
            </div>

            <div className="leadership-page__candidate-copy">
              <p className="leadership-page__label">{content.callLabel}</p>
              <h2 className="leadership-page__name leadership-page__name--candidate">{content.callTitle}</h2>
              <p className="leadership-page__summary">{content.callParagraphs[0]}</p>
              <p className="leadership-page__summary">{content.callParagraphs[1]}</p>
              <p className="leadership-page__summary">{content.callParagraphs[2]}</p>
              <p className="leadership-page__summary leadership-page__summary--strong">{content.callParagraphs[3]}</p>
              <p className="leadership-page__summary">{content.callParagraphs[4]}</p>
              <p className="leadership-page__summary">{content.callParagraphs[5]}</p>

              <div className="leadership-page__candidate-steps">
                <div className="leadership-page__candidate-block">
                  <h3 className="leadership-page__candidate-title">{content.howTitle}</h3>
                  <p className="leadership-page__summary">
                    <strong>{content.stepOneLabel}</strong>
                    <br />
                    {content.stepOneText}
                  </p>
                  <p className="leadership-page__summary">
                    <strong>{content.stepTwoLabel}</strong>
                    <br />
                    {content.stepTwoText}
                  </p>
                </div>

                <div className="leadership-page__candidate-block">
                  <h3 className="leadership-page__candidate-title">{content.whatTitle}</h3>
                  <div className="leadership-book__toc-list leadership-page__candidate-list">
                    {content.meaningPoints.map((point) => (
                      <p key={point} className="leadership-book__toc-item">
                        {point}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="leadership-page__candidate-block">
                  <h3 className="leadership-page__candidate-title">{content.missionTitle}</h3>
                  <div className="leadership-book__toc-list leadership-page__candidate-list">
                    {content.missionPoints.map((point) => (
                      <p key={point} className="leadership-book__toc-item">
                        {point}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="leadership-page__candidate-block leadership-page__candidate-moment">
                <h3 className="leadership-page__candidate-title">{content.momentTitle}</h3>
                <p className="leadership-page__summary">{content.momentLines[0]}</p>
                <p className="leadership-page__summary">{content.momentLines[1]}</p>
                <p className="leadership-page__summary leadership-page__summary--strong">{content.momentLines[2]}</p>
              </div>

              <div className="leadership-page__candidate-actions">
                <Link to="/become-a-civil-citizen" className="button button--primary">
                  {content.createAccount}
                </Link>
                <Link to="/about/leadership/andy-normore" className="button button--secondary">
                  {content.contactAndy}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <a
          href={chambersUrl}
          className="leadership-page__card"
          target="_blank"
          rel="noreferrer"
        >
          <div className="leadership-page__visual-wrap">
            <img
              src={edaMapImage}
              alt={content.chambersAlt}
              className="leadership-page__image"
            />
          </div>
          <div className="leadership-page__content">
            <p className="leadership-page__label">{content.chambersLabel}</p>
            <h2 className="leadership-page__name">{content.chambersTitle}</h2>
            <p className="leadership-page__summary">{content.chambersSummary}</p>
            <span className="button button--primary leadership-page__button">{content.chambersCta}</span>
          </div>
        </a>
      </section>
    </div>
  )
}