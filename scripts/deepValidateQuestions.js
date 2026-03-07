import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { create, all } from 'mathjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const math = create(all);

const errors = [];
const warnings = [];
let totalChecked = 0;
let totalPassed = 0;

/**
 * Deep validation of all questions with mathematical verification
 */

function evaluateExpression(expr) {
  try {
    // Replace French decimal comma with dot
    expr = expr.replace(/,/g, '.');
    // Replace · with *
    expr = expr.replace(/·/g, '*');
    // Replace : with /
    expr = expr.replace(/:/g, '/');
    // Replace × with *
    expr = expr.replace(/×/g, '*');
    return math.evaluate(expr);
  } catch (e) {
    return null;
  }
}

function validateEquation(text, answer, tolerance, id) {
  // Extract equation parts: ax + b = c or similar

  // Simple: x + a = b
  let match = text.match(/x\s*\+\s*(\d+)\s*=\s*(\d+)/);
  if (match) {
    const a = parseInt(match[1]);
    const b = parseInt(match[2]);
    const expected = b - a;
    totalChecked++;
    if (Math.abs(answer - expected) <= (tolerance || 0)) {
      totalPassed++;
      return true;
    }
    errors.push(`[${id}] "${text}" → Expected x=${expected}, got ${answer}`);
    return false;
  }

  // x - a = b
  match = text.match(/x\s*-\s*(\d+)\s*=\s*(\d+)/);
  if (match) {
    const a = parseInt(match[1]);
    const b = parseInt(match[2]);
    const expected = b + a;
    totalChecked++;
    if (Math.abs(answer - expected) <= (tolerance || 0)) {
      totalPassed++;
      return true;
    }
    errors.push(`[${id}] "${text}" → Expected x=${expected}, got ${answer}`);
    return false;
  }

  // ax = b
  match = text.match(/(\d+)x\s*=\s*(\d+)/);
  if (match) {
    const a = parseInt(match[1]);
    const b = parseInt(match[2]);
    const expected = b / a;
    totalChecked++;
    if (Math.abs(answer - expected) <= (tolerance || 0.01)) {
      totalPassed++;
      return true;
    }
    errors.push(`[${id}] "${text}" → Expected x=${expected}, got ${answer}`);
    return false;
  }

  // ax + b = c
  match = text.match(/(\d+)x\s*\+\s*(\d+)\s*=\s*(\d+)/);
  if (match) {
    const a = parseInt(match[1]);
    const b = parseInt(match[2]);
    const c = parseInt(match[3]);
    const expected = (c - b) / a;
    totalChecked++;
    if (Math.abs(answer - expected) <= (tolerance || 0.01)) {
      totalPassed++;
      return true;
    }
    errors.push(`[${id}] "${text}" → Expected x=${expected}, got ${answer}`);
    return false;
  }

  // ax - b = c
  match = text.match(/(\d+)x\s*[-−]\s*(\d+)\s*=\s*(\d+)/);
  if (match) {
    const a = parseInt(match[1]);
    const b = parseInt(match[2]);
    const c = parseInt(match[3]);
    const expected = (c + b) / a;
    totalChecked++;
    if (Math.abs(answer - expected) <= (tolerance || 0.01)) {
      totalPassed++;
      return true;
    }
    errors.push(`[${id}] "${text}" → Expected x=${expected}, got ${answer}`);
    return false;
  }

  // ax + b = cx + d
  match = text.match(/(\d+)x\s*\+\s*(\d+)\s*=\s*(\d+)x\s*\+\s*(\d+)/);
  if (match) {
    const a = parseInt(match[1]);
    const b = parseInt(match[2]);
    const c = parseInt(match[3]);
    const d = parseInt(match[4]);
    const expected = (d - b) / (a - c);
    totalChecked++;
    if (Math.abs(answer - expected) <= (tolerance || 0.01)) {
      totalPassed++;
      return true;
    }
    errors.push(`[${id}] "${text}" → Expected x=${expected}, got ${answer}`);
    return false;
  }

  // ax - b = cx + d
  match = text.match(/(\d+)x\s*[-−]\s*(\d+)\s*=\s*(\d+)x\s*\+\s*(\d+)/);
  if (match) {
    const a = parseInt(match[1]);
    const b = parseInt(match[2]);
    const c = parseInt(match[3]);
    const d = parseInt(match[4]);
    const expected = (d + b) / (a - c);
    totalChecked++;
    if (Math.abs(answer - expected) <= (tolerance || 0.01)) {
      totalPassed++;
      return true;
    }
    errors.push(`[${id}] "${text}" → Expected x=${expected}, got ${answer}`);
    return false;
  }

  // a(x + b) = c
  match = text.match(/(\d+)\(x\s*\+\s*(\d+)\)\s*=\s*(\d+)/);
  if (match) {
    const a = parseInt(match[1]);
    const b = parseInt(match[2]);
    const c = parseInt(match[3]);
    const expected = (c / a) - b;
    totalChecked++;
    if (Math.abs(answer - expected) <= (tolerance || 0.01)) {
      totalPassed++;
      return true;
    }
    errors.push(`[${id}] "${text}" → Expected x=${expected}, got ${answer}`);
    return false;
  }

  // a(x - b) = c
  match = text.match(/(\d+)\(x\s*[-−]\s*(\d+)\)\s*=\s*(\d+)/);
  if (match) {
    const a = parseInt(match[1]);
    const b = parseInt(match[2]);
    const c = parseInt(match[3]);
    const expected = (c / a) + b;
    totalChecked++;
    if (Math.abs(answer - expected) <= (tolerance || 0.01)) {
      totalPassed++;
      return true;
    }
    errors.push(`[${id}] "${text}" → Expected x=${expected}, got ${answer}`);
    return false;
  }

  return null; // Cannot validate
}

function validateArithmetic(text, answer, tolerance, id) {
  // Extract arithmetic expression
  const calcMatch = text.match(/Calcule\s*[:：]\s*(.+)/i);
  if (!calcMatch) return null;

  let expr = calcMatch[1].trim();

  // Try to evaluate the expression
  const result = evaluateExpression(expr);

  if (result !== null) {
    totalChecked++;
    const diff = Math.abs(answer - result);
    if (diff <= (tolerance || 0.01)) {
      totalPassed++;
      return true;
    }
    errors.push(`[${id}] "${text}" → Expected ${result.toFixed(4)}, got ${answer} (diff: ${diff.toFixed(4)})`);
    return false;
  }

  return null; // Cannot evaluate
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

    let fileChecked = 0;
    let filePassed = 0;

    questions.forEach(q => {
      if (typeof q.answer !== 'number') {
        // Skip non-numeric answers (algebraic expressions)
        return;
      }

      const text = q.text?.fr || '';

      // Try equation validation
      const eqResult = validateEquation(text, q.answer, q.tolerance, q.id);
      if (eqResult !== null) {
        fileChecked++;
        if (eqResult) filePassed++;
        return;
      }

      // Try arithmetic validation
      const arResult = validateArithmetic(text, q.answer, q.tolerance, q.id);
      if (arResult !== null) {
        fileChecked++;
        if (arResult) filePassed++;
        return;
      }
    });

    if (fileChecked > 0) {
      const percent = ((filePassed / fileChecked) * 100).toFixed(1);
      console.log(`   ✓ ${filePassed}/${fileChecked} validations passed (${percent}%)`);
    } else {
      console.log(`   ⊘ No numeric validations possible (algebraic/text questions)`);
    }

  } catch (error) {
    errors.push(`${fileName}: Failed to load - ${error.message}`);
  }
}

async function main() {
  console.log('🔍 VÉRIFICATION APPROFONDIE DES RÉPONSES\n');
  console.log('='.repeat(70));

  const dataDir = path.join(__dirname, '../src/data');
  const files = await fs.readdir(dataDir);

  const questionFiles = files
    .filter(f => f.startsWith('questions-') && f.endsWith('.js'))
    .sort();

  for (const file of questionFiles) {
    const filePath = path.join(dataDir, file);
    await validateFile(filePath);
  }

  console.log('\n' + '='.repeat(70));
  console.log('\n📊 RÉSULTATS DE LA VALIDATION APPROFONDIE:\n');

  if (errors.length === 0) {
    console.log('✅ AUCUNE ERREUR DÉTECTÉE!');
    console.log(`✅ ${totalPassed}/${totalChecked} questions vérifiées avec succès\n`);
  } else {
    console.log(`❌ ${errors.length} ERREUR(S) DÉTECTÉE(S):\n`);
    errors.forEach(e => console.log('  ❌ ' + e));
    console.log();
  }

  const successRate = totalChecked > 0 ? ((totalPassed / totalChecked) * 100).toFixed(2) : 0;

  console.log(`📝 Fichiers analysés: ${questionFiles.length}`);
  console.log(`🔢 Questions vérifiées: ${totalChecked}`);
  console.log(`✅ Validations réussies: ${totalPassed}`);
  console.log(`❌ Erreurs détectées: ${errors.length}`);
  console.log(`📈 Taux de réussite: ${successRate}%\n`);

  if (errors.length > 0) {
    console.log('⚠️  Note: Certaines questions (expressions algébriques, texte, géométrie)');
    console.log('   ne peuvent pas être validées automatiquement.\n');
    process.exit(1);
  }
}

main().catch(console.error);
