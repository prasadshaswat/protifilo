import React from 'react';
import '../style.css';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li className="logo">PS <span>Portfolio</span></li>
                <li><a href="#home">Home</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#resume">Resume</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
