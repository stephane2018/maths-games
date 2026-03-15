# Maths Games - Application Desktop Educative

Application de quiz mathématiques pour les salles de classe, basee sur le programme CE1D belge.
Les eleves s'affrontent en duel et repondent a des questions dans un temps imparti.

## Stack Technique

| Couche | Technologie |
|---|---|
| UI | React + Tailwind CSS |
| Game engine | Phaser |
| Desktop shell | Tauri (Rust) |
| Base de donnees locale | SQLite + SQLCipher (chiffre) |
| Auth & Licences | Supabase |
| Paiements | Stripe |

## Architecture

```
┌─────────────────────────────────────────┐
│  APPLICATION TAURI                      │
│                                         │
│  React (UI)                             │
│  ├── Vue Enseignant                     │
│  │   ├── Creer salle de classe          │
│  │   ├── Gerer eleves                   │
│  │   ├── Editeur de questions custom    │
│  │   └── Dashboard / Statistiques       │
│  └── Vue Jeu (plein ecran)              │
│      ├── Mode Duel (1v1)                │
│      ├── Mode Solo                      │
│      ├── Mode Tournoi (bracket)         │
│      ├── Mode Equipe                    │
│      └── Mode Revision (sans timer)     │
│                                         │
│  Rust (backend compile)                 │
│  ├── Logique de licence                 │
│  ├── Chiffrement SQLite                 │
│  └── Verification machine_id            │
│                                         │
│  SQLite (local, chiffre)                │
│  ├── Questions (2500+ de base)          │
│  ├── Questions custom (enseignant)      │
│  ├── Eleves & classes                   │
│  └── Historique & scores                │
└────────────────┬────────────────────────┘
                 │ HTTPS
                 ▼
┌─────────────────────────────────────────┐
│  SUPABASE (en ligne)                    │
│  ├── Verification licence freemium      │
│  ├── Stripe (paiements)                 │
│  └── Logs d'utilisation                 │
└─────────────────────────────────────────┘
```

## Contenu pedagogique

- **27 categories** : Nombres, Geometrie, Algebre, Puissances, Statistiques
- **2500+ questions** redigees manuellement
- **3 niveaux de difficulte** par categorie
- **3 langues** : Francais, Anglais, Neerlandais
- **4 types de reponse** : numerique, fraction, expression algebrique, texte

## MVP - Etapes de developpement

### Phase 1 : Setup Tauri + SQLite
- [ ] Installer Rust et Tauri CLI
- [ ] Initialiser Tauri dans le projet React existant
- [ ] Configurer SQLite avec tauri-plugin-sql
- [ ] Migrer les questions JS vers SQLite

### Phase 2 : Vue Enseignant
- [ ] Ecran creation de classe
- [ ] Ajout / gestion des eleves (prenom + initiale uniquement)
- [ ] Selection des categories pour la session

### Phase 3 : Mode Duel (adapter l'existant)
- [ ] Adapter le jeu React/Phaser existant dans Tauri
- [ ] Timer et scoring fonctionnels
- [ ] Transition entre les ecrans enseignant et jeu

### Phase 4 : Dashboard basique
- [ ] Scores par eleve
- [ ] Historique des parties
- [ ] Points forts / points faibles par categorie

### Phase 5 : Systeme de licence Freemium
- [ ] Integration Supabase pour verification licence
- [ ] Integration Stripe pour paiements
- [ ] Logique de licence en Rust (cote backend)
- [ ] Cache licence locale (7 jours offline)

### Phase 6 : Questions custom
- [ ] Formulaire d'ajout de questions pour l'enseignant
- [ ] Stockage dans SQLite (separe des questions de base)
- [ ] Merge avec le QuestionEngine existant

## Fonctionnalites futures (post-MVP)

- Mode Solo (entrainement contre le chrono)
- Mode Tournoi (bracket eliminatoire toute la classe)
- Mode Equipe (2 equipes s'affrontent)
- Mode Revision (sans timer, sans score)
- Algorithme adaptatif (repropose les questions ratees)
- Profils eleves avec avatars
- Groupes de niveau (faible/moyen/fort)
- Export PDF progression pour les parents
- Themes visuels (espace, jungle, ocean...) en premium
- Multi-enseignant sur le meme PC
- Import/export de packs de questions (CSV/JSON)
- Alertes enseignant ("5 eleves < 30% en geometrie")
- Planification des categories de la semaine

## Modele Freemium

| | Gratuit | Premium |
|---|---|---|
| Classes | 1 classe, 15 eleves | Illimite |
| Categories | 5 | Toutes (27) |
| Modes de jeu | Duel uniquement | Tous les modes |
| Dashboard | Non | Complet |
| Export PDF | Non | Oui |
| Themes visuels | 1 | Tous |
| Questions custom | Non | Illimite |

## Securite

### Protection anti-reverse engineering
| Priorite | Protection |
|---|---|
| Must | Logique sensible en Rust (compile, difficile a reverse) |
| Must | Validation licence en ligne (Supabase) |
| Important | Obfuscation JS (vite-plugin-obfuscator) |
| Important | SQLite chiffre (SQLCipher) |
| Bonus | Licence liee a la machine (machine_id) |
| Bonus | DevTools desactives en production |

### Protection des donnees
- **RGPD / Mineurs** : prenom + initiale uniquement, pas de photos, suppression en 1 clic
- **Offline first** : tout fonctionne sans internet, licence cachee 7 jours
- **Crash recovery** : sauvegarde automatique toutes les 30 secondes
- **Backup** : export/import des donnees en fichier chiffre
- **Transit** : HTTPS obligatoire + certificate pinning vers Supabase

### Config Tauri securisee
```json
{
  "tauri": {
    "security": {
      "csp": "default-src 'self'",
      "devtools": false,
      "freezePrototype": true
    }
  }
}
```

## Prerequis de developpement

```bash
# Installer Rust
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

# Installer Tauri CLI
npm install --save-dev @tauri-apps/cli

# Initialiser Tauri dans le projet
npx tauri init
```

## Scripts

```bash
# Dev (React + Tauri)
npm run tauri dev

# Build production (Windows .msi / Mac .dmg)
npm run tauri build
```
