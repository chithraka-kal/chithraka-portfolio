import styles from './Education.module.css';

function Education() {
    const educationData = [
        {
            degree: "Bachelor of Science in Computer Science",
            school: "University of Technology",
            year: "2020 - 2024",
            description: "Focused on software engineering, web development, and database management. Completed projects in React, Node.js, and full-stack development."
        },
        {
            degree: "High School Diploma",
            school: "Central High School",
            year: "2016 - 2020",
            description: "Graduated with honors. Active in programming club and mathematics competitions. Developed first web applications during this period."
        }
    ];

    return (
        <section className={styles.section} id="education">
            <div className={styles.container}>
                <h2 className={styles.title}>Education</h2>
                <div className={styles.educationTimeline}>
                    {educationData.map((item, index) => (
                        <div key={index} className={styles.educationItem}>
                            <h3 className={styles.degree}>{item.degree}</h3>
                            <p className={styles.school}>{item.school}</p>
                            <p className={styles.year}>{item.year}</p>
                            <p className={styles.description}>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Education;