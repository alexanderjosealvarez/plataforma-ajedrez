import express from 'express';
import cors from 'cors';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Ruta de salud SIMPLE (sin base de datos por ahora)
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: '♟️ Backend Plataforma Ajedrez funcionando',
    timestamp: new Date().toISOString()
  });
});

// Ruta básica de prueba de ajedrez
app.get('/api/chess/test', (req, res) => {
  res.json({ 
    message: 'Servidor de ajedrez activo',
    features: ['Tablero interactivo', 'Motor de IA', 'Clases en vivo']
  });
});

// Ruta de bienvenida
app.get('/', (req, res) => {
  res.json({ 
    message: '♟️ Bienvenido a la Plataforma de Ajedrez',
    version: '1.0.0',
    endpoints: {
      health: '/health',
      chess_test: '/api/chess/test'
    }
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor backend corriendo en puerto ${PORT}`);
});