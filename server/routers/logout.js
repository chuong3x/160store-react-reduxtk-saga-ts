import express from 'express';
import * as User from '../controllers/UserController.js';

const router = express.Router();

router.post('/', User.logout);

export default router;
