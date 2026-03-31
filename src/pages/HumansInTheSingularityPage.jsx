import bookBackImage from '../../assets/img/andy-normore/andy-normore-humans-in-the-singularity-book-back.jpg'
import bookCoverImage from '../../assets/img/andy-normore/andy-normore-humans-in-the-singularity-book-cover.jpg'

const purchaseUrl = 'https://civilcitizens.ca/com/on/york-durham/orgs/civil-citizens-incorporated/shop'

const forewordParagraphs = [
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
]

const tableOfContents = [
  {
    title: 'Part 1 — Becoming',
    chapters: [
      '1. Becoming Civilized',
      '2. The First Systems of Man',
      '3. Agriculture: The Original Technology',
      '4. The Illusion of Progress',
      '5. The Cost of Convenience',
      '6. When We Poisoned the Earth',
    ],
  },
  {
    title: 'Part 2 — Acceleration',
    chapters: [
      '7. The Exponential Curve',
      '8. Intelligence Becomes Infinite',
      '9. The End of Scarcity',
      '10. The Death of Work',
      '11. Universal High Income',
      '12. When Machines Create Everything',
    ],
  },
  {
    title: 'Part 3 — Collapse of the Old World',
    chapters: [
      '13. The Fragility of Globalization',
      '14. When Cultures Do Not Converge',
      '15. The Failure of Centralized Systems',
      '16. Truth in the Age of Algorithms',
      '17. The Economics of Stagnation',
      '18. Power Without Accountability',
    ],
  },
  {
    title: 'Part 4 — The Fork',
    chapters: [
      '19. Control or Sovereignty',
      '20. The Rise of Machine Governance',
      '21. The Risk of Passive Humanity',
      '22. The Case for Decentralization',
      '23. Human Identity in an Intelligent World',
      '24. Humans in the Singularity',
    ],
  },
  {
    title: 'Part 5 — Rebuilding',
    chapters: [
      '25. A Gift from Intelligence',
      '26. Designing for Human Interaction',
      '27. Local Economies, Global Intelligence',
      '28. The Return to Community',
      '29. Agriculture Reborn',
    ],
  },
  {
    title: 'Part 6 — The New System',
    chapters: [
      '31. Civil AI: The Operating System of Human Civilization',
      '32. Adapting to Every Culture, Region, and Belief',
      '33. The Future We Choose to Build and the End of Poverty',
    ],
  },
]

const conclusion = 'Conclusion — The Responsibility to Build'

export default function HumansInTheSingularityPage() {
  return (
    <div className="leadership-page leadership-page--book">
      <section className="leadership-page__section leadership-page__section--profile">
        <div className="leadership-profile__hero leadership-profile__hero--book">
          <div className="leadership-profile__hero-copy">
            <p className="eyebrow">Andrew Normore</p>
            <h1 className="leadership-page__title leadership-page__title--profile">
              Humans In The Singularity
            </h1>
            <div className="leadership-book__intro">
              <h2 className="section-title leadership-profile__section-title">FOREWORD</h2>
              {forewordParagraphs.map((paragraph) => (
                <p key={paragraph} className="leadership-profile__paragraph">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="donate-page__actions">
              <a href={purchaseUrl} className="button button--primary" target="_blank" rel="noreferrer">
                Preorder Andys first book with the Civil App!
              </a>
            </div>
          </div>

          <div className="leadership-book__covers">
            <div className="leadership-book__visual-wrap">
              <img
                src={bookCoverImage}
                alt="Humans In The Singularity front cover"
                className="leadership-book__image"
              />
            </div>
            <div className="leadership-book__visual-wrap">
              <img
                src={bookBackImage}
                alt="Humans In The Singularity back cover"
                className="leadership-book__image"
              />
            </div>
          </div>
        </div>

        <div className="leadership-profile__panel leadership-book__toc-panel">
          <h2 className="section-title leadership-profile__section-title">TABLE OF CONTENTS</h2>
          <div className="leadership-book__toc-grid">
            {tableOfContents.map((part) => (
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
          <p className="leadership-book__toc-conclusion">{conclusion}</p>
        </div>
      </section>
    </div>
  )
}