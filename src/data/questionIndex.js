// =============================================================================
// Question Index - Central registry for all question categories
// CE1D Belgian exam - Math games
// =============================================================================

import { questions as questionsN1, generate as generateN1 } from './questions-N1.js';
import { questions as questionsN2, generate as generateN2 } from './questions-N2.js';
import { questions as questionsN3, generate as generateN3 } from './questions-N3.js';
import { questions as questionsN4, generate as generateN4 } from './questions-N4.js';
import { questions as questionsN6, generate as generateN6 } from './questions-N6.js';
import { questions as questionsG1, generate as generateG1 } from './questions-G1.js';
import { questions as questionsG2 } from './questions-G2.js';
import { questions as questionsG3 } from './questions-G3.js';
import { questions as questionsG4 } from './questions-G4.js';
import { questions as questionsG5 } from './questions-G5.js';
import { questions as questionsG7, generate as generateG7 } from './questions-G7.js';
import { questions as questionsP1 } from './questions-P1.js';
import { questions as questionsD1 } from './questions-D1.js';
import { questions as questionsA1 } from './questions-A1.js';
import { questions as questionsA2 } from './questions-A2.js';
import { questions as questionsA3 } from './questions-A3.js';
import { questions as questionsA4 } from './questions-A4.js';
import { questions as questionsA5 } from './questions-A5.js';
import { questions as questionsA8 } from './questions-A8.js';
import { questions as questionsA9 } from './questions-A9.js';


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
    label: { fr: 'Figures planes et diagonales', en: 'Plane figures and diagonals', nl: 'Vlakke figuren en diagonalen' },
    questions: questionsG2,
  },
  {
    code: 'G3',
    label: { fr: 'Angles et droites parallèles', en: 'Angles and parallel lines', nl: 'Hoeken en evenwijdige lijnen' },
    questions: questionsG3,
  },
  {
    code: 'G4',
    label: { fr: 'Triangles', en: 'Triangles', nl: 'Driehoeken' },
    questions: questionsG4,
  },
  {
    code: 'G5',
    label: { fr: 'Inégalité triangulaire', en: 'Triangle Inequality', nl: 'Driehoeksongelijkheid' },
    questions: questionsG5,
  },
  {
    code: 'G7',
    label: { fr: 'Programmes de construction', en: 'Programmes de construction', nl: 'Programmes de construction' },
    questions: questionsG7,
    generate: generateG7,
  },
  {
    code: 'P1',
    label: { fr: 'Proportionnalité', en: 'Proportionality', nl: 'Evenredigheid' },
    questions: questionsP1,
  },
  {
    code: 'D1',
    label: { fr: 'Statistiques et Probabilités', en: 'Statistics and Probability', nl: 'Statistiek en Kansrekening' },
    questions: questionsD1,
  },
  {
    code: 'A1',
    label: { fr: 'Distributivité simple', en: 'Simple Distributivity', nl: 'Eenvoudige distributiviteit' },
    questions: questionsA1,
  },
  {
    code: 'A2',
    label: { fr: 'Double distributivité', en: 'Double Distributivity', nl: 'Dubbele distributiviteit' },
    questions: questionsA2,
  },
  {
    code: 'A3',
    label: { fr: 'Calcul littéral', en: 'Literal Calculation', nl: 'Letterrekenen' },
    questions: questionsA3,
  },
  {
    code: 'A4',
    label: { fr: 'PPCM et PGCD', en: 'LCM and GCD', nl: 'KGV en GGD' },
    questions: questionsA4,
  },
  {
    code: 'A5',
    label: { fr: 'Équations du 1er degré', en: 'First Degree Equations', nl: 'Vergelijkingen van de eerste graad' },
    questions: questionsA5,
  },
  {
    code: 'A8',
    label: { fr: 'Produits remarquables', en: 'Notable Products', nl: 'Merkwaardige producten' },
    questions: questionsA8,
  },
  {
    code: 'A9',
    label: { fr: 'Fractions', en: 'Fractions', nl: 'Breuken' },
    questions: questionsA9,
  },
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
      text: { fr: `Combien font ${a} . ${b} ?`, en: `What is ${a} . ${b}?`, nl: `Hoeveel is ${a} . ${b}?` },
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
      text: { fr: `Combien font ${dividend} : ${divisor} ?`, en: `What is ${dividend} : ${divisor}?`, nl: `Hoeveel is ${dividend} : ${divisor}?` },
      answer: quotient, tolerance: 0,
      hint: { fr: `${divisor} . ? = ${dividend}`, en: `${divisor} . ? = ${dividend}`, nl: `${divisor} . ? = ${dividend}` },
    };
  }

  // Fallback: addition
  return generateForOperation('addition', level);
}
