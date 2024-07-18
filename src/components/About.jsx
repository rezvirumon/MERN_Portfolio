import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

// Define JSON data (can be imported from a separate file or defined inline)
const profileData = {
    name: "MD HASAN ALI",
    role: "Networking Engineer and MERN Stack Developer",
    description: "Hi, I'm a passionate Networking Engineer and proficient MERN Stack Developer. With a strong foundation in network infrastructure and a deep understanding of modern web development technologies, I bridge the gap between reliable network solutions and innovative software applications. My expertise lies in designing, implementing, and managing complex network systems while simultaneously crafting dynamic, high-performance web applications using MongoDB, Express.js, React, and Node.js. This unique combination of skills allows me to deliver comprehensive solutions that are both robust and scalable, ensuring seamless connectivity and exceptional user experiences....",
    imageUrl: "https://www.infolinkbd.com/admin/public/assets_new/images/_1720697809.png",
    socialIcons: [
        { id: 1, icon: FaGithub, link: "https://github.com/rezvirumon", name: "GitHub" },
        { id: 2, icon: FaLinkedin, link: "https://linkedin.com/in/example", name: "LinkedIn" },
        { id: 3, icon: FaFacebook, link: "https://facebook.com/example", name: "Facebook" },
        { id: 4, icon: FaWhatsapp, link: "https://wa.me/phone-number", name: "WhatsApp" }
    ]
};

const About = () => {
    return (
        <div className="p-4 bg-base-200 my-10">
            <h2 className="text-center my-10 text-3xl font-semibold border-b pb-4 border-purple-700">About</h2>
            <div className="container mx-auto">
                <div className="flex flex-col-reverse lg:flex-row lg:justify-between items-center">
                    <div className="lg:w-1/2">
                        <p className="text-justify">
                            {profileData.description}
                        </p>
                        {/* Social Icons */}
                        <div className="flex gap-5 text-2xl my-5 justify-center lg:justify-start">
                            {profileData.socialIcons.map((iconData) => (
                                <a key={iconData.id} href={iconData.link} target="_blank" rel="noopener noreferrer" className="border hover:border-purple-600 transition-all ease-in-out p-2 ">
                                    <iconData.icon title={iconData.name} />
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="lg:w-1/2 flex justify-center lg:justify-end mb-6 lg:mb-0 lg:ml-6">
                        <img
                            src={profileData.imageUrl}
                            className="p-2 border-2 h-96 shadow-2xl border-purple-700"
                            alt={profileData.name}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
