import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { localizeByLanguage } from '../lib/locale'

export default function MemberGrowthPage() {
  const { i18n } = useTranslation()
  const content = localizeByLanguage(i18n, {
    en: {
      eyebrow: 'Platform / Implementation / Member Growth Strategy',
      title: 'Member Growth Strategy',
      objectiveTitle: 'Objective',
      objective:
        'Build large, active, and sustained participation in every riding by making civic engagement accessible, continuous, and relevant to everyday life.',
      problemTitle: 'The Problem',
      problemIntro: 'Political participation in Canada is limited and uneven.',
      problemPoints: [
        'Traditional party membership remains low, especially among younger Canadians',
        'Engagement is often limited to elections or short campaign periods',
        'Many citizens feel disconnected from political processes and local organizations',
      ],
      atSameTimeTitle: 'At the same time',
      atSameTimePoints: [
        'Over 75% of Canadians use social media daily',
        'Digital platforms have become the primary way people communicate, organize, and engage',
      ],
      gapIntro: 'This creates a gap:',
      gapClosing: 'Citizens are highly connected but not meaningfully engaged in governance.',
      approachTitle: 'The Civil Approach',
      approachIntro: 'Civil Citizens bridges this gap by transforming participation from:',
      approachShifts: [
        'Occasional -> continuous',
        'Political -> practical',
        'Exclusive -> accessible',
      ],
      approachClosing: 'Instead of asking people to join a party, Civil integrates governance into:',
      approachAreas: ['Community', 'Work', 'Local activity', 'Daily interaction'],
      deliversTitle: 'How Civil Delivers',
      delivers: [
        {
          number: '1',
          title: 'Frictionless Onboarding',
          intro: 'Joining Civil is simple and immediate.',
          points: [
            'No complex membership process',
            'Instant access to local Chamber',
            'Clear entry points for participation',
          ],
          resultTitle: 'Result',
          result: 'More people join because there are fewer barriers.',
        },
        {
          number: '2',
          title: 'Local-First Engagement',
          intro: 'Each user is automatically connected to their riding.',
          points: [
            'Immediate relevance',
            'Local issues prioritized',
            'Community-based interaction',
          ],
          resultTitle: 'Result',
          result: 'Participation feels personal, not abstract.',
        },
        {
          number: '3',
          title: 'Everyday Utility (Not Just Politics)',
          intro: 'Civil is not only a political platform.',
          points: [
            'Community interaction',
            'Local commerce',
            'Opportunities and work',
            'Communication tools',
          ],
          resultTitle: 'Result',
          result: 'Users stay active because Civil is useful daily, not just during elections.',
        },
        {
          number: '4',
          title: 'Social and Network Effects',
          intro: 'Growth is driven by people inviting others.',
          points: [
            'Friends, families, and coworkers join together',
            'Community groups onboard collectively',
            'Local momentum builds organically',
            'Digital platforms succeed when network effects are strong',
          ],
          resultTitle: 'Result',
          result: 'Growth accelerates naturally within each riding.',
        },
        {
          number: '5',
          title: 'Referral and Incentive Systems',
          intro: 'Participation is rewarded.',
          points: [
            'Recognition for active members',
            'Incentives for inviting others',
            'Visibility for contributors',
          ],
          resultTitle: 'Result',
          result: 'Users become advocates for growth.',
        },
        {
          number: '6',
          title: 'Creator and Leader Activation',
          intro: 'Local leaders drive expansion.',
          points: [
            'Community organizers',
            'Business owners',
            'Creators and influencers',
            'Politically engaged citizens',
            'Digital voices and targeted outreach expand influence',
          ],
          resultTitle: 'Result',
          result: 'Growth is led from within communities, not imposed from above.',
        },
        {
          number: '7',
          title: 'Continuous Engagement Loops',
          intro: 'Users are constantly pulled back into the system.',
          points: [
            'Voting on proposals',
            'Participating in discussions',
            'Supporting local initiatives',
            'Tracking outcomes',
            'Interactive systems can significantly increase participation when designed well',
          ],
          resultTitle: 'Result',
          result: 'Members remain active, not passive.',
        },
        {
          number: '8',
          title: 'Target: Critical Mass Per Riding',
          intro: 'Civil focuses on achieving 1,000+ active members per riding.',
          points: [
            'Meaningful decision-making power',
            'Strong local influence',
            'Sustainable engagement',
          ],
          resultTitle: 'Result',
          result: 'Each riding becomes a self-sustaining governance unit.',
        },
      ],
      replacesTitle: 'What This Replaces',
      traditionalLabel: 'Traditional Growth',
      civilLabel: 'Civil Growth',
      comparison: [
        { traditional: 'Membership drives', civil: 'Continuous onboarding' },
        { traditional: 'Campaign-based spikes', civil: 'Always-on participation' },
        { traditional: 'Centralized outreach', civil: 'Local network growth' },
        { traditional: 'Passive supporters', civil: 'Active participants' },
        { traditional: 'Political-only engagement', civil: 'Daily-use platform' },
      ],
      mattersTitle: 'Why This Matters',
      mattersIntro: 'Democracy depends on participation.',
      mattersWhenTitle: 'When participation is low',
      mattersWhenPoints: [
        'Power concentrates',
        'Systems stagnate',
        'Trust declines',
      ],
      mattersCanadaTitle: 'Canada already has',
      mattersCanadaPoints: [
        'High internet adoption',
        'Strong digital usage',
        'Widespread connectivity',
      ],
      mattersClosing: 'Civil leverages this reality to expand engagement, strengthen communities, and build a scalable movement.',
      closingTitle: 'Closing Statement',
      closing: [
        'Civil Citizens does not rely on traditional membership models.',
        'It grows through relevance, utility, and participation.',
        'People do not join Civil because they are told to.',
        'They join because it is useful, it is local, and it gives them a real voice.',
        'One member at a time.',
        'One riding at a time.',
        'Across the entire country.',
      ],
      back: 'Back to Implementation',
    },
    fr: {
      eyebrow: 'Plateforme / Mise en oeuvre / Strategie de croissance des membres',
      title: 'Strategie de croissance des membres',
      objectiveTitle: 'Objectif',
      objective:
        'Construire une participation importante, active et durable dans chaque circonscription en rendant l engagement civique accessible, continu et pertinent pour la vie quotidienne.',
      problemTitle: 'Le probleme',
      problemIntro: 'La participation politique au Canada est limitee et inegale.',
      problemPoints: [
        'L adhesion partisane traditionnelle demeure faible, surtout chez les jeunes Canadiens',
        'L engagement est souvent limite aux elections ou a de courtes periodes de campagne',
        'De nombreux citoyens se sentent deconnectes des processus politiques et des organisations locales',
      ],
      atSameTimeTitle: 'En meme temps',
      atSameTimePoints: [
        'Plus de 75 % des Canadiens utilisent les medias sociaux chaque jour',
        'Les plateformes numeriques sont devenues le principal moyen de communiquer, d organiser et de participer',
      ],
      gapIntro: 'Cela cree un ecart :',
      gapClosing: 'Les citoyens sont tres connectes, mais ne participent pas de maniere significative a la gouvernance.',
      approachTitle: 'L approche Civil',
      approachIntro: 'Civil Citizens comble cet ecart en transformant la participation de :',
      approachShifts: [
        'Occasionnelle -> continue',
        'Politique -> pratique',
        'Exclusive -> accessible',
      ],
      approachClosing: 'Au lieu de demander aux gens de joindre un parti, Civil integre la gouvernance dans :',
      approachAreas: ['La communaute', 'Le travail', 'L activite locale', 'L interaction quotidienne'],
      deliversTitle: 'Comment Civil le rend possible',
      delivers: [
        {
          number: '1',
          title: 'Integration sans friction',
          intro: 'Joindre Civil est simple et immediat.',
          points: [
            'Aucun processus d adhesion complexe',
            'Acces instantane a la Chambre locale',
            'Points d entree clairs pour participer',
          ],
          resultTitle: 'Resultat',
          result: 'Davantage de personnes joignent parce qu il y a moins de barrieres.',
        },
        {
          number: '2',
          title: 'Engagement d abord local',
          intro: 'Chaque utilisateur est automatiquement relie a sa circonscription.',
          points: [
            'Pertinence immediate',
            'Priorite aux enjeux locaux',
            'Interaction fondee sur la communaute',
          ],
          resultTitle: 'Resultat',
          result: 'La participation devient personnelle, et non abstraite.',
        },
        {
          number: '3',
          title: 'Utilite quotidienne (pas seulement politique)',
          intro: 'Civil n est pas seulement une plateforme politique.',
          points: [
            'Interaction communautaire',
            'Commerce local',
            'Occasions et travail',
            'Outils de communication',
          ],
          resultTitle: 'Resultat',
          result: 'Les utilisateurs restent actifs parce que Civil est utile chaque jour, et pas seulement pendant les elections.',
        },
        {
          number: '4',
          title: 'Effets sociaux et de reseau',
          intro: 'La croissance est portee par les gens qui invitent d autres personnes.',
          points: [
            'Amis, familles et collegues joignent ensemble',
            'Les groupes communautaires montent a bord collectivement',
            'L elan local se construit organiquement',
            'Les plateformes numeriques reussissent lorsque les effets de reseau sont forts',
          ],
          resultTitle: 'Resultat',
          result: 'La croissance s accelere naturellement dans chaque circonscription.',
        },
        {
          number: '5',
          title: 'Systemes de recommandation et d incitation',
          intro: 'La participation est recompensee.',
          points: [
            'Reconnaissance pour les membres actifs',
            'Incitatifs pour inviter d autres personnes',
            'Visibilite pour les contributeurs',
          ],
          resultTitle: 'Resultat',
          result: 'Les utilisateurs deviennent des vecteurs de croissance.',
        },
        {
          number: '6',
          title: 'Activation des createurs et leaders',
          intro: 'Les leaders locaux portent l expansion.',
          points: [
            'Organisateurs communautaires',
            'Proprietaires d entreprise',
            'Createurs et influenceurs',
            'Citoyens politiquement engages',
            'Les voix numeriques et l outreach cible etendent l influence',
          ],
          resultTitle: 'Resultat',
          result: 'La croissance est menee depuis les communautes, et non imposee d en haut.',
        },
        {
          number: '7',
          title: 'Boucles d engagement continu',
          intro: 'Les utilisateurs sont constamment ramenes dans le systeme.',
          points: [
            'Vote sur les propositions',
            'Participation aux discussions',
            'Soutien aux initiatives locales',
            'Suivi des resultats',
            'Les systemes interactifs peuvent augmenter fortement la participation lorsqu ils sont bien concus',
          ],
          resultTitle: 'Resultat',
          result: 'Les membres demeurent actifs, et non passifs.',
        },
        {
          number: '8',
          title: 'Cible : masse critique par circonscription',
          intro: 'Civil vise a atteindre plus de 1 000 membres actifs par circonscription.',
          points: [
            'Un pouvoir decisionnel significatif',
            'Une forte influence locale',
            'Un engagement durable',
          ],
          resultTitle: 'Resultat',
          result: 'Chaque circonscription devient une unite de gouvernance autosuffisante.',
        },
      ],
      replacesTitle: 'Ce que cela remplace',
      traditionalLabel: 'Croissance traditionnelle',
      civilLabel: 'Croissance Civil',
      comparison: [
        { traditional: 'Campagnes d adhesion', civil: 'Integration continue' },
        { traditional: 'Pointes liees aux campagnes', civil: 'Participation permanente' },
        { traditional: 'Outreach centralise', civil: 'Croissance de reseau locale' },
        { traditional: 'Appuis passifs', civil: 'Participants actifs' },
        { traditional: 'Engagement politique seulement', civil: 'Plateforme utile au quotidien' },
      ],
      mattersTitle: 'Pourquoi cela compte',
      mattersIntro: 'La democratie depend de la participation.',
      mattersWhenTitle: 'Lorsque la participation est faible',
      mattersWhenPoints: [
        'Le pouvoir se concentre',
        'Les systemes stagnent',
        'La confiance decline',
      ],
      mattersCanadaTitle: 'Le Canada dispose deja de',
      mattersCanadaPoints: [
        'Une forte adoption d internet',
        'Un usage numerique soutenu',
        'Une connectivite generalisee',
      ],
      mattersClosing: 'Civil tire parti de cette realite pour elargir l engagement, renforcer les communautes et construire un mouvement evolutif.',
      closingTitle: 'Declaration finale',
      closing: [
        'Civil Citizens ne depend pas des modeles traditionnels d adhesion.',
        'Il croit par la pertinence, l utilite et la participation.',
        'Les gens ne joignent pas Civil parce qu on leur dit de le faire.',
        'Ils joignent parce que c est utile, local et que cela leur donne une vraie voix.',
        'Un membre a la fois.',
        'Une circonscription a la fois.',
        'Dans tout le pays.',
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
            <div className="founding-principles-page__list technology-ai-page__list">
              {content.problemPoints.map((point) => (
                <p key={point} className="policy-card__description founding-principles-page__item">{point}</p>
              ))}
            </div>
          </div>
          <div className="technology-ai-page__panel technology-ai-page__panel--accent">
            <h3 className="policy-card__title">{content.atSameTimeTitle}</h3>
            <div className="founding-principles-page__list technology-ai-page__list" style={{ marginTop: '1rem' }}>
              {content.atSameTimePoints.map((point) => (
                <p key={point} className="policy-card__description founding-principles-page__item">{point}</p>
              ))}
            </div>
          </div>
        </div>
        <div className="technology-ai-page__panel governance-page__full-panel" style={{ marginTop: '1.5rem' }}>
          <p className="policy-detail__summary">{content.gapIntro}</p>
          <p className="policy-detail__summary">{content.gapClosing}</p>
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
            <p className="policy-detail__summary">{content.approachIntro}</p>
            <div className="policy-aside__list technology-ai-page__outcomes">
              {content.approachShifts.map((point) => (
                <span key={point}>{point}</span>
              ))}
            </div>
          </div>
          <div className="technology-ai-page__panel technology-ai-page__panel--accent">
            <p className="policy-detail__summary">{content.approachClosing}</p>
            <div className="founding-principles-page__list technology-ai-page__list">
              {content.approachAreas.map((point) => (
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
          <p className="policy-detail__summary">{content.mattersWhenTitle}</p>
          <div className="founding-principles-page__list technology-ai-page__list">
            {content.mattersWhenPoints.map((point) => (
              <p key={point} className="policy-card__description founding-principles-page__item">{point}</p>
            ))}
          </div>
          <p className="policy-detail__summary">{content.mattersCanadaTitle}</p>
          <div className="policy-aside__list technology-ai-page__outcomes">
            {content.mattersCanadaPoints.map((point) => (
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
