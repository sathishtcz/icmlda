import { IoIosCheckmarkCircle } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Keydates() {
  return (
    <>
      <div className="relative bg-cover bg-center flex flex-col items-start justify-center pt-[50px] sm:pt-[60px] h-[250px] sm:h-[350px] md:h-[400px] lg:h-[400px] 2xl:h-[400px]" style={{ backgroundImage: "url('/assets/images/Banner.jpg')" }} >
        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-[#000000] opacity-25"></div> */}
        {/* Centered Content */}
        <div className="xl:max-w-[1500px]  md:max-w-[920px] mx-auto w-full px-10">
          <h3 className="inter-semibold text-3xl sm:text-4xl md:text-[50px] text-white">
            Keydates
          </h3>
          <nav className="mt-2 sm:mt-4">
            <ol className="flex space-x-2 text-white  inter-semibold">
              <li>
                <Link to="/" className="hover:text-[#FABF2B] text-[20px]">
                  Home
                </Link>
              </li>
              <li className="text-white text-[20px]">/</li>
              <li className="text-[#FABF2B] text-[20px]">Keydates</li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="xl:max-w-[1450px]  md:max-w-[920px] mx-auto p-4 lg:mt-10 mt-5">
        <div className="space-y-6">
          <div className="flex flex-col gap-3 ">
            <h2 className="text-[#FABF2B] inter-semibold">KEY DATES</h2>
            <p className="inter-semibold text-[25px] lg:text-[40px] ">Countdown to ICMLDA 2025</p>
          </div>
          <div className="space-y-4">
            <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] ">Stay on track with these important milestones for the International Conference on Machine Learning and Data Analytics (ICMLDA 2025). This timeline outlines all the crucial deadlines for abstract submissions, paper acceptance, registrations, and final preparations. Whether you're a presenter, participant, or sponsor, these dates will help you stay organized and plan your involvement effectively.</p>
            <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] ">Mark your calendar early, prepare your research in advance, and take advantage of early-bird opportunities to ensure a smooth and rewarding conference experience. We encourage all contributors to meet these deadlines to benefit from timely reviews, early confirmations, and maximum visibility within the conference program. Don't miss your chance to be part of this leading international event in the fields of machine learning and data analytics!</p>
          </div>
          <div className="space-y-5 max-w-3xl w-full">
            <div className="flex gap-2 items-start">
              <IoIosCheckmarkCircle className="text-[#22367C] text-3xl flex-shrink-0" />
              <div className="grid grid-cols-1 sm:grid-cols-[280px_1fr] inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] leading-[30px] w-full">
                <span className="inter-medium text-black whitespace-nowrap">Full Paper Submission Deadline</span>
                <span>: 31<sup>st</sup> July, 2025</span>
              </div>
            </div>

            <div className="flex gap-2 items-start">
              <IoIosCheckmarkCircle className="text-[#22367C] text-3xl flex-shrink-0" />
              <div className="grid grid-cols-1 sm:grid-cols-[280px_1fr] inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] leading-[30px] w-full">
                <span className="inter-medium text-black whitespace-nowrap">Notification of Acceptance</span>
                <span>: 12<sup>th</sup> August, 2025</span>
              </div>
            </div>

            <div className="flex gap-2 items-start">
              <IoIosCheckmarkCircle className="text-[#22367C] text-3xl flex-shrink-0" />
              <div className="grid grid-cols-1 sm:grid-cols-[280px_1fr] inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] leading-[30px] w-full">
                <span className="inter-medium text-black whitespace-nowrap">Final Paper Submission</span>
                <span>: 21<sup>st</sup> August, 2025</span>
              </div>
            </div>

            <div className="flex gap-2 items-start">
              <IoIosCheckmarkCircle className="text-[#22367C] text-3xl flex-shrink-0" />
              <div className="grid grid-cols-1 sm:grid-cols-[280px_1fr] inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] leading-[30px] w-full">
                <span className="inter-medium text-black whitespace-nowrap">Conference Dates</span>
                <span>: 3<sup>rd</sup> September, 2025</span>
              </div>
            </div>

          </div>


        </div>
      </div>
{/*
      <div className="xl:max-w-[1450px]  md:max-w-[920px] mx-auto p-4 lg:mt-10 mt-5">
        <div className="space-y-6">
          <div className="flex flex-col gap-3 ">
            <h2 className="text-[#FABF2B] inter-semibold uppercase">Registration Details</h2>
            <p className="inter-semibold text-[25px] lg:text-[40px] ">Secure Your Spot for ICMLDA 2025</p>
          </div>
          <div className="space-y-4">
            <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] ">Join a global network of innovators, researchers, professionals, and thought leaders at the International Conference on Machine Learning and Data Analytics (ICMLDA 2025). Register today to ensure your participation in one of the most anticipated conferences in the field of intelligent data technologies and applied AI. Whether you're presenting a paper, attending to gain insights, or exploring collaborative opportunities, your registration gives you full access to a dynamic and enriching experience. Early registration is highly encouraged to take advantage of discounted rates and to secure your place before seats fill up.</p>
            <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] ">Mark your calendar early, prepare your research in advance, and take advantage of early-bird opportunities to ensure a smooth and rewarding conference experience. We encourage all contributors to meet these deadlines to benefit from timely reviews, early confirmations, and maximum visibility within the conference program. Don't miss your chance to be part of this leading international event in the fields of machine learning and data analytics!</p>
          </div>
          <div className="space-y-5 max-w-3xl w-full">
            {[
              { label: "Account Name", date: "ICMLDA Conference" },
              { label: "Account Number", date: "123456789" },
              { label: "Branch ", date: "Chennai" },
              { label: "IFSC Code", date: "TMBL03000045" },
              { label: "MICR ", date: "605060005" },
            ].map((item, index) => (
              <div key={index} className="flex gap-2 items-start">
                <IoIosCheckmarkCircle className="text-[#22367C] text-3xl flex-shrink-0" />
                <div className="grid grid-cols-1 sm:grid-cols-[280px_1fr] inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] leading-[30px] w-full">
                  <span className="inter-medium text-black whitespace-nowrap">{item.label}</span>
                  <span className="">: {item.date}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div> */}
    </>
  )
}
