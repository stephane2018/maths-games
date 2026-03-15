import { useState, useEffect, useCallback } from 'react';
import { I18nProvider, useI18n } from './contexts/I18nContext.jsx';
import { SoundProvider, useSound } from './contexts/SoundContext.jsx';
import { StorageProvider } from './contexts/StorageContext.jsx';
import { NavigationProvider } from './contexts/NavigationContext.jsx';
import ModalContainer from './components/ModalContainer.jsx';
import ConsentBanner from './components/ConsentBanner.jsx';
import SplashScreen from './components/SplashScreen.jsx';
import { initQuestionDB } from './systems/QuestionDB.js';

function AppContent() {
  const { t } = useI18n();
  const sound = useSound();
  const [ready, setReady] = useState(false);
  const [splashDone, setSplashDone] = useState(false);

  // Init DB and other async setup
  useEffect(() => {
    initQuestionDB()
      .catch(() => {})
      .finally(() => setReady(true));
  }, []);

  useEffect(() => {
    document.addEventListener('touchstart', () => {}, { passive: true });

    const preventPull = (e) => {
      const scrollableElement = e.target.closest('.screen-content') || e.target.closest('.category-content');
      if (scrollableElement) return;

      if (window.scrollY === 0 && e.touches[0].clientY > e.touches[0].pageY) {
        e.preventDefault();
      }
    };
    document.body.addEventListener('touchmove', preventPull, { passive: false });

    return () => {
      document.body.removeEventListener('touchmove', preventPull);
    };
  }, []);

  const handleSplashReady = useCallback(() => {
    setSplashDone(true);
  }, []);

  // Show splash until both init is done AND splash animation finished
  if (!splashDone) {
    return <SplashScreen onReady={handleSplashReady} />;
  }

  return (
    <>
      <ModalContainer />
      <ConsentBanner />
      <footer className="app-footer !text-white">&copy; 2026 Mathlaclasse by Leopold Minko</footer>
    </>
  );
}

export default function App() {
  return (
    <I18nProvider>
      <StorageProvider>
        <SoundProvider>
          <NavigationProvider>
            <AppContent />
          </NavigationProvider>
        </SoundProvider>
      </StorageProvider>
    </I18nProvider>
  );
}
