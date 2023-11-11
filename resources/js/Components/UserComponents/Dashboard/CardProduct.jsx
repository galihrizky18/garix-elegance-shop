import { Link } from "@inertiajs/react";

const CardProduct = ({ product }) => {
    return (
        <Link href={`/detail/${product.id_product}`}>
            <div className="h-[230px] p-2 shadow-lg">
                <div className="image flex justify-center">
                    <img src={product.product_img} alt="" className="w-24 " />
                </div>

                <div className="product mt-2 text-sm font-bold line-clamp-2">
                    <span>{product.product_name}</span>
                </div>

                <div className="description text-xs line-clamp-2 mt-1 text-gray-600">
                    <span>{product.product_description} </span>
                </div>

                <div className="price mt-3">
                    <span className="text-sky-700 font-bold">
                        {new Intl.NumberFormat("id-ID", {
                            style: "currency",
                            currency: "IDR",
                        })
                            .format(product.product_price)
                            .replace(",00", "")}
                    </span>
                </div>
            </div>
        </Link>
    );
};

export default CardProduct;
