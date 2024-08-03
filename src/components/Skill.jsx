import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

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
        return <img src={logoUrl} alt="Skill Logo" className="h-12 w-12" />;
    };

    return (
        <div>
            <h2 className="text-center my-10 text-3xl font-semibold border-b pb-4 border-purple-700">Skills</h2>
            <div className="container mx-auto text-center">
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-center border-purple-700 shadow-xl p-5"
                            whileHover={{ scale: 1.05, rotate: 2 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                        >
                            <motion.div
                                className="text-6xl text-primary mb-4 p-2"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                {renderSkillIcon(skill.logo)}
                            </motion.div>
                            <p className="text-xl font-semibold">{skill.name}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skill;
