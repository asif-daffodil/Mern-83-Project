import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    title: String,
    img: String,
    old_price: Number,
    sale_price: Number,
    short_description: String,
});

const Product = mongoose.model('Product', productSchema);

export default Product;