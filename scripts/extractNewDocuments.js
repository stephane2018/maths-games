import mammoth from 'mammoth';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Nouveaux fichiers à traiter avec leur catégorie cible
const NEW_FILES = [
  { filename: 'Angles_Droites_Paralleles_Jeu_Duel.docx', category: 'G', subcategory: 'G3' },
  { filename: 'Dossier_Complet_Inegalite_Triangulaire.docx', category: 'G', subcategory: 'G5' },
  { filename: 'Dossier_Fractions_Encadrements_Variantes.docx', category: 'N', subcategory: 'N3' },
  { filename: 'Figures_Planes_Diagonales_Jeu_Duel.docx', category: 'G', subcategory: 'G2' },
  { filename: 'Proportionnalite_Jeu_Duel_Complet_Avec_Consignes.docx', category: 'P', subcategory: 'P1' },
  { filename: 'Statistiques_Probabilites_Jeu_Duel.docx', category: 'D', subcategory: 'D1' },
  { filename: 'Triangles_Jeu_Duel.docx', category: 'G', subcategory: 'G4' },
  { filename: 'corrige_detaille_perimetres_aires.docx', category: 'G', subcategory: 'G1' }
];

const wordDir = path.join(__dirname, '../public/word');
const extractedDir = path.join(__dirname, '../extracted-new');

// Créer le dossier d'extraction s'il n'existe pas
if (!fs.existsSync(extractedDir)) {
  fs.mkdirSync(extractedDir, { recursive: true });
}

console.log('📚 Extraction des nouveaux documents Word\n');

async function extractDocument(fileInfo) {
  const { filename, category, subcategory } = fileInfo;
  const filePath = path.join(wordDir, filename);

  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  ${filename} - Fichier introuvable`);
    return null;
  }

  console.log(`📄 Extraction de ${filename}...`);

  try {
    const result = await mammoth.extractRawText({ path: filePath });
    const text = result.value;

    // Sauvegarder le texte extrait
    const outputPath = path.join(extractedDir, `${subcategory}_${filename.replace('.docx', '.txt')}`);
    fs.writeFileSync(outputPath, text, 'utf-8');

    console.log(`   ✅ Extrait vers ${path.basename(outputPath)}`);

    return {
      filename,
      category,
      subcategory,
      text,
      outputPath
    };
  } catch (error) {
    console.error(`   ❌ Erreur: ${error.message}`);
    return null;
  }
}

// Parser les exercices depuis le texte
function parseExercises(text, fileInfo) {
  const exercises = [];
  const lines = text.split('\n').map(l => l.trim()).filter(l => l.length > 0);

  let currentExercise = null;
  let currentAnswer = null;
  let exerciseNumber = 1;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Détection d'un exercice (différents formats possibles)
    const exerciseMatch = line.match(/^(?:Exercice\s+)?(\d+)[.:)]\s*(.+)/i) ||
                         line.match(/^(\d+)[.:)]\s*(.+)/) ||
                         line.match(/^Question\s+(\d+)[.:)]\s*(.+)/i);

    // Détection d'une réponse/correction
    const answerMatch = line.match(/^(?:Réponse|Correction|Solution|=)\s*[.:)]\s*(.+)/i) ||
                       line.match(/^R[.:)]\s*(.+)/i) ||
                       line.match(/^=\s*(.+)/);

    if (exerciseMatch) {
      // Sauvegarder l'exercice précédent s'il existe
      if (currentExercise && currentAnswer) {
        exercises.push({
          id: `${fileInfo.subcategory}_${exerciseNumber}`,
          category: fileInfo.subcategory,
          question: currentExercise,
          answer: currentAnswer
        });
        exerciseNumber++;
      }

      currentExercise = exerciseMatch[2] || exerciseMatch[1];
      currentAnswer = null;
    } else if (answerMatch && currentExercise) {
      currentAnswer = answerMatch[1];
    } else if (currentExercise && !currentAnswer && line.includes('=')) {
      // Si la ligne contient un = et qu'on a un exercice sans réponse
      const parts = line.split('=');
      if (parts.length === 2) {
        currentAnswer = parts[1].trim();
      }
    }
  }

  // Sauvegarder le dernier exercice
  if (currentExercise && currentAnswer) {
    exercises.push({
      id: `${fileInfo.subcategory}_${exerciseNumber}`,
      category: fileInfo.subcategory,
      question: currentExercise,
      answer: currentAnswer
    });
  }

  return exercises;
}

// Traiter tous les fichiers
async function processAllFiles() {
  const allExercises = {};

  for (const fileInfo of NEW_FILES) {
    const extracted = await extractDocument(fileInfo);

    if (extracted) {
      const exercises = parseExercises(extracted.text, fileInfo);

      if (!allExercises[extracted.subcategory]) {
        allExercises[extracted.subcategory] = [];
      }

      allExercises[extracted.subcategory].push(...exercises);
      console.log(`   📊 ${exercises.length} exercices trouvés\n`);
    }
  }

  // Sauvegarder le résumé
  const summaryPath = path.join(extractedDir, 'extraction-summary.json');
  fs.writeFileSync(summaryPath, JSON.stringify(allExercises, null, 2), 'utf-8');
  console.log(`\n✅ Résumé sauvegardé: ${summaryPath}`);

  // Afficher le résumé
  console.log('\n📊 Résumé de l\'extraction:');
  for (const [category, exercises] of Object.entries(allExercises)) {
    console.log(`   ${category}: ${exercises.length} exercices`);
  }
}

processAllFiles().catch(console.error);
