import express from 'express';
import * as User from '../controllers/UserController.js';

const router = express.Router();

router.post('/', User.createUser);

export default router;
