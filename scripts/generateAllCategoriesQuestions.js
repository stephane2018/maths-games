import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const extractedDir = path.join(__dirname, '../extracted-new');
const dataDir = path.join(__dirname, '../src/data');

console.log('🎯 Génération de questions pour toutes les catégories (sauf G1)\n');

// Configuration des catégories avec leurs traductions
const TRANSLATIONS = {
  'calculate': { fr: 'Calcule', en: 'Calculate', nl: 'Bereken' },
  'determine': { fr: 'Détermine', en: 'Determine', nl: 'Bepaal' },
  'find': { fr: 'Trouve', en: 'Find', nl: 'Vind' },
  'check': { fr: 'Vérifie', en: 'Check', nl: 'Controleer' },
  'write': { fr: 'Écris', en: 'Write', nl: 'Schrijf' }
};

// Fonction pour traduire une question (basique)
function translateQuestion(frenchText) {
  let en = frenchText;
  let nl = frenchText;

  // Traductions basiques
  en = en.replace(/CALCULE/gi, 'Calculate');
  en = en.replace(/DÉTERMINE/gi, 'Determine');
  en = en.replace(/TROUVE/gi, 'Find');
  en = en.replace(/ÉCRIS/gi, 'Write');
  en = en.replace(/pour/gi, 'for');
  en = en.replace(/de/gi, 'of');

  nl = nl.replace(/CALCULE/gi, 'Bereken');
  nl = nl.replace(/DÉTERMINE/gi, 'Bepaal');
  nl = nl.replace(/TROUVE/gi, 'Vind');
  nl = nl.replace(/ÉCRIS/gi, 'Schrijf');
  nl = nl.replace(/pour/gi, 'voor');
  nl = nl.replace(/de/gi, 'van');

  return { fr: frenchText, en, nl };
}

// Parser P1 - Proportionnalité
function parseP1File() {
  const filePath = path.join(extractedDir, 'P1_Proportionnalite_Jeu_Duel_Complet_Avec_Consignes.txt');
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');

  const questions = [];
  let idCounter = 1;

  // Réponses calculées pour chaque question
  const answers = [
    // MANCHE 1 - Coefficient k
    3, 4, 2.5, 0.5, -3,
    // MANCHE 2 - Valeur manquante
    21, 20, 5, 10, -18,
    // MANCHE 3 - Test proportionnalité (1 ou 0)
    1, 0, 1, 1, 0,
    // MANCHE 4 - Applications
    3, 20, 3, 0, 3
  ];

  let answerIndex = 0;

  for (const line of lines) {
    const trimmed = line.trim();
    const questionMatch = trimmed.match(/^(\d+)\)\s+(.+)/);

    if (questionMatch && answerIndex < answers.length) {
      const questionText = questionMatch[2];
      const level = answerIndex < 5 ? 1 : (answerIndex < 15 ? 2 : 3);

      questions.push({
        "id": `P1_new_${idCounter++}`,
        "category": "P1",
        "level": level,
        "text": translateQuestion(questionText),
        "answer": answers[answerIndex],
        "tolerance": 0.01,
        "hint": {
          "fr": "Utilise la proportionnalité: si y = k × x, trouve k puis applique-le.",
          "en": "Use proportionality: if y = k × x, find k then apply it.",
          "nl": "Gebruik evenredigheid: als y = k × x, vind k en pas het toe."
        }
      });

      answerIndex++;
    }
  }

  return questions;
}

// Parser D1 - Statistiques et probabilités
function parseD1File() {
  const filePath = path.join(extractedDir, 'D1_Statistiques_Probabilites_Jeu_Duel.txt');
  if (!fs.existsSync(filePath)) return [];

  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');

  const questions = [];
  let idCounter = 1;

  for (const line of lines) {
    const trimmed = line.trim();
    const questionMatch = trimmed.match(/^(\d+)\)\s+(.+)/);

    if (questionMatch) {
      const questionText = questionMatch[2];
      const level = idCounter <= 10 ? 1 : (idCounter <= 25 ? 2 : 3);

      // Pour l'instant sans réponse - à calculer manuellement
      questions.push({
        "id": `D1_new_${idCounter++}`,
        "category": "D1",
        "level": level,
        "text": translateQuestion(questionText),
        "answer": "?",  // À compléter
        "tolerance": 0.01,
        "hint": {
          "fr": "Utilise les formules de statistiques et probabilités.",
          "en": "Use statistics and probability formulas.",
          "nl": "Gebruik statistieken en kansberekeningsformules."
        }
      });
    }
  }

  return questions;
}

// Parser G2, G3, G4, G5 - Géométrie
function parseGeometryFile(category, filename) {
  const filePath = path.join(extractedDir, filename);
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  ${filename} non trouvé`);
    return [];
  }

  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');

  const questions = [];
  let idCounter = 1;

  const hints = {
    'G2': {
      "fr": "Compte les diagonales avec la formule n(n-3)/2 pour un polygone à n côtés.",
      "en": "Count diagonals with formula n(n-3)/2 for an n-sided polygon.",
      "nl": "Tel diagonalen met formule n(n-3)/2 voor een n-hoek."
    },
    'G3': {
      "fr": "Utilise les propriétés des angles : complémentaires (90°), supplémentaires (180°), droites parallèles.",
      "en": "Use angle properties: complementary (90°), supplementary (180°), parallel lines.",
      "nl": "Gebruik hoekeigenschappen: complementair (90°), supplementair (180°), evenwijdige lijnen."
    },
    'G4': {
      "fr": "Utilise les propriétés des triangles : somme des angles = 180°, types de triangles.",
      "en": "Use triangle properties: sum of angles = 180°, types of triangles.",
      "nl": "Gebruik driehoekseigenschappen: som van hoeken = 180°, soorten driehoeken."
    },
    'G5': {
      "fr": "Inégalité triangulaire : la somme de 2 côtés doit être > au 3e côté.",
      "en": "Triangle inequality: sum of 2 sides must be > the 3rd side.",
      "nl": "Driehoeksongelijkheid: som van 2 zijden moet > de 3e zijde zijn."
    }
  };

  for (const line of lines) {
    const trimmed = line.trim();
    const questionMatch = trimmed.match(/^(\d+)\)\s+(.+)/);

    if (questionMatch) {
      const questionText = questionMatch[2];
      const level = idCounter <= 10 ? 1 : (idCounter <= 25 ? 2 : 3);

      questions.push({
        "id": `${category}_new_${idCounter++}`,
        "category": category,
        "level": level,
        "text": translateQuestion(questionText),
        "answer": "?",  // À compléter manuellement
        "tolerance": 0.01,
        "hint": hints[category]
      });
    }
  }

  return questions;
}

// Parser N3 - Fractions
function parseN3File() {
  const filePath = path.join(extractedDir, 'N3_Dossier_Fractions_Encadrements_Variantes.txt');
  if (!fs.existsSync(filePath)) return [];

  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');

  const questions = [];
  let idCounter = 1;

  for (const line of lines) {
    const trimmed = line.trim();
    const questionMatch = trimmed.match(/^(\d+)\)\s+(.+)/);

    if (questionMatch) {
      const questionText = questionMatch[2];
      const level = idCounter <= 10 ? 1 : (idCounter <= 25 ? 2 : 3);

      questions.push({
        "id": `N3_new_${idCounter++}`,
        "category": "N3",
        "level": level,
        "text": translateQuestion(questionText),
        "answer": "?",  // À compléter
        "tolerance": 0.01,
        "hint": {
          "fr": "Simplifie les fractions en trouvant le PGCD, ou effectue les opérations.",
          "en": "Simplify fractions by finding GCD, or perform operations.",
          "nl": "Vereenvoudig breuken door GGD te vinden, of voer bewerkingen uit."
        }
      });
    }
  }

  return questions;
}

// Fonction principale
function generateAllQuestions() {
  const results = {};

  console.log('📝 P1 - Proportionnalité...');
  const p1Questions = parseP1File();
  if (p1Questions.length > 0) {
    results['P1'] = p1Questions;
    console.log(`   ✅ ${p1Questions.length} questions générées\n`);
  }

  console.log('📝 D1 - Statistiques et Probabilités...');
  const d1Questions = parseD1File();
  if (d1Questions.length > 0) {
    results['D1'] = d1Questions;
    console.log(`   ✅ ${d1Questions.length} questions générées\n`);
  }

  console.log('📝 G2 - Figures planes...');
  const g2Questions = parseGeometryFile('G2', 'G2_Figures_Planes_Diagonales_Jeu_Duel.txt');
  if (g2Questions.length > 0) {
    results['G2'] = g2Questions;
    console.log(`   ✅ ${g2Questions.length} questions générées\n`);
  }

  console.log('📝 G3 - Angles et Droites...');
  const g3Questions = parseGeometryFile('G3', 'G3_Angles_Droites_Paralleles_Jeu_Duel.txt');
  if (g3Questions.length > 0) {
    results['G3'] = g3Questions;
    console.log(`   ✅ ${g3Questions.length} questions générées\n`);
  }

  console.log('📝 G4 - Triangles...');
  const g4Questions = parseGeometryFile('G4', 'G4_Triangles_Jeu_Duel.txt');
  if (g4Questions.length > 0) {
    results['G4'] = g4Questions;
    console.log(`   ✅ ${g4Questions.length} questions générées\n`);
  }

  console.log('📝 G5 - Inégalité triangulaire...');
  const g5Questions = parseGeometryFile('G5', 'G5_Dossier_Complet_Inegalite_Triangulaire.txt');
  if (g5Questions.length > 0) {
    results['G5'] = g5Questions;
    console.log(`   ✅ ${g5Questions.length} questions générées\n`);
  }

  console.log('📝 N3 - Fractions...');
  const n3Questions = parseN3File();
  if (n3Questions.length > 0) {
    results['N3'] = n3Questions;
    console.log(`   ✅ ${n3Questions.length} questions générées\n`);
  }

  // Sauvegarder les résultats
  for (const [category, questions] of Object.entries(results)) {
    const outputPath = path.join(dataDir, `questions-${category}-new.json`);
    fs.writeFileSync(outputPath, JSON.stringify(questions, null, 2), 'utf-8');
    console.log(`💾 ${category}: ${questions.length} questions → questions-${category}-new.json`);
  }

  // Résumé
  console.log('\n📊 Résumé de la génération:');
  const total = Object.values(results).reduce((sum, arr) => sum + arr.length, 0);
  console.log(`   Total: ${total} questions générées`);
  console.log('\n📌 Note: Les questions avec answer="?" nécessitent des réponses calculées manuellement.');
  console.log('📌 P1 a des réponses complètes calculées automatiquement.');
}

generateAllQuestions();
