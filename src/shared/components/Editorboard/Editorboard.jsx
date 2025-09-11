import { Link } from "react-router-dom";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FaCircleUser } from "react-icons/fa6";

export default function Editorboard() {

  const Organizingcommitte = [
    {
      name: "Dr. Meenakshi Gupta",
      department: "Department of Computer Science",
      university: "National University of Singapore",
      location: "Singapore"
    },
    {
      name: "Dr. Zonghai Wang",
      department: "Department of Information Sciences",
      university: "Nanjing Agricultural University",
      location: "China"
    },
    {
      name: "Dr.D. Kayathri Devi",
      department: "Department of Information Technology and Engineering",
      university: "Amity University",
      location: "Uzbekistan"
    },
    {
      name: "Dr. Twana A. Hamad",
      department: "Department of Computer Engineering",
      university: "Harran University",
      location: "Turkiye"
    },
    {
      name: "Dr. Chinwe Peace Igiri",
      department: "Department of Computer Science",
      university: "Cavendish University",
      location: "Uganda"
    },
  ];


  const advisorycommittee = [

    {
      name: "Dr. Abderrahim Bouchair",
      department: "Department of Computer Science",
      university: "University of Oran 1",
      location: "Algeria"
    },
    {
      name: "Dr. Leo John Baptist",
      department: "Department of Information Technology",
      university: "Botho University",
      location: "Botswana"
    },
    {
      name: "Dr.Md Foysal",
      department: "Department of Electronics and Communication Engineering",
      university: "Khulna University of Engineering and Technology",
      location: "Bangladesh"
    },
    {
      name: "Dr.E. Kusuma kumari",
      department: "Department of Electronics and Communication Engineering",
      university: "Vasavi College of Engineering",
      location: "India"
    },
    {
      name: "Dr. Ernesto Carrillo Arellano",
      department: "Department of Electronics Engineering",
      university: "Metropolitan Autonomous University",
      location: "Mexico"
    },

    {
      name: "Dr. Marcelo MS Souza",
      department: "Department of Computer Science",
      university: "Ceara Federal University",
      location: "Brazil"
    },

    {
      name: "Dr. Aram Sabr Tahr",
      department: "Department of Computer Science",
      university: "Cyprus International University",
      location: "Cyprus"
    },
    {
      name: "Dr. Sowmipriya Rajendiran",
      department: "Department of Computer Science and Engineering",
      university: "International School of Information Processing Sciences",
      location: "France"
    },
    {
      name: "Dr.S. Ravikumar",
      department: "Department of Computer Science and Engineering",
      university: "Vel Tech Rangarajan Dr.Sagunthala R&D Institute of Science and Technology",
      location: "India"
    },
    {
      name: "Dr. Huiliang Zhao",
      department: "Department of Product Design",
      university: "Guizhou Minzu University",
      location: "China"
    },

    {
      name: "Dr.A. Antonidoss",
      department: "Department of Computer Science and Business Systems",
      university: "Hindustan Institute of Technology",
      location: "India"
    },

    {
      name: "Dr. Aria Hendrawan",
      department: "Department of Computer Science",
      university: "University of Semarang",
      location: "Indonesia"
    },
    {
      name: "Dr. Wasan Alamro",
      department: "Department of Electrical Engineering",
      university: "Auckland University of Technology",
      location: "New Zealand"
    },
    {
      name: "Dr. Zouhour El-Abiad",
      department: "Department of Computer Science",
      university: "ESA Business School",
      location: "Lebanon"
    },
    {
      name: "Dr. Mohammad Tolou Askari",
      department: "Department of Computer Science and Engineering",
      university: "Islamic Azad University",
      location: "Iran"
    },
    {
      name: "Dr. Awder Omar Abdulqadir",
      department: "Department of Mathematical Physics",
      university: "University of Halabja",
      location: "Iraq"
    },
    {
      name: "Dr. Nour Moustafa",
      department: "Department of Computer Science",
      university: "American University of the Middle East",
      location: "Kuwait"
    },

    {
      name: "Dr. Hadhrami Ab. Ghani",
      department: "Department of  Data Science and Computing",
      university: "Universiti Malaysia Kelantan",
      location: "Malaysia"
    },

    {
      name: "Dr. Joseph M. Mom",
      department: "Department of Electrical and Electronics Engineering",
      university: "Joseph Sarwuan Tarka University",
      location: "Nigeria"
    },
    {
      name: "Dr.T. Jayasankar",
      department: "Department of Electronics and Communication Engineering",
      university: "Anna University",
      location: "India"
    },
    {
      name: "Dr. Muhammad Umair Hassan",
      department: "Department of ICT and Natural Sciences",
      university: "Norwegian University of Science and Technology",
      location: "Norway"
    },
    {
      name: "Dr. Sakthivel Velusamy",
      department: "Department of Aerospace Information Engineering",
      university: "Konkuk University",
      location: "South Korea"
    },

    {
      name: "Dr. Shahzad Ali",
      department: "Department of Computer Science",
      university: "Dawood University Of Engineering & Technology Karachi",
      location: "Pakistan"
    },
    {
      name: "Dr. Muhammad Asif Khan",
      department: "Department of Information Technology",
      university: "Qatar University",
      location: "Qatar"
    },
    {
      name: "Dr. Asma Sbeih",
      department: "Department of Engineering and Information",
      university: "Palestine Ahliya University",
      location: "Palestine"
    },
    {
      name: "Dr. Alma Bangayan Manera",
      department: "Department of Electronics and Communication Engineering",
      university: "Cagayan State University",
      location: "Philippines"
    },
    {
      name: "Dr. Ammar Amjad",
      department: "Department of Information Technology",
      university: "National Yang Ming Chiao Tung University",
      location: "Taiwan"
    },
    {
      name: "Dr. Ali Rizwan",
      department: "Department of Industrial Engineering",
      university: "King Abdulaziz University",
      location: "Saudi Arabia"
    },
    {
      name: "Dr. Saminda Premaratne",
      department: "Department of Information Technology",
      university: "University of Moratuwa",
      location: "Sri Lanka"
    },
    {
      name: "Dr. Kabelo Given Chuma",
      department: "Department of Information Science",
      university: "University of South Africa",
      location: "South Africa"
    },




  ]

  const technicalcomiittee = [
    {
      name: "Dr. Qian Liu",
      department: "Department of Computer Science and Engineering",
      university: "Krirk University",
      location: "Thailand"
    }, 
    {
      name: "Dr. Sidaoui Boutkhil",
      department: "Department of Computer Science",
      university: "Salhi Ahmed University of Naama",
      location: "Algeria"
    },
    {
      name: "Dr. Shriram Pandey",
      department: "Department of Computer Science",
      university: "University of East London",
      location: "United Kingdom"
    },
    {
      name: "Dr. Tejas Dhote",
      department: "Department of Mechanical Engineering",
      university: "Michigan Technological University",
      location: "USA"
    },
    {
      name: "Dr. Thien B. Nguyen-Tat",
      department: "Department of Information Technology",
      university: "National Cheng Kung University",
      location: "Taiwan"
    },
    {
      name: "Dr. Masoud Asghari",
      department: "Department of Computer Engineering",
      university: "University of Maragheh",
      location: "Iran"
    },
    {
      name: "Dr. Abderrahim Boukhalat",
      department: "Department of Computer Science",
      university: "University Mohamed Boudiaf",
      location: "Algeria"
    },
   {
      name: "Dr. Theopilus Bayu Sasongko",
      department: "Department of Informatics",
      university: "University of Amikom Yogyakarta",
      location: "Indonesia"
    },
    {
      name: "Dr. Ghulam Gilanie",
      department: "Department of Computer Science",
      university: "The Islamia University of Bahawalpur",
      location: "Pakistan"
    },
    
    {
      name: "Dr.Md Al Mustanjid",
      department: "Department of Software Engineering",
      university: "Daffodil International University",
      location: "Bangladesh"
    },
    {
      name: "Dr. Yonglin Chen",
      department: "Department of Computer Science and Engineering",
      university: "Lanzhou University",
      location: "China"
    },
    {
      name: "Dr.V. Maheshwari",
      department: "Department of Information Technology and Computer Application",
      university: "Vellore Institute of Technology",
      location: "India"
    },
    {
      name: "Dr. Ayodeji Oludola",
      department: "Department of Computer Science and Engineering",
      university: "Obafemi Awolowo University",
      location: "Nigeria"
    },
    {
      name: "Dr. Sinarring Azi Laga",
      department: "Department of Informatics Technology",
      university: "University of Hayam Wuruk Perbanas",
      location: "Indonesia"
    },
    
    {
      name: "Dr. Abolfazl Gandomi",
      department: "Department of Computer Engineering",
      university: "Islamic Azad University",
      location: "Iran"
    },
    {
      name: "Dr. Collins N. Udanor",
      department: "Department of Computer Science",
      university: "University of Nigeria",
      location: "Nigeria"
    },
    {
      name: "Dr.Md Moshiur Rahman",
      department: "Department of Computer Science and Engineering",
      university: "Bangladesh Open University",
      location: "Bangladesh"
    },
    {
      name: "Dr. Saqib Amin",
      department: "Department of Information Technology",
      university: "iphah International University ",
      location: "Pakistan"
    },
    
    {
      name: "Dr. Daban Kadhim Omar Dabbagh",
      department: "Department of Geography",
      university: "Salahaddin University",
      location: "Iraq"
    },
    {
      name: "Dr. Hea Choon Ngo",
      department: "Department of Electronics and Communication Engineering",
      university: "Universiti Teknikal Malaysia Melaka",
      location: "Malaysia"
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

      <div className="xl:max-w-[1450px]  md:max-w-[920px] mx-auto p-4">
        <h4 id="organizing-committee" className="scroll-mt-20 namdhinggo-semibold text-[30px] lg:text-[40px] text-center">Organizing Committee</h4>
        <div className="max-w-[1300px] mx-auto p-3">
          {Organizingcommitte.map((editor, index) => (
            <div key={index}>
              <div className='flex gap-2  mb-2 items-center'>
                <FaCircleUser className='text-gray-600 flex-shrink-0' />
                <p className="text-gray-700 text-[15px]"><span className='font-medium text-[16px] text-black'>{editor.name}</span> - {editor.department}, {editor.university}, {editor.location}.</p>
              </div>
            </div>
          ))}
        </div>

        <h4 id="technical-committee" className="scroll-mt-20 namdhinggo-semibold text-[30px] lg:text-[40px] text-center mt-10">Technical Program Committee</h4>
        <div className="max-w-[1300px] mx-auto p-3">
          {technicalcomiittee.map((editor, index) => (
            <div key={index}>
              <div className='flex gap-2  mb-2 items-center'>
                <FaCircleUser className='text-gray-600 flex-shrink-0' />
                <p className="text-gray-700 text-[15px]"><span className='font-medium text-[16px] text-black'>{editor.name}</span> - {editor.department}, {editor.university}, {editor.location}.</p>
              </div>
            </div>
          ))}
        </div>

        <h4 id="advisory-committee" className="scroll-mt-20 namdhinggo-semibold text-[30px] lg:text-[40px] text-center mt-10">International Advisory Board Committee</h4>
        <div className="max-w-[1300px] mx-auto p-3">
          {advisorycommittee.map((editor, index) => (
            <div key={index}>
              <div className='flex gap-2  mb-2 items-center'>
                <FaCircleUser className='text-gray-600 flex-shrink-0' />
                <p className="text-gray-700 text-[15px]"><span className='font-medium text-[16px] text-black'>{editor.name}</span> - {editor.department}, {editor.university}, {editor.location}.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
