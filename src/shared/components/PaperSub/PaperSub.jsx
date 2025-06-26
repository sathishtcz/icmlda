import { useState } from "react";
import { FiUploadCloud } from "react-icons/fi";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function PaperSub() {

    const [fileName, setFileName] = useState('Click to Upload Paper');

    // const handleFileChange = (e) => {
    //     if (e.target.files.length > 0) {
    //         setFileName(e.target.files[0].name);
    //     }
    // };

    const [formData, setFormData] = useState({
        Paper_Title: '',
        Author_FUll_Name: '',
        Email_Address: '',
        Institution_Name: '',
        Paper_Track: '',
        Paper_File: null,
    });
    const [status, setStatus] = useState('');

    // const handleChange = (e) => {
    //     if (e.target.type === 'file') {
    //         setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    //     } else {
    //         setFormData({ ...formData, [e.target.name]: e.target.value });
    //     }
    // };

    const handleFileInputChange = (e) => {
        const { name, type, files, value } = e.target;

        // For file preview display
        if (files && files.length > 0) {
            setFileName(files[0].name); // update UI
            setFormData((prev) => ({
                ...prev,
                [name]: files[0], // update actual form data
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        try {
            const formDataToSend = new FormData();
            formDataToSend.append('Paper_Title', formData.Paper_Title);
            formDataToSend.append('Author_FUll_Name', formData.Author_FUll_Name);
            formDataToSend.append('Email_Address', formData.Email_Address);
            formDataToSend.append('Institution_Name', formData.Institution_Name);
            formDataToSend.append('Paper_Track', formData.Paper_Track);

            if (formData.Paper_File) {
                formDataToSend.append('Paper_File', formData.Paper_File);
            }

            const response = await fetch('http://192.168.29.11/ICMLDA/Icmlda/mail.php', {
                method: 'POST',
                body: formDataToSend,
            });

            if (response.ok) {
                const result = await response.text();
                setStatus(result);
                setFormData({
                    Paper_Title: '',
                    Author_FUll_Name: '',
                    Email_Address: '',
                    Institution_Name: '',
                    Paper_Track: '',
                    Paper_File: null,
                });
                // document.getElementById('Paper_File').value = '';
                toast.success("Paper submitted successfully!");
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
                        Paper Submission

                    </h3>
                    <nav className="mt-2 sm:mt-4">
                        <ol className="flex space-x-2 text-white  inter-semibold">
                            <li>
                                <Link to="/" className="hover:text-[#FABF2B] text-[20px]">
                                    Home
                                </Link>
                            </li>
                            <li className="text-white text-[20px]">/</li>
                            <li className="text-[#FABF2B] text-[20px]">Paper Submission
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>

            <div className="xl:max-w-[1450px]  md:max-w-[920px] mx-auto p-4 lg:mt-18 mt-5 space-y-15">
                <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">The International Conference on Machine Learning and Data Analytics invites researchers, academicians, industry professionals, and students to submit original, unpublished research papers that demonstrate significant contributions to the fields of machine learning, artificial intelligence, data science, and intelligent systems. We welcome high-quality submissions that advance the state of the art in theory, methodology, and applications. Selected papers will be peer-reviewed by our expert panel and included in the official conference proceedings.</p>
            </div>


            <div className="xl:max-w-[1400px]  md:max-w-[920px] mx-auto lg:mt-18 mt-5 p-4">
                <div className="grid grid-cols-1 lg:grid-cols-2  lg:h-full lg:items-stretch">
                    <div className=" w-full h-full">
                        <div className="bg-[#22367C]  p-6 h-full rounded-tl-lg rounded-bl-lg">
                            <div className="flex flex-col gap-5 mt-7">
                                <p className="text-white inter-medium text-lg text-center">Submission Guidelines:</p>
                                <div className="flex flex-row gap-1">
                                    <IoIosCheckmarkCircle className=" text-[#FABF2B] text-3xl flex-shrink-0" />
                                    <p className="inter-regular text-gray-300 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Provide the title of your paper, which should be descriptive and concise.</p>
                                </div>
                                <div className="flex flex-row gap-1">
                                    <IoIosCheckmarkCircle className=" text-[#FABF2B] text-3xl flex-shrink-0" />
                                    <p className="inter-regular text-gray-300 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Enter the full name of the first author as it appears on the paper.</p>
                                </div>
                                <div className="flex flex-row gap-1">
                                    <IoIosCheckmarkCircle className=" text-[#FABF2B] text-3xl flex-shrink-0" />
                                    <p className="inter-regular text-gray-300 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Enter a valid mobile number (10-15 digits, country code optional).</p>
                                </div>
                                <div className="flex flex-row gap-1">
                                    <IoIosCheckmarkCircle className=" text-[#FABF2B] text-3xl flex-shrink-0" />
                                    <p className="inter-regular text-gray-300 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Provide a working email address for the first author to receive notifications.</p>
                                </div>
                                <div className="flex flex-row gap-1">
                                    <IoIosCheckmarkCircle className=" text-[#FABF2B] text-3xl flex-shrink-0" />
                                    <p className="inter-regular text-gray-300 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Enter the name of the institution the first author is affiliated with.</p>
                                </div>
                                <div className="flex flex-row gap-1">
                                    <IoIosCheckmarkCircle className=" text-[#FABF2B] text-3xl flex-shrink-0" />
                                    <p className="inter-regular text-gray-300 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Choose the relevant category for the first author.</p>
                                </div>
                                <div className="flex flex-row gap-1">
                                    <IoIosCheckmarkCircle className=" text-[#FABF2B] text-3xl flex-shrink-0" />
                                    <p className="inter-regular text-gray-300 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Ensure your paper is in PDF or DOC format and does not exceed 5MB in size.</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-5 mt-7">
                                <p className="text-white inter-medium text-lg text-center">Important Notes:</p>
                                <div className="flex flex-row gap-1">
                                    <IoIosCheckmarkCircle className=" text-[#FABF2B] text-3xl flex-shrink-0" />
                                    <p className="inter-regular text-gray-300 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">All papers undergo a double-blind peer review process.</p>
                                </div>
                                <div className="flex flex-row gap-1">
                                    <IoIosCheckmarkCircle className=" text-[#FABF2B] text-3xl flex-shrink-0" />
                                    <p className="inter-regular text-gray-300 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">At least one author must register for the conference.</p>
                                </div>
                                <div className="flex flex-row gap-1">
                                    <IoIosCheckmarkCircle className=" text-[#FABF2B] text-3xl flex-shrink-0" />
                                    <p className="inter-regular text-gray-300 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Plagiarism checks will be performed.</p>
                                </div>
                                <div className="flex flex-row gap-1">
                                    <IoIosCheckmarkCircle className=" text-[#FABF2B] text-3xl flex-shrink-0" />
                                    <p className="inter-regular text-gray-300 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Multiple submissions are not allowed.</p>
                                </div>
                                <div className="flex flex-row gap-1">
                                    <IoIosCheckmarkCircle className=" text-[#FABF2B] text-3xl flex-shrink-0" />
                                    <p className="inter-regular text-gray-300 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Authors must present accepted papers at the conference.</p>
                                </div>
                                <div className="flex flex-row gap-1">
                                    <IoIosCheckmarkCircle className=" text-[#FABF2B] text-3xl flex-shrink-0" />
                                    <p className="inter-regular text-gray-300 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Papers will be published in the conference proceedings.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" w-full h-full">

                        <div className="bg-[#EAF6FE] p-6 sm:p-10 lg:p-12  shadow-md h-full rounded-br-lg rounded-tr-lg">
                            <h2 className="text-lg font-semibold mb-8 text-center">Submit Your Paper</h2>
                            <form onSubmit={handleSubmit} className="space-y-10">
                                <input
                                    type="text"
                                    name='Paper_Title'
                                    value={formData.Paper_Title}
                                    onChange={handleFileInputChange}
                                    required
                                    placeholder="Enter Your Paper Title"
                                    className="w-full border border-gray-600 focus:outline-none  rounded-xl px-3 py-4"
                                />
                                <input
                                    type="text"
                                    name='Institution_Name'
                                    value={formData.Institution_Name}
                                    onChange={handleFileInputChange}
                                    required
                                    placeholder="Enter Your Institution Name"
                                    className="w-full border border-gray-600 focus:outline-none  rounded-xl px-3 py-4"
                                />
                                <div className="flex flex-col xl:flex-row gap-4">
                                    <input
                                        type="text"
                                        name='Author_FUll_Name'
                                        value={formData.Author_FUll_Name}
                                        onChange={handleFileInputChange}
                                        required
                                        placeholder="Enter Author’s Full Name"
                                        className="flex-1 border border-gray-600 focus:outline-none  rounded-xl px-3 py-4"
                                    />
                                    <input
                                        type="email"
                                        name='Email_Address'
                                        value={formData.Email_Address}
                                        onChange={handleFileInputChange}
                                        required
                                        placeholder="Enter Author’s Email"
                                        className="flex-1 border border-gray-600 focus:outline-none  rounded-xl px-3 py-4"
                                    />
                                </div>
                                <select name='Paper_Track' value={formData.Paper_Track} onChange={handleFileInputChange}
                                    required className="w-full border border-gray-600 focus:outline-none  rounded-xl px-3 py-4 text-gray-500">
                                    <option>Select Your Category</option>
                                    <option>AI</option>
                                    <option>Machine Learning</option>
                                    <option>Data Science</option>
                                </select>
                                <div className="relative w-full border-2 border-dashed border-gray-600 rounded-xl py-10 flex flex-col items-center justify-center text-center text-gray-500 overflow-hidden cursor-pointer">
                                    <input
                                        name='Paper_File'
                                        // onChange={handleChange}
                                        accept=".pdf,.doc,.docx"
                                        type="file"
                                        onChange={handleFileInputChange}
                                        className="absolute inset-0 opacity-0 cursor-pointer z-10"
                                    />
                                    <FiUploadCloud className="text-3xl text-[#FABF2B] mb-2 z-0" />
                                    <p className="z-0">{fileName || "Click to Upload Paper"}</p>
                                </div>
                                <button
                                    type="submit"
                                    disabled={status === 'Sending...'}
                                    className="w-full bg-[#FABF2B] text-gray-900 py-3 rounded-xl  font-medium mt-4 cursor-pointer"
                                >
                                    {status === 'Sending...' ? 'Submitting...' : 'Submit Your Paper'}
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}
