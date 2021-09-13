import { render } from 'react-dom';
import App from './App';
import { ThemeProvider } from './contexts/theme';
import { LanguageProvider } from './contexts/language';
import './index.css';

render(
  <ThemeProvider>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </ThemeProvider>,
  document.getElementById('root')
);
