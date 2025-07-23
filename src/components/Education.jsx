import styles from './Education.module.css';

function Education() {
    const educationData = [
        {
            degree: "Bachelor of Science in Computer Science",
            school: "University of Technology",
            year: "2020 - 2024",
            description: "Focused on software engineering, web development, and database management. Completed projects in React, Node.js, and full-stack development.",
            gpa: "3.8/4.0"
        },
        {
            degree: "Advanced Web Development Certification",
            school: "Tech Institute",
            year: "2023",
            description: "Specialized certification in modern web technologies including React, Node.js, TypeScript, and cloud deployment.",
            gpa: "Distinction"
        },
        {
            degree: "High School Diploma",
            school: "Central High School",
            year: "2016 - 2020",
            description: "Graduated with honors. Active in programming club and mathematics competitions. Developed first web applications during this period.",
            gpa: "3.9/4.0"
        }
    ];

    return (
        <section className={styles.section} id="education">
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <p className={styles.sectionTag}>MY JOURNEY</p>
                    <h2 className={styles.title}>
                        Education & <br /> Learning Path
                    </h2>
                    <p className={styles.subtitle}>
                        My academic background and continuous learning journey in technology and software development.
                    </p>
                </div>

                <div className={styles.educationGrid}>
                    {educationData.map((item, index) => (
                        <div key={index} className={styles.educationCard}>
                            <div className={styles.cardHeader}>
                                <div className={styles.yearBadge}>{item.year}</div>
                                <div className={styles.gpaBadge}>{item.gpa}</div>
                            </div>
                            <div className={styles.cardContent}>
                                <h3 className={styles.degree}>{item.degree}</h3>
                                <p className={styles.school}>{item.school}</p>
                                <p className={styles.description}>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Education;