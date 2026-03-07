// =============================================================================
// A6 - Suppression des parenthèses (Sans distributivité)
// CE1D Belgian exam - Trilingual (FR / EN / NL)
// Basé sur: Exercices_Suppression_Parentheses_Sans_Distributivite_CE1D.docx
// =============================================================================

export const questions = [
  {
    "id": "A6_1",
    "category": "A6",
    "level": 1,
    "text": {
      "fr": "Supprime les parenthèses et réduis : 5 + (3x + 2)",
      "en": "Remove parentheses and simplify: 5 + (3x + 2)",
      "nl": "Verwijder haakjes en vereenvoudig: 5 + (3x + 2)"
    },
    "answer": "3x + 7",
    "tolerance": 0,
    "hint": {
      "fr": "Avec un + devant, garde les signes : 5 + 3x + 2",
      "en": "With + in front, keep the signs: 5 + 3x + 2",
      "nl": "Met + ervoor, behoud de tekens: 5 + 3x + 2"
    }
  },
  {
    "id": "A6_2",
    "category": "A6",
    "level": 1,
    "text": {
      "fr": "Supprime les parenthèses et réduis : 7 + (4y − 6)",
      "en": "Remove parentheses and simplify: 7 + (4y − 6)",
      "nl": "Verwijder haakjes en vereenvoudig: 7 + (4y − 6)"
    },
    "answer": "4y + 1",
    "tolerance": 0,
    "hint": {
      "fr": "7 + 4y − 6 = 4y + 1",
      "en": "7 + 4y − 6 = 4y + 1",
      "nl": "7 + 4y − 6 = 4y + 1"
    }
  },
  {
    "id": "A6_3",
    "category": "A6",
    "level": 1,
    "text": {
      "fr": "Supprime les parenthèses et réduis : 2a + (8 − a)",
      "en": "Remove parentheses and simplify: 2a + (8 − a)",
      "nl": "Verwijder haakjes en vereenvoudig: 2a + (8 − a)"
    },
    "answer": "a + 8",
    "tolerance": 0,
    "hint": {
      "fr": "2a + 8 − a = a + 8",
      "en": "2a + 8 − a = a + 8",
      "nl": "2a + 8 − a = a + 8"
    }
  },
  {
    "id": "A6_4",
    "category": "A6",
    "level": 1,
    "text": {
      "fr": "Supprime les parenthèses et réduis : 9 − (2 + 3)",
      "en": "Remove parentheses and simplify: 9 − (2 + 3)",
      "nl": "Verwijder haakjes en vereenvoudig: 9 − (2 + 3)"
    },
    "answer": "4",
    "tolerance": 0,
    "hint": {
      "fr": "Avec un − devant, change les signes : 9 − 2 − 3 = 4",
      "en": "With − in front, change the signs: 9 − 2 − 3 = 4",
      "nl": "Met − ervoor, verander de tekens: 9 − 2 − 3 = 4"
    }
  },
  {
    "id": "A6_5",
    "category": "A6",
    "level": 1,
    "text": {
      "fr": "Supprime les parenthèses et réduis : 3 + (2x + 5)",
      "en": "Remove parentheses and simplify: 3 + (2x + 5)",
      "nl": "Verwijder haakjes en vereenvoudig: 3 + (2x + 5)"
    },
    "answer": "2x + 8",
    "tolerance": 0,
    "hint": {
      "fr": "3 + 2x + 5 = 2x + 8",
      "en": "3 + 2x + 5 = 2x + 8",
      "nl": "3 + 2x + 5 = 2x + 8"
    }
  },
  {
    "id": "A6_6",
    "category": "A6",
    "level": 1,
    "text": {
      "fr": "Supprime les parenthèses et réduis : 10 + (5a − 3)",
      "en": "Remove parentheses and simplify: 10 + (5a − 3)",
      "nl": "Verwijder haakjes en vereenvoudig: 10 + (5a − 3)"
    },
    "answer": "5a + 7",
    "tolerance": 0,
    "hint": {
      "fr": "10 + 5a − 3 = 5a + 7",
      "en": "10 + 5a − 3 = 5a + 7",
      "nl": "10 + 5a − 3 = 5a + 7"
    }
  },
  {
    "id": "A6_7",
    "category": "A6",
    "level": 1,
    "text": {
      "fr": "Supprime les parenthèses et réduis : 4b + (6 − 2b)",
      "en": "Remove parentheses and simplify: 4b + (6 − 2b)",
      "nl": "Verwijder haakjes en vereenvoudig: 4b + (6 − 2b)"
    },
    "answer": "2b + 6",
    "tolerance": 0,
    "hint": {
      "fr": "4b + 6 − 2b = 2b + 6",
      "en": "4b + 6 − 2b = 2b + 6",
      "nl": "4b + 6 − 2b = 2b + 6"
    }
  },
  {
    "id": "A6_9",
    "category": "A6",
    "level": 2,
    "text": {
      "fr": "Supprime les parenthèses et réduis : 6x − (3x + 4)",
      "en": "Remove parentheses and simplify: 6x − (3x + 4)",
      "nl": "Verwijder haakjes en vereenvoudig: 6x − (3x + 4)"
    },
    "answer": "3x − 4",
    "tolerance": 0,
    "hint": {
      "fr": "Le − devant change les signes : 6x − 3x − 4 = 3x − 4",
      "en": "The − in front changes signs: 6x − 3x − 4 = 3x − 4",
      "nl": "De − ervoor verandert tekens: 6x − 3x − 4 = 3x − 4"
    }
  },
  {
    "id": "A6_10",
    "category": "A6",
    "level": 2,
    "text": {
      "fr": "Supprime les parenthèses et réduis : 10 − (5y − 2)",
      "en": "Remove parentheses and simplify: 10 − (5y − 2)",
      "nl": "Verwijder haakjes en vereenvoudig: 10 − (5y − 2)"
    },
    "answer": "12 − 5y",
    "tolerance": 0,
    "hint": {
      "fr": "10 − 5y + 2 = 12 − 5y",
      "en": "10 − 5y + 2 = 12 − 5y",
      "nl": "10 − 5y + 2 = 12 − 5y"
    }
  },
  {
    "id": "A6_11",
    "category": "A6",
    "level": 2,
    "text": {
      "fr": "Supprime les parenthèses et réduis : 8a − (2 − a)",
      "en": "Remove parentheses and simplify: 8a − (2 − a)",
      "nl": "Verwijder haakjes en vereenvoudig: 8a − (2 − a)"
    },
    "answer": "9a − 2",
    "tolerance": 0,
    "hint": {
      "fr": "8a − 2 + a = 9a − 2",
      "en": "8a − 2 + a = 9a − 2",
      "nl": "8a − 2 + a = 9a − 2"
    }
  },
  {
    "id": "A6_12",
    "category": "A6",
    "level": 2,
    "text": {
      "fr": "Supprime les parenthèses et réduis : 12 − (x + 7)",
      "en": "Remove parentheses and simplify: 12 − (x + 7)",
      "nl": "Verwijder haakjes en vereenvoudig: 12 − (x + 7)"
    },
    "answer": "5 − x",
    "tolerance": 0,
    "hint": {
      "fr": "12 − x − 7 = 5 − x",
      "en": "12 − x − 7 = 5 − x",
      "nl": "12 − x − 7 = 5 − x"
    }
  },
  {
    "id": "A6_13",
    "category": "A6",
    "level": 2,
    "text": {
      "fr": "Supprime les parenthèses et réduis : 9b − (4b + 3)",
      "en": "Remove parentheses and simplify: 9b − (4b + 3)",
      "nl": "Verwijder haakjes en vereenvoudig: 9b − (4b + 3)"
    },
    "answer": "5b − 3",
    "tolerance": 0,
    "hint": {
      "fr": "9b − 4b − 3 = 5b − 3",
      "en": "9b − 4b − 3 = 5b − 3",
      "nl": "9b − 4b − 3 = 5b − 3"
    }
  },
  {
    "id": "A6_14",
    "category": "A6",
    "level": 2,
    "text": {
      "fr": "Supprime les parenthèses et réduis : 15 − (3y − 5)",
      "en": "Remove parentheses and simplify: 15 − (3y − 5)",
      "nl": "Verwijder haakjes en vereenvoudig: 15 − (3y − 5)"
    },
    "answer": "20 − 3y",
    "tolerance": 0,
    "hint": {
      "fr": "15 − 3y + 5 = 20 − 3y",
      "en": "15 − 3y + 5 = 20 − 3y",
      "nl": "15 − 3y + 5 = 20 − 3y"
    }
  },
  {
    "id": "A6_15",
    "category": "A6",
    "level": 2,
    "text": {
      "fr": "Supprime les parenthèses et réduis : 7x − (x − 8)",
      "en": "Remove parentheses and simplify: 7x − (x − 8)",
      "nl": "Verwijder haakjes en vereenvoudig: 7x − (x − 8)"
    },
    "answer": "6x + 8",
    "tolerance": 0,
    "hint": {
      "fr": "7x − x + 8 = 6x + 8",
      "en": "7x − x + 8 = 6x + 8",
      "nl": "7x − x + 8 = 6x + 8"
    }
  },
  {
    "id": "A6_17",
    "category": "A6",
    "level": 3,
    "text": {
      "fr": "Supprime les parenthèses et réduis : 3x − (7y + 1)",
      "en": "Remove parentheses and simplify: 3x − (7y + 1)",
      "nl": "Verwijder haakjes en vereenvoudig: 3x − (7y + 1)"
    },
    "answer": "3x − 7y − 1",
    "tolerance": 0,
    "hint": {
      "fr": "3x − 7y − 1 (pas de réduction possible)",
      "en": "3x − 7y − 1 (no further simplification)",
      "nl": "3x − 7y − 1 (geen verdere vereenvoudiging)"
    }
  },
  {
    "id": "A6_18",
    "category": "A6",
    "level": 3,
    "text": {
      "fr": "Supprime les parenthèses et réduis : 2a + (5a − 3) − (a + 4)",
      "en": "Remove parentheses and simplify: 2a + (5a − 3) − (a + 4)",
      "nl": "Verwijder haakjes en vereenvoudig: 2a + (5a − 3) − (a + 4)"
    },
    "answer": "6a − 7",
    "tolerance": 0,
    "hint": {
      "fr": "2a + 5a − 3 − a − 4 = 6a − 7",
      "en": "2a + 5a − 3 − a − 4 = 6a − 7",
      "nl": "2a + 5a − 3 − a − 4 = 6a − 7"
    }
  },
  {
    "id": "A6_19",
    "category": "A6",
    "level": 3,
    "text": {
      "fr": "Supprime les parenthèses et réduis : 15 − (4x − 3) + (2x − 5)",
      "en": "Remove parentheses and simplify: 15 − (4x − 3) + (2x − 5)",
      "nl": "Verwijder haakjes en vereenvoudig: 15 − (4x − 3) + (2x − 5)"
    },
    "answer": "13 − 2x",
    "tolerance": 0,
    "hint": {
      "fr": "15 − 4x + 3 + 2x − 5 = 13 − 2x",
      "en": "15 − 4x + 3 + 2x − 5 = 13 − 2x",
      "nl": "15 − 4x + 3 + 2x − 5 = 13 − 2x"
    }
  },
  {
    "id": "A6_20",
    "category": "A6",
    "level": 3,
    "text": {
      "fr": "Supprime les parenthèses et réduis : 9b − (2b + 6) − (b − 3)",
      "en": "Remove parentheses and simplify: 9b − (2b + 6) − (b − 3)",
      "nl": "Verwijder haakjes en vereenvoudig: 9b − (2b + 6) − (b − 3)"
    },
    "answer": "6b − 3",
    "tolerance": 0,
    "hint": {
      "fr": "9b − 2b − 6 − b + 3 = 6b − 3",
      "en": "9b − 2b − 6 − b + 3 = 6b − 3",
      "nl": "9b − 2b − 6 − b + 3 = 6b − 3"
    }
  },
  {
    "id": "A6_21",
    "category": "A6",
    "level": 3,
    "text": {
      "fr": "Supprime les parenthèses et réduis : 5x + (3x − 2) − (4x + 1)",
      "en": "Remove parentheses and simplify: 5x + (3x − 2) − (4x + 1)",
      "nl": "Verwijder haakjes en vereenvoudig: 5x + (3x − 2) − (4x + 1)"
    },
    "answer": "4x − 3",
    "tolerance": 0,
    "hint": {
      "fr": "5x + 3x − 2 − 4x − 1 = 4x − 3",
      "en": "5x + 3x − 2 − 4x − 1 = 4x − 3",
      "nl": "5x + 3x − 2 − 4x − 1 = 4x − 3"
    }
  },
  {
    "id": "A6_22",
    "category": "A6",
    "level": 3,
    "text": {
      "fr": "Supprime les parenthèses et réduis : 8 − (3y + 4) + (y − 2)",
      "en": "Remove parentheses and simplify: 8 − (3y + 4) + (y − 2)",
      "nl": "Verwijder haakjes en vereenvoudig: 8 − (3y + 4) + (y − 2)"
    },
    "answer": "2 − 2y",
    "tolerance": 0,
    "hint": {
      "fr": "8 − 3y − 4 + y − 2 = 2 − 2y",
      "en": "8 − 3y − 4 + y − 2 = 2 − 2y",
      "nl": "8 − 3y − 4 + y − 2 = 2 − 2y"
    }
  }
];

export function generate(level = 1) {
  // Generator function can be implemented later if needed
  const filtered = questions.filter(q => q.level === level);
  return filtered[Math.floor(Math.random() * filtered.length)];
}
