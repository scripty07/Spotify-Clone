import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import en from './en.json';

export const resources = {
  en: {
    translation: en,
  },
  // Add different namespaces here
};

export const defaultNS = 'translation';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,

    // Language detection Config
    detection: {
      order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
      caches: ['cookie'],
    },

    // Common Namespace used around the full app
    ns: ['translation'],
    defaultNS,
  })
  .catch((err) => console.log(err));

export default i18n;
