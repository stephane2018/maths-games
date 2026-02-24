// =============================================================================
// N1 - Calcul numérique (Numerical computation)
// CE1D Belgian exam - Trilingual (FR / EN / NL)
// 112 questions: ~38 per level
// =============================================================================

export const questions = [
  // ===========================================================================
  // LEVEL 1 — Basic arithmetic with order of operations (17 questions)
  // No parentheses, no powers. Mix of +, -, ×, ÷.
  // Answers in range -50 to 200.
  // ===========================================================================
  {
    id: "N1_s_1", category: "N1", level: 1,
    text: { fr: "Calcule : 25 - 4 × 3", en: "Calculate: 25 - 4 × 3", nl: "Bereken: 25 - 4 × 3" },
    // 25 - 12 = 13
    answer: 13, tolerance: 0,
    hint: {
      fr: "Effectue d'abord la multiplication, puis la soustraction.",
      en: "Do the multiplication first, then the subtraction.",
      nl: "Doe eerst de vermenigvuldiging, dan de aftrekking."
    }
  },
  {
    id: "N1_s_2", category: "N1", level: 1,
    text: { fr: "Calcule : 6 + 18 ÷ 3", en: "Calculate: 6 + 18 ÷ 3", nl: "Bereken: 6 + 18 ÷ 3" },
    // 6 + 6 = 12
    answer: 12, tolerance: 0,
    hint: {
      fr: "Effectue d'abord la division, puis l'addition.",
      en: "Do the division first, then the addition.",
      nl: "Doe eerst de deling, dan de optelling."
    }
  },
  {
    id: "N1_s_3", category: "N1", level: 1,
    text: { fr: "Calcule : 7 × 8 - 15", en: "Calculate: 7 × 8 - 15", nl: "Bereken: 7 × 8 - 15" },
    // 56 - 15 = 41
    answer: 41, tolerance: 0,
    hint: {
      fr: "Effectue d'abord la multiplication, puis la soustraction.",
      en: "Do the multiplication first, then the subtraction.",
      nl: "Doe eerst de vermenigvuldiging, dan de aftrekking."
    }
  },
  {
    id: "N1_s_4", category: "N1", level: 1,
    text: { fr: "Calcule : 50 - 3 × 9", en: "Calculate: 50 - 3 × 9", nl: "Bereken: 50 - 3 × 9" },
    // 50 - 27 = 23
    answer: 23, tolerance: 0,
    hint: {
      fr: "Effectue d'abord la multiplication, puis la soustraction.",
      en: "Do the multiplication first, then the subtraction.",
      nl: "Doe eerst de vermenigvuldiging, dan de aftrekking."
    }
  },
  {
    id: "N1_s_5", category: "N1", level: 1,
    text: { fr: "Calcule : 12 + 5 × 6", en: "Calculate: 12 + 5 × 6", nl: "Bereken: 12 + 5 × 6" },
    // 12 + 30 = 42
    answer: 42, tolerance: 0,
    hint: {
      fr: "La multiplication est prioritaire sur l'addition.",
      en: "Multiplication takes priority over addition.",
      nl: "Vermenigvuldiging heeft voorrang op optelling."
    }
  },
  {
    id: "N1_s_6", category: "N1", level: 1,
    text: { fr: "Calcule : 48 ÷ 6 + 3 × 7", en: "Calculate: 48 ÷ 6 + 3 × 7", nl: "Bereken: 48 ÷ 6 + 3 × 7" },
    // 8 + 21 = 29
    answer: 29, tolerance: 0,
    hint: {
      fr: "Effectue d'abord la division et la multiplication, puis l'addition.",
      en: "Do the division and multiplication first, then the addition.",
      nl: "Doe eerst de deling en vermenigvuldiging, dan de optelling."
    }
  },
  {
    id: "N1_s_7", category: "N1", level: 1,
    text: { fr: "Calcule : 100 - 8 × 7 + 3", en: "Calculate: 100 - 8 × 7 + 3", nl: "Bereken: 100 - 8 × 7 + 3" },
    // 100 - 56 + 3 = 47
    answer: 47, tolerance: 0,
    hint: {
      fr: "Effectue d'abord la multiplication, puis les additions et soustractions de gauche à droite.",
      en: "Do the multiplication first, then additions and subtractions from left to right.",
      nl: "Doe eerst de vermenigvuldiging, dan optellingen en aftrekkingen van links naar rechts."
    }
  },
  {
    id: "N1_s_8", category: "N1", level: 1,
    text: { fr: "Calcule : 9 × 5 + 36 ÷ 4", en: "Calculate: 9 × 5 + 36 ÷ 4", nl: "Bereken: 9 × 5 + 36 ÷ 4" },
    // 45 + 9 = 54
    answer: 54, tolerance: 0,
    hint: {
      fr: "Effectue les multiplications et divisions avant l'addition.",
      en: "Do multiplications and divisions before the addition.",
      nl: "Doe vermenigvuldigingen en delingen voor de optelling."
    }
  },
  {
    id: "N1_s_9", category: "N1", level: 1,
    text: { fr: "Calcule : 72 ÷ 8 - 2 × 3", en: "Calculate: 72 ÷ 8 - 2 × 3", nl: "Bereken: 72 ÷ 8 - 2 × 3" },
    // 9 - 6 = 3
    answer: 3, tolerance: 0,
    hint: {
      fr: "Effectue la division et la multiplication avant la soustraction.",
      en: "Do the division and multiplication before the subtraction.",
      nl: "Doe de deling en vermenigvuldiging voor de aftrekking."
    }
  },
  {
    id: "N1_s_10", category: "N1", level: 1,
    text: { fr: "Calcule : 15 + 4 × 8 - 10", en: "Calculate: 15 + 4 × 8 - 10", nl: "Bereken: 15 + 4 × 8 - 10" },
    // 15 + 32 - 10 = 37
    answer: 37, tolerance: 0,
    hint: {
      fr: "Effectue d'abord la multiplication, puis les additions et soustractions.",
      en: "Do the multiplication first, then additions and subtractions.",
      nl: "Doe eerst de vermenigvuldiging, dan optellingen en aftrekkingen."
    }
  },
  {
    id: "N1_s_11", category: "N1", level: 1,
    text: { fr: "Calcule : 60 ÷ 5 + 7 × 3", en: "Calculate: 60 ÷ 5 + 7 × 3", nl: "Bereken: 60 ÷ 5 + 7 × 3" },
    // 12 + 21 = 33
    answer: 33, tolerance: 0,
    hint: {
      fr: "Division et multiplication sont prioritaires sur l'addition.",
      en: "Division and multiplication take priority over addition.",
      nl: "Deling en vermenigvuldiging hebben voorrang op optelling."
    }
  },
  {
    id: "N1_s_12", category: "N1", level: 1,
    text: { fr: "Calcule : 5 × 9 - 40 ÷ 8", en: "Calculate: 5 × 9 - 40 ÷ 8", nl: "Bereken: 5 × 9 - 40 ÷ 8" },
    // 45 - 5 = 40
    answer: 40, tolerance: 0,
    hint: {
      fr: "Effectue la multiplication et la division avant la soustraction.",
      en: "Do the multiplication and division before the subtraction.",
      nl: "Doe de vermenigvuldiging en deling voor de aftrekking."
    }
  },
  {
    id: "N1_s_13", category: "N1", level: 1,
    text: { fr: "Calcule : 3 × 6 + 2 × 8", en: "Calculate: 3 × 6 + 2 × 8", nl: "Bereken: 3 × 6 + 2 × 8" },
    // 18 + 16 = 34
    answer: 34, tolerance: 0,
    hint: {
      fr: "Effectue les deux multiplications, puis additionne les résultats.",
      en: "Do both multiplications, then add the results.",
      nl: "Doe beide vermenigvuldigingen, tel dan de resultaten op."
    }
  },
  {
    id: "N1_s_14", category: "N1", level: 1,
    text: { fr: "Calcule : 90 - 6 × 8 - 7", en: "Calculate: 90 - 6 × 8 - 7", nl: "Bereken: 90 - 6 × 8 - 7" },
    // 90 - 48 - 7 = 35
    answer: 35, tolerance: 0,
    hint: {
      fr: "Effectue d'abord la multiplication, puis les soustractions de gauche à droite.",
      en: "Do the multiplication first, then subtractions from left to right.",
      nl: "Doe eerst de vermenigvuldiging, dan aftrekkingen van links naar rechts."
    }
  },
  {
    id: "N1_s_15", category: "N1", level: 1,
    text: { fr: "Calcule : 8 + 56 ÷ 7 - 3", en: "Calculate: 8 + 56 ÷ 7 - 3", nl: "Bereken: 8 + 56 ÷ 7 - 3" },
    // 8 + 8 - 3 = 13
    answer: 13, tolerance: 0,
    hint: {
      fr: "Effectue d'abord la division, puis l'addition et la soustraction.",
      en: "Do the division first, then addition and subtraction.",
      nl: "Doe eerst de deling, dan optelling en aftrekking."
    }
  },
  {
    id: "N1_s_16", category: "N1", level: 1,
    text: { fr: "Calcule : 4 × 7 + 3 × 9 - 20", en: "Calculate: 4 × 7 + 3 × 9 - 20", nl: "Bereken: 4 × 7 + 3 × 9 - 20" },
    // 28 + 27 - 20 = 35
    answer: 35, tolerance: 0,
    hint: {
      fr: "Effectue d'abord les multiplications, puis les additions et soustractions.",
      en: "Do the multiplications first, then additions and subtractions.",
      nl: "Doe eerst de vermenigvuldigingen, dan optellingen en aftrekkingen."
    }
  },
  {
    id: "N1_s_17", category: "N1", level: 1,
    text: { fr: "Calcule : 81 ÷ 9 + 64 ÷ 8", en: "Calculate: 81 ÷ 9 + 64 ÷ 8", nl: "Bereken: 81 ÷ 9 + 64 ÷ 8" },
    // 9 + 8 = 17
    answer: 17, tolerance: 0,
    hint: {
      fr: "Effectue les deux divisions, puis additionne les résultats.",
      en: "Do both divisions, then add the results.",
      nl: "Doe beide delingen, tel dan de resultaten op."
    }
  },

  // ===========================================================================
  // LEVEL 2 — Expressions with powers (², ³) and multiple operations (17 questions)
  // Small powers (base 2-5, exponent 2-3). Answers in range -200 to 500.
  // ===========================================================================
  {
    id: "N1_s_18", category: "N1", level: 2,
    text: { fr: "Calcule : 40 - 5 × 2²", en: "Calculate: 40 - 5 × 2²", nl: "Bereken: 40 - 5 × 2²" },
    // 40 - 5 × 4 = 40 - 20 = 20
    answer: 20, tolerance: 0,
    hint: {
      fr: "Calcule d'abord la puissance, puis la multiplication, puis la soustraction.",
      en: "Calculate the power first, then the multiplication, then the subtraction.",
      nl: "Bereken eerst de macht, dan de vermenigvuldiging, dan de aftrekking."
    }
  },
  {
    id: "N1_s_19", category: "N1", level: 2,
    text: { fr: "Calcule : 56 - 5 × 2³", en: "Calculate: 56 - 5 × 2³", nl: "Bereken: 56 - 5 × 2³" },
    // 56 - 5 × 8 = 56 - 40 = 16
    answer: 16, tolerance: 0,
    hint: {
      fr: "Calcule d'abord 2³, puis la multiplication, puis la soustraction.",
      en: "Calculate 2³ first, then the multiplication, then the subtraction.",
      nl: "Bereken eerst 2³, dan de vermenigvuldiging, dan de aftrekking."
    }
  },
  {
    id: "N1_s_20", category: "N1", level: 2,
    text: { fr: "Calcule : 3² + 4 × 5", en: "Calculate: 3² + 4 × 5", nl: "Bereken: 3² + 4 × 5" },
    // 9 + 20 = 29
    answer: 29, tolerance: 0,
    hint: {
      fr: "Calcule d'abord la puissance et la multiplication, puis additionne.",
      en: "Calculate the power and the multiplication first, then add.",
      nl: "Bereken eerst de macht en de vermenigvuldiging, tel dan op."
    }
  },
  {
    id: "N1_s_21", category: "N1", level: 2,
    text: { fr: "Calcule : 5² - 3 × 4", en: "Calculate: 5² - 3 × 4", nl: "Bereken: 5² - 3 × 4" },
    // 25 - 12 = 13
    answer: 13, tolerance: 0,
    hint: {
      fr: "Calcule d'abord 5², puis la multiplication, puis la soustraction.",
      en: "Calculate 5² first, then the multiplication, then the subtraction.",
      nl: "Bereken eerst 5², dan de vermenigvuldiging, dan de aftrekking."
    }
  },
  {
    id: "N1_s_22", category: "N1", level: 2,
    text: { fr: "Calcule : 2⁴ + 3² × 2", en: "Calculate: 2⁴ + 3² × 2", nl: "Bereken: 2⁴ + 3² × 2" },
    // 16 + 9 × 2 = 16 + 18 = 34
    answer: 34, tolerance: 0,
    hint: {
      fr: "Calcule d'abord les puissances, puis la multiplication, puis l'addition.",
      en: "Calculate powers first, then the multiplication, then the addition.",
      nl: "Bereken eerst de machten, dan de vermenigvuldiging, dan de optelling."
    }
  },
  {
    id: "N1_s_23", category: "N1", level: 2,
    text: { fr: "Calcule : 75 - 3 × 3²", en: "Calculate: 75 - 3 × 3²", nl: "Bereken: 75 - 3 × 3²" },
    // 75 - 3 × 9 = 75 - 27 = 48
    answer: 48, tolerance: 0,
    hint: {
      fr: "Calcule d'abord 3², puis la multiplication, puis la soustraction.",
      en: "Calculate 3² first, then the multiplication, then the subtraction.",
      nl: "Bereken eerst 3², dan de vermenigvuldiging, dan de aftrekking."
    }
  },
  {
    id: "N1_s_24", category: "N1", level: 2,
    text: { fr: "Calcule : 4³ - 2 × 5²", en: "Calculate: 4³ - 2 × 5²", nl: "Bereken: 4³ - 2 × 5²" },
    // 64 - 2 × 25 = 64 - 50 = 14
    answer: 14, tolerance: 0,
    hint: {
      fr: "Calcule les puissances d'abord : 4³ et 5², puis la multiplication, puis la soustraction.",
      en: "Calculate powers first: 4³ and 5², then the multiplication, then the subtraction.",
      nl: "Bereken eerst de machten: 4³ en 5², dan de vermenigvuldiging, dan de aftrekking."
    }
  },
  {
    id: "N1_s_25", category: "N1", level: 2,
    text: { fr: "Calcule : 10 + 2³ × 3", en: "Calculate: 10 + 2³ × 3", nl: "Bereken: 10 + 2³ × 3" },
    // 10 + 8 × 3 = 10 + 24 = 34
    answer: 34, tolerance: 0,
    hint: {
      fr: "Calcule d'abord la puissance, puis la multiplication, puis l'addition.",
      en: "Calculate the power first, then the multiplication, then the addition.",
      nl: "Bereken eerst de macht, dan de vermenigvuldiging, dan de optelling."
    }
  },
  {
    id: "N1_s_26", category: "N1", level: 2,
    text: { fr: "Calcule : 100 - 4² × 3", en: "Calculate: 100 - 4² × 3", nl: "Bereken: 100 - 4² × 3" },
    // 100 - 16 × 3 = 100 - 48 = 52
    answer: 52, tolerance: 0,
    hint: {
      fr: "Calcule 4² d'abord, puis la multiplication, puis la soustraction.",
      en: "Calculate 4² first, then the multiplication, then the subtraction.",
      nl: "Bereken eerst 4², dan de vermenigvuldiging, dan de aftrekking."
    }
  },
  {
    id: "N1_s_27", category: "N1", level: 2,
    text: { fr: "Calcule : 3³ + 2² × 4", en: "Calculate: 3³ + 2² × 4", nl: "Bereken: 3³ + 2² × 4" },
    // 27 + 4 × 4 = 27 + 16 = 43
    answer: 43, tolerance: 0,
    hint: {
      fr: "Calcule les puissances d'abord, puis la multiplication, puis l'addition.",
      en: "Calculate powers first, then the multiplication, then the addition.",
      nl: "Bereken eerst de machten, dan de vermenigvuldiging, dan de optelling."
    }
  },
  {
    id: "N1_s_28", category: "N1", level: 2,
    text: { fr: "Calcule : 5³ - 6 × 2³", en: "Calculate: 5³ - 6 × 2³", nl: "Bereken: 5³ - 6 × 2³" },
    // 125 - 6 × 8 = 125 - 48 = 77
    answer: 77, tolerance: 0,
    hint: {
      fr: "Calcule les puissances d'abord : 5³ et 2³, puis la multiplication, puis la soustraction.",
      en: "Calculate powers first: 5³ and 2³, then the multiplication, then the subtraction.",
      nl: "Bereken eerst de machten: 5³ en 2³, dan de vermenigvuldiging, dan de aftrekking."
    }
  },
  {
    id: "N1_s_29", category: "N1", level: 2,
    text: { fr: "Calcule : 2 × 3³ - 4²", en: "Calculate: 2 × 3³ - 4²", nl: "Bereken: 2 × 3³ - 4²" },
    // 2 × 27 - 16 = 54 - 16 = 38
    answer: 38, tolerance: 0,
    hint: {
      fr: "Calcule les puissances d'abord, puis la multiplication, puis la soustraction.",
      en: "Calculate powers first, then the multiplication, then the subtraction.",
      nl: "Bereken eerst de machten, dan de vermenigvuldiging, dan de aftrekking."
    }
  },
  {
    id: "N1_s_30", category: "N1", level: 2,
    text: { fr: "Calcule : 4² + 5² - 3²", en: "Calculate: 4² + 5² - 3²", nl: "Bereken: 4² + 5² - 3²" },
    // 16 + 25 - 9 = 32
    answer: 32, tolerance: 0,
    hint: {
      fr: "Calcule chaque puissance d'abord, puis additionne et soustrais.",
      en: "Calculate each power first, then add and subtract.",
      nl: "Bereken elke macht eerst, tel dan op en trek af."
    }
  },
  {
    id: "N1_s_31", category: "N1", level: 2,
    text: { fr: "Calcule : 80 - 2⁴ × 5 + 3", en: "Calculate: 80 - 2⁴ × 5 + 3", nl: "Bereken: 80 - 2⁴ × 5 + 3" },
    // 80 - 16 × 5 + 3 = 80 - 80 + 3 = 3
    answer: 3, tolerance: 0,
    hint: {
      fr: "Calcule d'abord 2⁴, puis la multiplication, puis les additions/soustractions.",
      en: "Calculate 2⁴ first, then the multiplication, then additions/subtractions.",
      nl: "Bereken eerst 2⁴, dan de vermenigvuldiging, dan optellingen/aftrekkingen."
    }
  },
  {
    id: "N1_s_32", category: "N1", level: 2,
    text: { fr: "Calcule : 3 × 5² + 2³", en: "Calculate: 3 × 5² + 2³", nl: "Bereken: 3 × 5² + 2³" },
    // 3 × 25 + 8 = 75 + 8 = 83
    answer: 83, tolerance: 0,
    hint: {
      fr: "Calcule les puissances d'abord, puis la multiplication, puis l'addition.",
      en: "Calculate powers first, then the multiplication, then the addition.",
      nl: "Bereken eerst de machten, dan de vermenigvuldiging, dan de optelling."
    }
  },
  {
    id: "N1_s_33", category: "N1", level: 2,
    text: { fr: "Calcule : 2³ × 3² - 5 × 7", en: "Calculate: 2³ × 3² - 5 × 7", nl: "Bereken: 2³ × 3² - 5 × 7" },
    // 8 × 9 - 35 = 72 - 35 = 37
    answer: 37, tolerance: 0,
    hint: {
      fr: "Calcule les puissances d'abord, puis les multiplications, puis la soustraction.",
      en: "Calculate powers first, then multiplications, then the subtraction.",
      nl: "Bereken eerst de machten, dan de vermenigvuldigingen, dan de aftrekking."
    }
  },
  {
    id: "N1_s_34", category: "N1", level: 2,
    text: { fr: "Calcule : 6 × 2² + 3 × 4²", en: "Calculate: 6 × 2² + 3 × 4²", nl: "Bereken: 6 × 2² + 3 × 4²" },
    // 6 × 4 + 3 × 16 = 24 + 48 = 72
    answer: 72, tolerance: 0,
    hint: {
      fr: "Calcule les puissances d'abord, puis les multiplications, puis l'addition.",
      en: "Calculate powers first, then multiplications, then the addition.",
      nl: "Bereken eerst de machten, dan de vermenigvuldigingen, dan de optelling."
    }
  },

  // ===========================================================================
  // LEVEL 3 — Negative numbers, parentheses, substitution (16 questions)
  // Includes negative results, (-n)², (-n)³, and more complex expressions.
  // ===========================================================================
  {
    id: "N1_s_35", category: "N1", level: 3,
    text: { fr: "Calcule : 8 × (3 - 5)³ + 4", en: "Calculate: 8 × (3 - 5)³ + 4", nl: "Bereken: 8 × (3 - 5)³ + 4" },
    // 8 × (-2)³ + 4 = 8 × (-8) + 4 = -64 + 4 = -60
    answer: -60, tolerance: 0,
    hint: {
      fr: "Calcule d'abord la parenthèse, puis la puissance, puis la multiplication, puis l'addition.",
      en: "Calculate the parentheses first, then the power, then the multiplication, then the addition.",
      nl: "Bereken eerst de haakjes, dan de macht, dan de vermenigvuldiging, dan de optelling."
    }
  },
  {
    id: "N1_s_36", category: "N1", level: 3,
    text: { fr: "Calcule : (-2)² × 3 + (-5)", en: "Calculate: (-2)² × 3 + (-5)", nl: "Bereken: (-2)² × 3 + (-5)" },
    // 4 × 3 + (-5) = 12 - 5 = 7
    answer: 7, tolerance: 0,
    hint: {
      fr: "(-2)² = 4. Ensuite, multiplie par 3, puis ajoute (-5).",
      en: "(-2)² = 4. Then multiply by 3, then add (-5).",
      nl: "(-2)² = 4. Vermenigvuldig dan met 3, tel dan (-5) op."
    }
  },
  {
    id: "N1_s_37", category: "N1", level: 3,
    text: { fr: "Calcule : 5 × (-3)² - 2 × 4", en: "Calculate: 5 × (-3)² - 2 × 4", nl: "Bereken: 5 × (-3)² - 2 × 4" },
    // 5 × 9 - 8 = 45 - 8 = 37
    answer: 37, tolerance: 0,
    hint: {
      fr: "(-3)² = 9 (le carré d'un négatif est positif). Puis effectue les multiplications avant la soustraction.",
      en: "(-3)² = 9 (squaring a negative gives a positive). Then do multiplications before subtraction.",
      nl: "(-3)² = 9 (het kwadraat van een negatief is positief). Doe dan vermenigvuldigingen voor de aftrekking."
    }
  },
  {
    id: "N1_s_38", category: "N1", level: 3,
    text: { fr: "Calcule : (-4)³ + 100", en: "Calculate: (-4)³ + 100", nl: "Bereken: (-4)³ + 100" },
    // -64 + 100 = 36
    answer: 36, tolerance: 0,
    hint: {
      fr: "(-4)³ = -64 (le cube d'un négatif reste négatif). Puis ajoute 100.",
      en: "(-4)³ = -64 (cubing a negative stays negative). Then add 100.",
      nl: "(-4)³ = -64 (de derde macht van een negatief blijft negatief). Tel dan 100 op."
    }
  },
  {
    id: "N1_s_39", category: "N1", level: 3,
    text: { fr: "Calcule : 3 × (-2)³ + 5²", en: "Calculate: 3 × (-2)³ + 5²", nl: "Bereken: 3 × (-2)³ + 5²" },
    // 3 × (-8) + 25 = -24 + 25 = 1
    answer: 1, tolerance: 0,
    hint: {
      fr: "Calcule (-2)³ = -8 et 5² = 25, puis effectue les opérations.",
      en: "Calculate (-2)³ = -8 and 5² = 25, then do the operations.",
      nl: "Bereken (-2)³ = -8 en 5² = 25, voer dan de bewerkingen uit."
    }
  },
  {
    id: "N1_s_40", category: "N1", level: 3,
    text: { fr: "Calcule : (7 - 10)² × 4 - 6", en: "Calculate: (7 - 10)² × 4 - 6", nl: "Bereken: (7 - 10)² × 4 - 6" },
    // (-3)² × 4 - 6 = 9 × 4 - 6 = 36 - 6 = 30
    answer: 30, tolerance: 0,
    hint: {
      fr: "Calcule d'abord la parenthèse (7 - 10 = -3), puis le carré, puis la multiplication.",
      en: "Calculate the parentheses first (7 - 10 = -3), then the square, then the multiplication.",
      nl: "Bereken eerst de haakjes (7 - 10 = -3), dan het kwadraat, dan de vermenigvuldiging."
    }
  },
  {
    id: "N1_s_41", category: "N1", level: 3,
    text: { fr: "Calcule : (-5)² - (-3)²", en: "Calculate: (-5)² - (-3)²", nl: "Bereken: (-5)² - (-3)²" },
    // 25 - 9 = 16
    answer: 16, tolerance: 0,
    hint: {
      fr: "(-5)² = 25 et (-3)² = 9. Soustrais les résultats.",
      en: "(-5)² = 25 and (-3)² = 9. Subtract the results.",
      nl: "(-5)² = 25 en (-3)² = 9. Trek de resultaten van elkaar af."
    }
  },
  {
    id: "N1_s_42", category: "N1", level: 3,
    text: { fr: "Calcule : 2 × (1 - 4)³ + 50", en: "Calculate: 2 × (1 - 4)³ + 50", nl: "Bereken: 2 × (1 - 4)³ + 50" },
    // 2 × (-3)³ + 50 = 2 × (-27) + 50 = -54 + 50 = -4
    answer: -4, tolerance: 0,
    hint: {
      fr: "1 - 4 = -3. Puis calcule (-3)³ = -27, multiplie par 2, et ajoute 50.",
      en: "1 - 4 = -3. Then calculate (-3)³ = -27, multiply by 2, and add 50.",
      nl: "1 - 4 = -3. Bereken dan (-3)³ = -27, vermenigvuldig met 2, en tel 50 op."
    }
  },
  {
    id: "N1_s_43", category: "N1", level: 3,
    text: { fr: "Calcule : (-1)³ + (-2)³ + (-3)³", en: "Calculate: (-1)³ + (-2)³ + (-3)³", nl: "Bereken: (-1)³ + (-2)³ + (-3)³" },
    // -1 + (-8) + (-27) = -1 - 8 - 27 = -36
    answer: -36, tolerance: 0,
    hint: {
      fr: "Calcule chaque cube séparément : (-1)³ = -1, (-2)³ = -8, (-3)³ = -27, puis additionne.",
      en: "Calculate each cube separately: (-1)³ = -1, (-2)³ = -8, (-3)³ = -27, then add.",
      nl: "Bereken elke derde macht apart: (-1)³ = -1, (-2)³ = -8, (-3)³ = -27, tel dan op."
    }
  },
  {
    id: "N1_s_44", category: "N1", level: 3,
    text: { fr: "Calcule : 6 × (-2)² - 3 × (-1)³", en: "Calculate: 6 × (-2)² - 3 × (-1)³", nl: "Bereken: 6 × (-2)² - 3 × (-1)³" },
    // 6 × 4 - 3 × (-1) = 24 - (-3) = 24 + 3 = 27
    answer: 27, tolerance: 0,
    hint: {
      fr: "(-2)² = 4 et (-1)³ = -1. Attention : soustraire un négatif revient à additionner.",
      en: "(-2)² = 4 and (-1)³ = -1. Note: subtracting a negative is the same as adding.",
      nl: "(-2)² = 4 en (-1)³ = -1. Let op: een negatief aftrekken is hetzelfde als optellen."
    }
  },
  {
    id: "N1_s_45", category: "N1", level: 3,
    text: { fr: "Calcule : (2 - 6)² + (3 - 7)²", en: "Calculate: (2 - 6)² + (3 - 7)²", nl: "Bereken: (2 - 6)² + (3 - 7)²" },
    // (-4)² + (-4)² = 16 + 16 = 32
    answer: 32, tolerance: 0,
    hint: {
      fr: "Calcule d'abord les parenthèses, puis élève au carré, puis additionne.",
      en: "Calculate parentheses first, then square, then add.",
      nl: "Bereken eerst de haakjes, kwadrateer dan, tel dan op."
    }
  },
  {
    id: "N1_s_46", category: "N1", level: 3,
    text: { fr: "Calcule : 10 - 4 × (2 - 5)²", en: "Calculate: 10 - 4 × (2 - 5)²", nl: "Bereken: 10 - 4 × (2 - 5)²" },
    // 10 - 4 × (-3)² = 10 - 4 × 9 = 10 - 36 = -26
    answer: -26, tolerance: 0,
    hint: {
      fr: "2 - 5 = -3. Puis (-3)² = 9. Multiplie par 4 et soustrais de 10.",
      en: "2 - 5 = -3. Then (-3)² = 9. Multiply by 4 and subtract from 10.",
      nl: "2 - 5 = -3. Dan (-3)² = 9. Vermenigvuldig met 4 en trek af van 10."
    }
  },
  {
    id: "N1_s_47", category: "N1", level: 3,
    text: { fr: "Calcule : (-3)³ + 2 × (-4) + 5", en: "Calculate: (-3)³ + 2 × (-4) + 5", nl: "Bereken: (-3)³ + 2 × (-4) + 5" },
    // -27 + (-8) + 5 = -27 - 8 + 5 = -30
    answer: -30, tolerance: 0,
    hint: {
      fr: "(-3)³ = -27 et 2 × (-4) = -8. Additionne tous les termes.",
      en: "(-3)³ = -27 and 2 × (-4) = -8. Add all terms together.",
      nl: "(-3)³ = -27 en 2 × (-4) = -8. Tel alle termen bij elkaar op."
    }
  },
  {
    id: "N1_s_48", category: "N1", level: 3,
    text: { fr: "Calcule : (-2)⁴ - 3 × (-2)²", en: "Calculate: (-2)⁴ - 3 × (-2)²", nl: "Bereken: (-2)⁴ - 3 × (-2)²" },
    // 16 - 3 × 4 = 16 - 12 = 4
    answer: 4, tolerance: 0,
    hint: {
      fr: "(-2)⁴ = 16 (exposant pair = positif) et (-2)² = 4. Effectue la multiplication puis la soustraction.",
      en: "(-2)⁴ = 16 (even exponent = positive) and (-2)² = 4. Do the multiplication then the subtraction.",
      nl: "(-2)⁴ = 16 (even exponent = positief) en (-2)² = 4. Doe de vermenigvuldiging dan de aftrekking."
    }
  },
  {
    id: "N1_s_49", category: "N1", level: 3,
    text: { fr: "Calcule : 5 × (4 - 7)² - (1 - 3)³", en: "Calculate: 5 × (4 - 7)² - (1 - 3)³", nl: "Bereken: 5 × (4 - 7)² - (1 - 3)³" },
    // 5 × (-3)² - (-2)³ = 5 × 9 - (-8) = 45 + 8 = 53
    answer: 53, tolerance: 0,
    hint: {
      fr: "4 - 7 = -3 et 1 - 3 = -2. Puis (-3)² = 9 et (-2)³ = -8. Attention au signe en soustrayant un négatif.",
      en: "4 - 7 = -3 and 1 - 3 = -2. Then (-3)² = 9 and (-2)³ = -8. Watch the sign when subtracting a negative.",
      nl: "4 - 7 = -3 en 1 - 3 = -2. Dan (-3)² = 9 en (-2)³ = -8. Let op het teken bij het aftrekken van een negatief."
    }
  },
  {
    id: "N1_s_50", category: "N1", level: 3,
    text: { fr: "Calcule : (-3)² × (-2)² - 5³", en: "Calculate: (-3)² × (-2)² - 5³", nl: "Bereken: (-3)² × (-2)² - 5³" },
    // 9 × 4 - 125 = 36 - 125 = -89
    answer: -89, tolerance: 0,
    hint: {
      fr: "(-3)² = 9, (-2)² = 4 et 5³ = 125. Multiplie 9 × 4, puis soustrais 125.",
      en: "(-3)² = 9, (-2)² = 4 and 5³ = 125. Multiply 9 × 4, then subtract 125.",
      nl: "(-3)² = 9, (-2)² = 4 en 5³ = 125. Vermenigvuldig 9 × 4, trek dan 125 af."
    }
  },

  // ===========================================================================
  // LEVEL 1 — Additional basic arithmetic (questions 51-71, 21 questions)
  // No parentheses, no powers. Mix of +, -, ×, ÷.
  // ===========================================================================
  {
    id: "N1_s_51", category: "N1", level: 1,
    text: { fr: "Calcule : 30 - 7 × 4", en: "Calculate: 30 - 7 × 4", nl: "Bereken: 30 - 7 × 4" },
    // 30 - 28 = 2
    answer: 2, tolerance: 0,
    hint: {
      fr: "Effectue d'abord la multiplication, puis la soustraction.",
      en: "Do the multiplication first, then the subtraction.",
      nl: "Doe eerst de vermenigvuldiging, dan de aftrekking."
    }
  },
  {
    id: "N1_s_52", category: "N1", level: 1,
    text: { fr: "Calcule : 14 + 27 ÷ 9", en: "Calculate: 14 + 27 ÷ 9", nl: "Bereken: 14 + 27 ÷ 9" },
    // 14 + 3 = 17
    answer: 17, tolerance: 0,
    hint: {
      fr: "Effectue d'abord la division, puis l'addition.",
      en: "Do the division first, then the addition.",
      nl: "Doe eerst de deling, dan de optelling."
    }
  },
  {
    id: "N1_s_53", category: "N1", level: 1,
    text: { fr: "Calcule : 6 × 9 + 14", en: "Calculate: 6 × 9 + 14", nl: "Bereken: 6 × 9 + 14" },
    // 54 + 14 = 68
    answer: 68, tolerance: 0,
    hint: {
      fr: "Effectue d'abord la multiplication, puis l'addition.",
      en: "Do the multiplication first, then the addition.",
      nl: "Doe eerst de vermenigvuldiging, dan de optelling."
    }
  },
  {
    id: "N1_s_54", category: "N1", level: 1,
    text: { fr: "Calcule : 45 ÷ 5 + 8 × 2", en: "Calculate: 45 ÷ 5 + 8 × 2", nl: "Bereken: 45 ÷ 5 + 8 × 2" },
    // 9 + 16 = 25
    answer: 25, tolerance: 0,
    hint: {
      fr: "Effectue d'abord la division et la multiplication, puis l'addition.",
      en: "Do the division and multiplication first, then the addition.",
      nl: "Doe eerst de deling en vermenigvuldiging, dan de optelling."
    }
  },
  {
    id: "N1_s_55", category: "N1", level: 1,
    text: { fr: "Calcule : 80 - 9 × 6 + 5", en: "Calculate: 80 - 9 × 6 + 5", nl: "Bereken: 80 - 9 × 6 + 5" },
    // 80 - 54 + 5 = 31
    answer: 31, tolerance: 0,
    hint: {
      fr: "Effectue d'abord la multiplication, puis les additions et soustractions de gauche à droite.",
      en: "Do the multiplication first, then additions and subtractions from left to right.",
      nl: "Doe eerst de vermenigvuldiging, dan optellingen en aftrekkingen van links naar rechts."
    }
  },
  {
    id: "N1_s_56", category: "N1", level: 1,
    text: { fr: "Calcule : 7 × 6 - 24 ÷ 3", en: "Calculate: 7 × 6 - 24 ÷ 3", nl: "Bereken: 7 × 6 - 24 ÷ 3" },
    // 42 - 8 = 34
    answer: 34, tolerance: 0,
    hint: {
      fr: "Effectue la multiplication et la division avant la soustraction.",
      en: "Do the multiplication and division before the subtraction.",
      nl: "Doe de vermenigvuldiging en deling voor de aftrekking."
    }
  },
  {
    id: "N1_s_57", category: "N1", level: 1,
    text: { fr: "Calcule : 20 + 6 × 7 - 15", en: "Calculate: 20 + 6 × 7 - 15", nl: "Bereken: 20 + 6 × 7 - 15" },
    // 20 + 42 - 15 = 47
    answer: 47, tolerance: 0,
    hint: {
      fr: "Effectue d'abord la multiplication, puis les additions et soustractions.",
      en: "Do the multiplication first, then additions and subtractions.",
      nl: "Doe eerst de vermenigvuldiging, dan optellingen en aftrekkingen."
    }
  },
  {
    id: "N1_s_58", category: "N1", level: 1,
    text: { fr: "Calcule : 54 ÷ 9 + 42 ÷ 6", en: "Calculate: 54 ÷ 9 + 42 ÷ 6", nl: "Bereken: 54 ÷ 9 + 42 ÷ 6" },
    // 6 + 7 = 13
    answer: 13, tolerance: 0,
    hint: {
      fr: "Effectue les deux divisions, puis additionne les résultats.",
      en: "Do both divisions, then add the results.",
      nl: "Doe beide delingen, tel dan de resultaten op."
    }
  },
  {
    id: "N1_s_59", category: "N1", level: 1,
    text: { fr: "Calcule : 5 × 8 + 4 × 3", en: "Calculate: 5 × 8 + 4 × 3", nl: "Bereken: 5 × 8 + 4 × 3" },
    // 40 + 12 = 52
    answer: 52, tolerance: 0,
    hint: {
      fr: "Effectue les deux multiplications, puis additionne les résultats.",
      en: "Do both multiplications, then add the results.",
      nl: "Doe beide vermenigvuldigingen, tel dan de resultaten op."
    }
  },
  {
    id: "N1_s_60", category: "N1", level: 1,
    text: { fr: "Calcule : 70 - 8 × 5 - 11", en: "Calculate: 70 - 8 × 5 - 11", nl: "Bereken: 70 - 8 × 5 - 11" },
    // 70 - 40 - 11 = 19
    answer: 19, tolerance: 0,
    hint: {
      fr: "Effectue d'abord la multiplication, puis les soustractions de gauche à droite.",
      en: "Do the multiplication first, then subtractions from left to right.",
      nl: "Doe eerst de vermenigvuldiging, dan aftrekkingen van links naar rechts."
    }
  },
  {
    id: "N1_s_61", category: "N1", level: 1,
    text: { fr: "Calcule : 36 ÷ 4 + 9 × 5", en: "Calculate: 36 ÷ 4 + 9 × 5", nl: "Bereken: 36 ÷ 4 + 9 × 5" },
    // 9 + 45 = 54
    answer: 54, tolerance: 0,
    hint: {
      fr: "Division et multiplication sont prioritaires sur l'addition.",
      en: "Division and multiplication take priority over addition.",
      nl: "Deling en vermenigvuldiging hebben voorrang op optelling."
    }
  },
  {
    id: "N1_s_62", category: "N1", level: 1,
    text: { fr: "Calcule : 3 × 8 - 2 × 7", en: "Calculate: 3 × 8 - 2 × 7", nl: "Bereken: 3 × 8 - 2 × 7" },
    // 24 - 14 = 10
    answer: 10, tolerance: 0,
    hint: {
      fr: "Effectue les deux multiplications, puis soustrais les résultats.",
      en: "Do both multiplications, then subtract the results.",
      nl: "Doe beide vermenigvuldigingen, trek dan de resultaten van elkaar af."
    }
  },
  {
    id: "N1_s_63", category: "N1", level: 1,
    text: { fr: "Calcule : 11 + 32 ÷ 8 - 3", en: "Calculate: 11 + 32 ÷ 8 - 3", nl: "Bereken: 11 + 32 ÷ 8 - 3" },
    // 11 + 4 - 3 = 12
    answer: 12, tolerance: 0,
    hint: {
      fr: "Effectue d'abord la division, puis l'addition et la soustraction.",
      en: "Do the division first, then addition and subtraction.",
      nl: "Doe eerst de deling, dan optelling en aftrekking."
    }
  },
  {
    id: "N1_s_64", category: "N1", level: 1,
    text: { fr: "Calcule : 2 × 9 + 63 ÷ 7", en: "Calculate: 2 × 9 + 63 ÷ 7", nl: "Bereken: 2 × 9 + 63 ÷ 7" },
    // 18 + 9 = 27
    answer: 27, tolerance: 0,
    hint: {
      fr: "Effectue la multiplication et la division avant l'addition.",
      en: "Do the multiplication and division before the addition.",
      nl: "Doe de vermenigvuldiging en deling voor de optelling."
    }
  },
  {
    id: "N1_s_65", category: "N1", level: 1,
    text: { fr: "Calcule : 55 - 4 × 6 - 18 ÷ 9", en: "Calculate: 55 - 4 × 6 - 18 ÷ 9", nl: "Bereken: 55 - 4 × 6 - 18 ÷ 9" },
    // 55 - 24 - 2 = 29
    answer: 29, tolerance: 0,
    hint: {
      fr: "Effectue d'abord la multiplication et la division, puis les soustractions.",
      en: "Do the multiplication and division first, then the subtractions.",
      nl: "Doe eerst de vermenigvuldiging en deling, dan de aftrekkingen."
    }
  },
  {
    id: "N1_s_66", category: "N1", level: 1,
    text: { fr: "Calcule : 8 × 4 + 3 × 5 - 9", en: "Calculate: 8 × 4 + 3 × 5 - 9", nl: "Bereken: 8 × 4 + 3 × 5 - 9" },
    // 32 + 15 - 9 = 38
    answer: 38, tolerance: 0,
    hint: {
      fr: "Effectue d'abord les multiplications, puis les additions et soustractions.",
      en: "Do the multiplications first, then additions and subtractions.",
      nl: "Doe eerst de vermenigvuldigingen, dan optellingen en aftrekkingen."
    }
  },
  {
    id: "N1_s_67", category: "N1", level: 1,
    text: { fr: "Calcule : 96 ÷ 8 - 3 × 2", en: "Calculate: 96 ÷ 8 - 3 × 2", nl: "Bereken: 96 ÷ 8 - 3 × 2" },
    // 12 - 6 = 6
    answer: 6, tolerance: 0,
    hint: {
      fr: "Effectue la division et la multiplication avant la soustraction.",
      en: "Do the division and multiplication before the subtraction.",
      nl: "Doe de deling en vermenigvuldiging voor de aftrekking."
    }
  },
  {
    id: "N1_s_68", category: "N1", level: 1,
    text: { fr: "Calcule : 17 + 5 × 9 - 30", en: "Calculate: 17 + 5 × 9 - 30", nl: "Bereken: 17 + 5 × 9 - 30" },
    // 17 + 45 - 30 = 32
    answer: 32, tolerance: 0,
    hint: {
      fr: "Effectue d'abord la multiplication, puis les additions et soustractions de gauche à droite.",
      en: "Do the multiplication first, then additions and subtractions from left to right.",
      nl: "Doe eerst de vermenigvuldiging, dan optellingen en aftrekkingen van links naar rechts."
    }
  },
  {
    id: "N1_s_69", category: "N1", level: 1,
    text: { fr: "Calcule : 4 × 11 - 35 ÷ 5", en: "Calculate: 4 × 11 - 35 ÷ 5", nl: "Bereken: 4 × 11 - 35 ÷ 5" },
    // 44 - 7 = 37
    answer: 37, tolerance: 0,
    hint: {
      fr: "Effectue la multiplication et la division avant la soustraction.",
      en: "Do the multiplication and division before the subtraction.",
      nl: "Doe de vermenigvuldiging en deling voor de aftrekking."
    }
  },
  {
    id: "N1_s_70", category: "N1", level: 1,
    text: { fr: "Calcule : 28 ÷ 7 + 6 × 4 - 5", en: "Calculate: 28 ÷ 7 + 6 × 4 - 5", nl: "Bereken: 28 ÷ 7 + 6 × 4 - 5" },
    // 4 + 24 - 5 = 23
    answer: 23, tolerance: 0,
    hint: {
      fr: "Effectue d'abord la division et la multiplication, puis les additions et soustractions.",
      en: "Do the division and multiplication first, then additions and subtractions.",
      nl: "Doe eerst de deling en vermenigvuldiging, dan optellingen en aftrekkingen."
    }
  },
  {
    id: "N1_s_71", category: "N1", level: 1,
    text: { fr: "Calcule : 9 × 3 + 48 ÷ 6 - 12", en: "Calculate: 9 × 3 + 48 ÷ 6 - 12", nl: "Bereken: 9 × 3 + 48 ÷ 6 - 12" },
    // 27 + 8 - 12 = 23
    answer: 23, tolerance: 0,
    hint: {
      fr: "Effectue d'abord la multiplication et la division, puis les additions et soustractions.",
      en: "Do the multiplication and division first, then additions and subtractions.",
      nl: "Doe eerst de vermenigvuldiging en deling, dan optellingen en aftrekkingen."
    }
  },

  // ===========================================================================
  // LEVEL 2 — Additional expressions with powers (questions 72-92, 21 questions)
  // Small powers (base 2-6, exponent 2-3). Answers in range -200 to 500.
  // ===========================================================================
  {
    id: "N1_s_72", category: "N1", level: 2,
    text: { fr: "Calcule : 6² - 4 × 7", en: "Calculate: 6² - 4 × 7", nl: "Bereken: 6² - 4 × 7" },
    // 36 - 28 = 8
    answer: 8, tolerance: 0,
    hint: {
      fr: "Calcule d'abord 6² = 36, puis la multiplication, puis la soustraction.",
      en: "Calculate 6² = 36 first, then the multiplication, then the subtraction.",
      nl: "Bereken eerst 6² = 36, dan de vermenigvuldiging, dan de aftrekking."
    }
  },
  {
    id: "N1_s_73", category: "N1", level: 2,
    text: { fr: "Calcule : 2 × 4² + 15", en: "Calculate: 2 × 4² + 15", nl: "Bereken: 2 × 4² + 15" },
    // 2 × 16 + 15 = 32 + 15 = 47
    answer: 47, tolerance: 0,
    hint: {
      fr: "Calcule d'abord 4² = 16, puis la multiplication, puis l'addition.",
      en: "Calculate 4² = 16 first, then the multiplication, then the addition.",
      nl: "Bereken eerst 4² = 16, dan de vermenigvuldiging, dan de optelling."
    }
  },
  {
    id: "N1_s_74", category: "N1", level: 2,
    text: { fr: "Calcule : 3³ - 2 × 6", en: "Calculate: 3³ - 2 × 6", nl: "Bereken: 3³ - 2 × 6" },
    // 27 - 12 = 15
    answer: 15, tolerance: 0,
    hint: {
      fr: "Calcule d'abord 3³ = 27, puis la multiplication, puis la soustraction.",
      en: "Calculate 3³ = 27 first, then the multiplication, then the subtraction.",
      nl: "Bereken eerst 3³ = 27, dan de vermenigvuldiging, dan de aftrekking."
    }
  },
  {
    id: "N1_s_75", category: "N1", level: 2,
    text: { fr: "Calcule : 7² + 3 × 8", en: "Calculate: 7² + 3 × 8", nl: "Bereken: 7² + 3 × 8" },
    // 49 + 24 = 73
    answer: 73, tolerance: 0,
    hint: {
      fr: "Calcule d'abord 7² = 49, puis la multiplication, puis l'addition.",
      en: "Calculate 7² = 49 first, then the multiplication, then the addition.",
      nl: "Bereken eerst 7² = 49, dan de vermenigvuldiging, dan de optelling."
    }
  },
  {
    id: "N1_s_76", category: "N1", level: 2,
    text: { fr: "Calcule : 90 - 2 × 6²", en: "Calculate: 90 - 2 × 6²", nl: "Bereken: 90 - 2 × 6²" },
    // 90 - 2 × 36 = 90 - 72 = 18
    answer: 18, tolerance: 0,
    hint: {
      fr: "Calcule d'abord 6² = 36, puis la multiplication, puis la soustraction.",
      en: "Calculate 6² = 36 first, then the multiplication, then the subtraction.",
      nl: "Bereken eerst 6² = 36, dan de vermenigvuldiging, dan de aftrekking."
    }
  },
  {
    id: "N1_s_77", category: "N1", level: 2,
    text: { fr: "Calcule : 2³ + 3³ + 4", en: "Calculate: 2³ + 3³ + 4", nl: "Bereken: 2³ + 3³ + 4" },
    // 8 + 27 + 4 = 39
    answer: 39, tolerance: 0,
    hint: {
      fr: "Calcule chaque puissance d'abord : 2³ = 8, 3³ = 27, puis additionne tout.",
      en: "Calculate each power first: 2³ = 8, 3³ = 27, then add everything.",
      nl: "Bereken elke macht eerst: 2³ = 8, 3³ = 27, tel dan alles op."
    }
  },
  {
    id: "N1_s_78", category: "N1", level: 2,
    text: { fr: "Calcule : 5 × 3² - 2³", en: "Calculate: 5 × 3² - 2³", nl: "Bereken: 5 × 3² - 2³" },
    // 5 × 9 - 8 = 45 - 8 = 37
    answer: 37, tolerance: 0,
    hint: {
      fr: "Calcule les puissances d'abord : 3² = 9 et 2³ = 8, puis la multiplication, puis la soustraction.",
      en: "Calculate powers first: 3² = 9 and 2³ = 8, then the multiplication, then the subtraction.",
      nl: "Bereken eerst de machten: 3² = 9 en 2³ = 8, dan de vermenigvuldiging, dan de aftrekking."
    }
  },
  {
    id: "N1_s_79", category: "N1", level: 2,
    text: { fr: "Calcule : 4² × 3 - 5²", en: "Calculate: 4² × 3 - 5²", nl: "Bereken: 4² × 3 - 5²" },
    // 16 × 3 - 25 = 48 - 25 = 23
    answer: 23, tolerance: 0,
    hint: {
      fr: "Calcule les puissances d'abord, puis la multiplication, puis la soustraction.",
      en: "Calculate powers first, then the multiplication, then the subtraction.",
      nl: "Bereken eerst de machten, dan de vermenigvuldiging, dan de aftrekking."
    }
  },
  {
    id: "N1_s_80", category: "N1", level: 2,
    text: { fr: "Calcule : 8² - 3 × 2³", en: "Calculate: 8² - 3 × 2³", nl: "Bereken: 8² - 3 × 2³" },
    // 64 - 3 × 8 = 64 - 24 = 40
    answer: 40, tolerance: 0,
    hint: {
      fr: "Calcule les puissances d'abord : 8² = 64 et 2³ = 8, puis la multiplication, puis la soustraction.",
      en: "Calculate powers first: 8² = 64 and 2³ = 8, then the multiplication, then the subtraction.",
      nl: "Bereken eerst de machten: 8² = 64 en 2³ = 8, dan de vermenigvuldiging, dan de aftrekking."
    }
  },
  {
    id: "N1_s_81", category: "N1", level: 2,
    text: { fr: "Calcule : 3 × 2⁴ - 7 × 5", en: "Calculate: 3 × 2⁴ - 7 × 5", nl: "Bereken: 3 × 2⁴ - 7 × 5" },
    // 3 × 16 - 35 = 48 - 35 = 13
    answer: 13, tolerance: 0,
    hint: {
      fr: "Calcule d'abord 2⁴ = 16, puis les multiplications, puis la soustraction.",
      en: "Calculate 2⁴ = 16 first, then the multiplications, then the subtraction.",
      nl: "Bereken eerst 2⁴ = 16, dan de vermenigvuldigingen, dan de aftrekking."
    }
  },
  {
    id: "N1_s_82", category: "N1", level: 2,
    text: { fr: "Calcule : 6² + 2² × 5", en: "Calculate: 6² + 2² × 5", nl: "Bereken: 6² + 2² × 5" },
    // 36 + 4 × 5 = 36 + 20 = 56
    answer: 56, tolerance: 0,
    hint: {
      fr: "Calcule les puissances d'abord, puis la multiplication, puis l'addition.",
      en: "Calculate powers first, then the multiplication, then the addition.",
      nl: "Bereken eerst de machten, dan de vermenigvuldiging, dan de optelling."
    }
  },
  {
    id: "N1_s_83", category: "N1", level: 2,
    text: { fr: "Calcule : 2 × 5³ - 3 × 4²", en: "Calculate: 2 × 5³ - 3 × 4²", nl: "Bereken: 2 × 5³ - 3 × 4²" },
    // 2 × 125 - 3 × 16 = 250 - 48 = 202
    answer: 202, tolerance: 0,
    hint: {
      fr: "Calcule les puissances d'abord : 5³ = 125 et 4² = 16, puis les multiplications, puis la soustraction.",
      en: "Calculate powers first: 5³ = 125 and 4² = 16, then multiplications, then the subtraction.",
      nl: "Bereken eerst de machten: 5³ = 125 en 4² = 16, dan de vermenigvuldigingen, dan de aftrekking."
    }
  },
  {
    id: "N1_s_84", category: "N1", level: 2,
    text: { fr: "Calcule : 9² - 7² + 3", en: "Calculate: 9² - 7² + 3", nl: "Bereken: 9² - 7² + 3" },
    // 81 - 49 + 3 = 35
    answer: 35, tolerance: 0,
    hint: {
      fr: "Calcule chaque puissance d'abord : 9² = 81 et 7² = 49, puis soustrais et additionne.",
      en: "Calculate each power first: 9² = 81 and 7² = 49, then subtract and add.",
      nl: "Bereken elke macht eerst: 9² = 81 en 7² = 49, trek dan af en tel op."
    }
  },
  {
    id: "N1_s_85", category: "N1", level: 2,
    text: { fr: "Calcule : 4³ + 3 × 7", en: "Calculate: 4³ + 3 × 7", nl: "Bereken: 4³ + 3 × 7" },
    // 64 + 21 = 85
    answer: 85, tolerance: 0,
    hint: {
      fr: "Calcule d'abord 4³ = 64, puis la multiplication, puis l'addition.",
      en: "Calculate 4³ = 64 first, then the multiplication, then the addition.",
      nl: "Bereken eerst 4³ = 64, dan de vermenigvuldiging, dan de optelling."
    }
  },
  {
    id: "N1_s_86", category: "N1", level: 2,
    text: { fr: "Calcule : 10² - 3³ × 2", en: "Calculate: 10² - 3³ × 2", nl: "Bereken: 10² - 3³ × 2" },
    // 100 - 27 × 2 = 100 - 54 = 46
    answer: 46, tolerance: 0,
    hint: {
      fr: "Calcule les puissances d'abord : 10² = 100 et 3³ = 27, puis la multiplication, puis la soustraction.",
      en: "Calculate powers first: 10² = 100 and 3³ = 27, then the multiplication, then the subtraction.",
      nl: "Bereken eerst de machten: 10² = 100 en 3³ = 27, dan de vermenigvuldiging, dan de aftrekking."
    }
  },
  {
    id: "N1_s_87", category: "N1", level: 2,
    text: { fr: "Calcule : 2² × 3² + 4²", en: "Calculate: 2² × 3² + 4²", nl: "Bereken: 2² × 3² + 4²" },
    // 4 × 9 + 16 = 36 + 16 = 52
    answer: 52, tolerance: 0,
    hint: {
      fr: "Calcule les puissances d'abord, puis la multiplication, puis l'addition.",
      en: "Calculate powers first, then the multiplication, then the addition.",
      nl: "Bereken eerst de machten, dan de vermenigvuldiging, dan de optelling."
    }
  },
  {
    id: "N1_s_88", category: "N1", level: 2,
    text: { fr: "Calcule : 5² × 4 - 3³", en: "Calculate: 5² × 4 - 3³", nl: "Bereken: 5² × 4 - 3³" },
    // 25 × 4 - 27 = 100 - 27 = 73
    answer: 73, tolerance: 0,
    hint: {
      fr: "Calcule les puissances d'abord : 5² = 25 et 3³ = 27, puis la multiplication, puis la soustraction.",
      en: "Calculate powers first: 5² = 25 and 3³ = 27, then the multiplication, then the subtraction.",
      nl: "Bereken eerst de machten: 5² = 25 en 3³ = 27, dan de vermenigvuldiging, dan de aftrekking."
    }
  },
  {
    id: "N1_s_89", category: "N1", level: 2,
    text: { fr: "Calcule : 3 × 4³ - 100", en: "Calculate: 3 × 4³ - 100", nl: "Bereken: 3 × 4³ - 100" },
    // 3 × 64 - 100 = 192 - 100 = 92
    answer: 92, tolerance: 0,
    hint: {
      fr: "Calcule d'abord 4³ = 64, puis la multiplication, puis la soustraction.",
      en: "Calculate 4³ = 64 first, then the multiplication, then the subtraction.",
      nl: "Bereken eerst 4³ = 64, dan de vermenigvuldiging, dan de aftrekking."
    }
  },
  {
    id: "N1_s_90", category: "N1", level: 2,
    text: { fr: "Calcule : 7² - 2⁴ + 3²", en: "Calculate: 7² - 2⁴ + 3²", nl: "Bereken: 7² - 2⁴ + 3²" },
    // 49 - 16 + 9 = 42
    answer: 42, tolerance: 0,
    hint: {
      fr: "Calcule chaque puissance d'abord : 7² = 49, 2⁴ = 16, 3² = 9, puis additionne et soustrais.",
      en: "Calculate each power first: 7² = 49, 2⁴ = 16, 3² = 9, then add and subtract.",
      nl: "Bereken elke macht eerst: 7² = 49, 2⁴ = 16, 3² = 9, tel dan op en trek af."
    }
  },
  {
    id: "N1_s_91", category: "N1", level: 2,
    text: { fr: "Calcule : 2 × 6² + 3 × 2²", en: "Calculate: 2 × 6² + 3 × 2²", nl: "Bereken: 2 × 6² + 3 × 2²" },
    // 2 × 36 + 3 × 4 = 72 + 12 = 84
    answer: 84, tolerance: 0,
    hint: {
      fr: "Calcule les puissances d'abord, puis les multiplications, puis l'addition.",
      en: "Calculate powers first, then multiplications, then the addition.",
      nl: "Bereken eerst de machten, dan de vermenigvuldigingen, dan de optelling."
    }
  },
  {
    id: "N1_s_92", category: "N1", level: 2,
    text: { fr: "Calcule : 4 × 3³ - 5 × 2³", en: "Calculate: 4 × 3³ - 5 × 2³", nl: "Bereken: 4 × 3³ - 5 × 2³" },
    // 4 × 27 - 5 × 8 = 108 - 40 = 68
    answer: 68, tolerance: 0,
    hint: {
      fr: "Calcule les puissances d'abord : 3³ = 27 et 2³ = 8, puis les multiplications, puis la soustraction.",
      en: "Calculate powers first: 3³ = 27 and 2³ = 8, then multiplications, then the subtraction.",
      nl: "Bereken eerst de machten: 3³ = 27 en 2³ = 8, dan de vermenigvuldigingen, dan de aftrekking."
    }
  },

  // ===========================================================================
  // LEVEL 3 — Additional negative numbers, parentheses, substitution (questions 93-112, 20 questions)
  // Includes negative results, (-n)², (-n)³, and more complex expressions.
  // ===========================================================================
  {
    id: "N1_s_93", category: "N1", level: 3,
    text: { fr: "Calcule : (-5)³ + 150", en: "Calculate: (-5)³ + 150", nl: "Bereken: (-5)³ + 150" },
    // -125 + 150 = 25
    answer: 25, tolerance: 0,
    hint: {
      fr: "(-5)³ = -125 (le cube d'un négatif reste négatif). Puis ajoute 150.",
      en: "(-5)³ = -125 (cubing a negative stays negative). Then add 150.",
      nl: "(-5)³ = -125 (de derde macht van een negatief blijft negatief). Tel dan 150 op."
    }
  },
  {
    id: "N1_s_94", category: "N1", level: 3,
    text: { fr: "Calcule : (-4)² × 2 - 3 × 7", en: "Calculate: (-4)² × 2 - 3 × 7", nl: "Bereken: (-4)² × 2 - 3 × 7" },
    // 16 × 2 - 21 = 32 - 21 = 11
    answer: 11, tolerance: 0,
    hint: {
      fr: "(-4)² = 16. Effectue les multiplications, puis la soustraction.",
      en: "(-4)² = 16. Do the multiplications, then the subtraction.",
      nl: "(-4)² = 16. Doe de vermenigvuldigingen, dan de aftrekking."
    }
  },
  {
    id: "N1_s_95", category: "N1", level: 3,
    text: { fr: "Calcule : 3 × (1 - 5)² - 20", en: "Calculate: 3 × (1 - 5)² - 20", nl: "Bereken: 3 × (1 - 5)² - 20" },
    // 3 × (-4)² - 20 = 3 × 16 - 20 = 48 - 20 = 28
    answer: 28, tolerance: 0,
    hint: {
      fr: "1 - 5 = -4. Puis (-4)² = 16. Multiplie par 3 et soustrais 20.",
      en: "1 - 5 = -4. Then (-4)² = 16. Multiply by 3 and subtract 20.",
      nl: "1 - 5 = -4. Dan (-4)² = 16. Vermenigvuldig met 3 en trek 20 af."
    }
  },
  {
    id: "N1_s_96", category: "N1", level: 3,
    text: { fr: "Calcule : (-6)² - (-3)³", en: "Calculate: (-6)² - (-3)³", nl: "Bereken: (-6)² - (-3)³" },
    // 36 - (-27) = 36 + 27 = 63
    answer: 63, tolerance: 0,
    hint: {
      fr: "(-6)² = 36 et (-3)³ = -27. Soustraire un négatif revient à additionner.",
      en: "(-6)² = 36 and (-3)³ = -27. Subtracting a negative is the same as adding.",
      nl: "(-6)² = 36 en (-3)³ = -27. Een negatief aftrekken is hetzelfde als optellen."
    }
  },
  {
    id: "N1_s_97", category: "N1", level: 3,
    text: { fr: "Calcule : 4 × (-3)² + 2 × (-5)", en: "Calculate: 4 × (-3)² + 2 × (-5)", nl: "Bereken: 4 × (-3)² + 2 × (-5)" },
    // 4 × 9 + (-10) = 36 - 10 = 26
    answer: 26, tolerance: 0,
    hint: {
      fr: "(-3)² = 9. Effectue les multiplications d'abord : 4 × 9 = 36 et 2 × (-5) = -10.",
      en: "(-3)² = 9. Do multiplications first: 4 × 9 = 36 and 2 × (-5) = -10.",
      nl: "(-3)² = 9. Doe eerst de vermenigvuldigingen: 4 × 9 = 36 en 2 × (-5) = -10."
    }
  },
  {
    id: "N1_s_98", category: "N1", level: 3,
    text: { fr: "Calcule : (5 - 8)³ + 30", en: "Calculate: (5 - 8)³ + 30", nl: "Bereken: (5 - 8)³ + 30" },
    // (-3)³ + 30 = -27 + 30 = 3
    answer: 3, tolerance: 0,
    hint: {
      fr: "5 - 8 = -3. Puis (-3)³ = -27. Ajoute 30.",
      en: "5 - 8 = -3. Then (-3)³ = -27. Add 30.",
      nl: "5 - 8 = -3. Dan (-3)³ = -27. Tel 30 op."
    }
  },
  {
    id: "N1_s_99", category: "N1", level: 3,
    text: { fr: "Calcule : (-2)³ × (-3) + 10", en: "Calculate: (-2)³ × (-3) + 10", nl: "Bereken: (-2)³ × (-3) + 10" },
    // (-8) × (-3) + 10 = 24 + 10 = 34
    answer: 34, tolerance: 0,
    hint: {
      fr: "(-2)³ = -8. Puis (-8) × (-3) = 24 (négatif × négatif = positif). Ajoute 10.",
      en: "(-2)³ = -8. Then (-8) × (-3) = 24 (negative × negative = positive). Add 10.",
      nl: "(-2)³ = -8. Dan (-8) × (-3) = 24 (negatief × negatief = positief). Tel 10 op."
    }
  },
  {
    id: "N1_s_100", category: "N1", level: 3,
    text: { fr: "Calcule : 2 × (6 - 9)² - 5 × 3", en: "Calculate: 2 × (6 - 9)² - 5 × 3", nl: "Bereken: 2 × (6 - 9)² - 5 × 3" },
    // 2 × (-3)² - 15 = 2 × 9 - 15 = 18 - 15 = 3
    answer: 3, tolerance: 0,
    hint: {
      fr: "6 - 9 = -3. Puis (-3)² = 9. Effectue les multiplications, puis la soustraction.",
      en: "6 - 9 = -3. Then (-3)² = 9. Do the multiplications, then the subtraction.",
      nl: "6 - 9 = -3. Dan (-3)² = 9. Doe de vermenigvuldigingen, dan de aftrekking."
    }
  },
  {
    id: "N1_s_101", category: "N1", level: 3,
    text: { fr: "Calcule : (-7)² - 3 × (-4)²", en: "Calculate: (-7)² - 3 × (-4)²", nl: "Bereken: (-7)² - 3 × (-4)²" },
    // 49 - 3 × 16 = 49 - 48 = 1
    answer: 1, tolerance: 0,
    hint: {
      fr: "(-7)² = 49 et (-4)² = 16. Effectue la multiplication, puis la soustraction.",
      en: "(-7)² = 49 and (-4)² = 16. Do the multiplication, then the subtraction.",
      nl: "(-7)² = 49 en (-4)² = 16. Doe de vermenigvuldiging, dan de aftrekking."
    }
  },
  {
    id: "N1_s_102", category: "N1", level: 3,
    text: { fr: "Calcule : 5 × (2 - 6)³ + 320", en: "Calculate: 5 × (2 - 6)³ + 320", nl: "Bereken: 5 × (2 - 6)³ + 320" },
    // 5 × (-4)³ + 320 = 5 × (-64) + 320 = -320 + 320 = 0
    answer: 0, tolerance: 0,
    hint: {
      fr: "2 - 6 = -4. Puis (-4)³ = -64. Multiplie par 5 et ajoute 320.",
      en: "2 - 6 = -4. Then (-4)³ = -64. Multiply by 5 and add 320.",
      nl: "2 - 6 = -4. Dan (-4)³ = -64. Vermenigvuldig met 5 en tel 320 op."
    }
  },
  {
    id: "N1_s_103", category: "N1", level: 3,
    text: { fr: "Calcule : (-1)⁴ + (-2)⁴ - (-3)²", en: "Calculate: (-1)⁴ + (-2)⁴ - (-3)²", nl: "Bereken: (-1)⁴ + (-2)⁴ - (-3)²" },
    // 1 + 16 - 9 = 8
    answer: 8, tolerance: 0,
    hint: {
      fr: "(-1)⁴ = 1, (-2)⁴ = 16 (exposants pairs = positifs), (-3)² = 9. Additionne puis soustrais.",
      en: "(-1)⁴ = 1, (-2)⁴ = 16 (even exponents = positive), (-3)² = 9. Add then subtract.",
      nl: "(-1)⁴ = 1, (-2)⁴ = 16 (even exponenten = positief), (-3)² = 9. Tel op en trek dan af."
    }
  },
  {
    id: "N1_s_104", category: "N1", level: 3,
    text: { fr: "Calcule : 6 × (-3) + (-2)³ × (-4)", en: "Calculate: 6 × (-3) + (-2)³ × (-4)", nl: "Bereken: 6 × (-3) + (-2)³ × (-4)" },
    // -18 + (-8) × (-4) = -18 + 32 = 14
    answer: 14, tolerance: 0,
    hint: {
      fr: "(-2)³ = -8. Puis 6 × (-3) = -18 et (-8) × (-4) = 32. Additionne les résultats.",
      en: "(-2)³ = -8. Then 6 × (-3) = -18 and (-8) × (-4) = 32. Add the results.",
      nl: "(-2)³ = -8. Dan 6 × (-3) = -18 en (-8) × (-4) = 32. Tel de resultaten op."
    }
  },
  {
    id: "N1_s_105", category: "N1", level: 3,
    text: { fr: "Calcule : (3 - 8)² - (1 - 4)²", en: "Calculate: (3 - 8)² - (1 - 4)²", nl: "Bereken: (3 - 8)² - (1 - 4)²" },
    // (-5)² - (-3)² = 25 - 9 = 16
    answer: 16, tolerance: 0,
    hint: {
      fr: "3 - 8 = -5 et 1 - 4 = -3. Puis (-5)² = 25 et (-3)² = 9. Soustrais.",
      en: "3 - 8 = -5 and 1 - 4 = -3. Then (-5)² = 25 and (-3)² = 9. Subtract.",
      nl: "3 - 8 = -5 en 1 - 4 = -3. Dan (-5)² = 25 en (-3)² = 9. Trek af."
    }
  },
  {
    id: "N1_s_106", category: "N1", level: 3,
    text: { fr: "Calcule : (-2)³ + (-3)² × 2", en: "Calculate: (-2)³ + (-3)² × 2", nl: "Bereken: (-2)³ + (-3)² × 2" },
    // -8 + 9 × 2 = -8 + 18 = 10
    answer: 10, tolerance: 0,
    hint: {
      fr: "(-2)³ = -8 et (-3)² = 9. Effectue la multiplication d'abord : 9 × 2 = 18, puis ajoute -8.",
      en: "(-2)³ = -8 and (-3)² = 9. Do the multiplication first: 9 × 2 = 18, then add -8.",
      nl: "(-2)³ = -8 en (-3)² = 9. Doe eerst de vermenigvuldiging: 9 × 2 = 18, tel dan -8 op."
    }
  },
  {
    id: "N1_s_107", category: "N1", level: 3,
    text: { fr: "Calcule : 3 × (4 - 9)² + (-2)³", en: "Calculate: 3 × (4 - 9)² + (-2)³", nl: "Bereken: 3 × (4 - 9)² + (-2)³" },
    // 3 × (-5)² + (-8) = 3 × 25 - 8 = 75 - 8 = 67
    answer: 67, tolerance: 0,
    hint: {
      fr: "4 - 9 = -5. Puis (-5)² = 25. Multiplie par 3, puis ajoute (-2)³ = -8.",
      en: "4 - 9 = -5. Then (-5)² = 25. Multiply by 3, then add (-2)³ = -8.",
      nl: "4 - 9 = -5. Dan (-5)² = 25. Vermenigvuldig met 3, tel dan (-2)³ = -8 op."
    }
  },
  {
    id: "N1_s_108", category: "N1", level: 3,
    text: { fr: "Calcule : (-3)² × (-2)³ + 80", en: "Calculate: (-3)² × (-2)³ + 80", nl: "Bereken: (-3)² × (-2)³ + 80" },
    // 9 × (-8) + 80 = -72 + 80 = 8
    answer: 8, tolerance: 0,
    hint: {
      fr: "(-3)² = 9, (-2)³ = -8. Multiplie : 9 × (-8) = -72. Ajoute 80.",
      en: "(-3)² = 9, (-2)³ = -8. Multiply: 9 × (-8) = -72. Add 80.",
      nl: "(-3)² = 9, (-2)³ = -8. Vermenigvuldig: 9 × (-8) = -72. Tel 80 op."
    }
  },
  {
    id: "N1_s_109", category: "N1", level: 3,
    text: { fr: "Calcule : 7 - 2 × (3 - 8)²", en: "Calculate: 7 - 2 × (3 - 8)²", nl: "Bereken: 7 - 2 × (3 - 8)²" },
    // 7 - 2 × (-5)² = 7 - 2 × 25 = 7 - 50 = -43
    answer: -43, tolerance: 0,
    hint: {
      fr: "3 - 8 = -5. Puis (-5)² = 25. Multiplie par 2, puis soustrais de 7.",
      en: "3 - 8 = -5. Then (-5)² = 25. Multiply by 2, then subtract from 7.",
      nl: "3 - 8 = -5. Dan (-5)² = 25. Vermenigvuldig met 2, trek dan af van 7."
    }
  },
  {
    id: "N1_s_110", category: "N1", level: 3,
    text: { fr: "Calcule : (-4)² + (-4)³ + 50", en: "Calculate: (-4)² + (-4)³ + 50", nl: "Bereken: (-4)² + (-4)³ + 50" },
    // 16 + (-64) + 50 = 16 - 64 + 50 = 2
    answer: 2, tolerance: 0,
    hint: {
      fr: "(-4)² = 16 (exposant pair) et (-4)³ = -64 (exposant impair). Additionne les trois termes.",
      en: "(-4)² = 16 (even exponent) and (-4)³ = -64 (odd exponent). Add all three terms.",
      nl: "(-4)² = 16 (even exponent) en (-4)³ = -64 (oneven exponent). Tel alle drie de termen op."
    }
  },
  {
    id: "N1_s_111", category: "N1", level: 3,
    text: { fr: "Calcule : 2 × (-5)² - 3 × (2 - 5)²", en: "Calculate: 2 × (-5)² - 3 × (2 - 5)²", nl: "Bereken: 2 × (-5)² - 3 × (2 - 5)²" },
    // 2 × 25 - 3 × (-3)² = 50 - 3 × 9 = 50 - 27 = 23
    answer: 23, tolerance: 0,
    hint: {
      fr: "(-5)² = 25 et (2 - 5) = -3, (-3)² = 9. Effectue les multiplications, puis la soustraction.",
      en: "(-5)² = 25 and (2 - 5) = -3, (-3)² = 9. Do the multiplications, then the subtraction.",
      nl: "(-5)² = 25 en (2 - 5) = -3, (-3)² = 9. Doe de vermenigvuldigingen, dan de aftrekking."
    }
  },
  {
    id: "N1_s_112", category: "N1", level: 3,
    text: { fr: "Calcule : (-2)⁴ × 3 - (-3)³", en: "Calculate: (-2)⁴ × 3 - (-3)³", nl: "Bereken: (-2)⁴ × 3 - (-3)³" },
    // 16 × 3 - (-27) = 48 + 27 = 75
    answer: 75, tolerance: 0,
    hint: {
      fr: "(-2)⁴ = 16 (exposant pair = positif) et (-3)³ = -27. Soustraire -27 revient à ajouter 27.",
      en: "(-2)⁴ = 16 (even exponent = positive) and (-3)³ = -27. Subtracting -27 is the same as adding 27.",
      nl: "(-2)⁴ = 16 (even exponent = positief) en (-3)³ = -27. -27 aftrekken is hetzelfde als 27 optellen."
    }
  },
  {
    id: "N1_s_113", category: "N1", level: 1,
    text: { fr: "Calcule : 36 ÷ 4 + 7 × 2", en: "Calculate: 36 ÷ 4 + 7 × 2", nl: "Bereken: 36 ÷ 4 + 7 × 2" },
    // 9 + 14 = 23
    answer: 23, tolerance: 0,
    hint: {
      fr: "Effectue d'abord les multiplications et divisions, puis l'addition.",
      en: "Do the multiplications and divisions first, then the addition.",
      nl: "Doe eerst de vermenigvuldigingen en delingen, dan de optelling."
    }
  },
  {
    id: "N1_s_114", category: "N1", level: 1,
    text: { fr: "Calcule : 50 - 6 × 5 + 8", en: "Calculate: 50 - 6 × 5 + 8", nl: "Bereken: 50 - 6 × 5 + 8" },
    // 50 - 30 + 8 = 28
    answer: 28, tolerance: 0,
    hint: {
      fr: "Effectue d'abord la multiplication, puis les additions et soustractions de gauche à droite.",
      en: "Do the multiplication first, then additions and subtractions left to right.",
      nl: "Doe eerst de vermenigvuldiging, dan optellingen en aftrekkingen van links naar rechts."
    }
  },
  {
    id: "N1_s_115", category: "N1", level: 1,
    text: { fr: "Calcule : 4 × 9 - 12 ÷ 3", en: "Calculate: 4 × 9 - 12 ÷ 3", nl: "Bereken: 4 × 9 - 12 ÷ 3" },
    // 36 - 4 = 32
    answer: 32, tolerance: 0,
    hint: {
      fr: "Effectue les multiplications et divisions d'abord, puis la soustraction.",
      en: "Do the multiplications and divisions first, then the subtraction.",
      nl: "Doe eerst de vermenigvuldigingen en delingen, dan de aftrekking."
    }
  },
  {
    id: "N1_s_116", category: "N1", level: 2,
    text: { fr: "Calcule : (15 + 3) × 4 - 2²", en: "Calculate: (15 + 3) × 4 - 2²", nl: "Bereken: (15 + 3) × 4 - 2²" },
    // 18 × 4 - 4 = 72 - 4 = 68
    answer: 68, tolerance: 0,
    hint: {
      fr: "Parenthèse d'abord, puis la puissance, puis la multiplication, puis la soustraction.",
      en: "Parentheses first, then the power, then multiplication, then subtraction.",
      nl: "Haakjes eerst, dan de macht, dan vermenigvuldiging, dan aftrekking."
    }
  },
  {
    id: "N1_s_117", category: "N1", level: 2,
    text: { fr: "Calcule : 3² × 5 - (40 ÷ 8)", en: "Calculate: 3² × 5 - (40 ÷ 8)", nl: "Bereken: 3² × 5 - (40 ÷ 8)" },
    // 9 × 5 - 5 = 45 - 5 = 40
    answer: 40, tolerance: 0,
    hint: {
      fr: "Calcule la puissance et la parenthèse, puis la multiplication, puis la soustraction.",
      en: "Calculate the power and the parenthesis, then multiply, then subtract.",
      nl: "Bereken de macht en de haakjes, dan vermenigvuldigen, dan aftrekken."
    }
  },
  {
    id: "N1_s_118", category: "N1", level: 3,
    text: { fr: "Calcule : (-3)³ + 4 × 5²", en: "Calculate: (-3)³ + 4 × 5²", nl: "Bereken: (-3)³ + 4 × 5²" },
    // -27 + 4 × 25 = -27 + 100 = 73
    answer: 73, tolerance: 0,
    hint: {
      fr: "(-3)³ = -27 et 5² = 25. Effectue la multiplication, puis l'addition.",
      en: "(-3)³ = -27 and 5² = 25. Do the multiplication, then the addition.",
      nl: "(-3)³ = -27 en 5² = 25. Doe de vermenigvuldiging, dan de optelling."
    }
  },
  {
    id: "N1_s_119", category: "N1", level: 3,
    text: { fr: "Calcule : 2 × (-4)² + 3 × (-2)³", en: "Calculate: 2 × (-4)² + 3 × (-2)³", nl: "Bereken: 2 × (-4)² + 3 × (-2)³" },
    // 2 × 16 + 3 × (-8) = 32 - 24 = 8
    answer: 8, tolerance: 0,
    hint: {
      fr: "(-4)² = 16 et (-2)³ = -8. Effectue les multiplications, puis l'addition.",
      en: "(-4)² = 16 and (-2)³ = -8. Do the multiplications, then the addition.",
      nl: "(-4)² = 16 en (-2)³ = -8. Doe de vermenigvuldigingen, dan de optelling."
    }
  },
];

/**
 * Generateur procedural pour N1 - Calcul numerique
 * @param {1|2|3} level - Niveau de difficulte
 * @returns {object} Question generee
 */
export function generate(level = 1) {
  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const id = `N1_gen_${Date.now()}_${rand(100, 999)}`;

  if (level === 1) {
    const a = rand(10, 50);
    const b = rand(2, 9);
    const c = rand(2, 9);
    const answer = a - b * c;
    return {
      id, category: 'N1', level,
      text: {
        fr: `Calcule : ${a} - ${b} × ${c}`,
        en: `Calculate: ${a} - ${b} × ${c}`,
        nl: `Bereken: ${a} - ${b} × ${c}`
      },
      answer, tolerance: 0
    };
  }

  if (level === 2) {
    const a = rand(20, 80);
    const b = rand(2, 8);
    const base = rand(2, 5);
    const exp = rand(2, 3);
    const power = Math.pow(base, exp);
    const sup = exp === 2 ? '\u00B2' : '\u00B3';
    const answer = a - b * power;
    return {
      id, category: 'N1', level,
      text: {
        fr: `Calcule : ${a} - ${b} \u00D7 ${base}${sup}`,
        en: `Calculate: ${a} - ${b} \u00D7 ${base}${sup}`,
        nl: `Bereken: ${a} - ${b} \u00D7 ${base}${sup}`
      },
      answer, tolerance: 0
    };
  }

  // Level 3
  const a = rand(3, 9);
  const base = rand(2, 4);
  const exp = rand(2, 3);
  const power = Math.pow(base, exp);
  const answer = a * power + rand(-10, 10);
  const c = answer - a * power;
  const sup = exp === 2 ? '\u00B2' : '\u00B3';
  const cStr = c >= 0 ? `+ ${c}` : `- ${Math.abs(c)}`;
  return {
    id, category: 'N1', level,
    text: {
      fr: `Calcule : ${a} \u00D7 ${base}${sup} ${cStr}`,
      en: `Calculate: ${a} \u00D7 ${base}${sup} ${cStr}`,
      nl: `Bereken: ${a} \u00D7 ${base}${sup} ${cStr}`
    },
    answer, tolerance: 0
  };
}
