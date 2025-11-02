import express from 'express';
import cors from 'cors';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: '♟️ Backend Plataforma Ajedrez funcionando',
    timestamp: new Date().toISOString()
  });
});

app.get('/api/chess/test', (req, res) => {
  res.json({ 
    message: 'Servidor de ajedrez activo',
    features: ['Tablero interactivo', 'Motor de IA', 'Clases en vivo']
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor backend corriendo en puerto ${PORT}`);
});