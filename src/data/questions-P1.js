// =============================================================================
// P1 - Grandeurs proportionnelles (Proportional quantities)
// CE1D Belgian exam - Trilingual (FR / EN / NL)
// 111 hand-crafted questions across 3 levels
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
  },

  // ===========================================================================
  // LEVEL 1 — Additional simple proportionality, clean integer answers (P1_s_51–P1_s_70)
  // ===========================================================================
  {
    id: "P1_s_51",
    category: "P1",
    level: 1,
    text: {
      fr: "Si 6 bananes coûtent 3 €, combien coûtent 10 bananes ?",
      en: "If 6 bananas cost €3, how much do 10 bananas cost?",
      nl: "Als 6 bananen €3 kosten, hoeveel kosten 10 bananen?"
    },
    answer: 5,
    tolerance: 0.01,
    hint: {
      fr: "Prix d'une banane = 3 ÷ 6 = 0,50 €. Multiplie par 10.",
      en: "Price of one banana = 3 ÷ 6 = €0.50. Multiply by 10.",
      nl: "Prijs van één banaan = 3 ÷ 6 = €0,50. Vermenigvuldig met 10."
    }
  },
  {
    id: "P1_s_52",
    category: "P1",
    level: 1,
    text: {
      fr: "Si 5 crayons coûtent 10 €, combien coûtent 12 crayons ?",
      en: "If 5 pencils cost €10, how much do 12 pencils cost?",
      nl: "Als 5 potloden €10 kosten, hoeveel kosten 12 potloden?"
    },
    answer: 24,
    tolerance: 0.01,
    hint: {
      fr: "Prix d'un crayon = 10 ÷ 5 = 2 €. Multiplie par 12.",
      en: "Price of one pencil = 10 ÷ 5 = €2. Multiply by 12.",
      nl: "Prijs van één potlood = 10 ÷ 5 = €2. Vermenigvuldig met 12."
    }
  },
  {
    id: "P1_s_53",
    category: "P1",
    level: 1,
    text: {
      fr: "Une recette utilise 3 œufs pour 6 crêpes. Combien d'œufs faut-il pour 18 crêpes ?",
      en: "A recipe uses 3 eggs for 6 crepes. How many eggs are needed for 18 crepes?",
      nl: "Een recept gebruikt 3 eieren voor 6 pannenkoeken. Hoeveel eieren zijn er nodig voor 18 pannenkoeken?"
    },
    answer: 9,
    tolerance: 0.01,
    hint: {
      fr: "Œufs par crêpe = 3 ÷ 6 = 0,5. Pour 18 crêpes : 0,5 × 18 = 9.",
      en: "Eggs per crepe = 3 ÷ 6 = 0.5. For 18 crepes: 0.5 × 18 = 9.",
      nl: "Eieren per pannenkoek = 3 ÷ 6 = 0,5. Voor 18 pannenkoeken: 0,5 × 18 = 9."
    }
  },
  {
    id: "P1_s_54",
    category: "P1",
    level: 1,
    text: {
      fr: "Un bus parcourt 80 km en 2 heures. Combien de km parcourt-il en 5 heures ?",
      en: "A bus travels 80 km in 2 hours. How many km does it travel in 5 hours?",
      nl: "Een bus rijdt 80 km in 2 uur. Hoeveel km rijdt hij in 5 uur?"
    },
    answer: 200,
    tolerance: 0.01,
    hint: {
      fr: "Vitesse = 80 ÷ 2 = 40 km/h. Distance = 40 × 5.",
      en: "Speed = 80 ÷ 2 = 40 km/h. Distance = 40 × 5.",
      nl: "Snelheid = 80 ÷ 2 = 40 km/u. Afstand = 40 × 5."
    }
  },
  {
    id: "P1_s_55",
    category: "P1",
    level: 1,
    text: {
      fr: "Si 3 litres de peinture couvrent 12 m², combien de m² couvrent 7 litres ?",
      en: "If 3 litres of paint cover 12 m², how many m² do 7 litres cover?",
      nl: "Als 3 liter verf 12 m² bedekt, hoeveel m² bedekt 7 liter?"
    },
    answer: 28,
    tolerance: 0.01,
    hint: {
      fr: "1 litre couvre 12 ÷ 3 = 4 m². Multiplie par 7.",
      en: "1 litre covers 12 ÷ 3 = 4 m². Multiply by 7.",
      nl: "1 liter bedekt 12 ÷ 3 = 4 m². Vermenigvuldig met 7."
    }
  },
  {
    id: "P1_s_56",
    category: "P1",
    level: 1,
    text: {
      fr: "Si 4 mètres de ruban coûtent 8 €, combien coûtent 15 mètres ?",
      en: "If 4 metres of ribbon cost €8, how much do 15 metres cost?",
      nl: "Als 4 meter lint €8 kost, hoeveel kost 15 meter?"
    },
    answer: 30,
    tolerance: 0.01,
    hint: {
      fr: "Prix d'un mètre = 8 ÷ 4 = 2 €. Multiplie par 15.",
      en: "Price of one metre = 8 ÷ 4 = €2. Multiply by 15.",
      nl: "Prijs van één meter = 8 ÷ 4 = €2. Vermenigvuldig met 15."
    }
  },
  {
    id: "P1_s_57",
    category: "P1",
    level: 1,
    text: {
      fr: "Si 10 biscuits coûtent 5 €, combien coûtent 16 biscuits ?",
      en: "If 10 biscuits cost €5, how much do 16 biscuits cost?",
      nl: "Als 10 koekjes €5 kosten, hoeveel kosten 16 koekjes?"
    },
    answer: 8,
    tolerance: 0.01,
    hint: {
      fr: "Prix d'un biscuit = 5 ÷ 10 = 0,50 €. Multiplie par 16.",
      en: "Price of one biscuit = 5 ÷ 10 = €0.50. Multiply by 16.",
      nl: "Prijs van één koekje = 5 ÷ 10 = €0,50. Vermenigvuldig met 16."
    }
  },
  {
    id: "P1_s_58",
    category: "P1",
    level: 1,
    text: {
      fr: "Un fermier récolte 24 kg de fraises en 4 heures. Combien de kg en 6 heures ?",
      en: "A farmer picks 24 kg of strawberries in 4 hours. How many kg in 6 hours?",
      nl: "Een boer plukt 24 kg aardbeien in 4 uur. Hoeveel kg in 6 uur?"
    },
    answer: 36,
    tolerance: 0.01,
    hint: {
      fr: "Rendement = 24 ÷ 4 = 6 kg/h. Multiplie par 6.",
      en: "Yield = 24 ÷ 4 = 6 kg/h. Multiply by 6.",
      nl: "Opbrengst = 24 ÷ 4 = 6 kg/u. Vermenigvuldig met 6."
    }
  },
  {
    id: "P1_s_59",
    category: "P1",
    level: 1,
    text: {
      fr: "Si 7 kg de riz coûtent 14 €, combien coûtent 11 kg ?",
      en: "If 7 kg of rice cost €14, how much do 11 kg cost?",
      nl: "Als 7 kg rijst €14 kosten, hoeveel kosten 11 kg?"
    },
    answer: 22,
    tolerance: 0.01,
    hint: {
      fr: "Prix d'1 kg = 14 ÷ 7 = 2 €. Multiplie par 11.",
      en: "Price of 1 kg = 14 ÷ 7 = €2. Multiply by 11.",
      nl: "Prijs van 1 kg = 14 ÷ 7 = €2. Vermenigvuldig met 11."
    }
  },
  {
    id: "P1_s_60",
    category: "P1",
    level: 1,
    text: {
      fr: "Pour 2 personnes, il faut 400 g de pâtes. Combien de grammes pour 5 personnes ?",
      en: "For 2 people, you need 400 g of pasta. How many grams for 5 people?",
      nl: "Voor 2 personen heb je 400 g pasta nodig. Hoeveel gram voor 5 personen?"
    },
    answer: 1000,
    tolerance: 0.01,
    hint: {
      fr: "Pâtes par personne = 400 ÷ 2 = 200 g. Multiplie par 5.",
      en: "Pasta per person = 400 ÷ 2 = 200 g. Multiply by 5.",
      nl: "Pasta per persoon = 400 ÷ 2 = 200 g. Vermenigvuldig met 5."
    }
  },
  {
    id: "P1_s_61",
    category: "P1",
    level: 1,
    text: {
      fr: "Si 3 pots de peinture couvrent 9 murs, combien de murs couvrent 8 pots ?",
      en: "If 3 cans of paint cover 9 walls, how many walls do 8 cans cover?",
      nl: "Als 3 blikken verf 9 muren bedekken, hoeveel muren bedekken 8 blikken?"
    },
    answer: 24,
    tolerance: 0.01,
    hint: {
      fr: "1 pot couvre 9 ÷ 3 = 3 murs. Multiplie par 8.",
      en: "1 can covers 9 ÷ 3 = 3 walls. Multiply by 8.",
      nl: "1 blik bedekt 9 ÷ 3 = 3 muren. Vermenigvuldig met 8."
    }
  },
  {
    id: "P1_s_62",
    category: "P1",
    level: 1,
    text: {
      fr: "Si 6 mètres de tissu coûtent 18 €, combien coûtent 11 mètres ?",
      en: "If 6 metres of fabric cost €18, how much do 11 metres cost?",
      nl: "Als 6 meter stof €18 kost, hoeveel kost 11 meter?"
    },
    answer: 33,
    tolerance: 0.01,
    hint: {
      fr: "Prix d'un mètre = 18 ÷ 6 = 3 €. Multiplie par 11.",
      en: "Price of one metre = 18 ÷ 6 = €3. Multiply by 11.",
      nl: "Prijs van één meter = 18 ÷ 6 = €3. Vermenigvuldig met 11."
    }
  },
  {
    id: "P1_s_63",
    category: "P1",
    level: 1,
    text: {
      fr: "Un jardinier plante 15 arbres en 3 jours. Combien d'arbres en 7 jours ?",
      en: "A gardener plants 15 trees in 3 days. How many trees in 7 days?",
      nl: "Een tuinier plant 15 bomen in 3 dagen. Hoeveel bomen in 7 dagen?"
    },
    answer: 35,
    tolerance: 0.01,
    hint: {
      fr: "Arbres par jour = 15 ÷ 3 = 5. Multiplie par 7.",
      en: "Trees per day = 15 ÷ 3 = 5. Multiply by 7.",
      nl: "Bomen per dag = 15 ÷ 3 = 5. Vermenigvuldig met 7."
    }
  },
  {
    id: "P1_s_64",
    category: "P1",
    level: 1,
    text: {
      fr: "Si 5 pizzas coûtent 40 €, combien coûtent 3 pizzas ?",
      en: "If 5 pizzas cost €40, how much do 3 pizzas cost?",
      nl: "Als 5 pizza's €40 kosten, hoeveel kosten 3 pizza's?"
    },
    answer: 24,
    tolerance: 0.01,
    hint: {
      fr: "Prix d'une pizza = 40 ÷ 5 = 8 €. Multiplie par 3.",
      en: "Price of one pizza = 40 ÷ 5 = €8. Multiply by 3.",
      nl: "Prijs van één pizza = 40 ÷ 5 = €8. Vermenigvuldig met 3."
    }
  },
  {
    id: "P1_s_65",
    category: "P1",
    level: 1,
    text: {
      fr: "Un scooter parcourt 45 km avec 3 litres d'essence. Combien de km avec 7 litres ?",
      en: "A scooter travels 45 km on 3 litres of fuel. How many km on 7 litres?",
      nl: "Een scooter rijdt 45 km op 3 liter brandstof. Hoeveel km op 7 liter?"
    },
    answer: 105,
    tolerance: 0.01,
    hint: {
      fr: "Km par litre = 45 ÷ 3 = 15. Multiplie par 7.",
      en: "Km per litre = 45 ÷ 3 = 15. Multiply by 7.",
      nl: "Km per liter = 45 ÷ 3 = 15. Vermenigvuldig met 7."
    }
  },
  {
    id: "P1_s_66",
    category: "P1",
    level: 1,
    text: {
      fr: "Si 8 tickets de cinéma coûtent 48 €, combien coûtent 5 tickets ?",
      en: "If 8 cinema tickets cost €48, how much do 5 tickets cost?",
      nl: "Als 8 bioscoopkaartjes €48 kosten, hoeveel kosten 5 kaartjes?"
    },
    answer: 30,
    tolerance: 0.01,
    hint: {
      fr: "Prix d'un ticket = 48 ÷ 8 = 6 €. Multiplie par 5.",
      en: "Price of one ticket = 48 ÷ 8 = €6. Multiply by 5.",
      nl: "Prijs van één kaartje = 48 ÷ 8 = €6. Vermenigvuldig met 5."
    }
  },
  {
    id: "P1_s_67",
    category: "P1",
    level: 1,
    text: {
      fr: "Si 4 sacs de ciment pèsent 100 kg, combien pèsent 9 sacs ?",
      en: "If 4 bags of cement weigh 100 kg, how much do 9 bags weigh?",
      nl: "Als 4 zakken cement 100 kg wegen, hoeveel wegen 9 zakken?"
    },
    answer: 225,
    tolerance: 0.01,
    hint: {
      fr: "Poids d'un sac = 100 ÷ 4 = 25 kg. Multiplie par 9.",
      en: "Weight of one bag = 100 ÷ 4 = 25 kg. Multiply by 9.",
      nl: "Gewicht van één zak = 100 ÷ 4 = 25 kg. Vermenigvuldig met 9."
    }
  },
  {
    id: "P1_s_68",
    category: "P1",
    level: 1,
    text: {
      fr: "Une poule pond 6 œufs en 2 jours. Combien d'œufs en 10 jours ?",
      en: "A hen lays 6 eggs in 2 days. How many eggs in 10 days?",
      nl: "Een kip legt 6 eieren in 2 dagen. Hoeveel eieren in 10 dagen?"
    },
    answer: 30,
    tolerance: 0.01,
    hint: {
      fr: "Œufs par jour = 6 ÷ 2 = 3. Multiplie par 10.",
      en: "Eggs per day = 6 ÷ 2 = 3. Multiply by 10.",
      nl: "Eieren per dag = 6 ÷ 2 = 3. Vermenigvuldig met 10."
    }
  },
  {
    id: "P1_s_69",
    category: "P1",
    level: 1,
    text: {
      fr: "Si 9 briques pèsent 27 kg, combien pèsent 4 briques ?",
      en: "If 9 bricks weigh 27 kg, how much do 4 bricks weigh?",
      nl: "Als 9 bakstenen 27 kg wegen, hoeveel wegen 4 bakstenen?"
    },
    answer: 12,
    tolerance: 0.01,
    hint: {
      fr: "Poids d'une brique = 27 ÷ 9 = 3 kg. Multiplie par 4.",
      en: "Weight of one brick = 27 ÷ 9 = 3 kg. Multiply by 4.",
      nl: "Gewicht van één baksteen = 27 ÷ 9 = 3 kg. Vermenigvuldig met 4."
    }
  },
  {
    id: "P1_s_70",
    category: "P1",
    level: 1,
    text: {
      fr: "Si 2 kg de tomates coûtent 4 €, combien coûtent 9 kg ?",
      en: "If 2 kg of tomatoes cost €4, how much do 9 kg cost?",
      nl: "Als 2 kg tomaten €4 kosten, hoeveel kosten 9 kg?"
    },
    answer: 18,
    tolerance: 0.01,
    hint: {
      fr: "Prix d'1 kg = 4 ÷ 2 = 2 €. Multiplie par 9.",
      en: "Price of 1 kg = 4 ÷ 2 = €2. Multiply by 9.",
      nl: "Prijs van 1 kg = 4 ÷ 2 = €2. Vermenigvuldig met 9."
    }
  },

  // ===========================================================================
  // LEVEL 2 — Additional proportionality with decimal results (P1_s_71–P1_s_90)
  // ===========================================================================
  {
    id: "P1_s_71",
    category: "P1",
    level: 2,
    text: {
      fr: "Si 3 kg de cerises coûtent 7 €, combien coûtent 5 kg ?",
      en: "If 3 kg of cherries cost €7, how much do 5 kg cost?",
      nl: "Als 3 kg kersen €7 kosten, hoeveel kosten 5 kg?"
    },
    answer: 11.67,
    tolerance: 0.01,
    hint: {
      fr: "Prix d'1 kg = 7 ÷ 3 ≈ 2,333 €. Multiplie par 5.",
      en: "Price of 1 kg = 7 ÷ 3 ≈ €2.333. Multiply by 5.",
      nl: "Prijs van 1 kg = 7 ÷ 3 ≈ €2,333. Vermenigvuldig met 5."
    }
  },
  {
    id: "P1_s_72",
    category: "P1",
    level: 2,
    text: {
      fr: "Sur une carte à l'échelle 1:40 000, une distance mesure 7 cm. Quelle est la distance réelle en km ?",
      en: "On a map at scale 1:40,000, a distance measures 7 cm. What is the real distance in km?",
      nl: "Op een kaart met schaal 1:40.000 meet een afstand 7 cm. Wat is de werkelijke afstand in km?"
    },
    answer: 2.8,
    tolerance: 0.01,
    hint: {
      fr: "7 cm × 40 000 = 280 000 cm = 2 800 m = 2,8 km.",
      en: "7 cm × 40,000 = 280,000 cm = 2,800 m = 2.8 km.",
      nl: "7 cm × 40.000 = 280.000 cm = 2.800 m = 2,8 km."
    }
  },
  {
    id: "P1_s_73",
    category: "P1",
    level: 2,
    text: {
      fr: "Si 7 mètres de corde coûtent 4 €, combien coûtent 12 mètres ?",
      en: "If 7 metres of rope cost €4, how much do 12 metres cost?",
      nl: "Als 7 meter touw €4 kost, hoeveel kost 12 meter?"
    },
    answer: 6.86,
    tolerance: 0.01,
    hint: {
      fr: "Prix d'un mètre = 4 ÷ 7 ≈ 0,571 €. Multiplie par 12.",
      en: "Price of one metre = 4 ÷ 7 ≈ €0.571. Multiply by 12.",
      nl: "Prijs van één meter = 4 ÷ 7 ≈ €0,571. Vermenigvuldig met 12."
    }
  },
  {
    id: "P1_s_74",
    category: "P1",
    level: 2,
    text: {
      fr: "Si 300 g de beurre coûtent 2,70 €, combien coûtent 500 g ?",
      en: "If 300 g of butter cost €2.70, how much do 500 g cost?",
      nl: "Als 300 g boter €2,70 kost, hoeveel kost 500 g?"
    },
    answer: 4.5,
    tolerance: 0.01,
    hint: {
      fr: "Prix pour 1 g = 2,70 ÷ 300 = 0,009 €. Multiplie par 500.",
      en: "Price per 1 g = 2.70 ÷ 300 = €0.009. Multiply by 500.",
      nl: "Prijs per 1 g = 2,70 ÷ 300 = €0,009. Vermenigvuldig met 500."
    }
  },
  {
    id: "P1_s_75",
    category: "P1",
    level: 2,
    text: {
      fr: "Un coureur parcourt 8 km en 35 minutes. Combien de km parcourt-il en 60 minutes ?",
      en: "A runner covers 8 km in 35 minutes. How many km does he cover in 60 minutes?",
      nl: "Een loper legt 8 km af in 35 minuten. Hoeveel km legt hij af in 60 minuten?"
    },
    answer: 13.71,
    tolerance: 0.01,
    hint: {
      fr: "Km par minute = 8 ÷ 35. Pour 60 min : (8 ÷ 35) × 60 ≈ 13,71.",
      en: "Km per minute = 8 ÷ 35. For 60 min: (8 ÷ 35) × 60 ≈ 13.71.",
      nl: "Km per minuut = 8 ÷ 35. Voor 60 min: (8 ÷ 35) × 60 ≈ 13,71."
    }
  },
  {
    id: "P1_s_76",
    category: "P1",
    level: 2,
    text: {
      fr: "Si 6 savons coûtent 11 €, combien coûtent 10 savons ?",
      en: "If 6 bars of soap cost €11, how much do 10 bars cost?",
      nl: "Als 6 stukken zeep €11 kosten, hoeveel kosten 10 stukken?"
    },
    answer: 18.33,
    tolerance: 0.01,
    hint: {
      fr: "Prix d'un savon = 11 ÷ 6 ≈ 1,833 €. Multiplie par 10.",
      en: "Price of one bar = 11 ÷ 6 ≈ €1.833. Multiply by 10.",
      nl: "Prijs van één stuk = 11 ÷ 6 ≈ €1,833. Vermenigvuldig met 10."
    }
  },
  {
    id: "P1_s_77",
    category: "P1",
    level: 2,
    text: {
      fr: "Si 400 g de jambon coûtent 5,80 €, combien coûtent 650 g ?",
      en: "If 400 g of ham cost €5.80, how much do 650 g cost?",
      nl: "Als 400 g ham €5,80 kost, hoeveel kost 650 g?"
    },
    answer: 9.43,
    tolerance: 0.01,
    hint: {
      fr: "Prix pour 1 g = 5,80 ÷ 400 = 0,0145 €. Multiplie par 650.",
      en: "Price per 1 g = 5.80 ÷ 400 = €0.0145. Multiply by 650.",
      nl: "Prijs per 1 g = 5,80 ÷ 400 = €0,0145. Vermenigvuldig met 650."
    }
  },
  {
    id: "P1_s_78",
    category: "P1",
    level: 2,
    text: {
      fr: "Si 5 personnes boivent 8 litres de limonade, combien de litres pour 12 personnes ?",
      en: "If 5 people drink 8 litres of lemonade, how many litres for 12 people?",
      nl: "Als 5 personen 8 liter limonade drinken, hoeveel liter voor 12 personen?"
    },
    answer: 19.2,
    tolerance: 0.01,
    hint: {
      fr: "Litres par personne = 8 ÷ 5 = 1,6. Multiplie par 12.",
      en: "Litres per person = 8 ÷ 5 = 1.6. Multiply by 12.",
      nl: "Liter per persoon = 8 ÷ 5 = 1,6. Vermenigvuldig met 12."
    }
  },
  {
    id: "P1_s_79",
    category: "P1",
    level: 2,
    text: {
      fr: "Si 9 stylos coûtent 5 €, combien coûtent 20 stylos ?",
      en: "If 9 pens cost €5, how much do 20 pens cost?",
      nl: "Als 9 pennen €5 kosten, hoeveel kosten 20 pennen?"
    },
    answer: 11.11,
    tolerance: 0.01,
    hint: {
      fr: "Prix d'un stylo = 5 ÷ 9 ≈ 0,556 €. Multiplie par 20.",
      en: "Price of one pen = 5 ÷ 9 ≈ €0.556. Multiply by 20.",
      nl: "Prijs van één pen = 5 ÷ 9 ≈ €0,556. Vermenigvuldig met 20."
    }
  },
  {
    id: "P1_s_80",
    category: "P1",
    level: 2,
    text: {
      fr: "Un vélo parcourt 13 km en 40 minutes. Combien de km parcourt-il en 1 heure ?",
      en: "A bicycle covers 13 km in 40 minutes. How many km does it cover in 1 hour?",
      nl: "Een fiets legt 13 km af in 40 minuten. Hoeveel km legt hij af in 1 uur?"
    },
    answer: 19.5,
    tolerance: 0.01,
    hint: {
      fr: "Km par minute = 13 ÷ 40 = 0,325. Pour 60 min : 0,325 × 60 = 19,5.",
      en: "Km per minute = 13 ÷ 40 = 0.325. For 60 min: 0.325 × 60 = 19.5.",
      nl: "Km per minuut = 13 ÷ 40 = 0,325. Voor 60 min: 0,325 × 60 = 19,5."
    }
  },
  {
    id: "P1_s_81",
    category: "P1",
    level: 2,
    text: {
      fr: "Si 6 croissants coûtent 7,50 €, combien coûtent 11 croissants ?",
      en: "If 6 croissants cost €7.50, how much do 11 croissants cost?",
      nl: "Als 6 croissants €7,50 kosten, hoeveel kosten 11 croissants?"
    },
    answer: 13.75,
    tolerance: 0.01,
    hint: {
      fr: "Prix d'un croissant = 7,50 ÷ 6 = 1,25 €. Multiplie par 11.",
      en: "Price of one croissant = 7.50 ÷ 6 = €1.25. Multiply by 11.",
      nl: "Prijs van één croissant = 7,50 ÷ 6 = €1,25. Vermenigvuldig met 11."
    }
  },
  {
    id: "P1_s_82",
    category: "P1",
    level: 2,
    text: {
      fr: "Pour peindre 20 m² de clôture, il faut 3,5 litres de peinture. Combien de litres pour 32 m² ?",
      en: "To paint 20 m² of fence, you need 3.5 litres of paint. How many litres for 32 m²?",
      nl: "Om 20 m² omheining te schilderen heb je 3,5 liter verf nodig. Hoeveel liter voor 32 m²?"
    },
    answer: 5.6,
    tolerance: 0.01,
    hint: {
      fr: "Litres par m² = 3,5 ÷ 20 = 0,175. Multiplie par 32.",
      en: "Litres per m² = 3.5 ÷ 20 = 0.175. Multiply by 32.",
      nl: "Liter per m² = 3,5 ÷ 20 = 0,175. Vermenigvuldig met 32."
    }
  },
  {
    id: "P1_s_83",
    category: "P1",
    level: 2,
    text: {
      fr: "Sur une carte à l'échelle 1:75 000, une distance mesure 4,2 cm. Quelle est la distance réelle en km ?",
      en: "On a map at scale 1:75,000, a distance measures 4.2 cm. What is the real distance in km?",
      nl: "Op een kaart met schaal 1:75.000 meet een afstand 4,2 cm. Wat is de werkelijke afstand in km?"
    },
    answer: 3.15,
    tolerance: 0.01,
    hint: {
      fr: "4,2 cm × 75 000 = 315 000 cm = 3 150 m = 3,15 km.",
      en: "4.2 cm × 75,000 = 315,000 cm = 3,150 m = 3.15 km.",
      nl: "4,2 cm × 75.000 = 315.000 cm = 3.150 m = 3,15 km."
    }
  },
  {
    id: "P1_s_84",
    category: "P1",
    level: 2,
    text: {
      fr: "Si 8 mètres de fil coûtent 3 €, combien coûtent 14 mètres ?",
      en: "If 8 metres of wire cost €3, how much do 14 metres cost?",
      nl: "Als 8 meter draad €3 kost, hoeveel kost 14 meter?"
    },
    answer: 5.25,
    tolerance: 0.01,
    hint: {
      fr: "Prix d'un mètre = 3 ÷ 8 = 0,375 €. Multiplie par 14.",
      en: "Price of one metre = 3 ÷ 8 = €0.375. Multiply by 14.",
      nl: "Prijs van één meter = 3 ÷ 8 = €0,375. Vermenigvuldig met 14."
    }
  },
  {
    id: "P1_s_85",
    category: "P1",
    level: 2,
    text: {
      fr: "Si une recette pour 8 personnes utilise 350 g de chocolat, combien de grammes pour 5 personnes ?",
      en: "If a recipe for 8 people uses 350 g of chocolate, how many grams for 5 people?",
      nl: "Als een recept voor 8 personen 350 g chocolade gebruikt, hoeveel gram voor 5 personen?"
    },
    answer: 218.75,
    tolerance: 0.01,
    hint: {
      fr: "Chocolat par personne = 350 ÷ 8 = 43,75 g. Multiplie par 5.",
      en: "Chocolate per person = 350 ÷ 8 = 43.75 g. Multiply by 5.",
      nl: "Chocolade per persoon = 350 ÷ 8 = 43,75 g. Vermenigvuldig met 5."
    }
  },
  {
    id: "P1_s_86",
    category: "P1",
    level: 2,
    text: {
      fr: "Un camion transporte 750 kg en 3 voyages. Combien de kg en 7 voyages ?",
      en: "A truck carries 750 kg in 3 trips. How many kg in 7 trips?",
      nl: "Een vrachtwagen vervoert 750 kg in 3 ritten. Hoeveel kg in 7 ritten?"
    },
    answer: 1750,
    tolerance: 0.01,
    hint: {
      fr: "Kg par voyage = 750 ÷ 3 = 250. Multiplie par 7.",
      en: "Kg per trip = 750 ÷ 3 = 250. Multiply by 7.",
      nl: "Kg per rit = 750 ÷ 3 = 250. Vermenigvuldig met 7."
    }
  },
  {
    id: "P1_s_87",
    category: "P1",
    level: 2,
    text: {
      fr: "Si 11 roses coûtent 16 €, combien coûtent 4 roses ?",
      en: "If 11 roses cost €16, how much do 4 roses cost?",
      nl: "Als 11 rozen €16 kosten, hoeveel kosten 4 rozen?"
    },
    answer: 5.82,
    tolerance: 0.01,
    hint: {
      fr: "Prix d'une rose = 16 ÷ 11 ≈ 1,455 €. Multiplie par 4.",
      en: "Price of one rose = 16 ÷ 11 ≈ €1.455. Multiply by 4.",
      nl: "Prijs van één roos = 16 ÷ 11 ≈ €1,455. Vermenigvuldig met 4."
    }
  },
  {
    id: "P1_s_88",
    category: "P1",
    level: 2,
    text: {
      fr: "Si 150 g de thé coûtent 3,60 €, combien coûtent 250 g ?",
      en: "If 150 g of tea cost €3.60, how much do 250 g cost?",
      nl: "Als 150 g thee €3,60 kost, hoeveel kost 250 g?"
    },
    answer: 6,
    tolerance: 0.01,
    hint: {
      fr: "Prix pour 1 g = 3,60 ÷ 150 = 0,024 €. Multiplie par 250.",
      en: "Price per 1 g = 3.60 ÷ 150 = €0.024. Multiply by 250.",
      nl: "Prijs per 1 g = 3,60 ÷ 150 = €0,024. Vermenigvuldig met 250."
    }
  },
  {
    id: "P1_s_89",
    category: "P1",
    level: 2,
    text: {
      fr: "Si 4 boîtes de conserve pèsent 1,8 kg, combien pèsent 9 boîtes ?",
      en: "If 4 tins weigh 1.8 kg, how much do 9 tins weigh?",
      nl: "Als 4 blikken 1,8 kg wegen, hoeveel wegen 9 blikken?"
    },
    answer: 4.05,
    tolerance: 0.01,
    hint: {
      fr: "Poids d'une boîte = 1,8 ÷ 4 = 0,45 kg. Multiplie par 9.",
      en: "Weight of one tin = 1.8 ÷ 4 = 0.45 kg. Multiply by 9.",
      nl: "Gewicht van één blik = 1,8 ÷ 4 = 0,45 kg. Vermenigvuldig met 9."
    }
  },
  {
    id: "P1_s_90",
    category: "P1",
    level: 2,
    text: {
      fr: "Un robinet remplit 7 litres en 3 minutes. Combien de litres en 8 minutes ?",
      en: "A tap fills 7 litres in 3 minutes. How many litres in 8 minutes?",
      nl: "Een kraan vult 7 liter in 3 minuten. Hoeveel liter in 8 minuten?"
    },
    answer: 18.67,
    tolerance: 0.01,
    hint: {
      fr: "Débit = 7 ÷ 3 ≈ 2,333 l/min. Multiplie par 8.",
      en: "Flow = 7 ÷ 3 ≈ 2.333 l/min. Multiply by 8.",
      nl: "Debiet = 7 ÷ 3 ≈ 2,333 l/min. Vermenigvuldig met 8."
    }
  },

  // ===========================================================================
  // LEVEL 3 — Additional complex: percentages, inverse proportionality, multi-step (P1_s_91–P1_s_111)
  // ===========================================================================
  {
    id: "P1_s_91",
    category: "P1",
    level: 3,
    text: {
      fr: "Un manteau coûte 120 €. Son prix augmente de 15 %. Quel est le nouveau prix ?",
      en: "A coat costs €120. Its price increases by 15%. What is the new price?",
      nl: "Een jas kost €120. De prijs stijgt met 15%. Wat is de nieuwe prijs?"
    },
    answer: 138,
    tolerance: 0.01,
    hint: {
      fr: "Nouveau prix = 120 × 1,15.",
      en: "New price = 120 × 1.15.",
      nl: "Nieuwe prijs = 120 × 1,15."
    }
  },
  {
    id: "P1_s_92",
    category: "P1",
    level: 3,
    text: {
      fr: "4 ouvriers peignent une maison en 15 jours. Combien de jours faut-il à 6 ouvriers ?",
      en: "4 workers paint a house in 15 days. How many days do 6 workers need?",
      nl: "4 arbeiders verven een huis in 15 dagen. Hoeveel dagen hebben 6 arbeiders nodig?"
    },
    answer: 10,
    tolerance: 0.01,
    hint: {
      fr: "Proportionnalité inverse : 4 × 15 = 6 × x, donc x = 60 ÷ 6.",
      en: "Inverse proportionality: 4 × 15 = 6 × x, so x = 60 ÷ 6.",
      nl: "Omgekeerde evenredigheid: 4 × 15 = 6 × x, dus x = 60 ÷ 6."
    }
  },
  {
    id: "P1_s_93",
    category: "P1",
    level: 3,
    text: {
      fr: "2 machines remplissent 80 bouteilles en 5 heures. Combien de bouteilles remplissent 3 machines en 4 heures ?",
      en: "2 machines fill 80 bottles in 5 hours. How many bottles do 3 machines fill in 4 hours?",
      nl: "2 machines vullen 80 flessen in 5 uur. Hoeveel flessen vullen 3 machines in 4 uur?"
    },
    answer: 96,
    tolerance: 0.01,
    hint: {
      fr: "1 machine remplit 80 ÷ 2 = 40 en 5h, soit 8/h. 3 machines × 4h × 8 = 96.",
      en: "1 machine fills 80 ÷ 2 = 40 in 5h, so 8/h. 3 machines × 4h × 8 = 96.",
      nl: "1 machine vult 80 ÷ 2 = 40 in 5u, dus 8/u. 3 machines × 4u × 8 = 96."
    }
  },
  {
    id: "P1_s_94",
    category: "P1",
    level: 3,
    text: {
      fr: "Un ordinateur coûte 800 €. Il bénéficie d'une réduction de 12,5 %. Quel est le prix réduit ?",
      en: "A computer costs €800. It has a 12.5% discount. What is the reduced price?",
      nl: "Een computer kost €800. Er is 12,5% korting. Wat is de verlaagde prijs?"
    },
    answer: 700,
    tolerance: 0.01,
    hint: {
      fr: "Prix réduit = 800 × (1 - 0,125) = 800 × 0,875.",
      en: "Reduced price = 800 × (1 - 0.125) = 800 × 0.875.",
      nl: "Verlaagde prijs = 800 × (1 - 0,125) = 800 × 0,875."
    }
  },
  {
    id: "P1_s_95",
    category: "P1",
    level: 3,
    text: {
      fr: "Sur une carte à l'échelle 1:20 000, deux villages sont séparés par 6,5 cm. Quelle est la distance réelle en km ?",
      en: "On a map at scale 1:20,000, two villages are 6.5 cm apart. What is the real distance in km?",
      nl: "Op een kaart met schaal 1:20.000 liggen twee dorpen 6,5 cm uit elkaar. Wat is de werkelijke afstand in km?"
    },
    answer: 1.3,
    tolerance: 0.01,
    hint: {
      fr: "6,5 cm × 20 000 = 130 000 cm = 1 300 m = 1,3 km.",
      en: "6.5 cm × 20,000 = 130,000 cm = 1,300 m = 1.3 km.",
      nl: "6,5 cm × 20.000 = 130.000 cm = 1.300 m = 1,3 km."
    }
  },
  {
    id: "P1_s_96",
    category: "P1",
    level: 3,
    text: {
      fr: "Un article coûte 60 €. Il subit d'abord une hausse de 20 %, puis une baisse de 25 %. Quel est le prix final ?",
      en: "An item costs €60. It first increases by 20%, then decreases by 25%. What is the final price?",
      nl: "Een artikel kost €60. Het stijgt eerst met 20%, dan daalt het met 25%. Wat is de uiteindelijke prijs?"
    },
    answer: 54,
    tolerance: 0.01,
    hint: {
      fr: "Après hausse : 60 × 1,20 = 72. Après baisse : 72 × 0,75 = 54.",
      en: "After increase: 60 × 1.20 = 72. After decrease: 72 × 0.75 = 54.",
      nl: "Na stijging: 60 × 1,20 = 72. Na daling: 72 × 0,75 = 54."
    }
  },
  {
    id: "P1_s_97",
    category: "P1",
    level: 3,
    text: {
      fr: "9 pompes vident un bassin en 4 heures. Combien d'heures faut-il avec 6 pompes ?",
      en: "9 pumps empty a pool in 4 hours. How many hours with 6 pumps?",
      nl: "9 pompen legen een bassin in 4 uur. Hoeveel uur met 6 pompen?"
    },
    answer: 6,
    tolerance: 0.01,
    hint: {
      fr: "Proportionnalité inverse : 9 × 4 = 6 × x, donc x = 36 ÷ 6.",
      en: "Inverse proportionality: 9 × 4 = 6 × x, so x = 36 ÷ 6.",
      nl: "Omgekeerde evenredigheid: 9 × 4 = 6 × x, dus x = 36 ÷ 6."
    }
  },
  {
    id: "P1_s_98",
    category: "P1",
    level: 3,
    text: {
      fr: "Un smartphone coûte 350 €. Son prix augmente de 8 %. Quel est le nouveau prix ?",
      en: "A smartphone costs €350. Its price increases by 8%. What is the new price?",
      nl: "Een smartphone kost €350. De prijs stijgt met 8%. Wat is de nieuwe prijs?"
    },
    answer: 378,
    tolerance: 0.01,
    hint: {
      fr: "Nouveau prix = 350 × 1,08.",
      en: "New price = 350 × 1.08.",
      nl: "Nieuwe prijs = 350 × 1,08."
    }
  },
  {
    id: "P1_s_99",
    category: "P1",
    level: 3,
    text: {
      fr: "3 boulangers préparent 150 pains en 2 heures. Combien de pains préparent 5 boulangers en 3 heures ?",
      en: "3 bakers prepare 150 loaves in 2 hours. How many loaves do 5 bakers prepare in 3 hours?",
      nl: "3 bakkers bereiden 150 broden in 2 uur. Hoeveel broden bereiden 5 bakkers in 3 uur?"
    },
    answer: 375,
    tolerance: 0.01,
    hint: {
      fr: "1 boulanger prépare 150 ÷ 3 = 50 pains en 2h, soit 25/h. 5 boulangers × 3h × 25 = 375.",
      en: "1 baker prepares 150 ÷ 3 = 50 loaves in 2h, so 25/h. 5 bakers × 3h × 25 = 375.",
      nl: "1 bakker bereidt 150 ÷ 3 = 50 broden in 2u, dus 25/u. 5 bakkers × 3u × 25 = 375."
    }
  },
  {
    id: "P1_s_100",
    category: "P1",
    level: 3,
    text: {
      fr: "Un canapé coûte 450 €. Pendant les soldes, il bénéficie d'une réduction de 30 %. Quel est le prix soldé ?",
      en: "A sofa costs €450. During a sale, it gets a 30% discount. What is the sale price?",
      nl: "Een bank kost €450. Tijdens de uitverkoop krijgt hij 30% korting. Wat is de uitverkoopprijs?"
    },
    answer: 315,
    tolerance: 0.01,
    hint: {
      fr: "Prix soldé = 450 × (1 - 0,30) = 450 × 0,70.",
      en: "Sale price = 450 × (1 - 0.30) = 450 × 0.70.",
      nl: "Uitverkoopprijs = 450 × (1 - 0,30) = 450 × 0,70."
    }
  },
  {
    id: "P1_s_101",
    category: "P1",
    level: 3,
    text: {
      fr: "7 maçons construisent un mur en 6 jours. Combien de jours faut-il à 3 maçons ?",
      en: "7 bricklayers build a wall in 6 days. How many days do 3 bricklayers need?",
      nl: "7 metselaars bouwen een muur in 6 dagen. Hoeveel dagen hebben 3 metselaars nodig?"
    },
    answer: 14,
    tolerance: 0.01,
    hint: {
      fr: "Proportionnalité inverse : 7 × 6 = 3 × x, donc x = 42 ÷ 3.",
      en: "Inverse proportionality: 7 × 6 = 3 × x, so x = 42 ÷ 3.",
      nl: "Omgekeerde evenredigheid: 7 × 6 = 3 × x, dus x = 42 ÷ 3."
    }
  },
  {
    id: "P1_s_102",
    category: "P1",
    level: 3,
    text: {
      fr: "Un article coûte 200 €. Il subit d'abord une baisse de 15 %, puis une hausse de 10 %. Quel est le prix final ?",
      en: "An item costs €200. It first decreases by 15%, then increases by 10%. What is the final price?",
      nl: "Een artikel kost €200. Het daalt eerst met 15%, dan stijgt het met 10%. Wat is de uiteindelijke prijs?"
    },
    answer: 187,
    tolerance: 0.01,
    hint: {
      fr: "Après baisse : 200 × 0,85 = 170. Après hausse : 170 × 1,10 = 187.",
      en: "After decrease: 200 × 0.85 = 170. After increase: 170 × 1.10 = 187.",
      nl: "Na daling: 200 × 0,85 = 170. Na stijging: 170 × 1,10 = 187."
    }
  },
  {
    id: "P1_s_103",
    category: "P1",
    level: 3,
    text: {
      fr: "5 imprimantes impriment 400 pages en 2 heures. Combien de pages impriment 8 imprimantes en 3 heures ?",
      en: "5 printers print 400 pages in 2 hours. How many pages do 8 printers print in 3 hours?",
      nl: "5 printers drukken 400 pagina's in 2 uur. Hoeveel pagina's drukken 8 printers in 3 uur?"
    },
    answer: 960,
    tolerance: 0.01,
    hint: {
      fr: "1 imprimante imprime 400 ÷ 5 = 80 pages en 2h, soit 40/h. 8 × 3 × 40 = 960.",
      en: "1 printer prints 400 ÷ 5 = 80 pages in 2h, so 40/h. 8 × 3 × 40 = 960.",
      nl: "1 printer drukt 400 ÷ 5 = 80 pagina's in 2u, dus 40/u. 8 × 3 × 40 = 960."
    }
  },
  {
    id: "P1_s_104",
    category: "P1",
    level: 3,
    text: {
      fr: "Un loyer de 650 € augmente de 4 %. Quel est le nouveau loyer ?",
      en: "A rent of €650 increases by 4%. What is the new rent?",
      nl: "Een huur van €650 stijgt met 4%. Wat is de nieuwe huur?"
    },
    answer: 676,
    tolerance: 0.01,
    hint: {
      fr: "Nouveau loyer = 650 × 1,04.",
      en: "New rent = 650 × 1.04.",
      nl: "Nieuwe huur = 650 × 1,04."
    }
  },
  {
    id: "P1_s_105",
    category: "P1",
    level: 3,
    text: {
      fr: "12 jardiniers tondent un parc en 3 heures. Combien d'heures faut-il à 9 jardiniers ?",
      en: "12 gardeners mow a park in 3 hours. How many hours do 9 gardeners need?",
      nl: "12 tuiniers maaien een park in 3 uur. Hoeveel uur hebben 9 tuiniers nodig?"
    },
    answer: 4,
    tolerance: 0.01,
    hint: {
      fr: "Proportionnalité inverse : 12 × 3 = 9 × x, donc x = 36 ÷ 9.",
      en: "Inverse proportionality: 12 × 3 = 9 × x, so x = 36 ÷ 9.",
      nl: "Omgekeerde evenredigheid: 12 × 3 = 9 × x, dus x = 36 ÷ 9."
    }
  },
  {
    id: "P1_s_106",
    category: "P1",
    level: 3,
    text: {
      fr: "Une tablette coûte 180 €. Elle bénéficie d'une réduction de 35 %. Quel est le prix réduit ?",
      en: "A tablet costs €180. It has a 35% discount. What is the reduced price?",
      nl: "Een tablet kost €180. Er is 35% korting. Wat is de verlaagde prijs?"
    },
    answer: 117,
    tolerance: 0.01,
    hint: {
      fr: "Prix réduit = 180 × (1 - 0,35) = 180 × 0,65.",
      en: "Reduced price = 180 × (1 - 0.35) = 180 × 0.65.",
      nl: "Verlaagde prijs = 180 × (1 - 0,35) = 180 × 0,65."
    }
  },
  {
    id: "P1_s_107",
    category: "P1",
    level: 3,
    text: {
      fr: "Sur une carte à l'échelle 1:80 000, deux villes sont séparées par 5,5 cm. Quelle est la distance réelle en km ?",
      en: "On a map at scale 1:80,000, two cities are 5.5 cm apart. What is the real distance in km?",
      nl: "Op een kaart met schaal 1:80.000 liggen twee steden 5,5 cm uit elkaar. Wat is de werkelijke afstand in km?"
    },
    answer: 4.4,
    tolerance: 0.01,
    hint: {
      fr: "5,5 cm × 80 000 = 440 000 cm = 4 400 m = 4,4 km.",
      en: "5.5 cm × 80,000 = 440,000 cm = 4,400 m = 4.4 km.",
      nl: "5,5 cm × 80.000 = 440.000 cm = 4.400 m = 4,4 km."
    }
  },
  {
    id: "P1_s_108",
    category: "P1",
    level: 3,
    text: {
      fr: "Un article coûte 90 €. Il subit d'abord une hausse de 10 %, puis une autre hausse de 10 %. Quel est le prix final ?",
      en: "An item costs €90. It first increases by 10%, then increases again by 10%. What is the final price?",
      nl: "Een artikel kost €90. Het stijgt eerst met 10%, dan nogmaals met 10%. Wat is de uiteindelijke prijs?"
    },
    answer: 108.9,
    tolerance: 0.01,
    hint: {
      fr: "Après 1re hausse : 90 × 1,10 = 99. Après 2e hausse : 99 × 1,10 = 108,90.",
      en: "After 1st increase: 90 × 1.10 = 99. After 2nd increase: 99 × 1.10 = 108.90.",
      nl: "Na 1e stijging: 90 × 1,10 = 99. Na 2e stijging: 99 × 1,10 = 108,90."
    }
  },
  {
    id: "P1_s_109",
    category: "P1",
    level: 3,
    text: {
      fr: "6 camions transportent une cargaison en 8 voyages. Combien de voyages faut-il à 4 camions ?",
      en: "6 trucks transport a cargo in 8 trips. How many trips do 4 trucks need?",
      nl: "6 vrachtwagens vervoeren een lading in 8 ritten. Hoeveel ritten hebben 4 vrachtwagens nodig?"
    },
    answer: 12,
    tolerance: 0.01,
    hint: {
      fr: "Proportionnalité inverse : 6 × 8 = 4 × x, donc x = 48 ÷ 4.",
      en: "Inverse proportionality: 6 × 8 = 4 × x, so x = 48 ÷ 4.",
      nl: "Omgekeerde evenredigheid: 6 × 8 = 4 × x, dus x = 48 ÷ 4."
    }
  },
  {
    id: "P1_s_110",
    category: "P1",
    level: 3,
    text: {
      fr: "4 cuisiniers préparent 60 desserts en 3 heures. Combien de desserts préparent 7 cuisiniers en 2 heures ?",
      en: "4 cooks prepare 60 desserts in 3 hours. How many desserts do 7 cooks prepare in 2 hours?",
      nl: "4 koks bereiden 60 desserts in 3 uur. Hoeveel desserts bereiden 7 koks in 2 uur?"
    },
    answer: 70,
    tolerance: 0.01,
    hint: {
      fr: "1 cuisinier prépare 60 ÷ 4 = 15 desserts en 3h, soit 5/h. 7 cuisiniers × 2h × 5 = 70.",
      en: "1 cook prepares 60 ÷ 4 = 15 desserts in 3h, so 5/h. 7 cooks × 2h × 5 = 70.",
      nl: "1 kok bereidt 60 ÷ 4 = 15 desserts in 3u, dus 5/u. 7 koks × 2u × 5 = 70."
    }
  },
  {
    id: "P1_s_111",
    category: "P1",
    level: 3,
    text: {
      fr: "Un article coûte 500 €. Il subit d'abord une baisse de 20 %, puis une hausse de 5 %. Quel est le prix final ?",
      en: "An item costs €500. It first decreases by 20%, then increases by 5%. What is the final price?",
      nl: "Een artikel kost €500. Het daalt eerst met 20%, dan stijgt het met 5%. Wat is de uiteindelijke prijs?"
    },
    answer: 420,
    tolerance: 0.01,
    hint: {
      fr: "Après baisse : 500 × 0,80 = 400. Après hausse : 400 × 1,05 = 420.",
      en: "After decrease: 500 × 0.80 = 400. After increase: 400 × 1.05 = 420.",
      nl: "Na daling: 500 × 0,80 = 400. Na stijging: 400 × 1,05 = 420."
    }
  },
  {
    id: "P1_s_112",
    category: "P1",
    level: 1,
    text: {
      fr: "Si 5 cahiers coûtent 15 €, combien coûtent 8 cahiers ?",
      en: "If 5 notebooks cost €15, how much do 8 notebooks cost?",
      nl: "Als 5 schriften €15 kosten, hoeveel kosten 8 schriften?"
    },
    answer: 24,
    tolerance: 0,
    hint: {
      fr: "Prix d'un cahier : 15 ÷ 5 = 3 €. Puis 3 × 8 = 24.",
      en: "Price of one notebook: 15 ÷ 5 = 3. Then 3 × 8 = 24.",
      nl: "Prijs van één schrift: 15 ÷ 5 = 3. Dan 3 × 8 = 24."
    }
  },
  {
    id: "P1_s_113",
    category: "P1",
    level: 1,
    text: {
      fr: "Une voiture consomme 6 litres pour 100 km. Combien de litres faut-il pour 250 km ?",
      en: "A car uses 6 liters per 100 km. How many liters for 250 km?",
      nl: "Een auto verbruikt 6 liter per 100 km. Hoeveel liter voor 250 km?"
    },
    answer: 15,
    tolerance: 0,
    hint: {
      fr: "6 ÷ 100 = 0,06 L/km. 0,06 × 250 = 15.",
      en: "6 ÷ 100 = 0.06 L/km. 0.06 × 250 = 15.",
      nl: "6 ÷ 100 = 0,06 L/km. 0,06 × 250 = 15."
    }
  },
  {
    id: "P1_s_114",
    category: "P1",
    level: 1,
    text: {
      fr: "Si 2 kg de farine coûtent 3 €, combien coûtent 10 kg ?",
      en: "If 2 kg of flour cost €3, how much do 10 kg cost?",
      nl: "Als 2 kg bloem €3 kosten, hoeveel kosten 10 kg?"
    },
    answer: 15,
    tolerance: 0,
    hint: {
      fr: "Prix d'1 kg : 3 ÷ 2 = 1,5 €. Puis 1,5 × 10 = 15.",
      en: "Price of 1 kg: 3 ÷ 2 = 1.5. Then 1.5 × 10 = 15.",
      nl: "Prijs van 1 kg: 3 ÷ 2 = 1,5. Dan 1,5 × 10 = 15."
    }
  },
  {
    id: "P1_s_115",
    category: "P1",
    level: 2,
    text: {
      fr: "Un pull à 80 € est soldé à 25 %. Quel est le prix après réduction ?",
      en: "A sweater at €80 has a 25% discount. What is the reduced price?",
      nl: "Een trui van €80 heeft 25% korting. Wat is de verlaagde prijs?"
    },
    answer: 60,
    tolerance: 0,
    hint: {
      fr: "Réduction : 80 × 0,25 = 20. Prix soldé : 80 − 20 = 60.",
      en: "Discount: 80 × 0.25 = 20. Sale price: 80 − 20 = 60.",
      nl: "Korting: 80 × 0,25 = 20. Verkoopprijs: 80 − 20 = 60."
    }
  },
  {
    id: "P1_s_116",
    category: "P1",
    level: 2,
    text: {
      fr: "Dans une classe de 40 élèves, 30 % sont des filles. Combien y a-t-il de garçons ?",
      en: "In a class of 40 students, 30% are girls. How many boys are there?",
      nl: "In een klas van 40 leerlingen is 30% meisjes. Hoeveel jongens zijn er?"
    },
    answer: 28,
    tolerance: 0,
    hint: {
      fr: "Filles : 40 × 0,30 = 12. Garçons : 40 − 12 = 28.",
      en: "Girls: 40 × 0.30 = 12. Boys: 40 − 12 = 28.",
      nl: "Meisjes: 40 × 0,30 = 12. Jongens: 40 − 12 = 28."
    }
  },
  {
    id: "P1_s_117",
    category: "P1",
    level: 3,
    text: {
      fr: "Un produit croisé : 4/7 = x/35. Quelle est la valeur de x ?",
      en: "Cross-multiplication: 4/7 = x/35. What is x?",
      nl: "Kruisproduct: 4/7 = x/35. Wat is x?"
    },
    answer: 20,
    tolerance: 0,
    hint: {
      fr: "x = 4 × 35 ÷ 7 = 140 ÷ 7 = 20.",
      en: "x = 4 × 35 ÷ 7 = 140 ÷ 7 = 20.",
      nl: "x = 4 × 35 ÷ 7 = 140 ÷ 7 = 20."
    }
  },
  {
    id: "P1_s_118",
    category: "P1",
    level: 3,
    text: {
      fr: "Un article coûte 250 € hors taxe. La TVA est de 21 %. Quel est le prix TTC ?",
      en: "An item costs €250 before tax. VAT is 21%. What is the price including tax?",
      nl: "Een artikel kost €250 exclusief btw. De btw is 21%. Wat is de prijs inclusief btw?"
    },
    answer: 302.5,
    tolerance: 0.01,
    hint: {
      fr: "TVA : 250 × 0,21 = 52,50. Prix TTC : 250 + 52,50 = 302,50.",
      en: "VAT: 250 × 0.21 = 52.50. Price incl. tax: 250 + 52.50 = 302.50.",
      nl: "Btw: 250 × 0,21 = 52,50. Prijs incl. btw: 250 + 52,50 = 302,50."
    }
  },
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
