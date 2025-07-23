import styles from './Projects.module.css';

function Projects() {
    return (
        <section className={styles.section} id="projects">
            <div className="section-content">
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.title}>My Projects</h2>
                        <p className={styles.subtitle}>
                            A showcase of my recent work and personal projects
                        </p>
                    </div>
                <div className={styles.projectsGrid}>
                    <ProjectCard 
                        title="Portfolio Website" 
                        description="A responsive personal portfolio website built with React, showcasing modern design principles and interactive elements with dark/light mode support."
                        technologies={["React", "CSS Modules", "Context API", "Vite"]}
                        liveLink="#"
                        codeLink="#"
                        stats={{ stars: "12", forks: "3", issues: "0" }}
                        featured={true}
                    />
                    <ProjectCard 
                        title="Task Management App" 
                        description="A full-featured task management application with CRUD operations, real-time updates, and collaborative features."
                        technologies={["React", "Node.js", "MongoDB", "Socket.io"]}
                        liveLink="#"
                        codeLink="#"
                        stats={{ stars: "8", forks: "2", issues: "1" }}
                    />
                    <ProjectCard 
                        title="Game Development Project" 
                        description="A 2D platformer game with physics, collision detection, smooth animations, and level editor capabilities."
                        technologies={["HTML5 Canvas", "TypeScript", "WebGL", "Physics Engine"]}
                        liveLink="#"
                        codeLink="#"
                        stats={{ stars: "15", forks: "5", issues: "2" }}
                    />
                    <ProjectCard 
                        title="API Integration Platform" 
                        description="A comprehensive API testing and integration platform with real-time monitoring and automated testing capabilities."
                        technologies={["Node.js", "Express", "Jest", "Docker"]}
                        liveLink="#"
                        codeLink="#"
                        stats={{ stars: "6", forks: "1", issues: "0" }}
                    />
                </div>
                <div className={styles.viewAllSection}>
                    <a href="#" className={styles.viewAllButton}>
                        View all projects
                        <svg className={styles.arrowIcon} viewBox="0 0 16 16" width="16" height="16">
                            <path d="M7.28 3.22a.75.75 0 0 0-1.06 1.06L9.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L12 8.06a.75.75 0 0 0 0-1.06L7.28 3.22Z"></path>
                        </svg>
                    </a>
                </div>
            </div>
            </div>
        </section>
    );
}

function ProjectCard({ title, description, technologies, liveLink, codeLink, stats, featured }) {
    return (
        <div className={`${styles.projectCard} ${featured ? styles.featured : ''}`}>
            <div className={styles.cardHeader}>
                <div className={styles.projectInfo}>
                    <h3 className={styles.projectTitle}>{title}</h3>
                    {featured && <span className={styles.featuredBadge}>Featured</span>}
                </div>
                <div className={styles.projectStats}>
                    <span className={styles.stat}>
                        <svg viewBox="0 0 16 16" width="12" height="12">
                            <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z"></path>
                        </svg>
                        {stats.stars}
                    </span>
                    <span className={styles.stat}>
                        <svg viewBox="0 0 16 16" width="12" height="12">
                            <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
                        </svg>
                        {stats.forks}
                    </span>
                </div>
            </div>
            <p className={styles.projectDescription}>{description}</p>
            <div className={styles.projectTech}>
                {technologies.map((tech, index) => (
                    <span key={index} className={styles.techTag}>{tech}</span>
                ))}
            </div>
            <div className={styles.projectLinks}>
                <a href={liveLink} className={`${styles.projectLink} ${styles.primaryLink}`}>
                    <svg viewBox="0 0 16 16" width="14" height="14">
                        <path d="M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z"></path>
                    </svg>
                    Live Demo
                </a>
                <a href={codeLink} className={`${styles.projectLink} ${styles.secondaryLink}`}>
                    <svg viewBox="0 0 16 16" width="14" height="14">
                        <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.27-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                    </svg>
                    View Code
                </a>
            </div>
        </div>
    );
}

export default Projects;