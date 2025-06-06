import express from 'express';
import { getAllSaxophones } from '../controllers/saxophoneController.js';

const router = express.Router();

router.get('/', getAllSaxophones);

export default router;
