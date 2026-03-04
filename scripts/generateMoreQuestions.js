import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OUTPUT_DIR = path.join(__dirname, '..', 'src', 'data');
const ALLOWED_LETTERS = ['a', 'b', 'c', 'd', 'x', 'y'];

/**
 * Génère des variantes de questions pour A1 - Distributivité simple
 */
function generateA1Questions() {
  const questions = [];
  let id = 1;

  // Templates pour niveau 1 (10 questions)
  const level1Templates = [
    { expr: 'x(a + b)', answer: 'xa + xb' },
    { expr: 'a(x + y)', answer: 'ax + ay' },
    { expr: 'b(c + d)', answer: 'bc + bd' },
    { expr: 'y(a + c)', answer: 'ya + yc' },
    { expr: 'd(x + b)', answer: 'dx + db' },
    { expr: '(a + b)x', answer: 'ax + bx' },
    { expr: '(x + y)c', answer: 'xc + yc' },
    { expr: '(b + d)a', answer: 'ba + da' },
    { expr: 'c(a + x)', answer: 'ca + cx' },
    { expr: '(c + y)d', answer: 'cd + yd' },
  ];

  for (const template of level1Templates) {
    questions.push({
      id: `A1_${id++}`,
      category: 'A1',
      level: 1,
      text: {
        fr: `Développe : ${template.expr}`,
        en: `Expand: ${template.expr}`,
        nl: `Ontwikkel: ${template.expr}`
      },
      answer: template.answer,
      tolerance: 0.01,
      hint: {
        fr: 'Multiplie chaque terme entre parenthèses par le facteur devant.',
        en: 'Multiply each term in parentheses by the factor in front.',
        nl: 'Vermenigvuldig elke term tussen haakjes met de factor ervoor.'
      }
    });
  }

  // Templates pour niveau 2 (15 questions) - avec coefficients
  const level2Templates = [
    { expr: '2a(b + c)', answer: '2ab + 2ac' },
    { expr: '3x(a + y)', answer: '3xa + 3xy' },
    { expr: '5b(x - d)', answer: '5bx - 5bd' },
    { expr: '4y(a - b)', answer: '4ya - 4yb' },
    { expr: '2(a + b + c)', answer: '2a + 2b + 2c' },
    { expr: '3(x + y + d)', answer: '3x + 3y + 3d' },
    { expr: '(2a - 3b)x', answer: '2ax - 3bx' },
    { expr: '(4x + y)a', answer: '4xa + ya' },
    { expr: '(3a - 2c)y', answer: '3ay - 2cy' },
    { expr: 'a(2x - 3y)', answer: '2ax - 3ay' },
    { expr: 'b(4a + 5c)', answer: '4ab + 5bc' },
    { expr: '(5a - 2b)d', answer: '5ad - 2bd' },
    { expr: 'c(3x + 4y)', answer: '3cx + 4cy' },
    { expr: '(6x - y)b', answer: '6xb - yb' },
    { expr: 'd(2a - 5x)', answer: '2ad - 5dx' },
  ];

  for (const template of level2Templates) {
    questions.push({
      id: `A1_${id++}`,
      category: 'A1',
      level: 2,
      text: {
        fr: `Développe : ${template.expr}`,
        en: `Expand: ${template.expr}`,
        nl: `Ontwikkel: ${template.expr}`
      },
      answer: template.answer,
      tolerance: 0.01,
      hint: {
        fr: 'Multiplie chaque terme entre parenthèses par le facteur devant.',
        en: 'Multiply each term in parentheses by the factor in front.',
        nl: 'Vermenigvuldig elke term tussen haakjes met de factor ervoor.'
      }
    });
  }

  // Templates pour niveau 3 (15 questions) - avec négatifs et complexes
  const level3Templates = [
    { expr: '-2a(3x + 4y)', answer: '-6ax - 8ay' },
    { expr: '-5b(2c - 3d)', answer: '-10bc + 15bd' },
    { expr: '(3a - 4b)(-2x)', answer: '-6ax + 8bx' },
    { expr: '-3(2a + 5b - c)', answer: '-6a - 15b + 3c' },
    { expr: '4x(3a - 2y + d)', answer: '12xa - 8xy + 4xd' },
    { expr: '(-a + 2b)(-3y)', answer: '3ay - 6by' },
    { expr: '-4d(2a - 3x + b)', answer: '-8ad + 12dx - 4db' },
    { expr: '(5x - 3y)(-2a)', answer: '-10xa + 6ya' },
    { expr: '-6(a - 2b + 3c)', answer: '-6a + 12b - 18c' },
    { expr: '3a(-2x + 4y - d)', answer: '-6ax + 12ay - 3ad' },
    { expr: '(-4a + 5b)(-x)', answer: '4ax - 5bx' },
    { expr: '-2y(3a - 4b + 2c)', answer: '-6ay + 8by - 4cy' },
    { expr: '(6x - 5y + 2d)(-a)', answer: '-6xa + 5ya - 2da' },
    { expr: '-5c(2x - y + 3a)', answer: '-10cx + 5cy - 15ca' },
    { expr: '(-3a + 4b - 2c)(-2d)', answer: '6ad - 8bd + 4cd' },
  ];

  for (const template of level3Templates) {
    questions.push({
      id: `A1_${id++}`,
      category: 'A1',
      level: 3,
      text: {
        fr: `Développe et réduis : ${template.expr}`,
        en: `Expand and simplify: ${template.expr}`,
        nl: `Ontwikkel en vereenvoudig: ${template.expr}`
      },
      answer: template.answer,
      tolerance: 0.01,
      hint: {
        fr: 'Multiplie chaque terme entre parenthèses par le facteur devant, attention aux signes.',
        en: 'Multiply each term in parentheses by the factor in front, watch the signs.',
        nl: 'Vermenigvuldig elke term tussen haakjes met de factor ervoor, let op de tekens.'
      }
    });
  }

  return questions;
}

/**
 * Génère des variantes de questions pour A2 - Double distributivité
 */
function generateA2Questions() {
  const questions = [];
  let id = 1;

  // Niveau 1 (10 questions) - simple
  const level1Templates = [
    { expr: '(a + b)(c + d)', answer: 'ac + ad + bc + bd' },
    { expr: '(x + y)(a + b)', answer: 'xa + xb + ya + yb' },
    { expr: '(a + c)(x + y)', answer: 'ax + ay + cx + cy' },
    { expr: '(b + d)(a + c)', answer: 'ba + bc + da + dc' },
    { expr: '(x + a)(y + b)', answer: 'xy + xb + ay + ab' },
    { expr: '(a + x)(b + y)', answer: 'ab + ay + xb + xy' },
    { expr: '(c + d)(x + a)', answer: 'cx + ca + dx + da' },
    { expr: '(y + b)(x + c)', answer: 'yx + yc + bx + bc' },
    { expr: '(d + a)(b + x)', answer: 'db + dx + ab + ax' },
    { expr: '(x + c)(a + d)', answer: 'xa + xd + ca + cd' },
  ];

  for (const template of level1Templates) {
    questions.push({
      id: `A2_${id++}`,
      category: 'A2',
      level: 1,
      text: {
        fr: `Développe : ${template.expr}`,
        en: `Expand: ${template.expr}`,
        nl: `Ontwikkel: ${template.expr}`
      },
      answer: template.answer,
      tolerance: 0.01,
      hint: {
        fr: 'Multiplie chaque terme de la première parenthèse par chaque terme de la seconde.',
        en: 'Multiply each term of the first parenthesis by each term of the second.',
        nl: 'Vermenigvuldig elke term van de eerste haakjes met elke term van de tweede.'
      }
    });
  }

  // Niveau 2 (15 questions) - avec coefficients et carrés
  const level2Templates = [
    { expr: '(x + 2)(x + 3)', answer: 'x² + 5x + 6' },
    { expr: '(a + 3)(a + 4)', answer: 'a² + 7a + 12' },
    { expr: '(2x + 1)(x + 2)', answer: '2x² + 5x + 2' },
    { expr: '(3a + 2)(a + 1)', answer: '3a² + 5a + 2' },
    { expr: '(x + 4)(x + 5)', answer: 'x² + 9x + 20' },
    { expr: '(2a + 3)(a + 2)', answer: '2a² + 7a + 6' },
    { expr: '(3x + 1)(x + 3)', answer: '3x² + 10x + 3' },
    { expr: '(a + 5)(a + 2)', answer: 'a² + 7a + 10' },
    { expr: '(4x + 1)(x + 1)', answer: '4x² + 5x + 1' },
    { expr: '(2a + 5)(a + 3)', answer: '2a² + 11a + 15' },
    { expr: '(x + 3)(2x + 1)', answer: '2x² + 7x + 3' },
    { expr: '(a + 2)(3a + 2)', answer: '3a² + 8a + 4' },
    { expr: '(3x + 2)(2x + 1)', answer: '6x² + 7x + 2' },
    { expr: '(2a + 1)(2a + 3)', answer: '4a² + 8a + 3' },
    { expr: '(4a + 3)(a + 2)', answer: '4a² + 11a + 6' },
  ];

  for (const template of level2Templates) {
    questions.push({
      id: `A2_${id++}`,
      category: 'A2',
      level: 2,
      text: {
        fr: `Développe et réduis : ${template.expr}`,
        en: `Expand and simplify: ${template.expr}`,
        nl: `Ontwikkel en vereenvoudig: ${template.expr}`
      },
      answer: template.answer,
      tolerance: 0.01,
      hint: {
        fr: 'Multiplie chaque terme de la première parenthèse par chaque terme de la seconde, puis regroupe.',
        en: 'Multiply each term of the first parenthesis by each term of the second, then combine.',
        nl: 'Vermenigvuldig elke term van de eerste haakjes met elke term van de tweede, dan groeperen.'
      }
    });
  }

  // Niveau 3 (15 questions) - avec négatifs et complexes
  const level3Templates = [
    { expr: '(2x - 3)(x + 4)', answer: '2x² + 5x - 12' },
    { expr: '(3a - 2)(a + 5)', answer: '3a² + 13a - 10' },
    { expr: '(x - 4)(x + 4)', answer: 'x² - 16' },
    { expr: '(a - 3)(a + 3)', answer: 'a² - 9' },
    { expr: '(2x + 5)(3x - 2)', answer: '6x² + 11x - 10' },
    { expr: '(4a - 3)(2a + 1)', answer: '8a² - 2a - 3' },
    { expr: '(3x - 5)(2x - 1)', answer: '6x² - 13x + 5' },
    { expr: '(2a - 3)(3a - 4)', answer: '6a² - 17a + 12' },
    { expr: '(5x + 2)(2x - 3)', answer: '10x² - 11x - 6' },
    { expr: '(3a + 4)(2a - 5)', answer: '6a² + 23a - 20' },
    { expr: '(-x + 3)(2x + 1)', answer: '-2x² + 5x + 3' },
    { expr: '(-2a + 5)(a - 3)', answer: '-2a² + 11a - 15' },
    { expr: '(4x - 5)(3x + 2)', answer: '12x² - 7x - 10' },
    { expr: '(5a - 2)(2a - 3)', answer: '10a² - 19a + 6' },
    { expr: '(-3x + 4)(2x - 1)', answer: '-6x² + 11x - 4' },
  ];

  for (const template of level3Templates) {
    questions.push({
      id: `A2_${id++}`,
      category: 'A2',
      level: 3,
      text: {
        fr: `Développe et réduis : ${template.expr}`,
        en: `Expand and simplify: ${template.expr}`,
        nl: `Ontwikkel en vereenvoudig: ${template.expr}`
      },
      answer: template.answer,
      tolerance: 0.01,
      hint: {
        fr: 'Applique la double distributivité, attention aux signes négatifs.',
        en: 'Apply double distributivity, watch out for negative signs.',
        nl: 'Pas dubbele distributiviteit toe, let op de negatieve tekens.'
      }
    });
  }

  return questions;
}

/**
 * Génère des variantes de questions pour A3 - Calcul littéral
 */
function generateA3Questions() {
  const questions = [];
  let id = 1;

  // Niveau 1 (10 questions) - Réduction simple
  const level1Templates = [
    { expr: '2a + 3a', answer: '5a' },
    { expr: '5x - 2x', answer: '3x' },
    { expr: '4b + b', answer: '5b' },
    { expr: '7y - 3y', answer: '4y' },
    { expr: '6c - 2c + c', answer: '5c' },
    { expr: '3d + 2d - d', answer: '4d' },
    { expr: 'a + 3a + 2a', answer: '6a' },
    { expr: '5x - x - 2x', answer: '2x' },
    { expr: '4y + 2y - 3y', answer: '3y' },
    { expr: '8b - 5b + b', answer: '4b' },
  ];

  for (const template of level1Templates) {
    questions.push({
      id: `A3_${id++}`,
      category: 'A3',
      level: 1,
      text: {
        fr: `Réduis : ${template.expr}`,
        en: `Simplify: ${template.expr}`,
        nl: `Vereenvoudig: ${template.expr}`
      },
      answer: template.answer,
      tolerance: 0.01,
      hint: {
        fr: 'Regroupe les termes semblables.',
        en: 'Combine like terms.',
        nl: 'Groepeer gelijksoortige termen.'
      }
    });
  }

  // Niveau 2 (15 questions) - Multiplication et réduction
  const level2Templates = [
    { expr: '2a × 3b', answer: '6ab' },
    { expr: '4x × 2y', answer: '8xy' },
    { expr: '5a × a', answer: '5a²' },
    { expr: '3x × 2x', answer: '6x²' },
    { expr: '2a × 3b × 4', answer: '24ab' },
    { expr: '3x × 2y × 5', answer: '30xy' },
    { expr: 'a² + 3a²', answer: '4a²' },
    { expr: '5x² - 2x²', answer: '3x²' },
    { expr: '2ab + 3ab', answer: '5ab' },
    { expr: '4xy - xy', answer: '3xy' },
    { expr: '3a² + 2a + a²', answer: '4a² + 2a' },
    { expr: '5x² - 3x + 2x²', answer: '7x² - 3x' },
    { expr: '2ab + 3a - ab', answer: 'ab + 3a' },
    { expr: '4xy + 2x - 2xy', answer: '2xy + 2x' },
    { expr: '6a² - 4a + 2a² + a', answer: '8a² - 3a' },
  ];

  for (const template of level2Templates) {
    questions.push({
      id: `A3_${id++}`,
      category: 'A3',
      level: 2,
      text: {
        fr: `Réduis : ${template.expr}`,
        en: `Simplify: ${template.expr}`,
        nl: `Vereenvoudig: ${template.expr}`
      },
      answer: template.answer,
      tolerance: 0.01,
      hint: {
        fr: 'Multiplie d\'abord, puis regroupe les termes semblables.',
        en: 'Multiply first, then combine like terms.',
        nl: 'Vermenigvuldig eerst, dan groepeer gelijksoortige termen.'
      }
    });
  }

  // Niveau 3 (15 questions) - Complexe avec distribution
  const level3Templates = [
    { expr: '2(3a + 4) - 5a', answer: 'a + 8' },
    { expr: '3(2x - 1) + 4x', answer: '10x - 3' },
    { expr: '4(a + 2) - 2(a - 1)', answer: '2a + 10' },
    { expr: '5(x - 3) - 3(x + 2)', answer: '2x - 21' },
    { expr: '2a(3 + a) - 4a', answer: '2a² + 2a' },
    { expr: '3x(2 - x) + 5x', answer: '-3x² + 11x' },
    { expr: '2(3a + b) + 4(a - b)', answer: '10a - 2b' },
    { expr: '5(x + 2y) - 3(x - y)', answer: '2x + 13y' },
    { expr: '3a² + 2a(a + 3) - a²', answer: '4a² + 6a' },
    { expr: '4x² - x(2x - 5) + 3x', answer: '2x² + 8x' },
    { expr: '2(a² + 3a) - 3(a² - a)', answer: '-a² + 9a' },
    { expr: '5(x² - 2x) - 2(x² + 3x)', answer: '3x² - 16x' },
    { expr: '3ab + 2a(b - a) - ab', answer: '2ab - 2a²' },
    { expr: '4xy - x(2y + x) + 3x²', answer: '2xy + 2x²' },
    { expr: '2(a² + ab) - 3(ab - b²) + 4a²', answer: '6a² - ab + 3b²' },
  ];

  for (const template of level3Templates) {
    questions.push({
      id: `A3_${id++}`,
      category: 'A3',
      level: 3,
      text: {
        fr: `Développe et réduis : ${template.expr}`,
        en: `Expand and simplify: ${template.expr}`,
        nl: `Ontwikkel en vereenvoudig: ${template.expr}`
      },
      answer: template.answer,
      tolerance: 0.01,
      hint: {
        fr: 'Développe d\'abord les parenthèses, puis regroupe les termes semblables.',
        en: 'Expand the parentheses first, then combine like terms.',
        nl: 'Ontwikkel eerst de haakjes, dan groepeer gelijksoortige termen.'
      }
    });
  }

  return questions;
}

/**
 * Génère des variantes de questions pour A5 - Équations
 */
function generateA5Questions() {
  const questions = [];
  let id = 1;

  // Niveau 1 (10 questions) - Équations simples
  const level1Templates = [
    { expr: 'a + 5 = 12', answer: '7' },
    { expr: 'x - 3 = 8', answer: '11' },
    { expr: '2a = 14', answer: '7' },
    { expr: '3x = 21', answer: '7' },
    { expr: 'a + 7 = 15', answer: '8' },
    { expr: 'x - 6 = 10', answer: '16' },
    { expr: '4a = 20', answer: '5' },
    { expr: '5x = 30', answer: '6' },
    { expr: 'a/2 = 4', answer: '8' },
    { expr: 'x/3 = 5', answer: '15' },
  ];

  for (const template of level1Templates) {
    questions.push({
      id: `A5_${id++}`,
      category: 'A5',
      level: 1,
      text: {
        fr: `Résous : ${template.expr}`,
        en: `Solve: ${template.expr}`,
        nl: `Los op: ${template.expr}`
      },
      answer: template.answer,
      tolerance: 0.01,
      hint: {
        fr: 'Isole la variable en effectuant l\'opération inverse.',
        en: 'Isolate the variable by performing the inverse operation.',
        nl: 'Isoleer de variabele door de inverse bewerking uit te voeren.'
      }
    });
  }

  // Niveau 2 (15 questions) - Équations avec 2 opérations
  const level2Templates = [
    { expr: '2a + 3 = 11', answer: '4' },
    { expr: '3x - 5 = 10', answer: '5' },
    { expr: '4a + 7 = 23', answer: '4' },
    { expr: '5x - 8 = 17', answer: '5' },
    { expr: '2a - 1 = 9', answer: '5' },
    { expr: '3x + 4 = 19', answer: '5' },
    { expr: '6a - 5 = 13', answer: '3' },
    { expr: '4x + 6 = 22', answer: '4' },
    { expr: '(a + 3)/2 = 5', answer: '7' },
    { expr: '(x - 4)/3 = 2', answer: '10' },
    { expr: '(2a + 1)/3 = 3', answer: '4' },
    { expr: '(3x - 2)/4 = 2', answer: '3' },
    { expr: '2(a + 3) = 14', answer: '4' },
    { expr: '3(x - 2) = 15', answer: '7' },
    { expr: '4(a + 1) = 20', answer: '4' },
  ];

  for (const template of level2Templates) {
    questions.push({
      id: `A5_${id++}`,
      category: 'A5',
      level: 2,
      text: {
        fr: `Résous : ${template.expr}`,
        en: `Solve: ${template.expr}`,
        nl: `Los op: ${template.expr}`
      },
      answer: template.answer,
      tolerance: 0.01,
      hint: {
        fr: 'Simplifie d\'abord, puis isole la variable.',
        en: 'Simplify first, then isolate the variable.',
        nl: 'Vereenvoudig eerst, dan isoleer de variabele.'
      }
    });
  }

  // Niveau 3 (15 questions) - Équations complexes
  const level3Templates = [
    { expr: '3a + 5 = 2a + 12', answer: '7' },
    { expr: '4x - 7 = 2x + 9', answer: '8' },
    { expr: '5a - 3 = 3a + 11', answer: '7' },
    { expr: '6x + 4 = 4x + 18', answer: '7' },
    { expr: '2(a + 3) = 3a - 4', answer: '10' },
    { expr: '3(x - 2) = 2x + 5', answer: '11' },
    { expr: '4(a + 1) = 3(a + 4)', answer: '8' },
    { expr: '5(x - 1) = 3(x + 3)', answer: '7' },
    { expr: '2a + 3(a - 1) = 17', answer: '4' },
    { expr: '3x - 2(x + 4) = 6', answer: '14' },
    { expr: '4a - (2a + 5) = 9', answer: '7' },
    { expr: '5x - (3x - 6) = 20', answer: '7' },
    { expr: '2(3a - 4) = 3(a + 2)', answer: '4' },
    { expr: '3(2x + 1) = 4(x - 2)', answer: '-5' },
    { expr: '5(a - 2) - 2(a + 3) = 4', answer: '6' },
  ];

  for (const template of level3Templates) {
    questions.push({
      id: `A5_${id++}`,
      category: 'A5',
      level: 3,
      text: {
        fr: `Résous : ${template.expr}`,
        en: `Solve: ${template.expr}`,
        nl: `Los op: ${template.expr}`
      },
      answer: template.answer,
      tolerance: 0.01,
      hint: {
        fr: 'Développe, regroupe les termes en a d\'un côté et les constantes de l\'autre.',
        en: 'Expand, group terms with the variable on one side and constants on the other.',
        nl: 'Ontwikkel, groepeer termen met de variabele aan één kant en constanten aan de andere kant.'
      }
    });
  }

  return questions;
}

/**
 * Main function
 */
async function main() {
  console.log('\n🚀 Génération de questions supplémentaires...\n');

  const categories = [
    { code: 'A1', name: 'Distributivité simple', generator: generateA1Questions },
    { code: 'A2', name: 'Double distributivité', generator: generateA2Questions },
    { code: 'A3', name: 'Calcul littéral', generator: generateA3Questions },
    { code: 'A5', name: 'Équations du 1er degré', generator: generateA5Questions },
  ];

  for (const category of categories) {
    console.log(`📝 Génération pour ${category.code} - ${category.name}`);
    const questions = category.generator();

    console.log(`   ✨ ${questions.length} questions générées`);
    console.log(`   Niveau 1: ${questions.filter(q => q.level === 1).length} questions`);
    console.log(`   Niveau 2: ${questions.filter(q => q.level === 2).length} questions`);
    console.log(`   Niveau 3: ${questions.filter(q => q.level === 3).length} questions`);

    // Sauvegarder le fichier
    const filePath = path.join(OUTPUT_DIR, `questions-${category.code}.js`);
    const fileContent = `// =============================================================================
// ${category.code} - ${category.name}
// CE1D Belgian exam - Trilingual (FR / EN / NL)
// Generated questions with restricted letters: ${ALLOWED_LETTERS.join(', ')}
// =============================================================================

export const questions = ${JSON.stringify(questions, null, 2)};
`;

    await fs.writeFile(filePath, fileContent, 'utf-8');
    console.log(`   💾 Sauvegardé: ${filePath}\n`);
  }

  console.log('✅ Génération terminée!\n');
}

main().catch(error => {
  console.error('❌ Erreur:', error);
  process.exit(1);
});
