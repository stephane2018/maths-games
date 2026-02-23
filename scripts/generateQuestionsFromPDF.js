// =============================================================================
// Generate Questions Database from PDF Analysis
// Based on CE1D exam PDFs (2010-2022)
// =============================================================================

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// THÈMES ET SOUS-THÈMES basés sur les PDFs analysés
const THEMES = {
  N: {
    id: 'numbers',
    name: 'Nombres',
    icon: '🔢',
    color: '#3B82F6',
    subthemes: {
      N1: { name: 'Calcul numérique', file: '01-calcul-numerique' },
      N2: { name: 'Calcul littéral', file: '02-calcul-litteral' },
      N3: { name: 'Puissances', file: '03-puissances' },
      N4: { name: 'Équations', file: '04-equations' },
      N5: { name: 'Nombres rationnels', file: '05-rationnels' },
      N6: { name: 'Suites de nombres', file: '06-suites-de-nombres' }
    }
  },
  G: {
    id: 'geometry',
    name: 'Géométrie',
    icon: '📐',
    color: '#8B5CF6',
    subthemes: {
      G1: { name: 'Distances et lieux', file: '08-distances-et-lieux' },
      G2: { name: 'Transformations du plan', file: '09-transformations-du-plan' },
      G3: { name: 'Repérage', file: '10-reperage' },
      G4: { name: 'Angles', file: '11-angles' },
      G5: { name: 'Figures planes', file: '12-figures-planes' },
      G6: { name: 'Solides', file: '13-solides' },
      G7: { name: 'Programmes de construction', file: '14-programmes-de-construction' }
    }
  },
  P: {
    id: 'proportions',
    name: 'Proportionnalité',
    icon: '⚖️',
    color: '#10B981',
    subthemes: {
      P1: { name: 'Grandeurs proportionnelles', file: '15-grandeurs-proportionnelles' }
    }
  },
  D: {
    id: 'data',
    name: 'Traitement de données',
    icon: '📊',
    color: '#EF4444',
    subthemes: {
      D1: { name: 'Traitement de données', file: '16-traitement-de-donnees' },
      D2: { name: 'Statistiques', file: '16-traitement-de-donnees' }
    }
  },
  M: {
    id: 'measures',
    name: 'Grandeurs',
    icon: '📏',
    color: '#F59E0B',
    subthemes: {
      M1: { name: 'Conversions et mesures', file: 'grandeurs' }
    }
  },
  R: {
    id: 'problems',
    name: 'Résolution de problèmes',
    icon: '🧩',
    color: '#EC4899',
    subthemes: {
      R1: { name: 'Problèmes complexes', file: 'problemes' }
    }
  }
};

// Exemples de questions extraites du PDF analysé
const EXTRACTED_QUESTIONS = {
  N1: [
    {
      id: 'N1_2013_Q4_1',
      year: 2013,
      questionNumber: 'Q4',
      category: 'N1',
      level: 2, // déterminé par la complexité
      points: 6,
      text: {
        fr: 'Calcule : 40 - 5 × 2²',
        en: 'Calculate: 40 - 5 × 2²',
        nl: 'Bereken: 40 - 5 × 2²'
      },
      answer: 20,
      tolerance: 0,
      solution: {
        fr: '40 - 5 × 4 = 40 - 20 = 20',
        en: '40 - 5 × 4 = 40 - 20 = 20',
        nl: '40 - 5 × 4 = 40 - 20 = 20'
      },
      hint: {
        fr: 'Commence par calculer les puissances, puis les multiplications, et enfin les soustractions.',
        en: 'Start with powers, then multiplications, then subtractions.',
        nl: 'Begin met machten, dan vermenigvuldigingen, dan aftrekkingen.'
      }
    },
    {
      id: 'N1_2013_Q4_2',
      year: 2013,
      questionNumber: 'Q4',
      category: 'N1',
      level: 3,
      points: 6,
      text: {
        fr: 'Calcule : 8 × (3 - 5)³ + 4',
        en: 'Calculate: 8 × (3 - 5)³ + 4',
        nl: 'Bereken: 8 × (3 - 5)³ + 4'
      },
      answer: -60,
      tolerance: 0,
      solution: {
        fr: '8 × (-2)³ + 4 = 8 × (-8) + 4 = -64 + 4 = -60',
        en: '8 × (-2)³ + 4 = 8 × (-8) + 4 = -64 + 4 = -60',
        nl: '8 × (-2)³ + 4 = 8 × (-8) + 4 = -64 + 4 = -60'
      },
      hint: {
        fr: 'Calcule d\'abord les parenthèses, puis les puissances, puis les multiplications.',
        en: 'Calculate parentheses first, then powers, then multiplications.',
        nl: 'Bereken eerst haakjes, dan machten, dan vermenigvuldigingen.'
      }
    },
    {
      id: 'N1_2011_Q14_1',
      year: 2011,
      questionNumber: 'Q14',
      category: 'N1',
      level: 2,
      points: 4,
      text: {
        fr: 'Calcule : 56 - 5 × 2³',
        en: 'Calculate: 56 - 5 × 2³',
        nl: 'Bereken: 56 - 5 × 2³'
      },
      answer: 16,
      tolerance: 0,
      solution: {
        fr: '56 - 5 × 8 = 56 - 40 = 16',
        en: '56 - 5 × 8 = 56 - 40 = 16',
        nl: '56 - 5 × 8 = 56 - 40 = 16'
      }
    },
    {
      id: 'N1_2012_Q17_1',
      year: 2012,
      questionNumber: 'Q17',
      category: 'N1',
      level: 3,
      points: 4,
      text: {
        fr: 'Si a = -2, b = 3 et c = -5, calcule : a²b + c',
        en: 'If a = -2, b = 3 and c = -5, calculate: a²b + c',
        nl: 'Als a = -2, b = 3 en c = -5, bereken: a²b + c'
      },
      answer: 7,
      tolerance: 0,
      solution: {
        fr: '(-2)² × 3 + (-5) = 4 × 3 - 5 = 12 - 5 = 7',
        en: '(-2)² × 3 + (-5) = 4 × 3 - 5 = 12 - 5 = 7',
        nl: '(-2)² × 3 + (-5) = 4 × 3 - 5 = 12 - 5 = 7'
      }
    }
  ],
  N2: [
    {
      id: 'N2_2013_Q2',
      year: 2013,
      questionNumber: 'Q2',
      category: 'N2',
      level: 2,
      points: 2,
      text: {
        fr: 'Justifie que 3 n\'est pas un diviseur de 1403.',
        en: 'Justify that 3 is not a divisor of 1403.',
        nl: 'Verantwoord dat 3 geen deler is van 1403.'
      },
      type: 'justification',
      solution: {
        fr: 'La somme des chiffres de 1403 est 1+4+0+3=8, qui n\'est pas un multiple de 3. Donc 1403 n\'est pas divisible par 3.',
        en: 'The sum of digits of 1403 is 1+4+0+3=8, which is not a multiple of 3. Therefore 1403 is not divisible by 3.',
        nl: 'De som van de cijfers van 1403 is 1+4+0+3=8, wat geen veelvoud is van 3. Daarom is 1403 niet deelbaar door 3.'
      },
      hint: {
        fr: 'Utilise le critère de divisibilité par 3 : un nombre est divisible par 3 si la somme de ses chiffres est divisible par 3.',
        en: 'Use the divisibility rule for 3: a number is divisible by 3 if the sum of its digits is divisible by 3.',
        nl: 'Gebruik de deelbaarheidsregel voor 3: een getal is deelbaar door 3 als de som van zijn cijfers deelbaar is door 3.'
      }
    }
  ]
};

// Fonction pour générer des questions procédurales par catégorie
function generateProceduralQuestions(category, count = 20) {
  const questions = [];
  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  for (let i = 0; i < count; i++) {
    const level = [1, 2, 3][i % 3]; // Distribuer les niveaux

    switch (category) {
      case 'N1': // Calcul numérique
        questions.push(generateN1Question(level, i));
        break;
      case 'N2': // Calcul littéral
        questions.push(generateN2Question(level, i));
        break;
      case 'G1': // Géométrie
        questions.push(generateG1Question(level, i));
        break;
      case 'P1': // Proportionnalité
        questions.push(generateP1Question(level, i));
        break;
      case 'D1': // Traitement de données
        questions.push(generateD1Question(level, i));
        break;
    }
  }

  return questions;
}

function generateN1Question(level, index) {
  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  if (level === 1) {
    const a = rand(10, 50);
    const b = rand(2, 9);
    const c = rand(1, 5);
    const answer = a - b * c;

    return {
      id: `N1_gen_${Date.now()}_${index}`,
      category: 'N1',
      level: 1,
      text: {
        fr: `Calcule : ${a} - ${b} × ${c}`,
        en: `Calculate: ${a} - ${b} × ${c}`,
        nl: `Bereken: ${a} - ${b} × ${c}`
      },
      answer,
      tolerance: 0,
      hint: {
        fr: 'Effectue d\'abord la multiplication, puis la soustraction.',
        en: 'Do the multiplication first, then the subtraction.',
        nl: 'Doe eerst de vermenigvuldiging, dan de aftrekking.'
      }
    };
  } else if (level === 2) {
    const a = rand(20, 100);
    const b = rand(2, 9);
    const exp = rand(2, 3);
    const answer = a - b * Math.pow(b, exp - 1);

    return {
      id: `N1_gen_${Date.now()}_${index}`,
      category: 'N1',
      level: 2,
      text: {
        fr: `Calcule : ${a} - ${b} × ${b}${exp === 2 ? '²' : '³'}`,
        en: `Calculate: ${a} - ${b} × ${b}${exp === 2 ? '²' : '³'}`,
        nl: `Bereken: ${a} - ${b} × ${b}${exp === 2 ? '²' : '³'}`
      },
      answer,
      tolerance: 0
    };
  } else {
    const a = rand(2, 9);
    const b = rand(-5, -2);
    const c = rand(2, 5);
    const answer = a * Math.pow(b, 2) + c;

    return {
      id: `N1_gen_${Date.now()}_${index}`,
      category: 'N1',
      level: 3,
      text: {
        fr: `Calcule : ${a} × (${b})² + ${c}`,
        en: `Calculate: ${a} × (${b})² + ${c}`,
        nl: `Bereken: ${a} × (${b})² + ${c}`
      },
      answer,
      tolerance: 0
    };
  }
}

function generateN2Question(level, index) {
  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const number = level === 1 ? rand(100, 500) : level === 2 ? rand(500, 2000) : rand(2000, 5000);
  const divisor = [2, 3, 4, 5, 6, 9, 10][rand(0, 6)];

  return {
    id: `N2_gen_${Date.now()}_${index}`,
    category: 'N2',
    level,
    type: 'justification',
    text: {
      fr: `Est-ce que ${number} est divisible par ${divisor} ? Justifie.`,
      en: `Is ${number} divisible by ${divisor}? Justify.`,
      nl: `Is ${number} deelbaar door ${divisor}? Verantwoord.`
    },
    answer: number % divisor === 0 ? 'Oui' : 'Non',
    hint: {
      fr: `Utilise les critères de divisibilité par ${divisor}.`,
      en: `Use the divisibility rules for ${divisor}.`,
      nl: `Gebruik de deelbaarheidsregels voor ${divisor}.`
    }
  };
}

function generateG1Question(level, index) {
  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const length = rand(5, 20);
  const width = rand(3, 15);
  const answer = 2 * (length + width);

  return {
    id: `G1_gen_${Date.now()}_${index}`,
    category: 'G1',
    level,
    text: {
      fr: `Un rectangle a une longueur de ${length} cm et une largeur de ${width} cm. Calcule son périmètre.`,
      en: `A rectangle has a length of ${length} cm and a width of ${width} cm. Calculate its perimeter.`,
      nl: `Een rechthoek heeft een lengte van ${length} cm en een breedte van ${width} cm. Bereken zijn omtrek.`
    },
    answer,
    tolerance: 0,
    unit: 'cm'
  };
}

function generateP1Question(level, index) {
  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const price1 = rand(2, 10);
  const qty1 = rand(3, 8);
  const qty2 = rand(10, 20);
  const answer = (price1 / qty1) * qty2;

  return {
    id: `P1_gen_${Date.now()}_${index}`,
    category: 'P1',
    level,
    text: {
      fr: `Si ${qty1} pommes coûtent ${price1} €, combien coûtent ${qty2} pommes ?`,
      en: `If ${qty1} apples cost ${price1} €, how much do ${qty2} apples cost?`,
      nl: `Als ${qty1} appels ${price1} € kosten, hoeveel kosten ${qty2} appels?`
    },
    answer: parseFloat(answer.toFixed(2)),
    tolerance: 0.01,
    unit: '€'
  };
}

function generateD1Question(level, index) {
  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const values = [rand(10, 30), rand(15, 35), rand(20, 40), rand(10, 25)];
  const average = values.reduce((a, b) => a + b, 0) / values.length;

  return {
    id: `D1_gen_${Date.now()}_${index}`,
    category: 'D1',
    level,
    text: {
      fr: `Calcule la moyenne de ces nombres : ${values.join(', ')}`,
      en: `Calculate the average of these numbers: ${values.join(', ')}`,
      nl: `Bereken het gemiddelde van deze getallen: ${values.join(', ')}`
    },
    answer: parseFloat(average.toFixed(2)),
    tolerance: 0.01
  };
}

// Générer tous les fichiers de questions
function generateAllQuestionFiles() {
  const outputDir = path.join(__dirname, '..', 'src', 'data');

  console.log('\n📚 Génération des fichiers de questions...\n');

  // Pour chaque thème principal
  for (const [themeKey, theme] of Object.entries(THEMES)) {
    for (const [subthemeKey, subtheme] of Object.entries(theme.subthemes)) {
      console.log(`📝 Génération de ${subthemeKey} - ${subtheme.name}...`);

      // Combiner questions extraites + questions générées
      const extractedQuestions = EXTRACTED_QUESTIONS[subthemeKey] || [];
      const proceduralQuestions = generateProceduralQuestions(subthemeKey, 15);
      const allQuestions = [...extractedQuestions, ...proceduralQuestions];

      // Générer le fichier
      const fileContent = generateQuestionFile(subthemeKey, subtheme.name, allQuestions);
      const filePath = path.join(outputDir, `questions-${subthemeKey}.js`);

      fs.writeFileSync(filePath, fileContent);
      console.log(`✅ ${filePath} créé avec ${allQuestions.length} questions`);
    }
  }

  // Générer le fichier de configuration des thèmes
  generateThemesFile();

  // Générer le fichier d'index
  generateIndexFile();

  console.log('\n✅ Génération terminée !\n');
}

function generateQuestionFile(categoryCode, categoryName, questions) {
  return `// =============================================================================
// ${categoryCode} - ${categoryName}
// CE1D Belgian exam - Trilingual (FR / EN / NL)
// Généré automatiquement depuis les PDFs CE1D (2010-2022)
// =============================================================================

export const questions = ${JSON.stringify(questions, null, 2)};

/**
 * Générateur procédural pour ${categoryCode}
 * @param {1|2|3} level - Niveau de difficulté
 * @returns {object} Question générée
 */
export function generate(level = 1) {
  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const id = \`${categoryCode}_gen_\${Date.now()}_\${rand(100, 999)}\`;

  // TODO: Implémenter la génération procédurale spécifique à ${categoryCode}

  return {
    id,
    category: '${categoryCode}',
    level,
    text: {
      fr: 'Question générée',
      en: 'Generated question',
      nl: 'Gegenereerde vraag'
    },
    answer: 0,
    tolerance: 0
  };
}
`;
}

function generateThemesFile() {
  const outputPath = path.join(__dirname, '..', 'src', 'data', 'ce1dThemes.js');

  const content = `// =============================================================================
// CE1D Themes Configuration
// Basé sur l'analyse des PDFs CE1D (2010-2022)
// =============================================================================

export const CE1D_THEMES = [
${Object.entries(THEMES).map(([key, theme]) => `  {
    id: '${theme.id}',
    icon: '${theme.icon}',
    categories: [${Object.keys(theme.subthemes).map(k => `'${k}'`).join(', ')}],
    color: '${theme.color}',
  }`).join(',\n')}
];

export function getCategoriesToLoad(selectedThemeIds) {
  const categories = new Set();
  for (const id of selectedThemeIds) {
    const theme = CE1D_THEMES.find(t => t.id === id);
    if (theme) {
      theme.categories.forEach(cat => categories.add(cat));
    }
  }
  return Array.from(categories);
}
`;

  fs.writeFileSync(outputPath, content);
  console.log(`✅ ${outputPath} créé`);
}

function generateIndexFile() {
  const outputPath = path.join(__dirname, '..', 'src', 'data', 'questionIndex.js');

  const allCategories = [];
  for (const theme of Object.values(THEMES)) {
    for (const [code, subtheme] of Object.entries(theme.subthemes)) {
      allCategories.push({ code, name: subtheme.name });
    }
  }

  const imports = allCategories.map(cat =>
    `import { questions as questions${cat.code}, generate as generate${cat.code} } from './questions-${cat.code}.js';`
  ).join('\n');

  const categoryArray = allCategories.map(cat => `  {
    code: '${cat.code}',
    label: { fr: '${cat.name}', en: '${cat.name}', nl: '${cat.name}' },
    questions: questions${cat.code},
    generate: generate${cat.code},
  }`).join(',\n');

  const content = `// =============================================================================
// Question Index - Central registry for all question categories
// CE1D Belgian exam - Math games
// =============================================================================

${imports}

export const allCategories = [
${categoryArray}
];

export function getCategoryByCode(code) {
  return allCategories.find((cat) => cat.code === code);
}

export function getQuestionsByCategory(code) {
  const cat = getCategoryByCode(code);
  return cat ? cat.questions : [];
}

export function getRandomQuestion(categories, level) {
  let pool = allCategories;
  if (categories && categories.length > 0) {
    pool = allCategories.filter((cat) => categories.includes(cat.code));
  }
  if (pool.length === 0) return null;

  const cat = pool[Math.floor(Math.random() * pool.length)];

  if (cat.generate && Math.random() < 0.5) {
    const lvl = level || (Math.floor(Math.random() * 3) + 1);
    return cat.generate(lvl);
  }

  let available = cat.questions;
  if (level) {
    available = available.filter((q) => q.level === level);
  }
  if (available.length === 0) {
    if (cat.generate) {
      const lvl = level || (Math.floor(Math.random() * 3) + 1);
      return cat.generate(lvl);
    }
    return null;
  }

  return available[Math.floor(Math.random() * available.length)];
}

export function getAllQuestions(level) {
  const all = allCategories.flatMap((cat) => cat.questions);
  if (level) {
    return all.filter((q) => q.level === level);
  }
  return all;
}

export function getTotalQuestionCount() {
  return allCategories.reduce((sum, cat) => sum + cat.questions.length, 0);
}
`;

  fs.writeFileSync(outputPath, content);
  console.log(`✅ ${outputPath} créé`);
}

// Exécuter
generateAllQuestionFiles();
