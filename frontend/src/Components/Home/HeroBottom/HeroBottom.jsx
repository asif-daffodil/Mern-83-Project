import { faClock, faCreditCard, faDollar, faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const iconMap = {
    clock: faClock,
    creditCard: faCreditCard,
    dollar: faDollar,
    truckFast: faTruckFast,
};

const HeroBottom = () => {
    const heroBottom = useQuery({
        queryKey: 'heroBottom',
        queryFn: async () => {
            const { data } = await axios.get('http://localhost:4000/heroBottom');
            return data;
        }
    });

    if (heroBottom.isLoading) return <div>Loading...</div>;
    if (heroBottom.error) return <div>Error: {heroBottom.error.message}</div>;

    return (
        <div className="py-5 dark:bg-neutral">
            <div className="container mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {heroBottom.data.map((item, index) => (
                        <div key={index} className="flex gap-2 border rounded shadow p-3 dark:bg-white">
                            <div className="text-2xl md:text-4xl flex items-center text-blue-500">
                                <FontAwesomeIcon icon={iconMap[item.icon]} />
                            </div>
                            <div>
                                <h2 className="text-base lg:text-lg">{item.title}</h2>
                                <p className="text-sm text-stone-500">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HeroBottom;
