// =============================================================================
// R1 - Problèmes complexes
// CE1D Belgian exam - Trilingual (FR / EN / NL)
// Généré automatiquement depuis les PDFs CE1D (2010-2022)
// =============================================================================

export const questions = [];

/**
 * Générateur procédural pour R1
 * @param {1|2|3} level - Niveau de difficulté
 * @returns {object} Question générée
 */
export function generate(level = 1) {
  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const id = `R1_gen_${Date.now()}_${rand(100, 999)}`;

  // TODO: Implémenter la génération procédurale spécifique à R1

  return {
    id,
    category: 'R1',
    level,
    text: {
      fr: 'Question générée',
      en: 'Generated question',
      nl: 'Gegenereerde vraag'
    },
    answer: 0,
    tolerance: 0
  };
}
