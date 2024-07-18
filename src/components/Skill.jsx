import React, { useState, useEffect } from 'react';
import axios from 'axios';



const Skill = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        fetchSkills();
    }, []);

    const fetchSkills = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/skills');
            setSkills(response.data);
        } catch (error) {
            console.error('Error fetching skills:', error);
        }
    };

    const renderSkillIcon = (logoUrl) => {
        // You can handle rendering based on the logo URL or any other criteria
        // For example, if you have specific conditions based on the logo URL structure
        // Here, assuming you have the logo URL as an image
        return <img src={logoUrl} alt="Skill Logo" className="h-12 w-12" />;
    };

    return (
        <div>
            <h2 className="text-center my-10 text-3xl font-semibold border-b pb-4 border-purple-700">Skills</h2>
            <div className="container mx-auto text-center">
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
                    {skills.map((skill, index) => (
                        <div key={index} className="flex flex-col items-center border-purple-700 shadow-xl hover:bg-base-300 transition-all ease-in-out p-5">
                            <div className="text-6xl text-primary mb-4 p-2">
                                {renderSkillIcon(skill.logo)}
                            </div>
                            <p className="text-xl font-semibold">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skill;
