import { useState, useRef, useCallback, useMemo } from 'react';
import { useI18n } from '../contexts/I18nContext.jsx';
import { useSound } from '../contexts/SoundContext.jsx';
import { useNavigation } from '../contexts/NavigationContext.jsx';
import { storage } from '../systems/StorageManager.js';
import { isUsingDB, addCustomQuestionToDB, deleteCustomQuestionFromDB } from '../systems/QuestionDB.js';
import { GlassButton } from '../components/GlassUI.jsx';
import {
  DIFFICULTIES,
  ROUND_OPTIONS,
  TIME_OPTIONS,
  BLUE_SUBCATS,
  RED_SUBCATS,
  ALL_PLAYABLE_CODES,
  DIFF_ICONS,
  getRealCategoryCode,
} from '../constants/categoryWizardConstants.js';

const ALL_SUBCATS = [...BLUE_SUBCATS, ...RED_SUBCATS];

function ClassroomsView({ onSelectClassroom, onCustomQuestions, t }) {
  const sound = useSound();
  const [classrooms, setClassrooms] = useState(() => storage.getClassrooms());
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const nameRef = useRef(null);

  const refresh = useCallback(() => {
    setClassrooms([...storage.getClassrooms()]);
  }, []);

  const handleSave = useCallback(() => {
    const name = nameRef.current?.value.trim();
    if (!name) return;
    sound.buttonClick();
    if (editingId) {
      storage.updateClassroom(editingId, { name });
      setEditingId(null);
    } else {
      storage.createClassroom(name);
    }
    setShowForm(false);
    refresh();
  }, [editingId, refresh, sound]);

  const handleEdit = useCallback((classroom) => {
    sound.buttonClick();
    setEditingId(classroom.id);
    setShowForm(true);
    setTimeout(() => {
      if (nameRef.current) nameRef.current.value = classroom.name;
    }, 0);
  }, [sound]);

  const handleDelete = useCallback((id) => {
    if (!confirm(t('teacher.deleteClassConfirm'))) return;
    sound.buttonClick();
    storage.deleteClassroom(id);
    refresh();
  }, [t, sound, refresh]);

  return (
    <div className="teacher-view">
      <h2 className="teacher-section-title">{t('teacher.classrooms')}</h2>

      {classrooms.length === 0 && (
        <p className="teacher-empty">{t('teacher.noClassrooms')}</p>
      )}

      <div className="teacher-list">
        {classrooms.map(c => (
          <div key={c.id} className="teacher-card" onClick={() => { sound.buttonClick(); onSelectClassroom(c); }}>
            <div className="teacher-card-name">{c.name}</div>
            <div className="teacher-card-meta">{c.students.length} {t('teacher.students').toLowerCase()}</div>
            <div className="teacher-card-actions" onClick={e => e.stopPropagation()}>
              <button className="teacher-btn-sm" onClick={() => handleEdit(c)}>{t('teacher.editClass')}</button>
              <button className="teacher-btn-sm teacher-btn-danger" onClick={() => handleDelete(c.id)}>{t('teacher.deleteClass')}</button>
            </div>
          </div>
        ))}
      </div>

      {showForm && (
        <div className="teacher-form-overlay" onClick={() => { setShowForm(false); setEditingId(null); }}>
          <div className="teacher-form" onClick={e => e.stopPropagation()}>
            <input
              ref={nameRef}
              className="teacher-input"
              type="text"
              placeholder={t('teacher.className')}
              maxLength="40"
              autoFocus
              onKeyDown={e => e.key === 'Enter' && handleSave()}
            />
            <div className="teacher-form-buttons">
              <GlassButton variant="glass" size="sm" onClick={() => { setShowForm(false); setEditingId(null); }}>
                {t('teacher.cancel')}
              </GlassButton>
              <GlassButton variant="gradient" size="sm" onClick={handleSave}>
                {t('teacher.save')}
              </GlassButton>
            </div>
          </div>
        </div>
      )}

      <div style={{ marginTop: '16px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <GlassButton variant="gradient" size="md" onClick={() => { sound.buttonClick(); setEditingId(null); setShowForm(true); }}>
          + {t('teacher.createClass')}
        </GlassButton>
        <GlassButton variant="glass" size="md" onClick={() => { sound.buttonClick(); onCustomQuestions(); }}>
          {t('teacher.customQuestions')}
        </GlassButton>
      </div>
    </div>
  );
}

function StudentsView({ classroom, onBack, onLaunch, onDashboard, t }) {
  const sound = useSound();
  const [students, setStudents] = useState(() => classroom.students);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const firstNameRef = useRef(null);
  const lastInitialRef = useRef(null);

  const refresh = useCallback(() => {
    const updated = storage.getClassroom(classroom.id);
    if (updated) setStudents([...updated.students]);
  }, [classroom.id]);

  const handleSave = useCallback(() => {
    const firstName = firstNameRef.current?.value.trim();
    const lastInitial = lastInitialRef.current?.value.trim().charAt(0).toUpperCase() || '';
    if (!firstName) return;
    sound.buttonClick();
    if (editingId) {
      storage.updateStudent(classroom.id, editingId, { firstName, lastInitial });
      setEditingId(null);
    } else {
      storage.addStudent(classroom.id, firstName, lastInitial);
    }
    setShowForm(false);
    refresh();
  }, [classroom.id, editingId, refresh, sound]);

  const handleEdit = useCallback((student) => {
    sound.buttonClick();
    setEditingId(student.id);
    setShowForm(true);
    setTimeout(() => {
      if (firstNameRef.current) firstNameRef.current.value = student.firstName;
      if (lastInitialRef.current) lastInitialRef.current.value = student.lastInitial;
    }, 0);
  }, [sound]);

  const handleDelete = useCallback((studentId) => {
    if (!confirm(t('teacher.deleteStudentConfirm'))) return;
    sound.buttonClick();
    storage.deleteStudent(classroom.id, studentId);
    refresh();
  }, [classroom.id, t, sound, refresh]);

  return (
    <div className="teacher-view">
      <div className="teacher-header">
        <GlassButton variant="glass" size="sm" onClick={() => { sound.buttonClick(); onBack(); }}>
          {t('teacher.back')}
        </GlassButton>
        <h2 className="teacher-section-title">{classroom.name}</h2>
      </div>

      {students.length === 0 && (
        <p className="teacher-empty">{t('teacher.noStudents')}</p>
      )}

      <div className="teacher-list">
        {students.map(s => (
          <div key={s.id} className="teacher-card teacher-card-student">
            <div className="teacher-card-name">{s.firstName} {s.lastInitial}.</div>
            <div className="teacher-card-actions">
              <button className="teacher-btn-sm" onClick={() => handleEdit(s)}>{t('teacher.editStudent')}</button>
              <button className="teacher-btn-sm teacher-btn-danger" onClick={() => handleDelete(s.id)}>{t('teacher.deleteStudent')}</button>
            </div>
          </div>
        ))}
      </div>

      {showForm && (
        <div className="teacher-form-overlay" onClick={() => { setShowForm(false); setEditingId(null); }}>
          <div className="teacher-form" onClick={e => e.stopPropagation()}>
            <input
              ref={firstNameRef}
              className="teacher-input"
              type="text"
              placeholder={t('teacher.firstName')}
              maxLength="30"
              autoFocus
              onKeyDown={e => e.key === 'Enter' && lastInitialRef.current?.focus()}
            />
            <input
              ref={lastInitialRef}
              className="teacher-input"
              type="text"
              placeholder={t('teacher.lastInitial')}
              maxLength="1"
              onKeyDown={e => e.key === 'Enter' && handleSave()}
            />
            <div className="teacher-form-buttons">
              <GlassButton variant="glass" size="sm" onClick={() => { setShowForm(false); setEditingId(null); }}>
                {t('teacher.cancel')}
              </GlassButton>
              <GlassButton variant="gradient" size="sm" onClick={handleSave}>
                {t('teacher.save')}
              </GlassButton>
            </div>
          </div>
        </div>
      )}

      <div className="teacher-bottom-actions">
        <GlassButton variant="gradient" size="md" onClick={() => { sound.buttonClick(); setEditingId(null); setShowForm(true); }}>
          + {t('teacher.addStudent')}
        </GlassButton>
        {students.length >= 1 && (
          <GlassButton variant="gradient" size="md" onClick={() => { sound.buttonClick(); onLaunch(); }}>
            {t('teacher.launchSession')}
          </GlassButton>
        )}
        <GlassButton variant="glass" size="md" onClick={() => { sound.buttonClick(); onDashboard(); }}>
          {t('teacher.dashboard')}
        </GlassButton>
      </div>
    </div>
  );
}

function LaunchSessionView({ classroom, onBack, t }) {
  const sound = useSound();
  const { push } = useNavigation();
  const students = classroom.students;

  const [sessionMode, setSessionMode] = useState('versus'); // 'versus' | 'solo'
  const [student1Id, setStudent1Id] = useState('');
  const [student2Id, setStudent2Id] = useState('');
  const [selectedSubcategories, setSelectedSubcategories] = useState(new Set(['A2']));
  const [difficulty, setDifficulty] = useState('easy');
  const [numRounds, setNumRounds] = useState(3);
  const [timePerQuestion, setTimePerQuestion] = useState(30);
  const [error, setError] = useState('');

  const allSelected = useMemo(
    () => ALL_PLAYABLE_CODES.every(c => selectedSubcategories.has(c)),
    [selectedSubcategories]
  );

  const toggleSubcategory = useCallback((code) => {
    sound.buttonClick();
    setSelectedSubcategories(prev => {
      const next = new Set(prev);
      if (next.has(code)) {
        if (next.size > 1) next.delete(code);
      } else {
        next.add(code);
      }
      return next;
    });
  }, [sound]);

  const toggleSelectAll = useCallback(() => {
    sound.buttonClick();
    setSelectedSubcategories(prev => {
      const all = ALL_PLAYABLE_CODES.every(c => prev.has(c));
      return all ? new Set(['A2']) : new Set(ALL_PLAYABLE_CODES);
    });
  }, [sound]);

  const startGame = useCallback(() => {
    if (!student1Id) {
      setError(t('teacher.selectStudent'));
      return;
    }
    if (sessionMode === 'versus') {
      if (!student2Id) {
        setError(t('teacher.selectStudent'));
        return;
      }
      if (student1Id === student2Id) {
        setError(t('teacher.sameStudentError'));
        return;
      }
    }
    setError('');
    sound.buttonClick();

    const s1 = students.find(s => s.id === student1Id);
    const categories = Array.from(selectedSubcategories).map(code => getRealCategoryCode(code));

    if (sessionMode === 'solo') {
      push('Game', {
        mode: 'solo',
        categories,
        operations: [],
        difficulty,
        numRounds,
        timePerQuestion,
        blueName: `${s1.firstName} ${s1.lastInitial}.`,
        redName: 'AI',
        fromTeacher: true,
        classroomId: classroom.id,
        blueStudentId: s1.id,
        redStudentId: null,
      }, true);
    } else {
      const s2 = students.find(s => s.id === student2Id);
      push('Game', {
        mode: 'versus',
        categories,
        operations: [],
        difficulty,
        numRounds,
        timePerQuestion,
        blueName: `${s1.firstName} ${s1.lastInitial}.`,
        redName: `${s2.firstName} ${s2.lastInitial}.`,
        fromTeacher: true,
        classroomId: classroom.id,
        blueStudentId: s1.id,
        redStudentId: s2.id,
      }, true);
    }
  }, [sessionMode, student1Id, student2Id, students, selectedSubcategories, difficulty, numRounds, timePerQuestion, t, sound, push]);

  return (
    <div className="teacher-view">
      <div className="teacher-header">
        <GlassButton variant="glass" size="sm" onClick={() => { sound.buttonClick(); onBack(); }}>
          {t('teacher.back')}
        </GlassButton>
        <h2 className="teacher-section-title">{t('teacher.launchSession')}</h2>
      </div>

      {/* Mode toggle */}
      <div className="teacher-session-section">
        <div className="teacher-option-row">
          <div
            className={`teacher-option-card ${sessionMode === 'versus' ? 'selected' : ''}`}
            onClick={() => { sound.buttonClick(); setSessionMode('versus'); }}
          >
            {t('mode.versus')}
          </div>
          <div
            className={`teacher-option-card ${sessionMode === 'solo' ? 'selected' : ''}`}
            onClick={() => { sound.buttonClick(); setSessionMode('solo'); }}
          >
            {t('mode.solo')} (vs AI)
          </div>
        </div>
      </div>

      {/* Student selection */}
      <div className="teacher-session-section">
        <h3 className="teacher-subsection-title">{sessionMode === 'versus' ? t('teacher.selectStudents') : t('teacher.selectStudent')}</h3>
        <div className="teacher-player-selects">
          <div className="teacher-player-select">
            <label className="teacher-label teacher-label-blue">{t('teacher.student1')}</label>
            <select className="teacher-select" value={student1Id} onChange={e => setStudent1Id(e.target.value)}>
              <option value="">{t('teacher.selectStudent')}</option>
              {students.map(s => (
                <option key={s.id} value={s.id}>{s.firstName} {s.lastInitial}.</option>
              ))}
            </select>
          </div>
          {sessionMode === 'versus' && (
            <>
              <div className="teacher-vs">VS</div>
              <div className="teacher-player-select">
                <label className="teacher-label teacher-label-red">{t('teacher.student2')}</label>
                <select className="teacher-select" value={student2Id} onChange={e => setStudent2Id(e.target.value)}>
                  <option value="">{t('teacher.selectStudent')}</option>
                  {students.map(s => (
                    <option key={s.id} value={s.id}>{s.firstName} {s.lastInitial}.</option>
                  ))}
                </select>
              </div>
            </>
          )}
          {sessionMode === 'solo' && (
            <>
              <div className="teacher-vs">VS</div>
              <div className="teacher-player-select">
                <label className="teacher-label teacher-label-red">AI</label>
                <div className="teacher-ai-badge">AI</div>
              </div>
            </>
          )}
        </div>
        {error && <p className="teacher-error">{error}</p>}
      </div>

      {/* Categories */}
      <div className="teacher-session-section">
        <div className="teacher-cats-header">
          <h3 className="teacher-subsection-title">{t('teacher.selectCategories')}</h3>
          <button className="teacher-btn-sm" onClick={toggleSelectAll}>
            {allSelected ? 'Tout desélectionner' : 'Tout sélectionner'}
          </button>
        </div>
        <div className="teacher-cat-grid">
          {ALL_SUBCATS.map(sub => (
            <div
              key={sub.code}
              className={`teacher-cat-chip ${selectedSubcategories.has(sub.code) ? 'selected' : ''}`}
              onClick={() => toggleSubcategory(sub.code)}
            >
              <span className="teacher-cat-icon">{sub.icon}</span>
              <span className="teacher-cat-label">{sub.code}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Difficulty */}
      <div className="teacher-session-section">
        <h3 className="teacher-subsection-title">{t('teacher.selectDifficulty')}</h3>
        <div className="teacher-option-row">
          {DIFFICULTIES.map(d => (
            <div
              key={d}
              className={`teacher-option-card ${difficulty === d ? 'selected' : ''}`}
              onClick={() => { sound.buttonClick(); setDifficulty(d); }}
            >
              <div dangerouslySetInnerHTML={{ __html: DIFF_ICONS[d] }} />
              <span>{t(`wizard.${d}`)}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Rounds */}
      <div className="teacher-session-section">
        <h3 className="teacher-subsection-title">{t('wizard.roundsTitle')}</h3>
        <div className="teacher-option-row">
          {ROUND_OPTIONS.map(n => (
            <div
              key={n}
              className={`teacher-option-card ${numRounds === n ? 'selected' : ''}`}
              onClick={() => { sound.buttonClick(); setNumRounds(n); }}
            >
              {n === 1 ? t('wizard.roundLabel1') : t('wizard.roundLabel', { n })}
            </div>
          ))}
        </div>
      </div>

      {/* Time */}
      <div className="teacher-session-section">
        <h3 className="teacher-subsection-title">⏱️</h3>
        <div className="teacher-option-row">
          {TIME_OPTIONS.map(opt => (
            <div
              key={opt.value}
              className={`teacher-option-card ${timePerQuestion === opt.value ? 'selected' : ''}`}
              onClick={() => { sound.buttonClick(); setTimePerQuestion(opt.value); }}
            >
              {opt.label}
            </div>
          ))}
        </div>
      </div>

      {/* Start button */}
      <div style={{ textAlign: 'center', marginTop: '20px', marginBottom: '20px' }}>
        <GlassButton variant="gradient" size="lg" onClick={startGame}>
          {t('teacher.start')}
        </GlassButton>
      </div>
    </div>
  );
}

function CustomQuestionsView({ onBack, t }) {
  const sound = useSound();
  const [questions, setQuestions] = useState(() => storage.getCustomQuestions());
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [importResult, setImportResult] = useState(null);

  const textFrRef = useRef(null);
  const textEnRef = useRef(null);
  const textNlRef = useRef(null);
  const answerRef = useRef(null);
  const hintRef = useRef(null);
  const fileInputRef = useRef(null);
  const [formCategory, setFormCategory] = useState('A2');
  const [formLevel, setFormLevel] = useState(1);

  const refresh = useCallback(() => {
    setQuestions([...storage.getCustomQuestions()]);
  }, []);

  const handleSave = useCallback(() => {
    const textFr = textFrRef.current?.value.trim();
    const answer = answerRef.current?.value.trim();
    if (!textFr || !answer) return;
    sound.buttonClick();

    const data = {
      category: formCategory,
      level: formLevel,
      textFr,
      textEn: textEnRef.current?.value.trim() || '',
      textNl: textNlRef.current?.value.trim() || '',
      answer,
      tolerance: 0,
      hintFr: hintRef.current?.value.trim() || '',
      hintEn: '',
      hintNl: '',
    };

    if (editingId) {
      storage.updateCustomQuestion(editingId, data);
      setEditingId(null);
    } else {
      const q = storage.addCustomQuestion(data);
      if (isUsingDB()) addCustomQuestionToDB(q);
    }
    setShowForm(false);
    refresh();
  }, [editingId, formCategory, formLevel, sound, refresh]);

  const handleEdit = useCallback((q) => {
    sound.buttonClick();
    setEditingId(q.id);
    setFormCategory(q.category);
    setFormLevel(q.level);
    setShowForm(true);
    setTimeout(() => {
      if (textFrRef.current) textFrRef.current.value = q.text?.fr || '';
      if (textEnRef.current) textEnRef.current.value = q.text?.en || '';
      if (textNlRef.current) textNlRef.current.value = q.text?.nl || '';
      if (answerRef.current) answerRef.current.value = String(q.answer);
      if (hintRef.current) hintRef.current.value = q.hint?.fr || '';
    }, 0);
  }, [sound]);

  const handleDelete = useCallback((id) => {
    if (!confirm(t('teacher.deleteQuestionConfirm'))) return;
    sound.buttonClick();
    storage.deleteCustomQuestion(id);
    if (isUsingDB()) deleteCustomQuestionFromDB(id);
    refresh();
  }, [t, sound, refresh]);

  const openNew = useCallback(() => {
    sound.buttonClick();
    setEditingId(null);
    setFormCategory('A2');
    setFormLevel(1);
    setShowForm(true);
    setTimeout(() => {
      if (textFrRef.current) textFrRef.current.value = '';
      if (textEnRef.current) textEnRef.current.value = '';
      if (textNlRef.current) textNlRef.current.value = '';
      if (answerRef.current) answerRef.current.value = '';
      if (hintRef.current) hintRef.current.value = '';
    }, 0);
  }, [sound]);

  const handleImportFile = useCallback(async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImportResult(null);

    try {
      const { read, utils } = await import('xlsx');
      const data = await file.arrayBuffer();
      const workbook = read(data);
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const rows = utils.sheet_to_json(sheet, { defval: '' });

      let imported = 0;
      let skipped = 0;

      for (const row of rows) {
        const textFr = String(row.text_fr || row.enonce || row.question || '').trim();
        const answer = String(row.answer || row.reponse || '').trim();
        if (!textFr || !answer) { skipped++; continue; }

        const q = storage.addCustomQuestion({
          category: String(row.category || row.categorie || 'A2').trim(),
          level: Number(row.level || row.niveau || 1) || 1,
          textFr,
          textEn: String(row.text_en || '').trim(),
          textNl: String(row.text_nl || '').trim(),
          answer,
          tolerance: Number(row.tolerance || 0) || 0,
          hintFr: String(row.hint_fr || row.hint || row.indice || '').trim(),
          hintEn: String(row.hint_en || '').trim(),
          hintNl: String(row.hint_nl || '').trim(),
        });
        if (isUsingDB()) addCustomQuestionToDB(q);
        imported++;
      }

      setImportResult({ imported, skipped });
      refresh();
    } catch (err) {
      console.error('Import failed:', err);
      setImportResult({ error: true });
    }

    // Reset file input
    if (fileInputRef.current) fileInputRef.current.value = '';
  }, [refresh]);

  return (
    <div className="teacher-view">
      <div className="teacher-header">
        <GlassButton variant="glass" size="sm" onClick={() => { sound.buttonClick(); onBack(); }}>
          {t('teacher.back')}
        </GlassButton>
        <h2 className="teacher-section-title">{t('teacher.customQuestions')}</h2>
      </div>

      {questions.length === 0 && !importResult && (
        <p className="teacher-empty">{t('teacher.noCustomQuestions')}</p>
      )}

      {importResult && !importResult.error && (
        <div className="teacher-import-result">
          {t('teacher.importSuccess', { n: importResult.imported })}
          {importResult.skipped > 0 && ` (${importResult.skipped} ${t('teacher.importSkipped')})`}
        </div>
      )}
      {importResult?.error && (
        <p className="teacher-error">{t('teacher.importError')}</p>
      )}

      <div className="teacher-list">
        {questions.map(q => (
          <div key={q.id} className="teacher-card teacher-card-student">
            <div style={{ flex: 1 }}>
              <div className="teacher-card-name">{q.text?.fr || ''}</div>
              <div className="teacher-card-meta">
                {q.category} &middot; Lv{q.level} &middot; {t('teacher.questionAnswer')}: {String(q.answer)}
              </div>
            </div>
            <div className="teacher-card-actions">
              <button className="teacher-btn-sm" onClick={() => handleEdit(q)}>{t('teacher.editQuestion')}</button>
              <button className="teacher-btn-sm teacher-btn-danger" onClick={() => handleDelete(q.id)}>{t('teacher.deleteQuestion')}</button>
            </div>
          </div>
        ))}
      </div>

      {showForm && (
        <div className="teacher-form-overlay" onClick={() => { setShowForm(false); setEditingId(null); }}>
          <div className="teacher-form cq-form" onClick={e => e.stopPropagation()}>
            <div className="cq-row">
              <div className="cq-field">
                <label className="cq-label">{t('teacher.questionCategory')}</label>
                <select className="teacher-select" value={formCategory} onChange={e => setFormCategory(e.target.value)}>
                  {ALL_SUBCATS.map(s => (
                    <option key={s.code} value={s.code}>{s.code} - {s.name}</option>
                  ))}
                </select>
              </div>
              <div className="cq-field">
                <label className="cq-label">{t('teacher.questionLevel')}</label>
                <select className="teacher-select" value={formLevel} onChange={e => setFormLevel(Number(e.target.value))}>
                  <option value={1}>1 - {t('wizard.easy')}</option>
                  <option value={2}>2 - {t('wizard.medium')}</option>
                  <option value={3}>3 - {t('wizard.hard')}</option>
                </select>
              </div>
            </div>
            <input ref={textFrRef} className="teacher-input" type="text" placeholder={t('teacher.questionText')} autoFocus />
            <input ref={textEnRef} className="teacher-input" type="text" placeholder={t('teacher.questionTextEn')} />
            <input ref={textNlRef} className="teacher-input" type="text" placeholder={t('teacher.questionTextNl')} />
            <input ref={answerRef} className="teacher-input" type="text" placeholder={t('teacher.questionAnswer')} />
            <input ref={hintRef} className="teacher-input" type="text" placeholder={t('teacher.questionHint')} />
            <div className="teacher-form-buttons">
              <GlassButton variant="glass" size="sm" onClick={() => { setShowForm(false); setEditingId(null); }}>
                {t('teacher.cancel')}
              </GlassButton>
              <GlassButton variant="gradient" size="sm" onClick={handleSave}>
                {t('teacher.save')}
              </GlassButton>
            </div>
          </div>
        </div>
      )}

      <div style={{ marginTop: '16px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <GlassButton variant="gradient" size="md" onClick={openNew}>
          + {t('teacher.addQuestion')}
        </GlassButton>
        <GlassButton variant="glass" size="md" onClick={() => fileInputRef.current?.click()}>
          {t('teacher.importFile')}
        </GlassButton>
        <input
          ref={fileInputRef}
          type="file"
          accept=".csv,.xlsx,.xls"
          style={{ display: 'none' }}
          onChange={handleImportFile}
        />
      </div>

      {/* Format help */}
      <div className="teacher-import-help">
        <p className="teacher-import-help-title">{t('teacher.importFormat')}</p>
        <code className="teacher-import-help-code">category, level, text_fr, answer, hint_fr</code>
        <p className="teacher-import-help-hint">{t('teacher.importOptional')}: text_en, text_nl, tolerance, hint_en, hint_nl</p>
      </div>
    </div>
  );
}

function DashboardView({ classroom, onBack, t }) {
  const sound = useSound();
  const students = classroom.students;
  const [selectedStudentId, setSelectedStudentId] = useState(null);

  const classMatches = useMemo(
    () => storage.getMatchesForClassroom(classroom.id),
    [classroom.id]
  );

  const studentStats = useMemo(() => {
    if (!selectedStudentId) return null;
    return storage.getStudentStats(selectedStudentId);
  }, [selectedStudentId]);

  const studentMatches = useMemo(() => {
    if (!selectedStudentId) return [];
    return storage.getMatchesForStudent(selectedStudentId).slice(-10).reverse();
  }, [selectedStudentId]);

  const selectedStudent = students.find(s => s.id === selectedStudentId);

  // Compute strengths / weaknesses from categoryStats
  const { strengths, weaknesses } = useMemo(() => {
    if (!studentStats?.categoryStats) return { strengths: [], weaknesses: [] };
    const entries = Object.entries(studentStats.categoryStats)
      .filter(([, d]) => d.total >= 2)
      .map(([cat, d]) => ({ cat, accuracy: d.total > 0 ? d.correct / d.total : 0, total: d.total }));
    entries.sort((a, b) => b.accuracy - a.accuracy);
    return {
      strengths: entries.filter(e => e.accuracy >= 0.6).slice(0, 3),
      weaknesses: entries.filter(e => e.accuracy < 0.6).sort((a, b) => a.accuracy - b.accuracy).slice(0, 3),
    };
  }, [studentStats]);

  // Class overview: each student's summary
  const classOverview = useMemo(() => {
    return students.map(s => {
      const stats = storage.getStudentStats(s.id);
      return { ...s, stats };
    }).filter(s => s.stats);
  }, [students]);

  return (
    <div className="teacher-view">
      <div className="teacher-header">
        <GlassButton variant="glass" size="sm" onClick={() => { sound.buttonClick(); onBack(); }}>
          {t('teacher.back')}
        </GlassButton>
        <h2 className="teacher-section-title">{t('teacher.dashboard')}</h2>
      </div>

      {classMatches.length === 0 && !selectedStudentId && (
        <p className="teacher-empty">{t('teacher.noHistory')}</p>
      )}

      {/* Class overview table */}
      {!selectedStudentId && classOverview.length > 0 && (
        <div className="teacher-session-section">
          <h3 className="teacher-subsection-title">{t('teacher.classStats')}</h3>
          <div className="dash-table">
            <div className="dash-table-header">
              <span className="dash-cell dash-cell-name"></span>
              <span className="dash-cell">{t('teacher.matches')}</span>
              <span className="dash-cell">{t('teacher.wins')}</span>
              <span className="dash-cell">{t('teacher.accuracy')}</span>
            </div>
            {classOverview.map(s => (
              <div
                key={s.id}
                className="dash-table-row"
                onClick={() => { sound.buttonClick(); setSelectedStudentId(s.id); }}
              >
                <span className="dash-cell dash-cell-name">{s.firstName} {s.lastInitial}.</span>
                <span className="dash-cell">{s.stats.matches}</span>
                <span className="dash-cell">{s.stats.wins}</span>
                <span className="dash-cell">{Math.round(s.stats.accuracy * 100)}%</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Students without stats */}
      {!selectedStudentId && students.filter(s => !classOverview.find(o => o.id === s.id)).length > 0 && (
        <div className="teacher-session-section" style={{ marginTop: '8px' }}>
          <div className="dash-no-stats">
            {students.filter(s => !classOverview.find(o => o.id === s.id)).map(s => (
              <span key={s.id} className="dash-no-stats-name">{s.firstName} {s.lastInitial}.</span>
            ))}
            <span className="teacher-empty" style={{ padding: '4px 0' }}>{t('teacher.noHistory')}</span>
          </div>
        </div>
      )}

      {/* Student detail */}
      {selectedStudentId && selectedStudent && (
        <>
          <div style={{ marginBottom: '8px' }}>
            <GlassButton variant="glass" size="sm" onClick={() => { sound.buttonClick(); setSelectedStudentId(null); }}>
              {t('teacher.back')}
            </GlassButton>
          </div>

          <div className="teacher-session-section">
            <h3 className="teacher-subsection-title">
              {t('teacher.statsFor', { name: `${selectedStudent.firstName} ${selectedStudent.lastInitial}.` })}
            </h3>

            {!studentStats && <p className="teacher-empty">{t('teacher.noHistory')}</p>}

            {studentStats && (
              <>
                <div className="dash-stats-grid">
                  <div className="dash-stat">
                    <div className="dash-stat-value">{studentStats.matches}</div>
                    <div className="dash-stat-label">{t('teacher.matches')}</div>
                  </div>
                  <div className="dash-stat dash-stat-green">
                    <div className="dash-stat-value">{studentStats.wins}</div>
                    <div className="dash-stat-label">{t('teacher.wins')}</div>
                  </div>
                  <div className="dash-stat dash-stat-red">
                    <div className="dash-stat-value">{studentStats.losses}</div>
                    <div className="dash-stat-label">{t('teacher.losses')}</div>
                  </div>
                  <div className="dash-stat dash-stat-blue">
                    <div className="dash-stat-value">{Math.round(studentStats.accuracy * 100)}%</div>
                    <div className="dash-stat-label">{t('teacher.accuracy')}</div>
                  </div>
                </div>

                {/* Strengths */}
                {strengths.length > 0 && (
                  <div style={{ marginTop: '12px' }}>
                    <h4 className="teacher-subsection-title">{t('teacher.strengths')}</h4>
                    <div className="dash-cat-list">
                      {strengths.map(s => (
                        <div key={s.cat} className="dash-cat-item dash-cat-good">
                          <span>{s.cat}</span>
                          <span>{Math.round(s.accuracy * 100)}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Weaknesses */}
                {weaknesses.length > 0 && (
                  <div style={{ marginTop: '12px' }}>
                    <h4 className="teacher-subsection-title">{t('teacher.weaknesses')}</h4>
                    <div className="dash-cat-list">
                      {weaknesses.map(s => (
                        <div key={s.cat} className="dash-cat-item dash-cat-weak">
                          <span>{s.cat}</span>
                          <span>{Math.round(s.accuracy * 100)}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Recent matches */}
          {studentMatches.length > 0 && (
            <div className="teacher-session-section" style={{ marginTop: '8px' }}>
              <h3 className="teacher-subsection-title">{t('teacher.recentMatches')}</h3>
              <div className="dash-match-list">
                {studentMatches.map(m => {
                  const isBlue = m.blueStudentId === selectedStudentId;
                  const won = (isBlue && m.winner === 'blue') || (!isBlue && m.winner === 'red');
                  const opponent = isBlue ? m.redName : m.blueName;
                  const stats = isBlue ? m.blueStats : m.redStats;
                  return (
                    <div key={m.id} className={`dash-match-item ${won ? 'dash-match-won' : 'dash-match-lost'}`}>
                      <div className="dash-match-top">
                        <span className={`dash-match-result ${won ? 'dash-win' : 'dash-loss'}`}>
                          {won ? t('teacher.won') : t('teacher.lost')}
                        </span>
                        <span className="dash-match-opponent">{t('teacher.vs')} {opponent}</span>
                        <span className="dash-match-score">{m.blueScore}-{m.redScore}</span>
                      </div>
                      <div className="dash-match-bottom">
                        <span>{stats?.correct || 0}/{stats?.total || 0} {t('teacher.correct')}</span>
                        <span>{new Date(m.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default function TeacherScreen() {
  const { t } = useI18n();
  const sound = useSound();
  const { pop } = useNavigation();

  const [view, setView] = useState('classrooms');
  const [selectedClassroom, setSelectedClassroom] = useState(null);

  const handleSelectClassroom = useCallback((classroom) => {
    setSelectedClassroom(classroom);
    setView('students');
  }, []);

  const handleLaunch = useCallback(() => {
    setView('launchSession');
  }, []);

  const handleDashboard = useCallback(() => {
    setView('dashboard');
  }, []);

  const handleBackToClassrooms = useCallback(() => {
    setSelectedClassroom(null);
    setView('classrooms');
  }, []);

  const handleBackToStudents = useCallback(() => {
    setView('students');
  }, []);

  const handleCustomQuestions = useCallback(() => {
    setView('customQuestions');
  }, []);

  return (
    <div className="screen teacher-screen" style={{
      backgroundImage: 'url(/background.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh',
      position: 'relative',
    }}>
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, transparent 20%, transparent 80%, rgba(0,0,0,0.4) 100%)',
        pointerEvents: 'none',
      }} />

      <div className="teacher-content">
        <div className="teacher-topbar">
          <GlassButton variant="glass" size="sm" onClick={() => { sound.buttonClick(); pop(); }}>
            {t('teacher.back')}
          </GlassButton>
          <h1 className="teacher-title">{t('teacher.title')}</h1>
          <div style={{ width: '60px' }} />
        </div>

        {view === 'classrooms' && (
          <ClassroomsView onSelectClassroom={handleSelectClassroom} onCustomQuestions={handleCustomQuestions} t={t} />
        )}
        {view === 'students' && selectedClassroom && (
          <StudentsView
            classroom={selectedClassroom}
            onBack={handleBackToClassrooms}
            onLaunch={handleLaunch}
            onDashboard={handleDashboard}
            t={t}
          />
        )}
        {view === 'customQuestions' && (
          <CustomQuestionsView
            onBack={handleBackToClassrooms}
            t={t}
          />
        )}
        {view === 'dashboard' && selectedClassroom && (
          <DashboardView
            classroom={selectedClassroom}
            onBack={handleBackToStudents}
            t={t}
          />
        )}
        {view === 'launchSession' && selectedClassroom && (
          <LaunchSessionView
            classroom={selectedClassroom}
            onBack={handleBackToStudents}
            t={t}
          />
        )}
      </div>
    </div>
  );
}
