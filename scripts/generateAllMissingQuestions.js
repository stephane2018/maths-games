import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OUTPUT_DIR = path.join(__dirname, '..', 'src', 'data');
const ALLOWED_LETTERS = ['a', 'b', 'c', 'd', 'x', 'y'];

/**
 * A4 - PPCM et PGCD (basé sur Variantes_PGCD_PPCM_Multiples_CE1D.docx)
 */
function generateA4Questions() {
  const questions = [];
  let id = 1;

  // Niveau 1 - PGCD simple (10 questions)
  const level1Templates = [
    { expr: 'PGCD(12, 18)', answer: '6' },
    { expr: 'PGCD(15, 25)', answer: '5' },
    { expr: 'PGCD(18, 24)', answer: '6' },
    { expr: 'PGCD(20, 30)', answer: '10' },
    { expr: 'PGCD(14, 21)', answer: '7' },
    { expr: 'PGCD(16, 24)', answer: '8' },
    { expr: 'PGCD(10, 15)', answer: '5' },
    { expr: 'PGCD(12, 16)', answer: '4' },
    { expr: 'PGCD(21, 28)', answer: '7' },
    { expr: 'PGCD(18, 27)', answer: '9' },
  ];

  for (const template of level1Templates) {
    questions.push({
      id: `A4_${id++}`,
      category: 'A4',
      level: 1,
      text: {
        fr: `Calcule le ${template.expr}`,
        en: `Calculate ${template.expr.replace('PGCD', 'GCD')}`,
        nl: `Bereken ${template.expr.replace('PGCD', 'GGD')}`
      },
      answer: template.answer,
      tolerance: 0,
      hint: {
        fr: 'Le PGCD est le plus grand diviseur commun aux deux nombres.',
        en: 'The GCD is the greatest common divisor of the two numbers.',
        nl: 'De GGD is de grootste gemene deler van de twee getallen.'
      }
    });
  }

  // Niveau 2 - PPCM (15 questions)
  const level2Templates = [
    { expr: 'PPCM(4, 6)', answer: '12' },
    { expr: 'PPCM(6, 8)', answer: '24' },
    { expr: 'PPCM(5, 10)', answer: '10' },
    { expr: 'PPCM(3, 9)', answer: '9' },
    { expr: 'PPCM(4, 10)', answer: '20' },
    { expr: 'PPCM(6, 9)', answer: '18' },
    { expr: 'PPCM(8, 12)', answer: '24' },
    { expr: 'PPCM(5, 15)', answer: '15' },
    { expr: 'PPCM(6, 10)', answer: '30' },
    { expr: 'PPCM(9, 12)', answer: '36' },
    { expr: 'PPCM(4, 14)', answer: '28' },
    { expr: 'PPCM(10, 15)', answer: '30' },
    { expr: 'PPCM(8, 20)', answer: '40' },
    { expr: 'PPCM(12, 18)', answer: '36' },
    { expr: 'PPCM(15, 20)', answer: '60' },
  ];

  for (const template of level2Templates) {
    questions.push({
      id: `A4_${id++}`,
      category: 'A4',
      level: 2,
      text: {
        fr: `Calcule le ${template.expr}`,
        en: `Calculate ${template.expr.replace('PPCM', 'LCM')}`,
        nl: `Bereken ${template.expr.replace('PPCM', 'KGV')}`
      },
      answer: template.answer,
      tolerance: 0,
      hint: {
        fr: 'Le PPCM est le plus petit multiple commun aux deux nombres.',
        en: 'The LCM is the least common multiple of the two numbers.',
        nl: 'Het KGV is het kleinste gemene veelvoud van de twee getallen.'
      }
    });
  }

  // Niveau 3 - PGCD et PPCM combinés (15 questions)
  const level3Templates = [
    { expr: 'PGCD(24, 36)', answer: '12' },
    { expr: 'PPCM(12, 16)', answer: '48' },
    { expr: 'PGCD(45, 60)', answer: '15' },
    { expr: 'PPCM(18, 24)', answer: '72' },
    { expr: 'PGCD(36, 48)', answer: '12' },
    { expr: 'PPCM(15, 25)', answer: '75' },
    { expr: 'PGCD(50, 75)', answer: '25' },
    { expr: 'PPCM(20, 30)', answer: '60' },
    { expr: 'PGCD(42, 56)', answer: '14' },
    { expr: 'PPCM(16, 24)', answer: '48' },
    { expr: 'PGCD(63, 81)', answer: '9' },
    { expr: 'PPCM(14, 21)', answer: '42' },
    { expr: 'PGCD(72, 90)', answer: '18' },
    { expr: 'PPCM(25, 35)', answer: '175' },
    { expr: 'PGCD(84, 108)', answer: '12' },
  ];

  for (const template of level3Templates) {
    questions.push({
      id: `A4_${id++}`,
      category: 'A4',
      level: 3,
      text: {
        fr: `Calcule le ${template.expr}`,
        en: `Calculate ${template.expr.replace('PGCD', 'GCD').replace('PPCM', 'LCM')}`,
        nl: `Bereken ${template.expr.replace('PGCD', 'GGD').replace('PPCM', 'KGV')}`
      },
      answer: template.answer,
      tolerance: 0,
      hint: {
        fr: 'Décompose en facteurs premiers ou utilise la méthode d\'Euclide.',
        en: 'Decompose into prime factors or use Euclid\'s method.',
        nl: 'Ontbind in priemfactoren of gebruik de methode van Euclides.'
      }
    });
  }

  return questions;
}

/**
 * A8 - Produits remarquables (basé sur Variantes_Produits_Remarquables_CE1D.docx)
 */
function generateA8Questions() {
  const questions = [];
  let id = 1;

  // Niveau 1 - Carrés simples (10 questions)
  const level1Templates = [
    { expr: '(a + b)²', answer: 'a² + 2ab + b²' },
    { expr: '(x + y)²', answer: 'x² + 2xy + y²' },
    { expr: '(a - b)²', answer: 'a² - 2ab + b²' },
    { expr: '(x - y)²', answer: 'x² - 2xy + y²' },
    { expr: '(a + c)²', answer: 'a² + 2ac + c²' },
    { expr: '(x - d)²', answer: 'x² - 2xd + d²' },
    { expr: '(b + d)²', answer: 'b² + 2bd + d²' },
    { expr: '(y - a)²', answer: 'y² - 2ya + a²' },
    { expr: '(c + d)²', answer: 'c² + 2cd + d²' },
    { expr: '(x - a)²', answer: 'x² - 2xa + a²' },
  ];

  for (const template of level1Templates) {
    questions.push({
      id: `A8_${id++}`,
      category: 'A8',
      level: 1,
      text: {
        fr: `Développe : ${template.expr}`,
        en: `Expand: ${template.expr}`,
        nl: `Ontwikkel: ${template.expr}`
      },
      answer: template.answer,
      tolerance: 0.01,
      hint: {
        fr: 'Utilise la formule (a±b)² = a² ± 2ab + b²',
        en: 'Use the formula (a±b)² = a² ± 2ab + b²',
        nl: 'Gebruik de formule (a±b)² = a² ± 2ab + b²'
      }
    });
  }

  // Niveau 2 - Carrés avec coefficients (15 questions)
  const level2Templates = [
    { expr: '(2a + b)²', answer: '4a² + 4ab + b²' },
    { expr: '(x + 3y)²', answer: 'x² + 6xy + 9y²' },
    { expr: '(3a - 2b)²', answer: '9a² - 12ab + 4b²' },
    { expr: '(2x - y)²', answer: '4x² - 4xy + y²' },
    { expr: '(a + 4b)²', answer: 'a² + 8ab + 16b²' },
    { expr: '(5x - 2y)²', answer: '25x² - 20xy + 4y²' },
    { expr: '(3a + 4c)²', answer: '9a² + 24ac + 16c²' },
    { expr: '(2x - 3d)²', answer: '4x² - 12xd + 9d²' },
    { expr: '(4a + b)²', answer: '16a² + 8ab + b²' },
    { expr: '(x + 5y)²', answer: 'x² + 10xy + 25y²' },
    { expr: '(6a - b)²', answer: '36a² - 12ab + b²' },
    { expr: '(3x + 2y)²', answer: '9x² + 12xy + 4y²' },
    { expr: '(4a - 3b)²', answer: '16a² - 24ab + 9b²' },
    { expr: '(2x + 5y)²', answer: '4x² + 20xy + 25y²' },
    { expr: '(5a - 4b)²', answer: '25a² - 40ab + 16b²' },
  ];

  for (const template of level2Templates) {
    questions.push({
      id: `A8_${id++}`,
      category: 'A8',
      level: 2,
      text: {
        fr: `Développe : ${template.expr}`,
        en: `Expand: ${template.expr}`,
        nl: `Ontwikkel: ${template.expr}`
      },
      answer: template.answer,
      tolerance: 0.01,
      hint: {
        fr: 'Utilise la formule (a±b)² = a² ± 2ab + b²',
        en: 'Use the formula (a±b)² = a² ± 2ab + b²',
        nl: 'Gebruik de formule (a±b)² = a² ± 2ab + b²'
      }
    });
  }

  // Niveau 3 - Différences de carrés (15 questions)
  const level3Templates = [
    { expr: '(a + b)(a - b)', answer: 'a² - b²' },
    { expr: '(x + y)(x - y)', answer: 'x² - y²' },
    { expr: '(2a + 3b)(2a - 3b)', answer: '4a² - 9b²' },
    { expr: '(5x + 2y)(5x - 2y)', answer: '25x² - 4y²' },
    { expr: '(3a + 4c)(3a - 4c)', answer: '9a² - 16c²' },
    { expr: '(4x + d)(4x - d)', answer: '16x² - d²' },
    { expr: '(6a + b)(6a - b)', answer: '36a² - b²' },
    { expr: '(7x + 2y)(7x - 2y)', answer: '49x² - 4y²' },
    { expr: '(a + 5b)(a - 5b)', answer: 'a² - 25b²' },
    { expr: '(3x + y)(3x - y)', answer: '9x² - y²' },
    { expr: '(2a + 5c)(2a - 5c)', answer: '4a² - 25c²' },
    { expr: '(4x + 3y)(4x - 3y)', answer: '16x² - 9y²' },
    { expr: '(5a + 6b)(5a - 6b)', answer: '25a² - 36b²' },
    { expr: '(8x + y)(8x - y)', answer: '64x² - y²' },
    { expr: '(3a + 7b)(3a - 7b)', answer: '9a² - 49b²' },
  ];

  for (const template of level3Templates) {
    questions.push({
      id: `A8_${id++}`,
      category: 'A8',
      level: 3,
      text: {
        fr: `Développe : ${template.expr}`,
        en: `Expand: ${template.expr}`,
        nl: `Ontwikkel: ${template.expr}`
      },
      answer: template.answer,
      tolerance: 0.01,
      hint: {
        fr: 'Utilise la formule (a+b)(a-b) = a² - b²',
        en: 'Use the formula (a+b)(a-b) = a² - b²',
        nl: 'Gebruik de formule (a+b)(a-b) = a² - b²'
      }
    });
  }

  return questions;
}

/**
 * A9 - Fractions (basé sur Dossier_Fractions_Encadrements_Variantes.docx)
 */
function generateA9Questions() {
  const questions = [];
  let id = 1;

  // Niveau 1 - Simplification simple (10 questions)
  const level1Templates = [
    { expr: '6/12', answer: '1/2', display: '1/2' },
    { expr: '8/12', answer: '2/3', display: '2/3' },
    { expr: '9/15', answer: '3/5', display: '3/5' },
    { expr: '10/15', answer: '2/3', display: '2/3' },
    { expr: '12/18', answer: '2/3', display: '2/3' },
    { expr: '14/21', answer: '2/3', display: '2/3' },
    { expr: '15/25', answer: '3/5', display: '3/5' },
    { expr: '16/24', answer: '2/3', display: '2/3' },
    { expr: '18/27', answer: '2/3', display: '2/3' },
    { expr: '20/30', answer: '2/3', display: '2/3' },
  ];

  for (const template of level1Templates) {
    questions.push({
      id: `A9_${id++}`,
      category: 'A9',
      level: 1,
      text: {
        fr: `Simplifie : ${template.expr}`,
        en: `Simplify: ${template.expr}`,
        nl: `Vereenvoudig: ${template.expr}`
      },
      answer: template.display,
      tolerance: 0.01,
      hint: {
        fr: 'Divise le numérateur et le dénominateur par leur PGCD.',
        en: 'Divide the numerator and denominator by their GCD.',
        nl: 'Deel de teller en noemer door hun GGD.'
      }
    });
  }

  // Niveau 2 - Addition/Soustraction (15 questions)
  const level2Templates = [
    { expr: '1/2 + 1/3', answer: '5/6', display: '5/6' },
    { expr: '2/3 + 1/4', answer: '11/12', display: '11/12' },
    { expr: '1/2 - 1/4', answer: '1/4', display: '1/4' },
    { expr: '3/4 - 1/3', answer: '5/12', display: '5/12' },
    { expr: '1/3 + 1/6', answer: '1/2', display: '1/2' },
    { expr: '2/5 + 1/10', answer: '1/2', display: '1/2' },
    { expr: '3/4 + 1/8', answer: '7/8', display: '7/8' },
    { expr: '5/6 - 1/3', answer: '1/2', display: '1/2' },
    { expr: '1/4 + 2/3', answer: '11/12', display: '11/12' },
    { expr: '7/8 - 1/2', answer: '3/8', display: '3/8' },
    { expr: '1/5 + 2/5', answer: '3/5', display: '3/5' },
    { expr: '3/8 + 1/4', answer: '5/8', display: '5/8' },
    { expr: '2/3 - 1/6', answer: '1/2', display: '1/2' },
    { expr: '5/12 + 1/3', answer: '3/4', display: '3/4' },
    { expr: '7/10 - 1/5', answer: '1/2', display: '1/2' },
  ];

  for (const template of level2Templates) {
    questions.push({
      id: `A9_${id++}`,
      category: 'A9',
      level: 2,
      text: {
        fr: `Calcule : ${template.expr}`,
        en: `Calculate: ${template.expr}`,
        nl: `Bereken: ${template.expr}`
      },
      answer: template.display,
      tolerance: 0.01,
      hint: {
        fr: 'Trouve un dénominateur commun, puis additionne/soustrais les numérateurs.',
        en: 'Find a common denominator, then add/subtract the numerators.',
        nl: 'Vind een gemene noemer, tel dan de tellers op/trek ze af.'
      }
    });
  }

  // Niveau 3 - Multiplication/Division (15 questions)
  const level3Templates = [
    { expr: '2/3 × 3/4', answer: '1/2', display: '1/2' },
    { expr: '3/5 × 5/6', answer: '1/2', display: '1/2' },
    { expr: '1/2 ÷ 1/4', answer: '2', display: '2' },
    { expr: '2/3 ÷ 4/9', answer: '3/2', display: '3/2' },
    { expr: '4/5 × 2/3', answer: '8/15', display: '8/15' },
    { expr: '3/4 ÷ 3/8', answer: '2', display: '2' },
    { expr: '5/6 × 2/5', answer: '1/3', display: '1/3' },
    { expr: '3/8 ÷ 1/4', answer: '3/2', display: '3/2' },
    { expr: '2/5 × 5/8', answer: '1/4', display: '1/4' },
    { expr: '5/6 ÷ 2/3', answer: '5/4', display: '5/4' },
    { expr: '3/7 × 7/9', answer: '1/3', display: '1/3' },
    { expr: '4/9 ÷ 2/3', answer: '2/3', display: '2/3' },
    { expr: '5/8 × 4/5', answer: '1/2', display: '1/2' },
    { expr: '7/10 ÷ 7/5', answer: '1/2', display: '1/2' },
    { expr: '6/7 × 7/12', answer: '1/2', display: '1/2' },
  ];

  for (const template of level3Templates) {
    questions.push({
      id: `A9_${id++}`,
      category: 'A9',
      level: 3,
      text: {
        fr: `Calcule : ${template.expr}`,
        en: `Calculate: ${template.expr}`,
        nl: `Bereken: ${template.expr}`
      },
      answer: template.display,
      tolerance: 0.01,
      hint: {
        fr: 'Pour multiplier : multiplie les numérateurs et les dénominateurs. Pour diviser : multiplie par l\'inverse.',
        en: 'To multiply: multiply numerators and denominators. To divide: multiply by the reciprocal.',
        nl: 'Om te vermenigvuldigen: vermenigvuldig tellers en noemers. Om te delen: vermenigvuldig met het omgekeerde.'
      }
    });
  }

  return questions;
}

/**
 * Main function
 */
async function main() {
  console.log('\n🚀 Génération des questions manquantes...\n');

  const categories = [
    { code: 'A4', name: 'PPCM et PGCD', generator: generateA4Questions },
    { code: 'A8', name: 'Produits remarquables', generator: generateA8Questions },
    { code: 'A9', name: 'Fractions', generator: generateA9Questions },
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
// Generated questions
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
