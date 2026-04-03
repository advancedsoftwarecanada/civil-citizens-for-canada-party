import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { localizeByLanguage } from '../lib/locale'

export default function TrustSafetyPage() {
  const { i18n } = useTranslation()
  const content = localizeByLanguage(i18n, {
    en: {
      eyebrow: 'Platform / Implementation / Human Verification & Trust System',
      title: 'Human Verification & Trust System',
      objectiveTitle: 'Objective',
      objective:
        'Establish a trusted, human-verified participation system that ensures integrity, prevents manipulation, and preserves individual freedom without relying on centralized identity control.',
      challengeTitle: 'The Challenge',
      challengeIntro: 'Digital systems today face a growing threat:',
      challengePoints: [
        'AI-generated identities',
        'Fake documents and impersonation',
        'Automated bot networks influencing outcomes',
      ],
      challengeCopy:
        'Traditional verification methods such as document uploads or identity checks are no longer sufficient on their own.',
      concernsTitle: 'At the same time, Canadians have clear concerns about',
      concernsPoints: [
        'Centralized digital identity systems',
        'Surveillance and data misuse',
        'Loss of personal privacy and control',
      ],
      requirementIntro: 'This creates a critical requirement:',
      requirementCopy:
        'Civil must verify real humans without becoming a centralized identity authority.',
      approachTitle: 'The Civil Approach',
      approachCopy:
        'Civil Citizens introduces a layered verification system that combines digital validation with real human trust.',
      approachClosing: 'Verification is not based on a single checkpoint. It is built progressively through identity signals, participation, and community validation.',
      levelsTitle: 'Verification Levels',
      levelsIntro: 'Civil uses multiple levels of verification to balance accessibility with trust.',
      levels: [
        {
          number: '0',
          title: 'Open Access',
          intro: 'Anyone can join and explore.',
          points: ['Limited participation rights'],
        },
        {
          number: '1',
          title: 'Basic Verification',
          intro: 'Email and phone confirmation with bot protection systems.',
          points: ['Purpose: Prevent automated abuse.'],
        },
        {
          number: '2',
          title: 'Location Verification',
          intro: 'The user declares their riding.',
          points: ['Supporting signals may include postal code or optional documentation', 'Purpose: Ensure local relevance of participation.'],
        },
        {
          number: '3',
          title: 'Digital Identity Verification',
          intro: 'Optional document upload plus liveness or identity checks.',
          points: ['Purpose: Establish stronger identity confidence.'],
        },
        {
          number: '4',
          title: 'Community Verification',
          intro: 'Members gain trust through validation by others within their Civil Chamber.',
          points: [
            'Endorsements from verified members',
            'Participation in local initiatives',
            'Direct interaction with Coordinators or community leaders',
            'Purpose: Build trust through real human relationships, not just documents.',
          ],
        },
        {
          number: '5',
          title: 'Gold Maple Leaf (Authorized Human)',
          intro: 'The highest level of verification within Civil.',
          points: [
            'Awarded to members verified through digital and local signals',
            'Confirmed by multiple trusted members within their riding',
            'Actively participating in their Civil Chamber',
          ],
        },
      ],
      goldTitle: 'What the Gold Maple Leaf Represents',
      goldIntro: 'Members with the Gold Maple Leaf:',
      goldPoints: [
        'Are recognized as authentic participants',
        'Have established trust within their riding',
        'Contribute meaningfully to governance and community activity',
      ],
      goldEnablesTitle: 'This status may enable',
      goldEnablesPoints: [
        'Participation in higher-trust voting processes',
        'Eligibility for leadership roles or candidacy',
        'Greater influence within proposals and initiatives',
      ],
      principlesTitle: 'Core Principles',
      principles: [
        {
          number: '1',
          title: 'No Centralized Identity Control',
          points: [
            'Civil does not create or enforce a national digital identity system',
            'No central authority owns user identity',
            'No universal ID requirement',
            'No cross-system tracking',
          ],
        },
        {
          number: '2',
          title: 'Trust Is Built, Not Assigned',
          points: ['Verification increases over time through participation, contribution, and community validation'],
        },
        {
          number: '3',
          title: 'Minimal Data Collection',
          points: ['Only necessary data is used', 'No excessive storage', 'No unnecessary sharing', 'No profiling beyond system needs'],
        },
        {
          number: '4',
          title: 'Community-Driven Validation',
          points: ['Real humans validate real humans', 'Trust emerges locally', 'Relationships matter', 'Systems reinforce, not replace, human judgment'],
        },
        {
          number: '5',
          title: 'Inclusive Participation',
          points: ['Users can participate at different levels without full verification', 'No forced identity requirements', 'Open access remains available', 'Higher trust unlocks greater responsibility, not basic access'],
        },
      ],
      preventsTitle: 'What This Prevents',
      preventsPoints: [
        'Fake accounts and bot networks',
        'Identity spoofing and document fraud',
        'Coordinated manipulation of voting systems',
        'Centralized control over citizen participation',
      ],
      enablesTitle: 'What This Enables',
      enablesPoints: [
        'Trusted participation without surveillance',
        'Secure governance without exclusion',
        'Scalable systems grounded in real communities',
        'Authentic representation of citizens',
      ],
      closingTitle: 'Closing Statement',
      closing: [
        'Trust is the foundation of any functioning system.',
        'Civil Citizens builds trust differently.',
        'Not through centralized control.',
        'Not through forced identity systems.',
        'But through real people, real participation, and real community validation.',
        'At the highest level, trust is recognized by a simple symbol: the Gold Maple Leaf.',
        'A mark of authenticity.',
        'A mark of participation.',
        'A mark of trust earned within the community.',
      ],
      back: 'Back to Implementation',
    },
    fr: {
      eyebrow: 'Plateforme / Mise en oeuvre / Systeme de verification humaine et de confiance',
      title: 'Systeme de verification humaine et de confiance',
      objectiveTitle: 'Objectif',
      objective:
        'Etablir un systeme de participation fiable et verifie humainement qui assure l integrite, previent la manipulation et preserve la liberte individuelle sans s appuyer sur un controle centralise de l identite.',
      challengeTitle: 'Le defi',
      challengeIntro: 'Les systemes numeriques font aujourd hui face a une menace croissante :',
      challengePoints: [
        'Identites generees par IA',
        'Faux documents et usurpation d identite',
        'Reseaux automatises de robots influencant les resultats',
      ],
      challengeCopy:
        'Les methodes traditionnelles de verification, comme le televersement de documents ou les controles d identite, ne suffisent plus a elles seules.',
      concernsTitle: 'En meme temps, les Canadiens ont des preoccupations claires concernant',
      concernsPoints: [
        'Les systemes d identite numerique centralises',
        'La surveillance et l usage abusif des donnees',
        'La perte de vie privee et de controle personnel',
      ],
      requirementIntro: 'Cela cree une exigence critique :',
      requirementCopy:
        'Civil doit verifier de vrais humains sans devenir une autorite centralisee de l identite.',
      approachTitle: 'L approche Civil',
      approachCopy:
        'Civil Citizens introduit un systeme de verification par couches qui combine validation numerique et confiance humaine reelle.',
      approachClosing:
        'La verification ne repose pas sur un seul point de controle. Elle se construit progressivement par des signaux d identite, la participation et la validation communautaire.',
      levelsTitle: 'Niveaux de verification',
      levelsIntro: 'Civil utilise plusieurs niveaux de verification pour equilibrer accessibilite et confiance.',
      levels: [
        {
          number: '0',
          title: 'Acces ouvert',
          intro: 'Tout le monde peut joindre et explorer.',
          points: ['Droits de participation limites'],
        },
        {
          number: '1',
          title: 'Verification de base',
          intro: 'Confirmation par courriel et telephone avec systemes de protection contre les robots.',
          points: ['Objectif : prevenir les abus automatises.'],
        },
        {
          number: '2',
          title: 'Verification de localisation',
          intro: 'L utilisateur declare sa circonscription.',
          points: ['Les signaux de soutien peuvent inclure le code postal ou une documentation optionnelle', 'Objectif : assurer la pertinence locale de la participation.'],
        },
        {
          number: '3',
          title: 'Verification d identite numerique',
          intro: 'Televersement optionnel de documents avec controles de vivacite ou d identite.',
          points: ['Objectif : etablir une confiance identitaire plus forte.'],
        },
        {
          number: '4',
          title: 'Verification communautaire',
          intro: 'Les membres gagnent en confiance grace a la validation par d autres personnes dans leur Chambre Civil.',
          points: [
            'Appuis de membres verifies',
            'Participation a des initiatives locales',
            'Interaction directe avec les coordinateurs ou leaders communautaires',
            'Objectif : construire la confiance par de vraies relations humaines, et non seulement par des documents.',
          ],
        },
        {
          number: '5',
          title: 'Feuille d erable d or (humain autorise)',
          intro: 'Le plus haut niveau de verification dans Civil.',
          points: [
            'Accordee aux membres verifies par des signaux numeriques et locaux',
            'Confirmes par plusieurs membres de confiance dans leur circonscription',
            'Participant activement a leur Chambre Civil',
          ],
        },
      ],
      goldTitle: 'Ce que represente la Feuille d erable d or',
      goldIntro: 'Les membres portant la Feuille d erable d or :',
      goldPoints: [
        'Sont reconnus comme des participants authentiques',
        'Ont etabli la confiance dans leur circonscription',
        'Contribuent de facon significative a la gouvernance et a l activite communautaire',
      ],
      goldEnablesTitle: 'Ce statut peut permettre',
      goldEnablesPoints: [
        'La participation a des processus de vote a confiance plus elevee',
        'L admissibilite a des roles de leadership ou a une candidature',
        'Une plus grande influence dans les propositions et initiatives',
      ],
      principlesTitle: 'Principes de base',
      principles: [
        {
          number: '1',
          title: 'Aucun controle centralise de l identite',
          points: [
            'Civil ne cree ni n impose un systeme national d identite numerique',
            'Aucune autorite centrale ne possede l identite des utilisateurs',
            'Aucune obligation d identifiant universel',
            'Aucun suivi intersysteme',
          ],
        },
        {
          number: '2',
          title: 'La confiance se construit, elle n est pas attribuee',
          points: ['La verification augmente avec le temps par la participation, la contribution et la validation communautaire'],
        },
        {
          number: '3',
          title: 'Collecte minimale de donnees',
          points: ['Seules les donnees necessaires sont utilisees', 'Aucun stockage excessif', 'Aucun partage inutile', 'Aucun profilage au-dela des besoins du systeme'],
        },
        {
          number: '4',
          title: 'Validation dirigee par la communaute',
          points: ['De vrais humains valident de vrais humains', 'La confiance emerge localement', 'Les relations comptent', 'Les systemes renforcent le jugement humain au lieu de le remplacer'],
        },
        {
          number: '5',
          title: 'Participation inclusive',
          points: ['Les utilisateurs peuvent participer a differents niveaux sans verification complete', 'Aucune exigence d identite forcee', 'L acces ouvert demeure disponible', 'Une confiance plus elevee donne plus de responsabilites, pas l acces de base'],
        },
      ],
      preventsTitle: 'Ce que cela previent',
      preventsPoints: [
        'Les faux comptes et reseaux de robots',
        'L usurpation d identite et la fraude documentaire',
        'La manipulation coordonnee des systemes de vote',
        'Le controle centralise de la participation citoyenne',
      ],
      enablesTitle: 'Ce que cela permet',
      enablesPoints: [
        'Une participation digne de confiance sans surveillance',
        'Une gouvernance securisee sans exclusion',
        'Des systemes evolutifs ancrés dans de vraies communautes',
        'Une representation authentique des citoyens',
      ],
      closingTitle: 'Declaration finale',
      closing: [
        'La confiance est le fondement de tout systeme fonctionnel.',
        'Civil Citizens construit la confiance autrement.',
        'Ni par le controle centralise.',
        'Ni par des systemes d identite forces.',
        'Mais par de vraies personnes, une vraie participation et une vraie validation communautaire.',
        'Au plus haut niveau, la confiance est reconnue par un symbole simple : la Feuille d erable d or.',
        'Une marque d authenticite.',
        'Une marque de participation.',
        'Une marque de confiance meritee dans la communaute.',
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
            <h2 className="section-title">{content.challengeTitle}</h2>
          </div>
        </div>
        <p className="policy-detail__summary">{content.challengeIntro}</p>
        <div className="technology-ai-page__split-grid" style={{ marginTop: '1.5rem' }}>
          <div className="technology-ai-page__panel">
            <div className="founding-principles-page__list technology-ai-page__list">
              {content.challengePoints.map((point) => (
                <p key={point} className="policy-card__description founding-principles-page__item">{point}</p>
              ))}
            </div>
            <p className="policy-detail__summary" style={{ marginTop: '1rem' }}>{content.challengeCopy}</p>
          </div>
          <div className="technology-ai-page__panel technology-ai-page__panel--accent">
            <h3 className="policy-card__title">{content.concernsTitle}</h3>
            <div className="founding-principles-page__list technology-ai-page__list" style={{ marginTop: '1rem' }}>
              {content.concernsPoints.map((point) => (
                <p key={point} className="policy-card__description founding-principles-page__item">{point}</p>
              ))}
            </div>
          </div>
        </div>
        <div className="technology-ai-page__panel governance-page__full-panel" style={{ marginTop: '1.5rem' }}>
          <p className="policy-detail__summary">{content.requirementIntro}</p>
          <p className="policy-detail__summary">{content.requirementCopy}</p>
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
            <h2 className="section-title">{content.levelsTitle}</h2>
          </div>
        </div>
        <p className="policy-detail__summary">{content.levelsIntro}</p>
        <div className="policy-grid governance-page__grid">
          {content.levels.map((level) => (
            <article key={level.number} className="policy-card technology-ai-page__card">
              <p className="policy-card__number">{level.number}</p>
              <h3 className="policy-card__title">{level.title}</h3>
              <p className="policy-card__description">{level.intro}</p>
              <div className="founding-principles-page__list technology-ai-page__list" style={{ marginTop: '1rem' }}>
                {level.points.map((point) => (
                  <p key={point} className="policy-card__description founding-principles-page__item">{point}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="policy-foundation governance-page__section">
        <div className="technology-ai-page__split-grid">
          <div className="technology-ai-page__panel governance-page__full-panel">
            <h2 className="section-title">{content.goldTitle}</h2>
            <p className="policy-detail__summary">{content.goldIntro}</p>
            <div className="founding-principles-page__list technology-ai-page__list">
              {content.goldPoints.map((point) => (
                <p key={point} className="policy-card__description founding-principles-page__item">{point}</p>
              ))}
            </div>
          </div>
          <div className="technology-ai-page__panel technology-ai-page__panel--accent">
            <h2 className="section-title">{content.goldEnablesTitle}</h2>
            <div className="policy-aside__list technology-ai-page__outcomes">
              {content.goldEnablesPoints.map((point) => (
                <span key={point}>{point}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="policy-foundation governance-page__section">
        <div className="policy-foundation__heading">
          <div>
            <h2 className="section-title">{content.principlesTitle}</h2>
          </div>
        </div>
        <div className="policy-grid governance-page__grid">
          {content.principles.map((principle) => (
            <article key={principle.number} className="policy-card technology-ai-page__card">
              <p className="policy-card__number">{principle.number}</p>
              <h3 className="policy-card__title">{principle.title}</h3>
              <div className="founding-principles-page__list technology-ai-page__list">
                {principle.points.map((point) => (
                  <p key={point} className="policy-card__description founding-principles-page__item">{point}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="policy-foundation governance-page__section">
        <div className="technology-ai-page__split-grid">
          <div className="technology-ai-page__panel governance-page__full-panel">
            <h2 className="section-title">{content.preventsTitle}</h2>
            <div className="founding-principles-page__list technology-ai-page__list">
              {content.preventsPoints.map((point) => (
                <p key={point} className="policy-card__description founding-principles-page__item">{point}</p>
              ))}
            </div>
          </div>
          <div className="technology-ai-page__panel technology-ai-page__panel--accent">
            <h2 className="section-title">{content.enablesTitle}</h2>
            <div className="policy-aside__list technology-ai-page__outcomes">
              {content.enablesPoints.map((point) => (
                <span key={point}>{point}</span>
              ))}
            </div>
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
