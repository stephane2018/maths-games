// =============================================================================
// G3 - Volumes
// CE1D Belgian exam - Trilingual (FR / EN / NL)
// =============================================================================

export const questions = [
  // Level 1 — Volume of rectangular prisms and cubes
  {
    id: "G3_s_1", category: "G3", level: 1,
    text: { fr: "Quel est le volume d'un pavé droit de 4 cm, 3 cm et 2 cm ?", en: "What is the volume of a rectangular prism: 4 cm, 3 cm and 2 cm?", nl: "Wat is het volume van een balk van 4 cm, 3 cm en 2 cm?" },
    answer: 24, tolerance: 0, unit: "cm³",
    hint: { fr: "Volume = L × l × h.", en: "Volume = L × w × h.", nl: "Volume = L × b × h." }
  },
  {
    id: "G3_s_2", category: "G3", level: 1,
    text: { fr: "Quel est le volume d'un cube de côté 5 cm ?", en: "What is the volume of a cube with side 5 cm?", nl: "Wat is het volume van een kubus met zijde 5 cm?" },
    answer: 125, tolerance: 0, unit: "cm³",
    hint: { fr: "Volume = côté³ = 5 × 5 × 5.", en: "Volume = side³ = 5 × 5 × 5.", nl: "Volume = zijde³ = 5 × 5 × 5." }
  },
  {
    id: "G3_s_3", category: "G3", level: 1,
    text: { fr: "Quel est le volume d'un pavé droit de 10 cm, 2 cm et 3 cm ?", en: "What is the volume of a rectangular prism: 10 cm, 2 cm and 3 cm?", nl: "Wat is het volume van een balk van 10 cm, 2 cm en 3 cm?" },
    answer: 60, tolerance: 0, unit: "cm³",
    hint: { fr: "Volume = 10 × 2 × 3.", en: "Volume = 10 × 2 × 3.", nl: "Volume = 10 × 2 × 3." }
  },
  {
    id: "G3_s_4", category: "G3", level: 1,
    text: { fr: "Quel est le volume d'un cube de côté 3 cm ?", en: "What is the volume of a cube with side 3 cm?", nl: "Wat is het volume van een kubus met zijde 3 cm?" },
    answer: 27, tolerance: 0, unit: "cm³",
    hint: { fr: "Volume = 3 × 3 × 3.", en: "Volume = 3 × 3 × 3.", nl: "Volume = 3 × 3 × 3." }
  },
  {
    id: "G3_s_5", category: "G3", level: 1,
    text: { fr: "Quel est le volume d'un pavé droit de 6 cm, 5 cm et 4 cm ?", en: "What is the volume of a rectangular prism: 6 cm, 5 cm and 4 cm?", nl: "Wat is het volume van een balk van 6 cm, 5 cm en 4 cm?" },
    answer: 120, tolerance: 0, unit: "cm³",
    hint: { fr: "Volume = 6 × 5 × 4.", en: "Volume = 6 × 5 × 4.", nl: "Volume = 6 × 5 × 4." }
  },
  // Level 2 — Larger prisms, inverse problems
  {
    id: "G3_s_6", category: "G3", level: 2,
    text: { fr: "Quel est le volume d'un cube de côté 8 cm ?", en: "What is the volume of a cube with side 8 cm?", nl: "Wat is het volume van een kubus met zijde 8 cm?" },
    answer: 512, tolerance: 0, unit: "cm³",
    hint: { fr: "Volume = 8 × 8 × 8 = 512.", en: "Volume = 8 × 8 × 8 = 512.", nl: "Volume = 8 × 8 × 8 = 512." }
  },
  {
    id: "G3_s_7", category: "G3", level: 2,
    text: { fr: "Quel est le volume d'un pavé droit de 12 cm, 5 cm et 3 cm ?", en: "What is the volume of a rectangular prism: 12 cm, 5 cm and 3 cm?", nl: "Wat is het volume van een balk van 12 cm, 5 cm en 3 cm?" },
    answer: 180, tolerance: 0, unit: "cm³",
    hint: { fr: "Volume = 12 × 5 × 3.", en: "Volume = 12 × 5 × 3.", nl: "Volume = 12 × 5 × 3." }
  },
  {
    id: "G3_s_8", category: "G3", level: 2,
    text: { fr: "Un aquarium mesure 30 cm × 20 cm × 15 cm. Quel est son volume en cm³ ?", en: "An aquarium measures 30 cm × 20 cm × 15 cm. What is its volume in cm³?", nl: "Een aquarium meet 30 cm × 20 cm × 15 cm. Wat is het volume in cm³?" },
    answer: 9000, tolerance: 0, unit: "cm³",
    hint: { fr: "Volume = 30 × 20 × 15.", en: "Volume = 30 × 20 × 15.", nl: "Volume = 30 × 20 × 15." }
  },
  {
    id: "G3_s_9", category: "G3", level: 2,
    text: { fr: "Quel est le volume d'un pavé droit de 7 cm, 7 cm et 10 cm ?", en: "What is the volume of a rectangular prism: 7 cm, 7 cm and 10 cm?", nl: "Wat is het volume van een balk van 7 cm, 7 cm en 10 cm?" },
    answer: 490, tolerance: 0, unit: "cm³",
    hint: { fr: "Volume = 7 × 7 × 10.", en: "Volume = 7 × 7 × 10.", nl: "Volume = 7 × 7 × 10." }
  },
  {
    id: "G3_s_10", category: "G3", level: 2,
    text: { fr: "Un cube a un volume de 64 cm³. Quel est la longueur de son côté ?", en: "A cube has a volume of 64 cm³. What is its side length?", nl: "Een kubus heeft een volume van 64 cm³. Hoe lang is zijn zijde?" },
    answer: 4, tolerance: 0, unit: "cm",
    hint: { fr: "Quel nombre au cube donne 64 ? 4 × 4 × 4 = 64.", en: "What number cubed gives 64? 4 × 4 × 4 = 64.", nl: "Welk getal tot de derde macht geeft 64? 4 × 4 × 4 = 64." }
  },
  // Level 3 — Composite volumes, counting cubes
  {
    id: "G3_s_11", category: "G3", level: 3,
    text: { fr: "Un pavé de 8 × 6 × 5 cm a un cube de 2 cm découpé dans un coin. Quel est le volume restant ?", en: "A prism of 8 × 6 × 5 cm has a 2 cm cube cut from a corner. What volume remains?", nl: "Een balk van 8 × 6 × 5 cm heeft een kubus van 2 cm uit een hoek gesneden. Welk volume blijft over?" },
    answer: 232, tolerance: 0, unit: "cm³",
    hint: { fr: "240 - 8 = 232.", en: "240 - 8 = 232.", nl: "240 - 8 = 232." }
  },
  {
    id: "G3_s_12", category: "G3", level: 3,
    text: { fr: "Combien de cubes de 2 cm peut-on ranger dans une boîte de 10 × 8 × 6 cm ?", en: "How many 2 cm cubes fit in a 10 × 8 × 6 cm box?", nl: "Hoeveel kubussen van 2 cm passen in een doos van 10 × 8 × 6 cm?" },
    answer: 60, tolerance: 0,
    hint: { fr: "10/2 × 8/2 × 6/2 = 5 × 4 × 3.", en: "10/2 × 8/2 × 6/2 = 5 × 4 × 3.", nl: "10/2 × 8/2 × 6/2 = 5 × 4 × 3." }
  },
  {
    id: "G3_s_13", category: "G3", level: 3,
    text: { fr: "Un aquarium de 40 × 25 × 30 cm est rempli aux 3/4. Quel volume d'eau contient-il (en cm³) ?", en: "A 40 × 25 × 30 cm aquarium is 3/4 full. How much water does it hold (in cm³)?", nl: "Een aquarium van 40 × 25 × 30 cm is 3/4 vol. Hoeveel water bevat het (in cm³)?" },
    answer: 22500, tolerance: 0, unit: "cm³",
    hint: { fr: "Volume total = 30 000. Puis × 3/4.", en: "Total volume = 30,000. Then × 3/4.", nl: "Totaal volume = 30.000. Dan × 3/4." }
  },
  {
    id: "G3_s_14", category: "G3", level: 3,
    text: { fr: "Quel est le volume total de 2 cubes : un de côté 3 cm et un de côté 4 cm ?", en: "What is the total volume of 2 cubes: one with side 3 cm and one with side 4 cm?", nl: "Wat is het totale volume van 2 kubussen: een met zijde 3 cm en een met zijde 4 cm?" },
    answer: 91, tolerance: 0, unit: "cm³",
    hint: { fr: "3³ + 4³ = 27 + 64.", en: "3³ + 4³ = 27 + 64.", nl: "3³ + 4³ = 27 + 64." }
  },
  {
    id: "G3_s_15", category: "G3", level: 3,
    text: { fr: "Un cube de 10 cm d'arête a un cube de 5 cm retiré d'un coin. Quel volume reste-t-il ?", en: "A cube with 10 cm edge has a 5 cm cube removed from a corner. What volume remains?", nl: "Een kubus met ribbe 10 cm heeft een kubus van 5 cm uit een hoek verwijderd. Welk volume blijft over?" },
    answer: 875, tolerance: 0, unit: "cm³",
    hint: { fr: "1000 - 125 = 875.", en: "1000 - 125 = 875.", nl: "1000 - 125 = 875." }
  },

  // ── Level 1 — additional (G3_s_16 – G3_s_27) ─────────────────────────────
  {
    id: "G3_s_16", category: "G3", level: 1,
    text: { fr: "Quel est le volume d'un cube de côté 2 cm ?", en: "What is the volume of a cube with side 2 cm?", nl: "Wat is het volume van een kubus met zijde 2 cm?" },
    answer: 8, tolerance: 0, unit: "cm³",
    hint: { fr: "Volume = 2 × 2 × 2.", en: "Volume = 2 × 2 × 2.", nl: "Volume = 2 × 2 × 2." }
  },
  {
    id: "G3_s_17", category: "G3", level: 1,
    text: { fr: "Quel est le volume d'un pavé droit de 5 cm, 4 cm et 3 cm ?", en: "What is the volume of a rectangular prism: 5 cm, 4 cm and 3 cm?", nl: "Wat is het volume van een balk van 5 cm, 4 cm en 3 cm?" },
    answer: 60, tolerance: 0, unit: "cm³",
    hint: { fr: "Volume = 5 × 4 × 3.", en: "Volume = 5 × 4 × 3.", nl: "Volume = 5 × 4 × 3." }
  },
  {
    id: "G3_s_18", category: "G3", level: 1,
    text: { fr: "Quel est le volume d'un cube de côté 4 cm ?", en: "What is the volume of a cube with side 4 cm?", nl: "Wat is het volume van een kubus met zijde 4 cm?" },
    answer: 64, tolerance: 0, unit: "cm³",
    hint: { fr: "Volume = 4 × 4 × 4.", en: "Volume = 4 × 4 × 4.", nl: "Volume = 4 × 4 × 4." }
  },
  {
    id: "G3_s_19", category: "G3", level: 1,
    text: { fr: "Quel est le volume d'un pavé droit de 8 cm, 3 cm et 2 cm ?", en: "What is the volume of a rectangular prism: 8 cm, 3 cm and 2 cm?", nl: "Wat is het volume van een balk van 8 cm, 3 cm en 2 cm?" },
    answer: 48, tolerance: 0, unit: "cm³",
    hint: { fr: "Volume = 8 × 3 × 2.", en: "Volume = 8 × 3 × 2.", nl: "Volume = 8 × 3 × 2." }
  },
  {
    id: "G3_s_20", category: "G3", level: 1,
    text: { fr: "Quel est le volume d'un pavé droit de 7 cm, 4 cm et 2 cm ?", en: "What is the volume of a rectangular prism: 7 cm, 4 cm and 2 cm?", nl: "Wat is het volume van een balk van 7 cm, 4 cm en 2 cm?" },
    answer: 56, tolerance: 0, unit: "cm³",
    hint: { fr: "Volume = 7 × 4 × 2.", en: "Volume = 7 × 4 × 2.", nl: "Volume = 7 × 4 × 2." }
  },
  {
    id: "G3_s_21", category: "G3", level: 1,
    text: { fr: "Quel est le volume d'un cube de côté 6 cm ?", en: "What is the volume of a cube with side 6 cm?", nl: "Wat is het volume van een kubus met zijde 6 cm?" },
    answer: 216, tolerance: 0, unit: "cm³",
    hint: { fr: "Volume = 6 × 6 × 6.", en: "Volume = 6 × 6 × 6.", nl: "Volume = 6 × 6 × 6." }
  },
  {
    id: "G3_s_22", category: "G3", level: 1,
    text: { fr: "Quel est le volume d'un pavé droit de 9 cm, 2 cm et 5 cm ?", en: "What is the volume of a rectangular prism: 9 cm, 2 cm and 5 cm?", nl: "Wat is het volume van een balk van 9 cm, 2 cm en 5 cm?" },
    answer: 90, tolerance: 0, unit: "cm³",
    hint: { fr: "Volume = 9 × 2 × 5.", en: "Volume = 9 × 2 × 5.", nl: "Volume = 9 × 2 × 5." }
  },
  {
    id: "G3_s_23", category: "G3", level: 1,
    text: { fr: "Quel est le volume d'un cube de côté 1 cm ?", en: "What is the volume of a cube with side 1 cm?", nl: "Wat is het volume van een kubus met zijde 1 cm?" },
    answer: 1, tolerance: 0, unit: "cm³",
    hint: { fr: "Volume = 1 × 1 × 1.", en: "Volume = 1 × 1 × 1.", nl: "Volume = 1 × 1 × 1." }
  },
  {
    id: "G3_s_24", category: "G3", level: 1,
    text: { fr: "Quel est le volume d'un pavé droit de 3 cm, 3 cm et 5 cm ?", en: "What is the volume of a rectangular prism: 3 cm, 3 cm and 5 cm?", nl: "Wat is het volume van een balk van 3 cm, 3 cm en 5 cm?" },
    answer: 45, tolerance: 0, unit: "cm³",
    hint: { fr: "Volume = 3 × 3 × 5.", en: "Volume = 3 × 3 × 5.", nl: "Volume = 3 × 3 × 5." }
  },
  {
    id: "G3_s_25", category: "G3", level: 1,
    text: { fr: "Quel est le volume d'un pavé droit de 10 cm, 5 cm et 2 cm ?", en: "What is the volume of a rectangular prism: 10 cm, 5 cm and 2 cm?", nl: "Wat is het volume van een balk van 10 cm, 5 cm en 2 cm?" },
    answer: 100, tolerance: 0, unit: "cm³",
    hint: { fr: "Volume = 10 × 5 × 2.", en: "Volume = 10 × 5 × 2.", nl: "Volume = 10 × 5 × 2." }
  },
  {
    id: "G3_s_26", category: "G3", level: 1,
    text: { fr: "Quel est le volume d'un pavé droit de 6 cm, 3 cm et 2 cm ?", en: "What is the volume of a rectangular prism: 6 cm, 3 cm and 2 cm?", nl: "Wat is het volume van een balk van 6 cm, 3 cm en 2 cm?" },
    answer: 36, tolerance: 0, unit: "cm³",
    hint: { fr: "Volume = 6 × 3 × 2.", en: "Volume = 6 × 3 × 2.", nl: "Volume = 6 × 3 × 2." }
  },
  {
    id: "G3_s_27", category: "G3", level: 1,
    text: { fr: "Quel est le volume d'un cube de côté 7 cm ?", en: "What is the volume of a cube with side 7 cm?", nl: "Wat is het volume van een kubus met zijde 7 cm?" },
    answer: 343, tolerance: 0, unit: "cm³",
    hint: { fr: "Volume = 7 × 7 × 7.", en: "Volume = 7 × 7 × 7.", nl: "Volume = 7 × 7 × 7." }
  },

  // ── Level 2 — additional (G3_s_28 – G3_s_39) ─────────────────────────────
  {
    id: "G3_s_28", category: "G3", level: 2,
    text: { fr: "Quel est le volume d'un cube de côté 9 cm ?", en: "What is the volume of a cube with side 9 cm?", nl: "Wat is het volume van een kubus met zijde 9 cm?" },
    answer: 729, tolerance: 0, unit: "cm³",
    hint: { fr: "Volume = 9 × 9 × 9 = 729.", en: "Volume = 9 × 9 × 9 = 729.", nl: "Volume = 9 × 9 × 9 = 729." }
  },
  {
    id: "G3_s_29", category: "G3", level: 2,
    text: { fr: "Une boîte mesure 15 cm × 10 cm × 8 cm. Quel est son volume ?", en: "A box measures 15 cm × 10 cm × 8 cm. What is its volume?", nl: "Een doos meet 15 cm × 10 cm × 8 cm. Wat is het volume?" },
    answer: 1200, tolerance: 0, unit: "cm³",
    hint: { fr: "Volume = 15 × 10 × 8.", en: "Volume = 15 × 10 × 8.", nl: "Volume = 15 × 10 × 8." }
  },
  {
    id: "G3_s_30", category: "G3", level: 2,
    text: { fr: "Un cube a un volume de 27 cm³. Quelle est la longueur de son côté ?", en: "A cube has a volume of 27 cm³. What is its side length?", nl: "Een kubus heeft een volume van 27 cm³. Hoe lang is zijn zijde?" },
    answer: 3, tolerance: 0, unit: "cm",
    hint: { fr: "Quel nombre au cube donne 27 ? 3 × 3 × 3 = 27.", en: "What number cubed gives 27? 3 × 3 × 3 = 27.", nl: "Welk getal tot de derde macht geeft 27? 3 × 3 × 3 = 27." }
  },
  {
    id: "G3_s_31", category: "G3", level: 2,
    text: { fr: "Un tiroir mesure 20 cm × 15 cm × 6 cm. Quel est son volume ?", en: "A drawer measures 20 cm × 15 cm × 6 cm. What is its volume?", nl: "Een lade meet 20 cm × 15 cm × 6 cm. Wat is het volume?" },
    answer: 1800, tolerance: 0, unit: "cm³",
    hint: { fr: "Volume = 20 × 15 × 6.", en: "Volume = 20 × 15 × 6.", nl: "Volume = 20 × 15 × 6." }
  },
  {
    id: "G3_s_32", category: "G3", level: 2,
    text: { fr: "Un cube a un volume de 125 cm³. Quelle est la longueur de son côté ?", en: "A cube has a volume of 125 cm³. What is its side length?", nl: "Een kubus heeft een volume van 125 cm³. Hoe lang is zijn zijde?" },
    answer: 5, tolerance: 0, unit: "cm",
    hint: { fr: "Quel nombre au cube donne 125 ? 5 × 5 × 5 = 125.", en: "What number cubed gives 125? 5 × 5 × 5 = 125.", nl: "Welk getal tot de derde macht geeft 125? 5 × 5 × 5 = 125." }
  },
  {
    id: "G3_s_33", category: "G3", level: 2,
    text: { fr: "Un bac à sable mesure 25 cm × 20 cm × 10 cm. Quel est son volume ?", en: "A sandbox measures 25 cm × 20 cm × 10 cm. What is its volume?", nl: "Een zandbak meet 25 cm × 20 cm × 10 cm. Wat is het volume?" },
    answer: 5000, tolerance: 0, unit: "cm³",
    hint: { fr: "Volume = 25 × 20 × 10.", en: "Volume = 25 × 20 × 10.", nl: "Volume = 25 × 20 × 10." }
  },
  {
    id: "G3_s_34", category: "G3", level: 2,
    text: { fr: "Quel est le volume d'un pavé droit de 11 cm, 8 cm et 5 cm ?", en: "What is the volume of a rectangular prism: 11 cm, 8 cm and 5 cm?", nl: "Wat is het volume van een balk van 11 cm, 8 cm en 5 cm?" },
    answer: 440, tolerance: 0, unit: "cm³",
    hint: { fr: "Volume = 11 × 8 × 5.", en: "Volume = 11 × 8 × 5.", nl: "Volume = 11 × 8 × 5." }
  },
  {
    id: "G3_s_35", category: "G3", level: 2,
    text: { fr: "Un cube a un volume de 8 cm³. Quelle est la longueur de son côté ?", en: "A cube has a volume of 8 cm³. What is its side length?", nl: "Een kubus heeft een volume van 8 cm³. Hoe lang is zijn zijde?" },
    answer: 2, tolerance: 0, unit: "cm",
    hint: { fr: "Quel nombre au cube donne 8 ? 2 × 2 × 2 = 8.", en: "What number cubed gives 8? 2 × 2 × 2 = 8.", nl: "Welk getal tot de derde macht geeft 8? 2 × 2 × 2 = 8." }
  },
  {
    id: "G3_s_36", category: "G3", level: 2,
    text: { fr: "Un coffre mesure 50 cm × 30 cm × 20 cm. Quel est son volume ?", en: "A chest measures 50 cm × 30 cm × 20 cm. What is its volume?", nl: "Een kist meet 50 cm × 30 cm × 20 cm. Wat is het volume?" },
    answer: 30000, tolerance: 0, unit: "cm³",
    hint: { fr: "Volume = 50 × 30 × 20.", en: "Volume = 50 × 30 × 20.", nl: "Volume = 50 × 30 × 20." }
  },
  {
    id: "G3_s_37", category: "G3", level: 2,
    text: { fr: "Un pavé droit a un volume de 120 cm³. Sa longueur est 10 cm et sa largeur 4 cm. Quelle est sa hauteur ?", en: "A rectangular prism has a volume of 120 cm³. Its length is 10 cm and width 4 cm. What is its height?", nl: "Een balk heeft een volume van 120 cm³. De lengte is 10 cm en de breedte 4 cm. Wat is de hoogte?" },
    answer: 3, tolerance: 0, unit: "cm",
    hint: { fr: "Hauteur = 120 ÷ (10 × 4) = 120 ÷ 40.", en: "Height = 120 ÷ (10 × 4) = 120 ÷ 40.", nl: "Hoogte = 120 ÷ (10 × 4) = 120 ÷ 40." }
  },
  {
    id: "G3_s_38", category: "G3", level: 2,
    text: { fr: "Quel est le volume d'un pavé droit de 14 cm, 10 cm et 5 cm ?", en: "What is the volume of a rectangular prism: 14 cm, 10 cm and 5 cm?", nl: "Wat is het volume van een balk van 14 cm, 10 cm en 5 cm?" },
    answer: 700, tolerance: 0, unit: "cm³",
    hint: { fr: "Volume = 14 × 10 × 5.", en: "Volume = 14 × 10 × 5.", nl: "Volume = 14 × 10 × 5." }
  },
  {
    id: "G3_s_39", category: "G3", level: 2,
    text: { fr: "Un pavé droit a un volume de 240 cm³. Sa longueur est 8 cm et sa hauteur 5 cm. Quelle est sa largeur ?", en: "A rectangular prism has a volume of 240 cm³. Its length is 8 cm and height 5 cm. What is its width?", nl: "Een balk heeft een volume van 240 cm³. De lengte is 8 cm en de hoogte 5 cm. Wat is de breedte?" },
    answer: 6, tolerance: 0, unit: "cm",
    hint: { fr: "Largeur = 240 ÷ (8 × 5) = 240 ÷ 40.", en: "Width = 240 ÷ (8 × 5) = 240 ÷ 40.", nl: "Breedte = 240 ÷ (8 × 5) = 240 ÷ 40." }
  },

  // ── Level 3 — additional (G3_s_40 – G3_s_50) ─────────────────────────────
  {
    id: "G3_s_40", category: "G3", level: 3,
    text: { fr: "Combien de cubes de 3 cm peut-on ranger dans une boîte de 12 × 9 × 6 cm ?", en: "How many 3 cm cubes fit in a 12 × 9 × 6 cm box?", nl: "Hoeveel kubussen van 3 cm passen in een doos van 12 × 9 × 6 cm?" },
    answer: 24, tolerance: 0,
    hint: { fr: "12/3 × 9/3 × 6/3 = 4 × 3 × 2.", en: "12/3 × 9/3 × 6/3 = 4 × 3 × 2.", nl: "12/3 × 9/3 × 6/3 = 4 × 3 × 2." }
  },
  {
    id: "G3_s_41", category: "G3", level: 3,
    text: { fr: "Un aquarium de 50 × 20 × 30 cm est rempli à moitié. Quel volume d'eau contient-il (en cm³) ?", en: "A 50 × 20 × 30 cm aquarium is half full. How much water does it hold (in cm³)?", nl: "Een aquarium van 50 × 20 × 30 cm is halfvol. Hoeveel water bevat het (in cm³)?" },
    answer: 15000, tolerance: 0, unit: "cm³",
    hint: { fr: "Volume total = 30 000. Puis ÷ 2.", en: "Total volume = 30,000. Then ÷ 2.", nl: "Totaal volume = 30.000. Dan ÷ 2." }
  },
  {
    id: "G3_s_42", category: "G3", level: 3,
    text: { fr: "Quel est le volume total de 2 pavés droits : un de 5 × 4 × 3 cm et un de 6 × 3 × 2 cm ?", en: "What is the total volume of 2 prisms: one of 5 × 4 × 3 cm and one of 6 × 3 × 2 cm?", nl: "Wat is het totale volume van 2 balken: een van 5 × 4 × 3 cm en een van 6 × 3 × 2 cm?" },
    answer: 96, tolerance: 0, unit: "cm³",
    hint: { fr: "60 + 36 = 96.", en: "60 + 36 = 96.", nl: "60 + 36 = 96." }
  },
  {
    id: "G3_s_43", category: "G3", level: 3,
    text: { fr: "Un pavé de 10 × 8 × 6 cm a un cube de 4 cm découpé dans un coin. Quel est le volume restant ?", en: "A prism of 10 × 8 × 6 cm has a 4 cm cube cut from a corner. What volume remains?", nl: "Een balk van 10 × 8 × 6 cm heeft een kubus van 4 cm uit een hoek gesneden. Welk volume blijft over?" },
    answer: 416, tolerance: 0, unit: "cm³",
    hint: { fr: "480 - 64 = 416.", en: "480 - 64 = 416.", nl: "480 - 64 = 416." }
  },
  {
    id: "G3_s_44", category: "G3", level: 3,
    text: { fr: "Combien de cubes de 5 cm peut-on ranger dans une boîte de 20 × 15 × 10 cm ?", en: "How many 5 cm cubes fit in a 20 × 15 × 10 cm box?", nl: "Hoeveel kubussen van 5 cm passen in een doos van 20 × 15 × 10 cm?" },
    answer: 24, tolerance: 0,
    hint: { fr: "20/5 × 15/5 × 10/5 = 4 × 3 × 2.", en: "20/5 × 15/5 × 10/5 = 4 × 3 × 2.", nl: "20/5 × 15/5 × 10/5 = 4 × 3 × 2." }
  },
  {
    id: "G3_s_45", category: "G3", level: 3,
    text: { fr: "Un bac de 30 × 20 × 10 cm est rempli au 1/4. Quel volume d'eau contient-il (en cm³) ?", en: "A tank of 30 × 20 × 10 cm is 1/4 full. How much water does it hold (in cm³)?", nl: "Een bak van 30 × 20 × 10 cm is 1/4 vol. Hoeveel water bevat het (in cm³)?" },
    answer: 1500, tolerance: 0, unit: "cm³",
    hint: { fr: "Volume total = 6 000. Puis × 1/4.", en: "Total volume = 6,000. Then × 1/4.", nl: "Totaal volume = 6.000. Dan × 1/4." }
  },
  {
    id: "G3_s_46", category: "G3", level: 3,
    text: { fr: "Quel est le volume total de 3 cubes identiques de côté 3 cm ?", en: "What is the total volume of 3 identical cubes with side 3 cm?", nl: "Wat is het totale volume van 3 identieke kubussen met zijde 3 cm?" },
    answer: 81, tolerance: 0, unit: "cm³",
    hint: { fr: "3 × (3 × 3 × 3) = 3 × 27.", en: "3 × (3 × 3 × 3) = 3 × 27.", nl: "3 × (3 × 3 × 3) = 3 × 27." }
  },
  {
    id: "G3_s_47", category: "G3", level: 3,
    text: { fr: "Un pavé de 12 × 10 × 8 cm a un pavé de 6 × 4 × 3 cm retiré d'un coin. Quel volume reste-t-il ?", en: "A prism of 12 × 10 × 8 cm has a 6 × 4 × 3 cm prism removed from a corner. What volume remains?", nl: "Een balk van 12 × 10 × 8 cm heeft een balk van 6 × 4 × 3 cm uit een hoek verwijderd. Welk volume blijft over?" },
    answer: 888, tolerance: 0, unit: "cm³",
    hint: { fr: "960 - 72 = 888.", en: "960 - 72 = 888.", nl: "960 - 72 = 888." }
  },
  {
    id: "G3_s_48", category: "G3", level: 3,
    text: { fr: "Combien de cubes de 4 cm peut-on ranger dans une boîte de 16 × 12 × 8 cm ?", en: "How many 4 cm cubes fit in a 16 × 12 × 8 cm box?", nl: "Hoeveel kubussen van 4 cm passen in een doos van 16 × 12 × 8 cm?" },
    answer: 24, tolerance: 0,
    hint: { fr: "16/4 × 12/4 × 8/4 = 4 × 3 × 2.", en: "16/4 × 12/4 × 8/4 = 4 × 3 × 2.", nl: "16/4 × 12/4 × 8/4 = 4 × 3 × 2." }
  },
  {
    id: "G3_s_49", category: "G3", level: 3,
    text: { fr: "Un aquarium de 60 × 30 × 20 cm est rempli aux 2/3. Quel volume d'eau contient-il (en cm³) ?", en: "A 60 × 30 × 20 cm aquarium is 2/3 full. How much water does it hold (in cm³)?", nl: "Een aquarium van 60 × 30 × 20 cm is 2/3 vol. Hoeveel water bevat het (in cm³)?" },
    answer: 24000, tolerance: 0, unit: "cm³",
    hint: { fr: "Volume total = 36 000. Puis × 2/3.", en: "Total volume = 36,000. Then × 2/3.", nl: "Totaal volume = 36.000. Dan × 2/3." }
  },
  {
    id: "G3_s_50", category: "G3", level: 3,
    text: { fr: "Quel est le volume total d'un cube de côté 5 cm et d'un pavé droit de 10 × 4 × 3 cm ?", en: "What is the total volume of a cube with side 5 cm and a prism of 10 × 4 × 3 cm?", nl: "Wat is het totale volume van een kubus met zijde 5 cm en een balk van 10 × 4 × 3 cm?" },
    answer: 245, tolerance: 0, unit: "cm³",
    hint: { fr: "125 + 120 = 245.", en: "125 + 120 = 245.", nl: "125 + 120 = 245." }
  },
];

export function generate(level = 1) {
  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const id = `G3_gen_${Date.now()}_${rand(100, 999)}`;
  if (level <= 1) {
    const a = rand(2, 10); const b = rand(2, 8); const c = rand(2, 6);
    return { id, category: 'G3', level, text: { fr: `Quel est le volume d'un pavé droit de ${a} cm, ${b} cm et ${c} cm ?`, en: `What is the volume of a rectangular prism: ${a} cm, ${b} cm and ${c} cm?`, nl: `Wat is het volume van een balk van ${a} cm, ${b} cm en ${c} cm?` }, answer: a * b * c, tolerance: 0 };
  }
  const side = rand(3, 12);
  return { id, category: 'G3', level, text: { fr: `Quel est le volume d'un cube de côté ${side} cm ?`, en: `What is the volume of a cube with side ${side} cm?`, nl: `Wat is het volume van een kubus met zijde ${side} cm?` }, answer: side * side * side, tolerance: 0 };
}
