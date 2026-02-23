// =============================================================================
// N3 - Priorités des opérations
// CE1D Belgian exam - Trilingual (FR / EN / NL)
// =============================================================================

export const questions = [
  // ---------------------------------------------------------------------------
  // Level 1 — Simple priority (×/÷ before +/-)
  // ---------------------------------------------------------------------------
  {
    id: "N3_s_1", category: "N3", level: 1,
    text: { fr: "Calcule : 3 + 4 × 2", en: "Calculate: 3 + 4 × 2", nl: "Bereken: 3 + 4 × 2" },
    answer: 11, tolerance: 0,
    hint: { fr: "Effectue d'abord la multiplication.", en: "Do the multiplication first.", nl: "Doe eerst de vermenigvuldiging." }
  },
  {
    id: "N3_s_2", category: "N3", level: 1,
    text: { fr: "Calcule : 20 - 3 × 5", en: "Calculate: 20 - 3 × 5", nl: "Bereken: 20 - 3 × 5" },
    answer: 5, tolerance: 0,
    hint: { fr: "La multiplication est prioritaire.", en: "Multiplication comes first.", nl: "Vermenigvuldiging gaat voor." }
  },
  {
    id: "N3_s_3", category: "N3", level: 1,
    text: { fr: "Calcule : 6 × 3 + 7", en: "Calculate: 6 × 3 + 7", nl: "Bereken: 6 × 3 + 7" },
    answer: 25, tolerance: 0,
    hint: { fr: "Multiplie d'abord, puis additionne.", en: "Multiply first, then add.", nl: "Vermenigvuldig eerst, tel dan op." }
  },
  {
    id: "N3_s_4", category: "N3", level: 1,
    text: { fr: "Calcule : 15 - 2 × 4", en: "Calculate: 15 - 2 × 4", nl: "Bereken: 15 - 2 × 4" },
    answer: 7, tolerance: 0,
    hint: { fr: "Effectue d'abord 2 × 4.", en: "Do 2 × 4 first.", nl: "Bereken eerst 2 × 4." }
  },
  {
    id: "N3_s_5", category: "N3", level: 1,
    text: { fr: "Calcule : 8 + 5 × 3", en: "Calculate: 8 + 5 × 3", nl: "Bereken: 8 + 5 × 3" },
    answer: 23, tolerance: 0,
    hint: { fr: "La multiplication est prioritaire sur l'addition.", en: "Multiplication before addition.", nl: "Vermenigvuldiging voor optelling." }
  },
  // — Level 1 continued (s_16 – s_27) —
  {
    id: "N3_s_16", category: "N3", level: 1,
    text: { fr: "Calcule : 10 + 18 ÷ 3", en: "Calculate: 10 + 18 ÷ 3", nl: "Bereken: 10 + 18 ÷ 3" },
    answer: 16, tolerance: 0,
    hint: { fr: "Effectue d'abord la division.", en: "Do the division first.", nl: "Doe eerst de deling." }
  },
  {
    id: "N3_s_17", category: "N3", level: 1,
    text: { fr: "Calcule : 8 × 2 - 3", en: "Calculate: 8 × 2 - 3", nl: "Bereken: 8 × 2 - 3" },
    answer: 13, tolerance: 0,
    hint: { fr: "Multiplie d'abord, puis soustrais.", en: "Multiply first, then subtract.", nl: "Vermenigvuldig eerst, trek dan af." }
  },
  {
    id: "N3_s_18", category: "N3", level: 1,
    text: { fr: "Calcule : 7 + 6 × 4", en: "Calculate: 7 + 6 × 4", nl: "Bereken: 7 + 6 × 4" },
    answer: 31, tolerance: 0,
    hint: { fr: "La multiplication est prioritaire sur l'addition.", en: "Multiplication before addition.", nl: "Vermenigvuldiging voor optelling." }
  },
  {
    id: "N3_s_19", category: "N3", level: 1,
    text: { fr: "Calcule : 30 - 12 ÷ 4", en: "Calculate: 30 - 12 ÷ 4", nl: "Bereken: 30 - 12 ÷ 4" },
    answer: 27, tolerance: 0,
    hint: { fr: "La division est prioritaire sur la soustraction.", en: "Division before subtraction.", nl: "Deling voor aftrekking." }
  },
  {
    id: "N3_s_20", category: "N3", level: 1,
    text: { fr: "Calcule : 5 × 7 - 9", en: "Calculate: 5 × 7 - 9", nl: "Bereken: 5 × 7 - 9" },
    answer: 26, tolerance: 0,
    hint: { fr: "Effectue d'abord 5 × 7.", en: "Do 5 × 7 first.", nl: "Bereken eerst 5 × 7." }
  },
  {
    id: "N3_s_21", category: "N3", level: 1,
    text: { fr: "Calcule : 14 + 3 × 6", en: "Calculate: 14 + 3 × 6", nl: "Bereken: 14 + 3 × 6" },
    answer: 32, tolerance: 0,
    hint: { fr: "Multiplie d'abord 3 × 6, puis additionne.", en: "Multiply 3 × 6 first, then add.", nl: "Vermenigvuldig eerst 3 × 6, tel dan op." }
  },
  {
    id: "N3_s_22", category: "N3", level: 1,
    text: { fr: "Calcule : 40 - 8 × 4", en: "Calculate: 40 - 8 × 4", nl: "Bereken: 40 - 8 × 4" },
    answer: 8, tolerance: 0,
    hint: { fr: "Effectue d'abord la multiplication.", en: "Do the multiplication first.", nl: "Doe eerst de vermenigvuldiging." }
  },
  {
    id: "N3_s_23", category: "N3", level: 1,
    text: { fr: "Calcule : 9 × 2 + 11", en: "Calculate: 9 × 2 + 11", nl: "Bereken: 9 × 2 + 11" },
    answer: 29, tolerance: 0,
    hint: { fr: "Multiplie d'abord, puis additionne.", en: "Multiply first, then add.", nl: "Vermenigvuldig eerst, tel dan op." }
  },
  {
    id: "N3_s_24", category: "N3", level: 1,
    text: { fr: "Calcule : 25 - 15 ÷ 5", en: "Calculate: 25 - 15 ÷ 5", nl: "Bereken: 25 - 15 ÷ 5" },
    answer: 22, tolerance: 0,
    hint: { fr: "Divise d'abord 15 ÷ 5, puis soustrais.", en: "Divide 15 ÷ 5 first, then subtract.", nl: "Deel eerst 15 ÷ 5, trek dan af." }
  },
  {
    id: "N3_s_25", category: "N3", level: 1,
    text: { fr: "Calcule : 4 × 8 + 3 × 2", en: "Calculate: 4 × 8 + 3 × 2", nl: "Bereken: 4 × 8 + 3 × 2" },
    answer: 38, tolerance: 0,
    hint: { fr: "Effectue les deux multiplications d'abord.", en: "Do both multiplications first.", nl: "Doe beide vermenigvuldigingen eerst." }
  },
  {
    id: "N3_s_26", category: "N3", level: 1,
    text: { fr: "Calcule : 50 - 7 × 6", en: "Calculate: 50 - 7 × 6", nl: "Bereken: 50 - 7 × 6" },
    answer: 8, tolerance: 0,
    hint: { fr: "La multiplication est prioritaire.", en: "Multiplication comes first.", nl: "Vermenigvuldiging gaat voor." }
  },
  {
    id: "N3_s_27", category: "N3", level: 1,
    text: { fr: "Calcule : 12 ÷ 3 + 5 × 4", en: "Calculate: 12 ÷ 3 + 5 × 4", nl: "Bereken: 12 ÷ 3 + 5 × 4" },
    answer: 24, tolerance: 0,
    hint: { fr: "Effectue la division et la multiplication d'abord, puis additionne.", en: "Do the division and multiplication first, then add.", nl: "Doe de deling en vermenigvuldiging eerst, tel dan op." }
  },

  // ---------------------------------------------------------------------------
  // Level 2 — Parentheses change priority
  // ---------------------------------------------------------------------------
  {
    id: "N3_s_6", category: "N3", level: 2,
    text: { fr: "Calcule : (4 + 3) × 5", en: "Calculate: (4 + 3) × 5", nl: "Bereken: (4 + 3) × 5" },
    answer: 35, tolerance: 0,
    hint: { fr: "Calcule d'abord ce qui est entre parenthèses.", en: "Calculate parentheses first.", nl: "Bereken eerst wat tussen haakjes staat." }
  },
  {
    id: "N3_s_7", category: "N3", level: 2,
    text: { fr: "Calcule : 2 × (10 - 3) + 4", en: "Calculate: 2 × (10 - 3) + 4", nl: "Bereken: 2 × (10 - 3) + 4" },
    answer: 18, tolerance: 0,
    hint: { fr: "Parenthèses d'abord, puis ×, puis +.", en: "Parentheses, then ×, then +.", nl: "Haakjes eerst, dan ×, dan +." }
  },
  {
    id: "N3_s_8", category: "N3", level: 2,
    text: { fr: "Calcule : 36 ÷ (2 + 4) × 3", en: "Calculate: 36 ÷ (2 + 4) × 3", nl: "Bereken: 36 ÷ (2 + 4) × 3" },
    answer: 18, tolerance: 0,
    hint: { fr: "Parenthèses d'abord, puis de gauche à droite.", en: "Parentheses first, then left to right.", nl: "Haakjes eerst, dan van links naar rechts." }
  },
  {
    id: "N3_s_9", category: "N3", level: 2,
    text: { fr: "Calcule : (8 - 3) × (2 + 4)", en: "Calculate: (8 - 3) × (2 + 4)", nl: "Bereken: (8 - 3) × (2 + 4)" },
    answer: 30, tolerance: 0,
    hint: { fr: "Calcule chaque parenthèse, puis multiplie.", en: "Evaluate each parenthesis, then multiply.", nl: "Bereken elke haakje, vermenigvuldig dan." }
  },
  {
    id: "N3_s_10", category: "N3", level: 2,
    text: { fr: "Calcule : 50 - 2 × (3 + 7)", en: "Calculate: 50 - 2 × (3 + 7)", nl: "Bereken: 50 - 2 × (3 + 7)" },
    answer: 30, tolerance: 0,
    hint: { fr: "Parenthèses, puis multiplication, puis soustraction.", en: "Parentheses, then multiplication, then subtraction.", nl: "Haakjes, dan vermenigvuldiging, dan aftrekking." }
  },
  // — Level 2 continued (s_28 – s_39) —
  {
    id: "N3_s_28", category: "N3", level: 2,
    text: { fr: "Calcule : (9 - 4) × 6", en: "Calculate: (9 - 4) × 6", nl: "Bereken: (9 - 4) × 6" },
    answer: 30, tolerance: 0,
    hint: { fr: "Calcule d'abord la parenthèse, puis multiplie.", en: "Evaluate the parentheses first, then multiply.", nl: "Bereken eerst de haakjes, vermenigvuldig dan." }
  },
  {
    id: "N3_s_29", category: "N3", level: 2,
    text: { fr: "Calcule : 3 × (7 + 5) - 10", en: "Calculate: 3 × (7 + 5) - 10", nl: "Bereken: 3 × (7 + 5) - 10" },
    answer: 26, tolerance: 0,
    hint: { fr: "Parenthèses d'abord, puis ×, puis -.", en: "Parentheses first, then ×, then -.", nl: "Haakjes eerst, dan ×, dan -." }
  },
  {
    id: "N3_s_30", category: "N3", level: 2,
    text: { fr: "Calcule : 48 ÷ (12 - 4)", en: "Calculate: 48 ÷ (12 - 4)", nl: "Bereken: 48 ÷ (12 - 4)" },
    answer: 6, tolerance: 0,
    hint: { fr: "Calcule d'abord 12 - 4, puis divise.", en: "Calculate 12 - 4 first, then divide.", nl: "Bereken eerst 12 - 4, deel dan." }
  },
  {
    id: "N3_s_31", category: "N3", level: 2,
    text: { fr: "Calcule : (6 + 3) × (7 - 2)", en: "Calculate: (6 + 3) × (7 - 2)", nl: "Bereken: (6 + 3) × (7 - 2)" },
    answer: 45, tolerance: 0,
    hint: { fr: "Calcule chaque parenthèse, puis multiplie.", en: "Evaluate each parenthesis, then multiply.", nl: "Bereken elke haakje, vermenigvuldig dan." }
  },
  {
    id: "N3_s_32", category: "N3", level: 2,
    text: { fr: "Calcule : 5 × (8 - 3) + 2 × 4", en: "Calculate: 5 × (8 - 3) + 2 × 4", nl: "Bereken: 5 × (8 - 3) + 2 × 4" },
    answer: 33, tolerance: 0,
    hint: { fr: "Parenthèses d'abord, puis les multiplications, puis l'addition.", en: "Parentheses first, then multiplications, then addition.", nl: "Haakjes eerst, dan vermenigvuldigingen, dan optelling." }
  },
  {
    id: "N3_s_33", category: "N3", level: 2,
    text: { fr: "Calcule : 60 ÷ (3 + 2) - 7", en: "Calculate: 60 ÷ (3 + 2) - 7", nl: "Bereken: 60 ÷ (3 + 2) - 7" },
    answer: 5, tolerance: 0,
    hint: { fr: "Parenthèses d'abord, puis la division, puis la soustraction.", en: "Parentheses first, then division, then subtraction.", nl: "Haakjes eerst, dan deling, dan aftrekking." }
  },
  {
    id: "N3_s_34", category: "N3", level: 2,
    text: { fr: "Calcule : (11 - 5) × 8 + 2", en: "Calculate: (11 - 5) × 8 + 2", nl: "Bereken: (11 - 5) × 8 + 2" },
    answer: 50, tolerance: 0,
    hint: { fr: "Parenthèses d'abord, puis ×, puis +.", en: "Parentheses first, then ×, then +.", nl: "Haakjes eerst, dan ×, dan +." }
  },
  {
    id: "N3_s_35", category: "N3", level: 2,
    text: { fr: "Calcule : 7 × (2 + 6) - 3 × 4", en: "Calculate: 7 × (2 + 6) - 3 × 4", nl: "Bereken: 7 × (2 + 6) - 3 × 4" },
    answer: 44, tolerance: 0,
    hint: { fr: "Parenthèses d'abord, puis les multiplications, puis la soustraction.", en: "Parentheses first, then multiplications, then subtraction.", nl: "Haakjes eerst, dan vermenigvuldigingen, dan aftrekking." }
  },
  {
    id: "N3_s_36", category: "N3", level: 2,
    text: { fr: "Calcule : 72 ÷ (9 - 3) + 15", en: "Calculate: 72 ÷ (9 - 3) + 15", nl: "Bereken: 72 ÷ (9 - 3) + 15" },
    answer: 27, tolerance: 0,
    hint: { fr: "Parenthèses d'abord, puis la division, puis l'addition.", en: "Parentheses first, then division, then addition.", nl: "Haakjes eerst, dan deling, dan optelling." }
  },
  {
    id: "N3_s_37", category: "N3", level: 2,
    text: { fr: "Calcule : (5 + 7) × (9 - 6)", en: "Calculate: (5 + 7) × (9 - 6)", nl: "Bereken: (5 + 7) × (9 - 6)" },
    answer: 36, tolerance: 0,
    hint: { fr: "Calcule chaque parenthèse séparément, puis multiplie.", en: "Evaluate each parenthesis separately, then multiply.", nl: "Bereken elke haakje apart, vermenigvuldig dan." }
  },
  {
    id: "N3_s_38", category: "N3", level: 2,
    text: { fr: "Calcule : 4 × (13 - 8) + 6 × 3", en: "Calculate: 4 × (13 - 8) + 6 × 3", nl: "Bereken: 4 × (13 - 8) + 6 × 3" },
    answer: 38, tolerance: 0,
    hint: { fr: "Parenthèses d'abord, puis les multiplications, puis l'addition.", en: "Parentheses first, then multiplications, then addition.", nl: "Haakjes eerst, dan vermenigvuldigingen, dan optelling." }
  },
  {
    id: "N3_s_39", category: "N3", level: 2,
    text: { fr: "Calcule : 100 - (16 + 4) × 4", en: "Calculate: 100 - (16 + 4) × 4", nl: "Bereken: 100 - (16 + 4) × 4" },
    answer: 20, tolerance: 0,
    hint: { fr: "Parenthèses d'abord, puis ×, puis -.", en: "Parentheses first, then ×, then -.", nl: "Haakjes eerst, dan ×, dan -." }
  },

  // ---------------------------------------------------------------------------
  // Level 3 — Nested parentheses, powers, complex multi-step
  // ---------------------------------------------------------------------------
  {
    id: "N3_s_11", category: "N3", level: 3,
    text: { fr: "Calcule : 3 × (4 + 2) - (10 - 3)", en: "Calculate: 3 × (4 + 2) - (10 - 3)", nl: "Bereken: 3 × (4 + 2) - (10 - 3)" },
    answer: 11, tolerance: 0,
    hint: { fr: "Calcule chaque parenthèse séparément.", en: "Evaluate each set of parentheses.", nl: "Bereken elke haakje apart." }
  },
  {
    id: "N3_s_12", category: "N3", level: 3,
    text: { fr: "Calcule : (2 + 3)² - 4 × 3", en: "Calculate: (2 + 3)² - 4 × 3", nl: "Bereken: (2 + 3)² - 4 × 3" },
    answer: 13, tolerance: 0,
    hint: { fr: "Parenthèses, puis puissance, puis multiplication.", en: "Parentheses, then power, then multiplication.", nl: "Haakjes, dan macht, dan vermenigvuldiging." }
  },
  {
    id: "N3_s_13", category: "N3", level: 3,
    text: { fr: "Calcule : 48 ÷ (2 × (1 + 3))", en: "Calculate: 48 ÷ (2 × (1 + 3))", nl: "Bereken: 48 ÷ (2 × (1 + 3))" },
    answer: 6, tolerance: 0,
    hint: { fr: "Commence par les parenthèses intérieures.", en: "Start with the inner parentheses.", nl: "Begin met de binnenste haakjes." }
  },
  {
    id: "N3_s_14", category: "N3", level: 3,
    text: { fr: "Calcule : (15 - 3 × 2) × (1 + 2)", en: "Calculate: (15 - 3 × 2) × (1 + 2)", nl: "Bereken: (15 - 3 × 2) × (1 + 2)" },
    answer: 27, tolerance: 0,
    hint: { fr: "Dans la 1re parenthèse, la × est prioritaire.", en: "In the 1st bracket, × comes first.", nl: "In het 1e haakje gaat × voor." }
  },
  {
    id: "N3_s_15", category: "N3", level: 3,
    text: { fr: "Calcule : 100 - 3 × (2 × 5 + 4)", en: "Calculate: 100 - 3 × (2 × 5 + 4)", nl: "Bereken: 100 - 3 × (2 × 5 + 4)" },
    answer: 58, tolerance: 0,
    hint: { fr: "Dans la parenthèse : × d'abord, puis +.", en: "Inside the bracket: × first, then +.", nl: "Binnen haakjes: × eerst, dan +." }
  },
  // — Level 3 continued (s_40 – s_50) —
  {
    id: "N3_s_40", category: "N3", level: 3,
    text: { fr: "Calcule : (3 + 4)² - 2 × 10", en: "Calculate: (3 + 4)² - 2 × 10", nl: "Bereken: (3 + 4)² - 2 × 10" },
    answer: 29, tolerance: 0,
    hint: { fr: "Parenthèses, puis puissance, puis multiplication, puis soustraction.", en: "Parentheses, then power, then multiplication, then subtraction.", nl: "Haakjes, dan macht, dan vermenigvuldiging, dan aftrekking." }
  },
  {
    id: "N3_s_41", category: "N3", level: 3,
    text: { fr: "Calcule : 60 ÷ (3 × (2 + 3))", en: "Calculate: 60 ÷ (3 × (2 + 3))", nl: "Bereken: 60 ÷ (3 × (2 + 3))" },
    answer: 4, tolerance: 0,
    hint: { fr: "Commence par les parenthèses intérieures, puis les extérieures.", en: "Start with the inner parentheses, then the outer.", nl: "Begin met de binnenste haakjes, dan de buitenste." }
  },
  {
    id: "N3_s_42", category: "N3", level: 3,
    text: { fr: "Calcule : (9 - 5)² + 3 × (6 - 2)", en: "Calculate: (9 - 5)² + 3 × (6 - 2)", nl: "Bereken: (9 - 5)² + 3 × (6 - 2)" },
    answer: 28, tolerance: 0,
    hint: { fr: "Calcule chaque parenthèse, puis la puissance et la multiplication, puis additionne.", en: "Evaluate each parenthesis, then the power and multiplication, then add.", nl: "Bereken elke haakje, dan de macht en vermenigvuldiging, tel dan op." }
  },
  {
    id: "N3_s_43", category: "N3", level: 3,
    text: { fr: "Calcule : 72 ÷ (4 × (1 + 2)) + 5", en: "Calculate: 72 ÷ (4 × (1 + 2)) + 5", nl: "Bereken: 72 ÷ (4 × (1 + 2)) + 5" },
    answer: 11, tolerance: 0,
    hint: { fr: "Parenthèses intérieures d'abord, puis extérieures, puis division, puis addition.", en: "Inner parentheses first, then outer, then division, then addition.", nl: "Binnenste haakjes eerst, dan buitenste, dan deling, dan optelling." }
  },
  {
    id: "N3_s_44", category: "N3", level: 3,
    text: { fr: "Calcule : (20 - 4 × 3) × (2 + 5)", en: "Calculate: (20 - 4 × 3) × (2 + 5)", nl: "Bereken: (20 - 4 × 3) × (2 + 5)" },
    answer: 56, tolerance: 0,
    hint: { fr: "Dans la 1re parenthèse, la × est prioritaire. Puis multiplie les deux résultats.", en: "In the 1st bracket, × comes first. Then multiply both results.", nl: "In het 1e haakje gaat × voor. Vermenigvuldig dan beide resultaten." }
  },
  {
    id: "N3_s_45", category: "N3", level: 3,
    text: { fr: "Calcule : 5 × (2 + 3)² ÷ 5", en: "Calculate: 5 × (2 + 3)² ÷ 5", nl: "Bereken: 5 × (2 + 3)² ÷ 5" },
    answer: 25, tolerance: 0,
    hint: { fr: "Parenthèses, puis puissance, puis de gauche à droite.", en: "Parentheses, then power, then left to right.", nl: "Haakjes, dan macht, dan van links naar rechts." }
  },
  {
    id: "N3_s_46", category: "N3", level: 3,
    text: { fr: "Calcule : 90 ÷ (2 × (4 + 5)) - 3", en: "Calculate: 90 ÷ (2 × (4 + 5)) - 3", nl: "Bereken: 90 ÷ (2 × (4 + 5)) - 3" },
    answer: 2, tolerance: 0,
    hint: { fr: "Parenthèses intérieures, puis extérieures, puis division, puis soustraction.", en: "Inner parentheses, then outer, then division, then subtraction.", nl: "Binnenste haakjes, dan buitenste, dan deling, dan aftrekking." }
  },
  {
    id: "N3_s_47", category: "N3", level: 3,
    text: { fr: "Calcule : (7 - 3)² + (2 + 1)²", en: "Calculate: (7 - 3)² + (2 + 1)²", nl: "Bereken: (7 - 3)² + (2 + 1)²" },
    answer: 25, tolerance: 0,
    hint: { fr: "Calcule chaque parenthèse, élève au carré, puis additionne.", en: "Evaluate each parenthesis, square, then add.", nl: "Bereken elke haakje, kwadrateer, tel dan op." }
  },
  {
    id: "N3_s_48", category: "N3", level: 3,
    text: { fr: "Calcule : 2 × ((8 + 4) ÷ 3) + 5²", en: "Calculate: 2 × ((8 + 4) ÷ 3) + 5²", nl: "Bereken: 2 × ((8 + 4) ÷ 3) + 5²" },
    answer: 33, tolerance: 0,
    hint: { fr: "Parenthèses intérieures, puis extérieures, puis puissance, puis de gauche à droite.", en: "Inner parentheses, then outer, then power, then left to right.", nl: "Binnenste haakjes, dan buitenste, dan macht, dan van links naar rechts." }
  },
  {
    id: "N3_s_49", category: "N3", level: 3,
    text: { fr: "Calcule : (6² - 4 × 5) ÷ (2 + 2)", en: "Calculate: (6² - 4 × 5) ÷ (2 + 2)", nl: "Bereken: (6² - 4 × 5) ÷ (2 + 2)" },
    answer: 4, tolerance: 0,
    hint: { fr: "Calcule chaque parenthèse (attention à la puissance et la × dans la première).", en: "Evaluate each parenthesis (mind the power and × in the first).", nl: "Bereken elke haakje (let op de macht en × in de eerste)." }
  },
  {
    id: "N3_s_50", category: "N3", level: 3,
    text: { fr: "Calcule : 3 × (2² + 3 × 4) - (8 - 3)²", en: "Calculate: 3 × (2² + 3 × 4) - (8 - 3)²", nl: "Bereken: 3 × (2² + 3 × 4) - (8 - 3)²" },
    answer: 23, tolerance: 0,
    hint: { fr: "Dans chaque parenthèse, respecte les priorités. Puissance et × avant + et -.", en: "Inside each bracket, follow the order. Powers and × before + and -.", nl: "Binnen elke haakje, respecteer de volgorde. Machten en × voor + en -." }
  },
];

export function generate(level = 1) {
  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const id = `N3_gen_${Date.now()}_${rand(100, 999)}`;
  if (level === 1) {
    const a = rand(2, 20); const b = rand(2, 9); const c = rand(2, 9);
    const answer = a + b * c;
    return { id, category: 'N3', level, text: { fr: `Calcule : ${a} + ${b} × ${c}`, en: `Calculate: ${a} + ${b} × ${c}`, nl: `Bereken: ${a} + ${b} × ${c}` }, answer, tolerance: 0 };
  }
  if (level === 2) {
    const a = rand(2, 10); const b = rand(2, 10); const c = rand(2, 9);
    const answer = (a + b) * c;
    return { id, category: 'N3', level, text: { fr: `Calcule : (${a} + ${b}) × ${c}`, en: `Calculate: (${a} + ${b}) × ${c}`, nl: `Bereken: (${a} + ${b}) × ${c}` }, answer, tolerance: 0 };
  }
  const a = rand(2, 8); const b = rand(2, 6); const c = rand(2, 5); const d = rand(1, 10);
  const answer = a * (b + c) - d;
  return { id, category: 'N3', level, text: { fr: `Calcule : ${a} × (${b} + ${c}) - ${d}`, en: `Calculate: ${a} × (${b} + ${c}) - ${d}`, nl: `Bereken: ${a} × (${b} + ${c}) - ${d}` }, answer, tolerance: 0 };
}
