// =============================================================================
// N1 - Calcul numérique (Numerical computation)
// CE1D Belgian exam - Trilingual (FR / EN / NL)
// 50 questions: ~17 per level
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
  }
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
