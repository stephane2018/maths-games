// =============================================================================
// CE1D Themes Configuration
// Basé sur l'analyse des PDFs CE1D (2010-2022)
// =============================================================================

export const CE1D_THEMES = [
  {
    id: 'numbers',
    icon: '🔢',
    name: { fr: 'Nombres', en: 'Numbers', nl: 'Getallen' },
    categories: ['N1', 'N2', 'N3', 'N4', 'N5', 'N6'],
    color: '#3B82F6',
    subcategories: [
      { code: 'N1', name: { fr: 'Calcul numérique', en: 'Numerical calculation', nl: 'Numerieke berekening' } },
      { code: 'N2', name: { fr: 'Calcul littéral', en: 'Literal calculation', nl: 'Letterrekenen' } },
      { code: 'N3', name: { fr: 'Puissances', en: 'Powers', nl: 'Machten' } },
      { code: 'N4', name: { fr: 'Équations', en: 'Equations', nl: 'Vergelijkingen' } },
      { code: 'N5', name: { fr: 'Fractions', en: 'Fractions', nl: 'Breuken' } },
      { code: 'N6', name: { fr: 'Dénombrer', en: 'Counting', nl: 'Tellen' } }
    ]
  },
  {
    id: 'geometry',
    icon: '📐',
    name: { fr: 'Géométrie', en: 'Geometry', nl: 'Meetkunde' },
    categories: ['G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7'],
    color: '#8B5CF6',
    subcategories: [
      { code: 'G1', name: { fr: 'Distances', en: 'Distances', nl: 'Afstanden' } },
      { code: 'G2', name: { fr: 'Transformations du plan', en: 'Plane transformations', nl: 'Vlakke transformaties' } },
      { code: 'G3', name: { fr: 'Repérage', en: 'Coordinate system', nl: 'Coördinatenstelsel' } },
      { code: 'G4', name: { fr: 'Angles', en: 'Angles', nl: 'Hoeken' } },
      { code: 'G5', name: { fr: 'Figures planes', en: 'Plane figures', nl: 'Vlakke figuren' } },
      { code: 'G6', name: { fr: 'Solides', en: 'Solids', nl: 'Ruimtefiguren' } },
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
    id: 'data',
    icon: '📊',
    name: { fr: 'Traitement de données', en: 'Data processing', nl: 'Gegevensverwerking' },
    categories: ['D1', 'D2'],
    color: '#EF4444',
    subcategories: [
      { code: 'D1', name: { fr: 'Lecture de tableaux', en: 'Reading tables', nl: 'Tabellen lezen' } },
      { code: 'D2', name: { fr: 'Statistiques & moyennes', en: 'Statistics & averages', nl: 'Statistiek & gemiddelden' } }
    ]
  },
  {
    id: 'measures',
    icon: '📏',
    name: { fr: 'Grandeurs', en: 'Measurements', nl: 'Grootheden' },
    categories: ['M1'],
    color: '#F59E0B',
    subcategories: [
      { code: 'M1', name: { fr: 'Conversions d\'unités', en: 'Unit conversions', nl: 'Eenheden omrekenen' } }
    ]
  }
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
