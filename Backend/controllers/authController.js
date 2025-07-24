const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Client = require('../models/client.js');
const env = require('../config/env.js');

exports.register = async (req, res) => {
  try {
    const { nom, prenom, identifiant, email, telephone, adresse, password } = req.body;

    // Vérifier les doublons
    if (await Client.findByEmail(email)) {
      return res.status(400).json({ message: 'Cet email est déjà utilisé' });
    }
    if (await Client.findByIdentifiant(identifiant)) {
      return res.status(400).json({ message: 'Cet identifiant est déjà pris' });
    }

    // Hacher le mot de passe
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Créer le client
    const clientId = await Client.create(
      nom, 
      prenom, 
      identifiant, 
      email, 
      telephone, 
      adresse, 
      hashedPassword
    );

    // Générer le token JWT
    const token = jwt.sign({ id: clientId }, env.JWT_SECRET, { expiresIn: '24h' });

    res.status(201).json({
      message: 'Client créé avec succès',
      token,
      client: { id: clientId, identifiant, email }
    });
    
  } catch (error) {
    console.error('Erreur inscription:', error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};