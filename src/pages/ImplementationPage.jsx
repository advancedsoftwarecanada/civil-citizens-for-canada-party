import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { localizeByLanguage } from '../lib/locale'

export default function ImplementationPage() {
  const { i18n } = useTranslation()
  const content = localizeByLanguage(i18n, {
    en: {
      eyebrow: 'Platform / Implementation',
      title: 'Building the System Matters as Much as Naming It',
      hero: [
        'A political platform is only serious if it can explain how it will actually be built.',
        'Implementation is where district structure, digital tools, accountability, trust, and execution come together.',
      ],
      statement: 'CCC is not presenting governance as a slogan. It is presenting an operating model.',
      asideEyebrow: 'The Objective',
      asideTitle: 'Turn participation into durable civic infrastructure.',
      asideCopy:
        'That means real district organization, visible systems, accountable leadership, trusted verification, and phased execution.',
      groups: [
        {
          title: 'Governance',
          summary:
            'These pages explain how power is redistributed back to citizens and how local political structure becomes continuous instead of episodic.',
          items: [
            {
              title: 'Restoring Power to Citizens',
              path: '/platform/implementation/restoring-power-to-citizens',
              description: 'Shift meaningful influence back to every riding through continuous participation and local decision weight.',
            },
            {
              title: 'Chambers of Citizens',
              path: '/platform/implementation/chambers-of-citizens',
              description: 'Create district infrastructure for discussion, coordination, membership density, and local leadership development.',
            },
            {
              title: 'Digital Governance',
              path: '/platform/implementation/digital-governance',
              description: 'Build a transparent digital operating layer for proposals, citizen input, prioritization, and public process.',
            },
            {
              title: 'Candidate Selection',
              path: '/platform/implementation/candidate-selection',
              description: 'Replace opaque gatekeeping with a system that rewards trust, contribution, competence, and district credibility.',
            },
            {
              title: 'MP Accountability',
              path: '/platform/implementation/mp-accountability',
              description: 'Give citizens visible ways to measure alignment, performance, responsiveness, and follow-through.',
            },
          ],
        },
        {
          title: 'Infrastructure',
          summary:
            'These pages cover the operating tools and technical foundation needed to make the system usable, secure, and scalable.',
          items: [
            {
              title: 'Civil Wallet',
              path: '/platform/implementation/civil-wallet',
              description: 'Define how identity, contributions, funding, and civic participation tools connect inside one member infrastructure.',
            },
          ],
        },
        {
          title: 'Growth & Integrity',
          summary:
            'These pages explain how CCC expands without losing legitimacy, coherence, or public trust.',
          items: [
            {
              title: 'Member Growth',
              path: '/platform/implementation/member-growth',
              description: 'Show how membership scales through local activation, clear onboarding, and stronger district participation loops.',
            },
            {
              title: 'Trust, Safety, and Verification',
              path: '/platform/implementation/trust-safety',
              description: 'Set the standards for verification, moderation, anti-abuse controls, and trusted civic participation.',
            },
          ],
        },
        {
          title: 'Execution',
          summary:
            'This page turns the vision into a staged delivery path instead of a vague promise about the future.',
          items: [
            {
              title: 'Roadmap',
              path: '/platform/implementation/roadmap',
              description: 'Sequence the rollout from pilots and district build-out to a mature national system.',
            },
          ],
        },
      ],
      closingTitle: 'Implementation Is the Test',
      closingBody:
        'If a movement cannot explain how citizens organize, how leaders are selected, how accountability works, and how trust is maintained, it does not yet have a governing system. These pages are where CCC defines that system in operational terms.',
      back: 'Back to Platform',
    },
    fr: {
      eyebrow: 'Plateforme / Mise en oeuvre',
      title: 'Construire le systeme compte autant que le nommer',
      hero: [
        'Une plateforme politique n est serieuse que si elle peut expliquer comment elle sera reellement construite.',
        'La mise en oeuvre est le point de rencontre entre la structure locale, les outils numeriques, la responsabilite, la confiance et l execution.',
      ],
      statement: 'Le CCC ne presente pas la gouvernance comme un slogan. Il presente un modele operationnel.',
      asideEyebrow: 'L objectif',
      asideTitle: 'Transformer la participation en infrastructure civique durable.',
      asideCopy:
        'Cela exige une vraie organisation par district, des systemes visibles, un leadership responsable, une verification digne de confiance et une execution par phases.',
      groups: [
        {
          title: 'Gouvernance',
          summary:
            'Ces pages expliquent comment le pouvoir revient aux citoyens et comment la structure politique locale devient continue plutot qu episodique.',
          items: [
            {
              title: 'Redonner le pouvoir aux citoyens',
              path: '/platform/implementation/restoring-power-to-citizens',
              description: 'Redonner une influence reelle a chaque circonscription grace a une participation continue et a un poids decisionnel local.',
            },
            {
              title: 'Chambres de citoyens',
              path: '/platform/implementation/chambers-of-citizens',
              description: 'Creer une infrastructure de district pour la discussion, la coordination, la densite des membres et le developpement du leadership local.',
            },
            {
              title: 'Gouvernance numerique',
              path: '/platform/implementation/digital-governance',
              description: 'Construire une couche operationnelle numerique transparente pour les propositions, la participation citoyenne, la priorisation et le processus public.',
            },
            {
              title: 'Selection des candidats',
              path: '/platform/implementation/candidate-selection',
              description: 'Remplacer les mecanismes opaques par un systeme qui recompense la confiance, la contribution, la competence et la credibilite locale.',
            },
            {
              title: 'Responsabilite des deputes',
              path: '/platform/implementation/mp-accountability',
              description: 'Donner aux citoyens des moyens visibles de mesurer l alignement, le rendement, la reactivite et le suivi.',
            },
          ],
        },
        {
          title: 'Infrastructure',
          summary:
            'Ces pages portent sur les outils operationnels et la base technique necessaires pour rendre le systeme utile, securise et evolutif.',
          items: [
            {
              title: 'Portefeuille Civil',
              path: '/platform/implementation/civil-wallet',
              description: 'Definir comment l identite, les contributions, le financement et les outils de participation civique se connectent dans une meme infrastructure membre.',
            },
          ],
        },
        {
          title: 'Croissance et integrite',
          summary:
            'Ces pages expliquent comment le CCC se developpe sans perdre sa legitimite, sa coherence ou la confiance du public.',
          items: [
            {
              title: 'Croissance des membres',
              path: '/platform/implementation/member-growth',
              description: 'Montrer comment l adhesion se developpe grace a l activation locale, a une integration claire et a des boucles de participation plus fortes.',
            },
            {
              title: 'Confiance, securite et verification',
              path: '/platform/implementation/trust-safety',
              description: 'Etablir les normes pour la verification, la moderation, les controles contre les abus et une participation civique digne de confiance.',
            },
          ],
        },
        {
          title: 'Execution',
          summary:
            'Cette page transforme la vision en plan de livraison concret plutot qu en promesse vague sur l avenir.',
          items: [
            {
              title: 'Feuille de route',
              path: '/platform/implementation/roadmap',
              description: 'Sequencer le deploiement depuis les projets pilotes et la construction locale jusqu a un systeme national mature.',
            },
          ],
        },
      ],
      closingTitle: 'La mise en oeuvre est le vrai test',
      closingBody:
        'Si un mouvement ne peut pas expliquer comment les citoyens s organisent, comment les leaders sont choisis, comment la responsabilite fonctionne et comment la confiance est maintenue, il n a pas encore de systeme de gouvernance. Ces pages sont l endroit ou le CCC definit ce systeme en termes operationnels.',
      back: 'Retour a la plateforme',
    },
  })

  return (
    <div className="policy-detail governance-page">
      <section className="policy-detail__panel governance-page__hero">
        <div className="technology-ai-page__hero-grid">
          <div>
            <p className="eyebrow">{content.eyebrow}</p>
            <h1 className="policy-detail__title">{content.title}</h1>
            {content.hero.map((paragraph) => (
              <p key={paragraph} className="policy-detail__summary">{paragraph}</p>
            ))}
            <p className="technology-ai-page__card-line governance-page__card-line--statement">{content.statement}</p>
          </div>

          <aside className="policy-aside technology-ai-page__aside">
            <p className="policy-aside__eyebrow">{content.asideEyebrow}</p>
            <h2 className="policy-aside__title">{content.asideTitle}</h2>
            <p className="policy-aside__copy">{content.asideCopy}</p>
          </aside>
        </div>
      </section>

      {content.groups.map((group, groupIndex) => (
        <section key={group.title} className="policy-foundation governance-page__section">
          <div className="policy-foundation__heading">
            <div>
              <p className="eyebrow">{groupIndex + 1}</p>
              <h2 className="section-title">{group.title}</h2>
            </div>
            <p className="section-copy">{group.summary}</p>
          </div>

          <div className="policy-grid">
            {group.items.map((item) => (
              <Link key={item.path} to={item.path} className="policy-card">
                <h3 className="policy-card__title">{item.title}</h3>
                <p className="policy-card__description">{item.description}</p>
              </Link>
            ))}
          </div>
        </section>
      ))}

      <section className="policy-foundation governance-page__section governance-page__closing">
        <div className="technology-ai-page__panel governance-page__full-panel">
          <h2 className="section-title">{content.closingTitle}</h2>
          <p className="policy-detail__summary">{content.closingBody}</p>
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