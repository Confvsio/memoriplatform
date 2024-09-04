import 'server-only'

const dictionaries = {
  en: () => import('../public/locales/en.json').then((module) => module.default),
  fr: () => import('../public/locales/fr.json').then((module) => module.default),
}

export const getDictionary = async (locale: string) => {
  if (!(locale in dictionaries)) {
    locale = 'en' // Default to English if the locale is not supported
  }
  return dictionaries[locale as keyof typeof dictionaries]()
}