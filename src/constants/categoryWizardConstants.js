/* ---- Category Wizard Constants ---- */

export const DIFF_ICONS = {
  easy: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z"/><line x1="9" y1="21" x2="15" y2="21"/></svg>',
  medium: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M12 6v6l4 2"/></svg>',
  hard: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="4" y="14" width="4" height="6" rx="1"/><rect x="10" y="8" width="4" height="12" rx="1"/><rect x="16" y="4" width="4" height="16" rx="1"/></svg>',
};

export const TEAM_ICONS = {
  blue: '<svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>',
  red: '<svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>',
};

export const DIFFICULTIES = ['easy', 'medium', 'hard'];

export const ROUND_OPTIONS = [1, 3, 5];

export const TIME_OPTIONS = [
  { value: 15, label: '15s' },
  { value: 30, label: '30s' },
  { value: 60, label: '1min' },
  { value: 120, label: '2min' },
  { value: 0, label: 'Illimité' },
];

// Sous-catégories CE1D avec icônes emoji
export const BLUE_SUBCATS = [
  { code: 'N1', name: 'Nombres', icon: '🔢', color: '#3B82F6' },
  { code: 'N2', name: 'Opérations', icon: '➕', color: '#3B82F6' },
  { code: 'N3', name: 'Priorités', icon: '🎯', color: '#3B82F6' },
  { code: 'N4', name: 'Fractions', icon: '🍕', color: '#3B82F6' },
  { code: 'N5', name: 'Décimaux', icon: '📊', color: '#3B82F6' },
  { code: 'N6', name: 'Puissances', icon: '⚡', color: '#3B82F6' },
  { code: 'D2', name: 'Statistiques', icon: '📈', color: '#3B82F6' },
  { code: 'M1', name: 'Conversions', icon: '📏', color: '#3B82F6' },
];

export const RED_SUBCATS = [
  { code: 'G1', name: 'Périmètres', icon: '📐', color: '#EF4444' },
  { code: 'G2', name: 'Aires', icon: '🟦', color: '#EF4444' },
  { code: 'G3', name: 'Volumes', icon: '📦', color: '#EF4444' },
  { code: 'G4', name: 'Angles', icon: '📐', color: '#EF4444' },
  { code: 'G5', name: 'Triangles', icon: '🔺', color: '#EF4444' },
  { code: 'G6', name: 'Cercles', icon: '⭕', color: '#EF4444' },
  { code: 'G7', name: 'Solides', icon: '🎲', color: '#EF4444' },
  { code: 'P1', name: 'Proportions', icon: '⚖️', color: '#EF4444' },
  { code: 'D1', name: 'Tableaux', icon: '📊', color: '#EF4444' },
];

// Toutes les sous-catégories jouables
export const ALL_PLAYABLE_CODES = [
  ...BLUE_SUBCATS.map(s => s.code),
  ...RED_SUBCATS.map(s => s.code),
];
