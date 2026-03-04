import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataDir = path.join(__dirname, '../src/data');

console.log('🎯 Population des catégories G5 (Inégalité triangulaire) et G3 (Angles)\n');

// ============================================================================
// G5 - INÉGALITÉ TRIANGULAIRE
// ============================================================================

function generateG5Questions() {
  const questions = [];
  let id = 1;

  // Helper: générer des triplets de côtés
  const triangles = [
    // NIVEAU 1 - Cas simples, triangles possibles (10 questions)
    { a: 3, b: 4, c: 5, possible: 1 },
    { a: 5, b: 12, c: 13, possible: 1 },
    { a: 6, b: 8, c: 10, possible: 1 },
    { a: 7, b: 9, c: 11, possible: 1 },
    { a: 4, b: 5, c: 7, possible: 1 },
    { a: 8, b: 11, c: 15, possible: 1 },
    { a: 9, b: 10, c: 12, possible: 1 },
    { a: 6, b: 7, c: 11, possible: 1 },
    { a: 5, b: 6, c: 9, possible: 1 },
    { a: 7, b: 10, c: 14, possible: 1 },

    // NIVEAU 2 - Cas limites (15 questions)
    { a: 3, b: 4, c: 7, possible: 0 }, // Égalité a+b=c
    { a: 5, b: 8, c: 13, possible: 0 },
    { a: 2, b: 3, c: 6, possible: 0 },
    { a: 4, b: 7, c: 11, possible: 0 },
    { a: 6, b: 9, c: 15, possible: 0 },
    { a: 5, b: 7, c: 12, possible: 0 },
    { a: 8, b: 10, c: 18, possible: 0 },
    { a: 3, b: 5, c: 8, possible: 0 },
    { a: 7, b: 11, c: 18, possible: 0 },
    { a: 4, b: 6, c: 10, possible: 0 },
    { a: 9, b: 12, c: 21, possible: 0 },
    { a: 5, b: 9, c: 14, possible: 0 },
    { a: 6, b: 10, c: 16, possible: 0 },
    { a: 7, b: 8, c: 15, possible: 0 },
    { a: 8, b: 9, c: 17, possible: 0 },

    // NIVEAU 3 - Calculs de bornes (15 questions)
    // Pour ces questions, on demande la plus petite/grande valeur possible
  ];

  // Questions niveau 1 et 2: Test de possibilité
  triangles.forEach((t, idx) => {
    const level = idx < 10 ? 1 : 2;
    questions.push({
      "id": `G5_gen_${id++}`,
      "category": "G5",
      "level": level,
      "text": {
        "fr": `Peut-on construire un triangle de côtés ${t.a} cm, ${t.b} cm et ${t.c} cm ? (1=oui, 0=non)`,
        "en": `Can we build a triangle with sides ${t.a} cm, ${t.b} cm and ${t.c} cm? (1=yes, 0=no)`,
        "nl": `Kunnen we een driehoek bouwen met zijden ${t.a} cm, ${t.b} cm en ${t.c} cm? (1=ja, 0=nee)`
      },
      "answer": t.possible,
      "tolerance": 0,
      "hint": {
        "fr": "Vérifie que la somme de deux côtés est strictement supérieure au troisième.",
        "en": "Check that the sum of two sides is strictly greater than the third.",
        "nl": "Controleer dat de som van twee zijden strikt groter is dan de derde."
      }
    });
  });

  // Questions niveau 3: Calcul de bornes (15 questions)
  const boundsQuestions = [
    { a: 5, b: 8, type: 'min', answer: 4 },
    { a: 7, b: 10, type: 'max', answer: 16 },
    { a: 6, b: 9, type: 'min', answer: 4 },
    { a: 12, b: 5, type: 'min', answer: 8 },
    { a: 15, b: 7, type: 'max', answer: 21 },
    { a: 8, b: 11, type: 'min', answer: 4 },
    { a: 9, b: 13, type: 'max', answer: 21 },
    { a: 10, b: 6, type: 'min', answer: 5 },
    { a: 14, b: 9, type: 'max', answer: 22 },
    { a: 11, b: 7, type: 'min', answer: 5 },
    { a: 16, b: 8, type: 'max', answer: 23 },
    { a: 13, b: 6, type: 'min', answer: 8 },
    { a: 18, b: 10, type: 'max', answer: 27 },
    { a: 12, b: 9, type: 'min', answer: 4 },
    { a: 20, b: 11, type: 'max', answer: 30 },
  ];

  boundsQuestions.forEach(q => {
    const typeText = q.type === 'min' ? 'plus petite' : 'plus grande';
    const typeTextEn = q.type === 'min' ? 'smallest' : 'largest';
    const typeTextNl = q.type === 'min' ? 'kleinste' : 'grootste';

    questions.push({
      "id": `G5_gen_${id++}`,
      "category": "G5",
      "level": 3,
      "text": {
        "fr": `Deux côtés mesurent ${q.a} cm et ${q.b} cm. Quelle est la ${typeText} valeur entière possible du 3e côté ?`,
        "en": `Two sides measure ${q.a} cm and ${q.b} cm. What is the ${typeTextEn} integer value possible for the 3rd side?`,
        "nl": `Twee zijden meten ${q.a} cm en ${q.b} cm. Wat is de ${typeTextNl} gehele waarde mogelijk voor de 3e zijde?`
      },
      "answer": q.answer,
      "tolerance": 0,
      "hint": {
        "fr": "Utilise |a - b| < c < a + b pour trouver l'intervalle.",
        "en": "Use |a - b| < c < a + b to find the interval.",
        "nl": "Gebruik |a - b| < c < a + b om het interval te vinden."
      }
    });
  });

  return questions;
}

// ============================================================================
// G3 - ANGLES
// ============================================================================

function generateG3Questions() {
  const questions = [];
  let id = 1;

  // NIVEAU 1 - Angles complémentaires et supplémentaires simples (10 questions)
  const level1 = [
    { type: 'comp', angle: 30, answer: 60 },
    { type: 'comp', angle: 45, answer: 45 },
    { type: 'comp', angle: 25, answer: 65 },
    { type: 'comp', angle: 70, answer: 20 },
    { type: 'comp', angle: 55, answer: 35 },
    { type: 'supp', angle: 60, answer: 120 },
    { type: 'supp', angle: 90, answer: 90 },
    { type: 'supp', angle: 45, answer: 135 },
    { type: 'supp', angle: 110, answer: 70 },
    { type: 'supp', angle: 75, answer: 105 },
  ];

  level1.forEach(q => {
    const typeText = q.type === 'comp' ? 'complémentaire' : 'supplémentaire';
    const typeTextEn = q.type === 'comp' ? 'complementary' : 'supplementary';
    const typeTextNl = q.type === 'comp' ? 'complementaire' : 'supplementaire';
    const total = q.type === 'comp' ? 90 : 180;

    questions.push({
      "id": `G3_gen_${id++}`,
      "category": "G3",
      "level": 1,
      "text": {
        "fr": `Calcule l'angle ${typeText} de ${q.angle}°.`,
        "en": `Calculate the ${typeTextEn} angle of ${q.angle}°.`,
        "nl": `Bereken de ${typeTextNl} hoek van ${q.angle}°.`
      },
      "answer": q.answer,
      "tolerance": 0,
      "hint": {
        "fr": `Deux angles ${typeText}s somment à ${total}°.`,
        "en": `Two ${typeTextEn} angles sum to ${total}°.`,
        "nl": `Twee ${typeTextNl} hoeken tellen op tot ${total}°.`
      }
    });
  });

  // NIVEAU 2 - Angles alternes-internes et correspondants (15 questions)
  const level2 = [
    { angle: 65, type: 'alterne', answer: 65 },
    { angle: 40, type: 'correspondant', answer: 40 },
    { angle: 75, type: 'alterne', answer: 75 },
    { angle: 55, type: 'correspondant', answer: 55 },
    { angle: 80, type: 'alterne', answer: 80 },
    { angle: 95, type: 'correspondant', answer: 95 },
    { angle: 50, type: 'alterne', answer: 50 },
    { angle: 70, type: 'correspondant', answer: 70 },
    { angle: 85, type: 'alterne', answer: 85 },
    { angle: 100, type: 'correspondant', answer: 100 },
    { angle: 60, type: 'alterne', answer: 60 },
    { angle: 45, type: 'correspondant', answer: 45 },
    { angle: 90, type: 'alterne', answer: 90 },
    { angle: 110, type: 'correspondant', answer: 110 },
    { angle: 35, type: 'alterne', answer: 35 },
  ];

  level2.forEach(q => {
    const typeText = q.type === 'alterne' ? 'alterne-interne' : 'correspondant';
    const typeTextEn = q.type === 'alterne' ? 'alternate interior' : 'corresponding';
    const typeTextNl = q.type === 'alterne' ? 'verwisselende binnenhoek' : 'overeenkomstige hoek';

    questions.push({
      "id": `G3_gen_${id++}`,
      "category": "G3",
      "level": 2,
      "text": {
        "fr": `Avec deux droites parallèles, si un angle vaut ${q.angle}°, calcule son angle ${typeText}.`,
        "en": `With two parallel lines, if an angle is ${q.angle}°, calculate its ${typeTextEn} angle.`,
        "nl": `Met twee evenwijdige lijnen, als een hoek ${q.angle}° is, bereken de ${typeTextNl}.`
      },
      "answer": q.answer,
      "tolerance": 0,
      "hint": {
        "fr": "Les angles alternes-internes et correspondants sont égaux avec des droites parallèles.",
        "en": "Alternate interior and corresponding angles are equal with parallel lines.",
        "nl": "Verwisselende binnen- en overeenkomstige hoeken zijn gelijk bij evenwijdige lijnen."
      }
    });
  });

  // NIVEAU 3 - Problèmes combinés (15 questions)
  const level3 = [
    { desc: 'Deux angles adjacents font 180°. Si l\'un vaut 125°, calcule l\'autre', answer: 55 },
    { desc: 'Trois angles autour d\'un point. Deux valent 80° et 120°. Calcule le 3e', answer: 160 },
    { desc: 'Un angle droit est divisé en deux. Une partie vaut 35°. Calcule l\'autre', answer: 55 },
    { desc: 'Somme de 3 angles = 180°. Deux valent 50° et 70°. Calcule le 3e', answer: 60 },
    { desc: 'Angles opposés par le sommet. L\'un vaut 115°. Calcule l\'autre', answer: 115 },
    { desc: 'Deux angles complémentaires. L\'un vaut 2 fois l\'autre. Calcule le plus petit', answer: 30 },
    { desc: 'Deux angles supplémentaires. L\'un vaut 3 fois l\'autre. Calcule le plus petit', answer: 45 },
    { desc: 'Angle plat divisé en 3 parts égales. Calcule chaque part', answer: 60 },
    { desc: 'Quatre angles autour d\'un point, tous égaux. Calcule chaque angle', answer: 90 },
    { desc: 'Triangle: deux angles valent 65° et 45°. Calcule le 3e angle', answer: 70 },
    { desc: 'Triangle rectangle: un angle aigu vaut 35°. Calcule l\'autre angle aigu', answer: 55 },
    { desc: 'Triangle isocèle: l\'angle au sommet vaut 40°. Calcule un angle de base', answer: 70 },
    { desc: 'Triangle équilatéral: calcule chaque angle', answer: 60 },
    { desc: 'Angle extérieur d\'un triangle vaut 120°. Un angle intérieur non adjacent vaut 70°. Calcule l\'autre', answer: 50 },
    { desc: 'Deux droites parallèles coupées par une sécante. Un angle vaut 135°. Calcule son angle opposé interne', answer: 45 },
  ];

  level3.forEach((q, idx) => {
    questions.push({
      "id": `G3_gen_${id++}`,
      "category": "G3",
      "level": 3,
      "text": {
        "fr": q.desc + '.',
        "en": q.desc + ' (in degrees).',
        "nl": q.desc + ' (in graden).'
      },
      "answer": q.answer,
      "tolerance": 0,
      "hint": {
        "fr": "Utilise les propriétés: somme angles triangle=180°, angles autour point=360°, droites parallèles.",
        "en": "Use properties: triangle angles sum=180°, angles around point=360°, parallel lines.",
        "nl": "Gebruik eigenschappen: driehoek hoeken som=180°, hoeken rond punt=360°, evenwijdige lijnen."
      }
    });
  });

  return questions;
}

// ============================================================================
// MAIN
// ============================================================================

console.log('📝 Génération de questions pour G5...');
const g5Questions = generateG5Questions();
console.log(`   ✅ ${g5Questions.length} questions générées\n`);

console.log('📝 Génération de questions pour G3...');
const g3Questions = generateG3Questions();
console.log(`   ✅ ${g3Questions.length} questions générées\n`);

// Fusionner avec les questions existantes
function mergeAndSave(category, newQuestions) {
  const existingPath = path.join(dataDir, `questions-${category}-new.json`);
  let allQuestions = [];

  if (fs.existsSync(existingPath)) {
    const existing = JSON.parse(fs.readFileSync(existingPath, 'utf-8'));
    console.log(`   📊 ${category}: ${existing.length} questions existantes`);
    allQuestions = [...existing, ...newQuestions];
  } else {
    allQuestions = newQuestions;
  }

  // Sauvegarder
  fs.writeFileSync(existingPath, JSON.stringify(allQuestions, null, 2), 'utf-8');
  console.log(`   💾 ${category}: ${allQuestions.length} questions totales sauvegardées\n`);
}

console.log('💾 Fusion avec les questions existantes...\n');
mergeAndSave('G5', g5Questions);
mergeAndSave('G3', g3Questions);

console.log('✅ Population terminée !');
console.log('\n📊 Résumé final:');
console.log(`   G5 (Inégalité triangulaire): ${g5Questions.length + 12} questions`);
console.log(`   G3 (Angles): ${g3Questions.length + 15} questions`);
