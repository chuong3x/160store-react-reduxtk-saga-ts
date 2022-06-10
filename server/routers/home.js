import express from 'express';
import { homeController } from '../controllers/HomeController.js';
import { verifyAccessToken } from '../utils/auth.js';

const router = express.Router();

router.get('/', verifyAccessToken, homeController);

export default router;
