import i18n from '../i18n'
import { getLocaleKey } from '../lib/locale'

const localized = (variants) => variants[getLocaleKey(i18n)]

const aboutItemsBase = [
  {
    label: { en: 'About Overview', fr: 'Aperçu' },
    path: '/about',
    summary: {
      en: 'A high-level introduction to the movement, its mission, and why it exists.',
      fr: 'Une introduction générale au mouvement, à sa mission et à sa raison d’être.',
    },
    parentLabel: { en: 'About', fr: 'À propos' },
    parentPath: '/about',
    hideInNav: true,
  },
  {
    label: { en: 'What is Civil Citizens Canada', fr: 'Qu’est-ce que Citoyens Civils Canada' },
    path: '/about/what-is-civil-citizens-canada',
    summary: {
      en: 'Explain what CCC is, who it serves, and the role it intends to play in Canada.',
      fr: 'Expliquer ce qu’est le CCC, à qui il s’adresse et le rôle qu’il veut jouer au Canada.',
    },
    parentLabel: { en: 'About', fr: 'À propos' },
    parentPath: '/about',
    hideInNav: true,
  },
  {
    label: { en: 'Founding Principles', fr: 'Principes fondateurs' },
    path: '/about/founding-principles',
    summary: {
      en: 'Outline the core principles that guide the party and its policy approach.',
      fr: 'Présente les principes fondamentaux qui guident le parti et son approche politique.',
    },
    parentLabel: { en: 'About', fr: 'À propos' },
    parentPath: '/about',
  },
  {
    label: { en: 'Why CCC Exists', fr: 'Pourquoi le CCC existe' },
    path: '/about/why-ccc-exists',
    summary: {
      en: 'Set out the political and civic case for why CCC is being built now.',
      fr: 'Présente l’argument civique et politique expliquant pourquoi le CCC est construit maintenant.',
    },
    parentLabel: { en: 'About', fr: 'À propos' },
    parentPath: '/about',
    hideInNav: true,
  },
  {
    label: { en: 'Leadership', fr: 'Leadership' },
    path: '/about/leadership',
    summary: {
      en: 'Meet the current public leadership profile and founding direction for CCC.',
      fr: 'Découvrez le profil public actuel du leadership et l’orientation fondatrice du CCC.',
    },
    parentLabel: { en: 'About', fr: 'À propos' },
    parentPath: '/about',
  },
  {
    label: { en: 'Structure', fr: 'Structure' },
    path: '/about/structure',
    summary: {
      en: 'Describe the organizational path from EDA to provincial to national structure.',
      fr: 'Décrit le parcours organisationnel de l’ADE jusqu’aux structures provinciale et nationale.',
    },
    parentLabel: { en: 'About', fr: 'À propos' },
    parentPath: '/about',
    hideInNav: true,
  },
]

const platformGroupsBase = [
  {
    title: { en: 'Economic Foundation', fr: 'Fondation économique' },
    path: '/platform/economic-foundation',
    summary: {
      en: 'Tax policy, growth, and a productive economy that rewards work and investment.',
      fr: 'Fiscalité, croissance et économie productive qui récompensent le travail et l’investissement.',
    },
    items: [
      {
        label: { en: 'Tax Reform', fr: 'Réforme fiscale' },
        path: '/platform/economic-foundation',
        summary: {
          en: 'The live economic policy overview and tax reform foundation page.',
          fr: 'La page active de vue d’ensemble économique et de fondation de la réforme fiscale.',
        },
        parentLabel: { en: 'Economic Foundation', fr: 'Fondation économique' },
        parentPath: '/platform/economic-foundation',
      },
      {
        label: { en: 'Small Business Growth', fr: 'Croissance des petites entreprises' },
        path: '/platform/economic-foundation/small-business-growth',
        summary: {
          en: 'How CCC plans to simplify conditions for entrepreneurs and local employers.',
          fr: 'Comment le CCC compte simplifier les conditions pour les entrepreneurs et les employeurs locaux.',
        },
        parentLabel: { en: 'Economic Foundation', fr: 'Fondation économique' },
        parentPath: '/platform/economic-foundation',
      },
      {
        label: { en: 'Canadian Industry', fr: 'Industrie canadienne' },
        path: '/platform/economic-foundation/canadian-industry',
        summary: {
          en: 'A placeholder for industrial development, productivity, and domestic capacity.',
          fr: 'Un espace réservé pour le développement industriel, la productivité et la capacité intérieure.',
        },
        parentLabel: { en: 'Economic Foundation', fr: 'Fondation économique' },
        parentPath: '/platform/economic-foundation',
      },
      {
        label: { en: 'Cost of Living', fr: 'Coût de la vie' },
        path: '/platform/economic-foundation/cost-of-living',
        summary: {
          en: 'A placeholder for household affordability and pressure relief policy.',
          fr: 'Un espace réservé pour l’abordabilité des ménages et les mesures d’allègement.',
        },
        parentLabel: { en: 'Economic Foundation', fr: 'Fondation économique' },
        parentPath: '/platform/economic-foundation',
      },
    ],
  },
  {
    title: { en: 'Technology & AI', fr: 'Technologie et IA' },
    path: '/platform/technology-ai',
    summary: {
      en: 'A national approach to AI, automation, robotics, and citizen data rights.',
      fr: 'Une approche nationale de l’IA, de l’automatisation, de la robotique et des droits des citoyens sur leurs données.',
    },
    items: [
      {
        label: { en: 'AI Governance', fr: 'Gouvernance de l’IA' },
        path: '/platform/technology-ai/ai-governance',
        summary: {
          en: 'Define policy guardrails, accountability, and national AI standards.',
          fr: 'Définir les garde-fous politiques, la reddition de comptes et les normes nationales en IA.',
        },
        parentLabel: { en: 'Technology & AI', fr: 'Technologie et IA' },
        parentPath: '/platform/technology-ai',
      },
      {
        label: { en: 'Automation & Jobs', fr: 'Automatisation et emplois' },
        path: '/platform/technology-ai/automation-jobs',
        summary: {
          en: 'Set out how workers and communities adapt as automation expands.',
          fr: 'Décrire comment les travailleurs et les communautés s’adaptent à mesure que l’automatisation progresse.',
        },
        parentLabel: { en: 'Technology & AI', fr: 'Technologie et IA' },
        parentPath: '/platform/technology-ai',
      },
      {
        label: { en: 'Robotics Integration', fr: 'Intégration de la robotique' },
        path: '/platform/technology-ai/robotics-integration',
        summary: {
          en: 'Describe where robotics should be encouraged across key Canadian sectors.',
          fr: 'Décrire où la robotique devrait être encouragée dans les secteurs clés du Canada.',
        },
        parentLabel: { en: 'Technology & AI', fr: 'Technologie et IA' },
        parentPath: '/platform/technology-ai',
      },
      {
        label: { en: 'Data Ownership', fr: 'Propriété des données' },
        path: '/platform/technology-ai/data-ownership',
        summary: {
          en: 'Establish who controls personal, civic, and commercial data in Canada.',
          fr: 'Établir qui contrôle les données personnelles, civiques et commerciales au Canada.',
        },
        parentLabel: { en: 'Technology & AI', fr: 'Technologie et IA' },
        parentPath: '/platform/technology-ai',
      },
    ],
  },
  {
    title: { en: 'Governance', fr: 'Gouvernance' },
    path: '/platform/governance',
    summary: {
      en: 'Structural tools for citizen feedback, transparent systems, and EDA-driven politics.',
      fr: 'Des outils structurels pour la rétroaction citoyenne, des systèmes transparents et une politique axée sur les ADE.',
    },
    items: [
      {
        label: { en: 'Continuous Citizen Input (Civil)', fr: 'Participation citoyenne continue (Civil)' },
        path: '/platform/governance/continuous-citizen-input',
        summary: {
          en: 'Explain how citizens continuously shape the system instead of only voting periodically.',
          fr: 'Expliquer comment les citoyens façonnent continuellement le système au lieu de voter seulement à l’occasion.',
        },
        parentLabel: { en: 'Governance', fr: 'Gouvernance' },
        parentPath: '/platform/governance',
      },
      {
        label: { en: 'Electoral District System (EDA)', fr: 'Système de district électoral (ADE)' },
        path: '/platform/governance/electoral-district-system',
        summary: {
          en: 'Describe the district-level operating model for organizing and representation.',
          fr: 'Décrire le modèle opérationnel au niveau du district pour l’organisation et la représentation.',
        },
        parentLabel: { en: 'Governance', fr: 'Gouvernance' },
        parentPath: '/platform/governance',
      },
      {
        label: { en: 'Transparency Systems', fr: 'Systèmes de transparence' },
        path: '/platform/governance/transparency-systems',
        summary: {
          en: 'Outline reporting, decision visibility, and public accountability systems.',
          fr: 'Présenter les systèmes de reddition de comptes, de visibilité des décisions et de responsabilité publique.',
        },
        parentLabel: { en: 'Governance', fr: 'Gouvernance' },
        parentPath: '/platform/governance',
      },
    ],
  },
  {
    title: { en: 'Implementation', fr: 'Mise en oeuvre' },
    path: '/platform#platform-implementation',
    summary: {
      en: 'How CCC intends to build the civic system itself, from district infrastructure to execution and public trust.',
      fr: 'Comment le CCC compte construire le systeme civique lui-meme, de l infrastructure locale a l execution et a la confiance publique.',
    },
    items: [
      {
        label: { en: 'Restoring Power to Citizens', fr: 'Redonner le pouvoir aux citoyens' },
        path: '/platform/implementation/restoring-power-to-citizens',
        summary: {
          en: 'How political power moves back to the riding level through persistent citizen participation.',
          fr: 'Comment le pouvoir politique revient au niveau des circonscriptions grace a une participation citoyenne continue.',
        },
        parentLabel: { en: 'Implementation', fr: 'Mise en oeuvre' },
        parentPath: '/platform#platform-implementation',
      },
      {
        label: { en: 'Chambers of Citizens', fr: 'Chambres de citoyens' },
        path: '/platform/implementation/chambers-of-citizens',
        summary: {
          en: 'District-level civic infrastructure for organizing, decision-making, and durable local coordination.',
          fr: 'Infrastructure civique de district pour l organisation, la prise de decision et une coordination locale durable.',
        },
        parentLabel: { en: 'Implementation', fr: 'Mise en oeuvre' },
        parentPath: '/platform#platform-implementation',
      },
      {
        label: { en: 'Digital Governance', fr: 'Gouvernance numerique' },
        path: '/platform/implementation/digital-governance',
        summary: {
          en: 'The digital operating layer for proposals, feedback, decisions, and visible public process.',
          fr: 'La couche operationnelle numerique pour les propositions, la retroaction, les decisions et un processus public visible.',
        },
        parentLabel: { en: 'Implementation', fr: 'Mise en oeuvre' },
        parentPath: '/platform#platform-implementation',
      },
      {
        label: { en: 'Candidate Selection', fr: 'Selection des candidats' },
        path: '/platform/implementation/candidate-selection',
        summary: {
          en: 'A selection model that rewards local trust, merit, and ongoing contribution over backroom control.',
          fr: 'Un modele de selection qui recompense la confiance locale, le merite et la contribution continue plutot que le controle en coulisses.',
        },
        parentLabel: { en: 'Implementation', fr: 'Mise en oeuvre' },
        parentPath: '/platform#platform-implementation',
      },
      {
        label: { en: 'MP Accountability', fr: 'Responsabilite des deputes' },
        path: '/platform/implementation/mp-accountability',
        summary: {
          en: 'Systems for visible commitments, measurable follow-through, and citizen-level oversight.',
          fr: 'Des systemes pour des engagements visibles, un suivi mesurable et une supervision au niveau citoyen.',
        },
        parentLabel: { en: 'Implementation', fr: 'Mise en oeuvre' },
        parentPath: '/platform#platform-implementation',
      },
      {
        label: { en: 'Civil Wallet', fr: 'Portefeuille Civil' },
        path: '/platform/implementation/civil-wallet',
        summary: {
          en: 'Identity, funding, and contribution infrastructure for members, campaigns, and civic participation.',
          fr: 'Infrastructure d identite, de financement et de contribution pour les membres, les campagnes et la participation civique.',
        },
        parentLabel: { en: 'Implementation', fr: 'Mise en oeuvre' },
        parentPath: '/platform#platform-implementation',
      },
      {
        label: { en: 'Member Growth', fr: 'Croissance des membres' },
        path: '/platform/implementation/member-growth',
        summary: {
          en: 'How CCC expands membership density, local leadership, and district activation across Canada.',
          fr: 'Comment le CCC augmente la densite de membres, le leadership local et l activation des districts partout au Canada.',
        },
        parentLabel: { en: 'Implementation', fr: 'Mise en oeuvre' },
        parentPath: '/platform#platform-implementation',
      },
      {
        label: { en: 'Trust, Safety, and Verification', fr: 'Confiance, securite et verification' },
        path: '/platform/implementation/trust-safety',
        summary: {
          en: 'Verification, moderation, and abuse-prevention systems that protect legitimacy without killing participation.',
          fr: 'Des systemes de verification, de moderation et de prevention des abus qui protegent la legitimite sans tuer la participation.',
        },
        parentLabel: { en: 'Implementation', fr: 'Mise en oeuvre' },
        parentPath: '/platform#platform-implementation',
      },
      {
        label: { en: 'Roadmap', fr: 'Feuille de route' },
        path: '/platform/implementation/roadmap',
        summary: {
          en: 'The phased execution path from pilots and district build-out to national operating capacity.',
          fr: 'Le parcours d execution par phases, des projets pilotes et du deploiement local jusqu a une capacite nationale.',
        },
        parentLabel: { en: 'Implementation', fr: 'Mise en oeuvre' },
        parentPath: '/platform#platform-implementation-title',
      },
    ],
  },
  {
    title: { en: 'Immigration', fr: 'Immigration' },
    path: '/platform/immigration',
    summary: {
      en: 'Population planning, integration, and growth strategies aligned with national capacity.',
      fr: 'Planification démographique, intégration et stratégies de croissance alignées sur la capacité nationale.',
    },
    items: [
      {
        label: { en: 'Population Strategy', fr: 'Stratégie démographique' },
        path: '/platform/immigration/population-strategy',
        summary: {
          en: 'Define how population policy should align with housing, jobs, and infrastructure.',
          fr: 'Définir comment la politique démographique doit s’aligner avec le logement, l’emploi et les infrastructures.',
        },
        parentLabel: { en: 'Immigration', fr: 'Immigration' },
        parentPath: '/platform/immigration',
      },
      {
        label: { en: 'Integration Model', fr: 'Modèle d’intégration' },
        path: '/platform/immigration/integration-model',
        summary: {
          en: 'Set out practical integration expectations for strong communities and social cohesion.',
          fr: 'Définir des attentes d’intégration concrètes pour des communautés fortes et une cohésion sociale durable.',
        },
        parentLabel: { en: 'Immigration', fr: 'Immigration' },
        parentPath: '/platform/immigration',
      },
      {
        label: { en: 'Regional Growth', fr: 'Croissance régionale' },
        path: '/platform/immigration/regional-growth',
        summary: {
          en: 'Tie immigration and settlement policy to regional opportunity across Canada.',
          fr: 'Relier l’immigration et la politique d’établissement aux occasions régionales partout au Canada.',
        },
        parentLabel: { en: 'Immigration', fr: 'Immigration' },
        parentPath: '/platform/immigration',
      },
    ],
  },
  {
    title: { en: 'Agriculture & Food', fr: 'Agriculture et alimentation' },
    path: '/platform/agriculture-food',
    summary: {
      en: 'Domestic food production, greenhouse expansion, and long-term agricultural resilience.',
      fr: 'Production alimentaire nationale, expansion des serres et résilience agricole à long terme.',
    },
    items: [
      {
        label: { en: 'Food Sovereignty', fr: 'Souveraineté alimentaire' },
        path: '/platform/agriculture-food/food-sovereignty',
        summary: {
          en: 'Describe how Canada can secure more of its own food supply.',
          fr: 'Décrire comment le Canada peut sécuriser une plus grande part de sa propre alimentation.',
        },
        parentLabel: { en: 'Agriculture & Food', fr: 'Agriculture et alimentation' },
        parentPath: '/platform/agriculture-food',
      },
      {
        label: { en: 'Greenhouse Expansion', fr: 'Expansion des serres' },
        path: '/platform/agriculture-food/greenhouse-expansion',
        summary: {
          en: 'A placeholder for domestic greenhouse strategy and year-round production.',
          fr: 'Un espace réservé pour la stratégie nationale des serres et la production à l’année.',
        },
        parentLabel: { en: 'Agriculture & Food', fr: 'Agriculture et alimentation' },
        parentPath: '/platform/agriculture-food',
      },
      {
        label: { en: 'Canadian Farming', fr: 'Agriculture canadienne' },
        path: '/platform/agriculture-food/canadian-farming',
        summary: {
          en: 'Support policy for farms, producers, and food infrastructure across the country.',
          fr: 'Politiques de soutien pour les fermes, les producteurs et les infrastructures alimentaires partout au pays.',
        },
        parentLabel: { en: 'Agriculture & Food', fr: 'Agriculture et alimentation' },
        parentPath: '/platform/agriculture-food',
      },
    ],
  },
  {
    title: { en: 'Energy & Infrastructure', fr: 'Énergie et infrastructures' },
    path: '/platform/energy-infrastructure',
    summary: {
      en: 'Energy independence and the hard infrastructure needed for national capacity.',
      fr: 'Indépendance énergétique et infrastructures matérielles nécessaires à la capacité nationale.',
    },
    items: [
      {
        label: { en: 'Energy Independence', fr: 'Indépendance énergétique' },
        path: '/platform/energy-infrastructure/energy-independence',
        summary: {
          en: 'A placeholder for domestic energy strategy and national self-reliance.',
          fr: 'Un espace réservé pour la stratégie énergétique nationale et l’autonomie du pays.',
        },
        parentLabel: { en: 'Energy & Infrastructure', fr: 'Énergie et infrastructures' },
        parentPath: '/platform/energy-infrastructure',
      },
      {
        label: { en: 'National Infrastructure', fr: 'Infrastructure nationale' },
        path: '/platform/energy-infrastructure/national-infrastructure',
        summary: {
          en: 'Major transport, utility, and logistics systems required for national growth.',
          fr: 'Grands réseaux de transport, de services publics et de logistique requis pour la croissance nationale.',
        },
        parentLabel: { en: 'Energy & Infrastructure', fr: 'Énergie et infrastructures' },
        parentPath: '/platform/energy-infrastructure',
      },
      {
        label: { en: 'Digital Infrastructure', fr: 'Infrastructure numérique' },
        path: '/platform/energy-infrastructure/digital-infrastructure',
        summary: {
          en: 'Connectivity, compute, and digital backbone policy for a modern state.',
          fr: 'Connectivité, calcul et politique de colonne vertébrale numérique pour un État moderne.',
        },
        parentLabel: { en: 'Energy & Infrastructure', fr: 'Énergie et infrastructures' },
        parentPath: '/platform/energy-infrastructure',
      },
    ],
  },
  {
    title: { en: 'Defense & Sovereignty', fr: 'Défense et souveraineté' },
    path: '/platform/defense-sovereignty',
    summary: {
      en: 'Military readiness, cyber defense, and durable national sovereignty.',
      fr: 'Préparation militaire, cyberdéfense et souveraineté nationale durable.',
    },
    items: [
      {
        label: { en: 'Military Doctrine', fr: 'Doctrine militaire' },
        path: '/platform/defense-sovereignty/military-doctrine',
        summary: {
          en: 'A placeholder for the strategic role of Canadian defense in the modern era.',
          fr: 'Un espace réservé pour le rôle stratégique de la défense canadienne à l’ère moderne.',
        },
        parentLabel: { en: 'Defense & Sovereignty', fr: 'Défense et souveraineté' },
        parentPath: '/platform/defense-sovereignty',
      },
      {
        label: { en: 'Cybersecurity', fr: 'Cybersécurité' },
        path: '/platform/defense-sovereignty/cybersecurity',
        summary: {
          en: 'National cyber resilience for citizens, institutions, and critical infrastructure.',
          fr: 'Résilience cybernétique nationale pour les citoyens, les institutions et les infrastructures critiques.',
        },
        parentLabel: { en: 'Defense & Sovereignty', fr: 'Défense et souveraineté' },
        parentPath: '/platform/defense-sovereignty',
      },
      {
        label: { en: 'National Resilience', fr: 'Résilience nationale' },
        path: '/platform/defense-sovereignty/national-resilience',
        summary: {
          en: 'Preparedness planning for shocks, emergencies, and sovereign continuity.',
          fr: 'Planification de préparation face aux chocs, aux urgences et à la continuité souveraine.',
        },
        parentLabel: { en: 'Defense & Sovereignty', fr: 'Défense et souveraineté' },
        parentPath: '/platform/defense-sovereignty',
      },
    ],
  },
  {
    title: { en: 'Family & Society', fr: 'Famille et société' },
    path: '/platform/family-society',
    summary: {
      en: 'Family support, housing, and stronger community life across Canada.',
      fr: 'Soutien aux familles, logement et vie communautaire renforcée partout au Canada.',
    },
    items: [
      {
        label: { en: 'Family Support', fr: 'Soutien aux familles' },
        path: '/platform/family-society/family-support',
        summary: {
          en: 'Policy for families, caregiving, and household stability.',
          fr: 'Politiques pour les familles, l’accompagnement et la stabilité des ménages.',
        },
        parentLabel: { en: 'Family & Society', fr: 'Famille et société' },
        parentPath: '/platform/family-society',
      },
      {
        label: { en: 'Housing', fr: 'Logement' },
        path: '/platform/family-society/housing',
        summary: {
          en: 'A placeholder for housing supply, affordability, and community planning.',
          fr: 'Un espace réservé pour l’offre de logements, l’abordabilité et la planification communautaire.',
        },
        parentLabel: { en: 'Family & Society', fr: 'Famille et société' },
        parentPath: '/platform/family-society',
      },
      {
        label: { en: 'Community Development', fr: 'Développement communautaire' },
        path: '/platform/family-society/community-development',
        summary: {
          en: 'Support for strong local institutions, social trust, and civic renewal.',
          fr: 'Soutien aux institutions locales fortes, à la confiance sociale et au renouveau civique.',
        },
        parentLabel: { en: 'Family & Society', fr: 'Famille et société' },
        parentPath: '/platform/family-society',
      },
    ],
  },
]

const systemItemsBase = [
  {
    label: { en: 'The Civil App Overview', fr: 'Aperçu de l’application Civil' },
    path: '/the-civil-app',
    summary: {
      en: 'Introduce Civil as the operating layer that keeps citizens continuously involved.',
      fr: 'Présenter Civil comme la couche opérationnelle qui garde les citoyens continuellement engagés.',
    },
    parentLabel: { en: 'The Civil App', fr: 'L’application Civil' },
    parentPath: '/',
    hideInNav: true,
  },
  {
    label: { en: 'What is Civil', fr: 'Qu’est-ce que Civil' },
    path: '/the-civil-app/what-is-civil',
    summary: {
      en: 'Explain the core concept behind the Civil participation system.',
      fr: 'Expliquer le concept central derrière le système de participation Civil.',
    },
    parentLabel: { en: 'The Civil App', fr: 'L’application Civil' },
    parentPath: '/the-civil-app',
  },
  {
    label: { en: 'How Citizens Participate', fr: 'Comment les citoyens participent' },
    path: '/the-civil-app/how-citizens-participate',
    summary: {
      en: 'Describe how people contribute input and decision weight inside the system.',
      fr: 'Décrire comment les gens apportent leurs idées et leur poids décisionnel dans le système.',
    },
    parentLabel: { en: 'The Civil App', fr: 'L’application Civil' },
    parentPath: '/the-civil-app',
  },
  {
    label: { en: 'Chambers of Citizens', fr: 'Chambres de citoyens' },
    path: '/the-civil-app/chambers-of-citizens',
    summary: {
      en: 'Explain how local Electoral District chambers organize participation and coordination.',
      fr: 'Expliquer comment les chambres locales de district électoral organisent la participation et la coordination.',
    },
    parentLabel: { en: 'The Civil App', fr: 'L’application Civil' },
    parentPath: '/the-civil-app',
  },
  {
    label: { en: 'Economic Network', fr: 'Réseau économique' },
    path: '/the-civil-app/economic-network',
    summary: {
      en: 'Show how economic activity and incentives connect into Civil.',
      fr: 'Montrer comment l’activité économique et les incitatifs s’intègrent à Civil.',
    },
    parentLabel: { en: 'The Civil App', fr: 'L’application Civil' },
    parentPath: '/the-civil-app',
  },
  {
    label: { en: 'Governance Layer', fr: 'Couche de gouvernance' },
    path: '/the-civil-app/governance-layer',
    summary: {
      en: 'Detail the governance mechanics that sit on top of citizen participation.',
      fr: 'Détailler les mécanismes de gouvernance qui reposent sur la participation citoyenne.',
    },
    parentLabel: { en: 'The Civil App', fr: 'L’application Civil' },
    parentPath: '/the-civil-app',
  },
  {
    label: { en: 'Civil Wallet', fr: 'Portefeuille Civil' },
    path: '/the-civil-app/civil-wallet',
    summary: {
      en: 'A future-facing concept for identity, participation, and value exchange tools.',
      fr: 'Un concept tourné vers l’avenir pour l’identité, la participation et les outils d’échange de valeur.',
    },
    parentLabel: { en: 'The Civil App', fr: 'L’application Civil' },
    parentPath: '/the-civil-app',
  },
]

const supportItemsBase = [
  {
    label: { en: 'Support CCC Overview', fr: 'Aperçu du soutien au CCC' },
    path: '/support-ccc',
    summary: {
      en: 'See the ways supporters can fund or join the movement.',
      fr: 'Voir comment les partisans peuvent financer ou rejoindre le mouvement.',
    },
    parentLabel: { en: 'Support CCC', fr: 'Soutenir le CCC' },
    parentPath: '/',
    hideInNav: true,
  },
  {
    label: { en: 'Donate', fr: 'Faire un don' },
    path: '/support-ccc/donate',
    summary: {
      en: 'Direct financial support for Civil Citizens through the live donation page.',
      fr: 'Soutien financier direct à Citoyens Civils par la page de dons active.',
    },
    parentLabel: { en: 'Support CCC', fr: 'Soutenir le CCC' },
    parentPath: '/support-ccc',
  },
  {
    label: { en: 'Become a Member', fr: 'Devenir membre' },
    path: '/become-a-civil-citizen',
    summary: {
      en: 'Become a Civil Citizen through the Civil app and start formal participation.',
      fr: 'Devenir un citoyen civil grâce à l’application Civil et commencer une participation formelle.',
    },
    parentLabel: { en: 'Support CCC', fr: 'Soutenir le CCC' },
    parentPath: '/support-ccc',
  },
]

const primaryNavigationBase = [
  { id: 'about', label: { en: 'About', fr: 'À propos' }, path: '/about' },
  { id: 'platform', label: { en: 'Platform', fr: 'Plateforme' }, path: '/platform' },
  { id: 'civil', label: { en: 'The Civil App', fr: 'L’application Civil' }, path: '/the-civil-app' },
  { id: 'news', label: { en: 'News & Updates', fr: 'Nouvelles et mises à jour' }, path: '/news-updates' },
  { id: 'support', label: { en: 'Support CCC', fr: 'Soutenir le CCC' }, path: '/support-ccc' },
]

function materializeItem(item) {
  return {
    ...item,
    title: item.title ? localized(item.title) : undefined,
    label: item.label ? localized(item.label) : undefined,
    summary: item.summary ? localized(item.summary) : undefined,
    parentLabel: item.parentLabel ? localized(item.parentLabel) : undefined,
    items: item.items?.map(materializeItem),
  }
}

export function getAboutItems() {
  return aboutItemsBase.map(materializeItem)
}

export function getPlatformGroups() {
  return platformGroupsBase.map(materializeItem)
}

export function getSupportItems() {
  return supportItemsBase.map(materializeItem)
}

export function getPrimaryNavigation() {
  return primaryNavigationBase.map((item) => ({
    ...item,
    label: localized(item.label),
  }))
}

export function getNavigationLookup() {
  const groups = getPlatformGroups()
  const systemItems = systemItemsBase.map(materializeItem)
  const lookupItems = [
    ...getAboutItems(),
    ...getSupportItems(),
    ...groups,
    ...groups.flatMap((group) => group.items ?? []),
    ...systemItems,
  ]

  return Object.fromEntries(lookupItems.map((item) => [item.path, item]))
}