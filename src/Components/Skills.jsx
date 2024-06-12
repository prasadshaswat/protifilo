import React from 'react';
import '../style.css';

const Skills = () => {
    const skills = [
        { name: 'HTML', icon: 'devicon-html5-plain' },
        { name: 'CSS', icon: 'devicon-css3-plain' },
        { name: 'JavaScript', icon: 'devicon-javascript-plain' },
        { name: 'React', icon: 'devicon-react-original' },
        { name: 'Node.js', icon: 'devicon-nodejs-plain' },
        { name: 'C', icon: 'devicon-c-plain' },
        { name: 'Java', icon: 'devicon-java-plain' },
        { name: 'Python', icon: 'devicon-python-plain' },
    ];

    return (
        <section className="skills">
            <h2>My Skills</h2>
            <div className="skill-icons">
                {skills.map((skill, index) => (
                    <div className="skill-icon" key={index}>
                        <i className={skill.icon}></i>
                        <span>{skill.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
