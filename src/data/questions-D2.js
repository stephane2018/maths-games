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

  // ── Level 1: CE1D-inspired ───────────────────────────────────────────────
  {
    id: 'D2_016',
    category: 'D2',
    level: 1,
    text: {
      fr: 'On lance un dé 50 fois. Le 2 sort 14 fois, le 3 sort 10 fois, le 5 sort 8 fois. Quel nombre est sorti le plus souvent (le mode) ?',
      en: 'A die is rolled 50 times. The 2 comes up 14 times, the 3 comes up 10 times, the 5 comes up 8 times. Which number came up most often (the mode)?',
      nl: 'Een dobbelsteen wordt 50 keer gegooid. De 2 komt 14 keer, de 3 komt 10 keer, de 5 komt 8 keer. Welk getal kwam het vaakst voor (de modus)?',
    },
    answer: 2,
    tolerance: 0,
    hint: {
      fr: 'Le mode est la valeur qui apparaît le plus souvent : 14 > 10 > 8.',
      en: 'The mode is the value that appears most often: 14 > 10 > 8.',
      nl: 'De modus is de waarde die het vaakst voorkomt: 14 > 10 > 8.',
    },
    commonMistake: '14',
  },
  {
    id: 'D2_017',
    category: 'D2',
    level: 1,
    text: {
      fr: 'Dans un cross scolaire, il y a 6 participants de 6A, 12 de 6B, 14 de 6C, 8 de 6D et 10 de 6E. Combien de participants au total ?',
      en: 'In a school cross-country race, there are 6 from 6A, 12 from 6B, 14 from 6C, 8 from 6D and 10 from 6E. How many participants in total?',
      nl: 'Bij een schoolcross zijn er 6 deelnemers van 6A, 12 van 6B, 14 van 6C, 8 van 6D en 10 van 6E. Hoeveel deelnemers in totaal?',
    },
    answer: 50,
    tolerance: 0,
    hint: {
      fr: '6 + 12 + 14 + 8 + 10 = ?',
      en: '6 + 12 + 14 + 8 + 10 = ?',
      nl: '6 + 12 + 14 + 8 + 10 = ?',
    },
    commonMistake: '40',
  },

  // ── Level 2: CE1D-inspired ───────────────────────────────────────────────
  {
    id: 'D2_018',
    category: 'D2',
    level: 2,
    text: {
      fr: 'La moyenne de 4 scores est 70. Un score est corrigé de 79 à 75. Quelle est la nouvelle moyenne ?',
      en: 'The mean of 4 scores is 70. One score is corrected from 79 to 75. What is the new mean?',
      nl: 'Het gemiddelde van 4 scores is 70. Eén score wordt gecorrigeerd van 79 naar 75. Wat is het nieuwe gemiddelde?',
    },
    answer: 69,
    tolerance: 0,
    hint: {
      fr: 'Somme initiale : 4 × 70 = 280. Nouvelle somme : 280 - 79 + 75 = 276. Nouvelle moyenne : 276 ÷ 4.',
      en: 'Initial sum: 4 × 70 = 280. New sum: 280 - 79 + 75 = 276. New mean: 276 ÷ 4.',
      nl: 'Oorspronkelijke som: 4 × 70 = 280. Nieuwe som: 280 - 79 + 75 = 276. Nieuw gemiddelde: 276 ÷ 4.',
    },
    commonMistake: '71',
  },
  {
    id: 'D2_019',
    category: 'D2',
    level: 2,
    text: {
      fr: 'Trouve x pour que la moyenne de 12, 17, 15, x et 10 soit 13.',
      en: 'Find x so that the mean of 12, 17, 15, x and 10 is 13.',
      nl: 'Vind x zodat het gemiddelde van 12, 17, 15, x en 10 gelijk is aan 13.',
    },
    answer: 11,
    tolerance: 0,
    hint: {
      fr: 'Somme nécessaire : 5 × 13 = 65. Somme connue : 12 + 17 + 15 + 10 = 54. x = 65 - 54.',
      en: 'Required sum: 5 × 13 = 65. Known sum: 12 + 17 + 15 + 10 = 54. x = 65 - 54.',
      nl: 'Vereiste som: 5 × 13 = 65. Bekende som: 12 + 17 + 15 + 10 = 54. x = 65 - 54.',
    },
    commonMistake: '13',
  },
  {
    id: 'D2_020',
    category: 'D2',
    level: 2,
    text: {
      fr: 'Le total des lancers francs réussis sur 5 matchs : 8, 6, 7, 8 et 5. Quel est le total ?',
      en: 'The total free throws made over 5 games: 8, 6, 7, 8 and 5. What is the total?',
      nl: 'Het totaal gescoorde vrije worpen over 5 wedstrijden: 8, 6, 7, 8 en 5. Wat is het totaal?',
    },
    answer: 34,
    tolerance: 0,
    hint: {
      fr: '8 + 6 + 7 + 8 + 5 = ?',
      en: '8 + 6 + 7 + 8 + 5 = ?',
      nl: '8 + 6 + 7 + 8 + 5 = ?',
    },
    commonMistake: '29',
  },

  // ── Level 3: CE1D-inspired ───────────────────────────────────────────────
  {
    id: 'D2_021',
    category: 'D2',
    level: 3,
    text: {
      fr: '150 élèves font du sport. 60 aiment ce sport et 22 le font pour être avec leurs amis. Combien au total pour ces 2 raisons ?',
      en: '150 students do sport. 60 like the sport and 22 do it to be with friends. How many in total for these 2 reasons?',
      nl: '150 leerlingen sporten. 60 houden van de sport en 22 doen het om bij vrienden te zijn. Hoeveel in totaal voor deze 2 redenen?',
    },
    answer: 82,
    tolerance: 0,
    hint: {
      fr: '60 + 22 = ?',
      en: '60 + 22 = ?',
      nl: '60 + 22 = ?',
    },
    commonMistake: '150',
  },
  {
    id: 'D2_022',
    category: 'D2',
    level: 3,
    text: {
      fr: '58199 garçons naissent. 564 s\'appellent Noah, 467 Liam, 443 Adam et 345 Mohamed. Combien ne portent aucun de ces prénoms ?',
      en: '58199 boys are born. 564 are named Noah, 467 Liam, 443 Adam and 345 Mohamed. How many do not have any of these names?',
      nl: '58199 jongens worden geboren. 564 heten Noah, 467 Liam, 443 Adam en 345 Mohamed. Hoeveel dragen geen van deze voornamen?',
    },
    answer: 56380,
    tolerance: 0,
    hint: {
      fr: 'Total des prénoms : 564 + 467 + 443 + 345 = 1819. Puis 58199 - 1819.',
      en: 'Total of names: 564 + 467 + 443 + 345 = 1819. Then 58199 - 1819.',
      nl: 'Totaal van namen: 564 + 467 + 443 + 345 = 1819. Dan 58199 - 1819.',
    },
    commonMistake: '1819',
  },
];

/**
 * Procedural generator for D2 questions.
 * CE1D-inspired: mean, mode, corrected mean, find missing value, complement.
 * @param {1|2|3} level
 * @returns {object} A single question object
 */
export function generate(level = 1) {
  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const pick = (arr) => arr[rand(0, arr.length - 1)];
  const id = `D2_gen_${Date.now()}_${rand(100, 999)}`;

  if (level === 1) {
    const type = rand(0, 2);

    if (type === 0) {
      // Mean of 3 numbers
      const mean = rand(4, 20);
      const a = mean + rand(-3, 3);
      const b = mean + rand(-3, 3);
      const c = 3 * mean - a - b;
      return {
        id, category: 'D2', level: 1,
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

    if (type === 1) {
      // Mode finding (CE1D-inspired)
      const vals = [rand(1, 6), rand(1, 6), rand(1, 6)];
      const freqs = [rand(6, 15), rand(3, 10), rand(2, 8)];
      // Ensure unique max
      freqs.sort((a, b) => b - a);
      if (freqs[0] === freqs[1]) freqs[0] += 2;
      const modeIdx = 0;
      const answer = vals[modeIdx];
      const items = vals.map((v, i) => `${v} → ${freqs[i]} fois`);
      const itemsEn = vals.map((v, i) => `${v} → ${freqs[i]} times`);
      const itemsNl = vals.map((v, i) => `${v} → ${freqs[i]} keer`);
      return {
        id, category: 'D2', level: 1,
        text: {
          fr: `On lance un dé plusieurs fois. Résultats :\n${items.join(' | ')}\nQuel est le mode (valeur la plus fréquente) ?`,
          en: `A die is rolled several times. Results:\n${itemsEn.join(' | ')}\nWhat is the mode (most frequent value)?`,
          nl: `Een dobbelsteen wordt meerdere keren gegooid. Resultaten:\n${itemsNl.join(' | ')}\nWat is de modus (meest voorkomende waarde)?`,
        },
        answer,
        tolerance: 0,
        hint: {
          fr: `Le mode est la valeur avec la fréquence la plus élevée : ${freqs[0]}.`,
          en: `The mode is the value with the highest frequency: ${freqs[0]}.`,
          nl: `De modus is de waarde met de hoogste frequentie: ${freqs[0]}.`,
        },
        commonMistake: String(freqs[0]),
      };
    }

    // Counting total (CE1D-inspired)
    const n = rand(4, 6);
    const groups = Array.from({ length: n }, () => rand(3, 20));
    const answer = groups.reduce((s, v) => s + v, 0);
    const labels = pick([
      { fr: ['6A', '6B', '6C', '6D', '6E', '6F'], en: ['6A', '6B', '6C', '6D', '6E', '6F'], nl: ['6A', '6B', '6C', '6D', '6E', '6F'] },
      { fr: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'], en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], nl: ['Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'] },
    ]);
    const ctx = pick([
      { fr: 'participants au cross', en: 'cross-country participants', nl: 'deelnemers aan de cross' },
      { fr: 'livres lus', en: 'books read', nl: 'gelezen boeken' },
    ]);
    const table = groups.map((v, i) => `${labels.fr[i]}: ${v}`).join(' | ');
    const tableEn = groups.map((v, i) => `${labels.en[i]}: ${v}`).join(' | ');
    const tableNl = groups.map((v, i) => `${labels.nl[i]}: ${v}`).join(' | ');
    return {
      id, category: 'D2', level: 1,
      text: {
        fr: `${ctx.fr[0].toUpperCase() + ctx.fr.slice(1)} :\n${table}\nCombien au total ?`,
        en: `${ctx.en[0].toUpperCase() + ctx.en.slice(1)}:\n${tableEn}\nHow many in total?`,
        nl: `${ctx.nl[0].toUpperCase() + ctx.nl.slice(1)}:\n${tableNl}\nHoeveel in totaal?`,
      },
      answer,
      tolerance: 0,
      hint: { fr: `${groups.join(' + ')} = ?`, en: `${groups.join(' + ')} = ?`, nl: `${groups.join(' + ')} = ?` },
      commonMistake: String(answer - groups[0]),
    };
  }

  if (level === 2) {
    const type = rand(0, 2);

    if (type === 0) {
      // Mean of 5 numbers
      const mean = rand(5, 25);
      const offsets = [rand(-4, 4), rand(-4, 4), rand(-4, 4), rand(-4, 4)];
      const vals = offsets.map((o) => mean + o);
      vals.push(5 * mean - vals.reduce((s, v) => s + v, 0));
      const list = vals.join(', ');
      const sum = vals.reduce((s, v) => s + v, 0);
      return {
        id, category: 'D2', level: 2,
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

    if (type === 1) {
      // Corrected mean (CE1D-inspired)
      const n = rand(3, 5);
      const mean = rand(10, 30);
      const totalSum = n * mean;
      const wrong = rand(mean + 2, mean + 10);
      const correct = wrong - rand(2, 8);
      const newSum = totalSum - wrong + correct;
      const newMean = newSum / n;
      if (newMean !== Math.floor(newMean)) return generate(2);
      return {
        id, category: 'D2', level: 2,
        text: {
          fr: `La moyenne de ${n} scores est ${mean}. Un score est corrigé de ${wrong} à ${correct}. Quelle est la nouvelle moyenne ?`,
          en: `The mean of ${n} scores is ${mean}. One score is corrected from ${wrong} to ${correct}. What is the new mean?`,
          nl: `Het gemiddelde van ${n} scores is ${mean}. Eén score wordt gecorrigeerd van ${wrong} naar ${correct}. Wat is het nieuwe gemiddelde?`,
        },
        answer: newMean,
        tolerance: 0,
        hint: {
          fr: `Somme initiale : ${n} × ${mean} = ${totalSum}. Nouvelle somme : ${totalSum} - ${wrong} + ${correct} = ${newSum}. Moyenne : ${newSum} ÷ ${n}.`,
          en: `Initial sum: ${n} × ${mean} = ${totalSum}. New sum: ${totalSum} - ${wrong} + ${correct} = ${newSum}. Mean: ${newSum} ÷ ${n}.`,
          nl: `Oorspronkelijke som: ${n} × ${mean} = ${totalSum}. Nieuwe som: ${totalSum} - ${wrong} + ${correct} = ${newSum}. Gemiddelde: ${newSum} ÷ ${n}.`,
        },
        commonMistake: String(mean),
      };
    }

    // Find missing value for target mean (CE1D-inspired)
    const targetMean = rand(8, 20);
    const known = [rand(5, 25), rand(5, 25), rand(5, 25), rand(5, 25)];
    const knownSum = known.reduce((s, v) => s + v, 0);
    const answer = 5 * targetMean - knownSum;
    if (answer < 1 || answer > 30) return generate(2);
    return {
      id, category: 'D2', level: 2,
      text: {
        fr: `Trouve x pour que la moyenne de ${known.join(', ')}, x soit ${targetMean}.`,
        en: `Find x so that the mean of ${known.join(', ')}, x is ${targetMean}.`,
        nl: `Vind x zodat het gemiddelde van ${known.join(', ')}, x gelijk is aan ${targetMean}.`,
      },
      answer,
      tolerance: 0,
      hint: {
        fr: `Somme nécessaire : 5 × ${targetMean} = ${5 * targetMean}. Somme connue : ${knownSum}. x = ${5 * targetMean} - ${knownSum}.`,
        en: `Required sum: 5 × ${targetMean} = ${5 * targetMean}. Known sum: ${knownSum}. x = ${5 * targetMean} - ${knownSum}.`,
        nl: `Vereiste som: 5 × ${targetMean} = ${5 * targetMean}. Bekende som: ${knownSum}. x = ${5 * targetMean} - ${knownSum}.`,
      },
      commonMistake: String(targetMean),
    };
  }

  // Level 3
  const type = rand(0, 2);

  if (type === 0) {
    // Weighted average (integer result)
    const subjects = {
      fr: ['maths', 'français', 'sciences'],
      en: ['maths', 'French', 'science'],
      nl: ['wiskunde', 'Frans', 'wetenschappen'],
    };
    // Ensure integer result: pick grades and weights carefully
    const weights = [rand(1, 4), rand(1, 3), rand(1, 3)];
    const totalWeight = weights.reduce((s, w) => s + w, 0);
    const targetMean = rand(10, 18);
    // Generate grades such that weighted sum = targetMean * totalWeight
    const ws = targetMean * totalWeight;
    const g0 = rand(8, 18);
    const g1 = rand(8, 18);
    const g2r = (ws - g0 * weights[0] - g1 * weights[1]) / weights[2];
    if (g2r !== Math.floor(g2r) || g2r < 5 || g2r > 20) return generate(3);
    const grades = [g0, g1, g2r];
    return {
      id, category: 'D2', level: 3,
      text: {
        fr: `Un élève a ${grades[0]}/20 en ${subjects.fr[0]} (coeff. ${weights[0]}), ${grades[1]}/20 en ${subjects.fr[1]} (coeff. ${weights[1]}) et ${grades[2]}/20 en ${subjects.fr[2]} (coeff. ${weights[2]}). Moyenne pondérée ?`,
        en: `A student has ${grades[0]}/20 in ${subjects.en[0]} (weight ${weights[0]}), ${grades[1]}/20 in ${subjects.en[1]} (weight ${weights[1]}) and ${grades[2]}/20 in ${subjects.en[2]} (weight ${weights[2]}). Weighted average?`,
        nl: `Een leerling heeft ${grades[0]}/20 voor ${subjects.nl[0]} (gewicht ${weights[0]}), ${grades[1]}/20 voor ${subjects.nl[1]} (gewicht ${weights[1]}) en ${grades[2]}/20 voor ${subjects.nl[2]} (gewicht ${weights[2]}). Gewogen gemiddelde?`,
      },
      answer: targetMean,
      tolerance: 0,
      hint: {
        fr: `(${grades.map((g, i) => `${g}×${weights[i]}`).join(' + ')}) ÷ ${totalWeight} = ${ws} ÷ ${totalWeight}.`,
        en: `(${grades.map((g, i) => `${g}×${weights[i]}`).join(' + ')}) ÷ ${totalWeight} = ${ws} ÷ ${totalWeight}.`,
        nl: `(${grades.map((g, i) => `${g}×${weights[i]}`).join(' + ')}) ÷ ${totalWeight} = ${ws} ÷ ${totalWeight}.`,
      },
      commonMistake: String(Math.round((grades[0] + grades[1] + grades[2]) / 3)),
    };
  }

  if (type === 1) {
    // Mean after adding a value
    const n = rand(3, 5);
    const mean = rand(10, 25);
    const sum = n * mean;
    const newVal = rand(mean + 5, mean + 20);
    const newSum = sum + newVal;
    const newMean = newSum / (n + 1);
    if (newMean !== Math.floor(newMean)) return generate(3);
    return {
      id, category: 'D2', level: 3,
      text: {
        fr: `La moyenne de ${n} nombres est ${mean}. On ajoute ${newVal}. Quelle est la nouvelle moyenne des ${n + 1} nombres ?`,
        en: `The mean of ${n} numbers is ${mean}. We add ${newVal}. What is the new mean of the ${n + 1} numbers?`,
        nl: `Het gemiddelde van ${n} getallen is ${mean}. We voegen ${newVal} toe. Wat is het nieuwe gemiddelde van de ${n + 1} getallen?`,
      },
      answer: newMean,
      tolerance: 0,
      hint: {
        fr: `Somme : ${n} × ${mean} = ${sum}. Nouvelle somme : ${sum} + ${newVal} = ${newSum}. Moyenne : ${newSum} ÷ ${n + 1}.`,
        en: `Sum: ${n} × ${mean} = ${sum}. New sum: ${sum} + ${newVal} = ${newSum}. Mean: ${newSum} ÷ ${n + 1}.`,
        nl: `Som: ${n} × ${mean} = ${sum}. Nieuwe som: ${sum} + ${newVal} = ${newSum}. Gemiddelde: ${newSum} ÷ ${n + 1}.`,
      },
      commonMistake: String(newVal),
    };
  }

  // Complement counting (CE1D-inspired: total - subset)
  const total = rand(100, 1000) * rand(1, 10);
  const parts = [rand(100, 500), rand(100, 400), rand(50, 300), rand(50, 200)];
  const partSum = parts.reduce((s, v) => s + v, 0);
  const answer = total - partSum;
  if (answer < 1) return generate(3);
  const ctx = pick([
    { fr: 'naissances', en: 'births', nl: 'geboorten' },
    { fr: 'inscrits', en: 'registrations', nl: 'inschrijvingen' },
  ]);
  return {
    id, category: 'D2', level: 3,
    text: {
      fr: `Sur ${total} ${ctx.fr}, on connaît ces groupes : ${parts.join(', ')}. Combien ne sont dans aucun de ces groupes ?`,
      en: `Out of ${total} ${ctx.en}, these groups are known: ${parts.join(', ')}. How many are in none of these groups?`,
      nl: `Van ${total} ${ctx.nl} zijn deze groepen bekend: ${parts.join(', ')}. Hoeveel zitten in geen van deze groepen?`,
    },
    answer,
    tolerance: 0,
    hint: {
      fr: `Total des groupes : ${parts.join(' + ')} = ${partSum}. Reste : ${total} - ${partSum}.`,
      en: `Group total: ${parts.join(' + ')} = ${partSum}. Remaining: ${total} - ${partSum}.`,
      nl: `Totaal groepen: ${parts.join(' + ')} = ${partSum}. Rest: ${total} - ${partSum}.`,
    },
    commonMistake: String(partSum),
  };
}
