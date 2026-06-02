import 'server-only';

const dictionaries = {
  en: () => import('../dictionaries/en.json').then((module) => module.default),
  ar: () => import('../dictionaries/ar.json').then((module) => module.default),
};

export const hasLocale = (locale) => locale in dictionaries;

export const getDictionary = async (locale) => {
  return dictionaries[locale] ? dictionaries[locale]() : dictionaries['ar']();
};
