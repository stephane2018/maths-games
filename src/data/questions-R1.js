// =============================================================================
// R1 - Word Problems & Reasoning
// CE1D Belgian exam - Trilingual (FR / EN / NL)
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

  // ── Level 2: CE1D-inspired ───────────────────────────────────────────────
  {
    id: 'R1_016',
    category: 'R1',
    level: 2,
    text: {
      fr: 'Un club de tennis propose : 50 € d\'abonnement + 6 €/h ou 10 €/h sans abonnement. À partir de combien d\'heures l\'abonnement est-il plus intéressant ?',
      en: 'A tennis club offers: 50 € membership + 6 €/h or 10 €/h without membership. From how many hours is the membership cheaper?',
      nl: 'Een tennisclub biedt: 50 € abonnement + 6 €/u of 10 €/u zonder abonnement. Vanaf hoeveel uur is het abonnement voordeliger?',
    },
    answer: 13,
    tolerance: 0,
    hint: {
      fr: 'Avec abonnement : 50 + 6h. Sans : 10h. Résous 50 + 6h < 10h → h > 12,5 donc 13 heures.',
      en: 'With membership: 50 + 6h. Without: 10h. Solve 50 + 6h < 10h → h > 12.5 so 13 hours.',
      nl: 'Met abonnement: 50 + 6u. Zonder: 10u. Los 50 + 6u < 10u op → u > 12,5 dus 13 uur.',
    },
    commonMistake: '12',
  },
  {
    id: 'R1_017',
    category: 'R1',
    level: 2,
    text: {
      fr: 'Un sport propose : tarif 1 = 35 € d\'abonnement + 7 €/cours ou tarif 2 = 15 €/cours. À partir de combien de cours le tarif 1 est-il meilleur ?',
      en: 'A sport offers: rate 1 = 35 € subscription + 7 €/class or rate 2 = 15 €/class. From how many classes is rate 1 better?',
      nl: 'Een sport biedt: tarief 1 = 35 € abonnement + 7 €/les of tarief 2 = 15 €/les. Vanaf hoeveel lessen is tarief 1 voordeliger?',
    },
    answer: 5,
    tolerance: 0,
    hint: {
      fr: 'Tarif 1 : 35 + 7n. Tarif 2 : 15n. Résous 35 + 7n < 15n → n > 4,375 donc 5 cours.',
      en: 'Rate 1: 35 + 7n. Rate 2: 15n. Solve 35 + 7n < 15n → n > 4.375 so 5 classes.',
      nl: 'Tarief 1: 35 + 7n. Tarief 2: 15n. Los 35 + 7n < 15n op → n > 4,375 dus 5 lessen.',
    },
    commonMistake: '4',
  },
  {
    id: 'R1_018',
    category: 'R1',
    level: 2,
    text: {
      fr: '25 % des 10 000 arbres d\'une forêt sont déracinés par une tempête. Combien d\'arbres sont déracinés ?',
      en: '25% of the 10,000 trees in a forest are uprooted by a storm. How many trees are uprooted?',
      nl: '25% van de 10.000 bomen in een bos worden ontworteld door een storm. Hoeveel bomen zijn ontworteld?',
    },
    answer: 2500,
    tolerance: 0,
    hint: {
      fr: '25 % = un quart. 10 000 ÷ 4 = ?',
      en: '25% = one quarter. 10,000 ÷ 4 = ?',
      nl: '25% = een kwart. 10.000 ÷ 4 = ?',
    },
    commonMistake: '250',
  },
  {
    id: 'R1_019',
    category: 'R1',
    level: 2,
    text: {
      fr: '2500 arbres sont déracinés. Les bûcherons en emportent 1/5. Combien d\'arbres restent sur place ?',
      en: '2500 trees are uprooted. Lumberjacks remove 1/5 of them. How many trees remain?',
      nl: '2500 bomen zijn ontworteld. Houthakkers verwijderen er 1/5. Hoeveel bomen blijven er liggen?',
    },
    answer: 2000,
    tolerance: 0,
    hint: {
      fr: '1/5 de 2500 = 500 emportés. Reste : 2500 - 500 = ?',
      en: '1/5 of 2500 = 500 removed. Remaining: 2500 - 500 = ?',
      nl: '1/5 van 2500 = 500 verwijderd. Rest: 2500 - 500 = ?',
    },
    commonMistake: '500',
  },

  // ── Level 3: CE1D-inspired ───────────────────────────────────────────────
  {
    id: 'R1_020',
    category: 'R1',
    level: 3,
    text: {
      fr: 'Maxime a entre 150 et 200 châtaignes. Le nombre est divisible par 3, 4 et 5. Combien en a-t-il ?',
      en: 'Maxime has between 150 and 200 chestnuts. The number is divisible by 3, 4 and 5. How many does he have?',
      nl: 'Maxime heeft tussen 150 en 200 kastanjes. Het aantal is deelbaar door 3, 4 en 5. Hoeveel heeft hij er?',
    },
    answer: 180,
    tolerance: 0,
    hint: {
      fr: 'Le PPCM de 3, 4 et 5 est 60. Le multiple de 60 entre 150 et 200 est 180.',
      en: 'The LCM of 3, 4 and 5 is 60. The multiple of 60 between 150 and 200 is 180.',
      nl: 'Het KGV van 3, 4 en 5 is 60. Het veelvoud van 60 tussen 150 en 200 is 180.',
    },
    commonMistake: '160',
  },
  {
    id: 'R1_021',
    category: 'R1',
    level: 3,
    text: {
      fr: '132 filles et 84 garçons doivent former des groupes mixtes de taille égale. Quel est le plus grand nombre de groupes possibles ?',
      en: '132 girls and 84 boys must form equal mixed groups. What is the greatest number of groups possible?',
      nl: '132 meisjes en 84 jongens moeten gelijke gemengde groepen vormen. Wat is het grootst mogelijke aantal groepen?',
    },
    answer: 12,
    tolerance: 0,
    hint: {
      fr: 'Cherche le PGCD de 132 et 84. 132 = 12 × 11, 84 = 12 × 7. PGCD = 12.',
      en: 'Find the GCD of 132 and 84. 132 = 12 × 11, 84 = 12 × 7. GCD = 12.',
      nl: 'Zoek de GGD van 132 en 84. 132 = 12 × 11, 84 = 12 × 7. GGD = 12.',
    },
    commonMistake: '6',
  },
  {
    id: 'R1_022',
    category: 'R1',
    level: 3,
    text: {
      fr: 'Dans une salle de 600 places en rangées de 24, quel est le numéro de la rangée de la place 75 ?',
      en: 'In a hall with 600 seats in rows of 24, what is the row number for seat 75?',
      nl: 'In een zaal met 600 plaatsen in rijen van 24, wat is het rijnummer van stoel 75?',
    },
    answer: 4,
    tolerance: 0,
    hint: {
      fr: '75 ÷ 24 = 3 reste 3. La place 75 est dans la 4e rangée.',
      en: '75 ÷ 24 = 3 remainder 3. Seat 75 is in the 4th row.',
      nl: '75 ÷ 24 = 3 rest 3. Stoel 75 zit in de 4e rij.',
    },
    commonMistake: '3',
  },
];

/**
 * Procedural generator for R1 questions (word problems & reasoning).
 * Inspired by CE1D exam: real-world scenarios with multi-step reasoning.
 * @param {1|2|3} level
 * @returns {object} A single question object
 */
export function generate(level = 1) {
  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const pick = (arr) => arr[rand(0, arr.length - 1)];
  const id = `R1_gen_${Date.now()}_${rand(100, 999)}`;

  const names = ['Marie', 'Lucas', 'Léa', 'Tom', 'Sophie', 'Pierre', 'Emma', 'Hugo'];
  const name1 = pick(names);

  if (level === 1) {
    const type = rand(0, 3);

    if (type === 0) {
      // Subtraction: has X, gives away Y
      const a = rand(20, 99);
      const b = rand(5, a - 5);
      const answer = a - b;
      const obj = pick([
        { fr: 'billes', en: 'marbles', nl: 'knikkers' },
        { fr: 'bonbons', en: 'sweets', nl: 'snoepjes' },
        { fr: 'cartes', en: 'cards', nl: 'kaarten' },
        { fr: 'autocollants', en: 'stickers', nl: 'stickers' },
      ]);
      return {
        id, category: 'R1', level: 1,
        text: {
          fr: `${name1} a ${a} ${obj.fr}. Il en donne ${b} à un ami. Combien lui en reste-t-il ?`,
          en: `${name1} has ${a} ${obj.en}. He gives ${b} to a friend. How many does he have left?`,
          nl: `${name1} heeft ${a} ${obj.nl}. Hij geeft er ${b} aan een vriend. Hoeveel heeft hij er nog?`,
        },
        answer,
        tolerance: 0,
        hint: { fr: `${a} - ${b} = ?`, en: `${a} - ${b} = ?`, nl: `${a} - ${b} = ?` },
        commonMistake: String(a + b),
      };
    }

    if (type === 1) {
      // Addition: two groups
      const a = rand(15, 60);
      const b = rand(10, 50);
      const answer = a + b;
      const pair = pick([
        { fr: ['poules', 'canards'], en: ['chickens', 'ducks'], nl: ['kippen', 'eenden'] },
        { fr: ['garçons', 'filles'], en: ['boys', 'girls'], nl: ['jongens', 'meisjes'] },
        { fr: ['roses', 'tulipes'], en: ['roses', 'tulips'], nl: ['rozen', 'tulpen'] },
      ]);
      return {
        id, category: 'R1', level: 1,
        text: {
          fr: `Un fermier a ${a} ${pair.fr[0]} et ${b} ${pair.fr[1]}. Combien d'animaux a-t-il en tout ?`,
          en: `A farmer has ${a} ${pair.en[0]} and ${b} ${pair.en[1]}. How many animals does he have in total?`,
          nl: `Een boer heeft ${a} ${pair.nl[0]} en ${b} ${pair.nl[1]}. Hoeveel dieren heeft hij in totaal?`,
        },
        answer,
        tolerance: 0,
        hint: { fr: `${a} + ${b} = ?`, en: `${a} + ${b} = ?`, nl: `${a} + ${b} = ?` },
        commonMistake: String(Math.abs(a - b)),
      };
    }

    if (type === 2) {
      // Multiplication: N packs of M items
      const packs = rand(3, 9);
      const perPack = rand(4, 12);
      const answer = packs * perPack;
      const obj = pick([
        { fr: 'biscuits', en: 'biscuits', nl: 'koekjes' },
        { fr: 'crayons', en: 'pencils', nl: 'potloden' },
        { fr: 'bonbons', en: 'sweets', nl: 'snoepjes' },
      ]);
      return {
        id, category: 'R1', level: 1,
        text: {
          fr: `${name1} achète ${packs} paquets de ${perPack} ${obj.fr}. Combien en a-t-il ?`,
          en: `${name1} buys ${packs} packs of ${perPack} ${obj.en}. How many does he have?`,
          nl: `${name1} koopt ${packs} pakken van ${perPack} ${obj.nl}. Hoeveel heeft hij er?`,
        },
        answer,
        tolerance: 0,
        hint: { fr: `${packs} × ${perPack} = ?`, en: `${packs} × ${perPack} = ?`, nl: `${packs} × ${perPack} = ?` },
        commonMistake: String(packs + perPack),
      };
    }

    // Division: share equally
    const divisor = rand(3, 9);
    const quotient = rand(3, 12);
    const total = divisor * quotient;
    return {
      id, category: 'R1', level: 1,
      text: {
        fr: `On partage ${total} bonbons entre ${divisor} enfants. Combien chaque enfant reçoit-il ?`,
        en: `${total} sweets are shared equally among ${divisor} children. How many does each child get?`,
        nl: `${total} snoepjes worden gelijk verdeeld onder ${divisor} kinderen. Hoeveel krijgt elk kind?`,
      },
      answer: quotient,
      tolerance: 0,
      hint: { fr: `${total} ÷ ${divisor} = ?`, en: `${total} ÷ ${divisor} = ?`, nl: `${total} ÷ ${divisor} = ?` },
      commonMistake: String(divisor),
    };
  }

  if (level === 2) {
    const type = rand(0, 3);

    if (type === 0) {
      // Buy items + change
      const budget = rand(5, 20) * 10;
      const priceA = rand(5, 20);
      const priceB = rand(2, 12);
      const answer = budget - priceA - priceB;
      if (answer < 1) return generate(2);
      const itemA = pick([
        { fr: 'un livre', en: 'a book', nl: 'een boek' },
        { fr: 'un jeu', en: 'a game', nl: 'een spel' },
      ]);
      const itemB = pick([
        { fr: 'un stylo', en: 'a pen', nl: 'een pen' },
        { fr: 'un cahier', en: 'a notebook', nl: 'een schrift' },
      ]);
      return {
        id, category: 'R1', level: 2,
        text: {
          fr: `${name1} a ${budget} €. Il achète ${itemA.fr} à ${priceA} € et ${itemB.fr} à ${priceB} €. Combien lui reste-t-il ?`,
          en: `${name1} has ${budget} €. He buys ${itemA.en} for ${priceA} € and ${itemB.en} for ${priceB} €. How much is left?`,
          nl: `${name1} heeft ${budget} €. Hij koopt ${itemA.nl} van ${priceA} € en ${itemB.nl} van ${priceB} €. Hoeveel heeft hij nog?`,
        },
        answer,
        tolerance: 0,
        hint: {
          fr: `Total achats : ${priceA} + ${priceB} = ${priceA + priceB}. Reste : ${budget} - ${priceA + priceB}.`,
          en: `Total: ${priceA} + ${priceB} = ${priceA + priceB}. Left: ${budget} - ${priceA + priceB}.`,
          nl: `Totaal: ${priceA} + ${priceB} = ${priceA + priceB}. Over: ${budget} - ${priceA + priceB}.`,
        },
        commonMistake: String(budget - priceA),
      };
    }

    if (type === 1) {
      // X times more together
      const multiplier = rand(2, 5);
      const base = rand(5, 25);
      const answer = base * multiplier + base;
      const name2 = pick(names.filter((n) => n !== name1));
      const obj = pick([
        { fr: 'cartes', en: 'cards', nl: 'kaarten' },
        { fr: 'billes', en: 'marbles', nl: 'knikkers' },
      ]);
      return {
        id, category: 'R1', level: 2,
        text: {
          fr: `${name1} a ${multiplier} fois plus de ${obj.fr} que ${name2}. ${name2} a ${base} ${obj.fr}. Combien en ont-ils ensemble ?`,
          en: `${name1} has ${multiplier} times as many ${obj.en} as ${name2}. ${name2} has ${base} ${obj.en}. How many together?`,
          nl: `${name1} heeft ${multiplier} keer zoveel ${obj.nl} als ${name2}. ${name2} heeft ${base} ${obj.nl}. Hoeveel samen?`,
        },
        answer,
        tolerance: 0,
        hint: {
          fr: `${name1} : ${multiplier} × ${base} = ${multiplier * base}. Ensemble : ${multiplier * base} + ${base}.`,
          en: `${name1}: ${multiplier} × ${base} = ${multiplier * base}. Together: ${multiplier * base} + ${base}.`,
          nl: `${name1}: ${multiplier} × ${base} = ${multiplier * base}. Samen: ${multiplier * base} + ${base}.`,
        },
        commonMistake: String(multiplier * base),
      };
    }

    if (type === 2) {
      // Production - sold = remaining
      const perDay = rand(8, 20);
      const days = rand(3, 7);
      const total = perDay * days;
      const sold = rand(Math.floor(total * 0.5), total - perDay);
      const answer = total - sold;
      const obj = pick([
        { fr: 'gâteaux', en: 'cakes', nl: 'taarten' },
        { fr: 'pains', en: 'loaves', nl: 'broden' },
      ]);
      return {
        id, category: 'R1', level: 2,
        text: {
          fr: `Un boulanger prépare ${perDay} ${obj.fr} par jour. Après ${days} jours, il en a vendu ${sold}. Combien lui en reste-t-il ?`,
          en: `A baker makes ${perDay} ${obj.en} per day. After ${days} days, he sold ${sold}. How many left?`,
          nl: `Een bakker maakt ${perDay} ${obj.nl} per dag. Na ${days} dagen verkocht hij ${sold}. Hoeveel heeft hij nog?`,
        },
        answer,
        tolerance: 0,
        hint: {
          fr: `Total : ${perDay} × ${days} = ${total}. Reste : ${total} - ${sold}.`,
          en: `Total: ${perDay} × ${days} = ${total}. Left: ${total} - ${sold}.`,
          nl: `Totaal: ${perDay} × ${days} = ${total}. Over: ${total} - ${sold}.`,
        },
        commonMistake: String(sold),
      };
    }

    // Subscription breakeven (CE1D-inspired)
    const subscription = rand(3, 8) * 10;
    const rateWith = rand(4, 8);
    const rateWithout = rateWith + rand(2, 6);
    const diff = rateWithout - rateWith;
    const answer = Math.ceil(subscription / diff);
    return {
      id, category: 'R1', level: 2,
      text: {
        fr: `Un club propose : ${subscription} € d'abonnement + ${rateWith} €/séance ou ${rateWithout} €/séance sans abonnement. À partir de combien de séances l'abonnement est-il plus intéressant ?`,
        en: `A club offers: ${subscription} € membership + ${rateWith} €/session or ${rateWithout} €/session without. From how many sessions is membership cheaper?`,
        nl: `Een club biedt: ${subscription} € abonnement + ${rateWith} €/sessie of ${rateWithout} €/sessie zonder. Vanaf hoeveel sessies is het abonnement voordeliger?`,
      },
      answer,
      tolerance: 0,
      hint: {
        fr: `Avec : ${subscription} + ${rateWith}n. Sans : ${rateWithout}n. ${subscription} ÷ ${diff} = ${(subscription / diff).toFixed(1)} → ${answer} séances.`,
        en: `With: ${subscription} + ${rateWith}n. Without: ${rateWithout}n. ${subscription} ÷ ${diff} = ${(subscription / diff).toFixed(1)} → ${answer} sessions.`,
        nl: `Met: ${subscription} + ${rateWith}n. Zonder: ${rateWithout}n. ${subscription} ÷ ${diff} = ${(subscription / diff).toFixed(1)} → ${answer} sessies.`,
      },
      commonMistake: String(answer - 1),
    };
  }

  // Level 3
  const type = rand(0, 3);

  if (type === 0) {
    // Shopping with discount
    const priceA = rand(10, 25);
    const qtyA = rand(2, 5);
    const priceB = rand(20, 45);
    const qtyB = rand(1, 3);
    const discount = rand(1, 3) * 5;
    const subtotal = priceA * qtyA + priceB * qtyB;
    const answer = subtotal - discount;
    const itemA = pick([
      { fr: 'T-shirts', en: 'T-shirts', nl: 'T-shirts' },
      { fr: 'livres', en: 'books', nl: 'boeken' },
    ]);
    const itemB = pick([
      { fr: 'pantalons', en: 'trousers', nl: 'broeken' },
      { fr: 'chaussures', en: 'shoes', nl: 'schoenen' },
    ]);
    return {
      id, category: 'R1', level: 3,
      text: {
        fr: `Des ${itemA.fr} à ${priceA} € et des ${itemB.fr} à ${priceB} €. ${name1} achète ${qtyA} ${itemA.fr} et ${qtyB} ${itemB.fr} avec ${discount} € de réduction. Combien paie-t-il ?`,
        en: `${itemA.en} at ${priceA} € and ${itemB.en} at ${priceB} €. ${name1} buys ${qtyA} ${itemA.en} and ${qtyB} ${itemB.en} with a ${discount} € discount. How much does he pay?`,
        nl: `${itemA.nl} aan ${priceA} € en ${itemB.nl} aan ${priceB} €. ${name1} koopt ${qtyA} ${itemA.nl} en ${qtyB} ${itemB.nl} met ${discount} € korting. Hoeveel betaalt hij?`,
      },
      answer,
      tolerance: 0,
      hint: {
        fr: `${itemA.fr} : ${qtyA} × ${priceA} = ${qtyA * priceA}. ${itemB.fr} : ${qtyB} × ${priceB} = ${qtyB * priceB}. Total : ${subtotal} - ${discount}.`,
        en: `${itemA.en}: ${qtyA} × ${priceA} = ${qtyA * priceA}. ${itemB.en}: ${qtyB} × ${priceB} = ${qtyB * priceB}. Total: ${subtotal} - ${discount}.`,
        nl: `${itemA.nl}: ${qtyA} × ${priceA} = ${qtyA * priceA}. ${itemB.nl}: ${qtyB} × ${priceB} = ${qtyB * priceB}. Totaal: ${subtotal} - ${discount}.`,
      },
      commonMistake: String(subtotal),
    };
  }

  if (type === 1) {
    // Distance problem
    const d1 = rand(10, 50);
    const d2 = rand(50, 150);
    const d3 = rand(3, 20);
    const answer = d1 + d2 + d3;
    const means = pick([
      { fr: ['vélo', 'train', 'pied'], en: ['bike', 'train', 'foot'], nl: ['fiets', 'trein', 'voet'] },
      { fr: ['bus', 'métro', 'pied'], en: ['bus', 'metro', 'foot'], nl: ['bus', 'metro', 'voet'] },
    ]);
    return {
      id, category: 'R1', level: 3,
      text: {
        fr: `${name1} fait un trajet : ${d1} km en ${means.fr[0]}, ${d2} km en ${means.fr[1]} et ${d3} km à ${means.fr[2]}. Distance totale en km ?`,
        en: `${name1} takes a trip: ${d1} km by ${means.en[0]}, ${d2} km by ${means.en[1]} and ${d3} km on ${means.en[2]}. Total distance in km?`,
        nl: `${name1} maakt een reis: ${d1} km met de ${means.nl[0]}, ${d2} km met de ${means.nl[1]} en ${d3} km te ${means.nl[2]}. Totale afstand in km?`,
      },
      answer,
      tolerance: 0,
      hint: { fr: `${d1} + ${d2} + ${d3} = ?`, en: `${d1} + ${d2} + ${d3} = ?`, nl: `${d1} + ${d2} + ${d3} = ?` },
      commonMistake: String(d2),
    };
  }

  if (type === 2) {
    // Garden / flowers with storm
    const rowsA = rand(4, 10);
    const perRowA = rand(8, 15);
    const rowsB = rand(3, 8);
    const perRowB = rand(6, 12);
    const destroyed = rand(5, 20);
    const total = rowsA * perRowA + rowsB * perRowB;
    const answer = total - destroyed;
    const flA = pick([{ fr: 'tulipes', en: 'tulips', nl: 'tulpen' }, { fr: 'roses', en: 'roses', nl: 'rozen' }]);
    const flB = pick([{ fr: 'marguerites', en: 'daisies', nl: 'madeliefjes' }, { fr: 'jonquilles', en: 'daffodils', nl: 'narcissen' }]);
    return {
      id, category: 'R1', level: 3,
      text: {
        fr: `Un jardinier plante ${rowsA} rangées de ${perRowA} ${flA.fr} et ${rowsB} rangées de ${perRowB} ${flB.fr}. Un orage détruit ${destroyed} fleurs. Combien en reste-t-il ?`,
        en: `A gardener plants ${rowsA} rows of ${perRowA} ${flA.en} and ${rowsB} rows of ${perRowB} ${flB.en}. A storm destroys ${destroyed} flowers. How many are left?`,
        nl: `Een tuinier plant ${rowsA} rijen van ${perRowA} ${flA.nl} en ${rowsB} rijen van ${perRowB} ${flB.nl}. Een storm vernielt ${destroyed} bloemen. Hoeveel zijn er nog?`,
      },
      answer,
      tolerance: 0,
      hint: {
        fr: `${flA.fr} : ${rowsA} × ${perRowA} = ${rowsA * perRowA}. ${flB.fr} : ${rowsB} × ${perRowB} = ${rowsB * perRowB}. Total : ${total}. Reste : ${total} - ${destroyed}.`,
        en: `${flA.en}: ${rowsA} × ${perRowA} = ${rowsA * perRowA}. ${flB.en}: ${rowsB} × ${perRowB} = ${rowsB * perRowB}. Total: ${total}. Left: ${total} - ${destroyed}.`,
        nl: `${flA.nl}: ${rowsA} × ${perRowA} = ${rowsA * perRowA}. ${flB.nl}: ${rowsB} × ${perRowB} = ${rowsB * perRowB}. Totaal: ${total}. Over: ${total} - ${destroyed}.`,
      },
      commonMistake: String(total),
    };
  }

  // Cinema / event family problem
  const adultPrice = rand(8, 14);
  const childPrice = rand(4, 8);
  const adults = rand(1, 3);
  const children = rand(1, 4);
  const extraPrice = rand(3, 7);
  const extras = rand(1, 3);
  const answer = adults * adultPrice + children * childPrice + extras * extraPrice;
  const extraObj = pick([
    { fr: 'popcorns', en: 'popcorns', nl: 'popcorns' },
    { fr: 'boissons', en: 'drinks', nl: 'drankjes' },
  ]);
  return {
    id, category: 'R1', level: 3,
    text: {
      fr: `Ciné : adulte ${adultPrice} €, enfant ${childPrice} €. Une famille (${adults} adulte${adults > 1 ? 's' : ''}, ${children} enfant${children > 1 ? 's' : ''}) y va et achète ${extras} ${extraObj.fr} à ${extraPrice} €. Combien dépensent-ils ?`,
      en: `Cinema: adult ${adultPrice} €, child ${childPrice} €. A family (${adults} adult${adults > 1 ? 's' : ''}, ${children} child${children > 1 ? 'ren' : ''}) goes and buys ${extras} ${extraObj.en} at ${extraPrice} €. How much do they spend?`,
      nl: `Bioscoop: volwassene ${adultPrice} €, kind ${childPrice} €. Een gezin (${adults} volwassene${adults > 1 ? 'n' : ''}, ${children} kind${children > 1 ? 'eren' : ''}) gaat en koopt ${extras} ${extraObj.nl} van ${extraPrice} €. Hoeveel geven ze uit?`,
    },
    answer,
    tolerance: 0,
    hint: {
      fr: `Adultes : ${adults} × ${adultPrice} = ${adults * adultPrice}. Enfants : ${children} × ${childPrice} = ${children * childPrice}. ${extraObj.fr} : ${extras} × ${extraPrice} = ${extras * extraPrice}. Total = ?`,
      en: `Adults: ${adults} × ${adultPrice} = ${adults * adultPrice}. Children: ${children} × ${childPrice} = ${children * childPrice}. ${extraObj.en}: ${extras} × ${extraPrice} = ${extras * extraPrice}. Total = ?`,
      nl: `Volwassenen: ${adults} × ${adultPrice} = ${adults * adultPrice}. Kinderen: ${children} × ${childPrice} = ${children * childPrice}. ${extraObj.nl}: ${extras} × ${extraPrice} = ${extras * extraPrice}. Totaal = ?`,
    },
    commonMistake: String(adults * adultPrice + children * childPrice),
  };
}
