import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";



const About = () => {
    return (
        <div>
            <h2 className="text-center my-10 text-3xl font-semibold border-b pb-4 border-purple-700">About</h2>
            <div className="container mx-auto bg-base-100 ">
                <div className="lg:flex justify-between items-center">
                    <div>
                        <p className="">
                            Hi, I'm a passionate Networking Engineer and proficient MERN Stack Developer. With a strong foundation in network infrastructure and a deep understanding of modern web development technologies, I bridge the gap between reliable network solutions and innovative software applications. My expertise lies in designing, implementing, and managing complex network systems while simultaneously crafting dynamic, high-performance web applications using MongoDB, Express.js, React, and Node.js. This unique combination of skills allows me to deliver comprehensive solutions that are both robust and scalable, ensuring seamless connectivity and exceptional user experiences...
                        </p>
                        {/* Social Icons */}
                        <div className="flex gap-5 text-4xl my-5">
                            <FaGithub className="hover:bg-orange-500 rounded-full" />
                            <FaLinkedin className="hover:bg-indigo-500 rounded-full" />
                            <FaFacebook className="hover:bg-blue-500 rounded-full" />
                            <FaWhatsapp className="hover:bg-green-500 rounded-full" />

                        </div>
                    </div>
                    <img
                        src="https://www.infolinkbd.com/admin/public/assets_new/images/_1720697809.png"
                        className="p-2 border-2 h-96 shadow-2xl mb-6 lg:mb-0 lg:mr-6 border-purple-700 "
                        alt="MD HASAN ALI"
                    />
                </div>
            </div>
        </div>
    );
};

export default About;