// =============================================================================
// Question Index - Central registry for all question categories
// CE1D Belgian exam - Math games
// =============================================================================

import { questions as questionsN1, generate as generateN1 } from './questions-N1.js';
import { questions as questionsN2, generate as generateN2 } from './questions-N2.js';
import { questions as questionsN3, generate as generateN3 } from './questions-N3.js';
import { questions as questionsP1, generate as generateP1 } from './questions-P1.js';
import { questions as questionsG1, generate as generateG1 } from './questions-G1.js';
import { questions as questionsG2, generate as generateG2 } from './questions-G2.js';
import { questions as questionsM1, generate as generateM1 } from './questions-M1.js';
import { questions as questionsD1, generate as generateD1 } from './questions-D1.js';
import { questions as questionsD2, generate as generateD2 } from './questions-D2.js';
import { questions as questionsR1, generate as generateR1 } from './questions-R1.js';

// ─── Category registry ──────────────────────────────────────────────────────

export const allCategories = [
  {
    code: 'N1',
    icon: '🔢',
    label: { fr: 'Comparaison de nombres', en: 'Number comparison', nl: 'Getallen vergelijken' },
    questions: questionsN1,
    generate: generateN1,
  },
  {
    code: 'N2',
    icon: '➕',
    label: { fr: 'Opérations simples', en: 'Simple operations', nl: 'Eenvoudige bewerkingen' },
    questions: questionsN2,
    generate: generateN2,
  },
  {
    code: 'N3',
    icon: '🧮',
    label: { fr: 'Priorités des opérations', en: 'Order of operations', nl: 'Volgorde van bewerkingen' },
    questions: questionsN3,
    generate: generateN3,
  },
  {
    code: 'P1',
    icon: '⚖️',
    label: { fr: 'Proportionnalité', en: 'Proportionality', nl: 'Evenredigheid' },
    questions: questionsP1,
    generate: generateP1,
  },
  {
    code: 'G1',
    icon: '📐',
    label: { fr: 'Géométrie plane', en: 'Plane geometry', nl: 'Vlakke meetkunde' },
    questions: questionsG1,
    generate: generateG1,
  },
  {
    code: 'G2',
    icon: '📏',
    label: { fr: 'Angles & transformations', en: 'Angles & transformations', nl: 'Hoeken & transformaties' },
    questions: questionsG2,
    generate: generateG2,
  },
  {
    code: 'M1',
    icon: '📏',
    label: { fr: 'Conversions d\'unités', en: 'Unit conversions', nl: 'Eenheden omrekenen' },
    questions: questionsM1,
    generate: generateM1,
  },
  {
    code: 'D1',
    icon: '📊',
    label: { fr: 'Lecture de tableaux', en: 'Reading tables', nl: 'Tabellen lezen' },
    questions: questionsD1,
    generate: generateD1,
  },
  {
    code: 'D2',
    icon: '📈',
    label: { fr: 'Statistiques & moyennes', en: 'Statistics & averages', nl: 'Statistiek & gemiddelden' },
    questions: questionsD2,
    generate: generateD2,
  },
  {
    code: 'R1',
    icon: '🧩',
    label: { fr: 'Problèmes & raisonnement', en: 'Word problems & reasoning', nl: 'Redeneerproblemen' },
    questions: questionsR1,
    generate: generateR1,
  },
];

// ─── Helper functions ────────────────────────────────────────────────────────

/**
 * Get a category object by its code.
 * @param {string} code - Category code (e.g. 'N1', 'G2')
 * @returns {object|undefined} The category object or undefined
 */
export function getCategoryByCode(code) {
  return allCategories.find((cat) => cat.code === code);
}

/**
 * Get all static questions for a given category code.
 * @param {string} code - Category code
 * @returns {Array} Array of question objects
 */
export function getQuestionsByCategory(code) {
  const cat = getCategoryByCode(code);
  return cat ? cat.questions : [];
}

/**
 * Get a random question, optionally filtered by categories and/or level.
 * If the selected category has a generator, it may return a procedurally
 * generated question (50% chance when a generator is available).
 *
 * @param {string[]} [categories] - Array of category codes to pick from.
 *                                   If empty or undefined, all categories are used.
 * @param {1|2|3}    [level]      - If provided, only questions of this level.
 * @returns {object|null}          A question object, or null if none found.
 */
export function getRandomQuestion(categories, level) {
  // Resolve which categories to use
  let pool = allCategories;
  if (categories && categories.length > 0) {
    pool = allCategories.filter((cat) => categories.includes(cat.code));
  }
  if (pool.length === 0) return null;

  // Pick a random category from the pool
  const cat = pool[Math.floor(Math.random() * pool.length)];

  // 50 % chance to use the generator if one exists
  if (cat.generate && Math.random() < 0.5) {
    const lvl = level || (Math.floor(Math.random() * 3) + 1);
    return cat.generate(lvl);
  }

  // Otherwise pick from static questions
  let available = cat.questions;
  if (level) {
    available = available.filter((q) => q.level === level);
  }
  if (available.length === 0) {
    // Fallback: try the generator
    if (cat.generate) {
      const lvl = level || (Math.floor(Math.random() * 3) + 1);
      return cat.generate(lvl);
    }
    return null;
  }

  return available[Math.floor(Math.random() * available.length)];
}

/**
 * Get all static questions across all categories, optionally filtered by level.
 * @param {1|2|3} [level] - If provided, only questions of this level.
 * @returns {Array} Array of question objects
 */
export function getAllQuestions(level) {
  const all = allCategories.flatMap((cat) => cat.questions);
  if (level) {
    return all.filter((q) => q.level === level);
  }
  return all;
}

/**
 * Get the total count of static questions.
 * @returns {number}
 */
export function getTotalQuestionCount() {
  return allCategories.reduce((sum, cat) => sum + cat.questions.length, 0);
}

/**
 * Generate a question for a specific arithmetic operation.
 * Uses difficulty level to scale number ranges.
 * @param {string} operation - 'addition' | 'subtraction' | 'multiplication' | 'division'
 * @param {1|2|3} level - Difficulty level
 * @returns {object} A question object
 */
export function generateForOperation(operation, level = 1) {
  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const id = `OP_gen_${Date.now()}_${rand(100, 999)}`;

  if (operation === 'addition') {
    let a, b;
    if (level === 1) { a = rand(10, 60); b = rand(10, 99 - a); }
    else if (level === 2) { a = rand(50, 500); b = rand(50, 500); }
    else { a = rand(100, 9999); b = rand(100, 9999); }
    const answer = a + b;
    return {
      id, category: 'N2', level,
      text: { fr: `Combien font ${a} + ${b} ?`, en: `What is ${a} + ${b}?`, nl: `Hoeveel is ${a} + ${b}?` },
      answer, tolerance: 0,
      hint: { fr: `Calcule ${a} + ${b}.`, en: `Calculate ${a} + ${b}.`, nl: `Bereken ${a} + ${b}.` },
    };
  }

  if (operation === 'subtraction') {
    let a, b;
    if (level === 1) { a = rand(30, 99); b = rand(10, a - 1); }
    else if (level === 2) { a = rand(100, 999); b = rand(50, a - 1); }
    else { a = rand(1000, 9999); b = rand(100, a - 1); }
    const answer = a - b;
    return {
      id, category: 'N2', level,
      text: { fr: `Combien font ${a} - ${b} ?`, en: `What is ${a} - ${b}?`, nl: `Hoeveel is ${a} - ${b}?` },
      answer, tolerance: 0,
      hint: { fr: `Calcule ${a} - ${b}.`, en: `Calculate ${a} - ${b}.`, nl: `Bereken ${a} - ${b}.` },
    };
  }

  if (operation === 'multiplication') {
    let a, b;
    if (level === 1) { a = rand(2, 9); b = rand(2, 9); }
    else if (level === 2) { a = rand(2, 12); b = rand(2, 12); }
    else { a = rand(10, 30); b = rand(2, 12); }
    const answer = a * b;
    return {
      id, category: 'N2', level,
      text: { fr: `Combien font ${a} × ${b} ?`, en: `What is ${a} × ${b}?`, nl: `Hoeveel is ${a} × ${b}?` },
      answer, tolerance: 0,
      hint: { fr: `Pense à la table de ${a}.`, en: `Think of the ${a} times table.`, nl: `Denk aan de tafel van ${a}.` },
    };
  }

  if (operation === 'division') {
    let divisor, quotient;
    if (level === 1) { divisor = rand(2, 9); quotient = rand(2, 9); }
    else if (level === 2) { divisor = rand(3, 12); quotient = rand(5, 15); }
    else { divisor = rand(3, 15); quotient = rand(10, 30); }
    const dividend = divisor * quotient;
    return {
      id, category: 'N2', level,
      text: { fr: `Combien font ${dividend} ÷ ${divisor} ?`, en: `What is ${dividend} ÷ ${divisor}?`, nl: `Hoeveel is ${dividend} ÷ ${divisor}?` },
      answer: quotient, tolerance: 0,
      hint: { fr: `${divisor} × ? = ${dividend}`, en: `${divisor} × ? = ${dividend}`, nl: `${divisor} × ? = ${dividend}` },
    };
  }

  // Fallback: addition
  return generateForOperation('addition', level);
}
