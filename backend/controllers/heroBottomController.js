import HeroBottom from '../models/heroBottom.js';

const getHeroBottomData = async (req, res) => {
    try {
        const data = await HeroBottom.find();
        res.status(200).send(data);
    } catch (error) {
        res.status(400).send(error);
    }
};

export default getHeroBottomData;