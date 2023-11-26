import NavbarUser from "@/Components/UserComponents/NavbarUser";
import { Head } from "@inertiajs/react";
import React, { useState } from "react";
import { Input, initTE } from "tw-elements";

const CheckOut = ({ currentUser, productCount, product }) => {
    initTE({ Input });

    console.log(product);

    const [namaPeneria, seNamaPenerima] = useState();
    const [noHp, setNoHp] = useState();
    const [alamat, setAlamat] = useState();

    const handleSaveModal = (e) => {
        e.preventDefault();
    };

    return (
        <div className="font-trocchi">
            <div className="header">
                <Head title="CheckOut" />
                <NavbarUser
                    idUser={currentUser.id_user}
                    productCount={productCount}
                />
            </div>

            <div className="isi px-20 py-5">
                <div className="alamat px-5 py-3 flex flex-col gap-2 bg-white shadow-lg">
                    <div className="head flex flex-row items-center">
                        <div className="iconGps">
                            <svg
                                className="w-[20px] h-[20px] fill-[#0b83bf]"
                                viewBox="0 0 384 512"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"></path>
                            </svg>
                        </div>
                        <div className="title text-lg ml-2 text-custom-primary ">
                            Alamat Pengiriman
                        </div>
                    </div>
                    <div
                        className="body grid gap-5 items-center px-5"
                        style={{ gridTemplateColumns: "1fr 6fr 1fr" }}
                    >
                        <div className="penerima ">
                            <div className="nama font-bold">
                                {namaPeneria ? namaPeneria : "User"}
                            </div>
                            <div className="noHp">
                                {noHp ? noHp : "08123456789"}
                            </div>
                        </div>
                        <div className="alammat text-sm ">
                            {alamat ? alamat : "Belumm Ada Alamat"}
                        </div>
                        <div className="action">
                            <button
                                className="bg-green-600 hover:bg-green-500 w-[80%] px-3 py-1 text-white rounded-xl"
                                onClick={() =>
                                    document
                                        .getElementById("ubahAlamat")
                                        .showModal()
                                }
                            >
                                Ubah
                            </button>
                        </div>
                    </div>
                </div>

                <div className="produkDiPesan px-5 py-3 bg-white shadow-xl rounded-lg mt-5">
                    <div className="head border-b border-gray-400">
                        Produk Dipesan
                    </div>
                </div>
            </div>

            {/* modal */}
            <dialog
                id="ubahAlamat"
                className="modal modal-bottom sm:modal-middle"
            >
                <div className="modal-box">
                    <h3 className="font-bold text-lg pb-2 border-b border-gray-400">
                        Ubah Alamat!
                    </h3>
                    <div className="mt-4">
                        <div className="item">
                            <div
                                className="relative mb-3"
                                data-te-input-wrapper-init
                            >
                                <input
                                    type="text"
                                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2] text-black outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                    id="nama"
                                    name="nama"
                                    placeholder="Example label"
                                    onChange={(e) =>
                                        seNamaPenerima(e.target.value)
                                    }
                                />
                                <label className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none ">
                                    Nama Penerima
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <div className="item">
                            <div
                                className="relative mb-3"
                                data-te-input-wrapper-init
                            >
                                <input
                                    type="text"
                                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2] text-black outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                    id="noTelp"
                                    name="noTelp"
                                    placeholder="Example label"
                                    onChange={(e) => setNoHp(e.target.value)}
                                />
                                <label className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none ">
                                    No Telepon
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <div className="item">
                            <div
                                className="relative mb-3"
                                data-te-input-wrapper-init
                            >
                                <input
                                    type="text"
                                    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2] text-black outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                    id="alamat"
                                    name="alamat"
                                    placeholder="Example label"
                                    onChange={(e) => setAlamat(e.target.value)}
                                />
                                <label className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none ">
                                    Alamat
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="modal-action">
                        <button
                            className="button bg-green-500 hover:bg-green-400 w-20 rounded-xl py-2 "
                            onClick={handleSaveModal}
                        >
                            Save
                        </button>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    );
};

export default CheckOut;
