import MainIklan from ".././../../../../public/asset/iklan/main-iklan.png";

const MainPromo = () => {
    return (
        <div className=" w-full h-[300px] px-3 py-5 bg-custom-card flex flex-col justify-between sm:grid sm:grid-cols-2 mt-7 sm:mt-16">
            <div className="caption flex flex-wrap justify-center items-center ">
                <div className="text-white w-[500px] text-2xl sm:text-4xl flex font-bold text-center">
                    <span className="sm:leading-[3rem] font-trocchi">
                    Belanja Cantik Dengan Less Waste, Mulai dari 4 Langkah di
                    Sini!
                    </span>
                </div>
                
            </div>

            <div className="iklan flex justify-center items-center sm:px-5 ">
                <img src={MainIklan} alt="" className="shadow-lg lg:w-[700px]"/>
            </div> 

        </div>
    );
};

export default MainPromo;
