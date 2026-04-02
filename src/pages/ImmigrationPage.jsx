import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { localizeByLanguage } from '../lib/locale'

export default function ImmigrationPage() {
  const { i18n } = useTranslation()
  const content = localizeByLanguage(i18n, {
    en: {
      eyebrow: 'Platform / Immigration',
      title: 'Stabilize First. Then Grow.',
      hero: [
        'Canada must align immigration with its ability to support people already here and those who arrive.',
        'Immigration will continue, but it must be structured, measured, and tied to real capacity.',
      ],
      asideEyebrow: 'The Civil Standard',
      asideTitle: 'Canada remains open.',
      asideCopy: 'But openness must be structured, sustainable, and aligned with the well-being of all Canadians.',
      stabilizationTitle: 'Temporary Stabilization Phase',
      stabilizationCopy: 'Canada will implement a period of stabilization where immigration levels are reduced to sustainable levels.',
      stabilizationPoints: ['Expanding housing supply', 'Strengthening healthcare and infrastructure', 'Integrating newcomers already in Canada', 'Supporting workforce participation'],
      capacityTitle: 'Capacity-Based Growth',
      capacityCopy: 'Future immigration levels will be determined by Canada\'s readiness, not arbitrary targets.',
      capacityIntro: 'Key indicators include:',
      capacityPoints: ['Housing availability', 'Employment conditions', 'Wage growth', 'Infrastructure capacity'],
      capacityClosing: 'Immigration will increase only when these conditions support it.',
      economicTitle: 'Economic Alignment',
      economicCopy: 'Immigration must directly support Canada\'s needs.',
      economicPoints: ['Addressing verified labour shortages', 'Supporting key industries', 'Strengthen local economies'],
      economicClosing: 'Through Chambers of Citizens, local communities will help signal real demand and readiness.',
      enforcementTitle: 'Lawful Immigration and Enforcement',
      enforcementCopy: 'Canada is a nation governed by law. A credible immigration system requires that rules are clearly defined and consistently enforced.',
      enforcementIntro: 'This includes:',
      enforcementPoints: ['Timely processing of all immigration decisions', 'Enforcement of removal orders where legal status no longer applies', 'Efficient systems to ensure compliance with Canadian law'],
      enforcementClosing: 'Those who are not authorized to remain in Canada will be processed through a system that is:',
      enforcementLabel: 'Enforcement standards',
      enforcementStandards: ['Firm', 'Fair', 'Consistent', 'Lawful'],
      integrityTitle: 'System Integrity and Public Trust',
      integrityCopy: 'A system that is not enforced loses legitimacy.',
      integrityIntro: 'Fairness requires that:',
      integrityPoints: ['Those who follow the process are respected', 'Decisions are upheld', 'Outcomes are carried through'],
      integrityClosing: 'Restoring integrity to the system is essential to maintaining public confidence.',
      contributionTitle: 'Integration and Contribution',
      contributionIntro: 'Newcomers to Canada are expected to:',
      contributionPoints: ['Participate in the workforce', 'Contribute to their communities', 'Integrate into Canadian civic life'],
      contributionClosing: 'This ensures long-term success for both individuals and the country.',
      closingTitle: 'Closing',
      closingLines: ['Canada will not grow beyond its capacity.', 'It will grow with strength, stability, and purpose.'],
      closingCopy: 'Canada remains open. But openness must be structured, sustainable, and aligned with the well-being of all Canadians.',
      back: 'Back to Platform',
    },
    fr: {
      eyebrow: 'Plateforme / Immigration',
      title: 'Stabiliser d’abord. Puis croître.',
      hero: [
        'Le Canada doit harmoniser l’immigration avec sa capacité à soutenir les personnes déjà ici et celles qui arrivent.',
        'L’immigration continuera, mais elle doit être structurée, mesurée et liée à une capacité réelle.',
      ],
      asideEyebrow: 'La norme Civil',
      asideTitle: 'Le Canada demeure ouvert.',
      asideCopy: 'Mais cette ouverture doit être structurée, durable et alignée sur le bien-être de tous les Canadiens.',
      stabilizationTitle: 'Phase de stabilisation temporaire',
      stabilizationCopy: 'Le Canada mettra en œuvre une période de stabilisation où les niveaux d’immigration seront réduits à des niveaux durables.',
      stabilizationPoints: ['Augmenter l’offre de logements', 'Renforcer les soins de santé et les infrastructures', 'Intégrer les nouveaux arrivants déjà au Canada', 'Soutenir la participation au marché du travail'],
      capacityTitle: 'Croissance fondée sur la capacité',
      capacityCopy: 'Les futurs niveaux d’immigration seront déterminés par l’état de préparation du Canada, et non par des cibles arbitraires.',
      capacityIntro: 'Les indicateurs clés comprennent :',
      capacityPoints: ['Disponibilité des logements', 'Conditions d’emploi', 'Croissance salariale', 'Capacité des infrastructures'],
      capacityClosing: 'L’immigration n’augmentera que lorsque ces conditions le permettront.',
      economicTitle: 'Alignement économique',
      economicCopy: 'L’immigration doit soutenir directement les besoins du Canada.',
      economicPoints: ['Répondre à des pénuries de main-d’œuvre vérifiées', 'Soutenir les industries clés', 'Renforcer les économies locales'],
      economicClosing: 'Par l’entremise des Chambres de citoyens, les communautés locales aideront à signaler la demande réelle et le niveau de préparation.',
      enforcementTitle: 'Immigration légale et application des règles',
      enforcementCopy: 'Le Canada est un pays régi par le droit. Un système d’immigration crédible exige que les règles soient clairement définies et appliquées de façon constante.',
      enforcementIntro: 'Cela comprend :',
      enforcementPoints: ['Traitement rapide de toutes les décisions en matière d’immigration', 'Exécution des ordres de renvoi lorsque le statut légal ne s’applique plus', 'Systèmes efficaces pour assurer le respect du droit canadien'],
      enforcementClosing: 'Les personnes qui ne sont pas autorisées à demeurer au Canada seront traitées au moyen d’un système qui est :',
      enforcementLabel: 'Normes d’application',
      enforcementStandards: ['Ferme', 'Juste', 'Constant', 'Légal'],
      integrityTitle: 'Intégrité du système et confiance du public',
      integrityCopy: 'Un système qui n’est pas appliqué perd sa légitimité.',
      integrityIntro: 'L’équité exige que :',
      integrityPoints: ['Ceux qui suivent le processus soient respectés', 'Les décisions soient maintenues', 'Les résultats soient appliqués'],
      integrityClosing: 'Rétablir l’intégrité du système est essentiel pour maintenir la confiance du public.',
      contributionTitle: 'Intégration et contribution',
      contributionIntro: 'Les nouveaux arrivants au Canada doivent :',
      contributionPoints: ['Participer au marché du travail', 'Contribuer à leurs communautés', 'S’intégrer à la vie civique canadienne'],
      contributionClosing: 'Cela assure le succès à long terme des individus et du pays.',
      closingTitle: 'Conclusion',
      closingLines: ['Le Canada ne croîtra pas au-delà de sa capacité.', 'Il croîtra avec force, stabilité et intention.'],
      closingCopy: 'Le Canada demeure ouvert. Mais cette ouverture doit être structurée, durable et alignée sur le bien-être de tous les Canadiens.',
      back: 'Retour à la plateforme',
    },
  })

  return (
    <div className="policy-detail immigration-page">
      <section className="policy-detail__panel immigration-page__hero">
        <div className="technology-ai-page__hero-grid">
          <div>
            <p className="eyebrow">{content.eyebrow}</p>
            <h1 className="policy-detail__title">{content.title}</h1>
            <p className="policy-detail__summary">{content.hero[0]}</p>
            <p className="policy-detail__summary">{content.hero[1]}</p>
          </div>

          <aside className="policy-aside technology-ai-page__aside">
            <p className="policy-aside__eyebrow">{content.asideEyebrow}</p>
            <h2 className="policy-aside__title">{content.asideTitle}</h2>
            <p className="policy-aside__copy">{content.asideCopy}</p>
          </aside>
        </div>
      </section>

      <section className="policy-foundation immigration-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">{content.stabilizationTitle}</h2>
          </div>
          <p className="section-copy">{content.stabilizationCopy}</p>
        </div>
        <div className="policy-grid technology-ai-page__grid technology-ai-page__grid--four">
          {content.stabilizationPoints.map((point) => (
            <article key={point} className="policy-card technology-ai-page__card technology-ai-page__card--tight">
              <p className="technology-ai-page__card-line">{point}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="policy-foundation immigration-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">{content.capacityTitle}</h2>
          </div>
          <p className="section-copy">{content.capacityCopy}</p>
        </div>
        <div className="technology-ai-page__panel">
          <p className="policy-detail__summary">{content.capacityIntro}</p>
          <div className="founding-principles-page__list technology-ai-page__list">
            {content.capacityPoints.map((point) => (
              <p key={point} className="policy-card__description founding-principles-page__item">
                {point}
              </p>
            ))}
          </div>
          <p className="policy-detail__summary immigration-page__followup-copy">{content.capacityClosing}</p>
        </div>
      </section>

      <section className="policy-foundation immigration-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">{content.economicTitle}</h2>
          </div>
          <p className="section-copy">{content.economicCopy}</p>
        </div>
        <div className="technology-ai-page__split-grid">
          <div className="technology-ai-page__panel">
            <div className="founding-principles-page__list technology-ai-page__list">
              {content.economicPoints.map((point) => (
                <p key={point} className="policy-card__description founding-principles-page__item">
                  {point}
                </p>
              ))}
            </div>
          </div>
          <div className="technology-ai-page__panel technology-ai-page__panel--accent">
            <p className="policy-detail__summary">{content.economicClosing}</p>
          </div>
        </div>
      </section>

      <section className="policy-foundation immigration-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">{content.enforcementTitle}</h2>
          </div>
          <p className="section-copy">{content.enforcementCopy}</p>
        </div>
        <div className="technology-ai-page__split-grid">
          <div className="technology-ai-page__panel">
            <p className="policy-detail__summary">{content.enforcementIntro}</p>
            <div className="founding-principles-page__list technology-ai-page__list">
              {content.enforcementPoints.map((point) => (
                <p key={point} className="policy-card__description founding-principles-page__item">
                  {point}
                </p>
              ))}
            </div>
          </div>
          <div className="technology-ai-page__panel technology-ai-page__panel--accent">
            <p className="policy-detail__summary">{content.enforcementClosing}</p>
            <div className="policy-aside__list immigration-page__inline-tags" aria-label={content.enforcementLabel}>
              {content.enforcementStandards.map((point) => (
                <span key={point}>{point}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="policy-foundation immigration-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">{content.integrityTitle}</h2>
          </div>
          <p className="section-copy">{content.integrityCopy}</p>
        </div>
        <div className="technology-ai-page__panel">
          <p className="policy-detail__summary">{content.integrityIntro}</p>
          <div className="founding-principles-page__list technology-ai-page__list">
            {content.integrityPoints.map((point) => (
              <p key={point} className="policy-card__description founding-principles-page__item">
                {point}
              </p>
            ))}
          </div>
          <p className="policy-detail__summary immigration-page__followup-copy">{content.integrityClosing}</p>
        </div>
      </section>

      <section className="policy-foundation immigration-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">{content.contributionTitle}</h2>
          </div>
        </div>
        <div className="technology-ai-page__panel">
          <p className="policy-detail__summary">{content.contributionIntro}</p>
          <div className="founding-principles-page__list technology-ai-page__list">
            {content.contributionPoints.map((point) => (
              <p key={point} className="policy-card__description founding-principles-page__item">
                {point}
              </p>
            ))}
          </div>
          <p className="policy-detail__summary immigration-page__followup-copy">{content.contributionClosing}</p>
        </div>
      </section>

      <section className="policy-foundation immigration-page__section immigration-page__closing">
        <div className="technology-ai-page__panel immigration-page__full-panel">
          <h2 className="section-title">{content.closingTitle}</h2>
          <p className="policy-detail__summary immigration-page__note-strong">{content.closingLines[0]}</p>
          <p className="policy-detail__summary immigration-page__note-strong">{content.closingLines[1]}</p>
        </div>
        <p className="policy-detail__summary immigration-page__closing-copy">{content.closingCopy}</p>
        <div className="policy-detail__actions">
          <Link to="/platform" className="button button--secondary">
            {content.back}
          </Link>
        </div>
      </section>
    </div>
  )
}