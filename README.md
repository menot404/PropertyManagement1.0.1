# GestionImmobilière - Plateforme Complète de Gestion Immobilière

GestionImmobilière est une solution complète de gestion immobilière conçue pour les agences et gestionnaires de biens. Cette application web moderne offre un ensemble complet d'outils pour gérer efficacement les biens immobiliers, les rendez-vous, les agents et les clients, avec des rapports analytiques puissants.

## Fonctionnalités Clés

- 📊 **Tableau de bord interactif** avec indicateurs de performance en temps réel
- 🏠 **Gestion centralisée des biens immobiliers** (villas, appartements, terrains)
- 📅 **Calendrier intelligent** pour la planification des visites et rendez-vous
- 👥 **Gestion des équipes** (agents) et des clients
- 📈 **Rapports analytiques** avec visualisations de données avancées
- 🔒 **Système de sécurité robuste** avec authentification par rôle
- 📤 **Export de données** (PDF, Excel, CSV)
- 📱 **Design responsive** pour tous les appareils

## Technologies Utilisées

### Frontend
- **React** (v18) - Bibliothèque JavaScript pour les interfaces utilisateurs
- **Tailwind CSS** - Framework CSS utilitaire
- **React Router** (v6) - Gestion des routes
- **Chart.js** - Bibliothèque de graphiques
- **React Big Calendar** - Composant calendrier
- **Lucide React** - Icônes

### Backend
- **Node.js** - Environnement d'exécution JavaScript
- **Express** - Framework web
- **MySQL** - Base de données relationnelle SQL
- **JWT** (JSON Web Tokens) - Authentification

### Outils
- **Vite** - Outil de build et développement
- **Git** - Contrôle de version
- **npm** - Gestion des paquets

## Installation

Suivez ces étapes pour installer et exécuter le projet localement.

### Prérequis
- Node.js (v14 ou supérieur)
- npm (v7 ou supérieur)
- MySQL (en local ou URI distant)

### Étapes

1. **Installer les dépendances du backend** :
   ```bash
   cd backend
   npm install
   ```

2. **Installer les dépendances du frontend** :
   ```bash
   cd ../frontend
   npm install
   ```

3. **Configurer l'environnement** :
   - Créer un fichier `.env` dans le dossier `backend` basé sur `.env.example`
   - Créer un fichier `.env` dans le dossier `frontend` basé sur `.env.example`

4. **Démarrer le serveur backend** :
   ```bash
   cd ../backend
   npm run server
   ```

5. **Démarrer le serveur frontend** :
   ```bash
   cd ../frontend
   npm run dev
   ```

6. **Accéder à l'application** :
   Ouvrez votre navigateur à l'adresse [http://localhost:5173](http://localhost:5173)

## Structure des Fichiers

```
gestionimmobiliere/
├── backend/                 # Code backend
│   ├── config/              # Configuration de la base de données
│   ├── controllers/         # Contrôleurs pour les routes
│   ├── models/              # Modèles Mongoose
│   ├── routes/              # Définition des routes
│   ├── middlewares/         # Middlewares (authentification, validation)
│   ├── utils/               # Utilitaires
│   ├── .env.example         # Exemple de fichier d'environnement
│   ├── server.js            # Point d'entrée du serveur
│   └── package.json
│
└── frontend/                # Code frontend
    ├── public/              # Fichiers publics
    ├── src/                 # Code source React
    │   ├── components/      # Composants réutilisables
    │   ├── layouts/         # Layouts de l'application
    │   ├── pages/           # Pages de l'application
    │   ├── contexts/        # Contextes React (optionnel)
    │   ├── hooks/           # Hooks personnalisés (optionnel)
    │   ├── utils/           # Utilitaires
    │   ├── App.jsx          # Composant principal
    │   ├── main.jsx         # Point d'entrée
    │   └── .env.example     # Exemple de fichier d'environnement
    ├── .env
    ├── index.html
    ├── package.json
    └── vite.config.js
```

## Utilisation

1. **Inscription/Connexion** :
   - L'application démarre sur la page de connexion
   - Les comptes de démonstration :
     - Manager: `manager@example.com` / `password123`
     - Agent: `agent@example.com` / `password123`

2. **Tableau de bord** :
   - Après connexion, vous accédez au tableau de bord avec les indicateurs clés

3. **Navigation** :
   - Utilisez la sidebar pour naviguer entre les différentes sections

4. **Gestion des biens** :
   - Cliquez sur "Biens Immobiliers" pour accéder à la liste
   - Utilisez les boutons pour ajouter, modifier ou supprimer un bien

5. **Calendrier des RDV** :
   - Dans "Rendez-vous", vous pouvez créer des RDV en cliquant sur un créneau
   - Affichez les détails d'un RDV en cliquant dessus

6. **Rapports** :
   - La section "Rapports" présente des graphiques interactifs
   - Utilisez le menu déroulant pour changer la période

## Project en phase de finition
