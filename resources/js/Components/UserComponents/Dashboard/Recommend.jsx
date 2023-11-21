import React, { Component } from "react";
import Slider from "react-slick";
import CardProducts from "./CardProductsRekomend";

import ArrowNext from "@asset/icon/arrow-next.svg";
import ArrowPrev from "@asset/icon/arrow-prev.svg";

const Recommend = ({ product }) => {
    function SampleNextArrow({ className, onClick }) {
        return (
            <div className={className} onClick={onClick}>
                <img src={ArrowNext} />
            </div>
        );
    }
    function SamplePrevArrow({ className, onClick }) {
        return (
            <div className={className} onClick={onClick}>
                <img src={ArrowPrev} />
            </div>
        );
    }
    const settings = {
        dots: true,
        infinite: false,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        infinite: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="flex flex-col">
            <div className="judul flex justify-center border-b pb-3 border-gray-400 font-bold">
                <h1 className="sm:text-4xl text-2xl font-josefin">
                    Recommended for You
                </h1>
            </div>

            {/* Slider Item */}
            <div className="pt-5">
                <Slider {...settings}>
                    {product.map((data, id) => (
                        <div
                            key={id}
                            className="hover:scale-105 transition-all duration-300"
                        >
                            <CardProducts product={data} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Recommend;
