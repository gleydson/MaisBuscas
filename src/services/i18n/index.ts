import { I18nManager } from 'react-native';
import * as RNLocalize from 'react-native-localize';

import i18n from 'i18n-js';

import en from './locales/en';
import ptBR from './locales/pt-BR';

i18n.translations = {
  en,
  'pt-BR': ptBR,
};
i18n.fallbacks = true;

const defaultLanguage = { languageTag: 'en', isRTL: false };
const availableLanguages = Object.keys(i18n.translations);
const { languageTag, isRTL } =
  RNLocalize.findBestAvailableLanguage(availableLanguages) || defaultLanguage;

I18nManager.forceRTL(isRTL);
i18n.locale = languageTag;

export default i18n;
