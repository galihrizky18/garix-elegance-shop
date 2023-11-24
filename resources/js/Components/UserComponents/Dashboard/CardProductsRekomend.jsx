import { Link } from "@inertiajs/react";
import gambar from "../../../../../public/asset/products/product-dior.webp";

const CardProductsRekomend = ({ product }) => {
    return (
        <Link href={`/detail/${product.id_product}`}>
            <div className="flex px-2 flex-col justify-center">
                <div className="item bg-white px-4 py-5 shadow-lg rounded-2xl sm:h-[330px]">
                    <div className="gambar flex justify-center">
                        <img
                            src={product.product_img}
                            alt=""
                            className="w-24 sm:w-36"
                        />
                    </div>
                    <div className="judul font-bold line-clamp-2 text-base">
                        <span>{product.product_name} </span>
                    </div>
                    <div className="description text-xs line-clamp-2 text-gray-700 mt-2">
                        <span>{product.product_description}</span>
                    </div>
                    <div className="price text-lg text-sky-700 font-bold mt-3">
                        <span>
                            {new Intl.NumberFormat("id-ID", {
                                style: "currency",
                                currency: "IDR",
                            })
                                .format(product.product_price)
                                .replace(",00", "")}
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default CardProductsRekomend;
