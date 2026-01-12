require('dotenv').config();

module.exports = {
  DB_HOST: process.env.DB_HOST || 'localhost',
  DB_USER: process.env.DB_USER || 'root',
  DB_PASS: process.env.DB_PASS || '',
  DB_NAME: process.env.DB_NAME || 'gestion_immobiliere',
  JWT_SECRET: process.env.JWT_SECRET || 'votre_secret_jwt',
  PORT: process.env.PORT || 3000
};