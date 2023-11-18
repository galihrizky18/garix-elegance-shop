import { Link } from "@inertiajs/react";

import UserIcon from "../../../../public/asset/icon/user.svg";
import BurgerMenuIcon from "../../../../public/asset/icon/burgerMenu.svg";
import keranjang from "@asset/icon/keranjang.svg";

const NavbarUser = ({ idUser }) => {
    return (
        <>
            <div className="Navbar w-full bg-white px-2 pt-3 flex flex-row justify-between font-roboto border-b-[1px] sm:px-8 sm:grid sm:grid-cols-4 sm:grid-rows-2 border-custom-primary ">
                <div className="burgerMenu sm:hidden col-start-1 ">
                    <img className="w-8 " src={BurgerMenuIcon} alt="" />
                </div>

                <Link href="/dashboard">
                    <div className="logo text-3xl font-exo col-start-2 col-end-5 sm:col-start-1 items-center sm:col-end-1 sm:text-xl md:text-2xl lg:text-3xl italic font-bold text-custom-primary flex justify-center pb-2 sm:justify-start sm:w-[13rem] md:w-[15rem] lg:w-[19rem] ">
                        Garix Elegance
                        <span className="hidden sm:inline-block ml-2">
                            {" "}
                            Shop
                        </span>
                    </div>
                </Link>

                {/* search field */}
                <div className="searchField hidden col-start-2 col-span-2 sm:flex items-center md:ml-14 lg:ml-20 sm:ml-14 ">
                    <input
                        className="w-[500px] h-8 sm:h-6 md:h-8 lg:h-9 border-gray-400"
                        placeholder="MATTE SUNCARE CARASUN UP TO 60%"
                        type="text"
                    />
                </div>

                {/* User Profile */}
                <div className="userProfile flex flex-row gap-10 sm:col-start-4 sm:mr-10 sm:flex sm:justify-end items-center ">
                    <Link href={`/keranjang/${idUser}`}>
                        <div className="keranjang">
                            <img
                                src={keranjang}
                                alt=""
                                className="w-8 sm:w-8 lg:w-12 ml-7 sm:ml-0"
                            />
                        </div>
                    </Link>
                    <div className="profile">
                        <div className="dropdown dropdown-hover dropdown-end">
                            <label
                                tabIndex={0}
                                className="btn m-1 bg-transparent"
                            >
                                <img src={UserIcon} alt="" className="w-10" />
                            </label>
                            <ul
                                tabIndex={0}
                                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 gap-2"
                            >
                                <li>
                                    <a>Profile</a>
                                </li>
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

                <div className="menu hidden sm:flex sm:text-xs md:text-sm lg:text-lg sm:gap-5 flex-row items-center row-start-2 col-start-1 col-span-3 py-2 ml-14 gap-8 text-custom-primary ">
                    <div className="list">Categories</div>
                    <div className="list">Brands</div>
                    <div className="list">Store</div>
                    <div className="list ">Company</div>
                    <div className="list">Store Locatian</div>
                </div>
            </div>
        </>
    );
};

export default NavbarUser;
