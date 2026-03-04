import Anthropic from '@anthropic-ai/sdk';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
const EXTRACTED_DIR = path.join(__dirname, '..', 'extracted');
const OUTPUT_DIR = path.join(__dirname, '..', 'src', 'data');

// IMPORTANT: Lettres autorisées dans le Numpad
const ALLOWED_LETTERS = ['a', 'b', 'c', 'd', 'x', 'y'];
const ALLOWED_LETTERS_STRING = ALLOWED_LETTERS.join(', ');

// Fichiers source et leur mapping vers les fichiers de questions
const FILE_MAPPINGS = [
  {
    sourceFile: 'Chapitre_Complet_Puissances_CE1D_Tous_Exercices.txt',
    targetFile: 'questions-P1.js',
    category: 'P1',
    topic: 'Puissances',
    subcategory: 'Powers'
  },
  {
    sourceFile: 'Distributivite_Simple_CE1D.txt',
    targetFile: 'questions-A1.js',
    category: 'A1',
    topic: 'Distributivité simple',
    subcategory: 'Simple Distributivity'
  },
  {
    sourceFile: 'Variantes_Double_Distributivite_CE1D.txt',
    targetFile: 'questions-A2.js',
    category: 'A2',
    topic: 'Double distributivité',
    subcategory: 'Double Distributivity'
  },
  {
    sourceFile: 'Variantes_Calcul_Litteral_Complet_CE1D.txt',
    targetFile: 'questions-A3.js',
    category: 'A3',
    topic: 'Calcul littéral',
    subcategory: 'Literal Calculation'
  }
];

const client = new Anthropic({
  apiKey: ANTHROPIC_API_KEY,
});

async function generateQuestionsWithAI(exercises, category, topic, subcategory) {
  const prompt = `Tu es un expert en mathématiques pour le CE1D belge (2e secondaire).

CONTRAINTE ABSOLUE : Tu dois UNIQUEMENT utiliser les lettres suivantes dans tes questions : ${ALLOWED_LETTERS_STRING}
N'utilise JAMAIS d'autres lettres comme m, n, p, q, r, s, t, k, z, etc.

Voici des exercices de ${topic} :

${exercises}

Ta mission :
1. Analyser ces exercices et leurs corrigés
2. Générer 30 nouvelles questions de type similaire
3. **OBLIGATION** : Remplacer toutes les lettres par uniquement : ${ALLOWED_LETTERS_STRING}
4. Répartir les questions en 3 niveaux de difficulté (10 par niveau)
5. Fournir la réponse correcte pour chaque question
6. Format JSON strict suivant cet exemple :

{
  "questions": [
    {
      "id": "${category}_1",
      "category": "${category}",
      "level": 1,
      "text": {
        "fr": "Développe : x(a + b)",
        "en": "Expand: x(a + b)",
        "nl": "Ontwikkel: x(a + b)"
      },
      "answer": "xa + xb",
      "hint": {
        "fr": "Multiplie chaque terme entre parenthèses par x",
        "en": "Multiply each term in parentheses by x",
        "nl": "Vermenigvuldig elke term tussen haakjes met x"
      }
    }
  ]
}

RÈGLES STRICTES :
- Utilise UNIQUEMENT les lettres : ${ALLOWED_LETTERS_STRING}
- Si un exercice source utilise d'autres lettres (m, n, p, etc.), remplace-les par les lettres autorisées
- Les réponses peuvent être des expressions algébriques (ex: "2a + 3b") ou des nombres
- Niveau 1 : Simple et direct
- Niveau 2 : Complexité moyenne
- Niveau 3 : Plus difficile, peut nécessiter plusieurs étapes
- Assure-toi que toutes les réponses sont correctes mathématiquement
- Garde le format CE1D (concis, clair, progressif)

Génère maintenant 30 questions en respectant ABSOLUMENT la contrainte des lettres autorisées.`;

  try {
    console.log(`\n🤖 Génération de questions pour ${topic}...`);

    const message = await client.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 8000,
      temperature: 0.7,
      messages: [
        {
          role: 'user',
          content: prompt
        }
      ]
    });

    const responseText = message.content[0].text;

    // Extraire le JSON de la réponse
    const jsonMatch = responseText.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error('Pas de JSON trouvé dans la réponse');
    }

    const questionsData = JSON.parse(jsonMatch[0]);

    // Vérifier que les questions n'utilisent que les lettres autorisées
    const invalidQuestions = questionsData.questions.filter(q => {
      const allText = JSON.stringify(q);
      const forbiddenLetters = ['m', 'n', 'p', 'q', 'r', 's', 't', 'k', 'z'];
      return forbiddenLetters.some(letter => {
        const regex = new RegExp(`[^a-z]${letter}[^a-z]|^${letter}[^a-z]|[^a-z]${letter}$`, 'i');
        return regex.test(allText);
      });
    });

    if (invalidQuestions.length > 0) {
      console.log(`⚠️  ATTENTION : ${invalidQuestions.length} questions utilisent des lettres interdites`);
      console.log('Questions problématiques:', invalidQuestions.map(q => q.id));
    }

    console.log(`✅ ${questionsData.questions.length} questions générées`);
    return questionsData.questions;

  } catch (error) {
    console.error(`❌ Erreur lors de la génération:`, error.message);
    return null;
  }
}

async function processFile(mapping) {
  console.log(`\n${'='.repeat(70)}`);
  console.log(`📝 Traitement: ${mapping.topic}`);
  console.log(`   Source: ${mapping.sourceFile}`);
  console.log(`   Target: ${mapping.targetFile}`);
  console.log(`${'='.repeat(70)}`);

  // Lire le fichier d'exercices extrait
  const sourcePath = path.join(EXTRACTED_DIR, mapping.sourceFile);
  const exercises = await fs.readFile(sourcePath, 'utf-8');

  // Générer les questions avec l'IA
  const questions = await generateQuestionsWithAI(
    exercises,
    mapping.category,
    mapping.topic,
    mapping.subcategory
  );

  if (!questions || questions.length === 0) {
    console.log(`⚠️  Aucune question générée pour ${mapping.topic}`);
    return null;
  }

  // Sauvegarder dans un fichier temporaire pour review
  const tempOutputPath = path.join(EXTRACTED_DIR, `generated_${mapping.targetFile}`);
  const fileContent = `// =============================================================================
// ${mapping.category} - ${mapping.topic}
// CE1D Belgian exam - Trilingual (FR / EN / NL)
// Generated from: ${mapping.sourceFile}
// IMPORTANT: Uses ONLY letters: ${ALLOWED_LETTERS_STRING}
// =============================================================================

export const questions = ${JSON.stringify(questions, null, 2)};
`;

  await fs.writeFile(tempOutputPath, fileContent, 'utf-8');
  console.log(`💾 Questions sauvegardées dans: ${tempOutputPath}`);

  return {
    mapping,
    questions,
    outputPath: tempOutputPath
  };
}

async function main() {
  if (!ANTHROPIC_API_KEY) {
    console.error('❌ ANTHROPIC_API_KEY non définie dans les variables d\'environnement');
    console.log('\n💡 Définissez la clé API:');
    console.log('   export ANTHROPIC_API_KEY="votre-clé-ici"');
    process.exit(1);
  }

  console.log(`\n🚀 Génération de questions avec contrainte de lettres: ${ALLOWED_LETTERS_STRING}`);
  console.log(`📁 Dossier source: ${EXTRACTED_DIR}`);
  console.log(`📁 Dossier cible: ${OUTPUT_DIR}`);

  const results = [];

  // Traiter chaque fichier séquentiellement pour ne pas surcharger l'API
  for (const mapping of FILE_MAPPINGS) {
    const result = await processFile(mapping);
    if (result) {
      results.push(result);
    }

    // Pause de 2 secondes entre chaque appel API
    if (mapping !== FILE_MAPPINGS[FILE_MAPPINGS.length - 1]) {
      console.log('\n⏳ Pause de 2 secondes...');
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  }

  // Résumé final
  console.log(`\n\n${'='.repeat(70)}`);
  console.log(`📊 RÉSUMÉ FINAL`);
  console.log(`${'='.repeat(70)}`);
  console.log(`✅ Fichiers traités: ${results.length}/${FILE_MAPPINGS.length}`);
  console.log(`✅ Total de questions générées: ${results.reduce((sum, r) => sum + r.questions.length, 0)}`);
  console.log(`\n📝 Fichiers générés:`);
  results.forEach(r => {
    console.log(`   - ${r.outputPath}`);
  });
  console.log(`\n⚠️  IMPORTANT: Vérifiez que toutes les questions utilisent uniquement: ${ALLOWED_LETTERS_STRING}`);
  console.log(`\n💡 Prochaines étapes:`);
  console.log(`   1. Vérifier les fichiers générés dans ${EXTRACTED_DIR}`);
  console.log(`   2. Si OK, copier vers ${OUTPUT_DIR}`);
  console.log(`   3. Tester dans l'application`);
}

main()
  .then(() => {
    console.log('\n✅ Génération terminée avec succès!');
  })
  .catch(error => {
    console.error('\n❌ Erreur:', error);
    process.exit(1);
  });
