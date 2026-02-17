// =============================================================================
// N3 - Priority of Operations & Multi-step Calculations
// CE1D Belgian exam - Trilingual (FR / EN / NL)
// =============================================================================

export const questions = [
  // ── Level 1: 2 operations ─────────────────────────────────────────────────
  {
    id: 'N3_001',
    category: 'N3',
    level: 1,
    text: {
      fr: 'Combien font 3 + 4 × 2 ?',
      en: 'What is 3 + 4 × 2?',
      nl: 'Hoeveel is 3 + 4 × 2?',
    },
    answer: 11,
    tolerance: 0,
    hint: {
      fr: 'La multiplication est prioritaire : d\'abord 4 × 2, puis ajouter 3.',
      en: 'Multiplication comes first: first 4 × 2, then add 3.',
      nl: 'Vermenigvuldiging heeft voorrang: eerst 4 × 2, dan 3 optellen.',
    },
    commonMistake: '14',
  },
  {
    id: 'N3_002',
    category: 'N3',
    level: 1,
    text: {
      fr: 'Combien font 10 - 2 × 3 ?',
      en: 'What is 10 - 2 × 3?',
      nl: 'Hoeveel is 10 - 2 × 3?',
    },
    answer: 4,
    tolerance: 0,
    hint: {
      fr: 'D\'abord 2 × 3 = 6, puis 10 - 6.',
      en: 'First 2 × 3 = 6, then 10 - 6.',
      nl: 'Eerst 2 × 3 = 6, dan 10 - 6.',
    },
    commonMistake: '24',
  },
  {
    id: 'N3_003',
    category: 'N3',
    level: 1,
    text: {
      fr: 'Combien font 5 × 3 + 7 ?',
      en: 'What is 5 × 3 + 7?',
      nl: 'Hoeveel is 5 × 3 + 7?',
    },
    answer: 22,
    tolerance: 0,
    hint: {
      fr: 'D\'abord 5 × 3 = 15, puis 15 + 7.',
      en: 'First 5 × 3 = 15, then 15 + 7.',
      nl: 'Eerst 5 × 3 = 15, dan 15 + 7.',
    },
    commonMistake: '50',
  },
  {
    id: 'N3_004',
    category: 'N3',
    level: 1,
    text: {
      fr: 'Combien font 20 - 12 ÷ 4 ?',
      en: 'What is 20 - 12 ÷ 4?',
      nl: 'Hoeveel is 20 - 12 ÷ 4?',
    },
    answer: 17,
    tolerance: 0,
    hint: {
      fr: 'D\'abord 12 ÷ 4 = 3, puis 20 - 3.',
      en: 'First 12 ÷ 4 = 3, then 20 - 3.',
      nl: 'Eerst 12 ÷ 4 = 3, dan 20 - 3.',
    },
    commonMistake: '2',
  },
  {
    id: 'N3_005',
    category: 'N3',
    level: 1,
    text: {
      fr: 'Combien font 6 × 5 - 8 ?',
      en: 'What is 6 × 5 - 8?',
      nl: 'Hoeveel is 6 × 5 - 8?',
    },
    answer: 22,
    tolerance: 0,
    hint: {
      fr: 'D\'abord 6 × 5 = 30, puis 30 - 8.',
      en: 'First 6 × 5 = 30, then 30 - 8.',
      nl: 'Eerst 6 × 5 = 30, dan 30 - 8.',
    },
    commonMistake: '18',
  },

  // ── Level 2: 3 operations ─────────────────────────────────────────────────
  {
    id: 'N3_006',
    category: 'N3',
    level: 2,
    text: {
      fr: 'Combien font 2 + 3 × 4 - 5 ?',
      en: 'What is 2 + 3 × 4 - 5?',
      nl: 'Hoeveel is 2 + 3 × 4 - 5?',
    },
    answer: 9,
    tolerance: 0,
    hint: {
      fr: 'D\'abord 3 × 4 = 12, puis 2 + 12 - 5.',
      en: 'First 3 × 4 = 12, then 2 + 12 - 5.',
      nl: 'Eerst 3 × 4 = 12, dan 2 + 12 - 5.',
    },
    commonMistake: '15',
  },
  {
    id: 'N3_007',
    category: 'N3',
    level: 2,
    text: {
      fr: 'Combien font 10 + 6 ÷ 2 - 3 ?',
      en: 'What is 10 + 6 ÷ 2 - 3?',
      nl: 'Hoeveel is 10 + 6 ÷ 2 - 3?',
    },
    answer: 10,
    tolerance: 0,
    hint: {
      fr: 'D\'abord 6 ÷ 2 = 3, puis 10 + 3 - 3.',
      en: 'First 6 ÷ 2 = 3, then 10 + 3 - 3.',
      nl: 'Eerst 6 ÷ 2 = 3, dan 10 + 3 - 3.',
    },
    commonMistake: '5',
  },
  {
    id: 'N3_008',
    category: 'N3',
    level: 2,
    text: {
      fr: 'Combien font 8 × 2 + 3 × 3 ?',
      en: 'What is 8 × 2 + 3 × 3?',
      nl: 'Hoeveel is 8 × 2 + 3 × 3?',
    },
    answer: 25,
    tolerance: 0,
    hint: {
      fr: 'Calcule chaque multiplication d\'abord : 8 × 2 = 16 et 3 × 3 = 9.',
      en: 'Calculate each multiplication first: 8 × 2 = 16 and 3 × 3 = 9.',
      nl: 'Bereken elke vermenigvuldiging eerst: 8 × 2 = 16 en 3 × 3 = 9.',
    },
    commonMistake: '57',
  },
  {
    id: 'N3_009',
    category: 'N3',
    level: 2,
    text: {
      fr: 'Combien font 15 - 2 × 3 + 4 ?',
      en: 'What is 15 - 2 × 3 + 4?',
      nl: 'Hoeveel is 15 - 2 × 3 + 4?',
    },
    answer: 13,
    tolerance: 0,
    hint: {
      fr: 'D\'abord 2 × 3 = 6, puis 15 - 6 + 4.',
      en: 'First 2 × 3 = 6, then 15 - 6 + 4.',
      nl: 'Eerst 2 × 3 = 6, dan 15 - 6 + 4.',
    },
    commonMistake: '43',
  },
  {
    id: 'N3_010',
    category: 'N3',
    level: 2,
    text: {
      fr: 'Combien font 20 ÷ 4 + 6 × 2 ?',
      en: 'What is 20 ÷ 4 + 6 × 2?',
      nl: 'Hoeveel is 20 ÷ 4 + 6 × 2?',
    },
    answer: 17,
    tolerance: 0,
    hint: {
      fr: 'D\'abord 20 ÷ 4 = 5 et 6 × 2 = 12, puis 5 + 12.',
      en: 'First 20 ÷ 4 = 5 and 6 × 2 = 12, then 5 + 12.',
      nl: 'Eerst 20 ÷ 4 = 5 en 6 × 2 = 12, dan 5 + 12.',
    },
    commonMistake: '16',
  },

  // ── Level 3: with parentheses ─────────────────────────────────────────────
  {
    id: 'N3_011',
    category: 'N3',
    level: 3,
    text: {
      fr: 'Combien font (3 + 4) × 2 ?',
      en: 'What is (3 + 4) × 2?',
      nl: 'Hoeveel is (3 + 4) × 2?',
    },
    answer: 14,
    tolerance: 0,
    hint: {
      fr: 'Les parenthèses d\'abord : 3 + 4 = 7, puis 7 × 2.',
      en: 'Parentheses first: 3 + 4 = 7, then 7 × 2.',
      nl: 'Haakjes eerst: 3 + 4 = 7, dan 7 × 2.',
    },
    commonMistake: '11',
  },
  {
    id: 'N3_012',
    category: 'N3',
    level: 3,
    text: {
      fr: 'Combien font 5 × (8 - 3) ?',
      en: 'What is 5 × (8 - 3)?',
      nl: 'Hoeveel is 5 × (8 - 3)?',
    },
    answer: 25,
    tolerance: 0,
    hint: {
      fr: 'Parenthèses d\'abord : 8 - 3 = 5, puis 5 × 5.',
      en: 'Parentheses first: 8 - 3 = 5, then 5 × 5.',
      nl: 'Haakjes eerst: 8 - 3 = 5, dan 5 × 5.',
    },
    commonMistake: '37',
  },
  {
    id: 'N3_013',
    category: 'N3',
    level: 3,
    text: {
      fr: 'Combien font (10 + 2) × (7 - 4) ?',
      en: 'What is (10 + 2) × (7 - 4)?',
      nl: 'Hoeveel is (10 + 2) × (7 - 4)?',
    },
    answer: 36,
    tolerance: 0,
    hint: {
      fr: 'D\'abord les parenthèses : 10 + 2 = 12 et 7 - 4 = 3, puis 12 × 3.',
      en: 'Parentheses first: 10 + 2 = 12 and 7 - 4 = 3, then 12 × 3.',
      nl: 'Haakjes eerst: 10 + 2 = 12 en 7 - 4 = 3, dan 12 × 3.',
    },
    commonMistake: '26',
  },
  {
    id: 'N3_014',
    category: 'N3',
    level: 3,
    text: {
      fr: 'Combien font 2 × (3 + 5) - 4 ?',
      en: 'What is 2 × (3 + 5) - 4?',
      nl: 'Hoeveel is 2 × (3 + 5) - 4?',
    },
    answer: 12,
    tolerance: 0,
    hint: {
      fr: 'Parenthèses d\'abord : 3 + 5 = 8, puis 2 × 8 = 16, enfin 16 - 4.',
      en: 'Parentheses first: 3 + 5 = 8, then 2 × 8 = 16, finally 16 - 4.',
      nl: 'Haakjes eerst: 3 + 5 = 8, dan 2 × 8 = 16, tenslotte 16 - 4.',
    },
    commonMistake: '14',
  },
  {
    id: 'N3_015',
    category: 'N3',
    level: 3,
    text: {
      fr: 'Combien font 100 ÷ (4 + 6) + 5 ?',
      en: 'What is 100 ÷ (4 + 6) + 5?',
      nl: 'Hoeveel is 100 ÷ (4 + 6) + 5?',
    },
    answer: 15,
    tolerance: 0,
    hint: {
      fr: 'Parenthèses d\'abord : 4 + 6 = 10, puis 100 ÷ 10 = 10, enfin 10 + 5.',
      en: 'Parentheses first: 4 + 6 = 10, then 100 ÷ 10 = 10, finally 10 + 5.',
      nl: 'Haakjes eerst: 4 + 6 = 10, dan 100 ÷ 10 = 10, tenslotte 10 + 5.',
    },
    commonMistake: '30',
  },
  {
    id: 'N3_016',
    category: 'N3',
    level: 3,
    text: {
      fr: 'Combien font (12 - 4) × (2 + 3) - 10 ?',
      en: 'What is (12 - 4) × (2 + 3) - 10?',
      nl: 'Hoeveel is (12 - 4) × (2 + 3) - 10?',
    },
    answer: 30,
    tolerance: 0,
    hint: {
      fr: 'Parenthèses : 12 - 4 = 8, 2 + 3 = 5. Puis 8 × 5 = 40. Enfin 40 - 10.',
      en: 'Parentheses: 12 - 4 = 8, 2 + 3 = 5. Then 8 × 5 = 40. Finally 40 - 10.',
      nl: 'Haakjes: 12 - 4 = 8, 2 + 3 = 5. Dan 8 × 5 = 40. Tenslotte 40 - 10.',
    },
    commonMistake: '40',
  },

  // ── Level 2: CE1D-inspired ───────────────────────────────────────────────
  {
    id: 'N3_017',
    category: 'N3',
    level: 2,
    text: {
      fr: 'Combien font 40 − 5 × 4 ?',
      en: 'What is 40 − 5 × 4?',
      nl: 'Hoeveel is 40 − 5 × 4?',
    },
    answer: 20,
    tolerance: 0,
    hint: {
      fr: 'D\'abord 5 × 4 = 20, puis 40 − 20.',
      en: 'First 5 × 4 = 20, then 40 − 20.',
      nl: 'Eerst 5 × 4 = 20, dan 40 − 20.',
    },
    commonMistake: '140',
  },
  {
    id: 'N3_018',
    category: 'N3',
    level: 2,
    text: {
      fr: 'Combien font 56 − 5 × 8 ?',
      en: 'What is 56 − 5 × 8?',
      nl: 'Hoeveel is 56 − 5 × 8?',
    },
    answer: 16,
    tolerance: 0,
    hint: {
      fr: 'D\'abord 5 × 8 = 40, puis 56 − 40.',
      en: 'First 5 × 8 = 40, then 56 − 40.',
      nl: 'Eerst 5 × 8 = 40, dan 56 − 40.',
    },
    commonMistake: '408',
  },
  {
    id: 'N3_019',
    category: 'N3',
    level: 2,
    text: {
      fr: 'Combien font 24 ÷ 3 × 2 ?',
      en: 'What is 24 ÷ 3 × 2?',
      nl: 'Hoeveel is 24 ÷ 3 × 2?',
    },
    answer: 16,
    tolerance: 0,
    hint: {
      fr: 'De gauche à droite : 24 ÷ 3 = 8, puis 8 × 2.',
      en: 'Left to right: 24 ÷ 3 = 8, then 8 × 2.',
      nl: 'Van links naar rechts: 24 ÷ 3 = 8, dan 8 × 2.',
    },
    commonMistake: '4',
  },
  {
    id: 'N3_020',
    category: 'N3',
    level: 2,
    text: {
      fr: 'Combien font 7 × 9 + 5 ?',
      en: 'What is 7 × 9 + 5?',
      nl: 'Hoeveel is 7 × 9 + 5?',
    },
    answer: 68,
    tolerance: 0,
    hint: {
      fr: 'D\'abord 7 × 9 = 63, puis 63 + 5.',
      en: 'First 7 × 9 = 63, then 63 + 5.',
      nl: 'Eerst 7 × 9 = 63, dan 63 + 5.',
    },
    commonMistake: '98',
  },
  {
    id: 'N3_021',
    category: 'N3',
    level: 2,
    text: {
      fr: 'Combien font 4 × 3 + 5 ?',
      en: 'What is 4 × 3 + 5?',
      nl: 'Hoeveel is 4 × 3 + 5?',
    },
    answer: 17,
    tolerance: 0,
    hint: {
      fr: 'D\'abord 4 × 3 = 12, puis 12 + 5.',
      en: 'First 4 × 3 = 12, then 12 + 5.',
      nl: 'Eerst 4 × 3 = 12, dan 12 + 5.',
    },
    commonMistake: '32',
  },

  // ── Level 3: CE1D-inspired with parentheses ──────────────────────────────
  {
    id: 'N3_022',
    category: 'N3',
    level: 3,
    text: {
      fr: 'Combien font (3 + 4) × (5 - 2) ?',
      en: 'What is (3 + 4) × (5 - 2)?',
      nl: 'Hoeveel is (3 + 4) × (5 - 2)?',
    },
    answer: 21,
    tolerance: 0,
    hint: {
      fr: 'Parenthèses d\'abord : 3 + 4 = 7 et 5 - 2 = 3, puis 7 × 3.',
      en: 'Parentheses first: 3 + 4 = 7 and 5 - 2 = 3, then 7 × 3.',
      nl: 'Haakjes eerst: 3 + 4 = 7 en 5 - 2 = 3, dan 7 × 3.',
    },
    commonMistake: '17',
  },
  {
    id: 'N3_023',
    category: 'N3',
    level: 3,
    text: {
      fr: 'Combien font (15 - 7) × (3 + 2) ?',
      en: 'What is (15 - 7) × (3 + 2)?',
      nl: 'Hoeveel is (15 - 7) × (3 + 2)?',
    },
    answer: 40,
    tolerance: 0,
    hint: {
      fr: 'Parenthèses d\'abord : 15 - 7 = 8 et 3 + 2 = 5, puis 8 × 5.',
      en: 'Parentheses first: 15 - 7 = 8 and 3 + 2 = 5, then 8 × 5.',
      nl: 'Haakjes eerst: 15 - 7 = 8 en 3 + 2 = 5, dan 8 × 5.',
    },
    commonMistake: '16',
  },
  {
    id: 'N3_024',
    category: 'N3',
    level: 3,
    text: {
      fr: 'Combien font 100 - (8 + 12) × 4 ?',
      en: 'What is 100 - (8 + 12) × 4?',
      nl: 'Hoeveel is 100 - (8 + 12) × 4?',
    },
    answer: 20,
    tolerance: 0,
    hint: {
      fr: 'Parenthèses : 8 + 12 = 20. Puis 20 × 4 = 80. Enfin 100 - 80.',
      en: 'Parentheses: 8 + 12 = 20. Then 20 × 4 = 80. Finally 100 - 80.',
      nl: 'Haakjes: 8 + 12 = 20. Dan 20 × 4 = 80. Tenslotte 100 - 80.',
    },
    commonMistake: '368',
  },
  {
    id: 'N3_025',
    category: 'N3',
    level: 3,
    text: {
      fr: 'Combien font (6 + 9) × 2 - 10 ?',
      en: 'What is (6 + 9) × 2 - 10?',
      nl: 'Hoeveel is (6 + 9) × 2 - 10?',
    },
    answer: 20,
    tolerance: 0,
    hint: {
      fr: 'Parenthèses : 6 + 9 = 15. Puis 15 × 2 = 30. Enfin 30 - 10.',
      en: 'Parentheses: 6 + 9 = 15. Then 15 × 2 = 30. Finally 30 - 10.',
      nl: 'Haakjes: 6 + 9 = 15. Dan 15 × 2 = 30. Tenslotte 30 - 10.',
    },
    commonMistake: '14',
  },
  {
    id: 'N3_026',
    category: 'N3',
    level: 3,
    text: {
      fr: 'Combien font 50 ÷ (2 + 3) + 15 ?',
      en: 'What is 50 ÷ (2 + 3) + 15?',
      nl: 'Hoeveel is 50 ÷ (2 + 3) + 15?',
    },
    answer: 25,
    tolerance: 0,
    hint: {
      fr: 'Parenthèses : 2 + 3 = 5. Puis 50 ÷ 5 = 10. Enfin 10 + 15.',
      en: 'Parentheses: 2 + 3 = 5. Then 50 ÷ 5 = 10. Finally 10 + 15.',
      nl: 'Haakjes: 2 + 3 = 5. Dan 50 ÷ 5 = 10. Tenslotte 10 + 15.',
    },
    commonMistake: '40',
  },
];

/**
 * Procedural generator for N3 questions.
 * @param {1|2|3} level
 * @returns {object} A single question object
 */
export function generate(level = 1) {
  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const id = `N3_gen_${Date.now()}_${rand(100, 999)}`;

  if (level === 1) {
    // 2 operations: a ± b × c  or  a × b ± c
    const a = rand(2, 15);
    const b = rand(2, 9);
    const c = rand(2, 9);
    const pattern = rand(0, 3);

    let expr, answer, wrongAnswer;
    switch (pattern) {
      case 0: // a + b × c
        answer = a + b * c;
        wrongAnswer = (a + b) * c;
        expr = { op: `${a} + ${b} × ${c}` };
        break;
      case 1: // a - b × c  (ensure positive)
        {
          const product = b * c;
          const safeA = Math.max(a, product + 1);
          answer = safeA - product;
          wrongAnswer = (safeA - b) * c;
          expr = { op: `${safeA} - ${b} × ${c}` };
        }
        break;
      case 2: // a × b + c
        answer = a * b + c;
        wrongAnswer = a * (b + c);
        expr = { op: `${a} × ${b} + ${c}` };
        break;
      default: // a × b - c
        {
          const product2 = a * b;
          const safeC = Math.min(c, product2 - 1);
          answer = product2 - safeC;
          wrongAnswer = a * (b - safeC);
          expr = { op: `${a} × ${b} - ${safeC}` };
        }
        break;
    }

    return {
      id,
      category: 'N3',
      level: 1,
      text: {
        fr: `Combien font ${expr.op} ?`,
        en: `What is ${expr.op}?`,
        nl: `Hoeveel is ${expr.op}?`,
      },
      answer,
      tolerance: 0,
      hint: {
        fr: 'La multiplication et la division sont prioritaires sur l\'addition et la soustraction.',
        en: 'Multiplication and division take priority over addition and subtraction.',
        nl: 'Vermenigvuldiging en deling hebben voorrang op optelling en aftrekking.',
      },
      commonMistake: String(wrongAnswer),
    };
  }

  if (level === 2) {
    // 3 operations: a ± b × c ± d
    const a = rand(5, 20);
    const b = rand(2, 6);
    const c = rand(2, 6);
    const d = rand(1, 10);
    const product = b * c;

    // Ensure result is positive
    const safeA = Math.max(a, product + 1);
    const patterns = [
      {
        op: `${safeA} + ${b} × ${c} - ${d}`,
        answer: safeA + product - d,
        wrong: (safeA + b) * c - d,
      },
      {
        op: `${safeA} - ${b} × ${c} + ${d}`,
        answer: safeA - product + d,
        wrong: (safeA - b) * c + d,
      },
    ];
    const chosen = patterns[rand(0, patterns.length - 1)];

    return {
      id,
      category: 'N3',
      level: 2,
      text: {
        fr: `Combien font ${chosen.op} ?`,
        en: `What is ${chosen.op}?`,
        nl: `Hoeveel is ${chosen.op}?`,
      },
      answer: chosen.answer,
      tolerance: 0,
      hint: {
        fr: 'Effectue d\'abord la multiplication, puis les additions/soustractions de gauche à droite.',
        en: 'Do the multiplication first, then additions/subtractions left to right.',
        nl: 'Doe eerst de vermenigvuldiging, dan optellingen/aftrekkingen van links naar rechts.',
      },
      commonMistake: String(chosen.wrong),
    };
  }

  // Level 3: with parentheses
  const a = rand(2, 8);
  const b = rand(2, 8);
  const c = rand(2, 6);
  const d = rand(1, 10);

  const patterns = [
    {
      op: `(${a} + ${b}) × ${c}`,
      answer: (a + b) * c,
      wrong: a + b * c,
    },
    {
      op: `${c} × (${a} - ${Math.min(b, a - 1)})`,
      answer: c * (a - Math.min(b, a - 1)),
      wrong: c * a - Math.min(b, a - 1),
    },
    {
      op: `(${a} + ${b}) × ${c} - ${d}`,
      answer: (a + b) * c - d,
      wrong: a + b * c - d,
    },
    {
      op: `${d} + (${a} + ${b}) × ${c}`,
      answer: d + (a + b) * c,
      wrong: (d + a + b) * c,
    },
  ];
  const chosen = patterns[rand(0, patterns.length - 1)];

  // Ensure positive answer
  if (chosen.answer < 0) {
    chosen.answer = Math.abs(chosen.answer);
    chosen.op = `|${chosen.op}|`;
  }

  return {
    id,
    category: 'N3',
    level: 3,
    text: {
      fr: `Combien font ${chosen.op} ?`,
      en: `What is ${chosen.op}?`,
      nl: `Hoeveel is ${chosen.op}?`,
    },
    answer: chosen.answer,
    tolerance: 0,
    hint: {
      fr: 'Calcule d\'abord ce qui est entre parenthèses, puis applique les priorités.',
      en: 'Calculate what is inside parentheses first, then apply priority rules.',
      nl: 'Bereken eerst wat tussen haakjes staat, pas dan de voorrangsregels toe.',
    },
    commonMistake: String(chosen.wrong),
  };
}
