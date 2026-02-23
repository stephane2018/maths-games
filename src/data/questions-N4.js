// =============================================================================
// N4 - Fractions
// CE1D Belgian exam - Trilingual (FR / EN / NL)
// =============================================================================

export const questions = [
  // ───────────────────────────────────────────────────────────────────────────
  // Level 1 — Simple fraction of a number  (17 questions: 1–5, 16–27)  [+21 → 51–71]
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
  // Level 2 — Larger fractions of a number  (17 questions: 6–10, 28–39)  [+20 → 72–91]
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
  //           (16 questions: 11–15, 40–50)  [+20 → 92–111]
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

  // ───────────────────────────────────────────────────────────────────────────
  // Level 1 — Simple fraction of a number  (21 questions: 51–71)
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: "N4_s_51", category: "N4", level: 1,
    text: { fr: "Combien font 1/3 de 36 ?", en: "What is 1/3 of 36?", nl: "Hoeveel is 1/3 van 36?" },
    answer: 12, tolerance: 0,
    hint: { fr: "Divise 36 par 3.", en: "Divide 36 by 3.", nl: "Deel 36 door 3." }
  },
  {
    id: "N4_s_52", category: "N4", level: 1,
    text: { fr: "Combien font 2/5 de 30 ?", en: "What is 2/5 of 30?", nl: "Hoeveel is 2/5 van 30?" },
    answer: 12, tolerance: 0,
    hint: { fr: "Calcule 30 ÷ 5 = 6, puis 6 × 2.", en: "Calculate 30 ÷ 5 = 6, then 6 × 2.", nl: "Bereken 30 ÷ 5 = 6, dan 6 × 2." }
  },
  {
    id: "N4_s_53", category: "N4", level: 1,
    text: { fr: "Combien font 1/2 de 54 ?", en: "What is 1/2 of 54?", nl: "Hoeveel is 1/2 van 54?" },
    answer: 27, tolerance: 0,
    hint: { fr: "Divise 54 par 2.", en: "Divide 54 by 2.", nl: "Deel 54 door 2." }
  },
  {
    id: "N4_s_54", category: "N4", level: 1,
    text: { fr: "Combien font 3/4 de 44 ?", en: "What is 3/4 of 44?", nl: "Hoeveel is 3/4 van 44?" },
    answer: 33, tolerance: 0,
    hint: { fr: "Calcule 44 ÷ 4 = 11, puis 11 × 3.", en: "Calculate 44 ÷ 4 = 11, then 11 × 3.", nl: "Bereken 44 ÷ 4 = 11, dan 11 × 3." }
  },
  {
    id: "N4_s_55", category: "N4", level: 1,
    text: { fr: "Combien font 1/5 de 60 ?", en: "What is 1/5 of 60?", nl: "Hoeveel is 1/5 van 60?" },
    answer: 12, tolerance: 0,
    hint: { fr: "Divise 60 par 5.", en: "Divide 60 by 5.", nl: "Deel 60 door 5." }
  },
  {
    id: "N4_s_56", category: "N4", level: 1,
    text: { fr: "Combien font 2/3 de 33 ?", en: "What is 2/3 of 33?", nl: "Hoeveel is 2/3 van 33?" },
    answer: 22, tolerance: 0,
    hint: { fr: "Calcule 33 ÷ 3 = 11, puis 11 × 2.", en: "Calculate 33 ÷ 3 = 11, then 11 × 2.", nl: "Bereken 33 ÷ 3 = 11, dan 11 × 2." }
  },
  {
    id: "N4_s_57", category: "N4", level: 1,
    text: { fr: "Combien font 1/4 de 64 ?", en: "What is 1/4 of 64?", nl: "Hoeveel is 1/4 van 64?" },
    answer: 16, tolerance: 0,
    hint: { fr: "Divise 64 par 4.", en: "Divide 64 by 4.", nl: "Deel 64 door 4." }
  },
  {
    id: "N4_s_58", category: "N4", level: 1,
    text: { fr: "Combien font 3/5 de 55 ?", en: "What is 3/5 of 55?", nl: "Hoeveel is 3/5 van 55?" },
    answer: 33, tolerance: 0,
    hint: { fr: "Calcule 55 ÷ 5 = 11, puis 11 × 3.", en: "Calculate 55 ÷ 5 = 11, then 11 × 3.", nl: "Bereken 55 ÷ 5 = 11, dan 11 × 3." }
  },
  {
    id: "N4_s_59", category: "N4", level: 1,
    text: { fr: "Combien font 1/6 de 72 ?", en: "What is 1/6 of 72?", nl: "Hoeveel is 1/6 van 72?" },
    answer: 12, tolerance: 0,
    hint: { fr: "Divise 72 par 6.", en: "Divide 72 by 6.", nl: "Deel 72 door 6." }
  },
  {
    id: "N4_s_60", category: "N4", level: 1,
    text: { fr: "Combien font 1/2 de 96 ?", en: "What is 1/2 of 96?", nl: "Hoeveel is 1/2 van 96?" },
    answer: 48, tolerance: 0,
    hint: { fr: "Divise 96 par 2.", en: "Divide 96 by 2.", nl: "Deel 96 door 2." }
  },
  {
    id: "N4_s_61", category: "N4", level: 1,
    text: { fr: "Combien font 2/3 de 42 ?", en: "What is 2/3 of 42?", nl: "Hoeveel is 2/3 van 42?" },
    answer: 28, tolerance: 0,
    hint: { fr: "Calcule 42 ÷ 3 = 14, puis 14 × 2.", en: "Calculate 42 ÷ 3 = 14, then 14 × 2.", nl: "Bereken 42 ÷ 3 = 14, dan 14 × 2." }
  },
  {
    id: "N4_s_62", category: "N4", level: 1,
    text: { fr: "Combien font 3/4 de 72 ?", en: "What is 3/4 of 72?", nl: "Hoeveel is 3/4 van 72?" },
    answer: 54, tolerance: 0,
    hint: { fr: "Calcule 72 ÷ 4 = 18, puis 18 × 3.", en: "Calculate 72 ÷ 4 = 18, then 18 × 3.", nl: "Bereken 72 ÷ 4 = 18, dan 18 × 3." }
  },
  {
    id: "N4_s_63", category: "N4", level: 1,
    text: { fr: "Combien font 1/3 de 66 ?", en: "What is 1/3 of 66?", nl: "Hoeveel is 1/3 van 66?" },
    answer: 22, tolerance: 0,
    hint: { fr: "Divise 66 par 3.", en: "Divide 66 by 3.", nl: "Deel 66 door 3." }
  },
  {
    id: "N4_s_64", category: "N4", level: 1,
    text: { fr: "Combien font 4/5 de 25 ?", en: "What is 4/5 of 25?", nl: "Hoeveel is 4/5 van 25?" },
    answer: 20, tolerance: 0,
    hint: { fr: "Calcule 25 ÷ 5 = 5, puis 5 × 4.", en: "Calculate 25 ÷ 5 = 5, then 5 × 4.", nl: "Bereken 25 ÷ 5 = 5, dan 5 × 4." }
  },
  {
    id: "N4_s_65", category: "N4", level: 1,
    text: { fr: "Combien font 1/4 de 100 ?", en: "What is 1/4 of 100?", nl: "Hoeveel is 1/4 van 100?" },
    answer: 25, tolerance: 0,
    hint: { fr: "Divise 100 par 4.", en: "Divide 100 by 4.", nl: "Deel 100 door 4." }
  },
  {
    id: "N4_s_66", category: "N4", level: 1,
    text: { fr: "Combien font 2/5 de 45 ?", en: "What is 2/5 of 45?", nl: "Hoeveel is 2/5 van 45?" },
    answer: 18, tolerance: 0,
    hint: { fr: "Calcule 45 ÷ 5 = 9, puis 9 × 2.", en: "Calculate 45 ÷ 5 = 9, then 9 × 2.", nl: "Bereken 45 ÷ 5 = 9, dan 9 × 2." }
  },
  {
    id: "N4_s_67", category: "N4", level: 1,
    text: { fr: "Combien font 1/2 de 68 ?", en: "What is 1/2 of 68?", nl: "Hoeveel is 1/2 van 68?" },
    answer: 34, tolerance: 0,
    hint: { fr: "Divise 68 par 2.", en: "Divide 68 by 2.", nl: "Deel 68 door 2." }
  },
  {
    id: "N4_s_68", category: "N4", level: 1,
    text: { fr: "Combien font 1/6 de 42 ?", en: "What is 1/6 of 42?", nl: "Hoeveel is 1/6 van 42?" },
    answer: 7, tolerance: 0,
    hint: { fr: "Divise 42 par 6.", en: "Divide 42 by 6.", nl: "Deel 42 door 6." }
  },
  {
    id: "N4_s_69", category: "N4", level: 1,
    text: { fr: "Combien font 3/5 de 70 ?", en: "What is 3/5 of 70?", nl: "Hoeveel is 3/5 van 70?" },
    answer: 42, tolerance: 0,
    hint: { fr: "Calcule 70 ÷ 5 = 14, puis 14 × 3.", en: "Calculate 70 ÷ 5 = 14, then 14 × 3.", nl: "Bereken 70 ÷ 5 = 14, dan 14 × 3." }
  },
  {
    id: "N4_s_70", category: "N4", level: 1,
    text: { fr: "Combien font 2/3 de 48 ?", en: "What is 2/3 of 48?", nl: "Hoeveel is 2/3 van 48?" },
    answer: 32, tolerance: 0,
    hint: { fr: "Calcule 48 ÷ 3 = 16, puis 16 × 2.", en: "Calculate 48 ÷ 3 = 16, then 16 × 2.", nl: "Bereken 48 ÷ 3 = 16, dan 16 × 2." }
  },
  {
    id: "N4_s_71", category: "N4", level: 1,
    text: { fr: "Combien font 3/4 de 52 ?", en: "What is 3/4 of 52?", nl: "Hoeveel is 3/4 van 52?" },
    answer: 39, tolerance: 0,
    hint: { fr: "Calcule 52 ÷ 4 = 13, puis 13 × 3.", en: "Calculate 52 ÷ 4 = 13, then 13 × 3.", nl: "Bereken 52 ÷ 4 = 13, dan 13 × 3." }
  },

  // ───────────────────────────────────────────────────────────────────────────
  // Level 2 — Larger fractions of a number  (20 questions: 72–91)
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: "N4_s_72", category: "N4", level: 2,
    text: { fr: "Combien font 5/8 de 48 ?", en: "What is 5/8 of 48?", nl: "Hoeveel is 5/8 van 48?" },
    answer: 30, tolerance: 0,
    hint: { fr: "Calcule 48 ÷ 8 = 6, puis 6 × 5.", en: "Calculate 48 ÷ 8 = 6, then 6 × 5.", nl: "Bereken 48 ÷ 8 = 6, dan 6 × 5." }
  },
  {
    id: "N4_s_73", category: "N4", level: 2,
    text: { fr: "Combien font 7/9 de 81 ?", en: "What is 7/9 of 81?", nl: "Hoeveel is 7/9 van 81?" },
    answer: 63, tolerance: 0,
    hint: { fr: "Calcule 81 ÷ 9 = 9, puis 9 × 7.", en: "Calculate 81 ÷ 9 = 9, then 9 × 7.", nl: "Bereken 81 ÷ 9 = 9, dan 9 × 7." }
  },
  {
    id: "N4_s_74", category: "N4", level: 2,
    text: { fr: "Combien font 3/7 de 77 ?", en: "What is 3/7 of 77?", nl: "Hoeveel is 3/7 van 77?" },
    answer: 33, tolerance: 0,
    hint: { fr: "Calcule 77 ÷ 7 = 11, puis 11 × 3.", en: "Calculate 77 ÷ 7 = 11, then 11 × 3.", nl: "Bereken 77 ÷ 7 = 11, dan 11 × 3." }
  },
  {
    id: "N4_s_75", category: "N4", level: 2,
    text: { fr: "Combien font 5/6 de 66 ?", en: "What is 5/6 of 66?", nl: "Hoeveel is 5/6 van 66?" },
    answer: 55, tolerance: 0,
    hint: { fr: "Calcule 66 ÷ 6 = 11, puis 11 × 5.", en: "Calculate 66 ÷ 6 = 11, then 11 × 5.", nl: "Bereken 66 ÷ 6 = 11, dan 11 × 5." }
  },
  {
    id: "N4_s_76", category: "N4", level: 2,
    text: { fr: "Combien font 7/8 de 72 ?", en: "What is 7/8 of 72?", nl: "Hoeveel is 7/8 van 72?" },
    answer: 63, tolerance: 0,
    hint: { fr: "Calcule 72 ÷ 8 = 9, puis 9 × 7.", en: "Calculate 72 ÷ 8 = 9, then 9 × 7.", nl: "Bereken 72 ÷ 8 = 9, dan 9 × 7." }
  },
  {
    id: "N4_s_77", category: "N4", level: 2,
    text: { fr: "Combien font 4/9 de 99 ?", en: "What is 4/9 of 99?", nl: "Hoeveel is 4/9 van 99?" },
    answer: 44, tolerance: 0,
    hint: { fr: "Calcule 99 ÷ 9 = 11, puis 11 × 4.", en: "Calculate 99 ÷ 9 = 11, then 11 × 4.", nl: "Bereken 99 ÷ 9 = 11, dan 11 × 4." }
  },
  {
    id: "N4_s_78", category: "N4", level: 2,
    text: { fr: "Combien font 6/7 de 56 ?", en: "What is 6/7 of 56?", nl: "Hoeveel is 6/7 van 56?" },
    answer: 48, tolerance: 0,
    hint: { fr: "Calcule 56 ÷ 7 = 8, puis 8 × 6.", en: "Calculate 56 ÷ 7 = 8, then 8 × 6.", nl: "Bereken 56 ÷ 7 = 8, dan 8 × 6." }
  },
  {
    id: "N4_s_79", category: "N4", level: 2,
    text: { fr: "Combien font 7/10 de 80 ?", en: "What is 7/10 of 80?", nl: "Hoeveel is 7/10 van 80?" },
    answer: 56, tolerance: 0,
    hint: { fr: "Calcule 80 ÷ 10 = 8, puis 8 × 7.", en: "Calculate 80 ÷ 10 = 8, then 8 × 7.", nl: "Bereken 80 ÷ 10 = 8, dan 8 × 7." }
  },
  {
    id: "N4_s_80", category: "N4", level: 2,
    text: { fr: "Combien font 5/7 de 84 ?", en: "What is 5/7 of 84?", nl: "Hoeveel is 5/7 van 84?" },
    answer: 60, tolerance: 0,
    hint: { fr: "Calcule 84 ÷ 7 = 12, puis 12 × 5.", en: "Calculate 84 ÷ 7 = 12, then 12 × 5.", nl: "Bereken 84 ÷ 7 = 12, dan 12 × 5." }
  },
  {
    id: "N4_s_81", category: "N4", level: 2,
    text: { fr: "Combien font 3/8 de 64 ?", en: "What is 3/8 of 64?", nl: "Hoeveel is 3/8 van 64?" },
    answer: 24, tolerance: 0,
    hint: { fr: "Calcule 64 ÷ 8 = 8, puis 8 × 3.", en: "Calculate 64 ÷ 8 = 8, then 8 × 3.", nl: "Bereken 64 ÷ 8 = 8, dan 8 × 3." }
  },
  {
    id: "N4_s_82", category: "N4", level: 2,
    text: { fr: "Combien font 8/9 de 72 ?", en: "What is 8/9 of 72?", nl: "Hoeveel is 8/9 van 72?" },
    answer: 64, tolerance: 0,
    hint: { fr: "Calcule 72 ÷ 9 = 8, puis 8 × 8.", en: "Calculate 72 ÷ 9 = 8, then 8 × 8.", nl: "Bereken 72 ÷ 9 = 8, dan 8 × 8." }
  },
  {
    id: "N4_s_83", category: "N4", level: 2,
    text: { fr: "Combien font 4/11 de 99 ?", en: "What is 4/11 of 99?", nl: "Hoeveel is 4/11 van 99?" },
    answer: 36, tolerance: 0,
    hint: { fr: "Calcule 99 ÷ 11 = 9, puis 9 × 4.", en: "Calculate 99 ÷ 11 = 9, then 9 × 4.", nl: "Bereken 99 ÷ 11 = 9, dan 9 × 4." }
  },
  {
    id: "N4_s_84", category: "N4", level: 2,
    text: { fr: "Combien font 7/12 de 84 ?", en: "What is 7/12 of 84?", nl: "Hoeveel is 7/12 van 84?" },
    answer: 49, tolerance: 0,
    hint: { fr: "Calcule 84 ÷ 12 = 7, puis 7 × 7.", en: "Calculate 84 ÷ 12 = 7, then 7 × 7.", nl: "Bereken 84 ÷ 12 = 7, dan 7 × 7." }
  },
  {
    id: "N4_s_85", category: "N4", level: 2,
    text: { fr: "Combien font 9/10 de 70 ?", en: "What is 9/10 of 70?", nl: "Hoeveel is 9/10 van 70?" },
    answer: 63, tolerance: 0,
    hint: { fr: "Calcule 70 ÷ 10 = 7, puis 7 × 9.", en: "Calculate 70 ÷ 10 = 7, then 7 × 9.", nl: "Bereken 70 ÷ 10 = 7, dan 7 × 9." }
  },
  {
    id: "N4_s_86", category: "N4", level: 2,
    text: { fr: "Combien font 5/9 de 63 ?", en: "What is 5/9 of 63?", nl: "Hoeveel is 5/9 van 63?" },
    answer: 35, tolerance: 0,
    hint: { fr: "Calcule 63 ÷ 9 = 7, puis 7 × 5.", en: "Calculate 63 ÷ 9 = 7, then 7 × 5.", nl: "Bereken 63 ÷ 9 = 7, dan 7 × 5." }
  },
  {
    id: "N4_s_87", category: "N4", level: 2,
    text: { fr: "Combien font 3/10 de 120 ?", en: "What is 3/10 of 120?", nl: "Hoeveel is 3/10 van 120?" },
    answer: 36, tolerance: 0,
    hint: { fr: "Calcule 120 ÷ 10 = 12, puis 12 × 3.", en: "Calculate 120 ÷ 10 = 12, then 12 × 3.", nl: "Bereken 120 ÷ 10 = 12, dan 12 × 3." }
  },
  {
    id: "N4_s_88", category: "N4", level: 2,
    text: { fr: "Combien font 7/11 de 66 ?", en: "What is 7/11 of 66?", nl: "Hoeveel is 7/11 van 66?" },
    answer: 42, tolerance: 0,
    hint: { fr: "Calcule 66 ÷ 11 = 6, puis 6 × 7.", en: "Calculate 66 ÷ 11 = 6, then 6 × 7.", nl: "Bereken 66 ÷ 11 = 6, dan 6 × 7." }
  },
  {
    id: "N4_s_89", category: "N4", level: 2,
    text: { fr: "Combien font 5/6 de 78 ?", en: "What is 5/6 of 78?", nl: "Hoeveel is 5/6 van 78?" },
    answer: 65, tolerance: 0,
    hint: { fr: "Calcule 78 ÷ 6 = 13, puis 13 × 5.", en: "Calculate 78 ÷ 6 = 13, then 13 × 5.", nl: "Bereken 78 ÷ 6 = 13, dan 13 × 5." }
  },
  {
    id: "N4_s_90", category: "N4", level: 2,
    text: { fr: "Combien font 4/7 de 63 ?", en: "What is 4/7 of 63?", nl: "Hoeveel is 4/7 van 63?" },
    answer: 36, tolerance: 0,
    hint: { fr: "Calcule 63 ÷ 7 = 9, puis 9 × 4.", en: "Calculate 63 ÷ 7 = 9, then 9 × 4.", nl: "Bereken 63 ÷ 7 = 9, dan 9 × 4." }
  },
  {
    id: "N4_s_91", category: "N4", level: 2,
    text: { fr: "Combien font 11/12 de 60 ?", en: "What is 11/12 of 60?", nl: "Hoeveel is 11/12 van 60?" },
    answer: 55, tolerance: 0,
    hint: { fr: "Calcule 60 ÷ 12 = 5, puis 5 × 11.", en: "Calculate 60 ÷ 12 = 5, then 5 × 11.", nl: "Bereken 60 ÷ 12 = 5, dan 5 × 11." }
  },

  // ───────────────────────────────────────────────────────────────────────────
  // Level 3 — Chained fractions, inverse problems  (20 questions: 92–111)
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: "N4_s_92", category: "N4", level: 3,
    text: { fr: "Combien font 3/4 de 2/3 de 48 ?", en: "What is 3/4 of 2/3 of 48?", nl: "Hoeveel is 3/4 van 2/3 van 48?" },
    answer: 24, tolerance: 0,
    hint: { fr: "Calcule d'abord 2/3 de 48 = 32, puis 3/4 de 32.", en: "First find 2/3 of 48 = 32, then 3/4 of 32.", nl: "Bereken eerst 2/3 van 48 = 32, dan 3/4 van 32." }
  },
  {
    id: "N4_s_93", category: "N4", level: 3,
    text: { fr: "Si 2/5 d'un nombre est 18, quel est ce nombre ?", en: "If 2/5 of a number is 18, what is the number?", nl: "Als 2/5 van een getal 18 is, wat is dat getal?" },
    answer: 45, tolerance: 0,
    hint: { fr: "Si 2/5 = 18, alors 1/5 = 9, donc le nombre = 45.", en: "If 2/5 = 18, then 1/5 = 9, so the number = 45.", nl: "Als 2/5 = 18, dan 1/5 = 9, dus het getal = 45." }
  },
  {
    id: "N4_s_94", category: "N4", level: 3,
    text: { fr: "Combien font 2/3 de 3/5 de 75 ?", en: "What is 2/3 of 3/5 of 75?", nl: "Hoeveel is 2/3 van 3/5 van 75?" },
    answer: 30, tolerance: 0,
    hint: { fr: "Calcule d'abord 3/5 de 75 = 45, puis 2/3 de 45.", en: "First find 3/5 of 75 = 45, then 2/3 of 45.", nl: "Bereken eerst 3/5 van 75 = 45, dan 2/3 van 45." }
  },
  {
    id: "N4_s_95", category: "N4", level: 3,
    text: { fr: "Si 7/8 d'un nombre est 56, quel est ce nombre ?", en: "If 7/8 of a number is 56, what is the number?", nl: "Als 7/8 van een getal 56 is, wat is dat getal?" },
    answer: 64, tolerance: 0,
    hint: { fr: "Si 7/8 = 56, alors 1/8 = 8, donc le nombre = 64.", en: "If 7/8 = 56, then 1/8 = 8, so the number = 64.", nl: "Als 7/8 = 56, dan 1/8 = 8, dus het getal = 64." }
  },
  {
    id: "N4_s_96", category: "N4", level: 3,
    text: { fr: "Combien font 1/3 de 3/4 de 84 ?", en: "What is 1/3 of 3/4 of 84?", nl: "Hoeveel is 1/3 van 3/4 van 84?" },
    answer: 21, tolerance: 0,
    hint: { fr: "Calcule d'abord 3/4 de 84 = 63, puis 1/3 de 63.", en: "First find 3/4 of 84 = 63, then 1/3 of 63.", nl: "Bereken eerst 3/4 van 84 = 63, dan 1/3 van 63." }
  },
  {
    id: "N4_s_97", category: "N4", level: 3,
    text: { fr: "Si 5/9 d'un nombre est 30, quel est ce nombre ?", en: "If 5/9 of a number is 30, what is the number?", nl: "Als 5/9 van een getal 30 is, wat is dat getal?" },
    answer: 54, tolerance: 0,
    hint: { fr: "Si 5/9 = 30, alors 1/9 = 6, donc le nombre = 54.", en: "If 5/9 = 30, then 1/9 = 6, so the number = 54.", nl: "Als 5/9 = 30, dan 1/9 = 6, dus het getal = 54." }
  },
  {
    id: "N4_s_98", category: "N4", level: 3,
    text: { fr: "Combien font 2/3 de 90 plus 3/4 de 28 ?", en: "What is 2/3 of 90 plus 3/4 of 28?", nl: "Hoeveel is 2/3 van 90 plus 3/4 van 28?" },
    answer: 81, tolerance: 0,
    hint: { fr: "Calcule 2/3 de 90 = 60 et 3/4 de 28 = 21, puis 60 + 21.", en: "Calculate 2/3 of 90 = 60 and 3/4 of 28 = 21, then 60 + 21.", nl: "Bereken 2/3 van 90 = 60 en 3/4 van 28 = 21, dan 60 + 21." }
  },
  {
    id: "N4_s_99", category: "N4", level: 3,
    text: { fr: "Combien font 5/6 de 2/5 de 60 ?", en: "What is 5/6 of 2/5 of 60?", nl: "Hoeveel is 5/6 van 2/5 van 60?" },
    answer: 20, tolerance: 0,
    hint: { fr: "Calcule d'abord 2/5 de 60 = 24, puis 5/6 de 24.", en: "First find 2/5 of 60 = 24, then 5/6 of 24.", nl: "Bereken eerst 2/5 van 60 = 24, dan 5/6 van 24." }
  },
  {
    id: "N4_s_100", category: "N4", level: 3,
    text: { fr: "Si 3/7 d'un nombre est 27, quel est ce nombre ?", en: "If 3/7 of a number is 27, what is the number?", nl: "Als 3/7 van een getal 27 is, wat is dat getal?" },
    answer: 63, tolerance: 0,
    hint: { fr: "Si 3/7 = 27, alors 1/7 = 9, donc le nombre = 63.", en: "If 3/7 = 27, then 1/7 = 9, so the number = 63.", nl: "Als 3/7 = 27, dan 1/7 = 9, dus het getal = 63." }
  },
  {
    id: "N4_s_101", category: "N4", level: 3,
    text: { fr: "Combien font 3/4 de 80 moins 2/3 de 36 ?", en: "What is 3/4 of 80 minus 2/3 of 36?", nl: "Hoeveel is 3/4 van 80 min 2/3 van 36?" },
    answer: 36, tolerance: 0,
    hint: { fr: "Calcule 3/4 de 80 = 60 et 2/3 de 36 = 24, puis 60 − 24.", en: "Calculate 3/4 of 80 = 60 and 2/3 of 36 = 24, then 60 − 24.", nl: "Bereken 3/4 van 80 = 60 en 2/3 van 36 = 24, dan 60 − 24." }
  },
  {
    id: "N4_s_102", category: "N4", level: 3,
    text: { fr: "Combien font 3/5 de 1/2 de 80 ?", en: "What is 3/5 of 1/2 of 80?", nl: "Hoeveel is 3/5 van 1/2 van 80?" },
    answer: 24, tolerance: 0,
    hint: { fr: "Calcule d'abord 1/2 de 80 = 40, puis 3/5 de 40.", en: "First find 1/2 of 80 = 40, then 3/5 of 40.", nl: "Bereken eerst 1/2 van 80 = 40, dan 3/5 van 40." }
  },
  {
    id: "N4_s_103", category: "N4", level: 3,
    text: { fr: "Si 4/7 d'un nombre est 28, quel est ce nombre ?", en: "If 4/7 of a number is 28, what is the number?", nl: "Als 4/7 van een getal 28 is, wat is dat getal?" },
    answer: 49, tolerance: 0,
    hint: { fr: "Si 4/7 = 28, alors 1/7 = 7, donc le nombre = 49.", en: "If 4/7 = 28, then 1/7 = 7, so the number = 49.", nl: "Als 4/7 = 28, dan 1/7 = 7, dus het getal = 49." }
  },
  {
    id: "N4_s_104", category: "N4", level: 3,
    text: { fr: "Combien font 1/2 de 4/5 de 90 ?", en: "What is 1/2 of 4/5 of 90?", nl: "Hoeveel is 1/2 van 4/5 van 90?" },
    answer: 36, tolerance: 0,
    hint: { fr: "Calcule d'abord 4/5 de 90 = 72, puis 1/2 de 72.", en: "First find 4/5 of 90 = 72, then 1/2 of 72.", nl: "Bereken eerst 4/5 van 90 = 72, dan 1/2 van 72." }
  },
  {
    id: "N4_s_105", category: "N4", level: 3,
    text: { fr: "Si 5/6 d'un nombre est 60, quel est ce nombre ?", en: "If 5/6 of a number is 60, what is the number?", nl: "Als 5/6 van een getal 60 is, wat is dat getal?" },
    answer: 72, tolerance: 0,
    hint: { fr: "Si 5/6 = 60, alors 1/6 = 12, donc le nombre = 72.", en: "If 5/6 = 60, then 1/6 = 12, so the number = 72.", nl: "Als 5/6 = 60, dan 1/6 = 12, dus het getal = 72." }
  },
  {
    id: "N4_s_106", category: "N4", level: 3,
    text: { fr: "Combien font 2/3 de 72 moins 3/4 de 44 ?", en: "What is 2/3 of 72 minus 3/4 of 44?", nl: "Hoeveel is 2/3 van 72 min 3/4 van 44?" },
    answer: 15, tolerance: 0,
    hint: { fr: "Calcule 2/3 de 72 = 48 et 3/4 de 44 = 33, puis 48 − 33.", en: "Calculate 2/3 of 72 = 48 and 3/4 of 44 = 33, then 48 − 33.", nl: "Bereken 2/3 van 72 = 48 en 3/4 van 44 = 33, dan 48 − 33." }
  },
  {
    id: "N4_s_107", category: "N4", level: 3,
    text: { fr: "Combien font 2/5 de 3/4 de 80 ?", en: "What is 2/5 of 3/4 of 80?", nl: "Hoeveel is 2/5 van 3/4 van 80?" },
    answer: 24, tolerance: 0,
    hint: { fr: "Calcule d'abord 3/4 de 80 = 60, puis 2/5 de 60.", en: "First find 3/4 of 80 = 60, then 2/5 of 60.", nl: "Bereken eerst 3/4 van 80 = 60, dan 2/5 van 60." }
  },
  {
    id: "N4_s_108", category: "N4", level: 3,
    text: { fr: "Si 2/9 d'un nombre est 16, quel est ce nombre ?", en: "If 2/9 of a number is 16, what is the number?", nl: "Als 2/9 van een getal 16 is, wat is dat getal?" },
    answer: 72, tolerance: 0,
    hint: { fr: "Si 2/9 = 16, alors 1/9 = 8, donc le nombre = 72.", en: "If 2/9 = 16, then 1/9 = 8, so the number = 72.", nl: "Als 2/9 = 16, dan 1/9 = 8, dus het getal = 72." }
  },
  {
    id: "N4_s_109", category: "N4", level: 3,
    text: { fr: "Combien font 1/3 de 90 plus 2/5 de 75 ?", en: "What is 1/3 of 90 plus 2/5 of 75?", nl: "Hoeveel is 1/3 van 90 plus 2/5 van 75?" },
    answer: 60, tolerance: 0,
    hint: { fr: "Calcule 1/3 de 90 = 30 et 2/5 de 75 = 30, puis 30 + 30.", en: "Calculate 1/3 of 90 = 30 and 2/5 of 75 = 30, then 30 + 30.", nl: "Bereken 1/3 van 90 = 30 en 2/5 van 75 = 30, dan 30 + 30." }
  },
  {
    id: "N4_s_110", category: "N4", level: 3,
    text: { fr: "Si 3/4 d'un nombre est 45, quel est ce nombre ?", en: "If 3/4 of a number is 45, what is the number?", nl: "Als 3/4 van een getal 45 is, wat is dat getal?" },
    answer: 60, tolerance: 0,
    hint: { fr: "Si 3/4 = 45, alors 1/4 = 15, donc le nombre = 60.", en: "If 3/4 = 45, then 1/4 = 15, so the number = 60.", nl: "Als 3/4 = 45, dan 1/4 = 15, dus het getal = 60." }
  },
  {
    id: "N4_s_111", category: "N4", level: 3,
    text: { fr: "Combien font 3/4 de 2/3 de 2/5 de 100 ?", en: "What is 3/4 of 2/3 of 2/5 of 100?", nl: "Hoeveel is 3/4 van 2/3 van 2/5 van 100?" },
    answer: 20, tolerance: 0,
    hint: { fr: "Multiplie les fractions : 3/4 × 2/3 × 2/5 = 12/60 = 1/5. Puis 1/5 de 100.", en: "Multiply: 3/4 × 2/3 × 2/5 = 12/60 = 1/5. Then 1/5 of 100.", nl: "Vermenigvuldig: 3/4 × 2/3 × 2/5 = 12/60 = 1/5. Dan 1/5 van 100." }
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
