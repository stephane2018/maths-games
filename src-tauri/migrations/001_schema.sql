CREATE TABLE IF NOT EXISTS questions (
    id TEXT PRIMARY KEY,
    category TEXT NOT NULL,
    level INTEGER NOT NULL,
    text_fr TEXT NOT NULL,
    text_en TEXT DEFAULT '',
    text_nl TEXT DEFAULT '',
    answer TEXT NOT NULL,
    tolerance REAL DEFAULT 0,
    hint_fr TEXT DEFAULT '',
    hint_en TEXT DEFAULT '',
    hint_nl TEXT DEFAULT '',
    is_custom INTEGER DEFAULT 0
);

CREATE INDEX idx_questions_category ON questions(category);
CREATE INDEX idx_questions_category_level ON questions(category, level);
