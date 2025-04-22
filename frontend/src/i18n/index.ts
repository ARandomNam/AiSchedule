import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// 导入翻译文件
import translationEN from "./locales/en.json";
import translationZH from "./locales/zh.json";

// 配置i18next
i18n
  .use(LanguageDetector) // 自动检测用户语言
  .use(initReactI18next) // 将i18n实例传递给react-i18next
  .init({
    resources: {
      en: {
        translation: translationEN,
      },
      zh: {
        translation: translationZH,
      },
    },
    fallbackLng: "zh", // 默认语言
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    interpolation: {
      escapeValue: false, // 不转义特殊字符
    },
  });

export default i18n;
