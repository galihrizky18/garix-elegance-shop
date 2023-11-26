import { Link } from "@inertiajs/react";
import React from "react";
import UserIcon from "../../../../public/asset/icon/user.svg";

const NavbarKeranjang = () => {
    return (
        <Link href="/dashboard">
            <div className="flex flex-row justify-between h-24 items-center bg-white px-24 shadow-lg w-full ">
                <div className="logo text-4xl font-bold font-exo text-sky-600">
                    Garix |{" "}
                    <span className="text-2xl font-josefin">
                        Keranjang Belanja
                    </span>
                </div>
                <div className="profile">
                    <div className="dropdown dropdown-hover dropdown-end">
                        <label tabIndex={0} className="btn m-1 bg-transparent">
                            <img src={UserIcon} alt="" className="w-10" />
                        </label>
                        <ul
                            tabIndex={0}
                            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 gap-2"
                        >
                            <li>
                                <Link
                                    href="/logout"
                                    className="bg-red-400 hover:font-bold hover:bg-red-500 hover:text-white text-white"
                                >
                                    Keluar
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default NavbarKeranjang;
