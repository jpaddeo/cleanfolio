import { createContext, useEffect, useState } from 'react';

const defaultLocale = 'es';
const locales = ['es', 'en'];
const LanguageContext = createContext([]);

const LanguageProvider = ({ children }) => {
  const [locale, setLocale] = useState(defaultLocale);

  useEffect(() => {
    if (!window) {
      return;
    }
    const lang = localStorage.getItem('lang') || locale;
    setLocale(lang);
  }, [locale]);

  const changeLanguage = (loc) => {
    localStorage.setItem('lang', loc);
    setLocale(loc);
  };

  return (
    <LanguageContext.Provider value={[locale, changeLanguage]}>
      {children}
    </LanguageContext.Provider>
  );
};

export { locales, LanguageProvider, LanguageContext };
