export const CE1D_THEMES = [
  {
    id: 'numbers',
    icon: '\uD83D\uDD22',
    categories: ['N1', 'N2', 'N3'],
    color: '#3B82F6',
  },
  {
    id: 'proportions',
    icon: '\u2696\uFE0F',
    categories: ['P1'],
    color: '#10B981',
  },
  {
    id: 'geometry',
    icon: '\uD83D\uDCD0',
    categories: ['G1', 'G2'],
    color: '#8B5CF6',
  },
  {
    id: 'measures',
    icon: '\uD83D\uDCCF',
    categories: ['M1'],
    color: '#F59E0B',
  },
  {
    id: 'data',
    icon: '\uD83D\uDCCA',
    categories: ['D1', 'D2'],
    color: '#EF4444',
  },
  {
    id: 'problems',
    icon: '\uD83E\uDDE9',
    categories: ['R1'],
    color: '#EC4899',
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
