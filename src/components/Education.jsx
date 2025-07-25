import styles from './Education.module.css';

function Education() {
    const educationData = [
        {
            degree: "Bachelor of Science in Computer Science",
            school: "NSBM Green University",
            year: "2022 - Present",
            description: "Currently pursuing comprehensive studies in computer science with emphasis on software engineering principles, algorithms, and data structures. Developing expertise in modern programming languages and software development methodologies.",
            gpa: "3.8/4.0"
        },
        {
            degree: "Fullstack Web Development Course",
            school: "University of Moratuwa",
            year: "2023",
            description: "Intensive program covering modern web development technologies including React.js, Node.js, Express.js, and database integration. Gained hands-on experience in building responsive, full-stack web applications with industry best practices.",
            gpa: "Distinction"
        },
        {
            degree: "AI/ML Certification Course",
            school: "Sri Lanka Institute of Information Technology",
            year: "2025",
            description: "Advanced certification program focusing on artificial intelligence and machine learning concepts. Covering neural networks, deep learning, natural language processing, and practical implementation of AI solutions using Python and TensorFlow.",
            gpa: "3.9/4.0"
        },
        {
            degree: "GCE Advanced Level (Physical Science)",
            school: "Central College Kuliyapitiya",
            year: "2020",
            description: "Completed Advanced Level studies in Physical Science stream with subjects in Mathematics, Physics, and ICT. Strong foundation in analytical thinking and problem-solving skills that later contributed to programming aptitude.",
            gpa: "3.9/4.0"
        }
    ];

    return (
        <section className={styles.section} id="education">
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <p className={styles.sectionTag}>MY JOURNEY</p>
                    <h2 className={styles.title}>
                        Education<br />
                    </h2>
                    <p className={styles.subtitle}>
                        My academic background and continuous learning journey in technology and software development.
                    </p>
                </div>

                <div className={styles.educationTimeline}>
                    {educationData.map((item, index) => (
                        <div key={index} className={styles.timelineItem}>
                            <div className={styles.timelineNode}>
                                <div className={styles.nodeCircle}></div>
                            </div>
                            <div className={styles.educationCard}>
                                <div className={styles.cardHeader}>
                                    <div className={styles.yearBadge}>{item.year}</div>
                                    {/* <div className={styles.gpaBadge}>{item.gpa}</div> */}
                                </div>
                                <div className={styles.cardContent}>
                                    <h3 className={styles.degree}>{item.degree}</h3>
                                    <p className={styles.school}>{item.school}</p>
                                    <p className={styles.description}>{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Education;