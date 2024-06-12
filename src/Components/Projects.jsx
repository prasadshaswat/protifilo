import React from 'react';
import '../style.css';

const Projects = () => {
    const projects = [
        {
            title: 'Project One',
            description: 'This is a short description of project one.',
            details: 'Detailed information about project one. It uses HTML, CSS, and JavaScript.',
            skills: ['html5', 'css3', 'javascript'],
            github: 'https://github.com/user/project-one',
            live: 'https://live-demo.com/project-one',
        },
        {
            title: 'Project Two',
            description: 'This is a short description of project two.',
            details: 'Detailed information about project two. It uses React and Node.js.',
            skills: ['react', 'nodejs'],
            github: 'https://github.com/user/project-two',
            live: 'https://live-demo.com/project-two',
        },
        {
            title: 'Project Three',
            description: 'This is a short description of project three.',
            details: 'Detailed information about project three. It uses Vue.js and Firebase.',
            skills: ['vuejs', 'firebase'],
            github: 'https://github.com/user/project-three',
            live: 'https://live-demo.com/project-three',
        },
        {
            title: 'Project Four',
            description: 'This is a short description of project four.',
            details: 'Detailed information about project four. It uses Python and Django.',
            skills: ['python', 'django'],
            github: 'https://github.com/user/project-four',
            live: 'https://live-demo.com/project-four',
        },
        {
            title: 'Project Five',
            description: 'This is a short description of project five.',
            details: 'Detailed information about project five. It uses Angular and Firebase.',
            skills: ['angular', 'firebase'],
            github: 'https://github.com/user/project-five',
            live: 'https://live-demo.com/project-five',
        },
    ];

    return (
        <section className="projects">
            <h2>My Projects</h2>
            <div className="project-cards">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="skills">
                            {project.skills.map((skill, index) => (
                                <i className={`devicon-${skill}-plain`} key={index}></i>
                            ))}
                        </div>
                        <div className="project-details">
                            <p>{project.details}</p>
                            <div className="buttons">
                                <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                                <a href={project.live} target="_blank" rel="noopener noreferrer">Live Preview</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
