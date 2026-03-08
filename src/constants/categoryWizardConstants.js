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

// Sous-catégories selon l'image avec les codes A1-A11, P1, G1-G2, P2
export const BLUE_SUBCATS = [
  { code: 'A1', name: 'Suppression des parenthèses', icon: '🧩', color: '#F59E0B' },
  { code: 'A2', name: 'PEMDAS', icon: '🎯', color: '#3B82F6' },
  { code: 'A3', name: 'Puissances', icon: '⚡', color: '#60A5FA' },
  { code: 'A4', name: 'PPCM et PGCD', icon: '⚙️', color: '#60A5FA' },
  { code: 'A5', name: 'Simple distributivité', icon: '➕', color: '#F59E0B' },
  { code: 'A6', name: 'Double distributivité', icon: '📐', color: '#3B82F6' },
  { code: 'A7', name: 'Calcul littéral', icon: '📖', color: '#60A5FA' },
  { code: 'A8', name: 'Produits remarquables', icon: '✨', color: '#60A5FA' },
  { code: 'A9', name: 'Fractions', icon: '🧮', color: '#F59E0B' },
  { code: 'A10', name: 'Équations', icon: '⚖️', color: '#3B82F6' },
  { code: 'A11', name: 'Inégalités triangulaires', icon: '📐', color: '#60A5FA' },
  { code: 'P1', name: 'Proportionnalité', icon: '⚖️', color: '#60A5FA' },
];

export const RED_SUBCATS = [
  { code: 'G1', name: 'Périmètre et aire', icon: '📐', color: '#3B82F6' },
  { code: 'G2', name: 'Angles', icon: '📏', color: '#3B82F6' },
  { code: 'P2', name: 'Traitement des données', icon: '📊', color: '#60A5FA' },
];

// Toutes les sous-catégories jouables
export const ALL_PLAYABLE_CODES = [
  ...BLUE_SUBCATS.map(s => s.code),
  ...RED_SUBCATS.map(s => s.code),
];

// Mapping entre les codes d'interface (A1-A11, P1-P2, G1-G2) et les vrais codes de questionIndex.js
export const CATEGORY_CODE_MAPPING = {
  // Algèbre - BLUE_SUBCATS
  'A1': 'A1',  // Suppression des parenthèses → Distributivité simple
  'A2': 'N3',  // PEMDAS → Puissances
  'A3': 'N3',  // Puissances → Puissances
  'A4': 'A4',  // Diviseurs et multiples → Diviseurs et multiples
  'A5': 'A1',  // Simple distributivité → Distributivité simple
  'A6': 'A2',  // Double distributivité → Double distributivité
  'A7': 'A3',  // Calcul littéral → Calcul littéral
  'A8': 'A8',  // Produits remarquables → Produits remarquables
  'A9': 'A9',  // Fractions → Fractions
  'A10': 'A5', // Équations → Équations du 1er degré
  'A11': 'G5', // Inégalités triangulaires → Inégalité triangulaire
  'P1': 'P1',  // Proportionnalité → Proportionnalité

  // Géométrie - RED_SUBCATS
  'G1': 'G1',  // Périmètre et aire → Distances
  'G2': 'G3',  // Angles → Angles et droites parallèles
  'P2': 'D1',  // Traitement des données → Statistiques et Probabilités
};

/**
 * Convertit un code d'interface en code réel de questionIndex
 * @param {string} interfaceCode - Code de l'interface (ex: 'A11')
 * @returns {string} Code réel (ex: 'G5')
 */
export function getRealCategoryCode(interfaceCode) {
  return CATEGORY_CODE_MAPPING[interfaceCode] || interfaceCode;
}
