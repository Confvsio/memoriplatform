// lib/dictionary.ts

import 'server-only'
import type { Dictionary } from '../types/dictionary'

const dictionaries = {
  en: () => import('../public/locales/en.json').then((module) => module.default) as Promise<Dictionary>,
  fr: () => import('../public/locales/fr.json').then((module) => module.default) as Promise<Dictionary>,
}

export const getDictionary = async (locale: string): Promise<Dictionary> => {
  if (!(locale in dictionaries)) {
    locale = 'en' // Default to English if the locale is not supported
  }
  return dictionaries[locale as keyof typeof dictionaries]()
}