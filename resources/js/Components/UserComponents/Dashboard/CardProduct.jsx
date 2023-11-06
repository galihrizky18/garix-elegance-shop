const CardProduct = ({gambar, produk}) => {
    return (
        <div className="h-[230px] p-2 shadow-lg">
            <div className="image flex justify-center">
                <img src={gambar} alt="" className="w-24 "/>
            </div>

            <div className="product mt-2 text-sm font-bold line-clamp-2">
                <span>{produk}</span>
            </div>

            <div className="description text-xs line-clamp-2 mt-1 text-gray-600">
                <span >Capture Totale Super Potens Serm Foundations  </span>
            </div>

            <div className="price mt-3">
                <span className="text-sky-900">RP. 1.234.000</span>
            </div>
        </div>
    )
}

export default CardProduct