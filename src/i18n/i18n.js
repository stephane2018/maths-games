/**
 * Lightweight i18n system
 */

import fr from './fr.json';
import en from './en.json';
import nl from './nl.json';

const translations = { fr, en, nl };
let currentLang = 'fr';
const listeners = new Set();

export function setLang(lang) {
  if (translations[lang]) {
    currentLang = lang;
    localStorage.setItem('math-tow-lang', lang);
    notifyListeners();
    updateDOM();
  }
}

export function getLang() {
  return currentLang;
}

export function t(key, params = {}) {
  const keys = key.split('.');
  let value = translations[currentLang];

  for (const k of keys) {
    if (value && typeof value === 'object') {
      value = value[k];
    } else {
      value = undefined;
      break;
    }
  }

  if (value === undefined) {
    // Fallback to French
    value = translations.fr;
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        return key; // Key not found
      }
    }
  }

  if (typeof value !== 'string') return key;

  // Replace {param} placeholders
  return value.replace(/\{(\w+)\}/g, (_, p) => params[p] ?? `{${p}}`);
}

function updateDOM() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
  });
}

export function onLangChange(callback) {
  listeners.add(callback);
  return () => listeners.delete(callback);
}

function notifyListeners() {
  listeners.forEach(cb => cb(currentLang));
}

// Init from localStorage
export function initLang() {
  const saved = localStorage.getItem('math-tow-lang');
  if (saved && translations[saved]) {
    currentLang = saved;
  } else {
    // Detect browser language
    const browserLang = navigator.language.slice(0, 2);
    if (translations[browserLang]) {
      currentLang = browserLang;
    }
  }
}
