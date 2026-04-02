import { useTranslation } from 'react-i18next'

import bookBackImage from '../../assets/img/andy-normore/andy-normore-humans-in-the-singularity-book-back.jpg'
import bookCoverImage from '../../assets/img/andy-normore/andy-normore-humans-in-the-singularity-book-cover.jpg'
import { localizeByLanguage } from '../lib/locale'

const purchaseUrl = 'https://civilcitizens.ca/com/on/york-durham/orgs/civil-citizens-incorporated/shop'

export default function HumansInTheSingularityPage() {
  const { i18n } = useTranslation()
  const content = localizeByLanguage(i18n, {
    en: {
      eyebrow: 'Andrew Normore',
      title: 'Humans In The Singularity',
      foreword: 'FOREWORD',
      forewordParagraphs: [
        'We are entering a moment in history where the rules that governed humanity for thousands of years are beginning to break.',
        'For most of our existence, intelligence was scarce.',
        'Skill was scarce.',
        'Knowledge was scarce.',
        'Those who possessed it led.',
        'Those who did not followed.',
        'That era is ending.',
        'Artificial intelligence is not just another tool. It is not like the steam engine, electricity, or the internet. It is something fundamentally different. It is the first time in human history that intelligence itself can be manufactured, scaled, and deployed at will.',
        'And when intelligence is no longer scarce, everything changes.',
        'Economics changes.',
        'Power changes.',
        'Work changes.',
        'Meaning changes.',
        'This book is not about technology.',
        'It is about what happens to us.',
        'There are those who believe the future will be fully automated, optimized, and controlled. That systems will replace decision-making, and that efficiency will become the highest value.',
        'There are others who believe the opposite. That technology will free humanity, allowing individuals to create, govern, and live with more autonomy than ever before.',
        'Both futures are possible.',
        'But neither is guaranteed.',
        'The truth is simpler, and far more uncomfortable:',
        'The future will be built by those who choose to build it.',
        'This book is written from that perspective.',
        'Not as a warning.',
        'Not as a prediction.',
        'But as a call to think clearly about what comes next.',
        'Because the singularity is not just a technological event.',
        'It is a human one.',
      ],
      preorder: 'Preorder Andys first book with the Civil App!',
      tocTitle: 'TABLE OF CONTENTS',
      tableOfContents: [
        {
          title: 'Part 1 — Becoming',
          chapters: ['1. Becoming Civilized', '2. The First Systems of Man', '3. Agriculture: The Original Technology', '4. The Illusion of Progress', '5. The Cost of Convenience', '6. When We Poisoned the Earth'],
        },
        {
          title: 'Part 2 — Acceleration',
          chapters: ['7. The Exponential Curve', '8. Intelligence Becomes Infinite', '9. The End of Scarcity', '10. The Death of Work', '11. Universal High Income', '12. When Machines Create Everything'],
        },
        {
          title: 'Part 3 — Collapse of the Old World',
          chapters: ['13. The Fragility of Globalization', '14. When Cultures Do Not Converge', '15. The Failure of Centralized Systems', '16. Truth in the Age of Algorithms', '17. The Economics of Stagnation', '18. Power Without Accountability'],
        },
        {
          title: 'Part 4 — The Fork',
          chapters: ['19. Control or Sovereignty', '20. The Rise of Machine Governance', '21. The Risk of Passive Humanity', '22. The Case for Decentralization', '23. Human Identity in an Intelligent World', '24. Humans in the Singularity'],
        },
        {
          title: 'Part 5 — Rebuilding',
          chapters: ['25. A Gift from Intelligence', '26. Designing for Human Interaction', '27. Local Economies, Global Intelligence', '28. The Return to Community', '29. Agriculture Reborn'],
        },
        {
          title: 'Part 6 — The New System',
          chapters: ['31. Civil AI: The Operating System of Human Civilization', '32. Adapting to Every Culture, Region, and Belief', '33. The Future We Choose to Build and the End of Poverty'],
        },
      ],
      conclusion: 'Conclusion — The Responsibility to Build',
      frontAlt: 'Humans In The Singularity front cover',
      backAlt: 'Humans In The Singularity back cover',
    },
    fr: {
      eyebrow: 'Andrew Normore',
      title: 'Humans In The Singularity',
      foreword: 'AVANT-PROPOS',
      forewordParagraphs: [
        'Nous entrons dans un moment de l’histoire où les règles qui ont gouverné l’humanité pendant des milliers d’années commencent à se briser.',
        'Pendant la majeure partie de notre existence, l’intelligence était rare.',
        'La compétence était rare.',
        'Le savoir était rare.',
        'Ceux qui le possédaient dirigeaient.',
        'Ceux qui ne l’avaient pas suivaient.',
        'Cette époque se termine.',
        'L’intelligence artificielle n’est pas simplement un autre outil. Ce n’est pas comme la machine à vapeur, l’électricité ou Internet. C’est quelque chose de fondamentalement différent. C’est la première fois dans l’histoire humaine que l’intelligence elle-même peut être fabriquée, déployée et amplifiée à volonté.',
        'Et lorsque l’intelligence n’est plus rare, tout change.',
        'L’économie change.',
        'Le pouvoir change.',
        'Le travail change.',
        'Le sens change.',
        'Ce livre ne traite pas de technologie.',
        'Il traite de ce qui nous arrive.',
        'Certains croient que l’avenir sera entièrement automatisé, optimisé et contrôlé. Que des systèmes remplaceront la prise de décision et que l’efficacité deviendra la valeur suprême.',
        'D’autres croient l’inverse. Que la technologie libérera l’humanité, permettant aux individus de créer, de gouverner et de vivre avec plus d’autonomie que jamais.',
        'Les deux avenirs sont possibles.',
        'Mais aucun n’est garanti.',
        'La vérité est plus simple, et beaucoup plus inconfortable :',
        'L’avenir sera bâti par ceux qui choisissent de le bâtir.',
        'Ce livre est écrit à partir de cette perspective.',
        'Non comme un avertissement.',
        'Non comme une prédiction.',
        'Mais comme un appel à réfléchir clairement à ce qui vient ensuite.',
        'Parce que la singularité n’est pas seulement un événement technologique.',
        'C’est un événement humain.',
      ],
      preorder: 'Précommandez le premier livre d’Andy avec l’application Civil!',
      tocTitle: 'TABLE DES MATIÈRES',
      tableOfContents: [
        {
          title: 'Partie 1 — Devenir',
          chapters: ['1. Devenir civilisé', '2. Les premiers systèmes de l’homme', '3. L’agriculture : la technologie d’origine', '4. L’illusion du progrès', '5. Le coût de la commodité', '6. Quand nous avons empoisonné la Terre'],
        },
        {
          title: 'Partie 2 — Accélération',
          chapters: ['7. La courbe exponentielle', '8. L’intelligence devient infinie', '9. La fin de la rareté', '10. La mort du travail', '11. Revenu universel élevé', '12. Quand les machines créent tout'],
        },
        {
          title: 'Partie 3 — Effondrement de l’ancien monde',
          chapters: ['13. La fragilité de la mondialisation', '14. Quand les cultures ne convergent pas', '15. L’échec des systèmes centralisés', '16. La vérité à l’ère des algorithmes', '17. L’économie de la stagnation', '18. Le pouvoir sans responsabilité'],
        },
        {
          title: 'Partie 4 — La bifurcation',
          chapters: ['19. Contrôle ou souveraineté', '20. L’essor de la gouvernance machine', '21. Le risque d’une humanité passive', '22. L’argument en faveur de la décentralisation', '23. L’identité humaine dans un monde intelligent', '24. Humans in the Singularity'],
        },
        {
          title: 'Partie 5 — Reconstruire',
          chapters: ['25. Un cadeau de l’intelligence', '26. Concevoir pour l’interaction humaine', '27. Économies locales, intelligence mondiale', '28. Le retour à la communauté', '29. L’agriculture renaissante'],
        },
        {
          title: 'Partie 6 — Le nouveau système',
          chapters: ['31. Civil AI : le système d’exploitation de la civilisation humaine', '32. S’adapter à chaque culture, région et croyance', '33. L’avenir que nous choisissons de bâtir et la fin de la pauvreté'],
        },
      ],
      conclusion: 'Conclusion — La responsabilité de bâtir',
      frontAlt: 'Couverture avant de Humans In The Singularity',
      backAlt: 'Couverture arrière de Humans In The Singularity',
    },
  })

  return (
    <div className="leadership-page leadership-page--book">
      <section className="leadership-page__section leadership-page__section--profile">
        <div className="leadership-profile__hero leadership-profile__hero--book">
          <div className="leadership-profile__hero-copy">
            <p className="eyebrow">{content.eyebrow}</p>
            <h1 className="leadership-page__title leadership-page__title--profile">{content.title}</h1>
            <div className="leadership-book__intro">
              <h2 className="section-title leadership-profile__section-title">{content.foreword}</h2>
              {content.forewordParagraphs.map((paragraph) => (
                <p key={paragraph} className="leadership-profile__paragraph">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="donate-page__actions">
              <a href={purchaseUrl} className="button button--primary" target="_blank" rel="noreferrer">
                {content.preorder}
              </a>
            </div>
          </div>

          <div className="leadership-book__covers">
            <div className="leadership-book__visual-wrap">
              <img
                src={bookCoverImage}
                alt={content.frontAlt}
                className="leadership-book__image"
              />
            </div>
            <div className="leadership-book__visual-wrap">
              <img
                src={bookBackImage}
                alt={content.backAlt}
                className="leadership-book__image"
              />
            </div>
          </div>
        </div>

        <div className="leadership-profile__panel leadership-book__toc-panel">
          <h2 className="section-title leadership-profile__section-title">{content.tocTitle}</h2>
          <div className="leadership-book__toc-grid">
            {content.tableOfContents.map((part) => (
              <article key={part.title} className="leadership-book__toc-card">
                <h3 className="leadership-book__toc-title">{part.title}</h3>
                <div className="leadership-book__toc-list">
                  {part.chapters.map((chapter) => (
                    <p key={chapter} className="leadership-book__toc-item">
                      {chapter}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <p className="leadership-book__toc-conclusion">{content.conclusion}</p>
        </div>
      </section>
    </div>
  )
}