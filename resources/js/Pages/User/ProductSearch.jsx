import React from "react";
import { Head } from "@inertiajs/react";
import NavbarUser from "@/Components/UserComponents/NavbarUser";
import Footer from "@/Components/UserComponents/Footer";
import CardProduct from "../../Components/UserComponents/Dashboard/CardProduct";

const ProductSearch = ({ product, currentUser, search, productCount }) => {
    return (
        <div>
            <Head title="Kategori" />
            <NavbarUser
                idUser={currentUser.id_user}
                productCount={productCount}
            />

            <div className="body px-20 py-5">
                <div className="title mb-3  text-base px-5 py-2 bg-white">
                    Hasil Pencarian{" "}
                    <span className="font-bold text-xl">"{search}"</span>
                </div>
                <div className="isi bg-white rounded-lg flex flex-row w-full px-5 py-3">
                    <div className="products w-full px-5 py-3">
                        <div className="w-full grid grid-cols-4 gap-3">
                            {product === "tidak ada" ? (
                                <span>Tidak ada Product yang Sesuai</span>
                            ) : (
                                product.map((data, id) => (
                                    <div
                                        key={id}
                                        className="hover:scale-105 transition-all duration-300"
                                    >
                                        <CardProduct product={data} />
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            {/* <Footer /> */}
        </div>
    );
};

export default ProductSearch;
