// =============================================================================
// P1 - Proportionality: direct proportion, cross multiply, percentages
// CE1D Belgian exam - Trilingual (FR / EN / NL)
// =============================================================================

export const questions = [
  // ── Level 1: simple direct proportionality ────────────────────────────────
  {
    id: 'P1_001',
    category: 'P1',
    level: 1,
    text: {
      fr: 'Si 1 cahier coûte 3 €, combien coûtent 5 cahiers ?',
      en: 'If 1 notebook costs 3 €, how much do 5 notebooks cost?',
      nl: 'Als 1 schrift 3 € kost, hoeveel kosten dan 5 schriften?',
    },
    answer: 15,
    tolerance: 0,
    hint: {
      fr: 'Multiplie le prix d\'un cahier par le nombre de cahiers.',
      en: 'Multiply the price of one notebook by the number of notebooks.',
      nl: 'Vermenigvuldig de prijs van één schrift met het aantal schriften.',
    },
    commonMistake: '8',
  },
  {
    id: 'P1_002',
    category: 'P1',
    level: 1,
    text: {
      fr: 'Si 2 kg de pommes coûtent 6 €, combien coûtent 4 kg ?',
      en: 'If 2 kg of apples cost 6 €, how much do 4 kg cost?',
      nl: 'Als 2 kg appels 6 € kosten, hoeveel kosten dan 4 kg?',
    },
    answer: 12,
    tolerance: 0,
    hint: {
      fr: 'Le prix double quand la quantité double.',
      en: 'The price doubles when the quantity doubles.',
      nl: 'De prijs verdubbelt als de hoeveelheid verdubbelt.',
    },
    commonMistake: '10',
  },
  {
    id: 'P1_003',
    category: 'P1',
    level: 1,
    text: {
      fr: 'Si 3 stylos coûtent 9 €, combien coûte 1 stylo ?',
      en: 'If 3 pens cost 9 €, how much does 1 pen cost?',
      nl: 'Als 3 pennen 9 € kosten, hoeveel kost dan 1 pen?',
    },
    answer: 3,
    tolerance: 0,
    hint: {
      fr: 'Divise le prix total par le nombre de stylos.',
      en: 'Divide the total price by the number of pens.',
      nl: 'Deel de totale prijs door het aantal pennen.',
    },
    commonMistake: '6',
  },
  {
    id: 'P1_004',
    category: 'P1',
    level: 1,
    text: {
      fr: 'Si 5 bonbons coûtent 10 €, combien coûtent 8 bonbons ?',
      en: 'If 5 sweets cost 10 €, how much do 8 sweets cost?',
      nl: 'Als 5 snoepjes 10 € kosten, hoeveel kosten dan 8 snoepjes?',
    },
    answer: 16,
    tolerance: 0,
    hint: {
      fr: 'Trouve d\'abord le prix d\'un bonbon : 10 ÷ 5 = 2 €.',
      en: 'First find the price of one sweet: 10 ÷ 5 = 2 €.',
      nl: 'Vind eerst de prijs van één snoepje: 10 ÷ 5 = 2 €.',
    },
    commonMistake: '13',
  },
  {
    id: 'P1_005',
    category: 'P1',
    level: 1,
    text: {
      fr: 'Une voiture parcourt 60 km en 1 heure. Combien de km parcourt-elle en 3 heures ?',
      en: 'A car travels 60 km in 1 hour. How many km does it travel in 3 hours?',
      nl: 'Een auto rijdt 60 km in 1 uur. Hoeveel km rijdt hij in 3 uur?',
    },
    answer: 180,
    tolerance: 0,
    hint: {
      fr: 'Distance = vitesse × temps.',
      en: 'Distance = speed × time.',
      nl: 'Afstand = snelheid × tijd.',
    },
    commonMistake: '120',
  },

  // ── Level 2: cross-multiply ───────────────────────────────────────────────
  {
    id: 'P1_006',
    category: 'P1',
    level: 2,
    text: {
      fr: 'Si 3 kg de riz coûtent 12 €, combien coûtent 5 kg ?',
      en: 'If 3 kg of rice cost 12 €, how much do 5 kg cost?',
      nl: 'Als 3 kg rijst 12 € kost, hoeveel kosten dan 5 kg?',
    },
    answer: 20,
    tolerance: 0,
    hint: {
      fr: 'Produit en croix : (5 × 12) ÷ 3.',
      en: 'Cross multiply: (5 × 12) ÷ 3.',
      nl: 'Kruisproduct: (5 × 12) ÷ 3.',
    },
    commonMistake: '15',
  },
  {
    id: 'P1_007',
    category: 'P1',
    level: 2,
    text: {
      fr: 'Si 4 ouvriers construisent un mur en 6 jours, combien de jours faudrait-il à 8 ouvriers ? (Même rythme de travail)',
      en: 'If 4 workers build a wall in 6 days, how many days would 8 workers need? (Same work rate)',
      nl: 'Als 4 arbeiders een muur bouwen in 6 dagen, hoeveel dagen hebben 8 arbeiders nodig? (Zelfde werktempo)',
    },
    answer: 3,
    tolerance: 0,
    hint: {
      fr: 'C\'est une proportionnalité inverse : plus d\'ouvriers = moins de jours.',
      en: 'This is inverse proportionality: more workers = fewer days.',
      nl: 'Dit is omgekeerde evenredigheid: meer arbeiders = minder dagen.',
    },
    commonMistake: '12',
  },
  {
    id: 'P1_008',
    category: 'P1',
    level: 2,
    text: {
      fr: 'Si 7 livres coûtent 42 €, combien coûtent 3 livres ?',
      en: 'If 7 books cost 42 €, how much do 3 books cost?',
      nl: 'Als 7 boeken 42 € kosten, hoeveel kosten dan 3 boeken?',
    },
    answer: 18,
    tolerance: 0,
    hint: {
      fr: 'Prix d\'un livre : 42 ÷ 7 = 6 €. Puis 6 × 3.',
      en: 'Price of one book: 42 ÷ 7 = 6 €. Then 6 × 3.',
      nl: 'Prijs per boek: 42 ÷ 7 = 6 €. Dan 6 × 3.',
    },
    commonMistake: '21',
  },
  {
    id: 'P1_009',
    category: 'P1',
    level: 2,
    text: {
      fr: 'Sur une carte à l\'échelle 1 : 1 000, une distance mesure 8 cm. Quelle est la distance réelle en mètres ?',
      en: 'On a map with scale 1:1,000, a distance measures 8 cm. What is the real distance in metres?',
      nl: 'Op een kaart met schaal 1:1.000 meet een afstand 8 cm. Wat is de werkelijke afstand in meter?',
    },
    answer: 80,
    tolerance: 0,
    hint: {
      fr: '8 cm × 1 000 = 8 000 cm = 80 m.',
      en: '8 cm × 1,000 = 8,000 cm = 80 m.',
      nl: '8 cm × 1.000 = 8.000 cm = 80 m.',
    },
    commonMistake: '8000',
  },
  {
    id: 'P1_010',
    category: 'P1',
    level: 2,
    text: {
      fr: 'Si 6 mètres de tissu coûtent 45 €, combien coûtent 10 mètres ?',
      en: 'If 6 metres of fabric cost 45 €, how much do 10 metres cost?',
      nl: 'Als 6 meter stof 45 € kost, hoeveel kosten dan 10 meter?',
    },
    answer: 75,
    tolerance: 0,
    hint: {
      fr: 'Produit en croix : (10 × 45) ÷ 6 = 450 ÷ 6.',
      en: 'Cross multiply: (10 × 45) ÷ 6 = 450 ÷ 6.',
      nl: 'Kruisproduct: (10 × 45) ÷ 6 = 450 ÷ 6.',
    },
    commonMistake: '51',
  },

  // ── Level 3: percentages ──────────────────────────────────────────────────
  {
    id: 'P1_011',
    category: 'P1',
    level: 3,
    text: {
      fr: 'Combien font 25 % de 80 ?',
      en: 'What is 25% of 80?',
      nl: 'Hoeveel is 25% van 80?',
    },
    answer: 20,
    tolerance: 0,
    hint: {
      fr: '25 % = un quart. 80 ÷ 4 = 20.',
      en: '25% = one quarter. 80 ÷ 4 = 20.',
      nl: '25% = een kwart. 80 ÷ 4 = 20.',
    },
    commonMistake: '25',
  },
  {
    id: 'P1_012',
    category: 'P1',
    level: 3,
    text: {
      fr: 'Un article coûte 60 €. Il est en solde à -20 %. Quel est le nouveau prix ?',
      en: 'An item costs 60 €. It is on sale at -20%. What is the new price?',
      nl: 'Een artikel kost 60 €. Het is in de solden met -20%. Wat is de nieuwe prijs?',
    },
    answer: 48,
    tolerance: 0,
    hint: {
      fr: 'Réduction : 60 × 20 ÷ 100 = 12 €. Nouveau prix : 60 - 12.',
      en: 'Discount: 60 × 20 ÷ 100 = 12 €. New price: 60 - 12.',
      nl: 'Korting: 60 × 20 ÷ 100 = 12 €. Nieuwe prijs: 60 - 12.',
    },
    commonMistake: '12',
  },
  {
    id: 'P1_013',
    category: 'P1',
    level: 3,
    text: {
      fr: 'Dans une classe de 30 élèves, 60 % sont des filles. Combien y a-t-il de filles ?',
      en: 'In a class of 30 students, 60% are girls. How many girls are there?',
      nl: 'In een klas van 30 leerlingen is 60% meisjes. Hoeveel meisjes zijn er?',
    },
    answer: 18,
    tolerance: 0,
    hint: {
      fr: '30 × 60 ÷ 100 = 1 800 ÷ 100.',
      en: '30 × 60 ÷ 100 = 1,800 ÷ 100.',
      nl: '30 × 60 ÷ 100 = 1.800 ÷ 100.',
    },
    commonMistake: '20',
  },
  {
    id: 'P1_014',
    category: 'P1',
    level: 3,
    text: {
      fr: 'Combien font 10 % de 250 ?',
      en: 'What is 10% of 250?',
      nl: 'Hoeveel is 10% van 250?',
    },
    answer: 25,
    tolerance: 0,
    hint: {
      fr: '10 % = diviser par 10.',
      en: '10% = divide by 10.',
      nl: '10% = delen door 10.',
    },
    commonMistake: '2.5',
  },
  {
    id: 'P1_015',
    category: 'P1',
    level: 3,
    text: {
      fr: 'Un prix augmente de 150 € à 180 €. Quel est le pourcentage d\'augmentation ?',
      en: 'A price increases from 150 € to 180 €. What is the percentage increase?',
      nl: 'Een prijs stijgt van 150 € naar 180 €. Wat is het stijgingspercentage?',
    },
    answer: 20,
    tolerance: 0,
    hint: {
      fr: 'Augmentation : 180 - 150 = 30 €. Pourcentage : (30 ÷ 150) × 100.',
      en: 'Increase: 180 - 150 = 30 €. Percentage: (30 ÷ 150) × 100.',
      nl: 'Stijging: 180 - 150 = 30 €. Percentage: (30 ÷ 150) × 100.',
    },
    commonMistake: '30',
  },
];

/**
 * Procedural generator for P1 questions.
 * @param {1|2|3} level
 * @returns {object} A single question object
 */
export function generate(level = 1) {
  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const id = `P1_gen_${Date.now()}_${rand(100, 999)}`;

  const items = {
    fr: ['cahiers', 'stylos', 'pommes (kg)', 'livres', 'bouteilles'],
    en: ['notebooks', 'pens', 'apples (kg)', 'books', 'bottles'],
    nl: ['schriften', 'pennen', 'appels (kg)', 'boeken', 'flessen'],
  };
  const idx = rand(0, items.fr.length - 1);

  if (level === 1) {
    const unitPrice = rand(2, 10);
    const qty1 = 1;
    const qty2 = rand(3, 9);
    const answer = unitPrice * qty2;

    return {
      id,
      category: 'P1',
      level: 1,
      text: {
        fr: `Si ${qty1} ${items.fr[idx]} coûte ${unitPrice} €, combien coûtent ${qty2} ${items.fr[idx]} ?`,
        en: `If ${qty1} ${items.en[idx]} costs ${unitPrice} €, how much do ${qty2} ${items.en[idx]} cost?`,
        nl: `Als ${qty1} ${items.nl[idx]} ${unitPrice} € kost, hoeveel kosten dan ${qty2} ${items.nl[idx]}?`,
      },
      answer,
      tolerance: 0,
      hint: {
        fr: `Multiplie le prix unitaire par ${qty2}.`,
        en: `Multiply the unit price by ${qty2}.`,
        nl: `Vermenigvuldig de eenheidsprijs met ${qty2}.`,
      },
      commonMistake: String(unitPrice + qty2),
    };
  }

  if (level === 2) {
    // Cross-multiply: if qtyA costs priceA, how much for qtyB?
    const unitPrice = rand(2, 8);
    const qtyA = rand(2, 6);
    const priceA = unitPrice * qtyA;
    const qtyB = rand(3, 10);
    while (qtyB === qtyA) qtyB; // avoid same
    const answer = unitPrice * qtyB;

    return {
      id,
      category: 'P1',
      level: 2,
      text: {
        fr: `Si ${qtyA} ${items.fr[idx]} coûtent ${priceA} €, combien coûtent ${qtyB} ${items.fr[idx]} ?`,
        en: `If ${qtyA} ${items.en[idx]} cost ${priceA} €, how much do ${qtyB} ${items.en[idx]} cost?`,
        nl: `Als ${qtyA} ${items.nl[idx]} ${priceA} € kosten, hoeveel kosten dan ${qtyB} ${items.nl[idx]}?`,
      },
      answer,
      tolerance: 0,
      hint: {
        fr: `Produit en croix : (${qtyB} × ${priceA}) ÷ ${qtyA}.`,
        en: `Cross multiply: (${qtyB} × ${priceA}) ÷ ${qtyA}.`,
        nl: `Kruisproduct: (${qtyB} × ${priceA}) ÷ ${qtyA}.`,
      },
      commonMistake: String(priceA + qtyB),
    };
  }

  // Level 3: percentages
  const baseValues = [40, 50, 60, 80, 100, 120, 150, 200, 250, 300];
  const base = baseValues[rand(0, baseValues.length - 1)];
  const percentages = [10, 15, 20, 25, 30, 40, 50, 75];
  const pct = percentages[rand(0, percentages.length - 1)];
  const answer = base * pct / 100;

  return {
    id,
    category: 'P1',
    level: 3,
    text: {
      fr: `Combien font ${pct} % de ${base} ?`,
      en: `What is ${pct}% of ${base}?`,
      nl: `Hoeveel is ${pct}% van ${base}?`,
    },
    answer,
    tolerance: 0,
    hint: {
      fr: `${pct} % de ${base} = ${base} × ${pct} ÷ 100.`,
      en: `${pct}% of ${base} = ${base} × ${pct} ÷ 100.`,
      nl: `${pct}% van ${base} = ${base} × ${pct} ÷ 100.`,
    },
    commonMistake: String(base - answer),
  };
}
