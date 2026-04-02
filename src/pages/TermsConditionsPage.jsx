import { useTranslation } from 'react-i18next'
import { localizeByLanguage } from '../lib/locale'

export default function TermsConditionsPage() {
  const { i18n } = useTranslation()
  const content = localizeByLanguage(i18n, {
    en: {
      title: 'Terms and Conditions',
      intro:
        'These terms describe the basic conditions for using the Civil Citizens For Canada Party website and Civil AI.',
      sections: [
        {
          title: 'Informational Use',
          body:
            'Civil AI is provided as an informational political interface based on supplied CCC material and selected comparison-party material when available. It is not legal, financial, medical, or emergency advice.',
        },
        {
          title: 'Anonymous Improvement Logging',
          body:
            'By using Civil AI, you acknowledge that anonymous question-and-answer records may be stored to improve the platform, refine answer quality, identify missing content, and improve public political information on the site.',
        },
        {
          title: 'User Responsibility',
          body:
            'Do not submit sensitive personal information, payment details, private credentials, or confidential information through Civil AI. Users remain responsible for how they use the information returned by the system.',
        },
        {
          title: 'Service Changes',
          body:
            'Civil Citizens may update, refine, suspend, or remove parts of the website or Civil AI feature at any time as the platform evolves.',
        },
        {
          title: 'Content Limits',
          body:
            'Civil AI may be limited by the material available to it at the time of a question. Comparison answers about other parties depend on the external material that has been collected and supplied to the system.',
        },
        {
          title: 'Acceptance',
          body:
            'By continuing to use the website and Civil AI, you accept these terms and the related privacy policy.',
        },
      ],
    },
    fr: {
      title: 'Conditions d utilisation',
      intro:
        'Ces conditions decrivent les regles de base pour l utilisation du site du Parti Citoyens Civils du Canada et de Civil AI.',
      sections: [
        {
          title: 'Usage informatif',
          body:
            'Civil AI est fourni comme interface politique informative basee sur le contenu CCC fourni et, lorsque disponible, sur du contenu comparatif d autres partis. Il ne constitue pas un avis juridique, financier, medical ou d urgence.',
        },
        {
          title: 'Journalisation anonyme pour amelioration',
          body:
            'En utilisant Civil AI, vous reconnaissez que des enregistrements anonymes de questions et reponses peuvent etre conserves afin d ameliorer la plateforme, la qualite des reponses, le contenu manquant et l information publique presentee sur le site.',
        },
        {
          title: 'Responsabilite de l utilisateur',
          body:
            'Ne soumettez pas de renseignements personnels sensibles, de details de paiement, d identifiants prives ou d information confidentielle dans Civil AI. Les utilisateurs demeurent responsables de l usage qu ils font des reponses du systeme.',
        },
        {
          title: 'Modification du service',
          body:
            'Civil Citizens peut mettre a jour, modifier, suspendre ou retirer une partie du site ou de Civil AI a tout moment selon l evolution de la plateforme.',
        },
        {
          title: 'Limites de contenu',
          body:
            'Civil AI peut etre limite par le contenu qui lui est accessible au moment de la question. Les reponses comparatives sur d autres partis dependent du contenu externe collecte et fourni au systeme.',
        },
        {
          title: 'Acceptation',
          body:
            'En continuant d utiliser le site et Civil AI, vous acceptez ces conditions ainsi que la politique de confidentialite connexe.',
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