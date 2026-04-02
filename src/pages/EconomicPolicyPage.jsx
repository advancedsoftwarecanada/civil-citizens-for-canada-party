import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { getEconomicPolicyPoints } from '../data/economicPolicy'
import { localizeByLanguage } from '../lib/locale'

export default function EconomicPolicyPage() {
  const { i18n } = useTranslation()
  const economicPolicyPoints = getEconomicPolicyPoints(i18n)
  const groupedPolicySections = localizeByLanguage(i18n, {
    en: [
      { title: 'Tax Reform', pointNumbers: ['1', '2', '3', '4'] },
      { title: 'Business and Economic Growth', pointNumbers: ['5', '6', '7'] },
      { title: 'Future Economy and Workforce', pointNumbers: ['8'] },
      { title: 'Families and Long-Term Stability', pointNumbers: ['9'] },
      { title: 'System-Level Goal', pointNumbers: ['10'] },
    ],
    fr: [
      { title: 'Réforme fiscale', pointNumbers: ['1', '2', '3', '4'] },
      { title: 'Entreprise et croissance économique', pointNumbers: ['5', '6', '7'] },
      { title: 'Économie de demain et main-d’œuvre', pointNumbers: ['8'] },
      { title: 'Familles et stabilité à long terme', pointNumbers: ['9'] },
      { title: 'Objectif systémique', pointNumbers: ['10'] },
    ],
  })
  const content = localizeByLanguage(i18n, {
    en: {
      eyebrow: 'Platform / Economic Policy',
      title: 'Economic Policy',
      summary:
        'A final structure built around work, growth, stability, and a Canadian economy that serves citizens instead of extracting from them.',
      back: 'Back to Platform',
      asideEyebrow: 'Final Structure',
      asideTitle: 'An economy designed for participation.',
      asideCopy:
        'This structure starts with tax reform, extends into business growth, addresses the future economy, supports families, and ends with a system-level goal that puts citizens first.',
      principlesLabel: 'Core principles',
      principles: ['Reward Work', 'Build In Canada', 'Support Families', 'System That Works'],
    },
    fr: {
      eyebrow: 'Plateforme / Politique économique',
      title: 'Politique économique',
      summary:
        'Une structure finale fondée sur le travail, la croissance, la stabilité et une économie canadienne au service des citoyens plutôt que de leur extraction.',
      back: 'Retour à la plateforme',
      asideEyebrow: 'Structure finale',
      asideTitle: 'Une économie conçue pour la participation.',
      asideCopy:
        'Cette structure commence par la réforme fiscale, se prolonge vers la croissance des entreprises, traite de l’économie de demain, soutient les familles et se termine par un objectif systémique qui place les citoyens au premier plan.',
      principlesLabel: 'Principes centraux',
      principles: ['Récompenser le travail', 'Bâtir au Canada', 'Soutenir les familles', 'Un système qui fonctionne'],
    },
  })
  const policyLookup = economicPolicyPoints.reduce((lookup, point) => {
    lookup[point.number] = point
    return lookup
  }, {})

  return (
    <div className="policy-page economic-policy-page">
      <div className="policy-hero-grid">
        <section className="hero-panel hero-panel--policy">
          <p className="eyebrow">{content.eyebrow}</p>
          <h1 className="hero-title hero-title--policy">{content.title}</h1>
          <p className="hero-copy hero-copy--policy">{content.summary}</p>
          <div className="hero-actions hero-actions--left">
            <Link to="/platform" className="button button--secondary">
              {content.back}
            </Link>
          </div>
        </section>

        <aside className="policy-aside">
          <p className="policy-aside__eyebrow">{content.asideEyebrow}</p>
          <h2 className="policy-aside__title">{content.asideTitle}</h2>
          <p className="policy-aside__copy">{content.asideCopy}</p>
          <div className="policy-aside__list" aria-label={content.principlesLabel}>
            {content.principles.map((point) => (
              <span key={point}>{point}</span>
            ))}
          </div>
        </aside>
      </div>

      {groupedPolicySections.map((section) => (
        <section key={section.title} id="foundation" className="policy-foundation economic-policy-page__group">
          <div className="policy-foundation__heading">
            <div>
              <h2 className="section-title">{section.title}</h2>
            </div>
          </div>

          <div className="policy-grid">
            {section.pointNumbers.map((number) => {
              const point = policyLookup[number]

              return (
                <Link key={point.slug} to={`/platform/economic-foundation/${point.slug}`} className="policy-card">
                  <p className="policy-card__number">{point.number}</p>
                  <h3 className="policy-card__title">{point.title}</h3>
                  <p className="policy-card__description">{point.description}</p>
                </Link>
              )
            })}
          </div>
        </section>
      ))}
    </div>
  )
}
