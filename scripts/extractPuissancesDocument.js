import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import mammoth from 'mammoth';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function extractPuissancesDocument() {
  const docPath = path.join(__dirname, '../public/word/Chapitre_Complet_Puissances_CE1D_Tous_Exercices.docx');

  try {
    const result = await mammoth.extractRawText({ path: docPath });
    const text = result.value;

    // Save the extracted text
    const outputPath = path.join(__dirname, '../public/word/puissances-extracted.txt');
    await fs.writeFile(outputPath, text, 'utf-8');

    console.log('✅ Document extrait avec succès!');
    console.log(`📄 Fichier sauvegardé: ${outputPath}`);
    console.log(`📊 Longueur du texte: ${text.length} caractères`);
    console.log('\n🔍 Aperçu des 1000 premiers caractères:');
    console.log(text.substring(0, 1000));

  } catch (error) {
    console.error('❌ Erreur lors de l\'extraction:', error);
  }
}

extractPuissancesDocument();
