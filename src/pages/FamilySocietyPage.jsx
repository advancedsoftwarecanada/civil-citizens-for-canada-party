import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { localizeByLanguage } from '../lib/locale'

export default function FamilySocietyPage() {
  const { i18n } = useTranslation()
  const content = localizeByLanguage(i18n, {
    en: {
      eyebrow: 'Platform / Family & Society',
      title: 'A Nation That Works for Its People',
      hero: [
        'A strong society is built on stability.',
        'Today, too many Canadians are locked out of that foundation.',
        'Civil will restore it.',
      ],
      asideEyebrow: 'The Foundation',
      asideTitle: 'A functioning country makes ordinary life possible.',
      asideLabel: 'Family foundation needs',
      asidePoints: ['A place to live', 'The ability to raise a family', 'Safe communities', 'Real opportunity to move forward'],
      housingTitle: 'Housing Is National Infrastructure',
      housingCopy: 'Housing is not just a market. It is essential infrastructure, as critical as roads, energy, and food.',
      housingClosing: 'Canada will treat housing as a national priority and rebuild the system to ensure supply, affordability, and access.',
      firstTitle: 'Housing First - For Canadians',
      firstCopy: 'Canadian housing must serve Canadians first.',
      firstIntro: 'This means:',
      firstPoints: [
        'Prioritizing citizens and lawful residents in housing access',
        'Aligning housing capacity with immigration policy',
        'Ensuring demand does not exceed what Canada can support',
      ],
      firstClosing: 'A functioning country ensures its people have a place to live.',
      speculationTitle: 'End Speculative Ownership',
      speculationCopy: 'Homes are for living, not speculation.',
      speculationIntro: 'Canada will:',
      speculationPoints: [
        'Restrict large-scale corporate ownership of single-family homes',
        'Limit practices that treat housing as a purely financial asset',
        'Continue to support builders who create new housing supply',
      ],
      speculationClosingOne: 'Development is necessary.',
      speculationClosingTwo: 'Speculation is not.',
      scaleTitle: 'Build at Scale - Immediately',
      scaleCopy: 'Canada must return to building.',
      scalePoints: [
        'A national housing construction strategy',
        'Scalable and repeatable housing models',
        'Expansion of modular and efficient building methods',
        'Rapid deployment of new housing across the country',
      ],
      scaleClosingOne: 'The goal is simple:',
      scaleClosingTwo: 'Build more homes. Faster.',
      redTapeTitle: 'Cut the Red Tape - Build at Speed',
      redTapeCopy: "Canada's housing delays are driven by system inefficiency.",
      redTapeIntro: 'Civil will implement:',
      redTapePoints: [
        'Standardized building approvals',
        'Pre-approved designs and zoning templates',
        'Digitized permit systems',
        'Strict approval timelines measured in days, not months',
      ],
      redTapeClosingOne: 'For qualified projects:',
      redTapeClosingTwo: 'Permits will be issued within days.',
      resetTitle: 'Temporary Regulatory Reset',
      resetCopy: 'For a defined period, Canada will streamline housing approvals to essential requirements.',
      resetIntro: 'This includes:',
      resetPoints: [
        'Removing redundant and overlapping permits',
        'Prioritizing safety, structure, and speed',
        'Accelerating projects that increase supply immediately',
      ],
      resetClosingOne: 'This is not deregulation.',
      resetClosingTwo: 'It is focused execution.',
      accountabilityTitle: 'Accountability in Building',
      accountabilityCopy: 'Speed will not come at the expense of safety.',
      accountabilityIntro: 'Canada will enforce:',
      accountabilityPoints: [
        'Strict building code compliance',
        'Post-construction inspections',
        'Strong penalties for unsafe or non-compliant builds',
      ],
      accountabilityClosing: 'Builders will move faster and remain accountable.',
      zoningTitle: 'Zoning and Density Reform',
      zoningCopy: 'Canada will unlock its cities.',
      zoningIntro: 'This includes:',
      zoningPoints: [
        'Enabling higher-density housing in urban areas',
        'Reducing restrictions on multi-unit developments',
        'Aligning zoning with real population needs',
      ],
      zoningClosing: 'Communities must be allowed to grow.',
      homelessnessTitle: 'End Chronic Homelessness',
      homelessnessCopy: 'In a functioning society, no citizen should be without shelter.',
      homelessnessIntro: 'Canada will:',
      homelessnessPoints: [
        'Provide pathways to stable housing',
        'Integrate housing with treatment, work, and support systems',
        'Address long-term homelessness through structured intervention',
      ],
      homelessnessClosing: 'This is a baseline standard of a civilized country.',
      familyTitle: 'Families and the Cost of Living',
      familyCopy: 'Canada must become a place where people can build a life again.',
      familyIntro: 'This includes:',
      familyPoints: ['Affordable housing', 'Stable access to food and essentials', 'Real opportunity to raise children'],
      familyClosing: 'Families should not be priced out of their own country.',
      participationTitle: 'Stronger Communities Through Participation',
      participationCopy: 'Through Civil and the Chambers of Citizens:',
      participationPoints: [
        'Local communities will identify housing needs',
        'Coordinate development priorities',
        'Support local solutions',
      ],
      participationClosing: 'Housing will be built based on real demand, not disconnected planning.',
      outcomeTitle: 'The Outcome',
      outcomePoints: ['Increased housing supply', 'Lower cost of living', 'Stronger communities', 'A system that works for citizens'],
      standardTitle: 'The Civil Standard',
      standardCopy: 'A civilized nation ensures its people can live, build, and raise families.',
      closingTitle: 'Closing',
      closingLines: ['Canada will build again.', 'Homes for Canadians.', 'Communities that function.', 'A society that works.'],
      back: 'Back to Platform',
    },
    fr: {
      eyebrow: 'Plateforme / Famille et societe',
      title: 'Une nation qui fonctionne pour sa population',
      hero: [
        'Une societe forte repose sur la stabilite.',
        'Aujourd hui, trop de Canadiens sont exclus de cette base.',
        'Civil la retablira.',
      ],
      asideEyebrow: 'La base',
      asideTitle: 'Un pays fonctionnel rend la vie ordinaire possible.',
      asideLabel: 'Besoins fondamentaux de la famille',
      asidePoints: ['Un endroit ou vivre', 'La capacite de fonder une famille', 'Des communautes securitaires', 'Une vraie possibilite d avancer'],
      housingTitle: 'Le logement est une infrastructure nationale',
      housingCopy: 'Le logement n est pas seulement un marche. C est une infrastructure essentielle, aussi cruciale que les routes, l energie et la nourriture.',
      housingClosing: 'Le Canada traitera le logement comme une priorite nationale et reconstruira le systeme pour assurer l offre, l abordabilite et l acces.',
      firstTitle: 'Le logement d abord - Pour les Canadiens',
      firstCopy: 'Le logement canadien doit d abord servir les Canadiens.',
      firstIntro: 'Cela signifie :',
      firstPoints: [
        'Donner priorite aux citoyens et aux residents legaux dans l acces au logement',
        'Aligner la capacite de logement avec la politique d immigration',
        'Veiller a ce que la demande ne depasse pas ce que le Canada peut soutenir',
      ],
      firstClosing: 'Un pays fonctionnel s assure que sa population a un endroit ou vivre.',
      speculationTitle: 'Mettre fin a la propriete speculative',
      speculationCopy: 'Les maisons servent a vivre, pas a speculer.',
      speculationIntro: 'Le Canada va :',
      speculationPoints: [
        'Restreindre la propriete a grande echelle des maisons unifamiliales par les societes',
        'Limiter les pratiques qui traitent le logement comme un simple actif financier',
        'Continuer de soutenir les constructeurs qui ajoutent une nouvelle offre de logements',
      ],
      speculationClosingOne: 'Le developpement est necessaire.',
      speculationClosingTwo: 'La speculation ne l est pas.',
      scaleTitle: 'Construire a grande echelle - Immediatement',
      scaleCopy: 'Le Canada doit recommencer a construire.',
      scalePoints: [
        'Une strategie nationale de construction de logements',
        'Des modeles de logement evolutifs et repetables',
        'L expansion des methodes de construction modulaires et efficaces',
        'Le deploiement rapide de nouveaux logements partout au pays',
      ],
      scaleClosingOne: 'L objectif est simple :',
      scaleClosingTwo: 'Construire plus de logements. Plus vite.',
      redTapeTitle: 'Couper la paperasse - Construire rapidement',
      redTapeCopy: 'Les retards en logement au Canada sont causes par l inefficacite du systeme.',
      redTapeIntro: 'Civil mettra en oeuvre :',
      redTapePoints: [
        'Des approbations de construction standardisees',
        'Des modeles preapprouves et des gabarits de zonage',
        'Des systemes de permis numerises',
        'Des delais stricts d approbation mesures en jours, pas en mois',
      ],
      redTapeClosingOne: 'Pour les projets admissibles :',
      redTapeClosingTwo: 'Les permis seront delivres en quelques jours.',
      resetTitle: 'Reinitialisation reglementaire temporaire',
      resetCopy: 'Pendant une periode definie, le Canada simplifiera les approbations de logement aux exigences essentielles.',
      resetIntro: 'Cela comprend :',
      resetPoints: [
        'Supprimer les permis redondants et qui se chevauchent',
        'Prioriser la securite, la structure et la rapidite',
        'Accelerer les projets qui augmentent immediatement l offre',
      ],
      resetClosingOne: 'Ce n est pas de la dereglementation.',
      resetClosingTwo: 'C est une execution ciblee.',
      accountabilityTitle: 'Responsabilite dans la construction',
      accountabilityCopy: 'La rapidite ne se fera pas au detriment de la securite.',
      accountabilityIntro: 'Le Canada fera respecter :',
      accountabilityPoints: [
        'Le respect strict du code du batiment',
        'Des inspections apres construction',
        'De fortes penalites pour les constructions dangereuses ou non conformes',
      ],
      accountabilityClosing: 'Les constructeurs iront plus vite tout en demeurant responsables.',
      zoningTitle: 'Reforme du zonage et de la densite',
      zoningCopy: 'Le Canada debloquera ses villes.',
      zoningIntro: 'Cela comprend :',
      zoningPoints: [
        'Permettre un logement plus dense en milieu urbain',
        'Reduire les restrictions sur les projets multiunites',
        'Aligner le zonage sur les besoins reels de la population',
      ],
      zoningClosing: 'Les communautes doivent pouvoir grandir.',
      homelessnessTitle: 'Mettre fin a l itinerance chronique',
      homelessnessCopy: 'Dans une societe fonctionnelle, aucun citoyen ne devrait etre sans abri.',
      homelessnessIntro: 'Le Canada va :',
      homelessnessPoints: [
        'Fournir des parcours vers un logement stable',
        'Integrer le logement aux traitements, au travail et aux systemes de soutien',
        'Traiter l itinerance de longue duree par une intervention structuree',
      ],
      homelessnessClosing: 'C est une norme de base d un pays civilise.',
      familyTitle: 'Les familles et le cout de la vie',
      familyCopy: 'Le Canada doit redevenir un endroit ou l on peut se construire une vie.',
      familyIntro: 'Cela comprend :',
      familyPoints: ['Des logements abordables', 'Un acces stable a la nourriture et aux biens essentiels', 'Une vraie possibilite d elever des enfants'],
      familyClosing: 'Les familles ne devraient pas etre chassees de leur propre pays par les prix.',
      participationTitle: 'Des communautes plus fortes par la participation',
      participationCopy: 'Par Civil et les Chambres de citoyens :',
      participationPoints: [
        'Les communautes locales identifieront les besoins en logement',
        'Coordonneront les priorites de developpement',
        'Soutiendront les solutions locales',
      ],
      participationClosing: 'Les logements seront construits selon la demande reelle, pas selon une planification deconnectee.',
      outcomeTitle: 'Le resultat',
      outcomePoints: ['Une offre de logement accrue', 'Un cout de la vie plus bas', 'Des communautes plus fortes', 'Un systeme qui fonctionne pour les citoyens'],
      standardTitle: 'La norme Civil',
      standardCopy: 'Une nation civilisee s assure que sa population peut vivre, construire et elever une famille.',
      closingTitle: 'Conclusion',
      closingLines: ['Le Canada reconstruira.', 'Des maisons pour les Canadiens.', 'Des communautes qui fonctionnent.', 'Une societe qui fonctionne.'],
      back: 'Retour a la plateforme',
    },
  })

  return (
    <div className="policy-detail governance-page family-page">
      <section className="policy-detail__panel governance-page__hero family-page__hero">
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
            <div className="policy-aside__list technology-ai-page__outcomes" aria-label={content.asideLabel}>
              {content.asidePoints.map((point) => (
                <span key={point}>{point}</span>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="policy-foundation governance-page__section family-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">{content.housingTitle}</h2>
          </div>
          <p className="section-copy">{content.housingCopy}</p>
        </div>
        <div className="technology-ai-page__panel family-page__full-panel">
          <p className="policy-detail__summary">{content.housingClosing}</p>
        </div>
      </section>

      <section className="policy-foundation governance-page__section family-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">{content.firstTitle}</h2>
          </div>
          <p className="section-copy">{content.firstCopy}</p>
        </div>
        <div className="technology-ai-page__panel">
          <p className="policy-detail__summary">{content.firstIntro}</p>
          <div className="founding-principles-page__list technology-ai-page__list">
            {content.firstPoints.map((point) => (
              <p key={point} className="policy-card__description founding-principles-page__item">{point}</p>
            ))}
          </div>
          <p className="policy-detail__summary family-page__followup-copy">{content.firstClosing}</p>
        </div>
      </section>

      <section className="policy-foundation governance-page__section family-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">{content.speculationTitle}</h2>
          </div>
          <p className="section-copy">{content.speculationCopy}</p>
        </div>
        <div className="technology-ai-page__split-grid">
          <div className="technology-ai-page__panel">
            <p className="policy-detail__summary">{content.speculationIntro}</p>
            <div className="founding-principles-page__list technology-ai-page__list">
              {content.speculationPoints.map((point) => (
                <p key={point} className="policy-card__description founding-principles-page__item">{point}</p>
              ))}
            </div>
          </div>
          <div className="technology-ai-page__panel technology-ai-page__panel--accent">
            <p className="policy-detail__summary">{content.speculationClosingOne}</p>
            <p className="technology-ai-page__card-line governance-page__card-line--statement">{content.speculationClosingTwo}</p>
          </div>
        </div>
      </section>

      <section className="policy-foundation governance-page__section family-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">{content.scaleTitle}</h2>
          </div>
          <p className="section-copy">{content.scaleCopy}</p>
        </div>
        <div className="policy-grid technology-ai-page__grid technology-ai-page__grid--four">
          {content.scalePoints.map((point) => (
            <article key={point} className="policy-card technology-ai-page__card technology-ai-page__card--tight">
              <p className="technology-ai-page__card-line">{point}</p>
            </article>
          ))}
        </div>
        <div className="technology-ai-page__panel family-page__panel-spaced">
          <p className="policy-detail__summary">{content.scaleClosingOne}</p>
          <p className="technology-ai-page__card-line family-page__statement">{content.scaleClosingTwo}</p>
        </div>
      </section>

      <section className="policy-foundation governance-page__section family-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">{content.redTapeTitle}</h2>
          </div>
          <p className="section-copy">{content.redTapeCopy}</p>
        </div>
        <div className="technology-ai-page__split-grid">
          <div className="technology-ai-page__panel">
            <p className="policy-detail__summary">{content.redTapeIntro}</p>
            <div className="founding-principles-page__list technology-ai-page__list">
              {content.redTapePoints.map((point) => (
                <p key={point} className="policy-card__description founding-principles-page__item">{point}</p>
              ))}
            </div>
          </div>
          <div className="technology-ai-page__panel technology-ai-page__panel--accent">
            <p className="policy-detail__summary">{content.redTapeClosingOne}</p>
            <p className="technology-ai-page__card-line governance-page__card-line--statement">{content.redTapeClosingTwo}</p>
          </div>
        </div>
      </section>

      <section className="policy-foundation governance-page__section family-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">{content.resetTitle}</h2>
          </div>
          <p className="section-copy">{content.resetCopy}</p>
        </div>
        <div className="technology-ai-page__panel">
          <p className="policy-detail__summary">{content.resetIntro}</p>
          <div className="founding-principles-page__list technology-ai-page__list">
            {content.resetPoints.map((point) => (
              <p key={point} className="policy-card__description founding-principles-page__item">{point}</p>
            ))}
          </div>
          <p className="policy-detail__summary family-page__followup-copy">{content.resetClosingOne}</p>
          <p className="policy-detail__summary family-page__followup-copy">{content.resetClosingTwo}</p>
        </div>
      </section>

      <section className="policy-foundation governance-page__section family-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">{content.accountabilityTitle}</h2>
          </div>
          <p className="section-copy">{content.accountabilityCopy}</p>
        </div>
        <div className="technology-ai-page__split-grid">
          <div className="technology-ai-page__panel">
            <p className="policy-detail__summary">{content.accountabilityIntro}</p>
            <div className="founding-principles-page__list technology-ai-page__list">
              {content.accountabilityPoints.map((point) => (
                <p key={point} className="policy-card__description founding-principles-page__item">{point}</p>
              ))}
            </div>
          </div>
          <div className="technology-ai-page__panel technology-ai-page__panel--accent">
            <p className="technology-ai-page__card-line governance-page__card-line--statement">{content.accountabilityClosing}</p>
          </div>
        </div>
      </section>

      <section className="policy-foundation governance-page__section family-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">{content.zoningTitle}</h2>
          </div>
          <p className="section-copy">{content.zoningCopy}</p>
        </div>
        <div className="technology-ai-page__panel">
          <p className="policy-detail__summary">{content.zoningIntro}</p>
          <div className="founding-principles-page__list technology-ai-page__list">
            {content.zoningPoints.map((point) => (
              <p key={point} className="policy-card__description founding-principles-page__item">{point}</p>
            ))}
          </div>
          <p className="policy-detail__summary family-page__followup-copy">{content.zoningClosing}</p>
        </div>
      </section>

      <section className="policy-foundation governance-page__section family-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">{content.homelessnessTitle}</h2>
          </div>
          <p className="section-copy">{content.homelessnessCopy}</p>
        </div>
        <div className="technology-ai-page__panel">
          <p className="policy-detail__summary">{content.homelessnessIntro}</p>
          <div className="founding-principles-page__list technology-ai-page__list">
            {content.homelessnessPoints.map((point) => (
              <p key={point} className="policy-card__description founding-principles-page__item">{point}</p>
            ))}
          </div>
          <p className="policy-detail__summary family-page__followup-copy">{content.homelessnessClosing}</p>
        </div>
      </section>

      <section className="policy-foundation governance-page__section family-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">{content.familyTitle}</h2>
          </div>
          <p className="section-copy">{content.familyCopy}</p>
        </div>
        <div className="technology-ai-page__split-grid">
          <div className="technology-ai-page__panel">
            <p className="policy-detail__summary">{content.familyIntro}</p>
            <div className="founding-principles-page__list technology-ai-page__list">
              {content.familyPoints.map((point) => (
                <p key={point} className="policy-card__description founding-principles-page__item">{point}</p>
              ))}
            </div>
          </div>
          <div className="technology-ai-page__panel">
            <p className="technology-ai-page__card-line governance-page__card-line--statement">{content.familyClosing}</p>
          </div>
        </div>
      </section>

      <section className="policy-foundation governance-page__section family-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">{content.participationTitle}</h2>
          </div>
          <p className="section-copy">{content.participationCopy}</p>
        </div>
        <div className="technology-ai-page__panel technology-ai-page__panel--accent">
          <div className="founding-principles-page__list technology-ai-page__list">
            {content.participationPoints.map((point) => (
              <p key={point} className="policy-card__description founding-principles-page__item">{point}</p>
            ))}
          </div>
          <p className="policy-detail__summary family-page__followup-copy">{content.participationClosing}</p>
        </div>
      </section>

      <section className="policy-foundation governance-page__section family-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">{content.outcomeTitle}</h2>
          </div>
        </div>
        <div className="policy-grid technology-ai-page__grid technology-ai-page__grid--four">
          {content.outcomePoints.map((point) => (
            <article key={point} className="policy-card technology-ai-page__card technology-ai-page__card--tight">
              <p className="technology-ai-page__card-line">{point}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="policy-foundation governance-page__section governance-page__closing family-page__closing">
        <div className="technology-ai-page__panel governance-page__full-panel">
          <h2 className="section-title">{content.standardTitle}</h2>
          <p className="policy-detail__summary">{content.standardCopy}</p>
          <h2 className="section-title family-page__closing-title">{content.closingTitle}</h2>
          {content.closingLines.map((line) => (
            <p key={line} className="policy-detail__summary family-page__closing-line">{line}</p>
          ))}
        </div>
        <div className="policy-detail__actions">
          <Link to="/platform" className="button button--secondary">{content.back}</Link>
        </div>
      </section>
    </div>
  )
}