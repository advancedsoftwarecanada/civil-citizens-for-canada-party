import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { localizeByLanguage } from '../lib/locale'

export default function CivilChambersPage() {
  const { i18n } = useTranslation()
  const content = localizeByLanguage(i18n, {
    en: {
      eyebrow: 'Platform / Implementation / Chambers of Citizens',
      title: 'Chambers of Citizens',
      objectiveTitle: 'Objective',
      objective:
        'Establish a structured, scalable system of citizen-led governance in every riding through Chambers of Citizens.',
      whatTitle: 'What is a Chamber of Citizens',
      whatIntro: [
        'A Chamber of Citizens is the official Civil Citizens organization within a federal riding.',
        'It replaces fragmented, low-participation structures with a digital, citizen-powered assembly that is open to all verified residents of the riding, continuously active, structured for decision-making, and scalable to thousands of participants.',
      ],
      whatClosing:
        'Each Chamber operates as the local engine of governance, coordination, and representation.',
      whyTitle: 'Why Chambers of Citizens Exist',
      whyIntro: 'Traditional Electoral District Associations are limited by:',
      whyPoints: [
        'Low membership and participation',
        'Informal leadership structures',
        'Restricted access to decision-making',
        'Lack of transparency',
      ],
      solveIntro: 'Chambers of Citizens are designed to solve these limitations by:',
      solvePoints: [
        'Expanding participation',
        'Structuring decision-making',
        'Digitizing governance',
        'Removing gatekeeping',
      ],
      structureTitle: 'Core Structure',
      structureIntro: 'Each Chamber of Citizens is composed of three functional layers:',
      structure: [
        {
          number: '1',
          title: 'Members',
          intro: 'The foundation of the Chamber.',
          points: [
            'Verified residents of the riding',
            'Participate in voting, proposals, and discussions',
            'Can submit initiatives and support candidates',
          ],
          roleTitle: 'Role',
          role: 'Direct participation in governance.',
        },
        {
          number: '2',
          title: 'Contributors',
          intro: 'Active members who take on increased responsibility.',
          points: [
            'Lead initiatives and proposals',
            'Help organize local efforts',
            'Build momentum within the Chamber',
          ],
          roleTitle: 'Role',
          role: 'Drive activity and execution.',
        },
        {
          number: '3',
          title: 'Coordinators',
          intro: 'Facilitators of the Chamber s operations.',
          points: [
            'Ensure processes run smoothly',
            'Moderate discussions and enforce standards',
            'Support implementation of approved decisions',
          ],
          roleTitle: 'Role',
          role: 'Enable the system, not control it.',
        },
      ],
      operatesTitle: 'How a Chamber of Citizens Operates',
      operatesIntro: 'Chambers of Citizens function through structured, continuous interaction:',
      operates: [
        {
          title: 'Proposals',
          points: [
            'Any member can submit an idea or initiative',
            'Visible to the entire Chamber',
            'Open for discussion and feedback',
            'Progresses to voting within a defined timeframe',
          ],
        },
        {
          title: 'Voting',
          points: [
            'Members vote directly on initiatives and projects',
            'Members vote on budget allocations',
            'Members participate in candidate selection',
            'Members influence strategic direction',
          ],
        },
        {
          title: 'Funding',
          points: [
            'Each Chamber has access to a shared Civil Wallet',
            'Funds are contributed by members and supporters',
            'Spending is approved through member voting',
            'Visibility remains fully transparent at all times',
          ],
        },
        {
          title: 'Execution',
          points: [
            'Contributors and Coordinators execute approved initiatives',
            'Progress is visible to all members',
            'Outcomes are tracked and reviewed',
          ],
        },
      ],
      scaleTitle: 'Scale and Growth',
      scaleIntro: 'Chambers of Citizens are designed to scale efficiently:',
      scalePoints: [
        'Initial target: 1,000+ members per riding',
        'Long-term: continuous growth with no upper limit',
        'Participation increases system strength, not complexity',
      ],
      scaleClosingIntro: 'As membership grows:',
      scaleClosingPoints: [
        'Decision-making becomes more representative',
        'Influence shifts fully to the citizen base',
        'Local momentum increases organically',
      ],
      relationshipTitle: 'Relationship to Candidates and Representatives',
      relationshipIntro: 'Chambers of Citizens play a direct role in leadership:',
      relationshipPoints: [
        'Identify and support candidates',
        'Evaluate contributions and alignment',
        'Participate in selection through voting',
      ],
      electedIntro: 'Once elected:',
      electedPoints: [
        'Representatives remain connected to their Chamber',
        'Ongoing communication and reporting is expected',
        'Feedback flows continuously from citizens',
      ],
      replacesTitle: 'What This Replaces',
      replacesIntro:
        'Chambers of Citizens do not eliminate local political organization. They replace outdated structures with a modern system:',
      traditionalLabel: 'Traditional Model',
      civilLabel: 'Chambers of Citizens',
      comparison: [
        { traditional: 'Small executive groups', civil: 'Large citizen base' },
        { traditional: 'Closed meetings', civil: 'Open digital participation' },
        { traditional: 'Gatekept involvement', civil: 'Open access' },
        { traditional: 'Limited transparency', civil: 'Full visibility' },
        { traditional: 'Static organization', civil: 'Continuous activity' },
      ],
      mattersTitle: 'Why This Matters',
      mattersIntro: 'Local organization is the foundation of national governance.',
      mattersWeakIntro: 'When ridings are weak:',
      mattersWeakPoints: [
        'Representation becomes disconnected',
        'Participation declines',
        'Leadership quality suffers',
      ],
      mattersStrongIntro: 'Chambers of Citizens rebuild that foundation by ensuring:',
      mattersStrongPoints: [
        'Broad participation',
        'Transparent systems',
        'Continuous engagement',
        'Strong local coordination',
      ],
      closingTitle: 'Closing Statement',
      closing: [
        'Chambers of Citizens transform each riding into an active, organized, and citizen-driven system.',
        'They are not committees.',
        'They are not clubs.',
        'They are living assemblies of citizens, designed to scale, decide, and act.',
        'One Chamber per riding. Connected across the country.',
      ],
      back: 'Back to Implementation',
    },
    fr: {
      eyebrow: 'Plateforme / Mise en oeuvre / Chambres de citoyens',
      title: 'Chambres de citoyens',
      objectiveTitle: 'Objectif',
      objective:
        'Etablir dans chaque circonscription un systeme structure, evolutif et dirige par les citoyens grace aux Chambres de citoyens.',
      whatTitle: 'Qu est-ce qu une Chambre de citoyens',
      whatIntro: [
        'Une Chambre de citoyens est l organisation officielle de Civil Citizens dans une circonscription federale.',
        'Elle remplace les structures fragmentees et faiblement participatives par une assemblee numerique alimentee par les citoyens, ouverte aux residents verifies, continuellement active, structuree pour decider et capable de s etendre a des milliers de participants.',
      ],
      whatClosing:
        'Chaque Chambre agit comme moteur local de gouvernance, de coordination et de representation.',
      whyTitle: 'Pourquoi les Chambres de citoyens existent',
      whyIntro: 'Les associations de district electoral traditionnelles sont limitees par :',
      whyPoints: [
        'Une faible adhesion et une faible participation',
        'Des structures de leadership informelles',
        'Un acces restreint a la prise de decision',
        'Un manque de transparence',
      ],
      solveIntro: 'Les Chambres de citoyens sont concues pour corriger ces limites en :',
      solvePoints: [
        'Elargissant la participation',
        'Structurant la prise de decision',
        'Numerisant la gouvernance',
        'Supprimant le gatekeeping',
      ],
      structureTitle: 'Structure de base',
      structureIntro: 'Chaque Chambre de citoyens est composee de trois couches fonctionnelles :',
      structure: [
        {
          number: '1',
          title: 'Membres',
          intro: 'La base de la Chambre.',
          points: [
            'Residents verifies de la circonscription',
            'Participent au vote, aux propositions et aux discussions',
            'Peuvent soumettre des initiatives et soutenir des candidats',
          ],
          roleTitle: 'Role',
          role: 'Participation directe a la gouvernance.',
        },
        {
          number: '2',
          title: 'Contributeurs',
          intro: 'Des membres actifs qui assument davantage de responsabilites.',
          points: [
            'Portent des initiatives et des propositions',
            'Aident a organiser les efforts locaux',
            'Creent de l elan au sein de la Chambre',
          ],
          roleTitle: 'Role',
          role: 'Faire avancer l activite et l execution.',
        },
        {
          number: '3',
          title: 'Coordinateurs',
          intro: 'Des facilitateurs du fonctionnement de la Chambre.',
          points: [
            'Veillent au bon deroulement des processus',
            'Moderer les discussions et faire respecter les normes',
            'Soutenir la mise en oeuvre des decisions approuvees',
          ],
          roleTitle: 'Role',
          role: 'Rendre le systeme possible, non le controler.',
        },
      ],
      operatesTitle: 'Comment une Chambre de citoyens fonctionne',
      operatesIntro: 'Les Chambres de citoyens fonctionnent par une interaction structuree et continue :',
      operates: [
        {
          title: 'Propositions',
          points: [
            'Tout membre peut soumettre une idee ou une initiative',
            'Visible a toute la Chambre',
            'Ouverte a la discussion et a la retroaction',
            'Passe au vote dans un delai defini',
          ],
        },
        {
          title: 'Vote',
          points: [
            'Les membres votent directement sur les initiatives et les projets',
            'Les membres votent sur les allocations budgetaires',
            'Les membres participent a la selection des candidats',
            'Les membres influencent la direction strategique',
          ],
        },
        {
          title: 'Financement',
          points: [
            'Chaque Chambre a acces a un Portefeuille Civil partage',
            'Les fonds proviennent des membres et des soutiens',
            'Les depenses sont approuvees par vote des membres',
            'La visibilite demeure complete en tout temps',
          ],
        },
        {
          title: 'Execution',
          points: [
            'Les contributeurs et coordinateurs executent les initiatives approuvees',
            'Le progres est visible pour tous les membres',
            'Les resultats sont suivis et evalues',
          ],
        },
      ],
      scaleTitle: 'Echelle et croissance',
      scaleIntro: 'Les Chambres de citoyens sont concues pour monter en puissance efficacement :',
      scalePoints: [
        'Objectif initial : 1 000+ membres par circonscription',
        'A long terme : croissance continue sans limite superieure',
        'La participation renforce le systeme au lieu de le compliquer',
      ],
      scaleClosingIntro: 'A mesure que la participation augmente :',
      scaleClosingPoints: [
        'La prise de decision devient plus representative',
        'L influence passe pleinement a la base citoyenne',
        'L elan local augmente de facon organique',
      ],
      relationshipTitle: 'Relation avec les candidats et les representants',
      relationshipIntro: 'Les Chambres de citoyens jouent un role direct dans le leadership :',
      relationshipPoints: [
        'Identifier et soutenir les candidats',
        'Evaluer les contributions et l alignement',
        'Participer a la selection par le vote',
      ],
      electedIntro: 'Une fois elus :',
      electedPoints: [
        'Les representants demeurent connectes a leur Chambre',
        'Une communication et des rapports continus sont attendus',
        'La retroaction remonte en continu depuis les citoyens',
      ],
      replacesTitle: 'Ce que cela remplace',
      replacesIntro:
        'Les Chambres de citoyens n eliminent pas l organisation politique locale. Elles remplacent les structures depassees par un systeme moderne :',
      traditionalLabel: 'Modele traditionnel',
      civilLabel: 'Chambres de citoyens',
      comparison: [
        { traditional: 'Petits groupes executifs', civil: 'Large base citoyenne' },
        { traditional: 'Reunions fermees', civil: 'Participation numerique ouverte' },
        { traditional: 'Implication gatekeepee', civil: 'Acces ouvert' },
        { traditional: 'Transparence limitee', civil: 'Visibilite complete' },
        { traditional: 'Organisation statique', civil: 'Activite continue' },
      ],
      mattersTitle: 'Pourquoi cela compte',
      mattersIntro: 'L organisation locale est la base de la gouvernance nationale.',
      mattersWeakIntro: 'Quand les circonscriptions sont faibles :',
      mattersWeakPoints: [
        'La representation devient deconnectee',
        'La participation diminue',
        'La qualite du leadership se degrade',
      ],
      mattersStrongIntro: 'Les Chambres de citoyens reconstruisent cette base en assurant :',
      mattersStrongPoints: [
        'Une large participation',
        'Des systemes transparents',
        'Un engagement continu',
        'Une coordination locale forte',
      ],
      closingTitle: 'Declaration finale',
      closing: [
        'Les Chambres de citoyens transforment chaque circonscription en systeme actif, organise et dirige par les citoyens.',
        'Ce ne sont pas des comites.',
        'Ce ne sont pas des clubs.',
        'Ce sont des assemblees vivantes de citoyens, concues pour monter en puissance, decider et agir.',
        'Une Chambre par circonscription. Reliees a l echelle du pays.',
      ],
      back: 'Retour a la mise en oeuvre',
    },
  })

  return (
    <div className="policy-detail governance-page">
      <section className="policy-detail__panel governance-page__hero">
        <div className="technology-ai-page__hero-grid">
          <div>
            <p className="eyebrow">{content.eyebrow}</p>
            <h1 className="policy-detail__title">{content.title}</h1>
          </div>
        </div>
      </section>

      <section className="policy-foundation governance-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">{content.objectiveTitle}</h2>
          </div>
        </div>
        <div className="technology-ai-page__panel governance-page__full-panel">
          <p className="policy-detail__summary">{content.objective}</p>
        </div>
      </section>

      <section className="policy-foundation governance-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">{content.whatTitle}</h2>
          </div>
        </div>
        {content.whatIntro.map((paragraph) => (
          <p key={paragraph} className="policy-detail__summary">{paragraph}</p>
        ))}
        <div className="technology-ai-page__panel governance-page__full-panel" style={{ marginTop: '1.5rem' }}>
          <p className="policy-detail__summary">{content.whatClosing}</p>
        </div>
      </section>

      <section className="policy-foundation governance-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">{content.whyTitle}</h2>
          </div>
        </div>
        <div className="technology-ai-page__split-grid">
          <div className="technology-ai-page__panel">
            <p className="policy-detail__summary">{content.whyIntro}</p>
            <div className="founding-principles-page__list technology-ai-page__list">
              {content.whyPoints.map((point) => (
                <p key={point} className="policy-card__description founding-principles-page__item">{point}</p>
              ))}
            </div>
          </div>

          <div className="technology-ai-page__panel technology-ai-page__panel--accent">
            <p className="policy-detail__summary">{content.solveIntro}</p>
            <div className="founding-principles-page__list technology-ai-page__list">
              {content.solvePoints.map((point) => (
                <p key={point} className="policy-card__description founding-principles-page__item">{point}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="policy-foundation governance-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">{content.structureTitle}</h2>
          </div>
          <p className="section-copy">{content.structureIntro}</p>
        </div>
        <div className="policy-grid governance-page__grid">
          {content.structure.map((item) => (
            <article key={item.number} className="policy-card technology-ai-page__card">
              <p className="policy-card__number">{item.number}</p>
              <h3 className="policy-card__title">{item.title}</h3>
              <p className="policy-card__description">{item.intro}</p>
              <div className="founding-principles-page__list technology-ai-page__list" style={{ marginTop: '1rem' }}>
                {item.points.map((point) => (
                  <p key={point} className="policy-card__description founding-principles-page__item">{point}</p>
                ))}
              </div>
              <p className="technology-ai-page__card-line governance-page__card-line--statement" style={{ marginTop: '1rem' }}>
                {item.roleTitle}: {item.role}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="policy-foundation governance-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">{content.operatesTitle}</h2>
          </div>
          <p className="section-copy">{content.operatesIntro}</p>
        </div>
        <div className="policy-grid governance-page__grid">
          {content.operates.map((item) => (
            <article key={item.title} className="policy-card technology-ai-page__card">
              <h3 className="policy-card__title">{item.title}</h3>
              <div className="founding-principles-page__list technology-ai-page__list" style={{ marginTop: '1rem' }}>
                {item.points.map((point) => (
                  <p key={point} className="policy-card__description founding-principles-page__item">{point}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="policy-foundation governance-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">{content.scaleTitle}</h2>
          </div>
        </div>
        <div className="technology-ai-page__split-grid">
          <div className="technology-ai-page__panel">
            <p className="policy-detail__summary">{content.scaleIntro}</p>
            <div className="founding-principles-page__list technology-ai-page__list">
              {content.scalePoints.map((point) => (
                <p key={point} className="policy-card__description founding-principles-page__item">{point}</p>
              ))}
            </div>
          </div>
          <div className="technology-ai-page__panel technology-ai-page__panel--accent">
            <p className="policy-detail__summary">{content.scaleClosingIntro}</p>
            <div className="founding-principles-page__list technology-ai-page__list">
              {content.scaleClosingPoints.map((point) => (
                <p key={point} className="policy-card__description founding-principles-page__item">{point}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="policy-foundation governance-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">{content.relationshipTitle}</h2>
          </div>
        </div>
        <div className="technology-ai-page__split-grid">
          <div className="technology-ai-page__panel">
            <p className="policy-detail__summary">{content.relationshipIntro}</p>
            <div className="founding-principles-page__list technology-ai-page__list">
              {content.relationshipPoints.map((point) => (
                <p key={point} className="policy-card__description founding-principles-page__item">{point}</p>
              ))}
            </div>
          </div>
          <div className="technology-ai-page__panel technology-ai-page__panel--accent">
            <p className="policy-detail__summary">{content.electedIntro}</p>
            <div className="founding-principles-page__list technology-ai-page__list">
              {content.electedPoints.map((point) => (
                <p key={point} className="policy-card__description founding-principles-page__item">{point}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="policy-foundation governance-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">{content.replacesTitle}</h2>
          </div>
          <p className="section-copy">{content.replacesIntro}</p>
        </div>
        <div className="economic-detail__shift-grid">
          <article className="economic-detail__shift-card">
            <p className="economic-detail__shift-label">{content.traditionalLabel}</p>
            {content.comparison.map((item) => (
              <p key={item.traditional} className="economic-detail__shift-line">{item.traditional}</p>
            ))}
          </article>
          <article className="economic-detail__shift-card economic-detail__shift-card--to">
            <p className="economic-detail__shift-label">{content.civilLabel}</p>
            {content.comparison.map((item) => (
              <p key={item.civil} className="economic-detail__shift-line">{item.civil}</p>
            ))}
          </article>
        </div>
      </section>

      <section className="policy-foundation governance-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">{content.mattersTitle}</h2>
          </div>
        </div>
        <p className="policy-detail__summary">{content.mattersIntro}</p>
        <div className="technology-ai-page__split-grid" style={{ marginTop: '1.5rem' }}>
          <div className="technology-ai-page__panel">
            <p className="policy-detail__summary">{content.mattersWeakIntro}</p>
            <div className="founding-principles-page__list technology-ai-page__list">
              {content.mattersWeakPoints.map((point) => (
                <p key={point} className="policy-card__description founding-principles-page__item">{point}</p>
              ))}
            </div>
          </div>
          <div className="technology-ai-page__panel technology-ai-page__panel--accent">
            <p className="policy-detail__summary">{content.mattersStrongIntro}</p>
            <div className="founding-principles-page__list technology-ai-page__list">
              {content.mattersStrongPoints.map((point) => (
                <p key={point} className="policy-card__description founding-principles-page__item">{point}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="policy-foundation governance-page__section governance-page__closing">
        <div className="technology-ai-page__panel governance-page__full-panel">
          <h2 className="section-title">{content.closingTitle}</h2>
          {content.closing.map((paragraph) => (
            <p key={paragraph} className="policy-detail__summary">{paragraph}</p>
          ))}
        </div>
        <div className="policy-detail__actions">
          <Link to="/platform#platform-implementation" className="button button--secondary">
            {content.back}
          </Link>
        </div>
      </section>
    </div>
  )
}