import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function reduceN5() {
  const filePath = path.join(__dirname, '../src/data/questions-N5.js');

  const module = await import(filePath);
  const questions = module.questions;

  console.log('Original N5 questions:', questions.length);

  // Group by level
  const byLevel = {};
  questions.forEach(q => {
    const level = q.level || 1;
    if (!byLevel[level]) byLevel[level] = [];
    byLevel[level].push(q);
  });

  const levels = Object.keys(byLevel).sort();
  const perLevel = Math.ceil(20 / levels.length);

  console.log('Levels:', levels);
  console.log('Per level:', perLevel);

  let selected = [];
  levels.forEach(level => {
    selected.push(...byLevel[level].slice(0, perLevel));
  });

  // Trim to exactly 20
  selected = selected.slice(0, 20);

  console.log('Selected:', selected.length, 'questions');
  const newByLevel = {};
  selected.forEach(q => {
    newByLevel[q.level] = (newByLevel[q.level] || 0) + 1;
  });
  console.log('Distribution:', newByLevel);

  // Read original file to get header and generate function
  const content = await fs.readFile(filePath, 'utf-8');
  const header = content.split('export const questions')[0];
  const exportMatch = content.match(/export\s+function\s+generate[\s\S]*$/m);
  const generateFunction = exportMatch ? '\n\n' + exportMatch[0] : '';

  const newContent = header + 'export const questions = ' + JSON.stringify(selected, null, 2) + ';' + generateFunction;

  await fs.writeFile(filePath, newContent, 'utf-8');
  console.log('✓ N5 reduced and saved');
}

reduceN5().catch(console.error);
