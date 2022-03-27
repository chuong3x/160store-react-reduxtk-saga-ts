import express from 'express';
import * as Product from '../controllers/ProductController.js';

const router = express.Router();

router.get('/', Product.getProducts);
router.post('/', Product.createProduct);
router.put('/', Product.updateProduct);

export default router;
