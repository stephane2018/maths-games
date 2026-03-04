import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataDir = path.join(__dirname, '../src/data');

console.log('🎯 Finalisation des questions - Suppression des questions incomplètes\n');

function finalizeCategory(category) {
  const jsonPath = path.join(dataDir, `questions-${category}-new.json`);

  if (!fs.existsSync(jsonPath)) {
    return;
  }

  const questions = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
  const before = questions.length;

  // Filtrer: garder seulement les questions avec réponse != "?"
  const completed = questions.filter(q => q.answer !== '?');

  console.log(`📝 ${category}:`);
  console.log(`   Avant: ${before} questions`);
  console.log(`   Après: ${completed.length} questions complètes`);
  console.log(`   Supprimées: ${before - completed.length} incomplètes\n`);

  // Sauvegarder
  fs.writeFileSync(jsonPath, JSON.stringify(completed, null, 2), 'utf-8');
}

// Traiter toutes les catégories
['D1', 'G2', 'G3', 'G4', 'G5', 'N3', 'P1'].forEach(finalizeCategory);

console.log('✅ Finalisation terminée !');
console.log('\n📊 Résumé final:');

// Résumé final
['D1', 'G2', 'G3', 'G4', 'G5', 'N3', 'P1'].forEach(cat => {
  const jsonPath = path.join(dataDir, `questions-${cat}-new.json`);
  if (fs.existsSync(jsonPath)) {
    const questions = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
    const levels = { 1: 0, 2: 0, 3: 0 };
    questions.forEach(q => levels[q.level]++);
    console.log(`   ${cat}: ${questions.length} questions (Niv1: ${levels[1]}, Niv2: ${levels[2]}, Niv3: ${levels[3]})`);
  }
});
