#!/usr/bin/env node
/**
 * Export all JS question data to a SQL seed file for SQLite.
 * Run: node scripts/export-questions-to-sql.mjs
 */

import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

// All question module codes (matching allQuestions.js)
const CODES = [
  'N1', 'N2', 'N3', 'N4', 'N5', 'N6',
  'G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7',
  'A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A8', 'A9', 'A10',
  'P1',
  'D1', 'D2',
  'M1',
];

function escapeSQL(str) {
  if (str == null) return '';
  return String(str).replace(/'/g, "''");
}

function getText(textField, lang) {
  if (typeof textField === 'string') return textField;
  if (textField && typeof textField === 'object') return textField[lang] || '';
  return '';
}

async function main() {
  const lines = ['-- Auto-generated seed data from JS question files', ''];
  let totalCount = 0;

  for (const code of CODES) {
    const modulePath = resolve(ROOT, `src/data/questions-${code}.js`);
    let mod;
    try {
      mod = await import(modulePath);
    } catch (e) {
      console.warn(`Skipping ${code}: ${e.message}`);
      continue;
    }

    const questions = mod.questions || [];
    if (questions.length === 0) continue;

    lines.push(`-- ${code}: ${questions.length} questions`);

    for (const q of questions) {
      const id = escapeSQL(q.id);
      const category = escapeSQL(q.category);
      const level = q.level || 1;
      const textFr = escapeSQL(getText(q.text, 'fr'));
      const textEn = escapeSQL(getText(q.text, 'en'));
      const textNl = escapeSQL(getText(q.text, 'nl'));
      const answer = escapeSQL(String(q.answer));
      const tolerance = q.tolerance || 0;
      const hintFr = escapeSQL(getText(q.hint, 'fr'));
      const hintEn = escapeSQL(getText(q.hint, 'en'));
      const hintNl = escapeSQL(getText(q.hint, 'nl'));

      lines.push(
        `INSERT INTO questions (id, category, level, text_fr, text_en, text_nl, answer, tolerance, hint_fr, hint_en, hint_nl) VALUES ('${id}', '${category}', ${level}, '${textFr}', '${textEn}', '${textNl}', '${answer}', ${tolerance}, '${hintFr}', '${hintEn}', '${hintNl}');`
      );
      totalCount++;
    }

    lines.push('');
  }

  const output = resolve(ROOT, 'src-tauri/migrations/002_seed.sql');
  writeFileSync(output, lines.join('\n'), 'utf-8');
  console.log(`Exported ${totalCount} questions to ${output}`);
}

main().catch(console.error);
