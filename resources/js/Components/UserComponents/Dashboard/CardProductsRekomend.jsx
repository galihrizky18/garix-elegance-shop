const CardProductsRekomend = ({gambar, product})=>{
    return(
        <div className="flex px-2 flex-col justify-center">
            <div className="item bg-white px-4 py-5 shadow-lg rounded-2xl sm:h-[300px]">
                <div className="gambar flex justify-center">
                    <img src={gambar} alt="" className="w-24 sm:w-36"/>
                </div>
                <div className="judul font-bold line-clamp-2 text-base">
                    <span>{product}</span>
                </div>
                <div className="description text-xs line-clamp-2 text-gray-700 mt-2">
                    <span>Capture Totale Super Potens Serm Foundations </span>
                </div>
                <div className="price text-sm font-bold mt-3">
                    <span>Rp. 1.405.000</span>
                </div>
            </div>
        </div>
    )
}

export default CardProductsRekomend;