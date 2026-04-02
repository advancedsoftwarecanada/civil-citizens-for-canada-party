import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { localizeByLanguage } from '../lib/locale'

export default function AgricultureFoodPage() {
  const { i18n } = useTranslation()
  const content = localizeByLanguage(i18n, {
    en: {
      eyebrow: 'Platform / Agriculture & Food',
      title: 'Food is National Infrastructure',
      hero: [
        'Food production is not just an industry. It is the foundation of national stability, health, and independence.',
        'Canada must take full control of how its food is grown, who grows it, and who benefits from it.',
      ],
      asideEyebrow: 'The Civil Standard',
      asideTitle: 'Canada should produce the most nutritious food, at scale, for its own people first.',
      workforceTitle: 'Canadian Workforce First',
      workforceCopy: 'Canada will transition away from reliance on temporary foreign labour in agriculture.',
      workforceIntro: 'Food production must directly benefit Canadian citizens by:',
      workforcePoints: ['Creating stable, well-compensated agricultural careers', 'Building long-term workforce pathways in farming and food systems', 'Supporting training, apprenticeship, and entry into agricultural work'],
      workforceClosing: 'Agriculture must become a respected, scalable, and national career path.',
      labourTitle: 'Modernizing Agricultural Labour',
      technologyPoints: ['Invest in workforce development for agriculture', 'Improve working conditions and compensation', 'Introduce technology to increase productivity and reduce strain'],
      toolsIntro: 'Food production will be built on a combination of human labour and advanced tools, including:',
      advancedToolsPoints: ['Drone-based crop monitoring', 'Precision agriculture systems', 'Emerging technologies such as automated and laser-assisted weeding'],
      cleanTitle: 'A Transition to Clean, Organic Production',
      cleanPoints: ['A phased reduction in synthetic pesticides, herbicides, and fungicides', 'Adoption of regenerative and organic farming practices', 'Investment in natural soil health and biodiversity'],
      foodGoalsIntro: 'The goal is a system that produces food that is:',
      foodGoalsLabel: 'Food goals',
      foodGoals: ['Nutrient-dense', 'Clean', 'Sustainable over generations'],
      healthCopy: 'When Canadians eat cleaner, more natural, and less chemically burdened food, the long-term burden of chronic disease can fall. Over time, that means fewer diet-linked health crises, lower strain on emergency rooms, and lower medical costs associated with conditions such as type 2 diabetes, heart disease, stroke, and some cancers.',
      weedTitle: 'Weed and Crop Management Innovation',
      weedPoints: ['Mechanical and manual weed control', 'Precision-targeted farming techniques', 'Technology-assisted crop management'],
      weedOutcomeIntro: 'This creates:',
      weedOutcomePoints: ['More jobs in agriculture', 'Healthier ecosystems', 'Reduced long-term environmental damage'],
      fourSeasonTitle: 'Four-Season Growing Capacity',
      fourSeasonPoints: ['Expansion of greenhouse and controlled-environment agriculture', 'Emphasis on soil-based growing systems', 'Development of scalable, climate-resilient infrastructure'],
      fourSeasonIntro: 'Four-season production ensures:',
      fourSeasonOutcomePoints: ['Stable domestic supply', 'Reduced reliance on imports', 'Greater national food security'],
      domesticTitle: 'Domestic First, Then Export',
      domesticPoints: ['Ensuring abundance and stability within Canada', 'Building a surplus only after domestic needs are met', 'Exporting high-quality Canadian food from a position of strength'],
      closingTitle: 'Closing',
      closingLead: 'A strong nation feeds itself.',
      closingIntro: 'Canada will build a food system that is:',
      closingLabel: 'Closing agriculture outcomes',
      closingPoints: ['Independent', 'Sustainable', 'Designed for the health of its people'],
      back: 'Back to Platform',
    },
    fr: {
      eyebrow: 'Plateforme / Agriculture et alimentation',
      title: 'L’alimentation est une infrastructure nationale',
      hero: [
        'La production alimentaire n’est pas seulement une industrie. C’est le fondement de la stabilité nationale, de la santé et de l’indépendance.',
        'Le Canada doit reprendre pleinement le contrôle de la façon dont sa nourriture est produite, de ceux qui la produisent et de ceux qui en bénéficient.',
      ],
      asideEyebrow: 'La norme Civil',
      asideTitle: 'Le Canada devrait produire les aliments les plus nutritifs, à grande échelle, pour sa propre population d’abord.',
      workforceTitle: 'Main-d’œuvre canadienne d’abord',
      workforceCopy: 'Le Canada se détournera de la dépendance envers la main-d’œuvre étrangère temporaire en agriculture.',
      workforceIntro: 'La production alimentaire doit profiter directement aux citoyens canadiens en :',
      workforcePoints: ['Créant des carrières agricoles stables et bien rémunérées', 'Bâtissant des parcours durables de main-d’œuvre dans l’agriculture et les systèmes alimentaires', 'Soutenant la formation, l’apprentissage et l’entrée dans le travail agricole'],
      workforceClosing: 'L’agriculture doit devenir un parcours de carrière respecté, évolutif et national.',
      labourTitle: 'Moderniser le travail agricole',
      technologyPoints: ['Investir dans le développement de la main-d’œuvre agricole', 'Améliorer les conditions de travail et la rémunération', 'Introduire des technologies pour accroître la productivité et réduire la pénibilité'],
      toolsIntro: 'La production alimentaire reposera sur une combinaison de travail humain et d’outils avancés, notamment :',
      advancedToolsPoints: ['Surveillance des cultures par drone', 'Systèmes d’agriculture de précision', 'Technologies émergentes comme le désherbage automatisé et assisté par laser'],
      cleanTitle: 'Une transition vers une production propre et biologique',
      cleanPoints: ['Une réduction progressive des pesticides, herbicides et fongicides synthétiques', 'L’adoption de pratiques agricoles régénératives et biologiques', 'L’investissement dans la santé naturelle des sols et la biodiversité'],
      foodGoalsIntro: 'L’objectif est un système qui produit des aliments :',
      foodGoalsLabel: 'Objectifs alimentaires',
      foodGoals: ['Riches en nutriments', 'Propres', 'Durables sur plusieurs générations'],
      healthCopy: 'Lorsque les Canadiens mangent des aliments plus propres, plus naturels et moins chargés en produits chimiques, le fardeau à long terme des maladies chroniques peut diminuer. Avec le temps, cela signifie moins de crises de santé liées à l’alimentation, moins de pression sur les urgences et moins de coûts médicaux associés à des conditions comme le diabète de type 2, les maladies cardiaques, les AVC et certains cancers.',
      weedTitle: 'Innovation en gestion des mauvaises herbes et des cultures',
      weedPoints: ['Désherbage mécanique et manuel', 'Techniques agricoles de précision ciblée', 'Gestion des cultures assistée par la technologie'],
      weedOutcomeIntro: 'Cela crée :',
      weedOutcomePoints: ['Plus d’emplois en agriculture', 'Des écosystèmes plus sains', 'Moins de dommages environnementaux à long terme'],
      fourSeasonTitle: 'Capacité de production quatre saisons',
      fourSeasonPoints: ['Expansion des serres et de l’agriculture en environnement contrôlé', 'Accent sur les systèmes de culture en sol', 'Développement d’infrastructures évolutives et résilientes au climat'],
      fourSeasonIntro: 'La production quatre saisons assure :',
      fourSeasonOutcomePoints: ['Un approvisionnement intérieur stable', 'Une dépendance réduite aux importations', 'Une sécurité alimentaire nationale renforcée'],
      domesticTitle: 'Le marché intérieur d’abord, puis l’exportation',
      domesticPoints: ['Assurer l’abondance et la stabilité au Canada', 'Créer un surplus seulement après avoir répondu aux besoins nationaux', 'Exporter des aliments canadiens de haute qualité à partir d’une position de force'],
      closingTitle: 'Conclusion',
      closingLead: 'Une nation forte se nourrit elle-même.',
      closingIntro: 'Le Canada bâtira un système alimentaire qui est :',
      closingLabel: 'Résultats finaux en agriculture',
      closingPoints: ['Indépendant', 'Durable', 'Conçu pour la santé de sa population'],
      back: 'Retour à la plateforme',
    },
  })

  return (
    <div className="policy-detail agriculture-page">
      <section className="policy-detail__panel agriculture-page__hero">
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
          </aside>
        </div>
      </section>

      <section className="policy-foundation agriculture-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">{content.workforceTitle}</h2>
          </div>
          <p className="section-copy">{content.workforceCopy}</p>
        </div>
        <div className="technology-ai-page__panel">
          <p className="policy-detail__summary">{content.workforceIntro}</p>
          <div className="founding-principles-page__list technology-ai-page__list">
            {content.workforcePoints.map((point) => (
              <p key={point} className="policy-card__description founding-principles-page__item">{point}</p>
            ))}
          </div>
          <p className="policy-detail__summary agriculture-page__followup-copy">{content.workforceClosing}</p>
        </div>
      </section>

      <section className="policy-foundation agriculture-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">{content.labourTitle}</h2>
          </div>
        </div>
        <div className="technology-ai-page__split-grid">
          <div className="technology-ai-page__panel">
            <div className="founding-principles-page__list technology-ai-page__list">
              {content.technologyPoints.map((point) => (
                <p key={point} className="policy-card__description founding-principles-page__item">{point}</p>
              ))}
            </div>
          </div>
          <div className="technology-ai-page__panel technology-ai-page__panel--accent">
            <p className="policy-detail__summary">{content.toolsIntro}</p>
            <div className="founding-principles-page__list technology-ai-page__list">
              {content.advancedToolsPoints.map((point) => (
                <p key={point} className="policy-card__description founding-principles-page__item">{point}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="policy-foundation agriculture-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">{content.cleanTitle}</h2>
          </div>
        </div>
        <div className="technology-ai-page__split-grid">
          <div className="technology-ai-page__panel">
            <div className="founding-principles-page__list technology-ai-page__list">
              {content.cleanPoints.map((point) => (
                <p key={point} className="policy-card__description founding-principles-page__item">{point}</p>
              ))}
            </div>
          </div>
          <div className="technology-ai-page__panel technology-ai-page__panel--accent">
            <p className="policy-detail__summary">{content.foodGoalsIntro}</p>
            <div className="policy-aside__list technology-ai-page__outcomes" aria-label={content.foodGoalsLabel}>
              {content.foodGoals.map((point) => (
                <span key={point}>{point}</span>
              ))}
            </div>
            <p className="policy-detail__summary agriculture-page__health-copy">{content.healthCopy}</p>
          </div>
        </div>
      </section>

      <section className="policy-foundation agriculture-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">{content.weedTitle}</h2>
          </div>
        </div>
        <div className="technology-ai-page__split-grid">
          <div className="technology-ai-page__panel">
            <div className="founding-principles-page__list technology-ai-page__list">
              {content.weedPoints.map((point) => (
                <p key={point} className="policy-card__description founding-principles-page__item">{point}</p>
              ))}
            </div>
          </div>
          <div className="technology-ai-page__panel technology-ai-page__panel--accent">
            <p className="policy-detail__summary">{content.weedOutcomeIntro}</p>
            <div className="founding-principles-page__list technology-ai-page__list">
              {content.weedOutcomePoints.map((point) => (
                <p key={point} className="policy-card__description founding-principles-page__item">{point}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="policy-foundation agriculture-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">{content.fourSeasonTitle}</h2>
          </div>
        </div>
        <div className="technology-ai-page__split-grid">
          <div className="technology-ai-page__panel">
            <div className="founding-principles-page__list technology-ai-page__list">
              {content.fourSeasonPoints.map((point) => (
                <p key={point} className="policy-card__description founding-principles-page__item">{point}</p>
              ))}
            </div>
          </div>
          <div className="technology-ai-page__panel technology-ai-page__panel--accent">
            <p className="policy-detail__summary">{content.fourSeasonIntro}</p>
            <div className="founding-principles-page__list technology-ai-page__list">
              {content.fourSeasonOutcomePoints.map((point) => (
                <p key={point} className="policy-card__description founding-principles-page__item">{point}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="policy-foundation agriculture-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">{content.domesticTitle}</h2>
          </div>
        </div>
        <div className="technology-ai-page__panel">
          <div className="founding-principles-page__list technology-ai-page__list">
            {content.domesticPoints.map((point) => (
              <p key={point} className="policy-card__description founding-principles-page__item">{point}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="policy-foundation agriculture-page__section agriculture-page__closing">
        <div className="technology-ai-page__panel agriculture-page__full-panel">
          <h2 className="section-title">{content.closingTitle}</h2>
          <p className="policy-detail__summary agriculture-page__note-strong">{content.closingLead}</p>
          <p className="policy-detail__summary">{content.closingIntro}</p>
          <div className="policy-aside__list technology-ai-page__outcomes" aria-label={content.closingLabel}>
            {content.closingPoints.map((point) => (
              <span key={point}>{point}</span>
            ))}
          </div>
        </div>
        <div className="policy-detail__actions">
          <Link to="/platform" className="button button--secondary">
            {content.back}
          </Link>
        </div>
      </section>
    </div>
  )
}