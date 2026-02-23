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

  // ===================== Level 1 — Simple word problems (51–70) =====================
  {
    id: "R1_s_51", category: "R1", level: 1,
    text: { fr: "Un fleuriste a 56 roses. Il fait des bouquets de 8 roses. Combien de bouquets peut-il faire ?", en: "A florist has 56 roses. He makes bouquets of 8 roses. How many bouquets can he make?", nl: "Een bloemist heeft 56 rozen. Hij maakt boeketten van 8 rozen. Hoeveel boeketten kan hij maken?" },
    answer: 7, tolerance: 0,
    hint: { fr: "56 ÷ 8 = 7.", en: "56 ÷ 8 = 7.", nl: "56 ÷ 8 = 7." }
  },
  {
    id: "R1_s_52", category: "R1", level: 1,
    text: { fr: "Léo mesure 132 cm. Sa sœur mesure 19 cm de moins. Combien mesure sa sœur ?", en: "Léo is 132 cm tall. His sister is 19 cm shorter. How tall is his sister?", nl: "Léo is 132 cm groot. Zijn zus is 19 cm kleiner. Hoe groot is zijn zus?" },
    answer: 113, tolerance: 0, unit: "cm",
    hint: { fr: "132 - 19 = 113.", en: "132 - 19 = 113.", nl: "132 - 19 = 113." }
  },
  {
    id: "R1_s_53", category: "R1", level: 1,
    text: { fr: "Maman achète 3 kg de bananes à 2 € le kilo. Combien paie-t-elle ?", en: "Mum buys 3 kg of bananas at €2 per kilo. How much does she pay?", nl: "Mama koopt 3 kg bananen aan €2 per kilo. Hoeveel betaalt ze?" },
    answer: 6, tolerance: 0, unit: "€",
    hint: { fr: "3 × 2 = 6.", en: "3 × 2 = 6.", nl: "3 × 2 = 6." }
  },
  {
    id: "R1_s_54", category: "R1", level: 1,
    text: { fr: "Un parking a 5 rangées de 12 places. Combien de voitures peut-il contenir ?", en: "A car park has 5 rows of 12 spaces. How many cars can it hold?", nl: "Een parkeerplaats heeft 5 rijen van 12 plaatsen. Hoeveel auto's passen erin?" },
    answer: 60, tolerance: 0,
    hint: { fr: "5 × 12 = 60.", en: "5 × 12 = 60.", nl: "5 × 12 = 60." }
  },
  {
    id: "R1_s_55", category: "R1", level: 1,
    text: { fr: "Grand-père a 72 ans. Petit-fils a 63 ans de moins. Quel âge a le petit-fils ?", en: "Grandfather is 72. His grandson is 63 years younger. How old is the grandson?", nl: "Opa is 72 jaar. Zijn kleinzoon is 63 jaar jonger. Hoe oud is de kleinzoon?" },
    answer: 9, tolerance: 0,
    hint: { fr: "72 - 63 = 9.", en: "72 - 63 = 9.", nl: "72 - 63 = 9." }
  },
  {
    id: "R1_s_56", category: "R1", level: 1,
    text: { fr: "Un triangle équilatéral a un côté de 11 cm. Quel est son périmètre ?", en: "An equilateral triangle has a side of 11 cm. What is its perimeter?", nl: "Een gelijkzijdige driehoek heeft een zijde van 11 cm. Wat is de omtrek?" },
    answer: 33, tolerance: 0, unit: "cm",
    hint: { fr: "3 × 11 = 33.", en: "3 × 11 = 33.", nl: "3 × 11 = 33." }
  },
  {
    id: "R1_s_57", category: "R1", level: 1,
    text: { fr: "Un boulanger prépare 84 croissants. Il en vend 59 le matin. Combien lui en reste-t-il ?", en: "A baker prepares 84 croissants. He sells 59 in the morning. How many are left?", nl: "Een bakker bereidt 84 croissants. Hij verkoopt er 59 's ochtends. Hoeveel blijven er over?" },
    answer: 25, tolerance: 0,
    hint: { fr: "84 - 59 = 25.", en: "84 - 59 = 25.", nl: "84 - 59 = 25." }
  },
  {
    id: "R1_s_58", category: "R1", level: 1,
    text: { fr: "Alice lit 14 pages par jour. Combien de pages lit-elle en une semaine ?", en: "Alice reads 14 pages per day. How many pages does she read in one week?", nl: "Alice leest 14 pagina's per dag. Hoeveel pagina's leest ze in een week?" },
    answer: 98, tolerance: 0,
    hint: { fr: "14 × 7 = 98.", en: "14 × 7 = 98.", nl: "14 × 7 = 98." }
  },
  {
    id: "R1_s_59", category: "R1", level: 1,
    text: { fr: "Un aquarium contient 35 poissons rouges et 17 poissons bleus. Combien de poissons en tout ?", en: "An aquarium has 35 red fish and 17 blue fish. How many fish in total?", nl: "Een aquarium bevat 35 rode vissen en 17 blauwe vissen. Hoeveel vissen in totaal?" },
    answer: 52, tolerance: 0,
    hint: { fr: "35 + 17 = 52.", en: "35 + 17 = 52.", nl: "35 + 17 = 52." }
  },
  {
    id: "R1_s_60", category: "R1", level: 1,
    text: { fr: "Un cinéma a 150 places. 97 sont occupées. Combien de places sont libres ?", en: "A cinema has 150 seats. 97 are taken. How many seats are free?", nl: "Een bioscoop heeft 150 plaatsen. 97 zijn bezet. Hoeveel plaatsen zijn vrij?" },
    answer: 53, tolerance: 0,
    hint: { fr: "150 - 97 = 53.", en: "150 - 97 = 53.", nl: "150 - 97 = 53." }
  },
  {
    id: "R1_s_61", category: "R1", level: 1,
    text: { fr: "Un campeur a une corde de 20 mètres. Il en coupe 4 morceaux de 3 mètres. Quelle longueur de corde lui reste-t-il ?", en: "A camper has a 20-meter rope. He cuts 4 pieces of 3 meters. How much rope is left?", nl: "Een kampeerder heeft een touw van 20 meter. Hij knipt er 4 stukken van 3 meter af. Hoeveel touw blijft er over?" },
    answer: 8, tolerance: 0, unit: "m",
    hint: { fr: "4 × 3 = 12. 20 - 12 = 8.", en: "4 × 3 = 12. 20 - 12 = 8.", nl: "4 × 3 = 12. 20 - 12 = 8." }
  },
  {
    id: "R1_s_62", category: "R1", level: 1,
    text: { fr: "Une piste de course mesure 200 m. Hugo fait 4 tours. Combien de mètres a-t-il parcourus ?", en: "A running track is 200 m. Hugo runs 4 laps. How many meters has he run?", nl: "Een renbaan is 200 m lang. Hugo loopt 4 rondjes. Hoeveel meter heeft hij gelopen?" },
    answer: 800, tolerance: 0, unit: "m",
    hint: { fr: "4 × 200 = 800.", en: "4 × 200 = 800.", nl: "4 × 200 = 800." }
  },
  {
    id: "R1_s_63", category: "R1", level: 1,
    text: { fr: "Un photographe a pris 48 photos lundi et 35 photos mardi. Combien de photos a-t-il prises en tout ?", en: "A photographer took 48 photos on Monday and 35 on Tuesday. How many photos in total?", nl: "Een fotograaf nam 48 foto's op maandag en 35 op dinsdag. Hoeveel foto's in totaal?" },
    answer: 83, tolerance: 0,
    hint: { fr: "48 + 35 = 83.", en: "48 + 35 = 83.", nl: "48 + 35 = 83." }
  },
  {
    id: "R1_s_64", category: "R1", level: 1,
    text: { fr: "Un vétérinaire soigne 9 chiens par jour. Combien en soigne-t-il en 6 jours ?", en: "A vet treats 9 dogs per day. How many does he treat in 6 days?", nl: "Een dierenarts behandelt 9 honden per dag. Hoeveel behandelt hij er in 6 dagen?" },
    answer: 54, tolerance: 0,
    hint: { fr: "9 × 6 = 54.", en: "9 × 6 = 54.", nl: "9 × 6 = 54." }
  },
  {
    id: "R1_s_65", category: "R1", level: 1,
    text: { fr: "Un sac contient 72 billes. On les partage entre 9 enfants. Combien chacun reçoit-il ?", en: "A bag holds 72 marbles. They are shared among 9 children. How many does each get?", nl: "Een zak bevat 72 knikkers. Ze worden verdeeld onder 9 kinderen. Hoeveel krijgt elk kind?" },
    answer: 8, tolerance: 0,
    hint: { fr: "72 ÷ 9 = 8.", en: "72 ÷ 9 = 8.", nl: "72 ÷ 9 = 8." }
  },
  {
    id: "R1_s_66", category: "R1", level: 1,
    text: { fr: "Un pot de peinture couvre 15 m². Combien de pots faut-il pour peindre un mur de 45 m² ?", en: "A pot of paint covers 15 m². How many pots are needed to paint a 45 m² wall?", nl: "Een pot verf bedekt 15 m². Hoeveel potten zijn nodig om een muur van 45 m² te schilderen?" },
    answer: 3, tolerance: 0,
    hint: { fr: "45 ÷ 15 = 3.", en: "45 ÷ 15 = 3.", nl: "45 ÷ 15 = 3." }
  },
  {
    id: "R1_s_67", category: "R1", level: 1,
    text: { fr: "Un musicien répète 45 minutes par jour. Combien de minutes répète-t-il en 5 jours ?", en: "A musician practises 45 minutes per day. How many minutes does he practise in 5 days?", nl: "Een muzikant oefent 45 minuten per dag. Hoeveel minuten oefent hij in 5 dagen?" },
    answer: 225, tolerance: 0,
    hint: { fr: "45 × 5 = 225.", en: "45 × 5 = 225.", nl: "45 × 5 = 225." }
  },
  {
    id: "R1_s_68", category: "R1", level: 1,
    text: { fr: "Une tortue pèse 4 kg. Un lapin pèse 3 fois plus. Combien pèse le lapin ?", en: "A tortoise weighs 4 kg. A rabbit weighs 3 times as much. How much does the rabbit weigh?", nl: "Een schildpad weegt 4 kg. Een konijn weegt 3 keer zoveel. Hoeveel weegt het konijn?" },
    answer: 12, tolerance: 0, unit: "kg",
    hint: { fr: "4 × 3 = 12.", en: "4 × 3 = 12.", nl: "4 × 3 = 12." }
  },
  {
    id: "R1_s_69", category: "R1", level: 1,
    text: { fr: "Un élève a 16 crayons de couleur. Il en perd 5 et en rachète 8. Combien en a-t-il ?", en: "A pupil has 16 coloured pencils. He loses 5 and buys 8 more. How many does he have?", nl: "Een leerling heeft 16 kleurpotloden. Hij verliest er 5 en koopt er 8 bij. Hoeveel heeft hij er?" },
    answer: 19, tolerance: 0,
    hint: { fr: "16 - 5 + 8 = 19.", en: "16 - 5 + 8 = 19.", nl: "16 - 5 + 8 = 19." }
  },
  {
    id: "R1_s_70", category: "R1", level: 1,
    text: { fr: "Une étagère porte 7 livres de 3 cm d'épaisseur chacun. Quelle épaisseur totale occupent-ils ?", en: "A shelf holds 7 books, each 3 cm thick. What total thickness do they occupy?", nl: "Een plank draagt 7 boeken van elk 3 cm dik. Welke totale dikte nemen ze in?" },
    answer: 21, tolerance: 0, unit: "cm",
    hint: { fr: "7 × 3 = 21.", en: "7 × 3 = 21.", nl: "7 × 3 = 21." }
  },

  // ===================== Level 2 — Multi-step word problems (71–90) =====================
  {
    id: "R1_s_71", category: "R1", level: 2,
    text: { fr: "Un plombier facture 40 € le déplacement et 25 € par heure de travail. Il travaille 3 heures. Combien facture-t-il ?", en: "A plumber charges €40 for the call-out and €25 per hour of work. He works 3 hours. How much does he charge?", nl: "Een loodgieter rekent €40 voorrijkosten en €25 per uur werk. Hij werkt 3 uur. Hoeveel rekent hij aan?" },
    answer: 115, tolerance: 0, unit: "€",
    hint: { fr: "40 + 3 × 25 = 40 + 75 = 115.", en: "40 + 3 × 25 = 40 + 75 = 115.", nl: "40 + 3 × 25 = 40 + 75 = 115." }
  },
  {
    id: "R1_s_72", category: "R1", level: 2,
    text: { fr: "Un randonneur marche 4 km/h pendant 2 heures le matin, puis 3 km/h pendant 3 heures l'après-midi. Quelle distance totale ?", en: "A hiker walks at 4 km/h for 2 hours in the morning, then 3 km/h for 3 hours in the afternoon. What total distance?", nl: "Een wandelaar loopt 4 km/u gedurende 2 uur 's ochtends, dan 3 km/u gedurende 3 uur 's middags. Welke totale afstand?" },
    answer: 17, tolerance: 0, unit: "km",
    hint: { fr: "4 × 2 + 3 × 3 = 8 + 9 = 17.", en: "4 × 2 + 3 × 3 = 8 + 9 = 17.", nl: "4 × 2 + 3 × 3 = 8 + 9 = 17." }
  },
  {
    id: "R1_s_73", category: "R1", level: 2,
    text: { fr: "Un maçon pose 45 briques par heure. Combien de briques pose-t-il en une journée de 8 heures s'il prend 1 heure de pause ?", en: "A bricklayer lays 45 bricks per hour. How many bricks in an 8-hour day with a 1-hour break?", nl: "Een metselaar legt 45 stenen per uur. Hoeveel stenen legt hij op een werkdag van 8 uur met 1 uur pauze?" },
    answer: 315, tolerance: 0,
    hint: { fr: "8 - 1 = 7 heures effectives. 7 × 45 = 315.", en: "8 - 1 = 7 effective hours. 7 × 45 = 315.", nl: "8 - 1 = 7 effectieve uren. 7 × 45 = 315." }
  },
  {
    id: "R1_s_74", category: "R1", level: 2,
    text: { fr: "Un footballeur marque 3 buts au premier mi-temps et le double au second. Combien de buts a-t-il marqués en tout ?", en: "A footballer scores 3 goals in the first half and double in the second. How many goals in total?", nl: "Een voetballer scoort 3 doelpunten in de eerste helft en het dubbele in de tweede. Hoeveel doelpunten in totaal?" },
    answer: 9, tolerance: 0,
    hint: { fr: "3 + 2 × 3 = 3 + 6 = 9.", en: "3 + 2 × 3 = 3 + 6 = 9.", nl: "3 + 2 × 3 = 3 + 6 = 9." }
  },
  {
    id: "R1_s_75", category: "R1", level: 2,
    text: { fr: "Une citerne de 500 litres est remplie aux 2/5. On ajoute encore 50 litres. Combien de litres contient-elle maintenant ?", en: "A 500-liter tank is 2/5 full. 50 more liters are added. How many liters does it contain now?", nl: "Een tank van 500 liter is 2/5 vol. Er wordt nog 50 liter toegevoegd. Hoeveel liter bevat hij nu?" },
    answer: 250, tolerance: 0, unit: "L",
    hint: { fr: "2/5 de 500 = 200. 200 + 50 = 250.", en: "2/5 of 500 = 200. 200 + 50 = 250.", nl: "2/5 van 500 = 200. 200 + 50 = 250." }
  },
  {
    id: "R1_s_76", category: "R1", level: 2,
    text: { fr: "Un cuisinier a 2,5 kg de pommes de terre. Il en utilise 800 g pour une soupe et 600 g pour une purée. Combien de grammes lui reste-t-il ?", en: "A cook has 2.5 kg of potatoes. He uses 800 g for soup and 600 g for mash. How many grams are left?", nl: "Een kok heeft 2,5 kg aardappelen. Hij gebruikt 800 g voor soep en 600 g voor puree. Hoeveel gram blijft er over?" },
    answer: 1100, tolerance: 0, unit: "g",
    hint: { fr: "2,5 kg = 2500 g. 2500 - 800 - 600 = 1100.", en: "2.5 kg = 2500 g. 2500 - 800 - 600 = 1100.", nl: "2,5 kg = 2500 g. 2500 - 800 - 600 = 1100." }
  },
  {
    id: "R1_s_77", category: "R1", level: 2,
    text: { fr: "5 bouteilles d'eau coûtent 4 €. Combien coûtent 20 bouteilles ?", en: "5 bottles of water cost €4. How much do 20 bottles cost?", nl: "5 flessen water kosten €4. Hoeveel kosten 20 flessen?" },
    answer: 16, tolerance: 0, unit: "€",
    hint: { fr: "20 ÷ 5 = 4 lots. 4 × 4 = 16.", en: "20 ÷ 5 = 4 lots. 4 × 4 = 16.", nl: "20 ÷ 5 = 4 sets. 4 × 4 = 16." }
  },
  {
    id: "R1_s_78", category: "R1", level: 2,
    text: { fr: "Une piscine rectangulaire mesure 25 m de long et 10 m de large. Quelle est son aire ?", en: "A rectangular pool is 25 m long and 10 m wide. What is its area?", nl: "Een rechthoekig zwembad is 25 m lang en 10 m breed. Wat is de oppervlakte?" },
    answer: 250, tolerance: 0, unit: "m²",
    hint: { fr: "25 × 10 = 250.", en: "25 × 10 = 250.", nl: "25 × 10 = 250." }
  },
  {
    id: "R1_s_79", category: "R1", level: 2,
    text: { fr: "Un magasin vend 6 croissants pour 5,40 €. Quel est le prix d'un croissant ?", en: "A shop sells 6 croissants for €5.40. What is the price of one croissant?", nl: "Een winkel verkoopt 6 croissants voor €5,40. Wat is de prijs van één croissant?" },
    answer: 0.9, tolerance: 0.01, unit: "€",
    hint: { fr: "5,40 ÷ 6 = 0,90.", en: "5.40 ÷ 6 = 0.90.", nl: "5,40 ÷ 6 = 0,90." }
  },
  {
    id: "R1_s_80", category: "R1", level: 2,
    text: { fr: "Un jardinier plante 8 rangées de 15 tulipes. Il arrache ensuite 24 tulipes fanées. Combien en reste-t-il ?", en: "A gardener plants 8 rows of 15 tulips. He then removes 24 wilted ones. How many remain?", nl: "Een tuinier plant 8 rijen van 15 tulpen. Hij trekt daarna 24 verwelkte tulpen uit. Hoeveel blijven er over?" },
    answer: 96, tolerance: 0,
    hint: { fr: "8 × 15 = 120. 120 - 24 = 96.", en: "8 × 15 = 120. 120 - 24 = 96.", nl: "8 × 15 = 120. 120 - 24 = 96." }
  },
  {
    id: "R1_s_81", category: "R1", level: 2,
    text: { fr: "Un automobiliste parcourt 180 km en 2 heures. Il lui reste 90 km. Combien de temps au total pour le trajet complet à la même vitesse ?", en: "A driver covers 180 km in 2 hours. He has 90 km left. How long is the total trip at the same speed?", nl: "Een automobilist legt 180 km af in 2 uur. Hij heeft nog 90 km te gaan. Hoe lang duurt de totale rit aan dezelfde snelheid?" },
    answer: 3, tolerance: 0, unit: "h",
    hint: { fr: "Vitesse = 180 ÷ 2 = 90 km/h. Temps restant = 90 ÷ 90 = 1 h. Total = 2 + 1 = 3 h.", en: "Speed = 180 ÷ 2 = 90 km/h. Remaining time = 90 ÷ 90 = 1 h. Total = 2 + 1 = 3 h.", nl: "Snelheid = 180 ÷ 2 = 90 km/u. Resterende tijd = 90 ÷ 90 = 1 u. Totaal = 2 + 1 = 3 u." }
  },
  {
    id: "R1_s_82", category: "R1", level: 2,
    text: { fr: "Une école commande 12 cartons de 24 cahiers. Chaque cahier coûte 2 €. Quel est le coût total ?", en: "A school orders 12 boxes of 24 notebooks. Each notebook costs €2. What is the total cost?", nl: "Een school bestelt 12 dozen van 24 schriften. Elk schrift kost €2. Wat is de totale kostprijs?" },
    answer: 576, tolerance: 0, unit: "€",
    hint: { fr: "12 × 24 = 288 cahiers. 288 × 2 = 576.", en: "12 × 24 = 288 notebooks. 288 × 2 = 576.", nl: "12 × 24 = 288 schriften. 288 × 2 = 576." }
  },
  {
    id: "R1_s_83", category: "R1", level: 2,
    text: { fr: "Un fermier récolte 360 œufs. Il les range dans des boîtes de 6. Il vend chaque boîte 3 €. Combien gagne-t-il ?", en: "A farmer collects 360 eggs. He packs them in boxes of 6. Each box sells for €3. How much does he earn?", nl: "Een boer raapt 360 eieren. Hij verpakt ze in dozen van 6. Elke doos verkoopt hij voor €3. Hoeveel verdient hij?" },
    answer: 180, tolerance: 0, unit: "€",
    hint: { fr: "360 ÷ 6 = 60 boîtes. 60 × 3 = 180.", en: "360 ÷ 6 = 60 boxes. 60 × 3 = 180.", nl: "360 ÷ 6 = 60 dozen. 60 × 3 = 180." }
  },
  {
    id: "R1_s_84", category: "R1", level: 2,
    text: { fr: "Un voyage en car coûte 8 € par adulte et 5 € par enfant. Combien coûte le voyage pour 3 adultes et 4 enfants ?", en: "A coach trip costs €8 per adult and €5 per child. How much for 3 adults and 4 children?", nl: "Een busreis kost €8 per volwassene en €5 per kind. Hoeveel kost de reis voor 3 volwassenen en 4 kinderen?" },
    answer: 44, tolerance: 0, unit: "€",
    hint: { fr: "3 × 8 + 4 × 5 = 24 + 20 = 44.", en: "3 × 8 + 4 × 5 = 24 + 20 = 44.", nl: "3 × 8 + 4 × 5 = 24 + 20 = 44." }
  },
  {
    id: "R1_s_85", category: "R1", level: 2,
    text: { fr: "Un menuisier a une planche de 240 cm. Il coupe 5 morceaux de 35 cm. Quelle longueur de planche reste-t-il ?", en: "A carpenter has a 240 cm board. He cuts 5 pieces of 35 cm. How much board is left?", nl: "Een timmerman heeft een plank van 240 cm. Hij zaagt er 5 stukken van 35 cm af. Hoeveel plank blijft er over?" },
    answer: 65, tolerance: 0, unit: "cm",
    hint: { fr: "5 × 35 = 175. 240 - 175 = 65.", en: "5 × 35 = 175. 240 - 175 = 65.", nl: "5 × 35 = 175. 240 - 175 = 65." }
  },
  {
    id: "R1_s_86", category: "R1", level: 2,
    text: { fr: "Une classe de 30 élèves a collecté 450 € pour un voyage. Ils ont besoin de 600 €. Combien chaque élève doit-il encore donner ?", en: "A class of 30 pupils has collected €450 for a trip. They need €600. How much more must each pupil give?", nl: "Een klas van 30 leerlingen heeft €450 ingezameld voor een reis. Ze hebben €600 nodig. Hoeveel moet elke leerling nog geven?" },
    answer: 5, tolerance: 0, unit: "€",
    hint: { fr: "600 - 450 = 150 manquants. 150 ÷ 30 = 5.", en: "600 - 450 = 150 short. 150 ÷ 30 = 5.", nl: "600 - 450 = 150 tekort. 150 ÷ 30 = 5." }
  },
  {
    id: "R1_s_87", category: "R1", level: 2,
    text: { fr: "Un coureur fait 3 tours de piste de 400 m. Son temps total est de 6 minutes. Quelle est sa vitesse en mètres par minute ?", en: "A runner does 3 laps of a 400 m track. His total time is 6 minutes. What is his speed in meters per minute?", nl: "Een loper loopt 3 rondjes op een baan van 400 m. Zijn totale tijd is 6 minuten. Wat is zijn snelheid in meter per minuut?" },
    answer: 200, tolerance: 0, unit: "m/min",
    hint: { fr: "3 × 400 = 1200 m. 1200 ÷ 6 = 200.", en: "3 × 400 = 1200 m. 1200 ÷ 6 = 200.", nl: "3 × 400 = 1200 m. 1200 ÷ 6 = 200." }
  },
  {
    id: "R1_s_88", category: "R1", level: 2,
    text: { fr: "Un chocolatier fait 4 tablettes avec 200 g de chocolat. Combien de grammes faut-il pour 10 tablettes ?", en: "A chocolatier makes 4 bars with 200 g of chocolate. How many grams are needed for 10 bars?", nl: "Een chocolatier maakt 4 repen met 200 g chocolade. Hoeveel gram is nodig voor 10 repen?" },
    answer: 500, tolerance: 0, unit: "g",
    hint: { fr: "1 tablette = 200 ÷ 4 = 50 g. 10 × 50 = 500.", en: "1 bar = 200 ÷ 4 = 50 g. 10 × 50 = 500.", nl: "1 reep = 200 ÷ 4 = 50 g. 10 × 50 = 500." }
  },
  {
    id: "R1_s_89", category: "R1", level: 2,
    text: { fr: "Pour une fête d'anniversaire, on achète 3 gâteaux à 12 € et 5 bouteilles de jus à 2 €. On paie avec un billet de 50 €. Combien rend-on ?", en: "For a birthday party, 3 cakes at €12 and 5 juice bottles at €2 are bought. Paid with a €50 note. How much change?", nl: "Voor een verjaardagsfeest koopt men 3 taarten van €12 en 5 flessen sap van €2. Men betaalt met een briefje van €50. Hoeveel wisselgeld?" },
    answer: 4, tolerance: 0, unit: "€",
    hint: { fr: "3 × 12 + 5 × 2 = 36 + 10 = 46. 50 - 46 = 4.", en: "3 × 12 + 5 × 2 = 36 + 10 = 46. 50 - 46 = 4.", nl: "3 × 12 + 5 × 2 = 36 + 10 = 46. 50 - 46 = 4." }
  },
  {
    id: "R1_s_90", category: "R1", level: 2,
    text: { fr: "Un terrain carré a une aire de 196 m². Quelle est la longueur de son côté ?", en: "A square field has an area of 196 m². What is the length of its side?", nl: "Een vierkant terrein heeft een oppervlakte van 196 m². Wat is de lengte van de zijde?" },
    answer: 14, tolerance: 0, unit: "m",
    hint: { fr: "√196 = 14.", en: "√196 = 14.", nl: "√196 = 14." }
  },

  // ===================== Level 3 — Complex reasoning, percentages (91–111) =====================
  {
    id: "R1_s_91", category: "R1", level: 3,
    text: { fr: "Un pull coûte 45 € après une réduction de 10 %. Quel était le prix initial ?", en: "A sweater costs €45 after a 10% discount. What was the original price?", nl: "Een trui kost €45 na een korting van 10%. Wat was de oorspronkelijke prijs?" },
    answer: 50, tolerance: 0, unit: "€",
    hint: { fr: "x × 0,90 = 45. x = 45 ÷ 0,90 = 50.", en: "x × 0.90 = 45. x = 45 ÷ 0.90 = 50.", nl: "x × 0,90 = 45. x = 45 ÷ 0,90 = 50." }
  },
  {
    id: "R1_s_92", category: "R1", level: 3,
    text: { fr: "Un frère et une sœur ont ensemble 50 €. Le frère a 14 € de plus que la sœur. Combien a le frère ?", en: "A brother and sister have €50 together. The brother has €14 more than the sister. How much does the brother have?", nl: "Een broer en zus hebben samen €50. De broer heeft €14 meer dan de zus. Hoeveel heeft de broer?" },
    answer: 32, tolerance: 0, unit: "€",
    hint: { fr: "Sœur = x, Frère = x + 14. 2x + 14 = 50. x = 18. Frère = 32.", en: "Sister = x, Brother = x + 14. 2x + 14 = 50. x = 18. Brother = 32.", nl: "Zus = x, Broer = x + 14. 2x + 14 = 50. x = 18. Broer = 32." }
  },
  {
    id: "R1_s_93", category: "R1", level: 3,
    text: { fr: "40 % des 350 spectateurs d'un concert sont des enfants. Combien d'adultes y a-t-il ?", en: "40% of the 350 spectators at a concert are children. How many adults are there?", nl: "40% van de 350 toeschouwers bij een concert zijn kinderen. Hoeveel volwassenen zijn er?" },
    answer: 210, tolerance: 0,
    hint: { fr: "40 % de 350 = 140 enfants. 350 - 140 = 210 adultes.", en: "40% of 350 = 140 children. 350 - 140 = 210 adults.", nl: "40% van 350 = 140 kinderen. 350 - 140 = 210 volwassenen." }
  },
  {
    id: "R1_s_94", category: "R1", level: 3,
    text: { fr: "Deux robinets remplissent une cuve. Le premier débite 15 L/min et le second 10 L/min. Combien de minutes pour remplir 500 litres ?", en: "Two taps fill a tank. The first flows at 15 L/min, the second at 10 L/min. How many minutes to fill 500 liters?", nl: "Twee kranen vullen een vat. De eerste levert 15 L/min en de tweede 10 L/min. Hoeveel minuten om 500 liter te vullen?" },
    answer: 20, tolerance: 0,
    hint: { fr: "Débit total = 15 + 10 = 25 L/min. 500 ÷ 25 = 20.", en: "Total flow = 15 + 10 = 25 L/min. 500 ÷ 25 = 20.", nl: "Totaal debiet = 15 + 10 = 25 L/min. 500 ÷ 25 = 20." }
  },
  {
    id: "R1_s_95", category: "R1", level: 3,
    text: { fr: "Un commerçant achète 80 kg de fruits à 2 € le kg. Il en perd 5 kg (abîmés) et revend le reste à 3 € le kg. Quel est son bénéfice ?", en: "A merchant buys 80 kg of fruit at €2/kg. He loses 5 kg (spoiled) and sells the rest at €3/kg. What is his profit?", nl: "Een handelaar koopt 80 kg fruit aan €2/kg. Hij verliest 5 kg (bedorven) en verkoopt de rest aan €3/kg. Wat is zijn winst?" },
    answer: 65, tolerance: 0, unit: "€",
    hint: { fr: "Coût = 80 × 2 = 160. Vente = 75 × 3 = 225. Bénéfice = 225 - 160 = 65.", en: "Cost = 80 × 2 = 160. Sale = 75 × 3 = 225. Profit = 225 - 160 = 65.", nl: "Kost = 80 × 2 = 160. Verkoop = 75 × 3 = 225. Winst = 225 - 160 = 65." }
  },
  {
    id: "R1_s_96", category: "R1", level: 3,
    text: { fr: "La somme de deux nombres est 100. Le plus grand est 4 fois le plus petit. Quel est le plus grand nombre ?", en: "The sum of two numbers is 100. The larger is 4 times the smaller. What is the larger number?", nl: "De som van twee getallen is 100. Het grootste is 4 keer het kleinste. Wat is het grootste getal?" },
    answer: 80, tolerance: 0,
    hint: { fr: "x + 4x = 100. 5x = 100, x = 20. Le plus grand = 80.", en: "x + 4x = 100. 5x = 100, x = 20. Larger = 80.", nl: "x + 4x = 100. 5x = 100, x = 20. Grootste = 80." }
  },
  {
    id: "R1_s_97", category: "R1", level: 3,
    text: { fr: "Un train parcourt 240 km en 3 heures. Un second train parcourt la même distance en 4 heures. Quelle est la différence de vitesse entre les deux trains ?", en: "A train covers 240 km in 3 hours. A second train covers the same distance in 4 hours. What is the speed difference?", nl: "Een trein legt 240 km af in 3 uur. Een tweede trein legt dezelfde afstand af in 4 uur. Wat is het snelheidsverschil?" },
    answer: 20, tolerance: 0, unit: "km/h",
    hint: { fr: "V1 = 240 ÷ 3 = 80. V2 = 240 ÷ 4 = 60. Différence = 20.", en: "V1 = 240 ÷ 3 = 80. V2 = 240 ÷ 4 = 60. Difference = 20.", nl: "V1 = 240 ÷ 3 = 80. V2 = 240 ÷ 4 = 60. Verschil = 20." }
  },
  {
    id: "R1_s_98", category: "R1", level: 3,
    text: { fr: "Mère et fille ont ensemble 56 ans. La mère a 4 fois l'âge de la fille. Quel âge a la mère ?", en: "Mother and daughter are 56 years old together. The mother is 4 times the daughter's age. How old is the mother?", nl: "Moeder en dochter zijn samen 56 jaar. De moeder is 4 keer zo oud als de dochter. Hoe oud is de moeder?" },
    answer: 44.8, tolerance: 0.01,
    hint: { fr: "Fille = x, Mère = 4x. 5x = 56, x = 11,2. Mère = 44,8.", en: "Daughter = x, Mother = 4x. 5x = 56, x = 11.2. Mother = 44.8.", nl: "Dochter = x, Moeder = 4x. 5x = 56, x = 11,2. Moeder = 44,8." }
  },
  {
    id: "R1_s_99", category: "R1", level: 3,
    text: { fr: "Un électricien facture 50 € de déplacement et 35 € de l'heure. Sa facture est de 190 €. Combien d'heures a-t-il travaillé ?", en: "An electrician charges €50 for travel and €35 per hour. His bill is €190. How many hours did he work?", nl: "Een elektricien rekent €50 voorrijkosten en €35 per uur. Zijn factuur bedraagt €190. Hoeveel uur heeft hij gewerkt?" },
    answer: 4, tolerance: 0,
    hint: { fr: "190 - 50 = 140. 140 ÷ 35 = 4.", en: "190 - 50 = 140. 140 ÷ 35 = 4.", nl: "190 - 50 = 140. 140 ÷ 35 = 4." }
  },
  {
    id: "R1_s_100", category: "R1", level: 3,
    text: { fr: "Un article augmente de 20 %, puis le nouveau prix diminue de 20 %. Si le prix final est 192 €, quel était le prix de départ ?", en: "An item increases by 20%, then the new price decreases by 20%. If the final price is €192, what was the starting price?", nl: "Een artikel stijgt met 20%, dan daalt de nieuwe prijs met 20%. Als de eindprijs €192 is, wat was de beginprijs?" },
    answer: 200, tolerance: 0, unit: "€",
    hint: { fr: "x × 1,20 × 0,80 = 192. x × 0,96 = 192. x = 200.", en: "x × 1.20 × 0.80 = 192. x × 0.96 = 192. x = 200.", nl: "x × 1,20 × 0,80 = 192. x × 0,96 = 192. x = 200." }
  },
  {
    id: "R1_s_101", category: "R1", level: 3,
    text: { fr: "Dans une ferme, il y a des poules et des lapins. On compte 20 têtes et 56 pattes. Combien y a-t-il de lapins ?", en: "On a farm there are chickens and rabbits. There are 20 heads and 56 legs. How many rabbits are there?", nl: "Op een boerderij zijn er kippen en konijnen. Men telt 20 koppen en 56 poten. Hoeveel konijnen zijn er?" },
    answer: 8, tolerance: 0,
    hint: { fr: "Poules = p, Lapins = l. p + l = 20 et 2p + 4l = 56. Donc 2(20 - l) + 4l = 56. 40 + 2l = 56, l = 8.", en: "Chickens = c, Rabbits = r. c + r = 20, 2c + 4r = 56. 2(20-r) + 4r = 56. 40 + 2r = 56, r = 8.", nl: "Kippen = k, Konijnen = r. k + r = 20, 2k + 4r = 56. 2(20-r) + 4r = 56. 40 + 2r = 56, r = 8." }
  },
  {
    id: "R1_s_102", category: "R1", level: 3,
    text: { fr: "Un nageur parcourt 50 m en 40 secondes. Combien de temps (en secondes) lui faut-il pour nager 200 m à la même vitesse ?", en: "A swimmer covers 50 m in 40 seconds. How many seconds to swim 200 m at the same speed?", nl: "Een zwemmer legt 50 m af in 40 seconden. Hoeveel seconden heeft hij nodig om 200 m te zwemmen aan dezelfde snelheid?" },
    answer: 160, tolerance: 0,
    hint: { fr: "200 ÷ 50 = 4 fois la distance. 4 × 40 = 160 s.", en: "200 ÷ 50 = 4 times the distance. 4 × 40 = 160 s.", nl: "200 ÷ 50 = 4 keer de afstand. 4 × 40 = 160 s." }
  },
  {
    id: "R1_s_103", category: "R1", level: 3,
    text: { fr: "Une classe de 25 élèves passe un test. 60 % réussissent. Parmi ceux qui échouent, la moitié repasse et réussit. Combien ont finalement réussi ?", en: "A class of 25 takes a test. 60% pass. Of those who fail, half retake and pass. How many passed in total?", nl: "Een klas van 25 leerlingen legt een test af. 60% slaagt. Van degenen die zakken, doet de helft het opnieuw en slaagt. Hoeveel zijn er uiteindelijk geslaagd?" },
    answer: 20, tolerance: 0,
    hint: { fr: "60 % de 25 = 15 réussissent. 10 échouent. 10 ÷ 2 = 5 réussissent ensuite. Total = 15 + 5 = 20.", en: "60% of 25 = 15 pass. 10 fail. 10 ÷ 2 = 5 pass later. Total = 15 + 5 = 20.", nl: "60% van 25 = 15 slagen. 10 zakken. 10 ÷ 2 = 5 slagen daarna. Totaal = 15 + 5 = 20." }
  },
  {
    id: "R1_s_104", category: "R1", level: 3,
    text: { fr: "Un terrain rectangulaire a un périmètre de 100 m. La longueur est le triple de la largeur. Quelle est l'aire du terrain ?", en: "A rectangular field has a perimeter of 100 m. The length is triple the width. What is the area?", nl: "Een rechthoekig terrein heeft een omtrek van 100 m. De lengte is het drievoud van de breedte. Wat is de oppervlakte?" },
    answer: 468.75, tolerance: 0.01, unit: "m²",
    hint: { fr: "l + 3l = 50. 4l = 50, l = 12,5. L = 37,5. Aire = 12,5 × 37,5 = 468,75.", en: "w + 3w = 50. 4w = 50, w = 12.5. L = 37.5. Area = 12.5 × 37.5 = 468.75.", nl: "b + 3b = 50. 4b = 50, b = 12,5. L = 37,5. Opp. = 12,5 × 37,5 = 468,75." }
  },
  {
    id: "R1_s_105", category: "R1", level: 3,
    text: { fr: "Un avion vole à 600 km/h. Combien de minutes met-il pour parcourir 250 km ?", en: "A plane flies at 600 km/h. How many minutes does it take to cover 250 km?", nl: "Een vliegtuig vliegt aan 600 km/u. Hoeveel minuten heeft het nodig om 250 km af te leggen?" },
    answer: 25, tolerance: 0,
    hint: { fr: "Temps = 250 ÷ 600 = 5/12 h = 25 min.", en: "Time = 250 ÷ 600 = 5/12 h = 25 min.", nl: "Tijd = 250 ÷ 600 = 5/12 u = 25 min." }
  },
  {
    id: "R1_s_106", category: "R1", level: 3,
    text: { fr: "Un nombre diminué de 30 % donne 49. Quel est ce nombre ?", en: "A number decreased by 30% gives 49. What is the number?", nl: "Een getal verminderd met 30% geeft 49. Wat is dat getal?" },
    answer: 70, tolerance: 0,
    hint: { fr: "x × 0,70 = 49. x = 49 ÷ 0,70 = 70.", en: "x × 0.70 = 49. x = 49 ÷ 0.70 = 70.", nl: "x × 0,70 = 49. x = 49 ÷ 0,70 = 70." }
  },
  {
    id: "R1_s_107", category: "R1", level: 3,
    text: { fr: "Un boulanger utilise 2/5 de sa farine le matin et 1/3 du reste l'après-midi. S'il lui reste 8 kg, combien avait-il au départ ?", en: "A baker uses 2/5 of his flour in the morning and 1/3 of the rest in the afternoon. If 8 kg remain, how much did he start with?", nl: "Een bakker gebruikt 's ochtends 2/5 van zijn bloem en 's middags 1/3 van de rest. Als er 8 kg overblijft, hoeveel had hij in het begin?" },
    answer: 20, tolerance: 0, unit: "kg",
    hint: { fr: "Après le matin : 3/5 reste. Après l'après-midi : 2/3 de 3/5 = 2/5 reste. 2/5 × x = 8. x = 20.", en: "After morning: 3/5 left. After afternoon: 2/3 of 3/5 = 2/5 left. 2/5 × x = 8. x = 20.", nl: "Na ochtend: 3/5 over. Na middag: 2/3 van 3/5 = 2/5 over. 2/5 × x = 8. x = 20." }
  },
  {
    id: "R1_s_108", category: "R1", level: 3,
    text: { fr: "Un stade a 12 000 places. Lors d'un match, 75 % des places sont occupées. 1/3 des spectateurs sont des enfants. Combien d'adultes y a-t-il ?", en: "A stadium has 12,000 seats. At a match, 75% are filled. 1/3 of spectators are children. How many adults are there?", nl: "Een stadion heeft 12.000 plaatsen. Tijdens een wedstrijd is 75% bezet. 1/3 van de toeschouwers zijn kinderen. Hoeveel volwassenen zijn er?" },
    answer: 6000, tolerance: 0,
    hint: { fr: "75 % de 12000 = 9000 spectateurs. 1/3 enfants = 3000. Adultes = 9000 - 3000 = 6000.", en: "75% of 12000 = 9000 spectators. 1/3 children = 3000. Adults = 9000 - 3000 = 6000.", nl: "75% van 12000 = 9000 toeschouwers. 1/3 kinderen = 3000. Volwassenen = 9000 - 3000 = 6000." }
  },
  {
    id: "R1_s_109", category: "R1", level: 3,
    text: { fr: "Un cycliste parcourt un trajet aller à 24 km/h et le retour à 16 km/h. La distance aller est de 48 km. Quel est son temps total en heures ?", en: "A cyclist rides out at 24 km/h and returns at 16 km/h. The one-way distance is 48 km. What is the total time in hours?", nl: "Een fietser rijdt heen aan 24 km/u en terug aan 16 km/u. De enkele afstand is 48 km. Wat is de totale tijd in uren?" },
    answer: 5, tolerance: 0, unit: "h",
    hint: { fr: "Aller : 48 ÷ 24 = 2 h. Retour : 48 ÷ 16 = 3 h. Total = 5 h.", en: "Out: 48 ÷ 24 = 2 h. Return: 48 ÷ 16 = 3 h. Total = 5 h.", nl: "Heen: 48 ÷ 24 = 2 u. Terug: 48 ÷ 16 = 3 u. Totaal = 5 u." }
  },
  {
    id: "R1_s_110", category: "R1", level: 3,
    text: { fr: "Un pâtissier a 150 macarons. Il en vend 40 % le matin. L'après-midi, il en vend 1/3 de ce qui reste. Combien en a-t-il en fin de journée ?", en: "A pastry chef has 150 macarons. He sells 40% in the morning. In the afternoon, he sells 1/3 of what is left. How many remain at the end of the day?", nl: "Een banketbakker heeft 150 macarons. Hij verkoopt 40% 's ochtends. 's Middags verkoopt hij 1/3 van wat overblijft. Hoeveel houdt hij over aan het eind van de dag?" },
    answer: 60, tolerance: 0,
    hint: { fr: "40 % de 150 = 60 vendus. Reste = 90. 1/3 de 90 = 30 vendus. Reste = 90 - 30 = 60.", en: "40% of 150 = 60 sold. Left = 90. 1/3 of 90 = 30 sold. Left = 90 - 30 = 60.", nl: "40% van 150 = 60 verkocht. Over = 90. 1/3 van 90 = 30 verkocht. Over = 90 - 30 = 60." }
  },
  {
    id: "R1_s_111", category: "R1", level: 3,
    text: { fr: "La somme de quatre nombres consécutifs pairs est 108. Quel est le plus grand ?", en: "The sum of four consecutive even numbers is 108. What is the largest?", nl: "De som van vier opeenvolgende even getallen is 108. Wat is het grootste?" },
    answer: 30, tolerance: 0,
    hint: { fr: "n + (n+2) + (n+4) + (n+6) = 108. 4n + 12 = 108. n = 24. Le plus grand = 30.", en: "n + (n+2) + (n+4) + (n+6) = 108. 4n + 12 = 108. n = 24. Largest = 30.", nl: "n + (n+2) + (n+4) + (n+6) = 108. 4n + 12 = 108. n = 24. Grootste = 30." }
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
