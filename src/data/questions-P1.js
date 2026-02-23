// =============================================================================
// P1 - Grandeurs proportionnelles (Proportional quantities)
// CE1D Belgian exam - Trilingual (FR / EN / NL)
// 50 hand-crafted questions across 3 levels
// =============================================================================

export const questions = [
  // ===========================================================================
  // LEVEL 1 — Simple proportionality, clean integer answers (~17 questions)
  // ===========================================================================
  {
    id: "P1_s_1",
    category: "P1",
    level: 1,
    text: {
      fr: "Si 3 kg de pommes coûtent 6 €, combien coûtent 5 kg ?",
      en: "If 3 kg of apples cost €6, how much do 5 kg cost?",
      nl: "Als 3 kg appels €6 kosten, hoeveel kosten 5 kg?"
    },
    answer: 10,
    tolerance: 0.01,
    hint: {
      fr: "Trouve le prix d'1 kg, puis multiplie par 5.",
      en: "Find the price of 1 kg, then multiply by 5.",
      nl: "Zoek de prijs van 1 kg en vermenigvuldig dan met 5."
    }
  },
  {
    id: "P1_s_2",
    category: "P1",
    level: 1,
    text: {
      fr: "Si 4 stylos coûtent 12 €, combien coûtent 7 stylos ?",
      en: "If 4 pens cost €12, how much do 7 pens cost?",
      nl: "Als 4 pennen €12 kosten, hoeveel kosten 7 pennen?"
    },
    answer: 21,
    tolerance: 0.01,
    hint: {
      fr: "Divise 12 par 4 pour trouver le prix d'un stylo.",
      en: "Divide 12 by 4 to find the price of one pen.",
      nl: "Deel 12 door 4 om de prijs van één pen te vinden."
    }
  },
  {
    id: "P1_s_3",
    category: "P1",
    level: 1,
    text: {
      fr: "Une voiture parcourt 60 km en 1 heure. Combien de km parcourt-elle en 3 heures ?",
      en: "A car travels 60 km in 1 hour. How many km does it travel in 3 hours?",
      nl: "Een auto rijdt 60 km in 1 uur. Hoeveel km rijdt hij in 3 uur?"
    },
    answer: 180,
    tolerance: 0.01,
    hint: {
      fr: "Multiplie la distance par le nombre d'heures.",
      en: "Multiply the distance by the number of hours.",
      nl: "Vermenigvuldig de afstand met het aantal uren."
    }
  },
  {
    id: "P1_s_4",
    category: "P1",
    level: 1,
    text: {
      fr: "Une recette utilise 200 g de farine pour 4 personnes. Combien de grammes faut-il pour 10 personnes ?",
      en: "A recipe uses 200 g of flour for 4 people. How many grams are needed for 10 people?",
      nl: "Een recept gebruikt 200 g bloem voor 4 personen. Hoeveel gram is er nodig voor 10 personen?"
    },
    answer: 500,
    tolerance: 0.01,
    hint: {
      fr: "Trouve la quantité par personne, puis multiplie par 10.",
      en: "Find the amount per person, then multiply by 10.",
      nl: "Zoek de hoeveelheid per persoon en vermenigvuldig dan met 10."
    }
  },
  {
    id: "P1_s_5",
    category: "P1",
    level: 1,
    text: {
      fr: "Si 5 mètres de tissu coûtent 15 €, combien coûtent 8 mètres ?",
      en: "If 5 metres of fabric cost €15, how much do 8 metres cost?",
      nl: "Als 5 meter stof €15 kost, hoeveel kost 8 meter?"
    },
    answer: 24,
    tolerance: 0.01,
    hint: {
      fr: "Calcule le prix d'un mètre de tissu d'abord.",
      en: "Calculate the price of one metre of fabric first.",
      nl: "Bereken eerst de prijs van één meter stof."
    }
  },
  {
    id: "P1_s_6",
    category: "P1",
    level: 1,
    text: {
      fr: "Si 2 litres de peinture couvrent 10 m², combien de m² couvrent 6 litres ?",
      en: "If 2 litres of paint cover 10 m², how many m² do 6 litres cover?",
      nl: "Als 2 liter verf 10 m² bedekt, hoeveel m² bedekt 6 liter?"
    },
    answer: 30,
    tolerance: 0.01,
    hint: {
      fr: "Trouve combien de m² couvre 1 litre, puis multiplie par 6.",
      en: "Find how many m² 1 litre covers, then multiply by 6.",
      nl: "Zoek hoeveel m² 1 liter bedekt en vermenigvuldig met 6."
    }
  },
  {
    id: "P1_s_7",
    category: "P1",
    level: 1,
    text: {
      fr: "Si 6 oranges coûtent 3 €, combien coûtent 20 oranges ?",
      en: "If 6 oranges cost €3, how much do 20 oranges cost?",
      nl: "Als 6 sinaasappels €3 kosten, hoeveel kosten 20 sinaasappels?"
    },
    answer: 10,
    tolerance: 0.01,
    hint: {
      fr: "Prix d'une orange = 3 ÷ 6. Multiplie par 20.",
      en: "Price of one orange = 3 ÷ 6. Multiply by 20.",
      nl: "Prijs van één sinaasappel = 3 ÷ 6. Vermenigvuldig met 20."
    }
  },
  {
    id: "P1_s_8",
    category: "P1",
    level: 1,
    text: {
      fr: "Un robinet remplit 12 litres en 4 minutes. Combien de litres en 10 minutes ?",
      en: "A tap fills 12 litres in 4 minutes. How many litres in 10 minutes?",
      nl: "Een kraan vult 12 liter in 4 minuten. Hoeveel liter in 10 minuten?"
    },
    answer: 30,
    tolerance: 0.01,
    hint: {
      fr: "Calcule le débit par minute : 12 ÷ 4.",
      en: "Calculate the flow per minute: 12 ÷ 4.",
      nl: "Bereken het debiet per minuut: 12 ÷ 4."
    }
  },
  {
    id: "P1_s_9",
    category: "P1",
    level: 1,
    text: {
      fr: "Si 3 cahiers coûtent 9 €, combien coûtent 11 cahiers ?",
      en: "If 3 notebooks cost €9, how much do 11 notebooks cost?",
      nl: "Als 3 schriften €9 kosten, hoeveel kosten 11 schriften?"
    },
    answer: 33,
    tolerance: 0.01,
    hint: {
      fr: "Un cahier coûte 9 ÷ 3 = 3 €. Multiplie par 11.",
      en: "One notebook costs 9 ÷ 3 = 3 €. Multiply by 11.",
      nl: "Eén schrift kost 9 ÷ 3 = 3 €. Vermenigvuldig met 11."
    }
  },
  {
    id: "P1_s_10",
    category: "P1",
    level: 1,
    text: {
      fr: "Un cycliste roule 15 km en 1 heure. Combien de km parcourt-il en 4 heures ?",
      en: "A cyclist rides 15 km in 1 hour. How many km does he ride in 4 hours?",
      nl: "Een fietser rijdt 15 km in 1 uur. Hoeveel km rijdt hij in 4 uur?"
    },
    answer: 60,
    tolerance: 0.01,
    hint: {
      fr: "Distance = vitesse × temps.",
      en: "Distance = speed × time.",
      nl: "Afstand = snelheid × tijd."
    }
  },
  {
    id: "P1_s_11",
    category: "P1",
    level: 1,
    text: {
      fr: "Si 4 croissants coûtent 8 €, combien coûtent 9 croissants ?",
      en: "If 4 croissants cost €8, how much do 9 croissants cost?",
      nl: "Als 4 croissants €8 kosten, hoeveel kosten 9 croissants?"
    },
    answer: 18,
    tolerance: 0.01,
    hint: {
      fr: "Un croissant coûte 8 ÷ 4 = 2 €.",
      en: "One croissant costs 8 ÷ 4 = 2 €.",
      nl: "Eén croissant kost 8 ÷ 4 = 2 €."
    }
  },
  {
    id: "P1_s_12",
    category: "P1",
    level: 1,
    text: {
      fr: "Pour 3 personnes, il faut 6 œufs. Combien d'œufs faut-il pour 7 personnes ?",
      en: "For 3 people, you need 6 eggs. How many eggs for 7 people?",
      nl: "Voor 3 personen heb je 6 eieren nodig. Hoeveel eieren voor 7 personen?"
    },
    answer: 14,
    tolerance: 0.01,
    hint: {
      fr: "Nombre d'œufs par personne = 6 ÷ 3 = 2.",
      en: "Number of eggs per person = 6 ÷ 3 = 2.",
      nl: "Aantal eieren per persoon = 6 ÷ 3 = 2."
    }
  },
  {
    id: "P1_s_13",
    category: "P1",
    level: 1,
    text: {
      fr: "Si 10 kg de pommes de terre coûtent 5 €, combien coûtent 16 kg ?",
      en: "If 10 kg of potatoes cost €5, how much do 16 kg cost?",
      nl: "Als 10 kg aardappelen €5 kosten, hoeveel kosten 16 kg?"
    },
    answer: 8,
    tolerance: 0.01,
    hint: {
      fr: "Prix d'1 kg = 5 ÷ 10 = 0,50 €. Multiplie par 16.",
      en: "Price of 1 kg = 5 ÷ 10 = €0.50. Multiply by 16.",
      nl: "Prijs van 1 kg = 5 ÷ 10 = €0,50. Vermenigvuldig met 16."
    }
  },
  {
    id: "P1_s_14",
    category: "P1",
    level: 1,
    text: {
      fr: "Un imprimeur imprime 50 pages en 5 minutes. Combien de pages en 12 minutes ?",
      en: "A printer prints 50 pages in 5 minutes. How many pages in 12 minutes?",
      nl: "Een printer drukt 50 pagina's in 5 minuten. Hoeveel pagina's in 12 minuten?"
    },
    answer: 120,
    tolerance: 0.01,
    hint: {
      fr: "Pages par minute = 50 ÷ 5 = 10.",
      en: "Pages per minute = 50 ÷ 5 = 10.",
      nl: "Pagina's per minuut = 50 ÷ 5 = 10."
    }
  },
  {
    id: "P1_s_15",
    category: "P1",
    level: 1,
    text: {
      fr: "Si 8 bouteilles d'eau coûtent 4 €, combien coûtent 20 bouteilles ?",
      en: "If 8 bottles of water cost €4, how much do 20 bottles cost?",
      nl: "Als 8 flessen water €4 kosten, hoeveel kosten 20 flessen?"
    },
    answer: 10,
    tolerance: 0.01,
    hint: {
      fr: "Prix d'une bouteille = 4 ÷ 8 = 0,50 €.",
      en: "Price of one bottle = 4 ÷ 8 = €0.50.",
      nl: "Prijs van één fles = 4 ÷ 8 = €0,50."
    }
  },
  {
    id: "P1_s_16",
    category: "P1",
    level: 1,
    text: {
      fr: "Si 2 tablettes de chocolat coûtent 6 €, combien coûtent 5 tablettes ?",
      en: "If 2 chocolate bars cost €6, how much do 5 bars cost?",
      nl: "Als 2 chocoladerepen €6 kosten, hoeveel kosten 5 repen?"
    },
    answer: 15,
    tolerance: 0.01,
    hint: {
      fr: "Prix d'une tablette = 6 ÷ 2 = 3 €.",
      en: "Price of one bar = 6 ÷ 2 = €3.",
      nl: "Prijs van één reep = 6 ÷ 2 = €3."
    }
  },
  {
    id: "P1_s_17",
    category: "P1",
    level: 1,
    text: {
      fr: "Une machine produit 24 pièces en 3 heures. Combien de pièces en 5 heures ?",
      en: "A machine produces 24 parts in 3 hours. How many parts in 5 hours?",
      nl: "Een machine produceert 24 onderdelen in 3 uur. Hoeveel onderdelen in 5 uur?"
    },
    answer: 40,
    tolerance: 0.01,
    hint: {
      fr: "Pièces par heure = 24 ÷ 3 = 8.",
      en: "Parts per hour = 24 ÷ 3 = 8.",
      nl: "Onderdelen per uur = 24 ÷ 3 = 8."
    }
  },

  // ===========================================================================
  // LEVEL 2 — Proportionality with decimal results (~17 questions)
  // ===========================================================================
  {
    id: "P1_s_18",
    category: "P1",
    level: 2,
    text: {
      fr: "Si 5 cahiers coûtent 8 €, combien coûtent 12 cahiers ?",
      en: "If 5 notebooks cost €8, how much do 12 notebooks cost?",
      nl: "Als 5 schriften €8 kosten, hoeveel kosten 12 schriften?"
    },
    answer: 19.2,
    tolerance: 0.01,
    hint: {
      fr: "Prix d'un cahier = 8 ÷ 5 = 1,60 €. Multiplie par 12.",
      en: "Price of one notebook = 8 ÷ 5 = €1.60. Multiply by 12.",
      nl: "Prijs van één schrift = 8 ÷ 5 = €1,60. Vermenigvuldig met 12."
    }
  },
  {
    id: "P1_s_19",
    category: "P1",
    level: 2,
    text: {
      fr: "Si 250 g de fromage coûtent 3,50 €, combien coûtent 400 g ?",
      en: "If 250 g of cheese costs €3.50, how much do 400 g cost?",
      nl: "Als 250 g kaas €3,50 kost, hoeveel kost 400 g?"
    },
    answer: 5.6,
    tolerance: 0.01,
    hint: {
      fr: "Prix pour 1 g = 3,50 ÷ 250. Multiplie par 400.",
      en: "Price per 1 g = 3.50 ÷ 250. Multiply by 400.",
      nl: "Prijs per 1 g = 3,50 ÷ 250. Vermenigvuldig met 400."
    }
  },
  {
    id: "P1_s_20",
    category: "P1",
    level: 2,
    text: {
      fr: "Sur une carte à l'échelle 1:50 000, une distance mesure 3 cm. Quelle est la distance réelle en km ?",
      en: "On a map at scale 1:50,000, a distance measures 3 cm. What is the real distance in km?",
      nl: "Op een kaart met schaal 1:50.000 meet een afstand 3 cm. Wat is de werkelijke afstand in km?"
    },
    answer: 1.5,
    tolerance: 0.01,
    hint: {
      fr: "3 cm × 50 000 = 150 000 cm = 1 500 m = 1,5 km.",
      en: "3 cm × 50,000 = 150,000 cm = 1,500 m = 1.5 km.",
      nl: "3 cm × 50.000 = 150.000 cm = 1.500 m = 1,5 km."
    }
  },
  {
    id: "P1_s_21",
    category: "P1",
    level: 2,
    text: {
      fr: "Si 3 kg de bananes coûtent 5 €, combien coûtent 7 kg ?",
      en: "If 3 kg of bananas cost €5, how much do 7 kg cost?",
      nl: "Als 3 kg bananen €5 kosten, hoeveel kosten 7 kg?"
    },
    answer: 11.67,
    tolerance: 0.01,
    hint: {
      fr: "Prix d'1 kg = 5 ÷ 3 ≈ 1,667 €. Multiplie par 7.",
      en: "Price of 1 kg = 5 ÷ 3 ≈ €1.667. Multiply by 7.",
      nl: "Prijs van 1 kg = 5 ÷ 3 ≈ €1,667. Vermenigvuldig met 7."
    }
  },
  {
    id: "P1_s_22",
    category: "P1",
    level: 2,
    text: {
      fr: "Un train parcourt 210 km en 3 heures. Combien de km parcourt-il en 5 heures ?",
      en: "A train travels 210 km in 3 hours. How many km does it travel in 5 hours?",
      nl: "Een trein rijdt 210 km in 3 uur. Hoeveel km rijdt hij in 5 uur?"
    },
    answer: 350,
    tolerance: 0.01,
    hint: {
      fr: "Vitesse = 210 ÷ 3 = 70 km/h. Distance = 70 × 5.",
      en: "Speed = 210 ÷ 3 = 70 km/h. Distance = 70 × 5.",
      nl: "Snelheid = 210 ÷ 3 = 70 km/u. Afstand = 70 × 5."
    }
  },
  {
    id: "P1_s_23",
    category: "P1",
    level: 2,
    text: {
      fr: "Si 7 livres coûtent 45 €, combien coûtent 3 livres ?",
      en: "If 7 books cost €45, how much do 3 books cost?",
      nl: "Als 7 boeken €45 kosten, hoeveel kosten 3 boeken?"
    },
    answer: 19.29,
    tolerance: 0.01,
    hint: {
      fr: "Prix d'un livre = 45 ÷ 7. Multiplie par 3.",
      en: "Price of one book = 45 ÷ 7. Multiply by 3.",
      nl: "Prijs van één boek = 45 ÷ 7. Vermenigvuldig met 3."
    }
  },
  {
    id: "P1_s_24",
    category: "P1",
    level: 2,
    text: {
      fr: "Si 4 litres de jus coûtent 7 €, combien coûtent 9 litres ?",
      en: "If 4 litres of juice cost €7, how much do 9 litres cost?",
      nl: "Als 4 liter sap €7 kosten, hoeveel kosten 9 liter?"
    },
    answer: 15.75,
    tolerance: 0.01,
    hint: {
      fr: "Prix d'1 litre = 7 ÷ 4 = 1,75 €. Multiplie par 9.",
      en: "Price of 1 litre = 7 ÷ 4 = €1.75. Multiply by 9.",
      nl: "Prijs van 1 liter = 7 ÷ 4 = €1,75. Vermenigvuldig met 9."
    }
  },
  {
    id: "P1_s_25",
    category: "P1",
    level: 2,
    text: {
      fr: "Pour peindre 15 m² de mur, il faut 3 litres de peinture. Combien de litres pour 22 m² ?",
      en: "To paint 15 m² of wall, you need 3 litres of paint. How many litres for 22 m²?",
      nl: "Om 15 m² muur te schilderen heb je 3 liter verf nodig. Hoeveel liter voor 22 m²?"
    },
    answer: 4.4,
    tolerance: 0.01,
    hint: {
      fr: "Litres par m² = 3 ÷ 15 = 0,2. Multiplie par 22.",
      en: "Litres per m² = 3 ÷ 15 = 0.2. Multiply by 22.",
      nl: "Liter per m² = 3 ÷ 15 = 0,2. Vermenigvuldig met 22."
    }
  },
  {
    id: "P1_s_26",
    category: "P1",
    level: 2,
    text: {
      fr: "Un ouvrier pose 18 carreaux en 2 heures. Combien en pose-t-il en 7 heures ?",
      en: "A worker lays 18 tiles in 2 hours. How many does he lay in 7 hours?",
      nl: "Een arbeider legt 18 tegels in 2 uur. Hoeveel legt hij er in 7 uur?"
    },
    answer: 63,
    tolerance: 0.01,
    hint: {
      fr: "Carreaux par heure = 18 ÷ 2 = 9. Multiplie par 7.",
      en: "Tiles per hour = 18 ÷ 2 = 9. Multiply by 7.",
      nl: "Tegels per uur = 18 ÷ 2 = 9. Vermenigvuldig met 7."
    }
  },
  {
    id: "P1_s_27",
    category: "P1",
    level: 2,
    text: {
      fr: "Si 6 m de corde pèsent 1,5 kg, combien pèsent 10 m ?",
      en: "If 6 m of rope weigh 1.5 kg, how much do 10 m weigh?",
      nl: "Als 6 m touw 1,5 kg weegt, hoeveel weegt 10 m?"
    },
    answer: 2.5,
    tolerance: 0.01,
    hint: {
      fr: "Poids par mètre = 1,5 ÷ 6 = 0,25 kg.",
      en: "Weight per metre = 1.5 ÷ 6 = 0.25 kg.",
      nl: "Gewicht per meter = 1,5 ÷ 6 = 0,25 kg."
    }
  },
  {
    id: "P1_s_28",
    category: "P1",
    level: 2,
    text: {
      fr: "Si 8 muffins nécessitent 300 g de sucre, combien de grammes pour 14 muffins ?",
      en: "If 8 muffins need 300 g of sugar, how many grams for 14 muffins?",
      nl: "Als 8 muffins 300 g suiker nodig hebben, hoeveel gram voor 14 muffins?"
    },
    answer: 525,
    tolerance: 0.01,
    hint: {
      fr: "Sucre par muffin = 300 ÷ 8 = 37,5 g. Multiplie par 14.",
      en: "Sugar per muffin = 300 ÷ 8 = 37.5 g. Multiply by 14.",
      nl: "Suiker per muffin = 300 ÷ 8 = 37,5 g. Vermenigvuldig met 14."
    }
  },
  {
    id: "P1_s_29",
    category: "P1",
    level: 2,
    text: {
      fr: "Si 500 g de viande coûtent 6 €, combien coûtent 750 g ?",
      en: "If 500 g of meat cost €6, how much do 750 g cost?",
      nl: "Als 500 g vlees €6 kost, hoeveel kost 750 g?"
    },
    answer: 9,
    tolerance: 0.01,
    hint: {
      fr: "Prix pour 1 g = 6 ÷ 500 = 0,012 €. Multiplie par 750.",
      en: "Price per 1 g = 6 ÷ 500 = €0.012. Multiply by 750.",
      nl: "Prijs per 1 g = 6 ÷ 500 = €0,012. Vermenigvuldig met 750."
    }
  },
  {
    id: "P1_s_30",
    category: "P1",
    level: 2,
    text: {
      fr: "Un camion consomme 12 litres de diesel pour 100 km. Combien de litres pour 75 km ?",
      en: "A truck uses 12 litres of diesel per 100 km. How many litres for 75 km?",
      nl: "Een vrachtwagen verbruikt 12 liter diesel per 100 km. Hoeveel liter voor 75 km?"
    },
    answer: 9,
    tolerance: 0.01,
    hint: {
      fr: "Consommation par km = 12 ÷ 100 = 0,12. Multiplie par 75.",
      en: "Consumption per km = 12 ÷ 100 = 0.12. Multiply by 75.",
      nl: "Verbruik per km = 12 ÷ 100 = 0,12. Vermenigvuldig met 75."
    }
  },
  {
    id: "P1_s_31",
    category: "P1",
    level: 2,
    text: {
      fr: "Si 9 gommes coûtent 4 €, combien coûtent 15 gommes ?",
      en: "If 9 erasers cost €4, how much do 15 erasers cost?",
      nl: "Als 9 gummen €4 kosten, hoeveel kosten 15 gummen?"
    },
    answer: 6.67,
    tolerance: 0.01,
    hint: {
      fr: "Prix d'une gomme = 4 ÷ 9. Multiplie par 15.",
      en: "Price of one eraser = 4 ÷ 9. Multiply by 15.",
      nl: "Prijs van één gum = 4 ÷ 9. Vermenigvuldig met 15."
    }
  },
  {
    id: "P1_s_32",
    category: "P1",
    level: 2,
    text: {
      fr: "Un jardinier plante 45 fleurs en 3 rangées. Combien de fleurs dans 8 rangées ?",
      en: "A gardener plants 45 flowers in 3 rows. How many flowers in 8 rows?",
      nl: "Een tuinier plant 45 bloemen in 3 rijen. Hoeveel bloemen in 8 rijen?"
    },
    answer: 120,
    tolerance: 0.01,
    hint: {
      fr: "Fleurs par rangée = 45 ÷ 3 = 15. Multiplie par 8.",
      en: "Flowers per row = 45 ÷ 3 = 15. Multiply by 8.",
      nl: "Bloemen per rij = 45 ÷ 3 = 15. Vermenigvuldig met 8."
    }
  },
  {
    id: "P1_s_33",
    category: "P1",
    level: 2,
    text: {
      fr: "Si 200 g de café coûtent 4,50 €, combien coûtent 350 g ?",
      en: "If 200 g of coffee cost €4.50, how much do 350 g cost?",
      nl: "Als 200 g koffie €4,50 kost, hoeveel kost 350 g?"
    },
    answer: 7.88,
    tolerance: 0.01,
    hint: {
      fr: "Prix pour 1 g = 4,50 ÷ 200 = 0,0225 €. Multiplie par 350.",
      en: "Price per 1 g = 4.50 ÷ 200 = €0.0225. Multiply by 350.",
      nl: "Prijs per 1 g = 4,50 ÷ 200 = €0,0225. Vermenigvuldig met 350."
    }
  },
  {
    id: "P1_s_34",
    category: "P1",
    level: 2,
    text: {
      fr: "Si 6 personnes mangent 15 pizzas, combien de pizzas faut-il pour 10 personnes ?",
      en: "If 6 people eat 15 pizzas, how many pizzas are needed for 10 people?",
      nl: "Als 6 personen 15 pizza's eten, hoeveel pizza's zijn er nodig voor 10 personen?"
    },
    answer: 25,
    tolerance: 0.01,
    hint: {
      fr: "Pizzas par personne = 15 ÷ 6 = 2,5. Multiplie par 10.",
      en: "Pizzas per person = 15 ÷ 6 = 2.5. Multiply by 10.",
      nl: "Pizza's per persoon = 15 ÷ 6 = 2,5. Vermenigvuldig met 10."
    }
  },

  // ===========================================================================
  // LEVEL 3 — Complex: percentages, inverse proportionality, multi-step (~16 questions)
  // ===========================================================================
  {
    id: "P1_s_35",
    category: "P1",
    level: 3,
    text: {
      fr: "Une voiture consomme 7 litres aux 100 km. Combien de litres pour 350 km ?",
      en: "A car uses 7 litres per 100 km. How many litres for 350 km?",
      nl: "Een auto verbruikt 7 liter per 100 km. Hoeveel liter voor 350 km?"
    },
    answer: 24.5,
    tolerance: 0.01,
    hint: {
      fr: "7 × (350 ÷ 100) = 7 × 3,5.",
      en: "7 × (350 ÷ 100) = 7 × 3.5.",
      nl: "7 × (350 ÷ 100) = 7 × 3,5."
    }
  },
  {
    id: "P1_s_36",
    category: "P1",
    level: 3,
    text: {
      fr: "Un article coûte 45 €. Son prix augmente de 20 %. Quel est le nouveau prix ?",
      en: "An item costs €45. Its price increases by 20%. What is the new price?",
      nl: "Een artikel kost €45. De prijs stijgt met 20%. Wat is de nieuwe prijs?"
    },
    answer: 54,
    tolerance: 0.01,
    hint: {
      fr: "Nouveau prix = 45 × 1,20.",
      en: "New price = 45 × 1.20.",
      nl: "Nieuwe prijs = 45 × 1,20."
    }
  },
  {
    id: "P1_s_37",
    category: "P1",
    level: 3,
    text: {
      fr: "3 machines produisent 120 pièces en 4 heures. Combien de pièces produisent 5 machines en 6 heures ?",
      en: "3 machines produce 120 parts in 4 hours. How many parts do 5 machines produce in 6 hours?",
      nl: "3 machines produceren 120 onderdelen in 4 uur. Hoeveel onderdelen produceren 5 machines in 6 uur?"
    },
    answer: 300,
    tolerance: 0.01,
    hint: {
      fr: "1 machine produit 120 ÷ 3 = 40 pièces en 4h, soit 10/h. 5 machines × 6h × 10 = 300.",
      en: "1 machine produces 120 ÷ 3 = 40 parts in 4h, so 10/h. 5 machines × 6h × 10 = 300.",
      nl: "1 machine produceert 120 ÷ 3 = 40 onderdelen in 4u, dus 10/u. 5 machines × 6u × 10 = 300."
    }
  },
  {
    id: "P1_s_38",
    category: "P1",
    level: 3,
    text: {
      fr: "Une recette pour 6 personnes utilise 450 g de farine. Combien de grammes pour 10 personnes ?",
      en: "A recipe for 6 people uses 450 g of flour. How many grams for 10 people?",
      nl: "Een recept voor 6 personen gebruikt 450 g bloem. Hoeveel gram voor 10 personen?"
    },
    answer: 750,
    tolerance: 0.01,
    hint: {
      fr: "Farine par personne = 450 ÷ 6 = 75 g. Pour 10 : 75 × 10.",
      en: "Flour per person = 450 ÷ 6 = 75 g. For 10: 75 × 10.",
      nl: "Bloem per persoon = 450 ÷ 6 = 75 g. Voor 10: 75 × 10."
    }
  },
  {
    id: "P1_s_39",
    category: "P1",
    level: 3,
    text: {
      fr: "Un pantalon coûte 60 € et bénéficie d'une réduction de 15 %. Quel est son prix réduit ?",
      en: "Trousers cost €60 and have a 15% discount. What is the reduced price?",
      nl: "Een broek kost €60 en heeft 15% korting. Wat is de verlaagde prijs?"
    },
    answer: 51,
    tolerance: 0.01,
    hint: {
      fr: "Prix réduit = 60 × (1 - 0,15) = 60 × 0,85.",
      en: "Reduced price = 60 × (1 - 0.15) = 60 × 0.85.",
      nl: "Verlaagde prijs = 60 × (1 - 0,15) = 60 × 0,85."
    }
  },
  {
    id: "P1_s_40",
    category: "P1",
    level: 3,
    text: {
      fr: "6 ouvriers construisent un mur en 10 jours. Combien de jours faut-il à 4 ouvriers ?",
      en: "6 workers build a wall in 10 days. How many days do 4 workers need?",
      nl: "6 arbeiders bouwen een muur in 10 dagen. Hoeveel dagen hebben 4 arbeiders nodig?"
    },
    answer: 15,
    tolerance: 0.01,
    hint: {
      fr: "Proportionnalité inverse : 6 × 10 = 4 × x, donc x = 60 ÷ 4.",
      en: "Inverse proportionality: 6 × 10 = 4 × x, so x = 60 ÷ 4.",
      nl: "Omgekeerde evenredigheid: 6 × 10 = 4 × x, dus x = 60 ÷ 4."
    }
  },
  {
    id: "P1_s_41",
    category: "P1",
    level: 3,
    text: {
      fr: "Un vélo coûtait 320 €. Après une augmentation de 5 %, quel est le nouveau prix ?",
      en: "A bicycle cost €320. After a 5% increase, what is the new price?",
      nl: "Een fiets kostte €320. Na een stijging van 5%, wat is de nieuwe prijs?"
    },
    answer: 336,
    tolerance: 0.01,
    hint: {
      fr: "Nouveau prix = 320 × 1,05.",
      en: "New price = 320 × 1.05.",
      nl: "Nieuwe prijs = 320 × 1,05."
    }
  },
  {
    id: "P1_s_42",
    category: "P1",
    level: 3,
    text: {
      fr: "8 robinets remplissent une piscine en 6 heures. Combien d'heures faut-il avec 12 robinets ?",
      en: "8 taps fill a pool in 6 hours. How many hours with 12 taps?",
      nl: "8 kranen vullen een zwembad in 6 uur. Hoeveel uur met 12 kranen?"
    },
    answer: 4,
    tolerance: 0.01,
    hint: {
      fr: "Proportionnalité inverse : 8 × 6 = 12 × x, donc x = 48 ÷ 12.",
      en: "Inverse proportionality: 8 × 6 = 12 × x, so x = 48 ÷ 12.",
      nl: "Omgekeerde evenredigheid: 8 × 6 = 12 × x, dus x = 48 ÷ 12."
    }
  },
  {
    id: "P1_s_43",
    category: "P1",
    level: 3,
    text: {
      fr: "Un article coûte 80 €. Après une réduction de 25 %, quel est le prix soldé ?",
      en: "An item costs €80. After a 25% discount, what is the sale price?",
      nl: "Een artikel kost €80. Na 25% korting, wat is de uitverkoopprijs?"
    },
    answer: 60,
    tolerance: 0.01,
    hint: {
      fr: "Prix soldé = 80 × (1 - 0,25) = 80 × 0,75.",
      en: "Sale price = 80 × (1 - 0.25) = 80 × 0.75.",
      nl: "Uitverkoopprijs = 80 × (1 - 0,25) = 80 × 0,75."
    }
  },
  {
    id: "P1_s_44",
    category: "P1",
    level: 3,
    text: {
      fr: "2 peintres peignent une pièce en 9 heures. Combien d'heures faut-il à 3 peintres ?",
      en: "2 painters paint a room in 9 hours. How many hours do 3 painters need?",
      nl: "2 schilders verven een kamer in 9 uur. Hoeveel uur hebben 3 schilders nodig?"
    },
    answer: 6,
    tolerance: 0.01,
    hint: {
      fr: "Proportionnalité inverse : 2 × 9 = 3 × x, donc x = 18 ÷ 3.",
      en: "Inverse proportionality: 2 × 9 = 3 × x, so x = 18 ÷ 3.",
      nl: "Omgekeerde evenredigheid: 2 × 9 = 3 × x, dus x = 18 ÷ 3."
    }
  },
  {
    id: "P1_s_45",
    category: "P1",
    level: 3,
    text: {
      fr: "Un magasin vend un téléphone 250 €. Pendant les soldes, le prix baisse de 12 %. Quel est le nouveau prix ?",
      en: "A shop sells a phone for €250. During a sale, the price drops by 12%. What is the new price?",
      nl: "Een winkel verkoopt een telefoon voor €250. Tijdens de uitverkoop daalt de prijs met 12%. Wat is de nieuwe prijs?"
    },
    answer: 220,
    tolerance: 0.01,
    hint: {
      fr: "Nouveau prix = 250 × (1 - 0,12) = 250 × 0,88.",
      en: "New price = 250 × (1 - 0.12) = 250 × 0.88.",
      nl: "Nieuwe prijs = 250 × (1 - 0,12) = 250 × 0,88."
    }
  },
  {
    id: "P1_s_46",
    category: "P1",
    level: 3,
    text: {
      fr: "5 ouvriers terminent un travail en 12 jours. Combien de jours faut-il à 10 ouvriers ?",
      en: "5 workers finish a job in 12 days. How many days do 10 workers need?",
      nl: "5 arbeiders voltooien een klus in 12 dagen. Hoeveel dagen hebben 10 arbeiders nodig?"
    },
    answer: 6,
    tolerance: 0.01,
    hint: {
      fr: "Proportionnalité inverse : 5 × 12 = 10 × x, donc x = 60 ÷ 10.",
      en: "Inverse proportionality: 5 × 12 = 10 × x, so x = 60 ÷ 10.",
      nl: "Omgekeerde evenredigheid: 5 × 12 = 10 × x, dus x = 60 ÷ 10."
    }
  },
  {
    id: "P1_s_47",
    category: "P1",
    level: 3,
    text: {
      fr: "4 machines fabriquent 200 boîtes en 5 heures. Combien de boîtes fabriquent 6 machines en 3 heures ?",
      en: "4 machines make 200 boxes in 5 hours. How many boxes do 6 machines make in 3 hours?",
      nl: "4 machines maken 200 dozen in 5 uur. Hoeveel dozen maken 6 machines in 3 uur?"
    },
    answer: 180,
    tolerance: 0.01,
    hint: {
      fr: "1 machine produit 200 ÷ 4 = 50 en 5h, soit 10/h. 6 machines × 3h × 10 = 180.",
      en: "1 machine produces 200 ÷ 4 = 50 in 5h, so 10/h. 6 machines × 3h × 10 = 180.",
      nl: "1 machine produceert 200 ÷ 4 = 50 in 5u, dus 10/u. 6 machines × 3u × 10 = 180."
    }
  },
  {
    id: "P1_s_48",
    category: "P1",
    level: 3,
    text: {
      fr: "Un article coûte 120 €. Il subit d'abord une hausse de 10 %, puis une baisse de 10 %. Quel est le prix final ?",
      en: "An item costs €120. It first increases by 10%, then decreases by 10%. What is the final price?",
      nl: "Een artikel kost €120. Het stijgt eerst met 10%, dan daalt het met 10%. Wat is de uiteindelijke prijs?"
    },
    answer: 118.8,
    tolerance: 0.01,
    hint: {
      fr: "Après hausse : 120 × 1,10 = 132. Après baisse : 132 × 0,90 = 118,80.",
      en: "After increase: 120 × 1.10 = 132. After decrease: 132 × 0.90 = 118.80.",
      nl: "Na stijging: 120 × 1,10 = 132. Na daling: 132 × 0,90 = 118,80."
    }
  },
  {
    id: "P1_s_49",
    category: "P1",
    level: 3,
    text: {
      fr: "Sur une carte à l'échelle 1:25 000, deux villes sont séparées par 8,4 cm. Quelle est la distance réelle en km ?",
      en: "On a map at scale 1:25,000, two cities are 8.4 cm apart. What is the real distance in km?",
      nl: "Op een kaart met schaal 1:25.000 liggen twee steden 8,4 cm uit elkaar. Wat is de werkelijke afstand in km?"
    },
    answer: 2.1,
    tolerance: 0.01,
    hint: {
      fr: "8,4 cm × 25 000 = 210 000 cm = 2 100 m = 2,1 km.",
      en: "8.4 cm × 25,000 = 210,000 cm = 2,100 m = 2.1 km.",
      nl: "8,4 cm × 25.000 = 210.000 cm = 2.100 m = 2,1 km."
    }
  },
  {
    id: "P1_s_50",
    category: "P1",
    level: 3,
    text: {
      fr: "Un restaurant prépare 90 repas avec 5 cuisiniers en 2 heures. Combien de repas préparent 8 cuisiniers en 3 heures ?",
      en: "A restaurant prepares 90 meals with 5 cooks in 2 hours. How many meals do 8 cooks prepare in 3 hours?",
      nl: "Een restaurant bereidt 90 maaltijden met 5 koks in 2 uur. Hoeveel maaltijden bereiden 8 koks in 3 uur?"
    },
    answer: 216,
    tolerance: 0.01,
    hint: {
      fr: "1 cuisinier prépare 90 ÷ 5 = 18 repas en 2h, soit 9/h. 8 cuisiniers × 3h × 9 = 216.",
      en: "1 cook prepares 90 ÷ 5 = 18 meals in 2h, so 9/h. 8 cooks × 3h × 9 = 216.",
      nl: "1 kok bereidt 90 ÷ 5 = 18 maaltijden in 2u, dus 9/u. 8 koks × 3u × 9 = 216."
    }
  }
];

/**
 * Generateur procedural pour P1 - Grandeurs proportionnelles
 * @param {1|2|3} level - Niveau de difficulte
 * @returns {object} Question generee
 */
export function generate(level = 1) {
  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const id = `P1_gen_${Date.now()}_${rand(100, 999)}`;

  const items = [
    { fr: 'pommes', en: 'apples', nl: 'appels' },
    { fr: 'stylos', en: 'pens', nl: 'pennen' },
    { fr: 'cahiers', en: 'notebooks', nl: 'schriften' },
    { fr: 'oranges', en: 'oranges', nl: 'sinaasappels' },
    { fr: 'croissants', en: 'croissants', nl: 'croissants' },
    { fr: 'bouteilles', en: 'bottles', nl: 'flessen' },
    { fr: 'livres', en: 'books', nl: 'boeken' },
    { fr: 'gommes', en: 'erasers', nl: 'gummen' }
  ];

  if (level === 1) {
    // Simple proportionality with integer answers
    const item = items[rand(0, items.length - 1)];
    const unitPrice = rand(1, 5);
    const baseQty = rand(2, 6);
    const basePrice = unitPrice * baseQty;
    const targetQty = rand(baseQty + 1, baseQty + 10);
    const answer = unitPrice * targetQty;

    return {
      id, category: 'P1', level,
      text: {
        fr: `Si ${baseQty} ${item.fr} coûtent ${basePrice} €, combien coûtent ${targetQty} ${item.fr} ?`,
        en: `If ${baseQty} ${item.en} cost €${basePrice}, how much do ${targetQty} ${item.en} cost?`,
        nl: `Als ${baseQty} ${item.nl} €${basePrice} kosten, hoeveel kosten ${targetQty} ${item.nl}?`
      },
      answer,
      tolerance: 0.01,
      hint: {
        fr: `Prix unitaire = ${basePrice} ÷ ${baseQty} = ${unitPrice} €. Multiplie par ${targetQty}.`,
        en: `Unit price = ${basePrice} ÷ ${baseQty} = €${unitPrice}. Multiply by ${targetQty}.`,
        nl: `Eenheidsprijs = ${basePrice} ÷ ${baseQty} = €${unitPrice}. Vermenigvuldig met ${targetQty}.`
      }
    };
  }

  if (level === 2) {
    // Proportionality with decimal results
    const item = items[rand(0, items.length - 1)];
    const baseQty = rand(3, 8);
    const basePrice = rand(3, 12);
    const targetQty = rand(baseQty + 2, baseQty + 12);
    const answer = Math.round(basePrice / baseQty * targetQty * 100) / 100;

    return {
      id, category: 'P1', level,
      text: {
        fr: `Si ${baseQty} ${item.fr} coûtent ${basePrice} €, combien coûtent ${targetQty} ${item.fr} ?`,
        en: `If ${baseQty} ${item.en} cost €${basePrice}, how much do ${targetQty} ${item.en} cost?`,
        nl: `Als ${baseQty} ${item.nl} €${basePrice} kosten, hoeveel kosten ${targetQty} ${item.nl}?`
      },
      answer,
      tolerance: 0.01,
      hint: {
        fr: `Prix unitaire = ${basePrice} ÷ ${baseQty}. Multiplie par ${targetQty}.`,
        en: `Unit price = ${basePrice} ÷ ${baseQty}. Multiply by ${targetQty}.`,
        nl: `Eenheidsprijs = ${basePrice} ÷ ${baseQty}. Vermenigvuldig met ${targetQty}.`
      }
    };
  }

  // Level 3: percentages, inverse proportionality, multi-step
  const type = rand(1, 3);

  if (type === 1) {
    // Percentage increase or decrease
    const originalPrice = rand(2, 20) * 10; // 20, 30, ... 200
    const percentage = [5, 10, 15, 20, 25, 30][rand(0, 5)];
    const isIncrease = rand(0, 1) === 1;
    const factor = isIncrease ? (1 + percentage / 100) : (1 - percentage / 100);
    const answer = Math.round(originalPrice * factor * 100) / 100;
    const changeWord = {
      fr: isIncrease ? 'augmente' : 'diminue',
      en: isIncrease ? 'increases' : 'decreases',
      nl: isIncrease ? 'stijgt' : 'daalt'
    };

    return {
      id, category: 'P1', level,
      text: {
        fr: `Un article coûte ${originalPrice} €. Son prix ${changeWord.fr} de ${percentage} %. Quel est le nouveau prix ?`,
        en: `An item costs €${originalPrice}. Its price ${changeWord.en} by ${percentage}%. What is the new price?`,
        nl: `Een artikel kost €${originalPrice}. De prijs ${changeWord.nl} met ${percentage}%. Wat is de nieuwe prijs?`
      },
      answer,
      tolerance: 0.01,
      hint: {
        fr: `Nouveau prix = ${originalPrice} × ${factor}.`,
        en: `New price = ${originalPrice} × ${factor}.`,
        nl: `Nieuwe prijs = ${originalPrice} × ${factor}.`
      }
    };
  }

  if (type === 2) {
    // Inverse proportionality (workers/time)
    const workers1 = rand(2, 8);
    const days1 = rand(4, 15);
    const workers2 = rand(2, 8);
    // Ensure workers2 != workers1 for a meaningful question
    const w2 = workers2 === workers1 ? workers1 + 1 : workers2;
    const totalWork = workers1 * days1;
    const answer = Math.round(totalWork / w2 * 100) / 100;

    return {
      id, category: 'P1', level,
      text: {
        fr: `${workers1} ouvriers terminent un travail en ${days1} jours. Combien de jours faut-il à ${w2} ouvriers ?`,
        en: `${workers1} workers finish a job in ${days1} days. How many days do ${w2} workers need?`,
        nl: `${workers1} arbeiders voltooien een klus in ${days1} dagen. Hoeveel dagen hebben ${w2} arbeiders nodig?`
      },
      answer,
      tolerance: 0.01,
      hint: {
        fr: `Proportionnalité inverse : ${workers1} × ${days1} = ${w2} × x, donc x = ${totalWork} ÷ ${w2}.`,
        en: `Inverse proportionality: ${workers1} × ${days1} = ${w2} × x, so x = ${totalWork} ÷ ${w2}.`,
        nl: `Omgekeerde evenredigheid: ${workers1} × ${days1} = ${w2} × x, dus x = ${totalWork} ÷ ${w2}.`
      }
    };
  }

  // type === 3: Multi-step (machines × hours)
  const machines1 = rand(2, 6);
  const hours1 = rand(2, 6);
  const perMachinePerHour = rand(5, 15);
  const totalParts = machines1 * hours1 * perMachinePerHour;
  const machines2 = rand(2, 8);
  const hours2 = rand(2, 8);
  const answer = machines2 * hours2 * perMachinePerHour;

  return {
    id, category: 'P1', level,
    text: {
      fr: `${machines1} machines produisent ${totalParts} pièces en ${hours1} heures. Combien de pièces produisent ${machines2} machines en ${hours2} heures ?`,
      en: `${machines1} machines produce ${totalParts} parts in ${hours1} hours. How many parts do ${machines2} machines produce in ${hours2} hours?`,
      nl: `${machines1} machines produceren ${totalParts} onderdelen in ${hours1} uur. Hoeveel onderdelen produceren ${machines2} machines in ${hours2} uur?`
    },
    answer,
    tolerance: 0.01,
    hint: {
      fr: `1 machine produit ${totalParts} ÷ ${machines1} = ${totalParts / machines1} pièces en ${hours1}h, soit ${perMachinePerHour}/h. ${machines2} × ${hours2} × ${perMachinePerHour} = ${answer}.`,
      en: `1 machine produces ${totalParts} ÷ ${machines1} = ${totalParts / machines1} parts in ${hours1}h, so ${perMachinePerHour}/h. ${machines2} × ${hours2} × ${perMachinePerHour} = ${answer}.`,
      nl: `1 machine produceert ${totalParts} ÷ ${machines1} = ${totalParts / machines1} onderdelen in ${hours1}u, dus ${perMachinePerHour}/u. ${machines2} × ${hours2} × ${perMachinePerHour} = ${answer}.`
    }
  };
}
