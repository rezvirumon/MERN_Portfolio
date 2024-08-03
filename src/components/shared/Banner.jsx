import React, { useState, useEffect } from "react";
import { IoMdDownload } from "react-icons/io";
import { motion } from 'framer-motion';

const Banner = () => {
    const [bannerData, setBannerData] = useState({
        imageSrc: "",
        greeting: "",
        name: "",
        description: "",
        readMoreLink: "",
        buttonText: ""
    });

    useEffect(() => {
        fetch('http://localhost:5000/api/banner')
            .then(response => response.json())
            .then(data => {
                if (data) {
                    setBannerData({
                        imageSrc: data.banner,
                        greeting: data.greeting,
                        name: data.name,
                        description: data.description,
                        readMoreLink: data.readMoreLink,
                        buttonText: data.buttonText
                    });
                }
            })
            .catch(error => console.error('Error fetching banner data:', error));
    }, []);

    return (
        <div className="bg-base-200 py-10">
            <div className="container mx-auto">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={bannerData.imageSrc}
                        className="lg:max-w-sm w-full object-cover h-96 mb-6 lg:mb-0 lg:mr-6 border-purple-700 shadow-xl"
                        alt={bannerData.name}
                    />
                    <div>
                        <h1 className="text-xl font-bold">{bannerData.greeting}</h1>
                        <motion.h1
                            className="lg:text-5xl text-3xl py-6 font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-green-500"
                            initial={{ scale: 1 }}
                            animate={{
                                scale: [1, 1.05, 1],
                                opacity: [1, 0.8, 1]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatType: 'loop',
                                ease: 'easeInOut'
                            }}
                        >
                            {bannerData.name}
                        </motion.h1>
                        <p className="pb-6">
                            {bannerData.description} <a href={bannerData.readMoreLink} className="text-purple-500">Read More.....</a>
                        </p>
                        
                        <button className="btn bg-purple-600 text-white">
                            {bannerData.buttonText} <span className="animate-bounce"><IoMdDownload /></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
