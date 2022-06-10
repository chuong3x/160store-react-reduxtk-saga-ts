import express from 'express';
import * as User from '../controllers/UserController.js';
import { verifyRefreshToken } from '../utils/auth.js';

const router = express.Router();

// router.get('/', User.getUsers);
router.post('/', verifyRefreshToken, User.refreshToken);

export default router;
