require('dotenv').config(); // Charger les variables d'environnement

const app = require('./src/server'); // Importer l'app depuis server.js

const PORT = process.env.PORT || 3000;

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`🚀 Serveur backend sur http://localhost:${PORT}`);
});