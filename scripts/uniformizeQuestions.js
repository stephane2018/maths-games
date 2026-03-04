import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Fichiers à reformater (anciennes questions)
const FILES_TO_UNIFORMIZE = [
  'questions-N1.js',
  'questions-N2.js',
  'questions-N3.js',
  'questions-N4.js',
  'questions-N5.js',
  'questions-N6.js',
  'questions-G1.js',
  'questions-G2.js',
  'questions-G3.js',
  'questions-G4.js',
  'questions-G5.js',
  'questions-G6.js',
  'questions-G7.js',
  'questions-P1.js',
  'questions-D1.js',
  'questions-D2.js',
  'questions-M1.js'
];

const dataDir = path.join(__dirname, '../src/data');

console.log('🔧 Uniformisation des questions - Style JSON\n');

for (const filename of FILES_TO_UNIFORMIZE) {
  const filePath = path.join(dataDir, filename);

  // Vérifier si le fichier existe
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  ${filename} - Fichier introuvable, ignoré`);
    continue;
  }

  console.log(`📝 Traitement de ${filename}...`);

  // Lire le contenu du fichier
  let content = fs.readFileSync(filePath, 'utf-8');

  // Sauvegarder une copie de backup
  const backupPath = filePath.replace('.js', '.backup.js');
  fs.writeFileSync(backupPath, content, 'utf-8');
  console.log(`   ✓ Backup créé: ${filename.replace('.js', '.backup.js')}`);

  // Transformation du contenu
  // Étape 1: Ajouter des guillemets autour de TOUTES les clés (même en milieu de ligne)
  content = content.replace(/(\s)(id|category|level|text|answer|tolerance|hint|unit):/g, '$1"$2":');

  // Étape 2: Ajouter des guillemets autour des clés de langue (fr, en, nl)
  content = content.replace(/(\s)(fr|en|nl):/g, '$1"$2":');

  // Écrire le fichier reformaté
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`   ✅ ${filename} reformaté avec succès\n`);
}

console.log('✨ Uniformisation terminée !');
console.log('📌 Note: Des fichiers .backup.js ont été créés pour chaque fichier modifié');
console.log('🧹 Tu peux les supprimer après vérification avec: rm src/data/*.backup.js');
