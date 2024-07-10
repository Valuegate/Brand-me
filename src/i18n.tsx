import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslation from "@/locales/en/translation.json";
import ptTranslation from "@/locales/pt/translation.json";
import roTranslation from "@/locales/ro/translation.json";
import ltTranslation from "@/locales/lt/translation.json";
import itTranslation from "@/locales/it/translation.json";
import esTranslation from "@/locales/es/translation.json";
import deTranslation from "@/locales/de/translation.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      pt: { translation: ptTranslation },
      ro: { translation: roTranslation },
      lt: { translation: ltTranslation },
      it: { translation: itTranslation },
      es: { translation: esTranslation },
      de: { translation: deTranslation },
    },
    fallbackLng: 'en', // default language
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
