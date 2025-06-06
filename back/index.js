import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import saxophoneRouter from './routes/saxophoneRouter.js';

// Seulemetn en dev, une fois sur docker le Dockerfile ira directement chercher dans le .env et rendra la variable process.env dispo.
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/saxophones', saxophoneRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log('Serveur démarré');
});
