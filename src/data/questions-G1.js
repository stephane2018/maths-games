// =============================================================================
// G1 - Plane Geometry: perimeter & area of rectangles, squares, triangles
// CE1D Belgian exam - Trilingual (FR / EN / NL)
// =============================================================================

export const questions = [
  // ── Level 1: perimeter ────────────────────────────────────────────────────
  {
    id: 'G1_001',
    category: 'G1',
    level: 1,
    text: {
      fr: 'Quel est le périmètre d\'un carré de côté 5 cm ? (P = 4 × côté)',
      en: 'What is the perimeter of a square with side 5 cm? (P = 4 × side)',
      nl: 'Wat is de omtrek van een vierkant met zijde 5 cm? (O = 4 × zijde)',
    },
    answer: 20,
    tolerance: 0,
    hint: {
      fr: 'Périmètre du carré = 4 × côté = 4 × 5.',
      en: 'Perimeter of square = 4 × side = 4 × 5.',
      nl: 'Omtrek van vierkant = 4 × zijde = 4 × 5.',
    },
    commonMistake: '25',
  },
  {
    id: 'G1_002',
    category: 'G1',
    level: 1,
    text: {
      fr: 'Quel est le périmètre d\'un rectangle de longueur 8 cm et largeur 3 cm ? (P = 2 × (L + l))',
      en: 'What is the perimeter of a rectangle with length 8 cm and width 3 cm? (P = 2 × (L + W))',
      nl: 'Wat is de omtrek van een rechthoek met lengte 8 cm en breedte 3 cm? (O = 2 × (L + B))',
    },
    answer: 22,
    tolerance: 0,
    hint: {
      fr: 'P = 2 × (8 + 3) = 2 × 11.',
      en: 'P = 2 × (8 + 3) = 2 × 11.',
      nl: 'O = 2 × (8 + 3) = 2 × 11.',
    },
    commonMistake: '24',
  },
  {
    id: 'G1_003',
    category: 'G1',
    level: 1,
    text: {
      fr: 'Quel est le périmètre d\'un triangle dont les côtés mesurent 4 cm, 5 cm et 6 cm ?',
      en: 'What is the perimeter of a triangle with sides 4 cm, 5 cm and 6 cm?',
      nl: 'Wat is de omtrek van een driehoek met zijden 4 cm, 5 cm en 6 cm?',
    },
    answer: 15,
    tolerance: 0,
    hint: {
      fr: 'Périmètre du triangle = somme des trois côtés.',
      en: 'Perimeter of triangle = sum of all three sides.',
      nl: 'Omtrek van driehoek = som van de drie zijden.',
    },
    commonMistake: '20',
  },
  {
    id: 'G1_004',
    category: 'G1',
    level: 1,
    text: {
      fr: 'Quel est le périmètre d\'un carré de côté 12 cm ?',
      en: 'What is the perimeter of a square with side 12 cm?',
      nl: 'Wat is de omtrek van een vierkant met zijde 12 cm?',
    },
    answer: 48,
    tolerance: 0,
    hint: {
      fr: 'P = 4 × 12.',
      en: 'P = 4 × 12.',
      nl: 'O = 4 × 12.',
    },
    commonMistake: '144',
  },
  {
    id: 'G1_005',
    category: 'G1',
    level: 1,
    text: {
      fr: 'Un rectangle a un périmètre de 30 cm et une longueur de 10 cm. Quelle est sa largeur ?',
      en: 'A rectangle has a perimeter of 30 cm and a length of 10 cm. What is its width?',
      nl: 'Een rechthoek heeft een omtrek van 30 cm en een lengte van 10 cm. Wat is de breedte?',
    },
    answer: 5,
    tolerance: 0,
    hint: {
      fr: 'P = 2 × (L + l), donc 30 = 2 × (10 + l), 15 = 10 + l.',
      en: 'P = 2 × (L + W), so 30 = 2 × (10 + W), 15 = 10 + W.',
      nl: 'O = 2 × (L + B), dus 30 = 2 × (10 + B), 15 = 10 + B.',
    },
    commonMistake: '10',
  },

  // ── Level 2: area (simple shapes) ─────────────────────────────────────────
  {
    id: 'G1_006',
    category: 'G1',
    level: 2,
    text: {
      fr: 'Quelle est l\'aire d\'un carré de côté 7 cm ? (A = côté × côté)',
      en: 'What is the area of a square with side 7 cm? (A = side × side)',
      nl: 'Wat is de oppervlakte van een vierkant met zijde 7 cm? (O = zijde × zijde)',
    },
    answer: 49,
    tolerance: 0,
    hint: {
      fr: 'A = 7 × 7 = 49 cm².',
      en: 'A = 7 × 7 = 49 cm².',
      nl: 'O = 7 × 7 = 49 cm².',
    },
    commonMistake: '28',
  },
  {
    id: 'G1_007',
    category: 'G1',
    level: 2,
    text: {
      fr: 'Quelle est l\'aire d\'un rectangle de longueur 9 cm et largeur 4 cm ? (A = L × l)',
      en: 'What is the area of a rectangle with length 9 cm and width 4 cm? (A = L × W)',
      nl: 'Wat is de oppervlakte van een rechthoek met lengte 9 cm en breedte 4 cm? (O = L × B)',
    },
    answer: 36,
    tolerance: 0,
    hint: {
      fr: 'A = 9 × 4.',
      en: 'A = 9 × 4.',
      nl: 'O = 9 × 4.',
    },
    commonMistake: '26',
  },
  {
    id: 'G1_008',
    category: 'G1',
    level: 2,
    text: {
      fr: 'Quelle est l\'aire d\'un triangle de base 10 cm et hauteur 6 cm ? (A = base × hauteur ÷ 2)',
      en: 'What is the area of a triangle with base 10 cm and height 6 cm? (A = base × height ÷ 2)',
      nl: 'Wat is de oppervlakte van een driehoek met basis 10 cm en hoogte 6 cm? (O = basis × hoogte ÷ 2)',
    },
    answer: 30,
    tolerance: 0,
    hint: {
      fr: 'A = (10 × 6) ÷ 2 = 60 ÷ 2.',
      en: 'A = (10 × 6) ÷ 2 = 60 ÷ 2.',
      nl: 'O = (10 × 6) ÷ 2 = 60 ÷ 2.',
    },
    commonMistake: '60',
  },
  {
    id: 'G1_009',
    category: 'G1',
    level: 2,
    text: {
      fr: 'Un rectangle a une aire de 48 cm² et une longueur de 8 cm. Quelle est sa largeur ?',
      en: 'A rectangle has an area of 48 cm² and a length of 8 cm. What is its width?',
      nl: 'Een rechthoek heeft een oppervlakte van 48 cm² en een lengte van 8 cm. Wat is de breedte?',
    },
    answer: 6,
    tolerance: 0,
    hint: {
      fr: 'l = A ÷ L = 48 ÷ 8.',
      en: 'W = A ÷ L = 48 ÷ 8.',
      nl: 'B = O ÷ L = 48 ÷ 8.',
    },
    commonMistake: '40',
  },
  {
    id: 'G1_010',
    category: 'G1',
    level: 2,
    text: {
      fr: 'Quelle est l\'aire d\'un triangle rectangle dont les deux côtés de l\'angle droit mesurent 8 cm et 5 cm ?',
      en: 'What is the area of a right triangle whose two sides forming the right angle measure 8 cm and 5 cm?',
      nl: 'Wat is de oppervlakte van een rechthoekige driehoek waarvan de twee zijden van de rechte hoek 8 cm en 5 cm meten?',
    },
    answer: 20,
    tolerance: 0,
    hint: {
      fr: 'A = (8 × 5) ÷ 2 = 40 ÷ 2.',
      en: 'A = (8 × 5) ÷ 2 = 40 ÷ 2.',
      nl: 'O = (8 × 5) ÷ 2 = 40 ÷ 2.',
    },
    commonMistake: '40',
  },

  // ── Level 3: composite figures ────────────────────────────────────────────
  {
    id: 'G1_011',
    category: 'G1',
    level: 3,
    text: {
      fr: 'Une figure en L est composée de deux rectangles : l\'un de 6 cm × 4 cm, l\'autre de 3 cm × 2 cm. Quelle est l\'aire totale ?',
      en: 'An L-shaped figure is made of two rectangles: one 6 cm × 4 cm, the other 3 cm × 2 cm. What is the total area?',
      nl: 'Een L-vormige figuur bestaat uit twee rechthoeken: een van 6 cm × 4 cm, de andere van 3 cm × 2 cm. Wat is de totale oppervlakte?',
    },
    answer: 30,
    tolerance: 0,
    hint: {
      fr: 'Additionne les aires : (6 × 4) + (3 × 2) = 24 + 6.',
      en: 'Add the areas: (6 × 4) + (3 × 2) = 24 + 6.',
      nl: 'Tel de oppervlakten op: (6 × 4) + (3 × 2) = 24 + 6.',
    },
    commonMistake: '24',
  },
  {
    id: 'G1_012',
    category: 'G1',
    level: 3,
    text: {
      fr: 'Un carré de côté 10 cm a un carré de côté 3 cm découpé dans un coin. Quelle est l\'aire restante ?',
      en: 'A square with side 10 cm has a square with side 3 cm cut from one corner. What is the remaining area?',
      nl: 'Een vierkant met zijde 10 cm heeft een vierkant met zijde 3 cm uit een hoek gesneden. Wat is de resterende oppervlakte?',
    },
    answer: 91,
    tolerance: 0,
    hint: {
      fr: 'Aire du grand carré - aire du petit carré : 10² - 3² = 100 - 9.',
      en: 'Area of big square - area of small square: 10² - 3² = 100 - 9.',
      nl: 'Oppervlakte groot vierkant - oppervlakte klein vierkant: 10² - 3² = 100 - 9.',
    },
    commonMistake: '100',
  },
  {
    id: 'G1_013',
    category: 'G1',
    level: 3,
    text: {
      fr: 'Un rectangle de 12 cm × 8 cm contient un triangle rectangle (base 12 cm, hauteur 8 cm). Quelle est l\'aire du triangle ?',
      en: 'A rectangle 12 cm × 8 cm contains a right triangle (base 12 cm, height 8 cm). What is the area of the triangle?',
      nl: 'Een rechthoek van 12 cm × 8 cm bevat een rechthoekige driehoek (basis 12 cm, hoogte 8 cm). Wat is de oppervlakte van de driehoek?',
    },
    answer: 48,
    tolerance: 0,
    hint: {
      fr: 'Le triangle occupe la moitié du rectangle : (12 × 8) ÷ 2.',
      en: 'The triangle occupies half the rectangle: (12 × 8) ÷ 2.',
      nl: 'De driehoek neemt de helft van de rechthoek in: (12 × 8) ÷ 2.',
    },
    commonMistake: '96',
  },
  {
    id: 'G1_014',
    category: 'G1',
    level: 3,
    text: {
      fr: 'Une figure est composée d\'un rectangle (10 cm × 5 cm) surmonté d\'un triangle (base 10 cm, hauteur 4 cm). Quelle est l\'aire totale ?',
      en: 'A figure is made of a rectangle (10 cm × 5 cm) topped by a triangle (base 10 cm, height 4 cm). What is the total area?',
      nl: 'Een figuur bestaat uit een rechthoek (10 cm × 5 cm) met daarop een driehoek (basis 10 cm, hoogte 4 cm). Wat is de totale oppervlakte?',
    },
    answer: 70,
    tolerance: 0,
    hint: {
      fr: 'Rectangle : 10 × 5 = 50. Triangle : (10 × 4) ÷ 2 = 20. Total : 50 + 20.',
      en: 'Rectangle: 10 × 5 = 50. Triangle: (10 × 4) ÷ 2 = 20. Total: 50 + 20.',
      nl: 'Rechthoek: 10 × 5 = 50. Driehoek: (10 × 4) ÷ 2 = 20. Totaal: 50 + 20.',
    },
    commonMistake: '50',
  },
  {
    id: 'G1_015',
    category: 'G1',
    level: 3,
    text: {
      fr: 'Quel est le périmètre d\'une figure en forme de T composée d\'un rectangle horizontal (10 cm × 2 cm) et d\'un rectangle vertical centré (2 cm × 6 cm) ? Les dimensions extérieures seulement.',
      en: 'What is the perimeter of a T-shaped figure made of a horizontal rectangle (10 cm × 2 cm) and a centered vertical rectangle (2 cm × 6 cm)? External dimensions only.',
      nl: 'Wat is de omtrek van een T-vormige figuur bestaande uit een horizontale rechthoek (10 cm × 2 cm) en een gecentreerde verticale rechthoek (2 cm × 6 cm)? Alleen buitenafmetingen.',
    },
    answer: 36,
    tolerance: 0,
    hint: {
      fr: 'Trace le contour extérieur : haut 10, descente 2, droite 4, descente 6, gauche 2, montée 6, droite 4, montée 2. Total : 10+2+4+6+2+6+4+2 = 36.',
      en: 'Trace the outer edge: top 10, down 2, right 4, down 6, left 2, up 6, right 4, up 2. Total: 10+2+4+6+2+6+4+2 = 36.',
      nl: 'Volg de buitenrand: boven 10, omlaag 2, rechts 4, omlaag 6, links 2, omhoog 6, rechts 4, omhoog 2. Totaal: 10+2+4+6+2+6+4+2 = 36.',
    },
    commonMistake: '32',
  },
];

/**
 * Procedural generator for G1 questions.
 * @param {1|2|3} level
 * @returns {object} A single question object
 */
export function generate(level = 1) {
  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const id = `G1_gen_${Date.now()}_${rand(100, 999)}`;

  if (level === 1) {
    // Perimeter of square or rectangle
    const isSquare = Math.random() < 0.5;
    if (isSquare) {
      const side = rand(3, 20);
      const answer = 4 * side;
      return {
        id,
        category: 'G1',
        level: 1,
        text: {
          fr: `Quel est le périmètre d'un carré de côté ${side} cm ? (P = 4 × côté)`,
          en: `What is the perimeter of a square with side ${side} cm? (P = 4 × side)`,
          nl: `Wat is de omtrek van een vierkant met zijde ${side} cm? (O = 4 × zijde)`,
        },
        answer,
        tolerance: 0,
        hint: {
          fr: `P = 4 × ${side}.`,
          en: `P = 4 × ${side}.`,
          nl: `O = 4 × ${side}.`,
        },
        commonMistake: String(side * side),
      };
    } else {
      const length = rand(5, 20);
      const width = rand(2, length - 1);
      const answer = 2 * (length + width);
      return {
        id,
        category: 'G1',
        level: 1,
        text: {
          fr: `Quel est le périmètre d'un rectangle de longueur ${length} cm et largeur ${width} cm ? (P = 2 × (L + l))`,
          en: `What is the perimeter of a rectangle with length ${length} cm and width ${width} cm? (P = 2 × (L + W))`,
          nl: `Wat is de omtrek van een rechthoek met lengte ${length} cm en breedte ${width} cm? (O = 2 × (L + B))`,
        },
        answer,
        tolerance: 0,
        hint: {
          fr: `P = 2 × (${length} + ${width}).`,
          en: `P = 2 × (${length} + ${width}).`,
          nl: `O = 2 × (${length} + ${width}).`,
        },
        commonMistake: String(length * width),
      };
    }
  }

  if (level === 2) {
    // Area of square, rectangle or triangle
    const shape = rand(0, 2);
    if (shape === 0) {
      const side = rand(3, 15);
      const answer = side * side;
      return {
        id,
        category: 'G1',
        level: 2,
        text: {
          fr: `Quelle est l'aire d'un carré de côté ${side} cm ? (A = côté²)`,
          en: `What is the area of a square with side ${side} cm? (A = side²)`,
          nl: `Wat is de oppervlakte van een vierkant met zijde ${side} cm? (O = zijde²)`,
        },
        answer,
        tolerance: 0,
        hint: {
          fr: `A = ${side} × ${side}.`,
          en: `A = ${side} × ${side}.`,
          nl: `O = ${side} × ${side}.`,
        },
        commonMistake: String(4 * side),
      };
    } else if (shape === 1) {
      const length = rand(4, 15);
      const width = rand(2, 12);
      const answer = length * width;
      return {
        id,
        category: 'G1',
        level: 2,
        text: {
          fr: `Quelle est l'aire d'un rectangle de longueur ${length} cm et largeur ${width} cm ? (A = L × l)`,
          en: `What is the area of a rectangle with length ${length} cm and width ${width} cm? (A = L × W)`,
          nl: `Wat is de oppervlakte van een rechthoek met lengte ${length} cm en breedte ${width} cm? (O = L × B)`,
        },
        answer,
        tolerance: 0,
        hint: {
          fr: `A = ${length} × ${width}.`,
          en: `A = ${length} × ${width}.`,
          nl: `O = ${length} × ${width}.`,
        },
        commonMistake: String(2 * (length + width)),
      };
    } else {
      const base = rand(4, 16);
      const height = rand(3, 12);
      const answer = (base * height) / 2;
      return {
        id,
        category: 'G1',
        level: 2,
        text: {
          fr: `Quelle est l'aire d'un triangle de base ${base} cm et hauteur ${height} cm ? (A = base × hauteur ÷ 2)`,
          en: `What is the area of a triangle with base ${base} cm and height ${height} cm? (A = base × height ÷ 2)`,
          nl: `Wat is de oppervlakte van een driehoek met basis ${base} cm en hoogte ${height} cm? (O = basis × hoogte ÷ 2)`,
        },
        answer,
        tolerance: 0,
        hint: {
          fr: `A = (${base} × ${height}) ÷ 2.`,
          en: `A = (${base} × ${height}) ÷ 2.`,
          nl: `O = (${base} × ${height}) ÷ 2.`,
        },
        commonMistake: String(base * height),
      };
    }
  }

  // Level 3: composite figures
  const rectL = rand(8, 15);
  const rectW = rand(3, 7);
  const cutSide = rand(2, Math.min(rectL, rectW) - 1);
  const rectArea = rectL * rectW;
  const cutArea = cutSide * cutSide;
  const answer = rectArea - cutArea;

  return {
    id,
    category: 'G1',
    level: 3,
    text: {
      fr: `Un rectangle de ${rectL} cm × ${rectW} cm a un carré de côté ${cutSide} cm découpé dans un coin. Quelle est l'aire restante ?`,
      en: `A rectangle of ${rectL} cm × ${rectW} cm has a square with side ${cutSide} cm cut from a corner. What is the remaining area?`,
      nl: `Een rechthoek van ${rectL} cm × ${rectW} cm heeft een vierkant met zijde ${cutSide} cm uit een hoek gesneden. Wat is de resterende oppervlakte?`,
    },
    answer,
    tolerance: 0,
    hint: {
      fr: `Aire du rectangle - aire du carré : (${rectL} × ${rectW}) - (${cutSide} × ${cutSide}).`,
      en: `Rectangle area - square area: (${rectL} × ${rectW}) - (${cutSide} × ${cutSide}).`,
      nl: `Oppervlakte rechthoek - oppervlakte vierkant: (${rectL} × ${rectW}) - (${cutSide} × ${cutSide}).`,
    },
    commonMistake: String(rectArea),
  };
}
