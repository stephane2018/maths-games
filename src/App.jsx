import { useEffect } from 'react';
import { I18nProvider, useI18n } from './contexts/I18nContext.jsx';
import { SoundProvider, useSound } from './contexts/SoundContext.jsx';
import { StorageProvider } from './contexts/StorageContext.jsx';
import { NavigationProvider } from './contexts/NavigationContext.jsx';
import ModalContainer from './components/ModalContainer.jsx';
import ConsentBanner from './components/ConsentBanner.jsx';

function AppContent() {
  const { t } = useI18n();
  const sound = useSound();

  useEffect(() => {
    const playWelcome = () => {
      sound.welcome();
    };
    document.addEventListener('click', playWelcome, { once: true });
    document.addEventListener('touchstart', playWelcome, { once: true });

    document.addEventListener('touchstart', () => {}, { passive: true });

    const preventPull = (e) => {
      if (e.target.closest('.screen-content') || e.target.closest('.category-content')) return;
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
      <ConsentBanner />
      <footer className="app-footer !text-white">&copy; 2026 Mathlaclasse by Léopold Minko</footer>
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
