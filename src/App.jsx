import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { I18nProvider, useI18n } from './contexts/I18nContext.jsx';
import { SoundProvider, useSound } from './contexts/SoundContext.jsx';
import { StorageProvider } from './contexts/StorageContext.jsx';

import HomeScreen from './screens/HomeScreen.jsx';
import ModeSelectScreen from './screens/ModeSelectScreen.jsx';
import CategoryScreen from './screens/CategoryScreen.jsx';
import GameScreen from './screens/GameScreen.jsx';
import ResultScreen from './screens/ResultScreen.jsx';
import ProfileScreen from './screens/ProfileScreen.jsx';
import SettingsScreen from './screens/SettingsScreen.jsx';
import AboutScreen from './screens/AboutScreen.jsx';

function AppContent() {
  const { t } = useI18n();
  const sound = useSound();

  useEffect(() => {
    // Play welcome sound on first user interaction
    const playWelcome = () => {
      sound.welcome();
    };
    document.addEventListener('click', playWelcome, { once: true });
    document.addEventListener('touchstart', playWelcome, { once: true });

    // Enable :active pseudo-class on iOS Safari
    document.addEventListener('touchstart', () => {}, { passive: true });

    // Prevent pull-to-refresh on mobile
    const preventPull = (e) => {
      if (e.target.closest('.screen-content')) return;
      e.preventDefault();
    };
    document.body.addEventListener('touchmove', preventPull, { passive: false });

    return () => {
      document.removeEventListener('click', playWelcome);
      document.removeEventListener('touchstart', playWelcome);
      document.body.removeEventListener('touchmove', preventPull);
    };
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/mode-select" element={<ModeSelectScreen />} />
        <Route path="/category" element={<CategoryScreen />} />
        <Route path="/game" element={<GameScreen />} />
        <Route path="/result" element={<ResultScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/settings" element={<SettingsScreen />} />
        <Route path="/about" element={<AboutScreen />} />
      </Routes>
      <footer className="app-footer">&copy; 2026 Mathlaclasse by Léopold</footer>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <I18nProvider>
        <StorageProvider>
          <SoundProvider>
            <AppContent />
          </SoundProvider>
        </StorageProvider>
      </I18nProvider>
    </BrowserRouter>
  );
}
