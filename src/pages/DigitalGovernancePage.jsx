import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { localizeByLanguage } from '../lib/locale'

export default function DigitalGovernancePage() {
  const { i18n } = useTranslation()
  const content = localizeByLanguage(i18n, {
    en: {
      eyebrow: 'Platform / Implementation / Digital Governance System',
      title: 'Digital Governance System',
      objectiveTitle: 'Objective',
      objective:
        'Establish a secure, transparent, and scalable system that enables citizens to participate directly in decision-making within their riding.',
      whatTitle: 'What is Digital Governance',
      whatIntro: [
        'Digital governance uses modern technology to enable citizens to participate in political processes beyond traditional voting cycles.',
        'It builds on the concept of digital democracy, where information and communication technologies are used to enhance participation, transparency, and decision-making.',
        'Civil Citizens applies this approach at the local riding level, transforming governance into a continuous, accessible process.',
      ],
      mattersTitle: 'Why It Matters',
      mattersIntro: 'Canada faces growing challenges in democratic engagement:',
      mattersPoints: [
        'Participation is limited to infrequent elections',
        'Trust in institutions is declining',
        'Citizens expect modern, digital interaction with government',
      ],
      mattersCopy:
        'Surveys show strong demand for digital public services, but also highlight concerns around trust, usability, and transparency.',
      mattersClosing:
        'At the same time, open participation and transparency are widely recognized as essential to a strong democracy. Civil s digital governance system is designed to meet both needs: increase participation and rebuild trust through transparency.',
      principlesTitle: 'Core Principles',
      principles: [
        {
          number: '1',
          title: 'Transparency by Default',
          intro: 'All decisions, proposals, and financial activity are visible to members.',
          detail:
            'This reflects the principle of radical transparency, where systems are designed to make information openly accessible rather than hidden.',
        },
        {
          number: '2',
          title: 'Participation at Scale',
          intro: 'Citizens are not limited to voting every few years.',
          points: [
            'Continuous access to proposals',
            'Real-time voting and feedback',
            'Open discussion across the riding',
          ],
        },
        {
          number: '3',
          title: 'Security and Integrity',
          intro: 'Digital governance must be secure.',
          points: [
            'Identity verification for participants',
            'Protection against fraud and manipulation',
            'Awareness of cyber threats targeting democratic systems',
          ],
        },
        {
          number: '4',
          title: 'Citizen Control',
          intro: 'The system is designed to empower citizens, not replace them.',
          detail:
            'Civil explicitly avoids centralized or automated control models that risk manipulation or overreach.',
        },
      ],
      deliversTitle: 'How Civil Delivers',
      delivers: [
        {
          number: '1',
          title: 'Proposal Engine',
          intro: 'Members can submit initiatives directly within their Chamber of Citizens.',
          points: [
            'Visible to all members',
            'Structured discussion and feedback',
            'Moves to vote within defined timelines',
          ],
        },
        {
          number: '2',
          title: 'Voting System',
          intro: 'Citizens vote on initiatives and proposals, budget allocations, candidate selection, and strategic direction.',
          points: ['Secure', 'Transparent', 'Verifiable'],
        },
        {
          number: '3',
          title: 'Budget Transparency System',
          intro: 'All financial activity is visible in real time.',
          points: [
            'Funds tracked within Civil Wallet',
            'Spending proposals publicly reviewed',
            'Member approval required for allocation',
          ],
        },
        {
          number: '4',
          title: 'Identity and Verification',
          intro: 'Participation is tied to real individuals within a riding.',
          points: [
            'Prevents duplicate or fake participation',
            'Ensures local relevance of decisions',
            'Maintains system integrity',
          ],
        },
        {
          number: '5',
          title: 'Continuous Feedback Loop',
          intro: 'Governance becomes ongoing, not periodic.',
          points: [
            'Members provide feedback at any time',
            'Representatives remain connected to their riding',
            'Decisions evolve based on real input',
          ],
        },
      ],
      balanceTitle: 'Balancing Innovation with Responsibility',
      balanceIntro: 'Digital governance creates new opportunities, but also risks.',
      balanceCopy:
        'Globally, systems that misuse technology can lead to manipulation, misinformation, or centralized control.',
      balanceClosingIntro: 'Civil is designed to avoid these outcomes by:',
      balancePoints: [
        'Keeping decision-making with citizens',
        'Maintaining transparency at every level',
        'Ensuring accountability through visibility',
        'Building systems that support, not replace, human judgment',
      ],
      replacesTitle: 'What This Replaces',
      traditionalLabel: 'Traditional Governance',
      civilLabel: 'Civil Digital Governance',
      comparison: [
        { traditional: 'Infrequent elections', civil: 'Continuous participation' },
        { traditional: 'Closed meetings', civil: 'Open proposals and voting' },
        { traditional: 'Limited transparency', civil: 'Full visibility' },
        { traditional: 'Manual processes', civil: 'Real-time digital systems' },
        { traditional: 'Disconnected citizens', civil: 'Active local engagement' },
      ],
      whyNowTitle: 'Why This Matters',
      whyNowCopy:
        'Democracy does not fail all at once. It weakens when participation declines and trust erodes.',
      whyNowIntro: 'Digital governance provides a path forward by:',
      whyNowPoints: [
        'Expanding access to decision-making',
        'Increasing transparency and accountability',
        'Strengthening trust between citizens and leadership',
        'Making governance responsive to real needs',
      ],
      closingTitle: 'Closing Statement',
      closing: [
        'Civil s Digital Governance System transforms how decisions are made.',
        'It replaces delay with immediacy.',
        'It replaces opacity with transparency.',
        'It replaces exclusion with participation.',
        'Most importantly, it ensures that governance remains where it belongs: in the hands of citizens.',
      ],
      back: 'Back to Implementation',
    },
    fr: {
      eyebrow: 'Plateforme / Mise en oeuvre / Systeme de gouvernance numerique',
      title: 'Systeme de gouvernance numerique',
      objectiveTitle: 'Objectif',
      objective:
        'Etablir un systeme sur, transparent et evolutif qui permet aux citoyens de participer directement a la prise de decision dans leur circonscription.',
      whatTitle: 'Qu est-ce que la gouvernance numerique',
      whatIntro: [
        'La gouvernance numerique utilise les technologies modernes pour permettre aux citoyens de participer aux processus politiques au-dela des cycles de vote traditionnels.',
        'Elle s appuie sur le concept de democratie numerique, ou les technologies de l information et de la communication servent a renforcer la participation, la transparence et la prise de decision.',
        'Civil Citizens applique cette approche au niveau local de la circonscription, transformant la gouvernance en processus continu et accessible.',
      ],
      mattersTitle: 'Pourquoi cela compte',
      mattersIntro: 'Le Canada fait face a des difficultes croissantes en matiere d engagement democratique :',
      mattersPoints: [
        'La participation est limitee a des elections peu frequentes',
        'La confiance envers les institutions diminue',
        'Les citoyens attendent une interaction gouvernementale moderne et numerique',
      ],
      mattersCopy:
        'Les sondages montrent une forte demande pour des services publics numeriques, mais soulignent aussi des inquietudes quant a la confiance, a l utilisabilite et a la transparence.',
      mattersClosing:
        'En meme temps, la participation ouverte et la transparence sont largement reconnues comme essentielles a une democratie forte. Le systeme de gouvernance numerique de Civil est concu pour repondre a ces deux besoins : augmenter la participation et reconstruire la confiance par la transparence.',
      principlesTitle: 'Principes de base',
      principles: [
        {
          number: '1',
          title: 'Transparence par defaut',
          intro: 'Toutes les decisions, propositions et activites financieres sont visibles pour les membres.',
          detail:
            'Cela reflete le principe de transparence radicale, ou les systemes sont concus pour rendre l information accessible plutot que cachee.',
        },
        {
          number: '2',
          title: 'Participation a grande echelle',
          intro: 'Les citoyens ne sont pas limites a voter tous les quelques ans.',
          points: [
            'Acces continu aux propositions',
            'Vote et retroaction en temps reel',
            'Discussion ouverte dans toute la circonscription',
          ],
        },
        {
          number: '3',
          title: 'Securite et integrite',
          intro: 'La gouvernance numerique doit etre securisee.',
          points: [
            'Verification d identite des participants',
            'Protection contre la fraude et la manipulation',
            'Conscience des menaces cyber visant les systemes democratiques',
          ],
        },
        {
          number: '4',
          title: 'Controle citoyen',
          intro: 'Le systeme est concu pour donner du pouvoir aux citoyens, non pour les remplacer.',
          detail:
            'Civil evite explicitement les modeles de controle centralise ou automatise qui risquent la manipulation ou les exces.',
        },
      ],
      deliversTitle: 'Comment Civil le rend possible',
      delivers: [
        {
          number: '1',
          title: 'Moteur de propositions',
          intro: 'Les membres peuvent soumettre directement des initiatives dans leur Chambre de citoyens.',
          points: [
            'Visible a tous les membres',
            'Discussion structuree et retroaction',
            'Passe au vote dans des delais definis',
          ],
        },
        {
          number: '2',
          title: 'Systeme de vote',
          intro: 'Les citoyens votent sur les initiatives et propositions, les allocations budgetaires, la selection des candidats et la direction strategique.',
          points: ['Securise', 'Transparent', 'Verifiable'],
        },
        {
          number: '3',
          title: 'Systeme de transparence budgetaire',
          intro: 'Toute l activite financiere est visible en temps reel.',
          points: [
            'Fonds suivis dans le Portefeuille Civil',
            'Propositions de depenses revisees publiquement',
            'Approbation des membres requise pour l allocation',
          ],
        },
        {
          number: '4',
          title: 'Identite et verification',
          intro: 'La participation est liee a de vraies personnes dans une circonscription.',
          points: [
            'Empeche la participation dupliquee ou fictive',
            'Assure la pertinence locale des decisions',
            'Maintient l integrite du systeme',
          ],
        },
        {
          number: '5',
          title: 'Boucle de retroaction continue',
          intro: 'La gouvernance devient continue et non periodique.',
          points: [
            'Les membres peuvent donner leur avis a tout moment',
            'Les representants restent connectes a leur circonscription',
            'Les decisions evoluent selon les commentaires reels',
          ],
        },
      ],
      balanceTitle: 'Equilibrer innovation et responsabilite',
      balanceIntro: 'La gouvernance numerique cree de nouvelles occasions, mais aussi des risques.',
      balanceCopy:
        'A l echelle mondiale, les systemes qui abusent de la technologie peuvent conduire a la manipulation, a la desinformation ou a un controle centralise.',
      balanceClosingIntro: 'Civil est concu pour eviter ces resultats en :',
      balancePoints: [
        'Gardant la prise de decision entre les mains des citoyens',
        'Maintenant la transparence a chaque niveau',
        'Assurant la responsabilite par la visibilite',
        'Construisant des systemes qui soutiennent le jugement humain sans le remplacer',
      ],
      replacesTitle: 'Ce que cela remplace',
      traditionalLabel: 'Gouvernance traditionnelle',
      civilLabel: 'Gouvernance numerique Civil',
      comparison: [
        { traditional: 'Elections peu frequentes', civil: 'Participation continue' },
        { traditional: 'Reunions fermees', civil: 'Propositions et votes ouverts' },
        { traditional: 'Transparence limitee', civil: 'Visibilite complete' },
        { traditional: 'Processus manuels', civil: 'Systemes numeriques en temps reel' },
        { traditional: 'Citoyens deconnectes', civil: 'Engagement local actif' },
      ],
      whyNowTitle: 'Pourquoi cela compte',
      whyNowCopy:
        'La democratie n echoue pas d un seul coup. Elle s affaiblit quand la participation baisse et que la confiance s erode.',
      whyNowIntro: 'La gouvernance numerique offre une voie de sortie en :',
      whyNowPoints: [
        'Elargissant l acces a la prise de decision',
        'Augmentant la transparence et la responsabilite',
        'Renforcant la confiance entre citoyens et leadership',
        'Rendant la gouvernance plus receptive aux besoins reels',
      ],
      closingTitle: 'Declaration finale',
      closing: [
        'Le systeme de gouvernance numerique de Civil transforme la facon dont les decisions sont prises.',
        'Il remplace le delai par l immediatete.',
        'Il remplace l opacite par la transparence.',
        'Il remplace l exclusion par la participation.',
        'Surtout, il garantit que la gouvernance demeure la ou elle doit etre : entre les mains des citoyens.',
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
      </section>

      <section className="policy-foundation governance-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">{content.mattersTitle}</h2>
          </div>
        </div>
        <div className="technology-ai-page__split-grid">
          <div className="technology-ai-page__panel">
            <p className="policy-detail__summary">{content.mattersIntro}</p>
            <div className="founding-principles-page__list technology-ai-page__list">
              {content.mattersPoints.map((point) => (
                <p key={point} className="policy-card__description founding-principles-page__item">{point}</p>
              ))}
            </div>
          </div>
          <div className="technology-ai-page__panel technology-ai-page__panel--accent">
            <p className="policy-detail__summary">{content.mattersCopy}</p>
            <p className="policy-detail__summary">{content.mattersClosing}</p>
          </div>
        </div>
      </section>

      <section className="policy-foundation governance-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">{content.principlesTitle}</h2>
          </div>
        </div>
        <div className="policy-grid governance-page__grid">
          {content.principles.map((item) => (
            <article key={item.number} className="policy-card technology-ai-page__card">
              <p className="policy-card__number">{item.number}</p>
              <h3 className="policy-card__title">{item.title}</h3>
              <p className="policy-card__description">{item.intro}</p>
              {item.points ? (
                <div className="founding-principles-page__list technology-ai-page__list" style={{ marginTop: '1rem' }}>
                  {item.points.map((point) => (
                    <p key={point} className="policy-card__description founding-principles-page__item">{point}</p>
                  ))}
                </div>
              ) : null}
              {item.detail ? (
                <p className="policy-detail__summary" style={{ marginTop: '1rem' }}>{item.detail}</p>
              ) : null}
            </article>
          ))}
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
            </article>
          ))}
        </div>
      </section>

      <section className="policy-foundation governance-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">{content.balanceTitle}</h2>
          </div>
        </div>
        <div className="technology-ai-page__panel governance-page__full-panel">
          <p className="policy-detail__summary">{content.balanceIntro}</p>
          <p className="policy-detail__summary">{content.balanceCopy}</p>
          <p className="policy-detail__summary">{content.balanceClosingIntro}</p>
          <div className="policy-aside__list technology-ai-page__outcomes">
            {content.balancePoints.map((point) => (
              <span key={point}>{point}</span>
            ))}
          </div>
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
          <h2 className="section-title">{content.whyNowTitle}</h2>
          <p className="policy-detail__summary">{content.whyNowCopy}</p>
          <p className="policy-detail__summary">{content.whyNowIntro}</p>
          <div className="policy-aside__list technology-ai-page__outcomes">
            {content.whyNowPoints.map((point) => (
              <span key={point}>{point}</span>
            ))}
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
