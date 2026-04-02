import { useTranslation } from 'react-i18next'
import { Link, Navigate, useParams } from 'react-router-dom'
import { getEconomicPolicyPoints } from '../data/economicPolicy'
import { localizeByLanguage } from '../lib/locale'

export default function EconomicPolicyDetailPage() {
  const { i18n } = useTranslation()
  const { slug } = useParams()
  const economicPolicyPoints = getEconomicPolicyPoints(i18n)
  const point = economicPolicyPoints.find((entry) => entry.slug === slug)
  const content = localizeByLanguage(i18n, {
    en: {
      eyebrow: 'CCC Economic Foundation',
      dek: 'No tax on the first meaningful layer of income',
      hero: [
        'Work should mean progress.',
        'Right now, too many Canadians put in the effort, take on responsibility, and still feel like they\'re standing still. Before a paycheque even reaches their hands, a portion is already gone.',
      ],
      statement: 'This is backwards.',
      asideEyebrow: 'Civil Position',
      asideTitle: 'If someone is working, they should be moving forward.',
      asideCopy: 'Not catching up. Not falling behind.',
      asideStatement: 'Moving forward.',
      principleTitle: 'The Principle',
      principleBody: [
        'The first layer of income, the income people rely on to live, build, and stabilize their lives, should not be taxed.',
        'This is not about eliminating taxes. It is about protecting the foundation of working life.',
      ],
      meaningTitle: 'What This Means',
      meaning: [
        'Your first earnings go to you, not the system.',
        'Work immediately translates into real progress.',
        'Canadians can build stability before being burdened.',
        'Entry into the workforce becomes worth it again.',
      ],
      whyTitle: 'Why It Matters',
      whyCopy: 'When people feel like their work doesn\'t move them forward, motivation collapses.',
      affectsTitle: 'This affects:',
      affects: [
        'Young workers entering the workforce',
        'Families trying to get ahead',
        'Individuals rebuilding their lives',
        'Entrepreneurs in early stages',
      ],
      affectsClosing: 'If the system takes too early, people stop believing in it.',
      shiftTitle: 'The Shift',
      from: 'From',
      fromLine: 'Work → Tax → Struggle',
      to: 'To',
      toLine: 'Work → Stability → Growth',
      outcomeTitle: 'The Outcome',
      outcomeLabel: 'Policy outcomes',
      outcomes: [
        'Stronger participation in the workforce',
        'Increased economic activity',
        'More people moving from survival to progress',
        'A system that rewards effort from day one',
      ],
      closingOne: 'Work must be the starting point of opportunity, not the starting point of loss.',
      closingTwo: 'That is where we begin.',
      back: 'Back to Economic Policy',
      comingSoon: 'Coming Soon',
    },
    fr: {
      eyebrow: 'Fondation économique du CCC',
      dek: 'Aucun impôt sur la première tranche de revenu réellement utile',
      hero: [
        'Le travail doit signifier un progrès.',
        'En ce moment, trop de Canadiens font l’effort, assument leurs responsabilités et ont quand même l’impression de faire du surplace. Avant même qu’un chèque de paie n’arrive entre leurs mains, une part a déjà disparu.',
      ],
      statement: 'C’est à l’envers.',
      asideEyebrow: 'Position Civil',
      asideTitle: 'Si quelqu’un travaille, il devrait avancer.',
      asideCopy: 'Pas simplement rattraper. Pas reculer.',
      asideStatement: 'Avancer.',
      principleTitle: 'Le principe',
      principleBody: [
        'La première tranche de revenu, celle dont les gens ont besoin pour vivre, bâtir et stabiliser leur vie, ne devrait pas être imposée.',
        'Il ne s’agit pas d’éliminer tous les impôts. Il s’agit de protéger la base de la vie au travail.',
      ],
      meaningTitle: 'Ce que cela signifie',
      meaning: [
        'Vos premiers revenus vous reviennent, pas au système.',
        'Le travail se traduit immédiatement par un progrès réel.',
        'Les Canadiens peuvent bâtir une stabilité avant d’être alourdis.',
        'L’entrée sur le marché du travail redevient valable.',
      ],
      whyTitle: 'Pourquoi cela compte',
      whyCopy: 'Quand les gens ont l’impression que leur travail ne les fait pas avancer, la motivation s’effondre.',
      affectsTitle: 'Cela touche :',
      affects: [
        'Les jeunes travailleurs qui entrent sur le marché du travail',
        'Les familles qui essaient d’avancer',
        'Les personnes qui rebâtissent leur vie',
        'Les entrepreneurs en début de parcours',
      ],
      affectsClosing: 'Si le système prend trop tôt, les gens cessent d’y croire.',
      shiftTitle: 'Le virage',
      from: 'De',
      fromLine: 'Travail → Impôt → Lutte',
      to: 'Vers',
      toLine: 'Travail → Stabilité → Croissance',
      outcomeTitle: 'Le résultat',
      outcomeLabel: 'Résultats de la politique',
      outcomes: [
        'Une participation plus forte à la main-d’œuvre',
        'Une activité économique accrue',
        'Davantage de gens passent de la survie au progrès',
        'Un système qui récompense l’effort dès le premier jour',
      ],
      closingOne: 'Le travail doit être le point de départ de l’occasion, non le point de départ de la perte.',
      closingTwo: 'C’est là que nous commençons.',
      back: 'Retour à la politique économique',
      comingSoon: 'Bientôt disponible',
    },
  })

  if (!point) {
    return <Navigate to="/platform/economic-foundation" replace />
  }

  if (slug === 'make-work-worth-it-again') {
    return (
      <div className="policy-detail economic-detail">
        <section className="policy-detail__panel economic-detail__hero">
          <div className="economic-detail__hero-grid">
            <div>
              <p className="eyebrow">{content.eyebrow}</p>
              <p className="policy-detail__number">{point.number}</p>
              <h1 className="policy-detail__title">{point.title}</h1>
              <p className="economic-detail__dek">{content.dek}</p>
              <p className="policy-detail__summary">{content.hero[0]}</p>
              <p className="policy-detail__summary">{content.hero[1]}</p>
              <p className="economic-detail__statement">{content.statement}</p>
            </div>

            <aside className="policy-aside economic-detail__aside">
              <p className="policy-aside__eyebrow">{content.asideEyebrow}</p>
              <h2 className="policy-aside__title">{content.asideTitle}</h2>
              <p className="policy-aside__copy">{content.asideCopy}</p>
              <p className="economic-detail__statement economic-detail__statement--aside">{content.asideStatement}</p>
            </aside>
          </div>
        </section>

        <section className="policy-foundation economic-detail__section">
          <div className="policy-foundation__heading">
            <div>
              <h2 className="section-title">{content.principleTitle}</h2>
            </div>
          </div>
          <div className="economic-detail__principle-panel">
            <p className="policy-detail__summary">{content.principleBody[0]}</p>
            <p className="policy-detail__summary">{content.principleBody[1]}</p>
          </div>
        </section>

        <section className="policy-foundation economic-detail__section">
          <div className="policy-foundation__heading">
            <div>
              <h2 className="section-title">{content.meaningTitle}</h2>
            </div>
          </div>
          <div className="policy-grid economic-detail__grid">
            {content.meaning.map((item, index) => (
              <article key={item} className="policy-card economic-detail__card">
                <p className="policy-card__number">{index + 1}</p>
                <p className="policy-card__description economic-detail__card-copy">{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="policy-foundation economic-detail__section">
          <div className="policy-foundation__heading">
            <div>
              <h2 className="section-title">{content.whyTitle}</h2>
            </div>
            <p className="section-copy">{content.whyCopy}</p>
          </div>
          <div className="economic-detail__two-column">
            <div className="economic-detail__list-panel">
              <h3 className="economic-detail__subhead">{content.affectsTitle}</h3>
              <div className="founding-principles-page__list">
                {content.affects.map((item) => (
                  <p key={item} className="policy-card__description founding-principles-page__item">
                    {item}
                  </p>
                ))}
              </div>
            </div>
            <div className="economic-detail__list-panel economic-detail__list-panel--accent">
              <p className="policy-detail__summary">{content.affectsClosing}</p>
            </div>
          </div>
        </section>

        <section className="policy-foundation economic-detail__section">
          <div className="policy-foundation__heading">
            <div>
              <h2 className="section-title">{content.shiftTitle}</h2>
            </div>
          </div>
          <div className="economic-detail__shift-grid">
            <article className="economic-detail__shift-card">
              <p className="economic-detail__shift-label">{content.from}</p>
              <p className="economic-detail__shift-line">{content.fromLine}</p>
            </article>
            <article className="economic-detail__shift-card economic-detail__shift-card--to">
              <p className="economic-detail__shift-label">{content.to}</p>
              <p className="economic-detail__shift-line">{content.toLine}</p>
            </article>
          </div>
        </section>

        <section className="policy-foundation economic-detail__section">
          <div className="policy-foundation__heading">
            <div>
              <h2 className="section-title">{content.outcomeTitle}</h2>
            </div>
          </div>
          <div className="policy-aside__list economic-detail__outcomes" aria-label={content.outcomeLabel}>
            {content.outcomes.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>

        <section className="policy-foundation economic-detail__section economic-detail__closing">
          <p className="economic-detail__closing-line">{content.closingOne}</p>
          <p className="economic-detail__closing-line economic-detail__closing-line--small">{content.closingTwo}</p>
          <div className="policy-detail__actions">
            <Link to="/platform/economic-foundation" className="button button--secondary">
              {content.back}
            </Link>
          </div>
        </section>
      </div>
    )
  }

  return (
    <section className="policy-detail">
      <div className="policy-detail__panel">
        <p className="policy-detail__number">{point.number}</p>
        <h1 className="policy-detail__title">{point.title}</h1>
        <p className="policy-detail__summary">{point.description}</p>
        <p className="policy-detail__coming-soon">{content.comingSoon}</p>
        <div className="policy-detail__actions">
          <Link to="/platform/economic-foundation" className="button button--secondary">
            {content.back}
          </Link>
        </div>
      </div>
    </section>
  )
}