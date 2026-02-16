import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { t as translate, setLang as setLanguage, getLang, initLang, onLangChange } from '../i18n/i18n.js';

const I18nContext = createContext(null);

export function I18nProvider({ children }) {
  useEffect(() => { initLang(); }, []);

  const [lang, setLangState] = useState(getLang());

  useEffect(() => {
    return onLangChange((newLang) => {
      setLangState(newLang);
    });
  }, []);

  const setLang = useCallback((newLang) => {
    setLanguage(newLang);
  }, []);

  // Re-create t when lang changes so consumers re-render
  const t = useCallback((key, params) => {
    return translate(key, params);
  }, [lang]);

  return (
    <I18nContext.Provider value={{ t, lang, setLang }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}
