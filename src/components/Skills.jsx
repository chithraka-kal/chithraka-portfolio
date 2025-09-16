import styles from './Skills.module.css';

function Skills() {
    const skillsData = {
        frontend: [
            { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
            { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
            { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
            { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
            { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
            { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
            { name: "SASS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" }
        ],
        backend: [
            { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
            { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
            { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
            { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
            { name: "Supabase", icon: "⚡" },
            { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
            { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
            { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" }
        ],
        tools: [
            { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
            { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
            { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
            { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
            { name: "NPM", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" },
            { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
            { name: "Unity", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg" }
        ],
        studying: [
            { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
            { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
            { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
            { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
            { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" }
        ]
    };

    return (
        <section className={styles.section} id="skills">
            <div className="section-content">
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <p className={styles.sectionTag}>TECHNOLOGIES</p>
                        <h2 className={styles.title}>My Stack</h2>
                        <p className={styles.subtitle}>
                            A comprehensive overview of the technologies, frameworks, and tools I use to build modern web applications and bring creative ideas to life.
                        </p>
                    </div>
                    
                    <div className={styles.skillsGrid}>
                        <div className={styles.skillSection}>
                            <h3 className={styles.sectionTitle}>FRONTEND</h3>
                            <div className={styles.skillsList}>
                                {skillsData.frontend.map((skill, index) => (
                                    <SkillItem key={index} skill={skill} />
                                ))}
                            </div>
                        </div>

                        <div className={styles.divider}></div>

                        <div className={styles.skillSection}>
                            <h3 className={styles.sectionTitle}>BACKEND</h3>
                            <div className={styles.skillsList}>
                                {skillsData.backend.map((skill, index) => (
                                    <SkillItem key={index} skill={skill} />
                                ))}
                            </div>
                        </div>

                        <div className={styles.divider}></div>

                        <div className={styles.skillSection}>
                            <h3 className={styles.sectionTitle}>TOOLS</h3>
                            <div className={styles.skillsList}>
                                {skillsData.tools.map((skill, index) => (
                                    <SkillItem key={index} skill={skill} />
                                ))}
                            </div>
                        </div>

                        <div className={styles.divider}></div>

                        <div className={styles.skillSection}>
                            <h3 className={styles.sectionTitle}>STUDYING</h3>
                            <div className={styles.skillsList}>
                                {skillsData.studying.map((skill, index) => (
                                    <SkillItem key={index} skill={skill} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function SkillItem({ skill }) {
    return (
        <div className={styles.skillItem}>
            {skill.icon.startsWith('http') ? (
                <img 
                    src={skill.icon} 
                    alt={skill.name}
                    className={styles.skillIcon}
                    onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                    }}
                />
            ) : (
                <span className={styles.skillEmoji}>{skill.icon}</span>
            )}
            <span className={styles.skillName}>{skill.name}</span>
        </div>
    );
}

export default Skills;