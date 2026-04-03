import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { localizeByLanguage } from '../lib/locale'

export default function CandidateSelectionPage() {
  const { i18n } = useTranslation()
  const content = localizeByLanguage(i18n, {
    en: {
      eyebrow: 'Platform / Implementation / Candidate Selection System',
      title: 'Candidate Selection System',
      objectiveTitle: 'Objective',
      objective:
        'Ensure that candidates are selected based on merit, contribution, and community support through a transparent, citizen-driven process within each riding.',
      problemTitle: 'The Problem',
      problemIntro: [
        'In Canada, most candidates are selected through internal party nomination contests.',
        'These are typically run by local riding associations and involve party members voting to choose a candidate.',
        'While this process is intended to be democratic, in practice it often leads to:',
      ],
      problemPoints: [
        'Limited participation from a small group of members',
        'Influence from internal networks and party structures',
        'Gatekeeping by local executives or national committees',
        'Candidates selected based on popularity or connections rather than contribution',
      ],
      problemClosing:
        'In some cases, party leadership or committees can override or control the nomination process entirely.',
      createsIntro: 'This creates a system where:',
      createsPoints: [
        'Strong local contributors are overlooked',
        'New participants face barriers to entry',
        'Candidate quality varies widely',
        'Citizens have little influence over who represents them',
      ],
      approachTitle: 'The Civil Approach',
      approachCopy:
        'Civil Citizens replaces closed nomination systems with a continuous, transparent, merit-based candidate development and selection process.',
      approachClosing:
        'Candidates are not chosen in a single event. They emerge over time through participation, contribution, and community trust within each Chamber of Citizens.',
      deliversTitle: 'How Civil Delivers',
      delivers: [
        {
          number: '1',
          title: 'Open Candidate Pathway',
          intro: 'Any verified member of a Chamber of Citizens can become a potential candidate.',
          points: [
            'No insider approval required',
            'No closed application process',
            'No reliance on party connections',
          ],
          resultTitle: 'Result',
          result: 'Access to leadership is open to all citizens.',
        },
        {
          number: '2',
          title: 'Contribution-Based Evaluation',
          intro: 'Candidates are evaluated based on real activity within their riding.',
          points: [
            'Participation in proposals and initiatives',
            'Leadership in community efforts',
            'Engagement with members',
            'Demonstrated alignment with platform principles',
          ],
          resultTitle: 'Result',
          result: 'Leadership is earned through action, not status.',
        },
        {
          number: '3',
          title: 'Transparent Candidate Profiles',
          intro: 'Each potential candidate has a visible profile within the Chamber.',
          points: [
            'Contributions and activity',
            'Positions on key issues',
            'Community feedback and support',
          ],
          resultTitle: 'Result',
          result: 'Voters make informed decisions based on real data.',
        },
        {
          number: '4',
          title: 'Community-Driven Voting',
          intro: 'Candidate selection is determined through member voting within the Chamber of Citizens.',
          points: [
            'Open participation from verified local members',
            'Structured voting process',
            'Option for ranked or multi-round selection',
          ],
          resultTitle: 'Result',
          result: 'Candidates reflect the will of the community, not a small group.',
        },
        {
          number: '5',
          title: 'Continuous Selection (Not One-Time Events)',
          intro: 'Traditional nomination contests happen once. Civil s system is ongoing.',
          points: [
            'Candidates build support over time',
            'New candidates can emerge at any stage',
            'Performance and engagement remain visible',
          ],
          resultTitle: 'Result',
          result: 'Leadership evolves with the community.',
        },
        {
          number: '6',
          title: 'Accountability Before Election',
          intro: 'Candidates are accountable before they are elected.',
          points: [
            'Their history is visible',
            'Their actions are trackable',
            'Their support is measurable',
          ],
          resultTitle: 'Result',
          result: 'Voters are choosing proven contributors, not unknowns.',
        },
      ],
      replacesTitle: 'What This Replaces',
      traditionalLabel: 'Traditional Nomination System',
      civilLabel: 'Civil Candidate Selection',
      comparison: [
        { traditional: 'Closed nomination contests', civil: 'Open participation' },
        { traditional: 'Small voting groups', civil: 'Thousands of members' },
        { traditional: 'Insider influence', civil: 'Transparent evaluation' },
        { traditional: 'One-time selection events', civil: 'Continuous process' },
        { traditional: 'Popularity-driven outcomes', civil: 'Merit-based selection' },
      ],
      mattersTitle: 'Why This Matters',
      mattersIntro: 'Candidate selection is one of the most important functions in a democracy.',
      mattersDefinesIntro: 'It determines:',
      mattersDefinesPoints: [
        'Who appears on the ballot',
        'Who represents citizens',
        'Who ultimately governs',
      ],
      mattersClosing:
        'Yet most citizens have little involvement in this process. Civil changes that by expanding participation, increasing transparency, aligning leadership with real contribution, and ensuring candidates reflect their communities.',
      closingTitle: 'Closing Statement',
      closing: [
        'Civil Citizens does not rely on backroom decisions or internal contests.',
        'It builds leadership from the ground up through participation, contribution, and trust.',
        'Candidates are not chosen.',
        'They are proven.',
      ],
      back: 'Back to Implementation',
    },
    fr: {
      eyebrow: 'Plateforme / Mise en oeuvre / Systeme de selection des candidats',
      title: 'Systeme de selection des candidats',
      objectiveTitle: 'Objectif',
      objective:
        'Veiller a ce que les candidats soient choisis selon le merite, la contribution et l appui de la communaute, par un processus transparent et dirige par les citoyens dans chaque circonscription.',
      problemTitle: 'Le probleme',
      problemIntro: [
        'Au Canada, la plupart des candidats sont choisis par des concours internes de nomination partisane.',
        'Ces processus sont generalement administres par les associations locales de circonscription et reposent sur un vote des membres du parti pour choisir un candidat.',
        'Bien que ce mecanisme se veuille democratique, en pratique il conduit souvent a :',
      ],
      problemPoints: [
        'Une participation limitee d un petit groupe de membres',
        'Une influence des reseaux internes et des structures partisanes',
        'Du gatekeeping par les executifs locaux ou les comites nationaux',
        'Des candidats choisis selon la popularite ou les relations plutot que la contribution',
      ],
      problemClosing:
        'Dans certains cas, la direction du parti ou des comites peut meme annuler ou controler entierement le processus de nomination.',
      createsIntro: 'Cela cree un systeme ou :',
      createsPoints: [
        'Des contributeurs locaux solides sont ignores',
        'Les nouveaux participants font face a des barrieres d entree',
        'La qualite des candidats varie fortement',
        'Les citoyens ont peu d influence sur la personne qui les represente',
      ],
      approachTitle: 'L approche Civil',
      approachCopy:
        'Civil Citizens remplace les systemes de nomination fermes par un processus continu, transparent et fonde sur le merite pour le developpement et la selection des candidats.',
      approachClosing:
        'Les candidats ne sont pas choisis lors d un seul evenement. Ils emergent avec le temps par la participation, la contribution et la confiance communautaire au sein de chaque Chambre de citoyens.',
      deliversTitle: 'Comment Civil le rend possible',
      delivers: [
        {
          number: '1',
          title: 'Parcours candidat ouvert',
          intro: 'Tout membre verifie d une Chambre de citoyens peut devenir un candidat potentiel.',
          points: [
            'Aucune approbation interne requise',
            'Aucun processus de candidature ferme',
            'Aucune dependance aux reseaux partisans',
          ],
          resultTitle: 'Resultat',
          result: 'L acces au leadership est ouvert a tous les citoyens.',
        },
        {
          number: '2',
          title: 'Evaluation fondee sur la contribution',
          intro: 'Les candidats sont evalues selon leur activite reelle dans leur circonscription.',
          points: [
            'Participation aux propositions et initiatives',
            'Leadership dans les efforts communautaires',
            'Engagement avec les membres',
            'Alignement demontre avec les principes de la plateforme',
          ],
          resultTitle: 'Resultat',
          result: 'Le leadership se gagne par l action, non par le statut.',
        },
        {
          number: '3',
          title: 'Profils candidats transparents',
          intro: 'Chaque candidat potentiel dispose d un profil visible dans la Chambre.',
          points: [
            'Contributions et activite',
            'Positions sur les enjeux cles',
            'Retroaction et soutien de la communaute',
          ],
          resultTitle: 'Resultat',
          result: 'Les electeurs prennent des decisions eclairees a partir de donnees reelles.',
        },
        {
          number: '4',
          title: 'Vote dirige par la communaute',
          intro: 'La selection des candidats est determinee par le vote des membres au sein de la Chambre de citoyens.',
          points: [
            'Participation ouverte aux membres locaux verifies',
            'Processus de vote structure',
            'Possibilite de selection classee ou a plusieurs tours',
          ],
          resultTitle: 'Resultat',
          result: 'Les candidats refletent la volonte de la communaute, non d un petit groupe.',
        },
        {
          number: '5',
          title: 'Selection continue (et non evenement ponctuel)',
          intro: 'Les concours de nomination traditionnels arrivent une seule fois. Le systeme Civil est continu.',
          points: [
            'Les candidats construisent leur soutien avec le temps',
            'De nouveaux candidats peuvent emerger a toute etape',
            'La performance et l engagement demeurent visibles',
          ],
          resultTitle: 'Resultat',
          result: 'Le leadership evolue avec la communaute.',
        },
        {
          number: '6',
          title: 'Responsabilite avant l election',
          intro: 'Les candidats sont responsables avant meme d etre elus.',
          points: [
            'Leur historique est visible',
            'Leurs actions sont suivies',
            'Leur soutien est mesurable',
          ],
          resultTitle: 'Resultat',
          result: 'Les electeurs choisissent des contributeurs prouves, non des inconnus.',
        },
      ],
      replacesTitle: 'Ce que cela remplace',
      traditionalLabel: 'Systeme traditionnel de nomination',
      civilLabel: 'Selection des candidats Civil',
      comparison: [
        { traditional: 'Concours de nomination fermes', civil: 'Participation ouverte' },
        { traditional: 'Petits groupes de vote', civil: 'Des milliers de membres' },
        { traditional: 'Influence interne', civil: 'Evaluation transparente' },
        { traditional: 'Evenements uniques de selection', civil: 'Processus continu' },
        { traditional: 'Resultats guides par la popularite', civil: 'Selection par le merite' },
      ],
      mattersTitle: 'Pourquoi cela compte',
      mattersIntro: 'La selection des candidats est l une des fonctions les plus importantes d une democratie.',
      mattersDefinesIntro: 'Elle determine :',
      mattersDefinesPoints: [
        'Qui apparait sur le bulletin de vote',
        'Qui represente les citoyens',
        'Qui gouverne en definitive',
      ],
      mattersClosing:
        'Pourtant, la plupart des citoyens ont peu d implication dans ce processus. Civil change cela en elargissant la participation, en augmentant la transparence, en alignant le leadership sur la contribution reelle et en veillant a ce que les candidats refletent leur communaute.',
      closingTitle: 'Declaration finale',
      closing: [
        'Civil Citizens ne depend pas de decisions prises en coulisses ni de concours internes.',
        'Il construit le leadership a partir de la base par la participation, la contribution et la confiance.',
        'Les candidats ne sont pas choisis.',
        'Ils font leurs preuves.',
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
            <h2 className="section-title">{content.problemTitle}</h2>
          </div>
        </div>
        {content.problemIntro.map((paragraph) => (
          <p key={paragraph} className="policy-detail__summary">{paragraph}</p>
        ))}
        <div className="technology-ai-page__split-grid" style={{ marginTop: '1.5rem' }}>
          <div className="technology-ai-page__panel">
            <div className="founding-principles-page__list technology-ai-page__list">
              {content.problemPoints.map((point) => (
                <p key={point} className="policy-card__description founding-principles-page__item">{point}</p>
              ))}
            </div>
            <p className="policy-detail__summary">{content.problemClosing}</p>
          </div>
          <div className="technology-ai-page__panel technology-ai-page__panel--accent">
            <p className="policy-detail__summary">{content.createsIntro}</p>
            <div className="founding-principles-page__list technology-ai-page__list">
              {content.createsPoints.map((point) => (
                <p key={point} className="policy-card__description founding-principles-page__item">{point}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="policy-foundation governance-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">{content.approachTitle}</h2>
          </div>
        </div>
        <div className="technology-ai-page__panel governance-page__full-panel">
          <p className="policy-detail__summary">{content.approachCopy}</p>
          <p className="policy-detail__summary">{content.approachClosing}</p>
        </div>
      </section>

      <section className="policy-foundation governance-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">{content.deliversTitle}</h2>
          </div>
        </div>
        <div className="policy-grid governance-page__grid">
          {content.delivers.map((item) => (
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
                {item.resultTitle}: {item.result}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="policy-foundation governance-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">{content.replacesTitle}</h2>
          </div>
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
        <div className="technology-ai-page__panel governance-page__full-panel">
          <h2 className="section-title">{content.mattersTitle}</h2>
          <p className="policy-detail__summary">{content.mattersIntro}</p>
          <p className="policy-detail__summary">{content.mattersDefinesIntro}</p>
          <div className="policy-aside__list technology-ai-page__outcomes">
            {content.mattersDefinesPoints.map((point) => (
              <span key={point}>{point}</span>
            ))}
          </div>
          <p className="policy-detail__summary">{content.mattersClosing}</p>
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
