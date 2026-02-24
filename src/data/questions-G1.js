// =============================================================================
// G1 - Perimètres et distances
// CE1D Belgian exam - Trilingual (FR / EN / NL)
// 111 hand-crafted questions across 3 difficulty levels
// =============================================================================

export const questions = [

  // ===========================================================================
  // LEVEL 1 — Simple perimeters: rectangles, squares, equilateral triangles
  // (~17 questions: G1_s_1 through G1_s_17)
  // ===========================================================================

  // --- Rectangles ---
  {
    id: "G1_s_1", category: "G1", level: 1,
    text: {
      fr: "Calcule le périmètre d'un rectangle de 8 cm de longueur et 5 cm de largeur.",
      en: "Calculate the perimeter of a rectangle with length 8 cm and width 5 cm.",
      nl: "Bereken de omtrek van een rechthoek met lengte 8 cm en breedte 5 cm."
    },
    answer: 26, tolerance: 0, unit: "cm",
    hint: {
      fr: "Périmètre = 2 . (longueur + largeur) = 2 . (8 + 5).",
      en: "Perimeter = 2 . (length + width) = 2 . (8 + 5).",
      nl: "Omtrek = 2 . (lengte + breedte) = 2 . (8 + 5)."
    }
  },
  {
    id: "G1_s_2", category: "G1", level: 1,
    text: {
      fr: "Un rectangle mesure 12 cm de long et 4 cm de large. Quel est son périmètre ?",
      en: "A rectangle is 12 cm long and 4 cm wide. What is its perimeter?",
      nl: "Een rechthoek is 12 cm lang en 4 cm breed. Wat is de omtrek?"
    },
    answer: 32, tolerance: 0, unit: "cm",
    hint: {
      fr: "P = 2 . (12 + 4).",
      en: "P = 2 . (12 + 4).",
      nl: "P = 2 . (12 + 4)."
    }
  },
  {
    id: "G1_s_3", category: "G1", level: 1,
    text: {
      fr: "Calcule le périmètre d'un rectangle de 15 cm sur 7 cm.",
      en: "Calculate the perimeter of a 15 cm by 7 cm rectangle.",
      nl: "Bereken de omtrek van een rechthoek van 15 cm op 7 cm."
    },
    answer: 44, tolerance: 0, unit: "cm",
    hint: {
      fr: "P = 2 . (15 + 7) = 2 . 22.",
      en: "P = 2 . (15 + 7) = 2 . 22.",
      nl: "P = 2 . (15 + 7) = 2 . 22."
    }
  },
  {
    id: "G1_s_4", category: "G1", level: 1,
    text: {
      fr: "Un rectangle a une longueur de 10 cm et une largeur de 3 cm. Calcule son périmètre.",
      en: "A rectangle has a length of 10 cm and a width of 3 cm. Calculate its perimeter.",
      nl: "Een rechthoek heeft een lengte van 10 cm en een breedte van 3 cm. Bereken de omtrek."
    },
    answer: 26, tolerance: 0, unit: "cm",
    hint: {
      fr: "P = 2 . (10 + 3).",
      en: "P = 2 . (10 + 3).",
      nl: "P = 2 . (10 + 3)."
    }
  },
  {
    id: "G1_s_5", category: "G1", level: 1,
    text: {
      fr: "Quel est le périmètre d'un rectangle de 6 cm sur 9 cm ?",
      en: "What is the perimeter of a 6 cm by 9 cm rectangle?",
      nl: "Wat is de omtrek van een rechthoek van 6 cm op 9 cm?"
    },
    answer: 30, tolerance: 0, unit: "cm",
    hint: {
      fr: "P = 2 . (6 + 9) = 2 . 15.",
      en: "P = 2 . (6 + 9) = 2 . 15.",
      nl: "P = 2 . (6 + 9) = 2 . 15."
    }
  },

  // --- Squares ---
  {
    id: "G1_s_6", category: "G1", level: 1,
    text: {
      fr: "Calcule le périmètre d'un carré de côté 7 cm.",
      en: "Calculate the perimeter of a square with side 7 cm.",
      nl: "Bereken de omtrek van een vierkant met zijde 7 cm."
    },
    answer: 28, tolerance: 0, unit: "cm",
    hint: {
      fr: "Périmètre d'un carré = 4 . côté = 4 . 7.",
      en: "Perimeter of a square = 4 . side = 4 . 7.",
      nl: "Omtrek van een vierkant = 4 . zijde = 4 . 7."
    }
  },
  {
    id: "G1_s_7", category: "G1", level: 1,
    text: {
      fr: "Un carré a un côté de 11 cm. Quel est son périmètre ?",
      en: "A square has a side of 11 cm. What is its perimeter?",
      nl: "Een vierkant heeft een zijde van 11 cm. Wat is de omtrek?"
    },
    answer: 44, tolerance: 0, unit: "cm",
    hint: {
      fr: "P = 4 . 11.",
      en: "P = 4 . 11.",
      nl: "P = 4 . 11."
    }
  },
  {
    id: "G1_s_8", category: "G1", level: 1,
    text: {
      fr: "Calcule le périmètre d'un carré dont le côté mesure 5 cm.",
      en: "Calculate the perimeter of a square whose side measures 5 cm.",
      nl: "Bereken de omtrek van een vierkant waarvan de zijde 5 cm is."
    },
    answer: 20, tolerance: 0, unit: "cm",
    hint: {
      fr: "P = 4 . 5.",
      en: "P = 4 . 5.",
      nl: "P = 4 . 5."
    }
  },
  {
    id: "G1_s_9", category: "G1", level: 1,
    text: {
      fr: "Un carré a un côté de 15 cm. Quel est son périmètre ?",
      en: "A square has a side of 15 cm. What is its perimeter?",
      nl: "Een vierkant heeft een zijde van 15 cm. Wat is de omtrek?"
    },
    answer: 60, tolerance: 0, unit: "cm",
    hint: {
      fr: "P = 4 . 15.",
      en: "P = 4 . 15.",
      nl: "P = 4 . 15."
    }
  },

  // --- Equilateral triangles ---
  {
    id: "G1_s_10", category: "G1", level: 1,
    text: {
      fr: "Calcule le périmètre d'un triangle équilatéral de côté 9 cm.",
      en: "Calculate the perimeter of an equilateral triangle with side 9 cm.",
      nl: "Bereken de omtrek van een gelijkzijdige driehoek met zijde 9 cm."
    },
    answer: 27, tolerance: 0, unit: "cm",
    hint: {
      fr: "Périmètre d'un triangle équilatéral = 3 . côté = 3 . 9.",
      en: "Perimeter of an equilateral triangle = 3 . side = 3 . 9.",
      nl: "Omtrek van een gelijkzijdige driehoek = 3 . zijde = 3 . 9."
    }
  },
  {
    id: "G1_s_11", category: "G1", level: 1,
    text: {
      fr: "Un triangle équilatéral a un côté de 6 cm. Quel est son périmètre ?",
      en: "An equilateral triangle has a side of 6 cm. What is its perimeter?",
      nl: "Een gelijkzijdige driehoek heeft een zijde van 6 cm. Wat is de omtrek?"
    },
    answer: 18, tolerance: 0, unit: "cm",
    hint: {
      fr: "P = 3 . 6.",
      en: "P = 3 . 6.",
      nl: "P = 3 . 6."
    }
  },
  {
    id: "G1_s_12", category: "G1", level: 1,
    text: {
      fr: "Calcule le périmètre d'un triangle équilatéral dont chaque côté mesure 14 cm.",
      en: "Calculate the perimeter of an equilateral triangle where each side is 14 cm.",
      nl: "Bereken de omtrek van een gelijkzijdige driehoek waarvan elke zijde 14 cm is."
    },
    answer: 42, tolerance: 0, unit: "cm",
    hint: {
      fr: "P = 3 . 14.",
      en: "P = 3 . 14.",
      nl: "P = 3 . 14."
    }
  },

  // --- Mixed simple shapes ---
  {
    id: "G1_s_13", category: "G1", level: 1,
    text: {
      fr: "Un rectangle mesure 20 cm de long et 10 cm de large. Quel est son périmètre ?",
      en: "A rectangle is 20 cm long and 10 cm wide. What is its perimeter?",
      nl: "Een rechthoek is 20 cm lang en 10 cm breed. Wat is de omtrek?"
    },
    answer: 60, tolerance: 0, unit: "cm",
    hint: {
      fr: "P = 2 . (20 + 10).",
      en: "P = 2 . (20 + 10).",
      nl: "P = 2 . (20 + 10)."
    }
  },
  {
    id: "G1_s_14", category: "G1", level: 1,
    text: {
      fr: "Calcule le périmètre d'un carré de côté 9 cm.",
      en: "Calculate the perimeter of a square with side 9 cm.",
      nl: "Bereken de omtrek van een vierkant met zijde 9 cm."
    },
    answer: 36, tolerance: 0, unit: "cm",
    hint: {
      fr: "P = 4 . 9.",
      en: "P = 4 . 9.",
      nl: "P = 4 . 9."
    }
  },
  {
    id: "G1_s_15", category: "G1", level: 1,
    text: {
      fr: "Un triangle équilatéral a un côté de 10 cm. Calcule son périmètre.",
      en: "An equilateral triangle has a side of 10 cm. Calculate its perimeter.",
      nl: "Een gelijkzijdige driehoek heeft een zijde van 10 cm. Bereken de omtrek."
    },
    answer: 30, tolerance: 0, unit: "cm",
    hint: {
      fr: "P = 3 . 10.",
      en: "P = 3 . 10.",
      nl: "P = 3 . 10."
    }
  },
  {
    id: "G1_s_16", category: "G1", level: 1,
    text: {
      fr: "Calcule le périmètre d'un rectangle de 18 cm de longueur et 6 cm de largeur.",
      en: "Calculate the perimeter of a rectangle with length 18 cm and width 6 cm.",
      nl: "Bereken de omtrek van een rechthoek met lengte 18 cm en breedte 6 cm."
    },
    answer: 48, tolerance: 0, unit: "cm",
    hint: {
      fr: "P = 2 . (18 + 6) = 2 . 24.",
      en: "P = 2 . (18 + 6) = 2 . 24.",
      nl: "P = 2 . (18 + 6) = 2 . 24."
    }
  },
  {
    id: "G1_s_17", category: "G1", level: 1,
    text: {
      fr: "Un carré a un côté de 13 cm. Quel est son périmètre ?",
      en: "A square has a side of 13 cm. What is its perimeter?",
      nl: "Een vierkant heeft een zijde van 13 cm. Wat is de omtrek?"
    },
    answer: 52, tolerance: 0, unit: "cm",
    hint: {
      fr: "P = 4 . 13.",
      en: "P = 4 . 13.",
      nl: "P = 4 . 13."
    }
  },

  // ===========================================================================
  // LEVEL 2 — More complex perimeters, inverse problems, isosceles triangles
  // (~17 questions: G1_s_18 through G1_s_34)
  // ===========================================================================

  // --- Inverse rectangle problems (find missing dimension) ---
  {
    id: "G1_s_18", category: "G1", level: 2,
    text: {
      fr: "Le périmètre d'un rectangle est 30 cm et sa longueur est 10 cm. Quelle est sa largeur ?",
      en: "The perimeter of a rectangle is 30 cm and its length is 10 cm. What is its width?",
      nl: "De omtrek van een rechthoek is 30 cm en de lengte is 10 cm. Wat is de breedte?"
    },
    // P = 2(L+w) => 30 = 2(10+w) => 15 = 10+w => w = 5
    answer: 5, tolerance: 0, unit: "cm",
    hint: {
      fr: "P = 2 . (L + l). Donc 30 = 2 . (10 + l). Résous pour trouver l.",
      en: "P = 2 . (L + w). So 30 = 2 . (10 + w). Solve for w.",
      nl: "P = 2 . (L + b). Dus 30 = 2 . (10 + b). Los op naar b."
    }
  },
  {
    id: "G1_s_19", category: "G1", level: 2,
    text: {
      fr: "Un rectangle a un périmètre de 42 cm. Sa largeur est de 8 cm. Quelle est sa longueur ?",
      en: "A rectangle has a perimeter of 42 cm. Its width is 8 cm. What is its length?",
      nl: "Een rechthoek heeft een omtrek van 42 cm. De breedte is 8 cm. Wat is de lengte?"
    },
    // 42 = 2(L+8) => 21 = L+8 => L = 13
    answer: 13, tolerance: 0, unit: "cm",
    hint: {
      fr: "42 = 2 . (L + 8). Divise par 2, puis soustrais 8.",
      en: "42 = 2 . (L + 8). Divide by 2, then subtract 8.",
      nl: "42 = 2 . (L + 8). Deel door 2, trek dan 8 af."
    }
  },
  {
    id: "G1_s_20", category: "G1", level: 2,
    text: {
      fr: "Le périmètre d'un rectangle est 56 cm. Sa longueur est 18 cm. Quelle est sa largeur ?",
      en: "The perimeter of a rectangle is 56 cm. Its length is 18 cm. What is its width?",
      nl: "De omtrek van een rechthoek is 56 cm. De lengte is 18 cm. Wat is de breedte?"
    },
    // 56 = 2(18+w) => 28 = 18+w => w = 10
    answer: 10, tolerance: 0, unit: "cm",
    hint: {
      fr: "56 = 2 . (18 + l). Calcule la demi-somme puis soustrais 18.",
      en: "56 = 2 . (18 + w). Find half the perimeter, then subtract 18.",
      nl: "56 = 2 . (18 + b). Bereken de helft, trek dan 18 af."
    }
  },

  // --- Inverse square problems ---
  {
    id: "G1_s_21", category: "G1", level: 2,
    text: {
      fr: "Un carré a un périmètre de 48 cm. Quelle est la longueur de son côté ?",
      en: "A square has a perimeter of 48 cm. What is the length of its side?",
      nl: "Een vierkant heeft een omtrek van 48 cm. Wat is de lengte van de zijde?"
    },
    // 48 / 4 = 12
    answer: 12, tolerance: 0, unit: "cm",
    hint: {
      fr: "Côté = périmètre : 4 = 48 : 4.",
      en: "Side = perimeter / 4 = 48 / 4.",
      nl: "Zijde = omtrek / 4 = 48 / 4."
    }
  },
  {
    id: "G1_s_22", category: "G1", level: 2,
    text: {
      fr: "Le périmètre d'un carré est 60 cm. Quel est son côté ?",
      en: "The perimeter of a square is 60 cm. What is its side?",
      nl: "De omtrek van een vierkant is 60 cm. Wat is de zijde?"
    },
    // 60 / 4 = 15
    answer: 15, tolerance: 0, unit: "cm",
    hint: {
      fr: "Côté = 60 : 4.",
      en: "Side = 60 / 4.",
      nl: "Zijde = 60 / 4."
    }
  },
  {
    id: "G1_s_23", category: "G1", level: 2,
    text: {
      fr: "Un carré a un périmètre de 36 cm. Quel est son côté ?",
      en: "A square has a perimeter of 36 cm. What is its side?",
      nl: "Een vierkant heeft een omtrek van 36 cm. Wat is de zijde?"
    },
    // 36 / 4 = 9
    answer: 9, tolerance: 0, unit: "cm",
    hint: {
      fr: "Côté = 36 : 4.",
      en: "Side = 36 / 4.",
      nl: "Zijde = 36 / 4."
    }
  },

  // --- Isosceles triangle perimeters ---
  {
    id: "G1_s_24", category: "G1", level: 2,
    text: {
      fr: "Un triangle isocèle a deux côtés de 8 cm et une base de 6 cm. Quel est son périmètre ?",
      en: "An isosceles triangle has two sides of 8 cm and a base of 6 cm. What is its perimeter?",
      nl: "Een gelijkbenige driehoek heeft twee zijden van 8 cm en een basis van 6 cm. Wat is de omtrek?"
    },
    // 8 + 8 + 6 = 22
    answer: 22, tolerance: 0, unit: "cm",
    hint: {
      fr: "P = 8 + 8 + 6.",
      en: "P = 8 + 8 + 6.",
      nl: "P = 8 + 8 + 6."
    }
  },
  {
    id: "G1_s_25", category: "G1", level: 2,
    text: {
      fr: "Calcule le périmètre d'un triangle isocèle dont les côtés égaux mesurent 12 cm et la base mesure 9 cm.",
      en: "Calculate the perimeter of an isosceles triangle with equal sides of 12 cm and a base of 9 cm.",
      nl: "Bereken de omtrek van een gelijkbenige driehoek met gelijke zijden van 12 cm en een basis van 9 cm."
    },
    // 12 + 12 + 9 = 33
    answer: 33, tolerance: 0, unit: "cm",
    hint: {
      fr: "P = 12 + 12 + 9.",
      en: "P = 12 + 12 + 9.",
      nl: "P = 12 + 12 + 9."
    }
  },

  // --- Scalene triangle ---
  {
    id: "G1_s_26", category: "G1", level: 2,
    text: {
      fr: "Un triangle a des côtés de 7 cm, 10 cm et 13 cm. Calcule son périmètre.",
      en: "A triangle has sides of 7 cm, 10 cm and 13 cm. Calculate its perimeter.",
      nl: "Een driehoek heeft zijden van 7 cm, 10 cm en 13 cm. Bereken de omtrek."
    },
    // 7 + 10 + 13 = 30
    answer: 30, tolerance: 0, unit: "cm",
    hint: {
      fr: "Additionne les trois côtés : 7 + 10 + 13.",
      en: "Add the three sides: 7 + 10 + 13.",
      nl: "Tel de drie zijden op: 7 + 10 + 13."
    }
  },

  // --- Larger rectangle perimeters ---
  {
    id: "G1_s_27", category: "G1", level: 2,
    text: {
      fr: "Calcule le périmètre d'un rectangle de 12 cm de longueur et 7 cm de largeur.",
      en: "Calculate the perimeter of a rectangle with length 12 cm and width 7 cm.",
      nl: "Bereken de omtrek van een rechthoek met lengte 12 cm en breedte 7 cm."
    },
    // 2(12+7) = 2 . 19 = 38
    answer: 38, tolerance: 0, unit: "cm",
    hint: {
      fr: "P = 2 . (12 + 7).",
      en: "P = 2 . (12 + 7).",
      nl: "P = 2 . (12 + 7)."
    }
  },
  {
    id: "G1_s_28", category: "G1", level: 2,
    text: {
      fr: "Un rectangle mesure 25 cm sur 11 cm. Quel est son périmètre ?",
      en: "A rectangle measures 25 cm by 11 cm. What is its perimeter?",
      nl: "Een rechthoek meet 25 cm op 11 cm. Wat is de omtrek?"
    },
    // 2(25+11) = 2 . 36 = 72
    answer: 72, tolerance: 0, unit: "cm",
    hint: {
      fr: "P = 2 . (25 + 11) = 2 . 36.",
      en: "P = 2 . (25 + 11) = 2 . 36.",
      nl: "P = 2 . (25 + 11) = 2 . 36."
    }
  },

  // --- Inverse equilateral triangle ---
  {
    id: "G1_s_29", category: "G1", level: 2,
    text: {
      fr: "Un triangle équilatéral a un périmètre de 36 cm. Quel est son côté ?",
      en: "An equilateral triangle has a perimeter of 36 cm. What is its side?",
      nl: "Een gelijkzijdige driehoek heeft een omtrek van 36 cm. Wat is de zijde?"
    },
    // 36 / 3 = 12
    answer: 12, tolerance: 0, unit: "cm",
    hint: {
      fr: "Côté = périmètre : 3 = 36 : 3.",
      en: "Side = perimeter / 3 = 36 / 3.",
      nl: "Zijde = omtrek / 3 = 36 / 3."
    }
  },

  // --- Rhombus ---
  {
    id: "G1_s_30", category: "G1", level: 2,
    text: {
      fr: "Un losange a un côté de 11 cm. Quel est son périmètre ?",
      en: "A rhombus has a side of 11 cm. What is its perimeter?",
      nl: "Een ruit heeft een zijde van 11 cm. Wat is de omtrek?"
    },
    // 4 . 11 = 44
    answer: 44, tolerance: 0, unit: "cm",
    hint: {
      fr: "Un losange a 4 côtés égaux. P = 4 . 11.",
      en: "A rhombus has 4 equal sides. P = 4 . 11.",
      nl: "Een ruit heeft 4 gelijke zijden. P = 4 . 11."
    }
  },

  // --- Parallelogram ---
  {
    id: "G1_s_31", category: "G1", level: 2,
    text: {
      fr: "Un parallélogramme a des côtés de 14 cm et 9 cm. Calcule son périmètre.",
      en: "A parallelogram has sides of 14 cm and 9 cm. Calculate its perimeter.",
      nl: "Een parallellogram heeft zijden van 14 cm en 9 cm. Bereken de omtrek."
    },
    // 2(14+9) = 2 . 23 = 46
    answer: 46, tolerance: 0, unit: "cm",
    hint: {
      fr: "P = 2 . (14 + 9), comme un rectangle.",
      en: "P = 2 . (14 + 9), same formula as a rectangle.",
      nl: "P = 2 . (14 + 9), dezelfde formule als een rechthoek."
    }
  },

  // --- Regular pentagon ---
  {
    id: "G1_s_32", category: "G1", level: 2,
    text: {
      fr: "Calcule le périmètre d'un pentagone régulier de côté 7 cm.",
      en: "Calculate the perimeter of a regular pentagon with side 7 cm.",
      nl: "Bereken de omtrek van een regelmatige vijfhoek met zijde 7 cm."
    },
    // 5 . 7 = 35
    answer: 35, tolerance: 0, unit: "cm",
    hint: {
      fr: "Un pentagone régulier a 5 côtés égaux. P = 5 . 7.",
      en: "A regular pentagon has 5 equal sides. P = 5 . 7.",
      nl: "Een regelmatige vijfhoek heeft 5 gelijke zijden. P = 5 . 7."
    }
  },

  // --- Inverse rectangle (different wording) ---
  {
    id: "G1_s_33", category: "G1", level: 2,
    text: {
      fr: "Le demi-périmètre d'un rectangle est 20 cm. Sa longueur est 13 cm. Quelle est sa largeur ?",
      en: "The semi-perimeter of a rectangle is 20 cm. Its length is 13 cm. What is its width?",
      nl: "De halve omtrek van een rechthoek is 20 cm. De lengte is 13 cm. Wat is de breedte?"
    },
    // demi-P = L + l => 20 = 13 + l => l = 7
    answer: 7, tolerance: 0, unit: "cm",
    hint: {
      fr: "Demi-périmètre = L + l. Donc l = 20 - 13.",
      en: "Semi-perimeter = L + w. So w = 20 - 13.",
      nl: "Halve omtrek = L + b. Dus b = 20 - 13."
    }
  },

  // --- Right triangle ---
  {
    id: "G1_s_34", category: "G1", level: 2,
    text: {
      fr: "Un triangle rectangle a des côtés de 3 cm, 4 cm et 5 cm. Quel est son périmètre ?",
      en: "A right triangle has sides of 3 cm, 4 cm and 5 cm. What is its perimeter?",
      nl: "Een rechthoekige driehoek heeft zijden van 3 cm, 4 cm en 5 cm. Wat is de omtrek?"
    },
    // 3 + 4 + 5 = 12
    answer: 12, tolerance: 0, unit: "cm",
    hint: {
      fr: "Additionne les trois côtés : 3 + 4 + 5.",
      en: "Add the three sides: 3 + 4 + 5.",
      nl: "Tel de drie zijden op: 3 + 4 + 5."
    }
  },

  // ===========================================================================
  // LEVEL 3 — Composite shapes, missing sides, real-world contexts, circles
  // (~16 questions: G1_s_35 through G1_s_50)
  // ===========================================================================

  // --- Regular hexagon ---
  {
    id: "G1_s_35", category: "G1", level: 3,
    text: {
      fr: "Calcule le périmètre d'un hexagone régulier de côté 5 cm.",
      en: "Calculate the perimeter of a regular hexagon with side 5 cm.",
      nl: "Bereken de omtrek van een regelmatige zeshoek met zijde 5 cm."
    },
    // 6 . 5 = 30
    answer: 30, tolerance: 0, unit: "cm",
    hint: {
      fr: "Un hexagone régulier a 6 côtés égaux. P = 6 . 5.",
      en: "A regular hexagon has 6 equal sides. P = 6 . 5.",
      nl: "Een regelmatige zeshoek heeft 6 gelijke zijden. P = 6 . 5."
    }
  },

  // --- Fencing problems ---
  {
    id: "G1_s_36", category: "G1", level: 3,
    text: {
      fr: "On clôture un jardin rectangulaire de 25 m sur 15 m, mais on laisse une ouverture de 3 m pour le portail. Quelle longueur de clôture faut-il ?",
      en: "A rectangular garden 25 m by 15 m is fenced, but a 3 m opening is left for a gate. How much fencing is needed?",
      nl: "Een rechthoekige tuin van 25 m op 15 m wordt omheind, maar er wordt een opening van 3 m gelaten voor een poort. Hoeveel omheining is er nodig?"
    },
    // P = 2(25+15) = 80, minus 3 = 77
    answer: 77, tolerance: 0, unit: "m",
    hint: {
      fr: "Calcule d'abord le périmètre complet (2 . (25+15) = 80 m), puis retire l'ouverture de 3 m.",
      en: "First calculate the full perimeter (2 . (25+15) = 80 m), then subtract the 3 m opening.",
      nl: "Bereken eerst de volledige omtrek (2 . (25+15) = 80 m), trek dan de opening van 3 m af."
    }
  },
  {
    id: "G1_s_37", category: "G1", level: 3,
    text: {
      fr: "Un terrain rectangulaire de 30 m sur 20 m est bordé par un mur sur un grand côté. On clôture les trois autres côtés. Quelle longueur de clôture faut-il ?",
      en: "A rectangular field 30 m by 20 m has a wall along one long side. The other three sides are fenced. How much fencing is needed?",
      nl: "Een rechthoekig terrein van 30 m op 20 m heeft een muur langs een lange zijde. De drie andere zijden worden omheind. Hoeveel omheining is er nodig?"
    },
    // 3 sides: 20 + 30 + 20 = 70 (wall replaces one 30m side)
    answer: 70, tolerance: 0, unit: "m",
    hint: {
      fr: "3 côtés = 20 + 30 + 20 (le mur remplace un grand côté de 30 m).",
      en: "3 sides = 20 + 30 + 20 (the wall replaces one 30 m side).",
      nl: "3 zijden = 20 + 30 + 20 (de muur vervangt een lange zijde van 30 m)."
    }
  },

  // --- Semicircle ---
  {
    id: "G1_s_38", category: "G1", level: 3,
    text: {
      fr: "Calcule le périmètre d'un demi-cercle de diamètre 10 cm. (Utilise pi = 3.14)",
      en: "Calculate the perimeter of a semicircle with diameter 10 cm. (Use pi = 3.14)",
      nl: "Bereken de omtrek van een halve cirkel met diameter 10 cm. (Gebruik pi = 3,14)"
    },
    // Curved part = pi . d / 2 = 3.14 . 10 / 2 = 15.7
    // Straight part = d = 10
    // Total = 15.7 + 10 = 25.7
    answer: 25.7, tolerance: 0.1, unit: "cm",
    hint: {
      fr: "Périmètre = demi-circonférence + diamètre = (pi . 10 / 2) + 10 = 15,7 + 10.",
      en: "Perimeter = half circumference + diameter = (pi . 10 / 2) + 10 = 15.7 + 10.",
      nl: "Omtrek = halve omtrek cirkel + diameter = (pi . 10 / 2) + 10 = 15,7 + 10."
    }
  },

  // --- L-shaped room ---
  {
    id: "G1_s_39", category: "G1", level: 3,
    text: {
      fr: "Une pièce en L a la forme d'un grand rectangle de 10 m sur 8 m, avec un coin découpé de 3 m sur 4 m. Calcule le périmètre de cette pièce.",
      en: "An L-shaped room is formed by a 10 m by 8 m rectangle with a 3 m by 4 m corner cut out. Calculate the perimeter of this room.",
      nl: "Een L-vormige kamer is gevormd door een rechthoek van 10 m op 8 m met een uitgesneden hoek van 3 m op 4 m. Bereken de omtrek van deze kamer."
    },
    // Outer rectangle perimeter = 2(10+8) = 36
    // The cut removes one corner but adds two inner edges (3 and 4) while removing
    // the same total length from two outer sides (3 and 4).
    // Net effect: perimeter stays 36.
    // Detailed: go around the L-shape:
    //   bottom 10, right 8, top-right (10-3)=7, down inner 4, left inner 3, left side (8-4)=4
    //   Sum: 10 + 8 + 7 + 4 + 3 + 4 = 36
    answer: 36, tolerance: 0, unit: "m",
    hint: {
      fr: "Parcours le contour : 10 + 8 + 7 + 4 + 3 + 4 = 36 m. La découpe ne change pas le périmètre !",
      en: "Trace the outline: 10 + 8 + 7 + 4 + 3 + 4 = 36 m. The cut-out does not change the perimeter!",
      nl: "Volg de omtrek: 10 + 8 + 7 + 4 + 3 + 4 = 36 m. De uitsnijding verandert de omtrek niet!"
    }
  },

  // --- Full circle circumference ---
  {
    id: "G1_s_40", category: "G1", level: 3,
    text: {
      fr: "Calcule la circonférence d'un cercle de rayon 7 cm. (Utilise pi = 3.14)",
      en: "Calculate the circumference of a circle with radius 7 cm. (Use pi = 3.14)",
      nl: "Bereken de omtrek van een cirkel met straal 7 cm. (Gebruik pi = 3,14)"
    },
    // C = 2 . pi . r = 2 . 3.14 . 7 = 43.96
    answer: 43.96, tolerance: 0.1, unit: "cm",
    hint: {
      fr: "C = 2 . pi . rayon = 2 . 3,14 . 7.",
      en: "C = 2 . pi . radius = 2 . 3.14 . 7.",
      nl: "C = 2 . pi . straal = 2 . 3,14 . 7."
    }
  },

  // --- Composite: rectangle + semicircle ---
  {
    id: "G1_s_41", category: "G1", level: 3,
    text: {
      fr: "Une piste a la forme d'un rectangle de 20 m sur 10 m, avec un demi-cercle à chaque extrémité (diamètre = 10 m). Calcule le périmètre total. (pi = 3.14)",
      en: "A track is shaped like a 20 m by 10 m rectangle with a semicircle on each short end (diameter = 10 m). Calculate the total perimeter. (pi = 3.14)",
      nl: "Een baan heeft de vorm van een rechthoek van 20 m op 10 m, met een halve cirkel aan elke korte zijde (diameter = 10 m). Bereken de totale omtrek. (pi = 3,14)"
    },
    // Two long sides: 2 . 20 = 40
    // Two semicircles = one full circle of diameter 10: pi . 10 = 31.4
    // Total = 40 + 31.4 = 71.4
    answer: 71.4, tolerance: 0.1, unit: "m",
    hint: {
      fr: "2 longueurs (2 . 20 = 40 m) + 2 demi-cercles = 1 cercle complet (pi . 10 = 31,4 m). Total = 71,4 m.",
      en: "2 lengths (2 . 20 = 40 m) + 2 semicircles = 1 full circle (pi . 10 = 31.4 m). Total = 71.4 m.",
      nl: "2 lengtes (2 . 20 = 40 m) + 2 halve cirkels = 1 volledige cirkel (pi . 10 = 31,4 m). Totaal = 71,4 m."
    }
  },

  // --- Regular octagon ---
  {
    id: "G1_s_42", category: "G1", level: 3,
    text: {
      fr: "Calcule le périmètre d'un octogone régulier de côté 4 cm.",
      en: "Calculate the perimeter of a regular octagon with side 4 cm.",
      nl: "Bereken de omtrek van een regelmatige achthoek met zijde 4 cm."
    },
    // 8 . 4 = 32
    answer: 32, tolerance: 0, unit: "cm",
    hint: {
      fr: "Un octogone régulier a 8 côtés. P = 8 . 4.",
      en: "A regular octagon has 8 sides. P = 8 . 4.",
      nl: "Een regelmatige achthoek heeft 8 zijden. P = 8 . 4."
    }
  },

  // --- Missing side in an irregular polygon ---
  {
    id: "G1_s_43", category: "G1", level: 3,
    text: {
      fr: "Un polygone a un périmètre de 50 cm. Quatre de ses côtés mesurent 8 cm, 12 cm, 10 cm et 7 cm. Quelle est la longueur du cinquième côté ?",
      en: "A polygon has a perimeter of 50 cm. Four of its sides measure 8 cm, 12 cm, 10 cm and 7 cm. What is the length of the fifth side?",
      nl: "Een veelhoek heeft een omtrek van 50 cm. Vier zijden meten 8 cm, 12 cm, 10 cm en 7 cm. Wat is de lengte van de vijfde zijde?"
    },
    // 50 - (8+12+10+7) = 50 - 37 = 13
    answer: 13, tolerance: 0, unit: "cm",
    hint: {
      fr: "Côté manquant = 50 - (8 + 12 + 10 + 7) = 50 - 37.",
      en: "Missing side = 50 - (8 + 12 + 10 + 7) = 50 - 37.",
      nl: "Ontbrekende zijde = 50 - (8 + 12 + 10 + 7) = 50 - 37."
    }
  },

  // --- Real-world: ribbon around a gift ---
  {
    id: "G1_s_44", category: "G1", level: 3,
    text: {
      fr: "On entoure un cadeau carré de côté 16 cm avec un ruban qui fait le tour complet plus un noeud de 12 cm. Quelle longueur de ruban faut-il ?",
      en: "A ribbon goes around a square gift with side 16 cm, plus a 12 cm bow. How much ribbon is needed?",
      nl: "Een lint gaat rond een vierkant cadeau met zijde 16 cm, plus een strik van 12 cm. Hoeveel lint is er nodig?"
    },
    // P = 4 . 16 = 64, + 12 = 76
    answer: 76, tolerance: 0, unit: "cm",
    hint: {
      fr: "Périmètre = 4 . 16 = 64 cm, plus le noeud de 12 cm.",
      en: "Perimeter = 4 . 16 = 64 cm, plus the 12 cm bow.",
      nl: "Omtrek = 4 . 16 = 64 cm, plus de strik van 12 cm."
    }
  },

  // --- Circumference from diameter ---
  {
    id: "G1_s_45", category: "G1", level: 3,
    text: {
      fr: "Une roue a un diamètre de 50 cm. Quelle distance parcourt-elle en un tour complet ? (pi = 3.14)",
      en: "A wheel has a diameter of 50 cm. What distance does it cover in one full turn? (pi = 3.14)",
      nl: "Een wiel heeft een diameter van 50 cm. Welke afstand legt het af in een volledige omwenteling? (pi = 3,14)"
    },
    // C = pi . d = 3.14 . 50 = 157
    answer: 157, tolerance: 0.5, unit: "cm",
    hint: {
      fr: "Distance = pi . diamètre = 3,14 . 50.",
      en: "Distance = pi . diameter = 3.14 . 50.",
      nl: "Afstand = pi . diameter = 3,14 . 50."
    }
  },

  // --- Composite: two squares side by side ---
  {
    id: "G1_s_46", category: "G1", level: 3,
    text: {
      fr: "Deux carrés de côté 6 cm sont placés côte à côte pour former un rectangle. Quel est le périmètre du rectangle obtenu ?",
      en: "Two squares with side 6 cm are placed side by side to form a rectangle. What is the perimeter of the resulting rectangle?",
      nl: "Twee vierkanten met zijde 6 cm worden naast elkaar geplaatst om een rechthoek te vormen. Wat is de omtrek van de resulterende rechthoek?"
    },
    // Rectangle 12 cm . 6 cm => P = 2(12+6) = 36
    answer: 36, tolerance: 0, unit: "cm",
    hint: {
      fr: "Le rectangle obtenu mesure 12 cm . 6 cm. P = 2 . (12 + 6).",
      en: "The resulting rectangle is 12 cm . 6 cm. P = 2 . (12 + 6).",
      nl: "De resulterende rechthoek is 12 cm . 6 cm. P = 2 . (12 + 6)."
    }
  },

  // --- T-shaped figure ---
  {
    id: "G1_s_47", category: "G1", level: 3,
    text: {
      fr: "Une figure en T est formée d'un rectangle horizontal de 12 cm . 3 cm et d'un rectangle vertical de 3 cm . 7 cm centré en dessous. Calcule le périmètre de cette figure.",
      en: "A T-shape is formed by a horizontal rectangle 12 cm . 3 cm and a vertical rectangle 3 cm . 7 cm centered below it. Calculate the perimeter of this figure.",
      nl: "Een T-vorm wordt gevormd door een horizontale rechthoek van 12 cm . 3 cm en een verticale rechthoek van 3 cm . 7 cm eronder gecentreerd. Bereken de omtrek van deze figuur."
    },
    // Trace the outline:
    // Top: 12
    // Right side down from top-right: 3 (height of horizontal bar)
    // Go left to meet vertical bar: (12-3)/2 = 4.5
    // Down the right side of vertical bar: 7
    // Bottom of vertical bar: 3
    // Up the left side of vertical bar: 7
    // Go left from vertical bar to left edge: 4.5
    // Left side up: 3
    // Total: 12 + 3 + 4.5 + 7 + 3 + 7 + 4.5 + 3 = 44
    answer: 44, tolerance: 0, unit: "cm",
    hint: {
      fr: "Parcours le contour : 12 + 3 + 4,5 + 7 + 3 + 7 + 4,5 + 3 = 44 cm.",
      en: "Trace the outline: 12 + 3 + 4.5 + 7 + 3 + 7 + 4.5 + 3 = 44 cm.",
      nl: "Volg de omtrek: 12 + 3 + 4,5 + 7 + 3 + 7 + 4,5 + 3 = 44 cm."
    }
  },

  // --- Quarter circle ---
  {
    id: "G1_s_48", category: "G1", level: 3,
    text: {
      fr: "Calcule le périmètre d'un quart de cercle de rayon 8 cm. (pi = 3.14)",
      en: "Calculate the perimeter of a quarter circle with radius 8 cm. (pi = 3.14)",
      nl: "Bereken de omtrek van een kwart cirkel met straal 8 cm. (pi = 3,14)"
    },
    // Arc = (2 . pi . 8) / 4 = 3.14 . 16 / 4 = 12.56
    // Two straight edges (radii) = 8 + 8 = 16
    // Total = 12.56 + 16 = 28.56
    answer: 28.56, tolerance: 0.1, unit: "cm",
    hint: {
      fr: "Arc = 2 . pi . 8 / 4 = 12,56 cm. Ajoute les deux rayons : 12,56 + 8 + 8 = 28,56 cm.",
      en: "Arc = 2 . pi . 8 / 4 = 12.56 cm. Add the two radii: 12.56 + 8 + 8 = 28.56 cm.",
      nl: "Boog = 2 . pi . 8 / 4 = 12,56 cm. Voeg de twee stralen toe: 12,56 + 8 + 8 = 28,56 cm."
    }
  },

  // --- Real-world: garden path border ---
  {
    id: "G1_s_49", category: "G1", level: 3,
    text: {
      fr: "Un jardin carré de côté 12 m est entouré d'un chemin de 1 m de large. Calcule le périmètre extérieur (le bord extérieur du chemin).",
      en: "A square garden with side 12 m is surrounded by a 1 m wide path. Calculate the outer perimeter (the outer edge of the path).",
      nl: "Een vierkante tuin met zijde 12 m is omgeven door een pad van 1 m breed. Bereken de buitenomtrek (de buitenrand van het pad)."
    },
    // Outer square side = 12 + 1 + 1 = 14 m
    // P = 4 . 14 = 56
    answer: 56, tolerance: 0, unit: "m",
    hint: {
      fr: "Le carré extérieur a un côté de 12 + 2 . 1 = 14 m. P = 4 . 14.",
      en: "The outer square has side 12 + 2 . 1 = 14 m. P = 4 . 14.",
      nl: "Het buitenste vierkant heeft zijde 12 + 2 . 1 = 14 m. P = 4 . 14."
    }
  },

  // --- Composite: rectangle with triangle on top (like a house) ---
  {
    id: "G1_s_50", category: "G1", level: 3,
    text: {
      fr: "Une façade de maison a la forme d'un rectangle de 8 m de large et 5 m de haut, surmonté d'un triangle isocèle dont les deux côtés du toit mesurent chacun 5 m. Calcule le périmètre de cette façade.",
      en: "A house facade is a rectangle 8 m wide and 5 m tall, topped by an isosceles triangle whose two roof sides each measure 5 m. Calculate the perimeter of this facade.",
      nl: "Een huisgevel is een rechthoek van 8 m breed en 5 m hoog, met daarboven een gelijkbenige driehoek waarvan de twee dakzijden elk 5 m meten. Bereken de omtrek van deze gevel."
    },
    // Outline (no interior lines):
    // Bottom: 8
    // Left side of rectangle: 5
    // Left roof slope: 5
    // Right roof slope: 5
    // Right side of rectangle: 5
    // Total: 8 + 5 + 5 + 5 + 5 = 28
    answer: 28, tolerance: 0, unit: "m",
    hint: {
      fr: "Parcours le contour extérieur : bas 8 + côté gauche 5 + toit gauche 5 + toit droit 5 + côté droit 5 = 28 m.",
      en: "Trace the outer outline: bottom 8 + left side 5 + left roof 5 + right roof 5 + right side 5 = 28 m.",
      nl: "Volg de buitenomtrek: onderkant 8 + linkerzijde 5 + linkerdak 5 + rechterdak 5 + rechterzijde 5 = 28 m."
    }
  },

  // ===========================================================================
  // LEVEL 1 — Additional simple perimeters (G1_s_51 through G1_s_70)
  // ===========================================================================

  // --- Rectangles ---
  {
    id: "G1_s_51", category: "G1", level: 1,
    text: {
      fr: "Calcule le périmètre d'un rectangle de 11 cm de longueur et 6 cm de largeur.",
      en: "Calculate the perimeter of a rectangle with length 11 cm and width 6 cm.",
      nl: "Bereken de omtrek van een rechthoek met lengte 11 cm en breedte 6 cm."
    },
    // 2 . (11 + 6) = 2 . 17 = 34
    answer: 34, tolerance: 0, unit: "cm",
    hint: {
      fr: "P = 2 . (11 + 6) = 2 . 17.",
      en: "P = 2 . (11 + 6) = 2 . 17.",
      nl: "P = 2 . (11 + 6) = 2 . 17."
    }
  },
  {
    id: "G1_s_52", category: "G1", level: 1,
    text: {
      fr: "Un rectangle mesure 14 cm de long et 9 cm de large. Quel est son périmètre ?",
      en: "A rectangle is 14 cm long and 9 cm wide. What is its perimeter?",
      nl: "Een rechthoek is 14 cm lang en 9 cm breed. Wat is de omtrek?"
    },
    // 2 . (14 + 9) = 2 . 23 = 46
    answer: 46, tolerance: 0, unit: "cm",
    hint: {
      fr: "P = 2 . (14 + 9) = 2 . 23.",
      en: "P = 2 . (14 + 9) = 2 . 23.",
      nl: "P = 2 . (14 + 9) = 2 . 23."
    }
  },
  {
    id: "G1_s_53", category: "G1", level: 1,
    text: {
      fr: "Calcule le périmètre d'un rectangle de 7 cm sur 3 cm.",
      en: "Calculate the perimeter of a 7 cm by 3 cm rectangle.",
      nl: "Bereken de omtrek van een rechthoek van 7 cm op 3 cm."
    },
    // 2 . (7 + 3) = 2 . 10 = 20
    answer: 20, tolerance: 0, unit: "cm",
    hint: {
      fr: "P = 2 . (7 + 3) = 2 . 10.",
      en: "P = 2 . (7 + 3) = 2 . 10.",
      nl: "P = 2 . (7 + 3) = 2 . 10."
    }
  },
  {
    id: "G1_s_54", category: "G1", level: 1,
    text: {
      fr: "Un rectangle a une longueur de 16 cm et une largeur de 8 cm. Calcule son périmètre.",
      en: "A rectangle has a length of 16 cm and a width of 8 cm. Calculate its perimeter.",
      nl: "Een rechthoek heeft een lengte van 16 cm en een breedte van 8 cm. Bereken de omtrek."
    },
    // 2 . (16 + 8) = 2 . 24 = 48
    answer: 48, tolerance: 0, unit: "cm",
    hint: {
      fr: "P = 2 . (16 + 8) = 2 . 24.",
      en: "P = 2 . (16 + 8) = 2 . 24.",
      nl: "P = 2 . (16 + 8) = 2 . 24."
    }
  },
  {
    id: "G1_s_55", category: "G1", level: 1,
    text: {
      fr: "Quel est le périmètre d'un rectangle de 19 cm sur 11 cm ?",
      en: "What is the perimeter of a 19 cm by 11 cm rectangle?",
      nl: "Wat is de omtrek van een rechthoek van 19 cm op 11 cm?"
    },
    // 2 . (19 + 11) = 2 . 30 = 60
    answer: 60, tolerance: 0, unit: "cm",
    hint: {
      fr: "P = 2 . (19 + 11) = 2 . 30.",
      en: "P = 2 . (19 + 11) = 2 . 30.",
      nl: "P = 2 . (19 + 11) = 2 . 30."
    }
  },
  {
    id: "G1_s_56", category: "G1", level: 1,
    text: {
      fr: "Un rectangle mesure 22 cm de long et 13 cm de large. Calcule son périmètre.",
      en: "A rectangle is 22 cm long and 13 cm wide. Calculate its perimeter.",
      nl: "Een rechthoek is 22 cm lang en 13 cm breed. Bereken de omtrek."
    },
    // 2 . (22 + 13) = 2 . 35 = 70
    answer: 70, tolerance: 0, unit: "cm",
    hint: {
      fr: "P = 2 . (22 + 13) = 2 . 35.",
      en: "P = 2 . (22 + 13) = 2 . 35.",
      nl: "P = 2 . (22 + 13) = 2 . 35."
    }
  },
  {
    id: "G1_s_57", category: "G1", level: 1,
    text: {
      fr: "Calcule le périmètre d'un rectangle de 5 cm de longueur et 2 cm de largeur.",
      en: "Calculate the perimeter of a rectangle with length 5 cm and width 2 cm.",
      nl: "Bereken de omtrek van een rechthoek met lengte 5 cm en breedte 2 cm."
    },
    // 2 . (5 + 2) = 2 . 7 = 14
    answer: 14, tolerance: 0, unit: "cm",
    hint: {
      fr: "P = 2 . (5 + 2) = 2 . 7.",
      en: "P = 2 . (5 + 2) = 2 . 7.",
      nl: "P = 2 . (5 + 2) = 2 . 7."
    }
  },

  // --- Squares ---
  {
    id: "G1_s_58", category: "G1", level: 1,
    text: {
      fr: "Calcule le périmètre d'un carré de côté 6 cm.",
      en: "Calculate the perimeter of a square with side 6 cm.",
      nl: "Bereken de omtrek van een vierkant met zijde 6 cm."
    },
    // 4 . 6 = 24
    answer: 24, tolerance: 0, unit: "cm",
    hint: {
      fr: "P = 4 . 6.",
      en: "P = 4 . 6.",
      nl: "P = 4 . 6."
    }
  },
  {
    id: "G1_s_59", category: "G1", level: 1,
    text: {
      fr: "Un carré a un côté de 18 cm. Quel est son périmètre ?",
      en: "A square has a side of 18 cm. What is its perimeter?",
      nl: "Een vierkant heeft een zijde van 18 cm. Wat is de omtrek?"
    },
    // 4 . 18 = 72
    answer: 72, tolerance: 0, unit: "cm",
    hint: {
      fr: "P = 4 . 18.",
      en: "P = 4 . 18.",
      nl: "P = 4 . 18."
    }
  },
  {
    id: "G1_s_60", category: "G1", level: 1,
    text: {
      fr: "Calcule le périmètre d'un carré dont le côté mesure 4 cm.",
      en: "Calculate the perimeter of a square whose side measures 4 cm.",
      nl: "Bereken de omtrek van een vierkant waarvan de zijde 4 cm is."
    },
    // 4 . 4 = 16
    answer: 16, tolerance: 0, unit: "cm",
    hint: {
      fr: "P = 4 . 4.",
      en: "P = 4 . 4.",
      nl: "P = 4 . 4."
    }
  },
  {
    id: "G1_s_61", category: "G1", level: 1,
    text: {
      fr: "Un carré a un côté de 20 cm. Quel est son périmètre ?",
      en: "A square has a side of 20 cm. What is its perimeter?",
      nl: "Een vierkant heeft een zijde van 20 cm. Wat is de omtrek?"
    },
    // 4 . 20 = 80
    answer: 80, tolerance: 0, unit: "cm",
    hint: {
      fr: "P = 4 . 20.",
      en: "P = 4 . 20.",
      nl: "P = 4 . 20."
    }
  },
  {
    id: "G1_s_62", category: "G1", level: 1,
    text: {
      fr: "Calcule le périmètre d'un carré de côté 3 cm.",
      en: "Calculate the perimeter of a square with side 3 cm.",
      nl: "Bereken de omtrek van een vierkant met zijde 3 cm."
    },
    // 4 . 3 = 12
    answer: 12, tolerance: 0, unit: "cm",
    hint: {
      fr: "P = 4 . 3.",
      en: "P = 4 . 3.",
      nl: "P = 4 . 3."
    }
  },

  // --- Equilateral triangles ---
  {
    id: "G1_s_63", category: "G1", level: 1,
    text: {
      fr: "Calcule le périmètre d'un triangle équilatéral de côté 8 cm.",
      en: "Calculate the perimeter of an equilateral triangle with side 8 cm.",
      nl: "Bereken de omtrek van een gelijkzijdige driehoek met zijde 8 cm."
    },
    // 3 . 8 = 24
    answer: 24, tolerance: 0, unit: "cm",
    hint: {
      fr: "P = 3 . 8.",
      en: "P = 3 . 8.",
      nl: "P = 3 . 8."
    }
  },
  {
    id: "G1_s_64", category: "G1", level: 1,
    text: {
      fr: "Un triangle équilatéral a un côté de 12 cm. Quel est son périmètre ?",
      en: "An equilateral triangle has a side of 12 cm. What is its perimeter?",
      nl: "Een gelijkzijdige driehoek heeft een zijde van 12 cm. Wat is de omtrek?"
    },
    // 3 . 12 = 36
    answer: 36, tolerance: 0, unit: "cm",
    hint: {
      fr: "P = 3 . 12.",
      en: "P = 3 . 12.",
      nl: "P = 3 . 12."
    }
  },
  {
    id: "G1_s_65", category: "G1", level: 1,
    text: {
      fr: "Calcule le périmètre d'un triangle équilatéral dont chaque côté mesure 5 cm.",
      en: "Calculate the perimeter of an equilateral triangle where each side is 5 cm.",
      nl: "Bereken de omtrek van een gelijkzijdige driehoek waarvan elke zijde 5 cm is."
    },
    // 3 . 5 = 15
    answer: 15, tolerance: 0, unit: "cm",
    hint: {
      fr: "P = 3 . 5.",
      en: "P = 3 . 5.",
      nl: "P = 3 . 5."
    }
  },
  {
    id: "G1_s_66", category: "G1", level: 1,
    text: {
      fr: "Un triangle équilatéral a un côté de 16 cm. Calcule son périmètre.",
      en: "An equilateral triangle has a side of 16 cm. Calculate its perimeter.",
      nl: "Een gelijkzijdige driehoek heeft een zijde van 16 cm. Bereken de omtrek."
    },
    // 3 . 16 = 48
    answer: 48, tolerance: 0, unit: "cm",
    hint: {
      fr: "P = 3 . 16.",
      en: "P = 3 . 16.",
      nl: "P = 3 . 16."
    }
  },

  // --- Mixed simple shapes ---
  {
    id: "G1_s_67", category: "G1", level: 1,
    text: {
      fr: "Un rectangle mesure 25 cm de long et 5 cm de large. Quel est son périmètre ?",
      en: "A rectangle is 25 cm long and 5 cm wide. What is its perimeter?",
      nl: "Een rechthoek is 25 cm lang en 5 cm breed. Wat is de omtrek?"
    },
    // 2 . (25 + 5) = 2 . 30 = 60
    answer: 60, tolerance: 0, unit: "cm",
    hint: {
      fr: "P = 2 . (25 + 5) = 2 . 30.",
      en: "P = 2 . (25 + 5) = 2 . 30.",
      nl: "P = 2 . (25 + 5) = 2 . 30."
    }
  },
  {
    id: "G1_s_68", category: "G1", level: 1,
    text: {
      fr: "Calcule le périmètre d'un carré de côté 14 cm.",
      en: "Calculate the perimeter of a square with side 14 cm.",
      nl: "Bereken de omtrek van een vierkant met zijde 14 cm."
    },
    // 4 . 14 = 56
    answer: 56, tolerance: 0, unit: "cm",
    hint: {
      fr: "P = 4 . 14.",
      en: "P = 4 . 14.",
      nl: "P = 4 . 14."
    }
  },
  {
    id: "G1_s_69", category: "G1", level: 1,
    text: {
      fr: "Un triangle équilatéral a un côté de 20 cm. Calcule son périmètre.",
      en: "An equilateral triangle has a side of 20 cm. Calculate its perimeter.",
      nl: "Een gelijkzijdige driehoek heeft een zijde van 20 cm. Bereken de omtrek."
    },
    // 3 . 20 = 60
    answer: 60, tolerance: 0, unit: "cm",
    hint: {
      fr: "P = 3 . 20.",
      en: "P = 3 . 20.",
      nl: "P = 3 . 20."
    }
  },
  {
    id: "G1_s_70", category: "G1", level: 1,
    text: {
      fr: "Calcule le périmètre d'un rectangle de 13 cm de longueur et 2 cm de largeur.",
      en: "Calculate the perimeter of a rectangle with length 13 cm and width 2 cm.",
      nl: "Bereken de omtrek van een rechthoek met lengte 13 cm en breedte 2 cm."
    },
    // 2 . (13 + 2) = 2 . 15 = 30
    answer: 30, tolerance: 0, unit: "cm",
    hint: {
      fr: "P = 2 . (13 + 2) = 2 . 15.",
      en: "P = 2 . (13 + 2) = 2 . 15.",
      nl: "P = 2 . (13 + 2) = 2 . 15."
    }
  },

  // ===========================================================================
  // LEVEL 2 — Additional inverse problems, isosceles triangles, regular polygons
  // (G1_s_71 through G1_s_90)
  // ===========================================================================

  // --- Inverse rectangle problems ---
  {
    id: "G1_s_71", category: "G1", level: 2,
    text: {
      fr: "Le périmètre d'un rectangle est 50 cm et sa longueur est 15 cm. Quelle est sa largeur ?",
      en: "The perimeter of a rectangle is 50 cm and its length is 15 cm. What is its width?",
      nl: "De omtrek van een rechthoek is 50 cm en de lengte is 15 cm. Wat is de breedte?"
    },
    // 50 = 2(15+w) => 25 = 15+w => w = 10
    answer: 10, tolerance: 0, unit: "cm",
    hint: {
      fr: "50 = 2 . (15 + l). Divise par 2 : 25 = 15 + l. Donc l = 10.",
      en: "50 = 2 . (15 + w). Divide by 2: 25 = 15 + w. So w = 10.",
      nl: "50 = 2 . (15 + b). Deel door 2: 25 = 15 + b. Dus b = 10."
    }
  },
  {
    id: "G1_s_72", category: "G1", level: 2,
    text: {
      fr: "Un rectangle a un périmètre de 38 cm. Sa largeur est de 7 cm. Quelle est sa longueur ?",
      en: "A rectangle has a perimeter of 38 cm. Its width is 7 cm. What is its length?",
      nl: "Een rechthoek heeft een omtrek van 38 cm. De breedte is 7 cm. Wat is de lengte?"
    },
    // 38 = 2(L+7) => 19 = L+7 => L = 12
    answer: 12, tolerance: 0, unit: "cm",
    hint: {
      fr: "38 = 2 . (L + 7). Divise par 2, puis soustrais 7.",
      en: "38 = 2 . (L + 7). Divide by 2, then subtract 7.",
      nl: "38 = 2 . (L + 7). Deel door 2, trek dan 7 af."
    }
  },
  {
    id: "G1_s_73", category: "G1", level: 2,
    text: {
      fr: "Le périmètre d'un rectangle est 64 cm. Sa longueur est 20 cm. Quelle est sa largeur ?",
      en: "The perimeter of a rectangle is 64 cm. Its length is 20 cm. What is its width?",
      nl: "De omtrek van een rechthoek is 64 cm. De lengte is 20 cm. Wat is de breedte?"
    },
    // 64 = 2(20+w) => 32 = 20+w => w = 12
    answer: 12, tolerance: 0, unit: "cm",
    hint: {
      fr: "64 = 2 . (20 + l). Calcule 64 : 2 = 32, puis 32 - 20 = 12.",
      en: "64 = 2 . (20 + w). Calculate 64 / 2 = 32, then 32 - 20 = 12.",
      nl: "64 = 2 . (20 + b). Bereken 64 / 2 = 32, dan 32 - 20 = 12."
    }
  },
  {
    id: "G1_s_74", category: "G1", level: 2,
    text: {
      fr: "Un rectangle a un périmètre de 46 cm. Sa largeur est de 9 cm. Quelle est sa longueur ?",
      en: "A rectangle has a perimeter of 46 cm. Its width is 9 cm. What is its length?",
      nl: "Een rechthoek heeft een omtrek van 46 cm. De breedte is 9 cm. Wat is de lengte?"
    },
    // 46 = 2(L+9) => 23 = L+9 => L = 14
    answer: 14, tolerance: 0, unit: "cm",
    hint: {
      fr: "46 = 2 . (L + 9). Donc L = 46 : 2 - 9 = 23 - 9.",
      en: "46 = 2 . (L + 9). So L = 46 / 2 - 9 = 23 - 9.",
      nl: "46 = 2 . (L + 9). Dus L = 46 / 2 - 9 = 23 - 9."
    }
  },

  // --- Inverse square problems ---
  {
    id: "G1_s_75", category: "G1", level: 2,
    text: {
      fr: "Un carré a un périmètre de 72 cm. Quelle est la longueur de son côté ?",
      en: "A square has a perimeter of 72 cm. What is the length of its side?",
      nl: "Een vierkant heeft een omtrek van 72 cm. Wat is de lengte van de zijde?"
    },
    // 72 / 4 = 18
    answer: 18, tolerance: 0, unit: "cm",
    hint: {
      fr: "Côté = 72 : 4.",
      en: "Side = 72 / 4.",
      nl: "Zijde = 72 / 4."
    }
  },
  {
    id: "G1_s_76", category: "G1", level: 2,
    text: {
      fr: "Le périmètre d'un carré est 28 cm. Quel est son côté ?",
      en: "The perimeter of a square is 28 cm. What is its side?",
      nl: "De omtrek van een vierkant is 28 cm. Wat is de zijde?"
    },
    // 28 / 4 = 7
    answer: 7, tolerance: 0, unit: "cm",
    hint: {
      fr: "Côté = 28 : 4.",
      en: "Side = 28 / 4.",
      nl: "Zijde = 28 / 4."
    }
  },
  {
    id: "G1_s_77", category: "G1", level: 2,
    text: {
      fr: "Un carré a un périmètre de 100 cm. Quel est son côté ?",
      en: "A square has a perimeter of 100 cm. What is its side?",
      nl: "Een vierkant heeft een omtrek van 100 cm. Wat is de zijde?"
    },
    // 100 / 4 = 25
    answer: 25, tolerance: 0, unit: "cm",
    hint: {
      fr: "Côté = 100 : 4.",
      en: "Side = 100 / 4.",
      nl: "Zijde = 100 / 4."
    }
  },

  // --- Inverse equilateral triangle ---
  {
    id: "G1_s_78", category: "G1", level: 2,
    text: {
      fr: "Un triangle équilatéral a un périmètre de 45 cm. Quel est son côté ?",
      en: "An equilateral triangle has a perimeter of 45 cm. What is its side?",
      nl: "Een gelijkzijdige driehoek heeft een omtrek van 45 cm. Wat is de zijde?"
    },
    // 45 / 3 = 15
    answer: 15, tolerance: 0, unit: "cm",
    hint: {
      fr: "Côté = 45 : 3.",
      en: "Side = 45 / 3.",
      nl: "Zijde = 45 / 3."
    }
  },
  {
    id: "G1_s_79", category: "G1", level: 2,
    text: {
      fr: "Le périmètre d'un triangle équilatéral est 27 cm. Quelle est la longueur d'un côté ?",
      en: "The perimeter of an equilateral triangle is 27 cm. What is the length of one side?",
      nl: "De omtrek van een gelijkzijdige driehoek is 27 cm. Wat is de lengte van een zijde?"
    },
    // 27 / 3 = 9
    answer: 9, tolerance: 0, unit: "cm",
    hint: {
      fr: "Côté = 27 : 3.",
      en: "Side = 27 / 3.",
      nl: "Zijde = 27 / 3."
    }
  },

  // --- Isosceles triangle perimeters ---
  {
    id: "G1_s_80", category: "G1", level: 2,
    text: {
      fr: "Un triangle isocèle a deux côtés de 10 cm et une base de 14 cm. Quel est son périmètre ?",
      en: "An isosceles triangle has two sides of 10 cm and a base of 14 cm. What is its perimeter?",
      nl: "Een gelijkbenige driehoek heeft twee zijden van 10 cm en een basis van 14 cm. Wat is de omtrek?"
    },
    // 10 + 10 + 14 = 34
    answer: 34, tolerance: 0, unit: "cm",
    hint: {
      fr: "P = 10 + 10 + 14.",
      en: "P = 10 + 10 + 14.",
      nl: "P = 10 + 10 + 14."
    }
  },
  {
    id: "G1_s_81", category: "G1", level: 2,
    text: {
      fr: "Calcule le périmètre d'un triangle isocèle dont les côtés égaux mesurent 15 cm et la base mesure 8 cm.",
      en: "Calculate the perimeter of an isosceles triangle with equal sides of 15 cm and a base of 8 cm.",
      nl: "Bereken de omtrek van een gelijkbenige driehoek met gelijke zijden van 15 cm en een basis van 8 cm."
    },
    // 15 + 15 + 8 = 38
    answer: 38, tolerance: 0, unit: "cm",
    hint: {
      fr: "P = 15 + 15 + 8.",
      en: "P = 15 + 15 + 8.",
      nl: "P = 15 + 15 + 8."
    }
  },
  {
    id: "G1_s_82", category: "G1", level: 2,
    text: {
      fr: "Un triangle isocèle a deux côtés de 9 cm et une base de 5 cm. Calcule son périmètre.",
      en: "An isosceles triangle has two sides of 9 cm and a base of 5 cm. Calculate its perimeter.",
      nl: "Een gelijkbenige driehoek heeft twee zijden van 9 cm en een basis van 5 cm. Bereken de omtrek."
    },
    // 9 + 9 + 5 = 23
    answer: 23, tolerance: 0, unit: "cm",
    hint: {
      fr: "P = 9 + 9 + 5.",
      en: "P = 9 + 9 + 5.",
      nl: "P = 9 + 9 + 5."
    }
  },

  // --- Regular polygons ---
  {
    id: "G1_s_83", category: "G1", level: 2,
    text: {
      fr: "Calcule le périmètre d'un pentagone régulier de côté 9 cm.",
      en: "Calculate the perimeter of a regular pentagon with side 9 cm.",
      nl: "Bereken de omtrek van een regelmatige vijfhoek met zijde 9 cm."
    },
    // 5 . 9 = 45
    answer: 45, tolerance: 0, unit: "cm",
    hint: {
      fr: "Un pentagone régulier a 5 côtés. P = 5 . 9.",
      en: "A regular pentagon has 5 sides. P = 5 . 9.",
      nl: "Een regelmatige vijfhoek heeft 5 zijden. P = 5 . 9."
    }
  },
  {
    id: "G1_s_84", category: "G1", level: 2,
    text: {
      fr: "Calcule le périmètre d'un hexagone régulier de côté 8 cm.",
      en: "Calculate the perimeter of a regular hexagon with side 8 cm.",
      nl: "Bereken de omtrek van een regelmatige zeshoek met zijde 8 cm."
    },
    // 6 . 8 = 48
    answer: 48, tolerance: 0, unit: "cm",
    hint: {
      fr: "Un hexagone régulier a 6 côtés. P = 6 . 8.",
      en: "A regular hexagon has 6 sides. P = 6 . 8.",
      nl: "Een regelmatige zeshoek heeft 6 zijden. P = 6 . 8."
    }
  },

  // --- Rhombus / Losange ---
  {
    id: "G1_s_85", category: "G1", level: 2,
    text: {
      fr: "Un losange a un côté de 14 cm. Quel est son périmètre ?",
      en: "A rhombus has a side of 14 cm. What is its perimeter?",
      nl: "Een ruit heeft een zijde van 14 cm. Wat is de omtrek?"
    },
    // 4 . 14 = 56
    answer: 56, tolerance: 0, unit: "cm",
    hint: {
      fr: "Un losange a 4 côtés égaux. P = 4 . 14.",
      en: "A rhombus has 4 equal sides. P = 4 . 14.",
      nl: "Een ruit heeft 4 gelijke zijden. P = 4 . 14."
    }
  },

  // --- Parallelogram ---
  {
    id: "G1_s_86", category: "G1", level: 2,
    text: {
      fr: "Un parallélogramme a des côtés de 11 cm et 7 cm. Calcule son périmètre.",
      en: "A parallelogram has sides of 11 cm and 7 cm. Calculate its perimeter.",
      nl: "Een parallellogram heeft zijden van 11 cm en 7 cm. Bereken de omtrek."
    },
    // 2 . (11 + 7) = 2 . 18 = 36
    answer: 36, tolerance: 0, unit: "cm",
    hint: {
      fr: "P = 2 . (11 + 7) = 2 . 18.",
      en: "P = 2 . (11 + 7) = 2 . 18.",
      nl: "P = 2 . (11 + 7) = 2 . 18."
    }
  },

  // --- Semi-perimeter ---
  {
    id: "G1_s_87", category: "G1", level: 2,
    text: {
      fr: "Le demi-périmètre d'un rectangle est 25 cm. Sa longueur est 16 cm. Quelle est sa largeur ?",
      en: "The semi-perimeter of a rectangle is 25 cm. Its length is 16 cm. What is its width?",
      nl: "De halve omtrek van een rechthoek is 25 cm. De lengte is 16 cm. Wat is de breedte?"
    },
    // demi-P = L + l => 25 = 16 + l => l = 9
    answer: 9, tolerance: 0, unit: "cm",
    hint: {
      fr: "Demi-périmètre = L + l. Donc l = 25 - 16.",
      en: "Semi-perimeter = L + w. So w = 25 - 16.",
      nl: "Halve omtrek = L + b. Dus b = 25 - 16."
    }
  },

  // --- Right triangle ---
  {
    id: "G1_s_88", category: "G1", level: 2,
    text: {
      fr: "Un triangle rectangle a des côtés de 5 cm, 12 cm et 13 cm. Quel est son périmètre ?",
      en: "A right triangle has sides of 5 cm, 12 cm and 13 cm. What is its perimeter?",
      nl: "Een rechthoekige driehoek heeft zijden van 5 cm, 12 cm en 13 cm. Wat is de omtrek?"
    },
    // 5 + 12 + 13 = 30
    answer: 30, tolerance: 0, unit: "cm",
    hint: {
      fr: "P = 5 + 12 + 13.",
      en: "P = 5 + 12 + 13.",
      nl: "P = 5 + 12 + 13."
    }
  },

  // --- Scalene triangle ---
  {
    id: "G1_s_89", category: "G1", level: 2,
    text: {
      fr: "Un triangle a des côtés de 11 cm, 8 cm et 15 cm. Calcule son périmètre.",
      en: "A triangle has sides of 11 cm, 8 cm and 15 cm. Calculate its perimeter.",
      nl: "Een driehoek heeft zijden van 11 cm, 8 cm en 15 cm. Bereken de omtrek."
    },
    // 11 + 8 + 15 = 34
    answer: 34, tolerance: 0, unit: "cm",
    hint: {
      fr: "P = 11 + 8 + 15.",
      en: "P = 11 + 8 + 15.",
      nl: "P = 11 + 8 + 15."
    }
  },

  // --- Inverse regular pentagon ---
  {
    id: "G1_s_90", category: "G1", level: 2,
    text: {
      fr: "Un pentagone régulier a un périmètre de 60 cm. Quelle est la longueur d'un côté ?",
      en: "A regular pentagon has a perimeter of 60 cm. What is the length of one side?",
      nl: "Een regelmatige vijfhoek heeft een omtrek van 60 cm. Wat is de lengte van een zijde?"
    },
    // 60 / 5 = 12
    answer: 12, tolerance: 0, unit: "cm",
    hint: {
      fr: "Côté = 60 : 5.",
      en: "Side = 60 / 5.",
      nl: "Zijde = 60 / 5."
    }
  },

  // ===========================================================================
  // LEVEL 3 — Composite shapes, fencing, semicircles, L-shapes
  // (G1_s_91 through G1_s_111)
  // ===========================================================================

  // --- Fencing problems ---
  {
    id: "G1_s_91", category: "G1", level: 3,
    text: {
      fr: "On clôture un jardin rectangulaire de 18 m sur 12 m, mais on laisse une ouverture de 4 m pour le portail. Quelle longueur de clôture faut-il ?",
      en: "A rectangular garden 18 m by 12 m is fenced, but a 4 m opening is left for a gate. How much fencing is needed?",
      nl: "Een rechthoekige tuin van 18 m op 12 m wordt omheind, maar er wordt een opening van 4 m gelaten voor een poort. Hoeveel omheining is er nodig?"
    },
    // P = 2(18+12) = 60, minus 4 = 56
    answer: 56, tolerance: 0, unit: "m",
    hint: {
      fr: "Périmètre complet = 2 . (18 + 12) = 60 m, puis retire l'ouverture de 4 m.",
      en: "Full perimeter = 2 . (18 + 12) = 60 m, then subtract the 4 m opening.",
      nl: "Volledige omtrek = 2 . (18 + 12) = 60 m, trek dan de opening van 4 m af."
    }
  },
  {
    id: "G1_s_92", category: "G1", level: 3,
    text: {
      fr: "Un terrain rectangulaire de 40 m sur 15 m est bordé par un mur sur un petit côté. On clôture les trois autres côtés. Quelle longueur de clôture faut-il ?",
      en: "A rectangular field 40 m by 15 m has a wall along one short side. The other three sides are fenced. How much fencing is needed?",
      nl: "Een rechthoekig terrein van 40 m op 15 m heeft een muur langs een korte zijde. De drie andere zijden worden omheind. Hoeveel omheining is er nodig?"
    },
    // 3 sides: 40 + 15 + 40 = 95 (wall replaces one 15m side)
    answer: 95, tolerance: 0, unit: "m",
    hint: {
      fr: "3 côtés = 40 + 15 + 40 (le mur remplace un petit côté de 15 m).",
      en: "3 sides = 40 + 15 + 40 (the wall replaces one 15 m side).",
      nl: "3 zijden = 40 + 15 + 40 (de muur vervangt een korte zijde van 15 m)."
    }
  },
  {
    id: "G1_s_93", category: "G1", level: 3,
    text: {
      fr: "Un terrain carré de côté 20 m est bordé par une rivière sur un côté. On clôture les trois autres côtés. Quelle longueur de clôture faut-il ?",
      en: "A square field with side 20 m has a river along one side. The other three sides are fenced. How much fencing is needed?",
      nl: "Een vierkant terrein met zijde 20 m heeft een rivier langs een zijde. De drie andere zijden worden omheind. Hoeveel omheining is er nodig?"
    },
    // 3 . 20 = 60
    answer: 60, tolerance: 0, unit: "m",
    hint: {
      fr: "3 côtés = 3 . 20 = 60 m.",
      en: "3 sides = 3 . 20 = 60 m.",
      nl: "3 zijden = 3 . 20 = 60 m."
    }
  },

  // --- Semicircles ---
  {
    id: "G1_s_94", category: "G1", level: 3,
    text: {
      fr: "Calcule le périmètre d'un demi-cercle de diamètre 14 cm. (Utilise pi = 3.14)",
      en: "Calculate the perimeter of a semicircle with diameter 14 cm. (Use pi = 3.14)",
      nl: "Bereken de omtrek van een halve cirkel met diameter 14 cm. (Gebruik pi = 3,14)"
    },
    // Curved part = pi . 14 / 2 = 3.14 . 7 = 21.98
    // Straight part = 14
    // Total = 21.98 + 14 = 35.98
    answer: 35.98, tolerance: 0.1, unit: "cm",
    hint: {
      fr: "Périmètre = (pi . 14 / 2) + 14 = 21,98 + 14.",
      en: "Perimeter = (pi . 14 / 2) + 14 = 21.98 + 14.",
      nl: "Omtrek = (pi . 14 / 2) + 14 = 21,98 + 14."
    }
  },
  {
    id: "G1_s_95", category: "G1", level: 3,
    text: {
      fr: "Calcule le périmètre d'un demi-cercle de diamètre 20 cm. (Utilise pi = 3.14)",
      en: "Calculate the perimeter of a semicircle with diameter 20 cm. (Use pi = 3.14)",
      nl: "Bereken de omtrek van een halve cirkel met diameter 20 cm. (Gebruik pi = 3,14)"
    },
    // Curved part = pi . 20 / 2 = 3.14 . 10 = 31.4
    // Straight part = 20
    // Total = 31.4 + 20 = 51.4
    answer: 51.4, tolerance: 0.1, unit: "cm",
    hint: {
      fr: "Périmètre = (pi . 20 / 2) + 20 = 31,4 + 20.",
      en: "Perimeter = (pi . 20 / 2) + 20 = 31.4 + 20.",
      nl: "Omtrek = (pi . 20 / 2) + 20 = 31,4 + 20."
    }
  },
  {
    id: "G1_s_96", category: "G1", level: 3,
    text: {
      fr: "Calcule le périmètre d'un demi-cercle de diamètre 6 cm. (Utilise pi = 3.14)",
      en: "Calculate the perimeter of a semicircle with diameter 6 cm. (Use pi = 3.14)",
      nl: "Bereken de omtrek van een halve cirkel met diameter 6 cm. (Gebruik pi = 3,14)"
    },
    // Curved part = pi . 6 / 2 = 3.14 . 3 = 9.42
    // Straight part = 6
    // Total = 9.42 + 6 = 15.42
    answer: 15.42, tolerance: 0.1, unit: "cm",
    hint: {
      fr: "Périmètre = (pi . 6 / 2) + 6 = 9,42 + 6.",
      en: "Perimeter = (pi . 6 / 2) + 6 = 9.42 + 6.",
      nl: "Omtrek = (pi . 6 / 2) + 6 = 9,42 + 6."
    }
  },

  // --- L-shaped rooms ---
  {
    id: "G1_s_97", category: "G1", level: 3,
    text: {
      fr: "Une pièce en L est formée d'un grand rectangle de 12 m sur 8 m, avec un coin découpé de 4 m sur 5 m. Calcule le périmètre de cette pièce.",
      en: "An L-shaped room is formed by a 12 m by 8 m rectangle with a 4 m by 5 m corner cut out. Calculate the perimeter of this room.",
      nl: "Een L-vormige kamer is gevormd door een rechthoek van 12 m op 8 m met een uitgesneden hoek van 4 m op 5 m. Bereken de omtrek van deze kamer."
    },
    // Trace: 12 + 8 + (12-4)=8 + 5 + 4 + (8-5)=3 = 12+8+8+5+4+3 = 40
    answer: 40, tolerance: 0, unit: "m",
    hint: {
      fr: "Parcours le contour : 12 + 8 + 8 + 5 + 4 + 3 = 40 m.",
      en: "Trace the outline: 12 + 8 + 8 + 5 + 4 + 3 = 40 m.",
      nl: "Volg de omtrek: 12 + 8 + 8 + 5 + 4 + 3 = 40 m."
    }
  },
  {
    id: "G1_s_98", category: "G1", level: 3,
    text: {
      fr: "Une pièce en L est formée d'un grand rectangle de 14 m sur 10 m, avec un coin découpé de 6 m sur 4 m. Calcule le périmètre de cette pièce.",
      en: "An L-shaped room is formed by a 14 m by 10 m rectangle with a 6 m by 4 m corner cut out. Calculate the perimeter of this room.",
      nl: "Een L-vormige kamer is gevormd door een rechthoek van 14 m op 10 m met een uitgesneden hoek van 6 m op 4 m. Bereken de omtrek van deze kamer."
    },
    // Trace: 14 + 10 + (14-6)=8 + 4 + 6 + (10-4)=6 = 14+10+8+4+6+6 = 48
    answer: 48, tolerance: 0, unit: "m",
    hint: {
      fr: "Parcours le contour : 14 + 10 + 8 + 4 + 6 + 6 = 48 m.",
      en: "Trace the outline: 14 + 10 + 8 + 4 + 6 + 6 = 48 m.",
      nl: "Volg de omtrek: 14 + 10 + 8 + 4 + 6 + 6 = 48 m."
    }
  },

  // --- Composite: rectangle + semicircle ---
  {
    id: "G1_s_99", category: "G1", level: 3,
    text: {
      fr: "Une fenêtre a la forme d'un rectangle de 80 cm de haut et 40 cm de large, surmonté d'un demi-cercle de diamètre 40 cm. Calcule le périmètre de cette fenêtre. (pi = 3.14)",
      en: "A window is shaped like a rectangle 80 cm tall and 40 cm wide, topped by a semicircle with diameter 40 cm. Calculate the perimeter of this window. (pi = 3.14)",
      nl: "Een raam heeft de vorm van een rechthoek van 80 cm hoog en 40 cm breed, met daarboven een halve cirkel met diameter 40 cm. Bereken de omtrek van dit raam. (pi = 3,14)"
    },
    // Bottom: 40, two sides: 80+80=160, semicircle arc: pi.40/2 = 62.8
    // Total = 40 + 160 + 62.8 = 262.8
    answer: 262.8, tolerance: 0.1, unit: "cm",
    hint: {
      fr: "Bas (40) + deux côtés (80 + 80) + demi-cercle (pi . 40 / 2 = 62,8) = 262,8 cm.",
      en: "Bottom (40) + two sides (80 + 80) + semicircle (pi . 40 / 2 = 62.8) = 262.8 cm.",
      nl: "Onderkant (40) + twee zijden (80 + 80) + halve cirkel (pi . 40 / 2 = 62,8) = 262,8 cm."
    }
  },

  // --- Composite: two rectangles joined ---
  {
    id: "G1_s_100", category: "G1", level: 3,
    text: {
      fr: "Deux rectangles sont accolés pour former un T : un rectangle horizontal de 16 cm . 4 cm et un rectangle vertical de 4 cm . 10 cm centré en dessous. Calcule le périmètre de cette figure.",
      en: "Two rectangles form a T-shape: a horizontal rectangle 16 cm . 4 cm and a vertical rectangle 4 cm . 10 cm centered below. Calculate the perimeter of this figure.",
      nl: "Twee rechthoeken vormen een T-vorm: een horizontale rechthoek van 16 cm . 4 cm en een verticale rechthoek van 4 cm . 10 cm eronder gecentreerd. Bereken de omtrek van deze figuur."
    },
    // Trace: top 16, right side down 4, go left (16-4)/2=6, down 10, bottom 4, up 10, go left 6, up 4
    // Total: 16 + 4 + 6 + 10 + 4 + 10 + 6 + 4 = 60
    answer: 60, tolerance: 0, unit: "cm",
    hint: {
      fr: "Parcours le contour : 16 + 4 + 6 + 10 + 4 + 10 + 6 + 4 = 60 cm.",
      en: "Trace the outline: 16 + 4 + 6 + 10 + 4 + 10 + 6 + 4 = 60 cm.",
      nl: "Volg de omtrek: 16 + 4 + 6 + 10 + 4 + 10 + 6 + 4 = 60 cm."
    }
  },

  // --- Full circle circumference ---
  {
    id: "G1_s_101", category: "G1", level: 3,
    text: {
      fr: "Calcule la circonférence d'un cercle de diamètre 15 cm. (Utilise pi = 3.14)",
      en: "Calculate the circumference of a circle with diameter 15 cm. (Use pi = 3.14)",
      nl: "Bereken de omtrek van een cirkel met diameter 15 cm. (Gebruik pi = 3,14)"
    },
    // C = pi . d = 3.14 . 15 = 47.1
    answer: 47.1, tolerance: 0.1, unit: "cm",
    hint: {
      fr: "C = pi . diamètre = 3,14 . 15.",
      en: "C = pi . diameter = 3.14 . 15.",
      nl: "C = pi . diameter = 3,14 . 15."
    }
  },
  {
    id: "G1_s_102", category: "G1", level: 3,
    text: {
      fr: "Calcule la circonférence d'un cercle de rayon 10 cm. (Utilise pi = 3.14)",
      en: "Calculate the circumference of a circle with radius 10 cm. (Use pi = 3.14)",
      nl: "Bereken de omtrek van een cirkel met straal 10 cm. (Gebruik pi = 3,14)"
    },
    // C = 2 . pi . r = 2 . 3.14 . 10 = 62.8
    answer: 62.8, tolerance: 0.1, unit: "cm",
    hint: {
      fr: "C = 2 . pi . rayon = 2 . 3,14 . 10.",
      en: "C = 2 . pi . radius = 2 . 3.14 . 10.",
      nl: "C = 2 . pi . straal = 2 . 3,14 . 10."
    }
  },

  // --- Garden path border ---
  {
    id: "G1_s_103", category: "G1", level: 3,
    text: {
      fr: "Un jardin rectangulaire de 20 m sur 14 m est entouré d'un chemin de 2 m de large. Calcule le périmètre extérieur du chemin.",
      en: "A rectangular garden 20 m by 14 m is surrounded by a 2 m wide path. Calculate the outer perimeter of the path.",
      nl: "Een rechthoekige tuin van 20 m op 14 m is omgeven door een pad van 2 m breed. Bereken de buitenomtrek van het pad."
    },
    // Outer rectangle: (20+2+2) . (14+2+2) = 24 . 18
    // P = 2 . (24 + 18) = 2 . 42 = 84
    answer: 84, tolerance: 0, unit: "m",
    hint: {
      fr: "Rectangle extérieur : (20+4) . (14+4) = 24 . 18. P = 2 . (24 + 18) = 84 m.",
      en: "Outer rectangle: (20+4) . (14+4) = 24 . 18. P = 2 . (24 + 18) = 84 m.",
      nl: "Buitenste rechthoek: (20+4) . (14+4) = 24 . 18. P = 2 . (24 + 18) = 84 m."
    }
  },

  // --- Composite: three squares in a row ---
  {
    id: "G1_s_104", category: "G1", level: 3,
    text: {
      fr: "Trois carrés de côté 5 cm sont placés côte à côte en une rangée pour former un rectangle. Quel est le périmètre du rectangle obtenu ?",
      en: "Three squares with side 5 cm are placed side by side in a row to form a rectangle. What is the perimeter of the resulting rectangle?",
      nl: "Drie vierkanten met zijde 5 cm worden naast elkaar in een rij geplaatst om een rechthoek te vormen. Wat is de omtrek van de resulterende rechthoek?"
    },
    // Rectangle 15 cm . 5 cm => P = 2(15+5) = 40
    answer: 40, tolerance: 0, unit: "cm",
    hint: {
      fr: "Le rectangle obtenu mesure 15 cm . 5 cm. P = 2 . (15 + 5) = 40.",
      en: "The resulting rectangle is 15 cm . 5 cm. P = 2 . (15 + 5) = 40.",
      nl: "De resulterende rechthoek is 15 cm . 5 cm. P = 2 . (15 + 5) = 40."
    }
  },

  // --- Quarter circle ---
  {
    id: "G1_s_105", category: "G1", level: 3,
    text: {
      fr: "Calcule le périmètre d'un quart de cercle de rayon 10 cm. (pi = 3.14)",
      en: "Calculate the perimeter of a quarter circle with radius 10 cm. (pi = 3.14)",
      nl: "Bereken de omtrek van een kwart cirkel met straal 10 cm. (pi = 3,14)"
    },
    // Arc = 2 . pi . 10 / 4 = 3.14 . 20 / 4 = 15.7
    // Two radii = 10 + 10 = 20
    // Total = 15.7 + 20 = 35.7
    answer: 35.7, tolerance: 0.1, unit: "cm",
    hint: {
      fr: "Arc = 2 . pi . 10 / 4 = 15,7 cm. Ajoute les deux rayons : 15,7 + 10 + 10 = 35,7 cm.",
      en: "Arc = 2 . pi . 10 / 4 = 15.7 cm. Add the two radii: 15.7 + 10 + 10 = 35.7 cm.",
      nl: "Boog = 2 . pi . 10 / 4 = 15,7 cm. Voeg de twee stralen toe: 15,7 + 10 + 10 = 35,7 cm."
    }
  },

  // --- Missing side in a polygon ---
  {
    id: "G1_s_106", category: "G1", level: 3,
    text: {
      fr: "Un hexagone a un périmètre de 54 cm. Cinq de ses côtés mesurent 10 cm, 8 cm, 11 cm, 9 cm et 7 cm. Quelle est la longueur du sixième côté ?",
      en: "A hexagon has a perimeter of 54 cm. Five of its sides measure 10 cm, 8 cm, 11 cm, 9 cm and 7 cm. What is the length of the sixth side?",
      nl: "Een zeshoek heeft een omtrek van 54 cm. Vijf zijden meten 10 cm, 8 cm, 11 cm, 9 cm en 7 cm. Wat is de lengte van de zesde zijde?"
    },
    // 54 - (10+8+11+9+7) = 54 - 45 = 9
    answer: 9, tolerance: 0, unit: "cm",
    hint: {
      fr: "Côté manquant = 54 - (10 + 8 + 11 + 9 + 7) = 54 - 45.",
      en: "Missing side = 54 - (10 + 8 + 11 + 9 + 7) = 54 - 45.",
      nl: "Ontbrekende zijde = 54 - (10 + 8 + 11 + 9 + 7) = 54 - 45."
    }
  },

  // --- Real-world: ribbon around a rectangular gift ---
  {
    id: "G1_s_107", category: "G1", level: 3,
    text: {
      fr: "On entoure un cadeau rectangulaire de 30 cm sur 20 cm avec un ruban qui fait le tour complet plus un noeud de 15 cm. Quelle longueur de ruban faut-il ?",
      en: "A ribbon goes around a rectangular gift 30 cm by 20 cm, plus a 15 cm bow. How much ribbon is needed?",
      nl: "Een lint gaat rond een rechthoekig cadeau van 30 cm op 20 cm, plus een strik van 15 cm. Hoeveel lint is er nodig?"
    },
    // P = 2(30+20) = 100, + 15 = 115
    answer: 115, tolerance: 0, unit: "cm",
    hint: {
      fr: "Périmètre = 2 . (30 + 20) = 100 cm, plus le noeud de 15 cm.",
      en: "Perimeter = 2 . (30 + 20) = 100 cm, plus the 15 cm bow.",
      nl: "Omtrek = 2 . (30 + 20) = 100 cm, plus de strik van 15 cm."
    }
  },

  // --- Composite: rectangle with triangle on top (house facade) ---
  {
    id: "G1_s_108", category: "G1", level: 3,
    text: {
      fr: "Une façade de maison a la forme d'un rectangle de 10 m de large et 6 m de haut, surmonté d'un triangle isocèle dont les deux côtés du toit mesurent chacun 6 m. Calcule le périmètre de cette façade.",
      en: "A house facade is a rectangle 10 m wide and 6 m tall, topped by an isosceles triangle whose two roof sides each measure 6 m. Calculate the perimeter of this facade.",
      nl: "Een huisgevel is een rechthoek van 10 m breed en 6 m hoog, met daarboven een gelijkbenige driehoek waarvan de twee dakzijden elk 6 m meten. Bereken de omtrek van deze gevel."
    },
    // Outline: bottom 10, left side 6, left roof 6, right roof 6, right side 6
    // Total: 10 + 6 + 6 + 6 + 6 = 34
    answer: 34, tolerance: 0, unit: "m",
    hint: {
      fr: "Contour : bas 10 + côté gauche 6 + toit gauche 6 + toit droit 6 + côté droit 6 = 34 m.",
      en: "Outline: bottom 10 + left side 6 + left roof 6 + right roof 6 + right side 6 = 34 m.",
      nl: "Omtrek: onderkant 10 + linkerzijde 6 + linkerdak 6 + rechterdak 6 + rechterzijde 6 = 34 m."
    }
  },

  // --- Wheel distance ---
  {
    id: "G1_s_109", category: "G1", level: 3,
    text: {
      fr: "Une roue a un diamètre de 30 cm. Quelle distance parcourt-elle en un tour complet ? (pi = 3.14)",
      en: "A wheel has a diameter of 30 cm. What distance does it cover in one full turn? (pi = 3.14)",
      nl: "Een wiel heeft een diameter van 30 cm. Welke afstand legt het af in een volledige omwenteling? (pi = 3,14)"
    },
    // C = pi . d = 3.14 . 30 = 94.2
    answer: 94.2, tolerance: 0.1, unit: "cm",
    hint: {
      fr: "Distance = pi . diamètre = 3,14 . 30.",
      en: "Distance = pi . diameter = 3.14 . 30.",
      nl: "Afstand = pi . diameter = 3,14 . 30."
    }
  },

  // --- Composite: stadium shape (rectangle + two semicircles) ---
  {
    id: "G1_s_110", category: "G1", level: 3,
    text: {
      fr: "Une piste a la forme d'un rectangle de 30 m sur 14 m, avec un demi-cercle à chaque extrémité (diamètre = 14 m). Calcule le périmètre total. (pi = 3.14)",
      en: "A track is shaped like a 30 m by 14 m rectangle with a semicircle on each short end (diameter = 14 m). Calculate the total perimeter. (pi = 3.14)",
      nl: "Een baan heeft de vorm van een rechthoek van 30 m op 14 m, met een halve cirkel aan elke korte zijde (diameter = 14 m). Bereken de totale omtrek. (pi = 3,14)"
    },
    // Two long sides: 2 . 30 = 60
    // Two semicircles = one full circle of diameter 14: pi . 14 = 43.96
    // Total = 60 + 43.96 = 103.96
    answer: 103.96, tolerance: 0.1, unit: "m",
    hint: {
      fr: "2 longueurs (2 . 30 = 60 m) + 2 demi-cercles = 1 cercle (pi . 14 = 43,96 m). Total = 103,96 m.",
      en: "2 lengths (2 . 30 = 60 m) + 2 semicircles = 1 full circle (pi . 14 = 43.96 m). Total = 103.96 m.",
      nl: "2 lengtes (2 . 30 = 60 m) + 2 halve cirkels = 1 volledige cirkel (pi . 14 = 43,96 m). Totaal = 103,96 m."
    }
  },

  // --- Fencing with two openings ---
  {
    id: "G1_s_111", category: "G1", level: 3,
    text: {
      fr: "Un terrain rectangulaire de 35 m sur 20 m doit être clôturé. On prévoit deux ouvertures : un portail de 4 m et une porte piétonne de 1 m. Quelle longueur de clôture faut-il ?",
      en: "A rectangular field 35 m by 20 m must be fenced. Two openings are planned: a 4 m gate and a 1 m pedestrian door. How much fencing is needed?",
      nl: "Een rechthoekig terrein van 35 m op 20 m moet worden omheind. Er worden twee openingen voorzien: een poort van 4 m en een voetgangersdeur van 1 m. Hoeveel omheining is er nodig?"
    },
    // P = 2(35+20) = 110, minus 4 minus 1 = 105
    answer: 105, tolerance: 0, unit: "m",
    hint: {
      fr: "Périmètre complet = 2 . (35 + 20) = 110 m. Retire les ouvertures : 110 - 4 - 1 = 105 m.",
      en: "Full perimeter = 2 . (35 + 20) = 110 m. Subtract the openings: 110 - 4 - 1 = 105 m.",
      nl: "Volledige omtrek = 2 . (35 + 20) = 110 m. Trek de openingen af: 110 - 4 - 1 = 105 m."
    }
  },

  // --- Additional questions (G1_s_112 – G1_s_118) ---
  {
    id: "G1_s_112", category: "G1", level: 1,
    text: {
      fr: "Calcule le périmètre d'un carré de côté 13 cm.",
      en: "Calculate the perimeter of a square with side 13 cm.",
      nl: "Bereken de omtrek van een vierkant met zijde 13 cm."
    },
    answer: 52, tolerance: 0, unit: "cm",
    hint: {
      fr: "Périmètre = 4 . 13 = 52 cm.",
      en: "Perimeter = 4 . 13 = 52 cm.",
      nl: "Omtrek = 4 . 13 = 52 cm."
    }
  },
  {
    id: "G1_s_113", category: "G1", level: 1,
    text: {
      fr: "Un rectangle mesure 18 cm de long et 7 cm de large. Quel est son périmètre ?",
      en: "A rectangle is 18 cm long and 7 cm wide. What is its perimeter?",
      nl: "Een rechthoek is 18 cm lang en 7 cm breed. Wat is de omtrek?"
    },
    answer: 50, tolerance: 0, unit: "cm",
    hint: {
      fr: "P = 2 . (18 + 7) = 2 . 25 = 50 cm.",
      en: "P = 2 . (18 + 7) = 2 . 25 = 50 cm.",
      nl: "P = 2 . (18 + 7) = 2 . 25 = 50 cm."
    }
  },
  {
    id: "G1_s_114", category: "G1", level: 1,
    text: {
      fr: "Calcule le périmètre d'un triangle équilatéral de côté 9 cm.",
      en: "Calculate the perimeter of an equilateral triangle with side 9 cm.",
      nl: "Bereken de omtrek van een gelijkzijdige driehoek met zijde 9 cm."
    },
    answer: 27, tolerance: 0, unit: "cm",
    hint: {
      fr: "P = 3 . 9 = 27 cm.",
      en: "P = 3 . 9 = 27 cm.",
      nl: "P = 3 . 9 = 27 cm."
    }
  },
  {
    id: "G1_s_115", category: "G1", level: 2,
    text: {
      fr: "Un triangle isocèle a deux côtés de 12 cm et une base de 7 cm. Quel est son périmètre ?",
      en: "An isosceles triangle has two sides of 12 cm and a base of 7 cm. What is its perimeter?",
      nl: "Een gelijkbenige driehoek heeft twee zijden van 12 cm en een basis van 7 cm. Wat is de omtrek?"
    },
    answer: 31, tolerance: 0, unit: "cm",
    hint: {
      fr: "P = 12 + 12 + 7 = 31 cm.",
      en: "P = 12 + 12 + 7 = 31 cm.",
      nl: "P = 12 + 12 + 7 = 31 cm."
    }
  },
  {
    id: "G1_s_116", category: "G1", level: 2,
    text: {
      fr: "Calcule le périmètre d'un hexagone régulier de côté 6 cm.",
      en: "Calculate the perimeter of a regular hexagon with side 6 cm.",
      nl: "Bereken de omtrek van een regelmatige zeshoek met zijde 6 cm."
    },
    answer: 36, tolerance: 0, unit: "cm",
    hint: {
      fr: "P = 6 . 6 = 36 cm.",
      en: "P = 6 . 6 = 36 cm.",
      nl: "P = 6 . 6 = 36 cm."
    }
  },
  {
    id: "G1_s_117", category: "G1", level: 3,
    text: {
      fr: "Un terrain rectangulaire de 40 m sur 25 m est entouré d'un chemin de 2 m de large à l'extérieur. Quel est le périmètre extérieur du chemin ?",
      en: "A rectangular field 40 m by 25 m is surrounded by a 2 m wide path on the outside. What is the outer perimeter of the path?",
      nl: "Een rechthoekig terrein van 40 m op 25 m is omgeven door een pad van 2 m breed aan de buitenkant. Wat is de buitenomtrek van het pad?"
    },
    answer: 146, tolerance: 0, unit: "m",
    hint: {
      fr: "Dimensions extérieures : (40 + 2.2) = 44 m et (25 + 2.2) = 29 m. P = 2 . (44 + 29) = 146 m.",
      en: "Outer dimensions: (40 + 2.2) = 44 m and (25 + 2.2) = 29 m. P = 2 . (44 + 29) = 146 m.",
      nl: "Buitenafmetingen: (40 + 2.2) = 44 m en (25 + 2.2) = 29 m. P = 2 . (44 + 29) = 146 m."
    }
  },
  {
    id: "G1_s_118", category: "G1", level: 3,
    text: {
      fr: "Calcule la circonférence d'un cercle de diamètre 10 cm. Arrondis au centième.",
      en: "Calculate the circumference of a circle with diameter 10 cm. Round to the nearest hundredth.",
      nl: "Bereken de omtrek van een cirkel met diameter 10 cm. Rond af op honderdsten."
    },
    answer: 31.42, tolerance: 0.01, unit: "cm",
    hint: {
      fr: "C = π . d = π . 10 ≈ 31,42 cm.",
      en: "C = π . d = π . 10 ≈ 31.42 cm.",
      nl: "C = π . d = π . 10 ≈ 31,42 cm."
    }
  },
];

// =============================================================================
// Procedural generator for G1 - Perimeters and distances
// =============================================================================

/**
 * Generates a random question for category G1.
 * @param {1|2|3} level - Difficulty level
 * @returns {object} Generated question object
 */
export function generate(level = 1) {
  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const id = `G1_gen_${Date.now()}_${rand(100, 999)}`;

  if (level === 1) {
    // Randomly pick among rectangle, square, equilateral triangle
    const shape = rand(1, 3);

    if (shape === 1) {
      // Rectangle perimeter
      const a = rand(3, 20);
      const b = rand(3, 15);
      return {
        id, category: 'G1', level,
        text: {
          fr: `Calcule le périmètre d'un rectangle de ${a} cm sur ${b} cm.`,
          en: `Calculate the perimeter of a ${a} cm by ${b} cm rectangle.`,
          nl: `Bereken de omtrek van een rechthoek van ${a} cm op ${b} cm.`
        },
        answer: 2 * (a + b), tolerance: 0, unit: 'cm',
        hint: {
          fr: `P = 2 . (${a} + ${b}).`,
          en: `P = 2 . (${a} + ${b}).`,
          nl: `P = 2 . (${a} + ${b}).`
        }
      };
    }

    if (shape === 2) {
      // Square perimeter
      const s = rand(3, 20);
      return {
        id, category: 'G1', level,
        text: {
          fr: `Calcule le périmètre d'un carré de côté ${s} cm.`,
          en: `Calculate the perimeter of a square with side ${s} cm.`,
          nl: `Bereken de omtrek van een vierkant met zijde ${s} cm.`
        },
        answer: 4 * s, tolerance: 0, unit: 'cm',
        hint: {
          fr: `P = 4 . ${s}.`,
          en: `P = 4 . ${s}.`,
          nl: `P = 4 . ${s}.`
        }
      };
    }

    // Equilateral triangle perimeter
    const s = rand(3, 18);
    return {
      id, category: 'G1', level,
      text: {
        fr: `Calcule le périmètre d'un triangle équilatéral de côté ${s} cm.`,
        en: `Calculate the perimeter of an equilateral triangle with side ${s} cm.`,
        nl: `Bereken de omtrek van een gelijkzijdige driehoek met zijde ${s} cm.`
      },
      answer: 3 * s, tolerance: 0, unit: 'cm',
      hint: {
        fr: `P = 3 . ${s}.`,
        en: `P = 3 . ${s}.`,
        nl: `P = 3 . ${s}.`
      }
    };
  }

  if (level === 2) {
    // Randomly pick among inverse-square, inverse-rectangle, isosceles triangle
    const type = rand(1, 3);

    if (type === 1) {
      // Inverse square: find the side from the perimeter
      const side = rand(5, 20);
      const p = 4 * side;
      return {
        id, category: 'G1', level,
        text: {
          fr: `Un carré a un périmètre de ${p} cm. Quel est son côté ?`,
          en: `A square has a perimeter of ${p} cm. What is its side?`,
          nl: `Een vierkant heeft een omtrek van ${p} cm. Wat is de zijde?`
        },
        answer: side, tolerance: 0, unit: 'cm',
        hint: {
          fr: `Côté = ${p} : 4.`,
          en: `Side = ${p} / 4.`,
          nl: `Zijde = ${p} / 4.`
        }
      };
    }

    if (type === 2) {
      // Inverse rectangle: find the width from perimeter and length
      const l = rand(5, 20);
      const w = rand(3, 15);
      const p = 2 * (l + w);
      return {
        id, category: 'G1', level,
        text: {
          fr: `Le périmètre d'un rectangle est ${p} cm et sa longueur est ${l} cm. Quelle est sa largeur ?`,
          en: `The perimeter of a rectangle is ${p} cm and its length is ${l} cm. What is its width?`,
          nl: `De omtrek van een rechthoek is ${p} cm en de lengte is ${l} cm. Wat is de breedte?`
        },
        answer: w, tolerance: 0, unit: 'cm',
        hint: {
          fr: `${p} = 2 . (${l} + l). Résous pour l.`,
          en: `${p} = 2 . (${l} + w). Solve for w.`,
          nl: `${p} = 2 . (${l} + b). Los op naar b.`
        }
      };
    }

    // Isosceles triangle perimeter
    const equal = rand(5, 15);
    const base = rand(3, 12);
    return {
      id, category: 'G1', level,
      text: {
        fr: `Un triangle isocèle a deux côtés de ${equal} cm et une base de ${base} cm. Quel est son périmètre ?`,
        en: `An isosceles triangle has two sides of ${equal} cm and a base of ${base} cm. What is its perimeter?`,
        nl: `Een gelijkbenige driehoek heeft twee zijden van ${equal} cm en een basis van ${base} cm. Wat is de omtrek?`
      },
      answer: 2 * equal + base, tolerance: 0, unit: 'cm',
      hint: {
        fr: `P = ${equal} + ${equal} + ${base}.`,
        en: `P = ${equal} + ${equal} + ${base}.`,
        nl: `P = ${equal} + ${equal} + ${base}.`
      }
    };
  }

  // Level 3: regular polygon perimeter
  const sides = rand(5, 10);
  const s = rand(3, 12);
  const shapeNames = {
    fr: { 5: 'pentagone', 6: 'hexagone', 7: 'heptagone', 8: 'octogone', 9: 'ennéagone', 10: 'décagone' },
    en: { 5: 'pentagon', 6: 'hexagon', 7: 'heptagon', 8: 'octagon', 9: 'nonagon', 10: 'decagon' },
    nl: { 5: 'vijfhoek', 6: 'zeshoek', 7: 'zevenhoek', 8: 'achthoek', 9: 'negenhoek', 10: 'tienhoek' }
  };
  return {
    id, category: 'G1', level,
    text: {
      fr: `Calcule le périmètre d'un ${shapeNames.fr[sides]} régulier de côté ${s} cm.`,
      en: `Calculate the perimeter of a regular ${shapeNames.en[sides]} with side ${s} cm.`,
      nl: `Bereken de omtrek van een regelmatige ${shapeNames.nl[sides]} met zijde ${s} cm.`
    },
    answer: sides * s, tolerance: 0, unit: 'cm',
    hint: {
      fr: `P = ${sides} . ${s}.`,
      en: `P = ${sides} . ${s}.`,
      nl: `P = ${sides} . ${s}.`
    }
  };
}
