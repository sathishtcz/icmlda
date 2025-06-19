import { Link } from "react-router-dom";

export default function organizingcommittee() {
  return (
    <>
      <div className="relative bg-cover bg-center flex flex-col items-start justify-center pt-[50px] sm:pt-[60px] h-[250px] sm:h-[350px] md:h-[400px] lg:h-[400px] 2xl:h-[400px]" style={{ backgroundImage: "url('/assets/images/Banner.jpg')" }} >
        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-[#000000] opacity-25"></div> */}
        {/* Centered Content */}
        <div className="xl:max-w-[1500px]  md:max-w-[920px] mx-auto w-full px-10">
          <h3 className="inter-semibold text-3xl sm:text-4xl md:text-[50px] text-white">
            Organizing Committee
          </h3>
          <nav className="mt-2 sm:mt-4">
            <ol className="flex space-x-2 text-white  inter-semibold">
              <li>
                <Link to="/" className="hover:text-[#FABF2B] text-[20px]">
                  Home
                </Link>
              </li>
              <li className="text-white text-[20px]">/</li>
              <li className="text-[#FABF2B] text-[20px]">Organizing Committee</li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="xl:max-w-[1450px]  md:max-w-[920px] mx-auto p-4 lg:mt-18 mt-5">
        <div className="space-y-6">
          <div className="flex flex-col gap-3 ">
            <h2 className="text-[#FABF2B] inter-semibold">ORGANIZING COMMITTEE</h2>
            <p className="inter-semibold text-[25px] lg:text-[40px] ">Meet the Minds Behind ICMLDA 2025</p>
          </div>
          <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] ">The Organizing Committee of ICMLDA 2025 comprises a dedicated team of experts, scholars, and professionals committed to delivering a world-class conference experience. With a shared vision of advancing machine learning and data analytics, the committee oversees every aspect of the event — from program planning and speaker selection to logistics and outreach. Our members represent leading academic institutions, research organizations, and industry bodies, ensuring a perfect blend of innovation, academic integrity, and practical relevance. Together, we aim to create a collaborative, engaging, and impactful platform that inspires future advancements in intelligent data technologies.</p>
        </div>
      </div>

      <h3 className="inter-semibold text-[25px] lg:text-[40px]  text-center lg:mt-10 mt-5">The Core Team of ICMLDA 2025</h3>
      <div className="xl:max-w-[1450px]  md:max-w-[920px] mx-auto p-4 lg:mt-10 mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-25">
          {[
            ["Chairman", "Dr John Smith", "Principal", "M.E., Ph.D.,", "Chennai"],
            ["Convenors", "Dr John Smith", "Principal", "M.E., Ph.D.,", "Chennai"],
            ["Coordinator", "Dr John Smith", "Principal", "M.E., Ph.D.,", "Chennai"],
            ["Convenors", "Dr John Smith", "Principal", "M.E., Ph.D.,", "Chennai"],
            ["Members", "Dr John Smith", "Principal", "M.E., Ph.D.,", "Chennai"],
            ["Members", "Dr John Smith", "Principal", "M.E., Ph.D.,", "Chennai"],
          ].map(([committee, Name, position, quali, place], index) => (
            <div key={index} className="bg-white border-3 border-gray-300 rounded-lg">
              <div className="bg-[#22367C] h-48 rounded-t z-10 flex items-start justify-center">
                <p className="text-white inter-semibold text-center text-4xl mt-7">{committee}</p>
              </div>
              <div className="flex flex-col gap-3 items-center p-3 -mt-29 z-20">
                <div className="border-2 border-[#22367C] p-8 rounded-full bg-white ">
                  <img src="/assets/images/editor1.png" alt="User" className='w-30 h-32' />
                </div>
                <p className="inter-medium text-2xl text-black">{Name}</p>
                <div className="flex flex-col gap-2"> <p className="inter-semibold text-gray-900 sm:text-base md:text-lg lg:text-[18px] text-justify leading-[30px]">Prince Mohammed Bin Fahd University</p>
                  <div className="flex gap-2">
                    <div className='text-gray-600'><span className='inter-medium text-md text-gray-900'>Position :</span> {position}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className='text-gray-600'><span className='inter-medium text-md text-gray-900'>Qualification    :</span> {quali}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className='text-gray-600'><span className='inter-medium text-md text-gray-900'>Location :</span> {place}
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
