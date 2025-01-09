import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import connectDB from './config/db.js';
import heroBottomRoutes from './routes/heroBottomRoutes.js';
import productRoutes from './routes/productRoutes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Connect to the database
connectDB();

// Routes
app.use('/heroBottom', heroBottomRoutes);
app.use('/latestProducts', productRoutes);

// Default route
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});