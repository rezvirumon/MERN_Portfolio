import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaTimes } from 'react-icons/fa';

const SkillSetting = () => {
    const [skills, setSkills] = useState([]);
    const [newSkillName, setNewSkillName] = useState('');
    const [newSkillLogo, setNewSkillLogo] = useState('');

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

    const handleDeleteSkill = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/skills/${id}`);
            setSkills(skills.filter(skill => skill._id !== id));
        } catch (error) {
            console.error('Error deleting skill:', error);
        }
    };
    
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/skills', { name: newSkillName, logo: newSkillLogo });
            setSkills([...skills, response.data]);
            setNewSkillName('');
            setNewSkillLogo('');
        } catch (error) {
            console.error('Error adding skill:', error);
        }
    };

    return (
        <div className="container mx-auto my-10">
            <div className="bg-base-200 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h2 className="text-3xl font-semibold mb-4">Skill Settings</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="mt-4">
                        <label htmlFor="newSkill" className="block text-sm font-medium text-gray-700">Add New Skill</label>
                        <div className="flex items-center">
                            <input
                                id="newSkill"
                                type="text"
                                placeholder="Enter skill name"
                                className="block w-3/6 mt-1 p-2 border border-gray-300 rounded"
                                value={newSkillName}
                                onChange={(e) => setNewSkillName(e.target.value)}
                            />
                            <input
                                id="newSkillLogo"
                                type="text"
                                placeholder="Skill Logo URL"
                                className="ml-4 block w-64 mt-1 p-2 border border-gray-300 rounded"
                                value={newSkillLogo}
                                onChange={(e) => setNewSkillLogo(e.target.value)}
                            />
                            <button type="submit" className="ml-4 bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add Skill</button>
                        </div>
                    </div>
                </form>

                <div className="mt-6">
                    <h3 className="text-lg font-semibold mb-2">Already Added Skills:</h3>
                    <div className="flex flex-wrap">
                        {skills.map((skill) => (
                            <div key={skill._id} className="bg-gray-200 hover:bg-purple-200 glass rounded-full px-3 py-1 text-sm font-semibold text-gray-700 flex items-center mr-2 mb-2">
                                <img src={skill.logo} alt={`${skill.name} logo`} className="h-6 w-6 mr-2" />
                                {skill.name}
                                <button onClick={() => handleDeleteSkill(skill._id)} className="ml-2">
                                    <FaTimes className="text-red-500 cursor-pointer" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillSetting;
