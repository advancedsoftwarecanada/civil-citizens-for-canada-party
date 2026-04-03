import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { localizeByLanguage } from '../lib/locale'

export default function MpAccountabilityPage() {
  const { i18n } = useTranslation()
  const content = localizeByLanguage(i18n, {
    en: {
      eyebrow: 'Platform / Implementation / MP Accountability System',
      title: 'MP Accountability System',
      objectiveTitle: 'Objective',
      objective:
        'Ensure that elected representatives remain continuously accountable to the citizens of their riding through transparency, communication, and measurable performance.',
      problemTitle: 'The Problem',
      problemIntro:
        'Canada s system is built on responsible government, where elected officials are accountable to Parliament and, ultimately, to the people.',
      expectedTitle: 'Members of Parliament are expected to',
      expectedPoints: [
        'Represent their constituents',
        'Participate in legislation',
        'Answer for their actions in Parliament',
      ],
      practiceIntro: 'In practice, however, accountability is limited:',
      practicePoints: [
        'Citizens vote once every few years',
        'MPs operate with limited ongoing feedback',
        'Communication between representatives and constituents is inconsistent',
        'Local organizations often have little influence after election',
      ],
      disconnectIntro: 'This creates a disconnect:',
      disconnectPoints: [
        'Citizens lose visibility',
        'Representatives lose direct feedback',
        'Accountability becomes delayed and indirect',
      ],
      approachTitle: 'The Civil Approach',
      approachCopy:
        'Civil introduces a model of continuous, citizen-driven accountability within each riding.',
      approachClosing:
        'Instead of accountability flowing only through Parliament or elections, it becomes direct, visible, and ongoing between citizens and their representative.',
      deliversTitle: 'How Civil Delivers',
      delivers: [
        {
          number: '1',
          title: 'Continuous Communication',
          intro: 'Each MP remains connected to their Civil Chamber.',
          points: [
            'Regular updates to the riding',
            'Open channels for discussion and feedback',
            'Direct visibility into representative activity',
          ],
          resultTitle: 'Result',
          result: 'No more disappearing between elections.',
        },
        {
          number: '2',
          title: 'Public Activity Reporting',
          intro: 'MP actions are visible to citizens in a structured format.',
          points: [
            'Voting records',
            'Policy positions',
            'Initiatives and priorities',
            'Use of public resources where applicable',
          ],
          resultTitle: 'Result',
          result: 'Citizens can see what their representative is actually doing.',
        },
        {
          number: '3',
          title: 'Citizen Feedback System',
          intro: 'Members of the riding can provide input at any time.',
          points: [
            'Feedback on decisions and positions',
            'Community sentiment tracking',
            'Open response channels',
          ],
          resultTitle: 'Result',
          result: 'Representation becomes responsive, not assumed.',
        },
        {
          number: '4',
          title: 'Confidence and Support Signals',
          intro: 'Civil introduces measurable indicators of support.',
          points: [
            'Ongoing confidence levels from constituents',
            'Visibility into public sentiment',
            'Early warning of misalignment',
          ],
          resultTitle: 'Result',
          result: 'Accountability becomes real time, not delayed until the next election.',
        },
        {
          number: '5',
          title: 'Issue Escalation and Response',
          intro: 'Citizens can raise issues directly within their Chamber.',
          points: [
            'Structured submission of concerns',
            'Public visibility of issues raised',
            'Expectation of response from representatives',
          ],
          resultTitle: 'Result',
          result: 'Local issues are surfaced and addressed transparently.',
        },
        {
          number: '6',
          title: 'Alignment with Responsible Government',
          intro: 'Canada s system already requires accountability through Parliament.',
          points: [
            'Ministers and representatives must answer for their actions',
            'Parliament serves as a forum for scrutiny and debate',
            'Civil extends that accountability directly to citizens',
          ],
          resultTitle: 'Result',
          result: 'Accountability moves from Parliament alone to Parliament plus continuous local scrutiny.',
        },
      ],
      replacesTitle: 'What This Replaces',
      traditionalLabel: 'Traditional Accountability',
      civilLabel: 'Civil Accountability',
      comparison: [
        { traditional: 'Elections every few years', civil: 'Continuous feedback' },
        { traditional: 'Limited communication', civil: 'Open interaction' },
        { traditional: 'Indirect oversight', civil: 'Direct citizen visibility' },
        { traditional: 'Delayed consequences', civil: 'Real-time signals' },
        { traditional: 'Centralized scrutiny', civil: 'Local accountability' },
      ],
      mattersTitle: 'Why This Matters',
      mattersIntro: 'Accountability is the foundation of democracy.',
      weakensTitle: 'When it weakens',
      weakensPoints: [
        'Trust declines',
        'Participation drops',
        'Representation disconnects from reality',
      ],
      restoreIntro: 'Civil restores accountability by:',
      restorePoints: [
        'Making representative activity visible',
        'Enabling continuous citizen input',
        'Strengthening the relationship between MPs and their communities',
        'Aligning leadership with real public sentiment',
      ],
      closingTitle: 'Closing Statement',
      closing: [
        'Civil Citizens does not wait for elections to hold leaders accountable.',
        'It ensures accountability exists every day.',
        'Representation is not a title.',
        'It is an ongoing responsibility.',
        'And under Civil, that responsibility is visible, measurable, and driven by the people.',
      ],
      back: 'Back to Implementation',
    },
    fr: {
      eyebrow: 'Plateforme / Mise en oeuvre / Systeme de responsabilite des deputes',
      title: 'Systeme de responsabilite des deputes',
      objectiveTitle: 'Objectif',
      objective:
        'Veiller a ce que les representants elus demeurent continuellement responsables devant les citoyens de leur circonscription grace a la transparence, la communication et une performance mesurable.',
      problemTitle: 'Le probleme',
      problemIntro:
        'Le systeme canadien repose sur le gouvernement responsable, ou les elus rendent compte au Parlement et, ultimement, au peuple.',
      expectedTitle: 'On attend des deputes qu ils',
      expectedPoints: [
        'Representent leurs electeurs',
        'Participent au travail legislatif',
        'Repondent de leurs actions au Parlement',
      ],
      practiceIntro: 'En pratique, toutefois, la responsabilite demeure limitee :',
      practicePoints: [
        'Les citoyens votent une fois tous les quelques ans',
        'Les deputes fonctionnent avec peu de retroaction continue',
        'La communication entre representants et electeurs est inegale',
        'Les organisations locales ont souvent peu d influence apres l election',
      ],
      disconnectIntro: 'Cela cree une rupture :',
      disconnectPoints: [
        'Les citoyens perdent en visibilite',
        'Les representants perdent en retroaction directe',
        'La responsabilite devient retardee et indirecte',
      ],
      approachTitle: 'L approche Civil',
      approachCopy:
        'Civil introduit un modele de responsabilite continue, dirigee par les citoyens, dans chaque circonscription.',
      approachClosing:
        'Au lieu que la responsabilite passe seulement par le Parlement ou les elections, elle devient directe, visible et continue entre les citoyens et leur representant.',
      deliversTitle: 'Comment Civil le rend possible',
      delivers: [
        {
          number: '1',
          title: 'Communication continue',
          intro: 'Chaque depute demeure connecte a sa Chambre Civil.',
          points: [
            'Mises a jour regulieres a la circonscription',
            'Canaux ouverts de discussion et de retroaction',
            'Visibilite directe sur l activite du representant',
          ],
          resultTitle: 'Resultat',
          result: 'Plus de disparition entre les elections.',
        },
        {
          number: '2',
          title: 'Rapports publics d activite',
          intro: 'Les actions du depute sont visibles pour les citoyens dans un format structure.',
          points: [
            'Dossiers de vote',
            'Positions politiques',
            'Initiatives et priorites',
            'Utilisation des ressources publiques lorsque pertinent',
          ],
          resultTitle: 'Resultat',
          result: 'Les citoyens peuvent voir ce que fait reellement leur representant.',
        },
        {
          number: '3',
          title: 'Systeme de retroaction citoyenne',
          intro: 'Les membres de la circonscription peuvent donner leur avis en tout temps.',
          points: [
            'Retroaction sur les decisions et positions',
            'Suivi du sentiment communautaire',
            'Canaux de reponse ouverts',
          ],
          resultTitle: 'Resultat',
          result: 'La representation devient reactive, et non presumee.',
        },
        {
          number: '4',
          title: 'Signaux de confiance et d appui',
          intro: 'Civil introduit des indicateurs mesurables d appui.',
          points: [
            'Niveaux continus de confiance des electeurs',
            'Visibilite sur le sentiment public',
            'Alerte precoce en cas de decalage',
          ],
          resultTitle: 'Resultat',
          result: 'La responsabilite devient en temps reel, au lieu d etre retardee jusqu a la prochaine election.',
        },
        {
          number: '5',
          title: 'Escalade des enjeux et reponse',
          intro: 'Les citoyens peuvent soulever directement des enjeux dans leur Chambre.',
          points: [
            'Soumission structuree des preoccupations',
            'Visibilite publique des enjeux souleves',
            'Attente d une reponse des representants',
          ],
          resultTitle: 'Resultat',
          result: 'Les enjeux locaux sont mis en lumiere et traites de maniere transparente.',
        },
        {
          number: '6',
          title: 'Alignement avec le gouvernement responsable',
          intro: 'Le systeme canadien exige deja la responsabilite par le Parlement.',
          points: [
            'Les ministres et representants doivent repondre de leurs actes',
            'Le Parlement sert de forum d examen et de debat',
            'Civil etend cette responsabilite directement aux citoyens',
          ],
          resultTitle: 'Resultat',
          result: 'La responsabilite passe du Parlement seul au Parlement plus une surveillance locale continue.',
        },
      ],
      replacesTitle: 'Ce que cela remplace',
      traditionalLabel: 'Responsabilite traditionnelle',
      civilLabel: 'Responsabilite Civil',
      comparison: [
        { traditional: 'Elections tous les quelques ans', civil: 'Retroaction continue' },
        { traditional: 'Communication limitee', civil: 'Interaction ouverte' },
        { traditional: 'Surveillance indirecte', civil: 'Visibilite citoyenne directe' },
        { traditional: 'Consequences retardees', civil: 'Signaux en temps reel' },
        { traditional: 'Examen centralise', civil: 'Responsabilite locale' },
      ],
      mattersTitle: 'Pourquoi cela compte',
      mattersIntro: 'La responsabilite est le fondement de la democratie.',
      weakensTitle: 'Lorsqu elle s affaiblit',
      weakensPoints: [
        'La confiance decline',
        'La participation diminue',
        'La representation se deconnecte de la realite',
      ],
      restoreIntro: 'Civil restaure la responsabilite en :',
      restorePoints: [
        'Rendant visible l activite des representants',
        'Permettant une participation citoyenne continue',
        'Renforcant la relation entre les deputes et leurs communautes',
        'Alignant le leadership sur le sentiment public reel',
      ],
      closingTitle: 'Declaration finale',
      closing: [
        'Civil Citizens n attend pas les elections pour tenir les dirigeants responsables.',
        'Il garantit que la responsabilite existe chaque jour.',
        'La representation n est pas un titre.',
        'C est une responsabilite continue.',
        'Et sous Civil, cette responsabilite est visible, mesurable et guidee par le peuple.',
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
            <h3 className="policy-card__title">{content.expectedTitle}</h3>
            <div className="founding-principles-page__list technology-ai-page__list" style={{ marginTop: '1rem' }}>
              {content.expectedPoints.map((point) => (
                <p key={point} className="policy-card__description founding-principles-page__item">{point}</p>
              ))}
            </div>
          </div>
          <div className="technology-ai-page__panel technology-ai-page__panel--accent">
            <p className="policy-detail__summary">{content.practiceIntro}</p>
            <div className="founding-principles-page__list technology-ai-page__list">
              {content.practicePoints.map((point) => (
                <p key={point} className="policy-card__description founding-principles-page__item">{point}</p>
              ))}
            </div>
          </div>
        </div>
        <div className="technology-ai-page__panel governance-page__full-panel" style={{ marginTop: '1.5rem' }}>
          <p className="policy-detail__summary">{content.disconnectIntro}</p>
          <div className="policy-aside__list technology-ai-page__outcomes">
            {content.disconnectPoints.map((point) => (
              <span key={point}>{point}</span>
            ))}
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
          <p className="policy-detail__summary">{content.weakensTitle}</p>
          <div className="founding-principles-page__list technology-ai-page__list">
            {content.weakensPoints.map((point) => (
              <p key={point} className="policy-card__description founding-principles-page__item">{point}</p>
            ))}
          </div>
          <p className="policy-detail__summary">{content.restoreIntro}</p>
          <div className="policy-aside__list technology-ai-page__outcomes">
            {content.restorePoints.map((point) => (
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
