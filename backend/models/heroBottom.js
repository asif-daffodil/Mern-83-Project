import mongoose from 'mongoose';

const heroBottomSchema = new mongoose.Schema({
    title: String,
    description: String,
    icon: String,
});

const HeroBottom = mongoose.model('HeroBottom', heroBottomSchema);
export default HeroBottom;