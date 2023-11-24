import { Head } from "@inertiajs/react";
import NavbarUser from "@/Components/UserComponents/NavbarUser";
import BottomBar from "@/Components/UserComponents/BottomBar";
import Caraosel from "@/Components/UserComponents/Dashboard/Caraosel";
import MainPromo from "@/Components/UserComponents/Dashboard/MainPromo";
import Brands from "@/Components/UserComponents/Dashboard/Brands";
import Recommend from "@/Components/UserComponents/Dashboard/Recommend";
import SuperiorProduct from "@/Components/UserComponents/Dashboard/SuperiorProduct";
import Footer from "@/Components/UserComponents/Footer";

const DashboardUser = ({ product, idUser, productCount }) => {
    return (
        <div className="text-black">
            <Head title="Dashboard" />
            <div className="navBar fixed z-[100] top-0 w-full">
                <NavbarUser idUser={idUser} productCount={productCount} />
            </div>

            <div className="body pt-14 sm:pt-[15%] md:pt-[9%] h-[2000px]">
                <div className="caraosel w-full mt-5 sm:mt-4 flex flex-row justify-center items-center">
                    <Caraosel />
                </div>

                <div className="mainPromo">
                    <MainPromo />
                </div>

                <div className="brands px-5 sm:px-16 py-5 sm:mt-7 ">
                    <Brands />
                </div>

                <div className="recommendProduct py-4 px-12 sm:px-16 sm:mt-3">
                    <Recommend product={product} />
                </div>

                <div className="superiorssProduct bg-white  py-4 px-5 sm:px-16 sm:mt-5 ">
                    <SuperiorProduct product={product} />
                </div>

                {/* footer */}
                <div className="footer hidden sm:inline-block mt-10 ">
                    <Footer />
                </div>
            </div>

            {/* Bottom Bar untuk ANroid */}
            <div className="bottomBar sm:hidden mt-10 fixed z-[100] bottom-0 w-full">
                <BottomBar />
            </div>
        </div>
    );
};

export default DashboardUser;
