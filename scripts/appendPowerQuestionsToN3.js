import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * APPEND power questions to N3 category (Priorités des opérations)
 * Based on: Chapitre_Complet_Puissances_CE1D_Tous_Exercices.docx
 *
 * IMPORTANT: This script APPENDS to existing N3 questions, does NOT replace them!
 */

const powerQuestions = [
  // ===========================================================================
  // PUISSANCES - NIVEAU 1: Puissances de 10 et écriture décimale
  // ===========================================================================
  {
    id: "N3_power_1",
    category: "N3",
    level: 1,
    text: {
      fr: "Donne l'écriture décimale : 10⁴",
      en: "Give the decimal notation: 10⁴",
      nl: "Geef de decimale notatie: 10⁴"
    },
    answer: 10000,
    tolerance: 0,
    hint: {
      fr: "10⁴ = 10 × 10 × 10 × 10",
      en: "10⁴ = 10 × 10 × 10 × 10",
      nl: "10⁴ = 10 × 10 × 10 × 10"
    }
  },
  {
    id: "N3_power_2",
    category: "N3",
    level: 1,
    text: {
      fr: "Donne l'écriture décimale : 10⁻²",
      en: "Give the decimal notation: 10⁻²",
      nl: "Geef de decimale notatie: 10⁻²"
    },
    answer: 0.01,
    tolerance: 0,
    hint: {
      fr: "10⁻² = 1/10² = 1/100",
      en: "10⁻² = 1/10² = 1/100",
      nl: "10⁻² = 1/10² = 1/100"
    }
  },
  {
    id: "N3_power_3",
    category: "N3",
    level: 1,
    text: {
      fr: "Donne l'écriture décimale : 10⁷",
      en: "Give the decimal notation: 10⁷",
      nl: "Geef de decimale notatie: 10⁷"
    },
    answer: 10000000,
    tolerance: 0,
    hint: {
      fr: "10⁷ = 1 suivi de 7 zéros",
      en: "10⁷ = 1 followed by 7 zeros",
      nl: "10⁷ = 1 gevolgd door 7 nullen"
    }
  },
  {
    id: "N3_power_4",
    category: "N3",
    level: 1,
    text: {
      fr: "Donne l'écriture décimale : 10⁻⁴",
      en: "Give the decimal notation: 10⁻⁴",
      nl: "Geef de decimale notatie: 10⁻⁴"
    },
    answer: 0.0001,
    tolerance: 0,
    hint: {
      fr: "10⁻⁴ = 1/10000 = 0,0001",
      en: "10⁻⁴ = 1/10000 = 0.0001",
      nl: "10⁻⁴ = 1/10000 = 0,0001"
    }
  },
  {
    id: "N3_power_5",
    category: "N3",
    level: 1,
    text: {
      fr: "Donne l'écriture décimale : 10⁶",
      en: "Give the decimal notation: 10⁶",
      nl: "Geef de decimale notatie: 10⁶"
    },
    answer: 1000000,
    tolerance: 0,
    hint: {
      fr: "10⁶ = 1 suivi de 6 zéros",
      en: "10⁶ = 1 followed by 6 zeros",
      nl: "10⁶ = 1 gevolgd door 6 nullen"
    }
  },
  {
    id: "N3_power_6",
    category: "N3",
    level: 1,
    text: {
      fr: "Donne l'écriture décimale : 10⁻⁵",
      en: "Give the decimal notation: 10⁻⁵",
      nl: "Geef de decimale notatie: 10⁻⁵"
    },
    answer: 0.00001,
    tolerance: 0,
    hint: {
      fr: "10⁻⁵ = 1/100000 = 0,00001",
      en: "10⁻⁵ = 1/100000 = 0.00001",
      nl: "10⁻⁵ = 1/100000 = 0,00001"
    }
  },
  {
    id: "N3_power_7",
    category: "N3",
    level: 1,
    text: {
      fr: "Donne l'écriture décimale : 10⁻³",
      en: "Give the decimal notation: 10⁻³",
      nl: "Geef de decimale notatie: 10⁻³"
    },
    answer: 0.001,
    tolerance: 0,
    hint: {
      fr: "10⁻³ = 1/1000 = 0,001",
      en: "10⁻³ = 1/1000 = 0.001",
      nl: "10⁻³ = 1/1000 = 0,001"
    }
  },
  {
    id: "N3_power_8",
    category: "N3",
    level: 1,
    text: {
      fr: "Donne l'écriture décimale : 10¹",
      en: "Give the decimal notation: 10¹",
      nl: "Geef de decimale notatie: 10¹"
    },
    answer: 10,
    tolerance: 0,
    hint: {
      fr: "10¹ = 10",
      en: "10¹ = 10",
      nl: "10¹ = 10"
    }
  },
  {
    id: "N3_power_9",
    category: "N3",
    level: 1,
    text: {
      fr: "Donne l'écriture décimale : 10⁰",
      en: "Give the decimal notation: 10⁰",
      nl: "Geef de decimale notatie: 10⁰"
    },
    answer: 1,
    tolerance: 0,
    hint: {
      fr: "Toute puissance 0 vaut 1",
      en: "Any power to 0 equals 1",
      nl: "Elke macht tot 0 is gelijk aan 1"
    }
  },
  {
    id: "N3_power_10",
    category: "N3",
    level: 1,
    text: {
      fr: "Exposant n si 1000 = 10ⁿ",
      en: "Exponent n if 1000 = 10ⁿ",
      nl: "Exponent n als 1000 = 10ⁿ"
    },
    answer: 3,
    tolerance: 0,
    hint: {
      fr: "Compte le nombre de zéros : 1000 = 10³",
      en: "Count the zeros: 1000 = 10³",
      nl: "Tel de nullen: 1000 = 10³"
    }
  },
  {
    id: "N3_power_11",
    category: "N3",
    level: 1,
    text: {
      fr: "Exposant n si 1000000 = 10ⁿ",
      en: "Exponent n if 1000000 = 10ⁿ",
      nl: "Exponent n als 1000000 = 10ⁿ"
    },
    answer: 6,
    tolerance: 0,
    hint: {
      fr: "1000000 = 10⁶",
      en: "1000000 = 10⁶",
      nl: "1000000 = 10⁶"
    }
  },
  {
    id: "N3_power_12",
    category: "N3",
    level: 1,
    text: {
      fr: "Exposant n si 0,001 = 10ⁿ (n négatif)",
      en: "Exponent n if 0.001 = 10ⁿ (n negative)",
      nl: "Exponent n als 0,001 = 10ⁿ (n negatief)"
    },
    answer: -3,
    tolerance: 0,
    hint: {
      fr: "0,001 = 1/1000 = 10⁻³",
      en: "0.001 = 1/1000 = 10⁻³",
      nl: "0,001 = 1/1000 = 10⁻³"
    }
  },
  {
    id: "N3_power_13",
    category: "N3",
    level: 1,
    text: {
      fr: "Exposant n si 0,0001 = 10ⁿ",
      en: "Exponent n if 0.0001 = 10ⁿ",
      nl: "Exponent n als 0,0001 = 10ⁿ"
    },
    answer: -4,
    tolerance: 0,
    hint: {
      fr: "0,0001 = 10⁻⁴",
      en: "0.0001 = 10⁻⁴",
      nl: "0,0001 = 10⁻⁴"
    }
  },
  {
    id: "N3_power_14",
    category: "N3",
    level: 1,
    text: {
      fr: "Exposant n si 10000 = 10ⁿ",
      en: "Exponent n if 10000 = 10ⁿ",
      nl: "Exponent n als 10000 = 10ⁿ"
    },
    answer: 4,
    tolerance: 0,
    hint: {
      fr: "10000 = 10⁴",
      en: "10000 = 10⁴",
      nl: "10000 = 10⁴"
    }
  },
  // ===========================================================================
  // PUISSANCES - NIVEAU 2: Notation scientifique
  // ===========================================================================
  {
    id: "N3_power_15",
    category: "N3",
    level: 2,
    text: {
      fr: "Coefficient a si 20000 = a × 10ⁿ",
      en: "Coefficient a if 20000 = a × 10ⁿ",
      nl: "Coëfficiënt a als 20000 = a × 10ⁿ"
    },
    answer: 2,
    tolerance: 0,
    hint: {
      fr: "20000 = 2 × 10⁴",
      en: "20000 = 2 × 10⁴",
      nl: "20000 = 2 × 10⁴"
    }
  },
  {
    id: "N3_power_16",
    category: "N3",
    level: 2,
    text: {
      fr: "Transforme en nombre : 3,2 × 10⁵",
      en: "Transform to number: 3.2 × 10⁵",
      nl: "Transformeer naar getal: 3,2 × 10⁵"
    },
    answer: 320000,
    tolerance: 0,
    hint: {
      fr: "Déplace la virgule de 5 positions vers la droite",
      en: "Move the decimal point 5 positions to the right",
      nl: "Verplaats de komma 5 posities naar rechts"
    }
  },
  {
    id: "N3_power_17",
    category: "N3",
    level: 2,
    text: {
      fr: "Transforme en nombre : 1,28 × 10⁷",
      en: "Transform to number: 1.28 × 10⁷",
      nl: "Transformeer naar getal: 1,28 × 10⁷"
    },
    answer: 12800000,
    tolerance: 0,
    hint: {
      fr: "Déplace la virgule de 7 positions vers la droite",
      en: "Move the decimal point 7 positions to the right",
      nl: "Verplaats de komma 7 posities naar rechts"
    }
  },
  {
    id: "N3_power_18",
    category: "N3",
    level: 2,
    text: {
      fr: "Transforme : 4 × 10⁻⁷",
      en: "Transform: 4 × 10⁻⁷",
      nl: "Transformeer: 4 × 10⁻⁷"
    },
    answer: 0.0000004,
    tolerance: 0.00000001,
    hint: {
      fr: "Déplace la virgule de 7 positions vers la gauche",
      en: "Move the decimal point 7 positions to the left",
      nl: "Verplaats de komma 7 posities naar links"
    }
  },
  {
    id: "N3_power_19",
    category: "N3",
    level: 2,
    text: {
      fr: "Transforme : 3,2 × 10⁻⁵",
      en: "Transform: 3.2 × 10⁻⁵",
      nl: "Transformeer: 3,2 × 10⁻⁵"
    },
    answer: 0.000032,
    tolerance: 0.0000001,
    hint: {
      fr: "Déplace la virgule de 5 positions vers la gauche",
      en: "Move the decimal point 5 positions to the left",
      nl: "Verplaats de komma 5 posities naar links"
    }
  },
  {
    id: "N3_power_20",
    category: "N3",
    level: 2,
    text: {
      fr: "Transforme : 8,3 × 10⁶",
      en: "Transform: 8.3 × 10⁶",
      nl: "Transformeer: 8,3 × 10⁶"
    },
    answer: 8300000,
    tolerance: 0,
    hint: {
      fr: "Déplace la virgule de 6 positions vers la droite",
      en: "Move the decimal point 6 positions to the right",
      nl: "Verplaats de komma 6 posities naar rechts"
    }
  },
  {
    id: "N3_power_21",
    category: "N3",
    level: 2,
    text: {
      fr: "Coefficient a si 3000000 = a × 10ⁿ",
      en: "Coefficient a if 3000000 = a × 10ⁿ",
      nl: "Coëfficiënt a als 3000000 = a × 10ⁿ"
    },
    answer: 3,
    tolerance: 0,
    hint: {
      fr: "3000000 = 3 × 10⁶",
      en: "3000000 = 3 × 10⁶",
      nl: "3000000 = 3 × 10⁶"
    }
  },
  {
    id: "N3_power_22",
    category: "N3",
    level: 2,
    text: {
      fr: "Exposant n si 500000 = 5 × 10ⁿ",
      en: "Exponent n if 500000 = 5 × 10ⁿ",
      nl: "Exponent n als 500000 = 5 × 10ⁿ"
    },
    answer: 5,
    tolerance: 0,
    hint: {
      fr: "500000 = 5 × 10⁵",
      en: "500000 = 5 × 10⁵",
      nl: "500000 = 5 × 10⁵"
    }
  },
  // ===========================================================================
  // PUISSANCES - NIVEAU 3: Règles de calcul sur les puissances
  // ===========================================================================
  {
    id: "N3_power_23",
    category: "N3",
    level: 3,
    text: {
      fr: "Effectue (a⁵)³. Donne l'exposant de a.",
      en: "Calculate (a⁵)³. Give the exponent of a.",
      nl: "Bereken (a⁵)³. Geef de exponent van a."
    },
    answer: 15,
    tolerance: 0,
    hint: {
      fr: "(aⁿ)ᵐ = aⁿˣᵐ, donc 5 × 3 = 15",
      en: "(aⁿ)ᵐ = aⁿˣᵐ, so 5 × 3 = 15",
      nl: "(aⁿ)ᵐ = aⁿˣᵐ, dus 5 × 3 = 15"
    }
  },
  {
    id: "N3_power_24",
    category: "N3",
    level: 3,
    text: {
      fr: "Simplifie 12a⁷/11a⁵. Exposant de a ?",
      en: "Simplify 12a⁷/11a⁵. Exponent of a?",
      nl: "Vereenvoudig 12a⁷/11a⁵. Exponent van a?"
    },
    answer: 2,
    tolerance: 0,
    hint: {
      fr: "aⁿ/aᵐ = aⁿ⁻ᵐ, donc a⁷⁻⁵ = a²",
      en: "aⁿ/aᵐ = aⁿ⁻ᵐ, so a⁷⁻⁵ = a²",
      nl: "aⁿ/aᵐ = aⁿ⁻ᵐ, dus a⁷⁻⁵ = a²"
    }
  },
  {
    id: "N3_power_25",
    category: "N3",
    level: 3,
    text: {
      fr: "2b³ × 3b⁴. Donne l'exposant de b.",
      en: "2b³ × 3b⁴. Give the exponent of b.",
      nl: "2b³ × 3b⁴. Geef de exponent van b."
    },
    answer: 7,
    tolerance: 0,
    hint: {
      fr: "bⁿ × bᵐ = bⁿ⁺ᵐ, donc b³⁺⁴ = b⁷",
      en: "bⁿ × bᵐ = bⁿ⁺ᵐ, so b³⁺⁴ = b⁷",
      nl: "bⁿ × bᵐ = bⁿ⁺ᵐ, dus b³⁺⁴ = b⁷"
    }
  },
  {
    id: "N3_power_26",
    category: "N3",
    level: 3,
    text: {
      fr: "(5a³)². Donne l'exposant de a.",
      en: "(5a³)². Give the exponent of a.",
      nl: "(5a³)². Geef de exponent van a."
    },
    answer: 6,
    tolerance: 0,
    hint: {
      fr: "(a³)² = a⁶",
      en: "(a³)² = a⁶",
      nl: "(a³)² = a⁶"
    }
  },
  {
    id: "N3_power_27",
    category: "N3",
    level: 3,
    text: {
      fr: "Effectue : (2·3)³",
      en: "Calculate: (2·3)³",
      nl: "Bereken: (2·3)³"
    },
    answer: 216,
    tolerance: 0,
    hint: {
      fr: "2·3 = 6, puis 6³ = 216",
      en: "2·3 = 6, then 6³ = 216",
      nl: "2·3 = 6, dan 6³ = 216"
    }
  },
  {
    id: "N3_power_28",
    category: "N3",
    level: 3,
    text: {
      fr: "Effectue : 44·2⁶ / 11·2⁴",
      en: "Calculate: 44·2⁶ / 11·2⁴",
      nl: "Bereken: 44·2⁶ / 11·2⁴"
    },
    answer: 16,
    tolerance: 0,
    hint: {
      fr: "44/11 = 4, et 2⁶/2⁴ = 2² = 4, donc 4 × 4 = 16",
      en: "44/11 = 4, and 2⁶/2⁴ = 2² = 4, so 4 × 4 = 16",
      nl: "44/11 = 4, en 2⁶/2⁴ = 2² = 4, dus 4 × 4 = 16"
    }
  },
  {
    id: "N3_power_29",
    category: "N3",
    level: 3,
    text: {
      fr: "2³ · 2⁵ · 2⁰. Exposant final ?",
      en: "2³ · 2⁵ · 2⁰. Final exponent?",
      nl: "2³ · 2⁵ · 2⁰. Finale exponent?"
    },
    answer: 8,
    tolerance: 0,
    hint: {
      fr: "Additionne les exposants : 3 + 5 + 0 = 8",
      en: "Add the exponents: 3 + 5 + 0 = 8",
      nl: "Tel de exponenten op: 3 + 5 + 0 = 8"
    }
  },
  {
    id: "N3_power_30",
    category: "N3",
    level: 3,
    text: {
      fr: "3³ · 3⁰ · 3. Exposant final ?",
      en: "3³ · 3⁰ · 3. Final exponent?",
      nl: "3³ · 3⁰ · 3. Finale exponent?"
    },
    answer: 4,
    tolerance: 0,
    hint: {
      fr: "3 = 3¹, donc 3 + 0 + 1 = 4",
      en: "3 = 3¹, so 3 + 0 + 1 = 4",
      nl: "3 = 3¹, dus 3 + 0 + 1 = 4"
    }
  },
  {
    id: "N3_power_31",
    category: "N3",
    level: 3,
    text: {
      fr: "Effectue : (9⁴)⁰",
      en: "Calculate: (9⁴)⁰",
      nl: "Bereken: (9⁴)⁰"
    },
    answer: 1,
    tolerance: 0,
    hint: {
      fr: "Toute puissance 0 vaut 1",
      en: "Any power to 0 equals 1",
      nl: "Elke macht tot 0 is gelijk aan 1"
    }
  },
  {
    id: "N3_power_32",
    category: "N3",
    level: 3,
    text: {
      fr: "Effectue : 5 · 2³ · 5²",
      en: "Calculate: 5 · 2³ · 5²",
      nl: "Bereken: 5 · 2³ · 5²"
    },
    answer: 1000,
    tolerance: 0,
    hint: {
      fr: "5 · 5² = 5³ = 125, et 2³ = 8, donc 125 × 8 = 1000",
      en: "5 · 5² = 5³ = 125, and 2³ = 8, so 125 × 8 = 1000",
      nl: "5 · 5² = 5³ = 125, en 2³ = 8, dus 125 × 8 = 1000"
    }
  },
  {
    id: "N3_power_33",
    category: "N3",
    level: 3,
    text: {
      fr: "Effectue : 5 · 5⁴ · 2 · 2⁴",
      en: "Calculate: 5 · 5⁴ · 2 · 2⁴",
      nl: "Bereken: 5 · 5⁴ · 2 · 2⁴"
    },
    answer: 8000,
    tolerance: 0,
    hint: {
      fr: "5⁵ = 3125 et 2⁵ = 32, donc 3125 × 32 / 10 = 8000",
      en: "5⁵ = 3125 and 2⁵ = 32, so 3125 × 32 / 10 = 8000",
      nl: "5⁵ = 3125 en 2⁵ = 32, dus 3125 × 32 / 10 = 8000"
    }
  },
  {
    id: "N3_power_34",
    category: "N3",
    level: 3,
    text: {
      fr: "Effectue : 2 · 2² · 3 · 5",
      en: "Calculate: 2 · 2² · 3 · 5",
      nl: "Bereken: 2 · 2² · 3 · 5"
    },
    answer: 120,
    tolerance: 0,
    hint: {
      fr: "2³ = 8, puis 8 × 3 × 5 = 120",
      en: "2³ = 8, then 8 × 3 × 5 = 120",
      nl: "2³ = 8, dan 8 × 3 × 5 = 120"
    }
  },
  {
    id: "N3_power_35",
    category: "N3",
    level: 3,
    text: {
      fr: "Effectue : (2·4)³",
      en: "Calculate: (2·4)³",
      nl: "Bereken: (2·4)³"
    },
    answer: 512,
    tolerance: 0,
    hint: {
      fr: "2·4 = 8, puis 8³ = 512",
      en: "2·4 = 8, then 8³ = 512",
      nl: "2·4 = 8, dan 8³ = 512"
    }
  },
  {
    id: "N3_power_36",
    category: "N3",
    level: 3,
    text: {
      fr: "Effectue : -5 · 5⁴ · (-2) · 2⁴",
      en: "Calculate: -5 · 5⁴ · (-2) · 2⁴",
      nl: "Bereken: -5 · 5⁴ · (-2) · 2⁴"
    },
    answer: 50000,
    tolerance: 0,
    hint: {
      fr: "(-5) × (-2) = +10, puis 10 · 5⁴ · 2⁴ = 10⁵ = 50000",
      en: "(-5) × (-2) = +10, then 10 · 5⁴ · 2⁴ = 10⁵ = 50000",
      nl: "(-5) × (-2) = +10, dan 10 · 5⁴ · 2⁴ = 10⁵ = 50000"
    }
  },
  {
    id: "N3_power_37",
    category: "N3",
    level: 3,
    text: {
      fr: "Effectue : -(3·5)² · 1⁷",
      en: "Calculate: -(3·5)² · 1⁷",
      nl: "Bereken: -(3·5)² · 1⁷"
    },
    answer: -225,
    tolerance: 0,
    hint: {
      fr: "3·5 = 15, puis 15² = 225, et le signe - donne -225",
      en: "3·5 = 15, then 15² = 225, and the - sign gives -225",
      nl: "3·5 = 15, dan 15² = 225, en het - teken geeft -225"
    }
  },
  {
    id: "N3_power_38",
    category: "N3",
    level: 3,
    text: {
      fr: "Calcule : 2⁵",
      en: "Calculate: 2⁵",
      nl: "Bereken: 2⁵"
    },
    answer: 32,
    tolerance: 0,
    hint: {
      fr: "2⁵ = 2 × 2 × 2 × 2 × 2 = 32",
      en: "2⁵ = 2 × 2 × 2 × 2 × 2 = 32",
      nl: "2⁵ = 2 × 2 × 2 × 2 × 2 = 32"
    }
  },
  {
    id: "N3_power_39",
    category: "N3",
    level: 3,
    text: {
      fr: "Calcule : 3⁴",
      en: "Calculate: 3⁴",
      nl: "Bereken: 3⁴"
    },
    answer: 81,
    tolerance: 0,
    hint: {
      fr: "3⁴ = 3 × 3 × 3 × 3 = 81",
      en: "3⁴ = 3 × 3 × 3 × 3 = 81",
      nl: "3⁴ = 3 × 3 × 3 × 3 = 81"
    }
  },
  {
    id: "N3_power_40",
    category: "N3",
    level: 3,
    text: {
      fr: "Calcule : 5³",
      en: "Calculate: 5³",
      nl: "Bereken: 5³"
    },
    answer: 125,
    tolerance: 0,
    hint: {
      fr: "5³ = 5 × 5 × 5 = 125",
      en: "5³ = 5 × 5 × 5 = 125",
      nl: "5³ = 5 × 5 × 5 = 125"
    }
  }
];

async function main() {
  const n3Path = path.join(__dirname, '../src/data/questions-N3.js');

  // Read existing file
  const content = await fs.readFile(n3Path, 'utf-8');

  // Find the closing bracket of the questions array
  const closingBracketIndex = content.lastIndexOf('];');
  if (closingBracketIndex === -1) {
    throw new Error('Could not find closing bracket of questions array');
  }

  // Build the power questions string
  const powerQuestionsStr = powerQuestions.map(q =>
    `  ${JSON.stringify(q, null, 2).replace(/\n/g, '\n  ')}`
  ).join(',\n');

  // Build the comment header
  const header = `
  // ===========================================================================
  // PUISSANCES (Powers) - Added from Chapitre_Complet_Puissances_CE1D
  // Niveau 1: Powers of 10 and decimal notation (14 questions)
  // Niveau 2: Scientific notation (8 questions)
  // Niveau 3: Rules for calculating with powers (18 questions)
  // Total: 40 power questions
  // ===========================================================================
`;

  // Insert before the closing bracket
  const beforeClosing = content.substring(0, closingBracketIndex);
  const afterClosing = content.substring(closingBracketIndex);

  const newContent = beforeClosing + ',\n' + header + '\n' + powerQuestionsStr + '\n' + afterClosing;

  // Write the updated file
  await fs.writeFile(n3Path, newContent, 'utf-8');

  console.log('✅ Successfully APPENDED', powerQuestions.length, 'power questions to N3!');
  console.log('📊 Breakdown:');
  console.log('  - Level 1 (Powers of 10): 14 questions');
  console.log('  - Level 2 (Scientific notation): 8 questions');
  console.log('  - Level 3 (Power calculations): 18 questions');
  console.log('📈 Total questions in N3 now: ~', (118 + powerQuestions.length));
}

main().catch(console.error);
