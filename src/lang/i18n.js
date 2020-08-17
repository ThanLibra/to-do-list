import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en';
import ja from './locales/ja';

const language = 'en'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en,
      ja
    },
    fallbackLng: 'ja',
    lng: language,

    interpolation: {
      escapeValue: false,
    },

    react: {
      wait: true,
    },
  });

export default i18n;
