import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_DIR = path.join(__dirname, '../src/data');

// Catégories à fusionner
const CATEGORIES_TO_MERGE = [
  { code: 'A1', name: 'Distributivité simple' },
  { code: 'A2', name: 'Double distributivité' },
  { code: 'A3', name: 'Calcul littéral' },
  { code: 'A4', name: 'PPCM et PGCD' },
  { code: 'A5', name: 'Équations du 1er degré' },
  { code: 'A8', name: 'Produits remarquables' },
  { code: 'A9', name: 'Fractions' },
  { code: 'G2', name: 'Figures planes et diagonales' },
  { code: 'G3', name: 'Angles et droites parallèles' },
  { code: 'G4', name: 'Triangles' },
  { code: 'G5', name: 'Inégalité triangulaire' },
  { code: 'P1', name: 'Proportionnalité' },
  { code: 'D1', name: 'Statistiques et Probabilités' }
];

async function mergeQuestions() {
  console.log('🔄 Fusion des nouvelles questions avec les fichiers existants...\n');

  let totalAdded = 0;
  const summary = [];

  for (const category of CATEGORIES_TO_MERGE) {
    const oldFile = path.join(DATA_DIR, `questions-${category.code}.js`);
    const newFile = path.join(DATA_DIR, `questions-${category.code}-additional.json`);

    if (!fs.existsSync(newFile)) {
      console.log(`⚠️  ${category.code}: Pas de fichier additional trouvé, ignoré`);
      continue;
    }

    console.log(`📝 ${category.code} - ${category.name}:`);

    // Lire le fichier existant
    let oldContent = fs.readFileSync(oldFile, 'utf-8');

    // Extraire les questions existantes
    const questionsMatch = oldContent.match(/export const questions = (\[[\s\S]*?\]);/);
    if (!questionsMatch) {
      console.log(`   ❌ Impossible d'extraire les questions existantes`);
      continue;
    }

    const oldQuestionsStr = questionsMatch[1];
    // Parser le contenu (c'est du JS, pas du JSON pur, donc on utilise eval avec précaution)
    let oldQuestions;
    try {
      oldQuestions = eval(oldQuestionsStr);
    } catch (e) {
      console.log(`   ❌ Erreur de parsing: ${e.message}`);
      continue;
    }

    const oldCount = oldQuestions.length;

    // Lire les nouvelles questions
    const newQuestions = JSON.parse(fs.readFileSync(newFile, 'utf-8'));
    const newCount = newQuestions.length;

    // Fusionner
    const mergedQuestions = [...oldQuestions, ...newQuestions];

    // Compter par niveau
    const niv1 = mergedQuestions.filter(q => q.level === 1).length;
    const niv2 = mergedQuestions.filter(q => q.level === 2).length;
    const niv3 = mergedQuestions.filter(q => q.level === 3).length;

    // Générer le nouveau contenu
    const newContent = `export const questions = ${JSON.stringify(mergedQuestions, null, 2)};
`;

    // Sauvegarder
    fs.writeFileSync(oldFile, newContent, 'utf-8');

    totalAdded += newCount;

    console.log(`   ✓ ${oldCount} questions existantes + ${newCount} nouvelles = ${mergedQuestions.length} total`);
    console.log(`   Répartition: Niv1=${niv1}, Niv2=${niv2}, Niv3=${niv3}\n`);

    summary.push({
      code: category.code,
      name: category.name,
      old: oldCount,
      new: newCount,
      total: mergedQuestions.length,
      niv1, niv2, niv3
    });
  }

  // Afficher le résumé
  console.log('\n📊 RÉSUMÉ DE LA FUSION:\n');
  summary.forEach(s => {
    console.log(`${s.code.padEnd(4)} - ${s.name.padEnd(35)}: ${s.old.toString().padStart(3)} → ${s.total.toString().padStart(3)} questions (+${s.new})`);
    console.log(`       Répartition: Niv1=${s.niv1.toString().padStart(2)}, Niv2=${s.niv2.toString().padStart(2)}, Niv3=${s.niv3.toString().padStart(2)}`);
  });

  console.log(`\n🎯 TOTAL: +${totalAdded} nouvelles questions ajoutées!`);

  const grandTotal = summary.reduce((sum, s) => sum + s.total, 0);
  console.log(`📚 TOTAL GÉNÉRAL POUR CES CATÉGORIES: ${grandTotal} questions\n`);

  // Nettoyer les fichiers additional
  console.log('🧹 Suppression des fichiers temporaires...');
  for (const category of CATEGORIES_TO_MERGE) {
    const additionalFile = path.join(DATA_DIR, `questions-${category.code}-additional.json`);
    if (fs.existsSync(additionalFile)) {
      fs.unlinkSync(additionalFile);
      console.log(`   ✓ Supprimé: questions-${category.code}-additional.json`);
    }
  }

  console.log('\n✅ Fusion terminée!');
}

mergeQuestions();
