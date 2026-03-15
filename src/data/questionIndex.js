// =============================================================================
// Question Index - Central registry for all question categories
// CE1D Belgian exam - Math games
// =============================================================================

import { questionModules } from './allQuestions.js';
import { storage } from '../systems/StorageManager.js';

const q = (code) => questionModules[code]?.questions || [];
const g = (code) => questionModules[code]?.generate || undefined;

export const allCategories = [
  { code: 'N1', label: { fr: 'Calcul numérique', en: 'Numerical calculation', nl: 'Numerieke berekening' }, questions: q('N1'), generate: g('N1') },
  { code: 'N2', label: { fr: 'Calcul littéral', en: 'Literal calculation', nl: 'Letterrekenen' }, questions: q('N2'), generate: g('N2') },
  { code: 'N3', label: { fr: 'Puissances', en: 'Powers', nl: 'Machten' }, questions: q('N3'), generate: g('N3') },
  { code: 'N4', label: { fr: 'Équations', en: 'Equations', nl: 'Vergelijkingen' }, questions: q('N4'), generate: g('N4') },
  { code: 'N5', label: { fr: 'Nombres décimaux', en: 'Decimal numbers', nl: 'Decimale getallen' }, questions: q('N5'), generate: g('N5') },
  { code: 'N6', label: { fr: 'Dénombrer', en: 'Counting', nl: 'Tellen' }, questions: q('N6'), generate: g('N6') },
  { code: 'G1', label: { fr: 'Distances', en: 'Distances', nl: 'Afstanden' }, questions: q('G1'), generate: g('G1') },
  { code: 'G2', label: { fr: 'Figures planes et diagonales', en: 'Plane figures and diagonals', nl: 'Vlakke figuren en diagonalen' }, questions: q('G2') },
  { code: 'G3', label: { fr: 'Angles et droites parallèles', en: 'Angles and parallel lines', nl: 'Hoeken en evenwijdige lijnen' }, questions: q('G3') },
  { code: 'G4', label: { fr: 'Triangles', en: 'Triangles', nl: 'Driehoeken' }, questions: q('G4') },
  { code: 'G5', label: { fr: 'Inégalité triangulaire', en: 'Triangle Inequality', nl: 'Driehoeksongelijkheid' }, questions: q('G5') },
  { code: 'G6', label: { fr: 'Cercles', en: 'Circles', nl: 'Cirkels' }, questions: q('G6'), generate: g('G6') },
  { code: 'G7', label: { fr: 'Programmes de construction', en: 'Construction programs', nl: "Constructieprogramma's" }, questions: q('G7'), generate: g('G7') },
  { code: 'A1', label: { fr: 'Distributivité simple', en: 'Simple Distributivity', nl: 'Eenvoudige distributiviteit' }, questions: q('A1') },
  { code: 'A2', label: { fr: 'Double distributivité', en: 'Double Distributivity', nl: 'Dubbele distributiviteit' }, questions: q('A2') },
  { code: 'A3', label: { fr: 'Calcul littéral', en: 'Literal Calculation', nl: 'Letterrekenen' }, questions: q('A3') },
  { code: 'A4', label: { fr: 'Diviseurs et multiples', en: 'Divisors and Multiples', nl: 'Delers en veelvouden' }, questions: q('A4') },
  { code: 'A5', label: { fr: 'Équations du 1er degré', en: 'First Degree Equations', nl: 'Vergelijkingen van de eerste graad' }, questions: q('A5') },
  { code: 'A6', label: { fr: 'Suppression des parenthèses', en: 'Removing Parentheses', nl: 'Haakjes verwijderen' }, questions: q('A6'), generate: g('A6') },
  { code: 'A8', label: { fr: 'Produits remarquables', en: 'Notable Products', nl: 'Merkwaardige producten' }, questions: q('A8') },
  { code: 'A9', label: { fr: 'Fractions', en: 'Fractions', nl: 'Breuken' }, questions: q('A9') },
  { code: 'A10', label: { fr: 'Factorisation', en: 'Factoring', nl: 'Ontbinden in factoren' }, questions: q('A10') },
  { code: 'P1', label: { fr: 'Proportionnalité', en: 'Proportionality', nl: 'Evenredigheid' }, questions: q('P1') },
  { code: 'D1', label: { fr: 'Statistiques et Probabilités', en: 'Statistics and Probability', nl: 'Statistiek en Kansrekening' }, questions: q('D1') },
  { code: 'D2', label: { fr: 'Statistiques', en: 'Statistics', nl: 'Statistiek' }, questions: q('D2'), generate: g('D2') },
  { code: 'M1', label: { fr: 'Conversions et mesures', en: 'Conversions and measurements', nl: 'Conversies en metingen' }, questions: q('M1'), generate: g('M1') },
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

  // Merge custom questions into the pool
  const customQuestions = storage.getCustomQuestions();
  const catCodes = pool.map(c => c.code);
  const relevantCustom = customQuestions.filter(q => catCodes.includes(q.category));

  // 30% chance to pick a custom question if any are available
  if (relevantCustom.length > 0 && Math.random() < 0.3) {
    let filtered = level ? relevantCustom.filter(q => q.level === level) : relevantCustom;
    if (filtered.length === 0) filtered = relevantCustom;
    return filtered[Math.floor(Math.random() * filtered.length)];
  }

  const cat = pool[Math.floor(Math.random() * pool.length)];

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
