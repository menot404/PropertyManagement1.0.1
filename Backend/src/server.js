const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes'); // Adapter le chemin si nécessaire

const app = express();

// Middleware
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

// Routes
app.use('/api', authRoutes);

// Route de test
app.get('/', (req, res) => {
  res.json({ message: 'API Backend fonctionnelle ✅' });
});

// Exporter l'application
module.exports = app;