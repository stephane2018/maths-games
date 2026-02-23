// =============================================================================
// N4 - Fractions
// CE1D Belgian exam - Trilingual (FR / EN / NL)
// =============================================================================

export const questions = [
  // ───────────────────────────────────────────────────────────────────────────
  // Level 1 — Simple fraction of a number  (17 questions: 1–5, 16–27)
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: "N4_s_1", category: "N4", level: 1,
    text: { fr: "Combien font 1/4 de 20 ?", en: "What is 1/4 of 20?", nl: "Hoeveel is 1/4 van 20?" },
    answer: 5, tolerance: 0,
    hint: { fr: "Divise 20 par 4.", en: "Divide 20 by 4.", nl: "Deel 20 door 4." }
  },
  {
    id: "N4_s_2", category: "N4", level: 1,
    text: { fr: "Combien font 3/4 de 100 ?", en: "What is 3/4 of 100?", nl: "Hoeveel is 3/4 van 100?" },
    answer: 75, tolerance: 0,
    hint: { fr: "Calcule d'abord 1/4 de 100, puis multiplie par 3.", en: "Find 1/4 of 100 first, then multiply by 3.", nl: "Bereken eerst 1/4 van 100, vermenigvuldig dan met 3." }
  },
  {
    id: "N4_s_3", category: "N4", level: 1,
    text: { fr: "Combien font 1/2 de 36 ?", en: "What is 1/2 of 36?", nl: "Hoeveel is 1/2 van 36?" },
    answer: 18, tolerance: 0,
    hint: { fr: "Divise 36 par 2.", en: "Divide 36 by 2.", nl: "Deel 36 door 2." }
  },
  {
    id: "N4_s_4", category: "N4", level: 1,
    text: { fr: "Combien font 2/3 de 15 ?", en: "What is 2/3 of 15?", nl: "Hoeveel is 2/3 van 15?" },
    answer: 10, tolerance: 0,
    hint: { fr: "Calcule 15 ÷ 3 puis multiplie par 2.", en: "Calculate 15 ÷ 3 then multiply by 2.", nl: "Bereken 15 ÷ 3, vermenigvuldig dan met 2." }
  },
  {
    id: "N4_s_5", category: "N4", level: 1,
    text: { fr: "Combien font 1/5 de 45 ?", en: "What is 1/5 of 45?", nl: "Hoeveel is 1/5 van 45?" },
    answer: 9, tolerance: 0,
    hint: { fr: "Divise 45 par 5.", en: "Divide 45 by 5.", nl: "Deel 45 door 5." }
  },
  {
    id: "N4_s_16", category: "N4", level: 1,
    text: { fr: "Combien font 1/3 de 27 ?", en: "What is 1/3 of 27?", nl: "Hoeveel is 1/3 van 27?" },
    answer: 9, tolerance: 0,
    hint: { fr: "Divise 27 par 3.", en: "Divide 27 by 3.", nl: "Deel 27 door 3." }
  },
  {
    id: "N4_s_17", category: "N4", level: 1,
    text: { fr: "Combien font 3/5 de 40 ?", en: "What is 3/5 of 40?", nl: "Hoeveel is 3/5 van 40?" },
    answer: 24, tolerance: 0,
    hint: { fr: "Calcule 40 ÷ 5 = 8, puis 8 × 3.", en: "Calculate 40 ÷ 5 = 8, then 8 × 3.", nl: "Bereken 40 ÷ 5 = 8, dan 8 × 3." }
  },
  {
    id: "N4_s_18", category: "N4", level: 1,
    text: { fr: "Combien font 1/4 de 48 ?", en: "What is 1/4 of 48?", nl: "Hoeveel is 1/4 van 48?" },
    answer: 12, tolerance: 0,
    hint: { fr: "Divise 48 par 4.", en: "Divide 48 by 4.", nl: "Deel 48 door 4." }
  },
  {
    id: "N4_s_19", category: "N4", level: 1,
    text: { fr: "Combien font 2/5 de 35 ?", en: "What is 2/5 of 35?", nl: "Hoeveel is 2/5 van 35?" },
    answer: 14, tolerance: 0,
    hint: { fr: "Calcule 35 ÷ 5 = 7, puis 7 × 2.", en: "Calculate 35 ÷ 5 = 7, then 7 × 2.", nl: "Bereken 35 ÷ 5 = 7, dan 7 × 2." }
  },
  {
    id: "N4_s_20", category: "N4", level: 1,
    text: { fr: "Combien font 3/4 de 60 ?", en: "What is 3/4 of 60?", nl: "Hoeveel is 3/4 van 60?" },
    answer: 45, tolerance: 0,
    hint: { fr: "Calcule 60 ÷ 4 = 15, puis 15 × 3.", en: "Calculate 60 ÷ 4 = 15, then 15 × 3.", nl: "Bereken 60 ÷ 4 = 15, dan 15 × 3." }
  },
  {
    id: "N4_s_21", category: "N4", level: 1,
    text: { fr: "Combien font 1/6 de 54 ?", en: "What is 1/6 of 54?", nl: "Hoeveel is 1/6 van 54?" },
    answer: 9, tolerance: 0,
    hint: { fr: "Divise 54 par 6.", en: "Divide 54 by 6.", nl: "Deel 54 door 6." }
  },
  {
    id: "N4_s_22", category: "N4", level: 1,
    text: { fr: "Combien font 2/3 de 24 ?", en: "What is 2/3 of 24?", nl: "Hoeveel is 2/3 van 24?" },
    answer: 16, tolerance: 0,
    hint: { fr: "Calcule 24 ÷ 3 = 8, puis 8 × 2.", en: "Calculate 24 ÷ 3 = 8, then 8 × 2.", nl: "Bereken 24 ÷ 3 = 8, dan 8 × 2." }
  },
  {
    id: "N4_s_23", category: "N4", level: 1,
    text: { fr: "Combien font 1/2 de 78 ?", en: "What is 1/2 of 78?", nl: "Hoeveel is 1/2 van 78?" },
    answer: 39, tolerance: 0,
    hint: { fr: "Divise 78 par 2.", en: "Divide 78 by 2.", nl: "Deel 78 door 2." }
  },
  {
    id: "N4_s_24", category: "N4", level: 1,
    text: { fr: "Combien font 3/5 de 25 ?", en: "What is 3/5 of 25?", nl: "Hoeveel is 3/5 van 25?" },
    answer: 15, tolerance: 0,
    hint: { fr: "Calcule 25 ÷ 5 = 5, puis 5 × 3.", en: "Calculate 25 ÷ 5 = 5, then 5 × 3.", nl: "Bereken 25 ÷ 5 = 5, dan 5 × 3." }
  },
  {
    id: "N4_s_25", category: "N4", level: 1,
    text: { fr: "Combien font 1/4 de 84 ?", en: "What is 1/4 of 84?", nl: "Hoeveel is 1/4 van 84?" },
    answer: 21, tolerance: 0,
    hint: { fr: "Divise 84 par 4.", en: "Divide 84 by 4.", nl: "Deel 84 door 4." }
  },
  {
    id: "N4_s_26", category: "N4", level: 1,
    text: { fr: "Combien font 2/5 de 50 ?", en: "What is 2/5 of 50?", nl: "Hoeveel is 2/5 van 50?" },
    answer: 20, tolerance: 0,
    hint: { fr: "Calcule 50 ÷ 5 = 10, puis 10 × 2.", en: "Calculate 50 ÷ 5 = 10, then 10 × 2.", nl: "Bereken 50 ÷ 5 = 10, dan 10 × 2." }
  },
  {
    id: "N4_s_27", category: "N4", level: 1,
    text: { fr: "Combien font 3/4 de 32 ?", en: "What is 3/4 of 32?", nl: "Hoeveel is 3/4 van 32?" },
    answer: 24, tolerance: 0,
    hint: { fr: "Calcule 32 ÷ 4 = 8, puis 8 × 3.", en: "Calculate 32 ÷ 4 = 8, then 8 × 3.", nl: "Bereken 32 ÷ 4 = 8, dan 8 × 3." }
  },

  // ───────────────────────────────────────────────────────────────────────────
  // Level 2 — Larger fractions of a number  (17 questions: 6–10, 28–39)
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: "N4_s_6", category: "N4", level: 2,
    text: { fr: "Combien font 5/6 de 42 ?", en: "What is 5/6 of 42?", nl: "Hoeveel is 5/6 van 42?" },
    answer: 35, tolerance: 0,
    hint: { fr: "Calcule 42 ÷ 6 = 7, puis 7 × 5.", en: "Calculate 42 ÷ 6 = 7, then 7 × 5.", nl: "Bereken 42 ÷ 6 = 7, dan 7 × 5." }
  },
  {
    id: "N4_s_7", category: "N4", level: 2,
    text: { fr: "Combien font 7/8 de 56 ?", en: "What is 7/8 of 56?", nl: "Hoeveel is 7/8 van 56?" },
    answer: 49, tolerance: 0,
    hint: { fr: "Calcule 56 ÷ 8, puis multiplie par 7.", en: "Calculate 56 ÷ 8, then multiply by 7.", nl: "Bereken 56 ÷ 8, vermenigvuldig dan met 7." }
  },
  {
    id: "N4_s_8", category: "N4", level: 2,
    text: { fr: "Combien font 3/7 de 49 ?", en: "What is 3/7 of 49?", nl: "Hoeveel is 3/7 van 49?" },
    answer: 21, tolerance: 0,
    hint: { fr: "49 ÷ 7 = 7, puis 7 × 3.", en: "49 ÷ 7 = 7, then 7 × 3.", nl: "49 ÷ 7 = 7, dan 7 × 3." }
  },
  {
    id: "N4_s_9", category: "N4", level: 2,
    text: { fr: "Combien font 4/9 de 81 ?", en: "What is 4/9 of 81?", nl: "Hoeveel is 4/9 van 81?" },
    answer: 36, tolerance: 0,
    hint: { fr: "81 ÷ 9 = 9, puis 9 × 4.", en: "81 ÷ 9 = 9, then 9 × 4.", nl: "81 ÷ 9 = 9, dan 9 × 4." }
  },
  {
    id: "N4_s_10", category: "N4", level: 2,
    text: { fr: "Combien font 2/11 de 55 ?", en: "What is 2/11 of 55?", nl: "Hoeveel is 2/11 van 55?" },
    answer: 10, tolerance: 0,
    hint: { fr: "55 ÷ 11 = 5, puis 5 × 2.", en: "55 ÷ 11 = 5, then 5 × 2.", nl: "55 ÷ 11 = 5, dan 5 × 2." }
  },
  {
    id: "N4_s_28", category: "N4", level: 2,
    text: { fr: "Combien font 5/8 de 72 ?", en: "What is 5/8 of 72?", nl: "Hoeveel is 5/8 van 72?" },
    answer: 45, tolerance: 0,
    hint: { fr: "Calcule 72 ÷ 8 = 9, puis 9 × 5.", en: "Calculate 72 ÷ 8 = 9, then 9 × 5.", nl: "Bereken 72 ÷ 8 = 9, dan 9 × 5." }
  },
  {
    id: "N4_s_29", category: "N4", level: 2,
    text: { fr: "Combien font 3/8 de 96 ?", en: "What is 3/8 of 96?", nl: "Hoeveel is 3/8 van 96?" },
    answer: 36, tolerance: 0,
    hint: { fr: "Calcule 96 ÷ 8 = 12, puis 12 × 3.", en: "Calculate 96 ÷ 8 = 12, then 12 × 3.", nl: "Bereken 96 ÷ 8 = 12, dan 12 × 3." }
  },
  {
    id: "N4_s_30", category: "N4", level: 2,
    text: { fr: "Combien font 7/9 de 63 ?", en: "What is 7/9 of 63?", nl: "Hoeveel is 7/9 van 63?" },
    answer: 49, tolerance: 0,
    hint: { fr: "Calcule 63 ÷ 9 = 7, puis 7 × 7.", en: "Calculate 63 ÷ 9 = 7, then 7 × 7.", nl: "Bereken 63 ÷ 9 = 7, dan 7 × 7." }
  },
  {
    id: "N4_s_31", category: "N4", level: 2,
    text: { fr: "Combien font 5/7 de 63 ?", en: "What is 5/7 of 63?", nl: "Hoeveel is 5/7 van 63?" },
    answer: 45, tolerance: 0,
    hint: { fr: "Calcule 63 ÷ 7 = 9, puis 9 × 5.", en: "Calculate 63 ÷ 7 = 9, then 9 × 5.", nl: "Bereken 63 ÷ 7 = 9, dan 9 × 5." }
  },
  {
    id: "N4_s_32", category: "N4", level: 2,
    text: { fr: "Combien font 4/5 de 85 ?", en: "What is 4/5 of 85?", nl: "Hoeveel is 4/5 van 85?" },
    answer: 68, tolerance: 0,
    hint: { fr: "Calcule 85 ÷ 5 = 17, puis 17 × 4.", en: "Calculate 85 ÷ 5 = 17, then 17 × 4.", nl: "Bereken 85 ÷ 5 = 17, dan 17 × 4." }
  },
  {
    id: "N4_s_33", category: "N4", level: 2,
    text: { fr: "Combien font 6/7 de 42 ?", en: "What is 6/7 of 42?", nl: "Hoeveel is 6/7 van 42?" },
    answer: 36, tolerance: 0,
    hint: { fr: "Calcule 42 ÷ 7 = 6, puis 6 × 6.", en: "Calculate 42 ÷ 7 = 6, then 6 × 6.", nl: "Bereken 42 ÷ 7 = 6, dan 6 × 6." }
  },
  {
    id: "N4_s_34", category: "N4", level: 2,
    text: { fr: "Combien font 3/11 de 77 ?", en: "What is 3/11 of 77?", nl: "Hoeveel is 3/11 van 77?" },
    answer: 21, tolerance: 0,
    hint: { fr: "Calcule 77 ÷ 11 = 7, puis 7 × 3.", en: "Calculate 77 ÷ 11 = 7, then 7 × 3.", nl: "Bereken 77 ÷ 11 = 7, dan 7 × 3." }
  },
  {
    id: "N4_s_35", category: "N4", level: 2,
    text: { fr: "Combien font 5/9 de 108 ?", en: "What is 5/9 of 108?", nl: "Hoeveel is 5/9 van 108?" },
    answer: 60, tolerance: 0,
    hint: { fr: "Calcule 108 ÷ 9 = 12, puis 12 × 5.", en: "Calculate 108 ÷ 9 = 12, then 12 × 5.", nl: "Bereken 108 ÷ 9 = 12, dan 12 × 5." }
  },
  {
    id: "N4_s_36", category: "N4", level: 2,
    text: { fr: "Combien font 7/10 de 90 ?", en: "What is 7/10 of 90?", nl: "Hoeveel is 7/10 van 90?" },
    answer: 63, tolerance: 0,
    hint: { fr: "Calcule 90 ÷ 10 = 9, puis 9 × 7.", en: "Calculate 90 ÷ 10 = 9, then 9 × 7.", nl: "Bereken 90 ÷ 10 = 9, dan 9 × 7." }
  },
  {
    id: "N4_s_37", category: "N4", level: 2,
    text: { fr: "Combien font 8/9 de 54 ?", en: "What is 8/9 of 54?", nl: "Hoeveel is 8/9 van 54?" },
    answer: 48, tolerance: 0,
    hint: { fr: "Calcule 54 ÷ 9 = 6, puis 6 × 8.", en: "Calculate 54 ÷ 9 = 6, then 6 × 8.", nl: "Bereken 54 ÷ 9 = 6, dan 6 × 8." }
  },
  {
    id: "N4_s_38", category: "N4", level: 2,
    text: { fr: "Combien font 5/12 de 84 ?", en: "What is 5/12 of 84?", nl: "Hoeveel is 5/12 van 84?" },
    answer: 35, tolerance: 0,
    hint: { fr: "Calcule 84 ÷ 12 = 7, puis 7 × 5.", en: "Calculate 84 ÷ 12 = 7, then 7 × 5.", nl: "Bereken 84 ÷ 12 = 7, dan 7 × 5." }
  },
  {
    id: "N4_s_39", category: "N4", level: 2,
    text: { fr: "Combien font 4/7 de 91 ?", en: "What is 4/7 of 91?", nl: "Hoeveel is 4/7 van 91?" },
    answer: 52, tolerance: 0,
    hint: { fr: "Calcule 91 ÷ 7 = 13, puis 13 × 4.", en: "Calculate 91 ÷ 7 = 13, then 13 × 4.", nl: "Bereken 91 ÷ 7 = 13, dan 13 × 4." }
  },

  // ───────────────────────────────────────────────────────────────────────────
  // Level 3 — Chained fractions, addition/subtraction, inverse problems
  //           (16 questions: 11–15, 40–50)
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: "N4_s_11", category: "N4", level: 3,
    text: { fr: "Combien font 2/3 de 3/4 de 60 ?", en: "What is 2/3 of 3/4 of 60?", nl: "Hoeveel is 2/3 van 3/4 van 60?" },
    answer: 30, tolerance: 0,
    hint: { fr: "Calcule d'abord 3/4 de 60 = 45, puis 2/3 de 45.", en: "First find 3/4 of 60 = 45, then 2/3 of 45.", nl: "Bereken eerst 3/4 van 60 = 45, dan 2/3 van 45." }
  },
  {
    id: "N4_s_12", category: "N4", level: 3,
    text: { fr: "Combien font 3/4 de 80 plus 2/5 de 50 ?", en: "What is 3/4 of 80 plus 2/5 of 50?", nl: "Hoeveel is 3/4 van 80 plus 2/5 van 50?" },
    answer: 80, tolerance: 0,
    hint: { fr: "Calcule chaque fraction séparément, puis additionne.", en: "Calculate each fraction separately, then add.", nl: "Bereken elke breuk apart, tel dan op." }
  },
  {
    id: "N4_s_13", category: "N4", level: 3,
    text: { fr: "3/5 de 2/3 de 100 = ?", en: "3/5 of 2/3 of 100 = ?", nl: "3/5 van 2/3 van 100 = ?" },
    answer: 40, tolerance: 0,
    hint: { fr: "Multiplie les fractions : 3/5 × 2/3 = 6/15 = 2/5. Puis 2/5 de 100.", en: "Multiply fractions: 3/5 × 2/3 = 2/5. Then 2/5 of 100.", nl: "Vermenigvuldig breuken: 3/5 × 2/3 = 2/5. Dan 2/5 van 100." }
  },
  {
    id: "N4_s_14", category: "N4", level: 3,
    text: { fr: "Si 3/8 d'un nombre est 24, quel est ce nombre ?", en: "If 3/8 of a number is 24, what is the number?", nl: "Als 3/8 van een getal 24 is, wat is dat getal?" },
    answer: 64, tolerance: 0,
    hint: { fr: "Si 3/8 = 24, alors 1/8 = 8, donc le nombre = 64.", en: "If 3/8 = 24, then 1/8 = 8, so the number = 64.", nl: "Als 3/8 = 24, dan 1/8 = 8, dus het getal = 64." }
  },
  {
    id: "N4_s_15", category: "N4", level: 3,
    text: { fr: "Si 2/7 d'un nombre est 14, quel est ce nombre ?", en: "If 2/7 of a number is 14, what is the number?", nl: "Als 2/7 van een getal 14 is, wat is dat getal?" },
    answer: 49, tolerance: 0,
    hint: { fr: "Si 2/7 = 14, alors 1/7 = 7, donc le nombre = 49.", en: "If 2/7 = 14, then 1/7 = 7, so the number = 49.", nl: "Als 2/7 = 14, dan 1/7 = 7, dus het getal = 49." }
  },
  {
    id: "N4_s_40", category: "N4", level: 3,
    text: { fr: "Combien font 1/2 de 2/3 de 90 ?", en: "What is 1/2 of 2/3 of 90?", nl: "Hoeveel is 1/2 van 2/3 van 90?" },
    answer: 30, tolerance: 0,
    hint: { fr: "Calcule d'abord 2/3 de 90 = 60, puis 1/2 de 60.", en: "First find 2/3 of 90 = 60, then 1/2 of 60.", nl: "Bereken eerst 2/3 van 90 = 60, dan 1/2 van 60." }
  },
  {
    id: "N4_s_41", category: "N4", level: 3,
    text: { fr: "Combien font 3/4 de 2/5 de 100 ?", en: "What is 3/4 of 2/5 of 100?", nl: "Hoeveel is 3/4 van 2/5 van 100?" },
    answer: 30, tolerance: 0,
    hint: { fr: "Calcule d'abord 2/5 de 100 = 40, puis 3/4 de 40.", en: "First find 2/5 of 100 = 40, then 3/4 of 40.", nl: "Bereken eerst 2/5 van 100 = 40, dan 3/4 van 40." }
  },
  {
    id: "N4_s_42", category: "N4", level: 3,
    text: { fr: "Si 5/6 d'un nombre est 45, quel est ce nombre ?", en: "If 5/6 of a number is 45, what is the number?", nl: "Als 5/6 van een getal 45 is, wat is dat getal?" },
    answer: 54, tolerance: 0,
    hint: { fr: "Si 5/6 = 45, alors 1/6 = 9, donc le nombre = 54.", en: "If 5/6 = 45, then 1/6 = 9, so the number = 54.", nl: "Als 5/6 = 45, dan 1/6 = 9, dus het getal = 54." }
  },
  {
    id: "N4_s_43", category: "N4", level: 3,
    text: { fr: "Si 4/9 d'un nombre est 36, quel est ce nombre ?", en: "If 4/9 of a number is 36, what is the number?", nl: "Als 4/9 van een getal 36 is, wat is dat getal?" },
    answer: 81, tolerance: 0,
    hint: { fr: "Si 4/9 = 36, alors 1/9 = 9, donc le nombre = 81.", en: "If 4/9 = 36, then 1/9 = 9, so the number = 81.", nl: "Als 4/9 = 36, dan 1/9 = 9, dus het getal = 81." }
  },
  {
    id: "N4_s_44", category: "N4", level: 3,
    text: { fr: "Combien font 1/2 de 84 plus 1/3 de 27 ?", en: "What is 1/2 of 84 plus 1/3 of 27?", nl: "Hoeveel is 1/2 van 84 plus 1/3 van 27?" },
    answer: 51, tolerance: 0,
    hint: { fr: "Calcule 84 ÷ 2 = 42 et 27 ÷ 3 = 9, puis 42 + 9.", en: "Calculate 84 ÷ 2 = 42 and 27 ÷ 3 = 9, then 42 + 9.", nl: "Bereken 84 ÷ 2 = 42 en 27 ÷ 3 = 9, dan 42 + 9." }
  },
  {
    id: "N4_s_45", category: "N4", level: 3,
    text: { fr: "Combien font 3/5 de 60 moins 1/4 de 40 ?", en: "What is 3/5 of 60 minus 1/4 of 40?", nl: "Hoeveel is 3/5 van 60 min 1/4 van 40?" },
    answer: 26, tolerance: 0,
    hint: { fr: "Calcule 3/5 de 60 = 36 et 1/4 de 40 = 10, puis 36 − 10.", en: "Calculate 3/5 of 60 = 36 and 1/4 of 40 = 10, then 36 − 10.", nl: "Bereken 3/5 van 60 = 36 en 1/4 van 40 = 10, dan 36 − 10." }
  },
  {
    id: "N4_s_46", category: "N4", level: 3,
    text: { fr: "Combien font 2/3 de 1/4 de 120 ?", en: "What is 2/3 of 1/4 of 120?", nl: "Hoeveel is 2/3 van 1/4 van 120?" },
    answer: 20, tolerance: 0,
    hint: { fr: "Calcule d'abord 1/4 de 120 = 30, puis 2/3 de 30.", en: "First find 1/4 of 120 = 30, then 2/3 of 30.", nl: "Bereken eerst 1/4 van 120 = 30, dan 2/3 van 30." }
  },
  {
    id: "N4_s_47", category: "N4", level: 3,
    text: { fr: "Si 5/8 d'un nombre est 35, quel est ce nombre ?", en: "If 5/8 of a number is 35, what is the number?", nl: "Als 5/8 van een getal 35 is, wat is dat getal?" },
    answer: 56, tolerance: 0,
    hint: { fr: "Si 5/8 = 35, alors 1/8 = 7, donc le nombre = 56.", en: "If 5/8 = 35, then 1/8 = 7, so the number = 56.", nl: "Als 5/8 = 35, dan 1/8 = 7, dus het getal = 56." }
  },
  {
    id: "N4_s_48", category: "N4", level: 3,
    text: { fr: "Combien font 4/5 de 3/4 de 100 ?", en: "What is 4/5 of 3/4 of 100?", nl: "Hoeveel is 4/5 van 3/4 van 100?" },
    answer: 60, tolerance: 0,
    hint: { fr: "Calcule d'abord 3/4 de 100 = 75, puis 4/5 de 75.", en: "First find 3/4 of 100 = 75, then 4/5 of 75.", nl: "Bereken eerst 3/4 van 100 = 75, dan 4/5 van 75." }
  },
  {
    id: "N4_s_49", category: "N4", level: 3,
    text: { fr: "Combien font 5/6 de 48 moins 2/3 de 24 ?", en: "What is 5/6 of 48 minus 2/3 of 24?", nl: "Hoeveel is 5/6 van 48 min 2/3 van 24?" },
    answer: 24, tolerance: 0,
    hint: { fr: "Calcule 5/6 de 48 = 40 et 2/3 de 24 = 16, puis 40 − 16.", en: "Calculate 5/6 of 48 = 40 and 2/3 of 24 = 16, then 40 − 16.", nl: "Bereken 5/6 van 48 = 40 en 2/3 van 24 = 16, dan 40 − 16." }
  },
  {
    id: "N4_s_50", category: "N4", level: 3,
    text: { fr: "Si 3/5 d'un nombre est 42, quel est ce nombre ?", en: "If 3/5 of a number is 42, what is the number?", nl: "Als 3/5 van een getal 42 is, wat is dat getal?" },
    answer: 70, tolerance: 0,
    hint: { fr: "Si 3/5 = 42, alors 1/5 = 14, donc le nombre = 70.", en: "If 3/5 = 42, then 1/5 = 14, so the number = 70.", nl: "Als 3/5 = 42, dan 1/5 = 14, dus het getal = 70." }
  },
];

export function generate(level = 1) {
  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const id = `N4_gen_${Date.now()}_${rand(100, 999)}`;
  const denoms = [2, 3, 4, 5, 6, 7, 8, 9, 10];
  const d = denoms[rand(0, level === 1 ? 3 : denoms.length - 1)];
  const n = rand(1, d - 1);
  const mult = rand(level === 1 ? 2 : 3, level === 1 ? 10 : 15);
  const whole = d * mult;
  const answer = n * mult;
  return { id, category: 'N4', level, text: { fr: `Combien font ${n}/${d} de ${whole} ?`, en: `What is ${n}/${d} of ${whole}?`, nl: `Hoeveel is ${n}/${d} van ${whole}?` }, answer, tolerance: 0 };
}
