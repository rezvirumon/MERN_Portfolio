import { IoMdDownload } from "react-icons/io";


const Banner = () => {
    return (
        <div className="my-24">
            <div className="container mx-auto">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src="https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/381315338_1774510516319266_310454091850888020_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGrn8KcOxBQGIExcj-nI91V0lAB07GbgxrSUAHTsZuDGq27_WNzn8SzBvM57rm79a8BhhBl2gQwULqcKyHzzMY9&_nc_ohc=8mOsuax14KoQ7kNvgFen-Db&_nc_ht=scontent.fdac138-1.fna&oh=00_AYBwpHeBXyqlJsHO-ncLnL2_Uun_D70E66w-TIwFjbNDEQ&oe=669DC410"
                        className="lg:max-w-sm w-full object-cover h-96 shadow-2xl mb-6 lg:mb-0 lg:mr-6 border-purple-700 shadow-xl"
                        alt="MD HASAN ALI"
                    />
                    <div>
                        <h1 className="text-xl font-bold">Hi! I am</h1>
                        <h1 className="lg:text-5xl text-3xl py-6 font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-green-500">
                            MD HASAN ALI
                        </h1>
                        <p className="pb-6">
                            Hi, I'm a passionate Networking Engineer and proficient MERN Stack Developer. With a strong foundation in network infrastructure and a deep understanding of modern web development technologies, I bridge the gap between reliable network solutions and innovative software applications. <a href="" className="text-purple-500">Read More.....</a>
                        </p>
                        
                        <button className="btn bg-purple-600 text-white">Download Resume <span className="animate-bounce"><IoMdDownload />
                        </span></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;