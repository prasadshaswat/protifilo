import React from 'react';
import profileImage from '../Assets/Snapchat-301916402.jpg';
import '../style.css';

const About = () => {
    return (
        <section className="about">
            <div className="text">
                <div className="name">👋Hey, It's Prasad <span className='vip'>Shaswat</span></div>
                <div className="subname">I am a Frontend <span className="vip">Developer</span></div>
            </div>
            <img src={profileImage} alt="Prasad Shaswat" className="profilephoto" />
        </section>
    );
};

export default About;
