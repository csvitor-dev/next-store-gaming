import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path'; 
import gameRoutes from './routes/game.routes';
import { checkAndSeed } from './controller/game.controller';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const MONGO_URL = process.env.MONGODB_URL || 'mongodb://admin:admin123@localhost:27017/gamesdb?authSource=admin';

app.use(cors());
app.use(express.json());

app.use('/images', express.static(path.join(__dirname, '../public/images')));

mongoose.connect(MONGO_URL)
  .then(async () => {
    console.log('📦 Conectado ao MongoDB');
    await checkAndSeed();
  })
  .catch((err) => console.error('Erro ao conectar no MongoDB:', err));

app.use('/games', gameRoutes);

app.get('/', (req, res) => {
  res.send('API da Loja de Jogos rodando 🚀. Acesse /images para ver arquivos estáticos.');
});

app.listen(PORT, () => {
  console.log(`🔥 Servidor rodando na porta ${PORT}...`);
  console.log(`📂 Servindo imagens rodando...`);
});