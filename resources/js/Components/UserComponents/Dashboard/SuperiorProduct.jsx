import CardProduct from "./CardProduct"

import ProductDior from "../../../../../public/asset/products/product-dior.webp"
import ProductMac from "../../../../../public/asset/products/product-mac.webp"
import ProductRare from "../../../../../public/asset/products/product-rare.webp"
import ProductSK2 from "../../../../../public/asset/products/product-sk2.webp"

const SuperiorProduct = ()=>{
    return (
        <div className="flex flex-col">
            <div className="flex justify-center pb-3 border-b border-gray-400">
                    <div className="judul font-bold">
                        <span className="sm:text-4xl text-2xl font-josefin">Superior Product</span>
                    </div>
            </div>

            <div className="listProduct mt-5 grid grid-cols-2 sm:grid-cols-5 gap-2">
                <CardProduct gambar={ProductDior} produk='Dior'/>
                <CardProduct gambar={ProductMac} produk='MAC'/>
                <CardProduct gambar={ProductRare} produk='Rare'/>
                <CardProduct gambar={ProductSK2} produk='SK2'/>
                <CardProduct gambar={ProductDior} produk='Dior'/>
                <CardProduct gambar={ProductDior} produk='Dior'/>
            </div>
        </div>
    )
}

export default SuperiorProduct