import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { localizeByLanguage } from '../lib/locale'

export default function RoadmapPage() {
  const { i18n } = useTranslation()
  const content = localizeByLanguage(i18n, {
    en: {
      eyebrow: 'Platform / Implementation / Roadmap',
      title: 'Roadmap',
      intro:
        'This roadmap sets out how Civil Citizens scales from a working digital foundation into a national system for citizen-driven governance.',
      objectiveTitle: 'Objective',
      objective:
        'Build Civil Citizens into a national platform that restores citizen control over governance, starting at the local level and scaling across Canada.',
      statusLabel: 'Status',
      phases: [
        {
          number: 'Phase 1',
          title: 'Foundation (Build & Launch)',
          status: 'Active',
          intro:
            'Civil begins as a digital platform designed to unify community, commerce, careers, and governance.',
          focusTitle: 'Focus',
          focus: [
            'Launch core Civil platform',
            'Enable user accounts, profiles, and communication',
            'Deploy Civil Wallet for transactions and support',
            'Introduce Chambers of Citizens framework per riding',
            'Begin onboarding early adopters',
          ],
          outcomeTitle: 'Outcome',
          outcome: 'A functioning national platform with initial users and infrastructure in place.',
        },
        {
          number: 'Phase 2',
          title: 'District Activation (Grow Local Power)',
          status: 'Planned',
          intro: 'Civil expands into individual ridings, building strong local participation.',
          focusTitle: 'Focus',
          focus: [
            'Reach critical mass in targeted ridings (1,000+ members)',
            'Activate Chambers of Citizens as local governance hubs',
            'Launch proposal and voting systems',
            'Begin community-led initiatives and funding',
          ],
          outcomeTitle: 'Outcome',
          outcome: 'Each participating riding becomes an active, citizen-driven network.',
        },
        {
          number: 'Phase 3',
          title: 'Governance Deployment (Shift Decision-Making)',
          status: 'Planned',
          intro:
            'Civil introduces structured governance tools that begin replacing traditional EDA limitations.',
          focusTitle: 'Focus',
          focus: [
            'Implement transparent budgeting and spending votes',
            'Enable open proposal systems across ridings',
            'Introduce candidate evaluation and selection tools',
            'Establish accountability loops between representatives and citizens',
          ],
          outcomeTitle: 'Outcome',
          outcome: 'Real decision-making power shifts from closed groups to the broader public.',
        },
        {
          number: 'Phase 4',
          title: 'Political Integration (Run & Support Candidates)',
          status: 'Planned',
          intro: 'Civil transitions from infrastructure to active political force.',
          focusTitle: 'Focus',
          focus: [
            'Support and nominate candidates through Chambers of Citizens',
            'Coordinate national campaigns with local alignment',
            'Use platform data to guide policy and messaging',
            'Replace traditional campaign structures with citizen-driven coordination',
          ],
          outcomeTitle: 'Outcome',
          outcome:
            'Candidates emerge from communities, backed by real participation, not internal politics.',
        },
        {
          number: 'Phase 5',
          title: 'National Scale (Redefine Governance)',
          status: 'Planned',
          intro:
            'Civil reaches national adoption and establishes a new standard for democratic participation.',
          focusTitle: 'Focus',
          focus: [
            'Expand to all ridings across Canada',
            'Standardize digital governance nationwide',
            'Integrate with institutions while maintaining citizen control',
            'Continuously evolve the platform based on participation',
          ],
          outcomeTitle: 'Outcome',
          outcome:
            'A scalable, transparent, citizen-powered governance system operating across the country.',
        },
      ],
      closingTitle: 'Closing Statement',
      closing: [
        'Civil Citizens is not a traditional political movement.',
        'It is a structured transition from low-participation, closed decision-making systems to a high-participation, transparent, citizen-driven model of governance.',
        'This roadmap defines how that transition happens-step by step, riding by riding.',
      ],
      back: 'Back to Implementation',
    },
    fr: {
      eyebrow: 'Plateforme / Mise en oeuvre / Feuille de route',
      title: 'Feuille de route',
      intro:
        'Cette feuille de route decrit comment Civil Citizens passe d une base numerique fonctionnelle a un systeme national de gouvernance citoyenne.',
      objectiveTitle: 'Objectif',
      objective:
        'Construire Civil Citizens comme une plateforme nationale qui redonne aux citoyens le controle de la gouvernance, en commencant au niveau local puis en s etendant partout au Canada.',
      statusLabel: 'Statut',
      phases: [
        {
          number: 'Phase 1',
          title: 'Fondation (construction et lancement)',
          status: 'Active',
          intro:
            'Civil commence comme une plateforme numerique concue pour unifier la communaute, le commerce, les carrieres et la gouvernance.',
          focusTitle: 'Priorites',
          focus: [
            'Lancer la plateforme Civil de base',
            'Permettre les comptes utilisateurs, les profils et la communication',
            'Deployer le Portefeuille Civil pour les transactions et le soutien',
            'Introduire le cadre des Chambres de citoyens par circonscription',
            'Commencer l integration des premiers adoptants',
          ],
          outcomeTitle: 'Resultat',
          outcome: 'Une plateforme nationale fonctionnelle avec des premiers utilisateurs et une infrastructure en place.',
        },
        {
          number: 'Phase 2',
          title: 'Activation des districts (faire croitre le pouvoir local)',
          status: 'Planifiee',
          intro:
            'Civil s etend dans les circonscriptions individuelles pour construire une forte participation locale.',
          focusTitle: 'Priorites',
          focus: [
            'Atteindre une masse critique dans des circonscriptions ciblees (1 000+ membres)',
            'Activer les Chambres de citoyens comme carrefours locaux de gouvernance',
            'Lancer les systemes de propositions et de vote',
            'Commencer des initiatives et du financement menes par la communaute',
          ],
          outcomeTitle: 'Resultat',
          outcome: 'Chaque circonscription participante devient un reseau actif, dirige par les citoyens.',
        },
        {
          number: 'Phase 3',
          title: 'Deploiement de la gouvernance (deplacer la prise de decision)',
          status: 'Planifiee',
          intro:
            'Civil introduit des outils de gouvernance structures qui commencent a remplacer les limites des ADE traditionnelles.',
          focusTitle: 'Priorites',
          focus: [
            'Mettre en place des votes transparents sur les budgets et les depenses',
            'Permettre des systemes de propositions ouverts dans les circonscriptions',
            'Introduire des outils d evaluation et de selection des candidats',
            'Etablir des boucles de responsabilite entre representants et citoyens',
          ],
          outcomeTitle: 'Resultat',
          outcome: 'Le vrai pouvoir decisionnel passe des groupes fermes vers le public au sens large.',
        },
        {
          number: 'Phase 4',
          title: 'Integration politique (presenter et soutenir des candidats)',
          status: 'Planifiee',
          intro:
            'Civil passe de l infrastructure a une force politique active.',
          focusTitle: 'Priorites',
          focus: [
            'Soutenir et nommer des candidats par les Chambres de citoyens',
            'Coordonner des campagnes nationales avec un alignement local',
            'Utiliser les donnees de la plateforme pour orienter la politique et les messages',
            'Remplacer les structures de campagne traditionnelles par une coordination portee par les citoyens',
          ],
          outcomeTitle: 'Resultat',
          outcome:
            'Les candidats emergent des communautes, appuyes par une vraie participation et non par la politique interne.',
        },
        {
          number: 'Phase 5',
          title: 'Echelle nationale (redefinir la gouvernance)',
          status: 'Planifiee',
          intro:
            'Civil atteint une adoption nationale et etablit une nouvelle norme de participation democratique.',
          focusTitle: 'Priorites',
          focus: [
            'S etendre a toutes les circonscriptions du Canada',
            'Normaliser la gouvernance numerique a l echelle nationale',
            'S integrer aux institutions tout en maintenant le controle citoyen',
            'Faire evoluer continuellement la plateforme selon la participation',
          ],
          outcomeTitle: 'Resultat',
          outcome:
            'Un systeme de gouvernance evolutif, transparent et alimente par les citoyens opere partout au pays.',
        },
      ],
      closingTitle: 'Declaration finale',
      closing: [
        'Civil Citizens n est pas un mouvement politique traditionnel.',
        'C est une transition structuree de systemes fermes et faiblement participatifs vers un modele de gouvernance transparent, fortement participatif et dirige par les citoyens.',
        'Cette feuille de route definit comment cette transition se realise-etape par etape, circonscription par circonscription.',
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
            <p className="policy-detail__summary">{content.intro}</p>
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

      {content.phases.map((phase) => (
        <section key={phase.number} className="policy-foundation governance-page__section">
          <div className="policy-foundation__heading">
            <div>
              <p className="eyebrow">{phase.number}</p>
              <h2 className="section-title">{phase.title}</h2>
            </div>
            <div>
              <p className="policy-detail__summary">{content.statusLabel}: {phase.status}</p>
              <p className="section-copy">{phase.intro}</p>
            </div>
          </div>

          <div className="technology-ai-page__split-grid">
            <div className="technology-ai-page__panel">
              <h3 className="technology-ai-page__subhead">{phase.focusTitle}</h3>
              <div className="founding-principles-page__list technology-ai-page__list">
                {phase.focus.map((point) => (
                  <p key={point} className="policy-card__description founding-principles-page__item">
                    {point}
                  </p>
                ))}
              </div>
            </div>

            <div className="technology-ai-page__panel technology-ai-page__panel--accent">
              <h3 className="technology-ai-page__subhead">{phase.outcomeTitle}</h3>
              <p className="policy-detail__summary">{phase.outcome}</p>
            </div>
          </div>
        </section>
      ))}

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