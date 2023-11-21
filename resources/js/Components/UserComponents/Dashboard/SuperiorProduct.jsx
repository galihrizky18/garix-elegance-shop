import CardProduct from "./CardProduct";

import ProductDior from "../../../../../public/asset/products/product-dior.webp";
import ProductMac from "../../../../../public/asset/products/product-mac.webp";
import ProductRare from "../../../../../public/asset/products/product-rare.webp";
import ProductSK2 from "../../../../../public/asset/products/product-sk2.webp";

const SuperiorProduct = ({ product }) => {
    return (
        <div className="flex flex-col ">
            <div className="flex justify-center pb-3 border-b border-gray-400">
                <div className="judul font-bold">
                    <span className="sm:text-4xl text-2xl font-josefin">
                        Superior Product
                    </span>
                </div>
            </div>

            <div className="listProduct mt-5 grid grid-cols-2 sm:grid-cols-5 gap-5">
                {product.map((data, id) => (
                    <div
                        key={id}
                        className="hover:scale-110 transition-all duration-300"
                    >
                        <CardProduct product={data} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SuperiorProduct;
