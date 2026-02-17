// =============================================================================
// P1 - Proportionality: direct proportion, cross multiply, percentages
// CE1D Belgian exam - Trilingual (FR / EN / NL)
// =============================================================================

export const questions = [
  // ── Level 1: simple direct proportionality ────────────────────────────────
  {
    id: 'P1_001',
    category: 'P1',
    level: 1,
    text: {
      fr: 'Si 1 cahier coûte 3 €, combien coûtent 5 cahiers ?',
      en: 'If 1 notebook costs 3 €, how much do 5 notebooks cost?',
      nl: 'Als 1 schrift 3 € kost, hoeveel kosten dan 5 schriften?',
    },
    answer: 15,
    tolerance: 0,
    hint: {
      fr: 'Multiplie le prix d\'un cahier par le nombre de cahiers.',
      en: 'Multiply the price of one notebook by the number of notebooks.',
      nl: 'Vermenigvuldig de prijs van één schrift met het aantal schriften.',
    },
    commonMistake: '8',
  },
  {
    id: 'P1_002',
    category: 'P1',
    level: 1,
    text: {
      fr: 'Si 2 kg de pommes coûtent 6 €, combien coûtent 4 kg ?',
      en: 'If 2 kg of apples cost 6 €, how much do 4 kg cost?',
      nl: 'Als 2 kg appels 6 € kosten, hoeveel kosten dan 4 kg?',
    },
    answer: 12,
    tolerance: 0,
    hint: {
      fr: 'Le prix double quand la quantité double.',
      en: 'The price doubles when the quantity doubles.',
      nl: 'De prijs verdubbelt als de hoeveelheid verdubbelt.',
    },
    commonMistake: '10',
  },
  {
    id: 'P1_003',
    category: 'P1',
    level: 1,
    text: {
      fr: 'Si 3 stylos coûtent 9 €, combien coûte 1 stylo ?',
      en: 'If 3 pens cost 9 €, how much does 1 pen cost?',
      nl: 'Als 3 pennen 9 € kosten, hoeveel kost dan 1 pen?',
    },
    answer: 3,
    tolerance: 0,
    hint: {
      fr: 'Divise le prix total par le nombre de stylos.',
      en: 'Divide the total price by the number of pens.',
      nl: 'Deel de totale prijs door het aantal pennen.',
    },
    commonMistake: '6',
  },
  {
    id: 'P1_004',
    category: 'P1',
    level: 1,
    text: {
      fr: 'Si 5 bonbons coûtent 10 €, combien coûtent 8 bonbons ?',
      en: 'If 5 sweets cost 10 €, how much do 8 sweets cost?',
      nl: 'Als 5 snoepjes 10 € kosten, hoeveel kosten dan 8 snoepjes?',
    },
    answer: 16,
    tolerance: 0,
    hint: {
      fr: 'Trouve d\'abord le prix d\'un bonbon : 10 ÷ 5 = 2 €.',
      en: 'First find the price of one sweet: 10 ÷ 5 = 2 €.',
      nl: 'Vind eerst de prijs van één snoepje: 10 ÷ 5 = 2 €.',
    },
    commonMistake: '13',
  },
  {
    id: 'P1_005',
    category: 'P1',
    level: 1,
    text: {
      fr: 'Une voiture parcourt 60 km en 1 heure. Combien de km parcourt-elle en 3 heures ?',
      en: 'A car travels 60 km in 1 hour. How many km does it travel in 3 hours?',
      nl: 'Een auto rijdt 60 km in 1 uur. Hoeveel km rijdt hij in 3 uur?',
    },
    answer: 180,
    tolerance: 0,
    hint: {
      fr: 'Distance = vitesse × temps.',
      en: 'Distance = speed × time.',
      nl: 'Afstand = snelheid × tijd.',
    },
    commonMistake: '120',
  },

  // ── Level 2: cross-multiply ───────────────────────────────────────────────
  {
    id: 'P1_006',
    category: 'P1',
    level: 2,
    text: {
      fr: 'Si 3 kg de riz coûtent 12 €, combien coûtent 5 kg ?',
      en: 'If 3 kg of rice cost 12 €, how much do 5 kg cost?',
      nl: 'Als 3 kg rijst 12 € kost, hoeveel kosten dan 5 kg?',
    },
    answer: 20,
    tolerance: 0,
    hint: {
      fr: 'Produit en croix : (5 × 12) ÷ 3.',
      en: 'Cross multiply: (5 × 12) ÷ 3.',
      nl: 'Kruisproduct: (5 × 12) ÷ 3.',
    },
    commonMistake: '15',
  },
  {
    id: 'P1_007',
    category: 'P1',
    level: 2,
    text: {
      fr: 'Si 4 ouvriers construisent un mur en 6 jours, combien de jours faudrait-il à 8 ouvriers ? (Même rythme de travail)',
      en: 'If 4 workers build a wall in 6 days, how many days would 8 workers need? (Same work rate)',
      nl: 'Als 4 arbeiders een muur bouwen in 6 dagen, hoeveel dagen hebben 8 arbeiders nodig? (Zelfde werktempo)',
    },
    answer: 3,
    tolerance: 0,
    hint: {
      fr: 'C\'est une proportionnalité inverse : plus d\'ouvriers = moins de jours.',
      en: 'This is inverse proportionality: more workers = fewer days.',
      nl: 'Dit is omgekeerde evenredigheid: meer arbeiders = minder dagen.',
    },
    commonMistake: '12',
  },
  {
    id: 'P1_008',
    category: 'P1',
    level: 2,
    text: {
      fr: 'Si 7 livres coûtent 42 €, combien coûtent 3 livres ?',
      en: 'If 7 books cost 42 €, how much do 3 books cost?',
      nl: 'Als 7 boeken 42 € kosten, hoeveel kosten dan 3 boeken?',
    },
    answer: 18,
    tolerance: 0,
    hint: {
      fr: 'Prix d\'un livre : 42 ÷ 7 = 6 €. Puis 6 × 3.',
      en: 'Price of one book: 42 ÷ 7 = 6 €. Then 6 × 3.',
      nl: 'Prijs per boek: 42 ÷ 7 = 6 €. Dan 6 × 3.',
    },
    commonMistake: '21',
  },
  {
    id: 'P1_009',
    category: 'P1',
    level: 2,
    text: {
      fr: 'Sur une carte à l\'échelle 1 : 1 000, une distance mesure 8 cm. Quelle est la distance réelle en mètres ?',
      en: 'On a map with scale 1:1,000, a distance measures 8 cm. What is the real distance in metres?',
      nl: 'Op een kaart met schaal 1:1.000 meet een afstand 8 cm. Wat is de werkelijke afstand in meter?',
    },
    answer: 80,
    tolerance: 0,
    hint: {
      fr: '8 cm × 1 000 = 8 000 cm = 80 m.',
      en: '8 cm × 1,000 = 8,000 cm = 80 m.',
      nl: '8 cm × 1.000 = 8.000 cm = 80 m.',
    },
    commonMistake: '8000',
  },
  {
    id: 'P1_010',
    category: 'P1',
    level: 2,
    text: {
      fr: 'Si 6 mètres de tissu coûtent 45 €, combien coûtent 10 mètres ?',
      en: 'If 6 metres of fabric cost 45 €, how much do 10 metres cost?',
      nl: 'Als 6 meter stof 45 € kost, hoeveel kosten dan 10 meter?',
    },
    answer: 75,
    tolerance: 0,
    hint: {
      fr: 'Produit en croix : (10 × 45) ÷ 6 = 450 ÷ 6.',
      en: 'Cross multiply: (10 × 45) ÷ 6 = 450 ÷ 6.',
      nl: 'Kruisproduct: (10 × 45) ÷ 6 = 450 ÷ 6.',
    },
    commonMistake: '51',
  },

  // ── Level 3: percentages ──────────────────────────────────────────────────
  {
    id: 'P1_011',
    category: 'P1',
    level: 3,
    text: {
      fr: 'Combien font 25 % de 80 ?',
      en: 'What is 25% of 80?',
      nl: 'Hoeveel is 25% van 80?',
    },
    answer: 20,
    tolerance: 0,
    hint: {
      fr: '25 % = un quart. 80 ÷ 4 = 20.',
      en: '25% = one quarter. 80 ÷ 4 = 20.',
      nl: '25% = een kwart. 80 ÷ 4 = 20.',
    },
    commonMistake: '25',
  },
  {
    id: 'P1_012',
    category: 'P1',
    level: 3,
    text: {
      fr: 'Un article coûte 60 €. Il est en solde à -20 %. Quel est le nouveau prix ?',
      en: 'An item costs 60 €. It is on sale at -20%. What is the new price?',
      nl: 'Een artikel kost 60 €. Het is in de solden met -20%. Wat is de nieuwe prijs?',
    },
    answer: 48,
    tolerance: 0,
    hint: {
      fr: 'Réduction : 60 × 20 ÷ 100 = 12 €. Nouveau prix : 60 - 12.',
      en: 'Discount: 60 × 20 ÷ 100 = 12 €. New price: 60 - 12.',
      nl: 'Korting: 60 × 20 ÷ 100 = 12 €. Nieuwe prijs: 60 - 12.',
    },
    commonMistake: '12',
  },
  {
    id: 'P1_013',
    category: 'P1',
    level: 3,
    text: {
      fr: 'Dans une classe de 30 élèves, 60 % sont des filles. Combien y a-t-il de filles ?',
      en: 'In a class of 30 students, 60% are girls. How many girls are there?',
      nl: 'In een klas van 30 leerlingen is 60% meisjes. Hoeveel meisjes zijn er?',
    },
    answer: 18,
    tolerance: 0,
    hint: {
      fr: '30 × 60 ÷ 100 = 1 800 ÷ 100.',
      en: '30 × 60 ÷ 100 = 1,800 ÷ 100.',
      nl: '30 × 60 ÷ 100 = 1.800 ÷ 100.',
    },
    commonMistake: '20',
  },
  {
    id: 'P1_014',
    category: 'P1',
    level: 3,
    text: {
      fr: 'Combien font 10 % de 250 ?',
      en: 'What is 10% of 250?',
      nl: 'Hoeveel is 10% van 250?',
    },
    answer: 25,
    tolerance: 0,
    hint: {
      fr: '10 % = diviser par 10.',
      en: '10% = divide by 10.',
      nl: '10% = delen door 10.',
    },
    commonMistake: '2.5',
  },
  {
    id: 'P1_015',
    category: 'P1',
    level: 3,
    text: {
      fr: 'Un prix augmente de 150 € à 180 €. Quel est le pourcentage d\'augmentation ?',
      en: 'A price increases from 150 € to 180 €. What is the percentage increase?',
      nl: 'Een prijs stijgt van 150 € naar 180 €. Wat is het stijgingspercentage?',
    },
    answer: 20,
    tolerance: 0,
    hint: {
      fr: 'Augmentation : 180 - 150 = 30 €. Pourcentage : (30 ÷ 150) × 100.',
      en: 'Increase: 180 - 150 = 30 €. Percentage: (30 ÷ 150) × 100.',
      nl: 'Stijging: 180 - 150 = 30 €. Percentage: (30 ÷ 150) × 100.',
    },
    commonMistake: '30',
  },

  // ── Level 1: CE1D-inspired ───────────────────────────────────────────────
  {
    id: 'P1_017',
    category: 'P1',
    level: 1,
    text: {
      fr: 'Un budget loisirs est de 3200 €. Les spectacles représentent 17 %. Combien coûtent les spectacles ?',
      en: 'A leisure budget is 3200 €. Shows represent 17%. How much do the shows cost?',
      nl: 'Een vrijetijdsbudget bedraagt 3200 €. Voorstellingen zijn 17%. Hoeveel kosten de voorstellingen?',
    },
    answer: 544,
    tolerance: 0,
    hint: {
      fr: '3200 × 17 ÷ 100 = 544.',
      en: '3200 × 17 ÷ 100 = 544.',
      nl: '3200 × 17 ÷ 100 = 544.',
    },
    commonMistake: '320',
  },
  {
    id: 'P1_018',
    category: 'P1',
    level: 1,
    text: {
      fr: 'Un budget total est de 36 000 €. L\'alimentation coûte 10 000 €. Quel est l\'angle en degrés dans un diagramme circulaire ?',
      en: 'A total budget is 36,000 €. Food costs 10,000 €. What is the angle in degrees in a pie chart?',
      nl: 'Een totaal budget is 36.000 €. Voeding kost 10.000 €. Wat is de hoek in graden in een cirkeldiagram?',
    },
    answer: 100,
    tolerance: 0,
    hint: {
      fr: 'Angle = (10 000 ÷ 36 000) × 360 = 100°.',
      en: 'Angle = (10,000 ÷ 36,000) × 360 = 100°.',
      nl: 'Hoek = (10.000 ÷ 36.000) × 360 = 100°.',
    },
    commonMistake: '28',
  },

  // ── Level 2: CE1D-inspired ───────────────────────────────────────────────
  {
    id: 'P1_019',
    category: 'P1',
    level: 2,
    text: {
      fr: 'Sur 2400 ados sondés : 560 prennent des photos, 1120 écoutent de la musique et 720 jouent à des jeux. Combien jouent à des jeux ?',
      en: 'Out of 2400 surveyed teens: 560 take photos, 1120 listen to music and 720 play games. How many play games?',
      nl: 'Van 2400 ondervraagde tieners: 560 nemen foto\'s, 1120 luisteren muziek en 720 spelen games. Hoeveel spelen games?',
    },
    answer: 720,
    tolerance: 0,
    hint: {
      fr: 'La réponse est directement dans les données : 720 jouent à des jeux.',
      en: 'The answer is directly in the data: 720 play games.',
      nl: 'Het antwoord staat direct in de gegevens: 720 spelen games.',
    },
    commonMistake: '560',
  },
  {
    id: 'P1_020',
    category: 'P1',
    level: 2,
    text: {
      fr: 'Un musée accueille 2160 visiteurs. 228 visitent le Musée de musique. Quel angle en degrés dans un diagramme circulaire ?',
      en: 'A museum welcomes 2160 visitors. 228 visit the Music Museum. What angle in degrees in a pie chart?',
      nl: 'Een museum ontvangt 2160 bezoekers. 228 bezoeken het Muziekmuseum. Welke hoek in graden in een cirkeldiagram?',
    },
    answer: 38,
    tolerance: 0,
    hint: {
      fr: 'Angle = (228 ÷ 2160) × 360 = 38°.',
      en: 'Angle = (228 ÷ 2160) × 360 = 38°.',
      nl: 'Hoek = (228 ÷ 2160) × 360 = 38°.',
    },
    commonMistake: '10',
  },

  // ── Level 3: CE1D-inspired ───────────────────────────────────────────────
  {
    id: 'P1_021',
    category: 'P1',
    level: 3,
    text: {
      fr: '1296 personnes sont blessées. Les automobilistes représentent 4/9 du total. Combien d\'automobilistes sont blessés ?',
      en: '1296 people are injured. Motorists represent 4/9 of the total. How many motorists are injured?',
      nl: '1296 mensen zijn gewond. Automobilisten vertegenwoordigen 4/9 van het totaal. Hoeveel automobilisten zijn gewond?',
    },
    answer: 576,
    tolerance: 0,
    hint: {
      fr: '1296 ÷ 9 = 144. Puis 144 × 4 = 576.',
      en: '1296 ÷ 9 = 144. Then 144 × 4 = 576.',
      nl: '1296 ÷ 9 = 144. Dan 144 × 4 = 576.',
    },
    commonMistake: '324',
  },
  {
    id: 'P1_022',
    category: 'P1',
    level: 3,
    text: {
      fr: '12 800 véhicules passent en une journée. Entre 15h et 18h : 2200 de 15h à 16h, 4000 de 16h à 17h et 3400 de 17h à 18h. Quel est le total entre 15h et 18h ?',
      en: '12,800 vehicles pass in one day. Between 3pm and 6pm: 2200 from 3pm to 4pm, 4000 from 4pm to 5pm and 3400 from 5pm to 6pm. What is the total between 3pm and 6pm?',
      nl: '12.800 voertuigen passeren op een dag. Tussen 15u en 18u: 2200 van 15u tot 16u, 4000 van 16u tot 17u en 3400 van 17u tot 18u. Wat is het totaal tussen 15u en 18u?',
    },
    answer: 9600,
    tolerance: 0,
    hint: {
      fr: '2200 + 4000 + 3400 = ?',
      en: '2200 + 4000 + 3400 = ?',
      nl: '2200 + 4000 + 3400 = ?',
    },
    commonMistake: '12800',
  },
];

/**
 * Procedural generator for P1 questions.
 * CE1D-inspired: proportionality, percentages, pie charts, fractions.
 * @param {1|2|3} level
 * @returns {object} A single question object
 */
export function generate(level = 1) {
  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const pick = (arr) => arr[rand(0, arr.length - 1)];
  const id = `P1_gen_${Date.now()}_${rand(100, 999)}`;

  if (level === 1) {
    const type = rand(0, 2);

    if (type === 0) {
      // Unit price × quantity
      const items = [
        { fr: 'cahiers', en: 'notebooks', nl: 'schriften' },
        { fr: 'stylos', en: 'pens', nl: 'pennen' },
        { fr: 'livres', en: 'books', nl: 'boeken' },
        { fr: 'billets', en: 'tickets', nl: 'kaartjes' },
        { fr: 'bouteilles', en: 'bottles', nl: 'flessen' },
      ];
      const item = pick(items);
      const unitPrice = rand(2, 10);
      const qty = rand(3, 9);
      const answer = unitPrice * qty;
      return {
        id, category: 'P1', level: 1,
        text: {
          fr: `Si 1 ${item.fr.replace(/s$/, '')} coûte ${unitPrice} €, combien coûtent ${qty} ${item.fr} ?`,
          en: `If 1 ${item.en.replace(/s$/, '')} costs ${unitPrice} €, how much do ${qty} ${item.en} cost?`,
          nl: `Als 1 ${item.nl.replace(/s$/, '').replace(/en$/, '')} ${unitPrice} € kost, hoeveel kosten dan ${qty} ${item.nl}?`,
        },
        answer,
        tolerance: 0,
        hint: { fr: `${unitPrice} × ${qty} = ?`, en: `${unitPrice} × ${qty} = ?`, nl: `${unitPrice} × ${qty} = ?` },
        commonMistake: String(unitPrice + qty),
      };
    }

    if (type === 1) {
      // Percentage of budget (CE1D-inspired)
      const budgets = [200, 400, 500, 800, 1000, 1200, 1600, 2000, 3000];
      const budget = pick(budgets);
      const pct = pick([5, 10, 20, 25, 50]);
      const answer = budget * pct / 100;
      const ctx = pick([
        { fr: 'budget loisirs', en: 'leisure budget', nl: 'vrijetijdsbudget' },
        { fr: 'budget familial', en: 'family budget', nl: 'gezinsbudget' },
      ]);
      const item = pick([
        { fr: 'les sorties', en: 'outings', nl: 'uitjes' },
        { fr: 'le sport', en: 'sports', nl: 'sport' },
        { fr: 'les spectacles', en: 'shows', nl: 'voorstellingen' },
      ]);
      return {
        id, category: 'P1', level: 1,
        text: {
          fr: `Un ${ctx.fr} est de ${budget} €. ${item.fr[0].toUpperCase() + item.fr.slice(1)} représentent ${pct} %. Combien cela fait-il ?`,
          en: `A ${ctx.en} is ${budget} €. ${item.en[0].toUpperCase() + item.en.slice(1)} represent ${pct}%. How much is that?`,
          nl: `Een ${ctx.nl} bedraagt ${budget} €. ${item.nl[0].toUpperCase() + item.nl.slice(1)} vertegenwoordigen ${pct}%. Hoeveel is dat?`,
        },
        answer,
        tolerance: 0,
        hint: { fr: `${budget} × ${pct} ÷ 100 = ?`, en: `${budget} × ${pct} ÷ 100 = ?`, nl: `${budget} × ${pct} ÷ 100 = ?` },
        commonMistake: String(budget),
      };
    }

    // Find unit price from bulk
    const unitPrice = rand(2, 8);
    const qty = rand(2, 6);
    const totalPrice = unitPrice * qty;
    const item = pick([
      { fr: 'bouteilles', en: 'bottles', nl: 'flessen' },
      { fr: 'sandwiches', en: 'sandwiches', nl: 'broodjes' },
      { fr: 'billets', en: 'tickets', nl: 'kaartjes' },
    ]);
    return {
      id, category: 'P1', level: 1,
      text: {
        fr: `Si ${qty} ${item.fr} coûtent ${totalPrice} €, combien coûte 1 seul ?`,
        en: `If ${qty} ${item.en} cost ${totalPrice} €, how much does 1 cost?`,
        nl: `Als ${qty} ${item.nl} ${totalPrice} € kosten, hoeveel kost er dan 1?`,
      },
      answer: unitPrice,
      tolerance: 0,
      hint: { fr: `${totalPrice} ÷ ${qty} = ?`, en: `${totalPrice} ÷ ${qty} = ?`, nl: `${totalPrice} ÷ ${qty} = ?` },
      commonMistake: String(totalPrice),
    };
  }

  if (level === 2) {
    const type = rand(0, 2);

    if (type === 0) {
      // Cross-multiply
      const unitPrice = rand(2, 8);
      const qtyA = rand(2, 6);
      const priceA = unitPrice * qtyA;
      let qtyB = rand(3, 10);
      if (qtyB === qtyA) qtyB = qtyA + 2;
      const answer = unitPrice * qtyB;
      const item = pick([
        { fr: 'kg de riz', en: 'kg of rice', nl: 'kg rijst' },
        { fr: 'mètres de tissu', en: 'metres of fabric', nl: 'meter stof' },
        { fr: 'livres', en: 'books', nl: 'boeken' },
      ]);
      return {
        id, category: 'P1', level: 2,
        text: {
          fr: `Si ${qtyA} ${item.fr} coûtent ${priceA} €, combien coûtent ${qtyB} ${item.fr} ?`,
          en: `If ${qtyA} ${item.en} cost ${priceA} €, how much do ${qtyB} ${item.en} cost?`,
          nl: `Als ${qtyA} ${item.nl} ${priceA} € kosten, hoeveel kosten dan ${qtyB} ${item.nl}?`,
        },
        answer,
        tolerance: 0,
        hint: {
          fr: `Prix unitaire : ${priceA} ÷ ${qtyA} = ${unitPrice}. Puis ${unitPrice} × ${qtyB}.`,
          en: `Unit price: ${priceA} ÷ ${qtyA} = ${unitPrice}. Then ${unitPrice} × ${qtyB}.`,
          nl: `Eenheidsprijs: ${priceA} ÷ ${qtyA} = ${unitPrice}. Dan ${unitPrice} × ${qtyB}.`,
        },
        commonMistake: String(priceA + qtyB),
      };
    }

    if (type === 1) {
      // Pie chart angle (CE1D-inspired)
      const angles = [10, 15, 20, 24, 30, 36, 40, 45, 60, 72, 90, 120];
      const angle = pick(angles);
      const totals = [360, 720, 1080, 1440, 1800, 2160, 3600];
      const total = pick(totals);
      const part = Math.round(total * angle / 360);
      const ctx = pick([
        { fr: 'visiteurs d\'un musée', en: 'museum visitors', nl: 'museumbezoekers' },
        { fr: 'élèves d\'une école', en: 'school students', nl: 'leerlingen van een school' },
      ]);
      const cat = pick([
        { fr: 'aiment les sciences', en: 'like science', nl: 'houden van wetenschappen' },
        { fr: 'pratiquent un sport', en: 'play a sport', nl: 'beoefenen een sport' },
      ]);
      return {
        id, category: 'P1', level: 2,
        text: {
          fr: `Sur ${total} ${ctx.fr}, ${part} ${cat.fr}. Quel angle en degrés dans un diagramme circulaire ?`,
          en: `Out of ${total} ${ctx.en}, ${part} ${cat.en}. What angle in degrees in a pie chart?`,
          nl: `Van ${total} ${ctx.nl}, ${part} ${cat.nl}. Welke hoek in graden in een cirkeldiagram?`,
        },
        answer: angle,
        tolerance: 0,
        hint: {
          fr: `Angle = (${part} ÷ ${total}) × 360.`,
          en: `Angle = (${part} ÷ ${total}) × 360.`,
          nl: `Hoek = (${part} ÷ ${total}) × 360.`,
        },
        commonMistake: String(Math.round(part / total * 100)),
      };
    }

    // Map scale
    const scales = [100, 200, 500, 1000, 2000];
    const scale = pick(scales);
    const cmOnMap = rand(3, 15);
    const realM = cmOnMap * scale / 100;
    return {
      id, category: 'P1', level: 2,
      text: {
        fr: `Sur une carte à l'échelle 1 : ${scale}, une distance mesure ${cmOnMap} cm. Quelle est la distance réelle en mètres ?`,
        en: `On a map with scale 1:${scale}, a distance measures ${cmOnMap} cm. What is the real distance in metres?`,
        nl: `Op een kaart met schaal 1:${scale} meet een afstand ${cmOnMap} cm. Wat is de werkelijke afstand in meter?`,
      },
      answer: realM,
      tolerance: 0,
      hint: {
        fr: `${cmOnMap} cm × ${scale} = ${cmOnMap * scale} cm = ${realM} m.`,
        en: `${cmOnMap} cm × ${scale} = ${cmOnMap * scale} cm = ${realM} m.`,
        nl: `${cmOnMap} cm × ${scale} = ${cmOnMap * scale} cm = ${realM} m.`,
      },
      commonMistake: String(cmOnMap * scale),
    };
  }

  // Level 3
  const type = rand(0, 2);

  if (type === 0) {
    // Percentage of amount
    const base = pick([40, 50, 60, 80, 100, 120, 200, 250, 300, 400, 500]);
    const pct = pick([10, 20, 50]);
    const answer = base * pct / 100;
    return {
      id, category: 'P1', level: 3,
      text: {
        fr: `Combien font ${pct} % de ${base} ?`,
        en: `What is ${pct}% of ${base}?`,
        nl: `Hoeveel is ${pct}% van ${base}?`,
      },
      answer,
      tolerance: 0,
      hint: { fr: `${base} × ${pct} ÷ 100 = ?`, en: `${base} × ${pct} ÷ 100 = ?`, nl: `${base} × ${pct} ÷ 100 = ?` },
      commonMistake: String(base - answer),
    };
  }

  if (type === 1) {
    // Discount price
    const prices = [40, 50, 60, 80, 100, 120, 150, 200];
    const price = pick(prices);
    const discPct = pick([10, 20, 25, 50]);
    const discount = price * discPct / 100;
    const answer = price - discount;
    return {
      id, category: 'P1', level: 3,
      text: {
        fr: `Un article coûte ${price} €. Il est en solde à -${discPct} %. Quel est le nouveau prix ?`,
        en: `An item costs ${price} €. It is on sale at -${discPct}%. What is the new price?`,
        nl: `Een artikel kost ${price} €. Het is in de solden met -${discPct}%. Wat is de nieuwe prijs?`,
      },
      answer,
      tolerance: 0,
      hint: {
        fr: `Réduction : ${price} × ${discPct} ÷ 100 = ${discount} €. Nouveau prix : ${price} - ${discount}.`,
        en: `Discount: ${price} × ${discPct} ÷ 100 = ${discount} €. New price: ${price} - ${discount}.`,
        nl: `Korting: ${price} × ${discPct} ÷ 100 = ${discount} €. Nieuwe prijs: ${price} - ${discount}.`,
      },
      commonMistake: String(discount),
    };
  }

  // Fraction of total (CE1D-inspired)
  const denom = pick([3, 4, 5, 6, 8, 9]);
  const numer = rand(1, denom - 1);
  const totalBase = rand(2, 15) * denom;
  const answer = totalBase * numer / denom;
  const ctx = pick([
    { fr: 'personnes sont blessées', en: 'people are injured', nl: 'mensen zijn gewond' },
    { fr: 'élèves participent', en: 'students participate', nl: 'leerlingen doen mee' },
    { fr: 'arbres sont plantés', en: 'trees are planted', nl: 'bomen worden geplant' },
  ]);
  const group = pick([
    { fr: 'automobilistes', en: 'motorists', nl: 'automobilisten' },
    { fr: 'garçons', en: 'boys', nl: 'jongens' },
    { fr: 'feuillus', en: 'deciduous trees', nl: 'loofbomen' },
  ]);
  return {
    id, category: 'P1', level: 3,
    text: {
      fr: `${totalBase} ${ctx.fr}. Les ${group.fr} représentent ${numer}/${denom} du total. Combien de ${group.fr} ?`,
      en: `${totalBase} ${ctx.en}. The ${group.en} represent ${numer}/${denom} of the total. How many ${group.en}?`,
      nl: `${totalBase} ${ctx.nl}. De ${group.nl} vertegenwoordigen ${numer}/${denom} van het totaal. Hoeveel ${group.nl}?`,
    },
    answer,
    tolerance: 0,
    hint: {
      fr: `${totalBase} ÷ ${denom} = ${totalBase / denom}. Puis × ${numer} = ?`,
      en: `${totalBase} ÷ ${denom} = ${totalBase / denom}. Then × ${numer} = ?`,
      nl: `${totalBase} ÷ ${denom} = ${totalBase / denom}. Dan × ${numer} = ?`,
    },
    commonMistake: String(totalBase / denom),
  };
}
