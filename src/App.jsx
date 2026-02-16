import { useEffect } from 'react';
import { I18nProvider, useI18n } from './contexts/I18nContext.jsx';
import { SoundProvider, useSound } from './contexts/SoundContext.jsx';
import { StorageProvider } from './contexts/StorageContext.jsx';
import { NavigationProvider } from './contexts/NavigationContext.jsx';
import ModalContainer from './components/ModalContainer.jsx';

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
      <ModalContainer />
      <footer className="app-footer">&copy; 2026 Mathlaclasse by Léopold</footer>
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
