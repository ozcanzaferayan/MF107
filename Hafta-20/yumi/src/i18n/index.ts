import * as Localization from 'expo-localization';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import tr from './locales/tr.json';

const resources = {
  en: { translation: en },
  tr: { translation: tr },
};

const getDeviceLanguage = () => {
  const locales = Localization.getLocales();
  return locales[0]?.languageCode ?? 'en';
};

i18n.use(initReactI18next).init({
  resources,
  lng: getDeviceLanguage(), // Initial language from device settings
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

export default i18n;
