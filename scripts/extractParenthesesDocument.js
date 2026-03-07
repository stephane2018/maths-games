import mammoth from 'mammoth';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function extractParenthesesDocument() {
  const docPath = path.join(__dirname, '../public/word/Exercices_Suppression_Parentheses_Sans_Distributivite_CE1D.docx');
  
  console.log('📄 Extracting document:', docPath);
  
  const result = await mammoth.extractRawText({ path: docPath });
  
  const outputPath = path.join(__dirname, 'parentheses-extracted.txt');
  await fs.writeFile(outputPath, result.value, 'utf-8');
  
  console.log('✅ Extracted to:', outputPath);
  console.log('📊 Total characters:', result.value.length);
  console.log('\n--- Preview (first 1000 characters) ---');
  console.log(result.value.substring(0, 1000));
}

extractParenthesesDocument().catch(console.error);
