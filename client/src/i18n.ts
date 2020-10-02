import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import XHR from 'i18next-xhr-backend'

const i18n = i18next.createInstance()

i18n
  .use(XHR)
  .use(initReactI18next)
  .init({
    lng: 'de',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    // use keys as fallback
    fallbackLng: false,
    backend: {
      // eslint-disable-next-line no-undef
      loadPath: `${process.env.PUBLIC_URL || ''}/locales/{{lng}}.json`,
    },
  })

export default i18n
