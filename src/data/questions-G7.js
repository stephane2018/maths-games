// =============================================================================
// G7 - Solides
// CE1D Belgian exam - Trilingual (FR / EN / NL)
// =============================================================================

export const questions = [
  // Level 1 — Faces, edges, vertices
  {
    id: "G7_s_1", category: "G7", level: 1,
    text: { fr: "Combien de faces a un cube ?", en: "How many faces does a cube have?", nl: "Hoeveel vlakken heeft een kubus?" },
    answer: 6, tolerance: 0,
    hint: { fr: "Un cube a 6 faces carrées.", en: "A cube has 6 square faces.", nl: "Een kubus heeft 6 vierkante vlakken." }
  },
  {
    id: "G7_s_2", category: "G7", level: 1,
    text: { fr: "Combien d'arêtes a un cube ?", en: "How many edges does a cube have?", nl: "Hoeveel ribben heeft een kubus?" },
    answer: 12, tolerance: 0,
    hint: { fr: "4 arêtes en haut + 4 en bas + 4 verticales.", en: "4 top + 4 bottom + 4 vertical edges.", nl: "4 boven + 4 onder + 4 verticale ribben." }
  },
  {
    id: "G7_s_3", category: "G7", level: 1,
    text: { fr: "Combien de sommets a un cube ?", en: "How many vertices does a cube have?", nl: "Hoeveel hoekpunten heeft een kubus?" },
    answer: 8, tolerance: 0,
    hint: { fr: "4 sommets en haut + 4 en bas.", en: "4 vertices on top + 4 on bottom.", nl: "4 hoekpunten boven + 4 onder." }
  },
  {
    id: "G7_s_4", category: "G7", level: 1,
    text: { fr: "Combien de faces a un pavé droit ?", en: "How many faces does a rectangular prism have?", nl: "Hoeveel vlakken heeft een balk?" },
    answer: 6, tolerance: 0,
    hint: { fr: "Comme le cube : 6 faces rectangulaires.", en: "Like a cube: 6 rectangular faces.", nl: "Net als een kubus: 6 rechthoekige vlakken." }
  },
  {
    id: "G7_s_5", category: "G7", level: 1,
    text: { fr: "Combien de faces a une pyramide à base carrée ?", en: "How many faces does a square-based pyramid have?", nl: "Hoeveel vlakken heeft een piramide met vierkant grondvlak?" },
    answer: 5, tolerance: 0,
    hint: { fr: "1 base carrée + 4 faces triangulaires.", en: "1 square base + 4 triangular faces.", nl: "1 vierkant grondvlak + 4 driehoekige vlakken." }
  },
  // Level 2 — Surface area, prism properties
  {
    id: "G7_s_6", category: "G7", level: 2,
    text: { fr: "Calcule l'aire totale d'un cube de côté 4 cm.", en: "Calculate the total surface area of a cube with side 4 cm.", nl: "Bereken de totale oppervlakte van een kubus met zijde 4 cm." },
    answer: 96, tolerance: 0, unit: "cm²",
    hint: { fr: "Aire = 6 . côté² = 6 . 16.", en: "Area = 6 . side² = 6 . 16.", nl: "Oppervlakte = 6 . zijde² = 6 . 16." }
  },
  {
    id: "G7_s_7", category: "G7", level: 2,
    text: { fr: "Combien de sommets a un prisme à base triangulaire ?", en: "How many vertices does a triangular prism have?", nl: "Hoeveel hoekpunten heeft een driehoekig prisma?" },
    answer: 6, tolerance: 0,
    hint: { fr: "3 sommets en haut + 3 en bas.", en: "3 vertices on top + 3 on bottom.", nl: "3 hoekpunten boven + 3 onder." }
  },
  {
    id: "G7_s_8", category: "G7", level: 2,
    text: { fr: "Combien d'arêtes a un prisme à base triangulaire ?", en: "How many edges does a triangular prism have?", nl: "Hoeveel ribben heeft een driehoekig prisma?" },
    answer: 9, tolerance: 0,
    hint: { fr: "3 en haut + 3 en bas + 3 latérales = 9.", en: "3 top + 3 bottom + 3 lateral = 9.", nl: "3 boven + 3 onder + 3 zijkanten = 9." }
  },
  {
    id: "G7_s_9", category: "G7", level: 2,
    text: { fr: "Calcule l'aire totale d'un cube de côté 3 cm.", en: "Calculate the total surface area of a cube with side 3 cm.", nl: "Bereken de totale oppervlakte van een kubus met zijde 3 cm." },
    answer: 54, tolerance: 0, unit: "cm²",
    hint: { fr: "6 . 3² = 6 . 9 = 54.", en: "6 . 3² = 6 . 9 = 54.", nl: "6 . 3² = 6 . 9 = 54." }
  },
  {
    id: "G7_s_10", category: "G7", level: 2,
    text: { fr: "Combien de faces a un prisme à base hexagonale ?", en: "How many faces does a hexagonal prism have?", nl: "Hoeveel vlakken heeft een zeshoekig prisma?" },
    answer: 8, tolerance: 0,
    hint: { fr: "2 hexagones + 6 rectangles = 8.", en: "2 hexagons + 6 rectangles = 8.", nl: "2 zeshoeken + 6 rechthoeken = 8." }
  },
  // Level 3 — Surface area of prisms, inverse
  {
    id: "G7_s_11", category: "G7", level: 3,
    text: { fr: "Quelle est l'aire totale d'un pavé droit de 5 cm . 3 cm . 2 cm ?", en: "What is the total surface area of a 5 . 3 . 2 cm rectangular prism?", nl: "Wat is de totale oppervlakte van een balk van 5 . 3 . 2 cm?" },
    answer: 62, tolerance: 0, unit: "cm²",
    hint: { fr: "2 . (5.3 + 5.2 + 3.2) = 2 . (15+10+6).", en: "2 . (5.3 + 5.2 + 3.2) = 2 . (15+10+6).", nl: "2 . (5.3 + 5.2 + 3.2) = 2 . (15+10+6)." }
  },
  {
    id: "G7_s_12", category: "G7", level: 3,
    text: { fr: "Un cube a une aire totale de 150 cm². Quel est son côté ?", en: "A cube has a total surface area of 150 cm². What is its side?", nl: "Een kubus heeft een totale oppervlakte van 150 cm². Wat is de zijde?" },
    answer: 5, tolerance: 0, unit: "cm",
    hint: { fr: "6 . côté² = 150, donc côté² = 25.", en: "6 . side² = 150, so side² = 25.", nl: "6 . zijde² = 150, dus zijde² = 25." }
  },
  {
    id: "G7_s_13", category: "G7", level: 3,
    text: { fr: "Quelle est l'aire totale d'un pavé droit de 4 cm . 4 cm . 10 cm ?", en: "What is the total surface area of a 4 . 4 . 10 cm rectangular prism?", nl: "Wat is de totale oppervlakte van een balk van 4 . 4 . 10 cm?" },
    answer: 192, tolerance: 0, unit: "cm²",
    hint: { fr: "2 . (16 + 40 + 40) = 2 . 96.", en: "2 . (16 + 40 + 40) = 2 . 96.", nl: "2 . (16 + 40 + 40) = 2 . 96." }
  },
  {
    id: "G7_s_14", category: "G7", level: 3,
    text: { fr: "Combien de faces a un prisme à base pentagonale ?", en: "How many faces does a pentagonal prism have?", nl: "Hoeveel vlakken heeft een vijfhoekig prisma?" },
    answer: 7, tolerance: 0,
    hint: { fr: "2 pentagones + 5 rectangles = 7.", en: "2 pentagons + 5 rectangles = 7.", nl: "2 vijfhoeken + 5 rechthoeken = 7." }
  },
  {
    id: "G7_s_15", category: "G7", level: 3,
    text: { fr: "Quelle est l'aire totale d'un pavé droit de 6 cm . 3 cm . 2 cm ?", en: "What is the total surface area of a 6 . 3 . 2 cm rectangular prism?", nl: "Wat is de totale oppervlakte van een balk van 6 . 3 . 2 cm?" },
    answer: 72, tolerance: 0, unit: "cm²",
    hint: { fr: "2 . (18 + 12 + 6) = 2 . 36.", en: "2 . (18 + 12 + 6) = 2 . 36.", nl: "2 . (18 + 12 + 6) = 2 . 36." }
  },

  // ── Additional Level 1 — Faces, edges, vertices ──────────────────────────
  {
    id: "G7_s_16", category: "G7", level: 1,
    text: { fr: "Combien d'arêtes a une pyramide à base carrée ?", en: "How many edges does a square-based pyramid have?", nl: "Hoeveel ribben heeft een piramide met vierkant grondvlak?" },
    answer: 8, tolerance: 0,
    hint: { fr: "4 arêtes de la base + 4 arêtes latérales = 8.", en: "4 base edges + 4 lateral edges = 8.", nl: "4 ribben van het grondvlak + 4 zijribben = 8." }
  },
  {
    id: "G7_s_17", category: "G7", level: 1,
    text: { fr: "Combien de sommets a une pyramide à base carrée ?", en: "How many vertices does a square-based pyramid have?", nl: "Hoeveel hoekpunten heeft een piramide met vierkant grondvlak?" },
    answer: 5, tolerance: 0,
    hint: { fr: "4 sommets à la base + 1 sommet au sommet = 5.", en: "4 base vertices + 1 apex = 5.", nl: "4 hoekpunten aan het grondvlak + 1 top = 5." }
  },
  {
    id: "G7_s_18", category: "G7", level: 1,
    text: { fr: "Combien de faces a un prisme à base triangulaire ?", en: "How many faces does a triangular prism have?", nl: "Hoeveel vlakken heeft een driehoekig prisma?" },
    answer: 5, tolerance: 0,
    hint: { fr: "2 triangles + 3 rectangles = 5.", en: "2 triangles + 3 rectangles = 5.", nl: "2 driehoeken + 3 rechthoeken = 5." }
  },
  {
    id: "G7_s_19", category: "G7", level: 1,
    text: { fr: "Combien de faces a un cylindre ?", en: "How many faces does a cylinder have?", nl: "Hoeveel vlakken heeft een cilinder?" },
    answer: 3, tolerance: 0,
    hint: { fr: "2 disques + 1 surface courbe = 3.", en: "2 circular faces + 1 curved surface = 3.", nl: "2 cirkels + 1 gebogen vlak = 3." }
  },
  {
    id: "G7_s_20", category: "G7", level: 1,
    text: { fr: "Combien d'arêtes a un tétraèdre (pyramide à base triangulaire) ?", en: "How many edges does a tetrahedron (triangular pyramid) have?", nl: "Hoeveel ribben heeft een tetraëder (driehoekige piramide)?" },
    answer: 6, tolerance: 0,
    hint: { fr: "3 arêtes de la base + 3 arêtes latérales = 6.", en: "3 base edges + 3 lateral edges = 6.", nl: "3 ribben van het grondvlak + 3 zijribben = 6." }
  },
  {
    id: "G7_s_21", category: "G7", level: 1,
    text: { fr: "Combien de sommets a un pavé droit ?", en: "How many vertices does a rectangular prism have?", nl: "Hoeveel hoekpunten heeft een balk?" },
    answer: 8, tolerance: 0,
    hint: { fr: "4 sommets en haut + 4 en bas = 8.", en: "4 vertices on top + 4 on bottom = 8.", nl: "4 hoekpunten boven + 4 onder = 8." }
  },
  {
    id: "G7_s_22", category: "G7", level: 1,
    text: { fr: "Combien de sommets a un tétraèdre ?", en: "How many vertices does a tetrahedron have?", nl: "Hoeveel hoekpunten heeft een tetraëder?" },
    answer: 4, tolerance: 0,
    hint: { fr: "3 sommets à la base + 1 au sommet = 4.", en: "3 base vertices + 1 apex = 4.", nl: "3 hoekpunten aan het grondvlak + 1 top = 4." }
  },
  {
    id: "G7_s_23", category: "G7", level: 1,
    text: { fr: "Combien de faces a un tétraèdre ?", en: "How many faces does a tetrahedron have?", nl: "Hoeveel vlakken heeft een tetraëder?" },
    answer: 4, tolerance: 0,
    hint: { fr: "1 base triangulaire + 3 faces latérales = 4.", en: "1 triangular base + 3 lateral faces = 4.", nl: "1 driehoekig grondvlak + 3 zijvlakken = 4." }
  },
  {
    id: "G7_s_24", category: "G7", level: 1,
    text: { fr: "Combien d'arêtes a un pavé droit ?", en: "How many edges does a rectangular prism have?", nl: "Hoeveel ribben heeft een balk?" },
    answer: 12, tolerance: 0,
    hint: { fr: "4 arêtes en haut + 4 en bas + 4 verticales = 12.", en: "4 top + 4 bottom + 4 vertical edges = 12.", nl: "4 boven + 4 onder + 4 verticale ribben = 12." }
  },
  {
    id: "G7_s_25", category: "G7", level: 1,
    text: { fr: "Combien de faces a un cône ?", en: "How many faces does a cone have?", nl: "Hoeveel vlakken heeft een kegel?" },
    answer: 2, tolerance: 0,
    hint: { fr: "1 disque (base) + 1 surface courbe = 2.", en: "1 circular base + 1 curved surface = 2.", nl: "1 cirkel (grondvlak) + 1 gebogen vlak = 2." }
  },
  {
    id: "G7_s_26", category: "G7", level: 1,
    text: { fr: "Combien de sommets a une pyramide à base triangulaire ?", en: "How many vertices does a triangular pyramid have?", nl: "Hoeveel hoekpunten heeft een driehoekige piramide?" },
    answer: 4, tolerance: 0,
    hint: { fr: "3 sommets à la base + 1 sommet au sommet = 4.", en: "3 base vertices + 1 apex = 4.", nl: "3 hoekpunten aan het grondvlak + 1 top = 4." }
  },
  {
    id: "G7_s_27", category: "G7", level: 1,
    text: { fr: "Combien d'arêtes a un prisme à base pentagonale ?", en: "How many edges does a pentagonal prism have?", nl: "Hoeveel ribben heeft een vijfhoekig prisma?" },
    answer: 15, tolerance: 0,
    hint: { fr: "5 en haut + 5 en bas + 5 latérales = 15.", en: "5 top + 5 bottom + 5 lateral = 15.", nl: "5 boven + 5 onder + 5 zijkanten = 15." }
  },

  // ── Additional Level 2 — Surface area of cubes, prism properties ─────────
  {
    id: "G7_s_28", category: "G7", level: 2,
    text: { fr: "Calcule l'aire totale d'un cube de côté 5 cm.", en: "Calculate the total surface area of a cube with side 5 cm.", nl: "Bereken de totale oppervlakte van een kubus met zijde 5 cm." },
    answer: 150, tolerance: 0, unit: "cm²",
    hint: { fr: "6 . 5² = 6 . 25 = 150.", en: "6 . 5² = 6 . 25 = 150.", nl: "6 . 5² = 6 . 25 = 150." }
  },
  {
    id: "G7_s_29", category: "G7", level: 2,
    text: { fr: "Calcule l'aire totale d'un cube de côté 2 cm.", en: "Calculate the total surface area of a cube with side 2 cm.", nl: "Bereken de totale oppervlakte van een kubus met zijde 2 cm." },
    answer: 24, tolerance: 0, unit: "cm²",
    hint: { fr: "6 . 2² = 6 . 4 = 24.", en: "6 . 2² = 6 . 4 = 24.", nl: "6 . 2² = 6 . 4 = 24." }
  },
  {
    id: "G7_s_30", category: "G7", level: 2,
    text: { fr: "Combien d'arêtes a un prisme à base hexagonale ?", en: "How many edges does a hexagonal prism have?", nl: "Hoeveel ribben heeft een zeshoekig prisma?" },
    answer: 18, tolerance: 0,
    hint: { fr: "6 en haut + 6 en bas + 6 latérales = 18.", en: "6 top + 6 bottom + 6 lateral = 18.", nl: "6 boven + 6 onder + 6 zijkanten = 18." }
  },
  {
    id: "G7_s_31", category: "G7", level: 2,
    text: { fr: "Combien de sommets a un prisme à base hexagonale ?", en: "How many vertices does a hexagonal prism have?", nl: "Hoeveel hoekpunten heeft een zeshoekig prisma?" },
    answer: 12, tolerance: 0,
    hint: { fr: "6 sommets en haut + 6 en bas = 12.", en: "6 vertices on top + 6 on bottom = 12.", nl: "6 hoekpunten boven + 6 onder = 12." }
  },
  {
    id: "G7_s_32", category: "G7", level: 2,
    text: { fr: "Calcule l'aire totale d'un cube de côté 6 cm.", en: "Calculate the total surface area of a cube with side 6 cm.", nl: "Bereken de totale oppervlakte van een kubus met zijde 6 cm." },
    answer: 216, tolerance: 0, unit: "cm²",
    hint: { fr: "6 . 6² = 6 . 36 = 216.", en: "6 . 6² = 6 . 36 = 216.", nl: "6 . 6² = 6 . 36 = 216." }
  },
  {
    id: "G7_s_33", category: "G7", level: 2,
    text: { fr: "Combien de sommets a un prisme à base pentagonale ?", en: "How many vertices does a pentagonal prism have?", nl: "Hoeveel hoekpunten heeft een vijfhoekig prisma?" },
    answer: 10, tolerance: 0,
    hint: { fr: "5 sommets en haut + 5 en bas = 10.", en: "5 vertices on top + 5 on bottom = 10.", nl: "5 hoekpunten boven + 5 onder = 10." }
  },
  {
    id: "G7_s_34", category: "G7", level: 2,
    text: { fr: "Combien de faces a un prisme à base octogonale ?", en: "How many faces does an octagonal prism have?", nl: "Hoeveel vlakken heeft een achthoekig prisma?" },
    answer: 10, tolerance: 0,
    hint: { fr: "2 octogones + 8 rectangles = 10.", en: "2 octagons + 8 rectangles = 10.", nl: "2 achthoeken + 8 rechthoeken = 10." }
  },
  {
    id: "G7_s_35", category: "G7", level: 2,
    text: { fr: "Combien d'arêtes a une pyramide à base pentagonale ?", en: "How many edges does a pentagonal pyramid have?", nl: "Hoeveel ribben heeft een piramide met vijfhoekig grondvlak?" },
    answer: 10, tolerance: 0,
    hint: { fr: "5 arêtes de la base + 5 arêtes latérales = 10.", en: "5 base edges + 5 lateral edges = 10.", nl: "5 ribben van het grondvlak + 5 zijribben = 10." }
  },
  {
    id: "G7_s_36", category: "G7", level: 2,
    text: { fr: "Calcule l'aire totale d'un cube de côté 7 cm.", en: "Calculate the total surface area of a cube with side 7 cm.", nl: "Bereken de totale oppervlakte van een kubus met zijde 7 cm." },
    answer: 294, tolerance: 0, unit: "cm²",
    hint: { fr: "6 . 7² = 6 . 49 = 294.", en: "6 . 7² = 6 . 49 = 294.", nl: "6 . 7² = 6 . 49 = 294." }
  },
  {
    id: "G7_s_37", category: "G7", level: 2,
    text: { fr: "Combien de sommets a une pyramide à base pentagonale ?", en: "How many vertices does a pentagonal pyramid have?", nl: "Hoeveel hoekpunten heeft een piramide met vijfhoekig grondvlak?" },
    answer: 6, tolerance: 0,
    hint: { fr: "5 sommets à la base + 1 au sommet = 6.", en: "5 base vertices + 1 apex = 6.", nl: "5 hoekpunten aan het grondvlak + 1 top = 6." }
  },
  {
    id: "G7_s_38", category: "G7", level: 2,
    text: { fr: "Combien de faces a une pyramide à base pentagonale ?", en: "How many faces does a pentagonal pyramid have?", nl: "Hoeveel vlakken heeft een piramide met vijfhoekig grondvlak?" },
    answer: 6, tolerance: 0,
    hint: { fr: "1 pentagone (base) + 5 triangles = 6.", en: "1 pentagon (base) + 5 triangles = 6.", nl: "1 vijfhoek (grondvlak) + 5 driehoeken = 6." }
  },
  {
    id: "G7_s_39", category: "G7", level: 2,
    text: { fr: "Calcule l'aire totale d'un cube de côté 10 cm.", en: "Calculate the total surface area of a cube with side 10 cm.", nl: "Bereken de totale oppervlakte van een kubus met zijde 10 cm." },
    answer: 600, tolerance: 0, unit: "cm²",
    hint: { fr: "6 . 10² = 6 . 100 = 600.", en: "6 . 10² = 6 . 100 = 600.", nl: "6 . 10² = 6 . 100 = 600." }
  },

  // ── Additional Level 3 — Surface area of prisms, inverse problems ────────
  {
    id: "G7_s_40", category: "G7", level: 3,
    text: { fr: "Quelle est l'aire totale d'un pavé droit de 7 cm . 3 cm . 2 cm ?", en: "What is the total surface area of a 7 . 3 . 2 cm rectangular prism?", nl: "Wat is de totale oppervlakte van een balk van 7 . 3 . 2 cm?" },
    answer: 82, tolerance: 0, unit: "cm²",
    hint: { fr: "2 . (21 + 14 + 6) = 2 . 41 = 82.", en: "2 . (21 + 14 + 6) = 2 . 41 = 82.", nl: "2 . (21 + 14 + 6) = 2 . 41 = 82." }
  },
  {
    id: "G7_s_41", category: "G7", level: 3,
    text: { fr: "Un cube a une aire totale de 96 cm². Quel est son côté ?", en: "A cube has a total surface area of 96 cm². What is its side?", nl: "Een kubus heeft een totale oppervlakte van 96 cm². Wat is de zijde?" },
    answer: 4, tolerance: 0, unit: "cm",
    hint: { fr: "6 . côté² = 96, donc côté² = 16, côté = 4.", en: "6 . side² = 96, so side² = 16, side = 4.", nl: "6 . zijde² = 96, dus zijde² = 16, zijde = 4." }
  },
  {
    id: "G7_s_42", category: "G7", level: 3,
    text: { fr: "Quelle est l'aire totale d'un pavé droit de 8 cm . 5 cm . 3 cm ?", en: "What is the total surface area of an 8 . 5 . 3 cm rectangular prism?", nl: "Wat is de totale oppervlakte van een balk van 8 . 5 . 3 cm?" },
    answer: 158, tolerance: 0, unit: "cm²",
    hint: { fr: "2 . (40 + 24 + 15) = 2 . 79 = 158.", en: "2 . (40 + 24 + 15) = 2 . 79 = 158.", nl: "2 . (40 + 24 + 15) = 2 . 79 = 158." }
  },
  {
    id: "G7_s_43", category: "G7", level: 3,
    text: { fr: "Quelle est l'aire totale d'un pavé droit de 10 cm . 4 cm . 3 cm ?", en: "What is the total surface area of a 10 . 4 . 3 cm rectangular prism?", nl: "Wat is de totale oppervlakte van een balk van 10 . 4 . 3 cm?" },
    answer: 164, tolerance: 0, unit: "cm²",
    hint: { fr: "2 . (40 + 30 + 12) = 2 . 82 = 164.", en: "2 . (40 + 30 + 12) = 2 . 82 = 164.", nl: "2 . (40 + 30 + 12) = 2 . 82 = 164." }
  },
  {
    id: "G7_s_44", category: "G7", level: 3,
    text: { fr: "Un cube a une aire totale de 216 cm². Quel est son côté ?", en: "A cube has a total surface area of 216 cm². What is its side?", nl: "Een kubus heeft een totale oppervlakte van 216 cm². Wat is de zijde?" },
    answer: 6, tolerance: 0, unit: "cm",
    hint: { fr: "6 . côté² = 216, donc côté² = 36, côté = 6.", en: "6 . side² = 216, so side² = 36, side = 6.", nl: "6 . zijde² = 216, dus zijde² = 36, zijde = 6." }
  },
  {
    id: "G7_s_45", category: "G7", level: 3,
    text: { fr: "Quelle est l'aire totale d'un pavé droit de 6 cm . 5 cm . 4 cm ?", en: "What is the total surface area of a 6 . 5 . 4 cm rectangular prism?", nl: "Wat is de totale oppervlakte van een balk van 6 . 5 . 4 cm?" },
    answer: 148, tolerance: 0, unit: "cm²",
    hint: { fr: "2 . (30 + 24 + 20) = 2 . 74 = 148.", en: "2 . (30 + 24 + 20) = 2 . 74 = 148.", nl: "2 . (30 + 24 + 20) = 2 . 74 = 148." }
  },
  {
    id: "G7_s_46", category: "G7", level: 3,
    text: { fr: "Un cube a une aire totale de 384 cm². Quel est son côté ?", en: "A cube has a total surface area of 384 cm². What is its side?", nl: "Een kubus heeft een totale oppervlakte van 384 cm². Wat is de zijde?" },
    answer: 8, tolerance: 0, unit: "cm",
    hint: { fr: "6 . côté² = 384, donc côté² = 64, côté = 8.", en: "6 . side² = 384, so side² = 64, side = 8.", nl: "6 . zijde² = 384, dus zijde² = 64, zijde = 8." }
  },
  {
    id: "G7_s_47", category: "G7", level: 3,
    text: { fr: "Quelle est l'aire totale d'un pavé droit de 9 cm . 4 cm . 2 cm ?", en: "What is the total surface area of a 9 . 4 . 2 cm rectangular prism?", nl: "Wat is de totale oppervlakte van een balk van 9 . 4 . 2 cm?" },
    answer: 124, tolerance: 0, unit: "cm²",
    hint: { fr: "2 . (36 + 18 + 8) = 2 . 62 = 124.", en: "2 . (36 + 18 + 8) = 2 . 62 = 124.", nl: "2 . (36 + 18 + 8) = 2 . 62 = 124." }
  },
  {
    id: "G7_s_48", category: "G7", level: 3,
    text: { fr: "Quelle est l'aire totale d'un pavé droit de 10 cm . 5 cm . 2 cm ?", en: "What is the total surface area of a 10 . 5 . 2 cm rectangular prism?", nl: "Wat is de totale oppervlakte van een balk van 10 . 5 . 2 cm?" },
    answer: 160, tolerance: 0, unit: "cm²",
    hint: { fr: "2 . (50 + 20 + 10) = 2 . 80 = 160.", en: "2 . (50 + 20 + 10) = 2 . 80 = 160.", nl: "2 . (50 + 20 + 10) = 2 . 80 = 160." }
  },
  {
    id: "G7_s_49", category: "G7", level: 3,
    text: { fr: "Un cube a une aire totale de 600 cm². Quel est son côté ?", en: "A cube has a total surface area of 600 cm². What is its side?", nl: "Een kubus heeft een totale oppervlakte van 600 cm². Wat is de zijde?" },
    answer: 10, tolerance: 0, unit: "cm",
    hint: { fr: "6 . côté² = 600, donc côté² = 100, côté = 10.", en: "6 . side² = 600, so side² = 100, side = 10.", nl: "6 . zijde² = 600, dus zijde² = 100, zijde = 10." }
  },
  {
    id: "G7_s_50", category: "G7", level: 3,
    text: { fr: "Quelle est l'aire totale d'un pavé droit de 8 cm . 6 cm . 4 cm ?", en: "What is the total surface area of an 8 . 6 . 4 cm rectangular prism?", nl: "Wat is de totale oppervlakte van een balk van 8 . 6 . 4 cm?" },
    answer: 208, tolerance: 0, unit: "cm²",
    hint: { fr: "2 . (48 + 32 + 24) = 2 . 104 = 208.", en: "2 . (48 + 32 + 24) = 2 . 104 = 208.", nl: "2 . (48 + 32 + 24) = 2 . 104 = 208." }
  },

  // ── G7_s_51–G7_s_70 — Level 1 — Faces, edges, vertices ─────────────────
  {
    id: "G7_s_51", category: "G7", level: 1,
    text: { fr: "Combien de faces a une pyramide à base triangulaire ?", en: "How many faces does a triangular pyramid have?", nl: "Hoeveel vlakken heeft een driehoekige piramide?" },
    answer: 4, tolerance: 0,
    hint: { fr: "1 base triangulaire + 3 faces latérales = 4.", en: "1 triangular base + 3 lateral faces = 4.", nl: "1 driehoekig grondvlak + 3 zijvlakken = 4." }
  },
  {
    id: "G7_s_52", category: "G7", level: 1,
    text: { fr: "Combien d'arêtes a une pyramide à base triangulaire ?", en: "How many edges does a triangular pyramid have?", nl: "Hoeveel ribben heeft een driehoekige piramide?" },
    answer: 6, tolerance: 0,
    hint: { fr: "3 arêtes de la base + 3 arêtes latérales = 6.", en: "3 base edges + 3 lateral edges = 6.", nl: "3 ribben van het grondvlak + 3 zijribben = 6." }
  },
  {
    id: "G7_s_53", category: "G7", level: 1,
    text: { fr: "Combien de sommets a un cylindre ?", en: "How many vertices does a cylinder have?", nl: "Hoeveel hoekpunten heeft een cilinder?" },
    answer: 0, tolerance: 0,
    hint: { fr: "Un cylindre n'a aucun sommet, seulement des surfaces courbes.", en: "A cylinder has no vertices, only curved surfaces.", nl: "Een cilinder heeft geen hoekpunten, alleen gebogen vlakken." }
  },
  {
    id: "G7_s_54", category: "G7", level: 1,
    text: { fr: "Combien d'arêtes a un cylindre ?", en: "How many edges does a cylinder have?", nl: "Hoeveel ribben heeft een cilinder?" },
    answer: 2, tolerance: 0,
    hint: { fr: "2 arêtes circulaires (bord de chaque disque).", en: "2 circular edges (rim of each disc).", nl: "2 cirkelvormige ribben (rand van elke cirkel)." }
  },
  {
    id: "G7_s_55", category: "G7", level: 1,
    text: { fr: "Combien de sommets a un cône ?", en: "How many vertices does a cone have?", nl: "Hoeveel hoekpunten heeft een kegel?" },
    answer: 1, tolerance: 0,
    hint: { fr: "Un cône a 1 seul sommet : la pointe.", en: "A cone has only 1 vertex: the apex.", nl: "Een kegel heeft slechts 1 hoekpunt: de top." }
  },
  {
    id: "G7_s_56", category: "G7", level: 1,
    text: { fr: "Combien d'arêtes a un cône ?", en: "How many edges does a cone have?", nl: "Hoeveel ribben heeft een kegel?" },
    answer: 1, tolerance: 0,
    hint: { fr: "1 arête circulaire à la base.", en: "1 circular edge at the base.", nl: "1 cirkelvormige ribbe aan het grondvlak." }
  },
  {
    id: "G7_s_57", category: "G7", level: 1,
    text: { fr: "Combien de faces a une pyramide à base hexagonale ?", en: "How many faces does a hexagonal pyramid have?", nl: "Hoeveel vlakken heeft een piramide met zeshoekig grondvlak?" },
    answer: 7, tolerance: 0,
    hint: { fr: "1 hexagone (base) + 6 triangles = 7.", en: "1 hexagon (base) + 6 triangles = 7.", nl: "1 zeshoek (grondvlak) + 6 driehoeken = 7." }
  },
  {
    id: "G7_s_58", category: "G7", level: 1,
    text: { fr: "Combien d'arêtes a une pyramide à base hexagonale ?", en: "How many edges does a hexagonal pyramid have?", nl: "Hoeveel ribben heeft een piramide met zeshoekig grondvlak?" },
    answer: 12, tolerance: 0,
    hint: { fr: "6 arêtes de la base + 6 arêtes latérales = 12.", en: "6 base edges + 6 lateral edges = 12.", nl: "6 ribben van het grondvlak + 6 zijribben = 12." }
  },
  {
    id: "G7_s_59", category: "G7", level: 1,
    text: { fr: "Combien de sommets a une pyramide à base hexagonale ?", en: "How many vertices does a hexagonal pyramid have?", nl: "Hoeveel hoekpunten heeft een piramide met zeshoekig grondvlak?" },
    answer: 7, tolerance: 0,
    hint: { fr: "6 sommets à la base + 1 au sommet = 7.", en: "6 base vertices + 1 apex = 7.", nl: "6 hoekpunten aan het grondvlak + 1 top = 7." }
  },
  {
    id: "G7_s_60", category: "G7", level: 1,
    text: { fr: "Combien de sommets a un prisme à base octogonale ?", en: "How many vertices does an octagonal prism have?", nl: "Hoeveel hoekpunten heeft een achthoekig prisma?" },
    answer: 16, tolerance: 0,
    hint: { fr: "8 sommets en haut + 8 en bas = 16.", en: "8 vertices on top + 8 on bottom = 16.", nl: "8 hoekpunten boven + 8 onder = 16." }
  },
  {
    id: "G7_s_61", category: "G7", level: 1,
    text: { fr: "Combien d'arêtes a un prisme à base octogonale ?", en: "How many edges does an octagonal prism have?", nl: "Hoeveel ribben heeft een achthoekig prisma?" },
    answer: 24, tolerance: 0,
    hint: { fr: "8 en haut + 8 en bas + 8 latérales = 24.", en: "8 top + 8 bottom + 8 lateral = 24.", nl: "8 boven + 8 onder + 8 zijkanten = 24." }
  },
  {
    id: "G7_s_62", category: "G7", level: 1,
    text: { fr: "Combien de faces a une sphère ?", en: "How many faces does a sphere have?", nl: "Hoeveel vlakken heeft een bol?" },
    answer: 1, tolerance: 0,
    hint: { fr: "Une sphère a une seule surface courbe.", en: "A sphere has a single curved surface.", nl: "Een bol heeft één gebogen vlak." }
  },
  {
    id: "G7_s_63", category: "G7", level: 1,
    text: { fr: "Combien de sommets a une sphère ?", en: "How many vertices does a sphere have?", nl: "Hoeveel hoekpunten heeft een bol?" },
    answer: 0, tolerance: 0,
    hint: { fr: "Une sphère n'a aucun sommet.", en: "A sphere has no vertices.", nl: "Een bol heeft geen hoekpunten." }
  },
  {
    id: "G7_s_64", category: "G7", level: 1,
    text: { fr: "Combien d'arêtes a une sphère ?", en: "How many edges does a sphere have?", nl: "Hoeveel ribben heeft een bol?" },
    answer: 0, tolerance: 0,
    hint: { fr: "Une sphère n'a aucune arête.", en: "A sphere has no edges.", nl: "Een bol heeft geen ribben." }
  },
  {
    id: "G7_s_65", category: "G7", level: 1,
    text: { fr: "Combien de faces a un prisme à base carrée (pavé droit) ?", en: "How many faces does a square-based prism (cuboid) have?", nl: "Hoeveel vlakken heeft een prisma met vierkant grondvlak (balk)?" },
    answer: 6, tolerance: 0,
    hint: { fr: "2 carrés + 4 rectangles = 6.", en: "2 squares + 4 rectangles = 6.", nl: "2 vierkanten + 4 rechthoeken = 6." }
  },
  {
    id: "G7_s_66", category: "G7", level: 1,
    text: { fr: "Combien d'arêtes a une pyramide à base octogonale ?", en: "How many edges does an octagonal pyramid have?", nl: "Hoeveel ribben heeft een piramide met achthoekig grondvlak?" },
    answer: 16, tolerance: 0,
    hint: { fr: "8 arêtes de la base + 8 arêtes latérales = 16.", en: "8 base edges + 8 lateral edges = 16.", nl: "8 ribben van het grondvlak + 8 zijribben = 16." }
  },
  {
    id: "G7_s_67", category: "G7", level: 1,
    text: { fr: "Combien de sommets a une pyramide à base octogonale ?", en: "How many vertices does an octagonal pyramid have?", nl: "Hoeveel hoekpunten heeft een piramide met achthoekig grondvlak?" },
    answer: 9, tolerance: 0,
    hint: { fr: "8 sommets à la base + 1 au sommet = 9.", en: "8 base vertices + 1 apex = 9.", nl: "8 hoekpunten aan het grondvlak + 1 top = 9." }
  },
  {
    id: "G7_s_68", category: "G7", level: 1,
    text: { fr: "Combien de faces a une pyramide à base octogonale ?", en: "How many faces does an octagonal pyramid have?", nl: "Hoeveel vlakken heeft een piramide met achthoekig grondvlak?" },
    answer: 9, tolerance: 0,
    hint: { fr: "1 octogone (base) + 8 triangles = 9.", en: "1 octagon (base) + 8 triangles = 9.", nl: "1 achthoek (grondvlak) + 8 driehoeken = 9." }
  },
  {
    id: "G7_s_69", category: "G7", level: 1,
    text: { fr: "Combien de faces a un prisme à base décagonale ?", en: "How many faces does a decagonal prism have?", nl: "Hoeveel vlakken heeft een tienhoekig prisma?" },
    answer: 12, tolerance: 0,
    hint: { fr: "2 décagones + 10 rectangles = 12.", en: "2 decagons + 10 rectangles = 12.", nl: "2 tienhoeken + 10 rechthoeken = 12." }
  },
  {
    id: "G7_s_70", category: "G7", level: 1,
    text: { fr: "Combien de sommets a un prisme à base décagonale ?", en: "How many vertices does a decagonal prism have?", nl: "Hoeveel hoekpunten heeft een tienhoekig prisma?" },
    answer: 20, tolerance: 0,
    hint: { fr: "10 sommets en haut + 10 en bas = 20.", en: "10 vertices on top + 10 on bottom = 20.", nl: "10 hoekpunten boven + 10 onder = 20." }
  },

  // ── G7_s_71–G7_s_90 — Level 2 — Surface area of cubes, prism properties ─
  {
    id: "G7_s_71", category: "G7", level: 2,
    text: { fr: "Calcule l'aire totale d'un cube de côté 8 cm.", en: "Calculate the total surface area of a cube with side 8 cm.", nl: "Bereken de totale oppervlakte van een kubus met zijde 8 cm." },
    answer: 384, tolerance: 0, unit: "cm²",
    hint: { fr: "6 . 8² = 6 . 64 = 384.", en: "6 . 8² = 6 . 64 = 384.", nl: "6 . 8² = 6 . 64 = 384." }
  },
  {
    id: "G7_s_72", category: "G7", level: 2,
    text: { fr: "Calcule l'aire totale d'un cube de côté 9 cm.", en: "Calculate the total surface area of a cube with side 9 cm.", nl: "Bereken de totale oppervlakte van een kubus met zijde 9 cm." },
    answer: 486, tolerance: 0, unit: "cm²",
    hint: { fr: "6 . 9² = 6 . 81 = 486.", en: "6 . 9² = 6 . 81 = 486.", nl: "6 . 9² = 6 . 81 = 486." }
  },
  {
    id: "G7_s_73", category: "G7", level: 2,
    text: { fr: "Calcule l'aire totale d'un cube de côté 1 cm.", en: "Calculate the total surface area of a cube with side 1 cm.", nl: "Bereken de totale oppervlakte van een kubus met zijde 1 cm." },
    answer: 6, tolerance: 0, unit: "cm²",
    hint: { fr: "6 . 1² = 6 . 1 = 6.", en: "6 . 1² = 6 . 1 = 6.", nl: "6 . 1² = 6 . 1 = 6." }
  },
  {
    id: "G7_s_74", category: "G7", level: 2,
    text: { fr: "Calcule l'aire totale d'un cube de côté 11 cm.", en: "Calculate the total surface area of a cube with side 11 cm.", nl: "Bereken de totale oppervlakte van een kubus met zijde 11 cm." },
    answer: 726, tolerance: 0, unit: "cm²",
    hint: { fr: "6 . 11² = 6 . 121 = 726.", en: "6 . 11² = 6 . 121 = 726.", nl: "6 . 11² = 6 . 121 = 726." }
  },
  {
    id: "G7_s_75", category: "G7", level: 2,
    text: { fr: "Calcule l'aire totale d'un cube de côté 12 cm.", en: "Calculate the total surface area of a cube with side 12 cm.", nl: "Bereken de totale oppervlakte van een kubus met zijde 12 cm." },
    answer: 864, tolerance: 0, unit: "cm²",
    hint: { fr: "6 . 12² = 6 . 144 = 864.", en: "6 . 12² = 6 . 144 = 864.", nl: "6 . 12² = 6 . 144 = 864." }
  },
  {
    id: "G7_s_76", category: "G7", level: 2,
    text: { fr: "Combien d'arêtes a un prisme à base décagonale ?", en: "How many edges does a decagonal prism have?", nl: "Hoeveel ribben heeft een tienhoekig prisma?" },
    answer: 30, tolerance: 0,
    hint: { fr: "10 en haut + 10 en bas + 10 latérales = 30.", en: "10 top + 10 bottom + 10 lateral = 30.", nl: "10 boven + 10 onder + 10 zijkanten = 30." }
  },
  {
    id: "G7_s_77", category: "G7", level: 2,
    text: { fr: "Combien de faces a un prisme à base triangulaire ? Compte les faces latérales et les bases.", en: "How many faces does a triangular prism have? Count both lateral faces and bases.", nl: "Hoeveel vlakken heeft een driehoekig prisma? Tel zowel zijvlakken als grondvlakken." },
    answer: 5, tolerance: 0,
    hint: { fr: "2 bases triangulaires + 3 rectangles latéraux = 5.", en: "2 triangular bases + 3 lateral rectangles = 5.", nl: "2 driehoekige grondvlakken + 3 rechthoekige zijvlakken = 5." }
  },
  {
    id: "G7_s_78", category: "G7", level: 2,
    text: { fr: "Combien d'arêtes a une pyramide à base hexagonale ?", en: "How many edges does a hexagonal pyramid have?", nl: "Hoeveel ribben heeft een piramide met zeshoekig grondvlak?" },
    answer: 12, tolerance: 0,
    hint: { fr: "6 arêtes de la base + 6 arêtes latérales = 12.", en: "6 base edges + 6 lateral edges = 12.", nl: "6 ribben van het grondvlak + 6 zijribben = 12." }
  },
  {
    id: "G7_s_79", category: "G7", level: 2,
    text: { fr: "Combien de sommets a une pyramide à base hexagonale ?", en: "How many vertices does a hexagonal pyramid have?", nl: "Hoeveel hoekpunten heeft een piramide met zeshoekig grondvlak?" },
    answer: 7, tolerance: 0,
    hint: { fr: "6 sommets à la base + 1 au sommet = 7.", en: "6 base vertices + 1 apex = 7.", nl: "6 hoekpunten aan het grondvlak + 1 top = 7." }
  },
  {
    id: "G7_s_80", category: "G7", level: 2,
    text: { fr: "Calcule l'aire d'une face d'un cube de côté 5 cm.", en: "Calculate the area of one face of a cube with side 5 cm.", nl: "Bereken de oppervlakte van één vlak van een kubus met zijde 5 cm." },
    answer: 25, tolerance: 0, unit: "cm²",
    hint: { fr: "Aire d'une face = côté² = 5² = 25.", en: "Area of one face = side² = 5² = 25.", nl: "Oppervlakte van één vlak = zijde² = 5² = 25." }
  },
  {
    id: "G7_s_81", category: "G7", level: 2,
    text: { fr: "Calcule l'aire d'une face d'un cube de côté 7 cm.", en: "Calculate the area of one face of a cube with side 7 cm.", nl: "Bereken de oppervlakte van één vlak van een kubus met zijde 7 cm." },
    answer: 49, tolerance: 0, unit: "cm²",
    hint: { fr: "Aire d'une face = côté² = 7² = 49.", en: "Area of one face = side² = 7² = 49.", nl: "Oppervlakte van één vlak = zijde² = 7² = 49." }
  },
  {
    id: "G7_s_82", category: "G7", level: 2,
    text: { fr: "Calcule l'aire d'une face d'un cube de côté 10 cm.", en: "Calculate the area of one face of a cube with side 10 cm.", nl: "Bereken de oppervlakte van één vlak van een kubus met zijde 10 cm." },
    answer: 100, tolerance: 0, unit: "cm²",
    hint: { fr: "Aire d'une face = côté² = 10² = 100.", en: "Area of one face = side² = 10² = 100.", nl: "Oppervlakte van één vlak = zijde² = 10² = 100." }
  },
  {
    id: "G7_s_83", category: "G7", level: 2,
    text: { fr: "Combien de faces a une pyramide à base hexagonale ?", en: "How many faces does a hexagonal pyramid have?", nl: "Hoeveel vlakken heeft een piramide met zeshoekig grondvlak?" },
    answer: 7, tolerance: 0,
    hint: { fr: "1 hexagone (base) + 6 triangles = 7.", en: "1 hexagon (base) + 6 triangles = 7.", nl: "1 zeshoek (grondvlak) + 6 driehoeken = 7." }
  },
  {
    id: "G7_s_84", category: "G7", level: 2,
    text: { fr: "Calcule l'aire d'une face d'un cube de côté 9 cm.", en: "Calculate the area of one face of a cube with side 9 cm.", nl: "Bereken de oppervlakte van één vlak van een kubus met zijde 9 cm." },
    answer: 81, tolerance: 0, unit: "cm²",
    hint: { fr: "Aire d'une face = côté² = 9² = 81.", en: "Area of one face = side² = 9² = 81.", nl: "Oppervlakte van één vlak = zijde² = 9² = 81." }
  },
  {
    id: "G7_s_85", category: "G7", level: 2,
    text: { fr: "Combien de faces a un prisme à base heptagonale (7 côtés) ?", en: "How many faces does a heptagonal prism (7 sides) have?", nl: "Hoeveel vlakken heeft een zevenhoekig prisma (7 zijden)?" },
    answer: 9, tolerance: 0,
    hint: { fr: "2 heptagones + 7 rectangles = 9.", en: "2 heptagons + 7 rectangles = 9.", nl: "2 zevenhoeken + 7 rechthoeken = 9." }
  },
  {
    id: "G7_s_86", category: "G7", level: 2,
    text: { fr: "Combien d'arêtes a un prisme à base heptagonale (7 côtés) ?", en: "How many edges does a heptagonal prism (7 sides) have?", nl: "Hoeveel ribben heeft een zevenhoekig prisma (7 zijden)?" },
    answer: 21, tolerance: 0,
    hint: { fr: "7 en haut + 7 en bas + 7 latérales = 21.", en: "7 top + 7 bottom + 7 lateral = 21.", nl: "7 boven + 7 onder + 7 zijkanten = 21." }
  },
  {
    id: "G7_s_87", category: "G7", level: 2,
    text: { fr: "Combien de sommets a un prisme à base heptagonale (7 côtés) ?", en: "How many vertices does a heptagonal prism (7 sides) have?", nl: "Hoeveel hoekpunten heeft een zevenhoekig prisma (7 zijden)?" },
    answer: 14, tolerance: 0,
    hint: { fr: "7 sommets en haut + 7 en bas = 14.", en: "7 vertices on top + 7 on bottom = 14.", nl: "7 hoekpunten boven + 7 onder = 14." }
  },
  {
    id: "G7_s_88", category: "G7", level: 2,
    text: { fr: "Calcule l'aire d'une face d'un cube de côté 6 cm.", en: "Calculate the area of one face of a cube with side 6 cm.", nl: "Bereken de oppervlakte van één vlak van een kubus met zijde 6 cm." },
    answer: 36, tolerance: 0, unit: "cm²",
    hint: { fr: "Aire d'une face = côté² = 6² = 36.", en: "Area of one face = side² = 6² = 36.", nl: "Oppervlakte van één vlak = zijde² = 6² = 36." }
  },
  {
    id: "G7_s_89", category: "G7", level: 2,
    text: { fr: "Combien d'arêtes a une pyramide à base heptagonale (7 côtés) ?", en: "How many edges does a heptagonal pyramid (7 sides) have?", nl: "Hoeveel ribben heeft een piramide met zevenhoekig grondvlak (7 zijden)?" },
    answer: 14, tolerance: 0,
    hint: { fr: "7 arêtes de la base + 7 arêtes latérales = 14.", en: "7 base edges + 7 lateral edges = 14.", nl: "7 ribben van het grondvlak + 7 zijribben = 14." }
  },
  {
    id: "G7_s_90", category: "G7", level: 2,
    text: { fr: "Combien de sommets a une pyramide à base heptagonale (7 côtés) ?", en: "How many vertices does a heptagonal pyramid (7 sides) have?", nl: "Hoeveel hoekpunten heeft een piramide met zevenhoekig grondvlak (7 zijden)?" },
    answer: 8, tolerance: 0,
    hint: { fr: "7 sommets à la base + 1 au sommet = 8.", en: "7 base vertices + 1 apex = 8.", nl: "7 hoekpunten aan het grondvlak + 1 top = 8." }
  },

  // ── G7_s_91–G7_s_111 — Level 3 — Surface area of prisms, inverse problems ─
  {
    id: "G7_s_91", category: "G7", level: 3,
    text: { fr: "Quelle est l'aire totale d'un pavé droit de 3 cm . 3 cm . 5 cm ?", en: "What is the total surface area of a 3 . 3 . 5 cm rectangular prism?", nl: "Wat is de totale oppervlakte van een balk van 3 . 3 . 5 cm?" },
    answer: 78, tolerance: 0, unit: "cm²",
    hint: { fr: "2 . (9 + 15 + 15) = 2 . 39 = 78.", en: "2 . (9 + 15 + 15) = 2 . 39 = 78.", nl: "2 . (9 + 15 + 15) = 2 . 39 = 78." }
  },
  {
    id: "G7_s_92", category: "G7", level: 3,
    text: { fr: "Un cube a une aire totale de 24 cm². Quel est son côté ?", en: "A cube has a total surface area of 24 cm². What is its side?", nl: "Een kubus heeft een totale oppervlakte van 24 cm². Wat is de zijde?" },
    answer: 2, tolerance: 0, unit: "cm",
    hint: { fr: "6 . côté² = 24, donc côté² = 4, côté = 2.", en: "6 . side² = 24, so side² = 4, side = 2.", nl: "6 . zijde² = 24, dus zijde² = 4, zijde = 2." }
  },
  {
    id: "G7_s_93", category: "G7", level: 3,
    text: { fr: "Quelle est l'aire totale d'un pavé droit de 7 cm . 5 cm . 3 cm ?", en: "What is the total surface area of a 7 . 5 . 3 cm rectangular prism?", nl: "Wat is de totale oppervlakte van een balk van 7 . 5 . 3 cm?" },
    answer: 142, tolerance: 0, unit: "cm²",
    hint: { fr: "2 . (35 + 21 + 15) = 2 . 71 = 142.", en: "2 . (35 + 21 + 15) = 2 . 71 = 142.", nl: "2 . (35 + 21 + 15) = 2 . 71 = 142." }
  },
  {
    id: "G7_s_94", category: "G7", level: 3,
    text: { fr: "Quelle est l'aire totale d'un pavé droit de 2 cm . 2 cm . 7 cm ?", en: "What is the total surface area of a 2 . 2 . 7 cm rectangular prism?", nl: "Wat is de totale oppervlakte van een balk van 2 . 2 . 7 cm?" },
    answer: 64, tolerance: 0, unit: "cm²",
    hint: { fr: "2 . (4 + 14 + 14) = 2 . 32 = 64.", en: "2 . (4 + 14 + 14) = 2 . 32 = 64.", nl: "2 . (4 + 14 + 14) = 2 . 32 = 64." }
  },
  {
    id: "G7_s_95", category: "G7", level: 3,
    text: { fr: "Un cube a une aire totale de 54 cm². Quel est son côté ?", en: "A cube has a total surface area of 54 cm². What is its side?", nl: "Een kubus heeft een totale oppervlakte van 54 cm². Wat is de zijde?" },
    answer: 3, tolerance: 0, unit: "cm",
    hint: { fr: "6 . côté² = 54, donc côté² = 9, côté = 3.", en: "6 . side² = 54, so side² = 9, side = 3.", nl: "6 . zijde² = 54, dus zijde² = 9, zijde = 3." }
  },
  {
    id: "G7_s_96", category: "G7", level: 3,
    text: { fr: "Quelle est l'aire totale d'un pavé droit de 10 cm . 6 cm . 3 cm ?", en: "What is the total surface area of a 10 . 6 . 3 cm rectangular prism?", nl: "Wat is de totale oppervlakte van een balk van 10 . 6 . 3 cm?" },
    answer: 216, tolerance: 0, unit: "cm²",
    hint: { fr: "2 . (60 + 30 + 18) = 2 . 108 = 216.", en: "2 . (60 + 30 + 18) = 2 . 108 = 216.", nl: "2 . (60 + 30 + 18) = 2 . 108 = 216." }
  },
  {
    id: "G7_s_97", category: "G7", level: 3,
    text: { fr: "Quelle est l'aire totale d'un pavé droit de 5 cm . 5 cm . 8 cm ?", en: "What is the total surface area of a 5 . 5 . 8 cm rectangular prism?", nl: "Wat is de totale oppervlakte van een balk van 5 . 5 . 8 cm?" },
    answer: 210, tolerance: 0, unit: "cm²",
    hint: { fr: "2 . (25 + 40 + 40) = 2 . 105 = 210.", en: "2 . (25 + 40 + 40) = 2 . 105 = 210.", nl: "2 . (25 + 40 + 40) = 2 . 105 = 210." }
  },
  {
    id: "G7_s_98", category: "G7", level: 3,
    text: { fr: "Un cube a une aire totale de 294 cm². Quel est son côté ?", en: "A cube has a total surface area of 294 cm². What is its side?", nl: "Een kubus heeft een totale oppervlakte van 294 cm². Wat is de zijde?" },
    answer: 7, tolerance: 0, unit: "cm",
    hint: { fr: "6 . côté² = 294, donc côté² = 49, côté = 7.", en: "6 . side² = 294, so side² = 49, side = 7.", nl: "6 . zijde² = 294, dus zijde² = 49, zijde = 7." }
  },
  {
    id: "G7_s_99", category: "G7", level: 3,
    text: { fr: "Quelle est l'aire totale d'un pavé droit de 9 cm . 6 cm . 2 cm ?", en: "What is the total surface area of a 9 . 6 . 2 cm rectangular prism?", nl: "Wat is de totale oppervlakte van een balk van 9 . 6 . 2 cm?" },
    answer: 168, tolerance: 0, unit: "cm²",
    hint: { fr: "2 . (54 + 18 + 12) = 2 . 84 = 168.", en: "2 . (54 + 18 + 12) = 2 . 84 = 168.", nl: "2 . (54 + 18 + 12) = 2 . 84 = 168." }
  },
  {
    id: "G7_s_100", category: "G7", level: 3,
    text: { fr: "Quelle est l'aire totale d'un pavé droit de 4 cm . 3 cm . 2 cm ?", en: "What is the total surface area of a 4 . 3 . 2 cm rectangular prism?", nl: "Wat is de totale oppervlakte van een balk van 4 . 3 . 2 cm?" },
    answer: 52, tolerance: 0, unit: "cm²",
    hint: { fr: "2 . (12 + 8 + 6) = 2 . 26 = 52.", en: "2 . (12 + 8 + 6) = 2 . 26 = 52.", nl: "2 . (12 + 8 + 6) = 2 . 26 = 52." }
  },
  {
    id: "G7_s_101", category: "G7", level: 3,
    text: { fr: "Un cube a une aire totale de 486 cm². Quel est son côté ?", en: "A cube has a total surface area of 486 cm². What is its side?", nl: "Een kubus heeft een totale oppervlakte van 486 cm². Wat is de zijde?" },
    answer: 9, tolerance: 0, unit: "cm",
    hint: { fr: "6 . côté² = 486, donc côté² = 81, côté = 9.", en: "6 . side² = 486, so side² = 81, side = 9.", nl: "6 . zijde² = 486, dus zijde² = 81, zijde = 9." }
  },
  {
    id: "G7_s_102", category: "G7", level: 3,
    text: { fr: "Quelle est l'aire totale d'un pavé droit de 6 cm . 4 cm . 2 cm ?", en: "What is the total surface area of a 6 . 4 . 2 cm rectangular prism?", nl: "Wat is de totale oppervlakte van een balk van 6 . 4 . 2 cm?" },
    answer: 88, tolerance: 0, unit: "cm²",
    hint: { fr: "2 . (24 + 12 + 8) = 2 . 44 = 88.", en: "2 . (24 + 12 + 8) = 2 . 44 = 88.", nl: "2 . (24 + 12 + 8) = 2 . 44 = 88." }
  },
  {
    id: "G7_s_103", category: "G7", level: 3,
    text: { fr: "Quelle est l'aire totale d'un pavé droit de 10 cm . 10 cm . 5 cm ?", en: "What is the total surface area of a 10 . 10 . 5 cm rectangular prism?", nl: "Wat is de totale oppervlakte van een balk van 10 . 10 . 5 cm?" },
    answer: 400, tolerance: 0, unit: "cm²",
    hint: { fr: "2 . (100 + 50 + 50) = 2 . 200 = 400.", en: "2 . (100 + 50 + 50) = 2 . 200 = 400.", nl: "2 . (100 + 50 + 50) = 2 . 200 = 400." }
  },
  {
    id: "G7_s_104", category: "G7", level: 3,
    text: { fr: "Un cube a une aire totale de 726 cm². Quel est son côté ?", en: "A cube has a total surface area of 726 cm². What is its side?", nl: "Een kubus heeft een totale oppervlakte van 726 cm². Wat is de zijde?" },
    answer: 11, tolerance: 0, unit: "cm",
    hint: { fr: "6 . côté² = 726, donc côté² = 121, côté = 11.", en: "6 . side² = 726, so side² = 121, side = 11.", nl: "6 . zijde² = 726, dus zijde² = 121, zijde = 11." }
  },
  {
    id: "G7_s_105", category: "G7", level: 3,
    text: { fr: "Quelle est l'aire totale d'un pavé droit de 8 cm . 3 cm . 2 cm ?", en: "What is the total surface area of an 8 . 3 . 2 cm rectangular prism?", nl: "Wat is de totale oppervlakte van een balk van 8 . 3 . 2 cm?" },
    answer: 92, tolerance: 0, unit: "cm²",
    hint: { fr: "2 . (24 + 16 + 6) = 2 . 46 = 92.", en: "2 . (24 + 16 + 6) = 2 . 46 = 92.", nl: "2 . (24 + 16 + 6) = 2 . 46 = 92." }
  },
  {
    id: "G7_s_106", category: "G7", level: 3,
    text: { fr: "Quelle est l'aire totale d'un pavé droit de 7 cm . 7 cm . 3 cm ?", en: "What is the total surface area of a 7 . 7 . 3 cm rectangular prism?", nl: "Wat is de totale oppervlakte van een balk van 7 . 7 . 3 cm?" },
    answer: 182, tolerance: 0, unit: "cm²",
    hint: { fr: "2 . (49 + 21 + 21) = 2 . 91 = 182.", en: "2 . (49 + 21 + 21) = 2 . 91 = 182.", nl: "2 . (49 + 21 + 21) = 2 . 91 = 182." }
  },
  {
    id: "G7_s_107", category: "G7", level: 3,
    text: { fr: "Un cube a une aire totale de 864 cm². Quel est son côté ?", en: "A cube has a total surface area of 864 cm². What is its side?", nl: "Een kubus heeft een totale oppervlakte van 864 cm². Wat is de zijde?" },
    answer: 12, tolerance: 0, unit: "cm",
    hint: { fr: "6 . côté² = 864, donc côté² = 144, côté = 12.", en: "6 . side² = 864, so side² = 144, side = 12.", nl: "6 . zijde² = 864, dus zijde² = 144, zijde = 12." }
  },
  {
    id: "G7_s_108", category: "G7", level: 3,
    text: { fr: "Quelle est l'aire totale d'un pavé droit de 5 cm . 4 cm . 3 cm ?", en: "What is the total surface area of a 5 . 4 . 3 cm rectangular prism?", nl: "Wat is de totale oppervlakte van een balk van 5 . 4 . 3 cm?" },
    answer: 94, tolerance: 0, unit: "cm²",
    hint: { fr: "2 . (20 + 15 + 12) = 2 . 47 = 94.", en: "2 . (20 + 15 + 12) = 2 . 47 = 94.", nl: "2 . (20 + 15 + 12) = 2 . 47 = 94." }
  },
  {
    id: "G7_s_109", category: "G7", level: 3,
    text: { fr: "Quelle est l'aire totale d'un pavé droit de 9 cm . 5 cm . 4 cm ?", en: "What is the total surface area of a 9 . 5 . 4 cm rectangular prism?", nl: "Wat is de totale oppervlakte van een balk van 9 . 5 . 4 cm?" },
    answer: 202, tolerance: 0, unit: "cm²",
    hint: { fr: "2 . (45 + 36 + 20) = 2 . 101 = 202.", en: "2 . (45 + 36 + 20) = 2 . 101 = 202.", nl: "2 . (45 + 36 + 20) = 2 . 101 = 202." }
  },
  {
    id: "G7_s_110", category: "G7", level: 3,
    text: { fr: "Un cube a une aire totale de 6 cm². Quel est son côté ?", en: "A cube has a total surface area of 6 cm². What is its side?", nl: "Een kubus heeft een totale oppervlakte van 6 cm². Wat is de zijde?" },
    answer: 1, tolerance: 0, unit: "cm",
    hint: { fr: "6 . côté² = 6, donc côté² = 1, côté = 1.", en: "6 . side² = 6, so side² = 1, side = 1.", nl: "6 . zijde² = 6, dus zijde² = 1, zijde = 1." }
  },
  {
    id: "G7_s_111", category: "G7", level: 3,
    text: { fr: "Quelle est l'aire totale d'un pavé droit de 12 cm . 5 cm . 3 cm ?", en: "What is the total surface area of a 12 . 5 . 3 cm rectangular prism?", nl: "Wat is de totale oppervlakte van een balk van 12 . 5 . 3 cm?" },
    answer: 222, tolerance: 0, unit: "cm²",
    hint: { fr: "2 . (60 + 36 + 15) = 2 . 111 = 222.", en: "2 . (60 + 36 + 15) = 2 . 111 = 222.", nl: "2 . (60 + 36 + 15) = 2 . 111 = 222." }
  },
  {
    id: "G7_s_112", category: "G7", level: 1,
    text: { fr: "Combien d'arêtes a un pavé droit ?", en: "How many edges does a rectangular prism have?", nl: "Hoeveel ribben heeft een balk?" },
    answer: 12, tolerance: 0,
    hint: { fr: "4 arêtes en haut + 4 en bas + 4 verticales = 12.", en: "4 top + 4 bottom + 4 vertical = 12.", nl: "4 boven + 4 onder + 4 verticale = 12." }
  },
  {
    id: "G7_s_113", category: "G7", level: 1,
    text: { fr: "Combien de sommets a une pyramide à base carrée ?", en: "How many vertices does a square-based pyramid have?", nl: "Hoeveel hoekpunten heeft een piramide met vierkant grondvlak?" },
    answer: 5, tolerance: 0,
    hint: { fr: "4 sommets à la base + 1 sommet au sommet = 5.", en: "4 base vertices + 1 apex = 5.", nl: "4 hoekpunten aan de basis + 1 top = 5." }
  },
  {
    id: "G7_s_114", category: "G7", level: 2,
    text: { fr: "Calcule l'aire totale d'un cube de côté 9 cm.", en: "Calculate the total surface area of a cube with side 9 cm.", nl: "Bereken de totale oppervlakte van een kubus met zijde 9 cm." },
    answer: 486, tolerance: 0, unit: "cm²",
    hint: { fr: "Aire = 6 . 9² = 6 . 81 = 486.", en: "Area = 6 . 9² = 6 . 81 = 486.", nl: "Oppervlakte = 6 . 9² = 6 . 81 = 486." }
  },
  {
    id: "G7_s_115", category: "G7", level: 2,
    text: { fr: "Combien de faces a un prisme à base pentagonale ?", en: "How many faces does a pentagonal prism have?", nl: "Hoeveel vlakken heeft een vijfhoekig prisma?" },
    answer: 7, tolerance: 0,
    hint: { fr: "2 pentagones + 5 rectangles = 7.", en: "2 pentagons + 5 rectangles = 7.", nl: "2 vijfhoeken + 5 rechthoeken = 7." }
  },
  {
    id: "G7_s_116", category: "G7", level: 3,
    text: { fr: "Quelle est l'aire totale d'un pavé droit de 8 cm . 6 cm . 5 cm ?", en: "What is the total surface area of an 8 . 6 . 5 cm rectangular prism?", nl: "Wat is de totale oppervlakte van een balk van 8 . 6 . 5 cm?" },
    answer: 236, tolerance: 0, unit: "cm²",
    hint: { fr: "2 . (48 + 40 + 30) = 2 . 118 = 236.", en: "2 . (48 + 40 + 30) = 2 . 118 = 236.", nl: "2 . (48 + 40 + 30) = 2 . 118 = 236." }
  },
  {
    id: "G7_s_117", category: "G7", level: 3,
    text: { fr: "Un cube a une aire totale de 384 cm². Quel est son côté ?", en: "A cube has a total surface area of 384 cm². What is its side?", nl: "Een kubus heeft een totale oppervlakte van 384 cm². Wat is de zijde?" },
    answer: 8, tolerance: 0, unit: "cm",
    hint: { fr: "6 . côté² = 384, donc côté² = 64, côté = 8.", en: "6 . side² = 384, so side² = 64, side = 8.", nl: "6 . zijde² = 384, dus zijde² = 64, zijde = 8." }
  },
];

export function generate(level = 1) {
  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const id = `G7_gen_${Date.now()}_${rand(100, 999)}`;
  if (level === 1) {
    const side = rand(2, 12);
    return { id, category: 'G7', level, text: { fr: `Calcule l'aire totale d'un cube de côté ${side} cm.`, en: `Calculate the total surface area of a cube with side ${side} cm.`, nl: `Bereken de totale oppervlakte van een kubus met zijde ${side} cm.` }, answer: 6 * side * side, tolerance: 0 };
  }
  const a = rand(2, 10); const b = rand(2, 8); const c = rand(2, 6);
  const answer = 2 * (a * b + a * c + b * c);
  return { id, category: 'G7', level, text: { fr: `Quelle est l'aire totale d'un pavé droit de ${a} . ${b} . ${c} cm ?`, en: `What is the total surface area of a ${a} . ${b} . ${c} cm rectangular prism?`, nl: `Wat is de totale oppervlakte van een balk van ${a} . ${b} . ${c} cm?` }, answer, tolerance: 0 };
}
