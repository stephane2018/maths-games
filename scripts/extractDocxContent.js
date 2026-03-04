import mammoth from 'mammoth';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const WORD_DIR = path.join(__dirname, '..', 'public', 'word');
const OUTPUT_DIR = path.join(__dirname, '..', 'extracted');

// Fichiers à traiter avec leurs catégories
const FILES_TO_PROCESS = [
  {
    filename: 'Chapitre_Complet_Puissances_CE1D_Tous_Exercices.docx',
    category: 'P1',
    topic: 'Puissances'
  },
  {
    filename: 'Chapitre_PEMDAS_Exposants_Format_Carre_CE1D.docx',
    category: 'P1',
    topic: 'PEMDAS avec exposants'
  },
  {
    filename: 'Distributivite_Simple_CE1D.docx',
    category: 'A1',
    topic: 'Distributivité simple'
  },
  {
    filename: 'Variantes_Double_Distributivite_CE1D.docx',
    category: 'A2',
    topic: 'Double distributivité'
  },
  {
    filename: 'Variantes_Calcul_Litteral_Complet_CE1D.docx',
    category: 'A3',
    topic: 'Calcul littéral'
  },
  {
    filename: 'Variantes_Produits_Remarquables_CE1D.docx',
    category: 'A4',
    topic: 'Produits remarquables'
  },
  {
    filename: 'Jeu_Duel_Equations_1er_degre.docx',
    category: 'A5',
    topic: 'Équations du 1er degré'
  }
];

async function extractDocxContent(filePath) {
  try {
    const buffer = await fs.readFile(filePath);
    const result = await mammoth.extractRawText({ buffer });
    return result.value;
  } catch (error) {
    console.error(`Erreur lors de la lecture de ${filePath}:`, error.message);
    return null;
  }
}

async function processAllDocuments() {
  // Créer le dossier de sortie s'il n'existe pas
  try {
    await fs.mkdir(OUTPUT_DIR, { recursive: true });
  } catch (error) {
    console.error('Erreur création dossier:', error);
  }

  const results = [];

  for (const fileInfo of FILES_TO_PROCESS) {
    const filePath = path.join(WORD_DIR, fileInfo.filename);

    console.log(`\n📄 Traitement de: ${fileInfo.filename}`);
    console.log(`   Catégorie: ${fileInfo.category} - ${fileInfo.topic}`);

    const content = await extractDocxContent(filePath);

    if (content) {
      // Sauvegarder le contenu extrait
      const outputFileName = fileInfo.filename.replace('.docx', '.txt');
      const outputPath = path.join(OUTPUT_DIR, outputFileName);

      await fs.writeFile(outputPath, content, 'utf-8');

      console.log(`   ✅ Contenu extrait: ${content.length} caractères`);
      console.log(`   💾 Sauvegardé dans: ${outputFileName}`);

      // Analyser le contenu pour trouver les exercices et corrigés
      const exercises = extractExercises(content);

      results.push({
        ...fileInfo,
        content,
        outputPath,
        exerciseCount: exercises.length,
        exercises
      });
    } else {
      console.log(`   ❌ Échec de l'extraction`);
    }
  }

  // Sauvegarder un résumé JSON
  const summaryPath = path.join(OUTPUT_DIR, 'summary.json');
  await fs.writeFile(
    summaryPath,
    JSON.stringify(results, null, 2),
    'utf-8'
  );

  console.log(`\n\n📊 RÉSUMÉ`);
  console.log(`   Total de fichiers traités: ${results.length}`);
  console.log(`   Total d'exercices trouvés: ${results.reduce((sum, r) => sum + r.exerciseCount, 0)}`);
  console.log(`   Résumé sauvegardé dans: summary.json`);

  return results;
}

function extractExercises(content) {
  const exercises = [];

  // Patterns pour détecter les exercices
  const patterns = [
    // Exercice numéroté
    /(?:Exercice|Exercise|Oefening)\s*(\d+)\s*[:.]?\s*([\s\S]*?)(?=(?:Exercice|Exercise|Oefening)\s*\d+|Corrigé|Solution|Oplossing|$)/gi,
    // Question numérotée
    /(?:Question|Vraag)\s*(\d+)\s*[:.]?\s*([\s\S]*?)(?=(?:Question|Vraag)\s*\d+|Réponse|Answer|Antwoord|$)/gi,
    // Numéro simple avec point ou parenthèse
    /^(\d+)[.)]\s+(.*?)$/gm
  ];

  for (const pattern of patterns) {
    let match;
    while ((match = pattern.exec(content)) !== null) {
      if (match[2] && match[2].trim().length > 10) {
        exercises.push({
          number: match[1],
          text: match[2].trim()
        });
      }
    }
  }

  return exercises;
}

// Exécuter le script
processAllDocuments()
  .then(() => {
    console.log('\n✅ Extraction terminée avec succès!');
  })
  .catch(error => {
    console.error('\n❌ Erreur:', error);
    process.exit(1);
  });
