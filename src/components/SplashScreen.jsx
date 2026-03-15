import { useState, useEffect, useRef, useCallback } from 'react';
import { useI18n } from '../contexts/I18nContext.jsx';
import { useSound } from '../contexts/SoundContext.jsx';

const MESSAGES_I18N = {
  fr: [
    { text: 'Chargement des questions...', delay: 0 },
    { text: 'Preparation du moteur de jeu...', delay: 600 },
    { text: 'Initialisation de la base de donnees...', delay: 1200 },
    { text: 'Pret !', delay: 1800 },
  ],
  en: [
    { text: 'Loading questions...', delay: 0 },
    { text: 'Preparing game engine...', delay: 600 },
    { text: 'Initializing database...', delay: 1200 },
    { text: 'Ready!', delay: 1800 },
  ],
  nl: [
    { text: 'Vragen laden...', delay: 0 },
    { text: 'Game engine voorbereiden...', delay: 600 },
    { text: 'Database initialiseren...', delay: 1200 },
    { text: 'Klaar!', delay: 1800 },
  ],
};

export default function SplashScreen({ onReady }) {
  const { t, lang } = useI18n();
  const sound = useSound();
  const MESSAGES = MESSAGES_I18N[lang] || MESSAGES_I18N.fr;

  const [activeIndex, setActiveIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const doneRef = useRef(false);
  const soundPlayedRef = useRef(false);

  // Play startup sound on first interaction (required by browsers)
  const playStartupSound = useCallback(() => {
    if (soundPlayedRef.current) return;
    soundPlayedRef.current = true;
    sound.startup();
  }, [sound]);

  useEffect(() => {
    // Try to play immediately (works in Tauri / if audio context already unlocked)
    try {
      sound.startup();
      soundPlayedRef.current = true;
    } catch {
      // Will play on first interaction instead
    }

    // Fallback: play on first user interaction
    document.addEventListener('click', playStartupSound, { once: true });
    document.addEventListener('touchstart', playStartupSound, { once: true });

    return () => {
      document.removeEventListener('click', playStartupSound);
      document.removeEventListener('touchstart', playStartupSound);
    };
  }, [playStartupSound, sound]);

  useEffect(() => {
    const timers = MESSAGES.map((msg, i) =>
      setTimeout(() => setActiveIndex(i), msg.delay)
    );

    const finishTimer = setTimeout(() => {
      if (!doneRef.current) {
        doneRef.current = true;
        setFadeOut(true);
        setTimeout(() => onReady(), 500);
      }
    }, 2400);

    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(finishTimer);
    };
  }, [onReady]);

  return (
    <div className={`splash-screen ${fadeOut ? 'splash-fade-out' : ''}`} onClick={playStartupSound}>
      <div className="splash-bg" />

      {/* Floating particles */}
      <div className="splash-particles" aria-hidden="true">
        {['+', '−', '×', '÷', '=', 'π', '√', '%', '∑', '∞', 'x²', '±'].map((s, i) => (
          <span
            key={i}
            className="splash-particle"
            style={{
              left: `${5 + (i * 8.2) % 90}%`,
              animationDelay: `${i * 0.25}s`,
              animationDuration: `${3 + (i % 4) * 0.8}s`,
              fontSize: `${0.8 + (i % 3) * 0.5}rem`,
              opacity: 0.08 + (i % 3) * 0.04,
            }}
          >
            {s}
          </span>
        ))}
      </div>

      <div className="splash-content">
        {/* Logo */}
        <div className="splash-logo">
          <img src="/favicon.svg" alt="Logo" className="splash-logo-svg" />
        </div>

        <h1 className="splash-title">{t('app.title')}</h1>
        <p className="splash-subtitle">{t('app.subtitle')}</p>

        {/* Spinner */}
        <div className="splash-spinner">
          <div className="splash-spinner-ring" />
        </div>

        {/* Messages */}
        <div className="splash-messages">
          {MESSAGES.map((msg, i) => (
            <div
              key={i}
              className={`splash-msg ${i <= activeIndex ? 'splash-msg-visible' : ''} ${i === activeIndex ? 'splash-msg-active' : ''}`}
            >
              {i < activeIndex && <span className="splash-check">&#10003;</span>}
              {i === activeIndex && <span className="splash-dot" />}
              <span>{msg.text}</span>
            </div>
          ))}
        </div>

        <p className="splash-brand">{t('app.brand')}</p>
      </div>
    </div>
  );
}
