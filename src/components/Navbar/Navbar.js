import { useContext, useState, useRef } from 'react';

import Brightness2Icon from '@material-ui/icons/Brightness2';
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import LanguageIcon from '@material-ui/icons/Language';

import { ThemeContext } from '../../contexts/theme';
import { LanguageContext, locales } from '../../contexts/language';

import useContent from '../../hooks/useContent';

import './Navbar.css';

const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext);
  const [locale, changeLanguage] = useContext(LanguageContext);
  const [showNavList, setShowNavList] = useState(false);
  const localeRef = useRef(null);
  const { projects, skills, softSkills, contact, LangString } = useContent();

  const toggleNavList = () => setShowNavList(!showNavList);
  const handleClickChangeLanguage = () => {
    const newLocale = locales.filter((loc) => loc !== locale)[0];
    changeLanguage(newLocale);
  };

  return (
    <nav className='center nav'>
      <ul
        style={{ display: showNavList ? 'flex' : null }}
        className='nav__list'
      >
        {projects.length ? (
          <li className='nav__list-item'>
            <a
              href='#projects'
              onClick={toggleNavList}
              className='link link--nav'
            >
              {LangString('projects')}
            </a>
          </li>
        ) : null}

        {skills.length ? (
          <li className='nav__list-item'>
            <a
              href='#skills'
              onClick={toggleNavList}
              className='link link--nav'
            >
              {LangString('skills')}
            </a>
          </li>
        ) : null}

        {softSkills.length ? (
          <li className='nav__list-item'>
            <a
              href='#soft-skills'
              onClick={toggleNavList}
              className='link link--nav'
            >
              {LangString('softSkills')}
            </a>
          </li>
        ) : null}

        {contact.email ? (
          <li className='nav__list-item'>
            <a
              href='#contact'
              onClick={toggleNavList}
              className='link link--nav'
            >
              {LangString('contact')}
            </a>
          </li>
        ) : null}
      </ul>

      <button
        type='button'
        onClick={toggleTheme}
        className='btn btn--icon nav__theme'
        aria-label='toggle theme'
      >
        {themeName === 'dark' ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
      </button>

      <div className='lang__switcher'>
        <div className='lang__switcher_locales' ref={localeRef}>
          {locales.map((loc) => (
            <span
              key={loc}
              data-value={loc}
              className={loc === locale ? 'lang__switcher_locale__active' : ''}
            >
              {loc.toLocaleUpperCase()}
            </span>
          ))}
        </div>
        <button
          type='button'
          onClick={handleClickChangeLanguage}
          className='btn btn--icon nav__theme'
          aria-label='change language'
        >
          <LanguageIcon fontSize='small' />
        </button>
      </div>

      <button
        type='button'
        onClick={toggleNavList}
        className='btn btn--icon nav__hamburger'
        aria-label='toggle navigation'
      >
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </button>
    </nav>
  );
};

export default Navbar;
