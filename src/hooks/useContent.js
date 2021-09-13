import { useContext } from 'react';

import { LanguageContext } from '../contexts/language';
import { Portfolio } from '../content/portfolio';

export default function useContent() {
  const [locale, _] = useContext(LanguageContext);

  const { header, about, projects, skills, contact } = Portfolio[locale];

  const LangString = (key) => {
    if (!Portfolio[locale].strings[key]) {
      console.warn(`No key '${key}' found to '${locale}' language.`);
    }
    return Portfolio[locale].strings[key];
  };

  return {
    header,
    about,
    projects,
    skills,
    contact,
    LangString,
  };
}
