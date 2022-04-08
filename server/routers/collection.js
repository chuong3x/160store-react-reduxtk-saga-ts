import express from 'express';
import * as Product from '../controllers/ProductController.js';

const router = express.Router();

router.get('/', Product.getProducts);
router.get('/newproducts', Product.getNewCollection);
router.get('/:slug', Product.getCollection);
// router.get('/sale', Product.getSaleCollection);
router.post('/', Product.createCollection);
router.put('/', Product.updateCollection);

export default router;
