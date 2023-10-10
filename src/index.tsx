import { createRoot } from 'react-dom/client';
import './index.scss';
import { App } from './App';
import { GlobalStateProvider } from './Store';

const container = document.getElementById('root') as HTMLElement;

createRoot(container).render(
  <GlobalStateProvider>
      <App />
  </GlobalStateProvider>
);
