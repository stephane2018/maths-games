import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const MAX_QUESTIONS = 20;

/**
 * Reduce questions in a file to maximum 20 questions
 * Maintains balanced distribution across levels
 */
async function reduceQuestions(filePath) {
  const fileName = path.basename(filePath);

  console.log(`\n📄 Processing: ${fileName}`);

  const content = await fs.readFile(filePath, 'utf-8');

  // Import the module to get questions
  const module = await import(filePath);
  const questions = module.questions;

  if (!questions || questions.length === 0) {
    console.log(`   ⚠️  No questions found, skipping`);
    return;
  }

  const originalCount = questions.length;

  if (originalCount <= MAX_QUESTIONS) {
    console.log(`   ✓ Already has ${originalCount} questions (≤ ${MAX_QUESTIONS}), skipping`);
    return;
  }

  // Group questions by level
  const byLevel = {};
  questions.forEach(q => {
    const level = q.level || 1;
    if (!byLevel[level]) byLevel[level] = [];
    byLevel[level].push(q);
  });

  const levels = Object.keys(byLevel).sort();
  const questionsPerLevel = Math.ceil(MAX_QUESTIONS / levels.length);

  console.log(`   Original: ${originalCount} questions`);
  console.log(`   Levels: ${levels.join(', ')}`);
  console.log(`   Target per level: ~${questionsPerLevel}`);

  // Select questions proportionally from each level
  let selectedQuestions = [];

  for (const level of levels) {
    const levelQuestions = byLevel[level];
    const toTake = Math.min(questionsPerLevel, levelQuestions.length);

    // Take first N questions from each level (to maintain order and variety)
    selectedQuestions.push(...levelQuestions.slice(0, toTake));
  }

  // If we're under 20, fill up from remaining questions
  if (selectedQuestions.length < MAX_QUESTIONS) {
    const remaining = MAX_QUESTIONS - selectedQuestions.length;
    const selectedIds = new Set(selectedQuestions.map(q => q.id));
    const remainingQuestions = questions.filter(q => !selectedIds.has(q.id));
    selectedQuestions.push(...remainingQuestions.slice(0, remaining));
  }

  // If we're over 20, trim to exactly 20
  if (selectedQuestions.length > MAX_QUESTIONS) {
    selectedQuestions = selectedQuestions.slice(0, MAX_QUESTIONS);
  }

  console.log(`   ✓ Reduced to: ${selectedQuestions.length} questions`);

  // Count by level after reduction
  const newByLevel = {};
  selectedQuestions.forEach(q => {
    const level = q.level || 1;
    newByLevel[level] = (newByLevel[level] || 0) + 1;
  });
  console.log(`   Distribution:`, newByLevel);

  // Extract the export statement and generate function (if any)
  const exportMatch = content.match(/export\s+function\s+generate[\s\S]*$/m);
  const generateFunction = exportMatch ? '\n\n' + exportMatch[0] : '';

  // Build new file content
  const header = content.split('export const questions')[0];
  const newContent = header + `export const questions = ${JSON.stringify(selectedQuestions, null, 2)};` + generateFunction;

  // Write back to file
  await fs.writeFile(filePath, newContent, 'utf-8');

  console.log(`   💾 Saved ${fileName}`);
}

async function main() {
  const dataDir = path.join(__dirname, '../src/data');
  const files = await fs.readdir(dataDir);

  const questionFiles = files
    .filter(f => f.startsWith('questions-') && f.endsWith('.js'))
    .sort();

  console.log(`🔍 Found ${questionFiles.length} question files\n`);
  console.log(`📊 Target: ${MAX_QUESTIONS} questions maximum per file\n`);
  console.log('=' .repeat(60));

  let processedCount = 0;
  let skippedCount = 0;

  for (const file of questionFiles) {
    const filePath = path.join(dataDir, file);
    try {
      const beforeCount = (await import(filePath)).questions.length;
      await reduceQuestions(filePath);
      const afterCount = (await import(filePath + '?t=' + Date.now())).questions.length;

      if (beforeCount > MAX_QUESTIONS) {
        processedCount++;
      } else {
        skippedCount++;
      }
    } catch (error) {
      console.error(`   ❌ Error processing ${file}:`, error.message);
    }
  }

  console.log('\n' + '='.repeat(60));
  console.log(`\n✅ Complete!`);
  console.log(`   Processed: ${processedCount} files`);
  console.log(`   Skipped: ${skippedCount} files (already ≤ ${MAX_QUESTIONS})`);
  console.log(`   Total: ${questionFiles.length} files\n`);
}

main().catch(console.error);
