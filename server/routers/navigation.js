import express from 'express';
import * as Navigation from '../controllers/NavigationController.js';

const router = express.Router();

router.get('/', Navigation.getNavigations);
router.post('/', Navigation.createNavigation);
router.put('/', Navigation.updateNavigation);

export default router;
