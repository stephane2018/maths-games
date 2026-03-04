import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataDir = path.join(__dirname, '../src/data');

console.log('🔄 Fusion et nettoyage des fichiers de questions\n');

// Mapping: nouveau fichier JSON → ancien fichier JS
const MERGE_MAP = {
  'questions-D1-new.json': 'questions-D1.js',
  'questions-G2-new.json': 'questions-G2.js',
  'questions-G3-new.json': 'questions-G3.js',
  'questions-G4-new.json': 'questions-G4.js',
  'questions-G5-new.json': 'questions-G5.js',
  'questions-P1-new.json': 'questions-P1.js',
  // N3 n'a pas de questions donc on ne le fusionne pas
};

// Fichiers à supprimer après fusion
const FILES_TO_DELETE = [
  'questions-D1-new.json',
  'questions-G1-additional.json',
  'questions-G2-new.json',
  'questions-G3-new.json',
  'questions-G4-new.json',
  'questions-G5-new.json',
  'questions-N3-new.json',
  'questions-P1-additional.json',
  'questions-P1-backup.js',
  'questions-P1-new.json',
];

// Fonction pour convertir JSON en format .js
function convertJsonToJs(questions, category, categoryName) {
  const header = `// =============================================================================
// ${category} - ${categoryName}
// CE1D Belgian exam - Trilingual (FR / EN / NL)
// ${questions.length} questions avec niveaux de difficulté
// =============================================================================

export const questions = `;

  return header + JSON.stringify(questions, null, 2) + ';\n';
}

// Fonction pour lire un fichier .js et extraire les questions
function readJsFile(filePath) {
  if (!fs.existsSync(filePath)) {
    return [];
  }

  const content = fs.readFileSync(filePath, 'utf-8');

  // Extraire le tableau de questions
  const match = content.match(/export\s+const\s+questions\s*=\s*(\[[\s\S]*?\]);/);

  if (match) {
    try {
      // Évaluer le JSON (attention: seulement sûr avec nos propres fichiers)
      const questionsStr = match[1];
      return JSON.parse(questionsStr);
    } catch (e) {
      console.error(`   ❌ Erreur de parsing pour ${path.basename(filePath)}: ${e.message}`);
      return [];
    }
  }

  return [];
}

// Fusionner et remplacer
function mergeAndReplace() {
  for (const [newFile, oldFile] of Object.entries(MERGE_MAP)) {
    const newPath = path.join(dataDir, newFile);
    const oldPath = path.join(dataDir, oldFile);

    if (!fs.existsSync(newPath)) {
      console.log(`⚠️  ${newFile} non trouvé, ignoré`);
      continue;
    }

    console.log(`📝 Traitement de ${oldFile}...`);

    // Lire les nouvelles questions (JSON)
    const newQuestions = JSON.parse(fs.readFileSync(newPath, 'utf-8'));
    console.log(`   📊 ${newQuestions.length} nouvelles questions`);

    // Lire les anciennes questions (JS)
    const oldQuestions = readJsFile(oldPath);
    console.log(`   📊 ${oldQuestions.length} anciennes questions`);

    // Fusionner (ajouter les nouvelles aux anciennes)
    const allQuestions = [...oldQuestions, ...newQuestions];
    console.log(`   ➕ Total: ${allQuestions.length} questions`);

    // Déterminer le nom de catégorie
    const categoryNames = {
      'D1': 'Statistiques et Probabilités',
      'G2': 'Figures planes et diagonales',
      'G3': 'Angles et droites parallèles',
      'G4': 'Triangles',
      'G5': 'Inégalité triangulaire',
      'P1': 'Proportionnalité'
    };

    const category = oldFile.match(/questions-([A-Z0-9]+)\.js/)[1];
    const categoryName = categoryNames[category] || category;

    // Convertir en format .js
    const jsContent = convertJsonToJs(allQuestions, category, categoryName);

    // Sauvegarder
    fs.writeFileSync(oldPath, jsContent, 'utf-8');
    console.log(`   ✅ ${oldFile} mis à jour avec ${allQuestions.length} questions\n`);
  }
}

// Supprimer les fichiers temporaires
function cleanup() {
  console.log('🧹 Nettoyage des fichiers temporaires...\n');

  let deleted = 0;
  for (const file of FILES_TO_DELETE) {
    const filePath = path.join(dataDir, file);

    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      console.log(`   🗑️  Supprimé: ${file}`);
      deleted++;
    }
  }

  console.log(`\n✅ ${deleted} fichiers supprimés`);
}

// Exécution
console.log('🔄 ÉTAPE 1: Fusion des fichiers\n');
mergeAndReplace();

console.log('\n🔄 ÉTAPE 2: Nettoyage\n');
cleanup();

console.log('\n✨ Opération terminée !');
console.log('\n📊 Résumé des fichiers finaux:');

// Lister les fichiers finaux
const finalFiles = fs.readdirSync(dataDir)
  .filter(f => f.startsWith('questions-') && f.endsWith('.js'))
  .sort();

finalFiles.forEach(file => {
  const filePath = path.join(dataDir, file);
  const questions = readJsFile(filePath);
  if (questions.length > 0) {
    const levels = { 1: 0, 2: 0, 3: 0 };
    questions.forEach(q => {
      if (q.level) levels[q.level]++;
    });
    console.log(`   ${file}: ${questions.length} questions (Niv1: ${levels[1]}, Niv2: ${levels[2]}, Niv3: ${levels[3]})`);
  }
});
