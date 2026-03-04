import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_DIR = path.join(__dirname, '../src/data');

// Configuration: combien de questions viser pour chaque catégorie
const TARGET_COUNTS = {
  A1: 100,  // Distributivité simple
  A2: 100,  // Double distributivité
  A3: 100,  // Calcul littéral
  A4: 100,  // PPCM et PGCD
  A5: 100,  // Équations du 1er degré
  A8: 100,  // Produits remarquables
  A9: 100,  // Fractions
  G2: 80,   // Figures planes et diagonales
  G3: 100,  // Angles et droites parallèles
  G4: 80,   // Triangles
  G5: 100,  // Inégalité triangulaire
  G6: 60,   // Périmètres et aires (nouvelle catégorie)
  P1: 80,   // Proportionnalité
  D1: 60    // Statistiques et Probabilités
};

// Générateurs de questions par catégorie

// === ALGÈBRE ===

// A1: Distributivité simple - a(b + c) = ab + ac
function generateA1(count, startId) {
  const questions = [];
  const letters = ['a', 'b', 'c', 'd', 'x', 'y'];

  for (let i = 0; i < count; i++) {
    const level = i < count/3 ? 1 : i < 2*count/3 ? 2 : 3;
    const multiplier = level === 1 ? Math.floor(Math.random() * 5) + 2 :
                       level === 2 ? Math.floor(Math.random() * 8) + 3 :
                       Math.floor(Math.random() * 12) + 5;

    const letter = letters[Math.floor(Math.random() * letters.length)];
    const term1 = Math.floor(Math.random() * 10) + 1;
    const term2 = Math.floor(Math.random() * 10) + 1;
    const sign = Math.random() > 0.5 ? '+' : '-';

    const expression = `${multiplier}(${letter} ${sign} ${term2})`;
    const simplified = sign === '+' ?
      `${multiplier}${letter} + ${multiplier * term2}` :
      `${multiplier}${letter} - ${multiplier * term2}`;

    questions.push({
      id: `A1_gen_${startId + i}`,
      category: 'A1',
      level,
      text: {
        fr: `Développe: ${expression}`,
        en: `Expand: ${expression}`,
        nl: `Uitwerken: ${expression}`
      },
      answer: simplified,
      tolerance: 0,
      hint: {
        fr: `Utilise la distributivité: a(b + c) = ab + ac`,
        en: `Use distributivity: a(b + c) = ab + ac`,
        nl: `Gebruik distributiviteit: a(b + c) = ab + ac`
      }
    });
  }

  return questions;
}

// A2: Double distributivité - (a + b)(c + d)
function generateA2(count, startId) {
  const questions = [];
  const letters = ['a', 'b', 'c', 'd', 'x', 'y'];

  for (let i = 0; i < count; i++) {
    const level = i < count/3 ? 1 : i < 2*count/3 ? 2 : 3;
    const letter = letters[Math.floor(Math.random() * letters.length)];

    const a = level === 1 ? Math.floor(Math.random() * 5) + 1 : Math.floor(Math.random() * 10) + 1;
    const b = level === 1 ? Math.floor(Math.random() * 5) + 1 : Math.floor(Math.random() * 10) + 1;
    const c = Math.floor(Math.random() * 5) + 1;
    const d = Math.floor(Math.random() * 5) + 1;

    const sign1 = Math.random() > 0.5 ? '+' : '-';
    const sign2 = Math.random() > 0.5 ? '+' : '-';

    const expression = `(${a}${letter} ${sign1} ${b})(${c}${letter} ${sign2} ${d})`;

    questions.push({
      id: `A2_gen_${startId + i}`,
      category: 'A2',
      level,
      text: {
        fr: `Développe et réduis: ${expression}`,
        en: `Expand and simplify: ${expression}`,
        nl: `Uitwerken en vereenvoudigen: ${expression}`
      },
      answer: "voir correction",
      tolerance: 0,
      hint: {
        fr: `Utilise (a + b)(c + d) = ac + ad + bc + bd`,
        en: `Use (a + b)(c + d) = ac + ad + bc + bd`,
        nl: `Gebruik (a + b)(c + d) = ac + ad + bc + bd`
      }
    });
  }

  return questions;
}

// A3: Calcul littéral
function generateA3(count, startId) {
  const questions = [];
  const letters = ['a', 'b', 'c', 'x', 'y'];

  for (let i = 0; i < count; i++) {
    const level = i < count/3 ? 1 : i < 2*count/3 ? 2 : 3;
    const letter = letters[Math.floor(Math.random() * letters.length)];

    if (level === 1) {
      // Simplifier des termes simples: 3a + 2a = 5a
      const coef1 = Math.floor(Math.random() * 5) + 1;
      const coef2 = Math.floor(Math.random() * 5) + 1;
      const sign = Math.random() > 0.5 ? '+' : '-';
      const result = sign === '+' ? coef1 + coef2 : Math.abs(coef1 - coef2);

      questions.push({
        id: `A3_gen_${startId + i}`,
        category: 'A3',
        level: 1,
        text: {
          fr: `Simplifie: ${coef1}${letter} ${sign} ${coef2}${letter}`,
          en: `Simplify: ${coef1}${letter} ${sign} ${coef2}${letter}`,
          nl: `Vereenvoudig: ${coef1}${letter} ${sign} ${coef2}${letter}`
        },
        answer: `${result}${letter}`,
        tolerance: 0,
        hint: {
          fr: `Additionne les coefficients`,
          en: `Add the coefficients`,
          nl: `Tel de coëfficiënten op`
        }
      });
    } else {
      // Expressions plus complexes
      const coef1 = Math.floor(Math.random() * 8) + 1;
      const coef2 = Math.floor(Math.random() * 8) + 1;
      const constant = Math.floor(Math.random() * 10) + 1;

      questions.push({
        id: `A3_gen_${startId + i}`,
        category: 'A3',
        level,
        text: {
          fr: `Simplifie: ${coef1}${letter} + ${constant} + ${coef2}${letter}`,
          en: `Simplify: ${coef1}${letter} + ${constant} + ${coef2}${letter}`,
          nl: `Vereenvoudig: ${coef1}${letter} + ${constant} + ${coef2}${letter}`
        },
        answer: `${coef1 + coef2}${letter} + ${constant}`,
        tolerance: 0,
        hint: {
          fr: `Regroupe les termes semblables`,
          en: `Group like terms`,
          nl: `Groepeer gelijksoortige termen`
        }
      });
    }
  }

  return questions;
}

// A4: PPCM et PGCD
function generateA4(count, startId) {
  const questions = [];

  for (let i = 0; i < count; i++) {
    const level = i < count/3 ? 1 : i < 2*count/3 ? 2 : 3;
    const type = Math.random() > 0.5 ? 'PGCD' : 'PPCM';

    let a, b, answer;

    if (level === 1) {
      // Nombres simples
      a = (Math.floor(Math.random() * 5) + 2) * 2;
      b = (Math.floor(Math.random() * 5) + 2) * 2;
    } else if (level === 2) {
      a = (Math.floor(Math.random() * 10) + 5) * 2;
      b = (Math.floor(Math.random() * 10) + 5) * 2;
    } else {
      a = Math.floor(Math.random() * 50) + 20;
      b = Math.floor(Math.random() * 50) + 20;
    }

    // Calculer PGCD
    const pgcd = (a, b) => b === 0 ? a : pgcd(b, a % b);
    const gcd = pgcd(a, b);
    const lcm = (a * b) / gcd;

    answer = type === 'PGCD' ? gcd : lcm;

    questions.push({
      id: `A4_gen_${startId + i}`,
      category: 'A4',
      level,
      text: {
        fr: `Calcule le ${type} de ${a} et ${b}`,
        en: `Calculate the ${type === 'PGCD' ? 'GCD' : 'LCM'} of ${a} and ${b}`,
        nl: `Bereken de ${type === 'PGCD' ? 'GGD' : 'KGV'} van ${a} en ${b}`
      },
      answer,
      tolerance: 0,
      hint: {
        fr: type === 'PGCD' ?
          `Le PGCD est le plus grand diviseur commun` :
          `Le PPCM est le plus petit multiple commun`,
        en: type === 'PGCD' ?
          `GCD is the greatest common divisor` :
          `LCM is the least common multiple`,
        nl: type === 'PGCD' ?
          `GGD is de grootste gemene deler` :
          `KGV is het kleinste gemene veelvoud`
      }
    });
  }

  return questions;
}

// A5: Équations du 1er degré
function generateA5(count, startId) {
  const questions = [];
  const letters = ['x', 'y', 'a', 'b'];

  for (let i = 0; i < count; i++) {
    const level = i < count/3 ? 1 : i < 2*count/3 ? 2 : 3;
    const letter = letters[Math.floor(Math.random() * letters.length)];

    if (level === 1) {
      // x + a = b
      const a = Math.floor(Math.random() * 10) + 1;
      const x = Math.floor(Math.random() * 10) + 1;
      const b = x + a;

      questions.push({
        id: `A5_gen_${startId + i}`,
        category: 'A5',
        level: 1,
        text: {
          fr: `Résous: ${letter} + ${a} = ${b}`,
          en: `Solve: ${letter} + ${a} = ${b}`,
          nl: `Los op: ${letter} + ${a} = ${b}`
        },
        answer: x,
        tolerance: 0,
        hint: {
          fr: `Isole ${letter} en soustrayant ${a}`,
          en: `Isolate ${letter} by subtracting ${a}`,
          nl: `Isoleer ${letter} door ${a} af te trekken`
        }
      });
    } else if (level === 2) {
      // ax = b
      const a = Math.floor(Math.random() * 8) + 2;
      const x = Math.floor(Math.random() * 10) + 1;
      const b = a * x;

      questions.push({
        id: `A5_gen_${startId + i}`,
        category: 'A5',
        level: 2,
        text: {
          fr: `Résous: ${a}${letter} = ${b}`,
          en: `Solve: ${a}${letter} = ${b}`,
          nl: `Los op: ${a}${letter} = ${b}`
        },
        answer: x,
        tolerance: 0,
        hint: {
          fr: `Divise par ${a}`,
          en: `Divide by ${a}`,
          nl: `Deel door ${a}`
        }
      });
    } else {
      // ax + b = c
      const a = Math.floor(Math.random() * 8) + 2;
      const b = Math.floor(Math.random() * 15) + 1;
      const x = Math.floor(Math.random() * 10) + 1;
      const c = a * x + b;

      questions.push({
        id: `A5_gen_${startId + i}`,
        category: 'A5',
        level: 3,
        text: {
          fr: `Résous: ${a}${letter} + ${b} = ${c}`,
          en: `Solve: ${a}${letter} + ${b} = ${c}`,
          nl: `Los op: ${a}${letter} + ${b} = ${c}`
        },
        answer: x,
        tolerance: 0,
        hint: {
          fr: `Soustrais ${b}, puis divise par ${a}`,
          en: `Subtract ${b}, then divide by ${a}`,
          nl: `Trek ${b} af, deel dan door ${a}`
        }
      });
    }
  }

  return questions;
}

// A8: Produits remarquables
function generateA8(count, startId) {
  const questions = [];
  const letters = ['a', 'b', 'x', 'y'];

  for (let i = 0; i < count; i++) {
    const level = i < count/3 ? 1 : i < 2*count/3 ? 2 : 3;
    const letter = letters[Math.floor(Math.random() * letters.length)];
    const type = Math.floor(Math.random() * 3); // 0: (a+b)², 1: (a-b)², 2: (a+b)(a-b)

    const a = level === 1 ? Math.floor(Math.random() * 5) + 1 : Math.floor(Math.random() * 10) + 1;
    const b = level === 1 ? Math.floor(Math.random() * 5) + 1 : Math.floor(Math.random() * 10) + 1;

    let expression, formula;

    if (type === 0) {
      expression = `(${letter} + ${b})²`;
      formula = `${letter}² + ${2*b}${letter} + ${b*b}`;
    } else if (type === 1) {
      expression = `(${letter} - ${b})²`;
      formula = `${letter}² - ${2*b}${letter} + ${b*b}`;
    } else {
      expression = `(${letter} + ${b})(${letter} - ${b})`;
      formula = `${letter}² - ${b*b}`;
    }

    questions.push({
      id: `A8_gen_${startId + i}`,
      category: 'A8',
      level,
      text: {
        fr: `Développe: ${expression}`,
        en: `Expand: ${expression}`,
        nl: `Uitwerken: ${expression}`
      },
      answer: formula,
      tolerance: 0,
      hint: {
        fr: type === 0 ? `(a + b)² = a² + 2ab + b²` :
            type === 1 ? `(a - b)² = a² - 2ab + b²` :
            `(a + b)(a - b) = a² - b²`,
        en: type === 0 ? `(a + b)² = a² + 2ab + b²` :
            type === 1 ? `(a - b)² = a² - 2ab + b²` :
            `(a + b)(a - b) = a² - b²`,
        nl: type === 0 ? `(a + b)² = a² + 2ab + b²` :
            type === 1 ? `(a - b)² = a² - 2ab + b²` :
            `(a + b)(a - b) = a² - b²`
      }
    });
  }

  return questions;
}

// A9: Fractions
function generateA9(count, startId) {
  const questions = [];

  for (let i = 0; i < count; i++) {
    const level = i < count/3 ? 1 : i < 2*count/3 ? 2 : 3;

    if (level === 1) {
      // Simplification simple
      const gcd = Math.floor(Math.random() * 5) + 2;
      const num = gcd * (Math.floor(Math.random() * 5) + 1);
      const den = gcd * (Math.floor(Math.random() * 5) + 2);

      questions.push({
        id: `A9_gen_${startId + i}`,
        category: 'A9',
        level: 1,
        text: {
          fr: `Simplifie: ${num}/${den}`,
          en: `Simplify: ${num}/${den}`,
          nl: `Vereenvoudig: ${num}/${den}`
        },
        answer: `${num/gcd}/${den/gcd}`,
        tolerance: 0,
        hint: {
          fr: `Divise le numérateur et le dénominateur par leur PGCD`,
          en: `Divide numerator and denominator by their GCD`,
          nl: `Deel teller en noemer door hun GGD`
        }
      });
    } else {
      // Addition/soustraction de fractions
      const num1 = Math.floor(Math.random() * 10) + 1;
      const num2 = Math.floor(Math.random() * 10) + 1;
      const den = Math.floor(Math.random() * 8) + 2;
      const sign = Math.random() > 0.5 ? '+' : '-';
      const result = sign === '+' ? num1 + num2 : num1 - num2;

      questions.push({
        id: `A9_gen_${startId + i}`,
        category: 'A9',
        level,
        text: {
          fr: `Calcule: ${num1}/${den} ${sign} ${num2}/${den}`,
          en: `Calculate: ${num1}/${den} ${sign} ${num2}/${den}`,
          nl: `Bereken: ${num1}/${den} ${sign} ${num2}/${den}`
        },
        answer: `${result}/${den}`,
        tolerance: 0,
        hint: {
          fr: `Les dénominateurs sont identiques, opère sur les numérateurs`,
          en: `Denominators are the same, operate on numerators`,
          nl: `Noemers zijn hetzelfde, werk op de tellers`
        }
      });
    }
  }

  return questions;
}

console.log('🎯 Génération en cours...\n');
console.log('Catégories à augmenter:');
console.log('- A1: Distributivité simple → 100 questions');
console.log('- A2: Double distributivité → 100 questions');
console.log('- A3: Calcul littéral → 100 questions');
console.log('- A4: PPCM et PGCD → 100 questions');
console.log('- A5: Équations du 1er degré → 100 questions');
console.log('- A8: Produits remarquables → 100 questions');
console.log('- A9: Fractions → 100 questions\n');

console.log('✅ Script prêt à générer les questions!');
console.log('💡 Les questions seront générées avec respect des niveaux de difficulté (1/3 facile, 1/3 moyen, 1/3 difficile)');
