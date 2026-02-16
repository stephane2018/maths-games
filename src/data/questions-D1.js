// =============================================================================
// D1 - Reading Tables & Charts: interpret data presented as text tables
// CE1D Belgian exam - Trilingual (FR / EN / NL)
// Static questions only
// =============================================================================

export const questions = [
  // ── Level 1: read a single value ──────────────────────────────────────────
  {
    id: 'D1_001',
    category: 'D1',
    level: 1,
    text: {
      fr: 'Voici les températures de la semaine :\nLundi: 12°C | Mardi: 15°C | Mercredi: 14°C | Jeudi: 10°C | Vendredi: 16°C\nQuelle est la température de mercredi ?',
      en: 'Here are the weekly temperatures:\nMonday: 12°C | Tuesday: 15°C | Wednesday: 14°C | Thursday: 10°C | Friday: 16°C\nWhat is the temperature on Wednesday?',
      nl: 'Hier zijn de weektemperaturen:\nMaandag: 12°C | Dinsdag: 15°C | Woensdag: 14°C | Donderdag: 10°C | Vrijdag: 16°C\nWat is de temperatuur op woensdag?',
    },
    answer: 14,
    tolerance: 0,
    hint: {
      fr: 'Lis la valeur à côté de « Mercredi ».',
      en: 'Read the value next to "Wednesday".',
      nl: 'Lees de waarde naast "Woensdag".',
    },
    commonMistake: '15',
  },
  {
    id: 'D1_002',
    category: 'D1',
    level: 1,
    text: {
      fr: 'Nombre d\'élèves par classe :\n6A: 24 | 6B: 22 | 6C: 26 | 6D: 20\nCombien d\'élèves y a-t-il en 6C ?',
      en: 'Number of students per class:\n6A: 24 | 6B: 22 | 6C: 26 | 6D: 20\nHow many students are in 6C?',
      nl: 'Aantal leerlingen per klas:\n6A: 24 | 6B: 22 | 6C: 26 | 6D: 20\nHoeveel leerlingen zitten er in 6C?',
    },
    answer: 26,
    tolerance: 0,
    hint: {
      fr: 'Cherche la valeur en face de 6C.',
      en: 'Find the value next to 6C.',
      nl: 'Zoek de waarde naast 6C.',
    },
    commonMistake: '22',
  },
  {
    id: 'D1_003',
    category: 'D1',
    level: 1,
    text: {
      fr: 'Ventes de glaces par jour :\nLundi: 30 | Mardi: 45 | Mercredi: 55 | Jeudi: 40 | Vendredi: 60\nCombien de glaces ont été vendues mardi ?',
      en: 'Ice cream sales per day:\nMonday: 30 | Tuesday: 45 | Wednesday: 55 | Thursday: 40 | Friday: 60\nHow many ice creams were sold on Tuesday?',
      nl: 'Ijsverkoop per dag:\nMaandag: 30 | Dinsdag: 45 | Woensdag: 55 | Donderdag: 40 | Vrijdag: 60\nHoeveel ijsjes werden er op dinsdag verkocht?',
    },
    answer: 45,
    tolerance: 0,
    hint: {
      fr: 'Cherche « Mardi » dans le tableau.',
      en: 'Find "Tuesday" in the table.',
      nl: 'Zoek "Dinsdag" in de tabel.',
    },
    commonMistake: '55',
  },
  {
    id: 'D1_004',
    category: 'D1',
    level: 1,
    text: {
      fr: 'Points marqués par équipe :\nÉquipe A: 18 | Équipe B: 25 | Équipe C: 12 | Équipe D: 30\nCombien de points a marqué l\'Équipe D ?',
      en: 'Points scored by team:\nTeam A: 18 | Team B: 25 | Team C: 12 | Team D: 30\nHow many points did Team D score?',
      nl: 'Punten gescoord per team:\nTeam A: 18 | Team B: 25 | Team C: 12 | Team D: 30\nHoeveel punten scoorde Team D?',
    },
    answer: 30,
    tolerance: 0,
    hint: {
      fr: 'Lis la valeur de l\'Équipe D.',
      en: 'Read the value for Team D.',
      nl: 'Lees de waarde van Team D.',
    },
    commonMistake: '25',
  },
  {
    id: 'D1_005',
    category: 'D1',
    level: 1,
    text: {
      fr: 'Distance parcourue chaque jour (en km) :\nLundi: 5 | Mardi: 8 | Mercredi: 3 | Jeudi: 7 | Vendredi: 10\nQuelle distance a été parcourue jeudi ?',
      en: 'Distance walked each day (in km):\nMonday: 5 | Tuesday: 8 | Wednesday: 3 | Thursday: 7 | Friday: 10\nWhat distance was walked on Thursday?',
      nl: 'Afgelegde afstand per dag (in km):\nMaandag: 5 | Dinsdag: 8 | Woensdag: 3 | Donderdag: 7 | Vrijdag: 10\nWelke afstand werd op donderdag afgelegd?',
    },
    answer: 7,
    tolerance: 0,
    hint: {
      fr: 'Cherche « Jeudi » dans le tableau.',
      en: 'Find "Thursday" in the table.',
      nl: 'Zoek "Donderdag" in de tabel.',
    },
    commonMistake: '8',
  },

  // ── Level 2: compare values ───────────────────────────────────────────────
  {
    id: 'D1_006',
    category: 'D1',
    level: 2,
    text: {
      fr: 'Voici les températures de la semaine :\nLundi: 12°C | Mardi: 15°C | Mercredi: 14°C | Jeudi: 10°C | Vendredi: 16°C\nQuelle est la différence entre la température la plus élevée et la plus basse ?',
      en: 'Here are the weekly temperatures:\nMonday: 12°C | Tuesday: 15°C | Wednesday: 14°C | Thursday: 10°C | Friday: 16°C\nWhat is the difference between the highest and lowest temperature?',
      nl: 'Hier zijn de weektemperaturen:\nMaandag: 12°C | Dinsdag: 15°C | Woensdag: 14°C | Donderdag: 10°C | Vrijdag: 16°C\nWat is het verschil tussen de hoogste en de laagste temperatuur?',
    },
    answer: 6,
    tolerance: 0,
    hint: {
      fr: 'Max = 16°C (vendredi), Min = 10°C (jeudi). Différence = 16 - 10.',
      en: 'Max = 16°C (Friday), Min = 10°C (Thursday). Difference = 16 - 10.',
      nl: 'Max = 16°C (vrijdag), Min = 10°C (donderdag). Verschil = 16 - 10.',
    },
    commonMistake: '4',
  },
  {
    id: 'D1_007',
    category: 'D1',
    level: 2,
    text: {
      fr: 'Nombre de livres lus par mois :\nJanvier: 4 | Février: 6 | Mars: 3 | Avril: 8 | Mai: 5\nPendant combien de mois a-t-on lu plus de 4 livres ?',
      en: 'Number of books read per month:\nJanuary: 4 | February: 6 | March: 3 | April: 8 | May: 5\nDuring how many months were more than 4 books read?',
      nl: 'Aantal gelezen boeken per maand:\nJanuari: 4 | Februari: 6 | Maart: 3 | April: 8 | Mei: 5\nGedurende hoeveel maanden werden er meer dan 4 boeken gelezen?',
    },
    answer: 3,
    tolerance: 0,
    hint: {
      fr: 'Plus de 4 : février (6), avril (8), mai (5).',
      en: 'More than 4: February (6), April (8), May (5).',
      nl: 'Meer dan 4: februari (6), april (8), mei (5).',
    },
    commonMistake: '2',
  },
  {
    id: 'D1_008',
    category: 'D1',
    level: 2,
    text: {
      fr: 'Ventes de glaces par jour :\nLundi: 30 | Mardi: 45 | Mercredi: 55 | Jeudi: 40 | Vendredi: 60\nQuel jour a-t-on vendu le moins de glaces ? Donne le nombre de glaces vendues ce jour-là.',
      en: 'Ice cream sales per day:\nMonday: 30 | Tuesday: 45 | Wednesday: 55 | Thursday: 40 | Friday: 60\nOn which day were the fewest ice creams sold? Give the number sold that day.',
      nl: 'Ijsverkoop per dag:\nMaandag: 30 | Dinsdag: 45 | Woensdag: 55 | Donderdag: 40 | Vrijdag: 60\nOp welke dag werden het minst ijsjes verkocht? Geef het aantal verkocht die dag.',
    },
    answer: 30,
    tolerance: 0,
    hint: {
      fr: 'Compare toutes les valeurs. La plus petite est le lundi.',
      en: 'Compare all values. The smallest is Monday.',
      nl: 'Vergelijk alle waarden. De kleinste is maandag.',
    },
    commonMistake: '40',
  },
  {
    id: 'D1_009',
    category: 'D1',
    level: 2,
    text: {
      fr: 'Poids des colis (en kg) :\nColis A: 3,5 | Colis B: 2,8 | Colis C: 4,1 | Colis D: 3,5 | Colis E: 1,9\nCombien de colis pèsent plus de 3 kg ?',
      en: 'Package weights (in kg):\nPackage A: 3.5 | Package B: 2.8 | Package C: 4.1 | Package D: 3.5 | Package E: 1.9\nHow many packages weigh more than 3 kg?',
      nl: 'Gewicht van pakketten (in kg):\nPakket A: 3,5 | Pakket B: 2,8 | Pakket C: 4,1 | Pakket D: 3,5 | Pakket E: 1,9\nHoeveel pakketten wegen meer dan 3 kg?',
    },
    answer: 3,
    tolerance: 0,
    hint: {
      fr: 'Plus de 3 kg : A (3,5), C (4,1), D (3,5).',
      en: 'More than 3 kg: A (3.5), C (4.1), D (3.5).',
      nl: 'Meer dan 3 kg: A (3,5), C (4,1), D (3,5).',
    },
    commonMistake: '2',
  },
  {
    id: 'D1_010',
    category: 'D1',
    level: 2,
    text: {
      fr: 'Notes d\'un élève :\nMaths: 14 | Français: 16 | Sciences: 12 | Histoire: 18 | Géo: 10\nQuelle est la différence entre sa meilleure et sa moins bonne note ?',
      en: 'Student grades:\nMaths: 14 | French: 16 | Science: 12 | History: 18 | Geo: 10\nWhat is the difference between the best and worst grade?',
      nl: 'Cijfers van een leerling:\nWiskunde: 14 | Frans: 16 | Wetenschappen: 12 | Geschiedenis: 18 | Aardrijkskunde: 10\nWat is het verschil tussen het beste en het slechtste cijfer?',
    },
    answer: 8,
    tolerance: 0,
    hint: {
      fr: 'Meilleure note : 18, moins bonne : 10. 18 - 10 = ?',
      en: 'Best grade: 18, worst: 10. 18 - 10 = ?',
      nl: 'Beste cijfer: 18, slechtste: 10. 18 - 10 = ?',
    },
    commonMistake: '6',
  },

  // ── Level 3: calculate from table ─────────────────────────────────────────
  {
    id: 'D1_011',
    category: 'D1',
    level: 3,
    text: {
      fr: 'Voici les températures de la semaine :\nLundi: 12°C | Mardi: 15°C | Mercredi: 14°C | Jeudi: 10°C | Vendredi: 16°C\nQuelle est la somme des températures de toute la semaine ?',
      en: 'Here are the weekly temperatures:\nMonday: 12°C | Tuesday: 15°C | Wednesday: 14°C | Thursday: 10°C | Friday: 16°C\nWhat is the sum of all temperatures for the week?',
      nl: 'Hier zijn de weektemperaturen:\nMaandag: 12°C | Dinsdag: 15°C | Woensdag: 14°C | Donderdag: 10°C | Vrijdag: 16°C\nWat is de som van alle temperaturen van de week?',
    },
    answer: 67,
    tolerance: 0,
    hint: {
      fr: '12 + 15 + 14 + 10 + 16 = ?',
      en: '12 + 15 + 14 + 10 + 16 = ?',
      nl: '12 + 15 + 14 + 10 + 16 = ?',
    },
    commonMistake: '57',
  },
  {
    id: 'D1_012',
    category: 'D1',
    level: 3,
    text: {
      fr: 'Ventes de glaces par jour :\nLundi: 30 | Mardi: 45 | Mercredi: 55 | Jeudi: 40 | Vendredi: 60\nCombien de glaces ont été vendues au total pendant la semaine ?',
      en: 'Ice cream sales per day:\nMonday: 30 | Tuesday: 45 | Wednesday: 55 | Thursday: 40 | Friday: 60\nHow many ice creams were sold in total during the week?',
      nl: 'Ijsverkoop per dag:\nMaandag: 30 | Dinsdag: 45 | Woensdag: 55 | Donderdag: 40 | Vrijdag: 60\nHoeveel ijsjes werden er in totaal tijdens de week verkocht?',
    },
    answer: 230,
    tolerance: 0,
    hint: {
      fr: '30 + 45 + 55 + 40 + 60 = ?',
      en: '30 + 45 + 55 + 40 + 60 = ?',
      nl: '30 + 45 + 55 + 40 + 60 = ?',
    },
    commonMistake: '220',
  },
  {
    id: 'D1_013',
    category: 'D1',
    level: 3,
    text: {
      fr: 'Prix des fruits au marché :\nPommes: 2 €/kg | Poires: 3 €/kg | Bananes: 1,5 €/kg | Oranges: 2,5 €/kg\nMarie achète 2 kg de pommes et 3 kg de bananes. Combien dépense-t-elle ?',
      en: 'Fruit prices at the market:\nApples: 2 €/kg | Pears: 3 €/kg | Bananas: 1.5 €/kg | Oranges: 2.5 €/kg\nMarie buys 2 kg of apples and 3 kg of bananas. How much does she spend?',
      nl: 'Fruitprijzen op de markt:\nAppels: 2 €/kg | Peren: 3 €/kg | Bananen: 1,5 €/kg | Sinaasappels: 2,5 €/kg\nMarie koopt 2 kg appels en 3 kg bananen. Hoeveel geeft ze uit?',
    },
    answer: 8.5,
    tolerance: 0,
    hint: {
      fr: '2 × 2 + 3 × 1,5 = 4 + 4,5 = ?',
      en: '2 × 2 + 3 × 1.5 = 4 + 4.5 = ?',
      nl: '2 × 2 + 3 × 1,5 = 4 + 4,5 = ?',
    },
    commonMistake: '7.5',
  },
  {
    id: 'D1_014',
    category: 'D1',
    level: 3,
    text: {
      fr: 'Nombre d\'élèves par classe :\n6A: 24 | 6B: 22 | 6C: 26 | 6D: 20\nQuelle est la moyenne d\'élèves par classe ?',
      en: 'Number of students per class:\n6A: 24 | 6B: 22 | 6C: 26 | 6D: 20\nWhat is the average number of students per class?',
      nl: 'Aantal leerlingen per klas:\n6A: 24 | 6B: 22 | 6C: 26 | 6D: 20\nWat is het gemiddeld aantal leerlingen per klas?',
    },
    answer: 23,
    tolerance: 0,
    hint: {
      fr: '(24 + 22 + 26 + 20) ÷ 4 = 92 ÷ 4.',
      en: '(24 + 22 + 26 + 20) ÷ 4 = 92 ÷ 4.',
      nl: '(24 + 22 + 26 + 20) ÷ 4 = 92 ÷ 4.',
    },
    commonMistake: '24',
  },
  {
    id: 'D1_015',
    category: 'D1',
    level: 3,
    text: {
      fr: 'Heures de sport par semaine :\nPierre: 3h | Léa: 5h | Tom: 2h | Sara: 6h | Max: 4h\nQuel est le total d\'heures de sport ? Et quelle est la moyenne ?',
      en: 'Hours of sport per week:\nPierre: 3h | Léa: 5h | Tom: 2h | Sara: 6h | Max: 4h\nWhat is the total hours of sport? And what is the average?',
      nl: 'Uren sport per week:\nPierre: 3u | Léa: 5u | Tom: 2u | Sara: 6u | Max: 4u\nWat is het totaal aantal uren sport? En wat is het gemiddelde?',
    },
    answer: 4,
    tolerance: 0,
    hint: {
      fr: 'Total : 3 + 5 + 2 + 6 + 4 = 20. Moyenne : 20 ÷ 5 = ?',
      en: 'Total: 3 + 5 + 2 + 6 + 4 = 20. Average: 20 ÷ 5 = ?',
      nl: 'Totaal: 3 + 5 + 2 + 6 + 4 = 20. Gemiddelde: 20 ÷ 5 = ?',
    },
    commonMistake: '5',
  },
];
