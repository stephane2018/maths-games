import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OUTPUT_FILE = path.join(__dirname, '../src/data/questions-G5-additional-inegalite.json');

// Générer des questions d'inégalité triangulaire avec niveaux de difficulté
function generateInegaliteQuestions() {
  const questions = [];
  let id = 1;

  // NIVEAU 1 - Facile (10 questions)
  // Vérifier si 3 côtés forment un triangle (possibilité simple)

  const niveau1Cases = [
    { a: 5, b: 7, c: 12, possible: 0, reason: '5 + 7 = 12 (égalité, donc impossible)' },
    { a: 6, b: 9, c: 4, possible: 1, reason: '3 < 4 < 15' },
    { a: 8, b: 8, c: 16, possible: 0, reason: '8 + 8 = 16 (égalité)' },
    { a: 6, b: 7, c: 8, possible: 1, reason: 'Toutes les inégalités respectées' },
    { a: 3, b: 4, c: 5, possible: 1, reason: 'Triangle rectangle' },
    { a: 2, b: 3, c: 6, possible: 0, reason: '2 + 3 < 6' },
    { a: 10, b: 10, c: 15, possible: 1, reason: '5 < 15 < 20' },
    { a: 7, b: 9, c: 16, possible: 1, reason: '2 < 16 < 16 (limite)' },
    { a: 4, b: 5, c: 10, possible: 0, reason: '4 + 5 < 10' },
    { a: 8, b: 12, c: 15, possible: 1, reason: '4 < 15 < 20' }
  ];

  niveau1Cases.forEach((cas, i) => {
    questions.push({
      id: `G5_ineg_${id++}`,
      category: 'G5',
      level: 1,
      text: {
        fr: `Peut-on construire un triangle avec les côtés ${cas.a} cm, ${cas.b} cm et ${cas.c} cm ? (Réponds 1 pour OUI, 0 pour NON)`,
        en: `Can you build a triangle with sides ${cas.a} cm, ${cas.b} cm and ${cas.c} cm? (Answer 1 for YES, 0 for NO)`,
        nl: `Kan je een driehoek maken met zijden ${cas.a} cm, ${cas.b} cm en ${cas.c} cm? (Antwoord 1 voor JA, 0 voor NEE)`
      },
      answer: cas.possible,
      tolerance: 0,
      hint: {
        fr: `Vérifie l'inégalité triangulaire : a + b > c pour tous les côtés. ${cas.reason}`,
        en: `Check triangle inequality: a + b > c for all sides. ${cas.reason}`,
        nl: `Controleer de driehoeksongelijkheid: a + b > c voor alle zijden. ${cas.reason}`
      }
    });
  });

  // NIVEAU 2 - Moyen (10 questions)
  // Calculer la plus petite ou plus grande valeur possible du 3ème côté

  const niveau2Cases = [
    { a: 9, b: 4, type: 'min', answer: 6, explication: '|9 - 4| < x < 13 → 5 < x < 13, plus petite valeur entière: 6' },
    { a: 12, b: 5, type: 'max', answer: 16, explication: '|12 - 5| < x < 17 → 7 < x < 17, plus grande valeur entière: 16' },
    { a: 15, b: 7, type: 'max', answer: 21, explication: '|15 - 7| < x < 22 → 8 < x < 22, plus grande valeur entière: 21' },
    { a: 10, b: 6, type: 'min', answer: 5, explication: '|10 - 6| < x < 16 → 4 < x < 16, plus petite valeur entière: 5' },
    { a: 8, b: 3, type: 'max', answer: 10, explication: '|8 - 3| < x < 11 → 5 < x < 11, plus grande valeur entière: 10' },
    { a: 14, b: 9, type: 'min', answer: 6, explication: '|14 - 9| < x < 23 → 5 < x < 23, plus petite valeur entière: 6' },
    { a: 20, b: 12, type: 'max', answer: 31, explication: '|20 - 12| < x < 32 → 8 < x < 32, plus grande valeur entière: 31' },
    { a: 7, b: 5, type: 'min', answer: 3, explication: '|7 - 5| < x < 12 → 2 < x < 12, plus petite valeur entière: 3' },
    { a: 11, b: 8, type: 'max', answer: 18, explication: '|11 - 8| < x < 19 → 3 < x < 19, plus grande valeur entière: 18' },
    { a: 13, b: 6, type: 'min', answer: 8, explication: '|13 - 6| < x < 19 → 7 < x < 19, plus petite valeur entière: 8' }
  ];

  niveau2Cases.forEach((cas, i) => {
    const question = cas.type === 'min' ?
      `Deux côtés d'un triangle mesurent ${cas.a} cm et ${cas.b} cm. Quelle est la plus petite valeur ENTIÈRE possible pour le troisième côté ?` :
      `Deux côtés d'un triangle mesurent ${cas.a} cm et ${cas.b} cm. Quelle est la plus grande valeur ENTIÈRE possible pour le troisième côté ?`;

    const questionEn = cas.type === 'min' ?
      `Two sides of a triangle measure ${cas.a} cm and ${cas.b} cm. What is the smallest INTEGER value possible for the third side?` :
      `Two sides of a triangle measure ${cas.a} cm and ${cas.b} cm. What is the largest INTEGER value possible for the third side?`;

    const questionNl = cas.type === 'min' ?
      `Twee zijden van een driehoek meten ${cas.a} cm en ${cas.b} cm. Wat is de kleinste GEHELE waarde mogelijk voor de derde zijde?` :
      `Twee zijden van een driehoek meten ${cas.a} cm en ${cas.b} cm. Wat is de grootste GEHELE waarde mogelijk voor de derde zijde?`;

    questions.push({
      id: `G5_ineg_${id++}`,
      category: 'G5',
      level: 2,
      text: {
        fr: question,
        en: questionEn,
        nl: questionNl
      },
      answer: cas.answer,
      tolerance: 0,
      hint: {
        fr: `Utilise la formule |a - b| < c < a + b. ${cas.explication}`,
        en: `Use the formula |a - b| < c < a + b. ${cas.explication}`,
        nl: `Gebruik de formule |a - b| < c < a + b. ${cas.explication}`
      }
    });
  });

  // NIVEAU 3 - Difficile (10 questions)
  // Questions mixtes avec triangles isocèles, périmètres, comptage de valeurs possibles

  const niveau3Cases = [
    {
      question: 'Un triangle isocèle a deux côtés égaux de 7 cm. Combien de valeurs ENTIÈRES sont possibles pour le troisième côté ?',
      questionEn: 'An isosceles triangle has two equal sides of 7 cm. How many INTEGER values are possible for the third side?',
      questionNl: 'Een gelijkbenige driehoek heeft twee gelijke zijden van 7 cm. Hoeveel GEHELE waarden zijn mogelijk voor de derde zijde?',
      answer: 13,
      hint: '|7 - 7| < x < 14 → 0 < x < 14. Valeurs entières: 1, 2, 3, ..., 13 = 13 valeurs'
    },
    {
      question: 'Un triangle a un périmètre de 20 cm. Deux côtés mesurent 6 cm et 9 cm. Quelle est la longueur du troisième côté ?',
      questionEn: 'A triangle has a perimeter of 20 cm. Two sides measure 6 cm and 9 cm. What is the length of the third side?',
      questionNl: 'Een driehoek heeft een omtrek van 20 cm. Twee zijden meten 6 cm en 9 cm. Wat is de lengte van de derde zijde?',
      answer: 5,
      hint: 'Périmètre = a + b + c → 20 = 6 + 9 + c → c = 5 cm'
    },
    {
      question: 'Deux côtés mesurent 10 cm et 15 cm. Combien de valeurs ENTIÈRES sont possibles pour le troisième côté ?',
      questionEn: 'Two sides measure 10 cm and 15 cm. How many INTEGER values are possible for the third side?',
      questionNl: 'Twee zijden meten 10 cm en 15 cm. Hoeveel GEHELE waarden zijn mogelijk voor de derde zijde?',
      answer: 19,
      hint: '|10 - 15| < x < 25 → 5 < x < 25. Valeurs entières: 6, 7, 8, ..., 24 = 19 valeurs'
    },
    {
      question: 'Un triangle équilatéral a un périmètre de 36 cm. Quelle est la longueur d\'un côté ?',
      questionEn: 'An equilateral triangle has a perimeter of 36 cm. What is the length of one side?',
      questionNl: 'Een gelijkzijdige driehoek heeft een omtrek van 36 cm. Wat is de lengte van één zijde?',
      answer: 12,
      hint: 'Triangle équilatéral: 3 côtés égaux. 36 ÷ 3 = 12 cm'
    },
    {
      question: 'Deux côtés mesurent 8 cm et 8 cm. La plus grande valeur ENTIÈRE du troisième côté est ?',
      questionEn: 'Two sides measure 8 cm and 8 cm. The largest INTEGER value of the third side is?',
      questionNl: 'Twee zijden meten 8 cm en 8 cm. De grootste GEHELE waarde van de derde zijde is?',
      answer: 15,
      hint: '|8 - 8| < x < 16 → 0 < x < 16. Plus grande valeur entière: 15'
    },
    {
      question: 'Un triangle isocèle a un périmètre de 24 cm et deux côtés égaux de 10 cm. Quelle est la longueur du troisième côté ?',
      questionEn: 'An isosceles triangle has a perimeter of 24 cm and two equal sides of 10 cm. What is the length of the third side?',
      questionNl: 'Een gelijkbenige driehoek heeft een omtrek van 24 cm en twee gelijke zijden van 10 cm. Wat is de lengte van de derde zijde?',
      answer: 4,
      hint: '24 = 10 + 10 + c → c = 4 cm. Vérifie: |10 - 10| < 4 < 20 ✓'
    },
    {
      question: 'Deux côtés mesurent 5 cm et 12 cm. Combien de valeurs ENTIÈRES PAIRES sont possibles pour le troisième côté ?',
      questionEn: 'Two sides measure 5 cm and 12 cm. How many EVEN INTEGER values are possible for the third side?',
      questionNl: 'Twee zijden meten 5 cm en 12 cm. Hoeveel EVEN GEHELE waarden zijn mogelijk voor de derde zijde?',
      answer: 7,
      hint: '|5 - 12| < x < 17 → 7 < x < 17. Valeurs paires: 8, 10, 12, 14, 16 = 5 valeurs... wait: 8, 10, 12, 14, 16 (correction: 7 < x signifie x ≥ 8), donc 8, 10, 12, 14, 16 = 5 pairs... Recalcul: entre 8 et 16 inclus = 8,10,12,14,16 = 5... mais 7<x<17 exclut 7 et 17, donc 8-16 = 8,10,12,14,16 = 5. Réponse corrigée à 5'
    },
    {
      question: 'Un triangle a des côtés de x cm, (x+2) cm et (x+4) cm. Si le plus grand côté mesure 10 cm, quel est le périmètre ?',
      questionEn: 'A triangle has sides of x cm, (x+2) cm and (x+4) cm. If the largest side is 10 cm, what is the perimeter?',
      questionNl: 'Een driehoek heeft zijden van x cm, (x+2) cm en (x+4) cm. Als de grootste zijde 10 cm is, wat is de omtrek?',
      answer: 24,
      hint: 'Plus grand côté: x+4 = 10 → x = 6. Périmètre: 6 + 8 + 10 = 24 cm'
    },
    {
      question: 'Deux côtés mesurent 11 cm et 7 cm. La somme de toutes les valeurs ENTIÈRES possibles du 3ème côté entre 5 et 17 (exclus) est ?',
      questionEn: 'Two sides measure 11 cm and 7 cm. The sum of all possible INTEGER values of the 3rd side between 5 and 17 (exclusive) is?',
      questionNl: 'Twee zijden meten 11 cm en 7 cm. De som van alle mogelijke GEHELE waarden van de 3e zijde tussen 5 en 17 (exclusief) is?',
      answer: 126,
      hint: '|11 - 7| < x < 18 → 4 < x < 18. Entre 5 et 17 exclus: 6+7+8+9+10+11+12+13+14+15+16 = 11 termes. Somme = (6+16)×11÷2 = 121... Recalcul: 5,6,7,8,9,10,11,12,13,14,15,16 entre 4<x<18 = 5 à 17 = 5+6+7+8+9+10+11+12+13+14+15+16+17 = 13 termes = (5+17)×13÷2 = 143... Correction: ENTRE 5 et 17 EXCLUS = 6 à 16 = 11 termes = (6+16)×11÷2 = 121. Mais vérifie mieux.'
    },
    {
      question: 'Un triangle isocèle a deux côtés de 9 cm. Le troisième côté mesure x cm. Quelle est la valeur MAXIMALE ENTIÈRE de x ?',
      questionEn: 'An isosceles triangle has two sides of 9 cm. The third side measures x cm. What is the MAXIMUM INTEGER value of x?',
      questionNl: 'Een gelijkbenige driehoek heeft twee zijden van 9 cm. De derde zijde meet x cm. Wat is de MAXIMALE GEHELE waarde van x?',
      answer: 17,
      hint: '|9 - 9| < x < 18 → 0 < x < 18. Valeur maximale entière: 17 cm'
    }
  ];

  // Correction pour la question 7 du niveau 3
  niveau3Cases[6].answer = 5; // Valeurs paires entre 8 et 16: 8, 10, 12, 14, 16
  niveau3Cases[6].hint = '|5 - 12| < x < 17 → 7 < x < 17. Valeurs entières: 8-16. Valeurs paires: 8, 10, 12, 14, 16 = 5 valeurs';

  // Correction pour la question 9 du niveau 3
  niveau3Cases[8].answer = 121;
  niveau3Cases[8].hint = '|11 - 7| < x < 18 → 4 < x < 18. Entre 5 et 17 (exclus): 6, 7, 8, ..., 16 = 11 valeurs. Somme: (6+16)×11÷2 = 121';

  niveau3Cases.forEach((cas, i) => {
    questions.push({
      id: `G5_ineg_${id++}`,
      category: 'G5',
      level: 3,
      text: {
        fr: cas.question,
        en: cas.questionEn,
        nl: cas.questionNl
      },
      answer: cas.answer,
      tolerance: 0,
      hint: {
        fr: cas.hint,
        en: cas.hint,
        nl: cas.hint
      }
    });
  });

  return questions;
}

// Générer et sauvegarder
const questions = generateInegaliteQuestions();

fs.writeFileSync(OUTPUT_FILE, JSON.stringify(questions, null, 2), 'utf-8');

console.log('✅ Questions d\'inégalité triangulaire générées!\n');
console.log(`📊 Total: ${questions.length} questions`);
console.log(`   Niveau 1 (Facile): ${questions.filter(q => q.level === 1).length} questions`);
console.log(`   Niveau 2 (Moyen): ${questions.filter(q => q.level === 2).length} questions`);
console.log(`   Niveau 3 (Difficile): ${questions.filter(q => q.level === 3).length} questions`);
console.log(`\n💾 Fichier sauvegardé: ${OUTPUT_FILE}`);
