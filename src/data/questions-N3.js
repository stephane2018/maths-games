// =============================================================================
// N3 - Priorités des opérations
// CE1D Belgian exam - Trilingual (FR / EN / NL)
// =============================================================================

export const questions = [
  // ---------------------------------------------------------------------------
  // Level 1 — Simple priority (./: before +/-)
  // ---------------------------------------------------------------------------
  {
    "id": "N3_s_1", "category": "N3", "level": 1,
    "text": { "fr": "Calcule : 3 + 4 . 2", "en": "Calculate: 3 + 4 . 2", "nl": "Bereken: 3 + 4 . 2" },
    "answer": 11, "tolerance": 0,
    "hint": { "fr": "Effectue d'abord la multiplication.", "en": "Do the multiplication first.", "nl": "Doe eerst de vermenigvuldiging." }
  },
  {
    "id": "N3_s_2", "category": "N3", "level": 1,
    "text": { "fr": "Calcule : 20 - 3 . 5", "en": "Calculate: 20 - 3 . 5", "nl": "Bereken: 20 - 3 . 5" },
    "answer": 5, "tolerance": 0,
    "hint": { "fr": "La multiplication est prioritaire.", "en": "Multiplication comes first.", "nl": "Vermenigvuldiging gaat voor." }
  },
  {
    "id": "N3_s_3", "category": "N3", "level": 1,
    "text": { "fr": "Calcule : 6 . 3 + 7", "en": "Calculate: 6 . 3 + 7", "nl": "Bereken: 6 . 3 + 7" },
    "answer": 25, "tolerance": 0,
    "hint": { "fr": "Multiplie d'abord, puis additionne.", "en": "Multiply first, then add.", "nl": "Vermenigvuldig eerst, tel dan op." }
  },
  {
    "id": "N3_s_4", "category": "N3", "level": 1,
    "text": { "fr": "Calcule : 15 - 2 . 4", "en": "Calculate: 15 - 2 . 4", "nl": "Bereken: 15 - 2 . 4" },
    "answer": 7, "tolerance": 0,
    "hint": { "fr": "Effectue d'abord 2 . 4.", "en": "Do 2 . 4 first.", "nl": "Bereken eerst 2 . 4." }
  },
  {
    "id": "N3_s_5", "category": "N3", "level": 1,
    "text": { "fr": "Calcule : 8 + 5 . 3", "en": "Calculate: 8 + 5 . 3", "nl": "Bereken: 8 + 5 . 3" },
    "answer": 23, "tolerance": 0,
    "hint": { "fr": "La multiplication est prioritaire sur l'addition.", "en": "Multiplication before addition.", "nl": "Vermenigvuldiging voor optelling." }
  },
  // — Level 1 continued (s_16 – s_27) —
  {
    "id": "N3_s_16", "category": "N3", "level": 1,
    "text": { "fr": "Calcule : 10 + 18 : 3", "en": "Calculate: 10 + 18 : 3", "nl": "Bereken: 10 + 18 : 3" },
    "answer": 16, "tolerance": 0,
    "hint": { "fr": "Effectue d'abord la division.", "en": "Do the division first.", "nl": "Doe eerst de deling." }
  },
  {
    "id": "N3_s_17", "category": "N3", "level": 1,
    "text": { "fr": "Calcule : 8 . 2 - 3", "en": "Calculate: 8 . 2 - 3", "nl": "Bereken: 8 . 2 - 3" },
    "answer": 13, "tolerance": 0,
    "hint": { "fr": "Multiplie d'abord, puis soustrais.", "en": "Multiply first, then subtract.", "nl": "Vermenigvuldig eerst, trek dan af." }
  },
  {
    "id": "N3_s_18", "category": "N3", "level": 1,
    "text": { "fr": "Calcule : 7 + 6 . 4", "en": "Calculate: 7 + 6 . 4", "nl": "Bereken: 7 + 6 . 4" },
    "answer": 31, "tolerance": 0,
    "hint": { "fr": "La multiplication est prioritaire sur l'addition.", "en": "Multiplication before addition.", "nl": "Vermenigvuldiging voor optelling." }
  },
  {
    "id": "N3_s_19", "category": "N3", "level": 1,
    "text": { "fr": "Calcule : 30 - 12 : 4", "en": "Calculate: 30 - 12 : 4", "nl": "Bereken: 30 - 12 : 4" },
    "answer": 27, "tolerance": 0,
    "hint": { "fr": "La division est prioritaire sur la soustraction.", "en": "Division before subtraction.", "nl": "Deling voor aftrekking." }
  },
  {
    "id": "N3_s_20", "category": "N3", "level": 1,
    "text": { "fr": "Calcule : 5 . 7 - 9", "en": "Calculate: 5 . 7 - 9", "nl": "Bereken: 5 . 7 - 9" },
    "answer": 26, "tolerance": 0,
    "hint": { "fr": "Effectue d'abord 5 . 7.", "en": "Do 5 . 7 first.", "nl": "Bereken eerst 5 . 7." }
  },
  {
    "id": "N3_s_21", "category": "N3", "level": 1,
    "text": { "fr": "Calcule : 14 + 3 . 6", "en": "Calculate: 14 + 3 . 6", "nl": "Bereken: 14 + 3 . 6" },
    "answer": 32, "tolerance": 0,
    "hint": { "fr": "Multiplie d'abord 3 . 6, puis additionne.", "en": "Multiply 3 . 6 first, then add.", "nl": "Vermenigvuldig eerst 3 . 6, tel dan op." }
  },
  {
    "id": "N3_s_22", "category": "N3", "level": 1,
    "text": { "fr": "Calcule : 40 - 8 . 4", "en": "Calculate: 40 - 8 . 4", "nl": "Bereken: 40 - 8 . 4" },
    "answer": 8, "tolerance": 0,
    "hint": { "fr": "Effectue d'abord la multiplication.", "en": "Do the multiplication first.", "nl": "Doe eerst de vermenigvuldiging." }
  },
  {
    "id": "N3_s_23", "category": "N3", "level": 1,
    "text": { "fr": "Calcule : 9 . 2 + 11", "en": "Calculate: 9 . 2 + 11", "nl": "Bereken: 9 . 2 + 11" },
    "answer": 29, "tolerance": 0,
    "hint": { "fr": "Multiplie d'abord, puis additionne.", "en": "Multiply first, then add.", "nl": "Vermenigvuldig eerst, tel dan op." }
  },
  {
    "id": "N3_s_24", "category": "N3", "level": 1,
    "text": { "fr": "Calcule : 25 - 15 : 5", "en": "Calculate: 25 - 15 : 5", "nl": "Bereken: 25 - 15 : 5" },
    "answer": 22, "tolerance": 0,
    "hint": { "fr": "Divise d'abord 15 : 5, puis soustrais.", "en": "Divide 15 : 5 first, then subtract.", "nl": "Deel eerst 15 : 5, trek dan af." }
  },
  {
    "id": "N3_s_25", "category": "N3", "level": 1,
    "text": { "fr": "Calcule : 4 . 8 + 3 . 2", "en": "Calculate: 4 . 8 + 3 . 2", "nl": "Bereken: 4 . 8 + 3 . 2" },
    "answer": 38, "tolerance": 0,
    "hint": { "fr": "Effectue les deux multiplications d'abord.", "en": "Do both multiplications first.", "nl": "Doe beide vermenigvuldigingen eerst." }
  },
  {
    "id": "N3_s_26", "category": "N3", "level": 1,
    "text": { "fr": "Calcule : 50 - 7 . 6", "en": "Calculate: 50 - 7 . 6", "nl": "Bereken: 50 - 7 . 6" },
    "answer": 8, "tolerance": 0,
    "hint": { "fr": "La multiplication est prioritaire.", "en": "Multiplication comes first.", "nl": "Vermenigvuldiging gaat voor." }
  },
  {
    "id": "N3_s_27", "category": "N3", "level": 1,
    "text": { "fr": "Calcule : 12 : 3 + 5 . 4", "en": "Calculate: 12 : 3 + 5 . 4", "nl": "Bereken: 12 : 3 + 5 . 4" },
    "answer": 24, "tolerance": 0,
    "hint": { "fr": "Effectue la division et la multiplication d'abord, puis additionne.", "en": "Do the division and multiplication first, then add.", "nl": "Doe de deling en vermenigvuldiging eerst, tel dan op." }
  },

  // ---------------------------------------------------------------------------
  // Level 2 — Parentheses change priority
  // ---------------------------------------------------------------------------
  {
    "id": "N3_s_6", "category": "N3", "level": 2,
    "text": { "fr": "Calcule : (4 + 3) . 5", "en": "Calculate: (4 + 3) . 5", "nl": "Bereken: (4 + 3) . 5" },
    "answer": 35, "tolerance": 0,
    "hint": { "fr": "Calcule d'abord ce qui est entre parenthèses.", "en": "Calculate parentheses first.", "nl": "Bereken eerst wat tussen haakjes staat." }
  },
  {
    "id": "N3_s_7", "category": "N3", "level": 2,
    "text": { "fr": "Calcule : 2 . (10 - 3) + 4", "en": "Calculate: 2 . (10 - 3) + 4", "nl": "Bereken: 2 . (10 - 3) + 4" },
    "answer": 18, "tolerance": 0,
    "hint": { "fr": "Parenthèses d'abord, puis ., puis +.", "en": "Parentheses, then ., then +.", "nl": "Haakjes eerst, dan ., dan +." }
  },
  {
    "id": "N3_s_8", "category": "N3", "level": 2,
    "text": { "fr": "Calcule : 36 : (2 + 4) . 3", "en": "Calculate: 36 : (2 + 4) . 3", "nl": "Bereken: 36 : (2 + 4) . 3" },
    "answer": 18, "tolerance": 0,
    "hint": { "fr": "Parenthèses d'abord, puis de gauche à droite.", "en": "Parentheses first, then left to right.", "nl": "Haakjes eerst, dan van links naar rechts." }
  },
  {
    "id": "N3_s_9", "category": "N3", "level": 2,
    "text": { "fr": "Calcule : (8 - 3) . (2 + 4)", "en": "Calculate: (8 - 3) . (2 + 4)", "nl": "Bereken: (8 - 3) . (2 + 4)" },
    "answer": 30, "tolerance": 0,
    "hint": { "fr": "Calcule chaque parenthèse, puis multiplie.", "en": "Evaluate each parenthesis, then multiply.", "nl": "Bereken elke haakje, vermenigvuldig dan." }
  },
  {
    "id": "N3_s_10", "category": "N3", "level": 2,
    "text": { "fr": "Calcule : 50 - 2 . (3 + 7)", "en": "Calculate: 50 - 2 . (3 + 7)", "nl": "Bereken: 50 - 2 . (3 + 7)" },
    "answer": 30, "tolerance": 0,
    "hint": { "fr": "Parenthèses, puis multiplication, puis soustraction.", "en": "Parentheses, then multiplication, then subtraction.", "nl": "Haakjes, dan vermenigvuldiging, dan aftrekking." }
  },
  // — Level 2 continued (s_28 – s_39) —
  {
    "id": "N3_s_28", "category": "N3", "level": 2,
    "text": { "fr": "Calcule : (9 - 4) . 6", "en": "Calculate: (9 - 4) . 6", "nl": "Bereken: (9 - 4) . 6" },
    "answer": 30, "tolerance": 0,
    "hint": { "fr": "Calcule d'abord la parenthèse, puis multiplie.", "en": "Evaluate the parentheses first, then multiply.", "nl": "Bereken eerst de haakjes, vermenigvuldig dan." }
  },
  {
    "id": "N3_s_29", "category": "N3", "level": 2,
    "text": { "fr": "Calcule : 3 . (7 + 5) - 10", "en": "Calculate: 3 . (7 + 5) - 10", "nl": "Bereken: 3 . (7 + 5) - 10" },
    "answer": 26, "tolerance": 0,
    "hint": { "fr": "Parenthèses d'abord, puis ., puis -.", "en": "Parentheses first, then ., then -.", "nl": "Haakjes eerst, dan ., dan -." }
  },
  {
    "id": "N3_s_30", "category": "N3", "level": 2,
    "text": { "fr": "Calcule : 48 : (12 - 4)", "en": "Calculate: 48 : (12 - 4)", "nl": "Bereken: 48 : (12 - 4)" },
    "answer": 6, "tolerance": 0,
    "hint": { "fr": "Calcule d'abord 12 - 4, puis divise.", "en": "Calculate 12 - 4 first, then divide.", "nl": "Bereken eerst 12 - 4, deel dan." }
  },
  {
    "id": "N3_s_31", "category": "N3", "level": 2,
    "text": { "fr": "Calcule : (6 + 3) . (7 - 2)", "en": "Calculate: (6 + 3) . (7 - 2)", "nl": "Bereken: (6 + 3) . (7 - 2)" },
    "answer": 45, "tolerance": 0,
    "hint": { "fr": "Calcule chaque parenthèse, puis multiplie.", "en": "Evaluate each parenthesis, then multiply.", "nl": "Bereken elke haakje, vermenigvuldig dan." }
  },
  {
    "id": "N3_s_32", "category": "N3", "level": 2,
    "text": { "fr": "Calcule : 5 . (8 - 3) + 2 . 4", "en": "Calculate: 5 . (8 - 3) + 2 . 4", "nl": "Bereken: 5 . (8 - 3) + 2 . 4" },
    "answer": 33, "tolerance": 0,
    "hint": { "fr": "Parenthèses d'abord, puis les multiplications, puis l'addition.", "en": "Parentheses first, then multiplications, then addition.", "nl": "Haakjes eerst, dan vermenigvuldigingen, dan optelling." }
  },
  {
    "id": "N3_s_33", "category": "N3", "level": 2,
    "text": { "fr": "Calcule : 60 : (3 + 2) - 7", "en": "Calculate: 60 : (3 + 2) - 7", "nl": "Bereken: 60 : (3 + 2) - 7" },
    "answer": 5, "tolerance": 0,
    "hint": { "fr": "Parenthèses d'abord, puis la division, puis la soustraction.", "en": "Parentheses first, then division, then subtraction.", "nl": "Haakjes eerst, dan deling, dan aftrekking." }
  },
  {
    "id": "N3_s_34", "category": "N3", "level": 2,
    "text": { "fr": "Calcule : (11 - 5) . 8 + 2", "en": "Calculate: (11 - 5) . 8 + 2", "nl": "Bereken: (11 - 5) . 8 + 2" },
    "answer": 50, "tolerance": 0,
    "hint": { "fr": "Parenthèses d'abord, puis ., puis +.", "en": "Parentheses first, then ., then +.", "nl": "Haakjes eerst, dan ., dan +." }
  },
  {
    "id": "N3_s_35", "category": "N3", "level": 2,
    "text": { "fr": "Calcule : 7 . (2 + 6) - 3 . 4", "en": "Calculate: 7 . (2 + 6) - 3 . 4", "nl": "Bereken: 7 . (2 + 6) - 3 . 4" },
    "answer": 44, "tolerance": 0,
    "hint": { "fr": "Parenthèses d'abord, puis les multiplications, puis la soustraction.", "en": "Parentheses first, then multiplications, then subtraction.", "nl": "Haakjes eerst, dan vermenigvuldigingen, dan aftrekking." }
  },
  {
    "id": "N3_s_36", "category": "N3", "level": 2,
    "text": { "fr": "Calcule : 72 : (9 - 3) + 15", "en": "Calculate: 72 : (9 - 3) + 15", "nl": "Bereken: 72 : (9 - 3) + 15" },
    "answer": 27, "tolerance": 0,
    "hint": { "fr": "Parenthèses d'abord, puis la division, puis l'addition.", "en": "Parentheses first, then division, then addition.", "nl": "Haakjes eerst, dan deling, dan optelling." }
  },
  {
    "id": "N3_s_37", "category": "N3", "level": 2,
    "text": { "fr": "Calcule : (5 + 7) . (9 - 6)", "en": "Calculate: (5 + 7) . (9 - 6)", "nl": "Bereken: (5 + 7) . (9 - 6)" },
    "answer": 36, "tolerance": 0,
    "hint": { "fr": "Calcule chaque parenthèse séparément, puis multiplie.", "en": "Evaluate each parenthesis separately, then multiply.", "nl": "Bereken elke haakje apart, vermenigvuldig dan." }
  },
  {
    "id": "N3_s_38", "category": "N3", "level": 2,
    "text": { "fr": "Calcule : 4 . (13 - 8) + 6 . 3", "en": "Calculate: 4 . (13 - 8) + 6 . 3", "nl": "Bereken: 4 . (13 - 8) + 6 . 3" },
    "answer": 38, "tolerance": 0,
    "hint": { "fr": "Parenthèses d'abord, puis les multiplications, puis l'addition.", "en": "Parentheses first, then multiplications, then addition.", "nl": "Haakjes eerst, dan vermenigvuldigingen, dan optelling." }
  },
  {
    "id": "N3_s_39", "category": "N3", "level": 2,
    "text": { "fr": "Calcule : 100 - (16 + 4) . 4", "en": "Calculate: 100 - (16 + 4) . 4", "nl": "Bereken: 100 - (16 + 4) . 4" },
    "answer": 20, "tolerance": 0,
    "hint": { "fr": "Parenthèses d'abord, puis ., puis -.", "en": "Parentheses first, then ., then -.", "nl": "Haakjes eerst, dan ., dan -." }
  },

  // ---------------------------------------------------------------------------
  // Level 3 — Nested parentheses, powers, complex multi-step
  // ---------------------------------------------------------------------------
  {
    "id": "N3_s_11", "category": "N3", "level": 3,
    "text": { "fr": "Calcule : 3 . (4 + 2) - (10 - 3)", "en": "Calculate: 3 . (4 + 2) - (10 - 3)", "nl": "Bereken: 3 . (4 + 2) - (10 - 3)" },
    "answer": 11, "tolerance": 0,
    "hint": { "fr": "Calcule chaque parenthèse séparément.", "en": "Evaluate each set of parentheses.", "nl": "Bereken elke haakje apart." }
  },
  {
    "id": "N3_s_12", "category": "N3", "level": 3,
    "text": { "fr": "Calcule : (2 + 3)² - 4 . 3", "en": "Calculate: (2 + 3)² - 4 . 3", "nl": "Bereken: (2 + 3)² - 4 . 3" },
    "answer": 13, "tolerance": 0,
    "hint": { "fr": "Parenthèses, puis puissance, puis multiplication.", "en": "Parentheses, then power, then multiplication.", "nl": "Haakjes, dan macht, dan vermenigvuldiging." }
  },
  {
    "id": "N3_s_13", "category": "N3", "level": 3,
    "text": { "fr": "Calcule : 48 : (2 . (1 + 3))", "en": "Calculate: 48 : (2 . (1 + 3))", "nl": "Bereken: 48 : (2 . (1 + 3))" },
    "answer": 6, "tolerance": 0,
    "hint": { "fr": "Commence par les parenthèses intérieures.", "en": "Start with the inner parentheses.", "nl": "Begin met de binnenste haakjes." }
  },
  {
    "id": "N3_s_14", "category": "N3", "level": 3,
    "text": { "fr": "Calcule : (15 - 3 . 2) . (1 + 2)", "en": "Calculate: (15 - 3 . 2) . (1 + 2)", "nl": "Bereken: (15 - 3 . 2) . (1 + 2)" },
    "answer": 27, "tolerance": 0,
    "hint": { "fr": "Dans la 1re parenthèse, la . est prioritaire.", "en": "In the 1st bracket, . comes first.", "nl": "In het 1e haakje gaat . voor." }
  },
  {
    "id": "N3_s_15", "category": "N3", "level": 3,
    "text": { "fr": "Calcule : 100 - 3 . (2 . 5 + 4)", "en": "Calculate: 100 - 3 . (2 . 5 + 4)", "nl": "Bereken: 100 - 3 . (2 . 5 + 4)" },
    "answer": 58, "tolerance": 0,
    "hint": { "fr": "Dans la parenthèse : . d'abord, puis +.", "en": "Inside the bracket: . first, then +.", "nl": "Binnen haakjes: . eerst, dan +." }
  },
  // — Level 3 continued (s_40 – s_50) —
  {
    "id": "N3_s_40", "category": "N3", "level": 3,
    "text": { "fr": "Calcule : (3 + 4)² - 2 . 10", "en": "Calculate: (3 + 4)² - 2 . 10", "nl": "Bereken: (3 + 4)² - 2 . 10" },
    "answer": 29, "tolerance": 0,
    "hint": { "fr": "Parenthèses, puis puissance, puis multiplication, puis soustraction.", "en": "Parentheses, then power, then multiplication, then subtraction.", "nl": "Haakjes, dan macht, dan vermenigvuldiging, dan aftrekking." }
  },
  {
    "id": "N3_s_41", "category": "N3", "level": 3,
    "text": { "fr": "Calcule : 60 : (3 . (2 + 3))", "en": "Calculate: 60 : (3 . (2 + 3))", "nl": "Bereken: 60 : (3 . (2 + 3))" },
    "answer": 4, "tolerance": 0,
    "hint": { "fr": "Commence par les parenthèses intérieures, puis les extérieures.", "en": "Start with the inner parentheses, then the outer.", "nl": "Begin met de binnenste haakjes, dan de buitenste." }
  },
  {
    "id": "N3_s_42", "category": "N3", "level": 3,
    "text": { "fr": "Calcule : (9 - 5)² + 3 . (6 - 2)", "en": "Calculate: (9 - 5)² + 3 . (6 - 2)", "nl": "Bereken: (9 - 5)² + 3 . (6 - 2)" },
    "answer": 28, "tolerance": 0,
    "hint": { "fr": "Calcule chaque parenthèse, puis la puissance et la multiplication, puis additionne.", "en": "Evaluate each parenthesis, then the power and multiplication, then add.", "nl": "Bereken elke haakje, dan de macht en vermenigvuldiging, tel dan op." }
  },
  {
    "id": "N3_s_43", "category": "N3", "level": 3,
    "text": { "fr": "Calcule : 72 : (4 . (1 + 2)) + 5", "en": "Calculate: 72 : (4 . (1 + 2)) + 5", "nl": "Bereken: 72 : (4 . (1 + 2)) + 5" },
    "answer": 11, "tolerance": 0,
    "hint": { "fr": "Parenthèses intérieures d'abord, puis extérieures, puis division, puis addition.", "en": "Inner parentheses first, then outer, then division, then addition.", "nl": "Binnenste haakjes eerst, dan buitenste, dan deling, dan optelling." }
  },
  {
    "id": "N3_s_44", "category": "N3", "level": 3,
    "text": { "fr": "Calcule : (20 - 4 . 3) . (2 + 5)", "en": "Calculate: (20 - 4 . 3) . (2 + 5)", "nl": "Bereken: (20 - 4 . 3) . (2 + 5)" },
    "answer": 56, "tolerance": 0,
    "hint": { "fr": "Dans la 1re parenthèse, la . est prioritaire. Puis multiplie les deux résultats.", "en": "In the 1st bracket, . comes first. Then multiply both results.", "nl": "In het 1e haakje gaat . voor. Vermenigvuldig dan beide resultaten." }
  },
  {
    "id": "N3_s_45", "category": "N3", "level": 3,
    "text": { "fr": "Calcule : 5 . (2 + 3)² : 5", "en": "Calculate: 5 . (2 + 3)² : 5", "nl": "Bereken: 5 . (2 + 3)² : 5" },
    "answer": 25, "tolerance": 0,
    "hint": { "fr": "Parenthèses, puis puissance, puis de gauche à droite.", "en": "Parentheses, then power, then left to right.", "nl": "Haakjes, dan macht, dan van links naar rechts." }
  },
  {
    "id": "N3_s_46", "category": "N3", "level": 3,
    "text": { "fr": "Calcule : 90 : (2 . (4 + 5)) - 3", "en": "Calculate: 90 : (2 . (4 + 5)) - 3", "nl": "Bereken: 90 : (2 . (4 + 5)) - 3" },
    "answer": 2, "tolerance": 0,
    "hint": { "fr": "Parenthèses intérieures, puis extérieures, puis division, puis soustraction.", "en": "Inner parentheses, then outer, then division, then subtraction.", "nl": "Binnenste haakjes, dan buitenste, dan deling, dan aftrekking." }
  },
  {
    "id": "N3_s_47", "category": "N3", "level": 3,
    "text": { "fr": "Calcule : (7 - 3)² + (2 + 1)²", "en": "Calculate: (7 - 3)² + (2 + 1)²", "nl": "Bereken: (7 - 3)² + (2 + 1)²" },
    "answer": 25, "tolerance": 0,
    "hint": { "fr": "Calcule chaque parenthèse, élève au carré, puis additionne.", "en": "Evaluate each parenthesis, square, then add.", "nl": "Bereken elke haakje, kwadrateer, tel dan op." }
  },
  {
    "id": "N3_s_48", "category": "N3", "level": 3,
    "text": { "fr": "Calcule : 2 . ((8 + 4) : 3) + 5²", "en": "Calculate: 2 . ((8 + 4) : 3) + 5²", "nl": "Bereken: 2 . ((8 + 4) : 3) + 5²" },
    "answer": 33, "tolerance": 0,
    "hint": { "fr": "Parenthèses intérieures, puis extérieures, puis puissance, puis de gauche à droite.", "en": "Inner parentheses, then outer, then power, then left to right.", "nl": "Binnenste haakjes, dan buitenste, dan macht, dan van links naar rechts." }
  },
  {
    "id": "N3_s_49", "category": "N3", "level": 3,
    "text": { "fr": "Calcule : (6² - 4 . 5) : (2 + 2)", "en": "Calculate: (6² - 4 . 5) : (2 + 2)", "nl": "Bereken: (6² - 4 . 5) : (2 + 2)" },
    "answer": 4, "tolerance": 0,
    "hint": { "fr": "Calcule chaque parenthèse (attention à la puissance et la . dans la première).", "en": "Evaluate each parenthesis (mind the power and . in the first).", "nl": "Bereken elke haakje (let op de macht en . in de eerste)." }
  },
  {
    "id": "N3_s_50", "category": "N3", "level": 3,
    "text": { "fr": "Calcule : 3 . (2² + 3 . 4) - (8 - 3)²", "en": "Calculate: 3 . (2² + 3 . 4) - (8 - 3)²", "nl": "Bereken: 3 . (2² + 3 . 4) - (8 - 3)²" },
    "answer": 23, "tolerance": 0,
    "hint": { "fr": "Dans chaque parenthèse, respecte les priorités. Puissance et . avant + et -.", "en": "Inside each bracket, follow the order. Powers and . before + and -.", "nl": "Binnen elke haakje, respecteer de volgorde. Machten en . voor + en -." }
  },

  // ---------------------------------------------------------------------------
  // Level 1 — Simple priority (./: before +/-) — continued (s_51 – s_71)
  // ---------------------------------------------------------------------------
  {
    "id": "N3_s_51", "category": "N3", "level": 1,
    "text": { "fr": "Calcule : 12 + 5 . 3", "en": "Calculate: 12 + 5 . 3", "nl": "Bereken: 12 + 5 . 3" },
    "answer": 27, "tolerance": 0,
    "hint": { "fr": "Effectue d'abord la multiplication.", "en": "Do the multiplication first.", "nl": "Doe eerst de vermenigvuldiging." }
  },
  {
    "id": "N3_s_52", "category": "N3", "level": 1,
    "text": { "fr": "Calcule : 30 - 4 . 6", "en": "Calculate: 30 - 4 . 6", "nl": "Bereken: 30 - 4 . 6" },
    "answer": 6, "tolerance": 0,
    "hint": { "fr": "La multiplication est prioritaire sur la soustraction.", "en": "Multiplication before subtraction.", "nl": "Vermenigvuldiging voor aftrekking." }
  },
  {
    "id": "N3_s_53", "category": "N3", "level": 1,
    "text": { "fr": "Calcule : 7 . 5 + 8", "en": "Calculate: 7 . 5 + 8", "nl": "Bereken: 7 . 5 + 8" },
    "answer": 43, "tolerance": 0,
    "hint": { "fr": "Multiplie d'abord, puis additionne.", "en": "Multiply first, then add.", "nl": "Vermenigvuldig eerst, tel dan op." }
  },
  {
    "id": "N3_s_54", "category": "N3", "level": 1,
    "text": { "fr": "Calcule : 45 - 9 . 4", "en": "Calculate: 45 - 9 . 4", "nl": "Bereken: 45 - 9 . 4" },
    "answer": 9, "tolerance": 0,
    "hint": { "fr": "Effectue d'abord 9 . 4.", "en": "Do 9 . 4 first.", "nl": "Bereken eerst 9 . 4." }
  },
  {
    "id": "N3_s_55", "category": "N3", "level": 1,
    "text": { "fr": "Calcule : 6 + 24 : 8", "en": "Calculate: 6 + 24 : 8", "nl": "Bereken: 6 + 24 : 8" },
    "answer": 9, "tolerance": 0,
    "hint": { "fr": "Effectue d'abord la division.", "en": "Do the division first.", "nl": "Doe eerst de deling." }
  },
  {
    "id": "N3_s_56", "category": "N3", "level": 1,
    "text": { "fr": "Calcule : 36 : 6 + 11", "en": "Calculate: 36 : 6 + 11", "nl": "Bereken: 36 : 6 + 11" },
    "answer": 17, "tolerance": 0,
    "hint": { "fr": "La division est prioritaire sur l'addition.", "en": "Division before addition.", "nl": "Deling voor optelling." }
  },
  {
    "id": "N3_s_57", "category": "N3", "level": 1,
    "text": { "fr": "Calcule : 3 . 9 - 14", "en": "Calculate: 3 . 9 - 14", "nl": "Bereken: 3 . 9 - 14" },
    "answer": 13, "tolerance": 0,
    "hint": { "fr": "Multiplie d'abord, puis soustrais.", "en": "Multiply first, then subtract.", "nl": "Vermenigvuldig eerst, trek dan af." }
  },
  {
    "id": "N3_s_58", "category": "N3", "level": 1,
    "text": { "fr": "Calcule : 17 + 7 . 3", "en": "Calculate: 17 + 7 . 3", "nl": "Bereken: 17 + 7 . 3" },
    "answer": 38, "tolerance": 0,
    "hint": { "fr": "La multiplication est prioritaire sur l'addition.", "en": "Multiplication before addition.", "nl": "Vermenigvuldiging voor optelling." }
  },
  {
    "id": "N3_s_59", "category": "N3", "level": 1,
    "text": { "fr": "Calcule : 48 : 8 - 2", "en": "Calculate: 48 : 8 - 2", "nl": "Bereken: 48 : 8 - 2" },
    "answer": 4, "tolerance": 0,
    "hint": { "fr": "Effectue d'abord la division.", "en": "Do the division first.", "nl": "Doe eerst de deling." }
  },
  {
    "id": "N3_s_60", "category": "N3", "level": 1,
    "text": { "fr": "Calcule : 11 . 3 + 4", "en": "Calculate: 11 . 3 + 4", "nl": "Bereken: 11 . 3 + 4" },
    "answer": 37, "tolerance": 0,
    "hint": { "fr": "Multiplie d'abord, puis additionne.", "en": "Multiply first, then add.", "nl": "Vermenigvuldig eerst, tel dan op." }
  },
  {
    "id": "N3_s_61", "category": "N3", "level": 1,
    "text": { "fr": "Calcule : 56 : 7 + 3 . 5", "en": "Calculate: 56 : 7 + 3 . 5", "nl": "Bereken: 56 : 7 + 3 . 5" },
    "answer": 23, "tolerance": 0,
    "hint": { "fr": "Effectue la division et la multiplication d'abord, puis additionne.", "en": "Do the division and multiplication first, then add.", "nl": "Doe de deling en vermenigvuldiging eerst, tel dan op." }
  },
  {
    "id": "N3_s_62", "category": "N3", "level": 1,
    "text": { "fr": "Calcule : 5 . 6 - 18 : 3", "en": "Calculate: 5 . 6 - 18 : 3", "nl": "Bereken: 5 . 6 - 18 : 3" },
    "answer": 24, "tolerance": 0,
    "hint": { "fr": "Effectue la multiplication et la division d'abord, puis soustrais.", "en": "Do the multiplication and division first, then subtract.", "nl": "Doe de vermenigvuldiging en deling eerst, trek dan af." }
  },
  {
    "id": "N3_s_63", "category": "N3", "level": 1,
    "text": { "fr": "Calcule : 9 + 2 . 8 - 5", "en": "Calculate: 9 + 2 . 8 - 5", "nl": "Bereken: 9 + 2 . 8 - 5" },
    "answer": 20, "tolerance": 0,
    "hint": { "fr": "Effectue d'abord la multiplication, puis de gauche à droite.", "en": "Do the multiplication first, then left to right.", "nl": "Doe eerst de vermenigvuldiging, dan van links naar rechts." }
  },
  {
    "id": "N3_s_64", "category": "N3", "level": 1,
    "text": { "fr": "Calcule : 35 : 5 + 4 . 3", "en": "Calculate: 35 : 5 + 4 . 3", "nl": "Bereken: 35 : 5 + 4 . 3" },
    "answer": 19, "tolerance": 0,
    "hint": { "fr": "Effectue la division et la multiplication d'abord, puis additionne.", "en": "Do the division and multiplication first, then add.", "nl": "Doe de deling en vermenigvuldiging eerst, tel dan op." }
  },
  {
    "id": "N3_s_65", "category": "N3", "level": 1,
    "text": { "fr": "Calcule : 42 - 3 . 7 - 6", "en": "Calculate: 42 - 3 . 7 - 6", "nl": "Bereken: 42 - 3 . 7 - 6" },
    "answer": 15, "tolerance": 0,
    "hint": { "fr": "La multiplication est prioritaire. Puis soustrais de gauche à droite.", "en": "Multiplication first. Then subtract left to right.", "nl": "Vermenigvuldiging eerst. Trek dan af van links naar rechts." }
  },
  {
    "id": "N3_s_66", "category": "N3", "level": 1,
    "text": { "fr": "Calcule : 8 . 4 - 5 . 3", "en": "Calculate: 8 . 4 - 5 . 3", "nl": "Bereken: 8 . 4 - 5 . 3" },
    "answer": 17, "tolerance": 0,
    "hint": { "fr": "Effectue les deux multiplications d'abord, puis soustrais.", "en": "Do both multiplications first, then subtract.", "nl": "Doe beide vermenigvuldigingen eerst, trek dan af." }
  },
  {
    "id": "N3_s_67", "category": "N3", "level": 1,
    "text": { "fr": "Calcule : 2 . 9 + 36 : 9", "en": "Calculate: 2 . 9 + 36 : 9", "nl": "Bereken: 2 . 9 + 36 : 9" },
    "answer": 22, "tolerance": 0,
    "hint": { "fr": "Effectue la multiplication et la division d'abord, puis additionne.", "en": "Do the multiplication and division first, then add.", "nl": "Doe de vermenigvuldiging en deling eerst, tel dan op." }
  },
  {
    "id": "N3_s_68", "category": "N3", "level": 1,
    "text": { "fr": "Calcule : 50 - 6 . 5 - 8", "en": "Calculate: 50 - 6 . 5 - 8", "nl": "Bereken: 50 - 6 . 5 - 8" },
    "answer": 12, "tolerance": 0,
    "hint": { "fr": "Effectue d'abord la multiplication, puis soustrais de gauche à droite.", "en": "Do the multiplication first, then subtract left to right.", "nl": "Doe eerst de vermenigvuldiging, trek dan af van links naar rechts." }
  },
  {
    "id": "N3_s_69", "category": "N3", "level": 1,
    "text": { "fr": "Calcule : 10 + 42 : 6 + 3", "en": "Calculate: 10 + 42 : 6 + 3", "nl": "Bereken: 10 + 42 : 6 + 3" },
    "answer": 20, "tolerance": 0,
    "hint": { "fr": "Effectue d'abord la division, puis additionne de gauche à droite.", "en": "Do the division first, then add left to right.", "nl": "Doe eerst de deling, tel dan op van links naar rechts." }
  },
  {
    "id": "N3_s_70", "category": "N3", "level": 1,
    "text": { "fr": "Calcule : 4 . 7 + 2 . 9", "en": "Calculate: 4 . 7 + 2 . 9", "nl": "Bereken: 4 . 7 + 2 . 9" },
    "answer": 46, "tolerance": 0,
    "hint": { "fr": "Effectue les deux multiplications d'abord, puis additionne.", "en": "Do both multiplications first, then add.", "nl": "Doe beide vermenigvuldigingen eerst, tel dan op." }
  },
  {
    "id": "N3_s_71", "category": "N3", "level": 1,
    "text": { "fr": "Calcule : 60 - 8 . 3 - 24 : 6", "en": "Calculate: 60 - 8 . 3 - 24 : 6", "nl": "Bereken: 60 - 8 . 3 - 24 : 6" },
    "answer": 32, "tolerance": 0,
    "hint": { "fr": "Effectue la multiplication et la division d'abord, puis soustrais de gauche à droite.", "en": "Do the multiplication and division first, then subtract left to right.", "nl": "Doe de vermenigvuldiging en deling eerst, trek dan af van links naar rechts." }
  },

  // ---------------------------------------------------------------------------
  // Level 2 — Parentheses change priority — continued (s_72 – s_91)
  // ---------------------------------------------------------------------------
  {
    "id": "N3_s_72", "category": "N3", "level": 2,
    "text": { "fr": "Calcule : (5 + 8) . 3", "en": "Calculate: (5 + 8) . 3", "nl": "Bereken: (5 + 8) . 3" },
    "answer": 39, "tolerance": 0,
    "hint": { "fr": "Calcule d'abord ce qui est entre parenthèses.", "en": "Calculate parentheses first.", "nl": "Bereken eerst wat tussen haakjes staat." }
  },
  {
    "id": "N3_s_73", "category": "N3", "level": 2,
    "text": { "fr": "Calcule : 4 . (12 - 7) + 9", "en": "Calculate: 4 . (12 - 7) + 9", "nl": "Bereken: 4 . (12 - 7) + 9" },
    "answer": 29, "tolerance": 0,
    "hint": { "fr": "Parenthèses d'abord, puis ., puis +.", "en": "Parentheses first, then ., then +.", "nl": "Haakjes eerst, dan ., dan +." }
  },
  {
    "id": "N3_s_74", "category": "N3", "level": 2,
    "text": { "fr": "Calcule : 56 : (3 + 4) . 2", "en": "Calculate: 56 : (3 + 4) . 2", "nl": "Bereken: 56 : (3 + 4) . 2" },
    "answer": 16, "tolerance": 0,
    "hint": { "fr": "Parenthèses d'abord, puis de gauche à droite.", "en": "Parentheses first, then left to right.", "nl": "Haakjes eerst, dan van links naar rechts." }
  },
  {
    "id": "N3_s_75", "category": "N3", "level": 2,
    "text": { "fr": "Calcule : (10 - 3) . (5 + 2)", "en": "Calculate: (10 - 3) . (5 + 2)", "nl": "Bereken: (10 - 3) . (5 + 2)" },
    "answer": 49, "tolerance": 0,
    "hint": { "fr": "Calcule chaque parenthèse, puis multiplie.", "en": "Evaluate each parenthesis, then multiply.", "nl": "Bereken elke haakje, vermenigvuldig dan." }
  },
  {
    "id": "N3_s_76", "category": "N3", "level": 2,
    "text": { "fr": "Calcule : 80 - 5 . (6 + 4)", "en": "Calculate: 80 - 5 . (6 + 4)", "nl": "Bereken: 80 - 5 . (6 + 4)" },
    "answer": 30, "tolerance": 0,
    "hint": { "fr": "Parenthèses d'abord, puis multiplication, puis soustraction.", "en": "Parentheses first, then multiplication, then subtraction.", "nl": "Haakjes eerst, dan vermenigvuldiging, dan aftrekking." }
  },
  {
    "id": "N3_s_77", "category": "N3", "level": 2,
    "text": { "fr": "Calcule : (7 + 8) . 4 - 12", "en": "Calculate: (7 + 8) . 4 - 12", "nl": "Bereken: (7 + 8) . 4 - 12" },
    "answer": 48, "tolerance": 0,
    "hint": { "fr": "Parenthèses d'abord, puis ., puis -.", "en": "Parentheses first, then ., then -.", "nl": "Haakjes eerst, dan ., dan -." }
  },
  {
    "id": "N3_s_78", "category": "N3", "level": 2,
    "text": { "fr": "Calcule : 90 : (6 + 3) + 14", "en": "Calculate: 90 : (6 + 3) + 14", "nl": "Bereken: 90 : (6 + 3) + 14" },
    "answer": 24, "tolerance": 0,
    "hint": { "fr": "Parenthèses d'abord, puis la division, puis l'addition.", "en": "Parentheses first, then division, then addition.", "nl": "Haakjes eerst, dan deling, dan optelling." }
  },
  {
    "id": "N3_s_79", "category": "N3", "level": 2,
    "text": { "fr": "Calcule : 6 . (11 - 4) - 2 . 8", "en": "Calculate: 6 . (11 - 4) - 2 . 8", "nl": "Bereken: 6 . (11 - 4) - 2 . 8" },
    "answer": 26, "tolerance": 0,
    "hint": { "fr": "Parenthèses d'abord, puis les multiplications, puis la soustraction.", "en": "Parentheses first, then multiplications, then subtraction.", "nl": "Haakjes eerst, dan vermenigvuldigingen, dan aftrekking." }
  },
  {
    "id": "N3_s_80", "category": "N3", "level": 2,
    "text": { "fr": "Calcule : (13 + 7) : 4 . 6", "en": "Calculate: (13 + 7) : 4 . 6", "nl": "Bereken: (13 + 7) : 4 . 6" },
    "answer": 30, "tolerance": 0,
    "hint": { "fr": "Parenthèses d'abord, puis de gauche à droite.", "en": "Parentheses first, then left to right.", "nl": "Haakjes eerst, dan van links naar rechts." }
  },
  {
    "id": "N3_s_81", "category": "N3", "level": 2,
    "text": { "fr": "Calcule : 3 . (9 + 6) - (4 + 3)", "en": "Calculate: 3 . (9 + 6) - (4 + 3)", "nl": "Bereken: 3 . (9 + 6) - (4 + 3)" },
    "answer": 38, "tolerance": 0,
    "hint": { "fr": "Calcule chaque parenthèse, puis multiplie, puis soustrais.", "en": "Evaluate each parenthesis, then multiply, then subtract.", "nl": "Bereken elke haakje, vermenigvuldig dan, trek dan af." }
  },
  {
    "id": "N3_s_82", "category": "N3", "level": 2,
    "text": { "fr": "Calcule : (8 + 1) . (7 - 3)", "en": "Calculate: (8 + 1) . (7 - 3)", "nl": "Bereken: (8 + 1) . (7 - 3)" },
    "answer": 36, "tolerance": 0,
    "hint": { "fr": "Calcule chaque parenthèse, puis multiplie.", "en": "Evaluate each parenthesis, then multiply.", "nl": "Bereken elke haakje, vermenigvuldig dan." }
  },
  {
    "id": "N3_s_83", "category": "N3", "level": 2,
    "text": { "fr": "Calcule : 45 : (2 + 7) + 3 . 6", "en": "Calculate: 45 : (2 + 7) + 3 . 6", "nl": "Bereken: 45 : (2 + 7) + 3 . 6" },
    "answer": 23, "tolerance": 0,
    "hint": { "fr": "Parenthèses d'abord, puis la division et la multiplication, puis l'addition.", "en": "Parentheses first, then division and multiplication, then addition.", "nl": "Haakjes eerst, dan deling en vermenigvuldiging, dan optelling." }
  },
  {
    "id": "N3_s_84", "category": "N3", "level": 2,
    "text": { "fr": "Calcule : (14 - 6) . 7 - 5", "en": "Calculate: (14 - 6) . 7 - 5", "nl": "Bereken: (14 - 6) . 7 - 5" },
    "answer": 51, "tolerance": 0,
    "hint": { "fr": "Parenthèses d'abord, puis ., puis -.", "en": "Parentheses first, then ., then -.", "nl": "Haakjes eerst, dan ., dan -." }
  },
  {
    "id": "N3_s_85", "category": "N3", "level": 2,
    "text": { "fr": "Calcule : 2 . (15 - 8) + 3 . (4 + 1)", "en": "Calculate: 2 . (15 - 8) + 3 . (4 + 1)", "nl": "Bereken: 2 . (15 - 8) + 3 . (4 + 1)" },
    "answer": 29, "tolerance": 0,
    "hint": { "fr": "Calcule chaque parenthèse, puis les multiplications, puis l'addition.", "en": "Evaluate each parenthesis, then multiplications, then addition.", "nl": "Bereken elke haakje, dan vermenigvuldigingen, dan optelling." }
  },
  {
    "id": "N3_s_86", "category": "N3", "level": 2,
    "text": { "fr": "Calcule : 84 : (5 + 7) - 3", "en": "Calculate: 84 : (5 + 7) - 3", "nl": "Bereken: 84 : (5 + 7) - 3" },
    "answer": 4, "tolerance": 0,
    "hint": { "fr": "Parenthèses d'abord, puis la division, puis la soustraction.", "en": "Parentheses first, then division, then subtraction.", "nl": "Haakjes eerst, dan deling, dan aftrekking." }
  },
  {
    "id": "N3_s_87", "category": "N3", "level": 2,
    "text": { "fr": "Calcule : (6 + 9) . 3 + 2 . 5", "en": "Calculate: (6 + 9) . 3 + 2 . 5", "nl": "Bereken: (6 + 9) . 3 + 2 . 5" },
    "answer": 55, "tolerance": 0,
    "hint": { "fr": "Parenthèses d'abord, puis les multiplications, puis l'addition.", "en": "Parentheses first, then multiplications, then addition.", "nl": "Haakjes eerst, dan vermenigvuldigingen, dan optelling." }
  },
  {
    "id": "N3_s_88", "category": "N3", "level": 2,
    "text": { "fr": "Calcule : 100 - (8 + 5) . 6", "en": "Calculate: 100 - (8 + 5) . 6", "nl": "Bereken: 100 - (8 + 5) . 6" },
    "answer": 22, "tolerance": 0,
    "hint": { "fr": "Parenthèses d'abord, puis ., puis -.", "en": "Parentheses first, then ., then -.", "nl": "Haakjes eerst, dan ., dan -." }
  },
  {
    "id": "N3_s_89", "category": "N3", "level": 2,
    "text": { "fr": "Calcule : (3 + 11) : 2 . 5", "en": "Calculate: (3 + 11) : 2 . 5", "nl": "Bereken: (3 + 11) : 2 . 5" },
    "answer": 35, "tolerance": 0,
    "hint": { "fr": "Parenthèses d'abord, puis de gauche à droite.", "en": "Parentheses first, then left to right.", "nl": "Haakjes eerst, dan van links naar rechts." }
  },
  {
    "id": "N3_s_90", "category": "N3", "level": 2,
    "text": { "fr": "Calcule : 8 . (7 - 2) - (6 + 5)", "en": "Calculate: 8 . (7 - 2) - (6 + 5)", "nl": "Bereken: 8 . (7 - 2) - (6 + 5)" },
    "answer": 29, "tolerance": 0,
    "hint": { "fr": "Calcule chaque parenthèse, puis multiplie, puis soustrais.", "en": "Evaluate each parenthesis, then multiply, then subtract.", "nl": "Bereken elke haakje, vermenigvuldig dan, trek dan af." }
  },
  {
    "id": "N3_s_91", "category": "N3", "level": 2,
    "text": { "fr": "Calcule : (12 - 4) . (3 + 5) : 2", "en": "Calculate: (12 - 4) . (3 + 5) : 2", "nl": "Bereken: (12 - 4) . (3 + 5) : 2" },
    "answer": 32, "tolerance": 0,
    "hint": { "fr": "Parenthèses d'abord, puis de gauche à droite.", "en": "Parentheses first, then left to right.", "nl": "Haakjes eerst, dan van links naar rechts." }
  },

  // ---------------------------------------------------------------------------
  // Level 3 — Nested parentheses, powers, complex multi-step — continued (s_92 – s_111)
  // ---------------------------------------------------------------------------
  {
    "id": "N3_s_92", "category": "N3", "level": 3,
    "text": { "fr": "Calcule : (4 + 1)² + 3 . 7", "en": "Calculate: (4 + 1)² + 3 . 7", "nl": "Bereken: (4 + 1)² + 3 . 7" },
    "answer": 46, "tolerance": 0,
    "hint": { "fr": "Parenthèses, puis puissance, puis multiplication, puis addition.", "en": "Parentheses, then power, then multiplication, then addition.", "nl": "Haakjes, dan macht, dan vermenigvuldiging, dan optelling." }
  },
  {
    "id": "N3_s_93", "category": "N3", "level": 3,
    "text": { "fr": "Calcule : 80 : (4 . (1 + 4))", "en": "Calculate: 80 : (4 . (1 + 4))", "nl": "Bereken: 80 : (4 . (1 + 4))" },
    "answer": 4, "tolerance": 0,
    "hint": { "fr": "Commence par les parenthèses intérieures.", "en": "Start with the inner parentheses.", "nl": "Begin met de binnenste haakjes." }
  },
  {
    "id": "N3_s_94", "category": "N3", "level": 3,
    "text": { "fr": "Calcule : (10 - 2 . 3)²", "en": "Calculate: (10 - 2 . 3)²", "nl": "Bereken: (10 - 2 . 3)²" },
    "answer": 16, "tolerance": 0,
    "hint": { "fr": "Dans la parenthèse, la multiplication est prioritaire. Puis élève au carré.", "en": "Inside the bracket, multiplication first. Then square.", "nl": "Binnen de haakjes gaat vermenigvuldiging voor. Kwadrateer dan." }
  },
  {
    "id": "N3_s_95", "category": "N3", "level": 3,
    "text": { "fr": "Calcule : 2 . (3² + 4) - 10", "en": "Calculate: 2 . (3² + 4) - 10", "nl": "Bereken: 2 . (3² + 4) - 10" },
    "answer": 16, "tolerance": 0,
    "hint": { "fr": "Dans la parenthèse, la puissance d'abord. Puis ., puis -.", "en": "Inside the bracket, power first. Then ., then -.", "nl": "Binnen de haakjes, macht eerst. Dan ., dan -." }
  },
  {
    "id": "N3_s_96", "category": "N3", "level": 3,
    "text": { "fr": "Calcule : (6 + 2)² : 4 + 7", "en": "Calculate: (6 + 2)² : 4 + 7", "nl": "Bereken: (6 + 2)² : 4 + 7" },
    "answer": 23, "tolerance": 0,
    "hint": { "fr": "Parenthèses, puis puissance, puis division, puis addition.", "en": "Parentheses, then power, then division, then addition.", "nl": "Haakjes, dan macht, dan deling, dan optelling." }
  },
  {
    "id": "N3_s_97", "category": "N3", "level": 3,
    "text": { "fr": "Calcule : 5 . ((9 - 3) : 2) + 3²", "en": "Calculate: 5 . ((9 - 3) : 2) + 3²", "nl": "Bereken: 5 . ((9 - 3) : 2) + 3²" },
    "answer": 24, "tolerance": 0,
    "hint": { "fr": "Parenthèses intérieures, puis extérieures, puis puissance, puis ., puis +.", "en": "Inner parentheses, then outer, then power, then ., then +.", "nl": "Binnenste haakjes, dan buitenste, dan macht, dan ., dan +." }
  },
  {
    "id": "N3_s_98", "category": "N3", "level": 3,
    "text": { "fr": "Calcule : (7² - 5 . 8) : 3", "en": "Calculate: (7² - 5 . 8) : 3", "nl": "Bereken: (7² - 5 . 8) : 3" },
    "answer": 3, "tolerance": 0,
    "hint": { "fr": "Dans la parenthèse : puissance et multiplication d'abord, puis soustraction.", "en": "Inside the bracket: power and multiplication first, then subtraction.", "nl": "Binnen de haakjes: macht en vermenigvuldiging eerst, dan aftrekking." }
  },
  {
    "id": "N3_s_99", "category": "N3", "level": 3,
    "text": { "fr": "Calcule : 4 . (5 + 3)² : 8", "en": "Calculate: 4 . (5 + 3)² : 8", "nl": "Bereken: 4 . (5 + 3)² : 8" },
    "answer": 32, "tolerance": 0,
    "hint": { "fr": "Parenthèses, puis puissance, puis de gauche à droite.", "en": "Parentheses, then power, then left to right.", "nl": "Haakjes, dan macht, dan van links naar rechts." }
  },
  {
    "id": "N3_s_100", "category": "N3", "level": 3,
    "text": { "fr": "Calcule : (12 - 2 . 4) . (3 + 6)", "en": "Calculate: (12 - 2 . 4) . (3 + 6)", "nl": "Bereken: (12 - 2 . 4) . (3 + 6)" },
    "answer": 36, "tolerance": 0,
    "hint": { "fr": "Dans la 1re parenthèse, la . est prioritaire. Puis multiplie les deux résultats.", "en": "In the 1st bracket, . comes first. Then multiply both results.", "nl": "In het 1e haakje gaat . voor. Vermenigvuldig dan beide resultaten." }
  },
  {
    "id": "N3_s_101", "category": "N3", "level": 3,
    "text": { "fr": "Calcule : 3² + 4² - 2 . 5", "en": "Calculate: 3² + 4² - 2 . 5", "nl": "Bereken: 3² + 4² - 2 . 5" },
    "answer": 15, "tolerance": 0,
    "hint": { "fr": "Puissances et multiplication d'abord, puis de gauche à droite.", "en": "Powers and multiplication first, then left to right.", "nl": "Machten en vermenigvuldiging eerst, dan van links naar rechts." }
  },
  {
    "id": "N3_s_102", "category": "N3", "level": 3,
    "text": { "fr": "Calcule : 96 : (2 . (3 + 5)) - 2", "en": "Calculate: 96 : (2 . (3 + 5)) - 2", "nl": "Bereken: 96 : (2 . (3 + 5)) - 2" },
    "answer": 4, "tolerance": 0,
    "hint": { "fr": "Parenthèses intérieures d'abord, puis extérieures, puis division, puis soustraction.", "en": "Inner parentheses first, then outer, then division, then subtraction.", "nl": "Binnenste haakjes eerst, dan buitenste, dan deling, dan aftrekking." }
  },
  {
    "id": "N3_s_103", "category": "N3", "level": 3,
    "text": { "fr": "Calcule : (8 - 3)² . 2 - 5 . 7", "en": "Calculate: (8 - 3)² . 2 - 5 . 7", "nl": "Bereken: (8 - 3)² . 2 - 5 . 7" },
    "answer": 15, "tolerance": 0,
    "hint": { "fr": "Parenthèses, puis puissance, puis multiplications, puis soustraction.", "en": "Parentheses, then power, then multiplications, then subtraction.", "nl": "Haakjes, dan macht, dan vermenigvuldigingen, dan aftrekking." }
  },
  {
    "id": "N3_s_104", "category": "N3", "level": 3,
    "text": { "fr": "Calcule : ((7 + 5) : 4)² . 3", "en": "Calculate: ((7 + 5) : 4)² . 3", "nl": "Bereken: ((7 + 5) : 4)² . 3" },
    "answer": 27, "tolerance": 0,
    "hint": { "fr": "Parenthèses intérieures, puis extérieures, puis puissance, puis multiplication.", "en": "Inner parentheses, then outer, then power, then multiplication.", "nl": "Binnenste haakjes, dan buitenste, dan macht, dan vermenigvuldiging." }
  },
  {
    "id": "N3_s_105", "category": "N3", "level": 3,
    "text": { "fr": "Calcule : 2 . (6² - 3 . 8) + 7", "en": "Calculate: 2 . (6² - 3 . 8) + 7", "nl": "Bereken: 2 . (6² - 3 . 8) + 7" },
    "answer": 31, "tolerance": 0,
    "hint": { "fr": "Dans la parenthèse : puissance et multiplication d'abord. Puis ., puis +.", "en": "Inside the bracket: power and multiplication first. Then ., then +.", "nl": "Binnen de haakjes: macht en vermenigvuldiging eerst. Dan ., dan +." }
  },
  {
    "id": "N3_s_106", "category": "N3", "level": 3,
    "text": { "fr": "Calcule : (9 - 4)² - (2 + 1)³", "en": "Calculate: (9 - 4)² - (2 + 1)³", "nl": "Bereken: (9 - 4)² - (2 + 1)³" },
    "answer": -2, "tolerance": 0,
    "hint": { "fr": "Calcule chaque parenthèse, puis les puissances, puis soustrais. Le résultat est négatif !", "en": "Evaluate each parenthesis, then the powers, then subtract. The result is negative!", "nl": "Bereken elke haakje, dan de machten, trek dan af. Het resultaat is negatief!" }
  },
  {
    "id": "N3_s_107", "category": "N3", "level": 3,
    "text": { "fr": "Calcule : 5 . (3 + 2 . 4) - (6 - 1)²", "en": "Calculate: 5 . (3 + 2 . 4) - (6 - 1)²", "nl": "Bereken: 5 . (3 + 2 . 4) - (6 - 1)²" },
    "answer": 30, "tolerance": 0,
    "hint": { "fr": "Dans la 1re parenthèse, la . est prioritaire. Puis calcule la 2e parenthèse et sa puissance.", "en": "In the 1st bracket, . comes first. Then evaluate the 2nd bracket and its power.", "nl": "In het 1e haakje gaat . voor. Bereken dan het 2e haakje en de macht." }
  },
  {
    "id": "N3_s_108", "category": "N3", "level": 3,
    "text": { "fr": "Calcule : (10² - 6 . 12) : (3 + 1)", "en": "Calculate: (10² - 6 . 12) : (3 + 1)", "nl": "Bereken: (10² - 6 . 12) : (3 + 1)" },
    "answer": 7, "tolerance": 0,
    "hint": { "fr": "Calcule chaque parenthèse (attention à la puissance et la . dans la première), puis divise.", "en": "Evaluate each parenthesis (mind the power and . in the first), then divide.", "nl": "Bereken elke haakje (let op de macht en . in de eerste), deel dan." }
  },
  {
    "id": "N3_s_109", "category": "N3", "level": 3,
    "text": { "fr": "Calcule : 3 . ((15 - 7) : 2)²", "en": "Calculate: 3 . ((15 - 7) : 2)²", "nl": "Bereken: 3 . ((15 - 7) : 2)²" },
    "answer": 48, "tolerance": 0,
    "hint": { "fr": "Parenthèses intérieures, puis extérieures, puis puissance, puis multiplication.", "en": "Inner parentheses, then outer, then power, then multiplication.", "nl": "Binnenste haakjes, dan buitenste, dan macht, dan vermenigvuldiging." }
  },
  {
    "id": "N3_s_110", "category": "N3", "level": 3,
    "text": { "fr": "Calcule : (4² + 3²) . 2 - 8 . 5", "en": "Calculate: (4² + 3²) . 2 - 8 . 5", "nl": "Bereken: (4² + 3²) . 2 - 8 . 5" },
    "answer": 10, "tolerance": 0,
    "hint": { "fr": "Dans la parenthèse, calcule les puissances d'abord. Puis multiplications, puis soustraction.", "en": "Inside the bracket, powers first. Then multiplications, then subtraction.", "nl": "Binnen de haakjes, machten eerst. Dan vermenigvuldigingen, dan aftrekking." }
  },
  {
    "id": "N3_s_111", "category": "N3", "level": 3,
    "text": { "fr": "Calcule : ((5 + 3) . (9 - 6))² : 12 - 3²", "en": "Calculate: ((5 + 3) . (9 - 6))² : 12 - 3²", "nl": "Bereken: ((5 + 3) . (9 - 6))² : 12 - 3²" },
    "answer": 39, "tolerance": 0,
    "hint": { "fr": "Parenthèses intérieures, puis multiplication intérieure, puis puissance, puis division et soustraction.", "en": "Inner parentheses, then inner multiplication, then power, then division and subtraction.", "nl": "Binnenste haakjes, dan binnenste vermenigvuldiging, dan macht, dan deling en aftrekking." }
  },
  {
    "id": "N3_s_112", "category": "N3", "level": 1,
    "text": { "fr": "Calcule : 8 + 15 : 3", "en": "Calculate: 8 + 15 : 3", "nl": "Bereken: 8 + 15 : 3" },
    "answer": 13, "tolerance": 0,
    "hint": { "fr": "Effectue d'abord la division, puis l'addition.", "en": "Do the division first, then the addition.", "nl": "Doe eerst de deling, dan de optelling." }
  },
  {
    "id": "N3_s_113", "category": "N3", "level": 1,
    "text": { "fr": "Calcule : 5 . 6 - 18 : 2", "en": "Calculate: 5 . 6 - 18 : 2", "nl": "Bereken: 5 . 6 - 18 : 2" },
    "answer": 21, "tolerance": 0,
    "hint": { "fr": "Effectue d'abord les multiplications et divisions, puis la soustraction.", "en": "Do multiplications and divisions first, then the subtraction.", "nl": "Doe eerst de vermenigvuldigingen en delingen, dan de aftrekking." }
  },
  {
    "id": "N3_s_114", "category": "N3", "level": 1,
    "text": { "fr": "Calcule : 40 - 3 . 7 + 2", "en": "Calculate: 40 - 3 . 7 + 2", "nl": "Bereken: 40 - 3 . 7 + 2" },
    "answer": 21, "tolerance": 0,
    "hint": { "fr": "Multiplication d'abord : 3 . 7 = 21, puis 40 - 21 + 2.", "en": "Multiplication first: 3 . 7 = 21, then 40 - 21 + 2.", "nl": "Vermenigvuldiging eerst: 3 . 7 = 21, dan 40 - 21 + 2." }
  },
  {
    "id": "N3_s_115", "category": "N3", "level": 2,
    "text": { "fr": "Calcule : (12 - 4) . (3 + 2)", "en": "Calculate: (12 - 4) . (3 + 2)", "nl": "Bereken: (12 - 4) . (3 + 2)" },
    "answer": 40, "tolerance": 0,
    "hint": { "fr": "Calcule chaque parenthèse d'abord : 8 . 5.", "en": "Calculate each parenthesis first: 8 . 5.", "nl": "Bereken elke haakje eerst: 8 . 5." }
  },
  {
    "id": "N3_s_116", "category": "N3", "level": 2,
    "text": { "fr": "Calcule : 3 . (14 - 6) + 4²", "en": "Calculate: 3 . (14 - 6) + 4²", "nl": "Bereken: 3 . (14 - 6) + 4²" },
    "answer": 40, "tolerance": 0,
    "hint": { "fr": "Parenthèse : 14 - 6 = 8, puissance : 4² = 16, puis 3 . 8 + 16.", "en": "Parenthesis: 14 - 6 = 8, power: 4² = 16, then 3 . 8 + 16.", "nl": "Haakje: 14 - 6 = 8, macht: 4² = 16, dan 3 . 8 + 16." }
  },
  {
    "id": "N3_s_117", "category": "N3", "level": 3,
    "text": { "fr": "Calcule : (2³ + 4) . 3 - 6²", "en": "Calculate: (2³ + 4) . 3 - 6²", "nl": "Bereken: (2³ + 4) . 3 - 6²" },
    "answer": 0, "tolerance": 0,
    "hint": { "fr": "2³ = 8, donc (8 + 4) = 12, puis 12 . 3 = 36, et 6² = 36. Donc 36 - 36 = 0.", "en": "2³ = 8, so (8 + 4) = 12, then 12 . 3 = 36, and 6² = 36. So 36 - 36 = 0.", "nl": "2³ = 8, dus (8 + 4) = 12, dan 12 . 3 = 36, en 6² = 36. Dus 36 - 36 = 0." }
  },
  {
    "id": "N3_s_118", "category": "N3", "level": 3,
    "text": { "fr": "Calcule : 5² . 2 - (7 + 3)² : 5", "en": "Calculate: 5² . 2 - (7 + 3)² : 5", "nl": "Bereken: 5² . 2 - (7 + 3)² : 5" },
    "answer": 30, "tolerance": 0,
    "hint": { "fr": "5² = 25, (7 + 3) = 10, 10² = 100. Puis 25 . 2 - 100 : 5 = 50 - 20 = 30.", "en": "5² = 25, (7 + 3) = 10, 10² = 100. Then 25 . 2 - 100 : 5 = 50 - 20 = 30.", "nl": "5² = 25, (7 + 3) = 10, 10² = 100. Dan 25 . 2 - 100 : 5 = 50 - 20 = 30." }
  },
];

export function generate(level = 1) {
  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const id = `N3_gen_${Date.now()}_${rand(100, 999)}`;
  if (level === 1) {
    const a = rand(2, 20); const b = rand(2, 9); const c = rand(2, 9);
    const answer = a + b * c;
    return { id, "category": 'N3', level, "text": { "fr": `Calcule : ${a} + ${b} . ${c}`, "en": `Calculate: ${a} + ${b} . ${c}`, "nl": `Bereken: ${a} + ${b} . ${c}` }, answer, "tolerance": 0 };
  }
  if (level === 2) {
    const a = rand(2, 10); const b = rand(2, 10); const c = rand(2, 9);
    const answer = (a + b) * c;
    return { id, "category": 'N3', level, "text": { "fr": `Calcule : (${a} + ${b}) . ${c}`, "en": `Calculate: (${a} + ${b}) . ${c}`, "nl": `Bereken: (${a} + ${b}) . ${c}` }, answer, "tolerance": 0 };
  }
  const a = rand(2, 8); const b = rand(2, 6); const c = rand(2, 5); const d = rand(1, 10);
  const answer = a * (b + c) - d;
  return { id, "category": 'N3', level, "text": { "fr": `Calcule : ${a} . (${b} + ${c}) - ${d}`, "en": `Calculate: ${a} . (${b} + ${c}) - ${d}`, "nl": `Bereken: ${a} . (${b} + ${c}) - ${d}` }, answer, "tolerance": 0 };
}
