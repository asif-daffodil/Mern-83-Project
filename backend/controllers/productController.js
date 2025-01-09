import Product from '../models/product.js';

const getLatestProducts = async (req, res) => {
    try {
        const data = await Product.find().sort({ _id: -1 }).limit(6);
        res.status(200).send(data);
    } catch (error) {
        res.status(400).send(error);
    }
};

export default getLatestProducts;