import { pool } from './database.js';

export async function getSaxophones() {
  const result = await pool.query('SELECT * FROM saxophone ORDER BY id');
  return result.rows;
}