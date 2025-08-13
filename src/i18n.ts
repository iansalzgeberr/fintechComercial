// i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // Por ahora, solo definimos los idiomas que VAMOS a soportar.
    supportedLngs: ["es", "en"],
    fallbackLng: "es", // Si algo falla, muestra español.
    debug: true, // Útil para ver logs en la consola mientras desarrollamos.

    // Dónde encontrar los archivos de traducción.
    // Esto buscará en /public/locales/es/translation.json, etc.
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },

    // Cómo detectar el idioma. Le damos prioridad a la URL.
    detection: {
      order: ["path", "cookie", "htmlTag"],
      caches: ["cookie"],
    },
    
    react: {
      // Usaremos Suspense para manejar la carga de los archivos de idioma.
      useSuspense: true, 
    },
  });

export default i18n;