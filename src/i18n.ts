import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

// 等待 i18n 初始化完成
let i18nInitialized = false;

i18n
  // Load translations from /public/locales
  .use(Backend)
  // Detect user language
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next
  .use(initReactI18next)
  // Initialize i18next
  .init({
    fallbackLng: {
      'zh-TW': ['zh', 'en'],
      'default': ['zh']
    },
    debug: true, // 启用调试模式
    ns: ['translation'],
    defaultNS: 'translation',
    interpolation: {
      escapeValue: false, // not needed for React
    },
    supportedLngs: ['en', 'zh', 'zh-TW'],
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
      requestOptions: {
        cache: 'no-store'
      },
      parse: (data: string) => {
        try {
          // 移除 BOM 标记
          const cleanData = data.replace(/^\uFEFF/, '');
          return JSON.parse(cleanData);
        } catch (e) {
          console.error('Failed to parse translation file:', e);
          return {};
        }
      }
    },
    react: {
      useSuspense: false,
      bindI18n: 'languageChanged loaded',
      bindI18nStore: 'added removed',
    },
    preload: ['en', 'zh', 'zh-TW'],
    partialBundledLanguages: true,
  })
  .then(() => {
    i18nInitialized = true;
    console.log('i18n initialization completed');
  })
  .catch((err) => {
    console.error('i18n initialization failed:', err);
  });

// 添加调试日志
i18n.on('initialized', (options) => {
  console.log('i18n initialized:', options);
});

i18n.on('loaded', (loaded) => {
  console.log('i18n loaded:', loaded);
});

i18n.on('failedLoading', (lng, ns, msg) => {
  console.error('i18n failed loading:', { lng, ns, msg });
});

i18n.on('languageChanged', (lng) => {
  console.log('i18n language changed:', lng);
});

i18n.on('missingKey', (lng, ns, key, fallbackValue) => {
  console.warn('i18n missing key:', { lng, ns, key, fallbackValue });
});

// 导出初始化状态检查函数
export const isI18nInitialized = () => i18nInitialized;

export default i18n; 