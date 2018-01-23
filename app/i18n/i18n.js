import I18n from 'react-native-i18n'
import ko from './locales/ko'
import en from './locales/en'

I18n.fallbacks = true

I18n.translations = {
  ko,
  en
}

export default I18n
