import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import joinCivilCitizensImage from '../../assets/img/become-a-civil-citizen/3-join-civil-citizens.jpg'
import { localizeByLanguage } from '../lib/locale'

const problemPoints = [
  'Systems are fragmented',
  'Value is extracted globally',
  'Citizens are disconnected',
]

const shiftPoints = [
  'From: Apps',
  'To: System',
]

const layerPoints = [
  'Community',
  'Commerce',
  'Careers',
  'Transport',
  'AI',
]

const whyItMattersPoints = [
  'Local power',
  'Economic sovereignty',
  'Real coordination',
]

const coreIdeas = [
  {
    title: 'Civil is not a platform — it is a unified system',
    points: [
      'One system instead of fragmented tools',
      'Community + Commerce + Careers + Governance in one place',
      'Built specifically for Canada and Canadians',
      'Designed to keep value inside the country',
    ],
  },
  {
    title: 'Built on real people, real identity, real communities',
    points: [
      'Verified Canadians — not anonymous global noise',
      'Organized by location (EDA / riding level)',
      'Local-first structure to national coordination',
      'Trust is built through identity and participation',
    ],
  },
  {
    title: 'Community Layer (Connection)',
    purpose: 'Connect people who actually live near each other',
    points: [
      'Personal feeds: friends, local updates, organizations',
      'Local events, town halls, meetups',
      'Direct messaging between verified citizens',
      'Local news, content, and creators',
    ],
  },
  {
    title: 'Commerce Layer (Economic Engine)',
    purpose: 'Keep money circulating inside Canadian communities',
    points: [
      'Buy and sell locally',
      'Unified marketplace across Canada',
      'Built-in wallet for transactions',
      'Contracts for services, gigs, delivery',
      'Integrated logistics: rides + delivery',
    ],
  },
  {
    title: 'Work + Careers Layer',
    purpose: 'Connect Canadian talent with Canadian opportunity',
    points: [
      'Professional profiles based on real skills',
      'Canadian job network',
      'Direct connection to businesses',
      'Hiring happens inside the same system',
    ],
  },
  {
    title: 'Transportation + Logistics Layer',
    purpose: 'Move people and goods inside the same network',
    points: [
      'Ride sharing',
      'Delivery services',
      'Shipment fulfillment tied to commerce',
      'Individuals can build income streams',
    ],
  },
  {
    title: 'AI Layer (Intelligence + Coordination)',
    purpose: 'Make the system smarter without controlling users',
    points: [
      'Supports communication and moderation',
      'Helps businesses operate better',
      'Improves coordination between citizens',
      'Transparent and accountable AI decisions',
    ],
  },
  {
    title: 'Everything is integrated',
    purpose: 'One system. Not five.',
    points: [
      'Messaging, payments, jobs, commerce are all connected',
      'No switching between apps',
      'One identity across all interactions',
    ],
  },
  {
    title: 'Designed for builders, not spectators',
    purpose: 'This is a system for people who do things',
    points: [
      'Entrepreneurs',
      'Tradespeople',
      'Farmers',
      'Developers',
      'Operators',
    ],
  },
  {
    title: 'The outcome',
    points: [
      'Stronger local communities',
      'Stronger local economies',
      'Reduced dependence on foreign platforms',
      'Coordinated citizen participation',
    ],
  },
]

export default function TheSystemPage() {
  const { i18n } = useTranslation()
  const content = localizeByLanguage(i18n, {
    en: {
      eyebrow: 'The Civil App',
      title: 'Architecture Of A New Citizen System',
      heroCopy:
        'Civil is not a social network. It is the infrastructure layer for a functioning citizen economy.',
      coreIdeaLabel: 'Core Idea',
      coreIdeaTitle: 'One System. Not Five.',
      coreIdeaCopy:
        'Civil unifies community, commerce, careers, logistics, and governance into one national operating layer built specifically for Canadians.',
      problemTitle: 'The Problem',
      problemCopy:
        'Canada is operating through fragmented tools and disconnected incentives. Civil is meant to replace that fragmentation with a coordinated national layer.',
      shiftTitle: 'The Shift',
      shiftCopy:
        'This is a move away from isolated apps and toward a country-scale system designed to coordinate real people, real work, and real value.',
      layersTitle: 'The Layers',
      layersCopy: 'Civil is built as a unified citizen system with distinct layers that work together.',
      whyTitle: 'Why It Matters',
      whyCopy:
        'The point is not novelty. The point is local power, economic sovereignty, and real coordination between citizens and communities.',
      coreIdeasTitle: 'Core Ideas',
      coreIdeasCopy:
        'Civil is a unified architecture for community, commerce, work, logistics, and governance. These are the core ideas behind how it is meant to function.',
      purpose: 'Purpose',
      ctaTitle: 'Become A Civil Citizen',
      ctaCopy:
        'Civil only works when citizens step into the system and begin building inside it. Join the network, create your account, and start participating in a Canadian economic and civic layer designed to connect real people to real action.',
      ctaButton: 'Become a Civil Citizen',
      ctaAria: 'Become a Civil Citizen',
      ctaAlt: 'Civil Citizens network invitation',
    },
    fr: {
      eyebrow: 'L’application Civil',
      title: 'Architecture d’un nouveau système citoyen',
      heroCopy:
        'Civil n’est pas un réseau social. C’est la couche d’infrastructure d’une économie citoyenne fonctionnelle.',
      coreIdeaLabel: 'Idée centrale',
      coreIdeaTitle: 'Un système. Pas cinq.',
      coreIdeaCopy:
        'Civil unifie la communauté, le commerce, les carrières, la logistique et la gouvernance dans une seule couche opérationnelle nationale conçue spécifiquement pour les Canadiens.',
      problemTitle: 'Le problème',
      problemCopy:
        'Le Canada fonctionne avec des outils fragmentés et des incitatifs déconnectés. Civil vise à remplacer cette fragmentation par une couche nationale coordonnée.',
      shiftTitle: 'Le virage',
      shiftCopy:
        'Il s’agit d’un passage d’applications isolées vers un système à l’échelle du pays conçu pour coordonner de vraies personnes, un vrai travail et une vraie valeur.',
      layersTitle: 'Les couches',
      layersCopy: 'Civil est conçu comme un système citoyen unifié avec des couches distinctes qui travaillent ensemble.',
      whyTitle: 'Pourquoi cela compte',
      whyCopy:
        'L’objectif n’est pas la nouveauté. L’objectif est le pouvoir local, la souveraineté économique et une véritable coordination entre citoyens et communautés.',
      coreIdeasTitle: 'Idées centrales',
      coreIdeasCopy:
        'Civil est une architecture unifiée pour la communauté, le commerce, le travail, la logistique et la gouvernance. Voici les idées centrales de son fonctionnement.',
      purpose: 'But',
      ctaTitle: 'Devenir un citoyen civil',
      ctaCopy:
        'Civil ne fonctionne que lorsque les citoyens entrent dans le système et commencent à y bâtir. Rejoignez le réseau, créez votre compte et commencez à participer à une couche économique et civique canadienne conçue pour relier de vraies personnes à de vraies actions.',
      ctaButton: 'Devenir un citoyen civil',
      ctaAria: 'Devenir un citoyen civil',
      ctaAlt: 'Invitation au réseau Civil Citizens',
    },
  })

  return (
    <div className="system-page">
      <section className="hero-panel hero-panel--policy system-page__hero">
        <div className="policy-hero-grid">
          <div>
            <p className="eyebrow">{content.eyebrow}</p>
            <h1 className="hero-title hero-title--policy">{content.title}</h1>
            <p className="hero-copy hero-copy--policy">{content.heroCopy}</p>
            <div className="policy-aside__list system-page__highlights" aria-label="System highlights">
              {layerPoints.map((highlight) => (
                <span key={highlight}>{highlight}</span>
              ))}
            </div>
          </div>
          <aside className="policy-aside">
            <p className="policy-aside__eyebrow">{content.coreIdeaLabel}</p>
            <h2 className="policy-aside__title">{content.coreIdeaTitle}</h2>
            <p className="policy-aside__copy">{content.coreIdeaCopy}</p>
          </aside>
        </div>
      </section>

      <section className="policy-foundation system-page__links">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">{content.problemTitle}</h2>
            <p className="section-copy">{content.problemCopy}</p>
          </div>
        </div>
        <div className="system-page__mini-grid">
          {problemPoints.map((point) => (
            <article key={point} className="system-page__mini-card">
              <h3 className="system-page__mini-title">{point}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="policy-foundation system-page__links">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">{content.shiftTitle}</h2>
            <p className="section-copy">{content.shiftCopy}</p>
          </div>
        </div>
        <div className="system-page__mini-grid system-page__mini-grid--shift">
          {shiftPoints.map((point) => (
            <article key={point} className="system-page__mini-card system-page__mini-card--shift">
              <h3 className="system-page__mini-title">{point}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="policy-foundation system-page__links">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">{content.layersTitle}</h2>
            <p className="section-copy">{content.layersCopy}</p>
          </div>
        </div>
        <div className="policy-aside__list system-page__highlights" aria-label="Civil layers">
          {layerPoints.map((point) => (
            <span key={point}>{point}</span>
          ))}
        </div>
      </section>

      <section className="policy-foundation system-page__links">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">{content.whyTitle}</h2>
            <p className="section-copy">{content.whyCopy}</p>
          </div>
        </div>
        <div className="system-page__mini-grid">
          {whyItMattersPoints.map((point) => (
            <article key={point} className="system-page__mini-card">
              <h3 className="system-page__mini-title">{point}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="policy-foundation system-page__links">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">{content.coreIdeasTitle}</h2>
            <p className="section-copy">{content.coreIdeasCopy}</p>
          </div>
        </div>
        <div className="policy-grid system-page__core-grid">
          {coreIdeas.map((idea, index) => (
            <article key={idea.title} className="policy-card system-page__core-card">
              <p className="policy-card__number">{index + 1}</p>
              <h3 className="policy-card__title">{idea.title}</h3>
              <div className="system-page__core-list">
                {idea.points.map((point) => (
                  <p key={point} className="policy-card__description system-page__core-point">{point}</p>
                ))}
              </div>
              {idea.purpose ? (
                <p className="system-page__purpose">
                  <strong>{content.purpose}:</strong> {idea.purpose}
                </p>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="donate-page system-page__cta">
        <div className="donate-page__section">
          <h2 className="donate-page__title">{content.ctaTitle}</h2>
          <div className="donate-page__grid">
            <div className="donate-page__panel">
              <p className="donate-page__copy">{content.ctaCopy}</p>
              <div className="donate-page__actions">
                <Link to="/become-a-civil-citizen" className="button button--primary">
                  {content.ctaButton}
                </Link>
              </div>
            </div>
            <Link
              to="/become-a-civil-citizen"
              className="donate-page__visual"
              aria-label={content.ctaAria}
            >
              <img
                className="donate-page__image"
                src={joinCivilCitizensImage}
                alt={content.ctaAlt}
              />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}