// =============================================================================
// M1 - Unit Conversions: length, mass, capacity, time, area
// CE1D Belgian exam - Trilingual (FR / EN / NL)
// =============================================================================

export const questions = [
  // ── Level 1: simple conversions (m↔cm, kg↔g) ─────────────────────────────
  {
    id: 'M1_001',
    category: 'M1',
    level: 1,
    text: {
      fr: 'Combien de centimètres y a-t-il dans 3 mètres ?',
      en: 'How many centimetres are in 3 metres?',
      nl: 'Hoeveel centimeter zit er in 3 meter?',
    },
    answer: 300,
    tolerance: 0,
    hint: {
      fr: '1 m = 100 cm. Donc 3 m = 3 × 100 cm.',
      en: '1 m = 100 cm. So 3 m = 3 × 100 cm.',
      nl: '1 m = 100 cm. Dus 3 m = 3 × 100 cm.',
    },
    commonMistake: '30',
  },
  {
    id: 'M1_002',
    category: 'M1',
    level: 1,
    text: {
      fr: 'Combien de grammes y a-t-il dans 2 kilogrammes ?',
      en: 'How many grams are in 2 kilograms?',
      nl: 'Hoeveel gram zit er in 2 kilogram?',
    },
    answer: 2000,
    tolerance: 0,
    hint: {
      fr: '1 kg = 1 000 g. Donc 2 kg = 2 × 1 000 g.',
      en: '1 kg = 1,000 g. So 2 kg = 2 × 1,000 g.',
      nl: '1 kg = 1.000 g. Dus 2 kg = 2 × 1.000 g.',
    },
    commonMistake: '200',
  },
  {
    id: 'M1_003',
    category: 'M1',
    level: 1,
    text: {
      fr: 'Convertis 500 cm en mètres.',
      en: 'Convert 500 cm to metres.',
      nl: 'Reken 500 cm om naar meter.',
    },
    answer: 5,
    tolerance: 0,
    hint: {
      fr: '100 cm = 1 m. Donc 500 ÷ 100 = ?',
      en: '100 cm = 1 m. So 500 ÷ 100 = ?',
      nl: '100 cm = 1 m. Dus 500 ÷ 100 = ?',
    },
    commonMistake: '50',
  },
  {
    id: 'M1_004',
    category: 'M1',
    level: 1,
    text: {
      fr: 'Convertis 4 500 g en kilogrammes. Donne la réponse en nombre décimal.',
      en: 'Convert 4,500 g to kilograms. Give the answer as a decimal.',
      nl: 'Reken 4.500 g om naar kilogram. Geef het antwoord als decimaal getal.',
    },
    answer: 4.5,
    tolerance: 0,
    hint: {
      fr: '4 500 ÷ 1 000 = 4,5 kg.',
      en: '4,500 ÷ 1,000 = 4.5 kg.',
      nl: '4.500 ÷ 1.000 = 4,5 kg.',
    },
    commonMistake: '45',
  },
  {
    id: 'M1_005',
    category: 'M1',
    level: 1,
    text: {
      fr: 'Combien de millimètres y a-t-il dans 7 cm ?',
      en: 'How many millimetres are in 7 cm?',
      nl: 'Hoeveel millimeter zit er in 7 cm?',
    },
    answer: 70,
    tolerance: 0,
    hint: {
      fr: '1 cm = 10 mm.',
      en: '1 cm = 10 mm.',
      nl: '1 cm = 10 mm.',
    },
    commonMistake: '700',
  },

  // ── Level 2: mixed conversions (km↔m, L↔mL) ──────────────────────────────
  {
    id: 'M1_006',
    category: 'M1',
    level: 2,
    text: {
      fr: 'Combien de mètres y a-t-il dans 2,5 km ?',
      en: 'How many metres are in 2.5 km?',
      nl: 'Hoeveel meter zit er in 2,5 km?',
    },
    answer: 2500,
    tolerance: 0,
    hint: {
      fr: '1 km = 1 000 m. Donc 2,5 × 1 000.',
      en: '1 km = 1,000 m. So 2.5 × 1,000.',
      nl: '1 km = 1.000 m. Dus 2,5 × 1.000.',
    },
    commonMistake: '250',
  },
  {
    id: 'M1_007',
    category: 'M1',
    level: 2,
    text: {
      fr: 'Convertis 3 500 mL en litres. Donne la réponse en nombre décimal.',
      en: 'Convert 3,500 mL to litres. Give the answer as a decimal.',
      nl: 'Reken 3.500 mL om naar liter. Geef het antwoord als decimaal getal.',
    },
    answer: 3.5,
    tolerance: 0,
    hint: {
      fr: '1 L = 1 000 mL. Donc 3 500 ÷ 1 000 = ?',
      en: '1 L = 1,000 mL. So 3,500 ÷ 1,000 = ?',
      nl: '1 L = 1.000 mL. Dus 3.500 ÷ 1.000 = ?',
    },
    commonMistake: '35',
  },
  {
    id: 'M1_008',
    category: 'M1',
    level: 2,
    text: {
      fr: 'Combien de centilitres y a-t-il dans 2 litres ?',
      en: 'How many centilitres are in 2 litres?',
      nl: 'Hoeveel centiliter zit er in 2 liter?',
    },
    answer: 200,
    tolerance: 0,
    hint: {
      fr: '1 L = 100 cL.',
      en: '1 L = 100 cL.',
      nl: '1 L = 100 cL.',
    },
    commonMistake: '20',
  },
  {
    id: 'M1_009',
    category: 'M1',
    level: 2,
    text: {
      fr: 'Convertis 1,8 km en mètres.',
      en: 'Convert 1.8 km to metres.',
      nl: 'Reken 1,8 km om naar meter.',
    },
    answer: 1800,
    tolerance: 0,
    hint: {
      fr: '1,8 × 1 000 = ?',
      en: '1.8 × 1,000 = ?',
      nl: '1,8 × 1.000 = ?',
    },
    commonMistake: '180',
  },
  {
    id: 'M1_010',
    category: 'M1',
    level: 2,
    text: {
      fr: 'Convertis 750 mL en litres. Donne la réponse en nombre décimal.',
      en: 'Convert 750 mL to litres. Give the answer as a decimal.',
      nl: 'Reken 750 mL om naar liter. Geef het antwoord als decimaal getal.',
    },
    answer: 0.75,
    tolerance: 0,
    hint: {
      fr: '750 ÷ 1 000 = 0,75.',
      en: '750 ÷ 1,000 = 0.75.',
      nl: '750 ÷ 1.000 = 0,75.',
    },
    commonMistake: '7.5',
  },

  // ── Level 3: time & area conversions ──────────────────────────────────────
  {
    id: 'M1_011',
    category: 'M1',
    level: 3,
    text: {
      fr: 'Combien de minutes y a-t-il dans 2 heures et 30 minutes ?',
      en: 'How many minutes are in 2 hours and 30 minutes?',
      nl: 'Hoeveel minuten zitten er in 2 uur en 30 minuten?',
    },
    answer: 150,
    tolerance: 0,
    hint: {
      fr: '2 h = 2 × 60 = 120 min. 120 + 30 = ?',
      en: '2 h = 2 × 60 = 120 min. 120 + 30 = ?',
      nl: '2 u = 2 × 60 = 120 min. 120 + 30 = ?',
    },
    commonMistake: '230',
  },
  {
    id: 'M1_012',
    category: 'M1',
    level: 3,
    text: {
      fr: 'Convertis 200 secondes en minutes et secondes. Combien de minutes complètes ?',
      en: 'Convert 200 seconds to minutes and seconds. How many complete minutes?',
      nl: 'Reken 200 seconden om naar minuten en seconden. Hoeveel volledige minuten?',
    },
    answer: 3,
    tolerance: 0,
    hint: {
      fr: '200 ÷ 60 = 3 reste 20. Donc 3 minutes et 20 secondes.',
      en: '200 ÷ 60 = 3 remainder 20. So 3 minutes and 20 seconds.',
      nl: '200 ÷ 60 = 3 rest 20. Dus 3 minuten en 20 seconden.',
    },
    commonMistake: '2',
  },
  {
    id: 'M1_013',
    category: 'M1',
    level: 3,
    text: {
      fr: 'Combien de cm² y a-t-il dans 1 m² ? (Attention : 1 m = 100 cm)',
      en: 'How many cm² are in 1 m²? (Note: 1 m = 100 cm)',
      nl: 'Hoeveel cm² zitten er in 1 m²? (Let op: 1 m = 100 cm)',
    },
    answer: 10000,
    tolerance: 0,
    hint: {
      fr: '1 m² = 100 cm × 100 cm = 10 000 cm².',
      en: '1 m² = 100 cm × 100 cm = 10,000 cm².',
      nl: '1 m² = 100 cm × 100 cm = 10.000 cm².',
    },
    commonMistake: '100',
  },
  {
    id: 'M1_014',
    category: 'M1',
    level: 3,
    text: {
      fr: 'Combien de secondes y a-t-il dans 1 heure et 15 minutes ?',
      en: 'How many seconds are in 1 hour and 15 minutes?',
      nl: 'Hoeveel seconden zitten er in 1 uur en 15 minuten?',
    },
    answer: 4500,
    tolerance: 0,
    hint: {
      fr: '1 h 15 min = 75 min. 75 × 60 = ?',
      en: '1 h 15 min = 75 min. 75 × 60 = ?',
      nl: '1 u 15 min = 75 min. 75 × 60 = ?',
    },
    commonMistake: '3600',
  },
  {
    id: 'M1_015',
    category: 'M1',
    level: 3,
    text: {
      fr: 'Convertis 3 m² en cm².',
      en: 'Convert 3 m² to cm².',
      nl: 'Reken 3 m² om naar cm².',
    },
    answer: 30000,
    tolerance: 0,
    hint: {
      fr: '1 m² = 10 000 cm². Donc 3 × 10 000.',
      en: '1 m² = 10,000 cm². So 3 × 10,000.',
      nl: '1 m² = 10.000 cm². Dus 3 × 10.000.',
    },
    commonMistake: '300',
  },
];

/**
 * Procedural generator for M1 questions.
 * @param {1|2|3} level
 * @returns {object} A single question object
 */
export function generate(level = 1) {
  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const id = `M1_gen_${Date.now()}_${rand(100, 999)}`;

  if (level === 1) {
    const conversions = [
      {
        qty: rand(1, 9),
        from: { fr: 'm', en: 'm', nl: 'm' },
        to: { fr: 'cm', en: 'cm', nl: 'cm' },
        factor: 100,
      },
      {
        qty: rand(1, 9),
        from: { fr: 'kg', en: 'kg', nl: 'kg' },
        to: { fr: 'g', en: 'g', nl: 'g' },
        factor: 1000,
      },
      {
        qty: rand(1, 20),
        from: { fr: 'cm', en: 'cm', nl: 'cm' },
        to: { fr: 'mm', en: 'mm', nl: 'mm' },
        factor: 10,
      },
    ];
    const c = conversions[rand(0, conversions.length - 1)];
    const answer = c.qty * c.factor;

    return {
      id,
      category: 'M1',
      level: 1,
      text: {
        fr: `Combien de ${c.to.fr} y a-t-il dans ${c.qty} ${c.from.fr} ?`,
        en: `How many ${c.to.en} are in ${c.qty} ${c.from.en}?`,
        nl: `Hoeveel ${c.to.nl} zit er in ${c.qty} ${c.from.nl}?`,
      },
      answer,
      tolerance: 0,
      hint: {
        fr: `1 ${c.from.fr} = ${c.factor} ${c.to.fr}.`,
        en: `1 ${c.from.en} = ${c.factor} ${c.to.en}.`,
        nl: `1 ${c.from.nl} = ${c.factor} ${c.to.nl}.`,
      },
      commonMistake: String(c.qty * (c.factor / 10)),
    };
  }

  if (level === 2) {
    const conversions = [
      {
        qty: rand(1, 9) + rand(1, 9) / 10,
        from: { fr: 'km', en: 'km', nl: 'km' },
        to: { fr: 'm', en: 'm', nl: 'm' },
        factor: 1000,
      },
      {
        qty: rand(1, 9) * 250,
        from: { fr: 'mL', en: 'mL', nl: 'mL' },
        to: { fr: 'L', en: 'L', nl: 'L' },
        factor: 0.001,
      },
      {
        qty: rand(1, 5),
        from: { fr: 'L', en: 'L', nl: 'L' },
        to: { fr: 'cL', en: 'cL', nl: 'cL' },
        factor: 100,
      },
    ];
    const c = conversions[rand(0, conversions.length - 1)];
    const answer = parseFloat((c.qty * c.factor).toFixed(4));

    return {
      id,
      category: 'M1',
      level: 2,
      text: {
        fr: `Convertis ${String(c.qty).replace('.', ',')} ${c.from.fr} en ${c.to.fr}.`,
        en: `Convert ${c.qty} ${c.from.en} to ${c.to.en}.`,
        nl: `Reken ${String(c.qty).replace('.', ',')} ${c.from.nl} om naar ${c.to.nl}.`,
      },
      answer,
      tolerance: 0,
      hint: {
        fr: `1 ${c.from.fr} = ${c.factor >= 1 ? c.factor : `1/${Math.round(1 / c.factor)}`} ${c.to.fr}.`,
        en: `1 ${c.from.en} = ${c.factor >= 1 ? c.factor : `1/${Math.round(1 / c.factor)}`} ${c.to.en}.`,
        nl: `1 ${c.from.nl} = ${c.factor >= 1 ? c.factor : `1/${Math.round(1 / c.factor)}`} ${c.to.nl}.`,
      },
      commonMistake: String(answer * 10),
    };
  }

  // Level 3: time / area
  const type = rand(0, 1);
  if (type === 0) {
    // Time: hours + minutes to total minutes
    const hours = rand(1, 4);
    const mins = rand(0, 3) * 15;
    const answer = hours * 60 + mins;

    return {
      id,
      category: 'M1',
      level: 3,
      text: {
        fr: `Combien de minutes y a-t-il dans ${hours} heure${hours > 1 ? 's' : ''} et ${mins} minutes ?`,
        en: `How many minutes are in ${hours} hour${hours > 1 ? 's' : ''} and ${mins} minutes?`,
        nl: `Hoeveel minuten zitten er in ${hours} uur en ${mins} minuten?`,
      },
      answer,
      tolerance: 0,
      hint: {
        fr: `${hours} h = ${hours} × 60 = ${hours * 60} min. Ajoute ${mins}.`,
        en: `${hours} h = ${hours} × 60 = ${hours * 60} min. Add ${mins}.`,
        nl: `${hours} u = ${hours} × 60 = ${hours * 60} min. Tel ${mins} op.`,
      },
      commonMistake: String(hours * 100 + mins),
    };
  } else {
    // Area: m² to cm²
    const sqm = rand(1, 5);
    const answer = sqm * 10000;

    return {
      id,
      category: 'M1',
      level: 3,
      text: {
        fr: `Convertis ${sqm} m² en cm².`,
        en: `Convert ${sqm} m² to cm².`,
        nl: `Reken ${sqm} m² om naar cm².`,
      },
      answer,
      tolerance: 0,
      hint: {
        fr: '1 m² = 10 000 cm² (car 100 × 100).',
        en: '1 m² = 10,000 cm² (because 100 × 100).',
        nl: '1 m² = 10.000 cm² (want 100 × 100).',
      },
      commonMistake: String(sqm * 100),
    };
  }
}
