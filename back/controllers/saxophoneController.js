import { pool } from '../database/database.js';

export async function getAllSaxophones(req, res) {
  try {
    const result = await pool.query('SELECT * FROM saxophone');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
}