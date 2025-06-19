import { Link } from "react-router-dom";
import { IoIosCheckmarkCircle } from "react-icons/io";

export default function Editorboard() {
    return (
        <>

            <div className="relative bg-cover bg-center flex flex-col items-start justify-center pt-[50px] sm:pt-[60px] h-[250px] sm:h-[350px] md:h-[400px] lg:h-[400px] 2xl:h-[400px]" style={{ backgroundImage: "url('/assets/images/Banner.jpg')" }} >
                {/* Overlay */}
                {/* <div className="absolute inset-0 bg-[#000000] opacity-25"></div> */}
                {/* Centered Content */}
                <div className="xl:max-w-[1500px]  md:max-w-[920px] mx-auto w-full px-10">
                    <h3 className="inter-semibold text-3xl sm:text-4xl md:text-[50px] text-white">
                        Editorial Board
                    </h3>
                    <nav className="mt-2 sm:mt-4">
                        <ol className="flex space-x-2 text-white  inter-semibold">
                            <li>
                                <Link to="/" className="hover:text-[#FABF2B] text-[20px]">
                                    Home
                                </Link>
                            </li>
                            <li className="text-white text-[20px]">/</li>
                            <li className="text-[#FABF2B] text-[20px]">Editorial Board</li>
                        </ol>
                    </nav>
                </div>
            </div>


            <div className="xl:max-w-[1450px]  md:max-w-[920px] mx-auto p-4 lg:mt-18 mt-5">
                <div className="space-y-6">
                    <div className="flex flex-col gap-3 ">
                        <h2 className="text-[#FABF2B] inter-semibold">EDITORIAL BOARD</h2>
                        <p className="inter-semibold text-[25px] lg:text-[40px] ">Meet Our Editorial Board Members</p>
                    </div>
                    <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] ">The Editorial Board of the <span className="inter-bold text-gray-900">International Conference on Machine Learning and Data Analytics</span> comprises distinguished scholars, researchers, and industry experts dedicated to upholding the highest standards of academic and technical excellence. Tasked with overseeing the peer-review process, the board ensures that all submitted papers, presentations, and posters meet rigorous criteria for originality, scientific rigor, and relevance to the fields of machine learning and data analytics. Their diverse expertise spans theoretical AI, applied data science, and interdisciplinary applications, fostering a robust platform for groundbreaking research and innovation.</p>
                    <div className="flex flex-col gap-5 mt-7">
                        <p className="text-black inter-bold text-lg">Roles and Responsibilities</p>
                        <div className="flex flex-row gap-1">
                            <IoIosCheckmarkCircle className=" text-[#22367C] text-3xl flex-shrink-0" />
                            <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]"><span className="inter-medium text-black">Peer-Review Oversight:</span> Manages a meticulous double-blind peer-review process to ensure impartiality, transparency, and adherence to the highest academic standards for all submitted papers, posters, and presentations. Coordinates a diverse pool of reviewers with specialized expertise to evaluate submissions for originality, technical rigor, and relevance to the conference’s scope. Ensures timely and fair review cycles, providing authors with clear timelines and opportunities for revision to enhance submission quality.</p>
                        </div>
                        <div className="flex flex-row gap-1">
                            <IoIosCheckmarkCircle className=" text-[#22367C] text-3xl flex-shrink-0" />
                            <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]"><span className="inter-medium text-black">Content Curation:</span> Selects high-impact research for inclusion in ICMLDA’s conference proceedings, ensuring alignment with the latest trends and challenges in machine learning and data analytics. Facilitates partnerships with prestigious journals to offer selected papers opportunities for extended publication and broader dissemination. Curates a balanced program of keynote talks, technical sessions, and poster presentations to showcase diverse perspectives and innovative methodologies.</p>
                        </div>
                        <div className="flex flex-row gap-1">
                            <IoIosCheckmarkCircle className=" text-[#22367C] text-3xl flex-shrink-0" />
                            <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]"><span className="inter-medium text-black">Mentorship and Guidance:</span>  Provides detailed, constructive feedback to authors, particularly early-career researchers, to refine their work and strengthen their contributions to the field. Offers guidance on research presentation and publication strategies, helping authors effectively communicate their findings to a global audience. Engages with emerging scholars through workshops and Q&A sessions, fostering a supportive environment for professional development and innovation.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="xl:max-w-[1450px]  md:max-w-[920px] mx-auto p-4 lg:mt-10 mt-5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-25">
                    <div>
                        <div className="bg-white border-3 border-gray-300 rounded-lg ">
                            <div className="bg-[#22367C] h-48 rounded-t z-10"></div>
                            <div className="flex flex-col gap-3 items-center p-3 -mt-29 z-20">
                                <div className="border-2 border-[#22367C] p-8 rounded-full bg-white ">
                                    <img src="/assets/images/editor1.png" alt="User" className='w-30 h-32' />
                                </div>
                                <p className="inter-medium text-2xl text-black">Dr John Smith</p>
                                <div className="flex flex-col gap-2"> <p className="inter-semibold text-gray-900 sm:text-base md:text-lg lg:text-[18px] text-justify leading-[30px]">Prince Mohammed Bin Fahd University</p>
                                    <div className="flex gap-2">
                                        <div className='text-gray-600'><span className='inter-medium text-md text-gray-900'>Expertise :</span> Machine Learning
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className='text-gray-600'><span className='inter-medium text-md text-gray-900'>Country    :</span> USA
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="bg-white border-3 border-gray-300 rounded-lg ">
                            <div className="bg-[#22367C] h-48 rounded-t z-10"></div>
                            <div className="flex flex-col gap-3 items-center p-3 -mt-29 z-20">
                                <div className="border-2 border-[#22367C] p-8 rounded-full bg-white ">
                                    <img src="/assets/images/editor1.png" alt="User" className='w-30 h-32' />
                                </div>
                                <p className="inter-medium text-2xl text-black">Dr John Smith</p>
                                <div className="flex flex-col gap-2"> <p className="inter-semibold text-gray-900 sm:text-base md:text-lg lg:text-[18px] text-justify leading-[30px]">Prince Mohammed Bin Fahd University</p>
                                    <div className="flex gap-2">
                                        <div className='text-gray-600'><span className='inter-medium text-md text-gray-900'>Expertise :</span> Machine Learning
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className='text-gray-600'><span className='inter-medium text-md text-gray-900'>Country    :</span> USA
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="bg-white border-3 border-gray-300 rounded-lg ">
                            <div className="bg-[#22367C] h-48 rounded-t z-10"></div>
                            <div className="flex flex-col gap-3 items-center p-3 -mt-29 z-20">
                                <div className="border-2 border-[#22367C] p-8 rounded-full bg-white ">
                                    <img src="/assets/images/editor1.png" alt="User" className='w-30 h-32' />
                                </div>
                                <p className="inter-medium text-2xl text-black">Dr John Smith</p>
                                <div className="flex flex-col gap-2"> <p className="inter-semibold text-gray-900 sm:text-base md:text-lg lg:text-[18px] text-justify leading-[30px]">Prince Mohammed Bin Fahd University</p>
                                    <div className="flex gap-2">
                                        <div className='text-gray-600'><span className='inter-medium text-md text-gray-900'>Expertise :</span> Machine Learning
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className='text-gray-600'><span className='inter-medium text-md text-gray-900'>Country    :</span> USA
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
