import NavbarKeranjang from "@/Components/UserComponents/NavbarKeranjang";
import { Head } from "@inertiajs/react";
import React from "react";

const Keranjang = () => {
    return (
        <div className="bg-gray-100 h-[1000px]">
            <Head title="Keranjang" />
            <div className="navBar fixed z-[100] top-0 w-full">
                <NavbarKeranjang />
            </div>
            <div className="body pt-14 sm:pt-[15%] md:pt-[9%] flex flex-col ">
                adasd
            </div>
        </div>
    );
};

export default Keranjang;
