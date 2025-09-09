import styles from './Projects.module.css';
import shouetopea from '../assets/shouetopea.png';
import project1 from '../assets/pie.jpg';
import project2 from '../assets/cancer.jpg';
import project3 from '../assets/yaman.png';
import project4 from '../assets/chefclaude.png';
import project6 from '../assets/thissogama.png';
import medi_help from '../assets/medihelp.png';
import { useState } from 'react';

const allProjects = [
    {
        title: "MediHelp - Clinic Management System (React + Node.js + MongoDB)",
        description: "A comprehensive clinic management system built with React, Node.js, and MongoDB. Features include appointment scheduling, patient management, and a responsive design.",
        image: medi_help,
        tags: ["React", "Node.js", "MongoDB", "Tailwind CSS", "JavaScript", "Rest API"],
        link: "http://medihelp-clinic.netlify.app/",
        github: "https://github.com/chithraka-kal/MediHelp-clinic-management-system"
    },
    {
        title: "2D Platformer Game",
        description: "Developed a 2D story-rich platformer in Unity featuring custom combat, enemy AI, and a dialog-driven narrative with level design, animation, and UI fully built from scratch. Published on Itch.io and recognized by popular streamers.",
        image: project1,
        tags: ["Unity", "C#", "GitHub"],
        link: "https://chithraka.itch.io/the-pie-verse-chronicles-2d",
        github: "https://github.com/chithraka-kal"
    },
    
    {
        title: "Breast Cancer Prediction AI",
        description: "A breast cancer detection system using traditional ML models, comparing performance across classifiers like Random Forest, XGBoost, and CNN. Currently extending with deep learning models for improved accuracy.",
        image: project2,
        tags: ["Python", "ML", "XGBoost", "Google Colab"],
        link: "#",
        github: "https://github.com/chithraka-kal"
    },
    {
        title: "Yaman Travels Website",
        description: "Developing a travel-focused website featuring destination guides, service listings, and customizable travel packages. Planning integration with Gemini API for intelligent travel suggestions.",
        image: project3,
        tags: ["React", "Vite", "Google AI", "CSS"],
        link: "https://yaman-travels.netlify.app/",
        github: "https://github.com/chithraka-kal"
    },
    {
        title: "Chef Claude - AI Recipe Generator",
        description: "A React-based web app that uses Google's Gemini Pro model to generate personalized recipes from user-provided ingredients. Features markdown rendering for AI responses and dynamic ingredient form handling.",
        image: project4,
        tags: ["React", "Vite", "Google AI", "JavaScript"],
        link: "https://chef-digital.netlify.app/",
        github: "https://github.com/chithraka-kal"
    },
    
    {
        title: "HopeLink - Charity Donation Platform",
        description: "Built a frontend interface for a charity donation platform, implementing responsive layouts, campaign browsing, and user-friendly forms. Integrated payment flow with Stripe and handled user authentication flows.",
        image: shouetopea,
        tags: ["React", "Express.js", "MongoDB", "Stripe"],
        link: "#",
        github: "https://github.com/chithraka-kal"
    },
    {
        title: "Thissogama Sripali School Website",
        description: "A web-based portal for a local government school using HTML, CSS, and JavaScript to improve information accessibility. Completed voluntarily as a first-year student project.",
        image: project6,
        tags: ["HTML", "CSS", "JavaScript"],
        link: "https://thissogama-sripali.netlify.app/",
        github: "https://github.com/chithraka-kal"
    }
];

function Projects() {
    const [showAllProjects, setShowAllProjects] = useState(false);
    
    const displayedProjects = showAllProjects ? allProjects : allProjects.slice(0, 3);
    
    const handleToggleProjects = (e) => {
        e.preventDefault();
        setShowAllProjects(!showAllProjects);
    };

    return (
        <section className={styles.section} id="projects">
            <div className={styles.fullWidthContainer}>
                <div className={styles.windowContainer}>
                    <div className={styles.windowHeader}>
                        <div className={styles.windowControls}>
                            <span className={styles.windowBtn}></span>
                            <span className={styles.windowBtn}></span>
                            <span className={styles.windowBtn}></span>
                        </div>
                        
                    </div>
                    
                    <div className={styles.windowContent}>
                        <div className={styles.sectionHeader}>
                            
                            <h2 className={styles.title}>
                                Recent Projects <br />
                            </h2>
                            <p className={styles.subtitle}>
                                Explore my latest projects showcasing modern web development techniques, 
                                creative problem-solving, and innovative user experiences.
                            </p>
                        </div>

                        <div className={styles.projectsGrid}>
                            {displayedProjects.map((project, index) => (
                                <div key={index} className={styles.projectCard}>
                                    <div className={styles.imageContainer}>
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className={styles.projectImage}
                                        />
                                        <div className={styles.overlay}>
                                            <div className={styles.overlayContent}>
                                                <a href={project.link} className={styles.actionBtn}>
                                                    <svg className={styles.liveIcon} viewBox="0 0 16 16" width="16" height="16">
                                                        <path fill="currentColor" d="M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z"/>
                                                    </svg>
                                                    View Live
                                                </a>
                                                <a href={project.github} className={styles.actionBtn}>
                                                    <svg className={styles.githubIcon} viewBox="0 0 16 16" width="16" height="16">
                                                        <path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                                    </svg>
                                                    GitHub
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.cardContent}>
                                        <h3 className={styles.projectTitle}>{project.title}</h3>
                                        <p className={styles.projectDescription}>{project.description}</p>
                                        <div className={styles.tags}>
                                            {project.tags.map((tag, tagIndex) => (
                                                <span key={tagIndex} className={styles.tag}>
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className={styles.viewAllSection}>
                            <button onClick={handleToggleProjects} className={styles.viewAllButton}>
                                {showAllProjects ? 'Show Less' : 'View all projects'}
                                <svg className={styles.arrowIcon} viewBox="0 0 16 16" width="16" height="16">
                                    <path fill="currentColor" d={showAllProjects ? "M7.28 12.78a.75.75 0 0 0 1.06-1.06L4.62 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L2.56 7.94a.75.75 0 0 0 0 1.06l4.72 4.78Z" : "M7.28 3.22a.75.75 0 0 0-1.06 1.06L9.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L12 8.06a.75.75 0 0 0 0-1.06L7.28 3.22Z"} />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;
