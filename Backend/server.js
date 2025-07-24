const express = require('express');
const env = require('./config/env');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Middleware
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

// Routes
app.use('/api', authRoutes);

// Démarrer le serveur
const PORT = env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur backend sur http://localhost:${PORT}`);
});