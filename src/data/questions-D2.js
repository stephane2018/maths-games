// =============================================================================
// D2 - Statistics & Averages: mean, weighted average
// CE1D Belgian exam - Trilingual (FR / EN / NL)
// =============================================================================

export const questions = [
  // ── Level 1: mean of 3 numbers ────────────────────────────────────────────
  {
    id: 'D2_001',
    category: 'D2',
    level: 1,
    text: {
      fr: 'Quelle est la moyenne de 6, 9 et 12 ?',
      en: 'What is the mean of 6, 9 and 12?',
      nl: 'Wat is het gemiddelde van 6, 9 en 12?',
    },
    answer: 9,
    tolerance: 0,
    hint: {
      fr: '(6 + 9 + 12) ÷ 3 = 27 ÷ 3.',
      en: '(6 + 9 + 12) ÷ 3 = 27 ÷ 3.',
      nl: '(6 + 9 + 12) ÷ 3 = 27 ÷ 3.',
    },
    commonMistake: '12',
  },
  {
    id: 'D2_002',
    category: 'D2',
    level: 1,
    text: {
      fr: 'Quelle est la moyenne de 10, 20 et 30 ?',
      en: 'What is the mean of 10, 20 and 30?',
      nl: 'Wat is het gemiddelde van 10, 20 en 30?',
    },
    answer: 20,
    tolerance: 0,
    hint: {
      fr: '(10 + 20 + 30) ÷ 3 = 60 ÷ 3.',
      en: '(10 + 20 + 30) ÷ 3 = 60 ÷ 3.',
      nl: '(10 + 20 + 30) ÷ 3 = 60 ÷ 3.',
    },
    commonMistake: '30',
  },
  {
    id: 'D2_003',
    category: 'D2',
    level: 1,
    text: {
      fr: 'Quelle est la moyenne de 4, 8 et 15 ?',
      en: 'What is the mean of 4, 8 and 15?',
      nl: 'Wat is het gemiddelde van 4, 8 en 15?',
    },
    answer: 9,
    tolerance: 0,
    hint: {
      fr: '(4 + 8 + 15) ÷ 3 = 27 ÷ 3.',
      en: '(4 + 8 + 15) ÷ 3 = 27 ÷ 3.',
      nl: '(4 + 8 + 15) ÷ 3 = 27 ÷ 3.',
    },
    commonMistake: '8',
  },
  {
    id: 'D2_004',
    category: 'D2',
    level: 1,
    text: {
      fr: 'Quelle est la moyenne de 5, 5 et 11 ?',
      en: 'What is the mean of 5, 5 and 11?',
      nl: 'Wat is het gemiddelde van 5, 5 en 11?',
    },
    answer: 7,
    tolerance: 0,
    hint: {
      fr: '(5 + 5 + 11) ÷ 3 = 21 ÷ 3.',
      en: '(5 + 5 + 11) ÷ 3 = 21 ÷ 3.',
      nl: '(5 + 5 + 11) ÷ 3 = 21 ÷ 3.',
    },
    commonMistake: '5',
  },
  {
    id: 'D2_005',
    category: 'D2',
    level: 1,
    text: {
      fr: 'Quelle est la moyenne de 3, 6 et 9 ?',
      en: 'What is the mean of 3, 6 and 9?',
      nl: 'Wat is het gemiddelde van 3, 6 en 9?',
    },
    answer: 6,
    tolerance: 0,
    hint: {
      fr: '(3 + 6 + 9) ÷ 3 = 18 ÷ 3.',
      en: '(3 + 6 + 9) ÷ 3 = 18 ÷ 3.',
      nl: '(3 + 6 + 9) ÷ 3 = 18 ÷ 3.',
    },
    commonMistake: '9',
  },

  // ── Level 2: mean of 5 numbers ────────────────────────────────────────────
  {
    id: 'D2_006',
    category: 'D2',
    level: 2,
    text: {
      fr: 'Quelle est la moyenne de 12, 8, 10, 14 et 6 ?',
      en: 'What is the mean of 12, 8, 10, 14 and 6?',
      nl: 'Wat is het gemiddelde van 12, 8, 10, 14 en 6?',
    },
    answer: 10,
    tolerance: 0,
    hint: {
      fr: '(12 + 8 + 10 + 14 + 6) ÷ 5 = 50 ÷ 5.',
      en: '(12 + 8 + 10 + 14 + 6) ÷ 5 = 50 ÷ 5.',
      nl: '(12 + 8 + 10 + 14 + 6) ÷ 5 = 50 ÷ 5.',
    },
    commonMistake: '12',
  },
  {
    id: 'D2_007',
    category: 'D2',
    level: 2,
    text: {
      fr: 'Quelle est la moyenne de 15, 20, 10, 25 et 30 ?',
      en: 'What is the mean of 15, 20, 10, 25 and 30?',
      nl: 'Wat is het gemiddelde van 15, 20, 10, 25 en 30?',
    },
    answer: 20,
    tolerance: 0,
    hint: {
      fr: '(15 + 20 + 10 + 25 + 30) ÷ 5 = 100 ÷ 5.',
      en: '(15 + 20 + 10 + 25 + 30) ÷ 5 = 100 ÷ 5.',
      nl: '(15 + 20 + 10 + 25 + 30) ÷ 5 = 100 ÷ 5.',
    },
    commonMistake: '25',
  },
  {
    id: 'D2_008',
    category: 'D2',
    level: 2,
    text: {
      fr: 'Un élève a obtenu ces notes : 14, 12, 16, 18 et 10. Quelle est sa moyenne ?',
      en: 'A student got these grades: 14, 12, 16, 18 and 10. What is the average?',
      nl: 'Een leerling heeft deze punten: 14, 12, 16, 18 en 10. Wat is het gemiddelde?',
    },
    answer: 14,
    tolerance: 0,
    hint: {
      fr: '(14 + 12 + 16 + 18 + 10) ÷ 5 = 70 ÷ 5.',
      en: '(14 + 12 + 16 + 18 + 10) ÷ 5 = 70 ÷ 5.',
      nl: '(14 + 12 + 16 + 18 + 10) ÷ 5 = 70 ÷ 5.',
    },
    commonMistake: '16',
  },
  {
    id: 'D2_009',
    category: 'D2',
    level: 2,
    text: {
      fr: 'Les températures de 5 jours sont : 18°C, 22°C, 20°C, 16°C et 24°C. Quelle est la température moyenne ?',
      en: 'The temperatures for 5 days are: 18°C, 22°C, 20°C, 16°C and 24°C. What is the average temperature?',
      nl: 'De temperaturen van 5 dagen zijn: 18°C, 22°C, 20°C, 16°C en 24°C. Wat is de gemiddelde temperatuur?',
    },
    answer: 20,
    tolerance: 0,
    hint: {
      fr: '(18 + 22 + 20 + 16 + 24) ÷ 5 = 100 ÷ 5.',
      en: '(18 + 22 + 20 + 16 + 24) ÷ 5 = 100 ÷ 5.',
      nl: '(18 + 22 + 20 + 16 + 24) ÷ 5 = 100 ÷ 5.',
    },
    commonMistake: '22',
  },
  {
    id: 'D2_010',
    category: 'D2',
    level: 2,
    text: {
      fr: 'Quelle est la moyenne de 7, 3, 5, 9 et 11 ?',
      en: 'What is the mean of 7, 3, 5, 9 and 11?',
      nl: 'Wat is het gemiddelde van 7, 3, 5, 9 en 11?',
    },
    answer: 7,
    tolerance: 0,
    hint: {
      fr: '(7 + 3 + 5 + 9 + 11) ÷ 5 = 35 ÷ 5.',
      en: '(7 + 3 + 5 + 9 + 11) ÷ 5 = 35 ÷ 5.',
      nl: '(7 + 3 + 5 + 9 + 11) ÷ 5 = 35 ÷ 5.',
    },
    commonMistake: '9',
  },

  // ── Level 3: weighted average ─────────────────────────────────────────────
  {
    id: 'D2_011',
    category: 'D2',
    level: 3,
    text: {
      fr: 'Un élève a 14/20 en maths (coefficient 3) et 16/20 en français (coefficient 2). Quelle est sa moyenne pondérée sur 20 ?',
      en: 'A student has 14/20 in maths (weight 3) and 16/20 in French (weight 2). What is the weighted average out of 20?',
      nl: 'Een leerling heeft 14/20 voor wiskunde (gewicht 3) en 16/20 voor Frans (gewicht 2). Wat is het gewogen gemiddelde op 20?',
    },
    answer: 14.8,
    tolerance: 0,
    hint: {
      fr: '(14 × 3 + 16 × 2) ÷ (3 + 2) = (42 + 32) ÷ 5 = 74 ÷ 5.',
      en: '(14 × 3 + 16 × 2) ÷ (3 + 2) = (42 + 32) ÷ 5 = 74 ÷ 5.',
      nl: '(14 × 3 + 16 × 2) ÷ (3 + 2) = (42 + 32) ÷ 5 = 74 ÷ 5.',
    },
    commonMistake: '15',
  },
  {
    id: 'D2_012',
    category: 'D2',
    level: 3,
    text: {
      fr: 'Un élève a 10/20 en maths (coefficient 4), 15/20 en français (coefficient 2) et 12/20 en sciences (coefficient 2). Quelle est sa moyenne pondérée sur 20 ?',
      en: 'A student has 10/20 in maths (weight 4), 15/20 in French (weight 2) and 12/20 in science (weight 2). What is the weighted average out of 20?',
      nl: 'Een leerling heeft 10/20 voor wiskunde (gewicht 4), 15/20 voor Frans (gewicht 2) en 12/20 voor wetenschappen (gewicht 2). Wat is het gewogen gemiddelde op 20?',
    },
    answer: 11.75,
    tolerance: 0,
    hint: {
      fr: '(10×4 + 15×2 + 12×2) ÷ (4+2+2) = (40+30+24) ÷ 8 = 94 ÷ 8.',
      en: '(10×4 + 15×2 + 12×2) ÷ (4+2+2) = (40+30+24) ÷ 8 = 94 ÷ 8.',
      nl: '(10×4 + 15×2 + 12×2) ÷ (4+2+2) = (40+30+24) ÷ 8 = 94 ÷ 8.',
    },
    commonMistake: '12.33',
  },
  {
    id: 'D2_013',
    category: 'D2',
    level: 3,
    text: {
      fr: 'Trois contrôles : 12/20 (coeff. 1), 16/20 (coeff. 2), 8/20 (coeff. 1). Quelle est la moyenne pondérée ?',
      en: 'Three tests: 12/20 (weight 1), 16/20 (weight 2), 8/20 (weight 1). What is the weighted average?',
      nl: 'Drie toetsen: 12/20 (gewicht 1), 16/20 (gewicht 2), 8/20 (gewicht 1). Wat is het gewogen gemiddelde?',
    },
    answer: 13,
    tolerance: 0,
    hint: {
      fr: '(12×1 + 16×2 + 8×1) ÷ (1+2+1) = (12+32+8) ÷ 4 = 52 ÷ 4.',
      en: '(12×1 + 16×2 + 8×1) ÷ (1+2+1) = (12+32+8) ÷ 4 = 52 ÷ 4.',
      nl: '(12×1 + 16×2 + 8×1) ÷ (1+2+1) = (12+32+8) ÷ 4 = 52 ÷ 4.',
    },
    commonMistake: '12',
  },
  {
    id: 'D2_014',
    category: 'D2',
    level: 3,
    text: {
      fr: 'La moyenne de 4 nombres est 15. Si on ajoute le nombre 25, quelle sera la nouvelle moyenne des 5 nombres ?',
      en: 'The mean of 4 numbers is 15. If we add the number 25, what will be the new mean of the 5 numbers?',
      nl: 'Het gemiddelde van 4 getallen is 15. Als we het getal 25 toevoegen, wat is dan het nieuwe gemiddelde van de 5 getallen?',
    },
    answer: 17,
    tolerance: 0,
    hint: {
      fr: 'Somme initiale : 4 × 15 = 60. Nouvelle somme : 60 + 25 = 85. Moyenne : 85 ÷ 5.',
      en: 'Initial sum: 4 × 15 = 60. New sum: 60 + 25 = 85. Mean: 85 ÷ 5.',
      nl: 'Oorspronkelijke som: 4 × 15 = 60. Nieuwe som: 60 + 25 = 85. Gemiddelde: 85 ÷ 5.',
    },
    commonMistake: '20',
  },
  {
    id: 'D2_015',
    category: 'D2',
    level: 3,
    text: {
      fr: 'Un élève a 18/20, 12/20 et 15/20 avec des coefficients respectifs de 2, 3 et 1. Quelle est sa moyenne pondérée ?',
      en: 'A student has 18/20, 12/20 and 15/20 with weights of 2, 3 and 1 respectively. What is the weighted average?',
      nl: 'Een leerling heeft 18/20, 12/20 en 15/20 met gewichten van respectievelijk 2, 3 en 1. Wat is het gewogen gemiddelde?',
    },
    answer: 14.5,
    tolerance: 0,
    hint: {
      fr: '(18×2 + 12×3 + 15×1) ÷ (2+3+1) = (36+36+15) ÷ 6 = 87 ÷ 6.',
      en: '(18×2 + 12×3 + 15×1) ÷ (2+3+1) = (36+36+15) ÷ 6 = 87 ÷ 6.',
      nl: '(18×2 + 12×3 + 15×1) ÷ (2+3+1) = (36+36+15) ÷ 6 = 87 ÷ 6.',
    },
    commonMistake: '15',
  },
];

/**
 * Procedural generator for D2 questions.
 * @param {1|2|3} level
 * @returns {object} A single question object
 */
export function generate(level = 1) {
  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const id = `D2_gen_${Date.now()}_${rand(100, 999)}`;

  if (level === 1) {
    // Mean of 3 numbers (ensure integer result)
    const mean = rand(4, 20);
    const a = mean + rand(-3, 3);
    const b = mean + rand(-3, 3);
    const c = 3 * mean - a - b;

    return {
      id,
      category: 'D2',
      level: 1,
      text: {
        fr: `Quelle est la moyenne de ${a}, ${b} et ${c} ?`,
        en: `What is the mean of ${a}, ${b} and ${c}?`,
        nl: `Wat is het gemiddelde van ${a}, ${b} en ${c}?`,
      },
      answer: mean,
      tolerance: 0,
      hint: {
        fr: `(${a} + ${b} + ${c}) ÷ 3 = ${a + b + c} ÷ 3.`,
        en: `(${a} + ${b} + ${c}) ÷ 3 = ${a + b + c} ÷ 3.`,
        nl: `(${a} + ${b} + ${c}) ÷ 3 = ${a + b + c} ÷ 3.`,
      },
      commonMistake: String(Math.max(a, b, c)),
    };
  }

  if (level === 2) {
    // Mean of 5 numbers (ensure integer result)
    const mean = rand(5, 25);
    const offsets = [rand(-4, 4), rand(-4, 4), rand(-4, 4), rand(-4, 4)];
    const vals = offsets.map((o) => mean + o);
    const lastVal = 5 * mean - vals.reduce((s, v) => s + v, 0);
    vals.push(lastVal);

    const list = vals.join(', ');
    const sum = vals.reduce((s, v) => s + v, 0);

    return {
      id,
      category: 'D2',
      level: 2,
      text: {
        fr: `Quelle est la moyenne de ${list} ?`,
        en: `What is the mean of ${list}?`,
        nl: `Wat is het gemiddelde van ${list}?`,
      },
      answer: mean,
      tolerance: 0,
      hint: {
        fr: `(${list.replaceAll(', ', ' + ')}) ÷ 5 = ${sum} ÷ 5.`,
        en: `(${list.replaceAll(', ', ' + ')}) ÷ 5 = ${sum} ÷ 5.`,
        nl: `(${list.replaceAll(', ', ' + ')}) ÷ 5 = ${sum} ÷ 5.`,
      },
      commonMistake: String(Math.max(...vals)),
    };
  }

  // Level 3: weighted average
  const subjects = {
    fr: ['maths', 'français', 'sciences'],
    en: ['maths', 'French', 'science'],
    nl: ['wiskunde', 'Frans', 'wetenschappen'],
  };
  const grades = [rand(8, 20), rand(8, 20), rand(8, 20)];
  const weights = [rand(1, 4), rand(1, 3), rand(1, 3)];
  const totalWeight = weights.reduce((s, w) => s + w, 0);
  const weightedSum = grades.reduce((s, g, i) => s + g * weights[i], 0);
  const answer = parseFloat((weightedSum / totalWeight).toFixed(2));

  const details = grades
    .map((g, i) => `${g}/20 (${weights[i]})`)
    .join(', ');

  return {
    id,
    category: 'D2',
    level: 3,
    text: {
      fr: `Un élève a ${grades[0]}/20 en ${subjects.fr[0]} (coeff. ${weights[0]}), ${grades[1]}/20 en ${subjects.fr[1]} (coeff. ${weights[1]}) et ${grades[2]}/20 en ${subjects.fr[2]} (coeff. ${weights[2]}). Quelle est sa moyenne pondérée ? (Arrondis au centième si nécessaire)`,
      en: `A student has ${grades[0]}/20 in ${subjects.en[0]} (weight ${weights[0]}), ${grades[1]}/20 in ${subjects.en[1]} (weight ${weights[1]}) and ${grades[2]}/20 in ${subjects.en[2]} (weight ${weights[2]}). What is the weighted average? (Round to hundredths if needed)`,
      nl: `Een leerling heeft ${grades[0]}/20 voor ${subjects.nl[0]} (gewicht ${weights[0]}), ${grades[1]}/20 voor ${subjects.nl[1]} (gewicht ${weights[1]}) en ${grades[2]}/20 voor ${subjects.nl[2]} (gewicht ${weights[2]}). Wat is het gewogen gemiddelde? (Rond af naar honderdsten indien nodig)`,
    },
    answer,
    tolerance: 0.01,
    hint: {
      fr: `(${grades.map((g, i) => `${g}×${weights[i]}`).join(' + ')}) ÷ ${totalWeight} = ${weightedSum} ÷ ${totalWeight}.`,
      en: `(${grades.map((g, i) => `${g}×${weights[i]}`).join(' + ')}) ÷ ${totalWeight} = ${weightedSum} ÷ ${totalWeight}.`,
      nl: `(${grades.map((g, i) => `${g}×${weights[i]}`).join(' + ')}) ÷ ${totalWeight} = ${weightedSum} ÷ ${totalWeight}.`,
    },
    commonMistake: String(parseFloat(((grades[0] + grades[1] + grades[2]) / 3).toFixed(2))),
  };
}
