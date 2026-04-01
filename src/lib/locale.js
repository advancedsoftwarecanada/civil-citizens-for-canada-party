export function getLocaleKey(i18n) {
  return i18n.resolvedLanguage === 'fr-QC' ? 'fr' : 'en'
}

export function localizeByLanguage(i18n, variants) {
  return variants[getLocaleKey(i18n)]
}