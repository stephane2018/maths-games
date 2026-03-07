import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Validate all questions and their answers
 * Check for:
 * - Missing fields
 * - Invalid answer types
 * - Potential calculation errors
 * - Inconsistencies
 */

const errors = [];
const warnings = [];

function validateQuestion(q, fileName) {
  const prefix = `${fileName} [${q.id}]`;

  // Check required fields
  if (!q.id) errors.push(`${prefix}: Missing 'id'`);
  if (!q.category) errors.push(`${prefix}: Missing 'category'`);
  if (!q.level) errors.push(`${prefix}: Missing 'level'`);
  if (!q.text || !q.text.fr) errors.push(`${prefix}: Missing 'text.fr'`);
  if (q.answer === undefined || q.answer === null) errors.push(`${prefix}: Missing 'answer'`);
  if (q.tolerance === undefined) errors.push(`${prefix}: Missing 'tolerance'`);

  // Check answer type
  const answerType = typeof q.answer;
  if (answerType !== 'number' && answerType !== 'string') {
    errors.push(`${prefix}: Answer must be number or string, got ${answerType}`);
  }

  // For numerical questions, try to validate the answer
  if (answerType === 'number' && q.text && q.text.fr) {
    const text = q.text.fr;

    // Check for simple equations: x + a = b
    const match1 = text.match(/x\s*\+\s*(\d+)\s*=\s*(\d+)/);
    if (match1) {
      const a = parseInt(match1[1]);
      const b = parseInt(match1[2]);
      const expected = b - a;
      if (Math.abs(q.answer - expected) > (q.tolerance || 0)) {
        errors.push(`${prefix}: Expected ${expected}, got ${q.answer} for "${text}"`);
      }
    }

    // Check: x - a = b → x = b + a
    const match2 = text.match(/x\s*-\s*(\d+)\s*=\s*(\d+)/);
    if (match2) {
      const a = parseInt(match2[1]);
      const b = parseInt(match2[2]);
      const expected = b + a;
      if (Math.abs(q.answer - expected) > (q.tolerance || 0)) {
        errors.push(`${prefix}: Expected ${expected}, got ${q.answer} for "${text}"`);
      }
    }

    // Check: ax = b → x = b/a
    const match3 = text.match(/(\d+)x\s*=\s*(\d+)/);
    if (match3) {
      const a = parseInt(match3[1]);
      const b = parseInt(match3[2]);
      const expected = b / a;
      if (Math.abs(q.answer - expected) > (q.tolerance || 0.01)) {
        errors.push(`${prefix}: Expected ${expected}, got ${q.answer} for "${text}"`);
      }
    }

    // Check: ax + b = c → x = (c-b)/a
    const match4 = text.match(/(\d+)x\s*\+\s*(\d+)\s*=\s*(\d+)/);
    if (match4) {
      const a = parseInt(match4[1]);
      const b = parseInt(match4[2]);
      const c = parseInt(match4[3]);
      const expected = (c - b) / a;
      if (Math.abs(q.answer - expected) > (q.tolerance || 0.01)) {
        errors.push(`${prefix}: Expected ${expected}, got ${q.answer} for "${text}"`);
      }
    }

    // Check: ax - b = c → x = (c+b)/a
    const match5 = text.match(/(\d+)x\s*-\s*(\d+)\s*=\s*(\d+)/);
    if (match5) {
      const a = parseInt(match5[1]);
      const b = parseInt(match5[2]);
      const c = parseInt(match5[3]);
      const expected = (c + b) / a;
      if (Math.abs(q.answer - expected) > (q.tolerance || 0.01)) {
        errors.push(`${prefix}: Expected ${expected}, got ${q.answer} for "${text}"`);
      }
    }

    // Check simple arithmetic: a + b, a - b, a × b, a : b
    const arithMatch = text.match(/Calcule\s*:\s*(\d+(?:[,.]\d+)?)\s*([+\-×.:·])\s*(\d+(?:[,.]\d+)?)/i);
    if (arithMatch) {
      const a = parseFloat(arithMatch[1].replace(',', '.'));
      const op = arithMatch[2];
      const b = parseFloat(arithMatch[3].replace(',', '.'));

      let expected;
      switch (op) {
        case '+':
          expected = a + b;
          break;
        case '-':
          expected = a - b;
          break;
        case '×':
        case '.':
        case '·':
          expected = a * b;
          break;
        case ':':
          expected = a / b;
          break;
      }

      if (expected !== undefined) {
        const diff = Math.abs(q.answer - expected);
        if (diff > (q.tolerance || 0.01)) {
          errors.push(`${prefix}: Expected ${expected.toFixed(4)}, got ${q.answer} for "${text}" (diff: ${diff.toFixed(4)})`);
        }
      }
    }
  }

  // Check for algebraic expressions (string answers)
  if (answerType === 'string') {
    // Check if answer is properly formatted
    if (q.answer.includes('  ')) {
      warnings.push(`${prefix}: Answer has double spaces: "${q.answer}"`);
    }

    // Check for common issues
    if (q.answer.match(/[^\w\s+\-×()²³⁴⁵⁰¹]/)) {
      warnings.push(`${prefix}: Answer contains unusual characters: "${q.answer}"`);
    }
  }

  // Check tolerance values
  if (q.tolerance < 0) {
    errors.push(`${prefix}: Negative tolerance: ${q.tolerance}`);
  }

  // Check level values
  if (![1, 2, 3].includes(q.level)) {
    warnings.push(`${prefix}: Unusual level value: ${q.level}`);
  }
}

async function validateFile(filePath) {
  const fileName = path.basename(filePath);

  try {
    const module = await import(filePath);
    const questions = module.questions;

    if (!questions || !Array.isArray(questions)) {
      errors.push(`${fileName}: Invalid questions export`);
      return;
    }

    console.log(`\n📄 ${fileName}: ${questions.length} questions`);

    questions.forEach(q => validateQuestion(q, fileName));

    // Check for duplicate IDs
    const ids = questions.map(q => q.id);
    const duplicates = ids.filter((id, i) => ids.indexOf(id) !== i);
    if (duplicates.length > 0) {
      errors.push(`${fileName}: Duplicate IDs found: ${[...new Set(duplicates)].join(', ')}`);
    }

  } catch (error) {
    errors.push(`${fileName}: Failed to load - ${error.message}`);
  }
}

async function main() {
  console.log('🔍 Validation des questions...\n');
  console.log('='.repeat(60));

  const dataDir = path.join(__dirname, '../src/data');
  const files = await fs.readdir(dataDir);

  const questionFiles = files
    .filter(f => f.startsWith('questions-') && f.endsWith('.js'))
    .sort();

  for (const file of questionFiles) {
    const filePath = path.join(dataDir, file);
    await validateFile(filePath);
  }

  console.log('\n' + '='.repeat(60));
  console.log('\n📊 RÉSULTATS DE LA VALIDATION:\n');

  if (errors.length === 0 && warnings.length === 0) {
    console.log('✅ Aucune erreur détectée!');
    console.log('✅ Toutes les questions semblent correctes.\n');
  } else {
    if (errors.length > 0) {
      console.log(`❌ ${errors.length} ERREUR(S) DÉTECTÉE(S):\n`);
      errors.forEach(e => console.log('  ❌ ' + e));
      console.log();
    }

    if (warnings.length > 0) {
      console.log(`⚠️  ${warnings.length} AVERTISSEMENT(S):\n`);
      warnings.forEach(w => console.log('  ⚠️  ' + w));
      console.log();
    }
  }

  console.log(`📝 Fichiers analysés: ${questionFiles.length}`);
  console.log(`❌ Erreurs: ${errors.length}`);
  console.log(`⚠️  Avertissements: ${warnings.length}\n`);

  if (errors.length > 0) {
    process.exit(1);
  }
}

main().catch(console.error);
