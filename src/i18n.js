import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const STORAGE_KEY = 'ccc-language'
const DEFAULT_LANGUAGE = 'en-CA'

const resources = {
  'en-CA': {
    translation: {
      ui: {
        languageToggle: 'Language toggle',
        english: 'EN',
        french: 'FR',
      },
      footer: {
        brand: 'Civil Citizens For Canada Party',
        copy: 'A developing platform for citizens who want a simpler, fairer, and more transparent Canada.',
        navLabel: 'Footer',
        home: 'Home',
        github: 'GitHub',
      },
      nav: {
        becomeCivilCitizen: 'Become a Civil Citizen',
        homeAria: 'Civil Citizens For Canada Party home',
        openMenu: 'Open navigation menu',
        closeMenu: 'Close navigation menu',
        primary: 'Primary',
        mobilePrimary: 'Mobile primary navigation',
      },
      placeholder: {
        defaultParent: 'Civil Citizens For Canada Party',
        defaultBack: 'Home',
        comingSoon: 'Coming Soon',
        backTo: 'Back to {{label}}',
      },
    },
  },
  'fr-QC': {
    translation: {
      ui: {
        languageToggle: 'Sélecteur de langue',
        english: 'AN',
        french: 'FR',
      },
      footer: {
        brand: 'Parti Citoyens Civils du Canada',
        copy: 'Une plateforme en développement pour les citoyens qui veulent un Canada plus simple, plus juste et plus transparent.',
        navLabel: 'Pied de page',
        home: 'Accueil',
        github: 'GitHub',
      },
      nav: {
        becomeCivilCitizen: 'Devenir un citoyen civil',
        homeAria: 'Accueil du Parti Citoyens Civils du Canada',
        openMenu: 'Ouvrir le menu de navigation',
        closeMenu: 'Fermer le menu de navigation',
        primary: 'Navigation principale',
        mobilePrimary: 'Navigation principale mobile',
      },
      placeholder: {
        defaultParent: 'Parti Citoyens Civils du Canada',
        defaultBack: 'Accueil',
        comingSoon: 'Bientôt disponible',
        backTo: 'Retour à {{label}}',
      },
    },
  },
}

function getInitialLanguage() {
  if (typeof window === 'undefined') {
    return DEFAULT_LANGUAGE
  }

  const storedLanguage = window.localStorage.getItem(STORAGE_KEY)

  if (storedLanguage === 'fr-QC' || storedLanguage === 'en-CA') {
    return storedLanguage
  }

  return DEFAULT_LANGUAGE
}

function syncDocumentLanguage(language) {
  if (typeof document === 'undefined') {
    return
  }

  document.documentElement.lang = language === 'fr-QC' ? 'fr-CA' : 'en-CA'
}

i18n.use(initReactI18next).init({
  resources,
  lng: getInitialLanguage(),
  fallbackLng: DEFAULT_LANGUAGE,
  supportedLngs: ['en-CA', 'fr-QC'],
  interpolation: {
    escapeValue: false,
  },
})

syncDocumentLanguage(i18n.resolvedLanguage || i18n.language)

i18n.on('languageChanged', (language) => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(STORAGE_KEY, language)
  }

  syncDocumentLanguage(language)
})

export default i18n