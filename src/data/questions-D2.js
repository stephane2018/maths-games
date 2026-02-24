// =============================================================================
// D2 - Statistiques
// CE1D Belgian exam - Trilingual (FR / EN / NL)
// =============================================================================

export const questions = [
  // Level 1 — Mean (average)
  {
    id: "D2_s_1", category: "D2", level: 1,
    text: { fr: "Quelle est la moyenne de : 4, 8, 6, 10, 2 ?", en: "What is the mean of: 4, 8, 6, 10, 2?", nl: "Wat is het gemiddelde van: 4, 8, 6, 10, 2?" },
    answer: 6, tolerance: 0.01,
    hint: { fr: "Additionne tout, puis divise par 5.", en: "Add all, then divide by 5.", nl: "Tel alles op, deel dan door 5." }
  },
  {
    id: "D2_s_2", category: "D2", level: 1,
    text: { fr: "Quelle est la moyenne de : 12, 8, 15, 5 ?", en: "What is the mean of: 12, 8, 15, 5?", nl: "Wat is het gemiddelde van: 12, 8, 15, 5?" },
    answer: 10, tolerance: 0.01,
    hint: { fr: "(12 + 8 + 15 + 5) : 4.", en: "(12 + 8 + 15 + 5) : 4.", nl: "(12 + 8 + 15 + 5) : 4." }
  },
  {
    id: "D2_s_3", category: "D2", level: 1,
    text: { fr: "Quelle est la moyenne de : 7, 3, 5, 9, 6 ?", en: "What is the mean of: 7, 3, 5, 9, 6?", nl: "Wat is het gemiddelde van: 7, 3, 5, 9, 6?" },
    answer: 6, tolerance: 0.01,
    hint: { fr: "Total = 30. Puis 30 : 5.", en: "Total = 30. Then 30 : 5.", nl: "Totaal = 30. Dan 30 : 5." }
  },
  {
    id: "D2_s_4", category: "D2", level: 1,
    text: { fr: "Quelle est la moyenne de : 20, 30, 40 ?", en: "What is the mean of: 20, 30, 40?", nl: "Wat is het gemiddelde van: 20, 30, 40?" },
    answer: 30, tolerance: 0.01,
    hint: { fr: "(20 + 30 + 40) : 3.", en: "(20 + 30 + 40) : 3.", nl: "(20 + 30 + 40) : 3." }
  },
  {
    id: "D2_s_5", category: "D2", level: 1,
    text: { fr: "Quelle est la moyenne de : 15, 25, 10, 30 ?", en: "What is the mean of: 15, 25, 10, 30?", nl: "Wat is het gemiddelde van: 15, 25, 10, 30?" },
    answer: 20, tolerance: 0.01,
    hint: { fr: "(15 + 25 + 10 + 30) : 4.", en: "(15 + 25 + 10 + 30) : 4.", nl: "(15 + 25 + 10 + 30) : 4." }
  },
  {
    id: "D2_s_16", category: "D2", level: 1,
    text: { fr: "Quelle est la moyenne de : 3, 9, 6 ?", en: "What is the mean of: 3, 9, 6?", nl: "Wat is het gemiddelde van: 3, 9, 6?" },
    answer: 6, tolerance: 0.01,
    hint: { fr: "(3 + 9 + 6) : 3 = 18 : 3.", en: "(3 + 9 + 6) : 3 = 18 : 3.", nl: "(3 + 9 + 6) : 3 = 18 : 3." }
  },
  {
    id: "D2_s_17", category: "D2", level: 1,
    text: { fr: "Quelle est la moyenne de : 10, 14, 8, 12 ?", en: "What is the mean of: 10, 14, 8, 12?", nl: "Wat is het gemiddelde van: 10, 14, 8, 12?" },
    answer: 11, tolerance: 0.01,
    hint: { fr: "(10 + 14 + 8 + 12) : 4 = 44 : 4.", en: "(10 + 14 + 8 + 12) : 4 = 44 : 4.", nl: "(10 + 14 + 8 + 12) : 4 = 44 : 4." }
  },
  {
    id: "D2_s_18", category: "D2", level: 1,
    text: { fr: "Quelle est la moyenne de : 5, 15, 10, 20, 25 ?", en: "What is the mean of: 5, 15, 10, 20, 25?", nl: "Wat is het gemiddelde van: 5, 15, 10, 20, 25?" },
    answer: 15, tolerance: 0.01,
    hint: { fr: "Total = 75. Puis 75 : 5.", en: "Total = 75. Then 75 : 5.", nl: "Totaal = 75. Dan 75 : 5." }
  },
  {
    id: "D2_s_19", category: "D2", level: 1,
    text: { fr: "Quelle est la moyenne de : 2, 6, 4 ?", en: "What is the mean of: 2, 6, 4?", nl: "Wat is het gemiddelde van: 2, 6, 4?" },
    answer: 4, tolerance: 0.01,
    hint: { fr: "(2 + 6 + 4) : 3 = 12 : 3.", en: "(2 + 6 + 4) : 3 = 12 : 3.", nl: "(2 + 6 + 4) : 3 = 12 : 3." }
  },
  {
    id: "D2_s_20", category: "D2", level: 1,
    text: { fr: "Quelle est la moyenne de : 18, 12, 6, 24 ?", en: "What is the mean of: 18, 12, 6, 24?", nl: "Wat is het gemiddelde van: 18, 12, 6, 24?" },
    answer: 15, tolerance: 0.01,
    hint: { fr: "(18 + 12 + 6 + 24) : 4 = 60 : 4.", en: "(18 + 12 + 6 + 24) : 4 = 60 : 4.", nl: "(18 + 12 + 6 + 24) : 4 = 60 : 4." }
  },
  {
    id: "D2_s_21", category: "D2", level: 1,
    text: { fr: "Quelle est la moyenne de : 11, 7, 9, 5, 8 ?", en: "What is the mean of: 11, 7, 9, 5, 8?", nl: "Wat is het gemiddelde van: 11, 7, 9, 5, 8?" },
    answer: 8, tolerance: 0.01,
    hint: { fr: "Total = 40. Puis 40 : 5.", en: "Total = 40. Then 40 : 5.", nl: "Totaal = 40. Dan 40 : 5." }
  },
  {
    id: "D2_s_22", category: "D2", level: 1,
    text: { fr: "Quelle est la moyenne de : 14, 22, 18 ?", en: "What is the mean of: 14, 22, 18?", nl: "Wat is het gemiddelde van: 14, 22, 18?" },
    answer: 18, tolerance: 0.01,
    hint: { fr: "(14 + 22 + 18) : 3 = 54 : 3.", en: "(14 + 22 + 18) : 3 = 54 : 3.", nl: "(14 + 22 + 18) : 3 = 54 : 3." }
  },
  {
    id: "D2_s_23", category: "D2", level: 1,
    text: { fr: "Quelle est la moyenne de : 3, 7, 5, 9, 1 ?", en: "What is the mean of: 3, 7, 5, 9, 1?", nl: "Wat is het gemiddelde van: 3, 7, 5, 9, 1?" },
    answer: 5, tolerance: 0.01,
    hint: { fr: "Total = 25. Puis 25 : 5.", en: "Total = 25. Then 25 : 5.", nl: "Totaal = 25. Dan 25 : 5." }
  },
  {
    id: "D2_s_24", category: "D2", level: 1,
    text: { fr: "Quelle est la moyenne de : 16, 20, 24 ?", en: "What is the mean of: 16, 20, 24?", nl: "Wat is het gemiddelde van: 16, 20, 24?" },
    answer: 20, tolerance: 0.01,
    hint: { fr: "(16 + 20 + 24) : 3 = 60 : 3.", en: "(16 + 20 + 24) : 3 = 60 : 3.", nl: "(16 + 20 + 24) : 3 = 60 : 3." }
  },
  {
    id: "D2_s_25", category: "D2", level: 1,
    text: { fr: "Quelle est la moyenne de : 6, 10, 8, 14, 12 ?", en: "What is the mean of: 6, 10, 8, 14, 12?", nl: "Wat is het gemiddelde van: 6, 10, 8, 14, 12?" },
    answer: 10, tolerance: 0.01,
    hint: { fr: "Total = 50. Puis 50 : 5.", en: "Total = 50. Then 50 : 5.", nl: "Totaal = 50. Dan 50 : 5." }
  },
  {
    id: "D2_s_26", category: "D2", level: 1,
    text: { fr: "Quelle est la moyenne de : 9, 3, 15, 21, 12 ?", en: "What is the mean of: 9, 3, 15, 21, 12?", nl: "Wat is het gemiddelde van: 9, 3, 15, 21, 12?" },
    answer: 12, tolerance: 0.01,
    hint: { fr: "Total = 60. Puis 60 : 5.", en: "Total = 60. Then 60 : 5.", nl: "Totaal = 60. Dan 60 : 5." }
  },
  {
    id: "D2_s_27", category: "D2", level: 1,
    text: { fr: "Quelle est la moyenne de : 25, 35, 15, 45, 30 ?", en: "What is the mean of: 25, 35, 15, 45, 30?", nl: "Wat is het gemiddelde van: 25, 35, 15, 45, 30?" },
    answer: 30, tolerance: 0.01,
    hint: { fr: "Total = 150. Puis 150 : 5.", en: "Total = 150. Then 150 : 5.", nl: "Totaal = 150. Dan 150 : 5." }
  },
  // Level 2 — Range, median
  {
    id: "D2_s_6", category: "D2", level: 2,
    text: { fr: "Quel est l'étendue de : 3, 8, 15, 2, 10 ?", en: "What is the range of: 3, 8, 15, 2, 10?", nl: "Wat is het bereik van: 3, 8, 15, 2, 10?" },
    answer: 13, tolerance: 0,
    hint: { fr: "Étendue = max - min = 15 - 2.", en: "Range = max - min = 15 - 2.", nl: "Bereik = max - min = 15 - 2." }
  },
  {
    id: "D2_s_7", category: "D2", level: 2,
    text: { fr: "Quelle est la médiane de : 2, 5, 7, 10, 14 ?", en: "What is the median of: 2, 5, 7, 10, 14?", nl: "Wat is de mediaan van: 2, 5, 7, 10, 14?" },
    answer: 7, tolerance: 0,
    hint: { fr: "Les données sont déjà triées. La médiane est la valeur du milieu.", en: "Data is already sorted. The median is the middle value.", nl: "De data is al gesorteerd. De mediaan is de middelste waarde." }
  },
  {
    id: "D2_s_8", category: "D2", level: 2,
    text: { fr: "Quel est l'étendue de : 12, 4, 18, 7, 9 ?", en: "What is the range of: 12, 4, 18, 7, 9?", nl: "Wat is het bereik van: 12, 4, 18, 7, 9?" },
    answer: 14, tolerance: 0,
    hint: { fr: "18 - 4 = 14.", en: "18 - 4 = 14.", nl: "18 - 4 = 14." }
  },
  {
    id: "D2_s_9", category: "D2", level: 2,
    text: { fr: "Quelle est la médiane de : 3, 6, 9, 12, 15 ?", en: "What is the median of: 3, 6, 9, 12, 15?", nl: "Wat is de mediaan van: 3, 6, 9, 12, 15?" },
    answer: 9, tolerance: 0,
    hint: { fr: "Valeur du milieu parmi 5 nombres triés.", en: "Middle value of 5 sorted numbers.", nl: "Middelste waarde van 5 gesorteerde getallen." }
  },
  {
    id: "D2_s_10", category: "D2", level: 2,
    text: { fr: "La moyenne de 5 nombres est 8. Quel est leur total ?", en: "The mean of 5 numbers is 8. What is their total?", nl: "Het gemiddelde van 5 getallen is 8. Wat is hun totaal?" },
    answer: 40, tolerance: 0,
    hint: { fr: "Total = moyenne . nombre de valeurs = 8 . 5.", en: "Total = mean . count = 8 . 5.", nl: "Totaal = gemiddelde . aantal = 8 . 5." }
  },
  {
    id: "D2_s_28", category: "D2", level: 2,
    text: { fr: "Quel est l'étendue de : 5, 12, 3, 20, 8 ?", en: "What is the range of: 5, 12, 3, 20, 8?", nl: "Wat is het bereik van: 5, 12, 3, 20, 8?" },
    answer: 17, tolerance: 0,
    hint: { fr: "Étendue = max - min = 20 - 3.", en: "Range = max - min = 20 - 3.", nl: "Bereik = max - min = 20 - 3." }
  },
  {
    id: "D2_s_29", category: "D2", level: 2,
    text: { fr: "Quelle est la médiane de : 1, 4, 7, 9, 13 ?", en: "What is the median of: 1, 4, 7, 9, 13?", nl: "Wat is de mediaan van: 1, 4, 7, 9, 13?" },
    answer: 7, tolerance: 0,
    hint: { fr: "Les données sont triées. La valeur du milieu est la 3e sur 5.", en: "Data is sorted. The middle value is the 3rd of 5.", nl: "De data is gesorteerd. De middelste waarde is de 3e van 5." }
  },
  {
    id: "D2_s_30", category: "D2", level: 2,
    text: { fr: "La moyenne de 8 nombres est 6. Quel est leur total ?", en: "The mean of 8 numbers is 6. What is their total?", nl: "Het gemiddelde van 8 getallen is 6. Wat is hun totaal?" },
    answer: 48, tolerance: 0,
    hint: { fr: "Total = moyenne . nombre de valeurs = 6 . 8.", en: "Total = mean . count = 6 . 8.", nl: "Totaal = gemiddelde . aantal = 6 . 8." }
  },
  {
    id: "D2_s_31", category: "D2", level: 2,
    text: { fr: "Quel est l'étendue de : 25, 10, 18, 32, 14 ?", en: "What is the range of: 25, 10, 18, 32, 14?", nl: "Wat is het bereik van: 25, 10, 18, 32, 14?" },
    answer: 22, tolerance: 0,
    hint: { fr: "32 - 10 = 22.", en: "32 - 10 = 22.", nl: "32 - 10 = 22." }
  },
  {
    id: "D2_s_32", category: "D2", level: 2,
    text: { fr: "Quelle est la médiane de : 8, 3, 15, 6, 11 ?", en: "What is the median of: 8, 3, 15, 6, 11?", nl: "Wat is de mediaan van: 8, 3, 15, 6, 11?" },
    answer: 8, tolerance: 0,
    hint: { fr: "Trie d'abord : 3, 6, 8, 11, 15. La médiane est 8.", en: "Sort first: 3, 6, 8, 11, 15. The median is 8.", nl: "Sorteer eerst: 3, 6, 8, 11, 15. De mediaan is 8." }
  },
  {
    id: "D2_s_33", category: "D2", level: 2,
    text: { fr: "La moyenne de 3 nombres est 20. Quel est leur total ?", en: "The mean of 3 numbers is 20. What is their total?", nl: "Het gemiddelde van 3 getallen is 20. Wat is hun totaal?" },
    answer: 60, tolerance: 0,
    hint: { fr: "Total = 20 . 3 = 60.", en: "Total = 20 . 3 = 60.", nl: "Totaal = 20 . 3 = 60." }
  },
  {
    id: "D2_s_34", category: "D2", level: 2,
    text: { fr: "Quel est l'étendue de : 1, 14, 9, 22, 6 ?", en: "What is the range of: 1, 14, 9, 22, 6?", nl: "Wat is het bereik van: 1, 14, 9, 22, 6?" },
    answer: 21, tolerance: 0,
    hint: { fr: "22 - 1 = 21.", en: "22 - 1 = 21.", nl: "22 - 1 = 21." }
  },
  {
    id: "D2_s_35", category: "D2", level: 2,
    text: { fr: "Quelle est la médiane de : 10, 25, 18, 7, 13 ?", en: "What is the median of: 10, 25, 18, 7, 13?", nl: "Wat is de mediaan van: 10, 25, 18, 7, 13?" },
    answer: 13, tolerance: 0,
    hint: { fr: "Trie d'abord : 7, 10, 13, 18, 25. La médiane est 13.", en: "Sort first: 7, 10, 13, 18, 25. The median is 13.", nl: "Sorteer eerst: 7, 10, 13, 18, 25. De mediaan is 13." }
  },
  {
    id: "D2_s_36", category: "D2", level: 2,
    text: { fr: "La moyenne de 10 nombres est 12. Quel est leur total ?", en: "The mean of 10 numbers is 12. What is their total?", nl: "Het gemiddelde van 10 getallen is 12. Wat is hun totaal?" },
    answer: 120, tolerance: 0,
    hint: { fr: "Total = 12 . 10 = 120.", en: "Total = 12 . 10 = 120.", nl: "Totaal = 12 . 10 = 120." }
  },
  {
    id: "D2_s_37", category: "D2", level: 2,
    text: { fr: "Quelle est la médiane de : 4, 11, 2, 19, 16 ?", en: "What is the median of: 4, 11, 2, 19, 16?", nl: "Wat is de mediaan van: 4, 11, 2, 19, 16?" },
    answer: 11, tolerance: 0,
    hint: { fr: "Trie d'abord : 2, 4, 11, 16, 19. La médiane est 11.", en: "Sort first: 2, 4, 11, 16, 19. The median is 11.", nl: "Sorteer eerst: 2, 4, 11, 16, 19. De mediaan is 11." }
  },
  {
    id: "D2_s_38", category: "D2", level: 2,
    text: { fr: "Quel est l'étendue de : 45, 12, 33, 8, 27 ?", en: "What is the range of: 45, 12, 33, 8, 27?", nl: "Wat is het bereik van: 45, 12, 33, 8, 27?" },
    answer: 37, tolerance: 0,
    hint: { fr: "45 - 8 = 37.", en: "45 - 8 = 37.", nl: "45 - 8 = 37." }
  },
  {
    id: "D2_s_39", category: "D2", level: 2,
    text: { fr: "Quelle est la médiane de : 22, 15, 31, 9, 18 ?", en: "What is the median of: 22, 15, 31, 9, 18?", nl: "Wat is de mediaan van: 22, 15, 31, 9, 18?" },
    answer: 18, tolerance: 0,
    hint: { fr: "Trie d'abord : 9, 15, 18, 22, 31. La médiane est 18.", en: "Sort first: 9, 15, 18, 22, 31. The median is 18.", nl: "Sorteer eerst: 9, 15, 18, 22, 31. De mediaan is 18." }
  },
  // Level 3 — Inverse problems, mode
  {
    id: "D2_s_11", category: "D2", level: 3,
    text: { fr: "Notes : 12, 8, 15, 9, 6. Combien faut-il au 6e contrôle pour une moyenne de 10 ?", en: "Scores: 12, 8, 15, 9, 6. What score is needed on the 6th test for a mean of 10?", nl: "Punten: 12, 8, 15, 9, 6. Welk punt is nodig op de 6e toets voor een gemiddelde van 10?" },
    answer: 10, tolerance: 0,
    hint: { fr: "10 . 6 = 60. Total actuel = 50. Il manque 10.", en: "10 . 6 = 60. Current total = 50. Need 10 more.", nl: "10 . 6 = 60. Huidig totaal = 50. Nog 10 nodig." }
  },
  {
    id: "D2_s_12", category: "D2", level: 3,
    text: { fr: "La moyenne de 4 nombres est 15. On ajoute 25. Quelle est la nouvelle moyenne ?", en: "The mean of 4 numbers is 15. Adding 25 gives what new mean?", nl: "Het gemiddelde van 4 getallen is 15. Na toevoeging van 25, wat is het nieuwe gemiddelde?" },
    answer: 17, tolerance: 0.01,
    hint: { fr: "Total = 60 + 25 = 85. Nouvelle moyenne = 85 : 5.", en: "Total = 60 + 25 = 85. New mean = 85 : 5.", nl: "Totaal = 60 + 25 = 85. Nieuw gemiddelde = 85 : 5." }
  },
  {
    id: "D2_s_13", category: "D2", level: 3,
    text: { fr: "Données : 3, 5, 5, 7, 8, 8, 8, 10. Quel est le mode ?", en: "Data: 3, 5, 5, 7, 8, 8, 8, 10. What is the mode?", nl: "Data: 3, 5, 5, 7, 8, 8, 8, 10. Wat is de modus?" },
    answer: 8, tolerance: 0,
    hint: { fr: "Le mode est la valeur la plus fréquente.", en: "The mode is the most frequent value.", nl: "De modus is de meest voorkomende waarde." }
  },
  {
    id: "D2_s_14", category: "D2", level: 3,
    text: { fr: "La moyenne de 3 nombres est 12. Les deux premiers sont 10 et 14. Quel est le troisième ?", en: "The mean of 3 numbers is 12. The first two are 10 and 14. What is the third?", nl: "Het gemiddelde van 3 getallen is 12. De eerste twee zijn 10 en 14. Wat is het derde?" },
    answer: 12, tolerance: 0,
    hint: { fr: "Total = 36. 36 - 10 - 14 = 12.", en: "Total = 36. 36 - 10 - 14 = 12.", nl: "Totaal = 36. 36 - 10 - 14 = 12." }
  },
  {
    id: "D2_s_15", category: "D2", level: 3,
    text: { fr: "La moyenne de 6 nombres est 5. On retire le nombre 11. Quelle est la nouvelle moyenne ?", en: "The mean of 6 numbers is 5. Removing 11 gives what new mean?", nl: "Het gemiddelde van 6 getallen is 5. Na verwijdering van 11, wat is het nieuwe gemiddelde?" },
    answer: 3.8, tolerance: 0.01,
    hint: { fr: "Total = 30. Nouveau total = 30 - 11 = 19. 19 : 5 = 3,8.", en: "Total = 30. New total = 30 - 11 = 19. 19 : 5 = 3.8.", nl: "Totaal = 30. Nieuw totaal = 30 - 11 = 19. 19 : 5 = 3,8." }
  },
  {
    id: "D2_s_40", category: "D2", level: 3,
    text: { fr: "Notes : 14, 10, 8, 12, 16. Combien faut-il au 6e contrôle pour une moyenne de 12 ?", en: "Scores: 14, 10, 8, 12, 16. What score is needed on the 6th test for a mean of 12?", nl: "Punten: 14, 10, 8, 12, 16. Welk punt is nodig op de 6e toets voor een gemiddelde van 12?" },
    answer: 12, tolerance: 0,
    hint: { fr: "12 . 6 = 72. Total actuel = 60. Il manque 12.", en: "12 . 6 = 72. Current total = 60. Need 12 more.", nl: "12 . 6 = 72. Huidig totaal = 60. Nog 12 nodig." }
  },
  {
    id: "D2_s_41", category: "D2", level: 3,
    text: { fr: "La moyenne de 5 nombres est 10. On ajoute 16. Quelle est la nouvelle moyenne ?", en: "The mean of 5 numbers is 10. Adding 16 gives what new mean?", nl: "Het gemiddelde van 5 getallen is 10. Na toevoeging van 16, wat is het nieuwe gemiddelde?" },
    answer: 11, tolerance: 0.01,
    hint: { fr: "Total = 50 + 16 = 66. Nouvelle moyenne = 66 : 6.", en: "Total = 50 + 16 = 66. New mean = 66 : 6.", nl: "Totaal = 50 + 16 = 66. Nieuw gemiddelde = 66 : 6." }
  },
  {
    id: "D2_s_42", category: "D2", level: 3,
    text: { fr: "Données : 2, 4, 4, 6, 7, 7, 7, 9. Quel est le mode ?", en: "Data: 2, 4, 4, 6, 7, 7, 7, 9. What is the mode?", nl: "Data: 2, 4, 4, 6, 7, 7, 7, 9. Wat is de modus?" },
    answer: 7, tolerance: 0,
    hint: { fr: "Le mode est la valeur la plus fréquente. 7 apparaît 3 fois.", en: "The mode is the most frequent value. 7 appears 3 times.", nl: "De modus is de meest voorkomende waarde. 7 komt 3 keer voor." }
  },
  {
    id: "D2_s_43", category: "D2", level: 3,
    text: { fr: "La moyenne de 4 nombres est 20. Les trois premiers sont 18, 22 et 16. Quel est le quatrième ?", en: "The mean of 4 numbers is 20. The first three are 18, 22, and 16. What is the fourth?", nl: "Het gemiddelde van 4 getallen is 20. De eerste drie zijn 18, 22 en 16. Wat is het vierde?" },
    answer: 24, tolerance: 0,
    hint: { fr: "Total = 80. 80 - 18 - 22 - 16 = 24.", en: "Total = 80. 80 - 18 - 22 - 16 = 24.", nl: "Totaal = 80. 80 - 18 - 22 - 16 = 24." }
  },
  {
    id: "D2_s_44", category: "D2", level: 3,
    text: { fr: "La moyenne de 5 nombres est 12. On retire le nombre 2. Quelle est la nouvelle moyenne ?", en: "The mean of 5 numbers is 12. Removing 2 gives what new mean?", nl: "Het gemiddelde van 5 getallen is 12. Na verwijdering van 2, wat is het nieuwe gemiddelde?" },
    answer: 14.5, tolerance: 0.01,
    hint: { fr: "Total = 60. Nouveau total = 60 - 2 = 58. 58 : 4 = 14,5.", en: "Total = 60. New total = 60 - 2 = 58. 58 : 4 = 14.5.", nl: "Totaal = 60. Nieuw totaal = 60 - 2 = 58. 58 : 4 = 14,5." }
  },
  {
    id: "D2_s_45", category: "D2", level: 3,
    text: { fr: "Notes : 7, 5, 9, 11. Combien faut-il au 5e contrôle pour une moyenne de 8 ?", en: "Scores: 7, 5, 9, 11. What score is needed on the 5th test for a mean of 8?", nl: "Punten: 7, 5, 9, 11. Welk punt is nodig op de 5e toets voor een gemiddelde van 8?" },
    answer: 8, tolerance: 0,
    hint: { fr: "8 . 5 = 40. Total actuel = 32. Il manque 8.", en: "8 . 5 = 40. Current total = 32. Need 8 more.", nl: "8 . 5 = 40. Huidig totaal = 32. Nog 8 nodig." }
  },
  {
    id: "D2_s_46", category: "D2", level: 3,
    text: { fr: "Données : 1, 3, 3, 5, 6, 6, 6, 8, 9. Quel est le mode ?", en: "Data: 1, 3, 3, 5, 6, 6, 6, 8, 9. What is the mode?", nl: "Data: 1, 3, 3, 5, 6, 6, 6, 8, 9. Wat is de modus?" },
    answer: 6, tolerance: 0,
    hint: { fr: "Le mode est la valeur la plus fréquente. 6 apparaît 3 fois.", en: "The mode is the most frequent value. 6 appears 3 times.", nl: "De modus is de meest voorkomende waarde. 6 komt 3 keer voor." }
  },
  {
    id: "D2_s_47", category: "D2", level: 3,
    text: { fr: "La moyenne de 5 nombres est 14. Les quatre premiers sont 12, 16, 10 et 18. Quel est le cinquième ?", en: "The mean of 5 numbers is 14. The first four are 12, 16, 10, and 18. What is the fifth?", nl: "Het gemiddelde van 5 getallen is 14. De eerste vier zijn 12, 16, 10 en 18. Wat is het vijfde?" },
    answer: 14, tolerance: 0,
    hint: { fr: "Total = 70. 70 - 12 - 16 - 10 - 18 = 14.", en: "Total = 70. 70 - 12 - 16 - 10 - 18 = 14.", nl: "Totaal = 70. 70 - 12 - 16 - 10 - 18 = 14." }
  },
  {
    id: "D2_s_48", category: "D2", level: 3,
    text: { fr: "La moyenne de 3 nombres est 25. On ajoute 13. Quelle est la nouvelle moyenne ?", en: "The mean of 3 numbers is 25. Adding 13 gives what new mean?", nl: "Het gemiddelde van 3 getallen is 25. Na toevoeging van 13, wat is het nieuwe gemiddelde?" },
    answer: 22, tolerance: 0.01,
    hint: { fr: "Total = 75 + 13 = 88. Nouvelle moyenne = 88 : 4.", en: "Total = 75 + 13 = 88. New mean = 88 : 4.", nl: "Totaal = 75 + 13 = 88. Nieuw gemiddelde = 88 : 4." }
  },
  {
    id: "D2_s_49", category: "D2", level: 3,
    text: { fr: "Données : 10, 12, 12, 15, 15, 15, 18, 20. Quel est le mode ?", en: "Data: 10, 12, 12, 15, 15, 15, 18, 20. What is the mode?", nl: "Data: 10, 12, 12, 15, 15, 15, 18, 20. Wat is de modus?" },
    answer: 15, tolerance: 0,
    hint: { fr: "Le mode est la valeur la plus fréquente. 15 apparaît 3 fois.", en: "The mode is the most frequent value. 15 appears 3 times.", nl: "De modus is de meest voorkomende waarde. 15 komt 3 keer voor." }
  },
  {
    id: "D2_s_50", category: "D2", level: 3,
    text: { fr: "Notes : 20, 15, 18, 22, 10. Combien faut-il au 6e contrôle pour une moyenne de 18 ?", en: "Scores: 20, 15, 18, 22, 10. What score is needed on the 6th test for a mean of 18?", nl: "Punten: 20, 15, 18, 22, 10. Welk punt is nodig op de 6e toets voor een gemiddelde van 18?" },
    answer: 23, tolerance: 0,
    hint: { fr: "18 . 6 = 108. Total actuel = 85. Il manque 23.", en: "18 . 6 = 108. Current total = 85. Need 23 more.", nl: "18 . 6 = 108. Huidig totaal = 85. Nog 23 nodig." }
  },

  // =========================================================================
  // Questions 51–111 (61 new questions)
  // =========================================================================

  // Level 1 — Mean (questions 51–71, 21 questions)
  {
    id: "D2_s_51", category: "D2", level: 1,
    text: { fr: "Quelle est la moyenne de : 8, 12, 10 ?", en: "What is the mean of: 8, 12, 10?", nl: "Wat is het gemiddelde van: 8, 12, 10?" },
    answer: 10, tolerance: 0.01,
    hint: { fr: "(8 + 12 + 10) : 3 = 30 : 3.", en: "(8 + 12 + 10) : 3 = 30 : 3.", nl: "(8 + 12 + 10) : 3 = 30 : 3." }
  },
  {
    id: "D2_s_52", category: "D2", level: 1,
    text: { fr: "Quelle est la moyenne de : 5, 7, 11, 9 ?", en: "What is the mean of: 5, 7, 11, 9?", nl: "Wat is het gemiddelde van: 5, 7, 11, 9?" },
    answer: 8, tolerance: 0.01,
    hint: { fr: "(5 + 7 + 11 + 9) : 4 = 32 : 4.", en: "(5 + 7 + 11 + 9) : 4 = 32 : 4.", nl: "(5 + 7 + 11 + 9) : 4 = 32 : 4." }
  },
  {
    id: "D2_s_53", category: "D2", level: 1,
    text: { fr: "Quelle est la moyenne de : 6, 14, 10, 18, 2 ?", en: "What is the mean of: 6, 14, 10, 18, 2?", nl: "Wat is het gemiddelde van: 6, 14, 10, 18, 2?" },
    answer: 10, tolerance: 0.01,
    hint: { fr: "Total = 50. Puis 50 : 5.", en: "Total = 50. Then 50 : 5.", nl: "Totaal = 50. Dan 50 : 5." }
  },
  {
    id: "D2_s_54", category: "D2", level: 1,
    text: { fr: "Quelle est la moyenne de : 4, 8, 12 ?", en: "What is the mean of: 4, 8, 12?", nl: "Wat is het gemiddelde van: 4, 8, 12?" },
    answer: 8, tolerance: 0.01,
    hint: { fr: "(4 + 8 + 12) : 3 = 24 : 3.", en: "(4 + 8 + 12) : 3 = 24 : 3.", nl: "(4 + 8 + 12) : 3 = 24 : 3." }
  },
  {
    id: "D2_s_55", category: "D2", level: 1,
    text: { fr: "Quelle est la moyenne de : 13, 7, 11, 9 ?", en: "What is the mean of: 13, 7, 11, 9?", nl: "Wat is het gemiddelde van: 13, 7, 11, 9?" },
    answer: 10, tolerance: 0.01,
    hint: { fr: "(13 + 7 + 11 + 9) : 4 = 40 : 4.", en: "(13 + 7 + 11 + 9) : 4 = 40 : 4.", nl: "(13 + 7 + 11 + 9) : 4 = 40 : 4." }
  },
  {
    id: "D2_s_56", category: "D2", level: 1,
    text: { fr: "Quelle est la moyenne de : 2, 10, 6, 14, 8 ?", en: "What is the mean of: 2, 10, 6, 14, 8?", nl: "Wat is het gemiddelde van: 2, 10, 6, 14, 8?" },
    answer: 8, tolerance: 0.01,
    hint: { fr: "Total = 40. Puis 40 : 5.", en: "Total = 40. Then 40 : 5.", nl: "Totaal = 40. Dan 40 : 5." }
  },
  {
    id: "D2_s_57", category: "D2", level: 1,
    text: { fr: "Quelle est la moyenne de : 30, 10, 20 ?", en: "What is the mean of: 30, 10, 20?", nl: "Wat is het gemiddelde van: 30, 10, 20?" },
    answer: 20, tolerance: 0.01,
    hint: { fr: "(30 + 10 + 20) : 3 = 60 : 3.", en: "(30 + 10 + 20) : 3 = 60 : 3.", nl: "(30 + 10 + 20) : 3 = 60 : 3." }
  },
  {
    id: "D2_s_58", category: "D2", level: 1,
    text: { fr: "Quelle est la moyenne de : 5, 11, 7, 13, 4 ?", en: "What is the mean of: 5, 11, 7, 13, 4?", nl: "Wat is het gemiddelde van: 5, 11, 7, 13, 4?" },
    answer: 8, tolerance: 0.01,
    hint: { fr: "Total = 40. Puis 40 : 5.", en: "Total = 40. Then 40 : 5.", nl: "Totaal = 40. Dan 40 : 5." }
  },
  {
    id: "D2_s_59", category: "D2", level: 1,
    text: { fr: "Quelle est la moyenne de : 15, 25, 20, 40 ?", en: "What is the mean of: 15, 25, 20, 40?", nl: "Wat is het gemiddelde van: 15, 25, 20, 40?" },
    answer: 25, tolerance: 0.01,
    hint: { fr: "(15 + 25 + 20 + 40) : 4 = 100 : 4.", en: "(15 + 25 + 20 + 40) : 4 = 100 : 4.", nl: "(15 + 25 + 20 + 40) : 4 = 100 : 4." }
  },
  {
    id: "D2_s_60", category: "D2", level: 1,
    text: { fr: "Quelle est la moyenne de : 1, 5, 3, 7, 9 ?", en: "What is the mean of: 1, 5, 3, 7, 9?", nl: "Wat is het gemiddelde van: 1, 5, 3, 7, 9?" },
    answer: 5, tolerance: 0.01,
    hint: { fr: "Total = 25. Puis 25 : 5.", en: "Total = 25. Then 25 : 5.", nl: "Totaal = 25. Dan 25 : 5." }
  },
  {
    id: "D2_s_61", category: "D2", level: 1,
    text: { fr: "Quelle est la moyenne de : 6, 18, 12 ?", en: "What is the mean of: 6, 18, 12?", nl: "Wat is het gemiddelde van: 6, 18, 12?" },
    answer: 12, tolerance: 0.01,
    hint: { fr: "(6 + 18 + 12) : 3 = 36 : 3.", en: "(6 + 18 + 12) : 3 = 36 : 3.", nl: "(6 + 18 + 12) : 3 = 36 : 3." }
  },
  {
    id: "D2_s_62", category: "D2", level: 1,
    text: { fr: "Quelle est la moyenne de : 8, 4, 16, 12 ?", en: "What is the mean of: 8, 4, 16, 12?", nl: "Wat is het gemiddelde van: 8, 4, 16, 12?" },
    answer: 10, tolerance: 0.01,
    hint: { fr: "(8 + 4 + 16 + 12) : 4 = 40 : 4.", en: "(8 + 4 + 16 + 12) : 4 = 40 : 4.", nl: "(8 + 4 + 16 + 12) : 4 = 40 : 4." }
  },
  {
    id: "D2_s_63", category: "D2", level: 1,
    text: { fr: "Quelle est la moyenne de : 3, 11, 7, 15, 14 ?", en: "What is the mean of: 3, 11, 7, 15, 14?", nl: "Wat is het gemiddelde van: 3, 11, 7, 15, 14?" },
    answer: 10, tolerance: 0.01,
    hint: { fr: "Total = 50. Puis 50 : 5.", en: "Total = 50. Then 50 : 5.", nl: "Totaal = 50. Dan 50 : 5." }
  },
  {
    id: "D2_s_64", category: "D2", level: 1,
    text: { fr: "Quelle est la moyenne de : 22, 14, 18 ?", en: "What is the mean of: 22, 14, 18?", nl: "Wat is het gemiddelde van: 22, 14, 18?" },
    answer: 18, tolerance: 0.01,
    hint: { fr: "(22 + 14 + 18) : 3 = 54 : 3.", en: "(22 + 14 + 18) : 3 = 54 : 3.", nl: "(22 + 14 + 18) : 3 = 54 : 3." }
  },
  {
    id: "D2_s_65", category: "D2", level: 1,
    text: { fr: "Quelle est la moyenne de : 9, 3, 6, 12, 15 ?", en: "What is the mean of: 9, 3, 6, 12, 15?", nl: "Wat is het gemiddelde van: 9, 3, 6, 12, 15?" },
    answer: 9, tolerance: 0.01,
    hint: { fr: "Total = 45. Puis 45 : 5.", en: "Total = 45. Then 45 : 5.", nl: "Totaal = 45. Dan 45 : 5." }
  },
  {
    id: "D2_s_66", category: "D2", level: 1,
    text: { fr: "Quelle est la moyenne de : 7, 13, 11, 9 ?", en: "What is the mean of: 7, 13, 11, 9?", nl: "Wat is het gemiddelde van: 7, 13, 11, 9?" },
    answer: 10, tolerance: 0.01,
    hint: { fr: "(7 + 13 + 11 + 9) : 4 = 40 : 4.", en: "(7 + 13 + 11 + 9) : 4 = 40 : 4.", nl: "(7 + 13 + 11 + 9) : 4 = 40 : 4." }
  },
  {
    id: "D2_s_67", category: "D2", level: 1,
    text: { fr: "Quelle est la moyenne de : 2, 8, 4, 10, 6 ?", en: "What is the mean of: 2, 8, 4, 10, 6?", nl: "Wat is het gemiddelde van: 2, 8, 4, 10, 6?" },
    answer: 6, tolerance: 0.01,
    hint: { fr: "Total = 30. Puis 30 : 5.", en: "Total = 30. Then 30 : 5.", nl: "Totaal = 30. Dan 30 : 5." }
  },
  {
    id: "D2_s_68", category: "D2", level: 1,
    text: { fr: "Quelle est la moyenne de : 50, 30, 40 ?", en: "What is the mean of: 50, 30, 40?", nl: "Wat is het gemiddelde van: 50, 30, 40?" },
    answer: 40, tolerance: 0.01,
    hint: { fr: "(50 + 30 + 40) : 3 = 120 : 3.", en: "(50 + 30 + 40) : 3 = 120 : 3.", nl: "(50 + 30 + 40) : 3 = 120 : 3." }
  },
  {
    id: "D2_s_69", category: "D2", level: 1,
    text: { fr: "Quelle est la moyenne de : 12, 6, 18, 8, 16 ?", en: "What is the mean of: 12, 6, 18, 8, 16?", nl: "Wat is het gemiddelde van: 12, 6, 18, 8, 16?" },
    answer: 12, tolerance: 0.01,
    hint: { fr: "Total = 60. Puis 60 : 5.", en: "Total = 60. Then 60 : 5.", nl: "Totaal = 60. Dan 60 : 5." }
  },
  {
    id: "D2_s_70", category: "D2", level: 1,
    text: { fr: "Quelle est la moyenne de : 11, 5, 17, 7 ?", en: "What is the mean of: 11, 5, 17, 7?", nl: "Wat is het gemiddelde van: 11, 5, 17, 7?" },
    answer: 10, tolerance: 0.01,
    hint: { fr: "(11 + 5 + 17 + 7) : 4 = 40 : 4.", en: "(11 + 5 + 17 + 7) : 4 = 40 : 4.", nl: "(11 + 5 + 17 + 7) : 4 = 40 : 4." }
  },
  {
    id: "D2_s_71", category: "D2", level: 1,
    text: { fr: "Quelle est la moyenne de : 4, 8, 6, 10, 12, 2 ?", en: "What is the mean of: 4, 8, 6, 10, 12, 2?", nl: "Wat is het gemiddelde van: 4, 8, 6, 10, 12, 2?" },
    answer: 7, tolerance: 0.01,
    hint: { fr: "Total = 42. Puis 42 : 6.", en: "Total = 42. Then 42 : 6.", nl: "Totaal = 42. Dan 42 : 6." }
  },

  // Level 2 — Range, median (questions 72–91, 20 questions)
  {
    id: "D2_s_72", category: "D2", level: 2,
    text: { fr: "Quel est l'étendue de : 6, 19, 3, 11, 25 ?", en: "What is the range of: 6, 19, 3, 11, 25?", nl: "Wat is het bereik van: 6, 19, 3, 11, 25?" },
    answer: 22, tolerance: 0,
    hint: { fr: "25 - 3 = 22.", en: "25 - 3 = 22.", nl: "25 - 3 = 22." }
  },
  {
    id: "D2_s_73", category: "D2", level: 2,
    text: { fr: "Quelle est la médiane de : 5, 12, 3, 18, 9 ?", en: "What is the median of: 5, 12, 3, 18, 9?", nl: "Wat is de mediaan van: 5, 12, 3, 18, 9?" },
    answer: 9, tolerance: 0,
    hint: { fr: "Trie d'abord : 3, 5, 9, 12, 18. La médiane est 9.", en: "Sort first: 3, 5, 9, 12, 18. The median is 9.", nl: "Sorteer eerst: 3, 5, 9, 12, 18. De mediaan is 9." }
  },
  {
    id: "D2_s_74", category: "D2", level: 2,
    text: { fr: "Quel est l'étendue de : 14, 2, 28, 7, 21 ?", en: "What is the range of: 14, 2, 28, 7, 21?", nl: "Wat is het bereik van: 14, 2, 28, 7, 21?" },
    answer: 26, tolerance: 0,
    hint: { fr: "28 - 2 = 26.", en: "28 - 2 = 26.", nl: "28 - 2 = 26." }
  },
  {
    id: "D2_s_75", category: "D2", level: 2,
    text: { fr: "Quelle est la médiane de : 20, 8, 14, 3, 11 ?", en: "What is the median of: 20, 8, 14, 3, 11?", nl: "Wat is de mediaan van: 20, 8, 14, 3, 11?" },
    answer: 11, tolerance: 0,
    hint: { fr: "Trie d'abord : 3, 8, 11, 14, 20. La médiane est 11.", en: "Sort first: 3, 8, 11, 14, 20. The median is 11.", nl: "Sorteer eerst: 3, 8, 11, 14, 20. De mediaan is 11." }
  },
  {
    id: "D2_s_76", category: "D2", level: 2,
    text: { fr: "La moyenne de 6 nombres est 9. Quel est leur total ?", en: "The mean of 6 numbers is 9. What is their total?", nl: "Het gemiddelde van 6 getallen is 9. Wat is hun totaal?" },
    answer: 54, tolerance: 0,
    hint: { fr: "Total = 9 . 6 = 54.", en: "Total = 9 . 6 = 54.", nl: "Totaal = 9 . 6 = 54." }
  },
  {
    id: "D2_s_77", category: "D2", level: 2,
    text: { fr: "Quel est l'étendue de : 17, 5, 30, 12, 22 ?", en: "What is the range of: 17, 5, 30, 12, 22?", nl: "Wat is het bereik van: 17, 5, 30, 12, 22?" },
    answer: 25, tolerance: 0,
    hint: { fr: "30 - 5 = 25.", en: "30 - 5 = 25.", nl: "30 - 5 = 25." }
  },
  {
    id: "D2_s_78", category: "D2", level: 2,
    text: { fr: "Quelle est la médiane de : 6, 15, 21, 3, 10 ?", en: "What is the median of: 6, 15, 21, 3, 10?", nl: "Wat is de mediaan van: 6, 15, 21, 3, 10?" },
    answer: 10, tolerance: 0,
    hint: { fr: "Trie d'abord : 3, 6, 10, 15, 21. La médiane est 10.", en: "Sort first: 3, 6, 10, 15, 21. The median is 10.", nl: "Sorteer eerst: 3, 6, 10, 15, 21. De mediaan is 10." }
  },
  {
    id: "D2_s_79", category: "D2", level: 2,
    text: { fr: "Quel est l'étendue de : 40, 15, 23, 8, 31 ?", en: "What is the range of: 40, 15, 23, 8, 31?", nl: "Wat is het bereik van: 40, 15, 23, 8, 31?" },
    answer: 32, tolerance: 0,
    hint: { fr: "40 - 8 = 32.", en: "40 - 8 = 32.", nl: "40 - 8 = 32." }
  },
  {
    id: "D2_s_80", category: "D2", level: 2,
    text: { fr: "Quelle est la médiane de : 13, 27, 5, 19, 8 ?", en: "What is the median of: 13, 27, 5, 19, 8?", nl: "Wat is de mediaan van: 13, 27, 5, 19, 8?" },
    answer: 13, tolerance: 0,
    hint: { fr: "Trie d'abord : 5, 8, 13, 19, 27. La médiane est 13.", en: "Sort first: 5, 8, 13, 19, 27. The median is 13.", nl: "Sorteer eerst: 5, 8, 13, 19, 27. De mediaan is 13." }
  },
  {
    id: "D2_s_81", category: "D2", level: 2,
    text: { fr: "La moyenne de 4 nombres est 25. Quel est leur total ?", en: "The mean of 4 numbers is 25. What is their total?", nl: "Het gemiddelde van 4 getallen is 25. Wat is hun totaal?" },
    answer: 100, tolerance: 0,
    hint: { fr: "Total = 25 . 4 = 100.", en: "Total = 25 . 4 = 100.", nl: "Totaal = 25 . 4 = 100." }
  },
  {
    id: "D2_s_82", category: "D2", level: 2,
    text: { fr: "Quel est l'étendue de : 11, 3, 24, 16, 7 ?", en: "What is the range of: 11, 3, 24, 16, 7?", nl: "Wat is het bereik van: 11, 3, 24, 16, 7?" },
    answer: 21, tolerance: 0,
    hint: { fr: "24 - 3 = 21.", en: "24 - 3 = 21.", nl: "24 - 3 = 21." }
  },
  {
    id: "D2_s_83", category: "D2", level: 2,
    text: { fr: "Quelle est la médiane de : 17, 4, 23, 11, 9 ?", en: "What is the median of: 17, 4, 23, 11, 9?", nl: "Wat is de mediaan van: 17, 4, 23, 11, 9?" },
    answer: 11, tolerance: 0,
    hint: { fr: "Trie d'abord : 4, 9, 11, 17, 23. La médiane est 11.", en: "Sort first: 4, 9, 11, 17, 23. The median is 11.", nl: "Sorteer eerst: 4, 9, 11, 17, 23. De mediaan is 11." }
  },
  {
    id: "D2_s_84", category: "D2", level: 2,
    text: { fr: "Quel est l'étendue de : 50, 18, 35, 6, 42 ?", en: "What is the range of: 50, 18, 35, 6, 42?", nl: "Wat is het bereik van: 50, 18, 35, 6, 42?" },
    answer: 44, tolerance: 0,
    hint: { fr: "50 - 6 = 44.", en: "50 - 6 = 44.", nl: "50 - 6 = 44." }
  },
  {
    id: "D2_s_85", category: "D2", level: 2,
    text: { fr: "Quelle est la médiane de : 2, 16, 8, 22, 12 ?", en: "What is the median of: 2, 16, 8, 22, 12?", nl: "Wat is de mediaan van: 2, 16, 8, 22, 12?" },
    answer: 12, tolerance: 0,
    hint: { fr: "Trie d'abord : 2, 8, 12, 16, 22. La médiane est 12.", en: "Sort first: 2, 8, 12, 16, 22. The median is 12.", nl: "Sorteer eerst: 2, 8, 12, 16, 22. De mediaan is 12." }
  },
  {
    id: "D2_s_86", category: "D2", level: 2,
    text: { fr: "La moyenne de 7 nombres est 11. Quel est leur total ?", en: "The mean of 7 numbers is 11. What is their total?", nl: "Het gemiddelde van 7 getallen is 11. Wat is hun totaal?" },
    answer: 77, tolerance: 0,
    hint: { fr: "Total = 11 . 7 = 77.", en: "Total = 11 . 7 = 77.", nl: "Totaal = 11 . 7 = 77." }
  },
  {
    id: "D2_s_87", category: "D2", level: 2,
    text: { fr: "Quel est l'étendue de : 9, 33, 14, 27, 5 ?", en: "What is the range of: 9, 33, 14, 27, 5?", nl: "Wat is het bereik van: 9, 33, 14, 27, 5?" },
    answer: 28, tolerance: 0,
    hint: { fr: "33 - 5 = 28.", en: "33 - 5 = 28.", nl: "33 - 5 = 28." }
  },
  {
    id: "D2_s_88", category: "D2", level: 2,
    text: { fr: "Quelle est la médiane de : 30, 14, 7, 21, 18 ?", en: "What is the median of: 30, 14, 7, 21, 18?", nl: "Wat is de mediaan van: 30, 14, 7, 21, 18?" },
    answer: 18, tolerance: 0,
    hint: { fr: "Trie d'abord : 7, 14, 18, 21, 30. La médiane est 18.", en: "Sort first: 7, 14, 18, 21, 30. The median is 18.", nl: "Sorteer eerst: 7, 14, 18, 21, 30. De mediaan is 18." }
  },
  {
    id: "D2_s_89", category: "D2", level: 2,
    text: { fr: "Quel est l'étendue de : 16, 4, 38, 21, 9 ?", en: "What is the range of: 16, 4, 38, 21, 9?", nl: "Wat is het bereik van: 16, 4, 38, 21, 9?" },
    answer: 34, tolerance: 0,
    hint: { fr: "38 - 4 = 34.", en: "38 - 4 = 34.", nl: "38 - 4 = 34." }
  },
  {
    id: "D2_s_90", category: "D2", level: 2,
    text: { fr: "Quelle est la médiane de : 11, 25, 6, 19, 14 ?", en: "What is the median of: 11, 25, 6, 19, 14?", nl: "Wat is de mediaan van: 11, 25, 6, 19, 14?" },
    answer: 14, tolerance: 0,
    hint: { fr: "Trie d'abord : 6, 11, 14, 19, 25. La médiane est 14.", en: "Sort first: 6, 11, 14, 19, 25. The median is 14.", nl: "Sorteer eerst: 6, 11, 14, 19, 25. De mediaan is 14." }
  },
  {
    id: "D2_s_91", category: "D2", level: 2,
    text: { fr: "Quelle est la médiane de : 33, 8, 17, 25, 12 ?", en: "What is the median of: 33, 8, 17, 25, 12?", nl: "Wat is de mediaan van: 33, 8, 17, 25, 12?" },
    answer: 17, tolerance: 0,
    hint: { fr: "Trie d'abord : 8, 12, 17, 25, 33. La médiane est 17.", en: "Sort first: 8, 12, 17, 25, 33. The median is 17.", nl: "Sorteer eerst: 8, 12, 17, 25, 33. De mediaan is 17." }
  },

  // Level 3 — Inverse problems, mode, add/remove (questions 92–111, 20 questions)
  {
    id: "D2_s_92", category: "D2", level: 3,
    text: { fr: "Notes : 8, 14, 11, 7, 10. Combien faut-il au 6e contrôle pour une moyenne de 10 ?", en: "Scores: 8, 14, 11, 7, 10. What score is needed on the 6th test for a mean of 10?", nl: "Punten: 8, 14, 11, 7, 10. Welk punt is nodig op de 6e toets voor een gemiddelde van 10?" },
    answer: 10, tolerance: 0,
    hint: { fr: "10 . 6 = 60. Total actuel = 50. Il manque 10.", en: "10 . 6 = 60. Current total = 50. Need 10 more.", nl: "10 . 6 = 60. Huidig totaal = 50. Nog 10 nodig." }
  },
  {
    id: "D2_s_93", category: "D2", level: 3,
    text: { fr: "La moyenne de 4 nombres est 9. On ajoute 14. Quelle est la nouvelle moyenne ?", en: "The mean of 4 numbers is 9. Adding 14 gives what new mean?", nl: "Het gemiddelde van 4 getallen is 9. Na toevoeging van 14, wat is het nieuwe gemiddelde?" },
    answer: 10, tolerance: 0.01,
    hint: { fr: "Total = 36 + 14 = 50. Nouvelle moyenne = 50 : 5.", en: "Total = 36 + 14 = 50. New mean = 50 : 5.", nl: "Totaal = 36 + 14 = 50. Nieuw gemiddelde = 50 : 5." }
  },
  {
    id: "D2_s_94", category: "D2", level: 3,
    text: { fr: "Données : 5, 3, 3, 7, 8, 3, 9, 4. Quel est le mode ?", en: "Data: 5, 3, 3, 7, 8, 3, 9, 4. What is the mode?", nl: "Data: 5, 3, 3, 7, 8, 3, 9, 4. Wat is de modus?" },
    answer: 3, tolerance: 0,
    hint: { fr: "Le mode est la valeur la plus fréquente. 3 apparaît 3 fois.", en: "The mode is the most frequent value. 3 appears 3 times.", nl: "De modus is de meest voorkomende waarde. 3 komt 3 keer voor." }
  },
  {
    id: "D2_s_95", category: "D2", level: 3,
    text: { fr: "La moyenne de 4 nombres est 15. Les trois premiers sont 13, 17 et 11. Quel est le quatrième ?", en: "The mean of 4 numbers is 15. The first three are 13, 17, and 11. What is the fourth?", nl: "Het gemiddelde van 4 getallen is 15. De eerste drie zijn 13, 17 en 11. Wat is het vierde?" },
    answer: 19, tolerance: 0,
    hint: { fr: "Total = 60. 60 - 13 - 17 - 11 = 19.", en: "Total = 60. 60 - 13 - 17 - 11 = 19.", nl: "Totaal = 60. 60 - 13 - 17 - 11 = 19." }
  },
  {
    id: "D2_s_96", category: "D2", level: 3,
    text: { fr: "La moyenne de 4 nombres est 20. On retire le nombre 8. Quelle est la nouvelle moyenne ?", en: "The mean of 4 numbers is 20. Removing 8 gives what new mean?", nl: "Het gemiddelde van 4 getallen is 20. Na verwijdering van 8, wat is het nieuwe gemiddelde?" },
    answer: 24, tolerance: 0.01,
    hint: { fr: "Total = 80. Nouveau total = 80 - 8 = 72. 72 : 3 = 24.", en: "Total = 80. New total = 80 - 8 = 72. 72 : 3 = 24.", nl: "Totaal = 80. Nieuw totaal = 80 - 8 = 72. 72 : 3 = 24." }
  },
  {
    id: "D2_s_97", category: "D2", level: 3,
    text: { fr: "Notes : 6, 9, 12, 8, 15. Combien faut-il au 6e contrôle pour une moyenne de 9 ?", en: "Scores: 6, 9, 12, 8, 15. What score is needed on the 6th test for a mean of 9?", nl: "Punten: 6, 9, 12, 8, 15. Welk punt is nodig op de 6e toets voor een gemiddelde van 9?" },
    answer: 4, tolerance: 0,
    hint: { fr: "9 . 6 = 54. Total actuel = 50. Il manque 4.", en: "9 . 6 = 54. Current total = 50. Need 4 more.", nl: "9 . 6 = 54. Huidig totaal = 50. Nog 4 nodig." }
  },
  {
    id: "D2_s_98", category: "D2", level: 3,
    text: { fr: "La moyenne de 3 nombres est 18. On ajoute 6. Quelle est la nouvelle moyenne ?", en: "The mean of 3 numbers is 18. Adding 6 gives what new mean?", nl: "Het gemiddelde van 3 getallen is 18. Na toevoeging van 6, wat is het nieuwe gemiddelde?" },
    answer: 15, tolerance: 0.01,
    hint: { fr: "Total = 54 + 6 = 60. Nouvelle moyenne = 60 : 4.", en: "Total = 54 + 6 = 60. New mean = 60 : 4.", nl: "Totaal = 54 + 6 = 60. Nieuw gemiddelde = 60 : 4." }
  },
  {
    id: "D2_s_99", category: "D2", level: 3,
    text: { fr: "Données : 2, 5, 5, 8, 9, 9, 9, 12. Quel est le mode ?", en: "Data: 2, 5, 5, 8, 9, 9, 9, 12. What is the mode?", nl: "Data: 2, 5, 5, 8, 9, 9, 9, 12. Wat is de modus?" },
    answer: 9, tolerance: 0,
    hint: { fr: "Le mode est la valeur la plus fréquente. 9 apparaît 3 fois.", en: "The mode is the most frequent value. 9 appears 3 times.", nl: "De modus is de meest voorkomende waarde. 9 komt 3 keer voor." }
  },
  {
    id: "D2_s_100", category: "D2", level: 3,
    text: { fr: "La moyenne de 5 nombres est 16. Les quatre premiers sont 14, 20, 12 et 18. Quel est le cinquième ?", en: "The mean of 5 numbers is 16. The first four are 14, 20, 12, and 18. What is the fifth?", nl: "Het gemiddelde van 5 getallen is 16. De eerste vier zijn 14, 20, 12 en 18. Wat is het vijfde?" },
    answer: 16, tolerance: 0,
    hint: { fr: "Total = 80. 80 - 14 - 20 - 12 - 18 = 16.", en: "Total = 80. 80 - 14 - 20 - 12 - 18 = 16.", nl: "Totaal = 80. 80 - 14 - 20 - 12 - 18 = 16." }
  },
  {
    id: "D2_s_101", category: "D2", level: 3,
    text: { fr: "La moyenne de 4 nombres est 18. On retire le nombre 12. Quelle est la nouvelle moyenne ?", en: "The mean of 4 numbers is 18. Removing 12 gives what new mean?", nl: "Het gemiddelde van 4 getallen is 18. Na verwijdering van 12, wat is het nieuwe gemiddelde?" },
    answer: 20, tolerance: 0.01,
    hint: { fr: "Total = 72. Nouveau total = 72 - 12 = 60. 60 : 3 = 20.", en: "Total = 72. New total = 72 - 12 = 60. 60 : 3 = 20.", nl: "Totaal = 72. Nieuw totaal = 72 - 12 = 60. 60 : 3 = 20." }
  },
  {
    id: "D2_s_102", category: "D2", level: 3,
    text: { fr: "Notes : 13, 17, 9, 11, 15. Combien faut-il au 6e contrôle pour une moyenne de 12 ?", en: "Scores: 13, 17, 9, 11, 15. What score is needed on the 6th test for a mean of 12?", nl: "Punten: 13, 17, 9, 11, 15. Welk punt is nodig op de 6e toets voor een gemiddelde van 12?" },
    answer: 7, tolerance: 0,
    hint: { fr: "12 . 6 = 72. Total actuel = 65. Il manque 7.", en: "12 . 6 = 72. Current total = 65. Need 7 more.", nl: "12 . 6 = 72. Huidig totaal = 65. Nog 7 nodig." }
  },
  {
    id: "D2_s_103", category: "D2", level: 3,
    text: { fr: "La moyenne de 5 nombres est 20. On ajoute 8. Quelle est la nouvelle moyenne ?", en: "The mean of 5 numbers is 20. Adding 8 gives what new mean?", nl: "Het gemiddelde van 5 getallen is 20. Na toevoeging van 8, wat is het nieuwe gemiddelde?" },
    answer: 18, tolerance: 0.01,
    hint: { fr: "Total = 100 + 8 = 108. Nouvelle moyenne = 108 : 6.", en: "Total = 100 + 8 = 108. New mean = 108 : 6.", nl: "Totaal = 100 + 8 = 108. Nieuw gemiddelde = 108 : 6." }
  },
  {
    id: "D2_s_104", category: "D2", level: 3,
    text: { fr: "Données : 4, 7, 7, 7, 10, 12, 12, 15. Quel est le mode ?", en: "Data: 4, 7, 7, 7, 10, 12, 12, 15. What is the mode?", nl: "Data: 4, 7, 7, 7, 10, 12, 12, 15. Wat is de modus?" },
    answer: 7, tolerance: 0,
    hint: { fr: "Le mode est la valeur la plus fréquente. 7 apparaît 3 fois.", en: "The mode is the most frequent value. 7 appears 3 times.", nl: "De modus is de meest voorkomende waarde. 7 komt 3 keer voor." }
  },
  {
    id: "D2_s_105", category: "D2", level: 3,
    text: { fr: "La moyenne de 6 nombres est 11. Les cinq premiers sont 8, 14, 10, 12 et 6. Quel est le sixième ?", en: "The mean of 6 numbers is 11. The first five are 8, 14, 10, 12, and 6. What is the sixth?", nl: "Het gemiddelde van 6 getallen is 11. De eerste vijf zijn 8, 14, 10, 12 en 6. Wat is het zesde?" },
    answer: 16, tolerance: 0,
    hint: { fr: "Total = 66. 66 - 8 - 14 - 10 - 12 - 6 = 16.", en: "Total = 66. 66 - 8 - 14 - 10 - 12 - 6 = 16.", nl: "Totaal = 66. 66 - 8 - 14 - 10 - 12 - 6 = 16." }
  },
  {
    id: "D2_s_106", category: "D2", level: 3,
    text: { fr: "La moyenne de 6 nombres est 15. On retire le nombre 6. Quelle est la nouvelle moyenne ?", en: "The mean of 6 numbers is 15. Removing 6 gives what new mean?", nl: "Het gemiddelde van 6 getallen is 15. Na verwijdering van 6, wat is het nieuwe gemiddelde?" },
    answer: 16.8, tolerance: 0.01,
    hint: { fr: "Total = 90. Nouveau total = 90 - 6 = 84. 84 : 5 = 16,8.", en: "Total = 90. New total = 90 - 6 = 84. 84 : 5 = 16.8.", nl: "Totaal = 90. Nieuw totaal = 90 - 6 = 84. 84 : 5 = 16,8." }
  },
  {
    id: "D2_s_107", category: "D2", level: 3,
    text: { fr: "Notes : 5, 12, 8, 10, 15. Combien faut-il au 6e contrôle pour une moyenne de 11 ?", en: "Scores: 5, 12, 8, 10, 15. What score is needed on the 6th test for a mean of 11?", nl: "Punten: 5, 12, 8, 10, 15. Welk punt is nodig op de 6e toets voor een gemiddelde van 11?" },
    answer: 16, tolerance: 0,
    hint: { fr: "11 . 6 = 66. Total actuel = 50. Il manque 16.", en: "11 . 6 = 66. Current total = 50. Need 16 more.", nl: "11 . 6 = 66. Huidig totaal = 50. Nog 16 nodig." }
  },
  {
    id: "D2_s_108", category: "D2", level: 3,
    text: { fr: "La moyenne de 7 nombres est 9. On ajoute 5. Quelle est la nouvelle moyenne ?", en: "The mean of 7 numbers is 9. Adding 5 gives what new mean?", nl: "Het gemiddelde van 7 getallen is 9. Na toevoeging van 5, wat is het nieuwe gemiddelde?" },
    answer: 8.5, tolerance: 0.01,
    hint: { fr: "Total = 63 + 5 = 68. Nouvelle moyenne = 68 : 8.", en: "Total = 63 + 5 = 68. New mean = 68 : 8.", nl: "Totaal = 63 + 5 = 68. Nieuw gemiddelde = 68 : 8." }
  },
  {
    id: "D2_s_109", category: "D2", level: 3,
    text: { fr: "Données : 1, 4, 4, 4, 6, 8, 8, 10. Quel est le mode ?", en: "Data: 1, 4, 4, 4, 6, 8, 8, 10. What is the mode?", nl: "Data: 1, 4, 4, 4, 6, 8, 8, 10. Wat is de modus?" },
    answer: 4, tolerance: 0,
    hint: { fr: "Le mode est la valeur la plus fréquente. 4 apparaît 3 fois.", en: "The mode is the most frequent value. 4 appears 3 times.", nl: "De modus is de meest voorkomende waarde. 4 komt 3 keer voor." }
  },
  {
    id: "D2_s_110", category: "D2", level: 3,
    text: { fr: "La moyenne de 5 nombres est 18. Les quatre premiers sont 20, 15, 22 et 13. Quel est le cinquième ?", en: "The mean of 5 numbers is 18. The first four are 20, 15, 22, and 13. What is the fifth?", nl: "Het gemiddelde van 5 getallen is 18. De eerste vier zijn 20, 15, 22 en 13. Wat is het vijfde?" },
    answer: 20, tolerance: 0,
    hint: { fr: "Total = 90. 90 - 20 - 15 - 22 - 13 = 20.", en: "Total = 90. 90 - 20 - 15 - 22 - 13 = 20.", nl: "Totaal = 90. 90 - 20 - 15 - 22 - 13 = 20." }
  },
  {
    id: "D2_s_111", category: "D2", level: 3,
    text: { fr: "La moyenne de 5 nombres est 16. On retire le nombre 5. Quelle est la nouvelle moyenne ?", en: "The mean of 5 numbers is 16. Removing 5 gives what new mean?", nl: "Het gemiddelde van 5 getallen is 16. Na verwijdering van 5, wat is het nieuwe gemiddelde?" },
    answer: 18.75, tolerance: 0.01,
    hint: { fr: "Total = 80. Nouveau total = 80 - 5 = 75. 75 : 4 = 18,75.", en: "Total = 80. New total = 80 - 5 = 75. 75 : 4 = 18.75.", nl: "Totaal = 80. Nieuw totaal = 80 - 5 = 75. 75 : 4 = 18,75." }
  },
  {
    id: "D2_s_112", category: "D2", level: 1,
    text: { fr: "Quelle est la moyenne de : 14, 18, 10, 22 ?", en: "What is the mean of: 14, 18, 10, 22?", nl: "Wat is het gemiddelde van: 14, 18, 10, 22?" },
    answer: 16, tolerance: 0,
    hint: { fr: "(14 + 18 + 10 + 22) : 4 = 64 : 4 = 16.", en: "(14 + 18 + 10 + 22) : 4 = 64 : 4 = 16.", nl: "(14 + 18 + 10 + 22) : 4 = 64 : 4 = 16." }
  },
  {
    id: "D2_s_113", category: "D2", level: 1,
    text: { fr: "Quelle est la moyenne de : 5, 11, 8, 16 ?", en: "What is the mean of: 5, 11, 8, 16?", nl: "Wat is het gemiddelde van: 5, 11, 8, 16?" },
    answer: 10, tolerance: 0,
    hint: { fr: "(5 + 11 + 8 + 16) : 4 = 40 : 4 = 10.", en: "(5 + 11 + 8 + 16) : 4 = 40 : 4 = 10.", nl: "(5 + 11 + 8 + 16) : 4 = 40 : 4 = 10." }
  },
  {
    id: "D2_s_114", category: "D2", level: 2,
    text: { fr: "Données : 3, 7, 7, 9, 12, 15. Quelle est la médiane ?", en: "Data: 3, 7, 7, 9, 12, 15. What is the median?", nl: "Data: 3, 7, 7, 9, 12, 15. Wat is de mediaan?" },
    answer: 8, tolerance: 0,
    hint: { fr: "6 valeurs triées. La médiane est la moyenne des 3e et 4e : (7 + 9) : 2 = 8.", en: "6 sorted values. The median is the average of the 3rd and 4th: (7 + 9) : 2 = 8.", nl: "6 gesorteerde waarden. De mediaan is het gemiddelde van de 3e en 4e: (7 + 9) : 2 = 8." }
  },
  {
    id: "D2_s_115", category: "D2", level: 2,
    text: { fr: "Données : 2, 5, 8, 11, 20. Quelle est l'étendue ?", en: "Data: 2, 5, 8, 11, 20. What is the range?", nl: "Data: 2, 5, 8, 11, 20. Wat is het bereik?" },
    answer: 18, tolerance: 0,
    hint: { fr: "Étendue = valeur max − valeur min = 20 − 2 = 18.", en: "Range = max − min = 20 − 2 = 18.", nl: "Bereik = max − min = 20 − 2 = 18." }
  },
  {
    id: "D2_s_116", category: "D2", level: 3,
    text: { fr: "La moyenne de 6 nombres est 14. On ajoute le nombre 28. Quelle est la nouvelle moyenne ?", en: "The mean of 6 numbers is 14. The number 28 is added. What is the new mean?", nl: "Het gemiddelde van 6 getallen is 14. Het getal 28 wordt toegevoegd. Wat is het nieuwe gemiddelde?" },
    answer: 16, tolerance: 0,
    hint: { fr: "Total = 6 . 14 = 84. Nouveau total = 84 + 28 = 112. 112 : 7 = 16.", en: "Total = 6 . 14 = 84. New total = 84 + 28 = 112. 112 : 7 = 16.", nl: "Totaal = 6 . 14 = 84. Nieuw totaal = 84 + 28 = 112. 112 : 7 = 16." }
  },
  {
    id: "D2_s_117", category: "D2", level: 3,
    text: { fr: "Données : 4, 4, 6, 8, 8, 8, 10. Donne le mode.", en: "Data: 4, 4, 6, 8, 8, 8, 10. What is the mode?", nl: "Data: 4, 4, 6, 8, 8, 8, 10. Wat is de modus?" },
    answer: 8, tolerance: 0,
    hint: { fr: "Le mode est la valeur la plus fréquente. 8 apparaît 3 fois.", en: "The mode is the most frequent value. 8 appears 3 times.", nl: "De modus is de meest voorkomende waarde. 8 komt 3 keer voor." }
  },
];

export function generate(level = 1) {
  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const id = `D2_gen_${Date.now()}_${rand(100, 999)}`;
  const count = rand(3, 6);
  const nums = Array.from({ length: count }, () => rand(2, 20));
  const sum = nums.reduce((a, b) => a + b, 0);
  const mean = Math.round(sum / count * 100) / 100;
  const list = nums.join(', ');
  if (level === 1) {
    return { id, category: 'D2', level, text: { fr: `Quelle est la moyenne de : ${list} ?`, en: `What is the mean of: ${list}?`, nl: `Wat is het gemiddelde van: ${list}?` }, answer: mean, tolerance: 0.01 };
  }
  if (level === 2) {
    const sorted = [...nums].sort((a, b) => a - b);
    return { id, category: 'D2', level, text: { fr: `Quel est l'étendue de : ${list} ?`, en: `What is the range of: ${list}?`, nl: `Wat is het bereik van: ${list}?` }, answer: sorted[sorted.length - 1] - sorted[0], tolerance: 0 };
  }
  const target = rand(Math.floor(mean), Math.ceil(mean) + 3);
  const needed = target * (count + 1) - sum;
  return { id, category: 'D2', level, text: { fr: `Données : ${list}. Quel nombre ajouter pour avoir une moyenne de ${target} ?`, en: `Data: ${list}. What number to add for a mean of ${target}?`, nl: `Data: ${list}. Welk getal toevoegen voor een gemiddelde van ${target}?` }, answer: needed, tolerance: 0.01 };
}
