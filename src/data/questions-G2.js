// =============================================================================
// G2 - Angles & Transformations: identification, complementary, supplementary,
//      triangle angle sum
// CE1D Belgian exam - Trilingual (FR / EN / NL)
// =============================================================================

export const questions = [
  // ── Level 1: identify angle type given degrees ────────────────────────────
  // Answer convention: 1 = acute, 2 = right, 3 = obtuse
  {
    id: 'G2_001',
    category: 'G2',
    level: 1,
    text: {
      fr: 'Un angle de 45° est-il aigu (1), droit (2) ou obtus (3) ? Réponds 1, 2 ou 3.',
      en: 'Is a 45° angle acute (1), right (2) or obtuse (3)? Answer 1, 2 or 3.',
      nl: 'Is een hoek van 45° scherp (1), recht (2) of stomp (3)? Antwoord 1, 2 of 3.',
    },
    answer: 1,
    tolerance: 0,
    hint: {
      fr: 'Un angle aigu est inférieur à 90°.',
      en: 'An acute angle is less than 90°.',
      nl: 'Een scherpe hoek is kleiner dan 90°.',
    },
    commonMistake: '2',
  },
  {
    id: 'G2_002',
    category: 'G2',
    level: 1,
    text: {
      fr: 'Un angle de 90° est-il aigu (1), droit (2) ou obtus (3) ? Réponds 1, 2 ou 3.',
      en: 'Is a 90° angle acute (1), right (2) or obtuse (3)? Answer 1, 2 or 3.',
      nl: 'Is een hoek van 90° scherp (1), recht (2) of stomp (3)? Antwoord 1, 2 of 3.',
    },
    answer: 2,
    tolerance: 0,
    hint: {
      fr: 'Un angle droit mesure exactement 90°.',
      en: 'A right angle is exactly 90°.',
      nl: 'Een rechte hoek is precies 90°.',
    },
    commonMistake: '1',
  },
  {
    id: 'G2_003',
    category: 'G2',
    level: 1,
    text: {
      fr: 'Un angle de 120° est-il aigu (1), droit (2) ou obtus (3) ? Réponds 1, 2 ou 3.',
      en: 'Is a 120° angle acute (1), right (2) or obtuse (3)? Answer 1, 2 or 3.',
      nl: 'Is een hoek van 120° scherp (1), recht (2) of stomp (3)? Antwoord 1, 2 of 3.',
    },
    answer: 3,
    tolerance: 0,
    hint: {
      fr: 'Un angle obtus est compris entre 90° et 180°.',
      en: 'An obtuse angle is between 90° and 180°.',
      nl: 'Een stompe hoek ligt tussen 90° en 180°.',
    },
    commonMistake: '2',
  },
  {
    id: 'G2_004',
    category: 'G2',
    level: 1,
    text: {
      fr: 'Un angle de 15° est-il aigu (1), droit (2) ou obtus (3) ? Réponds 1, 2 ou 3.',
      en: 'Is a 15° angle acute (1), right (2) or obtuse (3)? Answer 1, 2 or 3.',
      nl: 'Is een hoek van 15° scherp (1), recht (2) of stomp (3)? Antwoord 1, 2 of 3.',
    },
    answer: 1,
    tolerance: 0,
    hint: {
      fr: '15° < 90°, c\'est un angle aigu.',
      en: '15° < 90°, it is an acute angle.',
      nl: '15° < 90°, het is een scherpe hoek.',
    },
    commonMistake: '3',
  },
  {
    id: 'G2_005',
    category: 'G2',
    level: 1,
    text: {
      fr: 'Un angle de 175° est-il aigu (1), droit (2) ou obtus (3) ? Réponds 1, 2 ou 3.',
      en: 'Is a 175° angle acute (1), right (2) or obtuse (3)? Answer 1, 2 or 3.',
      nl: 'Is een hoek van 175° scherp (1), recht (2) of stomp (3)? Antwoord 1, 2 of 3.',
    },
    answer: 3,
    tolerance: 0,
    hint: {
      fr: '175° est compris entre 90° et 180°, c\'est un angle obtus.',
      en: '175° is between 90° and 180°, it is an obtuse angle.',
      nl: '175° ligt tussen 90° en 180°, het is een stompe hoek.',
    },
    commonMistake: '1',
  },

  // ── Level 2: complementary & supplementary ────────────────────────────────
  {
    id: 'G2_006',
    category: 'G2',
    level: 2,
    text: {
      fr: 'Deux angles sont complémentaires. L\'un mesure 35°. Combien mesure l\'autre ? (Complémentaire = somme de 90°)',
      en: 'Two angles are complementary. One measures 35°. What does the other measure? (Complementary = sum of 90°)',
      nl: 'Twee hoeken zijn complementair. De ene meet 35°. Hoeveel meet de andere? (Complementair = som van 90°)',
    },
    answer: 55,
    tolerance: 0,
    hint: {
      fr: '90° - 35° = ?',
      en: '90° - 35° = ?',
      nl: '90° - 35° = ?',
    },
    commonMistake: '145',
  },
  {
    id: 'G2_007',
    category: 'G2',
    level: 2,
    text: {
      fr: 'Deux angles sont supplémentaires. L\'un mesure 110°. Combien mesure l\'autre ? (Supplémentaire = somme de 180°)',
      en: 'Two angles are supplementary. One measures 110°. What does the other measure? (Supplementary = sum of 180°)',
      nl: 'Twee hoeken zijn supplementair. De ene meet 110°. Hoeveel meet de andere? (Supplementair = som van 180°)',
    },
    answer: 70,
    tolerance: 0,
    hint: {
      fr: '180° - 110° = ?',
      en: '180° - 110° = ?',
      nl: '180° - 110° = ?',
    },
    commonMistake: '80',
  },
  {
    id: 'G2_008',
    category: 'G2',
    level: 2,
    text: {
      fr: 'Deux angles sont complémentaires. L\'un mesure 62°. Combien mesure l\'autre ?',
      en: 'Two angles are complementary. One measures 62°. What does the other measure?',
      nl: 'Twee hoeken zijn complementair. De ene meet 62°. Hoeveel meet de andere?',
    },
    answer: 28,
    tolerance: 0,
    hint: {
      fr: '90° - 62° = ?',
      en: '90° - 62° = ?',
      nl: '90° - 62° = ?',
    },
    commonMistake: '118',
  },
  {
    id: 'G2_009',
    category: 'G2',
    level: 2,
    text: {
      fr: 'Deux angles sont supplémentaires. L\'un mesure 45°. Combien mesure l\'autre ?',
      en: 'Two angles are supplementary. One measures 45°. What does the other measure?',
      nl: 'Twee hoeken zijn supplementair. De ene meet 45°. Hoeveel meet de andere?',
    },
    answer: 135,
    tolerance: 0,
    hint: {
      fr: '180° - 45° = ?',
      en: '180° - 45° = ?',
      nl: '180° - 45° = ?',
    },
    commonMistake: '45',
  },
  {
    id: 'G2_010',
    category: 'G2',
    level: 2,
    text: {
      fr: 'Deux angles sont complémentaires. L\'un mesure 73°. Combien mesure l\'autre ?',
      en: 'Two angles are complementary. One measures 73°. What does the other measure?',
      nl: 'Twee hoeken zijn complementair. De ene meet 73°. Hoeveel meet de andere?',
    },
    answer: 17,
    tolerance: 0,
    hint: {
      fr: '90° - 73° = ?',
      en: '90° - 73° = ?',
      nl: '90° - 73° = ?',
    },
    commonMistake: '107',
  },

  // ── Level 3: triangle angle sum ───────────────────────────────────────────
  {
    id: 'G2_011',
    category: 'G2',
    level: 3,
    text: {
      fr: 'Dans un triangle, deux angles mesurent 50° et 60°. Combien mesure le troisième angle ? (Somme = 180°)',
      en: 'In a triangle, two angles measure 50° and 60°. What does the third angle measure? (Sum = 180°)',
      nl: 'In een driehoek meten twee hoeken 50° en 60°. Hoeveel meet de derde hoek? (Som = 180°)',
    },
    answer: 70,
    tolerance: 0,
    hint: {
      fr: '180° - 50° - 60° = ?',
      en: '180° - 50° - 60° = ?',
      nl: '180° - 50° - 60° = ?',
    },
    commonMistake: '110',
  },
  {
    id: 'G2_012',
    category: 'G2',
    level: 3,
    text: {
      fr: 'Un triangle isocèle a un angle au sommet de 40°. Combien mesure chacun des deux angles de base ?',
      en: 'An isosceles triangle has an apex angle of 40°. What does each base angle measure?',
      nl: 'Een gelijkbenige driehoek heeft een tophoek van 40°. Hoeveel meet elke basishoek?',
    },
    answer: 70,
    tolerance: 0,
    hint: {
      fr: 'Les deux angles de base sont égaux. (180° - 40°) ÷ 2 = ?',
      en: 'The two base angles are equal. (180° - 40°) ÷ 2 = ?',
      nl: 'De twee basishoeken zijn gelijk. (180° - 40°) ÷ 2 = ?',
    },
    commonMistake: '80',
  },
  {
    id: 'G2_013',
    category: 'G2',
    level: 3,
    text: {
      fr: 'Dans un triangle rectangle, un des angles aigus mesure 37°. Combien mesure l\'autre angle aigu ?',
      en: 'In a right triangle, one of the acute angles measures 37°. What does the other acute angle measure?',
      nl: 'In een rechthoekige driehoek meet een van de scherpe hoeken 37°. Hoeveel meet de andere scherpe hoek?',
    },
    answer: 53,
    tolerance: 0,
    hint: {
      fr: 'Triangle rectangle : un angle = 90°. Donc 180° - 90° - 37° = ?',
      en: 'Right triangle: one angle = 90°. So 180° - 90° - 37° = ?',
      nl: 'Rechthoekige driehoek: een hoek = 90°. Dus 180° - 90° - 37° = ?',
    },
    commonMistake: '63',
  },
  {
    id: 'G2_014',
    category: 'G2',
    level: 3,
    text: {
      fr: 'Un triangle a des angles de 85°, 55° et x°. Quelle est la valeur de x ?',
      en: 'A triangle has angles of 85°, 55° and x°. What is the value of x?',
      nl: 'Een driehoek heeft hoeken van 85°, 55° en x°. Wat is de waarde van x?',
    },
    answer: 40,
    tolerance: 0,
    hint: {
      fr: 'x = 180° - 85° - 55°.',
      en: 'x = 180° - 85° - 55°.',
      nl: 'x = 180° - 85° - 55°.',
    },
    commonMistake: '60',
  },
  {
    id: 'G2_015',
    category: 'G2',
    level: 3,
    text: {
      fr: 'Un triangle équilatéral a tous ses côtés égaux. Combien mesure chaque angle ?',
      en: 'An equilateral triangle has all sides equal. What does each angle measure?',
      nl: 'Een gelijkzijdige driehoek heeft alle zijden gelijk. Hoeveel meet elke hoek?',
    },
    answer: 60,
    tolerance: 0,
    hint: {
      fr: 'Les 3 angles sont égaux et leur somme vaut 180°. 180 ÷ 3 = ?',
      en: 'All 3 angles are equal and their sum is 180°. 180 ÷ 3 = ?',
      nl: 'Alle 3 hoeken zijn gelijk en hun som is 180°. 180 ÷ 3 = ?',
    },
    commonMistake: '90',
  },
  {
    id: 'G2_016',
    category: 'G2',
    level: 3,
    text: {
      fr: 'Deux droites parallèles sont coupées par une sécante. Un angle alterne-interne mesure 65°. Combien mesure l\'autre angle alterne-interne ?',
      en: 'Two parallel lines are cut by a transversal. One alternate interior angle measures 65°. What does the other alternate interior angle measure?',
      nl: 'Twee evenwijdige lijnen worden gesneden door een snijlijn. Een overstaande hoek meet 65°. Hoeveel meet de andere overstaande hoek?',
    },
    answer: 65,
    tolerance: 0,
    hint: {
      fr: 'Les angles alternes-internes sont égaux entre droites parallèles.',
      en: 'Alternate interior angles are equal between parallel lines.',
      nl: 'Overstaande hoeken zijn gelijk bij evenwijdige lijnen.',
    },
    commonMistake: '115',
  },
];

/**
 * Procedural generator for G2 questions.
 * @param {1|2|3} level
 * @returns {object} A single question object
 */
export function generate(level = 1) {
  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const id = `G2_gen_${Date.now()}_${rand(100, 999)}`;

  if (level === 1) {
    // Identify angle type
    const angleTypes = [
      { range: [1, 89], type: 1, name: { fr: 'aigu', en: 'acute', nl: 'scherp' } },
      { range: [91, 179], type: 3, name: { fr: 'obtus', en: 'obtuse', nl: 'stomp' } },
    ];
    const chosen = angleTypes[rand(0, 1)];
    const angle = rand(chosen.range[0], chosen.range[1]);

    return {
      id,
      category: 'G2',
      level: 1,
      text: {
        fr: `Un angle de ${angle}° est-il aigu (1), droit (2) ou obtus (3) ? Réponds 1, 2 ou 3.`,
        en: `Is a ${angle}° angle acute (1), right (2) or obtuse (3)? Answer 1, 2 or 3.`,
        nl: `Is een hoek van ${angle}° scherp (1), recht (2) of stomp (3)? Antwoord 1, 2 of 3.`,
      },
      answer: chosen.type,
      tolerance: 0,
      hint: {
        fr: `Un angle ${chosen.name.fr} est ${chosen.type === 1 ? 'inférieur à' : 'compris entre 90° et'} ${chosen.type === 1 ? '90°' : '180°'}.`,
        en: `An ${chosen.name.en} angle is ${chosen.type === 1 ? 'less than' : 'between 90° and'} ${chosen.type === 1 ? '90°' : '180°'}.`,
        nl: `Een ${chosen.name.nl}e hoek is ${chosen.type === 1 ? 'kleiner dan' : 'tussen 90° en'} ${chosen.type === 1 ? '90°' : '180°'}.`,
      },
      commonMistake: String(chosen.type === 1 ? 3 : 1),
    };
  }

  if (level === 2) {
    // Complementary or supplementary
    const isComplementary = Math.random() < 0.5;
    const total = isComplementary ? 90 : 180;
    const given = rand(10, total - 10);
    const answer = total - given;

    return {
      id,
      category: 'G2',
      level: 2,
      text: {
        fr: isComplementary
          ? `Deux angles sont complémentaires. L'un mesure ${given}°. Combien mesure l'autre ?`
          : `Deux angles sont supplémentaires. L'un mesure ${given}°. Combien mesure l'autre ?`,
        en: isComplementary
          ? `Two angles are complementary. One measures ${given}°. What does the other measure?`
          : `Two angles are supplementary. One measures ${given}°. What does the other measure?`,
        nl: isComplementary
          ? `Twee hoeken zijn complementair. De ene meet ${given}°. Hoeveel meet de andere?`
          : `Twee hoeken zijn supplementair. De ene meet ${given}°. Hoeveel meet de andere?`,
      },
      answer,
      tolerance: 0,
      hint: {
        fr: `${total}° - ${given}° = ?`,
        en: `${total}° - ${given}° = ?`,
        nl: `${total}° - ${given}° = ?`,
      },
      commonMistake: String(isComplementary ? 180 - given : 90 - Math.abs(given - 90)),
    };
  }

  // Level 3: triangle angle sum
  const a1 = rand(20, 80);
  const a2 = rand(20, 160 - a1 - 10);
  const answer = 180 - a1 - a2;

  return {
    id,
    category: 'G2',
    level: 3,
    text: {
      fr: `Dans un triangle, deux angles mesurent ${a1}° et ${a2}°. Combien mesure le troisième angle ?`,
      en: `In a triangle, two angles measure ${a1}° and ${a2}°. What does the third angle measure?`,
      nl: `In een driehoek meten twee hoeken ${a1}° en ${a2}°. Hoeveel meet de derde hoek?`,
    },
    answer,
    tolerance: 0,
    hint: {
      fr: `La somme des angles d'un triangle = 180°. 180 - ${a1} - ${a2} = ?`,
      en: `The sum of angles in a triangle = 180°. 180 - ${a1} - ${a2} = ?`,
      nl: `De som van de hoeken in een driehoek = 180°. 180 - ${a1} - ${a2} = ?`,
    },
    commonMistake: String(a1 + a2),
  };
}
