import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { localizeByLanguage } from '../lib/locale'

export default function CivilWalletFundingPage() {
  const { i18n } = useTranslation()
  const content = localizeByLanguage(i18n, {
    en: {
      eyebrow: 'Platform / Implementation / Civil Wallet & Funding Model',
      title: 'Civil Wallet & Funding Model',
      objectiveTitle: 'Objective',
      objective:
        'Create a transparent, secure, and citizen-controlled funding system that enables fair participation and eliminates financial gatekeeping in political and community decision-making.',
      problemTitle: 'The Problem',
      problemIntro:
        'Funding is one of the most powerful and least transparent parts of political systems.',
      todayTitle: 'Today',
      todayPoints: [
        'Financial decisions are often controlled by a small number of individuals',
        'Access to funds can be restricted or delayed',
        'Contributors have limited visibility into how money is used',
        'Trust is weakened by opacity and centralized control',
      ],
      problemCopy:
        'Governments are increasingly aware of risks in political financing, especially around traceability and transparency of funds.',
      shiftIntro: 'At the same time, Canadians are moving toward digital financial systems that prioritize:',
      shiftPoints: ['Accountability', 'Security', 'User control'],
      shiftClosing: 'But current political structures have not kept up.',
      approachTitle: 'The Civil Approach',
      approachCopy:
        'Civil introduces a shared, transparent digital wallet system controlled by citizens, not gatekeepers.',
      chamberIntro: 'Each Civil Chamber operates with its own Civil Wallet, where:',
      chamberPoints: ['Funds are visible', 'Decisions are voted on', 'Spending is transparent', 'Control is distributed'],
      deliversTitle: 'How Civil Delivers',
      delivers: [
        {
          number: '1',
          title: 'Transparent Fund Visibility',
          intro: 'All funds within a Civil Chamber are visible to its members.',
          points: [
            'Total funds available',
            'Incoming contributions',
            'Outgoing allocations',
            'Historical transactions',
          ],
          resultTitle: 'Result',
          result: 'No hidden accounts. No closed-door decisions.',
        },
        {
          number: '2',
          title: 'Citizen-Controlled Spending',
          intro: 'Funds are not controlled by a treasurer or executive.',
          points: [
            'Spending proposals are submitted publicly',
            'Members vote on allocations',
            'Approved funds are released',
          ],
          resultTitle: 'Result',
          result: 'No single person can block or control resources.',
        },
        {
          number: '3',
          title: 'Structured Contribution System',
          intro: 'Members and supporters can contribute directly to their riding.',
          points: [
            'Contributions recorded transparently',
            'Linked to specific initiatives or general funds',
            'Clear visibility into impact',
          ],
          resultTitle: 'Result',
          result: 'Funding becomes participatory, not transactional.',
        },
        {
          number: '4',
          title: 'Micro-Fee Model (Sustainable Infrastructure)',
          intro: 'Civil operates on a simple, predictable fee structure.',
          points: [
            '$0.50 for transactions up to $100',
            'Gradual increase',
            'Capped at $2.00 for transactions $500+',
          ],
          resultTitle: 'Result',
          result: 'No hidden percentages. No extraction from large donations. Sustainable platform growth.',
        },
        {
          number: '5',
          title: 'Secure Digital Infrastructure',
          intro: 'Modern digital wallets combine payment systems, identity verification, and secure data handling.',
          points: [
            'Security',
            'Privacy',
            'Interoperability',
          ],
          resultTitle: 'Result',
          result: 'Civil is designed around the principles expected of trusted Canadian digital wallet systems.',
        },
        {
          number: '6',
          title: 'Data Ownership and Control',
          intro: 'Users maintain control over their financial and participation data.',
          points: [
            'Supports data portability',
            'Empowers individuals',
            'Strengthens user control',
          ],
          resultTitle: 'Result',
          result: 'Citizens are not locked into systems. They control their participation.',
        },
      ],
      replacesTitle: 'What This Replaces',
      traditionalLabel: 'Traditional Model',
      civilLabel: 'Civil Wallet',
      comparison: [
        { traditional: 'Treasurer-controlled funds', civil: 'Member-controlled funds' },
        { traditional: 'Limited visibility', civil: 'Full transparency' },
        { traditional: 'Manual approvals', civil: 'Vote-based allocation' },
        { traditional: 'Centralized control', civil: 'Distributed participation' },
        { traditional: 'Delayed decision-making', civil: 'Real-time funding flow' },
      ],
      mattersTitle: 'Why This Matters',
      mattersIntro: 'Financial control shapes power.',
      whenTitle: 'When funding is',
      whenPoints: [
        'Centralized -> power concentrates',
        'Opaque -> trust declines',
        'Restricted -> participation drops',
      ],
      changeIntro: 'Civil changes this by ensuring:',
      changePoints: [
        'Funding is visible',
        'Decisions are collective',
        'Participation is open',
        'Trust is built through transparency',
      ],
      closingTitle: 'Closing Statement',
      closing: [
        'Civil Wallet transforms how money moves within a political system.',
        'It removes gatekeepers.',
        'It increases transparency.',
        'It enables participation.',
        'Most importantly, it ensures that financial power aligns with the people it is meant to serve: the citizens.',
      ],
      back: 'Back to Implementation',
    },
    fr: {
      eyebrow: 'Plateforme / Mise en oeuvre / Portefeuille Civil et modele de financement',
      title: 'Portefeuille Civil et modele de financement',
      objectiveTitle: 'Objectif',
      objective:
        'Creer un systeme de financement transparent, securise et controle par les citoyens qui permet une participation equitable et elimine le gatekeeping financier dans la prise de decision politique et communautaire.',
      problemTitle: 'Le probleme',
      problemIntro:
        'Le financement est l une des dimensions les plus puissantes et les moins transparentes des systemes politiques.',
      todayTitle: 'Aujourd hui',
      todayPoints: [
        'Les decisions financieres sont souvent controlees par un petit nombre de personnes',
        'L acces aux fonds peut etre restreint ou retarde',
        'Les contributeurs ont peu de visibilite sur l utilisation de l argent',
        'La confiance est affaiblie par l opacite et le controle centralise',
      ],
      problemCopy:
        'Les gouvernements sont de plus en plus conscients des risques lies au financement politique, notamment en ce qui concerne la tracabilite et la transparence des fonds.',
      shiftIntro: 'En meme temps, les Canadiens se tournent vers des systemes financiers numeriques qui priorisent :',
      shiftPoints: ['Responsabilite', 'Securite', 'Controle de l utilisateur'],
      shiftClosing: 'Mais les structures politiques actuelles n ont pas suivi.',
      approachTitle: 'L approche Civil',
      approachCopy:
        'Civil introduit un systeme de portefeuille numerique partage et transparent controle par les citoyens, et non par des gatekeepers.',
      chamberIntro: 'Chaque Chambre Civil fonctionne avec son propre Portefeuille Civil, ou :',
      chamberPoints: ['Les fonds sont visibles', 'Les decisions sont mises au vote', 'Les depenses sont transparentes', 'Le controle est distribue'],
      deliversTitle: 'Comment Civil le rend possible',
      delivers: [
        {
          number: '1',
          title: 'Visibilite transparente des fonds',
          intro: 'Tous les fonds d une Chambre Civil sont visibles par ses membres.',
          points: [
            'Total des fonds disponibles',
            'Contributions entrantes',
            'Allocations sortantes',
            'Historique des transactions',
          ],
          resultTitle: 'Resultat',
          result: 'Aucun compte cache. Aucune decision prise a huis clos.',
        },
        {
          number: '2',
          title: 'Depenses controlees par les citoyens',
          intro: 'Les fonds ne sont pas controles par un tresorier ou un executif.',
          points: [
            'Les propositions de depense sont soumises publiquement',
            'Les membres votent sur les allocations',
            'Les fonds approuves sont debloques',
          ],
          resultTitle: 'Resultat',
          result: 'Aucune personne seule ne peut bloquer ou controler les ressources.',
        },
        {
          number: '3',
          title: 'Systeme de contribution structure',
          intro: 'Les membres et les appuis peuvent contribuer directement a leur circonscription.',
          points: [
            'Contributions enregistrees de facon transparente',
            'Liees a des initiatives precises ou a des fonds generaux',
            'Visibilite claire sur l impact',
          ],
          resultTitle: 'Resultat',
          result: 'Le financement devient participatif, et non transactionnel.',
        },
        {
          number: '4',
          title: 'Modele a microfrais (infrastructure durable)',
          intro: 'Civil fonctionne avec une structure de frais simple et previsible.',
          points: [
            '0,50 $ pour les transactions jusqu a 100 $',
            'Augmentation graduelle',
            'Plafond de 2,00 $ pour les transactions de 500 $ et plus',
          ],
          resultTitle: 'Resultat',
          result: 'Aucun pourcentage cache. Aucune extraction sur les grosses contributions. Croissance durable de la plateforme.',
        },
        {
          number: '5',
          title: 'Infrastructure numerique securisee',
          intro: 'Les portefeuilles numeriques modernes reunissent systemes de paiement, verification d identite et gestion securisee des donnees.',
          points: [
            'Securite',
            'Vie privee',
            'Interopabilite',
          ],
          resultTitle: 'Resultat',
          result: 'Civil est concu autour des principes attendus des portefeuilles numeriques de confiance au Canada.',
        },
        {
          number: '6',
          title: 'Propriete et controle des donnees',
          intro: 'Les utilisateurs conservent le controle de leurs donnees financieres et de participation.',
          points: [
            'Soutient la portabilite des donnees',
            'Donne du pouvoir aux individus',
            'Renforce le controle de l utilisateur',
          ],
          resultTitle: 'Resultat',
          result: 'Les citoyens ne sont pas enfermes dans des systemes. Ils controlent leur participation.',
        },
      ],
      replacesTitle: 'Ce que cela remplace',
      traditionalLabel: 'Modele traditionnel',
      civilLabel: 'Portefeuille Civil',
      comparison: [
        { traditional: 'Fonds controles par un tresorier', civil: 'Fonds controles par les membres' },
        { traditional: 'Visibilite limitee', civil: 'Transparence complete' },
        { traditional: 'Approbations manuelles', civil: 'Allocation par vote' },
        { traditional: 'Controle centralise', civil: 'Participation distribuee' },
        { traditional: 'Prise de decision retardee', civil: 'Flux de financement en temps reel' },
      ],
      mattersTitle: 'Pourquoi cela compte',
      mattersIntro: 'Le controle financier faconne le pouvoir.',
      whenTitle: 'Quand le financement est',
      whenPoints: [
        'Centralise -> le pouvoir se concentre',
        'Opaque -> la confiance decline',
        'Restreint -> la participation baisse',
      ],
      changeIntro: 'Civil change cela en veillant a ce que :',
      changePoints: [
        'Le financement soit visible',
        'Les decisions soient collectives',
        'La participation soit ouverte',
        'La confiance soit construite par la transparence',
      ],
      closingTitle: 'Declaration finale',
      closing: [
        'Le Portefeuille Civil transforme la facon dont l argent circule dans un systeme politique.',
        'Il retire les gatekeepers.',
        'Il augmente la transparence.',
        'Il permet la participation.',
        'Plus important encore, il garantit que le pouvoir financier s aligne sur les personnes qu il doit servir : les citoyens.',
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
        <p className="policy-detail__summary">{content.problemIntro}</p>
        <div className="technology-ai-page__split-grid" style={{ marginTop: '1.5rem' }}>
          <div className="technology-ai-page__panel">
            <h3 className="policy-card__title">{content.todayTitle}</h3>
            <div className="founding-principles-page__list technology-ai-page__list" style={{ marginTop: '1rem' }}>
              {content.todayPoints.map((point) => (
                <p key={point} className="policy-card__description founding-principles-page__item">{point}</p>
              ))}
            </div>
            <p className="policy-detail__summary" style={{ marginTop: '1rem' }}>{content.problemCopy}</p>
          </div>
          <div className="technology-ai-page__panel technology-ai-page__panel--accent">
            <p className="policy-detail__summary">{content.shiftIntro}</p>
            <div className="policy-aside__list technology-ai-page__outcomes">
              {content.shiftPoints.map((point) => (
                <span key={point}>{point}</span>
              ))}
            </div>
            <p className="policy-detail__summary">{content.shiftClosing}</p>
          </div>
        </div>
      </section>

      <section className="policy-foundation governance-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">{content.approachTitle}</h2>
          </div>
        </div>
        <div className="technology-ai-page__split-grid">
          <div className="technology-ai-page__panel governance-page__full-panel">
            <p className="policy-detail__summary">{content.approachCopy}</p>
          </div>
          <div className="technology-ai-page__panel technology-ai-page__panel--accent">
            <p className="policy-detail__summary">{content.chamberIntro}</p>
            <div className="founding-principles-page__list technology-ai-page__list">
              {content.chamberPoints.map((point) => (
                <p key={point} className="policy-card__description founding-principles-page__item">{point}</p>
              ))}
            </div>
          </div>
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
          <p className="policy-detail__summary">{content.whenTitle}</p>
          <div className="founding-principles-page__list technology-ai-page__list">
            {content.whenPoints.map((point) => (
              <p key={point} className="policy-card__description founding-principles-page__item">{point}</p>
            ))}
          </div>
          <p className="policy-detail__summary">{content.changeIntro}</p>
          <div className="policy-aside__list technology-ai-page__outcomes">
            {content.changePoints.map((point) => (
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
