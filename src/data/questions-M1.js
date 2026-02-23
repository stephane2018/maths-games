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
    hint: { fr: "1 km = 1000 m. 0,25 × 1000 = 250.", en: "1 km = 1000 m. 0.25 × 1000 = 250.", nl: "1 km = 1000 m. 0,25 × 1000 = 250." }
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
    hint: { fr: "1 kg = 1000 g. 0,75 × 1000 = 750.", en: "1 kg = 1000 g. 0.75 × 1000 = 750.", nl: "1 kg = 1000 g. 0,75 × 1000 = 750." }
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
    hint: { fr: "1,5 × 60 = 90.", en: "1.5 × 60 = 90.", nl: "1,5 × 60 = 90." }
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
    hint: { fr: "2 × 60 + 30 = 150.", en: "2 × 60 + 30 = 150.", nl: "2 × 60 + 30 = 150." }
  },
  {
    id: "M1_s_9", category: "M1", level: 2,
    text: { fr: "Combien de litres dans 4500 mL ?", en: "How many liters in 4500 mL?", nl: "Hoeveel liter in 4500 mL?" },
    answer: 4.5, tolerance: 0.01,
    hint: { fr: "4500 ÷ 1000 = 4,5.", en: "4500 ÷ 1000 = 4.5.", nl: "4500 ÷ 1000 = 4,5." }
  },
  {
    id: "M1_s_10", category: "M1", level: 2,
    text: { fr: "Combien de kg dans 2300 g ?", en: "How many kg in 2300 g?", nl: "Hoeveel kg in 2300 g?" },
    answer: 2.3, tolerance: 0.01,
    hint: { fr: "2300 ÷ 1000 = 2,3.", en: "2300 ÷ 1000 = 2.3.", nl: "2300 ÷ 1000 = 2,3." }
  },
  {
    id: "M1_s_28", category: "M1", level: 2,
    text: { fr: "Combien de cm² dans 3,2 dm² ?", en: "How many cm² in 3.2 dm²?", nl: "Hoeveel cm² in 3,2 dm²?" },
    answer: 320, tolerance: 0,
    hint: { fr: "1 dm² = 100 cm². 3,2 × 100 = 320.", en: "1 dm² = 100 cm². 3.2 × 100 = 320.", nl: "1 dm² = 100 cm². 3,2 × 100 = 320." }
  },
  {
    id: "M1_s_29", category: "M1", level: 2,
    text: { fr: "Combien de mm dans 1,35 m ?", en: "How many mm in 1.35 m?", nl: "Hoeveel mm in 1,35 m?" },
    answer: 1350, tolerance: 0,
    hint: { fr: "1 m = 1000 mm. 1,35 × 1000 = 1350.", en: "1 m = 1000 mm. 1.35 × 1000 = 1350.", nl: "1 m = 1000 mm. 1,35 × 1000 = 1350." }
  },
  {
    id: "M1_s_30", category: "M1", level: 2,
    text: { fr: "Convertis 1h45min en minutes.", en: "Convert 1h45min to minutes.", nl: "Reken 1u45min om naar minuten." },
    answer: 105, tolerance: 0,
    hint: { fr: "1 × 60 + 45 = 105.", en: "1 × 60 + 45 = 105.", nl: "1 × 60 + 45 = 105." }
  },
  {
    id: "M1_s_31", category: "M1", level: 2,
    text: { fr: "Combien de litres dans 750 mL ?", en: "How many liters in 750 mL?", nl: "Hoeveel liter in 750 mL?" },
    answer: 0.75, tolerance: 0.01,
    hint: { fr: "750 ÷ 1000 = 0,75.", en: "750 ÷ 1000 = 0.75.", nl: "750 ÷ 1000 = 0,75." }
  },
  {
    id: "M1_s_32", category: "M1", level: 2,
    text: { fr: "Combien de kg dans 6800 g ?", en: "How many kg in 6800 g?", nl: "Hoeveel kg in 6800 g?" },
    answer: 6.8, tolerance: 0.01,
    hint: { fr: "6800 ÷ 1000 = 6,8.", en: "6800 ÷ 1000 = 6.8.", nl: "6800 ÷ 1000 = 6,8." }
  },
  {
    id: "M1_s_33", category: "M1", level: 2,
    text: { fr: "Combien de mètres dans 850 cm ?", en: "How many meters in 850 cm?", nl: "Hoeveel meter in 850 cm?" },
    answer: 8.5, tolerance: 0.01,
    hint: { fr: "850 ÷ 100 = 8,5.", en: "850 ÷ 100 = 8.5.", nl: "850 ÷ 100 = 8,5." }
  },
  {
    id: "M1_s_34", category: "M1", level: 2,
    text: { fr: "Combien de km dans 4600 m ?", en: "How many km in 4600 m?", nl: "Hoeveel km in 4600 m?" },
    answer: 4.6, tolerance: 0.01,
    hint: { fr: "4600 ÷ 1000 = 4,6.", en: "4600 ÷ 1000 = 4.6.", nl: "4600 ÷ 1000 = 4,6." }
  },
  {
    id: "M1_s_35", category: "M1", level: 2,
    text: { fr: "Convertis 3h15min en minutes.", en: "Convert 3h15min to minutes.", nl: "Reken 3u15min om naar minuten." },
    answer: 195, tolerance: 0,
    hint: { fr: "3 × 60 + 15 = 195.", en: "3 × 60 + 15 = 195.", nl: "3 × 60 + 15 = 195." }
  },
  {
    id: "M1_s_36", category: "M1", level: 2,
    text: { fr: "Combien de litres dans 1250 mL ?", en: "How many liters in 1250 mL?", nl: "Hoeveel liter in 1250 mL?" },
    answer: 1.25, tolerance: 0.01,
    hint: { fr: "1250 ÷ 1000 = 1,25.", en: "1250 ÷ 1000 = 1.25.", nl: "1250 ÷ 1000 = 1,25." }
  },
  {
    id: "M1_s_37", category: "M1", level: 2,
    text: { fr: "Combien de secondes dans 3,5 minutes ?", en: "How many seconds in 3.5 minutes?", nl: "Hoeveel seconden in 3,5 minuten?" },
    answer: 210, tolerance: 0,
    hint: { fr: "3,5 × 60 = 210.", en: "3.5 × 60 = 210.", nl: "3,5 × 60 = 210." }
  },
  {
    id: "M1_s_38", category: "M1", level: 2,
    text: { fr: "Combien de cm dans 2,75 m ?", en: "How many cm in 2.75 m?", nl: "Hoeveel cm in 2,75 m?" },
    answer: 275, tolerance: 0,
    hint: { fr: "1 m = 100 cm. 2,75 × 100 = 275.", en: "1 m = 100 cm. 2.75 × 100 = 275.", nl: "1 m = 100 cm. 2,75 × 100 = 275." }
  },
  {
    id: "M1_s_39", category: "M1", level: 2,
    text: { fr: "Combien de mm dans 6,2 cm ?", en: "How many mm in 6.2 cm?", nl: "Hoeveel mm in 6,2 cm?" },
    answer: 62, tolerance: 0,
    hint: { fr: "1 cm = 10 mm. 6,2 × 10 = 62.", en: "1 cm = 10 mm. 6.2 × 10 = 62.", nl: "1 cm = 10 mm. 6,2 × 10 = 62." }
  },

  // =========================================================================
  // Level 3 — Area/volume conversions, speed (~16 questions: 11–15, 40–50)
  // =========================================================================
  {
    id: "M1_s_11", category: "M1", level: 3,
    text: { fr: "Convertis 45 000 cm² en m².", en: "Convert 45,000 cm² to m².", nl: "Reken 45.000 cm² om naar m²." },
    answer: 4.5, tolerance: 0.01,
    hint: { fr: "1 m² = 10 000 cm². Donc 45 000 ÷ 10 000.", en: "1 m² = 10,000 cm². So 45,000 ÷ 10,000.", nl: "1 m² = 10.000 cm². Dus 45.000 ÷ 10.000." }
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
    hint: { fr: "2,5 × 60 = 150.", en: "2.5 × 60 = 150.", nl: "2,5 × 60 = 150." }
  },
  {
    id: "M1_s_14", category: "M1", level: 3,
    text: { fr: "Combien de m² dans 0,08 hectare ?", en: "How many m² in 0.08 hectare?", nl: "Hoeveel m² in 0,08 hectare?" },
    answer: 800, tolerance: 0,
    hint: { fr: "1 ha = 10 000 m². Donc 0,08 × 10 000.", en: "1 ha = 10,000 m². So 0.08 × 10,000.", nl: "1 ha = 10.000 m². Dus 0,08 × 10.000." }
  },
  {
    id: "M1_s_15", category: "M1", level: 3,
    text: { fr: "Convertis 72 km/h en m/s.", en: "Convert 72 km/h to m/s.", nl: "Reken 72 km/u om naar m/s." },
    answer: 20, tolerance: 0.01,
    hint: { fr: "÷ 3,6 : 72 ÷ 3,6 = 20.", en: "÷ 3.6: 72 ÷ 3.6 = 20.", nl: "÷ 3,6: 72 ÷ 3,6 = 20." }
  },
  {
    id: "M1_s_40", category: "M1", level: 3,
    text: { fr: "Convertis 30 000 cm² en m².", en: "Convert 30,000 cm² to m².", nl: "Reken 30.000 cm² om naar m²." },
    answer: 3, tolerance: 0.01,
    hint: { fr: "1 m² = 10 000 cm². 30 000 ÷ 10 000 = 3.", en: "1 m² = 10,000 cm². 30,000 ÷ 10,000 = 3.", nl: "1 m² = 10.000 cm². 30.000 ÷ 10.000 = 3." }
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
    hint: { fr: "3,75 × 60 = 225.", en: "3.75 × 60 = 225.", nl: "3,75 × 60 = 225." }
  },
  {
    id: "M1_s_43", category: "M1", level: 3,
    text: { fr: "Combien de m² dans 1,5 hectare ?", en: "How many m² in 1.5 hectares?", nl: "Hoeveel m² in 1,5 hectare?" },
    answer: 15000, tolerance: 0,
    hint: { fr: "1 ha = 10 000 m². 1,5 × 10 000 = 15 000.", en: "1 ha = 10,000 m². 1.5 × 10,000 = 15,000.", nl: "1 ha = 10.000 m². 1,5 × 10.000 = 15.000." }
  },
  {
    id: "M1_s_44", category: "M1", level: 3,
    text: { fr: "Convertis 90 km/h en m/s.", en: "Convert 90 km/h to m/s.", nl: "Reken 90 km/u om naar m/s." },
    answer: 25, tolerance: 0.01,
    hint: { fr: "90 ÷ 3,6 = 25.", en: "90 ÷ 3.6 = 25.", nl: "90 ÷ 3,6 = 25." }
  },
  {
    id: "M1_s_45", category: "M1", level: 3,
    text: { fr: "Convertis 7500 cm² en m².", en: "Convert 7,500 cm² to m².", nl: "Reken 7500 cm² om naar m²." },
    answer: 0.75, tolerance: 0.01,
    hint: { fr: "1 m² = 10 000 cm². 7500 ÷ 10 000 = 0,75.", en: "1 m² = 10,000 cm². 7,500 ÷ 10,000 = 0.75.", nl: "1 m² = 10.000 cm². 7500 ÷ 10.000 = 0,75." }
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
    hint: { fr: "108 ÷ 3,6 = 30.", en: "108 ÷ 3.6 = 30.", nl: "108 ÷ 3,6 = 30." }
  },
  {
    id: "M1_s_48", category: "M1", level: 3,
    text: { fr: "Combien de m² dans 0,35 hectare ?", en: "How many m² in 0.35 hectares?", nl: "Hoeveel m² in 0,35 hectare?" },
    answer: 3500, tolerance: 0,
    hint: { fr: "1 ha = 10 000 m². 0,35 × 10 000 = 3500.", en: "1 ha = 10,000 m². 0.35 × 10,000 = 3,500.", nl: "1 ha = 10.000 m². 0,35 × 10.000 = 3500." }
  },
  {
    id: "M1_s_49", category: "M1", level: 3,
    text: { fr: "Convertis 1,25 heures en minutes.", en: "Convert 1.25 hours to minutes.", nl: "Reken 1,25 uur om naar minuten." },
    answer: 75, tolerance: 0,
    hint: { fr: "1,25 × 60 = 75.", en: "1.25 × 60 = 75.", nl: "1,25 × 60 = 75." }
  },
  {
    id: "M1_s_50", category: "M1", level: 3,
    text: { fr: "Convertis 54 km/h en m/s.", en: "Convert 54 km/h to m/s.", nl: "Reken 54 km/u om naar m/s." },
    answer: 15, tolerance: 0.01,
    hint: { fr: "54 ÷ 3,6 = 15.", en: "54 ÷ 3.6 = 15.", nl: "54 ÷ 3,6 = 15." }
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
