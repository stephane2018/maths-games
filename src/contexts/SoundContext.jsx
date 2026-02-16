import { createContext, useContext, useEffect } from 'react';
import { sound } from '../systems/SoundManager.js';

const SoundContext = createContext(null);

export function SoundProvider({ children }) {
  useEffect(() => {
    sound.init();
  }, []);

  return (
    <SoundContext.Provider value={sound}>
      {children}
    </SoundContext.Provider>
  );
}

export function useSound() {
  const ctx = useContext(SoundContext);
  if (!ctx) throw new Error('useSound must be used within SoundProvider');
  return ctx;
}
