import { createRoot } from 'react-dom/client';
import './index.scss';
import { App } from './App';
import { LangProvider } from './components/LangContext';

const container = document.getElementById('root') as HTMLElement;

createRoot(container).render(
  <LangProvider>
    <App />
  </LangProvider>
);
