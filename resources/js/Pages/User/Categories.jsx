import NavbarUser from "@/Components/UserComponents/NavbarUser";
import React, { useState } from "react";
import { Head } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";
import Footer from "@/Components/UserComponents/Footer";
import ProdukCategory from "@/Components/UserComponents/Kategories/ProdukCategory";

const Categories = ({ product }) => {
    const handleSelectedKategori = (kategori) => {
        Inertia.get(`/kategories/${kategori}`);
    };

    return (
        <div>
            <Head title="Kategori" />
            <NavbarUser />

            <div className="body px-20 py-5">
                <div className="title mb-3 font-bold text-xl px-5 py-2 bg-white">
                    All Product
                </div>
                <div className="isi bg-white rounded-lg flex flex-row w-full gap-5 px-5 py-3">
                    <div className="kategori w-[20%] flex flex-col">
                        <div className="title flex items-center text-sm font-bold p-3 border-b border-black">
                            Semua Kategori
                        </div>
                        <div className="isi px-5">
                            <ul className="gap-10">
                                <li
                                    className="mb-3 mt-2 flex items-center text-xs font-bold hover:text-custom-primary cursor-pointer"
                                    onClick={() =>
                                        handleSelectedKategori("kosmetik")
                                    }
                                >
                                    Make Up
                                </li>
                                <li
                                    className="mb-3 mt-2 flex items-center  text-xs font-bold  hover:text-custom-primary cursor-pointer"
                                    onClick={() =>
                                        handleSelectedKategori(
                                            "perawatan wajah"
                                        )
                                    }
                                >
                                    Perawatan Wajah
                                </li>
                                <li
                                    className="mb-3 flex items-center text-xs font-bold  hover:text-custom-primary cursor-pointer"
                                    onClick={() =>
                                        handleSelectedKategori(
                                            "perawatan rambut"
                                        )
                                    }
                                >
                                    Perawatan Rambut
                                </li>
                                <li
                                    className="mb-3 flex items-center text-xs font-bold  hover:text-custom-primary cursor-pointer"
                                    onClick={() =>
                                        handleSelectedKategori(
                                            "perawatan kulit"
                                        )
                                    }
                                >
                                    Perawatan Kulit
                                </li>
                                <li
                                    className="mb-3 flex items-center text-xs font-bold  hover:text-custom-primary cursor-pointer"
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

export default Categories;
