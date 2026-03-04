import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const EXTRACTED_DIR = path.join(__dirname, '..', 'extracted');
const OUTPUT_DIR = path.join(__dirname, '..', 'src', 'data');

// IMPORTANT: Lettres autorisées dans le Numpad
const ALLOWED_LETTERS = ['a', 'b', 'c', 'd', 'x', 'y'];

// Mapping des lettres interdites vers les lettres autorisées
const LETTER_MAPPING = {
  'm': 'a',
  'n': 'b',
  'p': 'c',
  'q': 'd',
  'r': 'x',
  's': 'y',
  't': 'x',
  'k': 'a',
  'z': 'y'
};

/**
 * Remplace toutes les lettres interdites par des lettres autorisées
 */
function replaceForbiddenLetters(text) {
  let result = text;

  // Liste des lettres interdites et leurs remplacements
  const replacements = [
    // Ordre important : traiter les lettres les plus fréquentes en dernier
    ['z', 'y'],
    ['t', 'x'],
    ['s', 'y'],
    ['r', 'x'],
    ['q', 'd'],
    ['p', 'c'],
    ['n', 'b'],
    ['m', 'a'],
    ['k', 'a']
  ];

  for (const [forbidden, allowed] of replacements) {
    // Pattern global pour toutes les occurrences d'une lettre variable
    // Cherche la lettre interdite suivie optionnellement par ², chiffre, ou autre lettre
    const regex = new RegExp(forbidden, 'g');
    result = result.replace(regex, allowed);
  }

  return result;
}

/**
 * Parse les exercices depuis le texte extrait
 */
function parseExercises(content) {
  const lines = content.split('\n').map(l => l.trim());
  const exercises = [];
  const corrections = [];

  let isExerciseSection = false;
  let isCorrectionSection = false;
  let exerciseIndex = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Skip empty lines
    if (!line) continue;

    // Détection des sections
    if (line.toUpperCase().includes('EXERCICES') ||
        (line.toUpperCase().includes('NIVEAU') && line.includes('–'))) {
      isExerciseSection = true;
      isCorrectionSection = false;
      continue;
    }

    if (line.toUpperCase().includes('CORRIGÉ') || line.toUpperCase().includes('CORRECTION')) {
      isExerciseSection = false;
      isCorrectionSection = true;
      continue;
    }

    // Skip headers and instructions
    if (line.includes('Consigne') || line.includes('CONSIGNE') ||
        line.includes('secondaire') || line.startsWith('===')) continue;

    // Pattern pour les sous-questions: a) b) c) etc.
    const subQuestionMatch = line.match(/^([a-i])\)\s*(.+)/);
    if (subQuestionMatch && isExerciseSection) {
      const exercise = subQuestionMatch[2].trim();
      if (exercise) {
        exercises.push({ number: exerciseIndex++, text: exercise });
      }
      continue;
    }

    // Pattern pour les questions numérotées: 1) 2) 3) etc.
    const numberMatch = line.match(/^(\d+)\)\s*(.*)/);
    if (numberMatch) {
      const restOfLine = numberMatch[2].trim();

      // Si c'est une instruction (DONNE, EFFECTUE, etc.), chercher les sous-questions
      if (restOfLine.toUpperCase().includes('DONNE') ||
          restOfLine.toUpperCase().includes('EFFECTUE') ||
          restOfLine.toUpperCase().includes('ÉCRIS') ||
          restOfLine.toUpperCase().includes('TRANSFORME') ||
          restOfLine.toUpperCase().includes('CALCULE')) {
        // Les vraies questions sont dans les lignes suivantes
        continue;
      }

      // Si dans la section exercices, c'est un exercice
      if (isExerciseSection && restOfLine) {
        exercises.push({ number: exerciseIndex++, text: restOfLine });
        continue;
      }

      // Si dans la section corrections, c'est une correction
      if (isCorrectionSection && restOfLine) {
        corrections.push({ number: corrections.length, text: restOfLine });
        continue;
      }
    }

    // Pattern pour les corrections au format "expression = résultat"
    const correctionMatch = line.match(/^(.+?)\s*=\s*(.+)$/);
    if (correctionMatch && isCorrectionSection) {
      const answer = correctionMatch[2].trim();
      if (answer && !answer.includes('Niveau')) {
        corrections.push({ number: corrections.length, text: answer });
      }
      continue;
    }

    // Pattern pour les corrections numérotées: 1) résultat
    const correctionNumberMatch = line.match(/^(\d+)\)\s*(.+)/);
    if (correctionNumberMatch && isCorrectionSection) {
      const answer = correctionNumberMatch[2].trim();
      if (answer && !answer.includes('Niveau')) {
        corrections.push({ number: corrections.length, text: answer });
      }
      continue;
    }

    // Corrections sans le format "=" ni numéro
    if (isCorrectionSection && !line.includes('Niveau') && line.length > 0) {
      // Vérifier si ça ressemble à une réponse (pas un header)
      if (!line.includes(':') && !line.includes('–') && line.length < 100 &&
          !line.toUpperCase().includes('CHAPITRE') && !line.includes('secondaire')) {
        corrections.push({ number: corrections.length, text: line });
      }
    }
  }

  return { exercises, corrections };
}

/**
 * Génère des questions à partir des exercices
 */
function generateQuestions(exercises, corrections, category, topic) {
  const questions = [];

  exercises.forEach((exercise, index) => {
    const correction = corrections.find(c => c.number === exercise.number);
    if (!correction) return;

    // Remplacer les lettres interdites
    const exerciseText = replaceForbiddenLetters(exercise.text);
    const answerText = replaceForbiddenLetters(correction.text);

    // Déterminer le niveau (répartition équilibrée)
    let level;
    if (index < exercises.length / 3) level = 1;
    else if (index < (exercises.length * 2) / 3) level = 2;
    else level = 3;

    // Générer les textes multilingues
    const questionText = {
      fr: exerciseText,
      en: translateToEnglish(exerciseText, topic),
      nl: translateToDutch(exerciseText, topic)
    };

    const hint = {
      fr: generateHintFr(topic, exerciseText),
      en: generateHintEn(topic, exerciseText),
      nl: generateHintNl(topic, exerciseText)
    };

    questions.push({
      id: `${category}_${index + 1}`,
      category: category,
      level: level,
      text: questionText,
      answer: answerText,
      tolerance: 0.01,
      hint: hint
    });
  });

  return questions;
}

/**
 * Traductions basiques (à améliorer si besoin)
 */
function translateToEnglish(text, topic) {
  let result = text;

  // Remplacements basiques pour les instructions courantes
  const replacements = {
    'DÉVELOPPE': 'EXPAND',
    'RÉDUIS': 'SIMPLIFY',
    'EFFECTUE': 'CALCULATE',
    'CALCULE': 'CALCULATE',
    'Développe': 'Expand',
    'Réduis': 'Simplify',
    'et': 'and',
    'pour': 'for'
  };

  for (const [fr, en] of Object.entries(replacements)) {
    result = result.replace(new RegExp(fr, 'g'), en);
  }

  return result;
}

function translateToDutch(text, topic) {
  let result = text;

  const replacements = {
    'DÉVELOPPE': 'ONTWIKKEL',
    'RÉDUIS': 'VEREENVOUDIG',
    'EFFECTUE': 'BEREKEN',
    'CALCULE': 'BEREKEN',
    'Développe': 'Ontwikkel',
    'Réduis': 'Vereenvoudig',
    'et': 'en',
    'pour': 'voor'
  };

  for (const [fr, nl] of Object.entries(replacements)) {
    result = result.replace(new RegExp(fr, 'g'), nl);
  }

  return result;
}

/**
 * Génère un indice adapté au sujet
 */
function generateHintFr(topic, text) {
  if (topic.includes('Distributivité simple')) {
    return 'Multiplie chaque terme entre parenthèses par le facteur devant.';
  } else if (topic.includes('Double distributivité')) {
    return 'Multiplie chaque terme de la première parenthèse par chaque terme de la seconde.';
  } else if (topic.includes('Puissances')) {
    return 'Applique les règles des puissances : aⁿ × aᵐ = aⁿ⁺ᵐ et (aⁿ)ᵐ = aⁿˣᵐ';
  } else if (topic.includes('Calcul littéral')) {
    return 'Regroupe les termes semblables et simplifie.';
  }
  return 'Simplifie l\'expression étape par étape.';
}

function generateHintEn(topic, text) {
  if (topic.includes('Distributivité simple')) {
    return 'Multiply each term in parentheses by the factor in front.';
  } else if (topic.includes('Double distributivité')) {
    return 'Multiply each term of the first parenthesis by each term of the second.';
  } else if (topic.includes('Puissances')) {
    return 'Apply the power rules: aⁿ × aᵐ = aⁿ⁺ᵐ and (aⁿ)ᵐ = aⁿˣᵐ';
  } else if (topic.includes('Calcul littéral')) {
    return 'Group like terms and simplify.';
  }
  return 'Simplify the expression step by step.';
}

function generateHintNl(topic, text) {
  if (topic.includes('Distributivité simple')) {
    return 'Vermenigvuldig elke term tussen haakjes met de factor ervoor.';
  } else if (topic.includes('Double distributivité')) {
    return 'Vermenigvuldig elke term van de eerste haakjes met elke term van de tweede.';
  } else if (topic.includes('Puissances')) {
    return 'Pas de machtsregels toe: aⁿ × aᵐ = aⁿ⁺ᵐ en (aⁿ)ᵐ = aⁿˣᵐ';
  } else if (topic.includes('Calcul littéral')) {
    return 'Groepeer gelijksoortige termen en vereenvoudig.';
  }
  return 'Vereenvoudig de uitdrukking stap voor stap.';
}

/**
 * Traite un fichier
 */
async function processFile(sourceFile, targetFile, category, topic) {
  console.log(`\n${'='.repeat(70)}`);
  console.log(`📝 Traitement: ${topic}`);
  console.log(`   Source: ${sourceFile}`);
  console.log(`   Target: ${targetFile}`);
  console.log(`${'='.repeat(70)}`);

  // Lire le fichier source
  const sourcePath = path.join(EXTRACTED_DIR, sourceFile);
  const content = await fs.readFile(sourcePath, 'utf-8');

  // Parser les exercices
  const { exercises, corrections } = parseExercises(content);
  console.log(`   📚 Exercices trouvés: ${exercises.length}`);
  console.log(`   ✅ Corrections trouvées: ${corrections.length}`);

  if (exercises.length === 0) {
    console.log(`   ⚠️  Aucun exercice parsé, abandon.`);
    return null;
  }

  // Générer les questions
  const questions = generateQuestions(exercises, corrections, category, topic);
  console.log(`   ✨ Questions générées: ${questions.length}`);

  // Sauvegarder dans un fichier temporaire
  const tempOutputPath = path.join(EXTRACTED_DIR, `generated_${targetFile}`);
  const fileContent = `// =============================================================================
// ${category} - ${topic}
// CE1D Belgian exam - Trilingual (FR / EN / NL)
// Generated from: ${sourceFile}
// IMPORTANT: Uses ONLY letters: ${ALLOWED_LETTERS.join(', ')}
// =============================================================================

export const questions = ${JSON.stringify(questions, null, 2)};
`;

  await fs.writeFile(tempOutputPath, fileContent, 'utf-8');
  console.log(`   💾 Sauvegardé: ${tempOutputPath}`);

  return {
    sourceFile,
    targetFile,
    category,
    topic,
    questionCount: questions.length,
    outputPath: tempOutputPath
  };
}

/**
 * Main
 */
async function main() {
  console.log(`\n🚀 Génération de questions avec templates`);
  console.log(`📁 Lettres autorisées: ${ALLOWED_LETTERS.join(', ')}`);
  console.log(`📁 Dossier source: ${EXTRACTED_DIR}`);

  const filesToProcess = [
    {
      sourceFile: 'Chapitre_Complet_Puissances_CE1D_Tous_Exercices.txt',
      targetFile: 'questions-P1-new.js',
      category: 'P1',
      topic: 'Puissances'
    },
    {
      sourceFile: 'Chapitre_PEMDAS_Exposants_Format_Carre_CE1D.txt',
      targetFile: 'questions-P2-new.js',
      category: 'P1',
      topic: 'PEMDAS avec exposants'
    },
    {
      sourceFile: 'Distributivite_Simple_CE1D.txt',
      targetFile: 'questions-A1-new.js',
      category: 'A1',
      topic: 'Distributivité simple'
    },
    {
      sourceFile: 'Variantes_Double_Distributivite_CE1D.txt',
      targetFile: 'questions-A2-new.js',
      category: 'A2',
      topic: 'Double distributivité'
    },
    {
      sourceFile: 'Variantes_Calcul_Litteral_Complet_CE1D.txt',
      targetFile: 'questions-A3-new.js',
      category: 'A3',
      topic: 'Calcul littéral'
    },
    {
      sourceFile: 'Variantes_Produits_Remarquables_CE1D.txt',
      targetFile: 'questions-A4-new.js',
      category: 'A4',
      topic: 'Produits remarquables'
    },
    {
      sourceFile: 'Jeu_Duel_Equations_1er_degre.txt',
      targetFile: 'questions-A5-new.js',
      category: 'A5',
      topic: 'Équations du 1er degré'
    }
  ];

  const results = [];

  for (const fileInfo of filesToProcess) {
    try {
      const result = await processFile(
        fileInfo.sourceFile,
        fileInfo.targetFile,
        fileInfo.category,
        fileInfo.topic
      );

      if (result) {
        results.push(result);
      }
    } catch (error) {
      console.error(`   ❌ Erreur: ${error.message}`);
    }
  }

  // Résumé
  console.log(`\n\n${'='.repeat(70)}`);
  console.log(`📊 RÉSUMÉ FINAL`);
  console.log(`${'='.repeat(70)}`);
  console.log(`✅ Fichiers traités: ${results.length}/${filesToProcess.length}`);
  console.log(`✅ Total questions: ${results.reduce((sum, r) => sum + r.questionCount, 0)}`);
  console.log(`\n📝 Fichiers générés:`);
  results.forEach(r => {
    console.log(`   - ${r.outputPath} (${r.questionCount} questions)`);
  });
  console.log(`\n💡 Vérifiez les fichiers générés dans: ${EXTRACTED_DIR}`);
}

main()
  .then(() => {
    console.log('\n✅ Génération terminée!');
  })
  .catch(error => {
    console.error('\n❌ Erreur:', error);
    process.exit(1);
  });
