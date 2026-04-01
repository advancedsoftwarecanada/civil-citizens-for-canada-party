import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { localizeByLanguage } from '../lib/locale'

export default function TechnologyAIPage() {
  const { i18n } = useTranslation()
  const content = localizeByLanguage(i18n, {
    en: {
      eyebrow: 'Platform / Technology & Artificial Intelligence',
      title: 'AI is Coming. Canada Must Be Ready.',
      hero: [
        'Artificial Intelligence is not a future risk. It is a present reality.',
        'Across Canada, jobs are already being reshaped, automated, or redefined. Up to 60% of Canadian workers may be affected by AI-driven changes in their roles.',
        'This transformation will create massive wealth. But without structure, it will also create instability.',
      ],
      asideEyebrow: 'The Civil Position',
      asideTitle:
        'If a company replaces human labour with AI or robotics, a portion of the value created must return to the people and communities affected.',
      asideCopy: 'Not as charity. As structure.',
      problemTitle: 'The Problem',
      problemCopy: 'Today, the burden of this transition falls on the individual. This is unacceptable.',
      problemPoints: ['Costs go down', 'Profits go up', 'Workers are displaced', 'Communities lose stability'],
      contributionTitle: 'Community Contribution Model',
      contributionIntro: 'Companies operating in Canada that automate or eliminate jobs must:',
      contributionPoints: [
        'Contribute a fair portion of increased profits',
        'Direct those contributions to local Chambers of Citizens',
        'Support workforce transition, retraining, and local economic development',
      ],
      ensuresTitle: 'This ensures:',
      ensuresPoints: [
        'Communities remain stable',
        'Workers are supported through transition',
        'Economic gains are shared, not extracted',
      ],
      whyTitle: 'Why This Matters',
      whyCopy: 'AI will not eliminate all jobs. But it will change who benefits from work.',
      whyPoints: [
        'Automation can increase inequality',
        'Entry-level and routine jobs are most at risk',
        'Labour protections are already lagging behind AI adoption',
      ],
      shiftTitle: 'The Shift',
      shiftFrom: 'From',
      shiftFromLine: 'Automation benefits corporations only',
      shiftTo: 'To',
      shiftToLine: 'Automation strengthens both companies and communities',
      standardTitle: 'The Civil Standard',
      standardPoints: [
        'AI must enhance society — not destabilize it',
        'Innovation is encouraged',
        'But responsibility is required',
      ],
      outcomeTitle: 'The Outcome',
      outcomePoints: [
        'Stronger local economies',
        'Protected workers during transition',
        'Continued innovation without social collapse',
        'A system where technology serves people',
      ],
      closingOne: 'We are not here to stop the future.',
      closingTwo: 'We are here to structure it properly.',
      closingThree: 'If machines create the wealth, Canadians must share in it.',
      back: 'Back to Platform',
    },
    fr: {
      eyebrow: 'Plateforme / Technologie et intelligence artificielle',
      title: 'L’IA arrive. Le Canada doit être prêt.',
      hero: [
        'L’intelligence artificielle n’est pas un risque futur. C’est une réalité actuelle.',
        'Partout au Canada, les emplois sont déjà redéfinis, automatisés ou transformés. Jusqu’à 60 % des travailleurs canadiens pourraient être touchés par les changements liés à l’IA dans leurs fonctions.',
        'Cette transformation créera une immense richesse. Mais sans structure, elle créera aussi de l’instabilité.',
      ],
      asideEyebrow: 'La position Civil',
      asideTitle:
        'Si une entreprise remplace du travail humain par l’IA ou la robotique, une partie de la valeur créée doit revenir aux personnes et aux communautés touchées.',
      asideCopy: 'Pas comme charité. Comme structure.',
      problemTitle: 'Le problème',
      problemCopy: 'Aujourd’hui, le poids de cette transition retombe sur l’individu. C’est inacceptable.',
      problemPoints: ['Les coûts baissent', 'Les profits montent', 'Les travailleurs sont déplacés', 'Les communautés perdent leur stabilité'],
      contributionTitle: 'Modèle de contribution communautaire',
      contributionIntro: 'Les entreprises opérant au Canada qui automatisent ou éliminent des emplois doivent :',
      contributionPoints: [
        'Verser une part équitable de l’augmentation des profits',
        'Diriger ces contributions vers les Chambres de citoyens locales',
        'Soutenir la transition de la main-d’œuvre, le recyclage professionnel et le développement économique local',
      ],
      ensuresTitle: 'Cela garantit :',
      ensuresPoints: [
        'La stabilité des communautés',
        'Le soutien des travailleurs durant la transition',
        'Le partage des gains économiques plutôt que leur extraction',
      ],
      whyTitle: 'Pourquoi cela compte',
      whyCopy: 'L’IA n’éliminera pas tous les emplois. Mais elle changera qui profite du travail.',
      whyPoints: [
        'L’automatisation peut accroître les inégalités',
        'Les emplois d’entrée et routiniers sont les plus à risque',
        'Les protections du travail accusent déjà un retard par rapport à l’adoption de l’IA',
      ],
      shiftTitle: 'Le virage',
      shiftFrom: 'De',
      shiftFromLine: 'L’automatisation profite seulement aux entreprises',
      shiftTo: 'Vers',
      shiftToLine: 'L’automatisation renforce à la fois les entreprises et les communautés',
      standardTitle: 'La norme Civil',
      standardPoints: [
        'L’IA doit améliorer la société, non la déstabiliser',
        'L’innovation est encouragée',
        'Mais la responsabilité est obligatoire',
      ],
      outcomeTitle: 'Le résultat',
      outcomePoints: [
        'Des économies locales plus fortes',
        'Des travailleurs protégés pendant la transition',
        'Une innovation continue sans effondrement social',
        'Un système où la technologie sert les gens',
      ],
      closingOne: 'Nous ne sommes pas ici pour arrêter l’avenir.',
      closingTwo: 'Nous sommes ici pour le structurer correctement.',
      closingThree: 'Si les machines créent la richesse, les Canadiens doivent en bénéficier.',
      back: 'Retour à la plateforme',
    },
  })

  return (
    <div className="policy-detail technology-ai-page">
      <section className="policy-detail__panel technology-ai-page__hero">
        <div className="technology-ai-page__hero-grid">
          <div>
            <p className="eyebrow">{content.eyebrow}</p>
            <h1 className="policy-detail__title">{content.title}</h1>
            {content.hero.map((paragraph) => (
              <p key={paragraph} className="policy-detail__summary">{paragraph}</p>
            ))}
          </div>

          <aside className="policy-aside technology-ai-page__aside">
            <p className="policy-aside__eyebrow">{content.asideEyebrow}</p>
            <h2 className="policy-aside__title">{content.asideTitle}</h2>
            <p className="policy-aside__copy">{content.asideCopy}</p>
          </aside>
        </div>
      </section>

      <section className="policy-foundation technology-ai-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">{content.problemTitle}</h2>
          </div>
          <p className="section-copy">{content.problemCopy}</p>
        </div>
        <div className="policy-grid technology-ai-page__grid technology-ai-page__grid--four">
          {content.problemPoints.map((point) => (
            <article key={point} className="policy-card technology-ai-page__card technology-ai-page__card--tight">
              <p className="technology-ai-page__card-line">{point}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="policy-foundation technology-ai-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">{content.contributionTitle}</h2>
          </div>
        </div>
        <div className="technology-ai-page__split-grid">
          <div className="technology-ai-page__panel">
            <p className="policy-detail__summary">{content.contributionIntro}</p>
            <div className="founding-principles-page__list technology-ai-page__list">
              {content.contributionPoints.map((point) => (
                <p key={point} className="policy-card__description founding-principles-page__item">
                  {point}
                </p>
              ))}
            </div>
          </div>

          <div className="technology-ai-page__panel technology-ai-page__panel--accent">
            <h3 className="technology-ai-page__subhead">{content.ensuresTitle}</h3>
            <div className="founding-principles-page__list technology-ai-page__list">
              {content.ensuresPoints.map((point) => (
                <p key={point} className="policy-card__description founding-principles-page__item">
                  {point}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="policy-foundation technology-ai-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">{content.whyTitle}</h2>
          </div>
          <p className="section-copy">{content.whyCopy}</p>
        </div>
        <div className="policy-grid technology-ai-page__grid">
          {content.whyPoints.map((point, index) => (
            <article key={point} className="policy-card technology-ai-page__card">
              <p className="policy-card__number">{index + 1}</p>
              <p className="policy-card__description technology-ai-page__card-copy">{point}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="policy-foundation technology-ai-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">{content.shiftTitle}</h2>
          </div>
        </div>
        <div className="economic-detail__shift-grid">
          <article className="economic-detail__shift-card">
            <p className="economic-detail__shift-label">{content.shiftFrom}</p>
            <p className="economic-detail__shift-line">{content.shiftFromLine}</p>
          </article>
          <article className="economic-detail__shift-card economic-detail__shift-card--to">
            <p className="economic-detail__shift-label">{content.shiftTo}</p>
            <p className="economic-detail__shift-line">{content.shiftToLine}</p>
          </article>
        </div>
      </section>

      <section className="policy-foundation technology-ai-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">{content.standardTitle}</h2>
          </div>
        </div>
        <div className="policy-aside__list technology-ai-page__outcomes" aria-label="Civil standard">
          {content.standardPoints.map((point) => (
            <span key={point}>{point}</span>
          ))}
        </div>
      </section>

      <section className="policy-foundation technology-ai-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">{content.outcomeTitle}</h2>
          </div>
        </div>
        <div className="policy-grid technology-ai-page__grid">
          {content.outcomePoints.map((point, index) => (
            <article key={point} className="policy-card technology-ai-page__card">
              <p className="policy-card__number">{index + 1}</p>
              <p className="policy-card__description technology-ai-page__card-copy">{point}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="policy-foundation technology-ai-page__section technology-ai-page__closing">
        <p className="economic-detail__closing-line">{content.closingOne}</p>
        <p className="economic-detail__closing-line economic-detail__closing-line--small">
          {content.closingTwo}
        </p>
        <p className="technology-ai-page__one-line">{content.closingThree}</p>
        <div className="policy-detail__actions">
          <Link to="/platform" className="button button--secondary">
            {content.back}
          </Link>
        </div>
      </section>
    </div>
  )
}