import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { getPlatformGroups } from '../data/localizedNavigation'
import { localizeByLanguage } from '../lib/locale'

export default function PlatformPage() {
  const { i18n } = useTranslation()
  const platformGroups = getPlatformGroups(i18n)
  const implementationGroup = platformGroups.find((group) =>
    group.items?.some((item) => item.path === '/platform/implementation/roadmap')
  )
  const mainGroups = platformGroups.filter((group) => group !== implementationGroup)
  const content = localizeByLanguage(i18n, {
    en: {
      eyebrow: 'CCC Platform',
      title: 'Platform',
      sectionsTitle: 'Table of Contents',
      sectionCards: [
        {
          number: '1',
          title: 'Platform',
          description: 'Core policy areas across economy, technology, governance, immigration, agriculture, energy, defense, and family.',
          path: '/platform#platform-overview',
        },
        {
          number: '2',
          title: 'Implementation',
          description: 'The execution layer: roadmap, district power, chambers, digital governance, candidate systems, accountability, and infrastructure.',
          path: '/platform#platform-implementation',
        },
      ],
      implementationTitle: 'Implementation',
      implementationItems: [
        { label: 'Roadmap', path: '/platform/implementation/roadmap' },
        { label: 'Restoring Power to Citizens in Every Riding', path: '/platform/implementation/restoring-power-to-citizens' },
        { label: 'Chambers of Citizens', path: '/platform/implementation/chambers-of-citizens' },
        { label: 'Digital Governance System', path: '/platform/implementation/digital-governance' },
        { label: 'Candidate Selection System', path: '/platform/implementation/candidate-selection' },
        { label: 'Civil Wallet & Funding Model', path: '/platform/implementation/civil-wallet' },
        { label: 'MP Accountability System', path: '/platform/implementation/mp-accountability' },
        { label: 'Member Growth Strategy', path: '/platform/implementation/member-growth' },
        { label: 'Trust, Safety, and Verification', path: '/platform/implementation/trust-safety' },
      ],
    },
    fr: {
      eyebrow: 'Plateforme du CCC',
      title: 'Plateforme',
      sectionsTitle: 'Table des matieres',
      sectionCards: [
        {
          number: '1',
          title: 'Plateforme',
          description: 'Les grands domaines politiques: economie, technologie, gouvernance, immigration, agriculture, energie, defense et famille.',
          path: '/platform#platform-overview',
        },
        {
          number: '2',
          title: 'Mise en oeuvre',
          description: 'La couche d execution: feuille de route, pouvoir local, chambres, gouvernance numerique, responsabilite et infrastructure.',
          path: '/platform#platform-implementation',
        },
      ],
      implementationTitle: 'Mise en oeuvre',
      implementationItems: [
        { label: 'Feuille de route', path: '/platform/implementation/roadmap' },
        { label: 'Redonner le pouvoir aux citoyens dans chaque circonscription', path: '/platform/implementation/restoring-power-to-citizens' },
        { label: 'Chambres de citoyens', path: '/platform/implementation/chambers-of-citizens' },
        { label: 'Systeme de gouvernance numerique', path: '/platform/implementation/digital-governance' },
        { label: 'Systeme de selection des candidats', path: '/platform/implementation/candidate-selection' },
        { label: 'Portefeuille Civil et modele de financement', path: '/platform/implementation/civil-wallet' },
        { label: 'Systeme de responsabilite des deputes', path: '/platform/implementation/mp-accountability' },
        { label: 'Strategie de croissance des membres', path: '/platform/implementation/member-growth' },
        { label: 'Confiance, securite et verification', path: '/platform/implementation/trust-safety' },
      ],
    },
  })

  return (
    <div className="policy-detail">
      <section className="policy-detail__panel platform-page__sections-panel">
        <p className="eyebrow">{content.eyebrow}</p>
        <h1 className="policy-detail__title">{content.title}</h1>
        <div className="policy-foundation__heading platform-page__sections-heading">
          <div>
            <h2 className="section-title">{content.sectionsTitle}</h2>
          </div>
        </div>
        <div className="policy-grid platform-page__sections-grid">
          {content.sectionCards.map((section) => (
            <Link key={section.path} to={section.path} className="policy-card platform-page__sections-card">
              <p className="policy-card__number">{section.number}</p>
              <h2 className="policy-card__title">{section.title}</h2>
              <p className="policy-card__description">{section.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section id="platform-overview" className="policy-detail__panel platform-page__overview-panel">
        <p className="eyebrow">{content.eyebrow}</p>
        <h2 className="policy-detail__title">{content.title}</h2>
        <div className="policy-grid">
          {mainGroups.map((group, index) => (
            <Link key={group.path} to={group.path} className="policy-card">
              <p className="policy-card__number">{index + 1}</p>
              <h2 className="policy-card__title">{group.title}</h2>
              <p className="policy-card__description">{group.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      <section
        id="platform-implementation"
        className="policy-detail__panel platform-page__implementation-panel"
        aria-labelledby="platform-implementation-title"
      >
        <h2 id="platform-implementation-title" className="platform-page__implementation-title">
          {content.implementationTitle}
        </h2>
        <div className="policy-grid platform-page__implementation-grid">
          {content.implementationItems.map((item, index) => (
            <Link key={item.path} to={item.path} className="policy-card platform-page__implementation-card">
              <p className="policy-card__number">{index + 1}</p>
              <h3 className="policy-card__title platform-page__implementation-card-title">{item.label}</h3>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}