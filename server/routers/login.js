import express from 'express';
import * as User from '../controllers/UserController.js';

const router = express.Router();

// router.get('/', User.getUsers);
router.post('/', User.login);
router.put('/', User.updateUser);

export default router;
