const pool = require('../config/db');

class Client {
  static async create(nom, prenom, identifiant, email, telephone, adresse, password) {
    const [result] = await pool.execute(
      `INSERT INTO clients 
      (nom, prenom, identifiant, email, telephone, adresse, password) 
      VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [nom, prenom, identifiant, email, telephone, adresse, password]
    );
    return result.insertId;
  }

  static async findByEmail(email) {
    const [rows] = await pool.execute(
      'SELECT * FROM clients WHERE email = ?',
      [email]
    );
    return rows[0];
  }

  static async findByIdentifiant(identifiant) {
    const [rows] = await pool.execute(
      'SELECT * FROM clients WHERE identifiant = ?',
      [identifiant]
    );
    return rows[0];
  }
}

module.exports = Client;