import React from 'react';

const projects = [
    {
        title: "Project One",
        sector: "Network",
        description: "This is a brief description of Project One. It showcases an innovative solution to a common problem.",
        link: "https://example.com/project-one",
        image: "https://via.placeholder.com/300x200"
    },
    {
        title: "Project Two",
        sector: "WebApp",
        description: "This is a brief description of Project Two. It features advanced techniques and tools.",
        link: "https://example.com/project-two",
        image: "https://via.placeholder.com/300x200"
    },
    {
        title: "Project Three",
        sector: "WebApp",
        description: "This is a brief description of Project Three. A highly scalable and efficient project.",
        link: "https://example.com/project-three",
        image: "https://via.placeholder.com/300x200"
    },
];

const Projects = () => {
    return (
        <div>
            <h2 className="text-center text-3xl font-semibold border-b pb-4 mb-10 border-purple-700">Recent Projects</h2>
            <div className="container mx-auto my-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, index) => (
                        <div key={index} className="shadow-lg">
                            <img src={project.image} alt={project.title} className="w-full h-48 object-cover " />
                            <div className="mt-5">
                                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                                <p className="font-bold mb-2">#{project.sector}</p>
                                <p className=" mb-5">{project.description}</p>
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:text-purple-900">
                                    View Project
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
