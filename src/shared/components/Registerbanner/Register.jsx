import { Link } from "react-router-dom"


function Register() {
    return (
        <>
            <div className="xl:max-w-[1450px]  md:max-w-[920px] mx-auto p-3 mt-8 mb-13">
                <div className="bg-[url('/assets/images/register.png')] bg-cover rounded-lg bg-fixed bg-right  flex justify-center items-center  ">
                    <div className="w-full flex flex-col items-center justify-center py-12 lg:py-22  px-1 gap-5">
                        <p className="inter-semibold text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center">Register for exclusive event?</p>
                        <p className="inter-regular text-white sm:text-base md:text-lg lg:text-[16px]  leading-[30px] text-center max-w-xl">Register now and secure your spot today to connect with global experts, explore emerging technologies, and be part of shaping the future of computer science.</p>
                        <Link to="/paper-submission" className="text-center mt-4 lg:mt-0">
                            <button className="bg-[#FFDB00] inter-medium text-sm xs:text-base sm:text-lg md:text-xl lg:text-xl text-black transition-all duration-200 p-2 px-3 rounded cursor-pointer">Register Here </button>
                        </Link>

                    </div>
                </div>
            </div>
            {/* <div className="xl:max-w-[1500px]  md:max-w-[920px] mx-auto p-3 mt-4 mb-9">
                <div className="bg-gradient-to-b from-[#E0048B] to-[#83268E] rounded-md p-8">
                    <div className="lg:flex justify-between lg:gap-15 ">
                        <div className="flex flex-col gap-5">
                            <p className="playfair-semibold text-white text-2xl sm:text-3xl md:text-4xl lg:text-4xl">Ready to Join the Innovation?</p>
                            <p className="inter-regular text-white sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] max-w-[70rem]">Register now and secure your spot today to connect with global experts, explore emerging technologies, and be part of shaping the future of computer science.</p>
                        </div>
                        <div className="flex items-center mt-4 lg:mt-0">
                            <div className="cursor-pointer">
                                <button className="bg-[#1F1F1F] playfair-medium text-sm xs:text-base sm:text-lg md:text-xl lg:text-xl text-white transition-all duration-200 p-2 px-5 rounded cursor-pointer">Register Here </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default Register