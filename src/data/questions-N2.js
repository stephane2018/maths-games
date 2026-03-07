// =============================================================================
// N2 - Calcul litteral (Algebraic computation / Divisibility)
// CE1D Belgian exam - Trilingual (FR / EN / NL)
// 112 questions: ~37 per level, all numeric answers
// Topics: divisibility, GCD, LCM, remainders, prime factoring, algebraic eval
// =============================================================================

export const questions = [
  {
    "id": "N2_s_1",
    "category": "N2",
    "level": 1,
    "text": {
      "fr": "Quel est le reste de 17 divise par 5 ?",
      "en": "What is the remainder of 17 divided by 5?",
      "nl": "Wat is de rest van 17 gedeeld door 5?"
    },
    "answer": 2,
    "tolerance": 0,
    "hint": {
      "fr": "17 = 3 x 5 + reste. Quel est le reste ?",
      "en": "17 = 3 x 5 + remainder. What is the remainder?",
      "nl": "17 = 3 x 5 + rest. Wat is de rest?"
    }
  },
  {
    "id": "N2_s_2",
    "category": "N2",
    "level": 1,
    "text": {
      "fr": "Quel est le reste de 23 divise par 4 ?",
      "en": "What is the remainder of 23 divided by 4?",
      "nl": "Wat is de rest van 23 gedeeld door 4?"
    },
    "answer": 3,
    "tolerance": 0,
    "hint": {
      "fr": "23 = 5 x 4 + reste. Quel est le reste ?",
      "en": "23 = 5 x 4 + remainder. What is the remainder?",
      "nl": "23 = 5 x 4 + rest. Wat is de rest?"
    }
  },
  {
    "id": "N2_s_3",
    "category": "N2",
    "level": 1,
    "text": {
      "fr": "Quel est le reste de 29 divise par 6 ?",
      "en": "What is the remainder of 29 divided by 6?",
      "nl": "Wat is de rest van 29 gedeeld door 6?"
    },
    "answer": 5,
    "tolerance": 0,
    "hint": {
      "fr": "29 = 4 x 6 + reste. Quel est le reste ?",
      "en": "29 = 4 x 6 + remainder. What is the remainder?",
      "nl": "29 = 4 x 6 + rest. Wat is de rest?"
    }
  },
  {
    "id": "N2_s_4",
    "category": "N2",
    "level": 1,
    "text": {
      "fr": "Quel est le plus grand diviseur commun (PGCD) de 12 et 8 ?",
      "en": "What is the greatest common divisor (GCD) of 12 and 8?",
      "nl": "Wat is de grootste gemene deler (GGD) van 12 en 8?"
    },
    "answer": 4,
    "tolerance": 0,
    "hint": {
      "fr": "Liste les diviseurs de 12 et de 8, puis trouve le plus grand commun.",
      "en": "List the divisors of 12 and 8, then find the largest common one.",
      "nl": "Lijst de delers van 12 en 8, en vind de grootste gemeenschappelijke."
    }
  },
  {
    "id": "N2_s_5",
    "category": "N2",
    "level": 1,
    "text": {
      "fr": "Quel est le PGCD de 15 et 25 ?",
      "en": "What is the GCD of 15 and 25?",
      "nl": "Wat is de GGD van 15 en 25?"
    },
    "answer": 5,
    "tolerance": 0,
    "hint": {
      "fr": "Les diviseurs de 15 sont 1, 3, 5, 15. Les diviseurs de 25 sont 1, 5, 25.",
      "en": "The divisors of 15 are 1, 3, 5, 15. The divisors of 25 are 1, 5, 25.",
      "nl": "De delers van 15 zijn 1, 3, 5, 15. De delers van 25 zijn 1, 5, 25."
    }
  },
  {
    "id": "N2_s_6",
    "category": "N2",
    "level": 1,
    "text": {
      "fr": "Quel est le PGCD de 18 et 24 ?",
      "en": "What is the GCD of 18 and 24?",
      "nl": "Wat is de GGD van 18 en 24?"
    },
    "answer": 6,
    "tolerance": 0,
    "hint": {
      "fr": "Decompose 18 = 2 x 3 x 3 et 24 = 2 x 2 x 2 x 3, puis prends les facteurs communs.",
      "en": "Decompose 18 = 2 x 3 x 3 and 24 = 2 x 2 x 2 x 3, then take common factors.",
      "nl": "Ontbind 18 = 2 x 3 x 3 en 24 = 2 x 2 x 2 x 3, en neem de gemeenschappelijke factoren."
    }
  },
  {
    "id": "N2_s_7",
    "category": "N2",
    "level": 1,
    "text": {
      "fr": "Si a = 3, calcule : 2a + 5",
      "en": "If a = 3, calculate: 2a + 5",
      "nl": "Als a = 3, bereken: 2a + 5"
    },
    "answer": 11,
    "tolerance": 0,
    "hint": {
      "fr": "Remplace a par 3 : 2 x 3 + 5.",
      "en": "Replace a with 3: 2 x 3 + 5.",
      "nl": "Vervang a door 3: 2 x 3 + 5."
    }
  },
  {
    "id": "N2_s_18",
    "category": "N2",
    "level": 2,
    "text": {
      "fr": "Quel est le PPCM de 6 et 8 ?",
      "en": "What is the LCM of 6 and 8?",
      "nl": "Wat is het KGV van 6 en 8?"
    },
    "answer": 24,
    "tolerance": 0,
    "hint": {
      "fr": "Decompose : 6 = 2 x 3, 8 = 2 x 2 x 2. Le PPCM = 2^3 x 3 = 24.",
      "en": "Decompose: 6 = 2 x 3, 8 = 2 x 2 x 2. The LCM = 2^3 x 3 = 24.",
      "nl": "Ontbind: 6 = 2 x 3, 8 = 2 x 2 x 2. Het KGV = 2^3 x 3 = 24."
    }
  },
  {
    "id": "N2_s_19",
    "category": "N2",
    "level": 2,
    "text": {
      "fr": "Quel est le PPCM de 9 et 12 ?",
      "en": "What is the LCM of 9 and 12?",
      "nl": "Wat is het KGV van 9 en 12?"
    },
    "answer": 36,
    "tolerance": 0,
    "hint": {
      "fr": "9 = 3 x 3 et 12 = 2 x 2 x 3. Le PPCM = 2^2 x 3^2 = 36.",
      "en": "9 = 3 x 3 and 12 = 2 x 2 x 3. The LCM = 2^2 x 3^2 = 36.",
      "nl": "9 = 3 x 3 en 12 = 2 x 2 x 3. Het KGV = 2^2 x 3^2 = 36."
    }
  },
  {
    "id": "N2_s_20",
    "category": "N2",
    "level": 2,
    "text": {
      "fr": "Si a = 4 et b = -2, calcule : a + 3b",
      "en": "If a = 4 and b = -2, calculate: a + 3b",
      "nl": "Als a = 4 en b = -2, bereken: a + 3b"
    },
    "answer": -2,
    "tolerance": 0,
    "hint": {
      "fr": "Remplace : 4 + 3 x (-2) = 4 - 6.",
      "en": "Replace: 4 + 3 x (-2) = 4 - 6.",
      "nl": "Vervang: 4 + 3 x (-2) = 4 - 6."
    }
  },
  {
    "id": "N2_s_21",
    "category": "N2",
    "level": 2,
    "text": {
      "fr": "Si a = 4 et b = -2, calcule : a^2 - 3b",
      "en": "If a = 4 and b = -2, calculate: a^2 - 3b",
      "nl": "Als a = 4 en b = -2, bereken: a^2 - 3b"
    },
    "answer": 22,
    "tolerance": 0,
    "hint": {
      "fr": "a^2 = 16. Puis 16 - 3 x (-2) = 16 + 6 = 22.",
      "en": "a^2 = 16. Then 16 - 3 x (-2) = 16 + 6 = 22.",
      "nl": "a^2 = 16. Dan 16 - 3 x (-2) = 16 + 6 = 22."
    }
  },
  {
    "id": "N2_s_22",
    "category": "N2",
    "level": 2,
    "text": {
      "fr": "Quel est le PGCD de 28 et 42 ?",
      "en": "What is the GCD of 28 and 42?",
      "nl": "Wat is de GGD van 28 en 42?"
    },
    "answer": 14,
    "tolerance": 0,
    "hint": {
      "fr": "28 = 2 x 2 x 7 et 42 = 2 x 3 x 7. PGCD = 2 x 7 = 14.",
      "en": "28 = 2 x 2 x 7 and 42 = 2 x 3 x 7. GCD = 2 x 7 = 14.",
      "nl": "28 = 2 x 2 x 7 en 42 = 2 x 3 x 7. GGD = 2 x 7 = 14."
    }
  },
  {
    "id": "N2_s_23",
    "category": "N2",
    "level": 2,
    "text": {
      "fr": "Combien y a-t-il de diviseurs de 20 ?",
      "en": "How many divisors does 20 have?",
      "nl": "Hoeveel delers heeft 20?"
    },
    "answer": 6,
    "tolerance": 0,
    "hint": {
      "fr": "Les diviseurs de 20 : 1, 2, 4, 5, 10, 20.",
      "en": "The divisors of 20: 1, 2, 4, 5, 10, 20.",
      "nl": "De delers van 20: 1, 2, 4, 5, 10, 20."
    }
  },
  {
    "id": "N2_s_24",
    "category": "N2",
    "level": 2,
    "text": {
      "fr": "Quel est le PPCM de 10 et 15 ?",
      "en": "What is the LCM of 10 and 15?",
      "nl": "Wat is het KGV van 10 en 15?"
    },
    "answer": 30,
    "tolerance": 0,
    "hint": {
      "fr": "10 = 2 x 5 et 15 = 3 x 5. PPCM = 2 x 3 x 5 = 30.",
      "en": "10 = 2 x 5 and 15 = 3 x 5. LCM = 2 x 3 x 5 = 30.",
      "nl": "10 = 2 x 5 en 15 = 3 x 5. KGV = 2 x 3 x 5 = 30."
    }
  },
  {
    "id": "N2_s_35",
    "category": "N2",
    "level": 3,
    "text": {
      "fr": "Si x = -3, calcule : x^2 + 2x - 1",
      "en": "If x = -3, calculate: x^2 + 2x - 1",
      "nl": "Als x = -3, bereken: x^2 + 2x - 1"
    },
    "answer": 2,
    "tolerance": 0,
    "hint": {
      "fr": "(-3)^2 + 2 x (-3) - 1 = 9 - 6 - 1 = 2.",
      "en": "(-3)^2 + 2 x (-3) - 1 = 9 - 6 - 1 = 2.",
      "nl": "(-3)^2 + 2 x (-3) - 1 = 9 - 6 - 1 = 2."
    }
  },
  {
    "id": "N2_s_36",
    "category": "N2",
    "level": 3,
    "text": {
      "fr": "Quel est le PGCD de 36 et 48 ?",
      "en": "What is the GCD of 36 and 48?",
      "nl": "Wat is de GGD van 36 en 48?"
    },
    "answer": 12,
    "tolerance": 0,
    "hint": {
      "fr": "36 = 2^2 x 3^2 et 48 = 2^4 x 3. PGCD = 2^2 x 3 = 12.",
      "en": "36 = 2^2 x 3^2 and 48 = 2^4 x 3. GCD = 2^2 x 3 = 12.",
      "nl": "36 = 2^2 x 3^2 en 48 = 2^4 x 3. GGD = 2^2 x 3 = 12."
    }
  },
  {
    "id": "N2_s_37",
    "category": "N2",
    "level": 3,
    "text": {
      "fr": "Combien y a-t-il de nombres premiers entre 1 et 20 ?",
      "en": "How many prime numbers are there between 1 and 20?",
      "nl": "Hoeveel priemgetallen zijn er tussen 1 en 20?"
    },
    "answer": 8,
    "tolerance": 0,
    "hint": {
      "fr": "Les nombres premiers entre 1 et 20 : 2, 3, 5, 7, 11, 13, 17, 19.",
      "en": "The prime numbers between 1 and 20: 2, 3, 5, 7, 11, 13, 17, 19.",
      "nl": "De priemgetallen tussen 1 en 20: 2, 3, 5, 7, 11, 13, 17, 19."
    }
  },
  {
    "id": "N2_s_38",
    "category": "N2",
    "level": 3,
    "text": {
      "fr": "Si a = 2 et b = -3, calcule : a^2 - b^2",
      "en": "If a = 2 and b = -3, calculate: a^2 - b^2",
      "nl": "Als a = 2 en b = -3, bereken: a^2 - b^2"
    },
    "answer": -5,
    "tolerance": 0,
    "hint": {
      "fr": "a^2 = 4 et b^2 = 9. Donc 4 - 9 = -5.",
      "en": "a^2 = 4 and b^2 = 9. So 4 - 9 = -5.",
      "nl": "a^2 = 4 en b^2 = 9. Dus 4 - 9 = -5."
    }
  },
  {
    "id": "N2_s_39",
    "category": "N2",
    "level": 3,
    "text": {
      "fr": "Quel est le PPCM de 12 et 18 ?",
      "en": "What is the LCM of 12 and 18?",
      "nl": "Wat is het KGV van 12 en 18?"
    },
    "answer": 36,
    "tolerance": 0,
    "hint": {
      "fr": "12 = 2^2 x 3 et 18 = 2 x 3^2. PPCM = 2^2 x 3^2 = 36.",
      "en": "12 = 2^2 x 3 and 18 = 2 x 3^2. LCM = 2^2 x 3^2 = 36.",
      "nl": "12 = 2^2 x 3 en 18 = 2 x 3^2. KGV = 2^2 x 3^2 = 36."
    }
  },
  {
    "id": "N2_s_40",
    "category": "N2",
    "level": 3,
    "text": {
      "fr": "Si x = -2, calcule : 2x^2 - 3x + 4",
      "en": "If x = -2, calculate: 2x^2 - 3x + 4",
      "nl": "Als x = -2, bereken: 2x^2 - 3x + 4"
    },
    "answer": 18,
    "tolerance": 0,
    "hint": {
      "fr": "2 x (-2)^2 - 3 x (-2) + 4 = 2 x 4 + 6 + 4 = 8 + 6 + 4 = 18.",
      "en": "2 x (-2)^2 - 3 x (-2) + 4 = 2 x 4 + 6 + 4 = 8 + 6 + 4 = 18.",
      "nl": "2 x (-2)^2 - 3 x (-2) + 4 = 2 x 4 + 6 + 4 = 8 + 6 + 4 = 18."
    }
  }
];

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
