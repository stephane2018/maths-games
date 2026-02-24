// =============================================================================
// D1 - Traitement de donnees / Data handling / Gegevensverwerking
// CE1D Belgian exam - Trilingual (FR / EN / NL)
// 111 questions: ~37 per level, varied data handling problems
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
  },

  // ===========================================================================
  // LEVEL 1 - Additional questions (D1_s_51 to D1_s_70) - 20 questions
  // ===========================================================================
  {
    id: "D1_s_51", category: "D1", level: 1,
    // 15+25+20+30+10 = 100, 100/5 = 20
    text: {
      fr: "Nombre de paniers marques en 5 matchs de basket : 15, 25, 20, 30, 10. Quelle est la moyenne de paniers par match ?",
      en: "Number of baskets scored in 5 basketball games: 15, 25, 20, 30, 10. What is the average baskets per game?",
      nl: "Aantal gescoorde korven in 5 basketbalwedstrijden: 15, 25, 20, 30, 10. Wat is het gemiddeld aantal korven per wedstrijd?"
    },
    answer: 20, tolerance: 0.01,
    hint: {
      fr: "Additionne les 5 nombres puis divise par 5.",
      en: "Add the 5 numbers then divide by 5.",
      nl: "Tel de 5 getallen op en deel door 5."
    }
  },
  {
    id: "D1_s_52", category: "D1", level: 1,
    // 8+12+6+14+10 = 50
    text: {
      fr: "Un graphique montre les kilometres parcourus chaque jour : lundi 8, mardi 12, mercredi 6, jeudi 14, vendredi 10. Quel est le total de kilometres ?",
      en: "A graph shows kilometres walked each day: Monday 8, Tuesday 12, Wednesday 6, Thursday 14, Friday 10. What is the total kilometres?",
      nl: "Een grafiek toont het aantal gelopen kilometers per dag: maandag 8, dinsdag 12, woensdag 6, donderdag 14, vrijdag 10. Wat is het totaal aantal kilometers?"
    },
    answer: 50, tolerance: 0.01,
    hint: {
      fr: "Additionne les kilometres de chaque jour.",
      en: "Add the kilometres from each day.",
      nl: "Tel de kilometers van elke dag op."
    }
  },
  {
    id: "D1_s_53", category: "D1", level: 1,
    // 18+22+16+24+20 = 100, 100/5 = 20
    text: {
      fr: "Temperatures maximales de la semaine en degres : 18, 22, 16, 24, 20. Quelle est la temperature moyenne ?",
      en: "Maximum temperatures of the week in degrees: 18, 22, 16, 24, 20. What is the average temperature?",
      nl: "Maximumtemperaturen van de week in graden: 18, 22, 16, 24, 20. Wat is de gemiddelde temperatuur?"
    },
    answer: 20, tolerance: 0.01,
    hint: {
      fr: "Additionne les 5 temperatures puis divise par 5.",
      en: "Add the 5 temperatures then divide by 5.",
      nl: "Tel de 5 temperaturen op en deel door 5."
    }
  },
  {
    id: "D1_s_54", category: "D1", level: 1,
    // 35+42+28+55 = 160
    text: {
      fr: "Un diagramme en batons montre les ventes de 4 magasins : A = 35, B = 42, C = 28, D = 55. Quel est le total des ventes ?",
      en: "A bar chart shows sales from 4 shops: A = 35, B = 42, C = 28, D = 55. What is the total sales?",
      nl: "Een staafdiagram toont de verkoop van 4 winkels: A = 35, B = 42, C = 28, D = 55. Wat is de totale verkoop?"
    },
    answer: 160, tolerance: 0.01,
    hint: {
      fr: "Additionne les ventes de chaque magasin.",
      en: "Add the sales from each shop.",
      nl: "Tel de verkoop van elke winkel op."
    }
  },
  {
    id: "D1_s_55", category: "D1", level: 1,
    // 11+9+13+7+10 = 50, 50/5 = 10
    text: {
      fr: "Nombre de buts marques par saison sur 5 saisons : 11, 9, 13, 7, 10. Quelle est la moyenne de buts par saison ?",
      en: "Goals scored per season over 5 seasons: 11, 9, 13, 7, 10. What is the average goals per season?",
      nl: "Doelpunten per seizoen over 5 seizoenen: 11, 9, 13, 7, 10. Wat is het gemiddeld aantal doelpunten per seizoen?"
    },
    answer: 10, tolerance: 0.01,
    hint: {
      fr: "Additionne les 5 valeurs puis divise par 5.",
      en: "Add the 5 values then divide by 5.",
      nl: "Tel de 5 waarden op en deel door 5."
    }
  },
  {
    id: "D1_s_56", category: "D1", level: 1,
    // 60+45+75+50+70 = 300
    text: {
      fr: "Nombre de pages lues par semaine : semaine 1 = 60, semaine 2 = 45, semaine 3 = 75, semaine 4 = 50, semaine 5 = 70. Combien de pages en tout ?",
      en: "Pages read per week: week 1 = 60, week 2 = 45, week 3 = 75, week 4 = 50, week 5 = 70. How many pages in total?",
      nl: "Gelezen pagina's per week: week 1 = 60, week 2 = 45, week 3 = 75, week 4 = 50, week 5 = 70. Hoeveel pagina's in totaal?"
    },
    answer: 300, tolerance: 0.01,
    hint: {
      fr: "Additionne les pages de chaque semaine.",
      en: "Add the pages from each week.",
      nl: "Tel de pagina's van elke week op."
    }
  },
  {
    id: "D1_s_57", category: "D1", level: 1,
    // 4+6+8+2+5 = 25, 25/5 = 5
    text: {
      fr: "Nombre de fautes par dictee : 4, 6, 8, 2, 5. Quel est le nombre moyen de fautes ?",
      en: "Mistakes per dictation: 4, 6, 8, 2, 5. What is the average number of mistakes?",
      nl: "Fouten per dictee: 4, 6, 8, 2, 5. Wat is het gemiddeld aantal fouten?"
    },
    answer: 5, tolerance: 0.01,
    hint: {
      fr: "Additionne les 5 valeurs puis divise par 5.",
      en: "Add the 5 values then divide by 5.",
      nl: "Tel de 5 waarden op en deel door 5."
    }
  },
  {
    id: "D1_s_58", category: "D1", level: 1,
    // 32+28+36+24 = 120, 120/4 = 30
    text: {
      fr: "Duree en minutes des 4 trajets en bus : 32, 28, 36, 24. Quelle est la duree moyenne ?",
      en: "Duration in minutes of 4 bus trips: 32, 28, 36, 24. What is the average duration?",
      nl: "Duur in minuten van 4 busritten: 32, 28, 36, 24. Wat is de gemiddelde duur?"
    },
    answer: 30, tolerance: 0.01,
    hint: {
      fr: "Additionne les 4 durees puis divise par 4.",
      en: "Add the 4 durations then divide by 4.",
      nl: "Tel de 4 tijden op en deel door 4."
    }
  },
  {
    id: "D1_s_59", category: "D1", level: 1,
    // 25+30+15+20+35+25 = 150
    text: {
      fr: "Un tableau montre les points marques lors de 6 matchs de rugby : 25, 30, 15, 20, 35, 25. Quel est le total de points ?",
      en: "A table shows points scored in 6 rugby matches: 25, 30, 15, 20, 35, 25. What is the total points?",
      nl: "Een tabel toont de punten gescoord in 6 rugbywedstrijden: 25, 30, 15, 20, 35, 25. Wat is het totaal aantal punten?"
    },
    answer: 150, tolerance: 0.01,
    hint: {
      fr: "Additionne les points de chaque match.",
      en: "Add the points from each match.",
      nl: "Tel de punten van elke wedstrijd op."
    }
  },
  {
    id: "D1_s_60", category: "D1", level: 1,
    // 14+16+10+18+12 = 70, 70/5 = 14
    text: {
      fr: "Notes d'un eleve en geographie sur 5 controles : 14, 16, 10, 18, 12. Quelle est la moyenne ?",
      en: "A student's geography marks over 5 tests: 14, 16, 10, 18, 12. What is the mean?",
      nl: "Punten van een leerling voor aardrijkskunde over 5 toetsen: 14, 16, 10, 18, 12. Wat is het gemiddelde?"
    },
    answer: 14, tolerance: 0.01,
    hint: {
      fr: "Additionne les 5 notes puis divise par 5.",
      en: "Add the 5 marks then divide by 5.",
      nl: "Tel de 5 punten op en deel door 5."
    }
  },
  {
    id: "D1_s_61", category: "D1", level: 1,
    // 90+110+80+120 = 400, 400/4 = 100
    text: {
      fr: "Nombre de spectateurs lors de 4 representations : 90, 110, 80, 120. Quelle est la moyenne de spectateurs ?",
      en: "Number of spectators at 4 shows: 90, 110, 80, 120. What is the average number of spectators?",
      nl: "Aantal toeschouwers bij 4 voorstellingen: 90, 110, 80, 120. Wat is het gemiddeld aantal toeschouwers?"
    },
    answer: 100, tolerance: 0.01,
    hint: {
      fr: "Additionne les 4 nombres puis divise par 4.",
      en: "Add the 4 numbers then divide by 4.",
      nl: "Tel de 4 getallen op en deel door 4."
    }
  },
  {
    id: "D1_s_62", category: "D1", level: 1,
    // 5+3+7+6+4 = 25
    text: {
      fr: "Un diagramme montre les retards par jour de la semaine : lundi 5, mardi 3, mercredi 7, jeudi 6, vendredi 4. Combien de retards en tout ?",
      en: "A chart shows late arrivals per day: Monday 5, Tuesday 3, Wednesday 7, Thursday 6, Friday 4. How many late arrivals in total?",
      nl: "Een diagram toont het aantal laatkomers per dag: maandag 5, dinsdag 3, woensdag 7, donderdag 6, vrijdag 4. Hoeveel laatkomers in totaal?"
    },
    answer: 25, tolerance: 0.01,
    hint: {
      fr: "Additionne les retards de chaque jour.",
      en: "Add the late arrivals from each day.",
      nl: "Tel de laatkomers van elke dag op."
    }
  },
  {
    id: "D1_s_63", category: "D1", level: 1,
    // 16+20+24+12+8 = 80, 80/5 = 16
    text: {
      fr: "Quantites de pluie en mm sur 5 mois : 16, 20, 24, 12, 8. Quelle est la quantite moyenne de pluie par mois ?",
      en: "Rainfall in mm over 5 months: 16, 20, 24, 12, 8. What is the average rainfall per month?",
      nl: "Regenval in mm over 5 maanden: 16, 20, 24, 12, 8. Wat is de gemiddelde regenval per maand?"
    },
    answer: 16, tolerance: 0.01,
    hint: {
      fr: "Additionne les 5 valeurs puis divise par 5.",
      en: "Add the 5 values then divide by 5.",
      nl: "Tel de 5 waarden op en deel door 5."
    }
  },
  {
    id: "D1_s_64", category: "D1", level: 1,
    // 200+150+250+100+300 = 1000
    text: {
      fr: "Recettes d'une boulangerie par jour : lundi 200 euros, mardi 150, mercredi 250, jeudi 100, vendredi 300. Quelle est la recette totale ?",
      en: "Bakery revenue per day: Monday 200 euros, Tuesday 150, Wednesday 250, Thursday 100, Friday 300. What is the total revenue?",
      nl: "Omzet van een bakkerij per dag: maandag 200 euro, dinsdag 150, woensdag 250, donderdag 100, vrijdag 300. Wat is de totale omzet?"
    },
    answer: 1000, tolerance: 0.01,
    hint: {
      fr: "Additionne les recettes de chaque jour.",
      en: "Add the revenue from each day.",
      nl: "Tel de omzet van elke dag op."
    }
  },
  {
    id: "D1_s_65", category: "D1", level: 1,
    // 9+11+7+13+10 = 50, 50/5 = 10
    text: {
      fr: "Un nageur s'entraine 5 jours. Longueurs nagees : 9, 11, 7, 13, 10. Quelle est la moyenne de longueurs par jour ?",
      en: "A swimmer trains for 5 days. Lengths swum: 9, 11, 7, 13, 10. What is the average lengths per day?",
      nl: "Een zwemmer traint 5 dagen. Gezwommen lengtes: 9, 11, 7, 13, 10. Wat is het gemiddeld aantal lengtes per dag?"
    },
    answer: 10, tolerance: 0.01,
    hint: {
      fr: "Additionne les 5 nombres puis divise par 5.",
      en: "Add the 5 numbers then divide by 5.",
      nl: "Tel de 5 getallen op en deel door 5."
    }
  },
  {
    id: "D1_s_66", category: "D1", level: 1,
    // 42+38+50+30 = 160, 160/4 = 40
    text: {
      fr: "Nombre de SMS envoyes sur 4 jours : 42, 38, 50, 30. Quelle est la moyenne de SMS par jour ?",
      en: "Number of text messages sent over 4 days: 42, 38, 50, 30. What is the average messages per day?",
      nl: "Aantal verzonden sms'en over 4 dagen: 42, 38, 50, 30. Wat is het gemiddeld aantal sms'en per dag?"
    },
    answer: 40, tolerance: 0.01,
    hint: {
      fr: "Additionne les 4 valeurs puis divise par 4.",
      en: "Add the 4 values then divide by 4.",
      nl: "Tel de 4 waarden op en deel door 4."
    }
  },
  {
    id: "D1_s_67", category: "D1", level: 1,
    // 12+8+15+10+5 = 50
    text: {
      fr: "Un graphique montre les colis livres chaque jour : lundi 12, mardi 8, mercredi 15, jeudi 10, vendredi 5. Combien de colis livres en tout ?",
      en: "A graph shows parcels delivered each day: Monday 12, Tuesday 8, Wednesday 15, Thursday 10, Friday 5. How many parcels delivered in total?",
      nl: "Een grafiek toont de bezorgde pakketten per dag: maandag 12, dinsdag 8, woensdag 15, donderdag 10, vrijdag 5. Hoeveel pakketten in totaal bezorgd?"
    },
    answer: 50, tolerance: 0.01,
    hint: {
      fr: "Additionne les colis de chaque jour.",
      en: "Add the parcels from each day.",
      nl: "Tel de pakketten van elke dag op."
    }
  },
  {
    id: "D1_s_68", category: "D1", level: 1,
    // 75+85+65+95+80 = 400, 400/5 = 80
    text: {
      fr: "Resultats de 5 examens en pourcentage : 75, 85, 65, 95, 80. Quel est le pourcentage moyen ?",
      en: "Results of 5 exams as percentages: 75, 85, 65, 95, 80. What is the average percentage?",
      nl: "Resultaten van 5 examens in procenten: 75, 85, 65, 95, 80. Wat is het gemiddelde percentage?"
    },
    answer: 80, tolerance: 0.01,
    hint: {
      fr: "Additionne les 5 pourcentages puis divise par 5.",
      en: "Add the 5 percentages then divide by 5.",
      nl: "Tel de 5 percentages op en deel door 5."
    }
  },
  {
    id: "D1_s_69", category: "D1", level: 1,
    // 3+5+2+4+6 = 20, 20/5 = 4
    text: {
      fr: "Nombre de verres d'eau bus par jour sur 5 jours : 3, 5, 2, 4, 6. Combien de verres en moyenne par jour ?",
      en: "Glasses of water drunk per day over 5 days: 3, 5, 2, 4, 6. How many glasses on average per day?",
      nl: "Glazen water gedronken per dag over 5 dagen: 3, 5, 2, 4, 6. Hoeveel glazen gemiddeld per dag?"
    },
    answer: 4, tolerance: 0.01,
    hint: {
      fr: "Additionne les 5 valeurs puis divise par 5.",
      en: "Add the 5 values then divide by 5.",
      nl: "Tel de 5 waarden op en deel door 5."
    }
  },
  {
    id: "D1_s_70", category: "D1", level: 1,
    // 18+22+14+26+20 = 100, 100/5 = 20
    text: {
      fr: "Nombre de cremes glacees vendues par jour : 18, 22, 14, 26, 20. Quelle est la moyenne de ventes par jour ?",
      en: "Number of ice creams sold per day: 18, 22, 14, 26, 20. What is the average sales per day?",
      nl: "Aantal verkochte ijsjes per dag: 18, 22, 14, 26, 20. Wat is de gemiddelde verkoop per dag?"
    },
    answer: 20, tolerance: 0.01,
    hint: {
      fr: "Additionne les 5 nombres puis divise par 5.",
      en: "Add the 5 numbers then divide by 5.",
      nl: "Tel de 5 getallen op en deel door 5."
    }
  },

  // ===========================================================================
  // LEVEL 2 - Additional questions (D1_s_71 to D1_s_91) - 21 questions
  // ===========================================================================
  {
    id: "D1_s_71", category: "D1", level: 2,
    // 34 - 12 = 22
    text: {
      fr: "Dans un tableau, la temperature la plus haute est 34 degres et la plus basse est 12 degres. Quelle est l'etendue ?",
      en: "In a table, the highest temperature is 34 degrees and the lowest is 12 degrees. What is the range?",
      nl: "In een tabel is de hoogste temperatuur 34 graden en de laagste 12 graden. Wat is het bereik?"
    },
    answer: 22, tolerance: 0.01,
    hint: {
      fr: "Etendue = valeur maximale - valeur minimale.",
      en: "Range = maximum value - minimum value.",
      nl: "Bereik = maximale waarde - minimale waarde."
    }
  },
  {
    id: "D1_s_72", category: "D1", level: 2,
    // 250 - 180 = 70
    text: {
      fr: "Ventes mensuelles : le meilleur mois a eu 250 ventes, le pire 180. Quelle est la difference ?",
      en: "Monthly sales: the best month had 250 sales, the worst 180. What is the difference?",
      nl: "Maandelijkse verkoop: de beste maand had 250 verkopen, de slechtste 180. Wat is het verschil?"
    },
    answer: 70, tolerance: 0.01,
    hint: {
      fr: "Soustrais la plus petite valeur de la plus grande.",
      en: "Subtract the smallest value from the largest.",
      nl: "Trek de kleinste waarde af van de grootste."
    }
  },
  {
    id: "D1_s_73", category: "D1", level: 2,
    // 8 * 15 = 120
    text: {
      fr: "La moyenne de 8 mesures de distance est 15 km. Quel est le total des distances parcourues ?",
      en: "The mean of 8 distance measurements is 15 km. What is the total distance covered?",
      nl: "Het gemiddelde van 8 afstandsmetingen is 15 km. Wat is de totale afgelegde afstand?"
    },
    answer: 120, tolerance: 0.01,
    hint: {
      fr: "Total = moyenne x nombre de mesures.",
      en: "Total = mean x number of measurements.",
      nl: "Totaal = gemiddelde x aantal metingen."
    }
  },
  {
    id: "D1_s_74", category: "D1", level: 2,
    // 5+(-3)+8+(-1)+6 = 15, 15/5 = 3
    text: {
      fr: "Gains et pertes en euros sur 5 jours : +5, -3, +8, -1, +6. Quel est le gain moyen par jour ?",
      en: "Gains and losses in euros over 5 days: +5, -3, +8, -1, +6. What is the average gain per day?",
      nl: "Winsten en verliezen in euro over 5 dagen: +5, -3, +8, -1, +6. Wat is de gemiddelde winst per dag?"
    },
    answer: 3, tolerance: 0.01,
    hint: {
      fr: "Additionne tous les gains et pertes puis divise par 5.",
      en: "Add all gains and losses then divide by 5.",
      nl: "Tel alle winsten en verliezen op en deel door 5."
    }
  },
  {
    id: "D1_s_75", category: "D1", level: 2,
    // 24+32+18+26+30 = 130, 130/5 = 26, max=32, 32-26 = 6
    text: {
      fr: "Points marques : 24, 32, 18, 26, 30. De combien le meilleur score depasse-t-il la moyenne ?",
      en: "Points scored: 24, 32, 18, 26, 30. By how much does the best score exceed the mean?",
      nl: "Gescoorde punten: 24, 32, 18, 26, 30. Hoeveel meer is de beste score dan het gemiddelde?"
    },
    answer: 6, tolerance: 0.01,
    hint: {
      fr: "Calcule d'abord la moyenne (130/5 = 26), puis soustrais-la du meilleur score.",
      en: "First calculate the mean (130/5 = 26), then subtract it from the best score.",
      nl: "Bereken eerst het gemiddelde (130/5 = 26) en trek het af van de beste score."
    }
  },
  {
    id: "D1_s_76", category: "D1", level: 2,
    // total = 5*18 = 90, four known: 20+16+22+14 = 72, missing = 90-72 = 18
    text: {
      fr: "La moyenne de 5 temperatures est 18 degres. Quatre mesures sont : 20, 16, 22, 14. Quelle est la 5e temperature ?",
      en: "The mean of 5 temperatures is 18 degrees. Four readings are: 20, 16, 22, 14. What is the 5th temperature?",
      nl: "Het gemiddelde van 5 temperaturen is 18 graden. Vier metingen zijn: 20, 16, 22, 14. Wat is de 5e temperatuur?"
    },
    answer: 18, tolerance: 0.01,
    hint: {
      fr: "Total = 5 x 18 = 90. Soustrais la somme des 4 valeurs connues.",
      en: "Total = 5 x 18 = 90. Subtract the sum of the 4 known values.",
      nl: "Totaal = 5 x 18 = 90. Trek de som van de 4 bekende waarden af."
    }
  },
  {
    id: "D1_s_77", category: "D1", level: 2,
    // Team A: 45+52+38 = 135, Team B: 40+48+50 = 138, diff = 138-135 = 3
    text: {
      fr: "Equipe A a marque 45, 52, 38 en 3 matchs. Equipe B a marque 40, 48, 50. Combien de points de plus l'equipe B a-t-elle en tout ?",
      en: "Team A scored 45, 52, 38 in 3 games. Team B scored 40, 48, 50. How many more points does team B have in total?",
      nl: "Team A scoorde 45, 52, 38 in 3 wedstrijden. Team B scoorde 40, 48, 50. Hoeveel meer punten heeft team B in totaal?"
    },
    answer: 3, tolerance: 0.01,
    hint: {
      fr: "Calcule le total de chaque equipe puis fais la difference.",
      en: "Calculate each team's total then find the difference.",
      nl: "Bereken het totaal van elk team en vind het verschil."
    }
  },
  {
    id: "D1_s_78", category: "D1", level: 2,
    // 72+88+64+96+80 = 400, max=96, min=64, range = 96-64 = 32
    text: {
      fr: "Resultats d'un examen : 72, 88, 64, 96, 80. Quelle est l'etendue des resultats ?",
      en: "Exam results: 72, 88, 64, 96, 80. What is the range of the results?",
      nl: "Examenresultaten: 72, 88, 64, 96, 80. Wat is het bereik van de resultaten?"
    },
    answer: 32, tolerance: 0.01,
    hint: {
      fr: "Etendue = valeur maximale - valeur minimale = 96 - 64.",
      en: "Range = maximum - minimum = 96 - 64.",
      nl: "Bereik = maximum - minimum = 96 - 64."
    }
  },
  {
    id: "D1_s_79", category: "D1", level: 2,
    // 6 * 25 = 150
    text: {
      fr: "La moyenne de 6 lancers au javelot est 25 metres. Quel est le total des distances des 6 lancers ?",
      en: "The mean of 6 javelin throws is 25 metres. What is the total distance of the 6 throws?",
      nl: "Het gemiddelde van 6 speerworpen is 25 meter. Wat is de totale afstand van de 6 worpen?"
    },
    answer: 150, tolerance: 0.01,
    hint: {
      fr: "Total = moyenne x nombre de lancers.",
      en: "Total = mean x number of throws.",
      nl: "Totaal = gemiddelde x aantal worpen."
    }
  },
  {
    id: "D1_s_80", category: "D1", level: 2,
    // Jan=120, Feb=95, Mar=110, Apr=130, May=105, Jun=140, Jul=80, Aug=100
    // Max month = Jun (140), Min month = Jul (80), diff = 60
    text: {
      fr: "Ventes mensuelles : jan=120, fev=95, mar=110, avr=130, mai=105, jun=140, jul=80, aou=100. Quelle est l'etendue des ventes ?",
      en: "Monthly sales: Jan=120, Feb=95, Mar=110, Apr=130, May=105, Jun=140, Jul=80, Aug=100. What is the range of sales?",
      nl: "Maandelijkse verkoop: jan=120, feb=95, mrt=110, apr=130, mei=105, jun=140, jul=80, aug=100. Wat is het bereik van de verkoop?"
    },
    answer: 60, tolerance: 0.01,
    hint: {
      fr: "Etendue = valeur maximale (140) - valeur minimale (80).",
      en: "Range = maximum (140) - minimum (80).",
      nl: "Bereik = maximum (140) - minimum (80)."
    }
  },
  {
    id: "D1_s_81", category: "D1", level: 2,
    // 10+(-5)+7+(-2)+15 = 25, 25/5 = 5
    text: {
      fr: "Temperatures sur 5 jours d'hiver : 10, -5, 7, -2, 15. Quelle est la temperature moyenne ?",
      en: "Temperatures over 5 winter days: 10, -5, 7, -2, 15. What is the average temperature?",
      nl: "Temperaturen over 5 winterdagen: 10, -5, 7, -2, 15. Wat is de gemiddelde temperatuur?"
    },
    answer: 5, tolerance: 0.01,
    hint: {
      fr: "Additionne les temperatures (attention aux negatifs) puis divise par 5.",
      en: "Add the temperatures (watch the negatives) then divide by 5.",
      nl: "Tel de temperaturen op (let op de negatieve getallen) en deel door 5."
    }
  },
  {
    id: "D1_s_82", category: "D1", level: 2,
    // Filles: 14+16+12 = 42, Garcons: 10+18+11 = 39, Filles > Garcons by 42-39 = 3
    text: {
      fr: "Notes des filles : 14, 16, 12. Notes des garcons : 10, 18, 11. De combien le total des filles depasse-t-il celui des garcons ?",
      en: "Girls' marks: 14, 16, 12. Boys' marks: 10, 18, 11. By how much does the girls' total exceed the boys'?",
      nl: "Punten meisjes: 14, 16, 12. Punten jongens: 10, 18, 11. Hoeveel meer is het totaal van de meisjes dan dat van de jongens?"
    },
    answer: 3, tolerance: 0.01,
    hint: {
      fr: "Calcule le total des filles et celui des garcons, puis fais la difference.",
      en: "Calculate the girls' total and the boys' total, then find the difference.",
      nl: "Bereken het totaal van de meisjes en van de jongens en vind het verschil."
    }
  },
  {
    id: "D1_s_83", category: "D1", level: 2,
    // 15+20+25+30+10 = 100, 100/5 = 20, min=10, 20-10 = 10
    text: {
      fr: "Ventes quotidiennes : 15, 20, 25, 30, 10. De combien la moyenne depasse-t-elle la valeur la plus basse ?",
      en: "Daily sales: 15, 20, 25, 30, 10. By how much does the mean exceed the lowest value?",
      nl: "Dagelijkse verkoop: 15, 20, 25, 30, 10. Hoeveel meer is het gemiddelde dan de laagste waarde?"
    },
    answer: 10, tolerance: 0.01,
    hint: {
      fr: "Calcule la moyenne (100/5 = 20), puis soustrais la valeur la plus basse (10).",
      en: "Calculate the mean (100/5 = 20), then subtract the lowest value (10).",
      nl: "Bereken het gemiddelde (100/5 = 20) en trek de laagste waarde (10) af."
    }
  },
  {
    id: "D1_s_84", category: "D1", level: 2,
    // 7 * 12 = 84
    text: {
      fr: "La temperature moyenne sur 7 jours est 12 degres. Quel est le total des temperatures enregistrees ?",
      en: "The average temperature over 7 days is 12 degrees. What is the total of the recorded temperatures?",
      nl: "De gemiddelde temperatuur over 7 dagen is 12 graden. Wat is het totaal van de geregistreerde temperaturen?"
    },
    answer: 84, tolerance: 0.01,
    hint: {
      fr: "Total = moyenne x nombre de jours = 12 x 7.",
      en: "Total = mean x number of days = 12 x 7.",
      nl: "Totaal = gemiddelde x aantal dagen = 12 x 7."
    }
  },
  {
    id: "D1_s_85", category: "D1", level: 2,
    // 16+22+18+24+20 = 100, 100/5 = 20, Thu(24) - Mon(16) = 8
    text: {
      fr: "Nombre de clients par jour : lundi 16, mardi 22, mercredi 18, jeudi 24, vendredi 20. Combien de clients de plus le jeudi que le lundi ?",
      en: "Customers per day: Monday 16, Tuesday 22, Wednesday 18, Thursday 24, Friday 20. How many more customers on Thursday than Monday?",
      nl: "Klanten per dag: maandag 16, dinsdag 22, woensdag 18, donderdag 24, vrijdag 20. Hoeveel meer klanten op donderdag dan op maandag?"
    },
    answer: 8, tolerance: 0.01,
    hint: {
      fr: "Soustrais le nombre de lundi de celui de jeudi : 24 - 16.",
      en: "Subtract Monday's number from Thursday's: 24 - 16.",
      nl: "Trek het aantal van maandag af van dat van donderdag: 24 - 16."
    }
  },
  {
    id: "D1_s_86", category: "D1", level: 2,
    // 4+(-6)+3+(-1)+5 = 5, 5/5 = 1
    text: {
      fr: "Variations de stock sur 5 jours : +4, -6, +3, -1, +5. Quelle est la variation moyenne par jour ?",
      en: "Stock changes over 5 days: +4, -6, +3, -1, +5. What is the average change per day?",
      nl: "Voorraadwijzigingen over 5 dagen: +4, -6, +3, -1, +5. Wat is de gemiddelde wijziging per dag?"
    },
    answer: 1, tolerance: 0.01,
    hint: {
      fr: "Additionne toutes les variations puis divise par 5.",
      en: "Add all the changes then divide by 5.",
      nl: "Tel alle wijzigingen op en deel door 5."
    }
  },
  {
    id: "D1_s_87", category: "D1", level: 2,
    // total = 4*20 = 80, three known: 22+18+16 = 56, missing = 80-56 = 24
    text: {
      fr: "La moyenne de 4 temps de course est 20 secondes. Trois temps sont : 22, 18, 16. Quel est le 4e temps ?",
      en: "The mean of 4 race times is 20 seconds. Three times are: 22, 18, 16. What is the 4th time?",
      nl: "Het gemiddelde van 4 looptijden is 20 seconden. Drie tijden zijn: 22, 18, 16. Wat is de 4e tijd?"
    },
    answer: 24, tolerance: 0.01,
    hint: {
      fr: "Total = 4 x 20 = 80. Soustrais la somme des 3 temps connus.",
      en: "Total = 4 x 20 = 80. Subtract the sum of the 3 known times.",
      nl: "Totaal = 4 x 20 = 80. Trek de som van de 3 bekende tijden af."
    }
  },
  {
    id: "D1_s_88", category: "D1", level: 2,
    // 35+45+25+55+40 = 200, 200/5 = 40, max(55)-mean(40) = 15
    text: {
      fr: "Production quotidienne d'une usine : 35, 45, 25, 55, 40. De combien le jour le plus productif depasse-t-il la moyenne ?",
      en: "Daily factory production: 35, 45, 25, 55, 40. By how much does the most productive day exceed the mean?",
      nl: "Dagelijkse fabrieksproductie: 35, 45, 25, 55, 40. Hoeveel meer is de meest productieve dag dan het gemiddelde?"
    },
    answer: 15, tolerance: 0.01,
    hint: {
      fr: "Moyenne = 200/5 = 40. Difference = 55 - 40.",
      en: "Mean = 200/5 = 40. Difference = 55 - 40.",
      nl: "Gemiddelde = 200/5 = 40. Verschil = 55 - 40."
    }
  },
  {
    id: "D1_s_89", category: "D1", level: 2,
    // Classe A: 12+14+16 = 42, Classe B: 15+13+11 = 39
    // Mean A = 42/3 = 14, Mean B = 39/3 = 13, diff = 14-13 = 1
    text: {
      fr: "Notes classe A : 12, 14, 16. Notes classe B : 15, 13, 11. De combien la moyenne de A depasse-t-elle celle de B ?",
      en: "Class A marks: 12, 14, 16. Class B marks: 15, 13, 11. By how much does A's mean exceed B's mean?",
      nl: "Punten klas A: 12, 14, 16. Punten klas B: 15, 13, 11. Hoeveel meer is het gemiddelde van A dan dat van B?"
    },
    answer: 1, tolerance: 0.01,
    hint: {
      fr: "Moyenne A = 42/3 = 14. Moyenne B = 39/3 = 13. Difference = 14 - 13.",
      en: "Mean A = 42/3 = 14. Mean B = 39/3 = 13. Difference = 14 - 13.",
      nl: "Gemiddelde A = 42/3 = 14. Gemiddelde B = 39/3 = 13. Verschil = 14 - 13."
    }
  },
  {
    id: "D1_s_90", category: "D1", level: 2,
    // 150+200+175+125+100+250 = 1000, max=250, min=100, range = 250-100 = 150
    text: {
      fr: "Depenses mensuelles en euros : 150, 200, 175, 125, 100, 250. Quelle est l'etendue des depenses ?",
      en: "Monthly expenses in euros: 150, 200, 175, 125, 100, 250. What is the range of expenses?",
      nl: "Maandelijkse uitgaven in euro: 150, 200, 175, 125, 100, 250. Wat is het bereik van de uitgaven?"
    },
    answer: 150, tolerance: 0.01,
    hint: {
      fr: "Etendue = valeur maximale (250) - valeur minimale (100).",
      en: "Range = maximum (250) - minimum (100).",
      nl: "Bereik = maximum (250) - minimum (100)."
    }
  },
  {
    id: "D1_s_91", category: "D1", level: 2,
    // 9 * 11 = 99
    text: {
      fr: "La moyenne de buts par match sur 9 matchs est 11. Combien de buts au total ?",
      en: "The average goals per game over 9 games is 11. How many goals in total?",
      nl: "Het gemiddeld aantal doelpunten per wedstrijd over 9 wedstrijden is 11. Hoeveel doelpunten in totaal?"
    },
    answer: 99, tolerance: 0.01,
    hint: {
      fr: "Total = moyenne x nombre de matchs = 11 x 9.",
      en: "Total = mean x number of games = 11 x 9.",
      nl: "Totaal = gemiddelde x aantal wedstrijden = 11 x 9."
    }
  },

  // ===========================================================================
  // LEVEL 3 - Additional questions (D1_s_92 to D1_s_111) - 20 questions
  // ===========================================================================
  {
    id: "D1_s_92", category: "D1", level: 3,
    // (3*12 + 2*18 + 1*6) / (3+2+1) = (36+36+6)/6 = 78/6 = 13
    text: {
      fr: "Notes et coefficients : 12 (coeff 3), 18 (coeff 2), 6 (coeff 1). Quelle est la moyenne ponderee ?",
      en: "Marks and coefficients: 12 (coeff 3), 18 (coeff 2), 6 (coeff 1). What is the weighted mean?",
      nl: "Punten en coefficienten: 12 (coeff 3), 18 (coeff 2), 6 (coeff 1). Wat is het gewogen gemiddelde?"
    },
    answer: 13, tolerance: 0.01,
    hint: {
      fr: "Calcule (3x12 + 2x18 + 1x6) / (3+2+1) = 78/6.",
      en: "Calculate (3x12 + 2x18 + 1x6) / (3+2+1) = 78/6.",
      nl: "Bereken (3x12 + 2x18 + 1x6) / (3+2+1) = 78/6."
    }
  },
  {
    id: "D1_s_93", category: "D1", level: 3,
    // Mean of 6 = 10, total = 60. Remove 18 -> new total = 42, new mean = 42/5 = 8.4
    text: {
      fr: "La moyenne de 6 scores est 10. On retire le score 18. Quelle est la nouvelle moyenne des 5 scores restants ?",
      en: "The mean of 6 scores is 10. The score 18 is removed. What is the new mean of the 5 remaining scores?",
      nl: "Het gemiddelde van 6 scores is 10. De score 18 wordt verwijderd. Wat is het nieuwe gemiddelde van de 5 resterende scores?"
    },
    answer: 8.4, tolerance: 0.01,
    hint: {
      fr: "Total initial = 6 x 10 = 60. Retire 18. Divise 42 par 5.",
      en: "Initial total = 6 x 10 = 60. Remove 18. Divide 42 by 5.",
      nl: "Oorspronkelijk totaal = 6 x 10 = 60. Trek 18 af. Deel 42 door 5."
    }
  },
  {
    id: "D1_s_94", category: "D1", level: 3,
    // (15*20 + 10*16) / (15+10) = (300+160)/25 = 460/25 = 18.4
    text: {
      fr: "Groupe A : 15 eleves, moyenne 20. Groupe B : 10 eleves, moyenne 16. Quelle est la moyenne de l'ensemble ?",
      en: "Group A: 15 students, mean 20. Group B: 10 students, mean 16. What is the overall mean?",
      nl: "Groep A: 15 leerlingen, gemiddelde 20. Groep B: 10 leerlingen, gemiddelde 16. Wat is het totale gemiddelde?"
    },
    answer: 18.4, tolerance: 0.01,
    hint: {
      fr: "Total A = 15 x 20 = 300. Total B = 10 x 16 = 160. Moyenne = 460/25.",
      en: "Total A = 15 x 20 = 300. Total B = 10 x 16 = 160. Mean = 460/25.",
      nl: "Totaal A = 15 x 20 = 300. Totaal B = 10 x 16 = 160. Gemiddelde = 460/25."
    }
  },
  {
    id: "D1_s_95", category: "D1", level: 3,
    // Total needed = 15 * 6 = 90. Sum of 5 = 12+18+14+16+10 = 70. Missing = 90-70 = 20
    text: {
      fr: "Cinq notes sont : 12, 18, 14, 16, 10. Quelle 6e note faut-il pour obtenir une moyenne de 15 ?",
      en: "Five marks are: 12, 18, 14, 16, 10. What 6th mark is needed for a mean of 15?",
      nl: "Vijf punten zijn: 12, 18, 14, 16, 10. Welk 6e punt is nodig voor een gemiddelde van 15?"
    },
    answer: 20, tolerance: 0.01,
    hint: {
      fr: "Total necessaire = 15 x 6 = 90. Somme des 5 notes = 70. Manquant = 90 - 70.",
      en: "Needed total = 15 x 6 = 90. Sum of 5 marks = 70. Missing = 90 - 70.",
      nl: "Benodigd totaal = 15 x 6 = 90. Som van 5 punten = 70. Ontbrekend = 90 - 70."
    }
  },
  {
    id: "D1_s_96", category: "D1", level: 3,
    // Mean of 9 = 20, total = 180. Add value 30: new total = 210, new mean = 210/10 = 21
    text: {
      fr: "La moyenne de 9 mesures de vitesse est 20 km/h. On ajoute une mesure de 30 km/h. Quelle est la nouvelle moyenne des 10 mesures ?",
      en: "The mean of 9 speed measurements is 20 km/h. A measurement of 30 km/h is added. What is the new mean of the 10 measurements?",
      nl: "Het gemiddelde van 9 snelheidsmetingen is 20 km/u. Een meting van 30 km/u wordt toegevoegd. Wat is het nieuwe gemiddelde van de 10 metingen?"
    },
    answer: 21, tolerance: 0.01,
    hint: {
      fr: "Total initial = 9 x 20 = 180. Ajoute 30. Divise 210 par 10.",
      en: "Initial total = 9 x 20 = 180. Add 30. Divide 210 by 10.",
      nl: "Oorspronkelijk totaal = 9 x 20 = 180. Tel 30 erbij. Deel 210 door 10."
    }
  },
  {
    id: "D1_s_97", category: "D1", level: 3,
    // (4*15 + 3*10 + 2*20 + 1*8) / (4+3+2+1) = (60+30+40+8)/10 = 138/10 = 13.8
    text: {
      fr: "Matieres : maths (15, coeff 4), francais (10, coeff 3), sport (20, coeff 2), musique (8, coeff 1). Moyenne ponderee ?",
      en: "Subjects: maths (15, coeff 4), French (10, coeff 3), sport (20, coeff 2), music (8, coeff 1). Weighted mean?",
      nl: "Vakken: wiskunde (15, coeff 4), Frans (10, coeff 3), sport (20, coeff 2), muziek (8, coeff 1). Gewogen gemiddelde?"
    },
    answer: 13.8, tolerance: 0.01,
    hint: {
      fr: "Calcule (4x15 + 3x10 + 2x20 + 1x8) / (4+3+2+1) = 138/10.",
      en: "Calculate (4x15 + 3x10 + 2x20 + 1x8) / (4+3+2+1) = 138/10.",
      nl: "Bereken (4x15 + 3x10 + 2x20 + 1x8) / (4+3+2+1) = 138/10."
    }
  },
  {
    id: "D1_s_98", category: "D1", level: 3,
    // Mean of 8 = 25, total = 200. Remove highest (40) and lowest (10): new total = 200-40-10 = 150, new mean = 150/6 = 25
    text: {
      fr: "La moyenne de 8 notes est 25. On retire la plus haute (40) et la plus basse (10). Quelle est la moyenne des 6 notes restantes ?",
      en: "The mean of 8 marks is 25. The highest (40) and lowest (10) are removed. What is the mean of the 6 remaining marks?",
      nl: "Het gemiddelde van 8 punten is 25. Het hoogste (40) en het laagste (10) worden verwijderd. Wat is het gemiddelde van de 6 resterende punten?"
    },
    answer: 25, tolerance: 0.01,
    hint: {
      fr: "Total initial = 8 x 25 = 200. Retire 40 et 10 : 150. Divise par 6.",
      en: "Initial total = 8 x 25 = 200. Remove 40 and 10: 150. Divide by 6.",
      nl: "Oorspronkelijk totaal = 8 x 25 = 200. Trek 40 en 10 af: 150. Deel door 6."
    }
  },
  {
    id: "D1_s_99", category: "D1", level: 3,
    // Mean of 5 = 12, total = 60. Each value doubled: new total = 120, new mean = 120/5 = 24
    text: {
      fr: "La moyenne de 5 donnees est 12. On multiplie chaque donnee par 2. Quelle est la nouvelle moyenne ?",
      en: "The mean of 5 data values is 12. Each value is multiplied by 2. What is the new mean?",
      nl: "Het gemiddelde van 5 gegevens is 12. Elke waarde wordt vermenigvuldigd met 2. Wat is het nieuwe gemiddelde?"
    },
    answer: 24, tolerance: 0.01,
    hint: {
      fr: "Quand on multiplie chaque valeur par un nombre, la moyenne est aussi multipliee par ce nombre.",
      en: "When each value is multiplied by a number, the mean is also multiplied by that number.",
      nl: "Als elke waarde met een getal wordt vermenigvuldigd, wordt het gemiddelde ook met dat getal vermenigvuldigd."
    }
  },
  {
    id: "D1_s_100", category: "D1", level: 3,
    // (12*30 + 8*20) / (12+8) = (360+160)/20 = 520/20 = 26
    text: {
      fr: "12 garcons ont une moyenne de 30 points. 8 filles ont une moyenne de 20 points. Quelle est la moyenne de tous les eleves ?",
      en: "12 boys have a mean of 30 points. 8 girls have a mean of 20 points. What is the mean of all the students?",
      nl: "12 jongens hebben een gemiddelde van 30 punten. 8 meisjes hebben een gemiddelde van 20 punten. Wat is het gemiddelde van alle leerlingen?"
    },
    answer: 26, tolerance: 0.01,
    hint: {
      fr: "Total garcons = 12 x 30 = 360. Total filles = 8 x 20 = 160. Moyenne = 520/20.",
      en: "Boys' total = 12 x 30 = 360. Girls' total = 8 x 20 = 160. Mean = 520/20.",
      nl: "Totaal jongens = 12 x 30 = 360. Totaal meisjes = 8 x 20 = 160. Gemiddelde = 520/20."
    }
  },
  {
    id: "D1_s_101", category: "D1", level: 3,
    // Mean of 12 = 15, total = 180. Replace 24 by 12: new total = 180-24+12 = 168, new mean = 168/12 = 14
    text: {
      fr: "La moyenne de 12 valeurs est 15. On remplace une valeur (24) par 12. Quelle est la nouvelle moyenne ?",
      en: "The mean of 12 values is 15. One value (24) is replaced by 12. What is the new mean?",
      nl: "Het gemiddelde van 12 waarden is 15. Een waarde (24) wordt vervangen door 12. Wat is het nieuwe gemiddelde?"
    },
    answer: 14, tolerance: 0.01,
    hint: {
      fr: "Total initial = 12 x 15 = 180. Retire 24, ajoute 12 : 168. Divise par 12.",
      en: "Initial total = 12 x 15 = 180. Remove 24, add 12: 168. Divide by 12.",
      nl: "Oorspronkelijk totaal = 12 x 15 = 180. Trek 24 af, tel 12 erbij: 168. Deel door 12."
    }
  },
  {
    id: "D1_s_102", category: "D1", level: 3,
    // Total needed = 14 * 7 = 98. Sum of 6 = 10+16+12+18+8+20 = 84. Missing = 98-84 = 14
    text: {
      fr: "Six resultats sont : 10, 16, 12, 18, 8, 20. Quel 7e resultat faut-il pour obtenir une moyenne de 14 ?",
      en: "Six results are: 10, 16, 12, 18, 8, 20. What 7th result is needed for a mean of 14?",
      nl: "Zes resultaten zijn: 10, 16, 12, 18, 8, 20. Welk 7e resultaat is nodig voor een gemiddelde van 14?"
    },
    answer: 14, tolerance: 0.01,
    hint: {
      fr: "Total necessaire = 14 x 7 = 98. Somme des 6 resultats = 84. Manquant = 98 - 84.",
      en: "Needed total = 14 x 7 = 98. Sum of 6 results = 84. Missing = 98 - 84.",
      nl: "Benodigd totaal = 14 x 7 = 98. Som van 6 resultaten = 84. Ontbrekend = 98 - 84."
    }
  },
  {
    id: "D1_s_103", category: "D1", level: 3,
    // Mean of 4 = 18, total = 72. Add two values (10 and 14): new total = 72+10+14 = 96, new mean = 96/6 = 16
    text: {
      fr: "La moyenne de 4 scores est 18. On ajoute deux scores de 10 et 14. Quelle est la nouvelle moyenne des 6 scores ?",
      en: "The mean of 4 scores is 18. Two scores of 10 and 14 are added. What is the new mean of the 6 scores?",
      nl: "Het gemiddelde van 4 scores is 18. Twee scores van 10 en 14 worden toegevoegd. Wat is het nieuwe gemiddelde van de 6 scores?"
    },
    answer: 16, tolerance: 0.01,
    hint: {
      fr: "Total initial = 4 x 18 = 72. Ajoute 10 et 14 : 96. Divise par 6.",
      en: "Initial total = 4 x 18 = 72. Add 10 and 14: 96. Divide by 6.",
      nl: "Oorspronkelijk totaal = 4 x 18 = 72. Tel 10 en 14 erbij: 96. Deel door 6."
    }
  },
  {
    id: "D1_s_104", category: "D1", level: 3,
    // (5*14 + 3*18 + 2*10) / (5+3+2) = (70+54+20)/10 = 144/10 = 14.4
    text: {
      fr: "Resultats d'athletisme : sprint (14 s, coeff 5), saut (18 pts, coeff 3), lancer (10 m, coeff 2). Moyenne ponderee ?",
      en: "Athletics results: sprint (14 s, coeff 5), jump (18 pts, coeff 3), throw (10 m, coeff 2). Weighted mean?",
      nl: "Atletiekresultaten: sprint (14 s, coeff 5), sprong (18 ptn, coeff 3), worp (10 m, coeff 2). Gewogen gemiddelde?"
    },
    answer: 14.4, tolerance: 0.01,
    hint: {
      fr: "Calcule (5x14 + 3x18 + 2x10) / (5+3+2) = 144/10.",
      en: "Calculate (5x14 + 3x18 + 2x10) / (5+3+2) = 144/10.",
      nl: "Bereken (5x14 + 3x18 + 2x10) / (5+3+2) = 144/10."
    }
  },
  {
    id: "D1_s_105", category: "D1", level: 3,
    // Mean of 10 = 8, total = 80. Remove 3 values (5, 10, 15 -> sum=30): new total = 80-30 = 50, new mean = 50/7 = 7.14 (rounded to 2 dp)
    text: {
      fr: "La moyenne de 10 valeurs est 8. On retire les valeurs 5, 10 et 15. Quelle est la moyenne des 7 valeurs restantes ?",
      en: "The mean of 10 values is 8. The values 5, 10 and 15 are removed. What is the mean of the 7 remaining values?",
      nl: "Het gemiddelde van 10 waarden is 8. De waarden 5, 10 en 15 worden verwijderd. Wat is het gemiddelde van de 7 resterende waarden?"
    },
    answer: 7.14, tolerance: 0.01,
    hint: {
      fr: "Total initial = 80. Retire 5+10+15 = 30. Nouveau total = 50. Divise par 7.",
      en: "Initial total = 80. Remove 5+10+15 = 30. New total = 50. Divide by 7.",
      nl: "Oorspronkelijk totaal = 80. Trek 5+10+15 = 30 af. Nieuw totaal = 50. Deel door 7."
    }
  },
  {
    id: "D1_s_106", category: "D1", level: 3,
    // (20*15 + 30*25) / (20+30) = (300+750)/50 = 1050/50 = 21
    text: {
      fr: "Section A : 20 employes, salaire moyen 15 euros/h. Section B : 30 employes, salaire moyen 25 euros/h. Quel est le salaire moyen global ?",
      en: "Section A: 20 employees, average salary 15 euros/h. Section B: 30 employees, average salary 25 euros/h. What is the overall average salary?",
      nl: "Afdeling A: 20 werknemers, gemiddeld loon 15 euro/u. Afdeling B: 30 werknemers, gemiddeld loon 25 euro/u. Wat is het globale gemiddelde loon?"
    },
    answer: 21, tolerance: 0.01,
    hint: {
      fr: "Total A = 20 x 15 = 300. Total B = 30 x 25 = 750. Moyenne = 1050/50.",
      en: "Total A = 20 x 15 = 300. Total B = 30 x 25 = 750. Mean = 1050/50.",
      nl: "Totaal A = 20 x 15 = 300. Totaal B = 30 x 25 = 750. Gemiddelde = 1050/50."
    }
  },
  {
    id: "D1_s_107", category: "D1", level: 3,
    // Mean of 6 = 14, total = 84. Each value reduced by 2: new total = 84 - 6*2 = 72, new mean = 72/6 = 12
    text: {
      fr: "La moyenne de 6 temperatures est 14 degres. On soustrait 2 degres a chaque mesure. Quelle est la nouvelle moyenne ?",
      en: "The mean of 6 temperatures is 14 degrees. 2 degrees are subtracted from each reading. What is the new mean?",
      nl: "Het gemiddelde van 6 temperaturen is 14 graden. Er worden 2 graden afgetrokken van elke meting. Wat is het nieuwe gemiddelde?"
    },
    answer: 12, tolerance: 0.01,
    hint: {
      fr: "Quand on soustrait un nombre a chaque valeur, la moyenne diminue de ce meme nombre : 14 - 2 = 12.",
      en: "When you subtract a number from each value, the mean decreases by that number: 14 - 2 = 12.",
      nl: "Als je een getal van elke waarde aftrekt, daalt het gemiddelde met datzelfde getal: 14 - 2 = 12."
    }
  },
  {
    id: "D1_s_108", category: "D1", level: 3,
    // Mean of 5 first = 16, total = 80. Mean of 3 next = 10, total = 30. Overall = (80+30)/8 = 110/8 = 13.75
    text: {
      fr: "Les 5 premiers coureurs ont un temps moyen de 16 minutes. Les 3 suivants ont un temps moyen de 10 minutes. Quel est le temps moyen des 8 coureurs ?",
      en: "The first 5 runners have a mean time of 16 minutes. The next 3 have a mean time of 10 minutes. What is the mean time of all 8 runners?",
      nl: "De eerste 5 lopers hebben een gemiddelde tijd van 16 minuten. De volgende 3 hebben een gemiddelde tijd van 10 minuten. Wat is de gemiddelde tijd van alle 8 lopers?"
    },
    answer: 13.75, tolerance: 0.01,
    hint: {
      fr: "Total 1er groupe = 5 x 16 = 80. Total 2e groupe = 3 x 10 = 30. Moyenne = 110/8.",
      en: "Total 1st group = 5 x 16 = 80. Total 2nd group = 3 x 10 = 30. Mean = 110/8.",
      nl: "Totaal 1e groep = 5 x 16 = 80. Totaal 2e groep = 3 x 10 = 30. Gemiddelde = 110/8."
    }
  },
  {
    id: "D1_s_109", category: "D1", level: 3,
    // Mean of 8 = 22, total = 176. Replace value 30 by unknown x so new mean = 20: 8*20 = 160, so new total = 160.
    // 176 - 30 + x = 160, x = 160 - 146 = 14
    text: {
      fr: "La moyenne de 8 valeurs est 22. On remplace une valeur (30) par une autre pour obtenir une moyenne de 20. Quelle est la nouvelle valeur ?",
      en: "The mean of 8 values is 22. One value (30) is replaced to get a mean of 20. What is the new value?",
      nl: "Het gemiddelde van 8 waarden is 22. Een waarde (30) wordt vervangen om een gemiddelde van 20 te krijgen. Wat is de nieuwe waarde?"
    },
    answer: 14, tolerance: 0.01,
    hint: {
      fr: "Ancien total = 176. Nouveau total voulu = 160. Nouvelle valeur = 30 - (176 - 160) = 14.",
      en: "Old total = 176. New target total = 160. New value = 30 - (176 - 160) = 14.",
      nl: "Oud totaal = 176. Nieuw gewenst totaal = 160. Nieuwe waarde = 30 - (176 - 160) = 14."
    }
  },
  {
    id: "D1_s_110", category: "D1", level: 3,
    // (2*20 + 5*12 + 3*16) / (2+5+3) = (40+60+48)/10 = 148/10 = 14.8
    text: {
      fr: "3 epreuves : epreuve A (20 points, coeff 2), epreuve B (12 points, coeff 5), epreuve C (16 points, coeff 3). Moyenne ponderee ?",
      en: "3 tests: test A (20 points, coeff 2), test B (12 points, coeff 5), test C (16 points, coeff 3). Weighted mean?",
      nl: "3 proeven: proef A (20 punten, coeff 2), proef B (12 punten, coeff 5), proef C (16 punten, coeff 3). Gewogen gemiddelde?"
    },
    answer: 14.8, tolerance: 0.01,
    hint: {
      fr: "Calcule (2x20 + 5x12 + 3x16) / (2+5+3) = 148/10.",
      en: "Calculate (2x20 + 5x12 + 3x16) / (2+5+3) = 148/10.",
      nl: "Bereken (2x20 + 5x12 + 3x16) / (2+5+3) = 148/10."
    }
  },
  {
    id: "D1_s_111", category: "D1", level: 3,
    // Mean of 6 = 15, total = 90. Add 3 values each equal to 21: new total = 90 + 3*21 = 90+63 = 153, new mean = 153/9 = 17
    text: {
      fr: "La moyenne de 6 notes est 15. On ajoute 3 notes de 21 chacune. Quelle est la nouvelle moyenne des 9 notes ?",
      en: "The mean of 6 marks is 15. Three marks of 21 each are added. What is the new mean of the 9 marks?",
      nl: "Het gemiddelde van 6 punten is 15. Er worden 3 punten van elk 21 toegevoegd. Wat is het nieuwe gemiddelde van de 9 punten?"
    },
    answer: 17, tolerance: 0.01,
    hint: {
      fr: "Total initial = 6 x 15 = 90. Ajoute 3 x 21 = 63. Nouveau total = 153. Divise par 9.",
      en: "Initial total = 6 x 15 = 90. Add 3 x 21 = 63. New total = 153. Divide by 9.",
      nl: "Oorspronkelijk totaal = 6 x 15 = 90. Tel 3 x 21 = 63 erbij. Nieuw totaal = 153. Deel door 9."
    }
  },
  {
    id: "D1_s_112", category: "D1", level: 1,
    text: {
      fr: "Un tableau montre les ventes : lundi 12, mardi 18, mercredi 15. Quel est le total des ventes ?",
      en: "A table shows sales: Monday 12, Tuesday 18, Wednesday 15. What is the total sales?",
      nl: "Een tabel toont de verkoop: maandag 12, dinsdag 18, woensdag 15. Wat is de totale verkoop?"
    },
    answer: 45, tolerance: 0,
    hint: {
      fr: "12 + 18 + 15 = 45.",
      en: "12 + 18 + 15 = 45.",
      nl: "12 + 18 + 15 = 45."
    }
  },
  {
    id: "D1_s_113", category: "D1", level: 1,
    text: {
      fr: "La moyenne de 10, 20 et 30 est ?",
      en: "What is the mean of 10, 20, and 30?",
      nl: "Wat is het gemiddelde van 10, 20 en 30?"
    },
    answer: 20, tolerance: 0,
    hint: {
      fr: "(10 + 20 + 30) : 3 = 60 : 3 = 20.",
      en: "(10 + 20 + 30) : 3 = 60 : 3 = 20.",
      nl: "(10 + 20 + 30) : 3 = 60 : 3 = 20."
    }
  },
  {
    id: "D1_s_114", category: "D1", level: 1,
    text: {
      fr: "Un diagramme indique : A = 25, B = 35, C = 40. Quelle catégorie a la plus grande valeur ?",
      en: "A chart shows: A = 25, B = 35, C = 40. What is the value of the largest category?",
      nl: "Een diagram toont: A = 25, B = 35, C = 40. Wat is de waarde van de grootste categorie?"
    },
    answer: 40, tolerance: 0,
    hint: {
      fr: "Compare les trois valeurs : 40 est la plus grande.",
      en: "Compare the three values: 40 is the largest.",
      nl: "Vergelijk de drie waarden: 40 is de grootste."
    }
  },
  {
    id: "D1_s_115", category: "D1", level: 2,
    text: {
      fr: "La moyenne de 5 nombres est 12. Si on enlève le nombre 7, quelle est la nouvelle moyenne des 4 nombres restants ?",
      en: "The mean of 5 numbers is 12. If 7 is removed, what is the new mean of the 4 remaining numbers?",
      nl: "Het gemiddelde van 5 getallen is 12. Als 7 wordt verwijderd, wat is het nieuwe gemiddelde van de 4 overgebleven getallen?"
    },
    answer: 13.25, tolerance: 0.01,
    hint: {
      fr: "Total = 5 . 12 = 60. Nouveau total = 60 − 7 = 53. 53 : 4 = 13,25.",
      en: "Total = 5 . 12 = 60. New total = 60 − 7 = 53. 53 : 4 = 13.25.",
      nl: "Totaal = 5 . 12 = 60. Nieuw totaal = 60 − 7 = 53. 53 : 4 = 13,25."
    }
  },
  {
    id: "D1_s_116", category: "D1", level: 2,
    text: {
      fr: "Un graphique montre les températures sur 4 jours : 8, 12, 6, 14. Quelle est la moyenne ?",
      en: "A graph shows temperatures over 4 days: 8, 12, 6, 14. What is the mean?",
      nl: "Een grafiek toont temperaturen over 4 dagen: 8, 12, 6, 14. Wat is het gemiddelde?"
    },
    answer: 10, tolerance: 0,
    hint: {
      fr: "(8 + 12 + 6 + 14) : 4 = 40 : 4 = 10.",
      en: "(8 + 12 + 6 + 14) : 4 = 40 : 4 = 10.",
      nl: "(8 + 12 + 6 + 14) : 4 = 40 : 4 = 10."
    }
  },
  {
    id: "D1_s_117", category: "D1", level: 3,
    text: {
      fr: "Moyenne pondérée : math (coeff. 3) = 14, français (coeff. 2) = 16, sciences (coeff. 1) = 10. Quelle est la moyenne pondérée ?",
      en: "Weighted average: math (weight 3) = 14, French (weight 2) = 16, science (weight 1) = 10. What is the weighted average?",
      nl: "Gewogen gemiddelde: wiskunde (coëff. 3) = 14, Frans (coëff. 2) = 16, wetenschappen (coëff. 1) = 10. Wat is het gewogen gemiddelde?"
    },
    answer: 14, tolerance: 0,
    hint: {
      fr: "(14.3 + 16.2 + 10.1) : (3+2+1) = (42+32+10) : 6 = 84 : 6 = 14.",
      en: "(14.3 + 16.2 + 10.1) : (3+2+1) = (42+32+10) : 6 = 84 : 6 = 14.",
      nl: "(14.3 + 16.2 + 10.1) : (3+2+1) = (42+32+10) : 6 = 84 : 6 = 14."
    }
  },
  {
    id: "D1_s_118", category: "D1", level: 3,
    text: {
      fr: "La moyenne de 8 valeurs est 22. On retire deux valeurs : 10 et 14. Quelle est la nouvelle moyenne des 6 valeurs restantes ?",
      en: "The mean of 8 values is 22. Two values are removed: 10 and 14. What is the new mean of the 6 remaining values?",
      nl: "Het gemiddelde van 8 waarden is 22. Twee waarden worden verwijderd: 10 en 14. Wat is het nieuwe gemiddelde van de 6 overgebleven waarden?"
    },
    answer: 25.33, tolerance: 0.01,
    hint: {
      fr: "Total = 8 . 22 = 176. Nouveau total = 176 − 10 − 14 = 152. 152 : 6 ≈ 25,33.",
      en: "Total = 8 . 22 = 176. New total = 176 − 10 − 14 = 152. 152 : 6 ≈ 25.33.",
      nl: "Totaal = 8 . 22 = 176. Nieuw totaal = 176 − 10 − 14 = 152. 152 : 6 ≈ 25,33."
    }
  },
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
