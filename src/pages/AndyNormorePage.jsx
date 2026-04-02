import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import bookCoverImage from '../../assets/img/andy-normore/andy-normore-humans-in-the-singularity-book-cover.jpg'
import andyNormoreImage from '../../assets/img/andy-normore/andy-normore.jpg'
import { localizeByLanguage } from '../lib/locale'

const fullBioUrl =
  'https://docs.google.com/presentation/d/1J0I963BStFUz4eleudN3ZH3TN2Xksf4t3Ou87XdbsRY/edit?usp=sharing'

const purchaseUrl = 'https://civilcitizens.ca/com/on/york-durham/orgs/civil-citizens-incorporated/shop'
const civilProfileUrl = 'https://civilcitizens.ca/u/andynormore'
const xProfileUrl = 'https://x.com/AndyNormore'

export default function AndyNormorePage() {
  const { i18n } = useTranslation()
  const content = localizeByLanguage(i18n, {
    en: {
      eyebrow: 'Leadership',
      role: 'Chairman & Founder',
      intro:
        'Andrew Normore is the founder of Civil Citizens and the architect behind its core system, a unified platform designed to rebuild how Canadians connect, work, trade, and participate in society.',
      bodyOne: [
        'With over two decades of experience in software development, systems design, and business strategy, Andrew has built and scaled products across multiple industries. His work has generated over $1 million in revenue for organizations and led the development of advanced AI-driven platforms, automation systems, and next-generation marketplaces.',
        'Civil Citizens is the culmination of that experience.',
        'It was not built as another startup.',
        'It was built as infrastructure.',
        'Andrew recognized a fundamental problem: Canadians create value every day, but that value is fragmented across foreign-owned platforms that do not serve the long-term interests of the people using them.',
        'Civil is the response.',
      ],
      leadershipTitle: 'Under His Leadership',
      leadershipIntro: 'Civil Citizens is being developed as a fully integrated system where citizens can:',
      systemPoints: ['Communicate', 'Build businesses', 'Earn income', 'Coordinate locally', 'Participate meaningfully in shaping their communities'],
      systemClosing: 'All within a single network.',
      leadershipBody: [
        'Andrew\'s approach is direct and execution-driven. He does not focus on theory, he builds systems that work.',
        'His background includes service in the Canadian Armed Forces, where discipline, structure, and resilience became foundational to his leadership style. That philosophy now carries into Civil: a system designed not for spectators, but for builders.',
        'He believes the future belongs to those who create real systems, not just ideas.',
        'Civil Citizens is his commitment to that belief.',
      ],
      bookTitle: 'Humans In The Singularity',
      bookBlurb: [
        'We are entering a moment in history where the rules that governed humanity for thousands of years are beginning to break.',
        'For most of our existence, intelligence was scarce. Skill was scarce. Knowledge was scarce.',
        'Those who possessed it led. Those who did not followed. That era is ending.',
      ],
      preorder: 'Preorder Andys first book with the Civil App!',
      contactTitle: 'Contact Andrew Normore',
      emailLabel: 'Email:',
      civilLabel: 'Civil:',
      xLabel: 'X:',
      bioTitle: 'Full Biography',
      bioSummary: 'Read Andrew Normore\'s full biography and background presentation.',
      bioCta: 'View Full Biography',
      profileAlt: 'Andrew Normore, Chairman and Founder',
      bookAlt: 'Humans In The Singularity book cover',
      bookAria: 'Humans In The Singularity',
    },
    fr: {
      eyebrow: 'Leadership',
      role: 'Président et fondateur',
      intro:
        'Andrew Normore est le fondateur de Civil Citizens et l’architecte de son système central, une plateforme unifiée conçue pour reconstruire la façon dont les Canadiens se connectent, travaillent, échangent et participent à la société.',
      bodyOne: [
        'Avec plus de vingt ans d’expérience en développement logiciel, en conception de systèmes et en stratégie d’affaires, Andrew a créé et fait évoluer des produits dans plusieurs industries. Son travail a généré plus d’un million de dollars de revenus pour des organisations et mené au développement de plateformes avancées alimentées par l’IA, de systèmes d’automatisation et de marchés de nouvelle génération.',
        'Civil Citizens est l’aboutissement de cette expérience.',
        'Ce projet n’a pas été conçu comme une autre jeune entreprise.',
        'Il a été conçu comme une infrastructure.',
        'Andrew a reconnu un problème fondamental : les Canadiens créent de la valeur chaque jour, mais cette valeur est fragmentée sur des plateformes étrangères qui ne servent pas les intérêts à long terme des personnes qui les utilisent.',
        'Civil est la réponse.',
      ],
      leadershipTitle: 'Sous sa direction',
      leadershipIntro: 'Civil Citizens est développé comme un système entièrement intégré où les citoyens peuvent :',
      systemPoints: ['Communiquer', 'Bâtir des entreprises', 'Gagner un revenu', 'Se coordonner localement', 'Participer concrètement à l’orientation de leurs communautés'],
      systemClosing: 'Le tout dans un seul réseau.',
      leadershipBody: [
        'L’approche d’Andrew est directe et axée sur l’exécution. Il ne s’attarde pas à la théorie, il bâtit des systèmes qui fonctionnent.',
        'Son parcours comprend un service au sein des Forces armées canadiennes, où la discipline, la structure et la résilience sont devenues des fondements de son style de leadership. Cette philosophie se poursuit maintenant dans Civil : un système conçu non pour les spectateurs, mais pour les bâtisseurs.',
        'Il croit que l’avenir appartient à ceux qui créent de vrais systèmes, pas seulement des idées.',
        'Civil Citizens est son engagement envers cette conviction.',
      ],
      bookTitle: 'Humans In The Singularity',
      bookBlurb: [
        'Nous entrons dans un moment de l’histoire où les règles qui ont gouverné l’humanité pendant des milliers d’années commencent à se briser.',
        'Pendant la majeure partie de notre existence, l’intelligence était rare. La compétence était rare. Le savoir était rare.',
        'Ceux qui le possédaient dirigeaient. Ceux qui ne l’avaient pas suivaient. Cette époque se termine.',
      ],
      preorder: 'Précommandez le premier livre d’Andy avec l’application Civil!',
      contactTitle: 'Contacter Andrew Normore',
      emailLabel: 'Courriel :',
      civilLabel: 'Civil :',
      xLabel: 'X :',
      bioTitle: 'Biographie complète',
      bioSummary: 'Lisez la biographie complète et la présentation du parcours d’Andrew Normore.',
      bioCta: 'Voir la biographie complète',
      profileAlt: 'Andrew Normore, président et fondateur',
      bookAlt: 'Couverture du livre Humans In The Singularity',
      bookAria: 'Humans In The Singularity',
    },
  })

  return (
    <div className="leadership-page leadership-page--profile">
      <section className="leadership-page__section leadership-page__section--profile">
        <div className="leadership-profile__hero">
          <div className="leadership-profile__visual-wrap">
            <img
              src={andyNormoreImage}
              alt={content.profileAlt}
              className="leadership-profile__image"
            />
          </div>

          <div className="leadership-profile__hero-copy">
            <p className="eyebrow">{content.eyebrow}</p>
            <h1 className="leadership-page__title leadership-page__title--profile">Andrew Normore</h1>
            <p className="leadership-profile__role">{content.role}</p>
            <p className="section-copy leadership-page__intro">{content.intro}</p>
          </div>
        </div>

        <div className="leadership-profile__body">
          <div className="leadership-profile__panel">
            <p className="leadership-profile__paragraph">{content.bodyOne[0]}</p>
            <p className="leadership-profile__paragraph">{content.bodyOne[1]}</p>
            <p className="leadership-profile__statement">{content.bodyOne[2]}</p>
            <p className="leadership-profile__statement">{content.bodyOne[3]}</p>
            <p className="leadership-profile__paragraph">{content.bodyOne[4]}</p>
            <p className="leadership-profile__paragraph leadership-profile__paragraph--strong">{content.bodyOne[5]}</p>
          </div>

          <div className="leadership-profile__panel">
            <h2 className="section-title leadership-profile__section-title">{content.leadershipTitle}</h2>
            <p className="leadership-profile__paragraph">{content.leadershipIntro}</p>
            <div className="cta-page__feature-list leadership-profile__feature-list">
              {content.systemPoints.map((point) => (
                <span key={point}>{point}</span>
              ))}
            </div>
            <p className="leadership-profile__paragraph leadership-profile__paragraph--strong">{content.systemClosing}</p>
            <p className="leadership-profile__paragraph">{content.leadershipBody[0]}</p>
            <p className="leadership-profile__paragraph">{content.leadershipBody[1]}</p>
            <p className="leadership-profile__paragraph">{content.leadershipBody[2]}</p>
            <p className="leadership-profile__paragraph leadership-profile__paragraph--strong">{content.leadershipBody[3]}</p>
          </div>

          <div className="leadership-profile__panel leadership-profile__book-panel">
            <div className="leadership-profile__book-grid">
              <Link
                to="/about/leadership/andy-normore/humans-in-the-singularity"
                className="leadership-book__visual-wrap leadership-profile__book-link"
                aria-label={content.bookAria}
              >
                <img
                  src={bookCoverImage}
                  alt={content.bookAlt}
                  className="leadership-book__image"
                />
              </Link>
              <div className="leadership-profile__book-copy">
                <h2 className="section-title leadership-profile__section-title">{content.bookTitle}</h2>
                <div className="leadership-book__intro leadership-book__intro--compact">
                  {content.bookBlurb.map((paragraph) => (
                    <p key={paragraph} className="leadership-profile__paragraph">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <div className="donate-page__actions">
                  <a href={purchaseUrl} className="button button--primary" target="_blank" rel="noreferrer">
                    {content.preorder}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="leadership-profile__panel leadership-profile__panel--cta">
            <h2 className="section-title leadership-profile__section-title">{content.contactTitle}</h2>
            <div className="leadership-profile__contact-list">
              <p className="leadership-profile__paragraph">
                <strong>{content.emailLabel}</strong>{' '}
                <a href="mailto:AndrewNormore@gmail.com" className="leadership-profile__contact-link">
                  AndrewNormore@gmail.com
                </a>
              </p>
              <p className="leadership-profile__paragraph">
                <strong>{content.emailLabel}</strong>{' '}
                <a href="mailto:Andy@CivilCitizens.ca" className="leadership-profile__contact-link">
                  Andy@CivilCitizens.ca
                </a>
              </p>
              <p className="leadership-profile__paragraph">
                <strong>{content.civilLabel}</strong>{' '}
                <a href={civilProfileUrl} className="leadership-profile__contact-link" target="_blank" rel="noreferrer">
                  {civilProfileUrl}
                </a>
              </p>
              <p className="leadership-profile__paragraph">
                <strong>{content.xLabel}</strong>{' '}
                <a href={xProfileUrl} className="leadership-profile__contact-link" target="_blank" rel="noreferrer">
                  {xProfileUrl}
                </a>
              </p>
            </div>
          </div>

          <div className="leadership-profile__panel leadership-profile__panel--cta">
            <h2 className="section-title leadership-profile__section-title">{content.bioTitle}</h2>
            <p className="leadership-profile__paragraph">{content.bioSummary}</p>
            <div className="donate-page__actions">
              <a href={fullBioUrl} className="button button--primary" target="_blank" rel="noreferrer">
                {content.bioCta}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}