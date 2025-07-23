import styles from './Projects.module.css';
import shouetopea from '../assets/shouetopea.png';
import { useState } from 'react';

const allProjects = [
    {
        title: "E-commerce Platform",
        description: "A modern e-commerce platform built with React and Node.js featuring user authentication, payment integration, and admin dashboard.",
        image: shouetopea,
        tags: ["React", "Node.js", "MongoDB"],
        link: "#",
        github: "#"
    },
    {
        title: "Task Management App",
        description: "A collaborative task management application with real-time updates, team collaboration, and project tracking features.",
        image: shouetopea,
        tags: ["React", "Socket.io", "Express"],
        link: "#",
        github: "#"
    },
    {
        title: "Weather Dashboard",
        description: "A responsive weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.",
        image: shouetopea,
        tags: ["JavaScript", "API", "CSS"],
        link: "#",
        github: "#"
    },
    {
        title: "Blog Platform",
        description: "A full-featured blog platform with admin panel, user authentication, and content management system.",
        image: shouetopea,
        tags: ["React", "Firebase", "Tailwind"],
        link: "#",
        github: "#"
    },
    {
        title: "Portfolio Website",
        description: "A responsive portfolio website showcasing my work with modern design and smooth animations.",
        image: shouetopea,
        tags: ["React", "Vite", "CSS"],
        link: "#",
        github: "#"
    },
    {
        title: "Chat Application",
        description: "A real-time chat application with rooms, notifications, and file sharing capabilities.",
        image: shouetopea,
        tags: ["React", "Socket.io", "Node.js"],
        link: "#",
        github: "#"
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
                                                    View Live
                                                </a>
                                                <a href={project.github} className={styles.actionBtn}>
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
                                    <path d="M7.28 3.22a.75.75 0 0 0-1.06 1.06L9.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L12 8.06a.75.75 0 0 0 0-1.06L7.28 3.22Z"></path>
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
