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
