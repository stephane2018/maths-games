import mammoth from 'mammoth';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOC_PATH = path.join(__dirname, '../public/word/Dossier_Complet_Inegalite_Triangulaire.docx');
const OUTPUT_DIR = path.join(__dirname, '../extracted');

async function extractInegaliteDocument() {
  console.log('📄 Extraction du document Dossier_Complet_Inegalite_Triangulaire.docx...\n');

  // Créer le dossier de sortie
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  // Extraire le texte
  const result = await mammoth.extractRawText({ path: DOC_PATH });
  const text = result.value;

  // Sauvegarder le texte brut
  const txtFile = path.join(OUTPUT_DIR, 'Inegalite_Triangulaire.txt');
  fs.writeFileSync(txtFile, text, 'utf-8');

  console.log(`✓ Texte extrait et sauvegardé dans: ${txtFile}`);
  console.log(`\nLongueur: ${text.length} caractères`);
  console.log(`Nombre de lignes: ${text.split('\n').length}`);

  // Afficher le contenu
  console.log('\n📋 CONTENU DU DOCUMENT:\n');
  console.log('─'.repeat(80));
  console.log(text);
  console.log('─'.repeat(80));

  return text;
}

extractInegaliteDocument();
