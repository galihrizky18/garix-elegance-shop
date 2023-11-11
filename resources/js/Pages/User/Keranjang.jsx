import NavbarKeranjang from "@/Components/UserComponents/NavbarKeranjang";
import { Head } from "@inertiajs/react";
import React from "react";

import gambar from "@asset/products/product-mac.webp";

const Keranjang = () => {
    return (
        <div className="bg-gray-100 h-[1000px]">
            <Head title="Keranjang" />
            <div className="navBar fixed z-[100] top-0 w-full">
                <NavbarKeranjang />
            </div>
            <div className="body pt-14 sm:pt-[15%] md:pt-[9%] flex flex-col gap-3 justify-center items-center">
                <div
                    className="header bg-white shadow-lg w-[80%] grid  px-5 py-3"
                    style={{
                        gridTemplateColumns: "1fr 0.3fr 0.3fr 0.3fr 0.2fr",
                    }}
                >
                    <div className="produk flex justify-center">Product</div>
                    <div className="produk flex justify-center">
                        Harga satuan
                    </div>
                    <div className="produk flex justify-center">Kuantitas</div>
                    <div className="produk flex justify-center">
                        Total Harga
                    </div>
                    <div className="produk"></div>
                </div>
                <div
                    className="product bg-white w-[80%] px-5 py-3 rounded-xl shadow-md grid gap-3"
                    style={{
                        gridTemplateColumns: "1fr 0.3fr 0.3fr 0.3fr 0.2fr",
                    }}
                >
                    <div className="detail-product flex flex-row justify-center items-center ">
                        <div className="gambar">
                            <img src={gambar} alt="" className="w-[80%]" />
                        </div>
                        <div className="product-name w-full h-full flex items-center line-clamp-2 text-base">
                            <span className="line-clamp-2 leading-5 font-josefin">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Veniam sed qui fugit
                                blanditiis minima temporibus quo quod? Ea
                                voluptas quisquam quo, voluptates dicta
                                voluptatem in aliquid quos harum voluptatum
                                aliquam!
                            </span>
                        </div>
                    </div>
                    <div className="harga flex items-center justify-center">
                        <span className="text-sky-600 text-lg font-josefin">
                            Rp.4.000
                        </span>
                    </div>
                    <div className="kuantitas flex items-center justify-center ">
                        <input
                            type="number"
                            className="w-[80%] h-[25%] mr-2"
                            placeholder="20"
                        />
                        <label htmlFor=""> Buah</label>
                    </div>
                    <div className="total-harga flex items-center justify-center ">
                        <span className="text-sky-600 text-lg font-josefin">
                            Rp. 230.000
                        </span>
                    </div>
                    <div className="tombol flex items-center justify-center ">
                        <button className="bg-red-400 text-white w-20 rounded h-9 hover:bg-red-600">
                            Hapus
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Keranjang;
