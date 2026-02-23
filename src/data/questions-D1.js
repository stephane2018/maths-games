// =============================================================================
// D1 - Traitement de donnees / Data handling / Gegevensverwerking
// CE1D Belgian exam - Trilingual (FR / EN / NL)
// 50 questions: ~17 per level, varied data handling problems
// =============================================================================

export const questions = [
  // ===========================================================================
  // LEVEL 1 - Reading data, simple averages, totals (17 questions)
  // ===========================================================================
  {
    id: "D1_s_1", category: "D1", level: 1,
    // 4+8+6+10+2 = 30, 30/5 = 6
    text: {
      fr: "La moyenne de 4, 8, 6, 10, 2 est ?",
      en: "What is the mean of 4, 8, 6, 10, 2?",
      nl: "Wat is het gemiddelde van 4, 8, 6, 10, 2?"
    },
    answer: 6, tolerance: 0.01,
    hint: {
      fr: "Additionne tous les nombres puis divise par 5.",
      en: "Add all the numbers then divide by 5.",
      nl: "Tel alle getallen op en deel door 5."
    }
  },
  {
    id: "D1_s_2", category: "D1", level: 1,
    // 12+15+18 = 45
    text: {
      fr: "Dans un diagramme, la classe A a 12 eleves, B a 15, C a 18. Combien d'eleves en tout ?",
      en: "In a chart, class A has 12 students, B has 15, C has 18. How many students in total?",
      nl: "In een diagram heeft klas A 12 leerlingen, B 15, C 18. Hoeveel leerlingen in totaal?"
    },
    answer: 45, tolerance: 0.01,
    hint: {
      fr: "Additionne le nombre d'eleves de chaque classe.",
      en: "Add the number of students from each class.",
      nl: "Tel het aantal leerlingen van elke klas op."
    }
  },
  {
    id: "D1_s_3", category: "D1", level: 1,
    // 5+8+6+10+7+9+4 = 49, 49/7 = 7
    text: {
      fr: "Temperatures de la semaine : 5, 8, 6, 10, 7, 9, 4. Quelle est la moyenne ?",
      en: "Weekly temperatures: 5, 8, 6, 10, 7, 9, 4. What is the mean?",
      nl: "Temperaturen van de week: 5, 8, 6, 10, 7, 9, 4. Wat is het gemiddelde?"
    },
    answer: 7, tolerance: 0.01,
    hint: {
      fr: "Additionne les 7 temperatures puis divise par 7.",
      en: "Add the 7 temperatures then divide by 7.",
      nl: "Tel de 7 temperaturen op en deel door 7."
    }
  },
  {
    id: "D1_s_4", category: "D1", level: 1,
    // 20+35+25 = 80
    text: {
      fr: "Un tableau montre les ventes : lundi 20, mardi 35, mercredi 25. Quel est le total des ventes ?",
      en: "A table shows sales: Monday 20, Tuesday 35, Wednesday 25. What is the total sales?",
      nl: "Een tabel toont de verkoop: maandag 20, dinsdag 35, woensdag 25. Wat is de totale verkoop?"
    },
    answer: 80, tolerance: 0.01,
    hint: {
      fr: "Additionne les ventes de chaque jour.",
      en: "Add the sales from each day.",
      nl: "Tel de verkoop van elke dag op."
    }
  },
  {
    id: "D1_s_5", category: "D1", level: 1,
    // 12+15+9+18+6 = 60, 60/5 = 12
    text: {
      fr: "Les scores de 5 eleves sont : 12, 15, 9, 18, 6. Quelle est la moyenne ?",
      en: "The scores of 5 students are: 12, 15, 9, 18, 6. What is the mean?",
      nl: "De scores van 5 leerlingen zijn: 12, 15, 9, 18, 6. Wat is het gemiddelde?"
    },
    answer: 12, tolerance: 0.01,
    hint: {
      fr: "Additionne les 5 scores puis divise par 5.",
      en: "Add the 5 scores then divide by 5.",
      nl: "Tel de 5 scores op en deel door 5."
    }
  },
  {
    id: "D1_s_6", category: "D1", level: 1,
    // 140+135+150+145+130 = 700, 700/5 = 140
    text: {
      fr: "Les tailles de 5 enfants en cm : 140, 135, 150, 145, 130. Quelle est la taille moyenne ?",
      en: "The heights of 5 children in cm: 140, 135, 150, 145, 130. What is the average height?",
      nl: "De lengtes van 5 kinderen in cm: 140, 135, 150, 145, 130. Wat is de gemiddelde lengte?"
    },
    answer: 140, tolerance: 0.01,
    hint: {
      fr: "Additionne les 5 tailles puis divise par 5.",
      en: "Add the 5 heights then divide by 5.",
      nl: "Tel de 5 lengtes op en deel door 5."
    }
  },
  {
    id: "D1_s_7", category: "D1", level: 1,
    // 8+6+10+4+7 = 35
    text: {
      fr: "Un graphique montre le nombre de livres lus par mois : janvier 8, fevrier 6, mars 10, avril 4, mai 7. Combien de livres en tout ?",
      en: "A graph shows books read per month: January 8, February 6, March 10, April 4, May 7. How many books in total?",
      nl: "Een grafiek toont het aantal gelezen boeken per maand: januari 8, februari 6, maart 10, april 4, mei 7. Hoeveel boeken in totaal?"
    },
    answer: 35, tolerance: 0.01,
    hint: {
      fr: "Additionne les livres de chaque mois.",
      en: "Add the books from each month.",
      nl: "Tel de boeken van elke maand op."
    }
  },
  {
    id: "D1_s_8", category: "D1", level: 1,
    // 30+45+25+40 = 140, 140/4 = 35
    text: {
      fr: "Les poids de 4 colis en kg : 30, 45, 25, 40. Quel est le poids moyen ?",
      en: "The weights of 4 parcels in kg: 30, 45, 25, 40. What is the average weight?",
      nl: "De gewichten van 4 pakketten in kg: 30, 45, 25, 40. Wat is het gemiddeld gewicht?"
    },
    answer: 35, tolerance: 0.01,
    hint: {
      fr: "Additionne les 4 poids puis divise par 4.",
      en: "Add the 4 weights then divide by 4.",
      nl: "Tel de 4 gewichten op en deel door 4."
    }
  },
  {
    id: "D1_s_9", category: "D1", level: 1,
    // 3+5+2+6+4 = 20
    text: {
      fr: "Un diagramme en batons montre les buts marques : match 1 = 3, match 2 = 5, match 3 = 2, match 4 = 6, match 5 = 4. Total de buts ?",
      en: "A bar chart shows goals scored: game 1 = 3, game 2 = 5, game 3 = 2, game 4 = 6, game 5 = 4. Total goals?",
      nl: "Een staafdiagram toont gescoorde doelpunten: wedstrijd 1 = 3, wedstrijd 2 = 5, wedstrijd 3 = 2, wedstrijd 4 = 6, wedstrijd 5 = 4. Totaal doelpunten?"
    },
    answer: 20, tolerance: 0.01,
    hint: {
      fr: "Additionne les buts de chaque match.",
      en: "Add the goals from each game.",
      nl: "Tel de doelpunten van elke wedstrijd op."
    }
  },
  {
    id: "D1_s_10", category: "D1", level: 1,
    // 22+18+25+15 = 80, 80/4 = 20
    text: {
      fr: "Temperatures en degres sur 4 jours : 22, 18, 25, 15. Quelle est la temperature moyenne ?",
      en: "Temperatures in degrees over 4 days: 22, 18, 25, 15. What is the average temperature?",
      nl: "Temperaturen in graden over 4 dagen: 22, 18, 25, 15. Wat is de gemiddelde temperatuur?"
    },
    answer: 20, tolerance: 0.01,
    hint: {
      fr: "Additionne les 4 temperatures puis divise par 4.",
      en: "Add the 4 temperatures then divide by 4.",
      nl: "Tel de 4 temperaturen op en deel door 4."
    }
  },
  {
    id: "D1_s_11", category: "D1", level: 1,
    // 50+75+60+45+70 = 300
    text: {
      fr: "Ventes de la semaine : lundi 50, mardi 75, mercredi 60, jeudi 45, vendredi 70. Total des ventes ?",
      en: "Weekly sales: Monday 50, Tuesday 75, Wednesday 60, Thursday 45, Friday 70. Total sales?",
      nl: "Weekverkoop: maandag 50, dinsdag 75, woensdag 60, donderdag 45, vrijdag 70. Totale verkoop?"
    },
    answer: 300, tolerance: 0.01,
    hint: {
      fr: "Additionne les ventes de chaque jour.",
      en: "Add the sales from each day.",
      nl: "Tel de verkoop van elke dag op."
    }
  },
  {
    id: "D1_s_12", category: "D1", level: 1,
    // 7+9+5+11+8 = 40, 40/5 = 8
    text: {
      fr: "Nombre d'heures de sommeil sur 5 nuits : 7, 9, 5, 11, 8. Moyenne d'heures de sommeil ?",
      en: "Hours of sleep over 5 nights: 7, 9, 5, 11, 8. Average hours of sleep?",
      nl: "Uren slaap over 5 nachten: 7, 9, 5, 11, 8. Gemiddeld aantal uren slaap?"
    },
    answer: 8, tolerance: 0.01,
    hint: {
      fr: "Additionne les heures puis divise par 5.",
      en: "Add the hours then divide by 5.",
      nl: "Tel de uren op en deel door 5."
    }
  },
  {
    id: "D1_s_13", category: "D1", level: 1,
    // 15+20+10+25 = 70
    text: {
      fr: "Un tableau montre les absences par mois : septembre 15, octobre 20, novembre 10, decembre 25. Total des absences ?",
      en: "A table shows absences per month: September 15, October 20, November 10, December 25. Total absences?",
      nl: "Een tabel toont afwezigheden per maand: september 15, oktober 20, november 10, december 25. Totaal afwezigheden?"
    },
    answer: 70, tolerance: 0.01,
    hint: {
      fr: "Additionne les absences de chaque mois.",
      en: "Add the absences from each month.",
      nl: "Tel de afwezigheden van elke maand op."
    }
  },
  {
    id: "D1_s_14", category: "D1", level: 1,
    // 6+10+8+14+12 = 50, 50/5 = 10
    text: {
      fr: "Notes obtenues a 5 interrogations : 6, 10, 8, 14, 12. Quelle est la moyenne ?",
      en: "Marks obtained in 5 quizzes: 6, 10, 8, 14, 12. What is the mean?",
      nl: "Punten behaald op 5 toetsen: 6, 10, 8, 14, 12. Wat is het gemiddelde?"
    },
    answer: 10, tolerance: 0.01,
    hint: {
      fr: "Additionne les 5 notes puis divise par 5.",
      en: "Add the 5 marks then divide by 5.",
      nl: "Tel de 5 punten op en deel door 5."
    }
  },
  {
    id: "D1_s_15", category: "D1", level: 1,
    // 24+18+30+12+16 = 100, 100/5 = 20
    text: {
      fr: "Nombre de clients par jour : lundi 24, mardi 18, mercredi 30, jeudi 12, vendredi 16. Moyenne de clients par jour ?",
      en: "Number of customers per day: Monday 24, Tuesday 18, Wednesday 30, Thursday 12, Friday 16. Average customers per day?",
      nl: "Aantal klanten per dag: maandag 24, dinsdag 18, woensdag 30, donderdag 12, vrijdag 16. Gemiddeld aantal klanten per dag?"
    },
    answer: 20, tolerance: 0.01,
    hint: {
      fr: "Additionne les clients de chaque jour puis divise par 5.",
      en: "Add the customers from each day then divide by 5.",
      nl: "Tel de klanten van elke dag op en deel door 5."
    }
  },
  {
    id: "D1_s_16", category: "D1", level: 1,
    // 3+7+5+9+1 = 25, 25/5 = 5
    text: {
      fr: "Calcule la moyenne de : 3, 7, 5, 9, 1.",
      en: "Calculate the mean of: 3, 7, 5, 9, 1.",
      nl: "Bereken het gemiddelde van: 3, 7, 5, 9, 1."
    },
    answer: 5, tolerance: 0.01,
    hint: {
      fr: "Additionne les 5 nombres puis divise par 5.",
      en: "Add the 5 numbers then divide by 5.",
      nl: "Tel de 5 getallen op en deel door 5."
    }
  },
  {
    id: "D1_s_17", category: "D1", level: 1,
    // 45+38+52+65 = 200
    text: {
      fr: "Un diagramme montre la production de 4 usines : A = 45, B = 38, C = 52, D = 65. Quelle est la production totale ?",
      en: "A chart shows production from 4 factories: A = 45, B = 38, C = 52, D = 65. What is the total production?",
      nl: "Een diagram toont de productie van 4 fabrieken: A = 45, B = 38, C = 52, D = 65. Wat is de totale productie?"
    },
    answer: 200, tolerance: 0.01,
    hint: {
      fr: "Additionne la production de chaque usine.",
      en: "Add the production from each factory.",
      nl: "Tel de productie van elke fabriek op."
    }
  },

  // ===========================================================================
  // LEVEL 2 - Interpreting data, finding differences, comparing (17 questions)
  // ===========================================================================
  {
    id: "D1_s_18", category: "D1", level: 2,
    // 95 - 62 = 33
    text: {
      fr: "Le score le plus eleve est 95 et le plus bas est 62. Quelle est l'etendue ?",
      en: "The highest score is 95 and the lowest is 62. What is the range?",
      nl: "De hoogste score is 95 en de laagste is 62. Wat is het bereik?"
    },
    answer: 33, tolerance: 0.01,
    hint: {
      fr: "L'etendue = valeur maximale - valeur minimale.",
      en: "Range = maximum value - minimum value.",
      nl: "Bereik = maximale waarde - minimale waarde."
    }
  },
  {
    id: "D1_s_19", category: "D1", level: 2,
    // 3+7+(-2)+5+12 = 25, 25/5 = 5
    text: {
      fr: "Temperatures relevees : 3, 7, -2, 5, 12. Quelle est la moyenne ?",
      en: "Recorded temperatures: 3, 7, -2, 5, 12. What is the mean?",
      nl: "Genoteerde temperaturen: 3, 7, -2, 5, 12. Wat is het gemiddelde?"
    },
    answer: 5, tolerance: 0.01,
    hint: {
      fr: "Additionne les temperatures (attention au negatif) puis divise par 5.",
      en: "Add the temperatures (watch the negative) then divide by 5.",
      nl: "Tel de temperaturen op (let op het negatieve getal) en deel door 5."
    }
  },
  {
    id: "D1_s_20", category: "D1", level: 2,
    // 65 - 30 = 35
    text: {
      fr: "Ventes de la semaine : L=40, M=55, Me=30, J=65, V=50. Combien de ventes de plus jeudi que mercredi ?",
      en: "Weekly sales: Mon=40, Tue=55, Wed=30, Thu=65, Fri=50. How many more sales on Thursday than Wednesday?",
      nl: "Weekverkoop: ma=40, di=55, wo=30, do=65, vr=50. Hoeveel meer verkoop op donderdag dan op woensdag?"
    },
    answer: 35, tolerance: 0.01,
    hint: {
      fr: "Soustrais les ventes de mercredi de celles de jeudi.",
      en: "Subtract Wednesday's sales from Thursday's.",
      nl: "Trek de verkoop van woensdag af van die van donderdag."
    }
  },
  {
    id: "D1_s_21", category: "D1", level: 2,
    // 6 * 12 = 72
    text: {
      fr: "La moyenne de 6 notes est 12. Quel est le total des 6 notes ?",
      en: "The mean of 6 marks is 12. What is the total of the 6 marks?",
      nl: "Het gemiddelde van 6 punten is 12. Wat is het totaal van de 6 punten?"
    },
    answer: 72, tolerance: 0.01,
    hint: {
      fr: "Total = moyenne x nombre de valeurs.",
      en: "Total = mean x number of values.",
      nl: "Totaal = gemiddelde x aantal waarden."
    }
  },
  {
    id: "D1_s_22", category: "D1", level: 2,
    // 14+11+8+15+12 = 60, 60/5 = 12, max=15, 15-12 = 3
    text: {
      fr: "Notes : 14, 11, 8, 15, 12. De combien la note la plus haute depasse-t-elle la moyenne ?",
      en: "Marks: 14, 11, 8, 15, 12. By how much does the highest mark exceed the mean?",
      nl: "Punten: 14, 11, 8, 15, 12. Hoeveel meer is het hoogste punt dan het gemiddelde?"
    },
    answer: 3, tolerance: 0.01,
    hint: {
      fr: "Calcule d'abord la moyenne, puis soustrais-la de la note la plus haute.",
      en: "First calculate the mean, then subtract it from the highest mark.",
      nl: "Bereken eerst het gemiddelde en trek het af van het hoogste punt."
    }
  },
  {
    id: "D1_s_23", category: "D1", level: 2,
    // 28-12 = 16
    text: {
      fr: "Dans un graphique, le mois avec le plus de pluie a eu 28 mm et le mois le plus sec 12 mm. Quelle est la difference ?",
      en: "In a graph, the rainiest month had 28 mm and the driest 12 mm. What is the difference?",
      nl: "In een grafiek had de natste maand 28 mm en de droogste 12 mm. Wat is het verschil?"
    },
    answer: 16, tolerance: 0.01,
    hint: {
      fr: "Soustrais la valeur la plus basse de la plus haute.",
      en: "Subtract the lowest value from the highest.",
      nl: "Trek de laagste waarde af van de hoogste."
    }
  },
  {
    id: "D1_s_24", category: "D1", level: 2,
    // 5 * 14 = 70
    text: {
      fr: "La moyenne de 5 mesures de temperature est 14 degres. Quel est le total des 5 mesures ?",
      en: "The mean of 5 temperature readings is 14 degrees. What is the total of the 5 readings?",
      nl: "Het gemiddelde van 5 temperatuurmetingen is 14 graden. Wat is het totaal van de 5 metingen?"
    },
    answer: 70, tolerance: 0.01,
    hint: {
      fr: "Total = moyenne x nombre de mesures.",
      en: "Total = mean x number of readings.",
      nl: "Totaal = gemiddelde x aantal metingen."
    }
  },
  {
    id: "D1_s_25", category: "D1", level: 2,
    // 25+30+20+35+40 = 150, 150/5 = 30, median: 20,25,30,35,40 -> 30
    // Asking for the mean: 150/5 = 30
    text: {
      fr: "Nombre de visiteurs par jour : 25, 30, 20, 35, 40. De combien le vendredi (40) depasse-t-il la moyenne ?",
      en: "Visitors per day: 25, 30, 20, 35, 40. By how much does Friday (40) exceed the mean?",
      nl: "Bezoekers per dag: 25, 30, 20, 35, 40. Hoeveel meer is vrijdag (40) dan het gemiddelde?"
    },
    answer: 10, tolerance: 0.01,
    hint: {
      fr: "Calcule d'abord la moyenne des 5 jours puis soustrais-la de 40.",
      en: "First calculate the mean of 5 days then subtract it from 40.",
      nl: "Bereken eerst het gemiddelde van de 5 dagen en trek het af van 40."
    }
  },
  {
    id: "D1_s_26", category: "D1", level: 2,
    // 8+(-3)+5+(-1)+6 = 15, 15/5 = 3
    text: {
      fr: "Temperatures sur 5 jours : 8, -3, 5, -1, 6. Quelle est la temperature moyenne ?",
      en: "Temperatures over 5 days: 8, -3, 5, -1, 6. What is the average temperature?",
      nl: "Temperaturen over 5 dagen: 8, -3, 5, -1, 6. Wat is de gemiddelde temperatuur?"
    },
    answer: 3, tolerance: 0.01,
    hint: {
      fr: "Additionne toutes les temperatures (attention aux negatifs) puis divise par 5.",
      en: "Add all temperatures (watch the negatives) then divide by 5.",
      nl: "Tel alle temperaturen op (let op de negatieve getallen) en deel door 5."
    }
  },
  {
    id: "D1_s_27", category: "D1", level: 2,
    // 120+80+100+90+110 = 500, 500/5 = 100, difference: 120-80 = 40
    text: {
      fr: "Ventes par region : Nord=120, Sud=80, Est=100, Ouest=90, Centre=110. Quelle est la difference entre la region avec le plus et le moins de ventes ?",
      en: "Sales by region: North=120, South=80, East=100, West=90, Centre=110. What is the difference between the region with most and least sales?",
      nl: "Verkoop per regio: Noord=120, Zuid=80, Oost=100, West=90, Centrum=110. Wat is het verschil tussen de regio met de meeste en de minste verkoop?"
    },
    answer: 40, tolerance: 0.01,
    hint: {
      fr: "Trouve la valeur maximale et minimale, puis calcule la difference.",
      en: "Find the maximum and minimum values, then calculate the difference.",
      nl: "Zoek de maximale en minimale waarde en bereken het verschil."
    }
  },
  {
    id: "D1_s_28", category: "D1", level: 2,
    // 10+13+7+15+11+10 = 66, 66/6 = 11
    text: {
      fr: "Points marques lors de 6 matchs : 10, 13, 7, 15, 11, 10. Quelle est la moyenne de points par match ?",
      en: "Points scored in 6 games: 10, 13, 7, 15, 11, 10. What is the average points per game?",
      nl: "Punten gescoord in 6 wedstrijden: 10, 13, 7, 15, 11, 10. Wat is het gemiddeld aantal punten per wedstrijd?"
    },
    answer: 11, tolerance: 0.01,
    hint: {
      fr: "Additionne les 6 scores puis divise par 6.",
      en: "Add the 6 scores then divide by 6.",
      nl: "Tel de 6 scores op en deel door 6."
    }
  },
  {
    id: "D1_s_29", category: "D1", level: 2,
    // total = 4*15 = 60, three known: 12+18+14 = 44, missing = 60-44 = 16
    text: {
      fr: "La moyenne de 4 nombres est 15. Trois des nombres sont 12, 18 et 14. Quel est le quatrieme nombre ?",
      en: "The mean of 4 numbers is 15. Three of the numbers are 12, 18 and 14. What is the fourth number?",
      nl: "Het gemiddelde van 4 getallen is 15. Drie ervan zijn 12, 18 en 14. Wat is het vierde getal?"
    },
    answer: 16, tolerance: 0.01,
    hint: {
      fr: "Calcule le total (moyenne x 4), puis soustrais les trois nombres connus.",
      en: "Calculate the total (mean x 4), then subtract the three known numbers.",
      nl: "Bereken het totaal (gemiddelde x 4) en trek de drie bekende getallen af."
    }
  },
  {
    id: "D1_s_30", category: "D1", level: 2,
    // 45+52+38+65 = 200, 200/4 = 50
    text: {
      fr: "Poids de 4 sacs en kg : 45, 52, 38, 65. Quel est le poids moyen d'un sac ?",
      en: "Weight of 4 bags in kg: 45, 52, 38, 65. What is the average weight of a bag?",
      nl: "Gewicht van 4 zakken in kg: 45, 52, 38, 65. Wat is het gemiddeld gewicht van een zak?"
    },
    answer: 50, tolerance: 0.01,
    hint: {
      fr: "Additionne les 4 poids puis divise par 4.",
      en: "Add the 4 weights then divide by 4.",
      nl: "Tel de 4 gewichten op en deel door 4."
    }
  },
  {
    id: "D1_s_31", category: "D1", level: 2,
    // 85+72+90+68+95 = 410, max=95, min=68, range = 95-68 = 27
    text: {
      fr: "Resultats d'un test : 85, 72, 90, 68, 95. Quelle est l'etendue des resultats ?",
      en: "Test results: 85, 72, 90, 68, 95. What is the range of the results?",
      nl: "Testresultaten: 85, 72, 90, 68, 95. Wat is het bereik van de resultaten?"
    },
    answer: 27, tolerance: 0.01,
    hint: {
      fr: "Etendue = valeur la plus grande - valeur la plus petite.",
      en: "Range = largest value - smallest value.",
      nl: "Bereik = grootste waarde - kleinste waarde."
    }
  },
  {
    id: "D1_s_32", category: "D1", level: 2,
    // 4*8 = 32
    text: {
      fr: "La moyenne d'age de 4 amis est 8 ans. Quel est le total de leurs ages ?",
      en: "The average age of 4 friends is 8 years. What is the total of their ages?",
      nl: "De gemiddelde leeftijd van 4 vrienden is 8 jaar. Wat is het totaal van hun leeftijden?"
    },
    answer: 32, tolerance: 0.01,
    hint: {
      fr: "Total = moyenne x nombre de personnes.",
      en: "Total = mean x number of people.",
      nl: "Totaal = gemiddelde x aantal personen."
    }
  },
  {
    id: "D1_s_33", category: "D1", level: 2,
    // boys: 15+20+10 = 45, girls: 12+18+15 = 45, difference = 0
    // Better: boys: 15+20+10 = 45, girls: 12+18+8 = 38, diff = 45-38 = 7
    text: {
      fr: "Un tableau montre les garcons et les filles dans 3 classes. Garcons : 15, 20, 10. Filles : 12, 18, 8. Combien de garcons de plus que de filles en tout ?",
      en: "A table shows boys and girls in 3 classes. Boys: 15, 20, 10. Girls: 12, 18, 8. How many more boys than girls in total?",
      nl: "Een tabel toont jongens en meisjes in 3 klassen. Jongens: 15, 20, 10. Meisjes: 12, 18, 8. Hoeveel meer jongens dan meisjes in totaal?"
    },
    answer: 7, tolerance: 0.01,
    hint: {
      fr: "Calcule le total des garcons, le total des filles, puis fais la difference.",
      en: "Calculate the total boys, total girls, then find the difference.",
      nl: "Bereken het totaal jongens, totaal meisjes en vind het verschil."
    }
  },
  {
    id: "D1_s_34", category: "D1", level: 2,
    // 6+(-4)+2+(-2)+8 = 10, 10/5 = 2
    text: {
      fr: "Variations de temperature sur 5 jours : +6, -4, +2, -2, +8. Quelle est la variation moyenne par jour ?",
      en: "Temperature changes over 5 days: +6, -4, +2, -2, +8. What is the average change per day?",
      nl: "Temperatuurveranderingen over 5 dagen: +6, -4, +2, -2, +8. Wat is de gemiddelde verandering per dag?"
    },
    answer: 2, tolerance: 0.01,
    hint: {
      fr: "Additionne toutes les variations puis divise par 5.",
      en: "Add all the changes then divide by 5.",
      nl: "Tel alle veranderingen op en deel door 5."
    }
  },

  // ===========================================================================
  // LEVEL 3 - Complex data problems, weighted averages, missing values (16 questions)
  // ===========================================================================
  {
    id: "D1_s_35", category: "D1", level: 3,
    // (2*14 + 1*12 + 3*16 + 2*10) / (2+1+3+2) = (28+12+48+20)/8 = 108/8 = 13.5
    text: {
      fr: "Notes : 14, 12, 16, 10. Coefficients : 2, 1, 3, 2. Quelle est la moyenne ponderee ?",
      en: "Marks: 14, 12, 16, 10. Coefficients: 2, 1, 3, 2. What is the weighted mean?",
      nl: "Punten: 14, 12, 16, 10. Coefficienten: 2, 1, 3, 2. Wat is het gewogen gemiddelde?"
    },
    answer: 13.5, tolerance: 0.01,
    hint: {
      fr: "Multiplie chaque note par son coefficient, additionne, puis divise par la somme des coefficients.",
      en: "Multiply each mark by its coefficient, add up, then divide by the sum of coefficients.",
      nl: "Vermenigvuldig elk punt met zijn coefficient, tel op en deel door de som van de coefficienten."
    }
  },
  {
    id: "D1_s_36", category: "D1", level: 3,
    // Mean of 5 = 8, total = 40. Remove 3 -> new total = 37, new mean = 37/4 = 9.25
    text: {
      fr: "La moyenne de 5 nombres est 8. On retire le nombre 3. Quelle est la nouvelle moyenne des 4 nombres restants ?",
      en: "The mean of 5 numbers is 8. The number 3 is removed. What is the new mean of the 4 remaining numbers?",
      nl: "Het gemiddelde van 5 getallen is 8. Het getal 3 wordt verwijderd. Wat is het nieuwe gemiddelde van de 4 resterende getallen?"
    },
    answer: 9.25, tolerance: 0.01,
    hint: {
      fr: "Calcule le total initial (5 x 8 = 40), retire 3, puis divise par 4.",
      en: "Calculate the initial total (5 x 8 = 40), remove 3, then divide by 4.",
      nl: "Bereken het oorspronkelijke totaal (5 x 8 = 40), trek 3 af en deel door 4."
    }
  },
  {
    id: "D1_s_37", category: "D1", level: 3,
    // (25*12 + 30*14 + 20*11) / (25+30+20) = (300+420+220)/75 = 940/75 = 12.53 (rounded to 2 decimal places)
    text: {
      fr: "3 classes : A = 25 eleves (moyenne 12), B = 30 eleves (moyenne 14), C = 20 eleves (moyenne 11). Quelle est la moyenne generale ?",
      en: "3 classes: A = 25 students (mean 12), B = 30 students (mean 14), C = 20 students (mean 11). What is the overall mean?",
      nl: "3 klassen: A = 25 leerlingen (gemiddelde 12), B = 30 leerlingen (gemiddelde 14), C = 20 leerlingen (gemiddelde 11). Wat is het algemeen gemiddelde?"
    },
    answer: 12.53, tolerance: 0.01,
    hint: {
      fr: "Calcule le total de chaque classe (effectif x moyenne), additionne, puis divise par le total d'eleves.",
      en: "Calculate each class total (students x mean), add up, then divide by total students.",
      nl: "Bereken het totaal per klas (leerlingen x gemiddelde), tel op en deel door het totaal leerlingen."
    }
  },
  {
    id: "D1_s_38", category: "D1", level: 3,
    // total for mean 13 with 5 values = 65, known: 10+15+12+14 = 51, missing = 65-51 = 14
    text: {
      fr: "Quatre notes sont : 10, 15, 12, 14. Quelle 5e note faut-il pour avoir une moyenne de 13 ?",
      en: "Four marks are: 10, 15, 12, 14. What 5th mark is needed for a mean of 13?",
      nl: "Vier punten zijn: 10, 15, 12, 14. Welk 5e punt is nodig voor een gemiddelde van 13?"
    },
    answer: 14, tolerance: 0.01,
    hint: {
      fr: "Calcule le total necessaire (13 x 5 = 65), soustrais la somme des 4 notes connues.",
      en: "Calculate the needed total (13 x 5 = 65), subtract the sum of the 4 known marks.",
      nl: "Bereken het benodigde totaal (13 x 5 = 65), trek de som van de 4 bekende punten af."
    }
  },
  {
    id: "D1_s_39", category: "D1", level: 3,
    // (3*15 + 2*10 + 1*20) / (3+2+1) = (45+20+20)/6 = 85/6 = 14.17 (rounded to 2 decimal places)
    text: {
      fr: "Un eleve a 15/20 (coefficient 3), 10/20 (coefficient 2) et 20/20 (coefficient 1). Quelle est sa moyenne ponderee ?",
      en: "A student has 15/20 (coefficient 3), 10/20 (coefficient 2) and 20/20 (coefficient 1). What is the weighted mean?",
      nl: "Een leerling heeft 15/20 (coefficient 3), 10/20 (coefficient 2) en 20/20 (coefficient 1). Wat is het gewogen gemiddelde?"
    },
    answer: 14.17, tolerance: 0.01,
    hint: {
      fr: "Multiplie chaque note par son coefficient, additionne, puis divise par la somme des coefficients (6).",
      en: "Multiply each mark by its coefficient, add up, then divide by the sum of coefficients (6).",
      nl: "Vermenigvuldig elk punt met zijn coefficient, tel op en deel door de som van de coefficienten (6)."
    }
  },
  {
    id: "D1_s_40", category: "D1", level: 3,
    // Mean of 8 = 15, total = 120. Remove highest (22) and lowest (8): new total = 120-22-8 = 90, new mean = 90/6 = 15
    text: {
      fr: "La moyenne de 8 nombres est 15. On retire le plus grand (22) et le plus petit (8). Quelle est la moyenne des 6 nombres restants ?",
      en: "The mean of 8 numbers is 15. The largest (22) and smallest (8) are removed. What is the mean of the 6 remaining numbers?",
      nl: "Het gemiddelde van 8 getallen is 15. Het grootste (22) en het kleinste (8) worden verwijderd. Wat is het gemiddelde van de 6 resterende getallen?"
    },
    answer: 15, tolerance: 0.01,
    hint: {
      fr: "Total initial = 8 x 15 = 120. Retire 22 et 8, puis divise par 6.",
      en: "Initial total = 8 x 15 = 120. Remove 22 and 8, then divide by 6.",
      nl: "Oorspronkelijk totaal = 8 x 15 = 120. Trek 22 en 8 af en deel door 6."
    }
  },
  {
    id: "D1_s_41", category: "D1", level: 3,
    // (20*10 + 15*12) / (20+15) = (200+180)/35 = 380/35 = 10.86 (rounded to 2 decimal places)
    text: {
      fr: "Groupe A : 20 eleves, moyenne 10. Groupe B : 15 eleves, moyenne 12. Quelle est la moyenne de l'ensemble ?",
      en: "Group A: 20 students, mean 10. Group B: 15 students, mean 12. What is the overall mean?",
      nl: "Groep A: 20 leerlingen, gemiddelde 10. Groep B: 15 leerlingen, gemiddelde 12. Wat is het totale gemiddelde?"
    },
    answer: 10.86, tolerance: 0.01,
    hint: {
      fr: "Calcule le total de chaque groupe, additionne, puis divise par le nombre total d'eleves (35).",
      en: "Calculate each group's total, add up, then divide by the total number of students (35).",
      nl: "Bereken het totaal per groep, tel op en deel door het totaal aantal leerlingen (35)."
    }
  },
  {
    id: "D1_s_42", category: "D1", level: 3,
    // Mean of 7 = 12, total = 84. Add a value of 20: new total = 104, new mean = 104/8 = 13
    text: {
      fr: "La moyenne de 7 valeurs est 12. On ajoute la valeur 20. Quelle est la nouvelle moyenne des 8 valeurs ?",
      en: "The mean of 7 values is 12. The value 20 is added. What is the new mean of the 8 values?",
      nl: "Het gemiddelde van 7 waarden is 12. De waarde 20 wordt toegevoegd. Wat is het nieuwe gemiddelde van de 8 waarden?"
    },
    answer: 13, tolerance: 0.01,
    hint: {
      fr: "Total initial = 7 x 12 = 84. Ajoute 20. Divise par 8.",
      en: "Initial total = 7 x 12 = 84. Add 20. Divide by 8.",
      nl: "Oorspronkelijk totaal = 7 x 12 = 84. Tel 20 erbij. Deel door 8."
    }
  },
  {
    id: "D1_s_43", category: "D1", level: 3,
    // (4*16 + 2*12 + 3*14) / (4+2+3) = (64+24+42)/9 = 130/9 = 14.44 (rounded to 2 decimal places)
    text: {
      fr: "Matieres : maths (note 16, coeff 4), francais (note 12, coeff 2), sciences (note 14, coeff 3). Moyenne ponderee ?",
      en: "Subjects: maths (mark 16, coeff 4), French (mark 12, coeff 2), science (mark 14, coeff 3). Weighted mean?",
      nl: "Vakken: wiskunde (punt 16, coeff 4), Frans (punt 12, coeff 2), wetenschappen (punt 14, coeff 3). Gewogen gemiddelde?"
    },
    answer: 14.44, tolerance: 0.01,
    hint: {
      fr: "Multiplie chaque note par son coefficient, additionne (130), divise par la somme des coefficients (9).",
      en: "Multiply each mark by its coefficient, add up (130), divide by the sum of coefficients (9).",
      nl: "Vermenigvuldig elk punt met zijn coefficient, tel op (130), deel door de som van de coefficienten (9)."
    }
  },
  {
    id: "D1_s_44", category: "D1", level: 3,
    // Total needed = 10 * 6 = 60. Sum of 5 = 8+12+6+10+9 = 45. Missing = 60-45 = 15
    text: {
      fr: "Cinq resultats sont : 8, 12, 6, 10, 9. Quel 6e resultat faut-il pour obtenir une moyenne de 10 ?",
      en: "Five results are: 8, 12, 6, 10, 9. What 6th result is needed for a mean of 10?",
      nl: "Vijf resultaten zijn: 8, 12, 6, 10, 9. Welk 6e resultaat is nodig voor een gemiddelde van 10?"
    },
    answer: 15, tolerance: 0.01,
    hint: {
      fr: "Total necessaire = 10 x 6 = 60. Soustrais la somme des 5 resultats connus.",
      en: "Needed total = 10 x 6 = 60. Subtract the sum of the 5 known results.",
      nl: "Benodigd totaal = 10 x 6 = 60. Trek de som van de 5 bekende resultaten af."
    }
  },
  {
    id: "D1_s_45", category: "D1", level: 3,
    // Mean of 10 = 20, total = 200. One value (30) replaced by 15: new total = 200-30+15 = 185, new mean = 185/10 = 18.5
    text: {
      fr: "La moyenne de 10 nombres est 20. On remplace un des nombres (30) par 15. Quelle est la nouvelle moyenne ?",
      en: "The mean of 10 numbers is 20. One number (30) is replaced by 15. What is the new mean?",
      nl: "Het gemiddelde van 10 getallen is 20. Een van de getallen (30) wordt vervangen door 15. Wat is het nieuwe gemiddelde?"
    },
    answer: 18.5, tolerance: 0.01,
    hint: {
      fr: "Total initial = 200. Retire 30, ajoute 15. Divise par 10.",
      en: "Initial total = 200. Remove 30, add 15. Divide by 10.",
      nl: "Oorspronkelijk totaal = 200. Trek 30 af, tel 15 erbij. Deel door 10."
    }
  },
  {
    id: "D1_s_46", category: "D1", level: 3,
    // (10*8 + 15*10 + 5*14) / (10+15+5) = (80+150+70)/30 = 300/30 = 10
    text: {
      fr: "Trois equipes : A (10 joueurs, moyenne 8 pts), B (15 joueurs, moyenne 10 pts), C (5 joueurs, moyenne 14 pts). Moyenne generale ?",
      en: "Three teams: A (10 players, mean 8 pts), B (15 players, mean 10 pts), C (5 players, mean 14 pts). Overall mean?",
      nl: "Drie teams: A (10 spelers, gemiddelde 8 ptn), B (15 spelers, gemiddelde 10 ptn), C (5 spelers, gemiddelde 14 ptn). Totaal gemiddelde?"
    },
    answer: 10, tolerance: 0.01,
    hint: {
      fr: "Calcule le total par equipe, additionne (300), divise par le nombre total de joueurs (30).",
      en: "Calculate total per team, add up (300), divide by total players (30).",
      nl: "Bereken het totaal per team, tel op (300), deel door het totaal spelers (30)."
    }
  },
  {
    id: "D1_s_47", category: "D1", level: 3,
    // Mean of 6 = 14, total = 84. Remove two values (8 and 20): new total = 84-8-20 = 56, new mean = 56/4 = 14
    text: {
      fr: "La moyenne de 6 notes est 14. On retire les notes 8 et 20. Quelle est la moyenne des 4 notes restantes ?",
      en: "The mean of 6 marks is 14. The marks 8 and 20 are removed. What is the mean of the 4 remaining marks?",
      nl: "Het gemiddelde van 6 punten is 14. De punten 8 en 20 worden verwijderd. Wat is het gemiddelde van de 4 resterende punten?"
    },
    answer: 14, tolerance: 0.01,
    hint: {
      fr: "Total initial = 6 x 14 = 84. Retire 8 et 20. Divise par 4.",
      en: "Initial total = 6 x 14 = 84. Remove 8 and 20. Divide by 4.",
      nl: "Oorspronkelijk totaal = 6 x 14 = 84. Trek 8 en 20 af. Deel door 4."
    }
  },
  {
    id: "D1_s_48", category: "D1", level: 3,
    // (2*18 + 3*12 + 1*8) / (2+3+1) = (36+36+8)/6 = 80/6 = 13.33 (rounded to 2 decimal places)
    text: {
      fr: "Notes et coefficients : 18 (coeff 2), 12 (coeff 3), 8 (coeff 1). Quelle est la moyenne ponderee ?",
      en: "Marks and coefficients: 18 (coeff 2), 12 (coeff 3), 8 (coeff 1). What is the weighted mean?",
      nl: "Punten en coefficienten: 18 (coeff 2), 12 (coeff 3), 8 (coeff 1). Wat is het gewogen gemiddelde?"
    },
    answer: 13.33, tolerance: 0.01,
    hint: {
      fr: "Calcule (2x18 + 3x12 + 1x8) / (2+3+1) = 80/6.",
      en: "Calculate (2x18 + 3x12 + 1x8) / (2+3+1) = 80/6.",
      nl: "Bereken (2x18 + 3x12 + 1x8) / (2+3+1) = 80/6."
    }
  },
  {
    id: "D1_s_49", category: "D1", level: 3,
    // Mean of first 4 = 10, total = 40. Mean of next 6 = 15, total = 90. Overall = (40+90)/10 = 130/10 = 13
    text: {
      fr: "Les 4 premiers eleves ont une moyenne de 10, les 6 suivants une moyenne de 15. Quelle est la moyenne des 10 eleves ?",
      en: "The first 4 students have a mean of 10, the next 6 have a mean of 15. What is the mean of all 10 students?",
      nl: "De eerste 4 leerlingen hebben een gemiddelde van 10, de volgende 6 een gemiddelde van 15. Wat is het gemiddelde van alle 10 leerlingen?"
    },
    answer: 13, tolerance: 0.01,
    hint: {
      fr: "Total premier groupe = 4x10 = 40, deuxieme = 6x15 = 90. Divise (40+90) par 10.",
      en: "Total first group = 4x10 = 40, second = 6x15 = 90. Divide (40+90) by 10.",
      nl: "Totaal eerste groep = 4x10 = 40, tweede = 6x15 = 90. Deel (40+90) door 10."
    }
  },
  {
    id: "D1_s_50", category: "D1", level: 3,
    // Mean of 5 = 16, total = 80. Each value increased by 4: new total = 80 + 5*4 = 100, new mean = 100/5 = 20
    text: {
      fr: "La moyenne de 5 notes est 16. On ajoute 4 points a chaque note. Quelle est la nouvelle moyenne ?",
      en: "The mean of 5 marks is 16. 4 points are added to each mark. What is the new mean?",
      nl: "Het gemiddelde van 5 punten is 16. Er worden 4 punten bij elk punt opgeteld. Wat is het nieuwe gemiddelde?"
    },
    answer: 20, tolerance: 0.01,
    hint: {
      fr: "Quand on ajoute un nombre a chaque valeur, la moyenne augmente de ce meme nombre.",
      en: "When you add a number to each value, the mean increases by that same number.",
      nl: "Als je een getal bij elke waarde optelt, stijgt het gemiddelde met datzelfde getal."
    }
  }
];

/**
 * Generateur procedural pour D1 - Traitement de donnees
 * @param {1|2|3} level - Niveau de difficulte
 * @returns {object} Question generee
 */
export function generate(level = 1) {
  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const id = `D1_gen_${Date.now()}_${rand(100, 999)}`;
  const count = rand(3, 6);
  const nums = Array.from({ length: count }, () => rand(2, 30));
  const sum = nums.reduce((a, b) => a + b, 0);
  const mean = Math.round(sum / count * 100) / 100;
  const list = nums.join(', ');

  if (level <= 2) {
    return {
      id,
      category: 'D1',
      level,
      text: {
        fr: `Calcule la moyenne de : ${list}`,
        en: `Calculate the mean of: ${list}`,
        nl: `Bereken het gemiddelde van: ${list}`
      },
      answer: mean,
      tolerance: 0.01,
      hint: {
        fr: `Additionne les ${count} nombres puis divise par ${count}.`,
        en: `Add the ${count} numbers then divide by ${count}.`,
        nl: `Tel de ${count} getallen op en deel door ${count}.`
      }
    };
  }

  // Level 3: find the number to add to reach a target mean
  const target = rand(Math.floor(mean), Math.ceil(mean) + 3);
  const needed = target * (count + 1) - sum;

  return {
    id,
    category: 'D1',
    level,
    text: {
      fr: `Donnees : ${list}. Quel nombre ajouter pour obtenir une moyenne de ${target} ?`,
      en: `Data: ${list}. What number to add for a mean of ${target}?`,
      nl: `Data: ${list}. Welk getal toevoegen voor een gemiddelde van ${target}?`
    },
    answer: needed,
    tolerance: 0.01,
    hint: {
      fr: `Le total actuel est ${sum}. Le total vise est ${target} x ${count + 1} = ${target * (count + 1)}. La difference donne le nombre a ajouter.`,
      en: `The current total is ${sum}. The target total is ${target} x ${count + 1} = ${target * (count + 1)}. The difference gives the number to add.`,
      nl: `Het huidige totaal is ${sum}. Het doeltotaal is ${target} x ${count + 1} = ${target * (count + 1)}. Het verschil geeft het toe te voegen getal.`
    }
  };
}
