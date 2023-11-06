import BrandDior from "../../../../../public/asset/brands/brand-dior.webp"
import BrandGivenchy from "../../../../../public/asset/brands/brand-givenchy.webp"
import BrandLamer from "../../../../../public/asset/brands/brand-lamer.webp"
import BrandMcm from "../../../../../public/asset/brands/brand-mcm.webp"
import BrandRare from "../../../../../public/asset/brands/brand-rarebeauty.webp"
import BrandSephora from "../../../../../public/asset/brands/brand-sephora.webp"

const Brands = () => {
    return(
        <div className="flex flex-col ">
            <div className="judul flex justify-center border-b pb-3 border-gray-400 font-bold">
                <h1 className="sm:text-4xl text-2xl font-josefin">Belanja Brands</h1>
            </div>

            <div className="brands mt-5 grid grid-cols-3 grid-rows-2 sm:grid-rows-1 sm:grid-cols-6 gap-2 sm:gap-5">
                <div className="brand1">
                    <img src={BrandDior} alt="" className="rounded-xl"/>
                </div>
                <div className="brand1">
                    <img src={BrandGivenchy} alt="" className="rounded-xl"/>
                </div>
                <div className="brand1">
                    <img src={BrandLamer} alt="" className="rounded-xl"/>
                </div>
                <div className="brand1">
                    <img src={BrandMcm} alt="" className="rounded-xl"/>
                </div>
                <div className="brand1">
                    <img src={BrandRare} alt="" className="rounded-xl"/>
                </div>
                <div className="brand1">
                    <img src={BrandSephora} alt="" className="rounded-xl"/>
                </div>
            </div>
        </div>
    )
}

export default Brands