// =============================================================================
// N2 - Calcul litteral (Algebraic computation / Divisibility)
// CE1D Belgian exam - Trilingual (FR / EN / NL)
// 112 questions: ~37 per level, all numeric answers
// Topics: divisibility, GCD, LCM, remainders, prime factoring, algebraic eval
// =============================================================================

export const questions = [
  // ===========================================================================
  // LEVEL 1 - Simple divisibility, remainders, basic evaluation (17 questions)
  // ===========================================================================
  {
    "id": "N2_s_1", "category": "N2", "level": 1,
    "text": {
      "fr": "Quel est le reste de 17 divise par 5 ?",
      "en": "What is the remainder of 17 divided by 5?",
      "nl": "Wat is de rest van 17 gedeeld door 5?"
    },
    "answer": 2, "tolerance": 0,
    "hint": {
      "fr": "17 = 3 x 5 + reste. Quel est le reste ?",
      "en": "17 = 3 x 5 + remainder. What is the remainder?",
      "nl": "17 = 3 x 5 + rest. Wat is de rest?"
    }
  },
  {
    "id": "N2_s_2", "category": "N2", "level": 1,
    "text": {
      "fr": "Quel est le reste de 23 divise par 4 ?",
      "en": "What is the remainder of 23 divided by 4?",
      "nl": "Wat is de rest van 23 gedeeld door 4?"
    },
    "answer": 3, "tolerance": 0,
    "hint": {
      "fr": "23 = 5 x 4 + reste. Quel est le reste ?",
      "en": "23 = 5 x 4 + remainder. What is the remainder?",
      "nl": "23 = 5 x 4 + rest. Wat is de rest?"
    }
  },
  {
    "id": "N2_s_3", "category": "N2", "level": 1,
    "text": {
      "fr": "Quel est le reste de 29 divise par 6 ?",
      "en": "What is the remainder of 29 divided by 6?",
      "nl": "Wat is de rest van 29 gedeeld door 6?"
    },
    "answer": 5, "tolerance": 0,
    "hint": {
      "fr": "29 = 4 x 6 + reste. Quel est le reste ?",
      "en": "29 = 4 x 6 + remainder. What is the remainder?",
      "nl": "29 = 4 x 6 + rest. Wat is de rest?"
    }
  },
  {
    "id": "N2_s_4", "category": "N2", "level": 1,
    "text": {
      "fr": "Quel est le plus grand diviseur commun (PGCD) de 12 et 8 ?",
      "en": "What is the greatest common divisor (GCD) of 12 and 8?",
      "nl": "Wat is de grootste gemene deler (GGD) van 12 en 8?"
    },
    "answer": 4, "tolerance": 0,
    "hint": {
      "fr": "Liste les diviseurs de 12 et de 8, puis trouve le plus grand commun.",
      "en": "List the divisors of 12 and 8, then find the largest common one.",
      "nl": "Lijst de delers van 12 en 8, en vind de grootste gemeenschappelijke."
    }
  },
  {
    "id": "N2_s_5", "category": "N2", "level": 1,
    "text": {
      "fr": "Quel est le PGCD de 15 et 25 ?",
      "en": "What is the GCD of 15 and 25?",
      "nl": "Wat is de GGD van 15 en 25?"
    },
    "answer": 5, "tolerance": 0,
    "hint": {
      "fr": "Les diviseurs de 15 sont 1, 3, 5, 15. Les diviseurs de 25 sont 1, 5, 25.",
      "en": "The divisors of 15 are 1, 3, 5, 15. The divisors of 25 are 1, 5, 25.",
      "nl": "De delers van 15 zijn 1, 3, 5, 15. De delers van 25 zijn 1, 5, 25."
    }
  },
  {
    "id": "N2_s_6", "category": "N2", "level": 1,
    "text": {
      "fr": "Quel est le PGCD de 18 et 24 ?",
      "en": "What is the GCD of 18 and 24?",
      "nl": "Wat is de GGD van 18 en 24?"
    },
    "answer": 6, "tolerance": 0,
    "hint": {
      "fr": "Decompose 18 = 2 x 3 x 3 et 24 = 2 x 2 x 2 x 3, puis prends les facteurs communs.",
      "en": "Decompose 18 = 2 x 3 x 3 and 24 = 2 x 2 x 2 x 3, then take common factors.",
      "nl": "Ontbind 18 = 2 x 3 x 3 en 24 = 2 x 2 x 2 x 3, en neem de gemeenschappelijke factoren."
    }
  },
  {
    "id": "N2_s_7", "category": "N2", "level": 1,
    "text": {
      "fr": "Si a = 3, calcule : 2a + 5",
      "en": "If a = 3, calculate: 2a + 5",
      "nl": "Als a = 3, bereken: 2a + 5"
    },
    "answer": 11, "tolerance": 0,
    "hint": {
      "fr": "Remplace a par 3 : 2 x 3 + 5.",
      "en": "Replace a with 3: 2 x 3 + 5.",
      "nl": "Vervang a door 3: 2 x 3 + 5."
    }
  },
  {
    "id": "N2_s_8", "category": "N2", "level": 1,
    "text": {
      "fr": "Si a = 5, calcule : 3a - 7",
      "en": "If a = 5, calculate: 3a - 7",
      "nl": "Als a = 5, bereken: 3a - 7"
    },
    "answer": 8, "tolerance": 0,
    "hint": {
      "fr": "Remplace a par 5 : 3 x 5 - 7.",
      "en": "Replace a with 5: 3 x 5 - 7.",
      "nl": "Vervang a door 5: 3 x 5 - 7."
    }
  },
  {
    "id": "N2_s_9", "category": "N2", "level": 1,
    "text": {
      "fr": "Quel est le PPCM de 3 et 5 ?",
      "en": "What is the LCM of 3 and 5?",
      "nl": "Wat is het KGV van 3 en 5?"
    },
    "answer": 15, "tolerance": 0,
    "hint": {
      "fr": "Le PPCM est le plus petit nombre qui est multiple de 3 et de 5.",
      "en": "The LCM is the smallest number that is a multiple of both 3 and 5.",
      "nl": "Het KGV is het kleinste getal dat een veelvoud is van zowel 3 als 5."
    }
  },
  {
    "id": "N2_s_10", "category": "N2", "level": 1,
    "text": {
      "fr": "Quel est le PPCM de 4 et 6 ?",
      "en": "What is the LCM of 4 and 6?",
      "nl": "Wat is het KGV van 4 en 6?"
    },
    "answer": 12, "tolerance": 0,
    "hint": {
      "fr": "Multiples de 4 : 4, 8, 12... Multiples de 6 : 6, 12... Le plus petit commun est 12.",
      "en": "Multiples of 4: 4, 8, 12... Multiples of 6: 6, 12... The smallest common one is 12.",
      "nl": "Veelvouden van 4: 4, 8, 12... Veelvouden van 6: 6, 12... Het kleinste gemeenschappelijke is 12."
    }
  },
  {
    "id": "N2_s_11", "category": "N2", "level": 1,
    "text": {
      "fr": "Quel est le reste de 50 divise par 7 ?",
      "en": "What is the remainder of 50 divided by 7?",
      "nl": "Wat is de rest van 50 gedeeld door 7?"
    },
    "answer": 1, "tolerance": 0,
    "hint": {
      "fr": "50 = 7 x 7 + reste. Quel est le reste ?",
      "en": "50 = 7 x 7 + remainder. What is the remainder?",
      "nl": "50 = 7 x 7 + rest. Wat is de rest?"
    }
  },
  {
    "id": "N2_s_12", "category": "N2", "level": 1,
    "text": {
      "fr": "Combien y a-t-il de diviseurs de 12 ?",
      "en": "How many divisors does 12 have?",
      "nl": "Hoeveel delers heeft 12?"
    },
    "answer": 6, "tolerance": 0,
    "hint": {
      "fr": "Les diviseurs de 12 sont : 1, 2, 3, 4, 6, 12. Compte-les.",
      "en": "The divisors of 12 are: 1, 2, 3, 4, 6, 12. Count them.",
      "nl": "De delers van 12 zijn: 1, 2, 3, 4, 6, 12. Tel ze."
    }
  },
  {
    "id": "N2_s_13", "category": "N2", "level": 1,
    "text": {
      "fr": "Si x = 4, calcule : x + 9",
      "en": "If x = 4, calculate: x + 9",
      "nl": "Als x = 4, bereken: x + 9"
    },
    "answer": 13, "tolerance": 0,
    "hint": {
      "fr": "Remplace x par 4 : 4 + 9.",
      "en": "Replace x with 4: 4 + 9.",
      "nl": "Vervang x door 4: 4 + 9."
    }
  },
  {
    "id": "N2_s_14", "category": "N2", "level": 1,
    "text": {
      "fr": "Quel est le reste de 37 divise par 8 ?",
      "en": "What is the remainder of 37 divided by 8?",
      "nl": "Wat is de rest van 37 gedeeld door 8?"
    },
    "answer": 5, "tolerance": 0,
    "hint": {
      "fr": "37 = 4 x 8 + reste. Quel est le reste ?",
      "en": "37 = 4 x 8 + remainder. What is the remainder?",
      "nl": "37 = 4 x 8 + rest. Wat is de rest?"
    }
  },
  {
    "id": "N2_s_15", "category": "N2", "level": 1,
    "text": {
      "fr": "Si a = 2, calcule : 5a + 1",
      "en": "If a = 2, calculate: 5a + 1",
      "nl": "Als a = 2, bereken: 5a + 1"
    },
    "answer": 11, "tolerance": 0,
    "hint": {
      "fr": "Remplace a par 2 : 5 x 2 + 1.",
      "en": "Replace a with 2: 5 x 2 + 1.",
      "nl": "Vervang a door 2: 5 x 2 + 1."
    }
  },
  {
    "id": "N2_s_16", "category": "N2", "level": 1,
    "text": {
      "fr": "Combien y a-t-il de diviseurs de 18 ?",
      "en": "How many divisors does 18 have?",
      "nl": "Hoeveel delers heeft 18?"
    },
    "answer": 6, "tolerance": 0,
    "hint": {
      "fr": "Les diviseurs de 18 sont : 1, 2, 3, 6, 9, 18.",
      "en": "The divisors of 18 are: 1, 2, 3, 6, 9, 18.",
      "nl": "De delers van 18 zijn: 1, 2, 3, 6, 9, 18."
    }
  },
  {
    "id": "N2_s_17", "category": "N2", "level": 1,
    "text": {
      "fr": "Quel est le PGCD de 10 et 15 ?",
      "en": "What is the GCD of 10 and 15?",
      "nl": "Wat is de GGD van 10 en 15?"
    },
    "answer": 5, "tolerance": 0,
    "hint": {
      "fr": "Les diviseurs de 10 sont 1, 2, 5, 10. Les diviseurs de 15 sont 1, 3, 5, 15.",
      "en": "The divisors of 10 are 1, 2, 5, 10. The divisors of 15 are 1, 3, 5, 15.",
      "nl": "De delers van 10 zijn 1, 2, 5, 10. De delers van 15 zijn 1, 3, 5, 15."
    }
  },

  // ===========================================================================
  // LEVEL 2 - GCD, LCM, slightly more complex expressions (17 questions)
  // ===========================================================================
  {
    "id": "N2_s_18", "category": "N2", "level": 2,
    "text": {
      "fr": "Quel est le PPCM de 6 et 8 ?",
      "en": "What is the LCM of 6 and 8?",
      "nl": "Wat is het KGV van 6 en 8?"
    },
    "answer": 24, "tolerance": 0,
    "hint": {
      "fr": "Decompose : 6 = 2 x 3, 8 = 2 x 2 x 2. Le PPCM = 2^3 x 3 = 24.",
      "en": "Decompose: 6 = 2 x 3, 8 = 2 x 2 x 2. The LCM = 2^3 x 3 = 24.",
      "nl": "Ontbind: 6 = 2 x 3, 8 = 2 x 2 x 2. Het KGV = 2^3 x 3 = 24."
    }
  },
  {
    "id": "N2_s_19", "category": "N2", "level": 2,
    "text": {
      "fr": "Quel est le PPCM de 9 et 12 ?",
      "en": "What is the LCM of 9 and 12?",
      "nl": "Wat is het KGV van 9 en 12?"
    },
    "answer": 36, "tolerance": 0,
    "hint": {
      "fr": "9 = 3 x 3 et 12 = 2 x 2 x 3. Le PPCM = 2^2 x 3^2 = 36.",
      "en": "9 = 3 x 3 and 12 = 2 x 2 x 3. The LCM = 2^2 x 3^2 = 36.",
      "nl": "9 = 3 x 3 en 12 = 2 x 2 x 3. Het KGV = 2^2 x 3^2 = 36."
    }
  },
  {
    "id": "N2_s_20", "category": "N2", "level": 2,
    "text": {
      "fr": "Si a = 4 et b = -2, calcule : a + 3b",
      "en": "If a = 4 and b = -2, calculate: a + 3b",
      "nl": "Als a = 4 en b = -2, bereken: a + 3b"
    },
    "answer": -2, "tolerance": 0,
    "hint": {
      "fr": "Remplace : 4 + 3 x (-2) = 4 - 6.",
      "en": "Replace: 4 + 3 x (-2) = 4 - 6.",
      "nl": "Vervang: 4 + 3 x (-2) = 4 - 6."
    }
  },
  {
    "id": "N2_s_21", "category": "N2", "level": 2,
    "text": {
      "fr": "Si a = 4 et b = -2, calcule : a^2 - 3b",
      "en": "If a = 4 and b = -2, calculate: a^2 - 3b",
      "nl": "Als a = 4 en b = -2, bereken: a^2 - 3b"
    },
    "answer": 22, "tolerance": 0,
    "hint": {
      "fr": "a^2 = 16. Puis 16 - 3 x (-2) = 16 + 6 = 22.",
      "en": "a^2 = 16. Then 16 - 3 x (-2) = 16 + 6 = 22.",
      "nl": "a^2 = 16. Dan 16 - 3 x (-2) = 16 + 6 = 22."
    }
  },
  {
    "id": "N2_s_22", "category": "N2", "level": 2,
    "text": {
      "fr": "Quel est le PGCD de 28 et 42 ?",
      "en": "What is the GCD of 28 and 42?",
      "nl": "Wat is de GGD van 28 en 42?"
    },
    "answer": 14, "tolerance": 0,
    "hint": {
      "fr": "28 = 2 x 2 x 7 et 42 = 2 x 3 x 7. PGCD = 2 x 7 = 14.",
      "en": "28 = 2 x 2 x 7 and 42 = 2 x 3 x 7. GCD = 2 x 7 = 14.",
      "nl": "28 = 2 x 2 x 7 en 42 = 2 x 3 x 7. GGD = 2 x 7 = 14."
    }
  },
  {
    "id": "N2_s_23", "category": "N2", "level": 2,
    "text": {
      "fr": "Combien y a-t-il de diviseurs de 20 ?",
      "en": "How many divisors does 20 have?",
      "nl": "Hoeveel delers heeft 20?"
    },
    "answer": 6, "tolerance": 0,
    "hint": {
      "fr": "Les diviseurs de 20 : 1, 2, 4, 5, 10, 20.",
      "en": "The divisors of 20: 1, 2, 4, 5, 10, 20.",
      "nl": "De delers van 20: 1, 2, 4, 5, 10, 20."
    }
  },
  {
    "id": "N2_s_24", "category": "N2", "level": 2,
    "text": {
      "fr": "Quel est le PPCM de 10 et 15 ?",
      "en": "What is the LCM of 10 and 15?",
      "nl": "Wat is het KGV van 10 en 15?"
    },
    "answer": 30, "tolerance": 0,
    "hint": {
      "fr": "10 = 2 x 5 et 15 = 3 x 5. PPCM = 2 x 3 x 5 = 30.",
      "en": "10 = 2 x 5 and 15 = 3 x 5. LCM = 2 x 3 x 5 = 30.",
      "nl": "10 = 2 x 5 en 15 = 3 x 5. KGV = 2 x 3 x 5 = 30."
    }
  },
  {
    "id": "N2_s_25", "category": "N2", "level": 2,
    "text": {
      "fr": "Si x = 5, calcule : x^2 - 10",
      "en": "If x = 5, calculate: x^2 - 10",
      "nl": "Als x = 5, bereken: x^2 - 10"
    },
    "answer": 15, "tolerance": 0,
    "hint": {
      "fr": "x^2 = 25. Puis 25 - 10 = 15.",
      "en": "x^2 = 25. Then 25 - 10 = 15.",
      "nl": "x^2 = 25. Dan 25 - 10 = 15."
    }
  },
  {
    "id": "N2_s_26", "category": "N2", "level": 2,
    "text": {
      "fr": "Quel est le reste de 100 divise par 13 ?",
      "en": "What is the remainder of 100 divided by 13?",
      "nl": "Wat is de rest van 100 gedeeld door 13?"
    },
    "answer": 9, "tolerance": 0,
    "hint": {
      "fr": "100 = 7 x 13 + reste. 7 x 13 = 91, donc reste = 100 - 91 = 9.",
      "en": "100 = 7 x 13 + remainder. 7 x 13 = 91, so remainder = 100 - 91 = 9.",
      "nl": "100 = 7 x 13 + rest. 7 x 13 = 91, dus rest = 100 - 91 = 9."
    }
  },
  {
    "id": "N2_s_27", "category": "N2", "level": 2,
    "text": {
      "fr": "Combien y a-t-il de nombres premiers entre 1 et 10 ?",
      "en": "How many prime numbers are there between 1 and 10?",
      "nl": "Hoeveel priemgetallen zijn er tussen 1 en 10?"
    },
    "answer": 4, "tolerance": 0,
    "hint": {
      "fr": "Les nombres premiers entre 1 et 10 : 2, 3, 5, 7.",
      "en": "The prime numbers between 1 and 10: 2, 3, 5, 7.",
      "nl": "De priemgetallen tussen 1 en 10: 2, 3, 5, 7."
    }
  },
  {
    "id": "N2_s_28", "category": "N2", "level": 2,
    "text": {
      "fr": "Quel est le PGCD de 45 et 60 ?",
      "en": "What is the GCD of 45 and 60?",
      "nl": "Wat is de GGD van 45 en 60?"
    },
    "answer": 15, "tolerance": 0,
    "hint": {
      "fr": "45 = 3 x 3 x 5 et 60 = 2 x 2 x 3 x 5. PGCD = 3 x 5 = 15.",
      "en": "45 = 3 x 3 x 5 and 60 = 2 x 2 x 3 x 5. GCD = 3 x 5 = 15.",
      "nl": "45 = 3 x 3 x 5 en 60 = 2 x 2 x 3 x 5. GGD = 3 x 5 = 15."
    }
  },
  {
    "id": "N2_s_29", "category": "N2", "level": 2,
    "text": {
      "fr": "Si a = 3, calcule : a^2 + 2a + 1",
      "en": "If a = 3, calculate: a^2 + 2a + 1",
      "nl": "Als a = 3, bereken: a^2 + 2a + 1"
    },
    "answer": 16, "tolerance": 0,
    "hint": {
      "fr": "9 + 6 + 1 = 16. Remarque : c'est (a + 1)^2 = 4^2 = 16.",
      "en": "9 + 6 + 1 = 16. Note: this is (a + 1)^2 = 4^2 = 16.",
      "nl": "9 + 6 + 1 = 16. Merk op: dit is (a + 1)^2 = 4^2 = 16."
    }
  },
  {
    "id": "N2_s_30", "category": "N2", "level": 2,
    "text": {
      "fr": "Quel est le PPCM de 8 et 12 ?",
      "en": "What is the LCM of 8 and 12?",
      "nl": "Wat is het KGV van 8 en 12?"
    },
    "answer": 24, "tolerance": 0,
    "hint": {
      "fr": "8 = 2^3 et 12 = 2^2 x 3. PPCM = 2^3 x 3 = 24.",
      "en": "8 = 2^3 and 12 = 2^2 x 3. LCM = 2^3 x 3 = 24.",
      "nl": "8 = 2^3 en 12 = 2^2 x 3. KGV = 2^3 x 3 = 24."
    }
  },
  {
    "id": "N2_s_31", "category": "N2", "level": 2,
    "text": {
      "fr": "Si x = -1, calcule : 3x + 7",
      "en": "If x = -1, calculate: 3x + 7",
      "nl": "Als x = -1, bereken: 3x + 7"
    },
    "answer": 4, "tolerance": 0,
    "hint": {
      "fr": "3 x (-1) + 7 = -3 + 7 = 4.",
      "en": "3 x (-1) + 7 = -3 + 7 = 4.",
      "nl": "3 x (-1) + 7 = -3 + 7 = 4."
    }
  },
  {
    "id": "N2_s_32", "category": "N2", "level": 2,
    "text": {
      "fr": "Combien y a-t-il de diviseurs de 24 ?",
      "en": "How many divisors does 24 have?",
      "nl": "Hoeveel delers heeft 24?"
    },
    "answer": 8, "tolerance": 0,
    "hint": {
      "fr": "Les diviseurs de 24 : 1, 2, 3, 4, 6, 8, 12, 24.",
      "en": "The divisors of 24: 1, 2, 3, 4, 6, 8, 12, 24.",
      "nl": "De delers van 24: 1, 2, 3, 4, 6, 8, 12, 24."
    }
  },
  {
    "id": "N2_s_33", "category": "N2", "level": 2,
    "text": {
      "fr": "Quel est le PPCM de 14 et 21 ?",
      "en": "What is the LCM of 14 and 21?",
      "nl": "Wat is het KGV van 14 en 21?"
    },
    "answer": 42, "tolerance": 0,
    "hint": {
      "fr": "14 = 2 x 7 et 21 = 3 x 7. PPCM = 2 x 3 x 7 = 42.",
      "en": "14 = 2 x 7 and 21 = 3 x 7. LCM = 2 x 3 x 7 = 42.",
      "nl": "14 = 2 x 7 en 21 = 3 x 7. KGV = 2 x 3 x 7 = 42."
    }
  },
  {
    "id": "N2_s_34", "category": "N2", "level": 2,
    "text": {
      "fr": "Quel est le reste de 83 divise par 11 ?",
      "en": "What is the remainder of 83 divided by 11?",
      "nl": "Wat is de rest van 83 gedeeld door 11?"
    },
    "answer": 6, "tolerance": 0,
    "hint": {
      "fr": "83 = 7 x 11 + reste. 7 x 11 = 77, donc reste = 83 - 77 = 6.",
      "en": "83 = 7 x 11 + remainder. 7 x 11 = 77, so remainder = 83 - 77 = 6.",
      "nl": "83 = 7 x 11 + rest. 7 x 11 = 77, dus rest = 83 - 77 = 6."
    }
  },

  // ===========================================================================
  // LEVEL 3 - Complex algebraic evaluation, factoring, primes (16 questions)
  // ===========================================================================
  {
    "id": "N2_s_35", "category": "N2", "level": 3,
    "text": {
      "fr": "Si x = -3, calcule : x^2 + 2x - 1",
      "en": "If x = -3, calculate: x^2 + 2x - 1",
      "nl": "Als x = -3, bereken: x^2 + 2x - 1"
    },
    "answer": 2, "tolerance": 0,
    "hint": {
      "fr": "(-3)^2 + 2 x (-3) - 1 = 9 - 6 - 1 = 2.",
      "en": "(-3)^2 + 2 x (-3) - 1 = 9 - 6 - 1 = 2.",
      "nl": "(-3)^2 + 2 x (-3) - 1 = 9 - 6 - 1 = 2."
    }
  },
  {
    "id": "N2_s_36", "category": "N2", "level": 3,
    "text": {
      "fr": "Quel est le PGCD de 36 et 48 ?",
      "en": "What is the GCD of 36 and 48?",
      "nl": "Wat is de GGD van 36 en 48?"
    },
    "answer": 12, "tolerance": 0,
    "hint": {
      "fr": "36 = 2^2 x 3^2 et 48 = 2^4 x 3. PGCD = 2^2 x 3 = 12.",
      "en": "36 = 2^2 x 3^2 and 48 = 2^4 x 3. GCD = 2^2 x 3 = 12.",
      "nl": "36 = 2^2 x 3^2 en 48 = 2^4 x 3. GGD = 2^2 x 3 = 12."
    }
  },
  {
    "id": "N2_s_37", "category": "N2", "level": 3,
    "text": {
      "fr": "Combien y a-t-il de nombres premiers entre 1 et 20 ?",
      "en": "How many prime numbers are there between 1 and 20?",
      "nl": "Hoeveel priemgetallen zijn er tussen 1 en 20?"
    },
    "answer": 8, "tolerance": 0,
    "hint": {
      "fr": "Les nombres premiers entre 1 et 20 : 2, 3, 5, 7, 11, 13, 17, 19.",
      "en": "The prime numbers between 1 and 20: 2, 3, 5, 7, 11, 13, 17, 19.",
      "nl": "De priemgetallen tussen 1 en 20: 2, 3, 5, 7, 11, 13, 17, 19."
    }
  },
  {
    "id": "N2_s_38", "category": "N2", "level": 3,
    "text": {
      "fr": "Si a = 2 et b = -3, calcule : a^2 - b^2",
      "en": "If a = 2 and b = -3, calculate: a^2 - b^2",
      "nl": "Als a = 2 en b = -3, bereken: a^2 - b^2"
    },
    "answer": -5, "tolerance": 0,
    "hint": {
      "fr": "a^2 = 4 et b^2 = 9. Donc 4 - 9 = -5.",
      "en": "a^2 = 4 and b^2 = 9. So 4 - 9 = -5.",
      "nl": "a^2 = 4 en b^2 = 9. Dus 4 - 9 = -5."
    }
  },
  {
    "id": "N2_s_39", "category": "N2", "level": 3,
    "text": {
      "fr": "Quel est le PPCM de 12 et 18 ?",
      "en": "What is the LCM of 12 and 18?",
      "nl": "Wat is het KGV van 12 en 18?"
    },
    "answer": 36, "tolerance": 0,
    "hint": {
      "fr": "12 = 2^2 x 3 et 18 = 2 x 3^2. PPCM = 2^2 x 3^2 = 36.",
      "en": "12 = 2^2 x 3 and 18 = 2 x 3^2. LCM = 2^2 x 3^2 = 36.",
      "nl": "12 = 2^2 x 3 en 18 = 2 x 3^2. KGV = 2^2 x 3^2 = 36."
    }
  },
  {
    "id": "N2_s_40", "category": "N2", "level": 3,
    "text": {
      "fr": "Si x = -2, calcule : 2x^2 - 3x + 4",
      "en": "If x = -2, calculate: 2x^2 - 3x + 4",
      "nl": "Als x = -2, bereken: 2x^2 - 3x + 4"
    },
    "answer": 18, "tolerance": 0,
    "hint": {
      "fr": "2 x (-2)^2 - 3 x (-2) + 4 = 2 x 4 + 6 + 4 = 8 + 6 + 4 = 18.",
      "en": "2 x (-2)^2 - 3 x (-2) + 4 = 2 x 4 + 6 + 4 = 8 + 6 + 4 = 18.",
      "nl": "2 x (-2)^2 - 3 x (-2) + 4 = 2 x 4 + 6 + 4 = 8 + 6 + 4 = 18."
    }
  },
  {
    "id": "N2_s_41", "category": "N2", "level": 3,
    "text": {
      "fr": "Combien y a-t-il de diviseurs de 36 ?",
      "en": "How many divisors does 36 have?",
      "nl": "Hoeveel delers heeft 36?"
    },
    "answer": 9, "tolerance": 0,
    "hint": {
      "fr": "Les diviseurs de 36 : 1, 2, 3, 4, 6, 9, 12, 18, 36.",
      "en": "The divisors of 36: 1, 2, 3, 4, 6, 9, 12, 18, 36.",
      "nl": "De delers van 36: 1, 2, 3, 4, 6, 9, 12, 18, 36."
    }
  },
  {
    "id": "N2_s_42", "category": "N2", "level": 3,
    "text": {
      "fr": "Quel est le PGCD de 54 et 72 ?",
      "en": "What is the GCD of 54 and 72?",
      "nl": "Wat is de GGD van 54 en 72?"
    },
    "answer": 18, "tolerance": 0,
    "hint": {
      "fr": "54 = 2 x 3^3 et 72 = 2^3 x 3^2. PGCD = 2 x 3^2 = 18.",
      "en": "54 = 2 x 3^3 and 72 = 2^3 x 3^2. GCD = 2 x 3^2 = 18.",
      "nl": "54 = 2 x 3^3 en 72 = 2^3 x 3^2. GGD = 2 x 3^2 = 18."
    }
  },
  {
    "id": "N2_s_43", "category": "N2", "level": 3,
    "text": {
      "fr": "Si a = 3 et b = 5, calcule : 2ab - a^2",
      "en": "If a = 3 and b = 5, calculate: 2ab - a^2",
      "nl": "Als a = 3 en b = 5, bereken: 2ab - a^2"
    },
    "answer": 21, "tolerance": 0,
    "hint": {
      "fr": "2 x 3 x 5 - 3^2 = 30 - 9 = 21.",
      "en": "2 x 3 x 5 - 3^2 = 30 - 9 = 21.",
      "nl": "2 x 3 x 5 - 3^2 = 30 - 9 = 21."
    }
  },
  {
    "id": "N2_s_44", "category": "N2", "level": 3,
    "text": {
      "fr": "Quel est le PPCM de 15 et 20 ?",
      "en": "What is the LCM of 15 and 20?",
      "nl": "Wat is het KGV van 15 en 20?"
    },
    "answer": 60, "tolerance": 0,
    "hint": {
      "fr": "15 = 3 x 5 et 20 = 2^2 x 5. PPCM = 2^2 x 3 x 5 = 60.",
      "en": "15 = 3 x 5 and 20 = 2^2 x 5. LCM = 2^2 x 3 x 5 = 60.",
      "nl": "15 = 3 x 5 en 20 = 2^2 x 5. KGV = 2^2 x 3 x 5 = 60."
    }
  },
  {
    "id": "N2_s_45", "category": "N2", "level": 3,
    "text": {
      "fr": "Si x = 4, calcule : x^2 + 2x - 1",
      "en": "If x = 4, calculate: x^2 + 2x - 1",
      "nl": "Als x = 4, bereken: x^2 + 2x - 1"
    },
    "answer": 23, "tolerance": 0,
    "hint": {
      "fr": "4^2 + 2 x 4 - 1 = 16 + 8 - 1 = 23.",
      "en": "4^2 + 2 x 4 - 1 = 16 + 8 - 1 = 23.",
      "nl": "4^2 + 2 x 4 - 1 = 16 + 8 - 1 = 23."
    }
  },
  {
    "id": "N2_s_46", "category": "N2", "level": 3,
    "text": {
      "fr": "Combien y a-t-il de nombres premiers entre 1 et 30 ?",
      "en": "How many prime numbers are there between 1 and 30?",
      "nl": "Hoeveel priemgetallen zijn er tussen 1 en 30?"
    },
    "answer": 10, "tolerance": 0,
    "hint": {
      "fr": "Les nombres premiers entre 1 et 30 : 2, 3, 5, 7, 11, 13, 17, 19, 23, 29.",
      "en": "The prime numbers between 1 and 30: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29.",
      "nl": "De priemgetallen tussen 1 en 30: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29."
    }
  },
  {
    "id": "N2_s_47", "category": "N2", "level": 3,
    "text": {
      "fr": "Quel est le PGCD de 48 et 80 ?",
      "en": "What is the GCD of 48 and 80?",
      "nl": "Wat is de GGD van 48 en 80?"
    },
    "answer": 16, "tolerance": 0,
    "hint": {
      "fr": "48 = 2^4 x 3 et 80 = 2^4 x 5. PGCD = 2^4 = 16.",
      "en": "48 = 2^4 x 3 and 80 = 2^4 x 5. GCD = 2^4 = 16.",
      "nl": "48 = 2^4 x 3 en 80 = 2^4 x 5. GGD = 2^4 = 16."
    }
  },
  {
    "id": "N2_s_48", "category": "N2", "level": 3,
    "text": {
      "fr": "Si x = -1 et y = 3, calcule : x^2 + 2xy + y^2",
      "en": "If x = -1 and y = 3, calculate: x^2 + 2xy + y^2",
      "nl": "Als x = -1 en y = 3, bereken: x^2 + 2xy + y^2"
    },
    "answer": 4, "tolerance": 0,
    "hint": {
      "fr": "C'est (x + y)^2 = (-1 + 3)^2 = 2^2 = 4.",
      "en": "This is (x + y)^2 = (-1 + 3)^2 = 2^2 = 4.",
      "nl": "Dit is (x + y)^2 = (-1 + 3)^2 = 2^2 = 4."
    }
  },
  {
    "id": "N2_s_49", "category": "N2", "level": 3,
    "text": {
      "fr": "Combien y a-t-il de diviseurs de 48 ?",
      "en": "How many divisors does 48 have?",
      "nl": "Hoeveel delers heeft 48?"
    },
    "answer": 10, "tolerance": 0,
    "hint": {
      "fr": "Les diviseurs de 48 : 1, 2, 3, 4, 6, 8, 12, 16, 24, 48.",
      "en": "The divisors of 48: 1, 2, 3, 4, 6, 8, 12, 16, 24, 48.",
      "nl": "De delers van 48: 1, 2, 3, 4, 6, 8, 12, 16, 24, 48."
    }
  },
  {
    "id": "N2_s_50", "category": "N2", "level": 3,
    "text": {
      "fr": "Si a = -2, calcule : a^3 + 3a^2 - a + 2",
      "en": "If a = -2, calculate: a^3 + 3a^2 - a + 2",
      "nl": "Als a = -2, bereken: a^3 + 3a^2 - a + 2"
    },
    "answer": 8, "tolerance": 0,
    "hint": {
      "fr": "(-2)^3 + 3 x (-2)^2 - (-2) + 2 = -8 + 12 + 2 + 2 = 8.",
      "en": "(-2)^3 + 3 x (-2)^2 - (-2) + 2 = -8 + 12 + 2 + 2 = 8.",
      "nl": "(-2)^3 + 3 x (-2)^2 - (-2) + 2 = -8 + 12 + 2 + 2 = 8."
    }
  },

  // ===========================================================================
  // LEVEL 1 - Additional questions (N2_s_51 - N2_s_71) — 21 questions
  // ===========================================================================
  {
    "id": "N2_s_51", "category": "N2", "level": 1,
    "text": {
      "fr": "Quel est le reste de 31 divise par 7 ?",
      "en": "What is the remainder of 31 divided by 7?",
      "nl": "Wat is de rest van 31 gedeeld door 7?"
    },
    "answer": 3, "tolerance": 0,
    "hint": {
      "fr": "31 = 4 x 7 + reste. 4 x 7 = 28, donc reste = 3.",
      "en": "31 = 4 x 7 + remainder. 4 x 7 = 28, so remainder = 3.",
      "nl": "31 = 4 x 7 + rest. 4 x 7 = 28, dus rest = 3."
    }
  },
  {
    "id": "N2_s_52", "category": "N2", "level": 1,
    "text": {
      "fr": "Quel est le reste de 43 divise par 9 ?",
      "en": "What is the remainder of 43 divided by 9?",
      "nl": "Wat is de rest van 43 gedeeld door 9?"
    },
    "answer": 7, "tolerance": 0,
    "hint": {
      "fr": "43 = 4 x 9 + reste. 4 x 9 = 36, donc reste = 7.",
      "en": "43 = 4 x 9 + remainder. 4 x 9 = 36, so remainder = 7.",
      "nl": "43 = 4 x 9 + rest. 4 x 9 = 36, dus rest = 7."
    }
  },
  {
    "id": "N2_s_53", "category": "N2", "level": 1,
    "text": {
      "fr": "Quel est le reste de 58 divise par 8 ?",
      "en": "What is the remainder of 58 divided by 8?",
      "nl": "Wat is de rest van 58 gedeeld door 8?"
    },
    "answer": 2, "tolerance": 0,
    "hint": {
      "fr": "58 = 7 x 8 + reste. 7 x 8 = 56, donc reste = 2.",
      "en": "58 = 7 x 8 + remainder. 7 x 8 = 56, so remainder = 2.",
      "nl": "58 = 7 x 8 + rest. 7 x 8 = 56, dus rest = 2."
    }
  },
  {
    "id": "N2_s_54", "category": "N2", "level": 1,
    "text": {
      "fr": "Quel est le PGCD de 14 et 21 ?",
      "en": "What is the GCD of 14 and 21?",
      "nl": "Wat is de GGD van 14 en 21?"
    },
    "answer": 7, "tolerance": 0,
    "hint": {
      "fr": "Les diviseurs de 14 : 1, 2, 7, 14. Les diviseurs de 21 : 1, 3, 7, 21.",
      "en": "The divisors of 14: 1, 2, 7, 14. The divisors of 21: 1, 3, 7, 21.",
      "nl": "De delers van 14: 1, 2, 7, 14. De delers van 21: 1, 3, 7, 21."
    }
  },
  {
    "id": "N2_s_55", "category": "N2", "level": 1,
    "text": {
      "fr": "Quel est le PGCD de 16 et 20 ?",
      "en": "What is the GCD of 16 and 20?",
      "nl": "Wat is de GGD van 16 en 20?"
    },
    "answer": 4, "tolerance": 0,
    "hint": {
      "fr": "16 = 2^4 et 20 = 2^2 x 5. PGCD = 2^2 = 4.",
      "en": "16 = 2^4 and 20 = 2^2 x 5. GCD = 2^2 = 4.",
      "nl": "16 = 2^4 en 20 = 2^2 x 5. GGD = 2^2 = 4."
    }
  },
  {
    "id": "N2_s_56", "category": "N2", "level": 1,
    "text": {
      "fr": "Quel est le PGCD de 9 et 12 ?",
      "en": "What is the GCD of 9 and 12?",
      "nl": "Wat is de GGD van 9 en 12?"
    },
    "answer": 3, "tolerance": 0,
    "hint": {
      "fr": "Les diviseurs de 9 : 1, 3, 9. Les diviseurs de 12 : 1, 2, 3, 4, 6, 12.",
      "en": "The divisors of 9: 1, 3, 9. The divisors of 12: 1, 2, 3, 4, 6, 12.",
      "nl": "De delers van 9: 1, 3, 9. De delers van 12: 1, 2, 3, 4, 6, 12."
    }
  },
  {
    "id": "N2_s_57", "category": "N2", "level": 1,
    "text": {
      "fr": "Si a = 6, calcule : 4a - 3",
      "en": "If a = 6, calculate: 4a - 3",
      "nl": "Als a = 6, bereken: 4a - 3"
    },
    "answer": 21, "tolerance": 0,
    "hint": {
      "fr": "Remplace a par 6 : 4 x 6 - 3 = 24 - 3.",
      "en": "Replace a with 6: 4 x 6 - 3 = 24 - 3.",
      "nl": "Vervang a door 6: 4 x 6 - 3 = 24 - 3."
    }
  },
  {
    "id": "N2_s_58", "category": "N2", "level": 1,
    "text": {
      "fr": "Si x = 7, calcule : 2x + 3",
      "en": "If x = 7, calculate: 2x + 3",
      "nl": "Als x = 7, bereken: 2x + 3"
    },
    "answer": 17, "tolerance": 0,
    "hint": {
      "fr": "Remplace x par 7 : 2 x 7 + 3 = 14 + 3.",
      "en": "Replace x with 7: 2 x 7 + 3 = 14 + 3.",
      "nl": "Vervang x door 7: 2 x 7 + 3 = 14 + 3."
    }
  },
  {
    "id": "N2_s_59", "category": "N2", "level": 1,
    "text": {
      "fr": "Si a = 4, calcule : 3a + 2",
      "en": "If a = 4, calculate: 3a + 2",
      "nl": "Als a = 4, bereken: 3a + 2"
    },
    "answer": 14, "tolerance": 0,
    "hint": {
      "fr": "Remplace a par 4 : 3 x 4 + 2 = 12 + 2.",
      "en": "Replace a with 4: 3 x 4 + 2 = 12 + 2.",
      "nl": "Vervang a door 4: 3 x 4 + 2 = 12 + 2."
    }
  },
  {
    "id": "N2_s_60", "category": "N2", "level": 1,
    "text": {
      "fr": "Quel est le PPCM de 2 et 7 ?",
      "en": "What is the LCM of 2 and 7?",
      "nl": "Wat is het KGV van 2 en 7?"
    },
    "answer": 14, "tolerance": 0,
    "hint": {
      "fr": "2 et 7 sont premiers entre eux, donc PPCM = 2 x 7 = 14.",
      "en": "2 and 7 are coprime, so LCM = 2 x 7 = 14.",
      "nl": "2 en 7 zijn onderling priem, dus KGV = 2 x 7 = 14."
    }
  },
  {
    "id": "N2_s_61", "category": "N2", "level": 1,
    "text": {
      "fr": "Quel est le PPCM de 3 et 4 ?",
      "en": "What is the LCM of 3 and 4?",
      "nl": "Wat is het KGV van 3 en 4?"
    },
    "answer": 12, "tolerance": 0,
    "hint": {
      "fr": "3 et 4 sont premiers entre eux, donc PPCM = 3 x 4 = 12.",
      "en": "3 and 4 are coprime, so LCM = 3 x 4 = 12.",
      "nl": "3 en 4 zijn onderling priem, dus KGV = 3 x 4 = 12."
    }
  },
  {
    "id": "N2_s_62", "category": "N2", "level": 1,
    "text": {
      "fr": "Quel est le PPCM de 5 et 6 ?",
      "en": "What is the LCM of 5 and 6?",
      "nl": "Wat is het KGV van 5 en 6?"
    },
    "answer": 30, "tolerance": 0,
    "hint": {
      "fr": "5 et 6 sont premiers entre eux, donc PPCM = 5 x 6 = 30.",
      "en": "5 and 6 are coprime, so LCM = 5 x 6 = 30.",
      "nl": "5 en 6 zijn onderling priem, dus KGV = 5 x 6 = 30."
    }
  },
  {
    "id": "N2_s_63", "category": "N2", "level": 1,
    "text": {
      "fr": "Combien y a-t-il de diviseurs de 10 ?",
      "en": "How many divisors does 10 have?",
      "nl": "Hoeveel delers heeft 10?"
    },
    "answer": 4, "tolerance": 0,
    "hint": {
      "fr": "Les diviseurs de 10 : 1, 2, 5, 10.",
      "en": "The divisors of 10: 1, 2, 5, 10.",
      "nl": "De delers van 10: 1, 2, 5, 10."
    }
  },
  {
    "id": "N2_s_64", "category": "N2", "level": 1,
    "text": {
      "fr": "Combien y a-t-il de diviseurs de 15 ?",
      "en": "How many divisors does 15 have?",
      "nl": "Hoeveel delers heeft 15?"
    },
    "answer": 4, "tolerance": 0,
    "hint": {
      "fr": "Les diviseurs de 15 : 1, 3, 5, 15.",
      "en": "The divisors of 15: 1, 3, 5, 15.",
      "nl": "De delers van 15: 1, 3, 5, 15."
    }
  },
  {
    "id": "N2_s_65", "category": "N2", "level": 1,
    "text": {
      "fr": "Quel est le reste de 19 divise par 3 ?",
      "en": "What is the remainder of 19 divided by 3?",
      "nl": "Wat is de rest van 19 gedeeld door 3?"
    },
    "answer": 1, "tolerance": 0,
    "hint": {
      "fr": "19 = 6 x 3 + reste. 6 x 3 = 18, donc reste = 1.",
      "en": "19 = 6 x 3 + remainder. 6 x 3 = 18, so remainder = 1.",
      "nl": "19 = 6 x 3 + rest. 6 x 3 = 18, dus rest = 1."
    }
  },
  {
    "id": "N2_s_66", "category": "N2", "level": 1,
    "text": {
      "fr": "Si x = 10, calcule : x - 4",
      "en": "If x = 10, calculate: x - 4",
      "nl": "Als x = 10, bereken: x - 4"
    },
    "answer": 6, "tolerance": 0,
    "hint": {
      "fr": "Remplace x par 10 : 10 - 4 = 6.",
      "en": "Replace x with 10: 10 - 4 = 6.",
      "nl": "Vervang x door 10: 10 - 4 = 6."
    }
  },
  {
    "id": "N2_s_67", "category": "N2", "level": 1,
    "text": {
      "fr": "Quel est le PGCD de 20 et 30 ?",
      "en": "What is the GCD of 20 and 30?",
      "nl": "Wat is de GGD van 20 en 30?"
    },
    "answer": 10, "tolerance": 0,
    "hint": {
      "fr": "20 = 2^2 x 5 et 30 = 2 x 3 x 5. PGCD = 2 x 5 = 10.",
      "en": "20 = 2^2 x 5 and 30 = 2 x 3 x 5. GCD = 2 x 5 = 10.",
      "nl": "20 = 2^2 x 5 en 30 = 2 x 3 x 5. GGD = 2 x 5 = 10."
    }
  },
  {
    "id": "N2_s_68", "category": "N2", "level": 1,
    "text": {
      "fr": "Quel est le reste de 47 divise par 10 ?",
      "en": "What is the remainder of 47 divided by 10?",
      "nl": "Wat is de rest van 47 gedeeld door 10?"
    },
    "answer": 7, "tolerance": 0,
    "hint": {
      "fr": "47 = 4 x 10 + reste. 4 x 10 = 40, donc reste = 7.",
      "en": "47 = 4 x 10 + remainder. 4 x 10 = 40, so remainder = 7.",
      "nl": "47 = 4 x 10 + rest. 4 x 10 = 40, dus rest = 7."
    }
  },
  {
    "id": "N2_s_69", "category": "N2", "level": 1,
    "text": {
      "fr": "Si a = 8, calcule : 2a - 9",
      "en": "If a = 8, calculate: 2a - 9",
      "nl": "Als a = 8, bereken: 2a - 9"
    },
    "answer": 7, "tolerance": 0,
    "hint": {
      "fr": "Remplace a par 8 : 2 x 8 - 9 = 16 - 9.",
      "en": "Replace a with 8: 2 x 8 - 9 = 16 - 9.",
      "nl": "Vervang a door 8: 2 x 8 - 9 = 16 - 9."
    }
  },
  {
    "id": "N2_s_70", "category": "N2", "level": 1,
    "text": {
      "fr": "Combien y a-t-il de diviseurs de 8 ?",
      "en": "How many divisors does 8 have?",
      "nl": "Hoeveel delers heeft 8?"
    },
    "answer": 4, "tolerance": 0,
    "hint": {
      "fr": "Les diviseurs de 8 : 1, 2, 4, 8.",
      "en": "The divisors of 8: 1, 2, 4, 8.",
      "nl": "De delers van 8: 1, 2, 4, 8."
    }
  },
  {
    "id": "N2_s_71", "category": "N2", "level": 1,
    "text": {
      "fr": "Quel est le PPCM de 6 et 9 ?",
      "en": "What is the LCM of 6 and 9?",
      "nl": "Wat is het KGV van 6 en 9?"
    },
    "answer": 18, "tolerance": 0,
    "hint": {
      "fr": "6 = 2 x 3 et 9 = 3^2. PPCM = 2 x 3^2 = 18.",
      "en": "6 = 2 x 3 and 9 = 3^2. LCM = 2 x 3^2 = 18.",
      "nl": "6 = 2 x 3 en 9 = 3^2. KGV = 2 x 3^2 = 18."
    }
  },

  // ===========================================================================
  // LEVEL 2 - Additional questions (N2_s_72 - N2_s_92) — 21 questions
  // ===========================================================================
  {
    "id": "N2_s_72", "category": "N2", "level": 2,
    "text": {
      "fr": "Quel est le PGCD de 24 et 36 ?",
      "en": "What is the GCD of 24 and 36?",
      "nl": "Wat is de GGD van 24 en 36?"
    },
    "answer": 12, "tolerance": 0,
    "hint": {
      "fr": "24 = 2^3 x 3 et 36 = 2^2 x 3^2. PGCD = 2^2 x 3 = 12.",
      "en": "24 = 2^3 x 3 and 36 = 2^2 x 3^2. GCD = 2^2 x 3 = 12.",
      "nl": "24 = 2^3 x 3 en 36 = 2^2 x 3^2. GGD = 2^2 x 3 = 12."
    }
  },
  {
    "id": "N2_s_73", "category": "N2", "level": 2,
    "text": {
      "fr": "Quel est le PGCD de 30 et 45 ?",
      "en": "What is the GCD of 30 and 45?",
      "nl": "Wat is de GGD van 30 en 45?"
    },
    "answer": 15, "tolerance": 0,
    "hint": {
      "fr": "30 = 2 x 3 x 5 et 45 = 3^2 x 5. PGCD = 3 x 5 = 15.",
      "en": "30 = 2 x 3 x 5 and 45 = 3^2 x 5. GCD = 3 x 5 = 15.",
      "nl": "30 = 2 x 3 x 5 en 45 = 3^2 x 5. GGD = 3 x 5 = 15."
    }
  },
  {
    "id": "N2_s_74", "category": "N2", "level": 2,
    "text": {
      "fr": "Quel est le PPCM de 4 et 10 ?",
      "en": "What is the LCM of 4 and 10?",
      "nl": "Wat is het KGV van 4 en 10?"
    },
    "answer": 20, "tolerance": 0,
    "hint": {
      "fr": "4 = 2^2 et 10 = 2 x 5. PPCM = 2^2 x 5 = 20.",
      "en": "4 = 2^2 and 10 = 2 x 5. LCM = 2^2 x 5 = 20.",
      "nl": "4 = 2^2 en 10 = 2 x 5. KGV = 2^2 x 5 = 20."
    }
  },
  {
    "id": "N2_s_75", "category": "N2", "level": 2,
    "text": {
      "fr": "Quel est le PPCM de 12 et 16 ?",
      "en": "What is the LCM of 12 and 16?",
      "nl": "Wat is het KGV van 12 en 16?"
    },
    "answer": 48, "tolerance": 0,
    "hint": {
      "fr": "12 = 2^2 x 3 et 16 = 2^4. PPCM = 2^4 x 3 = 48.",
      "en": "12 = 2^2 x 3 and 16 = 2^4. LCM = 2^4 x 3 = 48.",
      "nl": "12 = 2^2 x 3 en 16 = 2^4. KGV = 2^4 x 3 = 48."
    }
  },
  {
    "id": "N2_s_76", "category": "N2", "level": 2,
    "text": {
      "fr": "Si a = 3 et b = 4, calcule : 2a + 3b",
      "en": "If a = 3 and b = 4, calculate: 2a + 3b",
      "nl": "Als a = 3 en b = 4, bereken: 2a + 3b"
    },
    "answer": 18, "tolerance": 0,
    "hint": {
      "fr": "2 x 3 + 3 x 4 = 6 + 12 = 18.",
      "en": "2 x 3 + 3 x 4 = 6 + 12 = 18.",
      "nl": "2 x 3 + 3 x 4 = 6 + 12 = 18."
    }
  },
  {
    "id": "N2_s_77", "category": "N2", "level": 2,
    "text": {
      "fr": "Si a = 5 et b = -1, calcule : a^2 + b",
      "en": "If a = 5 and b = -1, calculate: a^2 + b",
      "nl": "Als a = 5 en b = -1, bereken: a^2 + b"
    },
    "answer": 24, "tolerance": 0,
    "hint": {
      "fr": "a^2 = 25. Puis 25 + (-1) = 24.",
      "en": "a^2 = 25. Then 25 + (-1) = 24.",
      "nl": "a^2 = 25. Dan 25 + (-1) = 24."
    }
  },
  {
    "id": "N2_s_78", "category": "N2", "level": 2,
    "text": {
      "fr": "Si x = 6, calcule : x^2 - 20",
      "en": "If x = 6, calculate: x^2 - 20",
      "nl": "Als x = 6, bereken: x^2 - 20"
    },
    "answer": 16, "tolerance": 0,
    "hint": {
      "fr": "x^2 = 36. Puis 36 - 20 = 16.",
      "en": "x^2 = 36. Then 36 - 20 = 16.",
      "nl": "x^2 = 36. Dan 36 - 20 = 16."
    }
  },
  {
    "id": "N2_s_79", "category": "N2", "level": 2,
    "text": {
      "fr": "Quel est le reste de 75 divise par 11 ?",
      "en": "What is the remainder of 75 divided by 11?",
      "nl": "Wat is de rest van 75 gedeeld door 11?"
    },
    "answer": 9, "tolerance": 0,
    "hint": {
      "fr": "75 = 6 x 11 + reste. 6 x 11 = 66, donc reste = 75 - 66 = 9.",
      "en": "75 = 6 x 11 + remainder. 6 x 11 = 66, so remainder = 75 - 66 = 9.",
      "nl": "75 = 6 x 11 + rest. 6 x 11 = 66, dus rest = 75 - 66 = 9."
    }
  },
  {
    "id": "N2_s_80", "category": "N2", "level": 2,
    "text": {
      "fr": "Quel est le reste de 67 divise par 9 ?",
      "en": "What is the remainder of 67 divided by 9?",
      "nl": "Wat is de rest van 67 gedeeld door 9?"
    },
    "answer": 4, "tolerance": 0,
    "hint": {
      "fr": "67 = 7 x 9 + reste. 7 x 9 = 63, donc reste = 67 - 63 = 4.",
      "en": "67 = 7 x 9 + remainder. 7 x 9 = 63, so remainder = 67 - 63 = 4.",
      "nl": "67 = 7 x 9 + rest. 7 x 9 = 63, dus rest = 67 - 63 = 4."
    }
  },
  {
    "id": "N2_s_81", "category": "N2", "level": 2,
    "text": {
      "fr": "Combien y a-t-il de diviseurs de 30 ?",
      "en": "How many divisors does 30 have?",
      "nl": "Hoeveel delers heeft 30?"
    },
    "answer": 8, "tolerance": 0,
    "hint": {
      "fr": "Les diviseurs de 30 : 1, 2, 3, 5, 6, 10, 15, 30.",
      "en": "The divisors of 30: 1, 2, 3, 5, 6, 10, 15, 30.",
      "nl": "De delers van 30: 1, 2, 3, 5, 6, 10, 15, 30."
    }
  },
  {
    "id": "N2_s_82", "category": "N2", "level": 2,
    "text": {
      "fr": "Combien y a-t-il de diviseurs de 16 ?",
      "en": "How many divisors does 16 have?",
      "nl": "Hoeveel delers heeft 16?"
    },
    "answer": 5, "tolerance": 0,
    "hint": {
      "fr": "Les diviseurs de 16 : 1, 2, 4, 8, 16.",
      "en": "The divisors of 16: 1, 2, 4, 8, 16.",
      "nl": "De delers van 16: 1, 2, 4, 8, 16."
    }
  },
  {
    "id": "N2_s_83", "category": "N2", "level": 2,
    "text": {
      "fr": "Si x = -2, calcule : 4x + 11",
      "en": "If x = -2, calculate: 4x + 11",
      "nl": "Als x = -2, bereken: 4x + 11"
    },
    "answer": 3, "tolerance": 0,
    "hint": {
      "fr": "4 x (-2) + 11 = -8 + 11 = 3.",
      "en": "4 x (-2) + 11 = -8 + 11 = 3.",
      "nl": "4 x (-2) + 11 = -8 + 11 = 3."
    }
  },
  {
    "id": "N2_s_84", "category": "N2", "level": 2,
    "text": {
      "fr": "Quel est le PGCD de 18 et 30 ?",
      "en": "What is the GCD of 18 and 30?",
      "nl": "Wat is de GGD van 18 en 30?"
    },
    "answer": 6, "tolerance": 0,
    "hint": {
      "fr": "18 = 2 x 3^2 et 30 = 2 x 3 x 5. PGCD = 2 x 3 = 6.",
      "en": "18 = 2 x 3^2 and 30 = 2 x 3 x 5. GCD = 2 x 3 = 6.",
      "nl": "18 = 2 x 3^2 en 30 = 2 x 3 x 5. GGD = 2 x 3 = 6."
    }
  },
  {
    "id": "N2_s_85", "category": "N2", "level": 2,
    "text": {
      "fr": "Quel est le PPCM de 6 et 10 ?",
      "en": "What is the LCM of 6 and 10?",
      "nl": "Wat is het KGV van 6 en 10?"
    },
    "answer": 30, "tolerance": 0,
    "hint": {
      "fr": "6 = 2 x 3 et 10 = 2 x 5. PPCM = 2 x 3 x 5 = 30.",
      "en": "6 = 2 x 3 and 10 = 2 x 5. LCM = 2 x 3 x 5 = 30.",
      "nl": "6 = 2 x 3 en 10 = 2 x 5. KGV = 2 x 3 x 5 = 30."
    }
  },
  {
    "id": "N2_s_86", "category": "N2", "level": 2,
    "text": {
      "fr": "Si a = 2, calcule : a^2 + 3a - 4",
      "en": "If a = 2, calculate: a^2 + 3a - 4",
      "nl": "Als a = 2, bereken: a^2 + 3a - 4"
    },
    "answer": 6, "tolerance": 0,
    "hint": {
      "fr": "2^2 + 3 x 2 - 4 = 4 + 6 - 4 = 6.",
      "en": "2^2 + 3 x 2 - 4 = 4 + 6 - 4 = 6.",
      "nl": "2^2 + 3 x 2 - 4 = 4 + 6 - 4 = 6."
    }
  },
  {
    "id": "N2_s_87", "category": "N2", "level": 2,
    "text": {
      "fr": "Si a = 3 et b = 2, calcule : ab + a - b",
      "en": "If a = 3 and b = 2, calculate: ab + a - b",
      "nl": "Als a = 3 en b = 2, bereken: ab + a - b"
    },
    "answer": 7, "tolerance": 0,
    "hint": {
      "fr": "3 x 2 + 3 - 2 = 6 + 3 - 2 = 7.",
      "en": "3 x 2 + 3 - 2 = 6 + 3 - 2 = 7.",
      "nl": "3 x 2 + 3 - 2 = 6 + 3 - 2 = 7."
    }
  },
  {
    "id": "N2_s_88", "category": "N2", "level": 2,
    "text": {
      "fr": "Quel est le PGCD de 35 et 49 ?",
      "en": "What is the GCD of 35 and 49?",
      "nl": "Wat is de GGD van 35 en 49?"
    },
    "answer": 7, "tolerance": 0,
    "hint": {
      "fr": "35 = 5 x 7 et 49 = 7^2. PGCD = 7.",
      "en": "35 = 5 x 7 and 49 = 7^2. GCD = 7.",
      "nl": "35 = 5 x 7 en 49 = 7^2. GGD = 7."
    }
  },
  {
    "id": "N2_s_89", "category": "N2", "level": 2,
    "text": {
      "fr": "Quel est le PPCM de 9 et 15 ?",
      "en": "What is the LCM of 9 and 15?",
      "nl": "Wat is het KGV van 9 en 15?"
    },
    "answer": 45, "tolerance": 0,
    "hint": {
      "fr": "9 = 3^2 et 15 = 3 x 5. PPCM = 3^2 x 5 = 45.",
      "en": "9 = 3^2 and 15 = 3 x 5. LCM = 3^2 x 5 = 45.",
      "nl": "9 = 3^2 en 15 = 3 x 5. KGV = 3^2 x 5 = 45."
    }
  },
  {
    "id": "N2_s_90", "category": "N2", "level": 2,
    "text": {
      "fr": "Combien y a-t-il de nombres premiers entre 1 et 15 ?",
      "en": "How many prime numbers are there between 1 and 15?",
      "nl": "Hoeveel priemgetallen zijn er tussen 1 en 15?"
    },
    "answer": 6, "tolerance": 0,
    "hint": {
      "fr": "Les nombres premiers entre 1 et 15 : 2, 3, 5, 7, 11, 13.",
      "en": "The prime numbers between 1 and 15: 2, 3, 5, 7, 11, 13.",
      "nl": "De priemgetallen tussen 1 en 15: 2, 3, 5, 7, 11, 13."
    }
  },
  {
    "id": "N2_s_91", "category": "N2", "level": 2,
    "text": {
      "fr": "Si x = -3, calcule : 2x + 10",
      "en": "If x = -3, calculate: 2x + 10",
      "nl": "Als x = -3, bereken: 2x + 10"
    },
    "answer": 4, "tolerance": 0,
    "hint": {
      "fr": "2 x (-3) + 10 = -6 + 10 = 4.",
      "en": "2 x (-3) + 10 = -6 + 10 = 4.",
      "nl": "2 x (-3) + 10 = -6 + 10 = 4."
    }
  },
  {
    "id": "N2_s_92", "category": "N2", "level": 2,
    "text": {
      "fr": "Combien y a-t-il de diviseurs de 28 ?",
      "en": "How many divisors does 28 have?",
      "nl": "Hoeveel delers heeft 28?"
    },
    "answer": 6, "tolerance": 0,
    "hint": {
      "fr": "Les diviseurs de 28 : 1, 2, 4, 7, 14, 28.",
      "en": "The divisors of 28: 1, 2, 4, 7, 14, 28.",
      "nl": "De delers van 28: 1, 2, 4, 7, 14, 28."
    }
  },

  // ===========================================================================
  // LEVEL 3 - Additional questions (N2_s_93 - N2_s_112) — 20 questions
  // ===========================================================================
  {
    "id": "N2_s_93", "category": "N2", "level": 3,
    "text": {
      "fr": "Si x = -4, calcule : x^2 + 3x - 2",
      "en": "If x = -4, calculate: x^2 + 3x - 2",
      "nl": "Als x = -4, bereken: x^2 + 3x - 2"
    },
    "answer": 2, "tolerance": 0,
    "hint": {
      "fr": "(-4)^2 + 3 x (-4) - 2 = 16 - 12 - 2 = 2.",
      "en": "(-4)^2 + 3 x (-4) - 2 = 16 - 12 - 2 = 2.",
      "nl": "(-4)^2 + 3 x (-4) - 2 = 16 - 12 - 2 = 2."
    }
  },
  {
    "id": "N2_s_94", "category": "N2", "level": 3,
    "text": {
      "fr": "Si x = -1, calcule : 2x^2 + 5x - 3",
      "en": "If x = -1, calculate: 2x^2 + 5x - 3",
      "nl": "Als x = -1, bereken: 2x^2 + 5x - 3"
    },
    "answer": -6, "tolerance": 0,
    "hint": {
      "fr": "2 x (-1)^2 + 5 x (-1) - 3 = 2 - 5 - 3 = -6.",
      "en": "2 x (-1)^2 + 5 x (-1) - 3 = 2 - 5 - 3 = -6.",
      "nl": "2 x (-1)^2 + 5 x (-1) - 3 = 2 - 5 - 3 = -6."
    }
  },
  {
    "id": "N2_s_95", "category": "N2", "level": 3,
    "text": {
      "fr": "Si x = -2 et y = 5, calcule : x^2 - 2xy + y^2",
      "en": "If x = -2 and y = 5, calculate: x^2 - 2xy + y^2",
      "nl": "Als x = -2 en y = 5, bereken: x^2 - 2xy + y^2"
    },
    "answer": 49, "tolerance": 0,
    "hint": {
      "fr": "C'est (x - y)^2 = (-2 - 5)^2 = (-7)^2 = 49.",
      "en": "This is (x - y)^2 = (-2 - 5)^2 = (-7)^2 = 49.",
      "nl": "Dit is (x - y)^2 = (-2 - 5)^2 = (-7)^2 = 49."
    }
  },
  {
    "id": "N2_s_96", "category": "N2", "level": 3,
    "text": {
      "fr": "Quel est le PGCD de 60 et 84 ?",
      "en": "What is the GCD of 60 and 84?",
      "nl": "Wat is de GGD van 60 en 84?"
    },
    "answer": 12, "tolerance": 0,
    "hint": {
      "fr": "60 = 2^2 x 3 x 5 et 84 = 2^2 x 3 x 7. PGCD = 2^2 x 3 = 12.",
      "en": "60 = 2^2 x 3 x 5 and 84 = 2^2 x 3 x 7. GCD = 2^2 x 3 = 12.",
      "nl": "60 = 2^2 x 3 x 5 en 84 = 2^2 x 3 x 7. GGD = 2^2 x 3 = 12."
    }
  },
  {
    "id": "N2_s_97", "category": "N2", "level": 3,
    "text": {
      "fr": "Quel est le PGCD de 72 et 96 ?",
      "en": "What is the GCD of 72 and 96?",
      "nl": "Wat is de GGD van 72 en 96?"
    },
    "answer": 24, "tolerance": 0,
    "hint": {
      "fr": "72 = 2^3 x 3^2 et 96 = 2^5 x 3. PGCD = 2^3 x 3 = 24.",
      "en": "72 = 2^3 x 3^2 and 96 = 2^5 x 3. GCD = 2^3 x 3 = 24.",
      "nl": "72 = 2^3 x 3^2 en 96 = 2^5 x 3. GGD = 2^3 x 3 = 24."
    }
  },
  {
    "id": "N2_s_98", "category": "N2", "level": 3,
    "text": {
      "fr": "Quel est le PPCM de 18 et 24 ?",
      "en": "What is the LCM of 18 and 24?",
      "nl": "Wat is het KGV van 18 en 24?"
    },
    "answer": 72, "tolerance": 0,
    "hint": {
      "fr": "18 = 2 x 3^2 et 24 = 2^3 x 3. PPCM = 2^3 x 3^2 = 72.",
      "en": "18 = 2 x 3^2 and 24 = 2^3 x 3. LCM = 2^3 x 3^2 = 72.",
      "nl": "18 = 2 x 3^2 en 24 = 2^3 x 3. KGV = 2^3 x 3^2 = 72."
    }
  },
  {
    "id": "N2_s_99", "category": "N2", "level": 3,
    "text": {
      "fr": "Quel est le PPCM de 20 et 30 ?",
      "en": "What is the LCM of 20 and 30?",
      "nl": "Wat is het KGV van 20 en 30?"
    },
    "answer": 60, "tolerance": 0,
    "hint": {
      "fr": "20 = 2^2 x 5 et 30 = 2 x 3 x 5. PPCM = 2^2 x 3 x 5 = 60.",
      "en": "20 = 2^2 x 5 and 30 = 2 x 3 x 5. LCM = 2^2 x 3 x 5 = 60.",
      "nl": "20 = 2^2 x 5 en 30 = 2 x 3 x 5. KGV = 2^2 x 3 x 5 = 60."
    }
  },
  {
    "id": "N2_s_100", "category": "N2", "level": 3,
    "text": {
      "fr": "Si a = -3 et b = 2, calcule : a^2 + ab - b^2",
      "en": "If a = -3 and b = 2, calculate: a^2 + ab - b^2",
      "nl": "Als a = -3 en b = 2, bereken: a^2 + ab - b^2"
    },
    "answer": -1, "tolerance": 0,
    "hint": {
      "fr": "(-3)^2 + (-3)(2) - 2^2 = 9 - 6 - 4 = -1.",
      "en": "(-3)^2 + (-3)(2) - 2^2 = 9 - 6 - 4 = -1.",
      "nl": "(-3)^2 + (-3)(2) - 2^2 = 9 - 6 - 4 = -1."
    }
  },
  {
    "id": "N2_s_101", "category": "N2", "level": 3,
    "text": {
      "fr": "Combien y a-t-il de nombres premiers entre 1 et 40 ?",
      "en": "How many prime numbers are there between 1 and 40?",
      "nl": "Hoeveel priemgetallen zijn er tussen 1 en 40?"
    },
    "answer": 12, "tolerance": 0,
    "hint": {
      "fr": "Les nombres premiers entre 1 et 40 : 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37.",
      "en": "The prime numbers between 1 and 40: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37.",
      "nl": "De priemgetallen tussen 1 en 40: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37."
    }
  },
  {
    "id": "N2_s_102", "category": "N2", "level": 3,
    "text": {
      "fr": "Combien y a-t-il de nombres premiers entre 1 et 50 ?",
      "en": "How many prime numbers are there between 1 and 50?",
      "nl": "Hoeveel priemgetallen zijn er tussen 1 en 50?"
    },
    "answer": 15, "tolerance": 0,
    "hint": {
      "fr": "Les nombres premiers entre 1 et 50 : 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47.",
      "en": "The prime numbers between 1 and 50: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47.",
      "nl": "De priemgetallen tussen 1 en 50: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47."
    }
  },
  {
    "id": "N2_s_103", "category": "N2", "level": 3,
    "text": {
      "fr": "Si x = -3, calcule : 3x^2 - 2x + 1",
      "en": "If x = -3, calculate: 3x^2 - 2x + 1",
      "nl": "Als x = -3, bereken: 3x^2 - 2x + 1"
    },
    "answer": 34, "tolerance": 0,
    "hint": {
      "fr": "3 x (-3)^2 - 2 x (-3) + 1 = 3 x 9 + 6 + 1 = 27 + 6 + 1 = 34.",
      "en": "3 x (-3)^2 - 2 x (-3) + 1 = 3 x 9 + 6 + 1 = 27 + 6 + 1 = 34.",
      "nl": "3 x (-3)^2 - 2 x (-3) + 1 = 3 x 9 + 6 + 1 = 27 + 6 + 1 = 34."
    }
  },
  {
    "id": "N2_s_104", "category": "N2", "level": 3,
    "text": {
      "fr": "Combien y a-t-il de diviseurs de 60 ?",
      "en": "How many divisors does 60 have?",
      "nl": "Hoeveel delers heeft 60?"
    },
    "answer": 12, "tolerance": 0,
    "hint": {
      "fr": "Les diviseurs de 60 : 1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60.",
      "en": "The divisors of 60: 1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60.",
      "nl": "De delers van 60: 1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60."
    }
  },
  {
    "id": "N2_s_105", "category": "N2", "level": 3,
    "text": {
      "fr": "Combien y a-t-il de diviseurs de 72 ?",
      "en": "How many divisors does 72 have?",
      "nl": "Hoeveel delers heeft 72?"
    },
    "answer": 12, "tolerance": 0,
    "hint": {
      "fr": "Les diviseurs de 72 : 1, 2, 3, 4, 6, 8, 9, 12, 18, 24, 36, 72.",
      "en": "The divisors of 72: 1, 2, 3, 4, 6, 8, 9, 12, 18, 24, 36, 72.",
      "nl": "De delers van 72: 1, 2, 3, 4, 6, 8, 9, 12, 18, 24, 36, 72."
    }
  },
  {
    "id": "N2_s_106", "category": "N2", "level": 3,
    "text": {
      "fr": "Quel est le PGCD de 90 et 126 ?",
      "en": "What is the GCD of 90 and 126?",
      "nl": "Wat is de GGD van 90 en 126?"
    },
    "answer": 18, "tolerance": 0,
    "hint": {
      "fr": "90 = 2 x 3^2 x 5 et 126 = 2 x 3^2 x 7. PGCD = 2 x 3^2 = 18.",
      "en": "90 = 2 x 3^2 x 5 and 126 = 2 x 3^2 x 7. GCD = 2 x 3^2 = 18.",
      "nl": "90 = 2 x 3^2 x 5 en 126 = 2 x 3^2 x 7. GGD = 2 x 3^2 = 18."
    }
  },
  {
    "id": "N2_s_107", "category": "N2", "level": 3,
    "text": {
      "fr": "Quel est le PPCM de 24 et 36 ?",
      "en": "What is the LCM of 24 and 36?",
      "nl": "Wat is het KGV van 24 en 36?"
    },
    "answer": 72, "tolerance": 0,
    "hint": {
      "fr": "24 = 2^3 x 3 et 36 = 2^2 x 3^2. PPCM = 2^3 x 3^2 = 72.",
      "en": "24 = 2^3 x 3 and 36 = 2^2 x 3^2. LCM = 2^3 x 3^2 = 72.",
      "nl": "24 = 2^3 x 3 en 36 = 2^2 x 3^2. KGV = 2^3 x 3^2 = 72."
    }
  },
  {
    "id": "N2_s_108", "category": "N2", "level": 3,
    "text": {
      "fr": "Si a = 4 et b = -3, calcule : a^2 - 2ab + b^2",
      "en": "If a = 4 and b = -3, calculate: a^2 - 2ab + b^2",
      "nl": "Als a = 4 en b = -3, bereken: a^2 - 2ab + b^2"
    },
    "answer": 49, "tolerance": 0,
    "hint": {
      "fr": "C'est (a - b)^2 = (4 - (-3))^2 = 7^2 = 49.",
      "en": "This is (a - b)^2 = (4 - (-3))^2 = 7^2 = 49.",
      "nl": "Dit is (a - b)^2 = (4 - (-3))^2 = 7^2 = 49."
    }
  },
  {
    "id": "N2_s_109", "category": "N2", "level": 3,
    "text": {
      "fr": "Si x = -5, calcule : x^2 + 4x - 5",
      "en": "If x = -5, calculate: x^2 + 4x - 5",
      "nl": "Als x = -5, bereken: x^2 + 4x - 5"
    },
    "answer": 0, "tolerance": 0,
    "hint": {
      "fr": "(-5)^2 + 4 x (-5) - 5 = 25 - 20 - 5 = 0.",
      "en": "(-5)^2 + 4 x (-5) - 5 = 25 - 20 - 5 = 0.",
      "nl": "(-5)^2 + 4 x (-5) - 5 = 25 - 20 - 5 = 0."
    }
  },
  {
    "id": "N2_s_110", "category": "N2", "level": 3,
    "text": {
      "fr": "Quel est le PPCM de 14 et 35 ?",
      "en": "What is the LCM of 14 and 35?",
      "nl": "Wat is het KGV van 14 en 35?"
    },
    "answer": 70, "tolerance": 0,
    "hint": {
      "fr": "14 = 2 x 7 et 35 = 5 x 7. PPCM = 2 x 5 x 7 = 70.",
      "en": "14 = 2 x 7 and 35 = 5 x 7. LCM = 2 x 5 x 7 = 70.",
      "nl": "14 = 2 x 7 en 35 = 5 x 7. KGV = 2 x 5 x 7 = 70."
    }
  },
  {
    "id": "N2_s_111", "category": "N2", "level": 3,
    "text": {
      "fr": "Si a = -1, calcule : a^3 + 2a^2 - 3a + 4",
      "en": "If a = -1, calculate: a^3 + 2a^2 - 3a + 4",
      "nl": "Als a = -1, bereken: a^3 + 2a^2 - 3a + 4"
    },
    "answer": 8, "tolerance": 0,
    "hint": {
      "fr": "(-1)^3 + 2 x (-1)^2 - 3 x (-1) + 4 = -1 + 2 + 3 + 4 = 8.",
      "en": "(-1)^3 + 2 x (-1)^2 - 3 x (-1) + 4 = -1 + 2 + 3 + 4 = 8.",
      "nl": "(-1)^3 + 2 x (-1)^2 - 3 x (-1) + 4 = -1 + 2 + 3 + 4 = 8."
    }
  },
  {
    "id": "N2_s_112", "category": "N2", "level": 3,
    "text": {
      "fr": "Si x = 3 et y = -2, calcule : x^2 + xy - y^2",
      "en": "If x = 3 and y = -2, calculate: x^2 + xy - y^2",
      "nl": "Als x = 3 en y = -2, bereken: x^2 + xy - y^2"
    },
    "answer": -1, "tolerance": 0,
    "hint": {
      "fr": "3^2 + 3 x (-2) - (-2)^2 = 9 - 6 - 4 = -1.",
      "en": "3^2 + 3 x (-2) - (-2)^2 = 9 - 6 - 4 = -1.",
      "nl": "3^2 + 3 x (-2) - (-2)^2 = 9 - 6 - 4 = -1."
    }
  },
  {
    "id": "N2_s_113", "category": "N2", "level": 1,
    "text": {
      "fr": "Quel est le reste de 31 divisé par 7 ?",
      "en": "What is the remainder of 31 divided by 7?",
      "nl": "Wat is de rest van 31 gedeeld door 7?"
    },
    "answer": 3, "tolerance": 0,
    "hint": {
      "fr": "31 = 4 . 7 + reste. Quel est le reste ?",
      "en": "31 = 4 . 7 + remainder. What is the remainder?",
      "nl": "31 = 4 . 7 + rest. Wat is de rest?"
    }
  },
  {
    "id": "N2_s_114", "category": "N2", "level": 1,
    "text": {
      "fr": "Quel est le PGCD de 18 et 24 ?",
      "en": "What is the GCD of 18 and 24?",
      "nl": "Wat is de GGD van 18 en 24?"
    },
    "answer": 6, "tolerance": 0,
    "hint": {
      "fr": "Liste les diviseurs de 18 et de 24, puis trouve le plus grand commun.",
      "en": "List the divisors of 18 and 24, then find the largest common one.",
      "nl": "Lijst de delers van 18 en 24, en vind de grootste gemeenschappelijke."
    }
  },
  {
    "id": "N2_s_115", "category": "N2", "level": 1,
    "text": {
      "fr": "Quel est le PPCM de 6 et 8 ?",
      "en": "What is the LCM of 6 and 8?",
      "nl": "Wat is het KGV van 6 en 8?"
    },
    "answer": 24, "tolerance": 0,
    "hint": {
      "fr": "Les multiples de 6 : 6, 12, 18, 24... Les multiples de 8 : 8, 16, 24... Le premier commun est 24.",
      "en": "Multiples of 6: 6, 12, 18, 24... Multiples of 8: 8, 16, 24... The first common one is 24.",
      "nl": "Veelvouden van 6: 6, 12, 18, 24... Veelvouden van 8: 8, 16, 24... Het eerste gemeenschappelijke is 24."
    }
  },
  {
    "id": "N2_s_116", "category": "N2", "level": 2,
    "text": {
      "fr": "Si x = -3, calcule : 2x² + 5x - 1",
      "en": "If x = -3, calculate: 2x² + 5x - 1",
      "nl": "Als x = -3, bereken: 2x² + 5x - 1"
    },
    "answer": 2, "tolerance": 0,
    "hint": {
      "fr": "2 . (-3)² + 5 . (-3) - 1 = 2 . 9 - 15 - 1 = 18 - 15 - 1 = 2.",
      "en": "2 . (-3)² + 5 . (-3) - 1 = 2 . 9 - 15 - 1 = 18 - 15 - 1 = 2.",
      "nl": "2 . (-3)² + 5 . (-3) - 1 = 2 . 9 - 15 - 1 = 18 - 15 - 1 = 2."
    }
  },
  {
    "id": "N2_s_117", "category": "N2", "level": 2,
    "text": {
      "fr": "Quel est le PGCD de 36 et 54 ?",
      "en": "What is the GCD of 36 and 54?",
      "nl": "Wat is de GGD van 36 en 54?"
    },
    "answer": 18, "tolerance": 0,
    "hint": {
      "fr": "36 = 2² . 3² et 54 = 2 . 3³. Le PGCD = 2 . 3² = 18.",
      "en": "36 = 2² . 3² and 54 = 2 . 3³. The GCD = 2 . 3² = 18.",
      "nl": "36 = 2² . 3² en 54 = 2 . 3³. De GGD = 2 . 3² = 18."
    }
  },
  {
    "id": "N2_s_118", "category": "N2", "level": 3,
    "text": {
      "fr": "Si a = 2 et b = -3, calcule : a³ - 2a²b + ab²",
      "en": "If a = 2 and b = -3, calculate: a³ - 2a²b + ab²",
      "nl": "Als a = 2 en b = -3, bereken: a³ - 2a²b + ab²"
    },
    "answer": 38, "tolerance": 0,
    "hint": {
      "fr": "2³ - 2 . 4 . (-3) + 2 . 9 = 8 + 24 + 18 = 38 (attention : soustraire un négatif = additionner).",
      "en": "2³ - 2 . 4 . (-3) + 2 . 9 = 8 + 24 + 18 = 38 (note: subtracting a negative = adding).",
      "nl": "2³ - 2 . 4 . (-3) + 2 . 9 = 8 + 24 + 18 = 38 (let op: een negatief aftrekken = optellen)."
    }
  },
  {
    "id": "N2_s_119", "category": "N2", "level": 3,
    "text": {
      "fr": "Quel est le PPCM de 18 et 30 ?",
      "en": "What is the LCM of 18 and 30?",
      "nl": "Wat is het KGV van 18 en 30?"
    },
    "answer": 90, "tolerance": 0,
    "hint": {
      "fr": "18 = 2 . 3² et 30 = 2 . 3 . 5. PPCM = 2 . 3² . 5 = 90.",
      "en": "18 = 2 . 3² and 30 = 2 . 3 . 5. LCM = 2 . 3² . 5 = 90.",
      "nl": "18 = 2 . 3² en 30 = 2 . 3 . 5. KGV = 2 . 3² . 5 = 90."
    }
  },
];

// =============================================================================
// Procedural generator for N2 - Calcul litteral
// =============================================================================

/**
 * Generateur procedural pour N2
 * @param {1|2|3} level - Niveau de difficulte
 * @returns {object} Question generee
 */
export function generate(level = 1) {
  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const id = `N2_gen_${Date.now()}_${rand(100, 999)}`;

  // Helper: GCD using Euclidean algorithm
  const gcd = (x, y) => {
    x = Math.abs(x);
    y = Math.abs(y);
    while (y !== 0) {
      const t = y;
      y = x % t;
      x = t;
    }
    return x;
  };

  // Helper: LCM
  const lcm = (x, y) => Math.abs(x * y) / gcd(x, y);

  if (level === 1) {
    const type = rand(1, 4);

    if (type === 1) {
      // Remainder
      const a = rand(10, 50);
      const b = rand(3, 9);
      const answer = a % b;
      return {
        id, "category": 'N2', level,
        "text": {
          "fr": `Quel est le reste de ${a} divise par ${b} ?`,
          "en": `What is the remainder of ${a} divided by ${b}?`,
          "nl": `Wat is de rest van ${a} gedeeld door ${b}?`
        },
        answer, "tolerance": 0,
        "hint": {
          "fr": `Divise ${a} par ${b} et trouve le reste.`,
          "en": `Divide ${a} by ${b} and find the remainder.`,
          "nl": `Deel ${a} door ${b} en vind de rest.`
        }
      };
    }

    if (type === 2) {
      // Simple GCD
      const pairs = [[12, 8], [10, 15], [18, 24], [14, 21], [9, 12], [16, 20], [6, 15], [8, 20]];
      const pair = pairs[rand(0, pairs.length - 1)];
      const answer = gcd(pair[0], pair[1]);
      return {
        id, "category": 'N2', level,
        "text": {
          "fr": `Quel est le PGCD de ${pair[0]} et ${pair[1]} ?`,
          "en": `What is the GCD of ${pair[0]} and ${pair[1]}?`,
          "nl": `Wat is de GGD van ${pair[0]} en ${pair[1]}?`
        },
        answer, "tolerance": 0,
        "hint": {
          "fr": `Liste les diviseurs de ${pair[0]} et de ${pair[1]}, puis trouve le plus grand commun.`,
          "en": `List the divisors of ${pair[0]} and ${pair[1]}, then find the largest common one.`,
          "nl": `Lijst de delers van ${pair[0]} en ${pair[1]}, en vind de grootste gemeenschappelijke.`
        }
      };
    }

    if (type === 3) {
      // Simple algebraic evaluation: c*a + d
      const a = rand(2, 8);
      const c = rand(2, 5);
      const d = rand(1, 10);
      const answer = c * a + d;
      return {
        id, "category": 'N2', level,
        "text": {
          "fr": `Si a = ${a}, calcule : ${c}a + ${d}`,
          "en": `If a = ${a}, calculate: ${c}a + ${d}`,
          "nl": `Als a = ${a}, bereken: ${c}a + ${d}`
        },
        answer, "tolerance": 0,
        "hint": {
          "fr": `Remplace a par ${a} : ${c} x ${a} + ${d}.`,
          "en": `Replace a with ${a}: ${c} x ${a} + ${d}.`,
          "nl": `Vervang a door ${a}: ${c} x ${a} + ${d}.`
        }
      };
    }

    // Simple LCM
    const pairs = [[3, 5], [4, 6], [2, 7], [3, 4], [5, 6], [4, 10], [6, 9]];
    const pair = pairs[rand(0, pairs.length - 1)];
    const answer = lcm(pair[0], pair[1]);
    return {
      id, "category": 'N2', level,
      "text": {
        "fr": `Quel est le PPCM de ${pair[0]} et ${pair[1]} ?`,
        "en": `What is the LCM of ${pair[0]} and ${pair[1]}?`,
        "nl": `Wat is het KGV van ${pair[0]} en ${pair[1]}?`
      },
      answer, "tolerance": 0,
      "hint": {
        "fr": `Le PPCM est le plus petit nombre qui est multiple de ${pair[0]} et de ${pair[1]}.`,
        "en": `The LCM is the smallest number that is a multiple of both ${pair[0]} and ${pair[1]}.`,
        "nl": `Het KGV is het kleinste getal dat een veelvoud is van zowel ${pair[0]} als ${pair[1]}.`
      }
    };
  }

  if (level === 2) {
    const type = rand(1, 4);

    if (type === 1) {
      // GCD of larger numbers
      const factors = [2, 3, 4, 5, 6];
      const base = rand(2, 8);
      const m1 = factors[rand(0, factors.length - 1)];
      const m2 = factors[rand(0, factors.length - 1)];
      const a = base * m1;
      const b = base * m2;
      const answer = gcd(a, b);
      return {
        id, "category": 'N2', level,
        "text": {
          "fr": `Quel est le PGCD de ${a} et ${b} ?`,
          "en": `What is the GCD of ${a} and ${b}?`,
          "nl": `Wat is de GGD van ${a} en ${b}?`
        },
        answer, "tolerance": 0,
        "hint": {
          "fr": `Decompose ${a} et ${b} en facteurs premiers, puis prends les facteurs communs.`,
          "en": `Decompose ${a} and ${b} into prime factors, then take the common factors.`,
          "nl": `Ontbind ${a} en ${b} in priemfactoren en neem de gemeenschappelijke factoren.`
        }
      };
    }

    if (type === 2) {
      // LCM
      const pairs = [[6, 8], [9, 12], [8, 12], [10, 15], [14, 21], [6, 10], [8, 14]];
      const pair = pairs[rand(0, pairs.length - 1)];
      const answer = lcm(pair[0], pair[1]);
      return {
        id, "category": 'N2', level,
        "text": {
          "fr": `Quel est le PPCM de ${pair[0]} et ${pair[1]} ?`,
          "en": `What is the LCM of ${pair[0]} and ${pair[1]}?`,
          "nl": `Wat is het KGV van ${pair[0]} en ${pair[1]}?`
        },
        answer, "tolerance": 0,
        "hint": {
          "fr": `Decompose ${pair[0]} et ${pair[1]} en facteurs premiers pour trouver le PPCM.`,
          "en": `Decompose ${pair[0]} and ${pair[1]} into prime factors to find the LCM.`,
          "nl": `Ontbind ${pair[0]} en ${pair[1]} in priemfactoren om het KGV te vinden.`
        }
      };
    }

    if (type === 3) {
      // Evaluation with x^2
      const x = rand(2, 7);
      const c = rand(1, 5);
      const answer = x * x - c;
      return {
        id, "category": 'N2', level,
        "text": {
          "fr": `Si x = ${x}, calcule : x^2 - ${c}`,
          "en": `If x = ${x}, calculate: x^2 - ${c}`,
          "nl": `Als x = ${x}, bereken: x^2 - ${c}`
        },
        answer, "tolerance": 0,
        "hint": {
          "fr": `x^2 = ${x * x}. Puis ${x * x} - ${c}.`,
          "en": `x^2 = ${x * x}. Then ${x * x} - ${c}.`,
          "nl": `x^2 = ${x * x}. Dan ${x * x} - ${c}.`
        }
      };
    }

    // Remainder with larger numbers
    const a = rand(50, 150);
    const b = rand(7, 15);
    const answer = a % b;
    return {
      id, "category": 'N2', level,
      "text": {
        "fr": `Quel est le reste de ${a} divise par ${b} ?`,
        "en": `What is the remainder of ${a} divided by ${b}?`,
        "nl": `Wat is de rest van ${a} gedeeld door ${b}?`
      },
      answer, "tolerance": 0,
      "hint": {
        "fr": `Trouve combien de fois ${b} entre dans ${a}, puis calcule le reste.`,
        "en": `Find how many times ${b} goes into ${a}, then calculate the remainder.`,
        "nl": `Zoek hoeveel keer ${b} in ${a} past en bereken de rest.`
      }
    };
  }

  // Level 3
  const type = rand(1, 4);

  if (type === 1) {
    // Quadratic evaluation with possible negatives
    const x = rand(-4, -1);
    const a = rand(1, 3);
    const b = rand(-3, 3);
    const c = rand(-5, 5);
    const answer = a * x * x + b * x + c;
    const bStr = b >= 0 ? `+ ${b}x` : `- ${Math.abs(b)}x`;
    const cStr = c >= 0 ? `+ ${c}` : `- ${Math.abs(c)}`;
    const aStr = a === 1 ? 'x^2' : `${a}x^2`;
    return {
      id, "category": 'N2', level,
      "text": {
        "fr": `Si x = ${x}, calcule : ${aStr} ${bStr} ${cStr}`,
        "en": `If x = ${x}, calculate: ${aStr} ${bStr} ${cStr}`,
        "nl": `Als x = ${x}, bereken: ${aStr} ${bStr} ${cStr}`
      },
      answer, "tolerance": 0,
      "hint": {
        "fr": `Remplace x par ${x} et calcule pas a pas : d'abord x^2, puis chaque terme.`,
        "en": `Replace x with ${x} and calculate step by step: first x^2, then each term.`,
        "nl": `Vervang x door ${x} en bereken stap voor stap: eerst x^2, dan elke term.`
      }
    };
  }

  if (type === 2) {
    // GCD of larger numbers
    const pairs = [[36, 48], [54, 72], [48, 80], [60, 90], [42, 70], [56, 84], [45, 75]];
    const pair = pairs[rand(0, pairs.length - 1)];
    const answer = gcd(pair[0], pair[1]);
    return {
      id, "category": 'N2', level,
      "text": {
        "fr": `Quel est le PGCD de ${pair[0]} et ${pair[1]} ?`,
        "en": `What is the GCD of ${pair[0]} and ${pair[1]}?`,
        "nl": `Wat is de GGD van ${pair[0]} en ${pair[1]}?`
      },
      answer, "tolerance": 0,
      "hint": {
        "fr": `Decompose ${pair[0]} et ${pair[1]} en facteurs premiers pour trouver le PGCD.`,
        "en": `Decompose ${pair[0]} and ${pair[1]} into prime factors to find the GCD.`,
        "nl": `Ontbind ${pair[0]} en ${pair[1]} in priemfactoren om de GGD te vinden.`
      }
    };
  }

  if (type === 3) {
    // LCM of larger numbers
    const pairs = [[12, 18], [15, 20], [18, 24], [14, 35], [16, 24], [20, 30]];
    const pair = pairs[rand(0, pairs.length - 1)];
    const answer = lcm(pair[0], pair[1]);
    return {
      id, "category": 'N2', level,
      "text": {
        "fr": `Quel est le PPCM de ${pair[0]} et ${pair[1]} ?`,
        "en": `What is the LCM of ${pair[0]} and ${pair[1]}?`,
        "nl": `Wat is het KGV van ${pair[0]} en ${pair[1]}?`
      },
      answer, "tolerance": 0,
      "hint": {
        "fr": `Decompose ${pair[0]} et ${pair[1]} en facteurs premiers pour trouver le PPCM.`,
        "en": `Decompose ${pair[0]} and ${pair[1]} into prime factors to find the LCM.`,
        "nl": `Ontbind ${pair[0]} en ${pair[1]} in priemfactoren om het KGV te vinden.`
      }
    };
  }

  // Two-variable expression
  const a = rand(-3, 4);
  const b = rand(-3, 4);
  const answer = a * a + 2 * a * b + b * b; // (a+b)^2
  return {
    id, "category": 'N2', level,
    "text": {
      "fr": `Si a = ${a} et b = ${b}, calcule : a^2 + 2ab + b^2`,
      "en": `If a = ${a} and b = ${b}, calculate: a^2 + 2ab + b^2`,
      "nl": `Als a = ${a} en b = ${b}, bereken: a^2 + 2ab + b^2`
    },
    answer, "tolerance": 0,
    "hint": {
      "fr": `Remarque : a^2 + 2ab + b^2 = (a + b)^2. Donc (${a} + ${b})^2.`,
      "en": `Note: a^2 + 2ab + b^2 = (a + b)^2. So (${a} + ${b})^2.`,
      "nl": `Merk op: a^2 + 2ab + b^2 = (a + b)^2. Dus (${a} + ${b})^2.`
    }
  };
}
