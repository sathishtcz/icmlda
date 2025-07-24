import { useState } from "react";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { TfiEmail, TfiLocationPin } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
export default function Contactus() {

    const [formData, setFormData] = useState({
        Firstname: '',
        Lastname: '',
        Mobile_Number: '',
        Email_Address: '',
        Message: '',
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        if (e.target.type === 'file') {
            setFormData({ ...formData, [e.target.name]: e.target.files[0] });
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        try {
            const formDataToSend = new FormData();
            formDataToSend.append('Firstname', formData.Firstname);
            formDataToSend.append('Lastname', formData.Lastname);
            formDataToSend.append('Mobile_Number', formData.Mobile_Number);
            formDataToSend.append('Email_Address', formData.Email_Address);
            formDataToSend.append('Message', formData.Message);

            // if (formData.Paper_File) {
            //     formDataToSend.append('Paper_File', formData.Paper_File);
            // }

            const response = await fetch('https://icmlda.com/api/contact.php', {
                method: 'POST',
                body: formDataToSend,
            });

            if (response.ok) {
                const result = await response.text();
                setStatus(result);
                setFormData({
                    Firstname: '',
                    Lastname: '',
                    Mobile_Number: '',
                    Email_Address: '',
                    Message: '',
                });
                toast.success("Form submitted successfully!");
            } else {
                setStatus('Failed to send submission. Please try again.');
                toast.error('Failed to send submission. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            setStatus('An error occurred. Please try again.');
            toast.error('An error occurred. Please try again.');
        }
    };

    return (
        <>
            <div className="relative bg-cover bg-center flex flex-col items-start justify-center pt-[50px] sm:pt-[60px] h-[250px] sm:h-[350px] md:h-[400px] lg:h-[400px] 2xl:h-[400px]" style={{ backgroundImage: "url('/assets/images/Banner.jpg')" }} >
                {/* Overlay */}
                {/* <div className="absolute inset-0 bg-[#000000] opacity-25"></div> */}
                {/* Centered Content */}
                <div className="xl:max-w-[1500px]  md:max-w-[920px] mx-auto w-full px-10">
                    <h3 className="inter-semibold text-3xl sm:text-4xl md:text-[50px] text-white">
                        Contact Us
                    </h3>
                    <nav className="mt-2 sm:mt-4">
                        <ol className="flex space-x-2 text-white  inter-semibold">
                            <li>
                                <Link to="/" className="hover:text-[#FABF2B] text-[20px]">
                                    Home
                                </Link>
                            </li>
                            <li className="text-white text-[20px]">/</li>
                            <li className="text-[#FABF2B] text-[20px]">Contact Us</li>
                        </ol>
                    </nav>
                </div>
            </div>


            <div className="xl:max-w-[1450px]  md:max-w-[920px] mx-auto p-4 lg:mt-18 mt-5 space-y-15">
                <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">We’d love to hear from you! Whether you're a researcher seeking clarity on abstract submissions, an attendee looking for registration support, an organization interested in sponsorship or partnership opportunities, or simply curious about the event details — our dedicated team is here to assist you every step of the way. At ICMLDA, we value every inquiry and strive to provide timely, helpful responses to ensure your experience with the International Conference on Machine Learning and Data Analytics is smooth, informative, and rewarding. Don’t hesitate to reach out — we’re here to make your participation meaningful and hassle-free.</p>
            </div>

            {/* contact form */}

            <div className="bg-[#EAF6FE] px-4 py-10 lg:mt-18 mt-5">
                <div className="xl:max-w-[1400px]  md:max-w-[920px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:h-full lg:items-stretch">
                        <div className="lg:col-span-4 w-full h-full">
                            <div className="bg-[#22367C] rounded-lg p-6 h-full">
                                <div className="flex flex-col gap-4 text-center">
                                    <div className="flex flex-col  items-center">
                                        <TfiEmail className="text-[#FABF2B] text-4xl flex-shrink-0" />
                                        <p className="text-[16px] text-gray-400 inter-medium mt-2">Write To Us</p>
                                        <p className="text-white text-2xl inter-medium text-wrap break-all">info.icmlda@gmail.com</p>
                                    </div>
                                    <div className="flex flex-col  items-center">
                                        <TfiLocationPin className="text-[#FABF2B] text-5xl flex-shrink-0" />
                                        <p className="text-[16px] text-gray-400 inter-medium mt-2">Location</p>
                                        <p className="text-white text-2xl inter-medium">Changi, Singapore</p>
                                    </div> 
                                    <div className="flex justify-center">
                                        <img src="/assets/images/contact.png" alt="contact" className="w-45 h-45" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-8 w-full h-full">

                            <div className="bg-white p-6 sm:p-10 lg:p-12 rounded-lg shadow-md h-full">
                                <p className="text-[#FABF2B] inter-semibold mb-2 text-lg">Contact us</p>
                                <h2 className="inter-semibold text-[25px] lg:text-[40px] text-black mb-8">Get in touch with us</h2>
                                <form onSubmit={handleSubmit} className="space-y-9">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                                        <input
                                            type="text"
                                            name="Firstname"
                                            onChange={handleChange}
                                            value={formData.Firstname}
                                            required
                                            placeholder="Enter Your First Name"
                                            className="border-b border-gray-300 focus:outline-none py-2 placeholder-gray-400"
                                        />
                                        <input
                                            type="text"
                                            name="Lastname"
                                            onChange={handleChange}
                                            value={formData.Lastname}
                                            required
                                            placeholder="Enter Your Last Name"
                                            className="border-b border-gray-300 focus:outline-none py-2 placeholder-gray-400"
                                        />
                                        <input
                                            type="email"
                                            required
                                            name="Email_Address"
                                            onChange={handleChange}
                                            value={formData.Email_Address}
                                            placeholder="Enter Your Mail"
                                            className="border-b border-gray-300 focus:outline-none py-2 placeholder-gray-400"
                                        />
                                        <input
                                            type="text"
                                            required
                                            name="Mobile_Number"
                                            onChange={handleChange}
                                            value={formData.Mobile_Number}
                                            placeholder="Enter Your Phone Number"
                                            className="border-b border-gray-300 focus:outline-none py-2 placeholder-gray-400"
                                        />
                                    </div>

                                    <textarea
                                        rows="4"
                                        required
                                        name="Message"
                                        onChange={handleChange}
                                        value={formData.Message}
                                        placeholder="Enter Your Message"
                                        className="w-full border-b border-gray-300 focus:outline-none py-2 placeholder-gray-400"
                                    ></textarea>

                                    <button
                                        type="submit" disabled={status === 'Sending...'}
                                        className="bg-[#FABF2B] text-black px-6 py-2 rounded-md font-medium hover:bg-[#FABF2B] transition cursor-pointer"
                                    >
                                        {status === 'Sending...' ? 'Sending...' : 'Send Message'}
                                    </button>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
