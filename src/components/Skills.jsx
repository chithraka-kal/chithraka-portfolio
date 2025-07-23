import styles from './Skills.module.css';

function Skills() {
    const stackCategories = [
        {
            title: "FRONTEND",
            technologies: [
                { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
                { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
                { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
                { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
                { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
                { name: "Zustand", icon: "🐻" },
                { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
                { name: "SASS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
                { name: "Styled-Components", icon: "�" }
            ]
        },
        {
            title: "BACKEND",
            technologies: [
                { name: "Supabase", icon: "⚡" }
            ]
        },
        {
            title: "TOOLS",
            technologies: [
                { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
                { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
                { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
                { name: "VSCODE", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
                { name: "VIM", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-original.svg" },
                { name: "NPM", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" },
                { name: "PNPM", icon: "📦" },
                { name: "Yarn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg" }
            ]
        },
        {
            title: "STUDYING",
            technologies: [
                { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
                { name: "GSAP", icon: "🌟" },
                { name: "Frammer Motion", icon: "🎭" }
            ]
        }
    ];

    return (
        <section className={styles.section} id="skills">
            <div className="section-content">
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.title}>MY STACK</h2>
                    </div>
                
                    <div className={styles.stackContainer}>
                        {stackCategories.map((category, index) => (
                            <StackCategory key={index} {...category} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function StackCategory({ title, technologies }) {
    return (
        <div className={styles.stackCategory}>
            <h3 className={styles.categoryTitle}>{title}</h3>
            <div className={styles.technologiesFlow}>
                {technologies.map((tech, index) => (
                    <div key={index} className={styles.techItem}>
                        <img 
                            src={tech.icon.startsWith('http') ? tech.icon : undefined} 
                            alt={tech.name}
                            className={tech.icon.startsWith('http') ? styles.techIcon : styles.techIconHidden}
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'inline';
                            }}
                        />
                        <span className={styles.techEmoji} style={{display: tech.icon.startsWith('http') ? 'none' : 'inline'}}>
                            {tech.icon.startsWith('http') ? '💻' : tech.icon}
                        </span>
                        <span className={styles.techName}>{tech.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;