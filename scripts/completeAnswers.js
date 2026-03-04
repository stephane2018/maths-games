import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const extractedDir = path.join(__dirname, '../extracted-new');
const dataDir = path.join(__dirname, '../src/data');

console.log('🔧 Complétion des réponses manquantes\n');

// Parser les corrections depuis un fichier texte
function parseCorrections(filePath) {
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  ${path.basename(filePath)} non trouvé`);
    return [];
  }

  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');

  const corrections = [];
  let inCorrectionsSection = false;

  for (const line of lines) {
    const trimmed = line.trim();

    // Détecter la section corrections (différents formats)
    if (trimmed.match(/^(PARTIE\s+)?CORRECTIONS?/i) ||
        trimmed.match(/^CORRIGÉS?/i) ||
        trimmed.match(/Correction\s+Format\s+Numérique/i) ||
        trimmed.match(/Correction\s+Détaillée/i)) {
      inCorrectionsSection = true;
      continue;
    }

    // Si on est dans la section corrections
    if (inCorrectionsSection) {
      // Format: "1) Réponse" ou juste "Réponse" après un numéro
      const correctionMatch = trimmed.match(/^(\d+)\)\s*(.+)/) ||
                            (trimmed && !trimmed.match(/^[A-Z\s]+$/) ? trimmed : null);

      if (correctionMatch) {
        if (typeof correctionMatch === 'string') {
          corrections.push(correctionMatch);
        } else {
          corrections.push(correctionMatch[2]);
        }
      }
    }
  }

  return corrections;
}

// Compléter les réponses pour une catégorie
function completeCategory(category, extractedFilename) {
  const jsonPath = path.join(dataDir, `questions-${category}-new.json`);
  const extractedPath = path.join(extractedDir, extractedFilename);

  if (!fs.existsSync(jsonPath)) {
    console.log(`⚠️  questions-${category}-new.json non trouvé`);
    return;
  }

  console.log(`📝 Traitement de ${category}...`);

  // Lire les questions
  const questions = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));

  // Lire les corrections
  const corrections = parseCorrections(extractedPath);

  if (corrections.length === 0) {
    console.log(`   ⚠️  Aucune correction trouvée dans ${extractedFilename}`);
    return;
  }

  console.log(`   📊 ${corrections.length} corrections trouvées`);

  // Appliquer les corrections
  let updated = 0;
  for (let i = 0; i < Math.min(questions.length, corrections.length); i++) {
    if (questions[i].answer === '?') {
      questions[i].answer = corrections[i];
      updated++;
    }
  }

  // Sauvegarder
  fs.writeFileSync(jsonPath, JSON.stringify(questions, null, 2), 'utf-8');
  console.log(`   ✅ ${updated} réponses complétées\n`);
}

// Traiter toutes les catégories
function completeAll() {
  completeCategory('G2', 'G2_Figures_Planes_Diagonales_Jeu_Duel.txt');
  completeCategory('G3', 'G3_Angles_Droites_Paralleles_Jeu_Duel.txt');
  completeCategory('G4', 'G4_Triangles_Jeu_Duel.txt');
  completeCategory('G5', 'G5_Dossier_Complet_Inegalite_Triangulaire.txt');
  completeCategory('D1', 'D1_Statistiques_Probabilites_Jeu_Duel.txt');
  completeCategory('N3', 'N3_Dossier_Fractions_Encadrements_Variantes.txt');

  console.log('✅ Complétion terminée !');
}

completeAll();
