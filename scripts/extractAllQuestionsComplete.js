import mammoth from 'mammoth';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const WORD_DIR = path.join(__dirname, '../public/word');
const OUTPUT_DIR = path.join(__dirname, '../extracted');

// Documents à extraire avec leurs catégories
const DOCUMENTS = [
  { file: 'Distributivite_Simple_CE1D.docx', category: 'A1', targetCount: 30 },
  { file: 'Variantes_Double_Distributivite_CE1D.docx', category: 'A2', targetCount: 24 },
  { file: 'Variantes_Calcul_Litteral_Complet_CE1D.docx', category: 'A3', targetCount: 35 },
  { file: 'Variantes_PGCD_PPCM_Multiples_CE1D.docx', category: 'A4', targetCount: 30 },
  { file: 'Jeu_Duel_Equations_1er_degre.docx', category: 'A5', targetCount: 30 },
  { file: 'Variantes_Produits_Remarquables_CE1D.docx', category: 'A8', targetCount: 6 },
  { file: 'Dossier_Fractions_Encadrements_Variantes.docx', category: 'A9', targetCount: 10 },
  { file: 'Chapitre_Complet_Puissances_CE1D_Tous_Exercices.docx', category: 'N3', targetCount: 6 },
  { file: 'Figures_Planes_Diagonales_Jeu_Duel.docx', category: 'G2', targetCount: 30 },
  { file: 'Angles_Droites_Paralleles_Jeu_Duel.docx', category: 'G3', targetCount: 30 },
  { file: 'Triangles_Jeu_Duel.docx', category: 'G4', targetCount: 24 },
  { file: 'Dossier_Complet_Inegalite_Triangulaire.docx', category: 'G5', targetCount: 29 },
  { file: 'corrige_detaille_perimetres_aires.docx', category: 'G6', targetCount: 5 },
  { file: 'Proportionnalite_Jeu_Duel_Complet_Avec_Consignes.docx', category: 'P1', targetCount: 40 },
  { file: 'Statistiques_Probabilites_Jeu_Duel.docx', category: 'D1', targetCount: 20 }
];

// Extraire le texte d'un document
async function extractText(docPath) {
  try {
    const result = await mammoth.extractRawText({ path: docPath });
    return result.value;
  } catch (error) {
    console.error(`Erreur lors de l'extraction de ${docPath}:`, error.message);
    return '';
  }
}

// Déterminer le niveau de difficulté d'une question basé sur sa position et le contexte
function determineDifficulty(text, questionIndex, totalQuestions) {
  const lowerText = text.toLowerCase();

  // Si le texte mentionne explicitement un niveau
  if (lowerText.includes('niveau 1') || lowerText.includes('niv 1') || lowerText.includes('facile')) {
    return 1;
  }
  if (lowerText.includes('niveau 2') || lowerText.includes('niv 2') || lowerText.includes('moyen')) {
    return 2;
  }
  if (lowerText.includes('niveau 3') || lowerText.includes('niv 3') || lowerText.includes('difficile')) {
    return 3;
  }

  // Sinon, répartir selon la position (1/3 facile, 1/3 moyen, 1/3 difficile)
  const third = totalQuestions / 3;
  if (questionIndex < third) return 1;
  if (questionIndex < third * 2) return 2;
  return 3;
}

// Extraire les questions d'un texte
function extractQuestions(text, category) {
  const lines = text.split('\n').map(l => l.trim()).filter(l => l.length > 0);
  const questions = [];

  let inCorrections = false;
  let currentExercise = '';
  let exerciseNumber = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const lowerLine = line.toLowerCase();

    // Détecter la section corrections
    if (lowerLine.includes('correction') || lowerLine.includes('réponse') || lowerLine.includes('solution')) {
      inCorrections = true;
      continue;
    }

    // Patterns pour détecter un exercice
    const exercisePattern = /^(\d+[\)\.]\s*|exercice\s*\d+|question\s*\d+)/i;

    if (exercisePattern.test(line) && !inCorrections) {
      // Nouvelle question
      if (currentExercise) {
        exerciseNumber++;
        questions.push({
          text: currentExercise.trim(),
          number: exerciseNumber
        });
      }
      currentExercise = line.replace(exercisePattern, '').trim();
    } else if (!inCorrections && currentExercise) {
      // Continuer l'exercice courant
      currentExercise += ' ' + line;
    }
  }

  // Ajouter le dernier exercice
  if (currentExercise && !inCorrections) {
    exerciseNumber++;
    questions.push({
      text: currentExercise.trim(),
      number: exerciseNumber
    });
  }

  return questions;
}

// Extraire les réponses de la section corrections
function extractAnswers(text) {
  const lines = text.split('\n').map(l => l.trim()).filter(l => l.length > 0);
  const answers = [];

  let inCorrections = false;

  for (const line of lines) {
    const lowerLine = line.toLowerCase();

    // Détecter la section corrections
    if (lowerLine.includes('correction') || lowerLine.includes('réponse') || lowerLine.includes('solution')) {
      inCorrections = true;
      continue;
    }

    if (inCorrections) {
      // Pattern pour réponse: "1) réponse" ou "1. réponse" ou "Réponse 1: xxx"
      const answerPattern = /^(\d+)[\)\.:\s]+(.+)$/;
      const match = line.match(answerPattern);

      if (match) {
        const number = parseInt(match[1]);
        const answer = match[2].trim();
        answers.push({ number, answer });
      }
    }
  }

  return answers;
}

// Convertir une question en format JSON
function formatQuestion(question, answer, category, difficulty) {
  const id = `${category}_extracted_${question.number}`;

  // Nettoyer la réponse pour obtenir un nombre si possible
  let numericAnswer = answer;
  if (answer) {
    const numberMatch = answer.match(/-?\d+\.?\d*/);
    if (numberMatch) {
      numericAnswer = parseFloat(numberMatch[0]);
    }
  }

  return {
    id,
    category,
    level: difficulty,
    text: {
      fr: question.text,
      en: question.text, // À traduire plus tard si nécessaire
      nl: question.text  // À traduire plus tard si nécessaire
    },
    answer: numericAnswer || answer || '?',
    tolerance: 0,
    hint: {
      fr: `Question extraite du document pour ${category}`,
      en: `Question extracted from document for ${category}`,
      nl: `Vraag geëxtraheerd uit document voor ${category}`
    }
  };
}

// Extraire les questions d'un document
async function extractFromDocument(doc) {
  const filePath = path.join(WORD_DIR, doc.file);

  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  ${doc.file} - Non trouvé`);
    return [];
  }

  console.log(`\n📄 Extraction: ${doc.file}`);

  const text = await extractText(filePath);

  // Extraire questions et réponses
  const questions = extractQuestions(text, doc.category);
  const answers = extractAnswers(text);

  console.log(`   Questions trouvées: ${questions.length}`);
  console.log(`   Réponses trouvées: ${answers.length}`);

  // Combiner questions et réponses
  const formattedQuestions = questions.map((q, index) => {
    const answerObj = answers.find(a => a.number === q.number);
    const answer = answerObj ? answerObj.answer : '?';
    const difficulty = determineDifficulty(q.text, index, questions.length);

    return formatQuestion(q, answer, doc.category, difficulty);
  });

  // Filtrer les questions sans réponse valide
  const validQuestions = formattedQuestions.filter(q => q.answer !== '?');

  console.log(`   ✓ Questions valides: ${validQuestions.length}/${formattedQuestions.length}`);

  // Afficher la répartition par niveau
  const niv1 = validQuestions.filter(q => q.level === 1).length;
  const niv2 = validQuestions.filter(q => q.level === 2).length;
  const niv3 = validQuestions.filter(q => q.level === 3).length;
  console.log(`   Répartition: Niv1=${niv1}, Niv2=${niv2}, Niv3=${niv3}`);

  return validQuestions;
}

// Extraire toutes les questions de tous les documents
async function extractAll() {
  console.log('🔍 Extraction complète de toutes les questions...\n');

  // Créer le dossier de sortie
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const allResults = {};
  let totalExtracted = 0;

  for (const doc of DOCUMENTS) {
    const questions = await extractFromDocument(doc);

    if (questions.length > 0) {
      allResults[doc.category] = {
        category: doc.category,
        file: doc.file,
        targetCount: doc.targetCount,
        extractedCount: questions.length,
        questions
      };
      totalExtracted += questions.length;

      // Sauvegarder individuellement
      const outputFile = path.join(OUTPUT_DIR, `questions-${doc.category}-extracted.json`);
      fs.writeFileSync(outputFile, JSON.stringify(questions, null, 2));
      console.log(`   💾 Sauvegardé: questions-${doc.category}-extracted.json`);
    }
  }

  // Sauvegarder le résumé
  const summaryFile = path.join(OUTPUT_DIR, 'extraction-summary.json');
  fs.writeFileSync(summaryFile, JSON.stringify(allResults, null, 2));

  console.log(`\n\n✅ Extraction terminée!`);
  console.log(`📊 Total de questions extraites: ${totalExtracted}`);
  console.log(`📁 Fichiers sauvegardés dans: ${OUTPUT_DIR}`);

  // Afficher le résumé par catégorie
  console.log('\n📚 RÉSUMÉ PAR CATÉGORIE:\n');
  Object.values(allResults).forEach(result => {
    const niv1 = result.questions.filter(q => q.level === 1).length;
    const niv2 = result.questions.filter(q => q.level === 2).length;
    const niv3 = result.questions.filter(q => q.level === 3).length;

    console.log(`${result.category.padEnd(4)} : ${result.extractedCount.toString().padStart(3)} questions (Niv1=${niv1}, Niv2=${niv2}, Niv3=${niv3})`);
  });
}

extractAll();
