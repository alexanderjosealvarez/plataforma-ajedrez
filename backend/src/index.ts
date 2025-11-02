import express from 'express';
import cors from 'cors';
import { pool } from './config/database';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Ruta de salud MEJORADA - ahora verifica la base de datos también
app.get('/health', async (req, res) => {
  try {
    // Verificar conexión a la base de datos
    const [rows] = await pool.execute('SELECT 1 + 1 as result');
    
    res.json({ 
      status: 'OK', 
      message: '♟️ Backend Plataforma Ajedrez funcionando',
      database: 'Conectado ✅',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    res.status(500).json({
      status: 'ERROR',
      message: 'Problema con la base de datos',
      database: 'Desconectado ❌',
      timestamp: new Date().toISOString()
    });
  }
});

// Ruta para crear tablas iniciales (la usaremos después)
app.get('/api/setup-database', async (req, res) => {
  try {
    res.json({ message: 'Base de datos lista para configurar' });
  } catch (error) {
    res.status(500).json({ error: 'Error configurando BD' });
  }
});

// Ruta básica de prueba de ajedrez (la que ya tenías)
app.get('/api/chess/test', (req, res) => {
  res.json({ 
    message: 'Servidor de ajedrez activo',
    features: ['Tablero interactivo', 'Motor de IA', 'Clases en vivo']
  });
});

// Ruta de bienvenida en la raíz
app.get('/', (req, res) => {
  res.json({ 
    message: '♟️ Bienvenido a la Plataforma de Ajedrez',
    version: '1.0.0',
    endpoints: {
      health: '/health',
      chess_test: '/api/chess/test',
      database_setup: '/api/setup-database'
    }
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor backend corriendo en puerto ${PORT}`);
  console.log(`📍 Health check: http://localhost:${PORT}/health`);
});