import { PiCalendarCheckFill } from "react-icons/pi";
import { IoLocationOutline, IoLocationSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { IoIosAlarm, IoIosCheckmarkCircle } from "react-icons/io";

function Homepage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-[url('/assets/images/Hero.jpg')] bg-cover  bg-right lg:h-screen flex items-center">
        <div className="w-full xl:max-w-[1450px]  md:max-w-[920px] mx-auto p-4  mt-25 lg:mt-20">
          <div className="flex flex-col gap-4 lg:gap-6 justify-start">

            <div className="flex flex-col gap-3 lg:gap-6">
              <p className="namdhinggo-medium text-lg sm:text-xl md:text-2xl text-white">- Welcome to Our Conference</p>
              <h1 className="namdhinggo-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white leading-tight lg:leading-[4rem] max-w-5xl">
                International Conference on <span className="text-[#FFDB00]">Machine Learning</span> and <span className="text-[#FFDB00]">Data Analytics</span>
              </h1>
            </div>

            <div className="flex flex-col gap-4 lg:gap-6">
              <p className="inter-medium text-base sm:text-lg md:text-xl text-gray-200">
                Powering the Future with Machine Learning & Data Analytics and Unlocking Insights, Fueling Innovation
              </p>
              <div className="w-full max-w-[1200px]">
                <p className="inter-regular text-sm sm:text-base md:text-lg lg:text-[16px] text-justify leading-[26px] md:leading-[30px] text-gray-300">
                  Join us at the International Conference on Machine Learning and Data Analytics, where leading researchers, data scientists,
                  and industry experts converge to share cutting-edge developments, breakthrough research, and emerging trends in machine
                  learning, data science, and intelligent analytics. Discover the future of data-driven innovation and intelligent
                  decision-making.
                </p>
              </div>

              <div className="flex gap-3 sm:gap-4 lg:gap-5">
                <div className="flex items-center gap-2 bg-[#FFDB00] text-black px-4 py-2 rounded-md cursor-pointer">
                  <PiCalendarCheckFill className="text-2xl md:text-2xl" />
                  <p className="text-sm md:text-base lg:text-lg inter-medium">3<sup>rd</sup> September, 2025</p>
                </div>
                <div className="flex items-center gap-2 border-2 border-white text-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition duration-300 cursor-pointer">
                  <IoLocationOutline className="text-2xl md:text-2xl" />
                  <p className="text-sm md:text-base lg:text-lg">Changi, Singapore</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* About the Conference */}
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
                <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] ">The <span className="inter-bold text-gray-900">International Conference on Machine Learning and Data Analytics</span> is a premier global event dedicated to advancing the fields of machine learning and data analytics through innovation, collaboration, and knowledge exchange. It offers a dynamic platform to explore cutting-edge advancements, share groundbreaking research, and address real-world challenges with data-driven solutions.</p>
              </div>
              <div className="bg-[#EAF6FE] p-5 rounded-md">
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row gap-1">
                    <IoIosCheckmarkCircle className=" text-[#22367C] text-3xl flex-shrink-0" />
                    <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] "><span className="inter-medium text-black">World-Class Speakers:</span> Engage with renowned experts presenting the latest advancements in AI and data analytics.</p>
                  </div>
                  <div className="flex flex-row gap-1">
                    <IoIosCheckmarkCircle className="text-[#22367C] text-3xl flex-shrink-0" />
                    <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] "><span className="inter-medium text-black">Diverse Sessions:</span> Explore a range of technical talks, poster presentations, and panel discussions on cutting-edge topics.</p>
                  </div>
                  <div className="flex flex-row gap-1">
                    <IoIosCheckmarkCircle className="text-[#22367C] text-3xl flex-shrink-0" />
                    <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] "><span className="inter-medium text-black">Interactive Workshops:</span> Participate in hands-on sessions to gain practical skills and insights from industry leaders.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" lg:block hidden ">
            <div className="flex justify-center">
              <img src="/assets/images/Abouthero.jpg" alt="Aboutimage" className='w-full max-w-lg' />
            </div>
          </div>

        </div>
      </div>




      {/* Our mission */}
      <div className="xl:max-w-[1450px]  md:max-w-[920px] mx-auto p-4 lg:mt-10 mt-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center lg:gap-20 gap-10">
          <div className=" lg:block hidden ">
            <div className="flex justify-center">
              <img src="/assets/images/Abouthero2.jpg" alt="Aboutimage" className='w-full max-w-lg' />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-3 ">
              <h2 className="text-[#FABF2B] inter-semibold">OUR MISSION</h2>
              <p className="inter-semibold text-[25px] lg:text-[40px] ">Empowering progress through ML and DA</p>
            </div>
            <div className="lg:hidden block mt-5">
              <div className="flex justify-center">
                <img src="/assets/images/Abouthero2.jpg" alt="Aboutimage" className='w-full max-w-md ' />
              </div>
            </div>

            <div className="flex flex-col gap-7 mt-4 lg:mt-5">
              <div>
                <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] ">The <span className="inter-bold text-gray-900">International Conference on Machine Learning and Data Analytics</span> is a leading global forum dedicated to exploring the transformative potential of machine learning and data analytics across diverse industries and disciplines. Our scope encompasses fostering innovative research, and showcasing practical applications that address pressing global challenges.</p>
              </div>
              <div className="bg-[#EAF6FE] p-5 rounded-md">
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row gap-1">
                    <IoIosCheckmarkCircle className=" text-[#22367C] text-3xl flex-shrink-0" />
                    <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]"><span className="inter-medium text-black">Cutting-Edge Discoveries:</span> Highlight the latest advancements in machine learning algorithms, models, and data analytics techniques.</p>
                  </div>
                  <div className="flex flex-row gap-1">
                    <IoIosCheckmarkCircle className="text-[#22367C] text-3xl flex-shrink-0" />
                    <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]"><span className="inter-medium text-black">Emerging Trends:</span> Explore novel methodologies, such as deep learning, reinforcement learning, and big data analytics.</p>
                  </div>
                  <div className="flex flex-row gap-1">
                    <IoIosCheckmarkCircle className="text-[#22367C] text-3xl flex-shrink-0" />
                    <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]"><span className="inter-medium text-black">Peer-Reviewed Contributions:</span> Present high-quality, original research through papers, posters, and presentations.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* <div className="p-4 lg:mt-10 mt-5 bg-[#EAF6FE]">
        <div className="xl:max-w-[1450px]  md:max-w-[920px] mx-auto py-8">
          <h3 className="text-black inter-bold text-lg">OUR FEATURED SPEAKERS</h3>
          <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] mt-3">The International Conference on Machine Learning and Data Analytics proudly presents a distinguished lineup of featured speakers who are shaping the future of AI and data science. These global thought leaders, renowned researchers, and industry innovators will share their expertise through captivating keynotes, technical talks, and interactive panels. Attendees will gain insights into the latest advancements, practical applications, and ethical considerations in machine learning and data analytics, inspiring new ideas and collaborations.</p>
          <div className="grid grid-cols-1 lg:grid-cols-3  lg:gap-20 gap-10 mt-13 max-w-[60rem] mx-auto">
            <div className="border-5 border-gray-300 rounded-xl">
              <div className="flex flex-col justify-center items-center gap-2 mt-3">
                <img src="/assets/images/Speaker.png" alt="Speaker" className="h-50 " />
                <div className="bg-[#FFDB00] rounded-bl-md rounded-br-md p-2  w-full">
                  <div className="flex flex-col  justify-center items-center">
                    <p className="namdhinggo-semibold text-black text-xl sm:text-2xl md:text-2xl lg:text-4xl">John Matthews</p>
                    <p className="inter-regular sm:text-base md:text-lg lg:text-[16px] text-black">Senior Research Analyst</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-5 border-gray-300 rounded-xl">
              <div className="flex flex-col justify-center items-center gap-2 mt-3">
                <img src="/assets/images/Speaker.png" alt="Speaker" className="h-50" />
                <div className="bg-[#FFDB00] rounded-bl-md rounded-br-md p-2  w-full">
                  <div className="flex flex-col  justify-center items-center">
                    <p className="namdhinggo-semibold text-black text-xl sm:text-2xl md:text-2xl lg:text-4xl">John Matthews</p>
                    <p className="inter-regular sm:text-base md:text-lg lg:text-[16px] text-black">Senior Research Analyst</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-5 border-gray-300 rounded-xl">
              <div className="flex flex-col justify-center items-center gap-2 mt-3">
                <img src="/assets/images/Speaker.png" alt="Speaker" className="h-50" />
                <div className="bg-[#FFDB00] rounded-bl-md rounded-br-md p-2  w-full">
                  <div className="flex flex-col  justify-center items-center">
                    <p className="namdhinggo-semibold text-black text-xl sm:text-2xl md:text-2xl lg:text-4xl">John Matthews</p>
                    <p className="inter-regular sm:text-base md:text-lg lg:text-[16px] text-black">Senior Research Analyst</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div> */}



      {/* Join Us at INCOCSA 2025 */}
      <div className="xl:max-w-[1450px]  md:max-w-[920px] mx-auto p-4 lg:mt-10 mt-5">
        <h4 className="namdhinggo-semibold text-[25px] lg:text-[40px] text-center">ICMLDA 2025: Innovate & Connect</h4>
        <div className="grid grid-cols-1 lg:grid-cols-3  lg:gap-20 gap-10 lg:mt-8 mt-4 mx-auto">
          <div className="col-span-2">
            <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Immerse yourself in the forefront of innovation at the International Conference on Machine Learning and Data Analytics (ICMLDA) 2025, where the brightest minds in AI and data science converge to shape the future. Experience transformative research presentations that unveil the latest breakthroughs in machine learning algorithms, data analytics techniques, and their real-world applications across industries like healthcare, finance, and sustainability.</p>
            <div className="flex flex-col gap-5 mt-7">
              <p className="text-black inter-bold text-lg">Connect with Industry Leaders</p>
              <div className="flex flex-row gap-1">
                <IoIosCheckmarkCircle className=" text-[#22367C] text-3xl flex-shrink-0" />
                <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]"><span className="inter-medium text-black">Networking Events:</span> Build relationships with global experts, executives, and policymakers in dedicated networking spaces.</p>
              </div>
              <div className="flex flex-row gap-1">
                <IoIosCheckmarkCircle className=" text-[#22367C] text-3xl flex-shrink-0" />
                <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]"><span className="inter-medium text-black">Panel Discussions:</span> Join conversations with thought leaders addressing challenges and opportunities in AI and data science.</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 justify-center">
            <div className="bg-[#FFDB00] rounded-md p-2 py-5">
              <div className="flex flex-row items-center gap-2 px-5">
                <IoLocationSharp className='text-4xl text-black' />
                <div className="flex flex-col gap-2">
                  <p className="inter-regular sm:text-base md:text-lg lg:text-[16px] text-gray-700">Location</p>
                  <p className="inter-semibold sm:text-base md:text-lg lg:text-[16px] text-black">Changi, Singapore</p>
                </div>
              </div>
            </div>
            <div className="bg-[#FFDB00] p-2 rounded-md py-5">
              <div className="flex flex-row items-center gap-2 px-5">
                <PiCalendarCheckFill className='text-4xl text-black' />
                <div className="flex flex-col gap-2">
                  <p className="inter-regular sm:text-base md:text-lg lg:text-[16px] text-gray-700">Date</p>
                  <p className="inter-semibold sm:text-base md:text-lg lg:text-[16px] text-black">3<sup>rd</sup> September, 2025</p>
                </div>
              </div>
            </div>
            <div className="bg-[#FFDB00] p-2 rounded-md py-5">
              <div className="flex flex-row items-center gap-2 px-5">
                <IoIosAlarm className='text-4xl text-black' />
                <div className="flex flex-col gap-2">
                  <p className="inter-regular sm:text-base md:text-lg lg:text-[16px] text-gray-700">Duration</p>
                  <p className="inter-semibold sm:text-base md:text-lg lg:text-[16px] text-black">9:00 AM – 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default Homepage