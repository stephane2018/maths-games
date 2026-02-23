// =============================================================================
// G5 - Triangles
// CE1D Belgian exam - Trilingual (FR / EN / NL)
// =============================================================================

export const questions = [
  // =========================================================================
  // Level 1 — Perimeter of triangles (17 questions: s_1 – s_5, s_16 – s_27)
  // =========================================================================
  {
    id: "G5_s_1", category: "G5", level: 1,
    text: { fr: "Un triangle a des côtés de 5 cm, 7 cm et 10 cm. Quel est son périmètre ?", en: "A triangle has sides 5 cm, 7 cm and 10 cm. What is its perimeter?", nl: "Een driehoek heeft zijden van 5 cm, 7 cm en 10 cm. Wat is de omtrek?" },
    answer: 22, tolerance: 0, unit: "cm",
    hint: { fr: "Périmètre = somme des côtés.", en: "Perimeter = sum of sides.", nl: "Omtrek = som van zijden." }
  },
  {
    id: "G5_s_2", category: "G5", level: 1,
    text: { fr: "Un triangle équilatéral a un côté de 8 cm. Quel est son périmètre ?", en: "An equilateral triangle has a side of 8 cm. What is its perimeter?", nl: "Een gelijkzijdige driehoek heeft een zijde van 8 cm. Wat is de omtrek?" },
    answer: 24, tolerance: 0, unit: "cm",
    hint: { fr: "3 côtés égaux : 8 × 3.", en: "3 equal sides: 8 × 3.", nl: "3 gelijke zijden: 8 × 3." }
  },
  {
    id: "G5_s_3", category: "G5", level: 1,
    text: { fr: "Un triangle a des côtés de 3 cm, 4 cm et 5 cm. Quel est son périmètre ?", en: "A triangle has sides 3 cm, 4 cm and 5 cm. What is its perimeter?", nl: "Een driehoek heeft zijden van 3 cm, 4 cm en 5 cm. Wat is de omtrek?" },
    answer: 12, tolerance: 0, unit: "cm",
    hint: { fr: "3 + 4 + 5.", en: "3 + 4 + 5.", nl: "3 + 4 + 5." }
  },
  {
    id: "G5_s_4", category: "G5", level: 1,
    text: { fr: "Un triangle isocèle a deux côtés de 6 cm et un côté de 4 cm. Quel est son périmètre ?", en: "An isosceles triangle has two sides of 6 cm and one of 4 cm. What is its perimeter?", nl: "Een gelijkbenige driehoek heeft twee zijden van 6 cm en een van 4 cm. Wat is de omtrek?" },
    answer: 16, tolerance: 0, unit: "cm",
    hint: { fr: "6 + 6 + 4.", en: "6 + 6 + 4.", nl: "6 + 6 + 4." }
  },
  {
    id: "G5_s_5", category: "G5", level: 1,
    text: { fr: "Un triangle a des côtés de 9 cm, 12 cm et 15 cm. Quel est son périmètre ?", en: "A triangle has sides 9 cm, 12 cm and 15 cm. What is its perimeter?", nl: "Een driehoek heeft zijden van 9 cm, 12 cm en 15 cm. Wat is de omtrek?" },
    answer: 36, tolerance: 0, unit: "cm",
    hint: { fr: "9 + 12 + 15.", en: "9 + 12 + 15.", nl: "9 + 12 + 15." }
  },
  {
    id: "G5_s_16", category: "G5", level: 1,
    text: { fr: "Un triangle équilatéral a un côté de 11 cm. Quel est son périmètre ?", en: "An equilateral triangle has a side of 11 cm. What is its perimeter?", nl: "Een gelijkzijdige driehoek heeft een zijde van 11 cm. Wat is de omtrek?" },
    answer: 33, tolerance: 0, unit: "cm",
    hint: { fr: "3 côtés égaux : 11 × 3.", en: "3 equal sides: 11 × 3.", nl: "3 gelijke zijden: 11 × 3." }
  },
  {
    id: "G5_s_17", category: "G5", level: 1,
    text: { fr: "Un triangle isocèle a deux côtés de 9 cm et un côté de 5 cm. Quel est son périmètre ?", en: "An isosceles triangle has two sides of 9 cm and one of 5 cm. What is its perimeter?", nl: "Een gelijkbenige driehoek heeft twee zijden van 9 cm en een van 5 cm. Wat is de omtrek?" },
    answer: 23, tolerance: 0, unit: "cm",
    hint: { fr: "9 + 9 + 5.", en: "9 + 9 + 5.", nl: "9 + 9 + 5." }
  },
  {
    id: "G5_s_18", category: "G5", level: 1,
    text: { fr: "Un triangle a des côtés de 7 cm, 11 cm et 13 cm. Quel est son périmètre ?", en: "A triangle has sides 7 cm, 11 cm and 13 cm. What is its perimeter?", nl: "Een driehoek heeft zijden van 7 cm, 11 cm en 13 cm. Wat is de omtrek?" },
    answer: 31, tolerance: 0, unit: "cm",
    hint: { fr: "7 + 11 + 13.", en: "7 + 11 + 13.", nl: "7 + 11 + 13." }
  },
  {
    id: "G5_s_19", category: "G5", level: 1,
    text: { fr: "Un triangle équilatéral a un côté de 15 cm. Quel est son périmètre ?", en: "An equilateral triangle has a side of 15 cm. What is its perimeter?", nl: "Een gelijkzijdige driehoek heeft een zijde van 15 cm. Wat is de omtrek?" },
    answer: 45, tolerance: 0, unit: "cm",
    hint: { fr: "3 côtés égaux : 15 × 3.", en: "3 equal sides: 15 × 3.", nl: "3 gelijke zijden: 15 × 3." }
  },
  {
    id: "G5_s_20", category: "G5", level: 1,
    text: { fr: "Un triangle isocèle a deux côtés de 10 cm et un côté de 7 cm. Quel est son périmètre ?", en: "An isosceles triangle has two sides of 10 cm and one of 7 cm. What is its perimeter?", nl: "Een gelijkbenige driehoek heeft twee zijden van 10 cm en een van 7 cm. Wat is de omtrek?" },
    answer: 27, tolerance: 0, unit: "cm",
    hint: { fr: "10 + 10 + 7.", en: "10 + 10 + 7.", nl: "10 + 10 + 7." }
  },
  {
    id: "G5_s_21", category: "G5", level: 1,
    text: { fr: "Un triangle a des côtés de 6 cm, 10 cm et 13 cm. Quel est son périmètre ?", en: "A triangle has sides 6 cm, 10 cm and 13 cm. What is its perimeter?", nl: "Een driehoek heeft zijden van 6 cm, 10 cm en 13 cm. Wat is de omtrek?" },
    answer: 29, tolerance: 0, unit: "cm",
    hint: { fr: "6 + 10 + 13.", en: "6 + 10 + 13.", nl: "6 + 10 + 13." }
  },
  {
    id: "G5_s_22", category: "G5", level: 1,
    text: { fr: "Un triangle équilatéral a un côté de 12 cm. Quel est son périmètre ?", en: "An equilateral triangle has a side of 12 cm. What is its perimeter?", nl: "Een gelijkzijdige driehoek heeft een zijde van 12 cm. Wat is de omtrek?" },
    answer: 36, tolerance: 0, unit: "cm",
    hint: { fr: "3 côtés égaux : 12 × 3.", en: "3 equal sides: 12 × 3.", nl: "3 gelijke zijden: 12 × 3." }
  },
  {
    id: "G5_s_23", category: "G5", level: 1,
    text: { fr: "Un triangle isocèle a deux côtés de 7 cm et un côté de 10 cm. Quel est son périmètre ?", en: "An isosceles triangle has two sides of 7 cm and one of 10 cm. What is its perimeter?", nl: "Een gelijkbenige driehoek heeft twee zijden van 7 cm en een van 10 cm. Wat is de omtrek?" },
    answer: 24, tolerance: 0, unit: "cm",
    hint: { fr: "7 + 7 + 10.", en: "7 + 7 + 10.", nl: "7 + 7 + 10." }
  },
  {
    id: "G5_s_24", category: "G5", level: 1,
    text: { fr: "Un triangle a des côtés de 4 cm, 8 cm et 9 cm. Quel est son périmètre ?", en: "A triangle has sides 4 cm, 8 cm and 9 cm. What is its perimeter?", nl: "Een driehoek heeft zijden van 4 cm, 8 cm en 9 cm. Wat is de omtrek?" },
    answer: 21, tolerance: 0, unit: "cm",
    hint: { fr: "4 + 8 + 9.", en: "4 + 8 + 9.", nl: "4 + 8 + 9." }
  },
  {
    id: "G5_s_25", category: "G5", level: 1,
    text: { fr: "Un triangle isocèle a deux côtés de 13 cm et un côté de 8 cm. Quel est son périmètre ?", en: "An isosceles triangle has two sides of 13 cm and one of 8 cm. What is its perimeter?", nl: "Een gelijkbenige driehoek heeft twee zijden van 13 cm en een van 8 cm. Wat is de omtrek?" },
    answer: 34, tolerance: 0, unit: "cm",
    hint: { fr: "13 + 13 + 8.", en: "13 + 13 + 8.", nl: "13 + 13 + 8." }
  },
  {
    id: "G5_s_26", category: "G5", level: 1,
    text: { fr: "Un triangle a des côtés de 11 cm, 14 cm et 17 cm. Quel est son périmètre ?", en: "A triangle has sides 11 cm, 14 cm and 17 cm. What is its perimeter?", nl: "Een driehoek heeft zijden van 11 cm, 14 cm en 17 cm. Wat is de omtrek?" },
    answer: 42, tolerance: 0, unit: "cm",
    hint: { fr: "11 + 14 + 17.", en: "11 + 14 + 17.", nl: "11 + 14 + 17." }
  },
  {
    id: "G5_s_27", category: "G5", level: 1,
    text: { fr: "Un triangle équilatéral a un côté de 9 cm. Quel est son périmètre ?", en: "An equilateral triangle has a side of 9 cm. What is its perimeter?", nl: "Een gelijkzijdige driehoek heeft een zijde van 9 cm. Wat is de omtrek?" },
    answer: 27, tolerance: 0, unit: "cm",
    hint: { fr: "3 côtés égaux : 9 × 3.", en: "3 equal sides: 9 × 3.", nl: "3 gelijke zijden: 9 × 3." }
  },
  // =========================================================================
  // Level 2 — Area of triangles (17 questions: s_6 – s_10, s_28 – s_39)
  // =========================================================================
  {
    id: "G5_s_6", category: "G5", level: 2,
    text: { fr: "Quelle est l'aire d'un triangle de base 12 cm et de hauteur 5 cm ?", en: "What is the area of a triangle with base 12 cm and height 5 cm?", nl: "Wat is de oppervlakte van een driehoek met basis 12 cm en hoogte 5 cm?" },
    answer: 30, tolerance: 0, unit: "cm²",
    hint: { fr: "Aire = base × hauteur ÷ 2.", en: "Area = base × height ÷ 2.", nl: "Oppervlakte = basis × hoogte ÷ 2." }
  },
  {
    id: "G5_s_7", category: "G5", level: 2,
    text: { fr: "Quelle est l'aire d'un triangle de base 8 cm et de hauteur 11 cm ?", en: "What is the area of a triangle with base 8 cm and height 11 cm?", nl: "Wat is de oppervlakte van een driehoek met basis 8 cm en hoogte 11 cm?" },
    answer: 44, tolerance: 0, unit: "cm²",
    hint: { fr: "Aire = 8 × 11 ÷ 2.", en: "Area = 8 × 11 ÷ 2.", nl: "Oppervlakte = 8 × 11 ÷ 2." }
  },
  {
    id: "G5_s_8", category: "G5", level: 2,
    text: { fr: "Un triangle rectangle a des cathètes de 6 cm et 8 cm. Quelle est son aire ?", en: "A right triangle has legs of 6 cm and 8 cm. What is its area?", nl: "Een rechthoekige driehoek heeft rechthoekszijden van 6 cm en 8 cm. Wat is de oppervlakte?" },
    answer: 24, tolerance: 0, unit: "cm²",
    hint: { fr: "Aire = 6 × 8 ÷ 2.", en: "Area = 6 × 8 ÷ 2.", nl: "Oppervlakte = 6 × 8 ÷ 2." }
  },
  {
    id: "G5_s_9", category: "G5", level: 2,
    text: { fr: "Quelle est l'aire d'un triangle de base 16 cm et de hauteur 7 cm ?", en: "What is the area of a triangle with base 16 cm and height 7 cm?", nl: "Wat is de oppervlakte van een driehoek met basis 16 cm en hoogte 7 cm?" },
    answer: 56, tolerance: 0, unit: "cm²",
    hint: { fr: "Aire = 16 × 7 ÷ 2.", en: "Area = 16 × 7 ÷ 2.", nl: "Oppervlakte = 16 × 7 ÷ 2." }
  },
  {
    id: "G5_s_10", category: "G5", level: 2,
    text: { fr: "Un triangle rectangle a des cathètes de 5 cm et 12 cm. Quelle est son aire ?", en: "A right triangle has legs of 5 cm and 12 cm. What is its area?", nl: "Een rechthoekige driehoek heeft rechthoekszijden van 5 cm en 12 cm. Wat is de oppervlakte?" },
    answer: 30, tolerance: 0, unit: "cm²",
    hint: { fr: "Aire = 5 × 12 ÷ 2.", en: "Area = 5 × 12 ÷ 2.", nl: "Oppervlakte = 5 × 12 ÷ 2." }
  },
  {
    id: "G5_s_28", category: "G5", level: 2,
    text: { fr: "Quelle est l'aire d'un triangle de base 10 cm et de hauteur 7 cm ?", en: "What is the area of a triangle with base 10 cm and height 7 cm?", nl: "Wat is de oppervlakte van een driehoek met basis 10 cm en hoogte 7 cm?" },
    answer: 35, tolerance: 0, unit: "cm²",
    hint: { fr: "Aire = 10 × 7 ÷ 2.", en: "Area = 10 × 7 ÷ 2.", nl: "Oppervlakte = 10 × 7 ÷ 2." }
  },
  {
    id: "G5_s_29", category: "G5", level: 2,
    text: { fr: "Un triangle rectangle a des cathètes de 9 cm et 12 cm. Quelle est son aire ?", en: "A right triangle has legs of 9 cm and 12 cm. What is its area?", nl: "Een rechthoekige driehoek heeft rechthoekszijden van 9 cm en 12 cm. Wat is de oppervlakte?" },
    answer: 54, tolerance: 0, unit: "cm²",
    hint: { fr: "Aire = 9 × 12 ÷ 2.", en: "Area = 9 × 12 ÷ 2.", nl: "Oppervlakte = 9 × 12 ÷ 2." }
  },
  {
    id: "G5_s_30", category: "G5", level: 2,
    text: { fr: "Quelle est l'aire d'un triangle de base 14 cm et de hauteur 9 cm ?", en: "What is the area of a triangle with base 14 cm and height 9 cm?", nl: "Wat is de oppervlakte van een driehoek met basis 14 cm en hoogte 9 cm?" },
    answer: 63, tolerance: 0, unit: "cm²",
    hint: { fr: "Aire = 14 × 9 ÷ 2.", en: "Area = 14 × 9 ÷ 2.", nl: "Oppervlakte = 14 × 9 ÷ 2." }
  },
  {
    id: "G5_s_31", category: "G5", level: 2,
    text: { fr: "Quelle est l'aire d'un triangle de base 20 cm et de hauteur 6 cm ?", en: "What is the area of a triangle with base 20 cm and height 6 cm?", nl: "Wat is de oppervlakte van een driehoek met basis 20 cm en hoogte 6 cm?" },
    answer: 60, tolerance: 0, unit: "cm²",
    hint: { fr: "Aire = 20 × 6 ÷ 2.", en: "Area = 20 × 6 ÷ 2.", nl: "Oppervlakte = 20 × 6 ÷ 2." }
  },
  {
    id: "G5_s_32", category: "G5", level: 2,
    text: { fr: "Quelle est l'aire d'un triangle de base 18 cm et de hauteur 4 cm ?", en: "What is the area of a triangle with base 18 cm and height 4 cm?", nl: "Wat is de oppervlakte van een driehoek met basis 18 cm en hoogte 4 cm?" },
    answer: 36, tolerance: 0, unit: "cm²",
    hint: { fr: "Aire = 18 × 4 ÷ 2.", en: "Area = 18 × 4 ÷ 2.", nl: "Oppervlakte = 18 × 4 ÷ 2." }
  },
  {
    id: "G5_s_33", category: "G5", level: 2,
    text: { fr: "Quelle est l'aire d'un triangle de base 6 cm et de hauteur 14 cm ?", en: "What is the area of a triangle with base 6 cm and height 14 cm?", nl: "Wat is de oppervlakte van een driehoek met basis 6 cm en hoogte 14 cm?" },
    answer: 42, tolerance: 0, unit: "cm²",
    hint: { fr: "Aire = 6 × 14 ÷ 2.", en: "Area = 6 × 14 ÷ 2.", nl: "Oppervlakte = 6 × 14 ÷ 2." }
  },
  {
    id: "G5_s_34", category: "G5", level: 2,
    text: { fr: "Un triangle rectangle a des cathètes de 7 cm et 24 cm. Quelle est son aire ?", en: "A right triangle has legs of 7 cm and 24 cm. What is its area?", nl: "Een rechthoekige driehoek heeft rechthoekszijden van 7 cm en 24 cm. Wat is de oppervlakte?" },
    answer: 84, tolerance: 0, unit: "cm²",
    hint: { fr: "Aire = 7 × 24 ÷ 2.", en: "Area = 7 × 24 ÷ 2.", nl: "Oppervlakte = 7 × 24 ÷ 2." }
  },
  {
    id: "G5_s_35", category: "G5", level: 2,
    text: { fr: "Quelle est l'aire d'un triangle de base 22 cm et de hauteur 8 cm ?", en: "What is the area of a triangle with base 22 cm and height 8 cm?", nl: "Wat is de oppervlakte van een driehoek met basis 22 cm en hoogte 8 cm?" },
    answer: 88, tolerance: 0, unit: "cm²",
    hint: { fr: "Aire = 22 × 8 ÷ 2.", en: "Area = 22 × 8 ÷ 2.", nl: "Oppervlakte = 22 × 8 ÷ 2." }
  },
  {
    id: "G5_s_36", category: "G5", level: 2,
    text: { fr: "Quelle est l'aire d'un triangle de base 15 cm et de hauteur 10 cm ?", en: "What is the area of a triangle with base 15 cm and height 10 cm?", nl: "Wat is de oppervlakte van een driehoek met basis 15 cm en hoogte 10 cm?" },
    answer: 75, tolerance: 0, unit: "cm²",
    hint: { fr: "Aire = 15 × 10 ÷ 2.", en: "Area = 15 × 10 ÷ 2.", nl: "Oppervlakte = 15 × 10 ÷ 2." }
  },
  {
    id: "G5_s_37", category: "G5", level: 2,
    text: { fr: "Un triangle rectangle a des cathètes de 10 cm et 24 cm. Quelle est son aire ?", en: "A right triangle has legs of 10 cm and 24 cm. What is its area?", nl: "Een rechthoekige driehoek heeft rechthoekszijden van 10 cm en 24 cm. Wat is de oppervlakte?" },
    answer: 120, tolerance: 0, unit: "cm²",
    hint: { fr: "Aire = 10 × 24 ÷ 2.", en: "Area = 10 × 24 ÷ 2.", nl: "Oppervlakte = 10 × 24 ÷ 2." }
  },
  {
    id: "G5_s_38", category: "G5", level: 2,
    text: { fr: "Quelle est l'aire d'un triangle de base 11 cm et de hauteur 6 cm ?", en: "What is the area of a triangle with base 11 cm and height 6 cm?", nl: "Wat is de oppervlakte van een driehoek met basis 11 cm en hoogte 6 cm?" },
    answer: 33, tolerance: 0, unit: "cm²",
    hint: { fr: "Aire = 11 × 6 ÷ 2.", en: "Area = 11 × 6 ÷ 2.", nl: "Oppervlakte = 11 × 6 ÷ 2." }
  },
  {
    id: "G5_s_39", category: "G5", level: 2,
    text: { fr: "Quelle est l'aire d'un triangle de base 13 cm et de hauteur 8 cm ?", en: "What is the area of a triangle with base 13 cm and height 8 cm?", nl: "Wat is de oppervlakte van een driehoek met basis 13 cm en hoogte 8 cm?" },
    answer: 52, tolerance: 0, unit: "cm²",
    hint: { fr: "Aire = 13 × 8 ÷ 2.", en: "Area = 13 × 8 ÷ 2.", nl: "Oppervlakte = 13 × 8 ÷ 2." }
  },
  // =========================================================================
  // Level 3 — Pythagorean theorem (16 questions: s_11 – s_15, s_40 – s_50)
  // =========================================================================
  {
    id: "G5_s_11", category: "G5", level: 3,
    text: { fr: "Un triangle rectangle a des cathètes de 3 cm et 4 cm. Quelle est l'hypoténuse ?", en: "A right triangle has legs 3 cm and 4 cm. What is the hypotenuse?", nl: "Een rechthoekige driehoek heeft rechthoekszijden 3 cm en 4 cm. Wat is de hypotenusa?" },
    answer: 5, tolerance: 0, unit: "cm",
    hint: { fr: "Pythagore : c² = 3² + 4² = 9 + 16 = 25.", en: "Pythagoras: c² = 3² + 4² = 9 + 16 = 25.", nl: "Pythagoras: c² = 3² + 4² = 9 + 16 = 25." }
  },
  {
    id: "G5_s_12", category: "G5", level: 3,
    text: { fr: "Un triangle rectangle a des cathètes de 6 cm et 8 cm. Quelle est l'hypoténuse ?", en: "A right triangle has legs 6 cm and 8 cm. What is the hypotenuse?", nl: "Een rechthoekige driehoek heeft rechthoekszijden 6 cm en 8 cm. Wat is de hypotenusa?" },
    answer: 10, tolerance: 0, unit: "cm",
    hint: { fr: "c² = 36 + 64 = 100. Donc c = 10.", en: "c² = 36 + 64 = 100. So c = 10.", nl: "c² = 36 + 64 = 100. Dus c = 10." }
  },
  {
    id: "G5_s_13", category: "G5", level: 3,
    text: { fr: "Un triangle rectangle a une hypoténuse de 13 cm et une cathète de 5 cm. Quelle est l'autre cathète ?", en: "A right triangle has hypotenuse 13 cm and a leg of 5 cm. What is the other leg?", nl: "Een rechthoekige driehoek heeft hypotenusa 13 cm en een zijde van 5 cm. Wat is de andere zijde?" },
    answer: 12, tolerance: 0, unit: "cm",
    hint: { fr: "b² = 13² - 5² = 169 - 25 = 144.", en: "b² = 13² - 5² = 169 - 25 = 144.", nl: "b² = 13² - 5² = 169 - 25 = 144." }
  },
  {
    id: "G5_s_14", category: "G5", level: 3,
    text: { fr: "Un triangle rectangle a des cathètes de 5 cm et 12 cm. Quelle est l'hypoténuse ?", en: "A right triangle has legs 5 cm and 12 cm. What is the hypotenuse?", nl: "Een rechthoekige driehoek heeft rechthoekszijden 5 cm en 12 cm. Wat is de hypotenusa?" },
    answer: 13, tolerance: 0, unit: "cm",
    hint: { fr: "c² = 25 + 144 = 169. Donc c = 13.", en: "c² = 25 + 144 = 169. So c = 13.", nl: "c² = 25 + 144 = 169. Dus c = 13." }
  },
  {
    id: "G5_s_15", category: "G5", level: 3,
    text: { fr: "Un triangle rectangle a une hypoténuse de 10 cm et une cathète de 6 cm. Quelle est l'autre cathète ?", en: "A right triangle has hypotenuse 10 cm and a leg of 6 cm. What is the other leg?", nl: "Een rechthoekige driehoek heeft hypotenusa 10 cm en een zijde van 6 cm. Wat is de andere zijde?" },
    answer: 8, tolerance: 0, unit: "cm",
    hint: { fr: "b² = 100 - 36 = 64. Donc b = 8.", en: "b² = 100 - 36 = 64. So b = 8.", nl: "b² = 100 - 36 = 64. Dus b = 8." }
  },
  {
    id: "G5_s_40", category: "G5", level: 3,
    text: { fr: "Un triangle rectangle a des cathètes de 8 cm et 15 cm. Quelle est l'hypoténuse ?", en: "A right triangle has legs 8 cm and 15 cm. What is the hypotenuse?", nl: "Een rechthoekige driehoek heeft rechthoekszijden 8 cm en 15 cm. Wat is de hypotenusa?" },
    answer: 17, tolerance: 0, unit: "cm",
    hint: { fr: "c² = 64 + 225 = 289. Donc c = 17.", en: "c² = 64 + 225 = 289. So c = 17.", nl: "c² = 64 + 225 = 289. Dus c = 17." }
  },
  {
    id: "G5_s_41", category: "G5", level: 3,
    text: { fr: "Un triangle rectangle a une hypoténuse de 25 cm et une cathète de 7 cm. Quelle est l'autre cathète ?", en: "A right triangle has hypotenuse 25 cm and a leg of 7 cm. What is the other leg?", nl: "Een rechthoekige driehoek heeft hypotenusa 25 cm en een zijde van 7 cm. Wat is de andere zijde?" },
    answer: 24, tolerance: 0, unit: "cm",
    hint: { fr: "b² = 625 - 49 = 576. Donc b = 24.", en: "b² = 625 - 49 = 576. So b = 24.", nl: "b² = 625 - 49 = 576. Dus b = 24." }
  },
  {
    id: "G5_s_42", category: "G5", level: 3,
    text: { fr: "Un triangle rectangle a des cathètes de 9 cm et 12 cm. Quelle est l'hypoténuse ?", en: "A right triangle has legs 9 cm and 12 cm. What is the hypotenuse?", nl: "Een rechthoekige driehoek heeft rechthoekszijden 9 cm en 12 cm. Wat is de hypotenusa?" },
    answer: 15, tolerance: 0, unit: "cm",
    hint: { fr: "c² = 81 + 144 = 225. Donc c = 15.", en: "c² = 81 + 144 = 225. So c = 15.", nl: "c² = 81 + 144 = 225. Dus c = 15." }
  },
  {
    id: "G5_s_43", category: "G5", level: 3,
    text: { fr: "Un triangle rectangle a une hypoténuse de 17 cm et une cathète de 15 cm. Quelle est l'autre cathète ?", en: "A right triangle has hypotenuse 17 cm and a leg of 15 cm. What is the other leg?", nl: "Een rechthoekige driehoek heeft hypotenusa 17 cm en een zijde van 15 cm. Wat is de andere zijde?" },
    answer: 8, tolerance: 0, unit: "cm",
    hint: { fr: "b² = 289 - 225 = 64. Donc b = 8.", en: "b² = 289 - 225 = 64. So b = 8.", nl: "b² = 289 - 225 = 64. Dus b = 8." }
  },
  {
    id: "G5_s_44", category: "G5", level: 3,
    text: { fr: "Un triangle rectangle a des cathètes de 9 cm et 40 cm. Quelle est l'hypoténuse ?", en: "A right triangle has legs 9 cm and 40 cm. What is the hypotenuse?", nl: "Een rechthoekige driehoek heeft rechthoekszijden 9 cm en 40 cm. Wat is de hypotenusa?" },
    answer: 41, tolerance: 0, unit: "cm",
    hint: { fr: "c² = 81 + 1600 = 1681. Donc c = 41.", en: "c² = 81 + 1600 = 1681. So c = 41.", nl: "c² = 81 + 1600 = 1681. Dus c = 41." }
  },
  {
    id: "G5_s_45", category: "G5", level: 3,
    text: { fr: "Un triangle rectangle a des cathètes de 20 cm et 21 cm. Quelle est l'hypoténuse ?", en: "A right triangle has legs 20 cm and 21 cm. What is the hypotenuse?", nl: "Een rechthoekige driehoek heeft rechthoekszijden 20 cm en 21 cm. Wat is de hypotenusa?" },
    answer: 29, tolerance: 0, unit: "cm",
    hint: { fr: "c² = 400 + 441 = 841. Donc c = 29.", en: "c² = 400 + 441 = 841. So c = 29.", nl: "c² = 400 + 441 = 841. Dus c = 29." }
  },
  {
    id: "G5_s_46", category: "G5", level: 3,
    text: { fr: "Un triangle rectangle a une hypoténuse de 41 cm et une cathète de 9 cm. Quelle est l'autre cathète ?", en: "A right triangle has hypotenuse 41 cm and a leg of 9 cm. What is the other leg?", nl: "Een rechthoekige driehoek heeft hypotenusa 41 cm en een zijde van 9 cm. Wat is de andere zijde?" },
    answer: 40, tolerance: 0, unit: "cm",
    hint: { fr: "b² = 1681 - 81 = 1600. Donc b = 40.", en: "b² = 1681 - 81 = 1600. So b = 40.", nl: "b² = 1681 - 81 = 1600. Dus b = 40." }
  },
  {
    id: "G5_s_47", category: "G5", level: 3,
    text: { fr: "Un triangle rectangle a des cathètes de 12 cm et 16 cm. Quelle est l'hypoténuse ?", en: "A right triangle has legs 12 cm and 16 cm. What is the hypotenuse?", nl: "Een rechthoekige driehoek heeft rechthoekszijden 12 cm en 16 cm. Wat is de hypotenusa?" },
    answer: 20, tolerance: 0, unit: "cm",
    hint: { fr: "c² = 144 + 256 = 400. Donc c = 20.", en: "c² = 144 + 256 = 400. So c = 20.", nl: "c² = 144 + 256 = 400. Dus c = 20." }
  },
  {
    id: "G5_s_48", category: "G5", level: 3,
    text: { fr: "Un triangle rectangle a une hypoténuse de 29 cm et une cathète de 20 cm. Quelle est l'autre cathète ?", en: "A right triangle has hypotenuse 29 cm and a leg of 20 cm. What is the other leg?", nl: "Een rechthoekige driehoek heeft hypotenusa 29 cm en een zijde van 20 cm. Wat is de andere zijde?" },
    answer: 21, tolerance: 0, unit: "cm",
    hint: { fr: "b² = 841 - 400 = 441. Donc b = 21.", en: "b² = 841 - 400 = 441. So b = 21.", nl: "b² = 841 - 400 = 441. Dus b = 21." }
  },
  {
    id: "G5_s_49", category: "G5", level: 3,
    text: { fr: "Un triangle rectangle a des cathètes de 15 cm et 20 cm. Quelle est l'hypoténuse ?", en: "A right triangle has legs 15 cm and 20 cm. What is the hypotenuse?", nl: "Een rechthoekige driehoek heeft rechthoekszijden 15 cm en 20 cm. Wat is de hypotenusa?" },
    answer: 25, tolerance: 0, unit: "cm",
    hint: { fr: "c² = 225 + 400 = 625. Donc c = 25.", en: "c² = 225 + 400 = 625. So c = 25.", nl: "c² = 225 + 400 = 625. Dus c = 25." }
  },
  {
    id: "G5_s_50", category: "G5", level: 3,
    text: { fr: "Un triangle rectangle a une hypoténuse de 26 cm et une cathète de 10 cm. Quelle est l'autre cathète ?", en: "A right triangle has hypotenuse 26 cm and a leg of 10 cm. What is the other leg?", nl: "Een rechthoekige driehoek heeft hypotenusa 26 cm en een zijde van 10 cm. Wat is de andere zijde?" },
    answer: 24, tolerance: 0, unit: "cm",
    hint: { fr: "b² = 676 - 100 = 576. Donc b = 24.", en: "b² = 676 - 100 = 576. So b = 24.", nl: "b² = 676 - 100 = 576. Dus b = 24." }
  },
  // =========================================================================
  // Level 1 — Perimeter of triangles (20 questions: s_51 – s_70)
  // =========================================================================
  {
    id: "G5_s_51", category: "G5", level: 1,
    text: { fr: "Un triangle équilatéral a un côté de 14 cm. Quel est son périmètre ?", en: "An equilateral triangle has a side of 14 cm. What is its perimeter?", nl: "Een gelijkzijdige driehoek heeft een zijde van 14 cm. Wat is de omtrek?" },
    answer: 42, tolerance: 0, unit: "cm",
    hint: { fr: "3 côtés égaux : 14 × 3.", en: "3 equal sides: 14 × 3.", nl: "3 gelijke zijden: 14 × 3." }
  },
  {
    id: "G5_s_52", category: "G5", level: 1,
    text: { fr: "Un triangle isocèle a deux côtés de 11 cm et un côté de 6 cm. Quel est son périmètre ?", en: "An isosceles triangle has two sides of 11 cm and one of 6 cm. What is its perimeter?", nl: "Een gelijkbenige driehoek heeft twee zijden van 11 cm en een van 6 cm. Wat is de omtrek?" },
    answer: 28, tolerance: 0, unit: "cm",
    hint: { fr: "11 + 11 + 6.", en: "11 + 11 + 6.", nl: "11 + 11 + 6." }
  },
  {
    id: "G5_s_53", category: "G5", level: 1,
    text: { fr: "Un triangle a des côtés de 8 cm, 13 cm et 15 cm. Quel est son périmètre ?", en: "A triangle has sides 8 cm, 13 cm and 15 cm. What is its perimeter?", nl: "Een driehoek heeft zijden van 8 cm, 13 cm en 15 cm. Wat is de omtrek?" },
    answer: 36, tolerance: 0, unit: "cm",
    hint: { fr: "8 + 13 + 15.", en: "8 + 13 + 15.", nl: "8 + 13 + 15." }
  },
  {
    id: "G5_s_54", category: "G5", level: 1,
    text: { fr: "Un triangle équilatéral a un côté de 7 cm. Quel est son périmètre ?", en: "An equilateral triangle has a side of 7 cm. What is its perimeter?", nl: "Een gelijkzijdige driehoek heeft een zijde van 7 cm. Wat is de omtrek?" },
    answer: 21, tolerance: 0, unit: "cm",
    hint: { fr: "3 côtés égaux : 7 × 3.", en: "3 equal sides: 7 × 3.", nl: "3 gelijke zijden: 7 × 3." }
  },
  {
    id: "G5_s_55", category: "G5", level: 1,
    text: { fr: "Un triangle isocèle a deux côtés de 8 cm et un côté de 12 cm. Quel est son périmètre ?", en: "An isosceles triangle has two sides of 8 cm and one of 12 cm. What is its perimeter?", nl: "Een gelijkbenige driehoek heeft twee zijden van 8 cm en een van 12 cm. Wat is de omtrek?" },
    answer: 28, tolerance: 0, unit: "cm",
    hint: { fr: "8 + 8 + 12.", en: "8 + 8 + 12.", nl: "8 + 8 + 12." }
  },
  {
    id: "G5_s_56", category: "G5", level: 1,
    text: { fr: "Un triangle a des côtés de 10 cm, 14 cm et 18 cm. Quel est son périmètre ?", en: "A triangle has sides 10 cm, 14 cm and 18 cm. What is its perimeter?", nl: "Een driehoek heeft zijden van 10 cm, 14 cm en 18 cm. Wat is de omtrek?" },
    answer: 42, tolerance: 0, unit: "cm",
    hint: { fr: "10 + 14 + 18.", en: "10 + 14 + 18.", nl: "10 + 14 + 18." }
  },
  {
    id: "G5_s_57", category: "G5", level: 1,
    text: { fr: "Un triangle équilatéral a un côté de 13 cm. Quel est son périmètre ?", en: "An equilateral triangle has a side of 13 cm. What is its perimeter?", nl: "Een gelijkzijdige driehoek heeft een zijde van 13 cm. Wat is de omtrek?" },
    answer: 39, tolerance: 0, unit: "cm",
    hint: { fr: "3 côtés égaux : 13 × 3.", en: "3 equal sides: 13 × 3.", nl: "3 gelijke zijden: 13 × 3." }
  },
  {
    id: "G5_s_58", category: "G5", level: 1,
    text: { fr: "Un triangle isocèle a deux côtés de 15 cm et un côté de 9 cm. Quel est son périmètre ?", en: "An isosceles triangle has two sides of 15 cm and one of 9 cm. What is its perimeter?", nl: "Een gelijkbenige driehoek heeft twee zijden van 15 cm en een van 9 cm. Wat is de omtrek?" },
    answer: 39, tolerance: 0, unit: "cm",
    hint: { fr: "15 + 15 + 9.", en: "15 + 15 + 9.", nl: "15 + 15 + 9." }
  },
  {
    id: "G5_s_59", category: "G5", level: 1,
    text: { fr: "Un triangle a des côtés de 5 cm, 9 cm et 11 cm. Quel est son périmètre ?", en: "A triangle has sides 5 cm, 9 cm and 11 cm. What is its perimeter?", nl: "Een driehoek heeft zijden van 5 cm, 9 cm en 11 cm. Wat is de omtrek?" },
    answer: 25, tolerance: 0, unit: "cm",
    hint: { fr: "5 + 9 + 11.", en: "5 + 9 + 11.", nl: "5 + 9 + 11." }
  },
  {
    id: "G5_s_60", category: "G5", level: 1,
    text: { fr: "Un triangle isocèle a deux côtés de 12 cm et un côté de 10 cm. Quel est son périmètre ?", en: "An isosceles triangle has two sides of 12 cm and one of 10 cm. What is its perimeter?", nl: "Een gelijkbenige driehoek heeft twee zijden van 12 cm en een van 10 cm. Wat is de omtrek?" },
    answer: 34, tolerance: 0, unit: "cm",
    hint: { fr: "12 + 12 + 10.", en: "12 + 12 + 10.", nl: "12 + 12 + 10." }
  },
  {
    id: "G5_s_61", category: "G5", level: 1,
    text: { fr: "Un triangle a des côtés de 6 cm, 7 cm et 11 cm. Quel est son périmètre ?", en: "A triangle has sides 6 cm, 7 cm and 11 cm. What is its perimeter?", nl: "Een driehoek heeft zijden van 6 cm, 7 cm en 11 cm. Wat is de omtrek?" },
    answer: 24, tolerance: 0, unit: "cm",
    hint: { fr: "6 + 7 + 11.", en: "6 + 7 + 11.", nl: "6 + 7 + 11." }
  },
  {
    id: "G5_s_62", category: "G5", level: 1,
    text: { fr: "Un triangle équilatéral a un côté de 10 cm. Quel est son périmètre ?", en: "An equilateral triangle has a side of 10 cm. What is its perimeter?", nl: "Een gelijkzijdige driehoek heeft een zijde van 10 cm. Wat is de omtrek?" },
    answer: 30, tolerance: 0, unit: "cm",
    hint: { fr: "3 côtés égaux : 10 × 3.", en: "3 equal sides: 10 × 3.", nl: "3 gelijke zijden: 10 × 3." }
  },
  {
    id: "G5_s_63", category: "G5", level: 1,
    text: { fr: "Un triangle isocèle a deux côtés de 14 cm et un côté de 11 cm. Quel est son périmètre ?", en: "An isosceles triangle has two sides of 14 cm and one of 11 cm. What is its perimeter?", nl: "Een gelijkbenige driehoek heeft twee zijden van 14 cm en een van 11 cm. Wat is de omtrek?" },
    answer: 39, tolerance: 0, unit: "cm",
    hint: { fr: "14 + 14 + 11.", en: "14 + 14 + 11.", nl: "14 + 14 + 11." }
  },
  {
    id: "G5_s_64", category: "G5", level: 1,
    text: { fr: "Un triangle a des côtés de 12 cm, 15 cm et 20 cm. Quel est son périmètre ?", en: "A triangle has sides 12 cm, 15 cm and 20 cm. What is its perimeter?", nl: "Een driehoek heeft zijden van 12 cm, 15 cm en 20 cm. Wat is de omtrek?" },
    answer: 47, tolerance: 0, unit: "cm",
    hint: { fr: "12 + 15 + 20.", en: "12 + 15 + 20.", nl: "12 + 15 + 20." }
  },
  {
    id: "G5_s_65", category: "G5", level: 1,
    text: { fr: "Un triangle équilatéral a un côté de 6 cm. Quel est son périmètre ?", en: "An equilateral triangle has a side of 6 cm. What is its perimeter?", nl: "Een gelijkzijdige driehoek heeft een zijde van 6 cm. Wat is de omtrek?" },
    answer: 18, tolerance: 0, unit: "cm",
    hint: { fr: "3 côtés égaux : 6 × 3.", en: "3 equal sides: 6 × 3.", nl: "3 gelijke zijden: 6 × 3." }
  },
  {
    id: "G5_s_66", category: "G5", level: 1,
    text: { fr: "Un triangle a des côtés de 9 cm, 10 cm et 14 cm. Quel est son périmètre ?", en: "A triangle has sides 9 cm, 10 cm and 14 cm. What is its perimeter?", nl: "Een driehoek heeft zijden van 9 cm, 10 cm en 14 cm. Wat is de omtrek?" },
    answer: 33, tolerance: 0, unit: "cm",
    hint: { fr: "9 + 10 + 14.", en: "9 + 10 + 14.", nl: "9 + 10 + 14." }
  },
  {
    id: "G5_s_67", category: "G5", level: 1,
    text: { fr: "Un triangle isocèle a deux côtés de 5 cm et un côté de 8 cm. Quel est son périmètre ?", en: "An isosceles triangle has two sides of 5 cm and one of 8 cm. What is its perimeter?", nl: "Een gelijkbenige driehoek heeft twee zijden van 5 cm en een van 8 cm. Wat is de omtrek?" },
    answer: 18, tolerance: 0, unit: "cm",
    hint: { fr: "5 + 5 + 8.", en: "5 + 5 + 8.", nl: "5 + 5 + 8." }
  },
  {
    id: "G5_s_68", category: "G5", level: 1,
    text: { fr: "Un triangle a des côtés de 7 cm, 16 cm et 18 cm. Quel est son périmètre ?", en: "A triangle has sides 7 cm, 16 cm and 18 cm. What is its perimeter?", nl: "Een driehoek heeft zijden van 7 cm, 16 cm en 18 cm. Wat is de omtrek?" },
    answer: 41, tolerance: 0, unit: "cm",
    hint: { fr: "7 + 16 + 18.", en: "7 + 16 + 18.", nl: "7 + 16 + 18." }
  },
  {
    id: "G5_s_69", category: "G5", level: 1,
    text: { fr: "Un triangle équilatéral a un côté de 16 cm. Quel est son périmètre ?", en: "An equilateral triangle has a side of 16 cm. What is its perimeter?", nl: "Een gelijkzijdige driehoek heeft een zijde van 16 cm. Wat is de omtrek?" },
    answer: 48, tolerance: 0, unit: "cm",
    hint: { fr: "3 côtés égaux : 16 × 3.", en: "3 equal sides: 16 × 3.", nl: "3 gelijke zijden: 16 × 3." }
  },
  {
    id: "G5_s_70", category: "G5", level: 1,
    text: { fr: "Un triangle isocèle a deux côtés de 16 cm et un côté de 14 cm. Quel est son périmètre ?", en: "An isosceles triangle has two sides of 16 cm and one of 14 cm. What is its perimeter?", nl: "Een gelijkbenige driehoek heeft twee zijden van 16 cm en een van 14 cm. Wat is de omtrek?" },
    answer: 46, tolerance: 0, unit: "cm",
    hint: { fr: "16 + 16 + 14.", en: "16 + 16 + 14.", nl: "16 + 16 + 14." }
  },
  // =========================================================================
  // Level 2 — Area of triangles (20 questions: s_71 – s_90)
  // =========================================================================
  {
    id: "G5_s_71", category: "G5", level: 2,
    text: { fr: "Quelle est l'aire d'un triangle de base 24 cm et de hauteur 5 cm ?", en: "What is the area of a triangle with base 24 cm and height 5 cm?", nl: "Wat is de oppervlakte van een driehoek met basis 24 cm en hoogte 5 cm?" },
    answer: 60, tolerance: 0, unit: "cm²",
    hint: { fr: "Aire = 24 × 5 ÷ 2.", en: "Area = 24 × 5 ÷ 2.", nl: "Oppervlakte = 24 × 5 ÷ 2." }
  },
  {
    id: "G5_s_72", category: "G5", level: 2,
    text: { fr: "Un triangle rectangle a des cathètes de 8 cm et 15 cm. Quelle est son aire ?", en: "A right triangle has legs of 8 cm and 15 cm. What is its area?", nl: "Een rechthoekige driehoek heeft rechthoekszijden van 8 cm en 15 cm. Wat is de oppervlakte?" },
    answer: 60, tolerance: 0, unit: "cm²",
    hint: { fr: "Aire = 8 × 15 ÷ 2.", en: "Area = 8 × 15 ÷ 2.", nl: "Oppervlakte = 8 × 15 ÷ 2." }
  },
  {
    id: "G5_s_73", category: "G5", level: 2,
    text: { fr: "Quelle est l'aire d'un triangle de base 9 cm et de hauteur 12 cm ?", en: "What is the area of a triangle with base 9 cm and height 12 cm?", nl: "Wat is de oppervlakte van een driehoek met basis 9 cm en hoogte 12 cm?" },
    answer: 54, tolerance: 0, unit: "cm²",
    hint: { fr: "Aire = 9 × 12 ÷ 2.", en: "Area = 9 × 12 ÷ 2.", nl: "Oppervlakte = 9 × 12 ÷ 2." }
  },
  {
    id: "G5_s_74", category: "G5", level: 2,
    text: { fr: "Quelle est l'aire d'un triangle de base 7 cm et de hauteur 10 cm ?", en: "What is the area of a triangle with base 7 cm and height 10 cm?", nl: "Wat is de oppervlakte van een driehoek met basis 7 cm en hoogte 10 cm?" },
    answer: 35, tolerance: 0, unit: "cm²",
    hint: { fr: "Aire = 7 × 10 ÷ 2.", en: "Area = 7 × 10 ÷ 2.", nl: "Oppervlakte = 7 × 10 ÷ 2." }
  },
  {
    id: "G5_s_75", category: "G5", level: 2,
    text: { fr: "Un triangle rectangle a des cathètes de 3 cm et 4 cm. Quelle est son aire ?", en: "A right triangle has legs of 3 cm and 4 cm. What is its area?", nl: "Een rechthoekige driehoek heeft rechthoekszijden van 3 cm en 4 cm. Wat is de oppervlakte?" },
    answer: 6, tolerance: 0, unit: "cm²",
    hint: { fr: "Aire = 3 × 4 ÷ 2.", en: "Area = 3 × 4 ÷ 2.", nl: "Oppervlakte = 3 × 4 ÷ 2." }
  },
  {
    id: "G5_s_76", category: "G5", level: 2,
    text: { fr: "Quelle est l'aire d'un triangle de base 16 cm et de hauteur 11 cm ?", en: "What is the area of a triangle with base 16 cm and height 11 cm?", nl: "Wat is de oppervlakte van een driehoek met basis 16 cm en hoogte 11 cm?" },
    answer: 88, tolerance: 0, unit: "cm²",
    hint: { fr: "Aire = 16 × 11 ÷ 2.", en: "Area = 16 × 11 ÷ 2.", nl: "Oppervlakte = 16 × 11 ÷ 2." }
  },
  {
    id: "G5_s_77", category: "G5", level: 2,
    text: { fr: "Quelle est l'aire d'un triangle de base 5 cm et de hauteur 18 cm ?", en: "What is the area of a triangle with base 5 cm and height 18 cm?", nl: "Wat is de oppervlakte van een driehoek met basis 5 cm en hoogte 18 cm?" },
    answer: 45, tolerance: 0, unit: "cm²",
    hint: { fr: "Aire = 5 × 18 ÷ 2.", en: "Area = 5 × 18 ÷ 2.", nl: "Oppervlakte = 5 × 18 ÷ 2." }
  },
  {
    id: "G5_s_78", category: "G5", level: 2,
    text: { fr: "Un triangle rectangle a des cathètes de 12 cm et 16 cm. Quelle est son aire ?", en: "A right triangle has legs of 12 cm and 16 cm. What is its area?", nl: "Een rechthoekige driehoek heeft rechthoekszijden van 12 cm en 16 cm. Wat is de oppervlakte?" },
    answer: 96, tolerance: 0, unit: "cm²",
    hint: { fr: "Aire = 12 × 16 ÷ 2.", en: "Area = 12 × 16 ÷ 2.", nl: "Oppervlakte = 12 × 16 ÷ 2." }
  },
  {
    id: "G5_s_79", category: "G5", level: 2,
    text: { fr: "Quelle est l'aire d'un triangle de base 26 cm et de hauteur 7 cm ?", en: "What is the area of a triangle with base 26 cm and height 7 cm?", nl: "Wat is de oppervlakte van een driehoek met basis 26 cm en hoogte 7 cm?" },
    answer: 91, tolerance: 0, unit: "cm²",
    hint: { fr: "Aire = 26 × 7 ÷ 2.", en: "Area = 26 × 7 ÷ 2.", nl: "Oppervlakte = 26 × 7 ÷ 2." }
  },
  {
    id: "G5_s_80", category: "G5", level: 2,
    text: { fr: "Quelle est l'aire d'un triangle de base 4 cm et de hauteur 9 cm ?", en: "What is the area of a triangle with base 4 cm and height 9 cm?", nl: "Wat is de oppervlakte van een driehoek met basis 4 cm en hoogte 9 cm?" },
    answer: 18, tolerance: 0, unit: "cm²",
    hint: { fr: "Aire = 4 × 9 ÷ 2.", en: "Area = 4 × 9 ÷ 2.", nl: "Oppervlakte = 4 × 9 ÷ 2." }
  },
  {
    id: "G5_s_81", category: "G5", level: 2,
    text: { fr: "Un triangle rectangle a des cathètes de 15 cm et 20 cm. Quelle est son aire ?", en: "A right triangle has legs of 15 cm and 20 cm. What is its area?", nl: "Een rechthoekige driehoek heeft rechthoekszijden van 15 cm en 20 cm. Wat is de oppervlakte?" },
    answer: 150, tolerance: 0, unit: "cm²",
    hint: { fr: "Aire = 15 × 20 ÷ 2.", en: "Area = 15 × 20 ÷ 2.", nl: "Oppervlakte = 15 × 20 ÷ 2." }
  },
  {
    id: "G5_s_82", category: "G5", level: 2,
    text: { fr: "Quelle est l'aire d'un triangle de base 12 cm et de hauteur 13 cm ?", en: "What is the area of a triangle with base 12 cm and height 13 cm?", nl: "Wat is de oppervlakte van een driehoek met basis 12 cm en hoogte 13 cm?" },
    answer: 78, tolerance: 0, unit: "cm²",
    hint: { fr: "Aire = 12 × 13 ÷ 2.", en: "Area = 12 × 13 ÷ 2.", nl: "Oppervlakte = 12 × 13 ÷ 2." }
  },
  {
    id: "G5_s_83", category: "G5", level: 2,
    text: { fr: "Quelle est l'aire d'un triangle de base 30 cm et de hauteur 4 cm ?", en: "What is the area of a triangle with base 30 cm and height 4 cm?", nl: "Wat is de oppervlakte van een driehoek met basis 30 cm en hoogte 4 cm?" },
    answer: 60, tolerance: 0, unit: "cm²",
    hint: { fr: "Aire = 30 × 4 ÷ 2.", en: "Area = 30 × 4 ÷ 2.", nl: "Oppervlakte = 30 × 4 ÷ 2." }
  },
  {
    id: "G5_s_84", category: "G5", level: 2,
    text: { fr: "Un triangle rectangle a des cathètes de 20 cm et 21 cm. Quelle est son aire ?", en: "A right triangle has legs of 20 cm and 21 cm. What is its area?", nl: "Een rechthoekige driehoek heeft rechthoekszijden van 20 cm en 21 cm. Wat is de oppervlakte?" },
    answer: 210, tolerance: 0, unit: "cm²",
    hint: { fr: "Aire = 20 × 21 ÷ 2.", en: "Area = 20 × 21 ÷ 2.", nl: "Oppervlakte = 20 × 21 ÷ 2." }
  },
  {
    id: "G5_s_85", category: "G5", level: 2,
    text: { fr: "Quelle est l'aire d'un triangle de base 11 cm et de hauteur 14 cm ?", en: "What is the area of a triangle with base 11 cm and height 14 cm?", nl: "Wat is de oppervlakte van een driehoek met basis 11 cm en hoogte 14 cm?" },
    answer: 77, tolerance: 0, unit: "cm²",
    hint: { fr: "Aire = 11 × 14 ÷ 2.", en: "Area = 11 × 14 ÷ 2.", nl: "Oppervlakte = 11 × 14 ÷ 2." }
  },
  {
    id: "G5_s_86", category: "G5", level: 2,
    text: { fr: "Quelle est l'aire d'un triangle de base 8 cm et de hauteur 5 cm ?", en: "What is the area of a triangle with base 8 cm and height 5 cm?", nl: "Wat is de oppervlakte van een driehoek met basis 8 cm en hoogte 5 cm?" },
    answer: 20, tolerance: 0, unit: "cm²",
    hint: { fr: "Aire = 8 × 5 ÷ 2.", en: "Area = 8 × 5 ÷ 2.", nl: "Oppervlakte = 8 × 5 ÷ 2." }
  },
  {
    id: "G5_s_87", category: "G5", level: 2,
    text: { fr: "Un triangle rectangle a des cathètes de 9 cm et 40 cm. Quelle est son aire ?", en: "A right triangle has legs of 9 cm and 40 cm. What is its area?", nl: "Een rechthoekige driehoek heeft rechthoekszijden van 9 cm en 40 cm. Wat is de oppervlakte?" },
    answer: 180, tolerance: 0, unit: "cm²",
    hint: { fr: "Aire = 9 × 40 ÷ 2.", en: "Area = 9 × 40 ÷ 2.", nl: "Oppervlakte = 9 × 40 ÷ 2." }
  },
  {
    id: "G5_s_88", category: "G5", level: 2,
    text: { fr: "Quelle est l'aire d'un triangle de base 17 cm et de hauteur 6 cm ?", en: "What is the area of a triangle with base 17 cm and height 6 cm?", nl: "Wat is de oppervlakte van een driehoek met basis 17 cm en hoogte 6 cm?" },
    answer: 51, tolerance: 0, unit: "cm²",
    hint: { fr: "Aire = 17 × 6 ÷ 2.", en: "Area = 17 × 6 ÷ 2.", nl: "Oppervlakte = 17 × 6 ÷ 2." }
  },
  {
    id: "G5_s_89", category: "G5", level: 2,
    text: { fr: "Quelle est l'aire d'un triangle de base 14 cm et de hauteur 15 cm ?", en: "What is the area of a triangle with base 14 cm and height 15 cm?", nl: "Wat is de oppervlakte van een driehoek met basis 14 cm en hoogte 15 cm?" },
    answer: 105, tolerance: 0, unit: "cm²",
    hint: { fr: "Aire = 14 × 15 ÷ 2.", en: "Area = 14 × 15 ÷ 2.", nl: "Oppervlakte = 14 × 15 ÷ 2." }
  },
  {
    id: "G5_s_90", category: "G5", level: 2,
    text: { fr: "Un triangle rectangle a des cathètes de 5 cm et 12 cm. Quelle est son aire ?", en: "A right triangle has legs of 5 cm and 12 cm. What is its area?", nl: "Een rechthoekige driehoek heeft rechthoekszijden van 5 cm en 12 cm. Wat is de oppervlakte?" },
    answer: 30, tolerance: 0, unit: "cm²",
    hint: { fr: "Aire = 5 × 12 ÷ 2.", en: "Area = 5 × 12 ÷ 2.", nl: "Oppervlakte = 5 × 12 ÷ 2." }
  },
  // =========================================================================
  // Level 3 — Pythagorean theorem (21 questions: s_91 – s_111)
  // =========================================================================
  {
    id: "G5_s_91", category: "G5", level: 3,
    text: { fr: "Un triangle rectangle a des cathètes de 7 cm et 24 cm. Quelle est l'hypoténuse ?", en: "A right triangle has legs 7 cm and 24 cm. What is the hypotenuse?", nl: "Een rechthoekige driehoek heeft rechthoekszijden 7 cm en 24 cm. Wat is de hypotenusa?" },
    answer: 25, tolerance: 0, unit: "cm",
    hint: { fr: "c² = 49 + 576 = 625. Donc c = 25.", en: "c² = 49 + 576 = 625. So c = 25.", nl: "c² = 49 + 576 = 625. Dus c = 25." }
  },
  {
    id: "G5_s_92", category: "G5", level: 3,
    text: { fr: "Un triangle rectangle a une hypoténuse de 15 cm et une cathète de 9 cm. Quelle est l'autre cathète ?", en: "A right triangle has hypotenuse 15 cm and a leg of 9 cm. What is the other leg?", nl: "Een rechthoekige driehoek heeft hypotenusa 15 cm en een zijde van 9 cm. Wat is de andere zijde?" },
    answer: 12, tolerance: 0, unit: "cm",
    hint: { fr: "b² = 225 - 81 = 144. Donc b = 12.", en: "b² = 225 - 81 = 144. So b = 12.", nl: "b² = 225 - 81 = 144. Dus b = 12." }
  },
  {
    id: "G5_s_93", category: "G5", level: 3,
    text: { fr: "Un triangle rectangle a des cathètes de 10 cm et 24 cm. Quelle est l'hypoténuse ?", en: "A right triangle has legs 10 cm and 24 cm. What is the hypotenuse?", nl: "Een rechthoekige driehoek heeft rechthoekszijden 10 cm en 24 cm. Wat is de hypotenusa?" },
    answer: 26, tolerance: 0, unit: "cm",
    hint: { fr: "c² = 100 + 576 = 676. Donc c = 26.", en: "c² = 100 + 576 = 676. So c = 26.", nl: "c² = 100 + 576 = 676. Dus c = 26." }
  },
  {
    id: "G5_s_94", category: "G5", level: 3,
    text: { fr: "Un triangle rectangle a une hypoténuse de 20 cm et une cathète de 12 cm. Quelle est l'autre cathète ?", en: "A right triangle has hypotenuse 20 cm and a leg of 12 cm. What is the other leg?", nl: "Een rechthoekige driehoek heeft hypotenusa 20 cm en een zijde van 12 cm. Wat is de andere zijde?" },
    answer: 16, tolerance: 0, unit: "cm",
    hint: { fr: "b² = 400 - 144 = 256. Donc b = 16.", en: "b² = 400 - 144 = 256. So b = 16.", nl: "b² = 400 - 144 = 256. Dus b = 16." }
  },
  {
    id: "G5_s_95", category: "G5", level: 3,
    text: { fr: "Un triangle rectangle a des cathètes de 6 cm et 8 cm. Quelle est l'hypoténuse ?", en: "A right triangle has legs 6 cm and 8 cm. What is the hypotenuse?", nl: "Een rechthoekige driehoek heeft rechthoekszijden 6 cm en 8 cm. Wat is de hypotenusa?" },
    answer: 10, tolerance: 0, unit: "cm",
    hint: { fr: "c² = 36 + 64 = 100. Donc c = 10.", en: "c² = 36 + 64 = 100. So c = 10.", nl: "c² = 36 + 64 = 100. Dus c = 10." }
  },
  {
    id: "G5_s_96", category: "G5", level: 3,
    text: { fr: "Un triangle rectangle a une hypoténuse de 25 cm et une cathète de 15 cm. Quelle est l'autre cathète ?", en: "A right triangle has hypotenuse 25 cm and a leg of 15 cm. What is the other leg?", nl: "Een rechthoekige driehoek heeft hypotenusa 25 cm en een zijde van 15 cm. Wat is de andere zijde?" },
    answer: 20, tolerance: 0, unit: "cm",
    hint: { fr: "b² = 625 - 225 = 400. Donc b = 20.", en: "b² = 625 - 225 = 400. So b = 20.", nl: "b² = 625 - 225 = 400. Dus b = 20." }
  },
  {
    id: "G5_s_97", category: "G5", level: 3,
    text: { fr: "Un triangle rectangle a des cathètes de 15 cm et 36 cm. Quelle est l'hypoténuse ?", en: "A right triangle has legs 15 cm and 36 cm. What is the hypotenuse?", nl: "Een rechthoekige driehoek heeft rechthoekszijden 15 cm en 36 cm. Wat is de hypotenusa?" },
    answer: 39, tolerance: 0, unit: "cm",
    hint: { fr: "c² = 225 + 1296 = 1521. Donc c = 39.", en: "c² = 225 + 1296 = 1521. So c = 39.", nl: "c² = 225 + 1296 = 1521. Dus c = 39." }
  },
  {
    id: "G5_s_98", category: "G5", level: 3,
    text: { fr: "Un triangle rectangle a une hypoténuse de 26 cm et une cathète de 24 cm. Quelle est l'autre cathète ?", en: "A right triangle has hypotenuse 26 cm and a leg of 24 cm. What is the other leg?", nl: "Een rechthoekige driehoek heeft hypotenusa 26 cm en een zijde van 24 cm. Wat is de andere zijde?" },
    answer: 10, tolerance: 0, unit: "cm",
    hint: { fr: "b² = 676 - 576 = 100. Donc b = 10.", en: "b² = 676 - 576 = 100. So b = 10.", nl: "b² = 676 - 576 = 100. Dus b = 10." }
  },
  {
    id: "G5_s_99", category: "G5", level: 3,
    text: { fr: "Un triangle rectangle a des cathètes de 16 cm et 30 cm. Quelle est l'hypoténuse ?", en: "A right triangle has legs 16 cm and 30 cm. What is the hypotenuse?", nl: "Een rechthoekige driehoek heeft rechthoekszijden 16 cm en 30 cm. Wat is de hypotenusa?" },
    answer: 34, tolerance: 0, unit: "cm",
    hint: { fr: "c² = 256 + 900 = 1156. Donc c = 34.", en: "c² = 256 + 900 = 1156. So c = 34.", nl: "c² = 256 + 900 = 1156. Dus c = 34." }
  },
  {
    id: "G5_s_100", category: "G5", level: 3,
    text: { fr: "Un triangle rectangle a une hypoténuse de 50 cm et une cathète de 30 cm. Quelle est l'autre cathète ?", en: "A right triangle has hypotenuse 50 cm and a leg of 30 cm. What is the other leg?", nl: "Een rechthoekige driehoek heeft hypotenusa 50 cm en een zijde van 30 cm. Wat is de andere zijde?" },
    answer: 40, tolerance: 0, unit: "cm",
    hint: { fr: "b² = 2500 - 900 = 1600. Donc b = 40.", en: "b² = 2500 - 900 = 1600. So b = 40.", nl: "b² = 2500 - 900 = 1600. Dus b = 40." }
  },
  {
    id: "G5_s_101", category: "G5", level: 3,
    text: { fr: "Un triangle rectangle a des cathètes de 18 cm et 24 cm. Quelle est l'hypoténuse ?", en: "A right triangle has legs 18 cm and 24 cm. What is the hypotenuse?", nl: "Een rechthoekige driehoek heeft rechthoekszijden 18 cm en 24 cm. Wat is de hypotenusa?" },
    answer: 30, tolerance: 0, unit: "cm",
    hint: { fr: "c² = 324 + 576 = 900. Donc c = 30.", en: "c² = 324 + 576 = 900. So c = 30.", nl: "c² = 324 + 576 = 900. Dus c = 30." }
  },
  {
    id: "G5_s_102", category: "G5", level: 3,
    text: { fr: "Un triangle rectangle a une hypoténuse de 34 cm et une cathète de 16 cm. Quelle est l'autre cathète ?", en: "A right triangle has hypotenuse 34 cm and a leg of 16 cm. What is the other leg?", nl: "Een rechthoekige driehoek heeft hypotenusa 34 cm en een zijde van 16 cm. Wat is de andere zijde?" },
    answer: 30, tolerance: 0, unit: "cm",
    hint: { fr: "b² = 1156 - 256 = 900. Donc b = 30.", en: "b² = 1156 - 256 = 900. So b = 30.", nl: "b² = 1156 - 256 = 900. Dus b = 30." }
  },
  {
    id: "G5_s_103", category: "G5", level: 3,
    text: { fr: "Un triangle rectangle a des cathètes de 14 cm et 48 cm. Quelle est l'hypoténuse ?", en: "A right triangle has legs 14 cm and 48 cm. What is the hypotenuse?", nl: "Een rechthoekige driehoek heeft rechthoekszijden 14 cm en 48 cm. Wat is de hypotenusa?" },
    answer: 50, tolerance: 0, unit: "cm",
    hint: { fr: "c² = 196 + 2304 = 2500. Donc c = 50.", en: "c² = 196 + 2304 = 2500. So c = 50.", nl: "c² = 196 + 2304 = 2500. Dus c = 50." }
  },
  {
    id: "G5_s_104", category: "G5", level: 3,
    text: { fr: "Un triangle rectangle a une hypoténuse de 30 cm et une cathète de 18 cm. Quelle est l'autre cathète ?", en: "A right triangle has hypotenuse 30 cm and a leg of 18 cm. What is the other leg?", nl: "Een rechthoekige driehoek heeft hypotenusa 30 cm en een zijde van 18 cm. Wat is de andere zijde?" },
    answer: 24, tolerance: 0, unit: "cm",
    hint: { fr: "b² = 900 - 324 = 576. Donc b = 24.", en: "b² = 900 - 324 = 576. So b = 24.", nl: "b² = 900 - 324 = 576. Dus b = 24." }
  },
  {
    id: "G5_s_105", category: "G5", level: 3,
    text: { fr: "Un triangle rectangle a des cathètes de 24 cm et 32 cm. Quelle est l'hypoténuse ?", en: "A right triangle has legs 24 cm and 32 cm. What is the hypotenuse?", nl: "Een rechthoekige driehoek heeft rechthoekszijden 24 cm en 32 cm. Wat is de hypotenusa?" },
    answer: 40, tolerance: 0, unit: "cm",
    hint: { fr: "c² = 576 + 1024 = 1600. Donc c = 40.", en: "c² = 576 + 1024 = 1600. So c = 40.", nl: "c² = 576 + 1024 = 1600. Dus c = 40." }
  },
  {
    id: "G5_s_106", category: "G5", level: 3,
    text: { fr: "Un triangle rectangle a une hypoténuse de 52 cm et une cathète de 20 cm. Quelle est l'autre cathète ?", en: "A right triangle has hypotenuse 52 cm and a leg of 20 cm. What is the other leg?", nl: "Een rechthoekige driehoek heeft hypotenusa 52 cm en een zijde van 20 cm. Wat is de andere zijde?" },
    answer: 48, tolerance: 0, unit: "cm",
    hint: { fr: "b² = 2704 - 400 = 2304. Donc b = 48.", en: "b² = 2704 - 400 = 2304. So b = 48.", nl: "b² = 2704 - 400 = 2304. Dus b = 48." }
  },
  {
    id: "G5_s_107", category: "G5", level: 3,
    text: { fr: "Un triangle rectangle a des cathètes de 40 cm et 42 cm. Quelle est l'hypoténuse ?", en: "A right triangle has legs 40 cm and 42 cm. What is the hypotenuse?", nl: "Een rechthoekige driehoek heeft rechthoekszijden 40 cm en 42 cm. Wat is de hypotenusa?" },
    answer: 58, tolerance: 0, unit: "cm",
    hint: { fr: "c² = 1600 + 1764 = 3364. Donc c = 58.", en: "c² = 1600 + 1764 = 3364. So c = 58.", nl: "c² = 1600 + 1764 = 3364. Dus c = 58." }
  },
  {
    id: "G5_s_108", category: "G5", level: 3,
    text: { fr: "Un triangle rectangle a une hypoténuse de 58 cm et une cathète de 42 cm. Quelle est l'autre cathète ?", en: "A right triangle has hypotenuse 58 cm and a leg of 42 cm. What is the other leg?", nl: "Een rechthoekige driehoek heeft hypotenusa 58 cm en een zijde van 42 cm. Wat is de andere zijde?" },
    answer: 40, tolerance: 0, unit: "cm",
    hint: { fr: "b² = 3364 - 1764 = 1600. Donc b = 40.", en: "b² = 3364 - 1764 = 1600. So b = 40.", nl: "b² = 3364 - 1764 = 1600. Dus b = 40." }
  },
  {
    id: "G5_s_109", category: "G5", level: 3,
    text: { fr: "Un triangle rectangle a des cathètes de 30 cm et 40 cm. Quelle est l'hypoténuse ?", en: "A right triangle has legs 30 cm and 40 cm. What is the hypotenuse?", nl: "Een rechthoekige driehoek heeft rechthoekszijden 30 cm en 40 cm. Wat is de hypotenusa?" },
    answer: 50, tolerance: 0, unit: "cm",
    hint: { fr: "c² = 900 + 1600 = 2500. Donc c = 50.", en: "c² = 900 + 1600 = 2500. So c = 50.", nl: "c² = 900 + 1600 = 2500. Dus c = 50." }
  },
  {
    id: "G5_s_110", category: "G5", level: 3,
    text: { fr: "Un triangle rectangle a une hypoténuse de 39 cm et une cathète de 15 cm. Quelle est l'autre cathète ?", en: "A right triangle has hypotenuse 39 cm and a leg of 15 cm. What is the other leg?", nl: "Een rechthoekige driehoek heeft hypotenusa 39 cm en een zijde van 15 cm. Wat is de andere zijde?" },
    answer: 36, tolerance: 0, unit: "cm",
    hint: { fr: "b² = 1521 - 225 = 1296. Donc b = 36.", en: "b² = 1521 - 225 = 1296. So b = 36.", nl: "b² = 1521 - 225 = 1296. Dus b = 36." }
  },
  {
    id: "G5_s_111", category: "G5", level: 3,
    text: { fr: "Un triangle rectangle a des cathètes de 20 cm et 48 cm. Quelle est l'hypoténuse ?", en: "A right triangle has legs 20 cm and 48 cm. What is the hypotenuse?", nl: "Een rechthoekige driehoek heeft rechthoekszijden 20 cm en 48 cm. Wat is de hypotenusa?" },
    answer: 52, tolerance: 0, unit: "cm",
    hint: { fr: "c² = 400 + 2304 = 2704. Donc c = 52.", en: "c² = 400 + 2304 = 2704. So c = 52.", nl: "c² = 400 + 2304 = 2704. Dus c = 52." }
  },
];

export function generate(level = 1) {
  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const id = `G5_gen_${Date.now()}_${rand(100, 999)}`;
  if (level === 1) {
    const a = rand(3, 15); const b = rand(3, 15); const c = rand(Math.abs(a - b) + 1, a + b - 1);
    return { id, category: 'G5', level, text: { fr: `Un triangle a des côtés de ${a} cm, ${b} cm et ${c} cm. Quel est son périmètre ?`, en: `A triangle has sides ${a} cm, ${b} cm and ${c} cm. What is its perimeter?`, nl: `Een driehoek heeft zijden van ${a} cm, ${b} cm en ${c} cm. Wat is de omtrek?` }, answer: a + b + c, tolerance: 0 };
  }
  if (level === 2) {
    const base = rand(4, 20) * 2; const h = rand(3, 15);
    return { id, category: 'G5', level, text: { fr: `Quelle est l'aire d'un triangle de base ${base} cm et de hauteur ${h} cm ?`, en: `What is the area of a triangle with base ${base} cm and height ${h} cm?`, nl: `Wat is de oppervlakte van een driehoek met basis ${base} cm en hoogte ${h} cm?` }, answer: base * h / 2, tolerance: 0 };
  }
  // Pythagorean triples
  const triples = [[3,4,5],[5,12,13],[6,8,10],[8,15,17],[7,24,25]];
  const [a, b, c] = triples[rand(0, triples.length - 1)];
  const k = rand(1, 3);
  return { id, category: 'G5', level, text: { fr: `Un triangle rectangle a des cathètes de ${a*k} cm et ${b*k} cm. Quelle est l'hypoténuse ?`, en: `A right triangle has legs ${a*k} cm and ${b*k} cm. What is the hypotenuse?`, nl: `Een rechthoekige driehoek heeft zijden ${a*k} cm en ${b*k} cm. Wat is de hypotenusa?` }, answer: c * k, tolerance: 0 };
}
