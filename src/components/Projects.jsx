import styles from './Projects.module.css';

function Projects() {
    return (
        <section className={styles.section} id="projects">
            <div className={styles.container}>
                <h2 className={styles.title}>Projects</h2>
                <div className={styles.projectsGrid}>
                    <ProjectCard 
                        title="My Portfolio" 
                        description="A responsive personal portfolio website built with React, showcasing my skills and projects with modern design principles."
                        technologies={["React", "CSS Modules", "JavaScript", "Vite"]}
                        liveLink="#"
                        codeLink="#"
                    />
                    <ProjectCard 
                        title="Todo App" 
                        description="A full-featured task management application with CRUD operations, local storage, and responsive design."
                        technologies={["React", "Local Storage", "CSS3", "JavaScript"]}
                        liveLink="#"
                        codeLink="#"
                    />
                    <ProjectCard 
                        title="Game Demo" 
                        description="An interactive 2D platformer game built with HTML5 Canvas, featuring physics, collision detection, and smooth animations."
                        technologies={["HTML5 Canvas", "JavaScript", "CSS3", "Game Physics"]}
                        liveLink="#"
                        codeLink="#"
                    />
                </div>
            </div>
        </section>
    );
}

function ProjectCard({ title, description, technologies, liveLink, codeLink }) {
    return (
        <div className={styles.projectCard}>
            <h3 className={styles.projectTitle}>{title}</h3>
            <p className={styles.projectDescription}>{description}</p>
            <div className={styles.projectTech}>
                {technologies.map((tech, index) => (
                    <span key={index} className={styles.techTag}>{tech}</span>
                ))}
            </div>
            <div className={styles.projectLinks}>
                <a href={liveLink} className={`${styles.projectLink} ${styles.primaryLink}`}>
                    Live Demo
                </a>
                <a href={codeLink} className={`${styles.projectLink} ${styles.secondaryLink}`}>
                    View Code
                </a>
            </div>
        </div>
    );
}

export default Projects;