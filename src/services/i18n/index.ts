import * as Localization from 'expo-localization';

import i18n from 'i18n-js';

// import en from './locales/en';
import ptBR from './locales/pt-BR';

i18n.translations = {
  // en,
  // 'en-US': en,
  'pt-BR': ptBR,
};

i18n.defaultLocale = 'pt-BR';

i18n.locale = Localization.locale;

i18n.fallbacks = true;

export default i18n;
