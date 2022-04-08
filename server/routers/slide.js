import express from 'express';
import * as Slide from '../controllers/SlideController.js';

const router = express.Router();

router.get('/', Slide.getSlides);
router.post('/', Slide.createSlide);
router.put('/', Slide.updateSlide);

export default router;
