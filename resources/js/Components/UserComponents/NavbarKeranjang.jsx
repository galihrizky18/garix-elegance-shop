import React from "react";

const NavbarKeranjang = () => {
    return (
        <div className="flex flex-row h-24 items-center bg-white px-24 shadow-lg w-full ">
            <div className="logo text-4xl font-bold font-exo text-sky-600">
                Garix |{" "}
                <span className="text-2xl font-josefin">Keranjang Belanja</span>
            </div>
        </div>
    );
};

export default NavbarKeranjang;