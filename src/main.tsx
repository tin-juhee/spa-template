import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';

import App from './App.tsx';
import Toast from './components/ui/Toast.tsx';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Toast />
  </StrictMode>,
);
