/**
 * QuestionDB - SQLite adapter for questions in Tauri.
 * Falls back to JS imports when running in the browser.
 */

let db = null;
let isTauri = false;

export async function initQuestionDB() {
  try {
    if (window.__TAURI__) {
      const { default: Database } = await import('@tauri-apps/plugin-sql');
      db = await Database.load('sqlite:mathgames.db');
      isTauri = true;
    }
  } catch (e) {
    console.warn('QuestionDB: SQLite not available, using JS fallback', e);
    db = null;
    isTauri = false;
  }
}

export function isUsingDB() {
  return isTauri && db !== null;
}

function rowToQuestion(row) {
  return {
    id: row.id,
    category: row.category,
    level: row.level,
    text: {
      fr: row.text_fr,
      en: row.text_en,
      nl: row.text_nl,
    },
    answer: isNaN(Number(row.answer)) ? row.answer : Number(row.answer),
    tolerance: row.tolerance || 0,
    hint: (row.hint_fr || row.hint_en || row.hint_nl)
      ? { fr: row.hint_fr, en: row.hint_en, nl: row.hint_nl }
      : undefined,
  };
}

export async function getQuestionsByCategory(category) {
  if (!db) return null;
  const rows = await db.select('SELECT * FROM questions WHERE category = ?', [category]);
  return rows.map(rowToQuestion);
}

export async function getQuestionsByCategoryAndLevel(category, level) {
  if (!db) return null;
  const rows = await db.select(
    'SELECT * FROM questions WHERE category = ? AND level = ?',
    [category, level]
  );
  return rows.map(rowToQuestion);
}

export async function getRandomQuestionFromDB(categories, level) {
  if (!db) return null;

  const placeholders = categories.map(() => '?').join(',');
  let query;
  let params;

  if (level) {
    query = `SELECT * FROM questions WHERE category IN (${placeholders}) AND level = ? ORDER BY RANDOM() LIMIT 1`;
    params = [...categories, level];
  } else {
    query = `SELECT * FROM questions WHERE category IN (${placeholders}) ORDER BY RANDOM() LIMIT 1`;
    params = [...categories];
  }

  const rows = await db.select(query, params);
  if (rows.length === 0) {
    // Fallback: ignore level filter
    if (level) {
      const fallbackRows = await db.select(
        `SELECT * FROM questions WHERE category IN (${placeholders}) ORDER BY RANDOM() LIMIT 1`,
        [...categories]
      );
      return fallbackRows.length > 0 ? rowToQuestion(fallbackRows[0]) : null;
    }
    return null;
  }
  return rowToQuestion(rows[0]);
}

export async function getAllQuestionsFromDB(level) {
  if (!db) return null;
  let rows;
  if (level) {
    rows = await db.select('SELECT * FROM questions WHERE level = ?', [level]);
  } else {
    rows = await db.select('SELECT * FROM questions');
  }
  return rows.map(rowToQuestion);
}

export async function getQuestionCountFromDB() {
  if (!db) return null;
  const rows = await db.select('SELECT COUNT(*) as count FROM questions');
  return rows[0]?.count || 0;
}

// ---- Custom questions in SQLite ----

export async function addCustomQuestionToDB(question) {
  if (!db) return;
  await db.execute(
    `INSERT INTO questions (id, category, level, text_fr, text_en, text_nl, answer, tolerance, hint_fr, hint_en, hint_nl, is_custom)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1)`,
    [
      question.id, question.category, question.level,
      question.text?.fr || '', question.text?.en || '', question.text?.nl || '',
      String(question.answer), question.tolerance || 0,
      question.hint?.fr || '', question.hint?.en || '', question.hint?.nl || '',
    ]
  );
}

export async function deleteCustomQuestionFromDB(id) {
  if (!db) return;
  await db.execute('DELETE FROM questions WHERE id = ? AND is_custom = 1', [id]);
}
