import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    detection: {
      order: ['queryString', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage', 'cookie'],
    },
    returnNull: false,
    interpolation: {
      escapeValue: false,
      format: (value, format) => {
        if (format === 'number') {
          return new Intl.NumberFormat(i18n.language, { maximumSignificantDigits: value.toString().length }).format(value);
        }
        return value;
      }
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    }
  });



export default i18n;
