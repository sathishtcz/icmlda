import { Link} from "react-router-dom";
import { IoLocationSharp} from "react-icons/io5";
import { IoIosCheckmarkCircle } from "react-icons/io";

function Aboutus() {
    return (
        <>
            <div className="relative bg-cover bg-center flex flex-col items-start justify-center pt-[50px] sm:pt-[60px] h-[250px] sm:h-[350px] md:h-[400px] lg:h-[400px] 2xl:h-[400px]" style={{ backgroundImage: "url('/assets/images/Banner.jpg')" }} >
                {/* Overlay */}
                {/* <div className="absolute inset-0 bg-[#000000] opacity-25"></div> */}
                {/* Centered Content */}
                <div className="xl:max-w-[1500px]  md:max-w-[920px] mx-auto w-full px-10">
                    <h3 className="inter-semibold text-3xl sm:text-4xl md:text-[50px] text-white">
                        About Us
                    </h3>
                    <nav className="mt-2 sm:mt-4">
                        <ol className="flex space-x-2 text-white  inter-semibold">
                            <li>
                                <Link to="/" className="hover:text-[#FABF2B] text-[20px]">
                                    Home
                                </Link>
                            </li>
                            <li className="text-white text-[20px]">/</li>
                            <li className="text-[#FABF2B] text-[20px]">About Us</li>
                        </ol>
                    </nav>
                </div>
            </div>


            <div className="xl:max-w-[1450px]  md:max-w-[920px] mx-auto p-4 lg:mt-10 mt-5">
                <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center lg:gap-20 gap-10">
                    <div>
                        <div className="flex flex-col gap-3 ">
                            <h2 className="text-[#FABF2B] inter-semibold">ABOUT US</h2>
                            <p className="inter-semibold text-[25px] lg:text-[40px] ">Future of Machine Learning and Data Analytics</p>
                        </div>
                        <div className="lg:hidden block mt-5">
                            <div className="flex justify-center">
                                <img src="/assets/images/Abouthero.jpg" alt="Aboutimage" className='w-full max-w-md ' />
                            </div>
                        </div>

                        <div className="flex flex-col gap-7 mt-4 lg:mt-5">
                            <div>
                                <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] ">The <span className="inter-bold text-gray-900">International Conference on Machine Learning and Data Analytics</span> is a premier global event dedicated to advancing the fields of machine learning and data analytics through innovation, collaboration, and knowledge exchange. It offers a dynamic platform to explore cutting-edge advancements, share groundbreaking research, and address real-world challenges with data-driven solutions. The Selective accepted papers of our International Conference on Machine Learning and Data Analytics will be recommended to publish in the indexed Journals.</p>
                            </div>
                            <div className="bg-[#EAF6FE] p-5 rounded-md">
                                <div className="flex flex-col gap-2">
                                    <div className="flex flex-row gap-1">
                                        <IoIosCheckmarkCircle className=" text-[#22367C] text-3xl flex-shrink-0" />
                                        <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]"><span className="inter-medium text-black">World-Class Speakers:</span> Engage with renowned experts presenting the latest advancements in AI and data analytics.</p>
                                    </div>
                                    <div className="flex flex-row gap-1">
                                        <IoIosCheckmarkCircle className="text-[#22367C] text-3xl flex-shrink-0" />
                                        <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]"><span className="inter-medium text-black">Diverse Sessions:</span> Explore a range of technical talks, poster presentations, and panel discussions on cutting-edge topics.</p>
                                    </div>
                                    <div className="flex flex-row gap-1">
                                        <IoIosCheckmarkCircle className="text-[#22367C] text-3xl flex-shrink-0" />
                                        <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]"><span className="inter-medium text-black">Interactive Workshops:</span> Participate in hands-on sessions to gain practical skills and insights from industry leaders.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:block hidden ">
                        <div className="flex justify-center">
                            <img src="/assets/images/Abouthero.jpg" alt="Aboutimage" className='w-full max-w-lg' />
                        </div>
                    </div>

                </div>
            </div>

            <div className="bg-[#EAF6FE] px-4 py-10 lg:mt-10 mt-5">
                <div className="xl:max-w-[1450px]  md:max-w-[920px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center lg:gap-40 gap-10 ">
                        <div className="relative ">
                            <div className="flex justify-center"><img src="/assets/images/About3.jpg" alt="about" className="w-full max-w-[630px] h-auto object-cover rounded-xl" /></div>

                            <div className="xl:block hidden absolute bg-white rounded-lg px-5 py-4 shadow-md bottom-1/3 -right-1/9">
                                <div className="flex flex-col gap-1 items-center text-center">
                                    <IoLocationSharp className='text-4xl text-[#FABF2B]' />
                                    <p className="inter-semibold">Location</p>
                                    <p className="inter-semibold">Changi, Singapore</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="flex flex-col gap-3 ">
                                <h2 className="inter-semibold">WHY TO BE A PART OF ICMLDA</h2>
                                <p className="inter-semibold text-[25px] lg:text-[40px] ">Building Innovations to Shape the Future</p>
                            </div>
                            <div className="flex flex-col gap-7 mt-4 lg:mt-5">

                                <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] ">The <span className="inter-bold text-gray-900">International Conference on Machine Learning and Data Analytics</span> is your gateway to the forefront of AI and data science, offering unparalleled opportunities to engage with global pioneers, expand your expertise, and contribute to transformative innovations.</p>
                                <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">By joining ICMLDA, you become part of a vibrant community dedicated to advancing machine learning and data analytics, with access to cutting-edge research, exclusive workshops, and insights into the latest industry trends that are shaping the future of intelligent technologies.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Aboutus