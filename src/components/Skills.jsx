import styles from './Skills.module.css';

function Skills() {
    const skillCategories = [
        {
            title: "Frontend Development",
            icon: "🎨",
            description: "Building modern, responsive user interfaces",
            skills: [
                { name: "React", level: "Advanced", experience: "3+ years", projects: 15 },
                { name: "JavaScript", level: "Advanced", experience: "4+ years", projects: 25 },
                { name: "TypeScript", level: "Intermediate", experience: "2+ years", projects: 8 },
                { name: "HTML & CSS", level: "Expert", experience: "5+ years", projects: 30 }
            ]
        },
        {
            title: "Backend Development", 
            icon: "⚡",
            description: "Creating robust server-side applications",
            skills: [
                { name: "Node.js", level: "Advanced", experience: "3+ years", projects: 12 },
                { name: "Express.js", level: "Advanced", experience: "3+ years", projects: 10 },
                { name: "MongoDB", level: "Intermediate", experience: "2+ years", projects: 8 },
                { name: "PostgreSQL", level: "Intermediate", experience: "2+ years", projects: 6 }
            ]
        },
        {
            title: "Tools & DevOps",
            icon: "🛠️", 
            description: "Modern development tools and workflows",
            skills: [
                { name: "Git & GitHub", level: "Advanced", experience: "4+ years", projects: 40 },
                { name: "VS Code", level: "Expert", experience: "5+ years", projects: 50 },
                { name: "Vite", level: "Advanced", experience: "2+ years", projects: 15 },
                { name: "npm/yarn", level: "Advanced", experience: "4+ years", projects: 35 }
            ]
        }
    ];

    return (
        <section className={styles.section} id="skills">
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.title}>My Skills</h2>
                    <p className={styles.subtitle}>
                        Technologies and tools I use to build modern web applications
                    </p>
                </div>
                
                <div className={styles.skillsGrid}>
                    {skillCategories.map((category, index) => (
                        <SkillCategory key={index} {...category} />
                    ))}
                </div>

                <div className={styles.statsSection}>
                    <div className={styles.statCard}>
                        <div className={styles.statNumber}>25+</div>
                        <div className={styles.statLabel}>Projects Completed</div>
                    </div>
                    <div className={styles.statCard}>
                        <div className={styles.statNumber}>3+</div>
                        <div className={styles.statLabel}>Years Experience</div>
                    </div>
                    <div className={styles.statCard}>
                        <div className={styles.statNumber}>15+</div>
                        <div className={styles.statLabel}>Technologies</div>
                    </div>
                    <div className={styles.statCard}>
                        <div className={styles.statNumber}>100%</div>
                        <div className={styles.statLabel}>Dedication</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function SkillCategory({ title, icon, description, skills }) {
    return (
        <div className={styles.skillCategory}>
            <div className={styles.categoryHeader}>
                <div className={styles.categoryIcon}>{icon}</div>
                <div>
                    <h3 className={styles.categoryTitle}>{title}</h3>
                    <p className={styles.categoryDescription}>{description}</p>
                </div>
            </div>
            
            <div className={styles.skillsList}>
                {skills.map((skill, index) => (
                    <div key={index} className={styles.skillItem}>
                        <div className={styles.skillHeader}>
                            <div className={styles.skillInfo}>
                                <span className={styles.skillName}>{skill.name}</span>
                                <span className={styles.skillExperience}>{skill.experience}</span>
                            </div>
                            <div className={styles.skillStats}>
                                <span className={styles.skillLevel}>{skill.level}</span>
                                <span className={styles.skillProjects}>{skill.projects} projects</span>
                            </div>
                        </div>
                        <div className={styles.skillBar}>
                            <div 
                                className={styles.skillProgress}
                                data-level={skill.level.toLowerCase()}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;