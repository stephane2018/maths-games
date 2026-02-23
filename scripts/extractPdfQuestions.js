// =============================================================================
// PDF Question Extractor - Scan CE1D PDFs and extract questions
// =============================================================================

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import PDFParser from 'pdf2json';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Mapping des fichiers PDF aux thèmes basé sur les noms de fichiers
const PDF_THEME_MAPPING = {
  '01-calcul-numerique': { theme: 'N', subtheme: 'N1', name: 'Calcul numérique', difficulty: [1, 2, 3] },
  '02-calcul-litteral': { theme: 'N', subtheme: 'N2', name: 'Calcul littéral', difficulty: [2, 3] },
  '03-puissances': { theme: 'N', subtheme: 'N3', name: 'Puissances', difficulty: [2, 3] },
  '04-equations': { theme: 'N', subtheme: 'N4', name: 'Équations', difficulty: [2, 3] },
  '05-rationnels': { theme: 'N', subtheme: 'N5', name: 'Nombres rationnels', difficulty: [2, 3] },
  '06-suites-de-nombres': { theme: 'N', subtheme: 'N6', name: 'Suites de nombres', difficulty: [2, 3] },
  '08-distances-et-lieux': { theme: 'G', subtheme: 'G1', name: 'Distances et lieux', difficulty: [2, 3] },
  '09-transformations-du-plan': { theme: 'G', subtheme: 'G2', name: 'Transformations du plan', difficulty: [2, 3] },
  '10-reperage': { theme: 'G', subtheme: 'G3', name: 'Repérage', difficulty: [1, 2, 3] },
  '11-angles': { theme: 'G', subtheme: 'G4', name: 'Angles', difficulty: [1, 2, 3] },
  '12-figures-planes': { theme: 'G', subtheme: 'G5', name: 'Figures planes', difficulty: [1, 2, 3] },
  '13-solides': { theme: 'G', subtheme: 'G6', name: 'Solides', difficulty: [2, 3] },
  '14-programmes-de-construction': { theme: 'G', subtheme: 'G7', name: 'Programmes de construction', difficulty: [2, 3] },
  '15-grandeurs-proportionnelles': { theme: 'P', subtheme: 'P1', name: 'Grandeurs proportionnelles', difficulty: [1, 2, 3] },
  '16-traitement-de-donnees': { theme: 'D', subtheme: 'D1', name: 'Traitement de données', difficulty: [1, 2, 3] }
};

// Fonction pour identifier le thème d'un fichier PDF
function identifyTheme(filename) {
  for (const [key, value] of Object.entries(PDF_THEME_MAPPING)) {
    if (filename.startsWith(key)) {
      return value;
    }
  }
  return null;
}

// Fonction pour déterminer si c'est un fichier de questions ou de corrections
function isAnswerFile(filename) {
  const answerKeywords = ['corrige', 'correctif', 'reponses'];
  return answerKeywords.some(keyword => filename.toLowerCase().includes(keyword));
}

// Fonction pour extraire le texte d'un PDF
async function extractPdfText(pdfPath) {
  return new Promise((resolve, reject) => {
    const pdfParser = new PDFParser();

    pdfParser.on('pdfParser_dataError', errData => {
      console.error(`Erreur lors de la lecture de ${pdfPath}:`, errData.parserError);
      resolve(null);
    });

    pdfParser.on('pdfParser_dataReady', pdfData => {
      try {
        // Extraire le texte de toutes les pages
        let fullText = '';
        if (pdfData.Pages) {
          pdfData.Pages.forEach(page => {
            if (page.Texts) {
              page.Texts.forEach(text => {
                if (text.R) {
                  text.R.forEach(r => {
                    if (r.T) {
                      fullText += decodeURIComponent(r.T) + ' ';
                    }
                  });
                }
              });
              fullText += '\n';
            }
          });
        }
        resolve(fullText.trim());
      } catch (error) {
        console.error(`Erreur lors du parsing de ${pdfPath}:`, error.message);
        resolve(null);
      }
    });

    pdfParser.loadPDF(pdfPath);
  });
}

// Fonction pour analyser et extraire les questions du texte
function parseQuestions(text, theme, isAnswer = false) {
  if (!text) return [];

  const questions = [];
  const lines = text.split('\n').map(line => line.trim()).filter(line => line.length > 0);

  // Patterns pour détecter les questions
  // Les PDFs CE1D ont généralement un format numéroté: "1.", "2.", etc.
  const questionPattern = /^(\d+)\.\s*(.+)/;

  let currentQuestion = null;
  let questionCounter = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const match = line.match(questionPattern);

    if (match) {
      // Sauvegarder la question précédente si elle existe
      if (currentQuestion) {
        questions.push(currentQuestion);
      }

      // Nouvelle question
      questionCounter++;
      currentQuestion = {
        number: parseInt(match[1]),
        text: match[2],
        fullText: [match[2]],
        theme: theme.subtheme,
        themeName: theme.name,
        isAnswer: isAnswer
      };
    } else if (currentQuestion && line.length > 0) {
      // Continuer à ajouter du texte à la question courante
      currentQuestion.fullText.push(line);
    }
  }

  // Ajouter la dernière question
  if (currentQuestion) {
    questions.push(currentQuestion);
  }

  return questions;
}

// Fonction principale pour scanner tous les PDFs
async function scanAllPdfs() {
  const pdfDir = path.join(__dirname, '..', 'public', 'pdf');
  const files = fs.readdirSync(pdfDir).filter(file => file.endsWith('.pdf'));

  console.log(`📚 Scanning ${files.length} PDF files...\n`);

  const allData = {
    questions: {},
    answers: {},
    themes: {}
  };

  let processedCount = 0;
  for (const file of files) {
    const filePath = path.join(pdfDir, file);
    const theme = identifyTheme(file);

    if (!theme) {
      console.log(`⚠️  Skipping ${file} - theme not identified`);
      continue;
    }

    const isAnswer = isAnswerFile(file);
    console.log(`📄 [${++processedCount}/${files.length}] Processing: ${file}`);
    console.log(`   Theme: ${theme.name} (${theme.subtheme})`);
    console.log(`   Type: ${isAnswer ? 'Corrections' : 'Questions'}`);

    const text = await extractPdfText(filePath);
    if (text) {
      const extracted = parseQuestions(text, theme, isAnswer);
      console.log(`   Extracted: ${extracted.length} items`);
      console.log(`   Preview: ${text.substring(0, 150).replace(/\n/g, ' ')}...\n`);

      // Stocker les données
      const key = theme.subtheme;
      if (isAnswer) {
        if (!allData.answers[key]) allData.answers[key] = [];
        allData.answers[key].push(...extracted);
      } else {
        if (!allData.questions[key]) allData.questions[key] = [];
        allData.questions[key].push(...extracted);
      }

      // Enregistrer les informations du thème
      if (!allData.themes[key]) {
        allData.themes[key] = theme;
      }
    }
  }

  // Sauvegarder les résultats dans un fichier JSON
  const outputPath = path.join(__dirname, 'extracted-questions.json');
  fs.writeFileSync(outputPath, JSON.stringify(allData, null, 2));

  console.log(`\n✅ Extraction completed!`);
  console.log(`📊 Results saved to: ${outputPath}`);
  console.log(`\nSummary:`);
  console.log(`  Themes found: ${Object.keys(allData.themes).length}`);
  console.log(`  Question sets: ${Object.keys(allData.questions).length}`);
  console.log(`  Answer sets: ${Object.keys(allData.answers).length}`);

  // Afficher le détail par thème
  console.log(`\nDetails by theme:`);
  for (const [key, theme] of Object.entries(allData.themes)) {
    const qCount = allData.questions[key]?.length || 0;
    const aCount = allData.answers[key]?.length || 0;
    console.log(`  ${key} - ${theme.name}: ${qCount} questions, ${aCount} answers`);
  }

  return allData;
}

// Exécuter le script
scanAllPdfs().catch(console.error);
