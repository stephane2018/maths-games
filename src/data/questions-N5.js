// =============================================================================
// N5 - Nombres décimaux
// CE1D Belgian exam - Trilingual (FR / EN / NL)
// =============================================================================

export const questions = [
  // =========================================================================
  // Level 1 — Decimal addition/subtraction  (17 questions: s_1 – s_5, s_16 – s_27)
  // =========================================================================
  {
    id: "N5_s_1", category: "N5", level: 1,
    text: { fr: "Calcule : 3,5 + 2,7", en: "Calculate: 3.5 + 2.7", nl: "Bereken: 3,5 + 2,7" },
    answer: 6.2, tolerance: 0.01,
    hint: { fr: "Additionne les dixièmes, puis les unités.", en: "Add the tenths, then the units.", nl: "Tel de tienden op, dan de eenheden." }
  },
  {
    id: "N5_s_2", category: "N5", level: 1,
    text: { fr: "Calcule : 10,4 - 3,8", en: "Calculate: 10.4 - 3.8", nl: "Bereken: 10,4 - 3,8" },
    answer: 6.6, tolerance: 0.01,
    hint: { fr: "Soustrais les dixièmes, puis les unités.", en: "Subtract the tenths, then the units.", nl: "Trek de tienden af, dan de eenheden." }
  },
  {
    id: "N5_s_3", category: "N5", level: 1,
    text: { fr: "Calcule : 5,2 + 1,3", en: "Calculate: 5.2 + 1.3", nl: "Bereken: 5,2 + 1,3" },
    answer: 6.5, tolerance: 0.01,
    hint: { fr: "Aligne les virgules et additionne.", en: "Align the decimals and add.", nl: "Lijn de komma's uit en tel op." }
  },
  {
    id: "N5_s_4", category: "N5", level: 1,
    text: { fr: "Calcule : 8,9 - 4,5", en: "Calculate: 8.9 - 4.5", nl: "Bereken: 8,9 - 4,5" },
    answer: 4.4, tolerance: 0.01,
    hint: { fr: "Soustrais chiffre par chiffre.", en: "Subtract digit by digit.", nl: "Trek cijfer voor cijfer af." }
  },
  {
    id: "N5_s_5", category: "N5", level: 1,
    text: { fr: "Calcule : 12,6 + 3,4", en: "Calculate: 12.6 + 3.4", nl: "Bereken: 12,6 + 3,4" },
    answer: 16, tolerance: 0.01,
    hint: { fr: "0,6 + 0,4 = 1, plus 12 + 3 = 15.", en: "0.6 + 0.4 = 1, plus 12 + 3 = 15.", nl: "0,6 + 0,4 = 1, plus 12 + 3 = 15." }
  },
  {
    id: "N5_s_16", category: "N5", level: 1,
    text: { fr: "Calcule : 7,3 + 4,9", en: "Calculate: 7.3 + 4.9", nl: "Bereken: 7,3 + 4,9" },
    answer: 12.2, tolerance: 0.01,
    hint: { fr: "0,3 + 0,9 = 1,2. Retiens 1 et additionne les unités.", en: "0.3 + 0.9 = 1.2. Carry 1 and add the units.", nl: "0,3 + 0,9 = 1,2. Onthoud 1 en tel de eenheden op." }
  },
  {
    id: "N5_s_17", category: "N5", level: 1,
    text: { fr: "Calcule : 15,8 - 7,3", en: "Calculate: 15.8 - 7.3", nl: "Bereken: 15,8 - 7,3" },
    answer: 8.5, tolerance: 0.01,
    hint: { fr: "0,8 - 0,3 = 0,5. Puis 15 - 7 = 8.", en: "0.8 - 0.3 = 0.5. Then 15 - 7 = 8.", nl: "0,8 - 0,3 = 0,5. Dan 15 - 7 = 8." }
  },
  {
    id: "N5_s_18", category: "N5", level: 1,
    text: { fr: "Calcule : 6,4 + 8,8", en: "Calculate: 6.4 + 8.8", nl: "Bereken: 6,4 + 8,8" },
    answer: 15.2, tolerance: 0.01,
    hint: { fr: "0,4 + 0,8 = 1,2. Retiens 1 et additionne 6 + 8 = 14.", en: "0.4 + 0.8 = 1.2. Carry 1 and add 6 + 8 = 14.", nl: "0,4 + 0,8 = 1,2. Onthoud 1 en tel 6 + 8 = 14 op." }
  },
  {
    id: "N5_s_19", category: "N5", level: 1,
    text: { fr: "Calcule : 20,5 - 11,9", en: "Calculate: 20.5 - 11.9", nl: "Bereken: 20,5 - 11,9" },
    answer: 8.6, tolerance: 0.01,
    hint: { fr: "Emprunte 1 unité : 15 - 9 = 6 dixièmes, puis 19 - 11 = 8.", en: "Borrow 1 unit: 15 - 9 = 6 tenths, then 19 - 11 = 8.", nl: "Leen 1 eenheid: 15 - 9 = 6 tienden, dan 19 - 11 = 8." }
  },
  {
    id: "N5_s_20", category: "N5", level: 1,
    text: { fr: "Calcule : 9,7 + 3,6", en: "Calculate: 9.7 + 3.6", nl: "Bereken: 9,7 + 3,6" },
    answer: 13.3, tolerance: 0.01,
    hint: { fr: "0,7 + 0,6 = 1,3. Retiens 1 et additionne 9 + 3 = 12.", en: "0.7 + 0.6 = 1.3. Carry 1 and add 9 + 3 = 12.", nl: "0,7 + 0,6 = 1,3. Onthoud 1 en tel 9 + 3 = 12 op." }
  },
  {
    id: "N5_s_21", category: "N5", level: 1,
    text: { fr: "Calcule : 14,2 - 6,7", en: "Calculate: 14.2 - 6.7", nl: "Bereken: 14,2 - 6,7" },
    answer: 7.5, tolerance: 0.01,
    hint: { fr: "Emprunte 1 : 12 - 7 = 5 dixièmes. Puis 13 - 6 = 7.", en: "Borrow 1: 12 - 7 = 5 tenths. Then 13 - 6 = 7.", nl: "Leen 1: 12 - 7 = 5 tienden. Dan 13 - 6 = 7." }
  },
  {
    id: "N5_s_22", category: "N5", level: 1,
    text: { fr: "Calcule : 4,8 + 5,5", en: "Calculate: 4.8 + 5.5", nl: "Bereken: 4,8 + 5,5" },
    answer: 10.3, tolerance: 0.01,
    hint: { fr: "0,8 + 0,5 = 1,3. Retiens 1 et additionne 4 + 5 = 9.", en: "0.8 + 0.5 = 1.3. Carry 1 and add 4 + 5 = 9.", nl: "0,8 + 0,5 = 1,3. Onthoud 1 en tel 4 + 5 = 9 op." }
  },
  {
    id: "N5_s_23", category: "N5", level: 1,
    text: { fr: "Calcule : 25,3 - 18,6", en: "Calculate: 25.3 - 18.6", nl: "Bereken: 25,3 - 18,6" },
    answer: 6.7, tolerance: 0.01,
    hint: { fr: "Emprunte 1 : 13 - 6 = 7 dixièmes. Puis 24 - 18 = 6.", en: "Borrow 1: 13 - 6 = 7 tenths. Then 24 - 18 = 6.", nl: "Leen 1: 13 - 6 = 7 tienden. Dan 24 - 18 = 6." }
  },
  {
    id: "N5_s_24", category: "N5", level: 1,
    text: { fr: "Calcule : 1,9 + 3,4", en: "Calculate: 1.9 + 3.4", nl: "Bereken: 1,9 + 3,4" },
    answer: 5.3, tolerance: 0.01,
    hint: { fr: "0,9 + 0,4 = 1,3. Retiens 1 et additionne 1 + 3 = 4.", en: "0.9 + 0.4 = 1.3. Carry 1 and add 1 + 3 = 4.", nl: "0,9 + 0,4 = 1,3. Onthoud 1 en tel 1 + 3 = 4 op." }
  },
  {
    id: "N5_s_25", category: "N5", level: 1,
    text: { fr: "Calcule : 30,1 - 14,5", en: "Calculate: 30.1 - 14.5", nl: "Bereken: 30,1 - 14,5" },
    answer: 15.6, tolerance: 0.01,
    hint: { fr: "Emprunte 1 : 11 - 5 = 6 dixièmes. Puis 29 - 14 = 15.", en: "Borrow 1: 11 - 5 = 6 tenths. Then 29 - 14 = 15.", nl: "Leen 1: 11 - 5 = 6 tienden. Dan 29 - 14 = 15." }
  },
  {
    id: "N5_s_26", category: "N5", level: 1,
    text: { fr: "Calcule : 11,7 + 6,6", en: "Calculate: 11.7 + 6.6", nl: "Bereken: 11,7 + 6,6" },
    answer: 18.3, tolerance: 0.01,
    hint: { fr: "0,7 + 0,6 = 1,3. Retiens 1 et additionne 11 + 6 = 17.", en: "0.7 + 0.6 = 1.3. Carry 1 and add 11 + 6 = 17.", nl: "0,7 + 0,6 = 1,3. Onthoud 1 en tel 11 + 6 = 17 op." }
  },
  {
    id: "N5_s_27", category: "N5", level: 1,
    text: { fr: "Calcule : 18,4 - 9,9", en: "Calculate: 18.4 - 9.9", nl: "Bereken: 18,4 - 9,9" },
    answer: 8.5, tolerance: 0.01,
    hint: { fr: "Emprunte 1 : 14 - 9 = 5 dixièmes. Puis 17 - 9 = 8.", en: "Borrow 1: 14 - 9 = 5 tenths. Then 17 - 9 = 8.", nl: "Leen 1: 14 - 9 = 5 tienden. Dan 17 - 9 = 8." }
  },

  // =========================================================================
  // Level 2 — Decimal multiplication  (17 questions: s_6 – s_10, s_28 – s_39)
  // =========================================================================
  {
    id: "N5_s_6", category: "N5", level: 2,
    text: { fr: "Calcule : 2,5 × 4", en: "Calculate: 2.5 × 4", nl: "Bereken: 2,5 × 4" },
    answer: 10, tolerance: 0.01,
    hint: { fr: "2 × 4 = 8, 0,5 × 4 = 2. Total = 10.", en: "2 × 4 = 8, 0.5 × 4 = 2. Total = 10.", nl: "2 × 4 = 8, 0,5 × 4 = 2. Totaal = 10." }
  },
  {
    id: "N5_s_7", category: "N5", level: 2,
    text: { fr: "Calcule : 3,2 × 5", en: "Calculate: 3.2 × 5", nl: "Bereken: 3,2 × 5" },
    answer: 16, tolerance: 0.01,
    hint: { fr: "3 × 5 = 15, 0,2 × 5 = 1. Total = 16.", en: "3 × 5 = 15, 0.2 × 5 = 1. Total = 16.", nl: "3 × 5 = 15, 0,2 × 5 = 1. Totaal = 16." }
  },
  {
    id: "N5_s_8", category: "N5", level: 2,
    text: { fr: "Calcule : 1,5 × 1,2", en: "Calculate: 1.5 × 1.2", nl: "Bereken: 1,5 × 1,2" },
    answer: 1.8, tolerance: 0.01,
    hint: { fr: "15 × 12 = 180, puis place 2 décimales → 1,80.", en: "15 × 12 = 180, then place 2 decimals → 1.80.", nl: "15 × 12 = 180, plaats dan 2 decimalen → 1,80." }
  },
  {
    id: "N5_s_9", category: "N5", level: 2,
    text: { fr: "Calcule : 0,7 × 8", en: "Calculate: 0.7 × 8", nl: "Bereken: 0,7 × 8" },
    answer: 5.6, tolerance: 0.01,
    hint: { fr: "7 × 8 = 56, puis place 1 décimale → 5,6.", en: "7 × 8 = 56, then place 1 decimal → 5.6.", nl: "7 × 8 = 56, plaats dan 1 decimaal → 5,6." }
  },
  {
    id: "N5_s_10", category: "N5", level: 2,
    text: { fr: "Calcule : 4,5 × 2,2", en: "Calculate: 4.5 × 2.2", nl: "Bereken: 4,5 × 2,2" },
    answer: 9.9, tolerance: 0.01,
    hint: { fr: "45 × 22 = 990, puis place 2 décimales → 9,90.", en: "45 × 22 = 990, then place 2 decimals → 9.90.", nl: "45 × 22 = 990, plaats dan 2 decimalen → 9,90." }
  },
  {
    id: "N5_s_28", category: "N5", level: 2,
    text: { fr: "Calcule : 6,5 × 3", en: "Calculate: 6.5 × 3", nl: "Bereken: 6,5 × 3" },
    answer: 19.5, tolerance: 0.01,
    hint: { fr: "6 × 3 = 18, 0,5 × 3 = 1,5. Total = 19,5.", en: "6 × 3 = 18, 0.5 × 3 = 1.5. Total = 19.5.", nl: "6 × 3 = 18, 0,5 × 3 = 1,5. Totaal = 19,5." }
  },
  {
    id: "N5_s_29", category: "N5", level: 2,
    text: { fr: "Calcule : 0,4 × 7", en: "Calculate: 0.4 × 7", nl: "Bereken: 0,4 × 7" },
    answer: 2.8, tolerance: 0.01,
    hint: { fr: "4 × 7 = 28, puis place 1 décimale → 2,8.", en: "4 × 7 = 28, then place 1 decimal → 2.8.", nl: "4 × 7 = 28, plaats dan 1 decimaal → 2,8." }
  },
  {
    id: "N5_s_30", category: "N5", level: 2,
    text: { fr: "Calcule : 2,3 × 1,5", en: "Calculate: 2.3 × 1.5", nl: "Bereken: 2,3 × 1,5" },
    answer: 3.45, tolerance: 0.01,
    hint: { fr: "23 × 15 = 345, puis place 2 décimales → 3,45.", en: "23 × 15 = 345, then place 2 decimals → 3.45.", nl: "23 × 15 = 345, plaats dan 2 decimalen → 3,45." }
  },
  {
    id: "N5_s_31", category: "N5", level: 2,
    text: { fr: "Calcule : 5,4 × 6", en: "Calculate: 5.4 × 6", nl: "Bereken: 5,4 × 6" },
    answer: 32.4, tolerance: 0.01,
    hint: { fr: "5 × 6 = 30, 0,4 × 6 = 2,4. Total = 32,4.", en: "5 × 6 = 30, 0.4 × 6 = 2.4. Total = 32.4.", nl: "5 × 6 = 30, 0,4 × 6 = 2,4. Totaal = 32,4." }
  },
  {
    id: "N5_s_32", category: "N5", level: 2,
    text: { fr: "Calcule : 3,6 × 2,5", en: "Calculate: 3.6 × 2.5", nl: "Bereken: 3,6 × 2,5" },
    answer: 9, tolerance: 0.01,
    hint: { fr: "36 × 25 = 900, puis place 2 décimales → 9,00.", en: "36 × 25 = 900, then place 2 decimals → 9.00.", nl: "36 × 25 = 900, plaats dan 2 decimalen → 9,00." }
  },
  {
    id: "N5_s_33", category: "N5", level: 2,
    text: { fr: "Calcule : 0,9 × 9", en: "Calculate: 0.9 × 9", nl: "Bereken: 0,9 × 9" },
    answer: 8.1, tolerance: 0.01,
    hint: { fr: "9 × 9 = 81, puis place 1 décimale → 8,1.", en: "9 × 9 = 81, then place 1 decimal → 8.1.", nl: "9 × 9 = 81, plaats dan 1 decimaal → 8,1." }
  },
  {
    id: "N5_s_34", category: "N5", level: 2,
    text: { fr: "Calcule : 7,2 × 4", en: "Calculate: 7.2 × 4", nl: "Bereken: 7,2 × 4" },
    answer: 28.8, tolerance: 0.01,
    hint: { fr: "7 × 4 = 28, 0,2 × 4 = 0,8. Total = 28,8.", en: "7 × 4 = 28, 0.2 × 4 = 0.8. Total = 28.8.", nl: "7 × 4 = 28, 0,2 × 4 = 0,8. Totaal = 28,8." }
  },
  {
    id: "N5_s_35", category: "N5", level: 2,
    text: { fr: "Calcule : 1,8 × 3,5", en: "Calculate: 1.8 × 3.5", nl: "Bereken: 1,8 × 3,5" },
    answer: 6.3, tolerance: 0.01,
    hint: { fr: "18 × 35 = 630, puis place 2 décimales → 6,30.", en: "18 × 35 = 630, then place 2 decimals → 6.30.", nl: "18 × 35 = 630, plaats dan 2 decimalen → 6,30." }
  },
  {
    id: "N5_s_36", category: "N5", level: 2,
    text: { fr: "Calcule : 4,8 × 2,5", en: "Calculate: 4.8 × 2.5", nl: "Bereken: 4,8 × 2,5" },
    answer: 12, tolerance: 0.01,
    hint: { fr: "48 × 25 = 1200, puis place 2 décimales → 12,00.", en: "48 × 25 = 1200, then place 2 decimals → 12.00.", nl: "48 × 25 = 1200, plaats dan 2 decimalen → 12,00." }
  },
  {
    id: "N5_s_37", category: "N5", level: 2,
    text: { fr: "Calcule : 0,6 × 0,5", en: "Calculate: 0.6 × 0.5", nl: "Bereken: 0,6 × 0,5" },
    answer: 0.3, tolerance: 0.01,
    hint: { fr: "6 × 5 = 30, puis place 2 décimales → 0,30.", en: "6 × 5 = 30, then place 2 decimals → 0.30.", nl: "6 × 5 = 30, plaats dan 2 decimalen → 0,30." }
  },
  {
    id: "N5_s_38", category: "N5", level: 2,
    text: { fr: "Calcule : 8,5 × 2", en: "Calculate: 8.5 × 2", nl: "Bereken: 8,5 × 2" },
    answer: 17, tolerance: 0.01,
    hint: { fr: "8 × 2 = 16, 0,5 × 2 = 1. Total = 17.", en: "8 × 2 = 16, 0.5 × 2 = 1. Total = 17.", nl: "8 × 2 = 16, 0,5 × 2 = 1. Totaal = 17." }
  },
  {
    id: "N5_s_39", category: "N5", level: 2,
    text: { fr: "Calcule : 2,4 × 3,5", en: "Calculate: 2.4 × 3.5", nl: "Bereken: 2,4 × 3,5" },
    answer: 8.4, tolerance: 0.01,
    hint: { fr: "24 × 35 = 840, puis place 2 décimales → 8,40.", en: "24 × 35 = 840, then place 2 decimals → 8.40.", nl: "24 × 35 = 840, plaats dan 2 decimalen → 8,40." }
  },

  // =========================================================================
  // Level 3 — Decimal division and mixed operations  (16 questions: s_11 – s_15, s_40 – s_50)
  // =========================================================================
  {
    id: "N5_s_11", category: "N5", level: 3,
    text: { fr: "Calcule : 7,5 ÷ 2,5", en: "Calculate: 7.5 ÷ 2.5", nl: "Bereken: 7,5 ÷ 2,5" },
    answer: 3, tolerance: 0.01,
    hint: { fr: "Multiplie les deux par 2 : 15 ÷ 5 = 3.", en: "Multiply both by 2: 15 ÷ 5 = 3.", nl: "Vermenigvuldig beide met 2: 15 ÷ 5 = 3." }
  },
  {
    id: "N5_s_12", category: "N5", level: 3,
    text: { fr: "Calcule : 12,6 ÷ 0,3", en: "Calculate: 12.6 ÷ 0.3", nl: "Bereken: 12,6 ÷ 0,3" },
    answer: 42, tolerance: 0.01,
    hint: { fr: "Multiplie les deux par 10 : 126 ÷ 3 = 42.", en: "Multiply both by 10: 126 ÷ 3 = 42.", nl: "Vermenigvuldig beide met 10: 126 ÷ 3 = 42." }
  },
  {
    id: "N5_s_13", category: "N5", level: 3,
    text: { fr: "Calcule : 3,6 × 2,5 + 1,4", en: "Calculate: 3.6 × 2.5 + 1.4", nl: "Bereken: 3,6 × 2,5 + 1,4" },
    answer: 10.4, tolerance: 0.01,
    hint: { fr: "D'abord 3,6 × 2,5 = 9, puis + 1,4.", en: "First 3.6 × 2.5 = 9, then + 1.4.", nl: "Eerst 3,6 × 2,5 = 9, dan + 1,4." }
  },
  {
    id: "N5_s_14", category: "N5", level: 3,
    text: { fr: "Calcule : 15,75 ÷ 3,5", en: "Calculate: 15.75 ÷ 3.5", nl: "Bereken: 15,75 ÷ 3,5" },
    answer: 4.5, tolerance: 0.01,
    hint: { fr: "Multiplie par 2 : 31,5 ÷ 7 = 4,5.", en: "Multiply by 2: 31.5 ÷ 7 = 4.5.", nl: "Vermenigvuldig met 2: 31,5 ÷ 7 = 4,5." }
  },
  {
    id: "N5_s_15", category: "N5", level: 3,
    text: { fr: "Calcule : 2,4 × 3,5 - 1,4", en: "Calculate: 2.4 × 3.5 - 1.4", nl: "Bereken: 2,4 × 3,5 - 1,4" },
    answer: 7, tolerance: 0.01,
    hint: { fr: "D'abord 2,4 × 3,5 = 8,4, puis - 1,4.", en: "First 2.4 × 3.5 = 8.4, then - 1.4.", nl: "Eerst 2,4 × 3,5 = 8,4, dan - 1,4." }
  },
  {
    id: "N5_s_40", category: "N5", level: 3,
    text: { fr: "Calcule : 9,6 ÷ 1,6", en: "Calculate: 9.6 ÷ 1.6", nl: "Bereken: 9,6 ÷ 1,6" },
    answer: 6, tolerance: 0.01,
    hint: { fr: "Multiplie les deux par 5 : 48 ÷ 8 = 6.", en: "Multiply both by 5: 48 ÷ 8 = 6.", nl: "Vermenigvuldig beide met 5: 48 ÷ 8 = 6." }
  },
  {
    id: "N5_s_41", category: "N5", level: 3,
    text: { fr: "Calcule : 18,9 ÷ 2,7", en: "Calculate: 18.9 ÷ 2.7", nl: "Bereken: 18,9 ÷ 2,7" },
    answer: 7, tolerance: 0.01,
    hint: { fr: "Multiplie les deux par 10 : 189 ÷ 27 = 7.", en: "Multiply both by 10: 189 ÷ 27 = 7.", nl: "Vermenigvuldig beide met 10: 189 ÷ 27 = 7." }
  },
  {
    id: "N5_s_42", category: "N5", level: 3,
    text: { fr: "Calcule : 4,5 × 2,4 - 3,8", en: "Calculate: 4.5 × 2.4 - 3.8", nl: "Bereken: 4,5 × 2,4 - 3,8" },
    answer: 7, tolerance: 0.01,
    hint: { fr: "D'abord 4,5 × 2,4 = 10,8, puis - 3,8 = 7.", en: "First 4.5 × 2.4 = 10.8, then - 3.8 = 7.", nl: "Eerst 4,5 × 2,4 = 10,8, dan - 3,8 = 7." }
  },
  {
    id: "N5_s_43", category: "N5", level: 3,
    text: { fr: "Calcule : 8,4 ÷ 0,7", en: "Calculate: 8.4 ÷ 0.7", nl: "Bereken: 8,4 ÷ 0,7" },
    answer: 12, tolerance: 0.01,
    hint: { fr: "Multiplie les deux par 10 : 84 ÷ 7 = 12.", en: "Multiply both by 10: 84 ÷ 7 = 12.", nl: "Vermenigvuldig beide met 10: 84 ÷ 7 = 12." }
  },
  {
    id: "N5_s_44", category: "N5", level: 3,
    text: { fr: "Calcule : 5,6 ÷ 0,8", en: "Calculate: 5.6 ÷ 0.8", nl: "Bereken: 5,6 ÷ 0,8" },
    answer: 7, tolerance: 0.01,
    hint: { fr: "Multiplie les deux par 10 : 56 ÷ 8 = 7.", en: "Multiply both by 10: 56 ÷ 8 = 7.", nl: "Vermenigvuldig beide met 10: 56 ÷ 8 = 7." }
  },
  {
    id: "N5_s_45", category: "N5", level: 3,
    text: { fr: "Calcule : 1,5 × 4,2 + 2,7", en: "Calculate: 1.5 × 4.2 + 2.7", nl: "Bereken: 1,5 × 4,2 + 2,7" },
    answer: 9, tolerance: 0.01,
    hint: { fr: "D'abord 1,5 × 4,2 = 6,3, puis + 2,7 = 9.", en: "First 1.5 × 4.2 = 6.3, then + 2.7 = 9.", nl: "Eerst 1,5 × 4,2 = 6,3, dan + 2,7 = 9." }
  },
  {
    id: "N5_s_46", category: "N5", level: 3,
    text: { fr: "Calcule : 20,4 ÷ 3,4", en: "Calculate: 20.4 ÷ 3.4", nl: "Bereken: 20,4 ÷ 3,4" },
    answer: 6, tolerance: 0.01,
    hint: { fr: "Multiplie les deux par 10 : 204 ÷ 34 = 6.", en: "Multiply both by 10: 204 ÷ 34 = 6.", nl: "Vermenigvuldig beide met 10: 204 ÷ 34 = 6." }
  },
  {
    id: "N5_s_47", category: "N5", level: 3,
    text: { fr: "Calcule : 6,3 ÷ 0,9 + 3,5", en: "Calculate: 6.3 ÷ 0.9 + 3.5", nl: "Bereken: 6,3 ÷ 0,9 + 3,5" },
    answer: 10.5, tolerance: 0.01,
    hint: { fr: "D'abord 6,3 ÷ 0,9 = 7, puis + 3,5 = 10,5.", en: "First 6.3 ÷ 0.9 = 7, then + 3.5 = 10.5.", nl: "Eerst 6,3 ÷ 0,9 = 7, dan + 3,5 = 10,5." }
  },
  {
    id: "N5_s_48", category: "N5", level: 3,
    text: { fr: "Calcule : 14,4 ÷ 1,2", en: "Calculate: 14.4 ÷ 1.2", nl: "Bereken: 14,4 ÷ 1,2" },
    answer: 12, tolerance: 0.01,
    hint: { fr: "Multiplie les deux par 10 : 144 ÷ 12 = 12.", en: "Multiply both by 10: 144 ÷ 12 = 12.", nl: "Vermenigvuldig beide met 10: 144 ÷ 12 = 12." }
  },
  {
    id: "N5_s_49", category: "N5", level: 3,
    text: { fr: "Calcule : 2,5 × 3,6 - 4,5", en: "Calculate: 2.5 × 3.6 - 4.5", nl: "Bereken: 2,5 × 3,6 - 4,5" },
    answer: 4.5, tolerance: 0.01,
    hint: { fr: "D'abord 2,5 × 3,6 = 9, puis - 4,5 = 4,5.", en: "First 2.5 × 3.6 = 9, then - 4.5 = 4.5.", nl: "Eerst 2,5 × 3,6 = 9, dan - 4,5 = 4,5." }
  },
  {
    id: "N5_s_50", category: "N5", level: 3,
    text: { fr: "Calcule : 16,8 ÷ 2,4 + 1,8", en: "Calculate: 16.8 ÷ 2.4 + 1.8", nl: "Bereken: 16,8 ÷ 2,4 + 1,8" },
    answer: 8.8, tolerance: 0.01,
    hint: { fr: "D'abord 16,8 ÷ 2,4 = 7, puis + 1,8 = 8,8.", en: "First 16.8 ÷ 2.4 = 7, then + 1.8 = 8.8.", nl: "Eerst 16,8 ÷ 2,4 = 7, dan + 1,8 = 8,8." }
  },
];

export function generate(level = 1) {
  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const id = `N5_gen_${Date.now()}_${rand(100, 999)}`;
  if (level === 1) {
    const a = rand(10, 99) / 10; const b = rand(10, 99) / 10;
    const answer = Math.round((a + b) * 100) / 100;
    return { id, category: 'N5', level, text: { fr: `Calcule : ${a.toFixed(1).replace('.', ',')} + ${b.toFixed(1).replace('.', ',')}`, en: `Calculate: ${a.toFixed(1)} + ${b.toFixed(1)}`, nl: `Bereken: ${a.toFixed(1).replace('.', ',')} + ${b.toFixed(1).replace('.', ',')}` }, answer, tolerance: 0.01 };
  }
  if (level === 2) {
    const a = rand(11, 50) / 10; const b = rand(2, 9);
    const answer = Math.round(a * b * 100) / 100;
    return { id, category: 'N5', level, text: { fr: `Calcule : ${a.toFixed(1).replace('.', ',')} × ${b}`, en: `Calculate: ${a.toFixed(1)} × ${b}`, nl: `Bereken: ${a.toFixed(1).replace('.', ',')} × ${b}` }, answer, tolerance: 0.01 };
  }
  const a = rand(2, 9); const b = rand(2, 9); const product = a * b;
  const divisor = a + rand(1, 5) / 10;
  const dividend = Math.round(divisor * b * 100) / 100;
  return { id, category: 'N5', level, text: { fr: `Calcule : ${dividend.toString().replace('.', ',')} ÷ ${divisor.toString().replace('.', ',')}`, en: `Calculate: ${dividend} ÷ ${divisor}`, nl: `Bereken: ${dividend.toString().replace('.', ',')} ÷ ${divisor.toString().replace('.', ',')}` }, answer: b, tolerance: 0.01 };
}
