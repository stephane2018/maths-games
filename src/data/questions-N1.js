// =============================================================================
// N1 - Number Comparison: ordering, comparing, place value
// CE1D Belgian exam - Trilingual (FR / EN / NL)
// =============================================================================

export const questions = [
  // ── Level 1: integers < 100 ────────────────────────────────────────────────
  {
    id: 'N1_001',
    category: 'N1',
    level: 1,
    text: {
      fr: 'Quel est le plus grand nombre : 34 ou 43 ?',
      en: 'Which is the greater number: 34 or 43?',
      nl: 'Welk is het grootste getal: 34 of 43?',
    },
    answer: 43,
    tolerance: 0,
    hint: {
      fr: 'Compare les dizaines d\'abord.',
      en: 'Compare the tens digit first.',
      nl: 'Vergelijk eerst het tiental.',
    },
    commonMistake: '34',
  },
  {
    id: 'N1_002',
    category: 'N1',
    level: 1,
    text: {
      fr: 'Quel est le plus petit nombre : 67 ou 76 ?',
      en: 'Which is the smaller number: 67 or 76?',
      nl: 'Welk is het kleinste getal: 67 of 76?',
    },
    answer: 67,
    tolerance: 0,
    hint: {
      fr: 'Compare les dizaines d\'abord.',
      en: 'Compare the tens digit first.',
      nl: 'Vergelijk eerst het tiental.',
    },
    commonMistake: '76',
  },
  {
    id: 'N1_003',
    category: 'N1',
    level: 1,
    text: {
      fr: 'Combien de dizaines y a-t-il dans 58 ?',
      en: 'How many tens are there in 58?',
      nl: 'Hoeveel tientallen zitten er in 58?',
    },
    answer: 5,
    tolerance: 0,
    hint: {
      fr: '58 = 5 dizaines + 8 unités.',
      en: '58 = 5 tens + 8 ones.',
      nl: '58 = 5 tientallen + 8 eenheden.',
    },
    commonMistake: '8',
  },
  {
    id: 'N1_004',
    category: 'N1',
    level: 1,
    text: {
      fr: 'Quel nombre vient juste après 49 ?',
      en: 'What number comes right after 49?',
      nl: 'Welk getal komt net na 49?',
    },
    answer: 50,
    tolerance: 0,
    hint: {
      fr: 'Ajoute 1 à 49.',
      en: 'Add 1 to 49.',
      nl: 'Tel 1 op bij 49.',
    },
    commonMistake: '39',
  },
  {
    id: 'N1_005',
    category: 'N1',
    level: 1,
    text: {
      fr: 'Range ces nombres du plus petit au plus grand : 25, 12, 31. Quel est celui du milieu ?',
      en: 'Order these numbers from smallest to largest: 25, 12, 31. Which one is in the middle?',
      nl: 'Rangschik deze getallen van klein naar groot: 25, 12, 31. Welk staat in het midden?',
    },
    answer: 25,
    tolerance: 0,
    hint: {
      fr: 'Le plus petit est 12, le plus grand est 31.',
      en: 'The smallest is 12, the largest is 31.',
      nl: 'Het kleinste is 12, het grootste is 31.',
    },
    commonMistake: '12',
  },

  // ── Level 2: integers < 10 000 ────────────────────────────────────────────
  {
    id: 'N1_006',
    category: 'N1',
    level: 2,
    text: {
      fr: 'Quel est le plus grand nombre : 2 345 ou 2 354 ?',
      en: 'Which is the greater number: 2,345 or 2,354?',
      nl: 'Welk is het grootste getal: 2.345 of 2.354?',
    },
    answer: 2354,
    tolerance: 0,
    hint: {
      fr: 'Les milliers et centaines sont identiques, compare les dizaines.',
      en: 'Thousands and hundreds are the same, compare the tens.',
      nl: 'Duizendtallen en honderdtallen zijn gelijk, vergelijk de tientallen.',
    },
    commonMistake: '2345',
  },
  {
    id: 'N1_007',
    category: 'N1',
    level: 2,
    text: {
      fr: 'Combien de centaines y a-t-il dans 4 782 ?',
      en: 'How many hundreds are there in 4,782?',
      nl: 'Hoeveel honderdtallen zitten er in 4.782?',
    },
    answer: 7,
    tolerance: 0,
    hint: {
      fr: 'Regarde le chiffre des centaines (3e position en partant de la droite).',
      en: 'Look at the hundreds digit (3rd position from the right).',
      nl: 'Kijk naar het cijfer van de honderdtallen (3e positie van rechts).',
    },
    commonMistake: '47',
  },
  {
    id: 'N1_008',
    category: 'N1',
    level: 2,
    text: {
      fr: 'Quel est le plus petit nombre : 6 001 ou 5 999 ?',
      en: 'Which is the smaller number: 6,001 or 5,999?',
      nl: 'Welk is het kleinste getal: 6.001 of 5.999?',
    },
    answer: 5999,
    tolerance: 0,
    hint: {
      fr: 'Compare les milliers d\'abord : 6 vs 5.',
      en: 'Compare the thousands first: 6 vs 5.',
      nl: 'Vergelijk eerst de duizendtallen: 6 vs 5.',
    },
    commonMistake: '6001',
  },
  {
    id: 'N1_009',
    category: 'N1',
    level: 2,
    text: {
      fr: 'Arrondis 3 467 à la centaine la plus proche.',
      en: 'Round 3,467 to the nearest hundred.',
      nl: 'Rond 3.467 af naar het dichtstbijzijnde honderdtal.',
    },
    answer: 3500,
    tolerance: 0,
    hint: {
      fr: 'Le chiffre des dizaines est 6 (>= 5), donc on arrondit vers le haut.',
      en: 'The tens digit is 6 (>= 5), so round up.',
      nl: 'Het tiental is 6 (>= 5), dus afronden naar boven.',
    },
    commonMistake: '3400',
  },
  {
    id: 'N1_010',
    category: 'N1',
    level: 2,
    text: {
      fr: 'Range ces nombres du plus grand au plus petit : 1 205, 1 502, 1 250. Quel est celui du milieu ?',
      en: 'Order from largest to smallest: 1,205 - 1,502 - 1,250. Which is in the middle?',
      nl: 'Rangschik van groot naar klein: 1.205, 1.502, 1.250. Welk staat in het midden?',
    },
    answer: 1250,
    tolerance: 0,
    hint: {
      fr: 'Du plus grand au plus petit : 1 502, 1 250, 1 205.',
      en: 'Largest to smallest: 1,502 > 1,250 > 1,205.',
      nl: 'Van groot naar klein: 1.502 > 1.250 > 1.205.',
    },
    commonMistake: '1205',
  },

  // ── Level 3: decimals ──────────────────────────────────────────────────────
  {
    id: 'N1_011',
    category: 'N1',
    level: 3,
    text: {
      fr: 'Quel est le plus grand nombre : 3,14 ou 3,41 ?',
      en: 'Which is the greater number: 3.14 or 3.41?',
      nl: 'Welk is het grootste getal: 3,14 of 3,41?',
    },
    answer: 3.41,
    tolerance: 0,
    hint: {
      fr: 'Les unités sont identiques (3). Compare les dixièmes : 1 vs 4.',
      en: 'The units are the same (3). Compare the tenths: 1 vs 4.',
      nl: 'De eenheden zijn gelijk (3). Vergelijk de tienden: 1 vs 4.',
    },
    commonMistake: '3.14',
  },
  {
    id: 'N1_012',
    category: 'N1',
    level: 3,
    text: {
      fr: 'Quel est le plus petit nombre : 0,7 ou 0,65 ?',
      en: 'Which is the smaller number: 0.7 or 0.65?',
      nl: 'Welk is het kleinste getal: 0,7 of 0,65?',
    },
    answer: 0.65,
    tolerance: 0,
    hint: {
      fr: '0,7 = 0,70. Compare 0,70 et 0,65.',
      en: '0.7 = 0.70. Compare 0.70 and 0.65.',
      nl: '0,7 = 0,70. Vergelijk 0,70 en 0,65.',
    },
    commonMistake: '0.7',
  },
  {
    id: 'N1_013',
    category: 'N1',
    level: 3,
    text: {
      fr: 'Arrondis 6,847 au dixième le plus proche.',
      en: 'Round 6.847 to the nearest tenth.',
      nl: 'Rond 6,847 af naar het dichtstbijzijnde tiende.',
    },
    answer: 6.8,
    tolerance: 0,
    hint: {
      fr: 'Le chiffre des centièmes est 4 (< 5), donc on arrondit vers le bas.',
      en: 'The hundredths digit is 4 (< 5), so round down.',
      nl: 'Het honderdste is 4 (< 5), dus afronden naar beneden.',
    },
    commonMistake: '6.9',
  },
  {
    id: 'N1_014',
    category: 'N1',
    level: 3,
    text: {
      fr: 'Range ces nombres du plus petit au plus grand : 2,05 — 2,5 — 2,15. Quel est celui du milieu ?',
      en: 'Order from smallest to largest: 2.05, 2.5, 2.15. Which is in the middle?',
      nl: 'Rangschik van klein naar groot: 2,05 — 2,5 — 2,15. Welk staat in het midden?',
    },
    answer: 2.15,
    tolerance: 0,
    hint: {
      fr: '2,05 < 2,15 < 2,50.',
      en: '2.05 < 2.15 < 2.50.',
      nl: '2,05 < 2,15 < 2,50.',
    },
    commonMistake: '2.5',
  },
  {
    id: 'N1_015',
    category: 'N1',
    level: 3,
    text: {
      fr: 'Quel est le chiffre des centièmes dans 9,274 ?',
      en: 'What is the hundredths digit in 9.274?',
      nl: 'Wat is het cijfer van de honderdsten in 9,274?',
    },
    answer: 7,
    tolerance: 0,
    hint: {
      fr: '9,274 → unités: 9, dixièmes: 2, centièmes: 7, millièmes: 4.',
      en: '9.274 → units: 9, tenths: 2, hundredths: 7, thousandths: 4.',
      nl: '9,274 → eenheden: 9, tienden: 2, honderdsten: 7, duizendsten: 4.',
    },
    commonMistake: '4',
  },
  {
    id: 'N1_016',
    category: 'N1',
    level: 3,
    text: {
      fr: 'Quel est le plus grand : 1,09 ou 1,9 ?',
      en: 'Which is greater: 1.09 or 1.9?',
      nl: 'Welk is groter: 1,09 of 1,9?',
    },
    answer: 1.9,
    tolerance: 0,
    hint: {
      fr: '1,09 = 1,09 et 1,9 = 1,90. Compare les dixièmes.',
      en: '1.09 = 1.09 and 1.9 = 1.90. Compare the tenths.',
      nl: '1,09 = 1,09 en 1,9 = 1,90. Vergelijk de tienden.',
    },
    commonMistake: '1.09',
  },
];

/**
 * Procedural generator for N1 questions.
 * @param {1|2|3} level
 * @returns {object} A single question object
 */
export function generate(level = 1) {
  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const id = `N1_gen_${Date.now()}_${rand(100, 999)}`;

  if (level === 1) {
    // Compare two integers < 100
    let a = rand(10, 99);
    let b = rand(10, 99);
    while (a === b) b = rand(10, 99);
    const bigger = Math.max(a, b);
    const smaller = Math.min(a, b);

    // Randomly pick "which is greater" or "which is smaller"
    const askGreater = Math.random() < 0.5;
    return {
      id,
      category: 'N1',
      level: 1,
      text: {
        fr: askGreater
          ? `Quel est le plus grand nombre : ${a} ou ${b} ?`
          : `Quel est le plus petit nombre : ${a} ou ${b} ?`,
        en: askGreater
          ? `Which is the greater number: ${a} or ${b}?`
          : `Which is the smaller number: ${a} or ${b}?`,
        nl: askGreater
          ? `Welk is het grootste getal: ${a} of ${b}?`
          : `Welk is het kleinste getal: ${a} of ${b}?`,
      },
      answer: askGreater ? bigger : smaller,
      tolerance: 0,
      hint: {
        fr: 'Compare les dizaines d\'abord, puis les unités.',
        en: 'Compare the tens first, then the ones.',
        nl: 'Vergelijk eerst de tientallen, dan de eenheden.',
      },
      commonMistake: String(askGreater ? smaller : bigger),
    };
  }

  if (level === 2) {
    // Compare two integers < 10 000
    let a = rand(1000, 9999);
    let b = rand(1000, 9999);
    while (a === b) b = rand(1000, 9999);
    const bigger = Math.max(a, b);
    const smaller = Math.min(a, b);
    const askGreater = Math.random() < 0.5;

    return {
      id,
      category: 'N1',
      level: 2,
      text: {
        fr: askGreater
          ? `Quel est le plus grand nombre : ${a.toLocaleString('fr-BE')} ou ${b.toLocaleString('fr-BE')} ?`
          : `Quel est le plus petit nombre : ${a.toLocaleString('fr-BE')} ou ${b.toLocaleString('fr-BE')} ?`,
        en: askGreater
          ? `Which is the greater number: ${a.toLocaleString('en')} or ${b.toLocaleString('en')}?`
          : `Which is the smaller number: ${a.toLocaleString('en')} or ${b.toLocaleString('en')}?`,
        nl: askGreater
          ? `Welk is het grootste getal: ${a.toLocaleString('nl-BE')} of ${b.toLocaleString('nl-BE')}?`
          : `Welk is het kleinste getal: ${a.toLocaleString('nl-BE')} of ${b.toLocaleString('nl-BE')}?`,
      },
      answer: askGreater ? bigger : smaller,
      tolerance: 0,
      hint: {
        fr: 'Compare les milliers, puis les centaines, puis les dizaines.',
        en: 'Compare thousands, then hundreds, then tens.',
        nl: 'Vergelijk duizendtallen, dan honderdtallen, dan tientallen.',
      },
      commonMistake: String(askGreater ? smaller : bigger),
    };
  }

  // Level 3: decimals
  const intPart = rand(0, 9);
  const decA = rand(1, 99);
  const decB = rand(1, 99);
  let a = parseFloat(`${intPart}.${String(decA).padStart(2, '0')}`);
  let b = parseFloat(`${intPart}.${String(decB).padStart(2, '0')}`);
  while (a === b) {
    b = parseFloat(`${intPart}.${String(rand(1, 99)).padStart(2, '0')}`);
  }
  const bigger = Math.max(a, b);
  const smaller = Math.min(a, b);
  const askGreater = Math.random() < 0.5;

  return {
    id,
    category: 'N1',
    level: 3,
    text: {
      fr: askGreater
        ? `Quel est le plus grand nombre : ${a.toFixed(2).replace('.', ',')} ou ${b.toFixed(2).replace('.', ',')} ?`
        : `Quel est le plus petit nombre : ${a.toFixed(2).replace('.', ',')} ou ${b.toFixed(2).replace('.', ',')} ?`,
      en: askGreater
        ? `Which is the greater number: ${a.toFixed(2)} or ${b.toFixed(2)}?`
        : `Which is the smaller number: ${a.toFixed(2)} or ${b.toFixed(2)}?`,
      nl: askGreater
        ? `Welk is het grootste getal: ${a.toFixed(2).replace('.', ',')} of ${b.toFixed(2).replace('.', ',')}?`
        : `Welk is het kleinste getal: ${a.toFixed(2).replace('.', ',')} of ${b.toFixed(2).replace('.', ',')}?`,
    },
    answer: askGreater ? bigger : smaller,
    tolerance: 0,
    hint: {
      fr: 'Aligne les décimales et compare chiffre par chiffre.',
      en: 'Align the decimals and compare digit by digit.',
      nl: 'Lijn de decimalen uit en vergelijk cijfer per cijfer.',
    },
    commonMistake: String(askGreater ? smaller : bigger),
  };
}
