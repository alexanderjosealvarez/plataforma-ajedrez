import { createPool } from 'mysql2/promise';

export const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'plataforma_ajedrez',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
};

export const pool = createPool(dbConfig);