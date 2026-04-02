import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { localizeByLanguage } from '../lib/locale'

export default function EnergyInfrastructurePage() {
  const { i18n } = useTranslation()
  const content = localizeByLanguage(i18n, {
    en: {
      eyebrow: 'Platform / Energy & Infrastructure',
      title: 'Canada Must Power Itself First',
      hero: [
        'Energy is the foundation of a functioning nation.',
        'Without reliable, affordable, and domestically controlled energy, nothing else works: not industry, not housing, not growth.',
        'Canada will take control of its energy future.',
      ],
      asideEyebrow: 'The Civil Standard',
      asideTitle: 'Energy security is national security.',
      asideCopy:
        'Canada should power its homes, industries, and future from a position of domestic strength rather than external dependence.',
      sovereigntyTitle: 'National Energy Sovereignty',
      sovereigntyCopy: 'Canada will prioritize its own energy needs before relying on foreign supply.',
      sovereigntyIntro: 'This includes:',
      sovereigntyPoints: [
        'Building a national east-west pipeline network',
        'Ending reliance on imported foreign oil where domestic supply exists',
        'Ensuring Canadian energy reaches Canadian markets efficiently',
      ],
      sovereigntyClosing: 'Canada will use its own resources to power its own people.',
      systemTitle: 'End Fragmentation - Build a National System',
      systemCopy: "Canada's energy infrastructure is currently fragmented across provinces.",
      systemIntro: 'Civil will establish:',
      systemPoints: [
        'Coordinated national energy planning',
        'Interconnected infrastructure across regions',
        'Efficient movement of energy from production to consumption',
      ],
      systemClosing: 'Energy must function as a unified national system.',
      buildTitle: 'Build Major Infrastructure - Fast',
      buildCopy: 'Canada must return to building.',
      buildPoints: ['Pipelines', 'Refineries', 'Electrical grid modernization', 'Energy storage systems'],
      buildClosing: 'Projects of national importance will be prioritized and executed with urgency.',
      balanceTitle: 'A Balanced Energy Mix',
      balanceCopy: 'Canada will pursue a practical and resilient energy strategy, including:',
      balancePoints: [
        'Oil and gas as a current economic driver',
        'Expansion of nuclear energy as a long-term stable source',
        'Continued use and development of hydroelectric power',
        'Targeted use of renewables where they are effective and reliable',
      ],
      balanceClosingOne: 'No single solution will carry the country.',
      balanceClosingTwo: 'Strength comes from balance.',
      investmentTitle: 'Smart Investment - Not Blind Subsidies',
      investmentCopy: 'Government spending on energy will be disciplined and results-driven.',
      investmentIntro: 'Canada will:',
      investmentPoints: [
        'End inefficient and politically driven subsidies',
        'Invest in projects that deliver measurable national benefit',
        'Support technologies that improve output, efficiency, and reliability',
      ],
      investmentClosing: 'Public funds must produce real outcomes.',
      technologyTitle: 'Technology Over Restriction',
      technologyCopy: 'Canada will innovate forward.',
      technologyIntro: 'This includes:',
      technologyPoints: [
        'Carbon capture and emissions reduction technologies',
        'More efficient extraction and production methods',
        'Intelligent grid systems and energy optimization',
      ],
      technologyClosing: 'Progress will come from building better systems, not limiting growth.',
      affordableTitle: 'Affordable Energy for Canadians',
      affordableCopy: 'Energy must remain accessible and affordable.',
      affordableIntro: 'Lower energy costs will:',
      affordablePoints: ['Strengthen households', 'Support small business growth', 'Increase national competitiveness'],
      affordableClosing: 'High-cost energy weakens the entire economy.',
      standardTitle: 'The Civil Standard',
      standardCopy: 'Canada will not weaken itself to meet external expectations.',
      standardIntro: 'It will:',
      standardLabel: 'Energy and infrastructure standard',
      standardPoints: ['Build', 'Produce', 'Innovate', 'Lead'],
      standardClosing: 'From a position of strength.',
      closingTitle: 'Closing',
      closingLine: 'Canada will power itself first - then the world.',
      back: 'Back to Platform',
    },
    fr: {
      eyebrow: 'Plateforme / Energie et infrastructure',
      title: 'Le Canada doit d abord se donner sa propre energie',
      hero: [
        "L energie est la base d une nation fonctionnelle.",
        "Sans energie fiable, abordable et controlee au pays, rien d autre ne fonctionne : ni l industrie, ni le logement, ni la croissance.",
        'Le Canada reprendra le controle de son avenir energetique.',
      ],
      asideEyebrow: 'La norme Civil',
      asideTitle: 'La securite energetique est une securite nationale.',
      asideCopy:
        'Le Canada doit alimenter ses foyers, ses industries et son avenir a partir d une position de force domestique plutot que de dependance externe.',
      sovereigntyTitle: 'Souverainete energetique nationale',
      sovereigntyCopy: 'Le Canada priorisera ses propres besoins energetiques avant de dependre de sources etrangeres.',
      sovereigntyIntro: 'Cela comprend :',
      sovereigntyPoints: [
        'Construire un reseau national de pipelines est-ouest',
        'Mettre fin a la dependance au petrole etranger importe lorsque l offre canadienne existe',
        'Veiller a ce que l energie canadienne rejoigne efficacement les marches canadiens',
      ],
      sovereigntyClosing: 'Le Canada utilisera ses propres ressources pour alimenter sa propre population.',
      systemTitle: 'Mettre fin a la fragmentation - Construire un systeme national',
      systemCopy: "L infrastructure energetique du Canada est actuellement fragmente d une province a l autre.",
      systemIntro: 'Civil mettra en place :',
      systemPoints: [
        'Une planification energetique nationale coordonnee',
        'Une infrastructure interconnectee entre les regions',
        'Une circulation efficace de l energie de la production a la consommation',
      ],
      systemClosing: 'L energie doit fonctionner comme un systeme national unifie.',
      buildTitle: 'Construire les grandes infrastructures - Rapidement',
      buildCopy: 'Le Canada doit recommencer a construire.',
      buildPoints: ['Pipelines', 'Raffineries', 'Modernisation du reseau electrique', 'Systemes de stockage d energie'],
      buildClosing: 'Les projets d importance nationale seront prioritaires et executes avec urgence.',
      balanceTitle: 'Un bouquet energetique equilibre',
      balanceCopy: 'Le Canada poursuivra une strategie energetique pratique et resiliente, y compris :',
      balancePoints: [
        'Le petrole et le gaz comme moteur economique actuel',
        'L expansion de l energie nucleaire comme source stable a long terme',
        'La poursuite de l utilisation et du developpement de l hydroelectricite',
        'L usage cible des renouvelables la ou ils sont efficaces et fiables',
      ],
      balanceClosingOne: 'Aucune solution unique ne portera le pays.',
      balanceClosingTwo: 'La force vient de l equilibre.',
      investmentTitle: 'Investissement intelligent - Pas des subventions aveugles',
      investmentCopy: 'Les depenses publiques en energie seront disciplinees et orientees vers les resultats.',
      investmentIntro: 'Le Canada va :',
      investmentPoints: [
        'Mettre fin aux subventions inefficaces et politiquement motivees',
        'Investir dans les projets qui offrent un benefice national mesurable',
        'Soutenir les technologies qui ameliorent la production, l efficacite et la fiabilite',
      ],
      investmentClosing: 'Les fonds publics doivent produire de vrais resultats.',
      technologyTitle: 'La technologie plutot que la restriction',
      technologyCopy: 'Le Canada innovera vers l avant.',
      technologyIntro: 'Cela comprend :',
      technologyPoints: [
        'Les technologies de captage du carbone et de reduction des emissions',
        'Des methodes d extraction et de production plus efficaces',
        'Des reseaux intelligents et une optimisation energetique',
      ],
      technologyClosing: 'Le progres viendra de meilleurs systemes, pas de la limitation de la croissance.',
      affordableTitle: 'Une energie abordable pour les Canadiens',
      affordableCopy: 'L energie doit demeurer accessible et abordable.',
      affordableIntro: 'Des couts energetiques plus bas vont :',
      affordablePoints: ['Renforcer les foyers', 'Soutenir la croissance des petites entreprises', 'Accroitre la competitivite nationale'],
      affordableClosing: 'Une energie trop couteuse affaiblit toute l economie.',
      standardTitle: 'La norme Civil',
      standardCopy: 'Le Canada ne s affaiblira pas pour satisfaire des attentes externes.',
      standardIntro: 'Il va :',
      standardLabel: 'Norme d energie et d infrastructure',
      standardPoints: ['Construire', 'Produire', 'Innover', 'Diriger'],
      standardClosing: 'A partir d une position de force.',
      closingTitle: 'Conclusion',
      closingLine: 'Le Canada se donnera d abord sa propre energie, puis alimentera le monde.',
      back: 'Retour a la plateforme',
    },
  })

  return (
    <div className="policy-detail governance-page energy-page">
      <section className="policy-detail__panel governance-page__hero energy-page__hero">
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

      <section className="policy-foundation governance-page__section energy-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">{content.sovereigntyTitle}</h2>
          </div>
          <p className="section-copy">{content.sovereigntyCopy}</p>
        </div>
        <div className="technology-ai-page__panel">
          <p className="policy-detail__summary">{content.sovereigntyIntro}</p>
          <div className="founding-principles-page__list technology-ai-page__list">
            {content.sovereigntyPoints.map((point) => (
              <p key={point} className="policy-card__description founding-principles-page__item">{point}</p>
            ))}
          </div>
          <p className="policy-detail__summary energy-page__followup-copy">{content.sovereigntyClosing}</p>
        </div>
      </section>

      <section className="policy-foundation governance-page__section energy-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">{content.systemTitle}</h2>
          </div>
          <p className="section-copy">{content.systemCopy}</p>
        </div>
        <div className="technology-ai-page__panel technology-ai-page__panel--accent">
          <p className="policy-detail__summary">{content.systemIntro}</p>
          <div className="founding-principles-page__list technology-ai-page__list">
            {content.systemPoints.map((point) => (
              <p key={point} className="policy-card__description founding-principles-page__item">{point}</p>
            ))}
          </div>
          <p className="technology-ai-page__card-line energy-page__statement">{content.systemClosing}</p>
        </div>
      </section>

      <section className="policy-foundation governance-page__section energy-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">{content.buildTitle}</h2>
          </div>
          <p className="section-copy">{content.buildCopy}</p>
        </div>
        <div className="policy-grid technology-ai-page__grid technology-ai-page__grid--four">
          {content.buildPoints.map((point) => (
            <article key={point} className="policy-card technology-ai-page__card technology-ai-page__card--tight">
              <p className="technology-ai-page__card-line">{point}</p>
            </article>
          ))}
        </div>
        <div className="technology-ai-page__panel energy-page__panel-spaced">
          <p className="policy-detail__summary">{content.buildClosing}</p>
        </div>
      </section>

      <section className="policy-foundation governance-page__section energy-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">{content.balanceTitle}</h2>
          </div>
          <p className="section-copy">{content.balanceCopy}</p>
        </div>
        <div className="technology-ai-page__split-grid">
          <div className="technology-ai-page__panel">
            <div className="founding-principles-page__list technology-ai-page__list">
              {content.balancePoints.map((point) => (
                <p key={point} className="policy-card__description founding-principles-page__item">{point}</p>
              ))}
            </div>
          </div>
          <div className="technology-ai-page__panel technology-ai-page__panel--accent">
            <p className="policy-detail__summary">{content.balanceClosingOne}</p>
            <p className="technology-ai-page__card-line governance-page__card-line--statement">{content.balanceClosingTwo}</p>
          </div>
        </div>
      </section>

      <section className="policy-foundation governance-page__section energy-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">{content.investmentTitle}</h2>
          </div>
          <p className="section-copy">{content.investmentCopy}</p>
        </div>
        <div className="technology-ai-page__panel">
          <p className="policy-detail__summary">{content.investmentIntro}</p>
          <div className="founding-principles-page__list technology-ai-page__list">
            {content.investmentPoints.map((point) => (
              <p key={point} className="policy-card__description founding-principles-page__item">{point}</p>
            ))}
          </div>
          <p className="policy-detail__summary energy-page__followup-copy">{content.investmentClosing}</p>
        </div>
      </section>

      <section className="policy-foundation governance-page__section energy-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">{content.technologyTitle}</h2>
          </div>
          <p className="section-copy">{content.technologyCopy}</p>
        </div>
        <div className="technology-ai-page__panel technology-ai-page__panel--accent">
          <p className="policy-detail__summary">{content.technologyIntro}</p>
          <div className="founding-principles-page__list technology-ai-page__list">
            {content.technologyPoints.map((point) => (
              <p key={point} className="policy-card__description founding-principles-page__item">{point}</p>
            ))}
          </div>
          <p className="policy-detail__summary energy-page__followup-copy">{content.technologyClosing}</p>
        </div>
      </section>

      <section className="policy-foundation governance-page__section energy-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">{content.affordableTitle}</h2>
          </div>
          <p className="section-copy">{content.affordableCopy}</p>
        </div>
        <div className="technology-ai-page__split-grid">
          <div className="technology-ai-page__panel">
            <p className="policy-detail__summary">{content.affordableIntro}</p>
            <div className="founding-principles-page__list technology-ai-page__list">
              {content.affordablePoints.map((point) => (
                <p key={point} className="policy-card__description founding-principles-page__item">{point}</p>
              ))}
            </div>
          </div>
          <div className="technology-ai-page__panel">
            <p className="technology-ai-page__card-line governance-page__card-line--statement">{content.affordableClosing}</p>
          </div>
        </div>
      </section>

      <section className="policy-foundation governance-page__section energy-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">{content.standardTitle}</h2>
          </div>
          <p className="section-copy">{content.standardCopy}</p>
        </div>
        <div className="technology-ai-page__panel energy-page__full-panel">
          <p className="policy-detail__summary">{content.standardIntro}</p>
          <div className="policy-aside__list technology-ai-page__outcomes" aria-label={content.standardLabel}>
            {content.standardPoints.map((point) => (
              <span key={point}>{point}</span>
            ))}
          </div>
          <p className="policy-detail__summary energy-page__followup-copy">{content.standardClosing}</p>
        </div>
      </section>

      <section className="policy-foundation governance-page__section governance-page__closing energy-page__closing">
        <div className="technology-ai-page__panel governance-page__full-panel">
          <h2 className="section-title">{content.closingTitle}</h2>
          <p className="policy-detail__summary energy-page__closing-line">{content.closingLine}</p>
        </div>
        <div className="policy-detail__actions">
          <Link to="/platform" className="button button--secondary">{content.back}</Link>
        </div>
      </section>
    </div>
  )
}