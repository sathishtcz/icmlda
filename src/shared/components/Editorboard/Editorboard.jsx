import { Link } from "react-router-dom";
import { IoIosCheckmarkCircle } from "react-icons/io";

export default function Editorboard() {

    const editors = [
        {
            name: "Sidaoui Boutkhil",
            department: "Department of Computer Science",
            university: "Salhi Ahmed University of Naama",
            location: "Algeria"
        },


        {
            name: "G.Vinodhini",
            department: "Department of Information Technology",
            university: "Annamalai University",
            location: "India"
        },

        {
            name: "Ajanthaa Lakkshmanan",
            department: "Department of Computer Science",
            university: "Sathyabama Institute of Science and Technology",
            location: "India"
        },

        {
            name: "Tariq Javid",
            department: "Department of Biomedical Engineering",
            university: "Hamdard University",
            location: "Pakistan"
        },
        {
            name: "Yogi Pratama",
            department: "Department of Medical Informatics",
            university: "Al Insyirah Institute of Health and Technology",
            location: "Indonesia"
        },
        {
            name: "Mujtaba Korai",
            department: "Department of Computer Engineering",
            university: "Gachon University",
            location: "South Korea"
        },

        {
            name: "Collins N. Udanor",
            department: "Department of Computer Science",
            university: "University of Nigeria",
            location: "Nigeria"
        },

        {
            name: "Ziquan Feng",
            department: "Department of Multicultural Pedagogy",
            university: "Hanyang University",
            location: "South Korea"
        },
        {
            name: "Kabelo Given Chuma",
            department: "Department of Information Science",
            university: "University of South Africa",
            location: "South Africa"
        },

        {
            name: "Asad Aziz",
            department: "Department of Geography",
            university: "University of Gujrat",
            location: "Pakistan"
        },

        {
            name: "Mohammad Javad Fadaeieslam",
            department: "Department of Electrical and Computer Engineering",
            university: "Semnan University",
            location: "Iran"
        },

        {
            name: "K. Karthika",
            department: "Department of Computer Science",
            university: "Sri Sairam College of Engineering",
            location: "India"
        },

        {
            name: "Shazia Riaz",
            department: "Department of Computer Science",
            university: "Women University Faisalabad",
            location: "Pakistan"
        },
        {
            name: "Nguyen Van Thieu",
            department: "Department of Computer Science",
            university: "Phenikaa University",
            location: "Vietnam"
        },

        {
            name: "Saminda Premaratne",
            department: "Department of Information Technology",
            university: "University of Moratuwa",
            location: "Sri Lanka"
        },

        {
            name: "Asma Kausar Mukhtar Ali",
            department: "Department of Information Technology",
            university: " MJIIT University of Technology",
            location: "Malaysia"
        },
        {
            name: "Muhammad Suleman Memon",
            department: "Department of Information Technology",
            university: "University of Sindh",
            location: "Pakistan"
        },
        {
            name: "Bawar Mohammed Faraj",
            department: "Department of Information Technology",
            university: "University of Halabja Computer Science",
            location: "Iraq"
        },
        {
            name: "Omar Bin Samin",
            department: "Department of Information Technology",
            university: "Institute of Management Sciences",
            location: "Pakistan"
        },
        {
            name: "Saman Almufti",
            department: "Department of Computer Science",
            university: "Nawroz University",
            location: "Iraq"
        },
        {
            name: "Mahdiyeh Khazaneha",
            department: "Department of Neurology Research Center",
            university: "Kerman University of Medical Sciences",
            location: "Iran"
        },


        {
            name: "Ledan Qian",
            department: "Department of Information Technology",
            university: "Wenzhou University",
            location: "China"
        },
        {
            name: "Bilal Saoud",
            department: "Department of Electrical Engineering",
            university: "University of Bouira",
            location: "Algeria"
        },
        {
            name: "Argha Chandra Dhar",
            department: "Department of Computer Science and Engineering",
            university: "Khulna University of Engineering and Technology",
            location: "Bangladesh"
        },
        {
            name: "V. Mageshwari",
            department: "Department of Computer Science",
            university: "PSGR Krishnammal College for Women",
            location: "India"
        },
        {
            name: "M. Sathish kumar",
            department: "Department of Computer Application",
            university: " Hindustan Institute of Technology and Science",
            location: "India"
        },
        {
            name: "Minhaz Uddin Emon",
            department: " Department of Computer Science",
            university: "Pattimura University",
            location: "Indonesia"
        },
        {
            name: "D. Angeline Benitta",
            department: "Department of Computer Applications",
            university: "Hindustan Institute of Technology and Science",
            location: "India"
        },
        {
            name: "Sirajuddin Qureshi",
            department: "Department of Information Technology",
            university: "Beijing University of Technology",
            location: "China"
        },
        {
            name: "Muhammd Umer Farooq",
            department: "Department of Computer Science and Information Technology",
            university: "NED University of Engineering and Technology",
            location: "Pakistan"
        },
    ];


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


            <div className="xl:max-w-[1450px]  md:max-w-[920px] mx-auto p-4 lg:mt-10 mt-5">
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
                <div className="grid grid-cols-1 divide-y border border-[#22367C] max-w-[80rem] mx-auto">
                    {editors.map((editor, index) => (
                        <div key={index}>
                            <div key={index} className="grid grid-cols-1 md:grid-cols-[30%_70%] md:gap-4    bg-white even:bg-gray-50">
                                <div className="font-semibold text-black md:border-r-1 p-3">
                                    Dr. {editor.name}
                                </div>
                                <div className="text-gray-700 p-3">
                                    {editor.department && <>{editor.department}, </>}
                                    {editor.university}, {editor.location}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
