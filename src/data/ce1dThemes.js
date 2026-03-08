// =============================================================================
// CE1D Themes Configuration
// Basé sur l'analyse des PDFs CE1D (2010-2022)
// =============================================================================

export const CE1D_THEMES = [
  {
    id: 'numbers',
    icon: '🔢',
    name: { fr: 'Nombres', en: 'Numbers', nl: 'Getallen' },
    categories: ['N1', 'N2', 'N3', 'N4', 'N6'],
    color: '#3B82F6',
    subcategories: [
      { code: 'N1', name: { fr: 'Calcul numérique', en: 'Numerical calculation', nl: 'Numerieke berekening' } },
      { code: 'N2', name: { fr: 'Calcul littéral', en: 'Literal calculation', nl: 'Letterrekenen' } },
      { code: 'N3', name: { fr: 'Puissances', en: 'Powers', nl: 'Machten' } },
      { code: 'N4', name: { fr: 'Équations', en: 'Equations', nl: 'Vergelijkingen' } },
      { code: 'N6', name: { fr: 'Dénombrer', en: 'Counting', nl: 'Tellen' } }
    ]
  },
  {
    id: 'geometry',
    icon: '📐',
    name: { fr: 'Géométrie', en: 'Geometry', nl: 'Meetkunde' },
    categories: ['G1', 'G2', 'G3', 'G4', 'G5', 'G7'],
    color: '#8B5CF6',
    subcategories: [
      { code: 'G1', name: { fr: 'Distances', en: 'Distances', nl: 'Afstanden' } },
      { code: 'G2', name: { fr: 'Transformations du plan', en: 'Plane transformations', nl: 'Vlakke transformaties' } },
      { code: 'G3', name: { fr: 'Repérage', en: 'Coordinate system', nl: 'Coördinatenstelsel' } },
      { code: 'G4', name: { fr: 'Angles', en: 'Angles', nl: 'Hoeken' } },
      { code: 'G5', name: { fr: 'Figures planes', en: 'Plane figures', nl: 'Vlakke figuren' } },
      { code: 'G7', name: { fr: 'Programmes de construction', en: 'Construction programs', nl: 'Constructieprogramma\'s' } }
    ]
  },
  {
    id: 'powers',
    icon: '⚡',
    name: { fr: 'Puissances', en: 'Powers', nl: 'Machten' },
    categories: ['N3'],
    color: '#10B981',
    subcategories: [
      { code: 'N3', name: { fr: 'Puissances', en: 'Powers', nl: 'Machten' } }
    ]
  },
  {
    id: 'algebra',
    icon: '🔤',
    name: { fr: 'Algèbre', en: 'Algebra', nl: 'Algebra' },
    categories: ['A1', 'A2', 'A3', 'A4', 'A5', 'A8', 'A9'],
    color: '#F59E0B',
    subcategories: [
      { code: 'A1', name: { fr: 'Distributivité simple', en: 'Simple Distributivity', nl: 'Eenvoudige distributiviteit' } },
      { code: 'A2', name: { fr: 'Double distributivité', en: 'Double Distributivity', nl: 'Dubbele distributiviteit' } },
      { code: 'A3', name: { fr: 'Calcul littéral', en: 'Literal Calculation', nl: 'Letterrekenen' } },
      { code: 'A4', name: { fr: 'Diviseurs et multiples', en: 'Divisors and Multiples', nl: 'Delers en veelvouden' } },
      { code: 'A5', name: { fr: 'Équations du 1er degré', en: 'First Degree Equations', nl: 'Vergelijkingen van de eerste graad' } },
      { code: 'A8', name: { fr: 'Produits remarquables', en: 'Notable Products', nl: 'Merkwaardige producten' } },
      { code: 'A9', name: { fr: 'Fractions', en: 'Fractions', nl: 'Breuken' } }
    ]
  },
];

export function getCategoriesToLoad(selectedThemeIds) {
  const categories = new Set();
  for (const id of selectedThemeIds) {
    const theme = CE1D_THEMES.find(t => t.id === id);
    if (theme) {
      theme.categories.forEach(cat => categories.add(cat));
    }
  }
  return Array.from(categories);
}

/**
 * Get all subcategories for a theme
 * @param {string} themeId - The theme ID (e.g., 'numbers', 'geometry')
 * @returns {Array} Array of subcategory objects with code and name
 */
export function getSubcategories(themeId) {
  const theme = CE1D_THEMES.find(t => t.id === themeId);
  return theme ? theme.subcategories : [];
}

/**
 * Get a subcategory by its code
 * @param {string} code - The subcategory code (e.g., 'N1', 'G2')
 * @returns {object|null} The subcategory object or null
 */
export function getSubcategoryByCode(code) {
  for (const theme of CE1D_THEMES) {
    const subcat = theme.subcategories.find(s => s.code === code);
    if (subcat) {
      return { ...subcat, themeId: theme.id, themeColor: theme.color };
    }
  }
  return null;
}

/**
 * Get all subcategories across all themes
 * @returns {Array} Array of all subcategory objects
 */
export function getAllSubcategories() {
  return CE1D_THEMES.flatMap(theme =>
    theme.subcategories.map(subcat => ({
      ...subcat,
      themeId: theme.id,
      themeName: theme.name,
      themeColor: theme.color,
      themeIcon: theme.icon
    }))
  );
}
