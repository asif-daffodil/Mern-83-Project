const express = require('express');
const app = express();

// env
require('dotenv').config();

// port
const port = process.env.PORT;

// cors
const cors = require('cors');
app.use(cors());

// body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// multer
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
    });
const upload = multer({ storage: storage });

// static
app.use(express.static('public'));

//  mongoose
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL);

//  heroBottom schema
const heroBottomSchema = new mongoose.Schema({
    title: String,
    description: String,
    icon: String
});

const HeroBottom = mongoose.model('HeroBottom', heroBottomSchema);

//  heroBottom routes getData
app.get('/heroBottom', (req, res) => {
    try{
        HeroBottom.find().then((data) => {
            res.send(data).status(200);
        });
    }catch(e){
        res.send(e).status(400);
    }
});

// get latest products
const productSchema = new mongoose.Schema({
    title: String,
    img: String,
    old_price: Number,
    sale_price: Number,
    short_description: String
});

const Product = mongoose.model('Product', productSchema);

app.get('/latestProducts', (req, res) => {
    try {
        Product.find().sort({ _id: -1 }).limit(6).then((data) => {
            res.send(data).status(200);
        });
    } catch (e) {
        res.send(e).status(400);
    }
});



// routes
app.get('/', (req, res) => {
    res.send('Hello World');
});

// create server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
