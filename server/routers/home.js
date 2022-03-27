import express from 'express';
import { homeController } from '../controllers/HomeController.js';

const router = express.Router();

router.get('/', homeController);

export default router;
