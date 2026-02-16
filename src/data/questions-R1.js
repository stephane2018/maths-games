// =============================================================================
// R1 - Word Problems & Reasoning
// CE1D Belgian exam - Trilingual (FR / EN / NL)
// All static questions
// =============================================================================

export const questions = [
  // ── Level 1: 1-step problems ──────────────────────────────────────────────
  {
    id: 'R1_001',
    category: 'R1',
    level: 1,
    text: {
      fr: 'Marie a 24 billes. Elle en donne 9 à son ami. Combien de billes lui reste-t-il ?',
      en: 'Marie has 24 marbles. She gives 9 to her friend. How many marbles does she have left?',
      nl: 'Marie heeft 24 knikkers. Ze geeft er 9 aan haar vriend. Hoeveel knikkers heeft ze nog?',
    },
    answer: 15,
    tolerance: 0,
    hint: {
      fr: '24 - 9 = ?',
      en: '24 - 9 = ?',
      nl: '24 - 9 = ?',
    },
    commonMistake: '33',
  },
  {
    id: 'R1_002',
    category: 'R1',
    level: 1,
    text: {
      fr: 'Un fermier a 35 poules et 18 canards. Combien d\'animaux a-t-il en tout ?',
      en: 'A farmer has 35 chickens and 18 ducks. How many animals does he have in total?',
      nl: 'Een boer heeft 35 kippen en 18 eenden. Hoeveel dieren heeft hij in totaal?',
    },
    answer: 53,
    tolerance: 0,
    hint: {
      fr: '35 + 18 = ?',
      en: '35 + 18 = ?',
      nl: '35 + 18 = ?',
    },
    commonMistake: '43',
  },
  {
    id: 'R1_003',
    category: 'R1',
    level: 1,
    text: {
      fr: 'Tom achète 6 paquets de 8 biscuits. Combien de biscuits a-t-il ?',
      en: 'Tom buys 6 packs of 8 biscuits. How many biscuits does he have?',
      nl: 'Tom koopt 6 pakken van 8 koekjes. Hoeveel koekjes heeft hij?',
    },
    answer: 48,
    tolerance: 0,
    hint: {
      fr: '6 × 8 = ?',
      en: '6 × 8 = ?',
      nl: '6 × 8 = ?',
    },
    commonMistake: '14',
  },
  {
    id: 'R1_004',
    category: 'R1',
    level: 1,
    text: {
      fr: 'On partage 42 bonbons entre 7 enfants de manière égale. Combien de bonbons chaque enfant reçoit-il ?',
      en: '42 sweets are shared equally among 7 children. How many sweets does each child get?',
      nl: '42 snoepjes worden gelijk verdeeld onder 7 kinderen. Hoeveel snoepjes krijgt elk kind?',
    },
    answer: 6,
    tolerance: 0,
    hint: {
      fr: '42 ÷ 7 = ?',
      en: '42 ÷ 7 = ?',
      nl: '42 ÷ 7 = ?',
    },
    commonMistake: '7',
  },
  {
    id: 'R1_005',
    category: 'R1',
    level: 1,
    text: {
      fr: 'Léa mesure 132 cm. Sa petite soeur mesure 98 cm. Quelle est la différence de taille en cm ?',
      en: 'Léa is 132 cm tall. Her little sister is 98 cm tall. What is the height difference in cm?',
      nl: 'Léa is 132 cm groot. Haar kleine zus is 98 cm groot. Wat is het lengteverschil in cm?',
    },
    answer: 34,
    tolerance: 0,
    hint: {
      fr: '132 - 98 = ?',
      en: '132 - 98 = ?',
      nl: '132 - 98 = ?',
    },
    commonMistake: '44',
  },

  // ── Level 2: 2-step problems ──────────────────────────────────────────────
  {
    id: 'R1_006',
    category: 'R1',
    level: 2,
    text: {
      fr: 'Lucas a 50 €. Il achète un livre à 12 € et un stylo à 3 €. Combien d\'argent lui reste-t-il ?',
      en: 'Lucas has 50 €. He buys a book for 12 € and a pen for 3 €. How much money does he have left?',
      nl: 'Lucas heeft 50 €. Hij koopt een boek van 12 € en een pen van 3 €. Hoeveel geld heeft hij nog over?',
    },
    answer: 35,
    tolerance: 0,
    hint: {
      fr: 'D\'abord calcule le total des achats : 12 + 3 = 15. Puis 50 - 15.',
      en: 'First calculate total purchases: 12 + 3 = 15. Then 50 - 15.',
      nl: 'Bereken eerst het totaal van de aankopen: 12 + 3 = 15. Dan 50 - 15.',
    },
    commonMistake: '38',
  },
  {
    id: 'R1_007',
    category: 'R1',
    level: 2,
    text: {
      fr: 'Une classe de 28 élèves fait une sortie. Le bus coûte 84 € et l\'entrée au musée coûte 3 € par élève. Quel est le coût total ?',
      en: 'A class of 28 students goes on a trip. The bus costs 84 € and museum entry costs 3 € per student. What is the total cost?',
      nl: 'Een klas van 28 leerlingen maakt een uitstap. De bus kost 84 € en de toegang tot het museum kost 3 € per leerling. Wat zijn de totale kosten?',
    },
    answer: 168,
    tolerance: 0,
    hint: {
      fr: 'Entrées : 28 × 3 = 84 €. Total : 84 + 84 = ?',
      en: 'Entries: 28 × 3 = 84 €. Total: 84 + 84 = ?',
      nl: 'Toegang: 28 × 3 = 84 €. Totaal: 84 + 84 = ?',
    },
    commonMistake: '112',
  },
  {
    id: 'R1_008',
    category: 'R1',
    level: 2,
    text: {
      fr: 'Sophie a 3 fois plus de cartes que Paul. Paul a 15 cartes. Combien ont-ils de cartes ensemble ?',
      en: 'Sophie has 3 times as many cards as Paul. Paul has 15 cards. How many cards do they have together?',
      nl: 'Sophie heeft 3 keer zoveel kaarten als Paul. Paul heeft 15 kaarten. Hoeveel kaarten hebben ze samen?',
    },
    answer: 60,
    tolerance: 0,
    hint: {
      fr: 'Sophie : 3 × 15 = 45 cartes. Ensemble : 45 + 15 = ?',
      en: 'Sophie: 3 × 15 = 45 cards. Together: 45 + 15 = ?',
      nl: 'Sophie: 3 × 15 = 45 kaarten. Samen: 45 + 15 = ?',
    },
    commonMistake: '45',
  },
  {
    id: 'R1_009',
    category: 'R1',
    level: 2,
    text: {
      fr: 'Un boulanger prépare 12 tartes par jour. Après 5 jours, il en a vendu 48. Combien lui en reste-t-il ?',
      en: 'A baker makes 12 pies per day. After 5 days, he has sold 48. How many does he have left?',
      nl: 'Een bakker maakt 12 taarten per dag. Na 5 dagen heeft hij er 48 verkocht. Hoeveel heeft hij er nog?',
    },
    answer: 12,
    tolerance: 0,
    hint: {
      fr: 'Total produit : 12 × 5 = 60. Reste : 60 - 48 = ?',
      en: 'Total made: 12 × 5 = 60. Left: 60 - 48 = ?',
      nl: 'Totaal gemaakt: 12 × 5 = 60. Over: 60 - 48 = ?',
    },
    commonMistake: '8',
  },
  {
    id: 'R1_010',
    category: 'R1',
    level: 2,
    text: {
      fr: 'Maman achète 4 paquets de yaourts à 6 yaourts par paquet. La famille mange 5 yaourts par jour. Pour combien de jours complets ont-ils assez ?',
      en: 'Mom buys 4 packs of yogurts with 6 yogurts per pack. The family eats 5 yogurts per day. For how many complete days do they have enough?',
      nl: 'Mama koopt 4 pakken yoghurt met 6 yoghurt per pak. De familie eet 5 yoghurts per dag. Voor hoeveel volledige dagen hebben ze genoeg?',
    },
    answer: 4,
    tolerance: 0,
    hint: {
      fr: 'Total : 4 × 6 = 24 yaourts. 24 ÷ 5 = 4 reste 4. Donc 4 jours complets.',
      en: 'Total: 4 × 6 = 24 yogurts. 24 ÷ 5 = 4 remainder 4. So 4 complete days.',
      nl: 'Totaal: 4 × 6 = 24 yoghurts. 24 ÷ 5 = 4 rest 4. Dus 4 volledige dagen.',
    },
    commonMistake: '5',
  },

  // ── Level 3: multi-step problems ──────────────────────────────────────────
  {
    id: 'R1_011',
    category: 'R1',
    level: 3,
    text: {
      fr: 'Un magasin vend des T-shirts à 15 € et des pantalons à 35 €. Julie achète 3 T-shirts et 2 pantalons. Elle a une réduction de 10 €. Combien paie-t-elle ?',
      en: 'A store sells T-shirts for 15 € and trousers for 35 €. Julie buys 3 T-shirts and 2 pairs of trousers. She has a 10 € discount. How much does she pay?',
      nl: 'Een winkel verkoopt T-shirts voor 15 € en broeken voor 35 €. Julie koopt 3 T-shirts en 2 broeken. Ze heeft 10 € korting. Hoeveel betaalt ze?',
    },
    answer: 105,
    tolerance: 0,
    hint: {
      fr: 'T-shirts : 3 × 15 = 45 €. Pantalons : 2 × 35 = 70 €. Total : 45 + 70 - 10 = ?',
      en: 'T-shirts: 3 × 15 = 45 €. Trousers: 2 × 35 = 70 €. Total: 45 + 70 - 10 = ?',
      nl: 'T-shirts: 3 × 15 = 45 €. Broeken: 2 × 35 = 70 €. Totaal: 45 + 70 - 10 = ?',
    },
    commonMistake: '115',
  },
  {
    id: 'R1_012',
    category: 'R1',
    level: 3,
    text: {
      fr: 'Pierre fait un trajet en 3 étapes : 25 km en vélo, 120 km en train et 8 km à pied. Il met 1 heure en vélo, 1h30 en train et 2 heures à pied. Quelle est la distance totale en km ?',
      en: 'Pierre makes a trip in 3 stages: 25 km by bike, 120 km by train and 8 km on foot. He takes 1 hour by bike, 1h30 by train and 2 hours on foot. What is the total distance in km?',
      nl: 'Pierre maakt een reis in 3 etappes: 25 km met de fiets, 120 km met de trein en 8 km te voet. Hij doet 1 uur met de fiets, 1u30 met de trein en 2 uur te voet. Wat is de totale afstand in km?',
    },
    answer: 153,
    tolerance: 0,
    hint: {
      fr: 'Additionne les distances : 25 + 120 + 8 = ?',
      en: 'Add the distances: 25 + 120 + 8 = ?',
      nl: 'Tel de afstanden op: 25 + 120 + 8 = ?',
    },
    commonMistake: '145',
  },
  {
    id: 'R1_013',
    category: 'R1',
    level: 3,
    text: {
      fr: 'Une piscine rectangulaire mesure 25 m de long et 10 m de large. On veut installer une clôture tout autour avec un portail de 2 m. Quelle longueur de clôture faut-il (sans le portail) ?',
      en: 'A rectangular pool is 25 m long and 10 m wide. A fence is to be installed all around with a 2 m gate. How much fencing is needed (excluding the gate)?',
      nl: 'Een rechthoekig zwembad is 25 m lang en 10 m breed. Er wordt een omheining geplaatst met een poort van 2 m. Hoeveel omheining is er nodig (zonder de poort)?',
    },
    answer: 68,
    tolerance: 0,
    hint: {
      fr: 'Périmètre : 2 × (25 + 10) = 70 m. Moins le portail : 70 - 2 = ?',
      en: 'Perimeter: 2 × (25 + 10) = 70 m. Minus the gate: 70 - 2 = ?',
      nl: 'Omtrek: 2 × (25 + 10) = 70 m. Min de poort: 70 - 2 = ?',
    },
    commonMistake: '70',
  },
  {
    id: 'R1_014',
    category: 'R1',
    level: 3,
    text: {
      fr: 'Un ciné propose des tarifs : enfant 6 €, adulte 10 €. La famille Martin (2 adultes, 3 enfants) y va. Ils achètent aussi 2 popcorns à 4 € chacun. Combien dépensent-ils au total ?',
      en: 'A cinema charges: child 6 €, adult 10 €. The Martin family (2 adults, 3 children) goes. They also buy 2 popcorns at 4 € each. How much do they spend in total?',
      nl: 'Een bioscoop vraagt: kind 6 €, volwassene 10 €. De familie Martin (2 volwassenen, 3 kinderen) gaat. Ze kopen ook 2 popcorns van 4 € elk. Hoeveel geven ze in totaal uit?',
    },
    answer: 46,
    tolerance: 0,
    hint: {
      fr: 'Adultes : 2 × 10 = 20. Enfants : 3 × 6 = 18. Popcorn : 2 × 4 = 8. Total : 20 + 18 + 8 = ?',
      en: 'Adults: 2 × 10 = 20. Children: 3 × 6 = 18. Popcorn: 2 × 4 = 8. Total: 20 + 18 + 8 = ?',
      nl: 'Volwassenen: 2 × 10 = 20. Kinderen: 3 × 6 = 18. Popcorn: 2 × 4 = 8. Totaal: 20 + 18 + 8 = ?',
    },
    commonMistake: '38',
  },
  {
    id: 'R1_015',
    category: 'R1',
    level: 3,
    text: {
      fr: 'Un jardinier plante 8 rangées de 12 tulipes et 5 rangées de 10 roses. Un orage détruit 15 fleurs. Combien de fleurs lui reste-t-il ?',
      en: 'A gardener plants 8 rows of 12 tulips and 5 rows of 10 roses. A storm destroys 15 flowers. How many flowers are left?',
      nl: 'Een tuinier plant 8 rijen van 12 tulpen en 5 rijen van 10 rozen. Een storm vernielt 15 bloemen. Hoeveel bloemen heeft hij nog?',
    },
    answer: 131,
    tolerance: 0,
    hint: {
      fr: 'Tulipes : 8 × 12 = 96. Roses : 5 × 10 = 50. Total : 96 + 50 = 146. Après l\'orage : 146 - 15 = ?',
      en: 'Tulips: 8 × 12 = 96. Roses: 5 × 10 = 50. Total: 96 + 50 = 146. After the storm: 146 - 15 = ?',
      nl: 'Tulpen: 8 × 12 = 96. Rozen: 5 × 10 = 50. Totaal: 96 + 50 = 146. Na de storm: 146 - 15 = ?',
    },
    commonMistake: '146',
  },
];
