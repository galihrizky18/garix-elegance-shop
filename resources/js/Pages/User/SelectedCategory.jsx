import NavbarUser from "@/Components/UserComponents/NavbarUser";
import React, { useEffect, useState } from "react";
import { Head, Link } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";
import Footer from "@/Components/UserComponents/Footer";
import ProdukCategory from "@/Components/UserComponents/Kategories/ProdukCategory";

const SelectedCategory = ({ product, currentUser, productCount }) => {
    const dataPertama = product[0];
    const handleSelectedKategori = (kategori) => {
        Inertia.get(`/kategories/${kategori}`);
    };

    return (
        <div>
            <Head title="Kategori" />
            <NavbarUser
                idUser={currentUser.id_user}
                productCount={productCount}
            />

            <div className="body px-20 py-5">
                <div className="title mb-3 font-bold text-xl px-5 py-2 bg-white">
                    {dataPertama.kategori.toUpperCase()}
                </div>
                <div className="isi bg-white rounded-lg flex flex-row w-full gap-5 px-5 py-3">
                    <div className="kategori w-[20%] flex flex-col">
                        <Link href="/kategories">
                            <div className="title flex items-center text-sm font-bold p-3 border-b border-black">
                                Semua Kategori
                            </div>
                        </Link>
                        <div className="isi px-5">
                            <ul className="gap-10">
                                <li
                                    className={`mb-3 mt-2 flex items-center text-xs font-bold hover:text-custom-primary cursor-pointer hover:scale-105 transition-all duration-200 ${
                                        dataPertama.kategori === "kosmetik"
                                            ? "text-custom-primary scale-105 "
                                            : ""
                                    }`}
                                    onClick={() =>
                                        handleSelectedKategori("kosmetik")
                                    }
                                >
                                    Make Up
                                </li>
                                <li
                                    className={`mb-3 mt-2 flex items-center  text-xs font-bold  hover:text-custom-primary cursor-pointer hover:scale-105 transition-all duration-200 ${
                                        dataPertama.kategori ===
                                        "perawatan wajah"
                                            ? "text-custom-primary scale-105 "
                                            : ""
                                    }`}
                                    onClick={() =>
                                        handleSelectedKategori(
                                            "perawatan wajah"
                                        )
                                    }
                                >
                                    Perawatan Wajah
                                </li>
                                <li
                                    className={`mb-3 flex items-center text-xs font-bold  hover:text-custom-primary hover:scale-105 transition-all duration-200 cursor-pointer ${
                                        dataPertama.kategori ===
                                        "perawatan rambut"
                                            ? "text-custom-primary scale-105 "
                                            : ""
                                    }`}
                                    onClick={() =>
                                        handleSelectedKategori(
                                            "perawatan rambut"
                                        )
                                    }
                                >
                                    Perawatan Rambut
                                </li>
                                <li
                                    className={`mb-3 flex items-center text-xs font-bold  hover:text-custom-primary hover:scale-105 transition-all duration-200 cursor-pointer ${
                                        dataPertama.kategori ===
                                        "perawatan kulit"
                                            ? "text-custom-primary scale-105 "
                                            : ""
                                    }`}
                                    onClick={() =>
                                        handleSelectedKategori(
                                            "perawatan kulit"
                                        )
                                    }
                                >
                                    Perawatan Kulit
                                </li>
                                <li
                                    className={`mb-3 flex items-center text-xs font-bold  hover:text-custom-primary hover:scale-105 transition-all duration-200 cursor-pointer ${
                                        dataPertama.kategori ===
                                        "parfum scale-105 "
                                            ? "text-custom-primary"
                                            : ""
                                    }`}
                                    onClick={() =>
                                        handleSelectedKategori("parfum")
                                    }
                                >
                                    Parfum
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="products w-full px-5 py-3">
                        <ProdukCategory product={product} />
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default SelectedCategory;
