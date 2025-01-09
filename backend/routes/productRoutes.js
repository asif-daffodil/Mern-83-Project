import express from 'express';
import getLatestProducts from '../controllers/productController.js';

const router = express.Router();

router.get('/', getLatestProducts);

export default router;