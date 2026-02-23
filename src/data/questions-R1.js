// =============================================================================
// R1 - Raisonnement / Problèmes complexes
// CE1D Belgian exam - Trilingual (FR / EN / NL)
// =============================================================================

export const questions = [
  // ===================== Level 1 — Simple word problems =====================
  {
    id: "R1_s_1", category: "R1", level: 1,
    text: { fr: "Pierre a 24 billes. Il en donne 1/3 à son ami. Combien lui en reste-t-il ?", en: "Pierre has 24 marbles. He gives 1/3 to his friend. How many remain?", nl: "Pierre heeft 24 knikkers. Hij geeft 1/3 aan zijn vriend. Hoeveel houdt hij over?" },
    answer: 16, tolerance: 0,
    hint: { fr: "1/3 de 24 = 8. Il reste 24 - 8.", en: "1/3 of 24 = 8. Remaining: 24 - 8.", nl: "1/3 van 24 = 8. Over: 24 - 8." }
  },
  {
    id: "R1_s_2", category: "R1", level: 1,
    text: { fr: "Un livre coûte 15 € et un cahier 3 €. Combien coûtent 2 livres et 3 cahiers ?", en: "A book costs €15 and a notebook €3. How much for 2 books and 3 notebooks?", nl: "Een boek kost €15 en een schrift €3. Hoeveel kosten 2 boeken en 3 schriften?" },
    answer: 39, tolerance: 0,
    hint: { fr: "2 × 15 + 3 × 3.", en: "2 × 15 + 3 × 3.", nl: "2 × 15 + 3 × 3." }
  },
  {
    id: "R1_s_3", category: "R1", level: 1,
    text: { fr: "Marie a 5 ans de plus que Tom. Tom a 8 ans. Quel âge a Marie ?", en: "Marie is 5 years older than Tom. Tom is 8. How old is Marie?", nl: "Marie is 5 jaar ouder dan Tom. Tom is 8. Hoe oud is Marie?" },
    answer: 13, tolerance: 0,
    hint: { fr: "8 + 5 = 13.", en: "8 + 5 = 13.", nl: "8 + 5 = 13." }
  },
  {
    id: "R1_s_4", category: "R1", level: 1,
    text: { fr: "Un rectangle a un périmètre de 30 cm et une longueur de 10 cm. Quelle est sa largeur ?", en: "A rectangle has perimeter 30 cm and length 10 cm. What is its width?", nl: "Een rechthoek heeft omtrek 30 cm en lengte 10 cm. Wat is de breedte?" },
    answer: 5, tolerance: 0,
    hint: { fr: "Périmètre = 2 × (L + l). Donc 30 = 2 × (10 + l).", en: "P = 2(L + w). So 30 = 2(10 + w).", nl: "Omtrek = 2(L + b). Dus 30 = 2(10 + b)." }
  },
  {
    id: "R1_s_5", category: "R1", level: 1,
    text: { fr: "Jean a 42 bonbons à partager en 7 sachets égaux. Combien par sachet ?", en: "Jean has 42 candies to share in 7 equal bags. How many per bag?", nl: "Jean heeft 42 snoepjes om in 7 gelijke zakjes te verdelen. Hoeveel per zakje?" },
    answer: 6, tolerance: 0,
    hint: { fr: "42 ÷ 7.", en: "42 ÷ 7.", nl: "42 ÷ 7." }
  },
  {
    id: "R1_s_16", category: "R1", level: 1,
    text: { fr: "Un fermier a 18 poules et 7 canards. Combien d'oiseaux a-t-il en tout ?", en: "A farmer has 18 chickens and 7 ducks. How many birds in total?", nl: "Een boer heeft 18 kippen en 7 eenden. Hoeveel vogels in totaal?" },
    answer: 25, tolerance: 0,
    hint: { fr: "18 + 7 = 25.", en: "18 + 7 = 25.", nl: "18 + 7 = 25." }
  },
  {
    id: "R1_s_17", category: "R1", level: 1,
    text: { fr: "Sophie avait 50 €. Elle achète un jeu à 32 €. Combien lui reste-t-il ?", en: "Sophie had €50. She buys a game for €32. How much remains?", nl: "Sophie had €50. Ze koopt een spel van €32. Hoeveel houdt ze over?" },
    answer: 18, tolerance: 0,
    hint: { fr: "50 - 32 = 18.", en: "50 - 32 = 18.", nl: "50 - 32 = 18." }
  },
  {
    id: "R1_s_18", category: "R1", level: 1,
    text: { fr: "Une classe compte 28 élèves. Il y a 16 filles. Combien y a-t-il de garçons ?", en: "A class has 28 students. There are 16 girls. How many boys?", nl: "Een klas telt 28 leerlingen. Er zijn 16 meisjes. Hoeveel jongens?" },
    answer: 12, tolerance: 0,
    hint: { fr: "28 - 16 = 12.", en: "28 - 16 = 12.", nl: "28 - 16 = 12." }
  },
  {
    id: "R1_s_19", category: "R1", level: 1,
    text: { fr: "Trois amis se partagent 36 cartes à jouer de façon égale. Combien chacun reçoit-il ?", en: "Three friends share 36 playing cards equally. How many does each get?", nl: "Drie vrienden verdelen 36 speelkaarten gelijk. Hoeveel krijgt elk?" },
    answer: 12, tolerance: 0,
    hint: { fr: "36 ÷ 3 = 12.", en: "36 ÷ 3 = 12.", nl: "36 ÷ 3 = 12." }
  },
  {
    id: "R1_s_20", category: "R1", level: 1,
    text: { fr: "Un carré a un côté de 9 cm. Quel est son périmètre ?", en: "A square has a side of 9 cm. What is its perimeter?", nl: "Een vierkant heeft een zijde van 9 cm. Wat is de omtrek?" },
    answer: 36, tolerance: 0,
    hint: { fr: "Périmètre = 4 × 9 = 36.", en: "Perimeter = 4 × 9 = 36.", nl: "Omtrek = 4 × 9 = 36." }
  },
  {
    id: "R1_s_21", category: "R1", level: 1,
    text: { fr: "Lucas a 15 autocollants. Il en reçoit 8 de plus. Combien en a-t-il maintenant ?", en: "Lucas has 15 stickers. He receives 8 more. How many does he have now?", nl: "Lucas heeft 15 stickers. Hij krijgt er 8 bij. Hoeveel heeft hij nu?" },
    answer: 23, tolerance: 0,
    hint: { fr: "15 + 8 = 23.", en: "15 + 8 = 23.", nl: "15 + 8 = 23." }
  },
  {
    id: "R1_s_22", category: "R1", level: 1,
    text: { fr: "Une recette demande 250 g de farine. On double la recette. Combien de grammes faut-il ?", en: "A recipe requires 250 g of flour. You double the recipe. How many grams are needed?", nl: "Een recept vraagt 250 g bloem. Je verdubbelt het recept. Hoeveel gram is nodig?" },
    answer: 500, tolerance: 0,
    hint: { fr: "250 × 2 = 500.", en: "250 × 2 = 500.", nl: "250 × 2 = 500." }
  },
  {
    id: "R1_s_23", category: "R1", level: 1,
    text: { fr: "Un match de football dure 90 minutes. Combien d'heures et de minutes cela fait-il ? Réponds en minutes.", en: "A football match lasts 90 minutes. Answer in minutes.", nl: "Een voetbalwedstrijd duurt 90 minuten. Antwoord in minuten." },
    answer: 90, tolerance: 0,
    hint: { fr: "90 minutes = 1 h 30 min = 90 min.", en: "90 minutes = 1 h 30 min = 90 min.", nl: "90 minuten = 1 u 30 min = 90 min." }
  },
  {
    id: "R1_s_24", category: "R1", level: 1,
    text: { fr: "Un rectangle a une longueur de 8 cm et une largeur de 5 cm. Quelle est son aire ?", en: "A rectangle has length 8 cm and width 5 cm. What is its area?", nl: "Een rechthoek heeft een lengte van 8 cm en een breedte van 5 cm. Wat is de oppervlakte?" },
    answer: 40, tolerance: 0,
    hint: { fr: "Aire = 8 × 5 = 40.", en: "Area = 8 × 5 = 40.", nl: "Oppervlakte = 8 × 5 = 40." }
  },
  {
    id: "R1_s_25", category: "R1", level: 1,
    text: { fr: "Papa a 38 ans. Maman a 3 ans de moins. Quel âge a maman ?", en: "Dad is 38 years old. Mum is 3 years younger. How old is Mum?", nl: "Papa is 38 jaar. Mama is 3 jaar jonger. Hoe oud is mama?" },
    answer: 35, tolerance: 0,
    hint: { fr: "38 - 3 = 35.", en: "38 - 3 = 35.", nl: "38 - 3 = 35." }
  },
  {
    id: "R1_s_26", category: "R1", level: 1,
    text: { fr: "Une boîte contient 6 rangées de 8 chocolats. Combien de chocolats en tout ?", en: "A box contains 6 rows of 8 chocolates. How many chocolates in total?", nl: "Een doos bevat 6 rijen van 8 chocolaatjes. Hoeveel chocolaatjes in totaal?" },
    answer: 48, tolerance: 0,
    hint: { fr: "6 × 8 = 48.", en: "6 × 8 = 48.", nl: "6 × 8 = 48." }
  },
  {
    id: "R1_s_27", category: "R1", level: 1,
    text: { fr: "Un bus transporte 45 passagers. À l'arrêt, 12 descendent. Combien restent dans le bus ?", en: "A bus carries 45 passengers. At the stop, 12 get off. How many remain on the bus?", nl: "Een bus vervoert 45 passagiers. Bij de halte stappen er 12 uit. Hoeveel blijven er in de bus?" },
    answer: 33, tolerance: 0,
    hint: { fr: "45 - 12 = 33.", en: "45 - 12 = 33.", nl: "45 - 12 = 33." }
  },

  // ===================== Level 2 — Multi-step word problems =====================
  {
    id: "R1_s_6", category: "R1", level: 2,
    text: { fr: "Un train roule à 90 km/h. Quelle distance parcourt-il en 2h30 ?", en: "A train travels at 90 km/h. How far in 2h30min?", nl: "Een trein rijdt 90 km/u. Welke afstand in 2u30min?" },
    answer: 225, tolerance: 0, unit: "km",
    hint: { fr: "2h30 = 2,5 h. Distance = 90 × 2,5.", en: "2h30 = 2.5 h. Distance = 90 × 2.5.", nl: "2u30 = 2,5 u. Afstand = 90 × 2,5." }
  },
  {
    id: "R1_s_7", category: "R1", level: 2,
    text: { fr: "3 pizzas coûtent 27 €. Combien coûtent 7 pizzas ?", en: "3 pizzas cost €27. How much do 7 pizzas cost?", nl: "3 pizza's kosten €27. Hoeveel kosten 7 pizza's?" },
    answer: 63, tolerance: 0, unit: "€",
    hint: { fr: "1 pizza = 9 €. Donc 7 × 9.", en: "1 pizza = €9. So 7 × 9.", nl: "1 pizza = €9. Dus 7 × 9." }
  },
  {
    id: "R1_s_8", category: "R1", level: 2,
    text: { fr: "Un réservoir de 60 litres est rempli aux 3/5. Combien de litres contient-il ?", en: "A 60-liter tank is 3/5 full. How many liters does it hold?", nl: "Een tank van 60 liter is 3/5 vol. Hoeveel liter bevat het?" },
    answer: 36, tolerance: 0, unit: "L",
    hint: { fr: "3/5 de 60 = 36.", en: "3/5 of 60 = 36.", nl: "3/5 van 60 = 36." }
  },
  {
    id: "R1_s_9", category: "R1", level: 2,
    text: { fr: "Léa achète 4 stylos à 2,50 € et 3 gommes à 1 €. Combien paie-t-elle ?", en: "Léa buys 4 pens at €2.50 and 3 erasers at €1. How much does she pay?", nl: "Léa koopt 4 pennen à €2,50 en 3 gummen à €1. Hoeveel betaalt ze?" },
    answer: 13, tolerance: 0.01, unit: "€",
    hint: { fr: "4 × 2,50 + 3 × 1 = 10 + 3.", en: "4 × 2.50 + 3 × 1 = 10 + 3.", nl: "4 × 2,50 + 3 × 1 = 10 + 3." }
  },
  {
    id: "R1_s_10", category: "R1", level: 2,
    text: { fr: "Un jardin carré a un périmètre de 48 m. Quelle est son aire ?", en: "A square garden has perimeter 48 m. What is its area?", nl: "Een vierkante tuin heeft een omtrek van 48 m. Wat is de oppervlakte?" },
    answer: 144, tolerance: 0, unit: "m²",
    hint: { fr: "Côté = 48 ÷ 4 = 12. Aire = 12².", en: "Side = 48 ÷ 4 = 12. Area = 12².", nl: "Zijde = 48 ÷ 4 = 12. Oppervlakte = 12²." }
  },
  {
    id: "R1_s_28", category: "R1", level: 2,
    text: { fr: "Un cycliste roule à 20 km/h pendant 3 heures, puis à 15 km/h pendant 2 heures. Quelle distance totale a-t-il parcourue ?", en: "A cyclist rides at 20 km/h for 3 hours, then at 15 km/h for 2 hours. What total distance?", nl: "Een fietser rijdt 20 km/u gedurende 3 uur, dan 15 km/u gedurende 2 uur. Welke totale afstand?" },
    answer: 90, tolerance: 0, unit: "km",
    hint: { fr: "20 × 3 + 15 × 2 = 60 + 30 = 90.", en: "20 × 3 + 15 × 2 = 60 + 30 = 90.", nl: "20 × 3 + 15 × 2 = 60 + 30 = 90." }
  },
  {
    id: "R1_s_29", category: "R1", level: 2,
    text: { fr: "Une bibliothèque a 5 étagères de 32 livres chacune. On retire 40 livres abîmés. Combien reste-t-il de livres ?", en: "A library has 5 shelves of 32 books each. 40 damaged books are removed. How many books remain?", nl: "Een bibliotheek heeft 5 planken met elk 32 boeken. 40 beschadigde boeken worden weggehaald. Hoeveel boeken blijven er?" },
    answer: 120, tolerance: 0,
    hint: { fr: "5 × 32 = 160. 160 - 40 = 120.", en: "5 × 32 = 160. 160 - 40 = 120.", nl: "5 × 32 = 160. 160 - 40 = 120." }
  },
  {
    id: "R1_s_30", category: "R1", level: 2,
    text: { fr: "4 amis commandent chacun un plat à 12 € et partagent un dessert à 8 €. Combien paie chacun ?", en: "4 friends each order a dish at €12 and share a dessert at €8. How much does each pay?", nl: "4 vrienden bestellen elk een gerecht van €12 en delen een dessert van €8. Hoeveel betaalt elk?" },
    answer: 14, tolerance: 0, unit: "€",
    hint: { fr: "Chacun paie 12 + 8 ÷ 4 = 12 + 2 = 14.", en: "Each pays 12 + 8 ÷ 4 = 12 + 2 = 14.", nl: "Elk betaalt 12 + 8 ÷ 4 = 12 + 2 = 14." }
  },
  {
    id: "R1_s_31", category: "R1", level: 2,
    text: { fr: "Un paquet de 500 feuilles coûte 5 €. Combien coûtent 2000 feuilles ?", en: "A pack of 500 sheets costs €5. How much do 2000 sheets cost?", nl: "Een pak van 500 vellen kost €5. Hoeveel kosten 2000 vellen?" },
    answer: 20, tolerance: 0, unit: "€",
    hint: { fr: "2000 ÷ 500 = 4 paquets. 4 × 5 = 20.", en: "2000 ÷ 500 = 4 packs. 4 × 5 = 20.", nl: "2000 ÷ 500 = 4 pakken. 4 × 5 = 20." }
  },
  {
    id: "R1_s_32", category: "R1", level: 2,
    text: { fr: "Un aquarium contient 80 litres d'eau. On en retire 1/4 puis on ajoute 10 litres. Combien de litres y a-t-il ?", en: "An aquarium holds 80 liters. 1/4 is removed then 10 liters added. How many liters now?", nl: "Een aquarium bevat 80 liter water. 1/4 wordt verwijderd, dan wordt 10 liter toegevoegd. Hoeveel liter nu?" },
    answer: 70, tolerance: 0, unit: "L",
    hint: { fr: "1/4 de 80 = 20. 80 - 20 + 10 = 70.", en: "1/4 of 80 = 20. 80 - 20 + 10 = 70.", nl: "1/4 van 80 = 20. 80 - 20 + 10 = 70." }
  },
  {
    id: "R1_s_33", category: "R1", level: 2,
    text: { fr: "Un terrain rectangulaire mesure 25 m de long et 14 m de large. On veut le clôturer. Combien de mètres de clôture faut-il ?", en: "A rectangular field is 25 m long and 14 m wide. How many meters of fencing are needed?", nl: "Een rechthoekig terrein is 25 m lang en 14 m breed. Hoeveel meter omheining is nodig?" },
    answer: 78, tolerance: 0, unit: "m",
    hint: { fr: "Périmètre = 2 × (25 + 14) = 2 × 39 = 78.", en: "Perimeter = 2 × (25 + 14) = 2 × 39 = 78.", nl: "Omtrek = 2 × (25 + 14) = 2 × 39 = 78." }
  },
  {
    id: "R1_s_34", category: "R1", level: 2,
    text: { fr: "Emma court 3 tours d'un stade de 400 m, puis marche encore 200 m. Combien de mètres a-t-elle parcourus ?", en: "Emma runs 3 laps of a 400 m track, then walks 200 m more. How many meters total?", nl: "Emma loopt 3 rondjes op een baan van 400 m en wandelt dan nog 200 m. Hoeveel meter in totaal?" },
    answer: 1400, tolerance: 0, unit: "m",
    hint: { fr: "3 × 400 + 200 = 1200 + 200 = 1400.", en: "3 × 400 + 200 = 1200 + 200 = 1400.", nl: "3 × 400 + 200 = 1200 + 200 = 1400." }
  },
  {
    id: "R1_s_35", category: "R1", level: 2,
    text: { fr: "Un sac de 2 kg de pommes coûte 4 €. Quel est le prix de 7 kg de pommes ?", en: "A 2 kg bag of apples costs €4. What is the price for 7 kg of apples?", nl: "Een zak van 2 kg appels kost €4. Wat is de prijs voor 7 kg appels?" },
    answer: 14, tolerance: 0, unit: "€",
    hint: { fr: "Prix au kg = 4 ÷ 2 = 2 €. 7 × 2 = 14.", en: "Price per kg = 4 ÷ 2 = €2. 7 × 2 = 14.", nl: "Prijs per kg = 4 ÷ 2 = €2. 7 × 2 = 14." }
  },
  {
    id: "R1_s_36", category: "R1", level: 2,
    text: { fr: "Pour une fête, on achète 5 paquets de 12 ballons. On en gonfle les 2/3. Combien de ballons sont gonflés ?", en: "For a party, 5 packs of 12 balloons are bought. 2/3 are inflated. How many balloons are inflated?", nl: "Voor een feest koopt men 5 pakken van 12 ballonnen. 2/3 wordt opgeblazen. Hoeveel ballonnen zijn opgeblazen?" },
    answer: 40, tolerance: 0,
    hint: { fr: "5 × 12 = 60 ballons. 2/3 de 60 = 40.", en: "5 × 12 = 60 balloons. 2/3 of 60 = 40.", nl: "5 × 12 = 60 ballonnen. 2/3 van 60 = 40." }
  },
  {
    id: "R1_s_37", category: "R1", level: 2,
    text: { fr: "Un gâteau pèse 900 g. On le coupe en 6 parts égales. Combien pèse chaque part en grammes ?", en: "A cake weighs 900 g. It is cut into 6 equal slices. How much does each slice weigh in grams?", nl: "Een taart weegt 900 g. Hij wordt in 6 gelijke stukken gesneden. Hoeveel weegt elk stuk in gram?" },
    answer: 150, tolerance: 0, unit: "g",
    hint: { fr: "900 ÷ 6 = 150.", en: "900 ÷ 6 = 150.", nl: "900 ÷ 6 = 150." }
  },
  {
    id: "R1_s_38", category: "R1", level: 2,
    text: { fr: "Un film commence à 14h15 et dure 1h45. À quelle heure se termine-t-il ? Donne la réponse en minutes après 14h00.", en: "A movie starts at 14:15 and lasts 1h45. What time does it end? Give the answer in minutes after 14:00.", nl: "Een film begint om 14u15 en duurt 1u45. Hoe laat eindigt hij? Geef het antwoord in minuten na 14u00." },
    answer: 120, tolerance: 0,
    hint: { fr: "14h15 + 1h45 = 16h00. 16h00 - 14h00 = 120 minutes après 14h.", en: "14:15 + 1:45 = 16:00. 16:00 - 14:00 = 120 minutes after 14:00.", nl: "14u15 + 1u45 = 16u00. 16u00 - 14u00 = 120 minuten na 14u00." }
  },
  {
    id: "R1_s_39", category: "R1", level: 2,
    text: { fr: "Un éleveur a 120 moutons. Il en vend 1/4 au marché puis 15 naissent. Combien a-t-il de moutons maintenant ?", en: "A farmer has 120 sheep. He sells 1/4 at market then 15 are born. How many sheep now?", nl: "Een boer heeft 120 schapen. Hij verkoopt 1/4 op de markt, dan worden er 15 geboren. Hoeveel schapen nu?" },
    answer: 105, tolerance: 0,
    hint: { fr: "1/4 de 120 = 30 vendus. 120 - 30 + 15 = 105.", en: "1/4 of 120 = 30 sold. 120 - 30 + 15 = 105.", nl: "1/4 van 120 = 30 verkocht. 120 - 30 + 15 = 105." }
  },

  // ===================== Level 3 — Complex reasoning, percentages =====================
  {
    id: "R1_s_11", category: "R1", level: 3,
    text: { fr: "Un article à 80 € a une réduction de 25 %. Quel est le prix réduit ?", en: "An €80 item has a 25% discount. What is the reduced price?", nl: "Een artikel van €80 heeft 25% korting. Wat is de gereduceerde prijs?" },
    answer: 60, tolerance: 0, unit: "€",
    hint: { fr: "25 % de 80 = 20. Prix = 80 - 20.", en: "25% of 80 = 20. Price = 80 - 20.", nl: "25% van 80 = 20. Prijs = 80 - 20." }
  },
  {
    id: "R1_s_12", category: "R1", level: 3,
    text: { fr: "Marc a le double de l'âge de Julie. Ensemble ils ont 36 ans. Quel âge a Marc ?", en: "Marc is twice Julie's age. Together they are 36. How old is Marc?", nl: "Marc is dubbel zo oud als Julie. Samen zijn ze 36. Hoe oud is Marc?" },
    answer: 24, tolerance: 0,
    hint: { fr: "Julie = x, Marc = 2x. 3x = 36, donc x = 12, Marc = 24.", en: "Julie = x, Marc = 2x. 3x = 36, x = 12, Marc = 24.", nl: "Julie = x, Marc = 2x. 3x = 36, x = 12, Marc = 24." }
  },
  {
    id: "R1_s_13", category: "R1", level: 3,
    text: { fr: "Un vélo coûte 350 €. Après 30 % de réduction, quel est le prix ?", en: "A bike costs €350. After 30% off, what is the price?", nl: "Een fiets kost €350. Na 30% korting, wat is de prijs?" },
    answer: 245, tolerance: 0, unit: "€",
    hint: { fr: "30 % de 350 = 105. Prix = 350 - 105.", en: "30% of 350 = 105. Price = 350 - 105.", nl: "30% van 350 = 105. Prijs = 350 - 105." }
  },
  {
    id: "R1_s_14", category: "R1", level: 3,
    text: { fr: "Une piscine se remplit à 120 L/min. Combien de minutes pour 3600 litres ?", en: "A pool fills at 120 L/min. How many minutes for 3600 liters?", nl: "Een zwembad vult met 120 L/min. Hoeveel minuten voor 3600 liter?" },
    answer: 30, tolerance: 0,
    hint: { fr: "3600 ÷ 120 = 30.", en: "3600 ÷ 120 = 30.", nl: "3600 ÷ 120 = 30." }
  },
  {
    id: "R1_s_15", category: "R1", level: 3,
    text: { fr: "15 % des 200 élèves sont absents. Combien d'élèves sont présents ?", en: "15% of 200 students are absent. How many are present?", nl: "15% van de 200 leerlingen zijn afwezig. Hoeveel zijn er aanwezig?" },
    answer: 170, tolerance: 0,
    hint: { fr: "15 % de 200 = 30 absents. 200 - 30 = 170.", en: "15% of 200 = 30 absent. 200 - 30 = 170.", nl: "15% van 200 = 30 afwezig. 200 - 30 = 170." }
  },
  {
    id: "R1_s_40", category: "R1", level: 3,
    text: { fr: "Claire a 3 fois l'âge de son frère Théo. La différence de leurs âges est 14 ans. Quel âge a Claire ?", en: "Claire is 3 times her brother Theo's age. The difference in their ages is 14 years. How old is Claire?", nl: "Claire is 3 keer zo oud als haar broer Theo. Het leeftijdsverschil is 14 jaar. Hoe oud is Claire?" },
    answer: 21, tolerance: 0,
    hint: { fr: "Théo = x, Claire = 3x. 3x - x = 14, 2x = 14, x = 7. Claire = 21.", en: "Theo = x, Claire = 3x. 3x - x = 14, 2x = 14, x = 7. Claire = 21.", nl: "Theo = x, Claire = 3x. 3x - x = 14, 2x = 14, x = 7. Claire = 21." }
  },
  {
    id: "R1_s_41", category: "R1", level: 3,
    text: { fr: "Un magasin vend un pantalon à 60 € avec 20 % de réduction, puis applique encore 10 % sur le prix réduit. Quel est le prix final ?", en: "A shop sells trousers at €60 with 20% off, then applies another 10% on the reduced price. What is the final price?", nl: "Een winkel verkoopt een broek van €60 met 20% korting, en past dan nog 10% toe op de gereduceerde prijs. Wat is de eindprijs?" },
    answer: 43.2, tolerance: 0.01, unit: "€",
    hint: { fr: "60 × 0,80 = 48. Puis 48 × 0,90 = 43,20.", en: "60 × 0.80 = 48. Then 48 × 0.90 = 43.20.", nl: "60 × 0,80 = 48. Dan 48 × 0,90 = 43,20." }
  },
  {
    id: "R1_s_42", category: "R1", level: 3,
    text: { fr: "Un nombre augmenté de 40 % donne 84. Quel est ce nombre ?", en: "A number increased by 40% gives 84. What is the number?", nl: "Een getal verhoogd met 40% geeft 84. Wat is dat getal?" },
    answer: 60, tolerance: 0,
    hint: { fr: "x × 1,40 = 84. x = 84 ÷ 1,40 = 60.", en: "x × 1.40 = 84. x = 84 ÷ 1.40 = 60.", nl: "x × 1,40 = 84. x = 84 ÷ 1,40 = 60." }
  },
  {
    id: "R1_s_43", category: "R1", level: 3,
    text: { fr: "Dans un zoo, il y a 3 fois plus de singes que de lions. En tout il y a 48 singes et lions. Combien y a-t-il de singes ?", en: "In a zoo, there are 3 times more monkeys than lions. In total there are 48 monkeys and lions. How many monkeys?", nl: "In een dierentuin zijn er 3 keer meer apen dan leeuwen. In totaal zijn er 48 apen en leeuwen. Hoeveel apen?" },
    answer: 36, tolerance: 0,
    hint: { fr: "Lions = x, Singes = 3x. 4x = 48, x = 12. Singes = 36.", en: "Lions = x, Monkeys = 3x. 4x = 48, x = 12. Monkeys = 36.", nl: "Leeuwen = x, Apen = 3x. 4x = 48, x = 12. Apen = 36." }
  },
  {
    id: "R1_s_44", category: "R1", level: 3,
    text: { fr: "Un sportif court 12 km en 1h30. Quelle est sa vitesse moyenne en km/h ?", en: "An athlete runs 12 km in 1h30. What is the average speed in km/h?", nl: "Een sporter loopt 12 km in 1u30. Wat is de gemiddelde snelheid in km/u?" },
    answer: 8, tolerance: 0, unit: "km/h",
    hint: { fr: "1h30 = 1,5 h. Vitesse = 12 ÷ 1,5 = 8.", en: "1h30 = 1.5 h. Speed = 12 ÷ 1.5 = 8.", nl: "1u30 = 1,5 u. Snelheid = 12 ÷ 1,5 = 8." }
  },
  {
    id: "R1_s_45", category: "R1", level: 3,
    text: { fr: "Un jardinier plante 240 tulipes. 35 % sont rouges et le reste est jaune. Combien de tulipes jaunes y a-t-il ?", en: "A gardener plants 240 tulips. 35% are red and the rest are yellow. How many yellow tulips?", nl: "Een tuinier plant 240 tulpen. 35% is rood en de rest is geel. Hoeveel gele tulpen?" },
    answer: 156, tolerance: 0,
    hint: { fr: "35 % de 240 = 84 rouges. 240 - 84 = 156 jaunes.", en: "35% of 240 = 84 red. 240 - 84 = 156 yellow.", nl: "35% van 240 = 84 rood. 240 - 84 = 156 geel." }
  },
  {
    id: "R1_s_46", category: "R1", level: 3,
    text: { fr: "Après une augmentation de 15 %, un loyer est de 690 €. Quel était le loyer avant l'augmentation ?", en: "After a 15% increase, rent is €690. What was the rent before the increase?", nl: "Na een verhoging van 15% bedraagt de huur €690. Wat was de huur voor de verhoging?" },
    answer: 600, tolerance: 0, unit: "€",
    hint: { fr: "x × 1,15 = 690. x = 690 ÷ 1,15 = 600.", en: "x × 1.15 = 690. x = 690 ÷ 1.15 = 600.", nl: "x × 1,15 = 690. x = 690 ÷ 1,15 = 600." }
  },
  {
    id: "R1_s_47", category: "R1", level: 3,
    text: { fr: "Un réservoir perd 8 litres par jour. Après combien de jours un réservoir de 200 litres sera-t-il vide ?", en: "A tank loses 8 liters per day. After how many days will a 200-liter tank be empty?", nl: "Een tank verliest 8 liter per dag. Na hoeveel dagen is een tank van 200 liter leeg?" },
    answer: 25, tolerance: 0,
    hint: { fr: "200 ÷ 8 = 25 jours.", en: "200 ÷ 8 = 25 days.", nl: "200 ÷ 8 = 25 dagen." }
  },
  {
    id: "R1_s_48", category: "R1", level: 3,
    text: { fr: "La somme de trois nombres consécutifs est 96. Quel est le plus grand ?", en: "The sum of three consecutive numbers is 96. What is the largest?", nl: "De som van drie opeenvolgende getallen is 96. Wat is het grootste?" },
    answer: 33, tolerance: 0,
    hint: { fr: "n + (n+1) + (n+2) = 96. 3n + 3 = 96, n = 31. Le plus grand = 33.", en: "n + (n+1) + (n+2) = 96. 3n + 3 = 96, n = 31. Largest = 33.", nl: "n + (n+1) + (n+2) = 96. 3n + 3 = 96, n = 31. Grootste = 33." }
  },
  {
    id: "R1_s_49", category: "R1", level: 3,
    text: { fr: "Un commerçant achète un lot de 50 tee-shirts à 6 € pièce et les revend à 9 € pièce. Quel est son bénéfice total ?", en: "A merchant buys 50 T-shirts at €6 each and sells them at €9 each. What is the total profit?", nl: "Een handelaar koopt 50 T-shirts aan €6 per stuk en verkoopt ze aan €9 per stuk. Wat is de totale winst?" },
    answer: 150, tolerance: 0, unit: "€",
    hint: { fr: "Bénéfice par tee-shirt = 9 - 6 = 3. Total = 50 × 3 = 150.", en: "Profit per shirt = 9 - 6 = 3. Total = 50 × 3 = 150.", nl: "Winst per T-shirt = 9 - 6 = 3. Totaal = 50 × 3 = 150." }
  },
  {
    id: "R1_s_50", category: "R1", level: 3,
    text: { fr: "Un père a 4 fois l'âge de sa fille. Dans 10 ans, il aura seulement 2,5 fois son âge. Quel âge a la fille aujourd'hui ?", en: "A father is 4 times his daughter's age. In 10 years, he will be only 2.5 times her age. How old is the daughter today?", nl: "Een vader is 4 keer zo oud als zijn dochter. Over 10 jaar is hij slechts 2,5 keer zo oud. Hoe oud is de dochter vandaag?" },
    answer: 10, tolerance: 0,
    hint: { fr: "Fille = x, Père = 4x. Dans 10 ans : 4x + 10 = 2,5(x + 10). 4x + 10 = 2,5x + 25. 1,5x = 15, x = 10.", en: "Daughter = x, Father = 4x. In 10 years: 4x + 10 = 2.5(x + 10). 1.5x = 15, x = 10.", nl: "Dochter = x, Vader = 4x. Over 10 jaar: 4x + 10 = 2,5(x + 10). 1,5x = 15, x = 10." }
  },
];

export function generate(level = 1) {
  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const id = `R1_gen_${Date.now()}_${rand(100, 999)}`;
  if (level === 1) {
    const total = rand(4, 12) * rand(2, 8);
    const parts = rand(2, 8);
    const answer = total / parts;
    return { id, category: 'R1', level, text: { fr: `${total} objets partagés en ${parts} groupes égaux. Combien par groupe ?`, en: `${total} objects shared into ${parts} equal groups. How many per group?`, nl: `${total} voorwerpen verdeeld in ${parts} gelijke groepen. Hoeveel per groep?` }, answer, tolerance: 0 };
  }
  if (level === 2) {
    const price = rand(5, 15); const qty = rand(3, 10);
    return { id, category: 'R1', level, text: { fr: `Un objet coûte ${price} €. Combien coûtent ${qty} objets ?`, en: `An item costs €${price}. How much do ${qty} items cost?`, nl: `Een voorwerp kost €${price}. Hoeveel kosten ${qty} voorwerpen?` }, answer: price * qty, tolerance: 0 };
  }
  const original = rand(5, 40) * 10;
  const pct = [10, 15, 20, 25, 30, 50][rand(0, 5)];
  const answer = original - original * pct / 100;
  return { id, category: 'R1', level, text: { fr: `Un article à ${original} € a ${pct} % de réduction. Quel est le prix ?`, en: `A €${original} item has ${pct}% off. What is the price?`, nl: `Een artikel van €${original} heeft ${pct}% korting. Wat is de prijs?` }, answer, tolerance: 0.01 };
}
