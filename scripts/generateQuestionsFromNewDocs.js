import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const extractedDir = path.join(__dirname, '../extracted-new');
const dataDir = path.join(__dirname, '../src/data');

console.log('🎯 Génération de questions depuis les nouveaux documents\n');

// Mapping catégories → fichiers existants
const CATEGORY_MAPPING = {
  'G1': { file: 'questions-G1.js', name: 'Périmètres et aires' },
  'G2': { file: 'questions-G2.js', name: 'Figures planes' },
  'G3': { file: 'questions-G3.js', name: 'Angles et droites' },
  'G4': { file: 'questions-G4.js', name: 'Triangles' },
  'G5': { file: 'questions-G5.js', name: 'Inégalité triangulaire' },
  'N3': { file: 'questions-N3.js', name: 'Fractions' },
  'P1': { file: 'questions-P1.js', name: 'Proportionnalité' },
  'D1': { file: 'questions-D1.js', name: 'Statistiques et probabilités' }
};

// Parser le fichier G1 (Périmètres et aires)
function parseG1File() {
  const filePath = path.join(extractedDir, 'G1_corrige_detaille_perimetres_aires.txt');
  const content = fs.readFileSync(filePath, 'utf-8');

  const questions = [];
  const lines = content.split('\n');

  let currentQuestion = null;
  let currentAnswer = null;
  let idCounter = 1;

  for (const line of lines) {
    const trimmed = line.trim();

    // Détection de question (commence par CALCULE)
    if (trimmed.startsWith('CALCULE')) {
      if (currentQuestion && currentAnswer) {
        questions.push({
          id: `G1_new_${idCounter++}`,
          category: 'G1',
          question: currentQuestion,
          answer: currentAnswer
        });
      }
      currentQuestion = trimmed;
      currentAnswer = null;
    }

    // Détection de réponse
    if (trimmed.startsWith('Réponse :') || trimmed.includes('Réponse :')) {
      const match = trimmed.match(/Réponse\s*:\s*(.+)/);
      if (match) {
        currentAnswer = match[1].trim();
      }
    }
  }

  // Dernière question
  if (currentQuestion && currentAnswer) {
    questions.push({
      id: `G1_new_${idCounter++}`,
      category: 'G1',
      question: currentQuestion,
      answer: currentAnswer
    });
  }

  return questions;
}

// Parser le fichier P1 (Proportionnalité)
function parseP1File() {
  const filePath = path.join(extractedDir, 'P1_Proportionnalite_Jeu_Duel_Complet_Avec_Consignes.txt');
  const content = fs.readFileSync(filePath, 'utf-8');

  const questions = [];
  const lines = content.split('\n');

  let idCounter = 1;
  let currentManche = '';

  for (let i = 0; i < lines.length; i++) {
    const trimmed = lines[i].trim();

    // Détecter les manches pour contexte
    if (trimmed.startsWith('MANCHE')) {
      currentManche = trimmed;
      continue;
    }

    // Questions format: "1) CALCULE..." ou "1) x=... → DÉTERMINE..."
    const questionMatch = trimmed.match(/^(\d+)\)\s+(.+)/);

    if (questionMatch) {
      const questionText = questionMatch[2];

      // Pour l'instant, on génère juste la structure sans réponse calculée
      // On ajoutera les réponses manuellement ou via une AI
      questions.push({
        id: `P1_new_${idCounter++}`,
        category: 'P1',
        question: questionText,
        answer: null,  // À compléter
        manche: currentManche
      });
    }
  }

  return questions;
}

// Assigner des niveaux de difficulté basés sur la complexité
function assignDifficultyLevel(question, index, total) {
  // Répartition: 33% facile, 33% moyen, 34% difficile
  const portion = index / total;

  if (portion < 0.33) return 1;
  if (portion < 0.66) return 2;
  return 3;
}

// Générer le format trilingue pour une question
function generateTrilingualText(frenchText) {
  // Pour l'instant, on utilise le français comme base
  // Plus tard, on pourra ajouter des traductions
  return {
    "fr": frenchText,
    "en": frenchText,  // Placeholder
    "nl": frenchText   // Placeholder
  };
}

// Générer un hint générique
function generateHint(category) {
  const hints = {
    'G1': {
      "fr": "Utilise les formules de périmètre et d'aire appropriées.",
      "en": "Use the appropriate perimeter and area formulas.",
      "nl": "Gebruik de juiste omtrek- en oppervlakteformules."
    },
    'P1': {
      "fr": "Utilise la proportionnalité: si y = k × x, trouve k puis applique-le.",
      "en": "Use proportionality: if y = k × x, find k then apply it.",
      "nl": "Gebruik evenredigheid: als y = k × x, vind k en pas het toe."
    }
  };

  return hints[category] || hints['G1'];
}

// Traiter et sauvegarder les questions
function processAndSave() {
  console.log('📝 Traitement de G1 (Périmètres et aires)...');
  const g1Questions = parseG1File();
  console.log(`   ✅ ${g1Questions.length} questions extraites\n`);

  console.log('📝 Traitement de P1 (Proportionnalité)...');
  const p1Questions = parseP1File();
  console.log(`   ✅ ${p1Questions.length} questions extraites (réponses à compléter)\n`);

  // Générer les fichiers de questions additionnelles
  const categories = {
    'G1': g1Questions,
    'P1': p1Questions
  };

  for (const [category, rawQuestions] of Object.entries(categories)) {
    if (rawQuestions.length === 0) continue;

    const formattedQuestions = rawQuestions
      .filter(q => q.answer)  // Garder seulement celles avec réponse
      .map((q, idx) => ({
        "id": q.id,
        "category": category,
        "level": assignDifficultyLevel(q, idx, rawQuestions.length),
        "text": generateTrilingualText(q.question),
        "answer": q.answer.replace(/[^0-9.,π²³-]/g, '').trim() || q.answer,
        "tolerance": 0.01,
        "hint": generateHint(category)
      }));

    // Sauvegarder dans un fichier temporaire pour review
    const outputPath = path.join(dataDir, `questions-${category}-additional.json`);
    fs.writeFileSync(outputPath, JSON.stringify(formattedQuestions, null, 2), 'utf-8');

    console.log(`✅ ${category}: ${formattedQuestions.length} questions sauvegardées → questions-${category}-additional.json`);
  }

  console.log('\n📌 Note: Les fichiers JSON ont été créés pour review.');
  console.log('📌 Les réponses pour P1 doivent être calculées et ajoutées manuellement.');
}

processAndSave();
