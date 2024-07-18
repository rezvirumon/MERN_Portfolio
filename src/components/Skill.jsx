import React from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaNetworkWired } from 'react-icons/fa';
import { GiCctvCamera } from 'react-icons/gi';
import { SiCisco, SiMikrotik, SiTailwindcss } from 'react-icons/si';

const Skill = () => {
    const skills = [
        { icon: <SiTailwindcss />, name: 'TailwindCSS' },
        { icon: <FaReact />, name: 'React' },
        { icon: <FaNodeJs />, name: 'Node.js' },
        { icon: <FaDatabase />, name: 'MongoDB' },
        { icon: <SiMikrotik />, name: 'MikroTik' },
        { icon: <SiCisco />, name: 'Cisco' },
        { icon: <FaNetworkWired />, name: 'OLT' },
        { icon: <GiCctvCamera />, name: 'CCTV' },
        // Add more skills as needed
    ];

    return (
        <div>
                <h2 className="text-center my-10 text-3xl font-semibold border-b pb-4 border-purple-700">Skills</h2>
            <div className="">
                <div className="container mx-auto text-center">
                    <div className="grid grid-cols-2 lg:grid-cols-4">
                        {skills.map((skill, index) => (
                            <div key={index} className="flex flex-col items-center border-purple-700 shadow-xl hover:bg-base-300 transition-all ease-in-out p-5">
                                <div className="text-6xl text-primary mb-4 p-2">
                                    {skill.icon}
                                </div>
                                <p className="text-xl font-semibold">{skill.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skill;
