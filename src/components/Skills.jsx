import styles from './Skills.module.css';

function Skills() {
    const frontendSkills = [
        { name: "React", level: "Advanced", percentage: 90 },
        { name: "JavaScript", level: "Advanced", percentage: 85 },
        { name: "HTML & CSS", level: "Expert", percentage: 95 },
        { name: "TypeScript", level: "Intermediate", percentage: 75 }
    ];

    const backendSkills = [
        { name: "Node.js", level: "Advanced", percentage: 80 },
        { name: "Express.js", level: "Advanced", percentage: 85 },
        { name: "MongoDB", level: "Intermediate", percentage: 70 },
        { name: "PostgreSQL", level: "Intermediate", percentage: 65 }
    ];

    const toolsSkills = [
        { name: "Git & GitHub", level: "Advanced", percentage: 90 },
        { name: "VS Code", level: "Expert", percentage: 95 },
        { name: "Vite", level: "Advanced", percentage: 80 },
        { name: "npm/yarn", level: "Advanced", percentage: 85 }
    ];

    return (
        <section className={styles.section} id="skills">
            <div className={styles.container}>
                <h2 className={styles.title}>Skills</h2>
                <div className={styles.skillsGrid}>
                    <SkillCategory title="Frontend" skills={frontendSkills} />
                    <SkillCategory title="Backend" skills={backendSkills} />
                    <SkillCategory title="Tools & Others" skills={toolsSkills} />
                </div>
            </div>
        </section>
    );
}

function SkillCategory({ title, skills }) {
    return (
        <div className={styles.skillCategory}>
            <h3 className={styles.categoryTitle}>{title}</h3>
            <ul className={styles.skillsList}>
                {skills.map((skill, index) => (
                    <li key={index} className={styles.skillItem}>
                        <div className={styles.skillName}>
                            <span>{skill.name}</span>
                            <span className={styles.skillLevel}>{skill.level}</span>
                        </div>
                        <div className={styles.skillBar}>
                            <div 
                                className={styles.skillProgress}
                                style={{ width: `${skill.percentage}%` }}
                            ></div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Skills;