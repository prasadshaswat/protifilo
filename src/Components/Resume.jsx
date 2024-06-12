import React from 'react';
import '../resume.css';
import resumePDF from '../Assets/shaswatresume.pdf';

const Resume = () => {
    const resumeData = [
        {
            section: 'Education',
            details: [
                { title: 'B.Tech. in Computer Science', institution: 'Parul University', year: '2022 - 2026' },
                { title: 'Class 12', institution: 'Bhagwat Vidyapith', year: '2020 - 2022' }
            ]
        },
        {
            section: 'Experience',
            details: [
                {
                    title: 'Frontend Developer',
                    company: 'Self',
                    year: '2023',
                    description: 'Developed UPSC practice website using HTML, CSS, and JavaScript.'
                },
                {
                    title: 'Intern',
                    company: 'Startup Inc.',
                    year: '2020 - 2021',
                    description: 'Assisted in the development of portfolio website for Prasad Shaswat using HTML, CSS, JavaScript, and React.'
                }
            ]
        },
        {
            section: 'Certifications',
            details: [
                { title: 'React Certification', provider: 'Udemy', year: '2021' },
                { title: 'JavaScript Advanced', provider: 'Coursera', year: '2020' }
            ]
        }
    ];

    const downloadResume = () => {
        const link = document.createElement('a');
        link.href = resumePDF;
        link.download = 'shaswatresume.pdf';
        link.click();
    };

    return (
        <section className="resume">
            <h2>My Resume</h2>
            <button onClick={downloadResume}>Download Resume</button>
            <div className="resume-content">
                {resumeData.map((item, index) => (
                    <div className="resume-section" key={index}>
                        <h3>{item.section}</h3>
                        <div className="details">
                            {item.details.map((detail, idx) => (
                                <div key={idx}>
                                    <span className="title">{detail.title}</span>
                                    <span className={detail.institution ? 'institution' : detail.company ? 'company' : 'provider'}>
                                        {detail.institution || detail.company || detail.provider}
                                    </span>
                                    <span className="year">{detail.year}</span>
                                    {detail.description && <p>{detail.description}</p>}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Resume;
