import hero from "./Hero.module.css";
import banner from '../../../assets/images/banner.jpg';

const Hero = () => {
    return (
        <div
            className="hero min-h-[80vh] bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(${banner})`,
            }}>
            <div className="hero-overlay bg-white dark:bg-black bg-opacity-60 dark:bg-opacity-50"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className={`mb-5 text-5xl font-bold text-[#000] dark:text-[#FFF] ${hero.h1}`}>Hello there</h1>
                    <p className="mb-5 text-[#121212] dark:text-[#FFF] text-[22px] ">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary text-[#000] dark:text-[#FFF]">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;