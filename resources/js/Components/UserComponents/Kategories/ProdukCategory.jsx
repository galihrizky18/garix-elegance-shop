import React from "react";
import CardProduct from "../Dashboard/CardProduct";

const ProdukCategory = ({ product }) => {
    return (
        <div className="w-full grid grid-cols-4 gap-3">
            {product.map((data, id) => (
                <CardProduct key={id} product={data} />
            ))}
        </div>
    );
};

export default ProdukCategory;
