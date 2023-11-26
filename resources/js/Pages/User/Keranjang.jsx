import NavbarKeranjang from "@/Components/UserComponents/NavbarKeranjang";
import { Head } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";
import axios from "axios";
import { Inertia } from "@inertiajs/inertia";

const Keranjang = ({ keranjang }) => {
    const [hargaKeranjang, setHargaKeranjang] = useState([]);
    const [totalHarga, setTotalharga] = useState(0);
    const [idProductDelete, setIdProductDelete] = useState();
    const [idSelectedProduct, setIdSelectedProduct] = useState([]);

    const handleCheck = (data) => {
        const hargaSatuan = data.product_price;
        const kuantitas = data.kuantitas;
        const total = hargaSatuan * kuantitas;

        if (!idSelectedProduct.includes(data.id_product)) {
            setIdSelectedProduct([...idSelectedProduct, data.id_product]);
        } else {
            const updateIdSelectedProduct = idSelectedProduct.filter(
                (e) => e !== data.id_product
            );
            setIdSelectedProduct(updateIdSelectedProduct);
        }

        if (!hargaKeranjang.includes(total)) {
            setHargaKeranjang([...hargaKeranjang, total]);
        } else {
            const updateHarga = hargaKeranjang.filter((e) => e !== total);
            setHargaKeranjang(updateHarga);
        }
    };

    const handleUpdateKuantitas = async (id) => {
        const idProductinKeranjang = {
            idProduct: id,
        };
        console.log(id);
        try {
            // mengambil token csrf dari Meta di html
            const csrfToken = document.querySelector(
                'meta[name="csrf-token"]'
            ).content;

            const response = await axios.post(
                "/updateKuantitas",
                idProductinKeranjang,
                {
                    headers: {
                        "X-CSRF-TOKEN": csrfToken,
                        "Content-Type": "application/json",
                    },
                }
            );
        } catch (error) {
            console.log(error);
        }
    };

    const handleCheckOut = () => {
        if (idSelectedProduct.length < 1) {
            comfirmCheckOut.show();
        } else {
            const data = {
                data: idSelectedProduct,
            };

            Inertia.post("/check-out", data);
        }
    };

    useEffect(() => {
        const hargaTotal = hargaKeranjang.reduce((acc, curr) => acc + curr, 0);
        setTotalharga(hargaTotal);
    }, [hargaKeranjang]);

    // useEffect(() => {
    //     console.log(idSelectedProduct);
    // }, [idSelectedProduct]);

    return (
        <div className="bg-gray-100 pb-20 font-trocchi">
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
                            <div className="product-name w-full h-full ml-10 flex items-center line-clamp-2 text-base">
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
                                onChange={() => handleUpdateKuantitas(data.id)}
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
                            <button
                                className=" w-[85%] h-[30%] rounded-xl bg-red-500 text-white hover:bg-red-600"
                                onClick={() => {
                                    setIdProductDelete(data.id_product);
                                    document
                                        .getElementById(`modal_delete`)
                                        .showModal();
                                }}
                            >
                                Delete
                            </button>
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
                        <button
                            className="btn btn-success hover:bg-[#36a57c] text-white"
                            onClick={() => handleCheckOut()}
                        >
                            Check Out
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal */}
            <dialog id="modal_delete" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">PERHATIAN!!</h3>
                    <p className="py-4">Yakin Ingin Hapus??</p>
                    <div className="tombol flex justify-end items-center gap-3">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className=" w-20 h-9 bg-gray-200 hover:bg-gray-300 rounded-xl">
                                Kembali
                            </button>
                        </form>
                        <Link
                            href={`/delete/${idProductDelete}`}
                            className="bg-red-500 hover:bg-red-600 text-white w-[20%] flex justify-center items-center h-9 rounded-xl "
                        >
                            <button>Yakin</button>
                        </Link>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>

            <dialog id="comfirmCheckOut" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">PERHATIAN!!</h3>
                    <p className="py-4">Tidak Ada Product yang dipilih</p>
                    <div className="tombol flex justify-end items-center gap-3">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className=" w-20 h-9 bg-gray-200 hover:bg-gray-300 rounded-xl">
                                Kembali
                            </button>
                        </form>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    );
};

export default Keranjang;
