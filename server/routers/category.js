import express from 'express';
import * as Category from '../controllers/CategoryController.js';

const router = express.Router();

router.get('/', Category.getCategories);
router.post('/', Category.createCategory);
router.put('/', Category.updateCategory);

export default router;
