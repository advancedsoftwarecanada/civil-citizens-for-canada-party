import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { localizeByLanguage } from '../lib/locale'

export default function RestoringPowerPage() {
  const { i18n } = useTranslation()
  const content = localizeByLanguage(i18n, {
    en: {
      eyebrow: 'Platform / Implementation / Restoring Power to Citizens in Every Riding',
      title: 'Restoring Power to Citizens in Every Riding',
      objectiveTitle: 'Objective',
      objective:
        'Return control of local political decision-making to the citizens of each riding through transparent, scalable, and continuous participation.',
      problemTitle: 'The Problem',
      problemIntro: [
        'Canada s democratic system is built on local representation. Each riding elects a Member of Parliament to represent its citizens in Ottawa.',
        'However, in practice, local political participation has broken down.',
      ],
      edaIntro: 'Across the country, Electoral District Associations (EDAs) often:',
      edaPoints: [
        'Operate with very small groups of active members',
        'Limit access to new participants',
        'Lack transparency in financial and strategic decisions',
        'Prioritize internal politics over public engagement',
      ],
      createsIntro: 'This creates a system where:',
      createsPoints: [
        'A handful of individuals influence key decisions',
        'Strong contributors are filtered out',
        'Candidate selection becomes a popularity contest',
        'Citizens are disengaged between elections',
      ],
      researchTitle: 'What Democratic Research Keeps Showing',
      researchCopy:
        'Research and commentary on Canadian democracy consistently point to the same issue: healthy democracy requires ongoing citizen engagement, not just voting every few years. Today, that engagement is missing.',
      approachTitle: 'The Civil Approach',
      approachCopy:
        'Civil Citizens introduces a new model: every riding becomes a living, digital, citizen-powered governance system.',
      approachClosing:
        'Instead of relying on small, closed groups, Civil expands participation to thousands of verified members per district and enables continuous involvement in decision-making.',
      deliversTitle: 'How Civil Delivers',
      delivers: [
        {
          number: '1',
          title: 'Mass Participation at the Riding Level',
          intro: 'Each riding is supported by a Civil Chamber-a digital community of verified local members.',
          points: [
            'Target: 1,000+ active participants per riding',
            'Open access for all citizens',
            'No gatekeeping or insider barriers',
          ],
          resultTitle: 'Result',
          result: 'Power shifts from a small group to the broader public.',
        },
        {
          number: '2',
          title: 'Transparent Financial Control',
          intro: 'All riding-level funds are visible to members.',
          points: [
            'Contributions tracked in real time',
            'Spending proposals published openly',
            'Members vote on allocations',
          ],
          resultTitle: 'Result',
          result: 'No individual can block or control funds behind closed doors.',
        },
        {
          number: '3',
          title: 'Open Proposal System',
          intro: 'Any member can submit ideas or initiatives.',
          points: [
            'No approval hierarchy to participate',
            'Structured discussion and feedback',
            'Time-bound voting process',
          ],
          resultTitle: 'Result',
          result: 'Participation becomes immediate, not permission-based.',
        },
        {
          number: '4',
          title: 'Merit-Based Candidate Selection',
          intro: 'Candidates emerge from community contribution, not status or connections.',
          points: [
            'Measured participation within the riding',
            'Public evaluation and discussion',
            'Member-driven voting',
          ],
          resultTitle: 'Result',
          result: 'Leadership reflects actual contribution, not popularity.',
        },
        {
          number: '5',
          title: 'Continuous Accountability',
          intro: 'Representation does not end at election.',
          points: [
            'Ongoing communication between MP and riding',
            'Regular reporting and visibility into decisions',
            'Open feedback from constituents',
          ],
          resultTitle: 'Result',
          result: 'Elected officials remain accountable to the people who support them.',
        },
      ],
      changesTitle: 'What This Changes',
      traditionalLabel: 'Traditional System',
      civilLabel: 'Civil System',
      comparison: [
        { traditional: 'Dozens of insiders', civil: 'Thousands of participants' },
        { traditional: 'Closed decision-making', civil: 'Transparent voting' },
        { traditional: 'Gatekeepers control access', civil: 'Open participation' },
        { traditional: 'Popularity-driven candidates', civil: 'Merit-based selection' },
        { traditional: 'Engagement every few years', civil: 'Continuous involvement' },
      ],
      mattersTitle: 'Why This Matters',
      matters: [
        'Democratic institutions weaken when participation is low and control is concentrated.',
        'Canada has already recognized the need to strengthen democratic systems and protect public confidence in elections and governance.',
        'Civil goes further by addressing the root issue: citizens are not meaningfully involved in decision-making at the local level.',
      ],
      mattersClosingIntro: 'By restoring power within each riding, Civil:',
      mattersPoints: [
        'Rebuilds trust in democratic institutions',
        'Increases participation and accountability',
        'Produces stronger, more capable leadership',
        'Aligns representation with real community needs',
      ],
      closingTitle: 'Closing Statement',
      closing: [
        'Civil Citizens does not replace Canada s democratic structure.',
        'It strengthens it.',
        'By transforming each riding into a transparent, participatory system, Civil ensures that power flows from citizens, not from closed groups.',
        'One riding at a time. Across the entire country.',
      ],
      back: 'Back to Implementation',
    },
    fr: {
      eyebrow: 'Plateforme / Mise en oeuvre / Redonner le pouvoir aux citoyens dans chaque circonscription',
      title: 'Redonner le pouvoir aux citoyens dans chaque circonscription',
      objectiveTitle: 'Objectif',
      objective:
        'Redonner aux citoyens de chaque circonscription le controle de la prise de decision politique locale grace a une participation transparente, evolutive et continue.',
      problemTitle: 'Le probleme',
      problemIntro: [
        'Le systeme democratique canadien repose sur la representation locale. Chaque circonscription elit un depute pour representer ses citoyens a Ottawa.',
        'En pratique pourtant, la participation politique locale s est degradee.',
      ],
      edaIntro: 'Partout au pays, les associations de district electoral fonctionnent souvent ainsi :',
      edaPoints: [
        'Elles operent avec de tres petits groupes de membres actifs',
        'Elles limitent l acces aux nouveaux participants',
        'Elles manquent de transparence dans les decisions financieres et strategiques',
        'Elles priorisent la politique interne plutot que l engagement public',
      ],
      createsIntro: 'Cela cree un systeme ou :',
      createsPoints: [
        'Une poignee d individus influence les decisions cles',
        'Les contributeurs solides sont filtres',
        'La selection des candidats devient un concours de popularite',
        'Les citoyens sont desengages entre les elections',
      ],
      researchTitle: 'Ce que la recherche democratique continue de montrer',
      researchCopy:
        'Les recherches et commentaires sur la democratie canadienne convergent sur le meme point : une democratie saine exige une participation citoyenne continue, et non seulement un vote tous les quelques ans. Aujourd hui, cette participation manque.',
      approachTitle: 'L approche Civil',
      approachCopy:
        'Civil Citizens introduit un nouveau modele : chaque circonscription devient un systeme vivant, numerique et alimente par les citoyens.',
      approachClosing:
        'Au lieu de s appuyer sur de petits groupes fermes, Civil elargit la participation a des milliers de membres verifies par district et rend l implication continue dans la prise de decision possible.',
      deliversTitle: 'Comment Civil le rend possible',
      delivers: [
        {
          number: '1',
          title: 'Participation de masse au niveau de la circonscription',
          intro: 'Chaque circonscription est soutenue par une Chambre Civile, une communaute numerique de membres locaux verifies.',
          points: [
            'Objectif : 1 000+ participants actifs par circonscription',
            'Acces ouvert a tous les citoyens',
            'Aucun filtrage ni barriere d initie',
          ],
          resultTitle: 'Resultat',
          result: 'Le pouvoir passe d un petit groupe au public au sens large.',
        },
        {
          number: '2',
          title: 'Controle financier transparent',
          intro: 'Tous les fonds au niveau de la circonscription sont visibles pour les membres.',
          points: [
            'Contributions suivies en temps reel',
            'Propositions de depenses publiees ouvertement',
            'Les membres votent sur les allocations',
          ],
          resultTitle: 'Resultat',
          result: 'Aucune personne ne peut bloquer ou controler les fonds derriere des portes closes.',
        },
        {
          number: '3',
          title: 'Systeme ouvert de propositions',
          intro: 'Tout membre peut soumettre des idees ou des initiatives.',
          points: [
            'Aucune hierarchie d approbation pour participer',
            'Discussion structuree et retroaction',
            'Processus de vote limite dans le temps',
          ],
          resultTitle: 'Resultat',
          result: 'La participation devient immediate, et non soumise a permission.',
        },
        {
          number: '4',
          title: 'Selection des candidats fondee sur le merite',
          intro: 'Les candidats emergent de la contribution communautaire, non du statut ou des relations.',
          points: [
            'Participation mesuree dans la circonscription',
            'Evaluation et discussion publiques',
            'Vote mene par les membres',
          ],
          resultTitle: 'Resultat',
          result: 'Le leadership reflete la contribution reelle, non la popularite.',
        },
        {
          number: '5',
          title: 'Responsabilite continue',
          intro: 'La representation ne s arrete pas a l election.',
          points: [
            'Communication continue entre le depute et la circonscription',
            'Rapports reguliers et visibilite sur les decisions',
            'Retroaction ouverte des citoyens',
          ],
          resultTitle: 'Resultat',
          result: 'Les elus demeurent responsables devant les personnes qui les soutiennent.',
        },
      ],
      changesTitle: 'Ce que cela change',
      traditionalLabel: 'Systeme traditionnel',
      civilLabel: 'Systeme Civil',
      comparison: [
        { traditional: 'Des dizaines d inities', civil: 'Des milliers de participants' },
        { traditional: 'Decision fermee', civil: 'Vote transparent' },
        { traditional: 'Des gardiens controlent l acces', civil: 'Participation ouverte' },
        { traditional: 'Candidats tires par la popularite', civil: 'Selection par le merite' },
        { traditional: 'Engagement tous les quelques ans', civil: 'Implication continue' },
      ],
      mattersTitle: 'Pourquoi cela compte',
      matters: [
        'Les institutions democratiques s affaiblissent quand la participation est faible et que le controle est concentre.',
        'Le Canada a deja reconnu la necessite de renforcer les systemes democratiques et de proteger la confiance du public envers les elections et la gouvernance.',
        'Civil va plus loin en traitant le probleme a la racine : les citoyens ne sont pas reellement impliques dans la prise de decision au niveau local.',
      ],
      mattersClosingIntro: 'En restaurant le pouvoir dans chaque circonscription, Civil :',
      mattersPoints: [
        'Reconstruit la confiance envers les institutions democratiques',
        'Augmente la participation et la responsabilite',
        'Produit un leadership plus fort et plus capable',
        'Aligne la representation sur les besoins reels de la communaute',
      ],
      closingTitle: 'Declaration finale',
      closing: [
        'Civil Citizens ne remplace pas la structure democratique du Canada.',
        'Il la renforce.',
        'En transformant chaque circonscription en systeme transparent et participatif, Civil veille a ce que le pouvoir vienne des citoyens et non de groupes fermes.',
        'Une circonscription a la fois. A l echelle du pays.',
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
            <p className="policy-detail__summary">{content.edaIntro}</p>
            <div className="founding-principles-page__list technology-ai-page__list">
              {content.edaPoints.map((point) => (
                <p key={point} className="policy-card__description founding-principles-page__item">{point}</p>
              ))}
            </div>
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
        <div className="technology-ai-page__panel governance-page__full-panel">
          <h2 className="section-title">{content.researchTitle}</h2>
          <p className="policy-detail__summary">{content.researchCopy}</p>
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
            <h2 className="section-title">{content.changesTitle}</h2>
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
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">{content.mattersTitle}</h2>
          </div>
        </div>
        {content.matters.map((paragraph) => (
          <p key={paragraph} className="policy-detail__summary">{paragraph}</p>
        ))}
        <div className="technology-ai-page__panel governance-page__full-panel" style={{ marginTop: '1.5rem' }}>
          <p className="policy-detail__summary">{content.mattersClosingIntro}</p>
          <div className="policy-aside__list technology-ai-page__outcomes">
            {content.mattersPoints.map((point) => (
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