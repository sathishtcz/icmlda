import { Link } from "react-router-dom";
import { IoIosCheckmarkCircle } from "react-icons/io";

export default function Scope() {
    return (
        <>

            <div className="relative bg-cover bg-center flex flex-col items-start justify-center pt-[50px] sm:pt-[60px] h-[250px] sm:h-[350px] md:h-[400px] lg:h-[400px] 2xl:h-[400px]" style={{ backgroundImage: "url('/assets/images/Banner.jpg')" }} >
                {/* Overlay */}
                {/* <div className="absolute inset-0 bg-[#000000] opacity-25"></div> */}
                {/* Centered Content */}
                <div className="xl:max-w-[1500px]  md:max-w-[920px] mx-auto w-full px-10">
                    <h3 className="inter-semibold text-3xl sm:text-4xl md:text-[50px] text-white">
                        Our Scope
                    </h3>
                    <nav className="mt-2 sm:mt-4">
                        <ol className="flex space-x-2 text-white  inter-semibold">
                            <li>
                                <Link to="/" className="hover:text-[#FABF2B] text-[20px]">
                                    Home
                                </Link>
                            </li>
                            <li className="text-white text-[20px]">/</li>
                            <li className="text-[#FABF2B] text-[20px]">Our Scope</li>
                        </ol>
                    </nav>
                </div>
            </div>

            <div className="xl:max-w-[1450px]  md:max-w-[920px] mx-auto p-4 lg:mt-18 mt-5">
                <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center lg:gap-20 gap-10">
                    <div className=" lg:block hidden ">
                        <div className="flex justify-center">
                            <img src="/assets/images/Scope.jpg" alt="Aboutimage" className='w-full max-w-lg' />
                        </div>
                    </div>

                    <div>
                        <div className="flex flex-col gap-3 ">
                            <h2 className="text-[#FABF2B] inter-semibold">OUR SCOPE</h2>
                            <p className="inter-semibold text-[25px] lg:text-[40px] ">Advancing machine learning and data analytics innovation</p>
                        </div>
                        <div className="lg:hidden block mt-5">
                            <div className="flex justify-center">
                                <img src="/assets/images/Scope.jpg" alt="Aboutimage" className='w-full max-w-md ' />
                            </div>
                        </div>

                        <div className="flex flex-col gap-7 mt-4 lg:mt-5">
                            <div>
                                <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] ">The <span className="inter-bold text-gray-900">International Conference on Machine Learning and Data Analytics</span>  is committed to pushing the boundaries of machine learning and data analytics by fostering groundbreaking research, promoting cross-disciplinary collaboration, and showcasing transformative applications that address global challenges.</p>
                            </div>
                            <div className="bg-[#EAF6FE] p-5 rounded-md">
                                <div className="flex flex-col gap-2">
                                    <div className="flex flex-row gap-1">
                                        <IoIosCheckmarkCircle className=" text-[#22367C] text-3xl flex-shrink-0" />
                                        <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] "><span className="inter-medium text-black">Global Engagement:</span> Connect diverse stakeholders from academia, industry, and government for shared learning.</p>
                                    </div>
                                    <div className="flex flex-row gap-1">
                                        <IoIosCheckmarkCircle className="text-[#22367C] text-3xl flex-shrink-0" />
                                        <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] "><span className="inter-medium text-black">Theoretical Breakthroughs:</span> Advance the science of machine learning with new algorithms, models, and optimization techniques.</p>
                                    </div>
                                    <div className="flex flex-row gap-1">
                                        <IoIosCheckmarkCircle className="text-[#22367C] text-3xl flex-shrink-0" />
                                        <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] "><span className="inter-medium text-black">Inclusive Community:</span> Create a welcoming platform for diverse voices to inspire innovation and collaboration.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="bg-[#EAF6FE] px-4 py-10 lg:mt-18 mt-5">
                <div className="xl:max-w-[1450px]  md:max-w-[920px] mx-auto">
                    <div>
                        <div className="flex flex-col gap-3 ">
                            <h2 className="inter-semibold">KEY AREAS</h2>
                            <p className="inter-semibold text-[25px] lg:text-[40px] ">Driving Innovation in ML and DA</p>
                        </div>
                        <div className="flex flex-col gap-2 mt-4 lg:mt-5">
                            <div className="flex flex-row gap-1">
                                <IoIosCheckmarkCircle className=" text-[#22367C] text-3xl flex-shrink-0" />
                                <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] "><span className="inter-medium text-black">Algorithmic Advancements:</span> Pioneering cutting-edge machine learning models, such as advanced neural networks, reinforcement learning, and generative AI, to push the boundaries of predictive accuracy and computational efficiency. Developing scalable, high-performance algorithms tailored for processing massive datasets in real-time, enabling seamless integration across cloud, edge, and hybrid computing environments.</p>
                            </div>
                            <div className="flex flex-row gap-1">
                                <IoIosCheckmarkCircle className="text-[#22367C] text-3xl flex-shrink-0" />
                                <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]"><span className="inter-medium text-black">Data-Driven Insights:</span> Leveraging big data analytics to uncover deep, actionable insights from complex, high-dimensional, and unstructured datasets across industries like healthcare, finance, and urban planning. Advancing data visualization techniques to create intuitive, interactive tools that empower decision-makers to interpret complex data patterns effectively and drive strategic outcomes.</p>
                            </div>
                            <div className="flex flex-row gap-1">
                                <IoIosCheckmarkCircle className="text-[#22367C] text-3xl flex-shrink-0" />
                                <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]"><span className="inter-medium text-black">Real-World Applications:</span> Transforming healthcare through AI-driven solutions, including predictive diagnostics, personalized treatment plans, and automated medical imaging analysis to improve patient outcomes. Addressing global sustainability challenges by applying data analytics to climate modeling, renewable energy optimization, and resource management for a more sustainable future.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </>
    )
}

