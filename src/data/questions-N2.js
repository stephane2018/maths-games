// =============================================================================
// N2 - Simple Operations: addition, subtraction, multiplication, division
// CE1D Belgian exam - Trilingual (FR / EN / NL)
// =============================================================================

export const questions = [
  // ── Level 1: add / subtract < 100 ─────────────────────────────────────────
  {
    id: 'N2_001',
    category: 'N2',
    level: 1,
    text: {
      fr: 'Combien font 27 + 35 ?',
      en: 'What is 27 + 35?',
      nl: 'Hoeveel is 27 + 35?',
    },
    answer: 62,
    tolerance: 0,
    hint: {
      fr: '27 + 35 = 27 + 30 + 5 = 57 + 5.',
      en: '27 + 35 = 27 + 30 + 5 = 57 + 5.',
      nl: '27 + 35 = 27 + 30 + 5 = 57 + 5.',
    },
    commonMistake: '52',
  },
  {
    id: 'N2_002',
    category: 'N2',
    level: 1,
    text: {
      fr: 'Combien font 83 - 47 ?',
      en: 'What is 83 - 47?',
      nl: 'Hoeveel is 83 - 47?',
    },
    answer: 36,
    tolerance: 0,
    hint: {
      fr: '83 - 47 = 83 - 40 - 7 = 43 - 7.',
      en: '83 - 47 = 83 - 40 - 7 = 43 - 7.',
      nl: '83 - 47 = 83 - 40 - 7 = 43 - 7.',
    },
    commonMistake: '46',
  },
  {
    id: 'N2_003',
    category: 'N2',
    level: 1,
    text: {
      fr: 'Combien font 45 + 38 ?',
      en: 'What is 45 + 38?',
      nl: 'Hoeveel is 45 + 38?',
    },
    answer: 83,
    tolerance: 0,
    hint: {
      fr: '45 + 38 = 45 + 40 - 2 = 85 - 2.',
      en: '45 + 38 = 45 + 40 - 2 = 85 - 2.',
      nl: '45 + 38 = 45 + 40 - 2 = 85 - 2.',
    },
    commonMistake: '73',
  },
  {
    id: 'N2_004',
    category: 'N2',
    level: 1,
    text: {
      fr: 'Combien font 60 - 24 ?',
      en: 'What is 60 - 24?',
      nl: 'Hoeveel is 60 - 24?',
    },
    answer: 36,
    tolerance: 0,
    hint: {
      fr: '60 - 24 = 60 - 20 - 4 = 40 - 4.',
      en: '60 - 24 = 60 - 20 - 4 = 40 - 4.',
      nl: '60 - 24 = 60 - 20 - 4 = 40 - 4.',
    },
    commonMistake: '44',
  },
  {
    id: 'N2_005',
    category: 'N2',
    level: 1,
    text: {
      fr: 'Combien font 99 - 56 ?',
      en: 'What is 99 - 56?',
      nl: 'Hoeveel is 99 - 56?',
    },
    answer: 43,
    tolerance: 0,
    hint: {
      fr: '99 - 56 = 100 - 56 - 1 = 44 - 1.',
      en: '99 - 56 = 100 - 56 - 1 = 44 - 1.',
      nl: '99 - 56 = 100 - 56 - 1 = 44 - 1.',
    },
    commonMistake: '53',
  },

  // ── Level 2: multiply single digits ───────────────────────────────────────
  {
    id: 'N2_006',
    category: 'N2',
    level: 2,
    text: {
      fr: 'Combien font 7 × 8 ?',
      en: 'What is 7 × 8?',
      nl: 'Hoeveel is 7 × 8?',
    },
    answer: 56,
    tolerance: 0,
    hint: {
      fr: '7 × 8 = 7 × 4 × 2 = 28 × 2.',
      en: '7 × 8 = 7 × 4 × 2 = 28 × 2.',
      nl: '7 × 8 = 7 × 4 × 2 = 28 × 2.',
    },
    commonMistake: '54',
  },
  {
    id: 'N2_007',
    category: 'N2',
    level: 2,
    text: {
      fr: 'Combien font 9 × 6 ?',
      en: 'What is 9 × 6?',
      nl: 'Hoeveel is 9 × 6?',
    },
    answer: 54,
    tolerance: 0,
    hint: {
      fr: '9 × 6 = 10 × 6 - 6 = 60 - 6.',
      en: '9 × 6 = 10 × 6 - 6 = 60 - 6.',
      nl: '9 × 6 = 10 × 6 - 6 = 60 - 6.',
    },
    commonMistake: '56',
  },
  {
    id: 'N2_008',
    category: 'N2',
    level: 2,
    text: {
      fr: 'Combien font 6 × 4 ?',
      en: 'What is 6 × 4?',
      nl: 'Hoeveel is 6 × 4?',
    },
    answer: 24,
    tolerance: 0,
    hint: {
      fr: '6 × 4 = 6 × 2 × 2 = 12 × 2.',
      en: '6 × 4 = 6 × 2 × 2 = 12 × 2.',
      nl: '6 × 4 = 6 × 2 × 2 = 12 × 2.',
    },
    commonMistake: '26',
  },
  {
    id: 'N2_009',
    category: 'N2',
    level: 2,
    text: {
      fr: 'Combien font 8 × 9 ?',
      en: 'What is 8 × 9?',
      nl: 'Hoeveel is 8 × 9?',
    },
    answer: 72,
    tolerance: 0,
    hint: {
      fr: '8 × 9 = 8 × 10 - 8 = 80 - 8.',
      en: '8 × 9 = 8 × 10 - 8 = 80 - 8.',
      nl: '8 × 9 = 8 × 10 - 8 = 80 - 8.',
    },
    commonMistake: '63',
  },
  {
    id: 'N2_010',
    category: 'N2',
    level: 2,
    text: {
      fr: 'Combien font 7 × 7 ?',
      en: 'What is 7 × 7?',
      nl: 'Hoeveel is 7 × 7?',
    },
    answer: 49,
    tolerance: 0,
    hint: {
      fr: '7 × 7 = 7 × 5 + 7 × 2 = 35 + 14.',
      en: '7 × 7 = 7 × 5 + 7 × 2 = 35 + 14.',
      nl: '7 × 7 = 7 × 5 + 7 × 2 = 35 + 14.',
    },
    commonMistake: '47',
  },

  // ── Level 3: division with remainder ──────────────────────────────────────
  {
    id: 'N2_011',
    category: 'N2',
    level: 3,
    text: {
      fr: 'Combien font 47 ÷ 5 ? Donne le quotient entier.',
      en: 'What is 47 ÷ 5? Give the integer quotient.',
      nl: 'Hoeveel is 47 ÷ 5? Geef het gehele quotiënt.',
    },
    answer: 9,
    tolerance: 0,
    hint: {
      fr: '5 × 9 = 45, reste 2.',
      en: '5 × 9 = 45, remainder 2.',
      nl: '5 × 9 = 45, rest 2.',
    },
    commonMistake: '10',
  },
  {
    id: 'N2_012',
    category: 'N2',
    level: 3,
    text: {
      fr: 'Quel est le reste de la division 47 ÷ 5 ?',
      en: 'What is the remainder of 47 ÷ 5?',
      nl: 'Wat is de rest van 47 ÷ 5?',
    },
    answer: 2,
    tolerance: 0,
    hint: {
      fr: '5 × 9 = 45, donc 47 - 45 = ?',
      en: '5 × 9 = 45, so 47 - 45 = ?',
      nl: '5 × 9 = 45, dus 47 - 45 = ?',
    },
    commonMistake: '3',
  },
  {
    id: 'N2_013',
    category: 'N2',
    level: 3,
    text: {
      fr: 'Combien font 63 ÷ 8 ? Donne le quotient entier.',
      en: 'What is 63 ÷ 8? Give the integer quotient.',
      nl: 'Hoeveel is 63 ÷ 8? Geef het gehele quotiënt.',
    },
    answer: 7,
    tolerance: 0,
    hint: {
      fr: '8 × 7 = 56, 8 × 8 = 64. Lequel est le plus proche sans dépasser 63 ?',
      en: '8 × 7 = 56, 8 × 8 = 64. Which is closest without exceeding 63?',
      nl: '8 × 7 = 56, 8 × 8 = 64. Welk is het dichtst zonder 63 te overschrijden?',
    },
    commonMistake: '8',
  },
  {
    id: 'N2_014',
    category: 'N2',
    level: 3,
    text: {
      fr: 'Quel est le reste de la division 83 ÷ 9 ?',
      en: 'What is the remainder of 83 ÷ 9?',
      nl: 'Wat is de rest van 83 ÷ 9?',
    },
    answer: 2,
    tolerance: 0,
    hint: {
      fr: '9 × 9 = 81, donc 83 - 81 = ?',
      en: '9 × 9 = 81, so 83 - 81 = ?',
      nl: '9 × 9 = 81, dus 83 - 81 = ?',
    },
    commonMistake: '1',
  },
  {
    id: 'N2_015',
    category: 'N2',
    level: 3,
    text: {
      fr: 'Combien font 100 ÷ 7 ? Donne le quotient entier.',
      en: 'What is 100 ÷ 7? Give the integer quotient.',
      nl: 'Hoeveel is 100 ÷ 7? Geef het gehele quotiënt.',
    },
    answer: 14,
    tolerance: 0,
    hint: {
      fr: '7 × 14 = 98, 7 × 15 = 105. Le quotient entier est 14.',
      en: '7 × 14 = 98, 7 × 15 = 105. The integer quotient is 14.',
      nl: '7 × 14 = 98, 7 × 15 = 105. Het gehele quotiënt is 14.',
    },
    commonMistake: '15',
  },
];

/**
 * Procedural generator for N2 questions.
 * @param {1|2|3} level
 * @returns {object} A single question object
 */
export function generate(level = 1) {
  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const id = `N2_gen_${Date.now()}_${rand(100, 999)}`;

  if (level === 1) {
    // Addition or subtraction < 100
    const isAdd = Math.random() < 0.5;
    if (isAdd) {
      const a = rand(10, 60);
      const b = rand(10, 99 - a);
      const answer = a + b;
      return {
        id,
        category: 'N2',
        level: 1,
        text: {
          fr: `Combien font ${a} + ${b} ?`,
          en: `What is ${a} + ${b}?`,
          nl: `Hoeveel is ${a} + ${b}?`,
        },
        answer,
        tolerance: 0,
        hint: {
          fr: `Décompose : ${a} + ${b} = ${a} + ${Math.floor(b / 10) * 10} + ${b % 10}.`,
          en: `Break it down: ${a} + ${b} = ${a} + ${Math.floor(b / 10) * 10} + ${b % 10}.`,
          nl: `Splits op: ${a} + ${b} = ${a} + ${Math.floor(b / 10) * 10} + ${b % 10}.`,
        },
        commonMistake: String(answer + 10),
      };
    } else {
      const a = rand(30, 99);
      const b = rand(10, a - 1);
      const answer = a - b;
      return {
        id,
        category: 'N2',
        level: 1,
        text: {
          fr: `Combien font ${a} - ${b} ?`,
          en: `What is ${a} - ${b}?`,
          nl: `Hoeveel is ${a} - ${b}?`,
        },
        answer,
        tolerance: 0,
        hint: {
          fr: `Décompose : ${a} - ${b} = ${a} - ${Math.floor(b / 10) * 10} - ${b % 10}.`,
          en: `Break it down: ${a} - ${b} = ${a} - ${Math.floor(b / 10) * 10} - ${b % 10}.`,
          nl: `Splits op: ${a} - ${b} = ${a} - ${Math.floor(b / 10) * 10} - ${b % 10}.`,
        },
        commonMistake: String(answer + 10),
      };
    }
  }

  if (level === 2) {
    // Multiply single digits
    const a = rand(2, 9);
    const b = rand(2, 9);
    const answer = a * b;
    return {
      id,
      category: 'N2',
      level: 2,
      text: {
        fr: `Combien font ${a} × ${b} ?`,
        en: `What is ${a} × ${b}?`,
        nl: `Hoeveel is ${a} × ${b}?`,
      },
      answer,
      tolerance: 0,
      hint: {
        fr: `Pense à la table de ${a}.`,
        en: `Think of the ${a} times table.`,
        nl: `Denk aan de tafel van ${a}.`,
      },
      commonMistake: String(answer + a),
    };
  }

  // Level 3: division with remainder
  const divisor = rand(3, 9);
  const quotient = rand(5, 15);
  const remainder = rand(1, divisor - 1);
  const dividend = divisor * quotient + remainder;

  const askQuotient = Math.random() < 0.5;
  const answer = askQuotient ? quotient : remainder;

  return {
    id,
    category: 'N2',
    level: 3,
    text: {
      fr: askQuotient
        ? `Combien font ${dividend} ÷ ${divisor} ? Donne le quotient entier.`
        : `Quel est le reste de la division ${dividend} ÷ ${divisor} ?`,
      en: askQuotient
        ? `What is ${dividend} ÷ ${divisor}? Give the integer quotient.`
        : `What is the remainder of ${dividend} ÷ ${divisor}?`,
      nl: askQuotient
        ? `Hoeveel is ${dividend} ÷ ${divisor}? Geef het gehele quotiënt.`
        : `Wat is de rest van ${dividend} ÷ ${divisor}?`,
    },
    answer,
    tolerance: 0,
    hint: {
      fr: `${divisor} × ${quotient} = ${divisor * quotient}, reste ${remainder}.`,
      en: `${divisor} × ${quotient} = ${divisor * quotient}, remainder ${remainder}.`,
      nl: `${divisor} × ${quotient} = ${divisor * quotient}, rest ${remainder}.`,
    },
    commonMistake: askQuotient ? String(quotient + 1) : String(remainder + 1),
  };
}
