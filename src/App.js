import { useEffect, useContext } from 'react';

import { ThemeContext } from './contexts/theme';

import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

import './App.css';

const App = () => {
  const [{ themeName }] = useContext(ThemeContext);

  useEffect(() => {
    const favicon = document.getElementById('favicon');
    favicon.href = `${themeName}/favicon.ico`;
  }, [themeName]);

  return (
    <div className={`${themeName} app`}>
      <Header />
      <main>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default App;
