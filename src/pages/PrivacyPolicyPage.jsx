import { useTranslation } from 'react-i18next'
import { localizeByLanguage } from '../lib/locale'

export default function PrivacyPolicyPage() {
  const { i18n } = useTranslation()
  const content = localizeByLanguage(i18n, {
    en: {
      title: 'Privacy Policy',
      intro:
        'Civil Citizens For Canada Party records limited anonymous Civil AI question-and-answer activity to improve the platform, refine public information quality, and identify where clearer policy explanations are needed.',
      sections: [
        {
          title: 'What We Record',
          body:
            'We may record the question submitted to Civil AI, the response returned by Civil AI, the page language in use, and a timestamp for the interaction. We do not intentionally ask Civil AI users to submit sensitive personal information through the chat.',
        },
        {
          title: 'How We Use This Information',
          body:
            'Recorded anonymous question-and-answer data is used to improve answer quality, identify missing content on the site, improve comparisons, refine policy explanations, and improve the user experience of Civil AI.',
        },
        {
          title: 'Anonymous Logging',
          body:
            'These records are intended to be anonymous platform-improvement logs. They are not designed as public profiles, membership records, or identity records. Please avoid submitting personal, financial, health, or other sensitive private information in the Civil AI chat box.',
        },
        {
          title: 'Storage and Retention',
          body:
            'Question-and-answer logs may be stored in server-side log files maintained for platform development, quality review, and operational troubleshooting. Retention may change over time as the platform evolves.',
        },
        {
          title: 'External AI Processing',
          body:
            'Civil AI responses are generated through external AI infrastructure configured by the platform. Operational question content may therefore be processed through those services in order to produce an answer.',
        },
        {
          title: 'Contact',
          body:
            'If you have a privacy concern related to this website or Civil AI, contact Civil Citizens through the public channels listed on the site.',
        },
      ],
    },
    fr: {
      title: 'Politique de confidentialite',
      intro:
        'Le Parti Citoyens Civils du Canada enregistre une activite limitee et anonyme des questions et reponses de Civil AI afin d ameliorer la plateforme, de raffiner la qualite de l information publique et d identifier les endroits ou des explications plus claires sont necessaires.',
      sections: [
        {
          title: 'Ce que nous enregistrons',
          body:
            'Nous pouvons enregistrer la question soumise a Civil AI, la reponse retournee par Civil AI, la langue de la page utilisee et l horodatage de l interaction. Nous ne cherchons pas volontairement a recueillir des renseignements personnels sensibles dans le clavardage.',
        },
        {
          title: 'Utilisation de cette information',
          body:
            'Les donnees anonymes de questions et reponses servent a ameliorer la qualite des reponses, a identifier le contenu manquant sur le site, a ameliorer les comparaisons, a raffiner les explications politiques et a ameliorer l experience utilisateur de Civil AI.',
        },
        {
          title: 'Journalisation anonyme',
          body:
            'Ces enregistrements sont destines a des journaux anonymes d amelioration de la plateforme. Ils ne sont pas concus comme des profils publics, des dossiers d adhesion ou des dossiers d identite. Veuillez eviter de soumettre des renseignements personnels, financiers, medicaux ou autres renseignements sensibles dans Civil AI.',
        },
        {
          title: 'Stockage et conservation',
          body:
            'Les journaux de questions et reponses peuvent etre conserves dans des fichiers serveur relies au developpement de la plateforme, a la revue de la qualite et au depannage operationnel. La duree de conservation peut changer avec l evolution de la plateforme.',
        },
        {
          title: 'Traitement externe par IA',
          body:
            'Les reponses de Civil AI sont generees par une infrastructure d IA externe configuree pour la plateforme. Le contenu des questions peut donc etre traite par ces services afin de produire une reponse.',
        },
        {
          title: 'Contact',
          body:
            'Si vous avez une preoccupation liee a la confidentialite sur ce site ou dans Civil AI, communiquez avec Civil Citizens par les canaux publics affiches sur le site.',
        },
      ],
    },
  })

  return (
    <div className="policy-foundation">
      <section className="policy-foundation__heading">
        <p className="policy-foundation__eyebrow">Civil AI</p>
        <h1 className="section-title">{content.title}</h1>
        <p className="section-copy">{content.intro}</p>
      </section>

      {content.sections.map((section) => (
        <section key={section.title} className="policy-foundation__section">
          <h2 className="section-title">{section.title}</h2>
          <p className="section-copy">{section.body}</p>
        </section>
      ))}
    </div>
  )
}