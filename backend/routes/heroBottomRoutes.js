import express from 'express';
import getHeroBottomData from '../controllers/heroBottomController.js';

const router = express.Router();

router.get('/', getHeroBottomData);

export default router;