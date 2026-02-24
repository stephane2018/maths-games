// =============================================================================
// M1 - Conversions et mesures
// CE1D Belgian exam - Trilingual (FR / EN / NL)
// =============================================================================

export const questions = [
  // =========================================================================
  // Level 1 — Basic metric conversions (~17 questions: 1–17)
  // =========================================================================
  {
    id: "M1_s_1", category: "M1", level: 1,
    text: { fr: "Combien de mètres dans 3,5 km ?", en: "How many meters in 3.5 km?", nl: "Hoeveel meter in 3,5 km?" },
    answer: 3500, tolerance: 0,
    hint: { fr: "1 km = 1000 m.", en: "1 km = 1000 m.", nl: "1 km = 1000 m." }
  },
  {
    id: "M1_s_2", category: "M1", level: 1,
    text: { fr: "Combien de centimètres dans 2,4 m ?", en: "How many centimeters in 2.4 m?", nl: "Hoeveel centimeter in 2,4 m?" },
    answer: 240, tolerance: 0,
    hint: { fr: "1 m = 100 cm.", en: "1 m = 100 cm.", nl: "1 m = 100 cm." }
  },
  {
    id: "M1_s_3", category: "M1", level: 1,
    text: { fr: "Combien de grammes dans 1,5 kg ?", en: "How many grams in 1.5 kg?", nl: "Hoeveel gram in 1,5 kg?" },
    answer: 1500, tolerance: 0,
    hint: { fr: "1 kg = 1000 g.", en: "1 kg = 1000 g.", nl: "1 kg = 1000 g." }
  },
  {
    id: "M1_s_4", category: "M1", level: 1,
    text: { fr: "Combien de millilitres dans 2 litres ?", en: "How many milliliters in 2 liters?", nl: "Hoeveel milliliter in 2 liter?" },
    answer: 2000, tolerance: 0,
    hint: { fr: "1 L = 1000 mL.", en: "1 L = 1000 mL.", nl: "1 L = 1000 mL." }
  },
  {
    id: "M1_s_5", category: "M1", level: 1,
    text: { fr: "Combien de minutes dans 3 heures ?", en: "How many minutes in 3 hours?", nl: "Hoeveel minuten in 3 uur?" },
    answer: 180, tolerance: 0,
    hint: { fr: "1 h = 60 min.", en: "1 h = 60 min.", nl: "1 u = 60 min." }
  },
  {
    id: "M1_s_16", category: "M1", level: 1,
    text: { fr: "Combien de mètres dans 7 km ?", en: "How many meters in 7 km?", nl: "Hoeveel meter in 7 km?" },
    answer: 7000, tolerance: 0,
    hint: { fr: "1 km = 1000 m.", en: "1 km = 1000 m.", nl: "1 km = 1000 m." }
  },
  {
    id: "M1_s_17", category: "M1", level: 1,
    text: { fr: "Combien de centimètres dans 5 m ?", en: "How many centimeters in 5 m?", nl: "Hoeveel centimeter in 5 m?" },
    answer: 500, tolerance: 0,
    hint: { fr: "1 m = 100 cm.", en: "1 m = 100 cm.", nl: "1 m = 100 cm." }
  },
  {
    id: "M1_s_18", category: "M1", level: 1,
    text: { fr: "Combien de grammes dans 4,2 kg ?", en: "How many grams in 4.2 kg?", nl: "Hoeveel gram in 4,2 kg?" },
    answer: 4200, tolerance: 0,
    hint: { fr: "1 kg = 1000 g.", en: "1 kg = 1000 g.", nl: "1 kg = 1000 g." }
  },
  {
    id: "M1_s_19", category: "M1", level: 1,
    text: { fr: "Combien de millilitres dans 0,5 litre ?", en: "How many milliliters in 0.5 liters?", nl: "Hoeveel milliliter in 0,5 liter?" },
    answer: 500, tolerance: 0,
    hint: { fr: "1 L = 1000 mL.", en: "1 L = 1000 mL.", nl: "1 L = 1000 mL." }
  },
  {
    id: "M1_s_20", category: "M1", level: 1,
    text: { fr: "Combien de minutes dans 5 heures ?", en: "How many minutes in 5 hours?", nl: "Hoeveel minuten in 5 uur?" },
    answer: 300, tolerance: 0,
    hint: { fr: "1 h = 60 min.", en: "1 h = 60 min.", nl: "1 u = 60 min." }
  },
  {
    id: "M1_s_21", category: "M1", level: 1,
    text: { fr: "Combien de mètres dans 0,25 km ?", en: "How many meters in 0.25 km?", nl: "Hoeveel meter in 0,25 km?" },
    answer: 250, tolerance: 0,
    hint: { fr: "1 km = 1000 m. 0,25 . 1000 = 250.", en: "1 km = 1000 m. 0.25 . 1000 = 250.", nl: "1 km = 1000 m. 0,25 . 1000 = 250." }
  },
  {
    id: "M1_s_22", category: "M1", level: 1,
    text: { fr: "Combien de centimètres dans 1,8 m ?", en: "How many centimeters in 1.8 m?", nl: "Hoeveel centimeter in 1,8 m?" },
    answer: 180, tolerance: 0,
    hint: { fr: "1 m = 100 cm.", en: "1 m = 100 cm.", nl: "1 m = 100 cm." }
  },
  {
    id: "M1_s_23", category: "M1", level: 1,
    text: { fr: "Combien de grammes dans 0,75 kg ?", en: "How many grams in 0.75 kg?", nl: "Hoeveel gram in 0,75 kg?" },
    answer: 750, tolerance: 0,
    hint: { fr: "1 kg = 1000 g. 0,75 . 1000 = 750.", en: "1 kg = 1000 g. 0.75 . 1000 = 750.", nl: "1 kg = 1000 g. 0,75 . 1000 = 750." }
  },
  {
    id: "M1_s_24", category: "M1", level: 1,
    text: { fr: "Combien de millilitres dans 3,5 litres ?", en: "How many milliliters in 3.5 liters?", nl: "Hoeveel milliliter in 3,5 liter?" },
    answer: 3500, tolerance: 0,
    hint: { fr: "1 L = 1000 mL.", en: "1 L = 1000 mL.", nl: "1 L = 1000 mL." }
  },
  {
    id: "M1_s_25", category: "M1", level: 1,
    text: { fr: "Combien de secondes dans 2 minutes ?", en: "How many seconds in 2 minutes?", nl: "Hoeveel seconden in 2 minuten?" },
    answer: 120, tolerance: 0,
    hint: { fr: "1 min = 60 s.", en: "1 min = 60 s.", nl: "1 min = 60 s." }
  },
  {
    id: "M1_s_26", category: "M1", level: 1,
    text: { fr: "Combien de mètres dans 12,5 km ?", en: "How many meters in 12.5 km?", nl: "Hoeveel meter in 12,5 km?" },
    answer: 12500, tolerance: 0,
    hint: { fr: "1 km = 1000 m.", en: "1 km = 1000 m.", nl: "1 km = 1000 m." }
  },
  {
    id: "M1_s_27", category: "M1", level: 1,
    text: { fr: "Combien de minutes dans 1,5 heure ?", en: "How many minutes in 1.5 hours?", nl: "Hoeveel minuten in 1,5 uur?" },
    answer: 90, tolerance: 0,
    hint: { fr: "1,5 . 60 = 90.", en: "1.5 . 60 = 90.", nl: "1,5 . 60 = 90." }
  },

  // =========================================================================
  // Level 2 — Intermediate conversions (~17 questions: 6–10, 28–39)
  // =========================================================================
  {
    id: "M1_s_6", category: "M1", level: 2,
    text: { fr: "Combien de cm² dans 5 dm² ?", en: "How many cm² in 5 dm²?", nl: "Hoeveel cm² in 5 dm²?" },
    answer: 500, tolerance: 0,
    hint: { fr: "1 dm² = 100 cm².", en: "1 dm² = 100 cm².", nl: "1 dm² = 100 cm²." }
  },
  {
    id: "M1_s_7", category: "M1", level: 2,
    text: { fr: "Combien de mm dans 0,47 m ?", en: "How many mm in 0.47 m?", nl: "Hoeveel mm in 0,47 m?" },
    answer: 470, tolerance: 0,
    hint: { fr: "1 m = 1000 mm.", en: "1 m = 1000 mm.", nl: "1 m = 1000 mm." }
  },
  {
    id: "M1_s_8", category: "M1", level: 2,
    text: { fr: "Convertis 2h30min en minutes.", en: "Convert 2h30min to minutes.", nl: "Reken 2u30min om naar minuten." },
    answer: 150, tolerance: 0,
    hint: { fr: "2 . 60 + 30 = 150.", en: "2 . 60 + 30 = 150.", nl: "2 . 60 + 30 = 150." }
  },
  {
    id: "M1_s_9", category: "M1", level: 2,
    text: { fr: "Combien de litres dans 4500 mL ?", en: "How many liters in 4500 mL?", nl: "Hoeveel liter in 4500 mL?" },
    answer: 4.5, tolerance: 0.01,
    hint: { fr: "4500 : 1000 = 4,5.", en: "4500 : 1000 = 4.5.", nl: "4500 : 1000 = 4,5." }
  },
  {
    id: "M1_s_10", category: "M1", level: 2,
    text: { fr: "Combien de kg dans 2300 g ?", en: "How many kg in 2300 g?", nl: "Hoeveel kg in 2300 g?" },
    answer: 2.3, tolerance: 0.01,
    hint: { fr: "2300 : 1000 = 2,3.", en: "2300 : 1000 = 2.3.", nl: "2300 : 1000 = 2,3." }
  },
  {
    id: "M1_s_28", category: "M1", level: 2,
    text: { fr: "Combien de cm² dans 3,2 dm² ?", en: "How many cm² in 3.2 dm²?", nl: "Hoeveel cm² in 3,2 dm²?" },
    answer: 320, tolerance: 0,
    hint: { fr: "1 dm² = 100 cm². 3,2 . 100 = 320.", en: "1 dm² = 100 cm². 3.2 . 100 = 320.", nl: "1 dm² = 100 cm². 3,2 . 100 = 320." }
  },
  {
    id: "M1_s_29", category: "M1", level: 2,
    text: { fr: "Combien de mm dans 1,35 m ?", en: "How many mm in 1.35 m?", nl: "Hoeveel mm in 1,35 m?" },
    answer: 1350, tolerance: 0,
    hint: { fr: "1 m = 1000 mm. 1,35 . 1000 = 1350.", en: "1 m = 1000 mm. 1.35 . 1000 = 1350.", nl: "1 m = 1000 mm. 1,35 . 1000 = 1350." }
  },
  {
    id: "M1_s_30", category: "M1", level: 2,
    text: { fr: "Convertis 1h45min en minutes.", en: "Convert 1h45min to minutes.", nl: "Reken 1u45min om naar minuten." },
    answer: 105, tolerance: 0,
    hint: { fr: "1 . 60 + 45 = 105.", en: "1 . 60 + 45 = 105.", nl: "1 . 60 + 45 = 105." }
  },
  {
    id: "M1_s_31", category: "M1", level: 2,
    text: { fr: "Combien de litres dans 750 mL ?", en: "How many liters in 750 mL?", nl: "Hoeveel liter in 750 mL?" },
    answer: 0.75, tolerance: 0.01,
    hint: { fr: "750 : 1000 = 0,75.", en: "750 : 1000 = 0.75.", nl: "750 : 1000 = 0,75." }
  },
  {
    id: "M1_s_32", category: "M1", level: 2,
    text: { fr: "Combien de kg dans 6800 g ?", en: "How many kg in 6800 g?", nl: "Hoeveel kg in 6800 g?" },
    answer: 6.8, tolerance: 0.01,
    hint: { fr: "6800 : 1000 = 6,8.", en: "6800 : 1000 = 6.8.", nl: "6800 : 1000 = 6,8." }
  },
  {
    id: "M1_s_33", category: "M1", level: 2,
    text: { fr: "Combien de mètres dans 850 cm ?", en: "How many meters in 850 cm?", nl: "Hoeveel meter in 850 cm?" },
    answer: 8.5, tolerance: 0.01,
    hint: { fr: "850 : 100 = 8,5.", en: "850 : 100 = 8.5.", nl: "850 : 100 = 8,5." }
  },
  {
    id: "M1_s_34", category: "M1", level: 2,
    text: { fr: "Combien de km dans 4600 m ?", en: "How many km in 4600 m?", nl: "Hoeveel km in 4600 m?" },
    answer: 4.6, tolerance: 0.01,
    hint: { fr: "4600 : 1000 = 4,6.", en: "4600 : 1000 = 4.6.", nl: "4600 : 1000 = 4,6." }
  },
  {
    id: "M1_s_35", category: "M1", level: 2,
    text: { fr: "Convertis 3h15min en minutes.", en: "Convert 3h15min to minutes.", nl: "Reken 3u15min om naar minuten." },
    answer: 195, tolerance: 0,
    hint: { fr: "3 . 60 + 15 = 195.", en: "3 . 60 + 15 = 195.", nl: "3 . 60 + 15 = 195." }
  },
  {
    id: "M1_s_36", category: "M1", level: 2,
    text: { fr: "Combien de litres dans 1250 mL ?", en: "How many liters in 1250 mL?", nl: "Hoeveel liter in 1250 mL?" },
    answer: 1.25, tolerance: 0.01,
    hint: { fr: "1250 : 1000 = 1,25.", en: "1250 : 1000 = 1.25.", nl: "1250 : 1000 = 1,25." }
  },
  {
    id: "M1_s_37", category: "M1", level: 2,
    text: { fr: "Combien de secondes dans 3,5 minutes ?", en: "How many seconds in 3.5 minutes?", nl: "Hoeveel seconden in 3,5 minuten?" },
    answer: 210, tolerance: 0,
    hint: { fr: "3,5 . 60 = 210.", en: "3.5 . 60 = 210.", nl: "3,5 . 60 = 210." }
  },
  {
    id: "M1_s_38", category: "M1", level: 2,
    text: { fr: "Combien de cm dans 2,75 m ?", en: "How many cm in 2.75 m?", nl: "Hoeveel cm in 2,75 m?" },
    answer: 275, tolerance: 0,
    hint: { fr: "1 m = 100 cm. 2,75 . 100 = 275.", en: "1 m = 100 cm. 2.75 . 100 = 275.", nl: "1 m = 100 cm. 2,75 . 100 = 275." }
  },
  {
    id: "M1_s_39", category: "M1", level: 2,
    text: { fr: "Combien de mm dans 6,2 cm ?", en: "How many mm in 6.2 cm?", nl: "Hoeveel mm in 6,2 cm?" },
    answer: 62, tolerance: 0,
    hint: { fr: "1 cm = 10 mm. 6,2 . 10 = 62.", en: "1 cm = 10 mm. 6.2 . 10 = 62.", nl: "1 cm = 10 mm. 6,2 . 10 = 62." }
  },

  // =========================================================================
  // Level 3 — Area/volume conversions, speed (~16 questions: 11–15, 40–50)
  // =========================================================================
  {
    id: "M1_s_11", category: "M1", level: 3,
    text: { fr: "Convertis 45 000 cm² en m².", en: "Convert 45,000 cm² to m².", nl: "Reken 45.000 cm² om naar m²." },
    answer: 4.5, tolerance: 0.01,
    hint: { fr: "1 m² = 10 000 cm². Donc 45 000 : 10 000.", en: "1 m² = 10,000 cm². So 45,000 : 10,000.", nl: "1 m² = 10.000 cm². Dus 45.000 : 10.000." }
  },
  {
    id: "M1_s_12", category: "M1", level: 3,
    text: { fr: "Combien de dm³ dans 3,5 litres ?", en: "How many dm³ in 3.5 liters?", nl: "Hoeveel dm³ in 3,5 liter?" },
    answer: 3.5, tolerance: 0.01,
    hint: { fr: "1 litre = 1 dm³.", en: "1 liter = 1 dm³.", nl: "1 liter = 1 dm³." }
  },
  {
    id: "M1_s_13", category: "M1", level: 3,
    text: { fr: "Convertis 2,5 heures en minutes.", en: "Convert 2.5 hours to minutes.", nl: "Reken 2,5 uur om naar minuten." },
    answer: 150, tolerance: 0,
    hint: { fr: "2,5 . 60 = 150.", en: "2.5 . 60 = 150.", nl: "2,5 . 60 = 150." }
  },
  {
    id: "M1_s_14", category: "M1", level: 3,
    text: { fr: "Combien de m² dans 0,08 hectare ?", en: "How many m² in 0.08 hectare?", nl: "Hoeveel m² in 0,08 hectare?" },
    answer: 800, tolerance: 0,
    hint: { fr: "1 ha = 10 000 m². Donc 0,08 . 10 000.", en: "1 ha = 10,000 m². So 0.08 . 10,000.", nl: "1 ha = 10.000 m². Dus 0,08 . 10.000." }
  },
  {
    id: "M1_s_15", category: "M1", level: 3,
    text: { fr: "Convertis 72 km/h en m/s.", en: "Convert 72 km/h to m/s.", nl: "Reken 72 km/u om naar m/s." },
    answer: 20, tolerance: 0.01,
    hint: { fr: ": 3,6 : 72 : 3,6 = 20.", en: ": 3.6: 72 : 3.6 = 20.", nl: ": 3,6: 72 : 3,6 = 20." }
  },
  {
    id: "M1_s_40", category: "M1", level: 3,
    text: { fr: "Convertis 30 000 cm² en m².", en: "Convert 30,000 cm² to m².", nl: "Reken 30.000 cm² om naar m²." },
    answer: 3, tolerance: 0.01,
    hint: { fr: "1 m² = 10 000 cm². 30 000 : 10 000 = 3.", en: "1 m² = 10,000 cm². 30,000 : 10,000 = 3.", nl: "1 m² = 10.000 cm². 30.000 : 10.000 = 3." }
  },
  {
    id: "M1_s_41", category: "M1", level: 3,
    text: { fr: "Combien de litres dans 8 dm³ ?", en: "How many liters in 8 dm³?", nl: "Hoeveel liter in 8 dm³?" },
    answer: 8, tolerance: 0.01,
    hint: { fr: "1 dm³ = 1 litre.", en: "1 dm³ = 1 liter.", nl: "1 dm³ = 1 liter." }
  },
  {
    id: "M1_s_42", category: "M1", level: 3,
    text: { fr: "Convertis 3,75 heures en minutes.", en: "Convert 3.75 hours to minutes.", nl: "Reken 3,75 uur om naar minuten." },
    answer: 225, tolerance: 0,
    hint: { fr: "3,75 . 60 = 225.", en: "3.75 . 60 = 225.", nl: "3,75 . 60 = 225." }
  },
  {
    id: "M1_s_43", category: "M1", level: 3,
    text: { fr: "Combien de m² dans 1,5 hectare ?", en: "How many m² in 1.5 hectares?", nl: "Hoeveel m² in 1,5 hectare?" },
    answer: 15000, tolerance: 0,
    hint: { fr: "1 ha = 10 000 m². 1,5 . 10 000 = 15 000.", en: "1 ha = 10,000 m². 1.5 . 10,000 = 15,000.", nl: "1 ha = 10.000 m². 1,5 . 10.000 = 15.000." }
  },
  {
    id: "M1_s_44", category: "M1", level: 3,
    text: { fr: "Convertis 90 km/h en m/s.", en: "Convert 90 km/h to m/s.", nl: "Reken 90 km/u om naar m/s." },
    answer: 25, tolerance: 0.01,
    hint: { fr: "90 : 3,6 = 25.", en: "90 : 3.6 = 25.", nl: "90 : 3,6 = 25." }
  },
  {
    id: "M1_s_45", category: "M1", level: 3,
    text: { fr: "Convertis 7500 cm² en m².", en: "Convert 7,500 cm² to m².", nl: "Reken 7500 cm² om naar m²." },
    answer: 0.75, tolerance: 0.01,
    hint: { fr: "1 m² = 10 000 cm². 7500 : 10 000 = 0,75.", en: "1 m² = 10,000 cm². 7,500 : 10,000 = 0.75.", nl: "1 m² = 10.000 cm². 7500 : 10.000 = 0,75." }
  },
  {
    id: "M1_s_46", category: "M1", level: 3,
    text: { fr: "Combien de dm³ dans 0,25 litre ?", en: "How many dm³ in 0.25 liters?", nl: "Hoeveel dm³ in 0,25 liter?" },
    answer: 0.25, tolerance: 0.01,
    hint: { fr: "1 litre = 1 dm³. 0,25 L = 0,25 dm³.", en: "1 liter = 1 dm³. 0.25 L = 0.25 dm³.", nl: "1 liter = 1 dm³. 0,25 L = 0,25 dm³." }
  },
  {
    id: "M1_s_47", category: "M1", level: 3,
    text: { fr: "Convertis 108 km/h en m/s.", en: "Convert 108 km/h to m/s.", nl: "Reken 108 km/u om naar m/s." },
    answer: 30, tolerance: 0.01,
    hint: { fr: "108 : 3,6 = 30.", en: "108 : 3.6 = 30.", nl: "108 : 3,6 = 30." }
  },
  {
    id: "M1_s_48", category: "M1", level: 3,
    text: { fr: "Combien de m² dans 0,35 hectare ?", en: "How many m² in 0.35 hectares?", nl: "Hoeveel m² in 0,35 hectare?" },
    answer: 3500, tolerance: 0,
    hint: { fr: "1 ha = 10 000 m². 0,35 . 10 000 = 3500.", en: "1 ha = 10,000 m². 0.35 . 10,000 = 3,500.", nl: "1 ha = 10.000 m². 0,35 . 10.000 = 3500." }
  },
  {
    id: "M1_s_49", category: "M1", level: 3,
    text: { fr: "Convertis 1,25 heures en minutes.", en: "Convert 1.25 hours to minutes.", nl: "Reken 1,25 uur om naar minuten." },
    answer: 75, tolerance: 0,
    hint: { fr: "1,25 . 60 = 75.", en: "1.25 . 60 = 75.", nl: "1,25 . 60 = 75." }
  },
  {
    id: "M1_s_50", category: "M1", level: 3,
    text: { fr: "Convertis 54 km/h en m/s.", en: "Convert 54 km/h to m/s.", nl: "Reken 54 km/u om naar m/s." },
    answer: 15, tolerance: 0.01,
    hint: { fr: "54 : 3,6 = 15.", en: "54 : 3.6 = 15.", nl: "54 : 3,6 = 15." }
  },

  // =========================================================================
  // Level 1 — More basic metric conversions (51–70)
  // =========================================================================
  {
    id: "M1_s_51", category: "M1", level: 1,
    text: { fr: "Combien de mètres dans 6,2 km ?", en: "How many meters in 6.2 km?", nl: "Hoeveel meter in 6,2 km?" },
    answer: 6200, tolerance: 0,
    hint: { fr: "1 km = 1000 m. 6,2 . 1000 = 6200.", en: "1 km = 1000 m. 6.2 . 1000 = 6200.", nl: "1 km = 1000 m. 6,2 . 1000 = 6200." }
  },
  {
    id: "M1_s_52", category: "M1", level: 1,
    text: { fr: "Combien de mètres dans 0,8 km ?", en: "How many meters in 0.8 km?", nl: "Hoeveel meter in 0,8 km?" },
    answer: 800, tolerance: 0,
    hint: { fr: "1 km = 1000 m. 0,8 . 1000 = 800.", en: "1 km = 1000 m. 0.8 . 1000 = 800.", nl: "1 km = 1000 m. 0,8 . 1000 = 800." }
  },
  {
    id: "M1_s_53", category: "M1", level: 1,
    text: { fr: "Combien de mètres dans 4,75 km ?", en: "How many meters in 4.75 km?", nl: "Hoeveel meter in 4,75 km?" },
    answer: 4750, tolerance: 0,
    hint: { fr: "1 km = 1000 m. 4,75 . 1000 = 4750.", en: "1 km = 1000 m. 4.75 . 1000 = 4750.", nl: "1 km = 1000 m. 4,75 . 1000 = 4750." }
  },
  {
    id: "M1_s_54", category: "M1", level: 1,
    text: { fr: "Combien de mètres dans 10,5 km ?", en: "How many meters in 10.5 km?", nl: "Hoeveel meter in 10,5 km?" },
    answer: 10500, tolerance: 0,
    hint: { fr: "1 km = 1000 m. 10,5 . 1000 = 10 500.", en: "1 km = 1000 m. 10.5 . 1000 = 10,500.", nl: "1 km = 1000 m. 10,5 . 1000 = 10 500." }
  },
  {
    id: "M1_s_55", category: "M1", level: 1,
    text: { fr: "Combien de centimètres dans 3,6 m ?", en: "How many centimeters in 3.6 m?", nl: "Hoeveel centimeter in 3,6 m?" },
    answer: 360, tolerance: 0,
    hint: { fr: "1 m = 100 cm. 3,6 . 100 = 360.", en: "1 m = 100 cm. 3.6 . 100 = 360.", nl: "1 m = 100 cm. 3,6 . 100 = 360." }
  },
  {
    id: "M1_s_56", category: "M1", level: 1,
    text: { fr: "Combien de centimètres dans 7,25 m ?", en: "How many centimeters in 7.25 m?", nl: "Hoeveel centimeter in 7,25 m?" },
    answer: 725, tolerance: 0,
    hint: { fr: "1 m = 100 cm. 7,25 . 100 = 725.", en: "1 m = 100 cm. 7.25 . 100 = 725.", nl: "1 m = 100 cm. 7,25 . 100 = 725." }
  },
  {
    id: "M1_s_57", category: "M1", level: 1,
    text: { fr: "Combien de centimètres dans 0,9 m ?", en: "How many centimeters in 0.9 m?", nl: "Hoeveel centimeter in 0,9 m?" },
    answer: 90, tolerance: 0,
    hint: { fr: "1 m = 100 cm. 0,9 . 100 = 90.", en: "1 m = 100 cm. 0.9 . 100 = 90.", nl: "1 m = 100 cm. 0,9 . 100 = 90." }
  },
  {
    id: "M1_s_58", category: "M1", level: 1,
    text: { fr: "Combien de grammes dans 2,8 kg ?", en: "How many grams in 2.8 kg?", nl: "Hoeveel gram in 2,8 kg?" },
    answer: 2800, tolerance: 0,
    hint: { fr: "1 kg = 1000 g. 2,8 . 1000 = 2800.", en: "1 kg = 1000 g. 2.8 . 1000 = 2800.", nl: "1 kg = 1000 g. 2,8 . 1000 = 2800." }
  },
  {
    id: "M1_s_59", category: "M1", level: 1,
    text: { fr: "Combien de grammes dans 0,35 kg ?", en: "How many grams in 0.35 kg?", nl: "Hoeveel gram in 0,35 kg?" },
    answer: 350, tolerance: 0,
    hint: { fr: "1 kg = 1000 g. 0,35 . 1000 = 350.", en: "1 kg = 1000 g. 0.35 . 1000 = 350.", nl: "1 kg = 1000 g. 0,35 . 1000 = 350." }
  },
  {
    id: "M1_s_60", category: "M1", level: 1,
    text: { fr: "Combien de grammes dans 5,6 kg ?", en: "How many grams in 5.6 kg?", nl: "Hoeveel gram in 5,6 kg?" },
    answer: 5600, tolerance: 0,
    hint: { fr: "1 kg = 1000 g. 5,6 . 1000 = 5600.", en: "1 kg = 1000 g. 5.6 . 1000 = 5600.", nl: "1 kg = 1000 g. 5,6 . 1000 = 5600." }
  },
  {
    id: "M1_s_61", category: "M1", level: 1,
    text: { fr: "Combien de grammes dans 3,25 kg ?", en: "How many grams in 3.25 kg?", nl: "Hoeveel gram in 3,25 kg?" },
    answer: 3250, tolerance: 0,
    hint: { fr: "1 kg = 1000 g. 3,25 . 1000 = 3250.", en: "1 kg = 1000 g. 3.25 . 1000 = 3250.", nl: "1 kg = 1000 g. 3,25 . 1000 = 3250." }
  },
  {
    id: "M1_s_62", category: "M1", level: 1,
    text: { fr: "Combien de millilitres dans 1,75 litre ?", en: "How many milliliters in 1.75 liters?", nl: "Hoeveel milliliter in 1,75 liter?" },
    answer: 1750, tolerance: 0,
    hint: { fr: "1 L = 1000 mL. 1,75 . 1000 = 1750.", en: "1 L = 1000 mL. 1.75 . 1000 = 1750.", nl: "1 L = 1000 mL. 1,75 . 1000 = 1750." }
  },
  {
    id: "M1_s_63", category: "M1", level: 1,
    text: { fr: "Combien de millilitres dans 4,25 litres ?", en: "How many milliliters in 4.25 liters?", nl: "Hoeveel milliliter in 4,25 liter?" },
    answer: 4250, tolerance: 0,
    hint: { fr: "1 L = 1000 mL. 4,25 . 1000 = 4250.", en: "1 L = 1000 mL. 4.25 . 1000 = 4250.", nl: "1 L = 1000 mL. 4,25 . 1000 = 4250." }
  },
  {
    id: "M1_s_64", category: "M1", level: 1,
    text: { fr: "Combien de millilitres dans 0,25 litre ?", en: "How many milliliters in 0.25 liters?", nl: "Hoeveel milliliter in 0,25 liter?" },
    answer: 250, tolerance: 0,
    hint: { fr: "1 L = 1000 mL. 0,25 . 1000 = 250.", en: "1 L = 1000 mL. 0.25 . 1000 = 250.", nl: "1 L = 1000 mL. 0,25 . 1000 = 250." }
  },
  {
    id: "M1_s_65", category: "M1", level: 1,
    text: { fr: "Combien de millilitres dans 6 litres ?", en: "How many milliliters in 6 liters?", nl: "Hoeveel milliliter in 6 liter?" },
    answer: 6000, tolerance: 0,
    hint: { fr: "1 L = 1000 mL. 6 . 1000 = 6000.", en: "1 L = 1000 mL. 6 . 1000 = 6000.", nl: "1 L = 1000 mL. 6 . 1000 = 6000." }
  },
  {
    id: "M1_s_66", category: "M1", level: 1,
    text: { fr: "Combien de minutes dans 4 heures ?", en: "How many minutes in 4 hours?", nl: "Hoeveel minuten in 4 uur?" },
    answer: 240, tolerance: 0,
    hint: { fr: "1 h = 60 min. 4 . 60 = 240.", en: "1 h = 60 min. 4 . 60 = 240.", nl: "1 u = 60 min. 4 . 60 = 240." }
  },
  {
    id: "M1_s_67", category: "M1", level: 1,
    text: { fr: "Combien de minutes dans 2,5 heures ?", en: "How many minutes in 2.5 hours?", nl: "Hoeveel minuten in 2,5 uur?" },
    answer: 150, tolerance: 0,
    hint: { fr: "2,5 . 60 = 150.", en: "2.5 . 60 = 150.", nl: "2,5 . 60 = 150." }
  },
  {
    id: "M1_s_68", category: "M1", level: 1,
    text: { fr: "Combien de secondes dans 5 minutes ?", en: "How many seconds in 5 minutes?", nl: "Hoeveel seconden in 5 minuten?" },
    answer: 300, tolerance: 0,
    hint: { fr: "1 min = 60 s. 5 . 60 = 300.", en: "1 min = 60 s. 5 . 60 = 300.", nl: "1 min = 60 s. 5 . 60 = 300." }
  },
  {
    id: "M1_s_69", category: "M1", level: 1,
    text: { fr: "Combien de secondes dans 4,5 minutes ?", en: "How many seconds in 4.5 minutes?", nl: "Hoeveel seconden in 4,5 minuten?" },
    answer: 270, tolerance: 0,
    hint: { fr: "4,5 . 60 = 270.", en: "4.5 . 60 = 270.", nl: "4,5 . 60 = 270." }
  },
  {
    id: "M1_s_70", category: "M1", level: 1,
    text: { fr: "Combien de mètres dans 1,25 km ?", en: "How many meters in 1.25 km?", nl: "Hoeveel meter in 1,25 km?" },
    answer: 1250, tolerance: 0,
    hint: { fr: "1 km = 1000 m. 1,25 . 1000 = 1250.", en: "1 km = 1000 m. 1.25 . 1000 = 1250.", nl: "1 km = 1000 m. 1,25 . 1000 = 1250." }
  },

  // =========================================================================
  // Level 2 — More intermediate conversions (71–91)
  // =========================================================================
  {
    id: "M1_s_71", category: "M1", level: 2,
    text: { fr: "Combien de cm² dans 7,5 dm² ?", en: "How many cm² in 7.5 dm²?", nl: "Hoeveel cm² in 7,5 dm²?" },
    answer: 750, tolerance: 0,
    hint: { fr: "1 dm² = 100 cm². 7,5 . 100 = 750.", en: "1 dm² = 100 cm². 7.5 . 100 = 750.", nl: "1 dm² = 100 cm². 7,5 . 100 = 750." }
  },
  {
    id: "M1_s_72", category: "M1", level: 2,
    text: { fr: "Combien de cm² dans 0,45 dm² ?", en: "How many cm² in 0.45 dm²?", nl: "Hoeveel cm² in 0,45 dm²?" },
    answer: 45, tolerance: 0,
    hint: { fr: "1 dm² = 100 cm². 0,45 . 100 = 45.", en: "1 dm² = 100 cm². 0.45 . 100 = 45.", nl: "1 dm² = 100 cm². 0,45 . 100 = 45." }
  },
  {
    id: "M1_s_73", category: "M1", level: 2,
    text: { fr: "Combien de cm² dans 12 dm² ?", en: "How many cm² in 12 dm²?", nl: "Hoeveel cm² in 12 dm²?" },
    answer: 1200, tolerance: 0,
    hint: { fr: "1 dm² = 100 cm². 12 . 100 = 1200.", en: "1 dm² = 100 cm². 12 . 100 = 1200.", nl: "1 dm² = 100 cm². 12 . 100 = 1200." }
  },
  {
    id: "M1_s_74", category: "M1", level: 2,
    text: { fr: "Combien de cm² dans 2,8 dm² ?", en: "How many cm² in 2.8 dm²?", nl: "Hoeveel cm² in 2,8 dm²?" },
    answer: 280, tolerance: 0,
    hint: { fr: "1 dm² = 100 cm². 2,8 . 100 = 280.", en: "1 dm² = 100 cm². 2.8 . 100 = 280.", nl: "1 dm² = 100 cm². 2,8 . 100 = 280." }
  },
  {
    id: "M1_s_75", category: "M1", level: 2,
    text: { fr: "Combien de mm dans 0,62 m ?", en: "How many mm in 0.62 m?", nl: "Hoeveel mm in 0,62 m?" },
    answer: 620, tolerance: 0,
    hint: { fr: "1 m = 1000 mm. 0,62 . 1000 = 620.", en: "1 m = 1000 mm. 0.62 . 1000 = 620.", nl: "1 m = 1000 mm. 0,62 . 1000 = 620." }
  },
  {
    id: "M1_s_76", category: "M1", level: 2,
    text: { fr: "Combien de mm dans 2,05 m ?", en: "How many mm in 2.05 m?", nl: "Hoeveel mm in 2,05 m?" },
    answer: 2050, tolerance: 0,
    hint: { fr: "1 m = 1000 mm. 2,05 . 1000 = 2050.", en: "1 m = 1000 mm. 2.05 . 1000 = 2050.", nl: "1 m = 1000 mm. 2,05 . 1000 = 2050." }
  },
  {
    id: "M1_s_77", category: "M1", level: 2,
    text: { fr: "Combien de mètres dans 3400 mm ?", en: "How many meters in 3400 mm?", nl: "Hoeveel meter in 3400 mm?" },
    answer: 3.4, tolerance: 0.01,
    hint: { fr: "1 m = 1000 mm. 3400 : 1000 = 3,4.", en: "1 m = 1000 mm. 3400 : 1000 = 3.4.", nl: "1 m = 1000 mm. 3400 : 1000 = 3,4." }
  },
  {
    id: "M1_s_78", category: "M1", level: 2,
    text: { fr: "Combien de mètres dans 750 mm ?", en: "How many meters in 750 mm?", nl: "Hoeveel meter in 750 mm?" },
    answer: 0.75, tolerance: 0.01,
    hint: { fr: "1 m = 1000 mm. 750 : 1000 = 0,75.", en: "1 m = 1000 mm. 750 : 1000 = 0.75.", nl: "1 m = 1000 mm. 750 : 1000 = 0,75." }
  },
  {
    id: "M1_s_79", category: "M1", level: 2,
    text: { fr: "Convertis 4h20min en minutes.", en: "Convert 4h20min to minutes.", nl: "Reken 4u20min om naar minuten." },
    answer: 260, tolerance: 0,
    hint: { fr: "4 . 60 + 20 = 260.", en: "4 . 60 + 20 = 260.", nl: "4 . 60 + 20 = 260." }
  },
  {
    id: "M1_s_80", category: "M1", level: 2,
    text: { fr: "Convertis 5h10min en minutes.", en: "Convert 5h10min to minutes.", nl: "Reken 5u10min om naar minuten." },
    answer: 310, tolerance: 0,
    hint: { fr: "5 . 60 + 10 = 310.", en: "5 . 60 + 10 = 310.", nl: "5 . 60 + 10 = 310." }
  },
  {
    id: "M1_s_81", category: "M1", level: 2,
    text: { fr: "Convertis 2h50min en minutes.", en: "Convert 2h50min to minutes.", nl: "Reken 2u50min om naar minuten." },
    answer: 170, tolerance: 0,
    hint: { fr: "2 . 60 + 50 = 170.", en: "2 . 60 + 50 = 170.", nl: "2 . 60 + 50 = 170." }
  },
  {
    id: "M1_s_82", category: "M1", level: 2,
    text: { fr: "Convertis 6h40min en minutes.", en: "Convert 6h40min to minutes.", nl: "Reken 6u40min om naar minuten." },
    answer: 400, tolerance: 0,
    hint: { fr: "6 . 60 + 40 = 400.", en: "6 . 60 + 40 = 400.", nl: "6 . 60 + 40 = 400." }
  },
  {
    id: "M1_s_83", category: "M1", level: 2,
    text: { fr: "Combien de litres dans 3200 mL ?", en: "How many liters in 3200 mL?", nl: "Hoeveel liter in 3200 mL?" },
    answer: 3.2, tolerance: 0.01,
    hint: { fr: "3200 : 1000 = 3,2.", en: "3200 : 1000 = 3.2.", nl: "3200 : 1000 = 3,2." }
  },
  {
    id: "M1_s_84", category: "M1", level: 2,
    text: { fr: "Combien de litres dans 500 mL ?", en: "How many liters in 500 mL?", nl: "Hoeveel liter in 500 mL?" },
    answer: 0.5, tolerance: 0.01,
    hint: { fr: "500 : 1000 = 0,5.", en: "500 : 1000 = 0.5.", nl: "500 : 1000 = 0,5." }
  },
  {
    id: "M1_s_85", category: "M1", level: 2,
    text: { fr: "Combien de litres dans 6750 mL ?", en: "How many liters in 6750 mL?", nl: "Hoeveel liter in 6750 mL?" },
    answer: 6.75, tolerance: 0.01,
    hint: { fr: "6750 : 1000 = 6,75.", en: "6750 : 1000 = 6.75.", nl: "6750 : 1000 = 6,75." }
  },
  {
    id: "M1_s_86", category: "M1", level: 2,
    text: { fr: "Combien de litres dans 250 mL ?", en: "How many liters in 250 mL?", nl: "Hoeveel liter in 250 mL?" },
    answer: 0.25, tolerance: 0.01,
    hint: { fr: "250 : 1000 = 0,25.", en: "250 : 1000 = 0.25.", nl: "250 : 1000 = 0,25." }
  },
  {
    id: "M1_s_87", category: "M1", level: 2,
    text: { fr: "Combien de kg dans 4500 g ?", en: "How many kg in 4500 g?", nl: "Hoeveel kg in 4500 g?" },
    answer: 4.5, tolerance: 0.01,
    hint: { fr: "4500 : 1000 = 4,5.", en: "4500 : 1000 = 4.5.", nl: "4500 : 1000 = 4,5." }
  },
  {
    id: "M1_s_88", category: "M1", level: 2,
    text: { fr: "Combien de kg dans 375 g ?", en: "How many kg in 375 g?", nl: "Hoeveel kg in 375 g?" },
    answer: 0.375, tolerance: 0.01,
    hint: { fr: "375 : 1000 = 0,375.", en: "375 : 1000 = 0.375.", nl: "375 : 1000 = 0,375." }
  },
  {
    id: "M1_s_89", category: "M1", level: 2,
    text: { fr: "Combien de kg dans 8250 g ?", en: "How many kg in 8250 g?", nl: "Hoeveel kg in 8250 g?" },
    answer: 8.25, tolerance: 0.01,
    hint: { fr: "8250 : 1000 = 8,25.", en: "8250 : 1000 = 8.25.", nl: "8250 : 1000 = 8,25." }
  },
  {
    id: "M1_s_90", category: "M1", level: 2,
    text: { fr: "Combien de km dans 7200 m ?", en: "How many km in 7200 m?", nl: "Hoeveel km in 7200 m?" },
    answer: 7.2, tolerance: 0.01,
    hint: { fr: "7200 : 1000 = 7,2.", en: "7200 : 1000 = 7.2.", nl: "7200 : 1000 = 7,2." }
  },
  {
    id: "M1_s_91", category: "M1", level: 2,
    text: { fr: "Combien de mètres dans 1450 cm ?", en: "How many meters in 1450 cm?", nl: "Hoeveel meter in 1450 cm?" },
    answer: 14.5, tolerance: 0.01,
    hint: { fr: "1450 : 100 = 14,5.", en: "1450 : 100 = 14.5.", nl: "1450 : 100 = 14,5." }
  },

  // =========================================================================
  // Level 3 — More area/volume conversions, speed (92–111)
  // =========================================================================
  {
    id: "M1_s_92", category: "M1", level: 3,
    text: { fr: "Convertis 60 000 cm² en m².", en: "Convert 60,000 cm² to m².", nl: "Reken 60.000 cm² om naar m²." },
    answer: 6, tolerance: 0.01,
    hint: { fr: "1 m² = 10 000 cm². 60 000 : 10 000 = 6.", en: "1 m² = 10,000 cm². 60,000 : 10,000 = 6.", nl: "1 m² = 10.000 cm². 60.000 : 10.000 = 6." }
  },
  {
    id: "M1_s_93", category: "M1", level: 3,
    text: { fr: "Convertis 15 000 cm² en m².", en: "Convert 15,000 cm² to m².", nl: "Reken 15.000 cm² om naar m²." },
    answer: 1.5, tolerance: 0.01,
    hint: { fr: "1 m² = 10 000 cm². 15 000 : 10 000 = 1,5.", en: "1 m² = 10,000 cm². 15,000 : 10,000 = 1.5.", nl: "1 m² = 10.000 cm². 15.000 : 10.000 = 1,5." }
  },
  {
    id: "M1_s_94", category: "M1", level: 3,
    text: { fr: "Convertis 2500 cm² en m².", en: "Convert 2,500 cm² to m².", nl: "Reken 2500 cm² om naar m²." },
    answer: 0.25, tolerance: 0.01,
    hint: { fr: "1 m² = 10 000 cm². 2500 : 10 000 = 0,25.", en: "1 m² = 10,000 cm². 2,500 : 10,000 = 0.25.", nl: "1 m² = 10.000 cm². 2500 : 10.000 = 0,25." }
  },
  {
    id: "M1_s_95", category: "M1", level: 3,
    text: { fr: "Convertis 85 000 cm² en m².", en: "Convert 85,000 cm² to m².", nl: "Reken 85.000 cm² om naar m²." },
    answer: 8.5, tolerance: 0.01,
    hint: { fr: "1 m² = 10 000 cm². 85 000 : 10 000 = 8,5.", en: "1 m² = 10,000 cm². 85,000 : 10,000 = 8.5.", nl: "1 m² = 10.000 cm². 85.000 : 10.000 = 8,5." }
  },
  {
    id: "M1_s_96", category: "M1", level: 3,
    text: { fr: "Combien de litres dans 4,5 dm³ ?", en: "How many liters in 4.5 dm³?", nl: "Hoeveel liter in 4,5 dm³?" },
    answer: 4.5, tolerance: 0.01,
    hint: { fr: "1 dm³ = 1 litre. 4,5 dm³ = 4,5 L.", en: "1 dm³ = 1 liter. 4.5 dm³ = 4.5 L.", nl: "1 dm³ = 1 liter. 4,5 dm³ = 4,5 L." }
  },
  {
    id: "M1_s_97", category: "M1", level: 3,
    text: { fr: "Combien de dm³ dans 12,5 litres ?", en: "How many dm³ in 12.5 liters?", nl: "Hoeveel dm³ in 12,5 liter?" },
    answer: 12.5, tolerance: 0.01,
    hint: { fr: "1 litre = 1 dm³. 12,5 L = 12,5 dm³.", en: "1 liter = 1 dm³. 12.5 L = 12.5 dm³.", nl: "1 liter = 1 dm³. 12,5 L = 12,5 dm³." }
  },
  {
    id: "M1_s_98", category: "M1", level: 3,
    text: { fr: "Combien de litres dans 0,75 dm³ ?", en: "How many liters in 0.75 dm³?", nl: "Hoeveel liter in 0,75 dm³?" },
    answer: 0.75, tolerance: 0.01,
    hint: { fr: "1 dm³ = 1 litre. 0,75 dm³ = 0,75 L.", en: "1 dm³ = 1 liter. 0.75 dm³ = 0.75 L.", nl: "1 dm³ = 1 liter. 0,75 dm³ = 0,75 L." }
  },
  {
    id: "M1_s_99", category: "M1", level: 3,
    text: { fr: "Combien de dm³ dans 6 litres ?", en: "How many dm³ in 6 liters?", nl: "Hoeveel dm³ in 6 liter?" },
    answer: 6, tolerance: 0.01,
    hint: { fr: "1 litre = 1 dm³. 6 L = 6 dm³.", en: "1 liter = 1 dm³. 6 L = 6 dm³.", nl: "1 liter = 1 dm³. 6 L = 6 dm³." }
  },
  {
    id: "M1_s_100", category: "M1", level: 3,
    text: { fr: "Combien de m² dans 2,5 hectares ?", en: "How many m² in 2.5 hectares?", nl: "Hoeveel m² in 2,5 hectare?" },
    answer: 25000, tolerance: 0,
    hint: { fr: "1 ha = 10 000 m². 2,5 . 10 000 = 25 000.", en: "1 ha = 10,000 m². 2.5 . 10,000 = 25,000.", nl: "1 ha = 10.000 m². 2,5 . 10.000 = 25.000." }
  },
  {
    id: "M1_s_101", category: "M1", level: 3,
    text: { fr: "Combien de m² dans 0,15 hectare ?", en: "How many m² in 0.15 hectares?", nl: "Hoeveel m² in 0,15 hectare?" },
    answer: 1500, tolerance: 0,
    hint: { fr: "1 ha = 10 000 m². 0,15 . 10 000 = 1500.", en: "1 ha = 10,000 m². 0.15 . 10,000 = 1,500.", nl: "1 ha = 10.000 m². 0,15 . 10.000 = 1500." }
  },
  {
    id: "M1_s_102", category: "M1", level: 3,
    text: { fr: "Combien de m² dans 3 hectares ?", en: "How many m² in 3 hectares?", nl: "Hoeveel m² in 3 hectare?" },
    answer: 30000, tolerance: 0,
    hint: { fr: "1 ha = 10 000 m². 3 . 10 000 = 30 000.", en: "1 ha = 10,000 m². 3 . 10,000 = 30,000.", nl: "1 ha = 10.000 m². 3 . 10.000 = 30.000." }
  },
  {
    id: "M1_s_103", category: "M1", level: 3,
    text: { fr: "Combien de m² dans 0,6 hectare ?", en: "How many m² in 0.6 hectares?", nl: "Hoeveel m² in 0,6 hectare?" },
    answer: 6000, tolerance: 0,
    hint: { fr: "1 ha = 10 000 m². 0,6 . 10 000 = 6000.", en: "1 ha = 10,000 m². 0.6 . 10,000 = 6,000.", nl: "1 ha = 10.000 m². 0,6 . 10.000 = 6000." }
  },
  {
    id: "M1_s_104", category: "M1", level: 3,
    text: { fr: "Convertis 36 km/h en m/s.", en: "Convert 36 km/h to m/s.", nl: "Reken 36 km/u om naar m/s." },
    answer: 10, tolerance: 0.01,
    hint: { fr: "36 : 3,6 = 10.", en: "36 : 3.6 = 10.", nl: "36 : 3,6 = 10." }
  },
  {
    id: "M1_s_105", category: "M1", level: 3,
    text: { fr: "Convertis 144 km/h en m/s.", en: "Convert 144 km/h to m/s.", nl: "Reken 144 km/u om naar m/s." },
    answer: 40, tolerance: 0.01,
    hint: { fr: "144 : 3,6 = 40.", en: "144 : 3.6 = 40.", nl: "144 : 3,6 = 40." }
  },
  {
    id: "M1_s_106", category: "M1", level: 3,
    text: { fr: "Convertis 18 km/h en m/s.", en: "Convert 18 km/h to m/s.", nl: "Reken 18 km/u om naar m/s." },
    answer: 5, tolerance: 0.01,
    hint: { fr: "18 : 3,6 = 5.", en: "18 : 3.6 = 5.", nl: "18 : 3,6 = 5." }
  },
  {
    id: "M1_s_107", category: "M1", level: 3,
    text: { fr: "Convertis 126 km/h en m/s.", en: "Convert 126 km/h to m/s.", nl: "Reken 126 km/u om naar m/s." },
    answer: 35, tolerance: 0.01,
    hint: { fr: "126 : 3,6 = 35.", en: "126 : 3.6 = 35.", nl: "126 : 3,6 = 35." }
  },
  {
    id: "M1_s_108", category: "M1", level: 3,
    text: { fr: "Convertis 5 400 cm² en m².", en: "Convert 5,400 cm² to m².", nl: "Reken 5400 cm² om naar m²." },
    answer: 0.54, tolerance: 0.01,
    hint: { fr: "1 m² = 10 000 cm². 5400 : 10 000 = 0,54.", en: "1 m² = 10,000 cm². 5,400 : 10,000 = 0.54.", nl: "1 m² = 10.000 cm². 5400 : 10.000 = 0,54." }
  },
  {
    id: "M1_s_109", category: "M1", level: 3,
    text: { fr: "Combien de m² dans 4,2 hectares ?", en: "How many m² in 4.2 hectares?", nl: "Hoeveel m² in 4,2 hectare?" },
    answer: 42000, tolerance: 0,
    hint: { fr: "1 ha = 10 000 m². 4,2 . 10 000 = 42 000.", en: "1 ha = 10,000 m². 4.2 . 10,000 = 42,000.", nl: "1 ha = 10.000 m². 4,2 . 10.000 = 42.000." }
  },
  {
    id: "M1_s_110", category: "M1", level: 3,
    text: { fr: "Combien de dm³ dans 2,25 litres ?", en: "How many dm³ in 2.25 liters?", nl: "Hoeveel dm³ in 2,25 liter?" },
    answer: 2.25, tolerance: 0.01,
    hint: { fr: "1 litre = 1 dm³. 2,25 L = 2,25 dm³.", en: "1 liter = 1 dm³. 2.25 L = 2.25 dm³.", nl: "1 liter = 1 dm³. 2,25 L = 2,25 dm³." }
  },
  {
    id: "M1_s_111", category: "M1", level: 3,
    text: { fr: "Convertis 63 km/h en m/s.", en: "Convert 63 km/h to m/s.", nl: "Reken 63 km/u om naar m/s." },
    answer: 17.5, tolerance: 0.01,
    hint: { fr: "63 : 3,6 = 17,5.", en: "63 : 3.6 = 17.5.", nl: "63 : 3,6 = 17,5." }
  },
  {
    id: "M1_s_112", category: "M1", level: 1,
    text: { fr: "Combien de millimètres dans 4,5 cm ?", en: "How many millimeters in 4.5 cm?", nl: "Hoeveel millimeter in 4,5 cm?" },
    answer: 45, tolerance: 0,
    hint: { fr: "1 cm = 10 mm. 4,5 . 10 = 45.", en: "1 cm = 10 mm. 4.5 . 10 = 45.", nl: "1 cm = 10 mm. 4,5 . 10 = 45." }
  },
  {
    id: "M1_s_113", category: "M1", level: 1,
    text: { fr: "Combien de secondes dans 5 minutes ?", en: "How many seconds in 5 minutes?", nl: "Hoeveel seconden in 5 minuten?" },
    answer: 300, tolerance: 0,
    hint: { fr: "1 min = 60 s. 5 . 60 = 300.", en: "1 min = 60 s. 5 . 60 = 300.", nl: "1 min = 60 s. 5 . 60 = 300." }
  },
  {
    id: "M1_s_114", category: "M1", level: 1,
    text: { fr: "Combien de centilitres dans 3,2 litres ?", en: "How many centiliters in 3.2 liters?", nl: "Hoeveel centiliter in 3,2 liter?" },
    answer: 320, tolerance: 0,
    hint: { fr: "1 L = 100 cL. 3,2 . 100 = 320.", en: "1 L = 100 cL. 3.2 . 100 = 320.", nl: "1 L = 100 cL. 3,2 . 100 = 320." }
  },
  {
    id: "M1_s_115", category: "M1", level: 2,
    text: { fr: "Combien de kg dans 4 750 g ?", en: "How many kg in 4,750 g?", nl: "Hoeveel kg in 4750 g?" },
    answer: 4.75, tolerance: 0.01,
    hint: { fr: "1 kg = 1000 g. 4750 : 1000 = 4,75.", en: "1 kg = 1000 g. 4,750 : 1,000 = 4.75.", nl: "1 kg = 1000 g. 4750 : 1000 = 4,75." }
  },
  {
    id: "M1_s_116", category: "M1", level: 2,
    text: { fr: "Convertis 2 h 45 min en minutes.", en: "Convert 2 h 45 min to minutes.", nl: "Reken 2 u 45 min om naar minuten." },
    answer: 165, tolerance: 0,
    hint: { fr: "2 . 60 + 45 = 120 + 45 = 165.", en: "2 . 60 + 45 = 120 + 45 = 165.", nl: "2 . 60 + 45 = 120 + 45 = 165." }
  },
  {
    id: "M1_s_117", category: "M1", level: 3,
    text: { fr: "Convertis 90 km/h en m/s.", en: "Convert 90 km/h to m/s.", nl: "Reken 90 km/u om naar m/s." },
    answer: 25, tolerance: 0,
    hint: { fr: "90 : 3,6 = 25.", en: "90 : 3.6 = 25.", nl: "90 : 3,6 = 25." }
  },
  {
    id: "M1_s_118", category: "M1", level: 3,
    text: { fr: "Un terrain rectangulaire mesure 120 m par 85 m. Quelle est sa superficie en ares ?", en: "A rectangular field measures 120 m by 85 m. What is its area in ares?", nl: "Een rechthoekig terrein is 120 m bij 85 m. Wat is de oppervlakte in are?" },
    answer: 102, tolerance: 0,
    hint: { fr: "Superficie = 120 . 85 = 10 200 m². 1 are = 100 m². 10 200 : 100 = 102.", en: "Area = 120 . 85 = 10,200 m². 1 are = 100 m². 10,200 : 100 = 102.", nl: "Oppervlakte = 120 . 85 = 10.200 m². 1 are = 100 m². 10.200 : 100 = 102." }
  },
];

export function generate(level = 1) {
  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const id = `M1_gen_${Date.now()}_${rand(100, 999)}`;
  if (level === 1) {
    const km = rand(1, 20) + rand(0, 9) / 10;
    return { id, category: 'M1', level, text: { fr: `Combien de mètres dans ${km.toFixed(1).replace('.', ',')} km ?`, en: `How many meters in ${km.toFixed(1)} km?`, nl: `Hoeveel meter in ${km.toFixed(1).replace('.', ',')} km?` }, answer: km * 1000, tolerance: 0 };
  }
  if (level === 2) {
    const g = rand(100, 9999);
    const answer = Math.round(g / 10) / 100;
    return { id, category: 'M1', level, text: { fr: `Combien de kg dans ${g} g ?`, en: `How many kg in ${g} g?`, nl: `Hoeveel kg in ${g} g?` }, answer: g / 1000, tolerance: 0.01 };
  }
  const kmh = rand(2, 30) * 3.6;
  const rounded = Math.round(kmh * 10) / 10;
  return { id, category: 'M1', level, text: { fr: `Convertis ${rounded.toString().replace('.', ',')} km/h en m/s.`, en: `Convert ${rounded} km/h to m/s.`, nl: `Reken ${rounded.toString().replace('.', ',')} km/u om naar m/s.` }, answer: Math.round(rounded / 3.6 * 100) / 100, tolerance: 0.1 };
}
