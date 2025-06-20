import { Link } from "react-router-dom";

export default function ConferenceTracks() {
    return (
        <>
            <div className="relative bg-cover bg-center flex flex-col items-start justify-center pt-[50px] sm:pt-[60px] h-[250px] sm:h-[350px] md:h-[400px] lg:h-[400px] 2xl:h-[400px]" style={{ backgroundImage: "url('/assets/images/Banner.jpg')" }} >
                {/* Overlay */}
                {/* <div className="absolute inset-0 bg-[#000000] opacity-25"></div> */}
                {/* Centered Content */}
                <div className="xl:max-w-[1500px]  md:max-w-[920px] mx-auto w-full px-10">
                    <h3 className="inter-semibold text-3xl sm:text-4xl md:text-[50px] text-white">
                        Conference Tracks
                    </h3>
                    <nav className="mt-2 sm:mt-4">
                        <ol className="flex space-x-2 text-white  inter-semibold">
                            <li>
                                <Link to="/" className="hover:text-[#FABF2B] text-[20px]">
                                    Home
                                </Link>
                            </li>
                            <li className="text-white text-[20px]">/</li>
                            <li className="text-[#FABF2B] text-[20px]">Conference Tracks</li>
                        </ol>
                    </nav>
                </div>
            </div>

            <div className="xl:max-w-[1450px]  md:max-w-[920px] mx-auto p-4 lg:mt-18 mt-5 space-y-15">
                <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">The <span className="inter-semibold text-gray-900">International Conference on Machine Learning and Data Analytics</span>  features a diverse and comprehensive set of conference tracks, carefully curated to spotlight the latest advancements, real-world applications, and cutting-edge research in the rapidly evolving fields of machine learning, artificial intelligence, and data science. These tracks provide a focused environment for academics, researchers, industry professionals, and students to engage with specialized topics — from foundational machine learning algorithms to next-generation AI applications in healthcare, finance, education, cybersecurity, and beyond.</p>

                <div className="space-y-8">
                    {[
                        {
                            icon: <img src="/assets/images/Intelligence.png" alt="Track" className="w-9 h-9" />,
                            title: "Machine Learning",
                            description: "This track delves into the foundations and advancements in machine learning algorithms, covering supervised, unsupervised, and reinforcement learning techniques. It emphasizes their practical applications across various domains such as business, education, agriculture, and smart systems. Researchers and practitioners are invited to present novel models, performance evaluations, and deployment strategies that bridge the gap between theory and real-world impact."
                        },
                        {
                            icon: <img src="/assets/images/Intelligence.png" alt="Track" className="w-9 h-9" />,
                            title: "Big Data Analytics",
                            description: "With data growing at an unprecedented rate, this track focuses on tools, frameworks, and methodologies for handling and analyzing massive datasets. Topics include distributed computing, real-time analytics, cloud-based data processing, and visualization. Attendees will gain insights into how big data is being used to drive innovation, strategic decision-making, and business transformation."
                        },
                        {
                            icon: <img src="/assets/images/Intelligence.png" alt="Track" className="w-9 h-9" />,
                            title: "Natural Language Processing",
                            description: "This track invites contributions related to the processing and understanding of human language using AI. Areas include large language models, text mining, machine translation, sentiment analysis, chatbot systems, and speech recognition. Emphasis will be placed on both linguistic theory and practical NLP tools that enable machines to interpret and generate human language effectively."
                        },
                        {
                            icon: <img src="/assets/images/Intelligence.png" alt="Track" className="w-9 h-9" />,
                            title: "Computer Vision & Image Processing",
                            description: "This track covers advancements in visual computing, including object detection, facial recognition, scene understanding, and augmented reality. Research involving image segmentation, video analysis, and the integration of vision systems in robotics and autonomous vehicles is also welcomed. It serves as a platform to explore the latest tools and technologies enabling machines to see and interpret the visual world."
                        },
                        {
                            icon: <img src="/assets/images/Intelligence.png" alt="Track" className="w-9 h-9" />,
                            title: "Ethics, Fairness & Responsible AI ",
                            description: "As AI becomes deeply embedded in society, this track addresses the critical need for responsible and ethical innovation. Topics include algorithmic bias, transparency, explainability, data privacy, and regulatory compliance. Discussions will center around building AI systems that are fair, accountable, and aligned with human values and societal norms. Topics include classification, clustering, association rule mining, and anomaly detection."
                        },
                    ].map((feature, index) => (
                        <div
                            key={index}
                            className="bg-[#EAF6FE] rounded-lg overflow-hidden shadow-md border border-gray-100 p-6"
                        >
                            <div className="flex items-center mb-4 ">
                                <div className="bg-[#22367C] p-2 rounded-lg flex-shrink-0">
                                    {feature.icon}
                                </div>
                                <h3 className="ml-4 text-xl font-semibold text-gray-900">{feature.title}</h3>
                            </div>
                            <p className="text-gray-600 poppins-regular text-sm sm:text-base md:text-lg lg:text-[16px] text-justify">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>


        </>
    )
}
