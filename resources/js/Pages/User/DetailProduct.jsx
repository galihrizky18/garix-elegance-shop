import NavbarUser from "@/Components/UserComponents/NavbarUser";
import { Inertia } from "@inertiajs/inertia";
import { Head } from "@inertiajs/react";
import React, { useState } from "react";

const DetailProduct = ({ product, currentUser }) => {
    const [kuantitas, setKuantitas] = useState();

    const handleInputKeranjang = () => {
        if (kuantitas >= 1) {
            const data = {
                id_product: product.id_product,
                kuantitas,
            };
            Inertia.post("/inputKeranjang", data);
        } else {
            document.getElementById("notif_modal").showModal();
        }
    };

    return (
        <div className="bg-gray-100 pb-20">
            <Head title="Detail" />
            <div className="navBar fixed z-[100] top-0 w-full">
                <NavbarUser idUser={currentUser.id_user} />
            </div>

            {/* modal Dialog */}
            <dialog id="notif_modal" className="modal">
                <div className="modal-box bg-red-700 text-white">
                    <h3 className="font-bold text-lg">Error!!!</h3>
                    <p className="py-4">Kuantitas Harus di Isi</p>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>

            <div className="body pt-14 sm:pt-[15%] md:pt-[10%] mt-3 flex flex-col items-center justify-center ">
                <div
                    className="card-detail-poduct shadow-lg bg-white rounded-xl w-[80%] px-5 py-3 grid grid-cols-2 gap-3"
                    style={{ gridTemplateColumns: "1.5fr 2fr" }}
                >
                    <div className="col1 px-3 py-2 flex flex-col items-center ">
                        <div className="gambar">
                            <img src={product.product_img} alt="" />
                        </div>
                    </div>
                    <div className="col2 px-5 py-3 flex flex-col gap-3">
                        <div className="productName text-xl font-trocchi line-clamp-2 font-bold border-b border-black">
                            {product.product_name}
                        </div>
                        <div className="harga text-xl font-bold px-5 text-end items-end justify-end  text-primary">
                            {new Intl.NumberFormat("id-ID", {
                                style: "currency",
                                currency: "IDR",
                            })
                                .format(product.product_price)
                                .replace(",00", "")}
                        </div>
                        <div className="kuantitas flex flex-row gap-5 items-center">
                            <label htmlFor="">Kuantitas</label>
                            <label htmlFor="">:</label>
                            <input
                                type="number"
                                placeholder="Type here"
                                className="input input-bordered w-[25%] h-[100%] max-w-xs"
                                onChange={(e) =>
                                    setKuantitas(parseInt(e.target.value))
                                }
                            />
                            <label htmlFor="" className="text-xs text-gray-500">
                                Tersisa {product.product_stock}
                            </label>
                        </div>

                        <div className="tombol mt-5">
                            <button
                                className=" border border-sky-500 h-10 text-sky-700 font-bold rounded-xl hover:bg-sky-500 hover:text-white w-52"
                                onClick={() => handleInputKeranjang()}
                            >
                                Masukan Keranjang
                            </button>
                        </div>
                    </div>
                </div>

                <div className="deskripsi mt-5 px-5 py-3 bg-white rounded-xl w-[80%] shadow-lg">
                    <div className="judul font-bold text-xl text-center border-b border-gray-500 pb-2">
                        Deskripsi
                    </div>
                    <div className="isi-deskripsi whitespace-pre-line">
                        {product.product_description}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailProduct;
