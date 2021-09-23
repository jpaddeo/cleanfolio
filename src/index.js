import { render } from 'react-dom';
import { ThemeProvider } from './contexts/theme';
import { LanguageProvider } from './contexts/language';

import App from './App';

import './index.css';

render(
  <ThemeProvider>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </ThemeProvider>,
  document.getElementById('root')
);
