import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { localizeByLanguage } from '../lib/locale'

export default function FoundingPrinciplesPage() {
  const { i18n } = useTranslation()
  const content = localizeByLanguage(i18n, {
    en: {
      eyebrow: 'About CCC',
      title: 'Founding Principles',
      summary:
        'These are the operating principles behind Civil Citizens for Canada Party. They are not abstract values. They are expectations for how a real citizen system should function.',
      tagsLabel: 'Founding themes',
      tags: ['Citizens', 'Responsibility', 'Local First', 'National Coordination', 'Infrastructure', 'Builders'],
      expectation:
        'These principles are not statements. They are expectations of every Civil Citizen.',
      back: 'Back to Leadership',
      principles: [
        {
          number: '1',
          title: 'Citizen-Led, Not Institution-Led',
          bullets: [
            'Power originates from citizens, not centralized institutions.',
            'Representation must be built from the ground up.',
            'Participation is expected, not optional.',
          ],
        },
        {
          number: '2',
          title: 'System Over Fragmentation',
          bullets: [
            'Canada does not need more platforms. It needs a unified system.',
            'Communication, commerce, and governance must operate together.',
            'Efficiency comes from integration, not duplication.',
          ],
        },
        {
          number: '3',
          title: 'Local First, National Always',
          bullets: [
            'Every citizen is rooted in an Electoral District.',
            'Strong local communities create a strong nation.',
            'National coordination emerges from local organization.',
          ],
        },
        {
          number: '4',
          title: 'Economic Self-Sufficiency',
          bullets: [
            'Canadians should be able to earn, trade, and build within their own network.',
            'Value created in Canada should remain in Canada.',
            'Local economies must be strengthened, not extracted from.',
          ],
        },
        {
          number: '5',
          title: 'Real Identity, Real Accountability',
          bullets: [
            'Verified participation builds trust.',
            'Actions carry responsibility.',
            'No anonymous influence over real-world systems.',
          ],
        },
        {
          number: '6',
          title: 'Builders Over Spectators',
          bullets: [
            'Civil is for people who act, not observe.',
            'Leadership is demonstrated through contribution.',
            'Responsibility replaces complaint.',
          ],
        },
        {
          number: '7',
          title: 'Open Participation',
          bullets: [
            'Every Canadian has the right to participate meaningfully.',
            'Systems must be accessible, transparent, and fair.',
            'Opportunity is not restricted to elites or institutions.',
          ],
          note: 'Aligned with core Canadian democratic rights like participation and representation.',
        },
        {
          number: '8',
          title: 'Freedom with Responsibility',
          bullets: [
            'Freedom of expression, association, and action are foundational.',
            'With freedom comes accountability to community and country.',
          ],
          note: 'Reflects Charter principles of freedoms and rights.',
        },
        {
          number: '9',
          title: 'Merit, Contribution, and Work',
          bullets: [
            'Value is created through effort and contribution.',
            'Systems should reward those who build, create, and serve.',
            'Personal responsibility is a core expectation.',
          ],
          note: 'Consistent with Canadian civic values of responsibility and contribution.',
        },
        {
          number: '10',
          title: 'Technology as Infrastructure',
          bullets: [
            'Technology is not entertainment. It is coordination infrastructure.',
            'Civil exists to enable real-world outcomes.',
            'Digital systems must serve physical communities.',
          ],
        },
        {
          number: '11',
          title: 'Unity Through Shared Purpose',
          bullets: [
            'Canada is strongest when aligned toward common goals.',
            'Differences are resolved through participation, not division.',
            'A functioning system reduces conflict by enabling action.',
          ],
        },
        {
          number: '12',
          title: 'Build the Future, Don’t Wait for It',
          bullets: [
            'Change does not come from critique. It comes from construction.',
            'Citizens must actively shape the systems they live in.',
            'The future belongs to those who build it.',
          ],
        },
      ],
    },
    fr: {
      eyebrow: 'À propos du CCC',
      title: 'Principes fondateurs',
      summary:
        'Voici les principes d’exploitation qui soutiennent le Parti Citoyens Civils du Canada. Ce ne sont pas des valeurs abstraites. Ce sont des attentes sur la façon dont un véritable système citoyen doit fonctionner.',
      tagsLabel: 'Thèmes fondateurs',
      tags: ['Citoyens', 'Responsabilité', 'Local d’abord', 'Coordination nationale', 'Infrastructure', 'Bâtisseurs'],
      expectation:
        'Ces principes ne sont pas de simples déclarations. Ce sont les attentes de chaque citoyen civil.',
      back: 'Retour au leadership',
      principles: [
        {
          number: '1',
          title: 'Dirigé par les citoyens, non par les institutions',
          bullets: [
            'Le pouvoir vient des citoyens, non des institutions centralisées.',
            'La représentation doit être bâtie à partir du terrain.',
            'La participation est attendue, elle n’est pas facultative.',
          ],
        },
        {
          number: '2',
          title: 'Le système avant la fragmentation',
          bullets: [
            'Le Canada n’a pas besoin de plus de plateformes. Il a besoin d’un système unifié.',
            'La communication, le commerce et la gouvernance doivent fonctionner ensemble.',
            'L’efficacité vient de l’intégration, pas de la duplication.',
          ],
        },
        {
          number: '3',
          title: 'Local d’abord, national toujours',
          bullets: [
            'Chaque citoyen est enraciné dans une circonscription électorale.',
            'Des communautés locales fortes créent une nation forte.',
            'La coordination nationale émerge de l’organisation locale.',
          ],
        },
        {
          number: '4',
          title: 'Autosuffisance économique',
          bullets: [
            'Les Canadiens devraient pouvoir gagner, échanger et bâtir au sein de leur propre réseau.',
            'La valeur créée au Canada doit rester au Canada.',
            'Les économies locales doivent être renforcées, non vidées de leur substance.',
          ],
        },
        {
          number: '5',
          title: 'Identité réelle, responsabilité réelle',
          bullets: [
            'Une participation vérifiée crée la confiance.',
            'Les actions entraînent une responsabilité.',
            'Aucune influence anonyme sur les systèmes du monde réel.',
          ],
        },
        {
          number: '6',
          title: 'Les bâtisseurs avant les spectateurs',
          bullets: [
            'Civil est pour les gens qui agissent, non pour ceux qui observent.',
            'Le leadership se démontre par la contribution.',
            'La responsabilité remplace la plainte.',
          ],
        },
        {
          number: '7',
          title: 'Participation ouverte',
          bullets: [
            'Chaque Canadien a le droit de participer de façon significative.',
            'Les systèmes doivent être accessibles, transparents et équitables.',
            'Les occasions ne doivent pas être réservées aux élites ou aux institutions.',
          ],
          note: 'Aligné sur les droits démocratiques fondamentaux du Canada comme la participation et la représentation.',
        },
        {
          number: '8',
          title: 'Liberté avec responsabilité',
          bullets: [
            'La liberté d’expression, d’association et d’action est fondamentale.',
            'La liberté s’accompagne d’une responsabilité envers la communauté et le pays.',
          ],
          note: 'Reflète les principes de la Charte des libertés et des droits.',
        },
        {
          number: '9',
          title: 'Mérite, contribution et travail',
          bullets: [
            'La valeur se crée par l’effort et la contribution.',
            'Les systèmes doivent récompenser ceux qui bâtissent, créent et servent.',
            'La responsabilité personnelle est une attente fondamentale.',
          ],
          note: 'Conforme aux valeurs civiques canadiennes de responsabilité et de contribution.',
        },
        {
          number: '10',
          title: 'La technologie comme infrastructure',
          bullets: [
            'La technologie n’est pas un divertissement. C’est une infrastructure de coordination.',
            'Civil existe pour permettre des résultats concrets.',
            'Les systèmes numériques doivent servir les communautés physiques.',
          ],
        },
        {
          number: '11',
          title: 'L’unité par un objectif commun',
          bullets: [
            'Le Canada est plus fort lorsqu’il s’aligne vers des objectifs communs.',
            'Les différences se résolvent par la participation, non par la division.',
            'Un système fonctionnel réduit les conflits en permettant l’action.',
          ],
        },
        {
          number: '12',
          title: 'Bâtir l’avenir, ne pas l’attendre',
          bullets: [
            'Le changement ne vient pas de la critique. Il vient de la construction.',
            'Les citoyens doivent façonner activement les systèmes dans lesquels ils vivent.',
            'L’avenir appartient à ceux qui le bâtissent.',
          ],
        },
      ],
    },
  })

  return (
    <div className="policy-detail founding-principles-page">
      <section className="policy-detail__panel founding-principles-page__hero">
        <p className="eyebrow">{content.eyebrow}</p>
        <h1 className="policy-detail__title">{content.title}</h1>
        <p className="policy-detail__summary">{content.summary}</p>
        <div className="policy-aside__list founding-principles-page__tags" aria-label={content.tagsLabel}>
          {content.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </section>

      <section className="policy-foundation founding-principles-page__section">
        <div className="policy-grid founding-principles-page__grid">
          {content.principles.map((principle) => (
            <article key={principle.number} className="policy-card founding-principles-page__card">
              <p className="policy-card__number">{principle.number}</p>
              <h3 className="policy-card__title">{principle.title}</h3>
              <div className="founding-principles-page__list">
                {principle.bullets.map((bullet) => (
                  <p key={bullet} className="policy-card__description founding-principles-page__item">
                    {bullet}
                  </p>
                ))}
              </div>
              {principle.note ? (
                <p className="founding-principles-page__note">{principle.note}</p>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="policy-foundation founding-principles-page__section founding-principles-page__closing">
        <h2 className="founding-principles-page__expectation">{content.expectation}</h2>
        <div className="nav-placeholder__actions founding-principles-page__actions">
          <Link to="/about/leadership" className="button button--secondary">
            {content.back}
          </Link>
        </div>
      </section>
    </div>
  )
}