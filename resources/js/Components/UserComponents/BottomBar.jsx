import { useState } from "react";
import HomeLine from "../../../../public/asset/icon/home-line.svg";
import HomeFill from "../../../../public/asset/icon/home-fill.svg";
import ShirtLine from "../../../../public/asset/icon/shirt-line.svg";
import ShirtFill from "../../../../public/asset/icon/shirt-fill.svg";
import OfferLine from "../../../../public/asset/icon/offers-line.svg";
import OfferFill from "../../../../public/asset/icon/offers-fill.svg";
import CategoriesLine from "../../../../public/asset/icon/categories-line.svg";
import CategoriesFill from "../../../../public/asset/icon/categories-fill.svg";
import StoreLine from "../../../../public/asset/icon/store-line.svg";
import StoreFill from "../../../../public/asset/icon/store-fill.svg";

const BottomBar = () => {
    const [isBottom, setIsBottom] = useState("home");

    const tes = () => {
        console.log(isBottom);
    };

    return (
        <div className="h-20 bg-white px-5 flex flex-row items-center gap-6 justify-center border border-black">
            <div
                className="item flex flex-col justify-center items-center leading-4 "
                onClick={() => setIsBottom("home")}
            >
                <img
                    src={isBottom == "home" ? HomeFill : HomeLine}
                    alt=""
                    className="w-8"
                />
                <span className="text-gray-500 font-bold ">Home</span>
            </div>
            <div
                className="item flex flex-col justify-center items-center leading-4 "
                onClick={() => setIsBottom("brands")}
            >
                <img
                    src={isBottom == "brands" ? ShirtFill : ShirtLine}
                    alt=""
                    className="w-8"
                />
                <span className="text-gray-500 font-bold">Brands</span>
            </div>
            <div
                className="item flex flex-col justify-center items-center leading-4"
                onClick={() => setIsBottom("offers")}
            >
                <img
                    src={isBottom == "offers" ? OfferFill : OfferLine}
                    alt=""
                    className="w-8"
                />
                <span className="text-gray-500 font-bold">Offers</span>
            </div>
            <div
                className="item flex flex-col justify-center items-center leading-4 "
                onClick={() => setIsBottom("categories")}
            >
                <img
                    src={
                        isBottom == "categories"
                            ? CategoriesFill
                            : CategoriesLine
                    }
                    alt=""
                    className="w-8"
                />
                <span className="text-gray-500 font-bold">Categories</span>
            </div>
            <div
                className="item flex flex-col justify-center items-center leading-4"
                onClick={() => setIsBottom("store")}
            >
                <img
                    src={isBottom == "store" ? StoreFill : StoreLine}
                    alt=""
                    className="w-8"
                />
                <span className="text-gray-500 font-bold">Stores</span>
            </div>
        </div>
    );
};

export default BottomBar;
