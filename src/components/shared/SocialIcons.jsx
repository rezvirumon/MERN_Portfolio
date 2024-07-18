import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const SocialIcons = () => {
    return (
        <div className="flex flex-col items-center space-y-4">
            <ul className="timeline timeline-vertical">
                <li>
                    <div className="timeline-middle">
                        <FaGithub className="hover:bg-orange-500 rounded-full p-2" size={40} />
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <FaLinkedin className="hover:bg-indigo-500 rounded-full p-2" size={40} />
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <FaFacebook className="hover:bg-blue-500 rounded-full p-2" size={40} />
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <FaWhatsapp className="hover:bg-green-500 rounded-full p-2" size={40} />
                    </div>
                    <hr />
                </li>
            </ul>
        </div>
    );
};

export default SocialIcons;
