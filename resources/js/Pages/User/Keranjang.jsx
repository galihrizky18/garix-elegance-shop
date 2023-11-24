import NavbarKeranjang from "@/Components/UserComponents/NavbarKeranjang";
import { Head, Link } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

const Keranjang = ({ keranjang }) => {
    const [hargaKeranjang, setHargaKeranjang] = useState([]);
    const [totalHarga, setTotalharga] = useState(0);

    const handleCheck = (data) => {
        const hargaSatuan = data.product_price;
        const kuantitas = data.kuantitas;
        const total = hargaSatuan * kuantitas;

        if (!hargaKeranjang.includes(total)) {
            setHargaKeranjang([...hargaKeranjang, total]);
        } else {
            const updateHarga = hargaKeranjang.filter((e) => e !== total);
            setHargaKeranjang(updateHarga);
        }
    };

    useEffect(() => {
        const hargaTotal = hargaKeranjang.reduce((acc, curr) => acc + curr, 0);
        setTotalharga(hargaTotal);
    }, [hargaKeranjang]);

    return (
        <div className="bg-gray-100 pb-20">
            <Head title="Keranjang" />
            <div className="navBar fixed z-[100] top-0 w-full">
                <NavbarKeranjang />
            </div>
            <div className="body pt-14 sm:pt-[15%] md:pt-[9%] flex flex-col gap-3 justify-center items-center">
                <div
                    className="header bg-white shadow-lg w-[80%] grid  px-5 py-3"
                    style={{
                        gridTemplateColumns:
                            "0.1fr 1fr 0.3fr 0.3fr 0.3fr 0.2fr ",
                    }}
                >
                    <div className="produk flex justify-center">
                        <input type="checkbox" />
                    </div>
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

                {/* Product */}
                {keranjang.map((data, i) => (
                    <div
                        key={i}
                        className="product bg-white w-[80%] px-5 py-3 rounded-xl shadow-md grid gap-3"
                        style={{
                            gridTemplateColumns:
                                "0.1fr 1fr 0.3fr 0.3fr 0.3fr 0.2fr",
                        }}
                    >
                        <div className="produk flex justify-center items-center">
                            <input
                                id="checkBox"
                                type="checkbox"
                                onChange={() => {
                                    handleCheck(data);
                                }}
                            />
                        </div>
                        <div className="detail-product flex flex-row justify-center items-center ">
                            <div className="gambar">
                                <img
                                    src={data.product_img}
                                    alt=""
                                    className="w-[150px]"
                                />
                            </div>
                            <div className="product-name w-full h-full flex items-center line-clamp-2 text-base">
                                <span className="line-clamp-2 leading-5 font-josefin">
                                    {data.product_name}
                                </span>
                            </div>
                        </div>
                        <div className="harga flex items-center justify-center">
                            <span className="text-sky-600 text-lg font-josefin">
                                {new Intl.NumberFormat("id-ID", {
                                    style: "currency",
                                    currency: "IDR",
                                })
                                    .format(data.product_price)
                                    .replace(",00", "")}
                            </span>
                        </div>
                        <div className="kuantitas flex items-center justify-center ">
                            <input
                                type="number"
                                className="w-[80%] h-[25%] mr-2"
                                placeholder={data.kuantitas}
                            />
                            <label htmlFor=""> Buah </label>
                        </div>
                        <div className="total-harga flex items-center justify-center ">
                            <span className="text-sky-600 text-lg font-josefin">
                                {new Intl.NumberFormat("id-ID", {
                                    style: "currency",
                                    currency: "IDR",
                                })
                                    .format(data.product_price * data.kuantitas)
                                    .replace(",00", "")}
                            </span>
                        </div>
                        <div className="tombol flex items-center justify-center ">
                            <Link href={`/delete/${data.id_product}`}>
                                <button className="bg-red-400 text-white w-20 rounded h-9 hover:bg-red-600">
                                    Hapus
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-10">
                <div className="card-total fixed bottom-0 w-[80%] h-[100px] flex flex-row justify-between p-10 shadow-xl items-center bg-white border-t border-gray-700">
                    <div className="font-bold text-xl">Total Harga</div>
                    <div className="font-bold text-2xl text-custom-primary">
                        {new Intl.NumberFormat("id-ID", {
                            style: "currency",
                            currency: "IDR",
                        })
                            .format(totalHarga)
                            .replace(",00", "")}
                    </div>
                    <div>
                        <button className="btn btn-success hover:bg-[#36a57c] text-white">
                            Check Out
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Keranjang;
