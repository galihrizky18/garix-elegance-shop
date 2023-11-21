import React from "react";
import CardProduct from "../Dashboard/CardProduct";

const ProdukCategory = ({ product }) => {
    return (
        <div className="w-full grid grid-cols-4 gap-3">
            {product.map((data, id) => (
                <div
                    key={id}
                    className="hover:scale-105 transition-all duration-300"
                >
                    <CardProduct product={data} />
                </div>
            ))}
        </div>
    );
};

export default ProdukCategory;
