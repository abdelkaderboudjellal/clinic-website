import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import detector from "i18next-browser-languagedetector";
import backend from "i18next-http-backend";

i18n
  .use(detector)
  .use(backend)
  .use(initReactI18next)

  .init({
    supportedLngs: ["en", "ar", "fr"],
    fallbackLng: "en",
    saveMissing: true,

    detection: {
      order: ["path", "cookie", "localStorage", "htmlTag"],
      caches: ["cookie"],
    },
    backend: { loadPath: "/locales/{{lng}}/{{ns}}.json" },
    ns: ["Home", "About", "Navbar", "Footer", "Login"],

    interpolation: {
      escapeValue: false,
    },
    React: {
      useSuspense: true,
    },
  });

export default i18n;
