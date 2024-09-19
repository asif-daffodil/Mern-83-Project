import { faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeroBottom = () => {
    return (
        <div className="py-5 dark:bg-neutral">
            <div className="container mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="flex gap-2 border rounded shadow p-3 dark:bg-white">
                        <div className="text-2xl md:text-4xl flex items-center text-blue-500">
                            <FontAwesomeIcon icon={faTruckFast} />
                        </div>
                        <div>
                            <h2 className="text-base lg:text-lg">FREE SHIPPING & RETURN</h2>
                            <p className="text-sm text-stone-500">Free shipping on orders over $99.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroBottom;