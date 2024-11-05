import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const LatestProducts = () => {
    const LatestProduct = useQuery({
        queryKey: 'latestProduct',
        queryFn: async () => {
            const { data } = await axios.get('http://localhost:4000/latestProducts');
            return data;
        }
    });

    if (LatestProduct.isLoading) return <div>Loading...</div>;

    return (
        <div className="font-[sans-serif] p-4 mx-auto lg:max-w-5xl md:max-w-3xl max-w-lg">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-12">Latest Product</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {LatestProduct.data.map((item, index) => (
                <div key={index} className="bg-white overflow-hidden cursor-pointer hover:shadow-lg transition-all relative">
                    <div className="w-full h-[250px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 p-2">
                        <img src={`http://localhost:4000/images/products/${item.img}`} alt="laptop1"
                            className="h-full w-full object-contain" />
                    </div>

                    <div className="p-6">
                        <hr className="border-2 mb-6" />
                        <div>
                            <h3 className="text-base text-gray-800">{item.title}</h3>
                            <h4 className="text-lg text-gray-800 font-bold my-6">${item.sale_price} <strike
                                className="text-gray-400 ml-2 font-medium">${item.old_price}</strike>
                            </h4>
                        </div>
                        <button type="button" className="bg-gray-700 font-semibold hover:bg-gray-800 text-white text-sm px-2 py-2.5 w-full">Add to Cart</button>
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
};

export default LatestProducts;