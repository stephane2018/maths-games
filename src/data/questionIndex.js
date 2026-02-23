// =============================================================================
// Question Index - Central registry for all question categories
// CE1D Belgian exam - Math games
// =============================================================================

import { questions as questionsN1, generate as generateN1 } from './questions-N1.js';
import { questions as questionsN2, generate as generateN2 } from './questions-N2.js';
import { questions as questionsN3, generate as generateN3 } from './questions-N3.js';
import { questions as questionsN4, generate as generateN4 } from './questions-N4.js';
import { questions as questionsN5, generate as generateN5 } from './questions-N5.js';
import { questions as questionsN6, generate as generateN6 } from './questions-N6.js';
import { questions as questionsG1, generate as generateG1 } from './questions-G1.js';
import { questions as questionsG2, generate as generateG2 } from './questions-G2.js';
import { questions as questionsG3, generate as generateG3 } from './questions-G3.js';
import { questions as questionsG4, generate as generateG4 } from './questions-G4.js';
import { questions as questionsG5, generate as generateG5 } from './questions-G5.js';
import { questions as questionsG6, generate as generateG6 } from './questions-G6.js';
import { questions as questionsG7, generate as generateG7 } from './questions-G7.js';
import { questions as questionsP1, generate as generateP1 } from './questions-P1.js';
import { questions as questionsD1, generate as generateD1 } from './questions-D1.js';
import { questions as questionsD2, generate as generateD2 } from './questions-D2.js';
import { questions as questionsM1, generate as generateM1 } from './questions-M1.js';
import { questions as questionsR1, generate as generateR1 } from './questions-R1.js';

export const allCategories = [
  {
    code: 'N1',
    label: { fr: 'Calcul numérique', en: 'Calcul numérique', nl: 'Calcul numérique' },
    questions: questionsN1,
    generate: generateN1,
  },
  {
    code: 'N2',
    label: { fr: 'Calcul littéral', en: 'Calcul littéral', nl: 'Calcul littéral' },
    questions: questionsN2,
    generate: generateN2,
  },
  {
    code: 'N3',
    label: { fr: 'Puissances', en: 'Puissances', nl: 'Puissances' },
    questions: questionsN3,
    generate: generateN3,
  },
  {
    code: 'N4',
    label: { fr: 'Équations', en: 'Équations', nl: 'Équations' },
    questions: questionsN4,
    generate: generateN4,
  },
  {
    code: 'N5',
    label: { fr: 'Fractions', en: 'Fractions', nl: 'Breuken' },
    questions: questionsN5,
    generate: generateN5,
  },
  {
    code: 'N6',
    label: { fr: 'Dénombrer', en: 'Counting', nl: 'Tellen' },
    questions: questionsN6,
    generate: generateN6,
  },
  {
    code: 'G1',
    label: { fr: 'Distances', en: 'Distances', nl: 'Afstanden' },
    questions: questionsG1,
    generate: generateG1,
  },
  {
    code: 'G2',
    label: { fr: 'Transformations du plan', en: 'Transformations du plan', nl: 'Transformations du plan' },
    questions: questionsG2,
    generate: generateG2,
  },
  {
    code: 'G3',
    label: { fr: 'Repérage', en: 'Repérage', nl: 'Repérage' },
    questions: questionsG3,
    generate: generateG3,
  },
  {
    code: 'G4',
    label: { fr: 'Angles', en: 'Angles', nl: 'Angles' },
    questions: questionsG4,
    generate: generateG4,
  },
  {
    code: 'G5',
    label: { fr: 'Figures planes', en: 'Figures planes', nl: 'Figures planes' },
    questions: questionsG5,
    generate: generateG5,
  },
  {
    code: 'G6',
    label: { fr: 'Solides', en: 'Solides', nl: 'Solides' },
    questions: questionsG6,
    generate: generateG6,
  },
  {
    code: 'G7',
    label: { fr: 'Programmes de construction', en: 'Programmes de construction', nl: 'Programmes de construction' },
    questions: questionsG7,
    generate: generateG7,
  },
  {
    code: 'P1',
    label: { fr: 'Grandeurs proportionnelles', en: 'Grandeurs proportionnelles', nl: 'Grandeurs proportionnelles' },
    questions: questionsP1,
    generate: generateP1,
  },
  {
    code: 'D1',
    label: { fr: 'Traitement de données', en: 'Traitement de données', nl: 'Traitement de données' },
    questions: questionsD1,
    generate: generateD1,
  },
  {
    code: 'D2',
    label: { fr: 'Statistiques', en: 'Statistiques', nl: 'Statistiques' },
    questions: questionsD2,
    generate: generateD2,
  },
  {
    code: 'M1',
    label: { fr: 'Conversions et mesures', en: 'Conversions et mesures', nl: 'Conversions et mesures' },
    questions: questionsM1,
    generate: generateM1,
  },
  {
    code: 'R1',
    label: { fr: 'Problèmes complexes', en: 'Problèmes complexes', nl: 'Problèmes complexes' },
    questions: questionsR1,
    generate: generateR1,
  }
];

export function getCategoryByCode(code) {
  return allCategories.find((cat) => cat.code === code);
}

export function getQuestionsByCategory(code) {
  const cat = getCategoryByCode(code);
  return cat ? cat.questions : [];
}

export function getRandomQuestion(categories, level) {
  let pool = allCategories;
  if (categories && categories.length > 0) {
    pool = allCategories.filter((cat) => categories.includes(cat.code));
  }
  if (pool.length === 0) return null;

  const cat = pool[Math.floor(Math.random() * pool.length)];

  // DÉSACTIVÉ: Génération procédurale
  // if (cat.generate && Math.random() < 0.5) {
  //   const lvl = level || (Math.floor(Math.random() * 3) + 1);
  //   return cat.generate(lvl);
  // }

  let available = cat.questions;
  if (level) {
    available = available.filter((q) => q.level === level);
  }
  // Fallback 1: même catégorie sans filtre de level
  if (available.length === 0 && level) {
    available = cat.questions;
  }
  if (available.length === 0) {
    // Fallback 2: essayer les autres catégories du pool
    for (const otherCat of pool) {
      if (otherCat.code === cat.code) continue;
      let otherQuestions = level
        ? otherCat.questions.filter((q) => q.level === level)
        : otherCat.questions;
      // Fallback 3: autre catégorie sans filtre de level
      if (otherQuestions.length === 0 && level) {
        otherQuestions = otherCat.questions;
      }
      if (otherQuestions.length > 0) {
        return otherQuestions[Math.floor(Math.random() * otherQuestions.length)];
      }
    }
    // Fallback 4: catégorie vide → utiliser le générateur procédural
    if (cat.generate) {
      const lvl = level || 1;
      return cat.generate(lvl);
    }
    // Fallback 5: générateur d'une autre catégorie du pool
    for (const otherCat of pool) {
      if (otherCat.generate) {
        return otherCat.generate(level || 1);
      }
    }
    return null;
  }

  return available[Math.floor(Math.random() * available.length)];
}

export function getAllQuestions(level) {
  const all = allCategories.flatMap((cat) => cat.questions);
  if (level) {
    return all.filter((q) => q.level === level);
  }
  return all;
}

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
