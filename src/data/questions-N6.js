// =============================================================================
// N6 - Puissances
// CE1D Belgian exam - Trilingual (FR / EN / NL)
// =============================================================================

export const questions = [
  // ───────────────────────────────────────────────────────────────────────────
  // Level 1 — Simple powers (37 questions: s_1–s_5, s_16–s_27, s_51–s_70)
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: "N6_s_1", category: "N6", level: 1,
    text: { fr: "Calcule : 2⁴", en: "Calculate: 2⁴", nl: "Bereken: 2⁴" },
    answer: 16, tolerance: 0,
    hint: { fr: "2⁴ = 2 × 2 × 2 × 2", en: "2⁴ = 2 × 2 × 2 × 2", nl: "2⁴ = 2 × 2 × 2 × 2" }
  },
  {
    id: "N6_s_2", category: "N6", level: 1,
    text: { fr: "Calcule : 3³", en: "Calculate: 3³", nl: "Bereken: 3³" },
    answer: 27, tolerance: 0,
    hint: { fr: "3³ = 3 × 3 × 3", en: "3³ = 3 × 3 × 3", nl: "3³ = 3 × 3 × 3" }
  },
  {
    id: "N6_s_3", category: "N6", level: 1,
    text: { fr: "Calcule : 5²", en: "Calculate: 5²", nl: "Bereken: 5²" },
    answer: 25, tolerance: 0,
    hint: { fr: "5² = 5 × 5", en: "5² = 5 × 5", nl: "5² = 5 × 5" }
  },
  {
    id: "N6_s_4", category: "N6", level: 1,
    text: { fr: "Calcule : 10³", en: "Calculate: 10³", nl: "Bereken: 10³" },
    answer: 1000, tolerance: 0,
    hint: { fr: "10³ = 10 × 10 × 10", en: "10³ = 10 × 10 × 10", nl: "10³ = 10 × 10 × 10" }
  },
  {
    id: "N6_s_5", category: "N6", level: 1,
    text: { fr: "Calcule : 7²", en: "Calculate: 7²", nl: "Bereken: 7²" },
    answer: 49, tolerance: 0,
    hint: { fr: "7² = 7 × 7", en: "7² = 7 × 7", nl: "7² = 7 × 7" }
  },
  {
    id: "N6_s_16", category: "N6", level: 1,
    text: { fr: "Calcule : 4³", en: "Calculate: 4³", nl: "Bereken: 4³" },
    answer: 64, tolerance: 0,
    hint: { fr: "4³ = 4 × 4 × 4 = 64", en: "4³ = 4 × 4 × 4 = 64", nl: "4³ = 4 × 4 × 4 = 64" }
  },
  {
    id: "N6_s_17", category: "N6", level: 1,
    text: { fr: "Calcule : 6²", en: "Calculate: 6²", nl: "Bereken: 6²" },
    answer: 36, tolerance: 0,
    hint: { fr: "6² = 6 × 6 = 36", en: "6² = 6 × 6 = 36", nl: "6² = 6 × 6 = 36" }
  },
  {
    id: "N6_s_18", category: "N6", level: 1,
    text: { fr: "Calcule : 8²", en: "Calculate: 8²", nl: "Bereken: 8²" },
    answer: 64, tolerance: 0,
    hint: { fr: "8² = 8 × 8 = 64", en: "8² = 8 × 8 = 64", nl: "8² = 8 × 8 = 64" }
  },
  {
    id: "N6_s_19", category: "N6", level: 1,
    text: { fr: "Calcule : 9²", en: "Calculate: 9²", nl: "Bereken: 9²" },
    answer: 81, tolerance: 0,
    hint: { fr: "9² = 9 × 9 = 81", en: "9² = 9 × 9 = 81", nl: "9² = 9 × 9 = 81" }
  },
  {
    id: "N6_s_20", category: "N6", level: 1,
    text: { fr: "Calcule : 11²", en: "Calculate: 11²", nl: "Bereken: 11²" },
    answer: 121, tolerance: 0,
    hint: { fr: "11² = 11 × 11 = 121", en: "11² = 11 × 11 = 121", nl: "11² = 11 × 11 = 121" }
  },
  {
    id: "N6_s_21", category: "N6", level: 1,
    text: { fr: "Calcule : 10²", en: "Calculate: 10²", nl: "Bereken: 10²" },
    answer: 100, tolerance: 0,
    hint: { fr: "10² = 10 × 10 = 100", en: "10² = 10 × 10 = 100", nl: "10² = 10 × 10 = 100" }
  },
  {
    id: "N6_s_22", category: "N6", level: 1,
    text: { fr: "Calcule : 2³", en: "Calculate: 2³", nl: "Bereken: 2³" },
    answer: 8, tolerance: 0,
    hint: { fr: "2³ = 2 × 2 × 2 = 8", en: "2³ = 2 × 2 × 2 = 8", nl: "2³ = 2 × 2 × 2 = 8" }
  },
  {
    id: "N6_s_23", category: "N6", level: 1,
    text: { fr: "Calcule : 4²", en: "Calculate: 4²", nl: "Bereken: 4²" },
    answer: 16, tolerance: 0,
    hint: { fr: "4² = 4 × 4 = 16", en: "4² = 4 × 4 = 16", nl: "4² = 4 × 4 = 16" }
  },
  {
    id: "N6_s_24", category: "N6", level: 1,
    text: { fr: "Calcule : 12²", en: "Calculate: 12²", nl: "Bereken: 12²" },
    answer: 144, tolerance: 0,
    hint: { fr: "12² = 12 × 12 = 144", en: "12² = 12 × 12 = 144", nl: "12² = 12 × 12 = 144" }
  },
  {
    id: "N6_s_25", category: "N6", level: 1,
    text: { fr: "Calcule : 5³", en: "Calculate: 5³", nl: "Bereken: 5³" },
    answer: 125, tolerance: 0,
    hint: { fr: "5³ = 5 × 5 × 5 = 125", en: "5³ = 5 × 5 × 5 = 125", nl: "5³ = 5 × 5 × 5 = 125" }
  },
  {
    id: "N6_s_26", category: "N6", level: 1,
    text: { fr: "Calcule : 6³", en: "Calculate: 6³", nl: "Bereken: 6³" },
    answer: 216, tolerance: 0,
    hint: { fr: "6³ = 6 × 6 × 6 = 216", en: "6³ = 6 × 6 × 6 = 216", nl: "6³ = 6 × 6 × 6 = 216" }
  },
  {
    id: "N6_s_27", category: "N6", level: 1,
    text: { fr: "Calcule : 1⁵", en: "Calculate: 1⁵", nl: "Bereken: 1⁵" },
    answer: 1, tolerance: 0,
    hint: { fr: "1 élevé à n'importe quelle puissance vaut toujours 1.", en: "1 raised to any power is always 1.", nl: "1 tot om het even welke macht is altijd 1." }
  },
  {
    id: "N6_s_51", category: "N6", level: 1,
    text: { fr: "Calcule : 3²", en: "Calculate: 3²", nl: "Bereken: 3²" },
    answer: 9, tolerance: 0,
    hint: { fr: "3² = 3 × 3 = 9", en: "3² = 3 × 3 = 9", nl: "3² = 3 × 3 = 9" }
  },
  {
    id: "N6_s_52", category: "N6", level: 1,
    text: { fr: "Calcule : 2²", en: "Calculate: 2²", nl: "Bereken: 2²" },
    answer: 4, tolerance: 0,
    hint: { fr: "2² = 2 × 2 = 4", en: "2² = 2 × 2 = 4", nl: "2² = 2 × 2 = 4" }
  },
  {
    id: "N6_s_53", category: "N6", level: 1,
    text: { fr: "Calcule : 13²", en: "Calculate: 13²", nl: "Bereken: 13²" },
    answer: 169, tolerance: 0,
    hint: { fr: "13² = 13 × 13 = 169", en: "13² = 13 × 13 = 169", nl: "13² = 13 × 13 = 169" }
  },
  {
    id: "N6_s_54", category: "N6", level: 1,
    text: { fr: "Calcule : 14²", en: "Calculate: 14²", nl: "Bereken: 14²" },
    answer: 196, tolerance: 0,
    hint: { fr: "14² = 14 × 14 = 196", en: "14² = 14 × 14 = 196", nl: "14² = 14 × 14 = 196" }
  },
  {
    id: "N6_s_55", category: "N6", level: 1,
    text: { fr: "Calcule : 15²", en: "Calculate: 15²", nl: "Bereken: 15²" },
    answer: 225, tolerance: 0,
    hint: { fr: "15² = 15 × 15 = 225", en: "15² = 15 × 15 = 225", nl: "15² = 15 × 15 = 225" }
  },
  {
    id: "N6_s_56", category: "N6", level: 1,
    text: { fr: "Calcule : 7³", en: "Calculate: 7³", nl: "Bereken: 7³" },
    answer: 343, tolerance: 0,
    hint: { fr: "7³ = 7 × 7 × 7 = 343", en: "7³ = 7 × 7 × 7 = 343", nl: "7³ = 7 × 7 × 7 = 343" }
  },
  {
    id: "N6_s_57", category: "N6", level: 1,
    text: { fr: "Calcule : 8³", en: "Calculate: 8³", nl: "Bereken: 8³" },
    answer: 512, tolerance: 0,
    hint: { fr: "8³ = 8 × 8 × 8 = 512", en: "8³ = 8 × 8 × 8 = 512", nl: "8³ = 8 × 8 × 8 = 512" }
  },
  {
    id: "N6_s_58", category: "N6", level: 1,
    text: { fr: "Calcule : 9³", en: "Calculate: 9³", nl: "Bereken: 9³" },
    answer: 729, tolerance: 0,
    hint: { fr: "9³ = 9 × 9 × 9 = 729", en: "9³ = 9 × 9 × 9 = 729", nl: "9³ = 9 × 9 × 9 = 729" }
  },
  {
    id: "N6_s_59", category: "N6", level: 1,
    text: { fr: "Calcule : 3⁴", en: "Calculate: 3⁴", nl: "Bereken: 3⁴" },
    answer: 81, tolerance: 0,
    hint: { fr: "3⁴ = 3 × 3 × 3 × 3 = 81", en: "3⁴ = 3 × 3 × 3 × 3 = 81", nl: "3⁴ = 3 × 3 × 3 × 3 = 81" }
  },
  {
    id: "N6_s_60", category: "N6", level: 1,
    text: { fr: "Calcule : 2⁵", en: "Calculate: 2⁵", nl: "Bereken: 2⁵" },
    answer: 32, tolerance: 0,
    hint: { fr: "2⁵ = 2 × 2 × 2 × 2 × 2 = 32", en: "2⁵ = 2 × 2 × 2 × 2 × 2 = 32", nl: "2⁵ = 2 × 2 × 2 × 2 × 2 = 32" }
  },
  {
    id: "N6_s_61", category: "N6", level: 1,
    text: { fr: "Calcule : 4⁴", en: "Calculate: 4⁴", nl: "Bereken: 4⁴" },
    answer: 256, tolerance: 0,
    hint: { fr: "4⁴ = 4 × 4 × 4 × 4 = 256", en: "4⁴ = 4 × 4 × 4 × 4 = 256", nl: "4⁴ = 4 × 4 × 4 × 4 = 256" }
  },
  {
    id: "N6_s_62", category: "N6", level: 1,
    text: { fr: "Calcule : 5⁴", en: "Calculate: 5⁴", nl: "Bereken: 5⁴" },
    answer: 625, tolerance: 0,
    hint: { fr: "5⁴ = 5 × 5 × 5 × 5 = 625", en: "5⁴ = 5 × 5 × 5 × 5 = 625", nl: "5⁴ = 5 × 5 × 5 × 5 = 625" }
  },
  {
    id: "N6_s_63", category: "N6", level: 1,
    text: { fr: "Calcule : 10⁴", en: "Calculate: 10⁴", nl: "Bereken: 10⁴" },
    answer: 10000, tolerance: 0,
    hint: { fr: "10⁴ = 10 × 10 × 10 × 10 = 10 000", en: "10⁴ = 10 × 10 × 10 × 10 = 10,000", nl: "10⁴ = 10 × 10 × 10 × 10 = 10.000" }
  },
  {
    id: "N6_s_64", category: "N6", level: 1,
    text: { fr: "Calcule : 20²", en: "Calculate: 20²", nl: "Bereken: 20²" },
    answer: 400, tolerance: 0,
    hint: { fr: "20² = 20 × 20 = 400", en: "20² = 20 × 20 = 400", nl: "20² = 20 × 20 = 400" }
  },
  {
    id: "N6_s_65", category: "N6", level: 1,
    text: { fr: "Calcule : 25²", en: "Calculate: 25²", nl: "Bereken: 25²" },
    answer: 625, tolerance: 0,
    hint: { fr: "25² = 25 × 25 = 625", en: "25² = 25 × 25 = 625", nl: "25² = 25 × 25 = 625" }
  },
  {
    id: "N6_s_66", category: "N6", level: 1,
    text: { fr: "Calcule : 3⁵", en: "Calculate: 3⁵", nl: "Bereken: 3⁵" },
    answer: 243, tolerance: 0,
    hint: { fr: "3⁵ = 3 × 3 × 3 × 3 × 3 = 243", en: "3⁵ = 3 × 3 × 3 × 3 × 3 = 243", nl: "3⁵ = 3 × 3 × 3 × 3 × 3 = 243" }
  },
  {
    id: "N6_s_67", category: "N6", level: 1,
    text: { fr: "Calcule : 10⁵", en: "Calculate: 10⁵", nl: "Bereken: 10⁵" },
    answer: 100000, tolerance: 0,
    hint: { fr: "10⁵ = 10 × 10 × 10 × 10 × 10 = 100 000", en: "10⁵ = 10 × 10 × 10 × 10 × 10 = 100,000", nl: "10⁵ = 10 × 10 × 10 × 10 × 10 = 100.000" }
  },
  {
    id: "N6_s_68", category: "N6", level: 1,
    text: { fr: "Calcule : 2³", en: "Calculate: 2³", nl: "Bereken: 2³" },
    answer: 8, tolerance: 0,
    hint: { fr: "2³ = 2 × 2 × 2 = 8", en: "2³ = 2 × 2 × 2 = 8", nl: "2³ = 2 × 2 × 2 = 8" }
  },
  {
    id: "N6_s_69", category: "N6", level: 1,
    text: { fr: "Calcule : 30²", en: "Calculate: 30²", nl: "Bereken: 30²" },
    answer: 900, tolerance: 0,
    hint: { fr: "30² = 30 × 30 = 900", en: "30² = 30 × 30 = 900", nl: "30² = 30 × 30 = 900" }
  },
  {
    id: "N6_s_70", category: "N6", level: 1,
    text: { fr: "Calcule : 11³", en: "Calculate: 11³", nl: "Bereken: 11³" },
    answer: 1331, tolerance: 0,
    hint: { fr: "11³ = 11 × 11 × 11 = 1331", en: "11³ = 11 × 11 × 11 = 1,331", nl: "11³ = 11 × 11 × 11 = 1.331" }
  },

  // ───────────────────────────────────────────────────────────────────────────
  // Level 2 — Products / quotients / sums of powers (37 questions: s_6–s_10, s_28–s_39, s_71–s_90)
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: "N6_s_6", category: "N6", level: 2,
    text: { fr: "Calcule : 2³ × 2²", en: "Calculate: 2³ × 2²", nl: "Bereken: 2³ × 2²" },
    answer: 32, tolerance: 0,
    hint: { fr: "2³ = 8 et 2² = 4. Donc 8 × 4 = 32.", en: "2³ = 8 and 2² = 4. So 8 × 4 = 32.", nl: "2³ = 8 en 2² = 4. Dus 8 × 4 = 32." }
  },
  {
    id: "N6_s_7", category: "N6", level: 2,
    text: { fr: "Calcule : 3² × 3", en: "Calculate: 3² × 3", nl: "Bereken: 3² × 3" },
    answer: 27, tolerance: 0,
    hint: { fr: "3² = 9, puis 9 × 3 = 27.", en: "3² = 9, then 9 × 3 = 27.", nl: "3² = 9, dan 9 × 3 = 27." }
  },
  {
    id: "N6_s_8", category: "N6", level: 2,
    text: { fr: "Calcule : 4³ ÷ 4", en: "Calculate: 4³ ÷ 4", nl: "Bereken: 4³ ÷ 4" },
    answer: 16, tolerance: 0,
    hint: { fr: "4³ = 64, puis 64 ÷ 4 = 16.", en: "4³ = 64, then 64 ÷ 4 = 16.", nl: "4³ = 64, dan 64 ÷ 4 = 16." }
  },
  {
    id: "N6_s_9", category: "N6", level: 2,
    text: { fr: "Calcule : 5² + 3²", en: "Calculate: 5² + 3²", nl: "Bereken: 5² + 3²" },
    answer: 34, tolerance: 0,
    hint: { fr: "5² = 25 et 3² = 9. Donc 25 + 9 = 34.", en: "5² = 25 and 3² = 9. So 25 + 9 = 34.", nl: "5² = 25 en 3² = 9. Dus 25 + 9 = 34." }
  },
  {
    id: "N6_s_10", category: "N6", level: 2,
    text: { fr: "Calcule : 2⁵", en: "Calculate: 2⁵", nl: "Bereken: 2⁵" },
    answer: 32, tolerance: 0,
    hint: { fr: "2⁵ = 2 × 2 × 2 × 2 × 2 = 32", en: "2⁵ = 2 × 2 × 2 × 2 × 2 = 32", nl: "2⁵ = 2 × 2 × 2 × 2 × 2 = 32" }
  },
  {
    id: "N6_s_28", category: "N6", level: 2,
    text: { fr: "Calcule : 3² - 2³", en: "Calculate: 3² - 2³", nl: "Bereken: 3² - 2³" },
    answer: 1, tolerance: 0,
    hint: { fr: "3² = 9 et 2³ = 8. Donc 9 - 8 = 1.", en: "3² = 9 and 2³ = 8. So 9 - 8 = 1.", nl: "3² = 9 en 2³ = 8. Dus 9 - 8 = 1." }
  },
  {
    id: "N6_s_29", category: "N6", level: 2,
    text: { fr: "Calcule : 4² + 2³", en: "Calculate: 4² + 2³", nl: "Bereken: 4² + 2³" },
    answer: 24, tolerance: 0,
    hint: { fr: "4² = 16 et 2³ = 8. Donc 16 + 8 = 24.", en: "4² = 16 and 2³ = 8. So 16 + 8 = 24.", nl: "4² = 16 en 2³ = 8. Dus 16 + 8 = 24." }
  },
  {
    id: "N6_s_30", category: "N6", level: 2,
    text: { fr: "Calcule : 2⁴ × 2", en: "Calculate: 2⁴ × 2", nl: "Bereken: 2⁴ × 2" },
    answer: 32, tolerance: 0,
    hint: { fr: "2⁴ = 16, puis 16 × 2 = 32.", en: "2⁴ = 16, then 16 × 2 = 32.", nl: "2⁴ = 16, dan 16 × 2 = 32." }
  },
  {
    id: "N6_s_31", category: "N6", level: 2,
    text: { fr: "Calcule : 5² - 4²", en: "Calculate: 5² - 4²", nl: "Bereken: 5² - 4²" },
    answer: 9, tolerance: 0,
    hint: { fr: "5² = 25 et 4² = 16. Donc 25 - 16 = 9.", en: "5² = 25 and 4² = 16. So 25 - 16 = 9.", nl: "5² = 25 en 4² = 16. Dus 25 - 16 = 9." }
  },
  {
    id: "N6_s_32", category: "N6", level: 2,
    text: { fr: "Calcule : 3³ ÷ 3", en: "Calculate: 3³ ÷ 3", nl: "Bereken: 3³ ÷ 3" },
    answer: 9, tolerance: 0,
    hint: { fr: "3³ = 27, puis 27 ÷ 3 = 9.", en: "3³ = 27, then 27 ÷ 3 = 9.", nl: "3³ = 27, dan 27 ÷ 3 = 9." }
  },
  {
    id: "N6_s_33", category: "N6", level: 2,
    text: { fr: "Calcule : 10² ÷ 5²", en: "Calculate: 10² ÷ 5²", nl: "Bereken: 10² ÷ 5²" },
    answer: 4, tolerance: 0,
    hint: { fr: "10² = 100 et 5² = 25. Donc 100 ÷ 25 = 4.", en: "10² = 100 and 5² = 25. So 100 ÷ 25 = 4.", nl: "10² = 100 en 5² = 25. Dus 100 ÷ 25 = 4." }
  },
  {
    id: "N6_s_34", category: "N6", level: 2,
    text: { fr: "Calcule : 2³ + 3²", en: "Calculate: 2³ + 3²", nl: "Bereken: 2³ + 3²" },
    answer: 17, tolerance: 0,
    hint: { fr: "2³ = 8 et 3² = 9. Donc 8 + 9 = 17.", en: "2³ = 8 and 3² = 9. So 8 + 9 = 17.", nl: "2³ = 8 en 3² = 9. Dus 8 + 9 = 17." }
  },
  {
    id: "N6_s_35", category: "N6", level: 2,
    text: { fr: "Calcule : 6² - 2⁵", en: "Calculate: 6² - 2⁵", nl: "Bereken: 6² - 2⁵" },
    answer: 4, tolerance: 0,
    hint: { fr: "6² = 36 et 2⁵ = 32. Donc 36 - 32 = 4.", en: "6² = 36 and 2⁵ = 32. So 36 - 32 = 4.", nl: "6² = 36 en 2⁵ = 32. Dus 36 - 32 = 4." }
  },
  {
    id: "N6_s_36", category: "N6", level: 2,
    text: { fr: "Calcule : 4² × 2²", en: "Calculate: 4² × 2²", nl: "Bereken: 4² × 2²" },
    answer: 64, tolerance: 0,
    hint: { fr: "4² = 16 et 2² = 4. Donc 16 × 4 = 64.", en: "4² = 16 and 2² = 4. So 16 × 4 = 64.", nl: "4² = 16 en 2² = 4. Dus 16 × 4 = 64." }
  },
  {
    id: "N6_s_37", category: "N6", level: 2,
    text: { fr: "Calcule : 7² - 5²", en: "Calculate: 7² - 5²", nl: "Bereken: 7² - 5²" },
    answer: 24, tolerance: 0,
    hint: { fr: "7² = 49 et 5² = 25. Donc 49 - 25 = 24.", en: "7² = 49 and 5² = 25. So 49 - 25 = 24.", nl: "7² = 49 en 5² = 25. Dus 49 - 25 = 24." }
  },
  {
    id: "N6_s_38", category: "N6", level: 2,
    text: { fr: "Calcule : 2³ × 3²", en: "Calculate: 2³ × 3²", nl: "Bereken: 2³ × 3²" },
    answer: 72, tolerance: 0,
    hint: { fr: "2³ = 8 et 3² = 9. Donc 8 × 9 = 72.", en: "2³ = 8 and 3² = 9. So 8 × 9 = 72.", nl: "2³ = 8 en 3² = 9. Dus 8 × 9 = 72." }
  },
  {
    id: "N6_s_39", category: "N6", level: 2,
    text: { fr: "Calcule : 10³ ÷ 10²", en: "Calculate: 10³ ÷ 10²", nl: "Bereken: 10³ ÷ 10²" },
    answer: 10, tolerance: 0,
    hint: { fr: "10³ = 1000 et 10² = 100. Donc 1000 ÷ 100 = 10.", en: "10³ = 1000 and 10² = 100. So 1000 ÷ 100 = 10.", nl: "10³ = 1000 en 10² = 100. Dus 1000 ÷ 100 = 10." }
  },
  {
    id: "N6_s_71", category: "N6", level: 2,
    text: { fr: "Calcule : 3³ + 2³", en: "Calculate: 3³ + 2³", nl: "Bereken: 3³ + 2³" },
    answer: 35, tolerance: 0,
    hint: { fr: "3³ = 27 et 2³ = 8. Donc 27 + 8 = 35.", en: "3³ = 27 and 2³ = 8. So 27 + 8 = 35.", nl: "3³ = 27 en 2³ = 8. Dus 27 + 8 = 35." }
  },
  {
    id: "N6_s_72", category: "N6", level: 2,
    text: { fr: "Calcule : 8² - 7²", en: "Calculate: 8² - 7²", nl: "Bereken: 8² - 7²" },
    answer: 15, tolerance: 0,
    hint: { fr: "8² = 64 et 7² = 49. Donc 64 - 49 = 15.", en: "8² = 64 and 7² = 49. So 64 - 49 = 15.", nl: "8² = 64 en 7² = 49. Dus 64 - 49 = 15." }
  },
  {
    id: "N6_s_73", category: "N6", level: 2,
    text: { fr: "Calcule : 3² × 2²", en: "Calculate: 3² × 2²", nl: "Bereken: 3² × 2²" },
    answer: 36, tolerance: 0,
    hint: { fr: "3² = 9 et 2² = 4. Donc 9 × 4 = 36.", en: "3² = 9 and 2² = 4. So 9 × 4 = 36.", nl: "3² = 9 en 2² = 4. Dus 9 × 4 = 36." }
  },
  {
    id: "N6_s_74", category: "N6", level: 2,
    text: { fr: "Calcule : 5³ ÷ 5²", en: "Calculate: 5³ ÷ 5²", nl: "Bereken: 5³ ÷ 5²" },
    answer: 5, tolerance: 0,
    hint: { fr: "5³ = 125 et 5² = 25. Donc 125 ÷ 25 = 5.", en: "5³ = 125 and 5² = 25. So 125 ÷ 25 = 5.", nl: "5³ = 125 en 5² = 25. Dus 125 ÷ 25 = 5." }
  },
  {
    id: "N6_s_75", category: "N6", level: 2,
    text: { fr: "Calcule : 6² + 8²", en: "Calculate: 6² + 8²", nl: "Bereken: 6² + 8²" },
    answer: 100, tolerance: 0,
    hint: { fr: "6² = 36 et 8² = 64. Donc 36 + 64 = 100.", en: "6² = 36 and 8² = 64. So 36 + 64 = 100.", nl: "6² = 36 en 8² = 64. Dus 36 + 64 = 100." }
  },
  {
    id: "N6_s_76", category: "N6", level: 2,
    text: { fr: "Calcule : 9² - 3³", en: "Calculate: 9² - 3³", nl: "Bereken: 9² - 3³" },
    answer: 54, tolerance: 0,
    hint: { fr: "9² = 81 et 3³ = 27. Donc 81 - 27 = 54.", en: "9² = 81 and 3³ = 27. So 81 - 27 = 54.", nl: "9² = 81 en 3³ = 27. Dus 81 - 27 = 54." }
  },
  {
    id: "N6_s_77", category: "N6", level: 2,
    text: { fr: "Calcule : 2⁴ + 3³", en: "Calculate: 2⁴ + 3³", nl: "Bereken: 2⁴ + 3³" },
    answer: 43, tolerance: 0,
    hint: { fr: "2⁴ = 16 et 3³ = 27. Donc 16 + 27 = 43.", en: "2⁴ = 16 and 3³ = 27. So 16 + 27 = 43.", nl: "2⁴ = 16 en 3³ = 27. Dus 16 + 27 = 43." }
  },
  {
    id: "N6_s_78", category: "N6", level: 2,
    text: { fr: "Calcule : 5² × 2³", en: "Calculate: 5² × 2³", nl: "Bereken: 5² × 2³" },
    answer: 200, tolerance: 0,
    hint: { fr: "5² = 25 et 2³ = 8. Donc 25 × 8 = 200.", en: "5² = 25 and 2³ = 8. So 25 × 8 = 200.", nl: "5² = 25 en 2³ = 8. Dus 25 × 8 = 200." }
  },
  {
    id: "N6_s_79", category: "N6", level: 2,
    text: { fr: "Calcule : 10² - 6²", en: "Calculate: 10² - 6²", nl: "Bereken: 10² - 6²" },
    answer: 64, tolerance: 0,
    hint: { fr: "10² = 100 et 6² = 36. Donc 100 - 36 = 64.", en: "10² = 100 and 6² = 36. So 100 - 36 = 64.", nl: "10² = 100 en 6² = 36. Dus 100 - 36 = 64." }
  },
  {
    id: "N6_s_80", category: "N6", level: 2,
    text: { fr: "Calcule : 2⁴ × 3", en: "Calculate: 2⁴ × 3", nl: "Bereken: 2⁴ × 3" },
    answer: 48, tolerance: 0,
    hint: { fr: "2⁴ = 16, puis 16 × 3 = 48.", en: "2⁴ = 16, then 16 × 3 = 48.", nl: "2⁴ = 16, dan 16 × 3 = 48." }
  },
  {
    id: "N6_s_81", category: "N6", level: 2,
    text: { fr: "Calcule : 4³ ÷ 2³", en: "Calculate: 4³ ÷ 2³", nl: "Bereken: 4³ ÷ 2³" },
    answer: 8, tolerance: 0,
    hint: { fr: "4³ = 64 et 2³ = 8. Donc 64 ÷ 8 = 8.", en: "4³ = 64 and 2³ = 8. So 64 ÷ 8 = 8.", nl: "4³ = 64 en 2³ = 8. Dus 64 ÷ 8 = 8." }
  },
  {
    id: "N6_s_82", category: "N6", level: 2,
    text: { fr: "Calcule : 11² - 10²", en: "Calculate: 11² - 10²", nl: "Bereken: 11² - 10²" },
    answer: 21, tolerance: 0,
    hint: { fr: "11² = 121 et 10² = 100. Donc 121 - 100 = 21.", en: "11² = 121 and 10² = 100. So 121 - 100 = 21.", nl: "11² = 121 en 10² = 100. Dus 121 - 100 = 21." }
  },
  {
    id: "N6_s_83", category: "N6", level: 2,
    text: { fr: "Calcule : 3³ × 2", en: "Calculate: 3³ × 2", nl: "Bereken: 3³ × 2" },
    answer: 54, tolerance: 0,
    hint: { fr: "3³ = 27, puis 27 × 2 = 54.", en: "3³ = 27, then 27 × 2 = 54.", nl: "3³ = 27, dan 27 × 2 = 54." }
  },
  {
    id: "N6_s_84", category: "N6", level: 2,
    text: { fr: "Calcule : 6² ÷ 3²", en: "Calculate: 6² ÷ 3²", nl: "Bereken: 6² ÷ 3²" },
    answer: 4, tolerance: 0,
    hint: { fr: "6² = 36 et 3² = 9. Donc 36 ÷ 9 = 4.", en: "6² = 36 and 3² = 9. So 36 ÷ 9 = 4.", nl: "6² = 36 en 3² = 9. Dus 36 ÷ 9 = 4." }
  },
  {
    id: "N6_s_85", category: "N6", level: 2,
    text: { fr: "Calcule : 4² + 3² + 2²", en: "Calculate: 4² + 3² + 2²", nl: "Bereken: 4² + 3² + 2²" },
    answer: 29, tolerance: 0,
    hint: { fr: "4² = 16, 3² = 9 et 2² = 4. Donc 16 + 9 + 4 = 29.", en: "4² = 16, 3² = 9 and 2² = 4. So 16 + 9 + 4 = 29.", nl: "4² = 16, 3² = 9 en 2² = 4. Dus 16 + 9 + 4 = 29." }
  },
  {
    id: "N6_s_86", category: "N6", level: 2,
    text: { fr: "Calcule : 12² ÷ 4²", en: "Calculate: 12² ÷ 4²", nl: "Bereken: 12² ÷ 4²" },
    answer: 9, tolerance: 0,
    hint: { fr: "12² = 144 et 4² = 16. Donc 144 ÷ 16 = 9.", en: "12² = 144 and 4² = 16. So 144 ÷ 16 = 9.", nl: "12² = 144 en 4² = 16. Dus 144 ÷ 16 = 9." }
  },
  {
    id: "N6_s_87", category: "N6", level: 2,
    text: { fr: "Calcule : 2³ × 5", en: "Calculate: 2³ × 5", nl: "Bereken: 2³ × 5" },
    answer: 40, tolerance: 0,
    hint: { fr: "2³ = 8, puis 8 × 5 = 40.", en: "2³ = 8, then 8 × 5 = 40.", nl: "2³ = 8, dan 8 × 5 = 40." }
  },
  {
    id: "N6_s_88", category: "N6", level: 2,
    text: { fr: "Calcule : 5³ - 4³", en: "Calculate: 5³ - 4³", nl: "Bereken: 5³ - 4³" },
    answer: 61, tolerance: 0,
    hint: { fr: "5³ = 125 et 4³ = 64. Donc 125 - 64 = 61.", en: "5³ = 125 and 4³ = 64. So 125 - 64 = 61.", nl: "5³ = 125 en 4³ = 64. Dus 125 - 64 = 61." }
  },
  {
    id: "N6_s_89", category: "N6", level: 2,
    text: { fr: "Calcule : 3² × 4²", en: "Calculate: 3² × 4²", nl: "Bereken: 3² × 4²" },
    answer: 144, tolerance: 0,
    hint: { fr: "3² = 9 et 4² = 16. Donc 9 × 16 = 144.", en: "3² = 9 and 4² = 16. So 9 × 16 = 144.", nl: "3² = 9 en 4² = 16. Dus 9 × 16 = 144." }
  },
  {
    id: "N6_s_90", category: "N6", level: 2,
    text: { fr: "Calcule : 2⁴ + 2³ + 2²", en: "Calculate: 2⁴ + 2³ + 2²", nl: "Bereken: 2⁴ + 2³ + 2²" },
    answer: 28, tolerance: 0,
    hint: { fr: "2⁴ = 16, 2³ = 8 et 2² = 4. Donc 16 + 8 + 4 = 28.", en: "2⁴ = 16, 2³ = 8 and 2² = 4. So 16 + 8 + 4 = 28.", nl: "2⁴ = 16, 2³ = 8 en 2² = 4. Dus 16 + 8 + 4 = 28." }
  },

  // ───────────────────────────────────────────────────────────────────────────
  // Level 3 — Negative bases, power of powers, mixed (37 questions: s_11–s_15, s_40–s_50, s_91–s_111)
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: "N6_s_11", category: "N6", level: 3,
    text: { fr: "Calcule : (-3)³", en: "Calculate: (-3)³", nl: "Bereken: (-3)³" },
    answer: -27, tolerance: 0,
    hint: { fr: "(-3)³ = (-3) × (-3) × (-3) = 9 × (-3) = -27", en: "(-3)³ = (-3) × (-3) × (-3) = 9 × (-3) = -27", nl: "(-3)³ = (-3) × (-3) × (-3) = 9 × (-3) = -27" }
  },
  {
    id: "N6_s_12", category: "N6", level: 3,
    text: { fr: "Calcule : (-2)⁴", en: "Calculate: (-2)⁴", nl: "Bereken: (-2)⁴" },
    answer: 16, tolerance: 0,
    hint: { fr: "Exposant pair : le résultat est positif. (-2)⁴ = 16.", en: "Even exponent: result is positive. (-2)⁴ = 16.", nl: "Even exponent: resultaat is positief. (-2)⁴ = 16." }
  },
  {
    id: "N6_s_13", category: "N6", level: 3,
    text: { fr: "Calcule : (2³)²", en: "Calculate: (2³)²", nl: "Bereken: (2³)²" },
    answer: 64, tolerance: 0,
    hint: { fr: "2³ = 8, puis 8² = 64.", en: "2³ = 8, then 8² = 64.", nl: "2³ = 8, dan 8² = 64." }
  },
  {
    id: "N6_s_14", category: "N6", level: 3,
    text: { fr: "Calcule : (-5)² - 3³", en: "Calculate: (-5)² - 3³", nl: "Bereken: (-5)² - 3³" },
    answer: -2, tolerance: 0,
    hint: { fr: "(-5)² = 25 et 3³ = 27. Donc 25 - 27 = -2.", en: "(-5)² = 25 and 3³ = 27. So 25 - 27 = -2.", nl: "(-5)² = 25 en 3³ = 27. Dus 25 - 27 = -2." }
  },
  {
    id: "N6_s_15", category: "N6", level: 3,
    text: { fr: "Calcule : 2⁴ + (-3)²", en: "Calculate: 2⁴ + (-3)²", nl: "Bereken: 2⁴ + (-3)²" },
    answer: 25, tolerance: 0,
    hint: { fr: "2⁴ = 16 et (-3)² = 9. Donc 16 + 9 = 25.", en: "2⁴ = 16 and (-3)² = 9. So 16 + 9 = 25.", nl: "2⁴ = 16 en (-3)² = 9. Dus 16 + 9 = 25." }
  },
  {
    id: "N6_s_40", category: "N6", level: 3,
    text: { fr: "Calcule : (-2)³", en: "Calculate: (-2)³", nl: "Bereken: (-2)³" },
    answer: -8, tolerance: 0,
    hint: { fr: "(-2)³ = (-2) × (-2) × (-2) = 4 × (-2) = -8", en: "(-2)³ = (-2) × (-2) × (-2) = 4 × (-2) = -8", nl: "(-2)³ = (-2) × (-2) × (-2) = 4 × (-2) = -8" }
  },
  {
    id: "N6_s_41", category: "N6", level: 3,
    text: { fr: "Calcule : (-1)⁵", en: "Calculate: (-1)⁵", nl: "Bereken: (-1)⁵" },
    answer: -1, tolerance: 0,
    hint: { fr: "Exposant impair : (-1)⁵ = -1.", en: "Odd exponent: (-1)⁵ = -1.", nl: "Oneven exponent: (-1)⁵ = -1." }
  },
  {
    id: "N6_s_42", category: "N6", level: 3,
    text: { fr: "Calcule : (-4)²", en: "Calculate: (-4)²", nl: "Bereken: (-4)²" },
    answer: 16, tolerance: 0,
    hint: { fr: "Exposant pair : (-4)² = (-4) × (-4) = 16.", en: "Even exponent: (-4)² = (-4) × (-4) = 16.", nl: "Even exponent: (-4)² = (-4) × (-4) = 16." }
  },
  {
    id: "N6_s_43", category: "N6", level: 3,
    text: { fr: "Calcule : (3²)³", en: "Calculate: (3²)³", nl: "Bereken: (3²)³" },
    answer: 729, tolerance: 0,
    hint: { fr: "3² = 9, puis 9³ = 9 × 9 × 9 = 729.", en: "3² = 9, then 9³ = 9 × 9 × 9 = 729.", nl: "3² = 9, dan 9³ = 9 × 9 × 9 = 729." }
  },
  {
    id: "N6_s_44", category: "N6", level: 3,
    text: { fr: "Calcule : (-2)⁵", en: "Calculate: (-2)⁵", nl: "Bereken: (-2)⁵" },
    answer: -32, tolerance: 0,
    hint: { fr: "Exposant impair : (-2)⁵ = -(2⁵) = -32.", en: "Odd exponent: (-2)⁵ = -(2⁵) = -32.", nl: "Oneven exponent: (-2)⁵ = -(2⁵) = -32." }
  },
  {
    id: "N6_s_45", category: "N6", level: 3,
    text: { fr: "Calcule : (-3)² + (-2)³", en: "Calculate: (-3)² + (-2)³", nl: "Bereken: (-3)² + (-2)³" },
    answer: 1, tolerance: 0,
    hint: { fr: "(-3)² = 9 et (-2)³ = -8. Donc 9 + (-8) = 1.", en: "(-3)² = 9 and (-2)³ = -8. So 9 + (-8) = 1.", nl: "(-3)² = 9 en (-2)³ = -8. Dus 9 + (-8) = 1." }
  },
  {
    id: "N6_s_46", category: "N6", level: 3,
    text: { fr: "Calcule : (5²)²", en: "Calculate: (5²)²", nl: "Bereken: (5²)²" },
    answer: 625, tolerance: 0,
    hint: { fr: "5² = 25, puis 25² = 625.", en: "5² = 25, then 25² = 625.", nl: "5² = 25, dan 25² = 625." }
  },
  {
    id: "N6_s_47", category: "N6", level: 3,
    text: { fr: "Calcule : (-4)³", en: "Calculate: (-4)³", nl: "Bereken: (-4)³" },
    answer: -64, tolerance: 0,
    hint: { fr: "(-4)³ = (-4) × (-4) × (-4) = 16 × (-4) = -64.", en: "(-4)³ = (-4) × (-4) × (-4) = 16 × (-4) = -64.", nl: "(-4)³ = (-4) × (-4) × (-4) = 16 × (-4) = -64." }
  },
  {
    id: "N6_s_48", category: "N6", level: 3,
    text: { fr: "Calcule : (-1)⁴ + (-1)³", en: "Calculate: (-1)⁴ + (-1)³", nl: "Bereken: (-1)⁴ + (-1)³" },
    answer: 0, tolerance: 0,
    hint: { fr: "(-1)⁴ = 1 et (-1)³ = -1. Donc 1 + (-1) = 0.", en: "(-1)⁴ = 1 and (-1)³ = -1. So 1 + (-1) = 0.", nl: "(-1)⁴ = 1 en (-1)³ = -1. Dus 1 + (-1) = 0." }
  },
  {
    id: "N6_s_49", category: "N6", level: 3,
    text: { fr: "Calcule : 3⁴ - (-2)⁴", en: "Calculate: 3⁴ - (-2)⁴", nl: "Bereken: 3⁴ - (-2)⁴" },
    answer: 65, tolerance: 0,
    hint: { fr: "3⁴ = 81 et (-2)⁴ = 16. Donc 81 - 16 = 65.", en: "3⁴ = 81 and (-2)⁴ = 16. So 81 - 16 = 65.", nl: "3⁴ = 81 en (-2)⁴ = 16. Dus 81 - 16 = 65." }
  },
  {
    id: "N6_s_50", category: "N6", level: 3,
    text: { fr: "Calcule : (-6)² + (-2)⁵", en: "Calculate: (-6)² + (-2)⁵", nl: "Bereken: (-6)² + (-2)⁵" },
    answer: 4, tolerance: 0,
    hint: { fr: "(-6)² = 36 et (-2)⁵ = -32. Donc 36 + (-32) = 4.", en: "(-6)² = 36 and (-2)⁵ = -32. So 36 + (-32) = 4.", nl: "(-6)² = 36 en (-2)⁵ = -32. Dus 36 + (-32) = 4." }
  },
  {
    id: "N6_s_91", category: "N6", level: 3,
    text: { fr: "Calcule : (-5)³", en: "Calculate: (-5)³", nl: "Bereken: (-5)³" },
    answer: -125, tolerance: 0,
    hint: { fr: "(-5)³ = (-5) × (-5) × (-5) = 25 × (-5) = -125", en: "(-5)³ = (-5) × (-5) × (-5) = 25 × (-5) = -125", nl: "(-5)³ = (-5) × (-5) × (-5) = 25 × (-5) = -125" }
  },
  {
    id: "N6_s_92", category: "N6", level: 3,
    text: { fr: "Calcule : (-6)²", en: "Calculate: (-6)²", nl: "Bereken: (-6)²" },
    answer: 36, tolerance: 0,
    hint: { fr: "Exposant pair : (-6)² = (-6) × (-6) = 36.", en: "Even exponent: (-6)² = (-6) × (-6) = 36.", nl: "Even exponent: (-6)² = (-6) × (-6) = 36." }
  },
  {
    id: "N6_s_93", category: "N6", level: 3,
    text: { fr: "Calcule : (-7)²", en: "Calculate: (-7)²", nl: "Bereken: (-7)²" },
    answer: 49, tolerance: 0,
    hint: { fr: "Exposant pair : (-7)² = (-7) × (-7) = 49.", en: "Even exponent: (-7)² = (-7) × (-7) = 49.", nl: "Even exponent: (-7)² = (-7) × (-7) = 49." }
  },
  {
    id: "N6_s_94", category: "N6", level: 3,
    text: { fr: "Calcule : (-3)⁴", en: "Calculate: (-3)⁴", nl: "Bereken: (-3)⁴" },
    answer: 81, tolerance: 0,
    hint: { fr: "Exposant pair : (-3)⁴ = 3⁴ = 81.", en: "Even exponent: (-3)⁴ = 3⁴ = 81.", nl: "Even exponent: (-3)⁴ = 3⁴ = 81." }
  },
  {
    id: "N6_s_95", category: "N6", level: 3,
    text: { fr: "Calcule : (-2)⁴ + (-2)³", en: "Calculate: (-2)⁴ + (-2)³", nl: "Bereken: (-2)⁴ + (-2)³" },
    answer: 8, tolerance: 0,
    hint: { fr: "(-2)⁴ = 16 et (-2)³ = -8. Donc 16 + (-8) = 8.", en: "(-2)⁴ = 16 and (-2)³ = -8. So 16 + (-8) = 8.", nl: "(-2)⁴ = 16 en (-2)³ = -8. Dus 16 + (-8) = 8." }
  },
  {
    id: "N6_s_96", category: "N6", level: 3,
    text: { fr: "Calcule : (2²)³", en: "Calculate: (2²)³", nl: "Bereken: (2²)³" },
    answer: 64, tolerance: 0,
    hint: { fr: "2² = 4, puis 4³ = 4 × 4 × 4 = 64.", en: "2² = 4, then 4³ = 4 × 4 × 4 = 64.", nl: "2² = 4, dan 4³ = 4 × 4 × 4 = 64." }
  },
  {
    id: "N6_s_97", category: "N6", level: 3,
    text: { fr: "Calcule : (4²)²", en: "Calculate: (4²)²", nl: "Bereken: (4²)²" },
    answer: 256, tolerance: 0,
    hint: { fr: "4² = 16, puis 16² = 256.", en: "4² = 16, then 16² = 256.", nl: "4² = 16, dan 16² = 256." }
  },
  {
    id: "N6_s_98", category: "N6", level: 3,
    text: { fr: "Calcule : (-10)³", en: "Calculate: (-10)³", nl: "Bereken: (-10)³" },
    answer: -1000, tolerance: 0,
    hint: { fr: "(-10)³ = (-10) × (-10) × (-10) = 100 × (-10) = -1000", en: "(-10)³ = (-10) × (-10) × (-10) = 100 × (-10) = -1,000", nl: "(-10)³ = (-10) × (-10) × (-10) = 100 × (-10) = -1.000" }
  },
  {
    id: "N6_s_99", category: "N6", level: 3,
    text: { fr: "Calcule : (-5)² + (-3)³", en: "Calculate: (-5)² + (-3)³", nl: "Bereken: (-5)² + (-3)³" },
    answer: -2, tolerance: 0,
    hint: { fr: "(-5)² = 25 et (-3)³ = -27. Donc 25 + (-27) = -2.", en: "(-5)² = 25 and (-3)³ = -27. So 25 + (-27) = -2.", nl: "(-5)² = 25 en (-3)³ = -27. Dus 25 + (-27) = -2." }
  },
  {
    id: "N6_s_100", category: "N6", level: 3,
    text: { fr: "Calcule : (-1)⁴ × (-1)³", en: "Calculate: (-1)⁴ × (-1)³", nl: "Bereken: (-1)⁴ × (-1)³" },
    answer: -1, tolerance: 0,
    hint: { fr: "(-1)⁴ = 1 et (-1)³ = -1. Donc 1 × (-1) = -1.", en: "(-1)⁴ = 1 and (-1)³ = -1. So 1 × (-1) = -1.", nl: "(-1)⁴ = 1 en (-1)³ = -1. Dus 1 × (-1) = -1." }
  },
  {
    id: "N6_s_101", category: "N6", level: 3,
    text: { fr: "Calcule : (10²)²", en: "Calculate: (10²)²", nl: "Bereken: (10²)²" },
    answer: 10000, tolerance: 0,
    hint: { fr: "10² = 100, puis 100² = 10 000.", en: "10² = 100, then 100² = 10,000.", nl: "10² = 100, dan 100² = 10.000." }
  },
  {
    id: "N6_s_102", category: "N6", level: 3,
    text: { fr: "Calcule : (-3)³ + 5²", en: "Calculate: (-3)³ + 5²", nl: "Bereken: (-3)³ + 5²" },
    answer: -2, tolerance: 0,
    hint: { fr: "(-3)³ = -27 et 5² = 25. Donc -27 + 25 = -2.", en: "(-3)³ = -27 and 5² = 25. So -27 + 25 = -2.", nl: "(-3)³ = -27 en 5² = 25. Dus -27 + 25 = -2." }
  },
  {
    id: "N6_s_103", category: "N6", level: 3,
    text: { fr: "Calcule : (-2)³ × (-3)²", en: "Calculate: (-2)³ × (-3)²", nl: "Bereken: (-2)³ × (-3)²" },
    answer: -72, tolerance: 0,
    hint: { fr: "(-2)³ = -8 et (-3)² = 9. Donc (-8) × 9 = -72.", en: "(-2)³ = -8 and (-3)² = 9. So (-8) × 9 = -72.", nl: "(-2)³ = -8 en (-3)² = 9. Dus (-8) × 9 = -72." }
  },
  {
    id: "N6_s_104", category: "N6", level: 3,
    text: { fr: "Calcule : (-8)²", en: "Calculate: (-8)²", nl: "Bereken: (-8)²" },
    answer: 64, tolerance: 0,
    hint: { fr: "Exposant pair : (-8)² = (-8) × (-8) = 64.", en: "Even exponent: (-8)² = (-8) × (-8) = 64.", nl: "Even exponent: (-8)² = (-8) × (-8) = 64." }
  },
  {
    id: "N6_s_105", category: "N6", level: 3,
    text: { fr: "Calcule : (2⁴)²", en: "Calculate: (2⁴)²", nl: "Bereken: (2⁴)²" },
    answer: 256, tolerance: 0,
    hint: { fr: "2⁴ = 16, puis 16² = 256.", en: "2⁴ = 16, then 16² = 256.", nl: "2⁴ = 16, dan 16² = 256." }
  },
  {
    id: "N6_s_106", category: "N6", level: 3,
    text: { fr: "Calcule : (-4)² + (-3)³", en: "Calculate: (-4)² + (-3)³", nl: "Bereken: (-4)² + (-3)³" },
    answer: -11, tolerance: 0,
    hint: { fr: "(-4)² = 16 et (-3)³ = -27. Donc 16 + (-27) = -11.", en: "(-4)² = 16 and (-3)³ = -27. So 16 + (-27) = -11.", nl: "(-4)² = 16 en (-3)³ = -27. Dus 16 + (-27) = -11." }
  },
  {
    id: "N6_s_107", category: "N6", level: 3,
    text: { fr: "Calcule : (-6)³", en: "Calculate: (-6)³", nl: "Bereken: (-6)³" },
    answer: -216, tolerance: 0,
    hint: { fr: "(-6)³ = (-6) × (-6) × (-6) = 36 × (-6) = -216", en: "(-6)³ = (-6) × (-6) × (-6) = 36 × (-6) = -216", nl: "(-6)³ = (-6) × (-6) × (-6) = 36 × (-6) = -216" }
  },
  {
    id: "N6_s_108", category: "N6", level: 3,
    text: { fr: "Calcule : (-2)⁴ × (-3)", en: "Calculate: (-2)⁴ × (-3)", nl: "Bereken: (-2)⁴ × (-3)" },
    answer: -48, tolerance: 0,
    hint: { fr: "(-2)⁴ = 16, puis 16 × (-3) = -48.", en: "(-2)⁴ = 16, then 16 × (-3) = -48.", nl: "(-2)⁴ = 16, dan 16 × (-3) = -48." }
  },
  {
    id: "N6_s_109", category: "N6", level: 3,
    text: { fr: "Calcule : (-3)² × (-2)²", en: "Calculate: (-3)² × (-2)²", nl: "Bereken: (-3)² × (-2)²" },
    answer: 36, tolerance: 0,
    hint: { fr: "(-3)² = 9 et (-2)² = 4. Donc 9 × 4 = 36.", en: "(-3)² = 9 and (-2)² = 4. So 9 × 4 = 36.", nl: "(-3)² = 9 en (-2)² = 4. Dus 9 × 4 = 36." }
  },
  {
    id: "N6_s_110", category: "N6", level: 3,
    text: { fr: "Calcule : (3³)² - (2⁴)²", en: "Calculate: (3³)² - (2⁴)²", nl: "Bereken: (3³)² - (2⁴)²" },
    answer: 473, tolerance: 0,
    hint: { fr: "3³ = 27, puis 27² = 729. 2⁴ = 16, puis 16² = 256. Donc 729 - 256 = 473.", en: "3³ = 27, then 27² = 729. 2⁴ = 16, then 16² = 256. So 729 - 256 = 473.", nl: "3³ = 27, dan 27² = 729. 2⁴ = 16, dan 16² = 256. Dus 729 - 256 = 473." }
  },
  {
    id: "N6_s_111", category: "N6", level: 3,
    text: { fr: "Calcule : (-2)⁵ + (-3)³", en: "Calculate: (-2)⁵ + (-3)³", nl: "Bereken: (-2)⁵ + (-3)³" },
    answer: -59, tolerance: 0,
    hint: { fr: "(-2)⁵ = -32 et (-3)³ = -27. Donc -32 + (-27) = -59.", en: "(-2)⁵ = -32 and (-3)³ = -27. So -32 + (-27) = -59.", nl: "(-2)⁵ = -32 en (-3)³ = -27. Dus -32 + (-27) = -59." }
  },
  {
    id: "N6_s_112", category: "N6", level: 1,
    text: { fr: "Calcule : 7²", en: "Calculate: 7²", nl: "Bereken: 7²" },
    answer: 49, tolerance: 0,
    hint: { fr: "7² = 7 × 7 = 49.", en: "7² = 7 × 7 = 49.", nl: "7² = 7 × 7 = 49." }
  },
  {
    id: "N6_s_113", category: "N6", level: 1,
    text: { fr: "Calcule : 4³", en: "Calculate: 4³", nl: "Bereken: 4³" },
    answer: 64, tolerance: 0,
    hint: { fr: "4³ = 4 × 4 × 4 = 64.", en: "4³ = 4 × 4 × 4 = 64.", nl: "4³ = 4 × 4 × 4 = 64." }
  },
  {
    id: "N6_s_114", category: "N6", level: 2,
    text: { fr: "Calcule : 3² + 4²", en: "Calculate: 3² + 4²", nl: "Bereken: 3² + 4²" },
    answer: 25, tolerance: 0,
    hint: { fr: "3² = 9 et 4² = 16. Donc 9 + 16 = 25.", en: "3² = 9 and 4² = 16. So 9 + 16 = 25.", nl: "3² = 9 en 4² = 16. Dus 9 + 16 = 25." }
  },
  {
    id: "N6_s_115", category: "N6", level: 2,
    text: { fr: "Calcule : 2⁵ - 3²", en: "Calculate: 2⁵ - 3²", nl: "Bereken: 2⁵ - 3²" },
    answer: 23, tolerance: 0,
    hint: { fr: "2⁵ = 32 et 3² = 9. Donc 32 - 9 = 23.", en: "2⁵ = 32 and 3² = 9. So 32 - 9 = 23.", nl: "2⁵ = 32 en 3² = 9. Dus 32 - 9 = 23." }
  },
  {
    id: "N6_s_116", category: "N6", level: 3,
    text: { fr: "Calcule : (-4)³ + 2⁶", en: "Calculate: (-4)³ + 2⁶", nl: "Bereken: (-4)³ + 2⁶" },
    answer: 0, tolerance: 0,
    hint: { fr: "(-4)³ = -64 et 2⁶ = 64. Donc -64 + 64 = 0.", en: "(-4)³ = -64 and 2⁶ = 64. So -64 + 64 = 0.", nl: "(-4)³ = -64 en 2⁶ = 64. Dus -64 + 64 = 0." }
  },
  {
    id: "N6_s_117", category: "N6", level: 3,
    text: { fr: "Calcule : (2³)² - (-5)²", en: "Calculate: (2³)² - (-5)²", nl: "Bereken: (2³)² - (-5)²" },
    answer: 39, tolerance: 0,
    hint: { fr: "2³ = 8, puis 8² = 64. (-5)² = 25. Donc 64 - 25 = 39.", en: "2³ = 8, then 8² = 64. (-5)² = 25. So 64 - 25 = 39.", nl: "2³ = 8, dan 8² = 64. (-5)² = 25. Dus 64 - 25 = 39." }
  },
];

export function generate(level = 1) {
  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const id = `N6_gen_${Date.now()}_${rand(100, 999)}`;
  if (level === 1) {
    const base = rand(2, 9); const exp = rand(2, 3);
    const answer = Math.pow(base, exp);
    const sup = exp === 2 ? '²' : '³';
    return { id, category: 'N6', level, text: { fr: `Calcule : ${base}${sup}`, en: `Calculate: ${base}${sup}`, nl: `Bereken: ${base}${sup}` }, answer, tolerance: 0 };
  }
  if (level === 2) {
    const a = rand(2, 5); const b = rand(2, 5);
    const ansA = a * a; const ansB = b * b;
    const answer = ansA + ansB;
    return { id, category: 'N6', level, text: { fr: `Calcule : ${a}² + ${b}²`, en: `Calculate: ${a}² + ${b}²`, nl: `Bereken: ${a}² + ${b}²` }, answer, tolerance: 0 };
  }
  const base = rand(2, 5); const exp = rand(2, 3);
  const neg = Math.random() < 0.5 ? -1 : 1;
  const answer = Math.pow(neg * base, exp);
  const baseStr = neg < 0 ? `(-${base})` : `${base}`;
  const sup = exp === 2 ? '²' : '³';
  return { id, category: 'N6', level, text: { fr: `Calcule : ${baseStr}${sup}`, en: `Calculate: ${baseStr}${sup}`, nl: `Bereken: ${baseStr}${sup}` }, answer, tolerance: 0 };
}
