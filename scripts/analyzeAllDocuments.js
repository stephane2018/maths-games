import mammoth from 'mammoth';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const WORD_DIR = path.join(__dirname, '../public/word');
const OUTPUT_FILE = path.join(__dirname, '../extracted/documents-analysis.json');

// Documents à analyser avec leurs catégories
const DOCUMENTS = [
  { file: 'Distributivite_Simple_CE1D.docx', category: 'A1', label: 'Distributivité simple' },
  { file: 'Variantes_Double_Distributivite_CE1D.docx', category: 'A2', label: 'Double distributivité' },
  { file: 'Variantes_Calcul_Litteral_Complet_CE1D.docx', category: 'A3', label: 'Calcul littéral' },
  { file: 'Variantes_PGCD_PPCM_Multiples_CE1D.docx', category: 'A4', label: 'PPCM et PGCD' },
  { file: 'Jeu_Duel_Equations_1er_degre.docx', category: 'A5', label: 'Équations du 1er degré' },
  { file: 'Variantes_Produits_Remarquables_CE1D.docx', category: 'A8', label: 'Produits remarquables' },
  { file: 'Dossier_Fractions_Encadrements_Variantes.docx', category: 'A9', label: 'Fractions' },
  { file: 'Chapitre_Complet_Puissances_CE1D_Tous_Exercices.docx', category: 'N3', label: 'Puissances' },
  { file: 'Figures_Planes_Diagonales_Jeu_Duel.docx', category: 'G2', label: 'Figures planes et diagonales' },
  { file: 'Angles_Droites_Paralleles_Jeu_Duel.docx', category: 'G3', label: 'Angles et droites parallèles' },
  { file: 'Triangles_Jeu_Duel.docx', category: 'G4', label: 'Triangles' },
  { file: 'Dossier_Complet_Inegalite_Triangulaire.docx', category: 'G5', label: 'Inégalité triangulaire' },
  { file: 'corrige_detaille_perimetres_aires.docx', category: 'G6', label: 'Périmètres et aires' },
  { file: 'Proportionnalite_Jeu_Duel_Complet_Avec_Consignes.docx', category: 'P1', label: 'Proportionnalité' },
  { file: 'Statistiques_Probabilites_Jeu_Duel.docx', category: 'D1', label: 'Statistiques et Probabilités' }
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

// Analyser le niveau de difficulté dans le texte
function analyzeDifficulty(text) {
  const levels = {
    niveau1: 0,
    niveau2: 0,
    niveau3: 0,
    facile: 0,
    moyen: 0,
    difficile: 0
  };

  const lines = text.toLowerCase().split('\n');

  lines.forEach(line => {
    if (line.includes('niveau 1') || line.includes('niveau1') || line.includes('niv 1') || line.includes('niv1')) {
      levels.niveau1++;
    }
    if (line.includes('niveau 2') || line.includes('niveau2') || line.includes('niv 2') || line.includes('niv2')) {
      levels.niveau2++;
    }
    if (line.includes('niveau 3') || line.includes('niveau3') || line.includes('niv 3') || line.includes('niv3')) {
      levels.niveau3++;
    }
    if (line.includes('facile')) {
      levels.facile++;
    }
    if (line.includes('moyen')) {
      levels.moyen++;
    }
    if (line.includes('difficile')) {
      levels.difficile++;
    }
  });

  return levels;
}

// Compter les exercices
function countExercises(text) {
  const patterns = [
    /exercice\s*\d+/gi,
    /question\s*\d+/gi,
    /\d+[\)\.]\s*[A-Z]/g,
    /^\s*\d+\s*[\)\.](?!\d)/gm
  ];

  let maxCount = 0;
  patterns.forEach(pattern => {
    const matches = text.match(pattern);
    if (matches && matches.length > maxCount) {
      maxCount = matches.length;
    }
  });

  return maxCount;
}

// Analyser tous les documents
async function analyzeAllDocuments() {
  console.log('🔍 Analyse des documents Word...\n');

  const results = [];

  for (const doc of DOCUMENTS) {
    const filePath = path.join(WORD_DIR, doc.file);

    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  ${doc.file} - Non trouvé`);
      continue;
    }

    console.log(`📄 Analyse: ${doc.file}`);

    const text = await extractText(filePath);
    const wordCount = text.split(/\s+/).length;
    const exerciseCount = countExercises(text);
    const difficulty = analyzeDifficulty(text);

    const hasCorrections = text.toLowerCase().includes('correction') ||
                          text.toLowerCase().includes('réponse') ||
                          text.toLowerCase().includes('solution');

    const result = {
      file: doc.file,
      category: doc.category,
      label: doc.label,
      wordCount,
      estimatedExercises: exerciseCount,
      difficultyMentions: difficulty,
      hasCorrections,
      textLength: text.length
    };

    results.push(result);

    console.log(`   ✓ Mots: ${wordCount}, Exercices estimés: ${exerciseCount}, Corrections: ${hasCorrections ? 'Oui' : 'Non'}`);
    console.log(`   Niveaux: Niv1=${difficulty.niveau1}, Niv2=${difficulty.niveau2}, Niv3=${difficulty.niveau3}\n`);
  }

  // Sauvegarder les résultats
  const outputDir = path.dirname(OUTPUT_FILE);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(results, null, 2));

  console.log(`\n✅ Analyse terminée! Résultats sauvegardés dans: ${OUTPUT_FILE}`);

  // Afficher le résumé
  console.log('\n📊 RÉSUMÉ PAR CATÉGORIE:\n');
  results.forEach(r => {
    console.log(`${r.category.padEnd(4)} - ${r.label.padEnd(35)} : ~${r.estimatedExercises.toString().padStart(3)} exercices`);
  });

  const totalExercises = results.reduce((sum, r) => sum + r.estimatedExercises, 0);
  console.log(`\n🎯 TOTAL ESTIMÉ: ~${totalExercises} exercices dans tous les documents`);
}

analyzeAllDocuments();
