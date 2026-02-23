# Structure de la Base de Données des Questions CE1D

## 📚 Vue d'ensemble

La base de données des questions a été recréée en se basant sur l'analyse des fichiers PDF CE1D (2010-2022). Le système combine des questions extraites des examens réels avec des questions générées procéduralement.

## 🎯 Thèmes Principaux

### 1. **Nombres** 🔢 (Catégories N1-N6)
- **N1** - Calcul numérique : Opérations de base, priorités opératoires
- **N2** - Calcul littéral : Divisibilité, critères, PGCD, PPCM
- **N3** - Puissances : Notation scientifique, calculs avec puissances
- **N4** - Équations : Résolution d'équations simples
- **N5** - Nombres rationnels : Fractions, décimaux
- **N6** - Suites de nombres : Patterns, progressions

### 2. **Géométrie** 📐 (Catégories G1-G7)
- **G1** - Distances et lieux : Périmètres, aires
- **G2** - Transformations du plan : Symétries, rotations, translations
- **G3** - Repérage : Coordonnées, plans cartésiens
- **G4** - Angles : Mesures, types d'angles
- **G5** - Figures planes : Triangles, quadrilatères, cercles
- **G6** - Solides : Volumes, développements
- **G7** - Programmes de construction : Instructions géométriques

### 3. **Proportionnalité** ⚖️ (Catégorie P1)
- **P1** - Grandeurs proportionnelles : Proportions, échelles, pourcentages

### 4. **Traitement de Données** 📊 (Catégories D1-D2)
- **D1** - Traitement de données : Tableaux, graphiques
- **D2** - Statistiques : Moyennes, médianes, modes

### 5. **Grandeurs** 📏 (Catégorie M1)
- **M1** - Conversions et mesures : Unités de mesure

### 6. **Résolution de Problèmes** 🧩 (Catégorie R1)
- **R1** - Problèmes complexes : Raisonnement, logique

## 📁 Structure des Fichiers

```
src/data/
├── ce1dThemes.js          # Configuration des thèmes
├── questionIndex.js       # Index central de toutes les catégories
├── questions-N1.js        # Questions Calcul numérique
├── questions-N2.js        # Questions Calcul littéral
├── questions-N3.js        # Questions Puissances
├── questions-N4.js        # Questions Équations
├── questions-N5.js        # Questions Nombres rationnels
├── questions-N6.js        # Questions Suites de nombres
├── questions-G1.js        # Questions Distances et lieux
├── questions-G2.js        # Questions Transformations du plan
├── questions-G3.js        # Questions Repérage
├── questions-G4.js        # Questions Angles
├── questions-G5.js        # Questions Figures planes
├── questions-G6.js        # Questions Solides
├── questions-G7.js        # Questions Programmes de construction
├── questions-P1.js        # Questions Proportionnalité
├── questions-D1.js        # Questions Traitement de données
├── questions-D2.js        # Questions Statistiques
├── questions-M1.js        # Questions Grandeurs
└── questions-R1.js        # Questions Problèmes complexes
```

## 🔧 Format des Questions

Chaque question suit le format trilingue (FR/EN/NL) :

```javascript
{
  id: 'N1_2013_Q4_1',           // Identifiant unique
  year: 2013,                   // Année de l'examen (si applicable)
  questionNumber: 'Q4',         // Numéro de la question d'origine
  category: 'N1',               // Catégorie
  level: 2,                     // Niveau de difficulté (1, 2, ou 3)
  points: 6,                    // Points attribués (si applicable)
  text: {                       // Énoncé multilingue
    fr: 'Calcule : 40 - 5 × 2²',
    en: 'Calculate: 40 - 5 × 2²',
    nl: 'Bereken: 40 - 5 × 2²'
  },
  answer: 20,                   // Réponse attendue
  tolerance: 0,                 // Tolérance pour les réponses numériques
  solution: {                   // Solution détaillée (optionnel)
    fr: '40 - 5 × 4 = 40 - 20 = 20',
    en: '40 - 5 × 4 = 40 - 20 = 20',
    nl: '40 - 5 × 4 = 40 - 20 = 20'
  },
  hint: {                       // Indice (optionnel)
    fr: 'Commence par calculer les puissances...',
    en: 'Start with powers...',
    nl: 'Begin met machten...'
  }
}
```

## 🎲 Génération Procédurale

Chaque fichier de catégorie inclut une fonction `generate(level)` qui permet de créer des questions dynamiquement selon le niveau de difficulté :

```javascript
export function generate(level = 1) {
  // Génère une question adaptée au niveau
  // level = 1: Facile
  // level = 2: Moyen
  // level = 3: Difficile
}
```

## 📊 Statistiques

- **Total de catégories** : 18 (N1-N6, G1-G7, P1, D1-D2, M1, R1)
- **Questions extraites des PDFs** : 5 (N1 et N2)
- **Questions générées procéduralement** : Variable selon la catégorie
- **Langues supportées** : 3 (Français, Anglais, Néerlandais)
- **Niveaux de difficulté** : 3 (Facile, Moyen, Difficile)

## 🚀 Utilisation

### Importer des questions

```javascript
import { getRandomQuestion, getQuestionsByCategory } from './data/questionIndex.js';

// Obtenir une question aléatoire
const question = getRandomQuestion(['N1', 'N2'], 2); // Catégories N1 et N2, niveau 2

// Obtenir toutes les questions d'une catégorie
const questionsN1 = getQuestionsByCategory('N1');
```

### Configuration des thèmes

```javascript
import { CE1D_THEMES, getCategoriesToLoad } from './data/ce1dThemes.js';

// Obtenir les catégories associées aux thèmes sélectionnés
const categories = getCategoriesToLoad(['numbers', 'geometry']);
// Retourne: ['N1', 'N2', 'N3', 'N4', 'N5', 'N6', 'G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7']
```

## 📝 Scripts de Génération

### Générer les fichiers de questions

```bash
node scripts/generateQuestionsFromPDF.js
```

Ce script :
1. Lit la configuration des thèmes
2. Combine questions extraites + questions générées
3. Crée les fichiers de questions pour chaque catégorie
4. Met à jour `ce1dThemes.js` et `questionIndex.js`

### Scanner les PDFs (optionnel)

```bash
node scripts/extractPdfQuestions.js
```

Ce script lit tous les PDFs dans `public/pdf/` et extrait le texte brut.

## 🎯 Niveaux de Difficulté

- **Niveau 1 (Facile)** : Questions de base, nombres simples
- **Niveau 2 (Moyen)** : Questions intermédiaires, nombres plus grands
- **Niveau 3 (Difficile)** : Questions complexes, opérations avancées

## 🌐 Multilingue

Toutes les questions sont disponibles en :
- 🇫🇷 **Français** (fr)
- 🇬🇧 **Anglais** (en)
- 🇳🇱 **Néerlandais** (nl)

## 📖 Sources

Les questions sont basées sur les examens CE1D (Certificat d'Études du 1er Degré) belges de 2010 à 2022, couvrant tous les thèmes du programme de mathématiques du premier degré secondaire.

## ⚙️ Configuration du Jeu

Le jeu sélectionne automatiquement les questions en fonction de :
1. Les **thèmes** choisis par le joueur
2. Le **niveau de difficulté** sélectionné
3. Un **mélange aléatoire** entre questions statiques et questions générées

---

**Dernière mise à jour** : 2026-02-21
**Version** : 1.0.0
