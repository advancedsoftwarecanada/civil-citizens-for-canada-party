import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { localizeByLanguage } from '../lib/locale'

export default function DefenseSovereigntyPage() {
  const { i18n } = useTranslation()
  const content = localizeByLanguage(i18n, {
    en: {
      eyebrow: 'Platform / Defense & Sovereignty',
      title: 'A Safe Nation is a Strong Nation',
      hero: [
        'Sovereignty begins at home.',
        'A country cannot be strong abroad if it is unstable within its own borders.',
        'Canada must ensure that its citizens are safe, its laws are respected, and its systems are functioning.',
      ],
      asideEyebrow: 'The Civil Standard',
      asideTitle: 'Domestic order is the foundation of sovereignty.',
      asideCopy:
        'Canada must be secure at the level of the home, the street, the justice system, and the nation itself.',
      securityTitle: 'The Right to Personal Security',
      securityCopy: 'Law-abiding Canadians have the right to feel safe in their homes and communities.',
      securityIntro: 'Canada will:',
      securityPoints: [
        'Strengthen the legal right of individuals to defend themselves within their homes',
        'Ensure laws clearly support lawful self-defense',
        'Prioritize the protection of victims over offenders',
      ],
      securityClosing: 'Public safety begins with empowering responsible citizens.',
      justiceTitle: 'Restoring Balance in the Justice System',
      justiceCopy: "Canada's justice system must be:",
      justiceSystemPoints: ['Fair', 'Predictable', 'Enforced'],
      justiceMeasuresIntro: 'This includes:',
      justiceMeasures: [
        'Limiting repeat release of high-risk offenders',
        'Ensuring serious crimes result in meaningful consequences',
        'Aligning bail decisions with public safety risk',
      ],
      justiceClosing:
        'Those who pose a clear threat to others should not be repeatedly returned to the public without accountability.',
      violenceTitle: 'Zero Tolerance for Violence and Intimidation',
      violenceCopy: 'Canada must remain a peaceful and civil society.',
      violenceIntro: 'Acts that promote or incite violence will be treated seriously under the law.',
      violenceMeasuresIntro: 'This includes:',
      violencePoints: [
        'Threats or actions that create fear or intimidation',
        'Organized or coordinated attempts to incite harm',
        'Public conduct that crosses into intimidation or coercion',
      ],
      violenceClosing: 'Freedom of expression does not include the right to threaten others.',
      addictionTitle: 'Addressing Addiction and Recovery',
      addictionCopy: 'Addiction is both a health crisis and a public safety issue.',
      addictionIntro: 'Canada will:',
      addictionPoints: [
        'Expand access to treatment and recovery centres',
        'Provide structured rehabilitation programs',
        'Support reintegration into society through work and community',
      ],
      addictionClosingOne:
        'Where individuals repeatedly pose a risk to themselves or others, structured intervention will be required.',
      addictionClosingTwo: 'Programs will be enforced through the justice system where necessary.',
      addictionClosingThree: 'The goal is recovery, not abandonment.',
      homelessnessTitle: 'Ending Chronic Homelessness',
      homelessnessCopy: 'In a functioning society, no citizen should be left without shelter.',
      homelessnessIntro: 'Canada will:',
      homelessnessPoints: [
        'Establish pathways to stable housing',
        'Connect housing with treatment, work, and support systems',
        'Ensure that long-term homelessness is addressed through coordinated intervention',
      ],
      homelessnessClosingOne: 'This is not optional.',
      homelessnessClosingTwo: 'It is a baseline standard of a civilized country.',
      defenseTitle: 'National Defense and Readiness',
      defenseCopy: 'Canada must maintain the ability to:',
      defensePoints: ['Defend its territory', 'Support its allies', 'Respond to global instability'],
      defenseClosing: 'A strong domestic foundation supports a strong international presence.',
      standardTitle: 'The Civil Standard',
      standardLabel: 'Defense and sovereignty standard',
      standardPoints: [
        'Protects its citizens',
        'Enforces its laws',
        'Maintains order with fairness and strength',
      ],
      closingTitle: 'Closing',
      closingIntro: 'Canada will be:',
      closingLabel: 'Closing defense outcomes',
      closingPoints: ['Safe', 'Stable', 'Disciplined', 'Sovereign'],
      closingLine: 'Because without order, nothing else functions.',
      back: 'Back to Platform',
    },
    fr: {
      eyebrow: 'Plateforme / Defense et souverainete',
      title: 'Une nation sure est une nation forte',
      hero: [
        'La souverainete commence chez soi.',
        "Un pays ne peut pas etre fort a l'etranger s'il est instable a l'interieur de ses frontieres.",
        'Le Canada doit s assurer que ses citoyens sont en securite, que ses lois sont respectees et que ses systemes fonctionnent.',
      ],
      asideEyebrow: 'La norme Civil',
      asideTitle: 'L ordre interieur est le fondement de la souverainete.',
      asideCopy:
        'Le Canada doit etre securise au niveau du foyer, de la rue, du systeme de justice et de la nation elle-meme.',
      securityTitle: 'Le droit a la securite personnelle',
      securityCopy: 'Les Canadiens respectueux des lois ont le droit de se sentir en securite dans leur maison et leur communaute.',
      securityIntro: 'Le Canada va :',
      securityPoints: [
        'Renforcer le droit legal des personnes a se defendre dans leur domicile',
        'Veiller a ce que les lois soutiennent clairement la legitime defense',
        'Faire passer la protection des victimes avant celle des contrevenants',
      ],
      securityClosing: 'La securite publique commence par des citoyens responsables qui ont les moyens d agir.',
      justiceTitle: 'Retablir l equilibre dans le systeme de justice',
      justiceCopy: 'Le systeme de justice du Canada doit etre :',
      justiceSystemPoints: ['Juste', 'Previsible', 'Applique'],
      justiceMeasuresIntro: 'Cela comprend :',
      justiceMeasures: [
        'Limiter la remise en liberte repetee des contrevenants a haut risque',
        'Faire en sorte que les crimes graves entrainent de vraies consequences',
        'Aligner les decisions de cautionnement sur le risque pour la securite publique',
      ],
      justiceClosing:
        'Ceux qui representent une menace claire pour autrui ne devraient pas etre retournes au public a repetition sans responsabilite.',
      violenceTitle: 'Tolerance zero envers la violence et l intimidation',
      violenceCopy: 'Le Canada doit demeurer une societe pacifique et civile.',
      violenceIntro: 'Les actes qui favorisent ou incitent la violence seront traites serieusement en vertu de la loi.',
      violenceMeasuresIntro: 'Cela comprend :',
      violencePoints: [
        'Les menaces ou gestes qui creent la peur ou l intimidation',
        'Les tentatives organisees ou coordonnees d inciter a la violence',
        'Les conduites publiques qui basculent dans l intimidation ou la coercition',
      ],
      violenceClosing: 'La liberte d expression n inclut pas le droit de menacer autrui.',
      addictionTitle: 'S attaquer a la dependance et au retablissement',
      addictionCopy: 'La dependance est a la fois une crise de sante et un enjeu de securite publique.',
      addictionIntro: 'Le Canada va :',
      addictionPoints: [
        'Elargir l acces aux centres de traitement et de retablissement',
        'Fournir des programmes de rehabilitation structures',
        'Soutenir la reintegration par le travail et la communaute',
      ],
      addictionClosingOne:
        'Lorsque des personnes representent a repetition un risque pour elles-memes ou pour autrui, une intervention structuree sera requise.',
      addictionClosingTwo: 'Les programmes seront imposes par le systeme de justice lorsque necessaire.',
      addictionClosingThree: 'L objectif est le retablissement, pas l abandon.',
      homelessnessTitle: 'Mettre fin a l itinerance chronique',
      homelessnessCopy: 'Dans une societe fonctionnelle, aucun citoyen ne devrait etre laisse sans abri.',
      homelessnessIntro: 'Le Canada va :',
      homelessnessPoints: [
        'Etablir des parcours vers un logement stable',
        'Relier le logement aux traitements, au travail et aux systemes de soutien',
        'Faire en sorte que l itinerance de longue duree soit traitee par une intervention coordonnee',
      ],
      homelessnessClosingOne: 'Ce n est pas facultatif.',
      homelessnessClosingTwo: 'C est une norme de base d un pays civilise.',
      defenseTitle: 'Defense nationale et preparation',
      defenseCopy: 'Le Canada doit conserver la capacite de :',
      defensePoints: ['Defendre son territoire', 'Soutenir ses allies', 'Repondre a l instabilite mondiale'],
      defenseClosing: 'Une base domestique forte soutient une presence internationale forte.',
      standardTitle: 'La norme Civil',
      standardLabel: 'Norme de defense et de souverainete',
      standardPoints: [
        'Protege ses citoyens',
        'Fait respecter ses lois',
        'Maintient l ordre avec justice et fermete',
      ],
      closingTitle: 'Conclusion',
      closingIntro: 'Le Canada sera :',
      closingLabel: 'Resultats de conclusion sur la defense',
      closingPoints: ['Sur', 'Stable', 'Discipline', 'Souverain'],
      closingLine: 'Parce que sans ordre, rien d autre ne fonctionne.',
      back: 'Retour a la plateforme',
    },
  })

  return (
    <div className="policy-detail governance-page defense-page">
      <section className="policy-detail__panel governance-page__hero defense-page__hero">
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

      <section className="policy-foundation governance-page__section defense-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">{content.securityTitle}</h2>
          </div>
          <p className="section-copy">{content.securityCopy}</p>
        </div>
        <div className="technology-ai-page__panel">
          <p className="policy-detail__summary">{content.securityIntro}</p>
          <div className="founding-principles-page__list technology-ai-page__list">
            {content.securityPoints.map((point) => (
              <p key={point} className="policy-card__description founding-principles-page__item">
                {point}
              </p>
            ))}
          </div>
          <p className="policy-detail__summary defense-page__followup-copy">{content.securityClosing}</p>
        </div>
      </section>

      <section className="policy-foundation governance-page__section defense-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">{content.justiceTitle}</h2>
          </div>
          <p className="section-copy">{content.justiceCopy}</p>
        </div>
        <div className="policy-grid governance-page__grid governance-page__grid--three">
          {content.justiceSystemPoints.map((point) => (
            <article key={point} className="policy-card technology-ai-page__card technology-ai-page__card--tight">
              <p className="technology-ai-page__card-line">{point}</p>
            </article>
          ))}
        </div>
        <div className="technology-ai-page__panel defense-page__panel-spaced">
          <p className="policy-detail__summary">{content.justiceMeasuresIntro}</p>
          <div className="founding-principles-page__list technology-ai-page__list">
            {content.justiceMeasures.map((point) => (
              <p key={point} className="policy-card__description founding-principles-page__item">
                {point}
              </p>
            ))}
          </div>
          <p className="policy-detail__summary defense-page__followup-copy">{content.justiceClosing}</p>
        </div>
      </section>

      <section className="policy-foundation governance-page__section defense-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">{content.violenceTitle}</h2>
          </div>
          <p className="section-copy">{content.violenceCopy}</p>
        </div>
        <div className="technology-ai-page__split-grid">
          <div className="technology-ai-page__panel">
            <p className="policy-detail__summary">{content.violenceIntro}</p>
            <p className="policy-detail__summary">{content.violenceMeasuresIntro}</p>
            <div className="founding-principles-page__list technology-ai-page__list">
              {content.violencePoints.map((point) => (
                <p key={point} className="policy-card__description founding-principles-page__item">
                  {point}
                </p>
              ))}
            </div>
          </div>
          <div className="technology-ai-page__panel technology-ai-page__panel--accent">
            <p className="technology-ai-page__card-line governance-page__card-line--statement">
              {content.violenceClosing}
            </p>
          </div>
        </div>
      </section>

      <section className="policy-foundation governance-page__section defense-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">{content.addictionTitle}</h2>
          </div>
          <p className="section-copy">{content.addictionCopy}</p>
        </div>
        <div className="technology-ai-page__split-grid">
          <div className="technology-ai-page__panel">
            <p className="policy-detail__summary">{content.addictionIntro}</p>
            <div className="founding-principles-page__list technology-ai-page__list">
              {content.addictionPoints.map((point) => (
                <p key={point} className="policy-card__description founding-principles-page__item">
                  {point}
                </p>
              ))}
            </div>
          </div>
          <div className="technology-ai-page__panel technology-ai-page__panel--accent">
            <p className="policy-detail__summary">{content.addictionClosingOne}</p>
            <p className="policy-detail__summary defense-page__followup-copy">{content.addictionClosingTwo}</p>
            <p className="technology-ai-page__card-line governance-page__card-line--statement">
              {content.addictionClosingThree}
            </p>
          </div>
        </div>
      </section>

      <section className="policy-foundation governance-page__section defense-page__section">
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
              <p key={point} className="policy-card__description founding-principles-page__item">
                {point}
              </p>
            ))}
          </div>
          <p className="policy-detail__summary defense-page__followup-copy">{content.homelessnessClosingOne}</p>
          <p className="policy-detail__summary defense-page__followup-copy">{content.homelessnessClosingTwo}</p>
        </div>
      </section>

      <section className="policy-foundation governance-page__section defense-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">{content.defenseTitle}</h2>
          </div>
          <p className="section-copy">{content.defenseCopy}</p>
        </div>
        <div className="policy-grid governance-page__grid governance-page__grid--three">
          {content.defensePoints.map((point) => (
            <article key={point} className="policy-card technology-ai-page__card technology-ai-page__card--tight">
              <p className="technology-ai-page__card-line">{point}</p>
            </article>
          ))}
        </div>
        <div className="technology-ai-page__panel defense-page__panel-spaced">
          <p className="policy-detail__summary">{content.defenseClosing}</p>
        </div>
      </section>

      <section className="policy-foundation governance-page__section defense-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">{content.standardTitle}</h2>
          </div>
        </div>
        <div className="policy-aside__list technology-ai-page__outcomes" aria-label={content.standardLabel}>
          {content.standardPoints.map((point) => (
            <span key={point}>{point}</span>
          ))}
        </div>
      </section>

      <section className="policy-foundation governance-page__section governance-page__closing defense-page__closing">
        <div className="technology-ai-page__panel governance-page__full-panel">
          <h2 className="section-title">{content.closingTitle}</h2>
          <p className="policy-detail__summary">{content.closingIntro}</p>
          <div className="policy-aside__list technology-ai-page__outcomes defense-page__outcomes" aria-label={content.closingLabel}>
            {content.closingPoints.map((point) => (
              <span key={point}>{point}</span>
            ))}
          </div>
          <p className="policy-detail__summary defense-page__closing-line">{content.closingLine}</p>
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