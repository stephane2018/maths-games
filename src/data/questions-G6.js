// =============================================================================
// G6 - Cercles
// CE1D Belgian exam - Trilingual (FR / EN / NL)
// =============================================================================

export const questions = [
  // Level 1 — Diameter / radius
  {
    id: "G6_s_1", category: "G6", level: 1,
    text: { fr: "Un cercle a un rayon de 7 cm. Quel est son diamètre ?", en: "A circle has a radius of 7 cm. What is its diameter?", nl: "Een cirkel heeft een straal van 7 cm. Wat is de diameter?" },
    answer: 14, tolerance: 0, unit: "cm",
    hint: { fr: "Diamètre = 2 × rayon.", en: "Diameter = 2 × radius.", nl: "Diameter = 2 × straal." }
  },
  {
    id: "G6_s_2", category: "G6", level: 1,
    text: { fr: "Un cercle a un diamètre de 20 cm. Quel est son rayon ?", en: "A circle has a diameter of 20 cm. What is its radius?", nl: "Een cirkel heeft een diameter van 20 cm. Wat is de straal?" },
    answer: 10, tolerance: 0, unit: "cm",
    hint: { fr: "Rayon = diamètre ÷ 2.", en: "Radius = diameter ÷ 2.", nl: "Straal = diameter ÷ 2." }
  },
  {
    id: "G6_s_3", category: "G6", level: 1,
    text: { fr: "Un cercle a un rayon de 15 cm. Quel est son diamètre ?", en: "A circle has a radius of 15 cm. What is its diameter?", nl: "Een cirkel heeft een straal van 15 cm. Wat is de diameter?" },
    answer: 30, tolerance: 0, unit: "cm",
    hint: { fr: "Diamètre = 2 × 15.", en: "Diameter = 2 × 15.", nl: "Diameter = 2 × 15." }
  },
  {
    id: "G6_s_4", category: "G6", level: 1,
    text: { fr: "Un cercle a un diamètre de 9 cm. Quel est son rayon ?", en: "A circle has a diameter of 9 cm. What is its radius?", nl: "Een cirkel heeft een diameter van 9 cm. Wat is de straal?" },
    answer: 4.5, tolerance: 0.01, unit: "cm",
    hint: { fr: "Rayon = 9 ÷ 2 = 4,5.", en: "Radius = 9 ÷ 2 = 4.5.", nl: "Straal = 9 ÷ 2 = 4,5." }
  },
  {
    id: "G6_s_5", category: "G6", level: 1,
    text: { fr: "Un cercle a un rayon de 25 cm. Quel est son diamètre ?", en: "A circle has a radius of 25 cm. What is its diameter?", nl: "Een cirkel heeft een straal van 25 cm. Wat is de diameter?" },
    answer: 50, tolerance: 0, unit: "cm",
    hint: { fr: "Diamètre = 2 × 25.", en: "Diameter = 2 × 25.", nl: "Diameter = 2 × 25." }
  },
  {
    id: "G6_s_16", category: "G6", level: 1,
    text: { fr: "Un cercle a un rayon de 12 cm. Quel est son diamètre ?", en: "A circle has a radius of 12 cm. What is its diameter?", nl: "Een cirkel heeft een straal van 12 cm. Wat is de diameter?" },
    answer: 24, tolerance: 0, unit: "cm",
    hint: { fr: "Diamètre = 2 × 12.", en: "Diameter = 2 × 12.", nl: "Diameter = 2 × 12." }
  },
  {
    id: "G6_s_17", category: "G6", level: 1,
    text: { fr: "Un cercle a un diamètre de 18 cm. Quel est son rayon ?", en: "A circle has a diameter of 18 cm. What is its radius?", nl: "Een cirkel heeft een diameter van 18 cm. Wat is de straal?" },
    answer: 9, tolerance: 0, unit: "cm",
    hint: { fr: "Rayon = 18 ÷ 2.", en: "Radius = 18 ÷ 2.", nl: "Straal = 18 ÷ 2." }
  },
  {
    id: "G6_s_18", category: "G6", level: 1,
    text: { fr: "Un cercle a un rayon de 3 cm. Quel est son diamètre ?", en: "A circle has a radius of 3 cm. What is its diameter?", nl: "Een cirkel heeft een straal van 3 cm. Wat is de diameter?" },
    answer: 6, tolerance: 0, unit: "cm",
    hint: { fr: "Diamètre = 2 × 3.", en: "Diameter = 2 × 3.", nl: "Diameter = 2 × 3." }
  },
  {
    id: "G6_s_19", category: "G6", level: 1,
    text: { fr: "Un cercle a un diamètre de 50 cm. Quel est son rayon ?", en: "A circle has a diameter of 50 cm. What is its radius?", nl: "Een cirkel heeft een diameter van 50 cm. Wat is de straal?" },
    answer: 25, tolerance: 0, unit: "cm",
    hint: { fr: "Rayon = 50 ÷ 2.", en: "Radius = 50 ÷ 2.", nl: "Straal = 50 ÷ 2." }
  },
  {
    id: "G6_s_20", category: "G6", level: 1,
    text: { fr: "Un cercle a un rayon de 11 cm. Quel est son diamètre ?", en: "A circle has a radius of 11 cm. What is its diameter?", nl: "Een cirkel heeft een straal van 11 cm. Wat is de diameter?" },
    answer: 22, tolerance: 0, unit: "cm",
    hint: { fr: "Diamètre = 2 × 11.", en: "Diameter = 2 × 11.", nl: "Diameter = 2 × 11." }
  },
  {
    id: "G6_s_21", category: "G6", level: 1,
    text: { fr: "Un cercle a un diamètre de 13 cm. Quel est son rayon ?", en: "A circle has a diameter of 13 cm. What is its radius?", nl: "Een cirkel heeft een diameter van 13 cm. Wat is de straal?" },
    answer: 6.5, tolerance: 0.01, unit: "cm",
    hint: { fr: "Rayon = 13 ÷ 2 = 6,5.", en: "Radius = 13 ÷ 2 = 6.5.", nl: "Straal = 13 ÷ 2 = 6,5." }
  },
  {
    id: "G6_s_22", category: "G6", level: 1,
    text: { fr: "Un cercle a un rayon de 0,5 cm. Quel est son diamètre ?", en: "A circle has a radius of 0.5 cm. What is its diameter?", nl: "Een cirkel heeft een straal van 0,5 cm. Wat is de diameter?" },
    answer: 1, tolerance: 0, unit: "cm",
    hint: { fr: "Diamètre = 2 × 0,5.", en: "Diameter = 2 × 0.5.", nl: "Diameter = 2 × 0,5." }
  },
  {
    id: "G6_s_23", category: "G6", level: 1,
    text: { fr: "Un cercle a un diamètre de 7 cm. Quel est son rayon ?", en: "A circle has a diameter of 7 cm. What is its radius?", nl: "Een cirkel heeft een diameter van 7 cm. Wat is de straal?" },
    answer: 3.5, tolerance: 0.01, unit: "cm",
    hint: { fr: "Rayon = 7 ÷ 2 = 3,5.", en: "Radius = 7 ÷ 2 = 3.5.", nl: "Straal = 7 ÷ 2 = 3,5." }
  },
  {
    id: "G6_s_24", category: "G6", level: 1,
    text: { fr: "Un cercle a un rayon de 30 cm. Quel est son diamètre ?", en: "A circle has a radius of 30 cm. What is its diameter?", nl: "Een cirkel heeft een straal van 30 cm. Wat is de diameter?" },
    answer: 60, tolerance: 0, unit: "cm",
    hint: { fr: "Diamètre = 2 × 30.", en: "Diameter = 2 × 30.", nl: "Diameter = 2 × 30." }
  },
  {
    id: "G6_s_25", category: "G6", level: 1,
    text: { fr: "Un cercle a un diamètre de 100 cm. Quel est son rayon ?", en: "A circle has a diameter of 100 cm. What is its radius?", nl: "Een cirkel heeft een diameter van 100 cm. Wat is de straal?" },
    answer: 50, tolerance: 0, unit: "cm",
    hint: { fr: "Rayon = 100 ÷ 2.", en: "Radius = 100 ÷ 2.", nl: "Straal = 100 ÷ 2." }
  },
  {
    id: "G6_s_26", category: "G6", level: 1,
    text: { fr: "Un cercle a un rayon de 8 cm. Quel est son diamètre ?", en: "A circle has a radius of 8 cm. What is its diameter?", nl: "Een cirkel heeft een straal van 8 cm. Wat is de diameter?" },
    answer: 16, tolerance: 0, unit: "cm",
    hint: { fr: "Diamètre = 2 × 8.", en: "Diameter = 2 × 8.", nl: "Diameter = 2 × 8." }
  },
  {
    id: "G6_s_27", category: "G6", level: 1,
    text: { fr: "Un cercle a un diamètre de 15 cm. Quel est son rayon ?", en: "A circle has a diameter of 15 cm. What is its radius?", nl: "Een cirkel heeft een diameter van 15 cm. Wat is de straal?" },
    answer: 7.5, tolerance: 0.01, unit: "cm",
    hint: { fr: "Rayon = 15 ÷ 2 = 7,5.", en: "Radius = 15 ÷ 2 = 7.5.", nl: "Straal = 15 ÷ 2 = 7,5." }
  },
  // Level 2 — Circumference (use π = 3.14)
  {
    id: "G6_s_6", category: "G6", level: 2,
    text: { fr: "Calcule le périmètre d'un cercle de rayon 5 cm (π = 3,14).", en: "Calculate the circumference of a circle with radius 5 cm (π = 3.14).", nl: "Bereken de omtrek van een cirkel met straal 5 cm (π = 3,14)." },
    answer: 31.4, tolerance: 0.1, unit: "cm",
    hint: { fr: "Périmètre = 2 × π × r = 2 × 3,14 × 5.", en: "C = 2 × π × r = 2 × 3.14 × 5.", nl: "Omtrek = 2 × π × r = 2 × 3,14 × 5." }
  },
  {
    id: "G6_s_7", category: "G6", level: 2,
    text: { fr: "Calcule le périmètre d'un cercle de diamètre 10 cm (π = 3,14).", en: "Calculate the circumference of a circle with diameter 10 cm (π = 3.14).", nl: "Bereken de omtrek van een cirkel met diameter 10 cm (π = 3,14)." },
    answer: 31.4, tolerance: 0.1, unit: "cm",
    hint: { fr: "Périmètre = π × d = 3,14 × 10.", en: "C = π × d = 3.14 × 10.", nl: "Omtrek = π × d = 3,14 × 10." }
  },
  {
    id: "G6_s_8", category: "G6", level: 2,
    text: { fr: "Calcule le périmètre d'un cercle de rayon 7 cm (π = 3,14).", en: "Calculate the circumference of a circle with radius 7 cm (π = 3.14).", nl: "Bereken de omtrek van een cirkel met straal 7 cm (π = 3,14)." },
    answer: 43.96, tolerance: 0.1, unit: "cm",
    hint: { fr: "2 × 3,14 × 7 = 43,96.", en: "2 × 3.14 × 7 = 43.96.", nl: "2 × 3,14 × 7 = 43,96." }
  },
  {
    id: "G6_s_9", category: "G6", level: 2,
    text: { fr: "Calcule le périmètre d'un cercle de diamètre 20 cm (π = 3,14).", en: "Calculate the circumference of a circle with diameter 20 cm (π = 3.14).", nl: "Bereken de omtrek van een cirkel met diameter 20 cm (π = 3,14)." },
    answer: 62.8, tolerance: 0.1, unit: "cm",
    hint: { fr: "3,14 × 20 = 62,8.", en: "3.14 × 20 = 62.8.", nl: "3,14 × 20 = 62,8." }
  },
  {
    id: "G6_s_10", category: "G6", level: 2,
    text: { fr: "Calcule le périmètre d'un cercle de rayon 3 cm (π = 3,14).", en: "Calculate the circumference of a circle with radius 3 cm (π = 3.14).", nl: "Bereken de omtrek van een cirkel met straal 3 cm (π = 3,14)." },
    answer: 18.84, tolerance: 0.1, unit: "cm",
    hint: { fr: "2 × 3,14 × 3 = 18,84.", en: "2 × 3.14 × 3 = 18.84.", nl: "2 × 3,14 × 3 = 18,84." }
  },
  {
    id: "G6_s_28", category: "G6", level: 2,
    text: { fr: "Calcule le périmètre d'un cercle de rayon 4 cm (π = 3,14).", en: "Calculate the circumference of a circle with radius 4 cm (π = 3.14).", nl: "Bereken de omtrek van een cirkel met straal 4 cm (π = 3,14)." },
    answer: 25.12, tolerance: 0.1, unit: "cm",
    hint: { fr: "2 × 3,14 × 4 = 25,12.", en: "2 × 3.14 × 4 = 25.12.", nl: "2 × 3,14 × 4 = 25,12." }
  },
  {
    id: "G6_s_29", category: "G6", level: 2,
    text: { fr: "Calcule le périmètre d'un cercle de diamètre 14 cm (π = 3,14).", en: "Calculate the circumference of a circle with diameter 14 cm (π = 3.14).", nl: "Bereken de omtrek van een cirkel met diameter 14 cm (π = 3,14)." },
    answer: 43.96, tolerance: 0.1, unit: "cm",
    hint: { fr: "3,14 × 14 = 43,96.", en: "3.14 × 14 = 43.96.", nl: "3,14 × 14 = 43,96." }
  },
  {
    id: "G6_s_30", category: "G6", level: 2,
    text: { fr: "Calcule le périmètre d'un cercle de rayon 10 cm (π = 3,14).", en: "Calculate the circumference of a circle with radius 10 cm (π = 3.14).", nl: "Bereken de omtrek van een cirkel met straal 10 cm (π = 3,14)." },
    answer: 62.8, tolerance: 0.1, unit: "cm",
    hint: { fr: "2 × 3,14 × 10 = 62,8.", en: "2 × 3.14 × 10 = 62.8.", nl: "2 × 3,14 × 10 = 62,8." }
  },
  {
    id: "G6_s_31", category: "G6", level: 2,
    text: { fr: "Calcule le périmètre d'un cercle de diamètre 8 cm (π = 3,14).", en: "Calculate the circumference of a circle with diameter 8 cm (π = 3.14).", nl: "Bereken de omtrek van een cirkel met diameter 8 cm (π = 3,14)." },
    answer: 25.12, tolerance: 0.1, unit: "cm",
    hint: { fr: "3,14 × 8 = 25,12.", en: "3.14 × 8 = 25.12.", nl: "3,14 × 8 = 25,12." }
  },
  {
    id: "G6_s_32", category: "G6", level: 2,
    text: { fr: "Calcule le périmètre d'un cercle de rayon 6 cm (π = 3,14).", en: "Calculate the circumference of a circle with radius 6 cm (π = 3.14).", nl: "Bereken de omtrek van een cirkel met straal 6 cm (π = 3,14)." },
    answer: 37.68, tolerance: 0.1, unit: "cm",
    hint: { fr: "2 × 3,14 × 6 = 37,68.", en: "2 × 3.14 × 6 = 37.68.", nl: "2 × 3,14 × 6 = 37,68." }
  },
  {
    id: "G6_s_33", category: "G6", level: 2,
    text: { fr: "Calcule le périmètre d'un cercle de diamètre 25 cm (π = 3,14).", en: "Calculate the circumference of a circle with diameter 25 cm (π = 3.14).", nl: "Bereken de omtrek van een cirkel met diameter 25 cm (π = 3,14)." },
    answer: 78.5, tolerance: 0.1, unit: "cm",
    hint: { fr: "3,14 × 25 = 78,5.", en: "3.14 × 25 = 78.5.", nl: "3,14 × 25 = 78,5." }
  },
  {
    id: "G6_s_34", category: "G6", level: 2,
    text: { fr: "Calcule le périmètre d'un cercle de rayon 9 cm (π = 3,14).", en: "Calculate the circumference of a circle with radius 9 cm (π = 3.14).", nl: "Bereken de omtrek van een cirkel met straal 9 cm (π = 3,14)." },
    answer: 56.52, tolerance: 0.1, unit: "cm",
    hint: { fr: "2 × 3,14 × 9 = 56,52.", en: "2 × 3.14 × 9 = 56.52.", nl: "2 × 3,14 × 9 = 56,52." }
  },
  {
    id: "G6_s_35", category: "G6", level: 2,
    text: { fr: "Calcule le périmètre d'un cercle de diamètre 12 cm (π = 3,14).", en: "Calculate the circumference of a circle with diameter 12 cm (π = 3.14).", nl: "Bereken de omtrek van een cirkel met diameter 12 cm (π = 3,14)." },
    answer: 37.68, tolerance: 0.1, unit: "cm",
    hint: { fr: "3,14 × 12 = 37,68.", en: "3.14 × 12 = 37.68.", nl: "3,14 × 12 = 37,68." }
  },
  {
    id: "G6_s_36", category: "G6", level: 2,
    text: { fr: "Calcule le périmètre d'un cercle de rayon 1 cm (π = 3,14).", en: "Calculate the circumference of a circle with radius 1 cm (π = 3.14).", nl: "Bereken de omtrek van een cirkel met straal 1 cm (π = 3,14)." },
    answer: 6.28, tolerance: 0.1, unit: "cm",
    hint: { fr: "2 × 3,14 × 1 = 6,28.", en: "2 × 3.14 × 1 = 6.28.", nl: "2 × 3,14 × 1 = 6,28." }
  },
  {
    id: "G6_s_37", category: "G6", level: 2,
    text: { fr: "Calcule le périmètre d'un cercle de diamètre 30 cm (π = 3,14).", en: "Calculate the circumference of a circle with diameter 30 cm (π = 3.14).", nl: "Bereken de omtrek van een cirkel met diameter 30 cm (π = 3,14)." },
    answer: 94.2, tolerance: 0.1, unit: "cm",
    hint: { fr: "3,14 × 30 = 94,2.", en: "3.14 × 30 = 94.2.", nl: "3,14 × 30 = 94,2." }
  },
  {
    id: "G6_s_38", category: "G6", level: 2,
    text: { fr: "Calcule le périmètre d'un cercle de rayon 15 cm (π = 3,14).", en: "Calculate the circumference of a circle with radius 15 cm (π = 3.14).", nl: "Bereken de omtrek van een cirkel met straal 15 cm (π = 3,14)." },
    answer: 94.2, tolerance: 0.1, unit: "cm",
    hint: { fr: "2 × 3,14 × 15 = 94,2.", en: "2 × 3.14 × 15 = 94.2.", nl: "2 × 3,14 × 15 = 94,2." }
  },
  {
    id: "G6_s_39", category: "G6", level: 2,
    text: { fr: "Calcule le périmètre d'un cercle de diamètre 5 cm (π = 3,14).", en: "Calculate the circumference of a circle with diameter 5 cm (π = 3.14).", nl: "Bereken de omtrek van een cirkel met diameter 5 cm (π = 3,14)." },
    answer: 15.7, tolerance: 0.1, unit: "cm",
    hint: { fr: "3,14 × 5 = 15,7.", en: "3.14 × 5 = 15.7.", nl: "3,14 × 5 = 15,7." }
  },
  // Level 3 — Area and inverse problems
  {
    id: "G6_s_11", category: "G6", level: 3,
    text: { fr: "Calcule l'aire d'un cercle de rayon 5 cm (π = 3,14).", en: "Calculate the area of a circle with radius 5 cm (π = 3.14).", nl: "Bereken de oppervlakte van een cirkel met straal 5 cm (π = 3,14)." },
    answer: 78.5, tolerance: 0.1, unit: "cm²",
    hint: { fr: "Aire = π × r² = 3,14 × 25.", en: "Area = π × r² = 3.14 × 25.", nl: "Oppervlakte = π × r² = 3,14 × 25." }
  },
  {
    id: "G6_s_12", category: "G6", level: 3,
    text: { fr: "Calcule l'aire d'un cercle de rayon 10 cm (π = 3,14).", en: "Calculate the area of a circle with radius 10 cm (π = 3.14).", nl: "Bereken de oppervlakte van een cirkel met straal 10 cm (π = 3,14)." },
    answer: 314, tolerance: 0.1, unit: "cm²",
    hint: { fr: "Aire = 3,14 × 100.", en: "Area = 3.14 × 100.", nl: "Oppervlakte = 3,14 × 100." }
  },
  {
    id: "G6_s_13", category: "G6", level: 3,
    text: { fr: "Calcule l'aire d'un cercle de rayon 4 cm (π = 3,14).", en: "Calculate the area of a circle with radius 4 cm (π = 3.14).", nl: "Bereken de oppervlakte van een cirkel met straal 4 cm (π = 3,14)." },
    answer: 50.24, tolerance: 0.1, unit: "cm²",
    hint: { fr: "Aire = 3,14 × 16.", en: "Area = 3.14 × 16.", nl: "Oppervlakte = 3,14 × 16." }
  },
  {
    id: "G6_s_14", category: "G6", level: 3,
    text: { fr: "Calcule l'aire d'un cercle de diamètre 6 cm (π = 3,14).", en: "Calculate the area of a circle with diameter 6 cm (π = 3.14).", nl: "Bereken de oppervlakte van een cirkel met diameter 6 cm (π = 3,14)." },
    answer: 28.26, tolerance: 0.1, unit: "cm²",
    hint: { fr: "Rayon = 3. Aire = 3,14 × 9.", en: "Radius = 3. Area = 3.14 × 9.", nl: "Straal = 3. Oppervlakte = 3,14 × 9." }
  },
  {
    id: "G6_s_15", category: "G6", level: 3,
    text: { fr: "Un cercle a un périmètre de 31,4 cm (π = 3,14). Quel est son rayon ?", en: "A circle has a circumference of 31.4 cm (π = 3.14). What is its radius?", nl: "Een cirkel heeft een omtrek van 31,4 cm (π = 3,14). Wat is de straal?" },
    answer: 5, tolerance: 0.1, unit: "cm",
    hint: { fr: "r = périmètre ÷ (2 × π) = 31,4 ÷ 6,28.", en: "r = C ÷ (2 × π) = 31.4 ÷ 6.28.", nl: "r = omtrek ÷ (2 × π) = 31,4 ÷ 6,28." }
  },
  {
    id: "G6_s_40", category: "G6", level: 3,
    text: { fr: "Calcule l'aire d'un cercle de rayon 7 cm (π = 3,14).", en: "Calculate the area of a circle with radius 7 cm (π = 3.14).", nl: "Bereken de oppervlakte van een cirkel met straal 7 cm (π = 3,14)." },
    answer: 153.86, tolerance: 0.1, unit: "cm²",
    hint: { fr: "Aire = 3,14 × 49 = 153,86.", en: "Area = 3.14 × 49 = 153.86.", nl: "Oppervlakte = 3,14 × 49 = 153,86." }
  },
  {
    id: "G6_s_41", category: "G6", level: 3,
    text: { fr: "Calcule l'aire d'un cercle de diamètre 12 cm (π = 3,14).", en: "Calculate the area of a circle with diameter 12 cm (π = 3.14).", nl: "Bereken de oppervlakte van een cirkel met diameter 12 cm (π = 3,14)." },
    answer: 113.04, tolerance: 0.1, unit: "cm²",
    hint: { fr: "Rayon = 6. Aire = 3,14 × 36 = 113,04.", en: "Radius = 6. Area = 3.14 × 36 = 113.04.", nl: "Straal = 6. Oppervlakte = 3,14 × 36 = 113,04." }
  },
  {
    id: "G6_s_42", category: "G6", level: 3,
    text: { fr: "Calcule l'aire d'un cercle de rayon 3 cm (π = 3,14).", en: "Calculate the area of a circle with radius 3 cm (π = 3.14).", nl: "Bereken de oppervlakte van een cirkel met straal 3 cm (π = 3,14)." },
    answer: 28.26, tolerance: 0.1, unit: "cm²",
    hint: { fr: "Aire = 3,14 × 9 = 28,26.", en: "Area = 3.14 × 9 = 28.26.", nl: "Oppervlakte = 3,14 × 9 = 28,26." }
  },
  {
    id: "G6_s_43", category: "G6", level: 3,
    text: { fr: "Calcule l'aire d'un cercle de diamètre 20 cm (π = 3,14).", en: "Calculate the area of a circle with diameter 20 cm (π = 3.14).", nl: "Bereken de oppervlakte van een cirkel met diameter 20 cm (π = 3,14)." },
    answer: 314, tolerance: 0.1, unit: "cm²",
    hint: { fr: "Rayon = 10. Aire = 3,14 × 100 = 314.", en: "Radius = 10. Area = 3.14 × 100 = 314.", nl: "Straal = 10. Oppervlakte = 3,14 × 100 = 314." }
  },
  {
    id: "G6_s_44", category: "G6", level: 3,
    text: { fr: "Un cercle a un périmètre de 62,8 cm (π = 3,14). Quel est son rayon ?", en: "A circle has a circumference of 62.8 cm (π = 3.14). What is its radius?", nl: "Een cirkel heeft een omtrek van 62,8 cm (π = 3,14). Wat is de straal?" },
    answer: 10, tolerance: 0.1, unit: "cm",
    hint: { fr: "r = 62,8 ÷ (2 × 3,14) = 62,8 ÷ 6,28.", en: "r = 62.8 ÷ (2 × 3.14) = 62.8 ÷ 6.28.", nl: "r = 62,8 ÷ (2 × 3,14) = 62,8 ÷ 6,28." }
  },
  {
    id: "G6_s_45", category: "G6", level: 3,
    text: { fr: "Calcule l'aire d'un cercle de rayon 8 cm (π = 3,14).", en: "Calculate the area of a circle with radius 8 cm (π = 3.14).", nl: "Bereken de oppervlakte van een cirkel met straal 8 cm (π = 3,14)." },
    answer: 200.96, tolerance: 0.1, unit: "cm²",
    hint: { fr: "Aire = 3,14 × 64 = 200,96.", en: "Area = 3.14 × 64 = 200.96.", nl: "Oppervlakte = 3,14 × 64 = 200,96." }
  },
  {
    id: "G6_s_46", category: "G6", level: 3,
    text: { fr: "Calcule l'aire d'un cercle de diamètre 18 cm (π = 3,14).", en: "Calculate the area of a circle with diameter 18 cm (π = 3.14).", nl: "Bereken de oppervlakte van een cirkel met diameter 18 cm (π = 3,14)." },
    answer: 254.34, tolerance: 0.1, unit: "cm²",
    hint: { fr: "Rayon = 9. Aire = 3,14 × 81 = 254,34.", en: "Radius = 9. Area = 3.14 × 81 = 254.34.", nl: "Straal = 9. Oppervlakte = 3,14 × 81 = 254,34." }
  },
  {
    id: "G6_s_47", category: "G6", level: 3,
    text: { fr: "Un cercle a un périmètre de 18,84 cm (π = 3,14). Quel est son rayon ?", en: "A circle has a circumference of 18.84 cm (π = 3.14). What is its radius?", nl: "Een cirkel heeft een omtrek van 18,84 cm (π = 3,14). Wat is de straal?" },
    answer: 3, tolerance: 0.1, unit: "cm",
    hint: { fr: "r = 18,84 ÷ 6,28 = 3.", en: "r = 18.84 ÷ 6.28 = 3.", nl: "r = 18,84 ÷ 6,28 = 3." }
  },
  {
    id: "G6_s_48", category: "G6", level: 3,
    text: { fr: "Calcule l'aire d'un cercle de rayon 12 cm (π = 3,14).", en: "Calculate the area of a circle with radius 12 cm (π = 3.14).", nl: "Bereken de oppervlakte van een cirkel met straal 12 cm (π = 3,14)." },
    answer: 452.16, tolerance: 0.1, unit: "cm²",
    hint: { fr: "Aire = 3,14 × 144 = 452,16.", en: "Area = 3.14 × 144 = 452.16.", nl: "Oppervlakte = 3,14 × 144 = 452,16." }
  },
  {
    id: "G6_s_49", category: "G6", level: 3,
    text: { fr: "Calcule l'aire d'un cercle de diamètre 10 cm (π = 3,14).", en: "Calculate the area of a circle with diameter 10 cm (π = 3.14).", nl: "Bereken de oppervlakte van een cirkel met diameter 10 cm (π = 3,14)." },
    answer: 78.5, tolerance: 0.1, unit: "cm²",
    hint: { fr: "Rayon = 5. Aire = 3,14 × 25 = 78,5.", en: "Radius = 5. Area = 3.14 × 25 = 78.5.", nl: "Straal = 5. Oppervlakte = 3,14 × 25 = 78,5." }
  },
  {
    id: "G6_s_50", category: "G6", level: 3,
    text: { fr: "Un cercle a un périmètre de 43,96 cm (π = 3,14). Quel est son rayon ?", en: "A circle has a circumference of 43.96 cm (π = 3.14). What is its radius?", nl: "Een cirkel heeft een omtrek van 43,96 cm (π = 3,14). Wat is de straal?" },
    answer: 7, tolerance: 0.1, unit: "cm",
    hint: { fr: "r = 43,96 ÷ 6,28 = 7.", en: "r = 43.96 ÷ 6.28 = 7.", nl: "r = 43,96 ÷ 6,28 = 7." }
  },
  // ---------------------------------------------------------------------------
  // Level 1 — Diameter / radius (G6_s_51 – G6_s_70)
  // ---------------------------------------------------------------------------
  {
    id: "G6_s_51", category: "G6", level: 1,
    text: { fr: "Un cercle a un rayon de 2 cm. Quel est son diamètre ?", en: "A circle has a radius of 2 cm. What is its diameter?", nl: "Een cirkel heeft een straal van 2 cm. Wat is de diameter?" },
    answer: 4, tolerance: 0, unit: "cm",
    hint: { fr: "Diamètre = 2 × 2.", en: "Diameter = 2 × 2.", nl: "Diameter = 2 × 2." }
  },
  {
    id: "G6_s_52", category: "G6", level: 1,
    text: { fr: "Un cercle a un diamètre de 44 cm. Quel est son rayon ?", en: "A circle has a diameter of 44 cm. What is its radius?", nl: "Een cirkel heeft een diameter van 44 cm. Wat is de straal?" },
    answer: 22, tolerance: 0, unit: "cm",
    hint: { fr: "Rayon = 44 ÷ 2.", en: "Radius = 44 ÷ 2.", nl: "Straal = 44 ÷ 2." }
  },
  {
    id: "G6_s_53", category: "G6", level: 1,
    text: { fr: "Un cercle a un rayon de 18 cm. Quel est son diamètre ?", en: "A circle has a radius of 18 cm. What is its diameter?", nl: "Een cirkel heeft een straal van 18 cm. Wat is de diameter?" },
    answer: 36, tolerance: 0, unit: "cm",
    hint: { fr: "Diamètre = 2 × 18.", en: "Diameter = 2 × 18.", nl: "Diameter = 2 × 18." }
  },
  {
    id: "G6_s_54", category: "G6", level: 1,
    text: { fr: "Un cercle a un diamètre de 11 cm. Quel est son rayon ?", en: "A circle has a diameter of 11 cm. What is its radius?", nl: "Een cirkel heeft een diameter van 11 cm. Wat is de straal?" },
    answer: 5.5, tolerance: 0.01, unit: "cm",
    hint: { fr: "Rayon = 11 ÷ 2 = 5,5.", en: "Radius = 11 ÷ 2 = 5.5.", nl: "Straal = 11 ÷ 2 = 5,5." }
  },
  {
    id: "G6_s_55", category: "G6", level: 1,
    text: { fr: "Un cercle a un rayon de 40 cm. Quel est son diamètre ?", en: "A circle has a radius of 40 cm. What is its diameter?", nl: "Een cirkel heeft een straal van 40 cm. Wat is de diameter?" },
    answer: 80, tolerance: 0, unit: "cm",
    hint: { fr: "Diamètre = 2 × 40.", en: "Diameter = 2 × 40.", nl: "Diameter = 2 × 40." }
  },
  {
    id: "G6_s_56", category: "G6", level: 1,
    text: { fr: "Un cercle a un diamètre de 26 cm. Quel est son rayon ?", en: "A circle has a diameter of 26 cm. What is its radius?", nl: "Een cirkel heeft een diameter van 26 cm. Wat is de straal?" },
    answer: 13, tolerance: 0, unit: "cm",
    hint: { fr: "Rayon = 26 ÷ 2.", en: "Radius = 26 ÷ 2.", nl: "Straal = 26 ÷ 2." }
  },
  {
    id: "G6_s_57", category: "G6", level: 1,
    text: { fr: "Un cercle a un rayon de 1,5 cm. Quel est son diamètre ?", en: "A circle has a radius of 1.5 cm. What is its diameter?", nl: "Een cirkel heeft een straal van 1,5 cm. Wat is de diameter?" },
    answer: 3, tolerance: 0, unit: "cm",
    hint: { fr: "Diamètre = 2 × 1,5.", en: "Diameter = 2 × 1.5.", nl: "Diameter = 2 × 1,5." }
  },
  {
    id: "G6_s_58", category: "G6", level: 1,
    text: { fr: "Un cercle a un diamètre de 35 cm. Quel est son rayon ?", en: "A circle has a diameter of 35 cm. What is its radius?", nl: "Een cirkel heeft een diameter van 35 cm. Wat is de straal?" },
    answer: 17.5, tolerance: 0.01, unit: "cm",
    hint: { fr: "Rayon = 35 ÷ 2 = 17,5.", en: "Radius = 35 ÷ 2 = 17.5.", nl: "Straal = 35 ÷ 2 = 17,5." }
  },
  {
    id: "G6_s_59", category: "G6", level: 1,
    text: { fr: "Un cercle a un rayon de 22 cm. Quel est son diamètre ?", en: "A circle has a radius of 22 cm. What is its diameter?", nl: "Een cirkel heeft een straal van 22 cm. Wat is de diameter?" },
    answer: 44, tolerance: 0, unit: "cm",
    hint: { fr: "Diamètre = 2 × 22.", en: "Diameter = 2 × 22.", nl: "Diameter = 2 × 22." }
  },
  {
    id: "G6_s_60", category: "G6", level: 1,
    text: { fr: "Un cercle a un diamètre de 3 cm. Quel est son rayon ?", en: "A circle has a diameter of 3 cm. What is its radius?", nl: "Een cirkel heeft een diameter van 3 cm. Wat is de straal?" },
    answer: 1.5, tolerance: 0.01, unit: "cm",
    hint: { fr: "Rayon = 3 ÷ 2 = 1,5.", en: "Radius = 3 ÷ 2 = 1.5.", nl: "Straal = 3 ÷ 2 = 1,5." }
  },
  {
    id: "G6_s_61", category: "G6", level: 1,
    text: { fr: "Un cercle a un rayon de 6 cm. Quel est son diamètre ?", en: "A circle has a radius of 6 cm. What is its diameter?", nl: "Een cirkel heeft een straal van 6 cm. Wat is de diameter?" },
    answer: 12, tolerance: 0, unit: "cm",
    hint: { fr: "Diamètre = 2 × 6.", en: "Diameter = 2 × 6.", nl: "Diameter = 2 × 6." }
  },
  {
    id: "G6_s_62", category: "G6", level: 1,
    text: { fr: "Un cercle a un diamètre de 70 cm. Quel est son rayon ?", en: "A circle has a diameter of 70 cm. What is its radius?", nl: "Een cirkel heeft een diameter van 70 cm. Wat is de straal?" },
    answer: 35, tolerance: 0, unit: "cm",
    hint: { fr: "Rayon = 70 ÷ 2.", en: "Radius = 70 ÷ 2.", nl: "Straal = 70 ÷ 2." }
  },
  {
    id: "G6_s_63", category: "G6", level: 1,
    text: { fr: "Un cercle a un rayon de 4,5 cm. Quel est son diamètre ?", en: "A circle has a radius of 4.5 cm. What is its diameter?", nl: "Een cirkel heeft een straal van 4,5 cm. Wat is de diameter?" },
    answer: 9, tolerance: 0, unit: "cm",
    hint: { fr: "Diamètre = 2 × 4,5.", en: "Diameter = 2 × 4.5.", nl: "Diameter = 2 × 4,5." }
  },
  {
    id: "G6_s_64", category: "G6", level: 1,
    text: { fr: "Un cercle a un diamètre de 5 cm. Quel est son rayon ?", en: "A circle has a diameter of 5 cm. What is its radius?", nl: "Een cirkel heeft een diameter van 5 cm. Wat is de straal?" },
    answer: 2.5, tolerance: 0.01, unit: "cm",
    hint: { fr: "Rayon = 5 ÷ 2 = 2,5.", en: "Radius = 5 ÷ 2 = 2.5.", nl: "Straal = 5 ÷ 2 = 2,5." }
  },
  {
    id: "G6_s_65", category: "G6", level: 1,
    text: { fr: "Un cercle a un rayon de 50 cm. Quel est son diamètre ?", en: "A circle has a radius of 50 cm. What is its diameter?", nl: "Een cirkel heeft een straal van 50 cm. Wat is de diameter?" },
    answer: 100, tolerance: 0, unit: "cm",
    hint: { fr: "Diamètre = 2 × 50.", en: "Diameter = 2 × 50.", nl: "Diameter = 2 × 50." }
  },
  {
    id: "G6_s_66", category: "G6", level: 1,
    text: { fr: "Un cercle a un diamètre de 21 cm. Quel est son rayon ?", en: "A circle has a diameter of 21 cm. What is its radius?", nl: "Een cirkel heeft een diameter van 21 cm. Wat is de straal?" },
    answer: 10.5, tolerance: 0.01, unit: "cm",
    hint: { fr: "Rayon = 21 ÷ 2 = 10,5.", en: "Radius = 21 ÷ 2 = 10.5.", nl: "Straal = 21 ÷ 2 = 10,5." }
  },
  {
    id: "G6_s_67", category: "G6", level: 1,
    text: { fr: "Un cercle a un rayon de 14 cm. Quel est son diamètre ?", en: "A circle has a radius of 14 cm. What is its diameter?", nl: "Een cirkel heeft een straal van 14 cm. Wat is de diameter?" },
    answer: 28, tolerance: 0, unit: "cm",
    hint: { fr: "Diamètre = 2 × 14.", en: "Diameter = 2 × 14.", nl: "Diameter = 2 × 14." }
  },
  {
    id: "G6_s_68", category: "G6", level: 1,
    text: { fr: "Un cercle a un diamètre de 90 cm. Quel est son rayon ?", en: "A circle has a diameter of 90 cm. What is its radius?", nl: "Een cirkel heeft een diameter van 90 cm. Wat is de straal?" },
    answer: 45, tolerance: 0, unit: "cm",
    hint: { fr: "Rayon = 90 ÷ 2.", en: "Radius = 90 ÷ 2.", nl: "Straal = 90 ÷ 2." }
  },
  {
    id: "G6_s_69", category: "G6", level: 1,
    text: { fr: "Un cercle a un rayon de 2,5 cm. Quel est son diamètre ?", en: "A circle has a radius of 2.5 cm. What is its diameter?", nl: "Een cirkel heeft een straal van 2,5 cm. Wat is de diameter?" },
    answer: 5, tolerance: 0, unit: "cm",
    hint: { fr: "Diamètre = 2 × 2,5.", en: "Diameter = 2 × 2.5.", nl: "Diameter = 2 × 2,5." }
  },
  {
    id: "G6_s_70", category: "G6", level: 1,
    text: { fr: "Un cercle a un diamètre de 17 cm. Quel est son rayon ?", en: "A circle has a diameter of 17 cm. What is its radius?", nl: "Een cirkel heeft een diameter van 17 cm. Wat is de straal?" },
    answer: 8.5, tolerance: 0.01, unit: "cm",
    hint: { fr: "Rayon = 17 ÷ 2 = 8,5.", en: "Radius = 17 ÷ 2 = 8.5.", nl: "Straal = 17 ÷ 2 = 8,5." }
  },
  // ---------------------------------------------------------------------------
  // Level 2 — Circumference (G6_s_71 – G6_s_90)
  // ---------------------------------------------------------------------------
  {
    id: "G6_s_71", category: "G6", level: 2,
    text: { fr: "Calcule le périmètre d'un cercle de rayon 2 cm (π = 3,14).", en: "Calculate the circumference of a circle with radius 2 cm (π = 3.14).", nl: "Bereken de omtrek van een cirkel met straal 2 cm (π = 3,14)." },
    answer: 12.56, tolerance: 0.1, unit: "cm",
    hint: { fr: "2 × 3,14 × 2 = 12,56.", en: "2 × 3.14 × 2 = 12.56.", nl: "2 × 3,14 × 2 = 12,56." }
  },
  {
    id: "G6_s_72", category: "G6", level: 2,
    text: { fr: "Calcule le périmètre d'un cercle de diamètre 16 cm (π = 3,14).", en: "Calculate the circumference of a circle with diameter 16 cm (π = 3.14).", nl: "Bereken de omtrek van een cirkel met diameter 16 cm (π = 3,14)." },
    answer: 50.24, tolerance: 0.1, unit: "cm",
    hint: { fr: "3,14 × 16 = 50,24.", en: "3.14 × 16 = 50.24.", nl: "3,14 × 16 = 50,24." }
  },
  {
    id: "G6_s_73", category: "G6", level: 2,
    text: { fr: "Calcule le périmètre d'un cercle de rayon 11 cm (π = 3,14).", en: "Calculate the circumference of a circle with radius 11 cm (π = 3.14).", nl: "Bereken de omtrek van een cirkel met straal 11 cm (π = 3,14)." },
    answer: 69.08, tolerance: 0.1, unit: "cm",
    hint: { fr: "2 × 3,14 × 11 = 69,08.", en: "2 × 3.14 × 11 = 69.08.", nl: "2 × 3,14 × 11 = 69,08." }
  },
  {
    id: "G6_s_74", category: "G6", level: 2,
    text: { fr: "Calcule le périmètre d'un cercle de diamètre 18 cm (π = 3,14).", en: "Calculate the circumference of a circle with diameter 18 cm (π = 3.14).", nl: "Bereken de omtrek van een cirkel met diameter 18 cm (π = 3,14)." },
    answer: 56.52, tolerance: 0.1, unit: "cm",
    hint: { fr: "3,14 × 18 = 56,52.", en: "3.14 × 18 = 56.52.", nl: "3,14 × 18 = 56,52." }
  },
  {
    id: "G6_s_75", category: "G6", level: 2,
    text: { fr: "Calcule le périmètre d'un cercle de rayon 13 cm (π = 3,14).", en: "Calculate the circumference of a circle with radius 13 cm (π = 3.14).", nl: "Bereken de omtrek van een cirkel met straal 13 cm (π = 3,14)." },
    answer: 81.64, tolerance: 0.1, unit: "cm",
    hint: { fr: "2 × 3,14 × 13 = 81,64.", en: "2 × 3.14 × 13 = 81.64.", nl: "2 × 3,14 × 13 = 81,64." }
  },
  {
    id: "G6_s_76", category: "G6", level: 2,
    text: { fr: "Calcule le périmètre d'un cercle de diamètre 22 cm (π = 3,14).", en: "Calculate the circumference of a circle with diameter 22 cm (π = 3.14).", nl: "Bereken de omtrek van een cirkel met diameter 22 cm (π = 3,14)." },
    answer: 69.08, tolerance: 0.1, unit: "cm",
    hint: { fr: "3,14 × 22 = 69,08.", en: "3.14 × 22 = 69.08.", nl: "3,14 × 22 = 69,08." }
  },
  {
    id: "G6_s_77", category: "G6", level: 2,
    text: { fr: "Calcule le périmètre d'un cercle de rayon 8 cm (π = 3,14).", en: "Calculate the circumference of a circle with radius 8 cm (π = 3.14).", nl: "Bereken de omtrek van een cirkel met straal 8 cm (π = 3,14)." },
    answer: 50.24, tolerance: 0.1, unit: "cm",
    hint: { fr: "2 × 3,14 × 8 = 50,24.", en: "2 × 3.14 × 8 = 50.24.", nl: "2 × 3,14 × 8 = 50,24." }
  },
  {
    id: "G6_s_78", category: "G6", level: 2,
    text: { fr: "Calcule le périmètre d'un cercle de diamètre 6 cm (π = 3,14).", en: "Calculate the circumference of a circle with diameter 6 cm (π = 3.14).", nl: "Bereken de omtrek van een cirkel met diameter 6 cm (π = 3,14)." },
    answer: 18.84, tolerance: 0.1, unit: "cm",
    hint: { fr: "3,14 × 6 = 18,84.", en: "3.14 × 6 = 18.84.", nl: "3,14 × 6 = 18,84." }
  },
  {
    id: "G6_s_79", category: "G6", level: 2,
    text: { fr: "Calcule le périmètre d'un cercle de rayon 14 cm (π = 3,14).", en: "Calculate the circumference of a circle with radius 14 cm (π = 3.14).", nl: "Bereken de omtrek van een cirkel met straal 14 cm (π = 3,14)." },
    answer: 87.92, tolerance: 0.1, unit: "cm",
    hint: { fr: "2 × 3,14 × 14 = 87,92.", en: "2 × 3.14 × 14 = 87.92.", nl: "2 × 3,14 × 14 = 87,92." }
  },
  {
    id: "G6_s_80", category: "G6", level: 2,
    text: { fr: "Calcule le périmètre d'un cercle de diamètre 40 cm (π = 3,14).", en: "Calculate the circumference of a circle with diameter 40 cm (π = 3.14).", nl: "Bereken de omtrek van een cirkel met diameter 40 cm (π = 3,14)." },
    answer: 125.6, tolerance: 0.1, unit: "cm",
    hint: { fr: "3,14 × 40 = 125,6.", en: "3.14 × 40 = 125.6.", nl: "3,14 × 40 = 125,6." }
  },
  {
    id: "G6_s_81", category: "G6", level: 2,
    text: { fr: "Calcule le périmètre d'un cercle de rayon 12 cm (π = 3,14).", en: "Calculate the circumference of a circle with radius 12 cm (π = 3.14).", nl: "Bereken de omtrek van een cirkel met straal 12 cm (π = 3,14)." },
    answer: 75.36, tolerance: 0.1, unit: "cm",
    hint: { fr: "2 × 3,14 × 12 = 75,36.", en: "2 × 3.14 × 12 = 75.36.", nl: "2 × 3,14 × 12 = 75,36." }
  },
  {
    id: "G6_s_82", category: "G6", level: 2,
    text: { fr: "Calcule le périmètre d'un cercle de diamètre 50 cm (π = 3,14).", en: "Calculate the circumference of a circle with diameter 50 cm (π = 3.14).", nl: "Bereken de omtrek van een cirkel met diameter 50 cm (π = 3,14)." },
    answer: 157, tolerance: 0.1, unit: "cm",
    hint: { fr: "3,14 × 50 = 157.", en: "3.14 × 50 = 157.", nl: "3,14 × 50 = 157." }
  },
  {
    id: "G6_s_83", category: "G6", level: 2,
    text: { fr: "Calcule le périmètre d'un cercle de rayon 20 cm (π = 3,14).", en: "Calculate the circumference of a circle with radius 20 cm (π = 3.14).", nl: "Bereken de omtrek van een cirkel met straal 20 cm (π = 3,14)." },
    answer: 125.6, tolerance: 0.1, unit: "cm",
    hint: { fr: "2 × 3,14 × 20 = 125,6.", en: "2 × 3.14 × 20 = 125.6.", nl: "2 × 3,14 × 20 = 125,6." }
  },
  {
    id: "G6_s_84", category: "G6", level: 2,
    text: { fr: "Calcule le périmètre d'un cercle de diamètre 9 cm (π = 3,14).", en: "Calculate the circumference of a circle with diameter 9 cm (π = 3.14).", nl: "Bereken de omtrek van een cirkel met diameter 9 cm (π = 3,14)." },
    answer: 28.26, tolerance: 0.1, unit: "cm",
    hint: { fr: "3,14 × 9 = 28,26.", en: "3.14 × 9 = 28.26.", nl: "3,14 × 9 = 28,26." }
  },
  {
    id: "G6_s_85", category: "G6", level: 2,
    text: { fr: "Calcule le périmètre d'un cercle de rayon 25 cm (π = 3,14).", en: "Calculate the circumference of a circle with radius 25 cm (π = 3.14).", nl: "Bereken de omtrek van een cirkel met straal 25 cm (π = 3,14)." },
    answer: 157, tolerance: 0.1, unit: "cm",
    hint: { fr: "2 × 3,14 × 25 = 157.", en: "2 × 3.14 × 25 = 157.", nl: "2 × 3,14 × 25 = 157." }
  },
  {
    id: "G6_s_86", category: "G6", level: 2,
    text: { fr: "Calcule le périmètre d'un cercle de diamètre 15 cm (π = 3,14).", en: "Calculate the circumference of a circle with diameter 15 cm (π = 3.14).", nl: "Bereken de omtrek van een cirkel met diameter 15 cm (π = 3,14)." },
    answer: 47.1, tolerance: 0.1, unit: "cm",
    hint: { fr: "3,14 × 15 = 47,1.", en: "3.14 × 15 = 47.1.", nl: "3,14 × 15 = 47,1." }
  },
  {
    id: "G6_s_87", category: "G6", level: 2,
    text: { fr: "Calcule le périmètre d'un cercle de rayon 16 cm (π = 3,14).", en: "Calculate the circumference of a circle with radius 16 cm (π = 3.14).", nl: "Bereken de omtrek van een cirkel met straal 16 cm (π = 3,14)." },
    answer: 100.48, tolerance: 0.1, unit: "cm",
    hint: { fr: "2 × 3,14 × 16 = 100,48.", en: "2 × 3.14 × 16 = 100.48.", nl: "2 × 3,14 × 16 = 100,48." }
  },
  {
    id: "G6_s_88", category: "G6", level: 2,
    text: { fr: "Calcule le périmètre d'un cercle de diamètre 7 cm (π = 3,14).", en: "Calculate the circumference of a circle with diameter 7 cm (π = 3.14).", nl: "Bereken de omtrek van een cirkel met diameter 7 cm (π = 3,14)." },
    answer: 21.98, tolerance: 0.1, unit: "cm",
    hint: { fr: "3,14 × 7 = 21,98.", en: "3.14 × 7 = 21.98.", nl: "3,14 × 7 = 21,98." }
  },
  {
    id: "G6_s_89", category: "G6", level: 2,
    text: { fr: "Calcule le périmètre d'un cercle de rayon 18 cm (π = 3,14).", en: "Calculate the circumference of a circle with radius 18 cm (π = 3.14).", nl: "Bereken de omtrek van een cirkel met straal 18 cm (π = 3,14)." },
    answer: 113.04, tolerance: 0.1, unit: "cm",
    hint: { fr: "2 × 3,14 × 18 = 113,04.", en: "2 × 3.14 × 18 = 113.04.", nl: "2 × 3,14 × 18 = 113,04." }
  },
  {
    id: "G6_s_90", category: "G6", level: 2,
    text: { fr: "Calcule le périmètre d'un cercle de diamètre 11 cm (π = 3,14).", en: "Calculate the circumference of a circle with diameter 11 cm (π = 3.14).", nl: "Bereken de omtrek van een cirkel met diameter 11 cm (π = 3,14)." },
    answer: 34.54, tolerance: 0.1, unit: "cm",
    hint: { fr: "3,14 × 11 = 34,54.", en: "3.14 × 11 = 34.54.", nl: "3,14 × 11 = 34,54." }
  },
  // ---------------------------------------------------------------------------
  // Level 3 — Area & inverse problems (G6_s_91 – G6_s_111)
  // ---------------------------------------------------------------------------
  {
    id: "G6_s_91", category: "G6", level: 3,
    text: { fr: "Calcule l'aire d'un cercle de rayon 6 cm (π = 3,14).", en: "Calculate the area of a circle with radius 6 cm (π = 3.14).", nl: "Bereken de oppervlakte van een cirkel met straal 6 cm (π = 3,14)." },
    answer: 113.04, tolerance: 0.1, unit: "cm²",
    hint: { fr: "Aire = 3,14 × 36 = 113,04.", en: "Area = 3.14 × 36 = 113.04.", nl: "Oppervlakte = 3,14 × 36 = 113,04." }
  },
  {
    id: "G6_s_92", category: "G6", level: 3,
    text: { fr: "Calcule l'aire d'un cercle de diamètre 14 cm (π = 3,14).", en: "Calculate the area of a circle with diameter 14 cm (π = 3.14).", nl: "Bereken de oppervlakte van een cirkel met diameter 14 cm (π = 3,14)." },
    answer: 153.86, tolerance: 0.1, unit: "cm²",
    hint: { fr: "Rayon = 7. Aire = 3,14 × 49 = 153,86.", en: "Radius = 7. Area = 3.14 × 49 = 153.86.", nl: "Straal = 7. Oppervlakte = 3,14 × 49 = 153,86." }
  },
  {
    id: "G6_s_93", category: "G6", level: 3,
    text: { fr: "Calcule l'aire d'un cercle de rayon 9 cm (π = 3,14).", en: "Calculate the area of a circle with radius 9 cm (π = 3.14).", nl: "Bereken de oppervlakte van een cirkel met straal 9 cm (π = 3,14)." },
    answer: 254.34, tolerance: 0.1, unit: "cm²",
    hint: { fr: "Aire = 3,14 × 81 = 254,34.", en: "Area = 3.14 × 81 = 254.34.", nl: "Oppervlakte = 3,14 × 81 = 254,34." }
  },
  {
    id: "G6_s_94", category: "G6", level: 3,
    text: { fr: "Un cercle a un périmètre de 25,12 cm (π = 3,14). Quel est son rayon ?", en: "A circle has a circumference of 25.12 cm (π = 3.14). What is its radius?", nl: "Een cirkel heeft een omtrek van 25,12 cm (π = 3,14). Wat is de straal?" },
    answer: 4, tolerance: 0.1, unit: "cm",
    hint: { fr: "r = 25,12 ÷ 6,28 = 4.", en: "r = 25.12 ÷ 6.28 = 4.", nl: "r = 25,12 ÷ 6,28 = 4." }
  },
  {
    id: "G6_s_95", category: "G6", level: 3,
    text: { fr: "Calcule l'aire d'un cercle de rayon 2 cm (π = 3,14).", en: "Calculate the area of a circle with radius 2 cm (π = 3.14).", nl: "Bereken de oppervlakte van een cirkel met straal 2 cm (π = 3,14)." },
    answer: 12.56, tolerance: 0.1, unit: "cm²",
    hint: { fr: "Aire = 3,14 × 4 = 12,56.", en: "Area = 3.14 × 4 = 12.56.", nl: "Oppervlakte = 3,14 × 4 = 12,56." }
  },
  {
    id: "G6_s_96", category: "G6", level: 3,
    text: { fr: "Calcule l'aire d'un cercle de diamètre 16 cm (π = 3,14).", en: "Calculate the area of a circle with diameter 16 cm (π = 3.14).", nl: "Bereken de oppervlakte van een cirkel met diameter 16 cm (π = 3,14)." },
    answer: 200.96, tolerance: 0.1, unit: "cm²",
    hint: { fr: "Rayon = 8. Aire = 3,14 × 64 = 200,96.", en: "Radius = 8. Area = 3.14 × 64 = 200.96.", nl: "Straal = 8. Oppervlakte = 3,14 × 64 = 200,96." }
  },
  {
    id: "G6_s_97", category: "G6", level: 3,
    text: { fr: "Un cercle a un périmètre de 50,24 cm (π = 3,14). Quel est son rayon ?", en: "A circle has a circumference of 50.24 cm (π = 3.14). What is its radius?", nl: "Een cirkel heeft een omtrek van 50,24 cm (π = 3,14). Wat is de straal?" },
    answer: 8, tolerance: 0.1, unit: "cm",
    hint: { fr: "r = 50,24 ÷ 6,28 = 8.", en: "r = 50.24 ÷ 6.28 = 8.", nl: "r = 50,24 ÷ 6,28 = 8." }
  },
  {
    id: "G6_s_98", category: "G6", level: 3,
    text: { fr: "Calcule l'aire d'un cercle de rayon 11 cm (π = 3,14).", en: "Calculate the area of a circle with radius 11 cm (π = 3.14).", nl: "Bereken de oppervlakte van een cirkel met straal 11 cm (π = 3,14)." },
    answer: 379.94, tolerance: 0.1, unit: "cm²",
    hint: { fr: "Aire = 3,14 × 121 = 379,94.", en: "Area = 3.14 × 121 = 379.94.", nl: "Oppervlakte = 3,14 × 121 = 379,94." }
  },
  {
    id: "G6_s_99", category: "G6", level: 3,
    text: { fr: "Calcule l'aire d'un cercle de diamètre 24 cm (π = 3,14).", en: "Calculate the area of a circle with diameter 24 cm (π = 3.14).", nl: "Bereken de oppervlakte van een cirkel met diameter 24 cm (π = 3,14)." },
    answer: 452.16, tolerance: 0.1, unit: "cm²",
    hint: { fr: "Rayon = 12. Aire = 3,14 × 144 = 452,16.", en: "Radius = 12. Area = 3.14 × 144 = 452.16.", nl: "Straal = 12. Oppervlakte = 3,14 × 144 = 452,16." }
  },
  {
    id: "G6_s_100", category: "G6", level: 3,
    text: { fr: "Un cercle a un périmètre de 37,68 cm (π = 3,14). Quel est son rayon ?", en: "A circle has a circumference of 37.68 cm (π = 3.14). What is its radius?", nl: "Een cirkel heeft een omtrek van 37,68 cm (π = 3,14). Wat is de straal?" },
    answer: 6, tolerance: 0.1, unit: "cm",
    hint: { fr: "r = 37,68 ÷ 6,28 = 6.", en: "r = 37.68 ÷ 6.28 = 6.", nl: "r = 37,68 ÷ 6,28 = 6." }
  },
  {
    id: "G6_s_101", category: "G6", level: 3,
    text: { fr: "Calcule l'aire d'un cercle de rayon 15 cm (π = 3,14).", en: "Calculate the area of a circle with radius 15 cm (π = 3.14).", nl: "Bereken de oppervlakte van een cirkel met straal 15 cm (π = 3,14)." },
    answer: 706.5, tolerance: 0.1, unit: "cm²",
    hint: { fr: "Aire = 3,14 × 225 = 706,5.", en: "Area = 3.14 × 225 = 706.5.", nl: "Oppervlakte = 3,14 × 225 = 706,5." }
  },
  {
    id: "G6_s_102", category: "G6", level: 3,
    text: { fr: "Calcule l'aire d'un cercle de diamètre 8 cm (π = 3,14).", en: "Calculate the area of a circle with diameter 8 cm (π = 3.14).", nl: "Bereken de oppervlakte van een cirkel met diameter 8 cm (π = 3,14)." },
    answer: 50.24, tolerance: 0.1, unit: "cm²",
    hint: { fr: "Rayon = 4. Aire = 3,14 × 16 = 50,24.", en: "Radius = 4. Area = 3.14 × 16 = 50.24.", nl: "Straal = 4. Oppervlakte = 3,14 × 16 = 50,24." }
  },
  {
    id: "G6_s_103", category: "G6", level: 3,
    text: { fr: "Un cercle a un périmètre de 56,52 cm (π = 3,14). Quel est son rayon ?", en: "A circle has a circumference of 56.52 cm (π = 3.14). What is its radius?", nl: "Een cirkel heeft een omtrek van 56,52 cm (π = 3,14). Wat is de straal?" },
    answer: 9, tolerance: 0.1, unit: "cm",
    hint: { fr: "r = 56,52 ÷ 6,28 = 9.", en: "r = 56.52 ÷ 6.28 = 9.", nl: "r = 56,52 ÷ 6,28 = 9." }
  },
  {
    id: "G6_s_104", category: "G6", level: 3,
    text: { fr: "Calcule l'aire d'un cercle de rayon 1 cm (π = 3,14).", en: "Calculate the area of a circle with radius 1 cm (π = 3.14).", nl: "Bereken de oppervlakte van een cirkel met straal 1 cm (π = 3,14)." },
    answer: 3.14, tolerance: 0.1, unit: "cm²",
    hint: { fr: "Aire = 3,14 × 1 = 3,14.", en: "Area = 3.14 × 1 = 3.14.", nl: "Oppervlakte = 3,14 × 1 = 3,14." }
  },
  {
    id: "G6_s_105", category: "G6", level: 3,
    text: { fr: "Calcule l'aire d'un cercle de diamètre 26 cm (π = 3,14).", en: "Calculate the area of a circle with diameter 26 cm (π = 3.14).", nl: "Bereken de oppervlakte van een cirkel met diameter 26 cm (π = 3,14)." },
    answer: 530.66, tolerance: 0.1, unit: "cm²",
    hint: { fr: "Rayon = 13. Aire = 3,14 × 169 = 530,66.", en: "Radius = 13. Area = 3.14 × 169 = 530.66.", nl: "Straal = 13. Oppervlakte = 3,14 × 169 = 530,66." }
  },
  {
    id: "G6_s_106", category: "G6", level: 3,
    text: { fr: "Un cercle a un périmètre de 75,36 cm (π = 3,14). Quel est son rayon ?", en: "A circle has a circumference of 75.36 cm (π = 3.14). What is its radius?", nl: "Een cirkel heeft een omtrek van 75,36 cm (π = 3,14). Wat is de straal?" },
    answer: 12, tolerance: 0.1, unit: "cm",
    hint: { fr: "r = 75,36 ÷ 6,28 = 12.", en: "r = 75.36 ÷ 6.28 = 12.", nl: "r = 75,36 ÷ 6,28 = 12." }
  },
  {
    id: "G6_s_107", category: "G6", level: 3,
    text: { fr: "Calcule l'aire d'un cercle de rayon 14 cm (π = 3,14).", en: "Calculate the area of a circle with radius 14 cm (π = 3.14).", nl: "Bereken de oppervlakte van een cirkel met straal 14 cm (π = 3,14)." },
    answer: 615.44, tolerance: 0.1, unit: "cm²",
    hint: { fr: "Aire = 3,14 × 196 = 615,44.", en: "Area = 3.14 × 196 = 615.44.", nl: "Oppervlakte = 3,14 × 196 = 615,44." }
  },
  {
    id: "G6_s_108", category: "G6", level: 3,
    text: { fr: "Calcule l'aire d'un cercle de diamètre 22 cm (π = 3,14).", en: "Calculate the area of a circle with diameter 22 cm (π = 3.14).", nl: "Bereken de oppervlakte van een cirkel met diameter 22 cm (π = 3,14)." },
    answer: 379.94, tolerance: 0.1, unit: "cm²",
    hint: { fr: "Rayon = 11. Aire = 3,14 × 121 = 379,94.", en: "Radius = 11. Area = 3.14 × 121 = 379.94.", nl: "Straal = 11. Oppervlakte = 3,14 × 121 = 379,94." }
  },
  {
    id: "G6_s_109", category: "G6", level: 3,
    text: { fr: "Un cercle a un périmètre de 94,2 cm (π = 3,14). Quel est son rayon ?", en: "A circle has a circumference of 94.2 cm (π = 3.14). What is its radius?", nl: "Een cirkel heeft een omtrek van 94,2 cm (π = 3,14). Wat is de straal?" },
    answer: 15, tolerance: 0.1, unit: "cm",
    hint: { fr: "r = 94,2 ÷ 6,28 = 15.", en: "r = 94.2 ÷ 6.28 = 15.", nl: "r = 94,2 ÷ 6,28 = 15." }
  },
  {
    id: "G6_s_110", category: "G6", level: 3,
    text: { fr: "Calcule l'aire d'un cercle de rayon 20 cm (π = 3,14).", en: "Calculate the area of a circle with radius 20 cm (π = 3.14).", nl: "Bereken de oppervlakte van een cirkel met straal 20 cm (π = 3,14)." },
    answer: 1256, tolerance: 0.1, unit: "cm²",
    hint: { fr: "Aire = 3,14 × 400 = 1256.", en: "Area = 3.14 × 400 = 1256.", nl: "Oppervlakte = 3,14 × 400 = 1256." }
  },
  {
    id: "G6_s_111", category: "G6", level: 3,
    text: { fr: "Un cercle a un périmètre de 12,56 cm (π = 3,14). Quel est son rayon ?", en: "A circle has a circumference of 12.56 cm (π = 3.14). What is its radius?", nl: "Een cirkel heeft een omtrek van 12,56 cm (π = 3,14). Wat is de straal?" },
    answer: 2, tolerance: 0.1, unit: "cm",
    hint: { fr: "r = 12,56 ÷ 6,28 = 2.", en: "r = 12.56 ÷ 6.28 = 2.", nl: "r = 12,56 ÷ 6,28 = 2." }
  },
  {
    id: "G6_s_112", category: "G6", level: 1,
    text: { fr: "Un cercle a un rayon de 18 cm. Quel est son diamètre ?", en: "A circle has a radius of 18 cm. What is its diameter?", nl: "Een cirkel heeft een straal van 18 cm. Wat is de diameter?" },
    answer: 36, tolerance: 0, unit: "cm",
    hint: { fr: "Diamètre = 2 × 18.", en: "Diameter = 2 × 18.", nl: "Diameter = 2 × 18." }
  },
  {
    id: "G6_s_113", category: "G6", level: 1,
    text: { fr: "Un cercle a un diamètre de 44 cm. Quel est son rayon ?", en: "A circle has a diameter of 44 cm. What is its radius?", nl: "Een cirkel heeft een diameter van 44 cm. Wat is de straal?" },
    answer: 22, tolerance: 0, unit: "cm",
    hint: { fr: "Rayon = 44 ÷ 2.", en: "Radius = 44 ÷ 2.", nl: "Straal = 44 ÷ 2." }
  },
  {
    id: "G6_s_114", category: "G6", level: 1,
    text: { fr: "Un cercle a un diamètre de 15 cm. Quel est son rayon ?", en: "A circle has a diameter of 15 cm. What is its radius?", nl: "Een cirkel heeft een diameter van 15 cm. Wat is de straal?" },
    answer: 7.5, tolerance: 0.01, unit: "cm",
    hint: { fr: "Rayon = 15 ÷ 2 = 7,5.", en: "Radius = 15 ÷ 2 = 7.5.", nl: "Straal = 15 ÷ 2 = 7,5." }
  },
  {
    id: "G6_s_115", category: "G6", level: 2,
    text: { fr: "Calcule le périmètre d'un cercle de rayon 9 cm (π = 3,14).", en: "Calculate the circumference of a circle with radius 9 cm (π = 3.14).", nl: "Bereken de omtrek van een cirkel met straal 9 cm (π = 3,14)." },
    answer: 56.52, tolerance: 0.1, unit: "cm",
    hint: { fr: "Périmètre = 2 × 3,14 × 9 = 56,52.", en: "Circumference = 2 × 3.14 × 9 = 56.52.", nl: "Omtrek = 2 × 3,14 × 9 = 56,52." }
  },
  {
    id: "G6_s_116", category: "G6", level: 2,
    text: { fr: "Calcule le périmètre d'un cercle de diamètre 16 cm (π = 3,14).", en: "Calculate the circumference of a circle with diameter 16 cm (π = 3.14).", nl: "Bereken de omtrek van een cirkel met diameter 16 cm (π = 3,14)." },
    answer: 50.24, tolerance: 0.1, unit: "cm",
    hint: { fr: "Périmètre = 3,14 × 16 = 50,24.", en: "Circumference = 3.14 × 16 = 50.24.", nl: "Omtrek = 3,14 × 16 = 50,24." }
  },
  {
    id: "G6_s_117", category: "G6", level: 3,
    text: { fr: "Calcule l'aire d'un cercle de rayon 8 cm (π = 3,14).", en: "Calculate the area of a circle with radius 8 cm (π = 3.14).", nl: "Bereken de oppervlakte van een cirkel met straal 8 cm (π = 3,14)." },
    answer: 200.96, tolerance: 0.1, unit: "cm²",
    hint: { fr: "Aire = 3,14 × 64 = 200,96.", en: "Area = 3.14 × 64 = 200.96.", nl: "Oppervlakte = 3,14 × 64 = 200,96." }
  },
  {
    id: "G6_s_118", category: "G6", level: 3,
    text: { fr: "Un cercle a un périmètre de 62,8 cm (π = 3,14). Quel est son rayon ?", en: "A circle has a circumference of 62.8 cm (π = 3.14). What is its radius?", nl: "Een cirkel heeft een omtrek van 62,8 cm (π = 3,14). Wat is de straal?" },
    answer: 10, tolerance: 0.1, unit: "cm",
    hint: { fr: "r = 62,8 ÷ 6,28 = 10.", en: "r = 62.8 ÷ 6.28 = 10.", nl: "r = 62,8 ÷ 6,28 = 10." }
  },
];

export function generate(level = 1) {
  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const id = `G6_gen_${Date.now()}_${rand(100, 999)}`;
  if (level === 1) {
    const r = rand(2, 30);
    return { id, category: 'G6', level, text: { fr: `Un cercle a un rayon de ${r} cm. Quel est son diamètre ?`, en: `A circle has a radius of ${r} cm. What is its diameter?`, nl: `Een cirkel heeft een straal van ${r} cm. Wat is de diameter?` }, answer: r * 2, tolerance: 0 };
  }
  if (level === 2) {
    const r = rand(2, 15);
    const answer = Math.round(2 * 3.14 * r * 100) / 100;
    return { id, category: 'G6', level, text: { fr: `Calcule le périmètre d'un cercle de rayon ${r} cm (π = 3,14).`, en: `Calculate the circumference of a circle with radius ${r} cm (π = 3.14).`, nl: `Bereken de omtrek van een cirkel met straal ${r} cm (π = 3,14).` }, answer, tolerance: 0.1 };
  }
  const r = rand(2, 12);
  const answer = Math.round(3.14 * r * r * 100) / 100;
  return { id, category: 'G6', level, text: { fr: `Calcule l'aire d'un cercle de rayon ${r} cm (π = 3,14).`, en: `Calculate the area of a circle with radius ${r} cm (π = 3.14).`, nl: `Bereken de oppervlakte van een cirkel met straal ${r} cm (π = 3,14).` }, answer, tolerance: 0.1 };
}
