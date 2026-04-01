import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import becomingCivilCitizenImage from '../../assets/img/home/1-becoming-a-civil-citizen.jpg'
import theChangeImage from '../../assets/img/home/2-the-change.jpg'
import turnOffTvImage from '../../assets/img/home/3-turn-off-tv.jpg'
import { localizeByLanguage } from '../lib/locale'

export default function HomePage() {
  const { i18n } = useTranslation()
  const content = localizeByLanguage(i18n, {
    en: {
      heroTitle: 'TOGETHER,\nWE BUILD AN IDEAL FUTURE',
      heroCopy:
        'Civil Citizens For Canada Party is laying out a platform focused on work, growth, transparency, and a tax system ordinary citizens can understand.',
      featureOneTitle: 'From Passive Status To Active Responsibility',
      featureOneSummary:
        'A Civil Citizen is someone who has chosen to move from passive participation to active responsibility in shaping Canada\'s future.',
      featureOneBody:
        'In today\'s system, most people engage with politics only during elections, casting a vote and then stepping back while decisions are made on their behalf.',
      featureOneStrong: 'A Civil Citizen does more.',
      featureTwoTitle: 'What A Civil Citizen Actually Does',
      featureTwoSummary:
        'This is made possible through Civil, a platform designed to give citizens real tools to participate in governance, economics, and community building.',
      points: [
        ['Participates Continuously', 'Not just periodically or at election time.'],
        ['Contributes Ideas', 'Offers feedback, solutions, and practical direction.'],
        ['Works Locally', 'Engages at the community level where outcomes begin.'],
        ['Shapes Outcomes', 'Helps build economic and social results instead of only reacting.'],
      ],
      featureThreeTitle: 'Being A Civil Citizen Is A Decision',
      statusLabel: 'Status',
      statusText: 'Being a Canadian citizen is a status.',
      decisionLabel: 'Decision',
      decisionText: 'Being a Civil Citizen is a decision.',
      choicesLabel: 'Civil Citizen choices',
      choices: [
        'Choosing to be involved.',
        'Choosing to contribute.',
        'Choosing to build, not just observe.',
      ],
      featureFourTitle: 'Shift From Reaction To Construction',
      insteadOf: 'Instead Of',
      say: 'Say',
      insteadQuote: '“Damn politicians don\'t do anything”\n“This system is broken”\n“It\'s not fair”\n“Burn it all down”',
      sayQuote:
        '“I\'m going to be part of the solution”\n“We\'re going to build something better”\n“If the system doesn\'t work, we redesign it”\n“We don\'t wait, we build”',
      microPoints: ['This is anger without direction.', 'This is power with direction.'],
      statement:
        'Democracy should not be something you visit every four years. It should be something you live in every day.',
      cta: 'Become a Civil Citizen',
      altOne: 'People gathered together, representing becoming a Civil Citizen',
      altTwo: 'Hands joined in solidarity, representing change through civic participation',
      altThree: 'Citizen taking action instead of passively watching politics',
    },
    fr: {
      heroTitle: 'ENSEMBLE,\nNOUS BÂTISSONS UN AVENIR IDÉAL',
      heroCopy:
        'Le Parti Citoyens Civils du Canada élabore une plateforme axée sur le travail, la croissance, la transparence et un système fiscal que les citoyens ordinaires peuvent comprendre.',
      featureOneTitle: 'Du statut passif à la responsabilité active',
      featureOneSummary:
        'Un citoyen civil est quelqu\'un qui choisit de passer d\'une participation passive à une responsabilité active dans la construction de l\'avenir du Canada.',
      featureOneBody:
        'Dans le système actuel, la plupart des gens ne participent à la politique qu\'au moment des élections, puis se retirent pendant que les décisions sont prises en leur nom.',
      featureOneStrong: 'Un citoyen civil fait davantage.',
      featureTwoTitle: 'Ce que fait réellement un citoyen civil',
      featureTwoSummary:
        'Cela est rendu possible grâce à Civil, une plateforme conçue pour donner aux citoyens de vrais outils pour participer à la gouvernance, à l\'économie et à la construction communautaire.',
      points: [
        ['Participe en continu', 'Pas seulement de temps à autre ou lors des élections.'],
        ['Contribue des idées', 'Apporte des commentaires, des solutions et une orientation pratique.'],
        ['Agit localement', 'S\'implique au niveau communautaire là où les résultats commencent.'],
        ['Façonne les résultats', 'Aide à bâtir des résultats économiques et sociaux au lieu de simplement réagir.'],
      ],
      featureThreeTitle: 'Être un citoyen civil est une décision',
      statusLabel: 'Statut',
      statusText: 'Être citoyen canadien est un statut.',
      decisionLabel: 'Décision',
      decisionText: 'Être un citoyen civil est une décision.',
      choicesLabel: 'Choix du citoyen civil',
      choices: [
        'Choisir de s\'impliquer.',
        'Choisir de contribuer.',
        'Choisir de bâtir au lieu de simplement observer.',
      ],
      featureFourTitle: 'Passer de la réaction à la construction',
      insteadOf: 'Au lieu de',
      say: 'Dire',
      insteadQuote:
        '« Ces politiciens ne font rien »\n« Ce système est brisé »\n« Ce n\'est pas juste »\n« Qu\'on brûle tout »',
      sayQuote:
        '« Je vais faire partie de la solution »\n« Nous allons bâtir quelque chose de meilleur »\n« Si le système ne fonctionne pas, nous le redessinons »\n« Nous n\'attendons pas, nous bâtissons »',
      microPoints: ['C\'est de la colère sans direction.', 'C\'est du pouvoir avec une direction.'],
      statement:
        'La démocratie ne devrait pas être quelque chose que l\'on visite tous les quatre ans. Elle devrait être quelque chose que l\'on vit chaque jour.',
      cta: 'Devenir un citoyen civil',
      altOne: 'Des personnes rassemblées, représentant le fait de devenir un citoyen civil',
      altTwo: 'Des mains unies en solidarité, représentant le changement par la participation civique',
      altThree: 'Un citoyen qui agit au lieu de regarder passivement la politique',
    },
  })
  const heroLines = content.heroTitle.split('\n')
  const insteadLines = content.insteadQuote.split('\n')
  const sayLines = content.sayQuote.split('\n')

  return (
    <div className="home-page">
      <section className="hero-panel hero-panel--home">
        <img
          src="/assets/img/Civil-Citizens-For-Canada-Party.jpg"
          alt="Civil Citizens For Canada Party logo"
          className="hero-logo"
        />
        <h1 className="hero-title">
          {heroLines[0]}
          <br />
          {heroLines[1]}
        </h1>
        <p className="hero-copy">{content.heroCopy}</p>
      </section>

      <section className="home-feature home-feature--split">
        <div className="home-feature__content">
          <h2 className="section-title">{content.featureOneTitle}</h2>
          <p className="section-copy home-feature__copy">{content.featureOneSummary}</p>
          <p className="home-feature__copy">{content.featureOneBody}</p>
          <p className="home-feature__copy home-feature__copy--strong">{content.featureOneStrong}</p>
        </div>
        <div className="home-visual">
          <img
            src={becomingCivilCitizenImage}
            alt={content.altOne}
            className="home-visual__image"
          />
        </div>
      </section>

      <section className="home-feature home-feature--stack">
        <div className="home-feature__header">
          <h2 className="section-title">{content.featureTwoTitle}</h2>
          <p className="section-copy">{content.featureTwoSummary}</p>
        </div>
        <div className="home-points">
          {content.points.map(([title, copy]) => (
            <article key={title} className="home-point">
              <h3 className="home-point__title">{title}</h3>
              <p className="home-point__copy">{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="home-feature home-feature--split home-feature--reverse">
        <div className="home-visual home-visual--compact">
          <img
            src={theChangeImage}
            alt={content.altTwo}
            className="home-visual__image"
          />
        </div>
        <div className="home-feature__content">
          <h2 className="section-title">{content.featureThreeTitle}</h2>
          <div className="home-contrast">
            <div className="home-contrast__item">
              <span className="home-contrast__label">{content.statusLabel}</span>
              <p className="home-contrast__text">{content.statusText}</p>
            </div>
            <div className="home-contrast__item">
              <span className="home-contrast__label">{content.decisionLabel}</span>
              <p className="home-contrast__text">{content.decisionText}</p>
            </div>
          </div>
          <ul className="home-list" aria-label={content.choicesLabel}>
            {content.choices.map((choice) => (
              <li key={choice}>{choice}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="home-feature home-feature--stack">
        <div className="home-feature__header">
          <h2 className="section-title">{content.featureFourTitle}</h2>
        </div>
        <div className="home-compare">
          <article className="home-compare__card home-compare__card--muted">
            <span className="home-compare__tag">{content.insteadOf}</span>
            <p className="home-compare__quote">
              {insteadLines.map((line, index) => (
                <FragmentWithBreak key={line} line={line} index={index} />
              ))}
            </p>
          </article>
          <article className="home-compare__card home-compare__card--accent">
            <span className="home-compare__tag">{content.say}</span>
            <p className="home-compare__quote">
              {sayLines.map((line, index) => (
                <FragmentWithBreak key={line} line={line} index={index} />
              ))}
            </p>
          </article>
        </div>
        <div className="home-micro-points" aria-label="Message framing">
          {content.microPoints.map((point) => (
            <span key={point}>{point}</span>
          ))}
        </div>
      </section>

      <section className="home-feature home-feature--statement">
        <div className="home-statement-panel">
          <img
            src={turnOffTvImage}
            alt={content.altThree}
            className="home-statement-panel__image"
          />
          <blockquote className="home-statement">{content.statement}</blockquote>
          <Link to="/become-a-civil-citizen" className="button button--primary home-statement__cta">
            {content.cta}
          </Link>
        </div>
      </section>
    </div>
  )
}

function FragmentWithBreak({ line, index }) {
  return (
    <>
      {index > 0 ? <br /> : null}
      {line}
    </>
  )
}
