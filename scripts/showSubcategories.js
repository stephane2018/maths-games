// =============================================================================
// Affiche toutes les sous-catégories disponibles
// =============================================================================

import { CE1D_THEMES, getAllSubcategories, getSubcategories } from '../src/data/ce1dThemes.js';

console.log('\n📚 SOUS-CATÉGORIES DE QUESTIONS CE1D\n');
console.log('='.repeat(80));

// Afficher par thème
CE1D_THEMES.forEach((theme, index) => {
  console.log(`\n${index + 1}. ${theme.icon} ${theme.name.fr.toUpperCase()} (${theme.categories.length} sous-catégories)`);
  console.log(`   Couleur: ${theme.color}`);
  console.log(`   ID: ${theme.id}`);
  console.log('   ' + '-'.repeat(76));

  theme.subcategories.forEach((subcat, i) => {
    console.log(`   ${subcat.code} | ${subcat.name.fr.padEnd(35)} | ${subcat.name.en.padEnd(30)} | ${subcat.name.nl}`);
  });
});

console.log('\n' + '='.repeat(80));
console.log(`\n📊 TOTAL: ${getAllSubcategories().length} sous-catégories disponibles\n`);

// Afficher les codes par thème
console.log('📋 CODES PAR THÈME:\n');
CE1D_THEMES.forEach(theme => {
  console.log(`   ${theme.icon} ${theme.name.fr.padEnd(25)} : ${theme.categories.join(', ')}`);
});

console.log('\n' + '='.repeat(80) + '\n');
