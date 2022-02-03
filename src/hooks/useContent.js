import { useContext } from 'react';

import { LanguageContext } from '../contexts/language';
import { Portfolio } from '../content/portfolio';

export default function useContent() {
  const [locale] = useContext(LanguageContext);

  const {
    header,
    about,
    projects,
    learningProjects,
    skills,
    softSkills,
    contact,
  } = Portfolio[locale];

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
    learningProjects,
    skills,
    softSkills,
    contact,
    LangString,
  };
}
