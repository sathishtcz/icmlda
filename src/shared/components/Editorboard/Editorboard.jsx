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
            name: "Ridwan Mustofa",
            department: "Assistant Professor",
            university: "Khulna University of Engineering & Technology",
            location: "Bangladesh"
        },

        {
            name: "G.Vinodhini",
            department: "Department of Information Technology",
            university: "Annamalai University",
            location: "India"
        },

        {
            name: "Jhanghiz Syahrivar",
            university: "President University",
            location: "Indonesia"
        },
        {
            name: "Bibhakar Das",
            university: "Khulna University of Engineering and Technology",
            location: "Bangladesh"
        },
        {
            name: "Ajanthaa Lakkshmanan",
            department: "Assistant Professor, Department of Computer Science",
            university: "Sathyabama Institute of Science and Technology",
            location: "India"
        },


        {
            name: "Johan Hendri Prasetyo",
            university: "Universitas Nusa Mandiri",
            location: "Indonesia"
        },
        {
            name: "Tariq Javid",
            department: "Professor, Department of Biomedical Engineering",
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
            name: "Twana A. Hamad",
            university: "Harran University",
            location: "Turkey"
        },
        {
            name: "Ammar Amjad",
            university: " National Yang ming chiao tung university",
            location: "Taiwan"
        },
        {
            name: "Dr. Mujtaba Korai",
            department: "Department of Computer Engineering",
            university: "Gachon University",
            location: "South Korea"
        },
        {
            name: "Abderrezak Benyahia",
            university: " Associate Professor",
            location: "Algeria"
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
            university: "College of Human Sciences, University of South Africa",
            location: "South Africa"
        },
        {
            name: "Asad Aziz",
            department: "Lecturer, Department of Geography",
            university: "University of Gujrat",
            location: "Pakistan"
        },

        {
            name: "Mohammad Javad Fadaeieslam",
            department: "Assistant professor, Department of Electrical and Computer Engineering",
            university: "Semnan University",
            location: "Iran"
        },

        {
            name: "Karthika K",
            department: "Department of Computer Science",
            university: "Sri Sairam College of Engineering",
            location: "India"
        },
        {
            name: "Shazia Riaz",
            department: "Assistant Professor, Department of Computer Science",
            university: "Women University Faisalabad",
            location: "Pakistan"
        },
        {
            name: "Nguyen Van Thieu",
            department: "Faculty of Computer Science",
            university: "PHENIKAA University",
            location: "Vietnam"
        },

        {
            name: "Saminda Premaratne",
            department: "Department of Information Technology",
            university: "University of Moratuwa",
            location: "Sri Lanka"
        },
        {
            name: "Qiang Tong",
            university: "Shenzhen Institute of Information Technology",
            location: "China"
        },
        {
            name: "Asma Kausar Mukhtar Ali",
            department: "Department of Information Technology",
            university: " MJIIT University of Technology",
            location: "Malaysia"
        },
        {
            name: "Bawar Mohammed Faraj",
            department: "Department of Information Technology",
            university: "University of Halabja Computer Science",
            location: "Iraq"
        },
        {
            name: "Omar Bin Samin",
            department: "Lecturer,  Center of Excellence in Information Technology",
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
            department: "Department of  Information Technology",
            university: "Wenzhou University",
            location: "China"
        }, {
            name: "Muhammd Umer Farooq",
            department: "Assistant Professor, Department of Computer Science and Information Technology",
            university: "NED University of Engineering and Technology",
            location: "Pakistan"
        },
        {
            name: "Bilal Saoud",
            department: "Department of Electrical Engineering",
            university: "University of Bouira",
            location: "Algeria"
        },
        {
            name: "Argha Chandra Dhar",
            department: " Lecturer, Department of Computer Science and Engineering",
            university: "Khulna University of Engineering and Technology",
            location: "Bangladesh"
        },
        {
            name: " Mageshwari V",
            department: "Department of Computer Science",
            university: "PSGR Krishnammal College for Women",
            location: "India"
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15 mx-auto h-full max-w-[80rem]">
                    {editors.map((editor, index) => (
                        <div key={index}>
                            <div className="bg-white border-2 border-[#22367C] rounded-lg h-full">
                                {/* <div className="bg-[#22367C] h-48 rounded-t z-10"></div> */}
                                <div className="flex flex-col gap-5 items-center p-5 z-20">
                                    {/* -mt-29 */}
                                    {/* <div className="border-2 border-[#22367C] p-8 rounded-full bg-white">
                                        <img src="/assets/images/editor1.png" alt="User" className="w-30 h-32" />
                                    </div> */}
                                    <p className="inter-medium text-2xl text-black">Dr. {editor.name}</p>
                                    <div className="flex flex-col gap-2">
                                        {(editor.department &&
                                            <p className=" text-gray-700 sm:text-base md:text-lg lg:text-[16px]  ">
                                                <span className="inter-semibold text-md text-gray-900">Department :</span> {editor.department}
                                            </p>
                                        )}
                                        <p className=" text-gray-700 sm:text-base md:text-lg lg:text-[16px]  ">
                                            <span className="inter-semibold text-md text-gray-900">University :</span> {editor.university}
                                        </p>
                                        <div className="text-gray-700 sm:text-base md:text-lg lg:text-[16px]">
                                            <span className="inter-semibold text-md text-gray-900">Country :</span> {editor.location}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
