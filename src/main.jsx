/*
  CE1D Tug of War
  © 2026 Mathlaclasse by Léopold
  Tous droits réservés.
*/

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { Agentation } from 'agentation';

import './styles/main.css';
import './styles/components.css';
import './styles/animations.css';
import './styles/responsive.css';

createRoot(document.getElementById('app')).render(
  <StrictMode>
    <App />
    {import.meta.env.DEV && <Agentation />}
  </StrictMode>
);
