import styles from './Certification.module.css';

function Certification() {
    const certifications = [
        {
            name: "React Developer Certification",
            issuer: "Meta (Facebook)",
            date: "2024",
            description: "Advanced certification covering React hooks, state management, component lifecycle, and modern React patterns.",
            status: "Certified"
        },
        {
            name: "Full Stack JavaScript Developer",
            issuer: "freeCodeCamp",
            date: "2023",
            description: "Comprehensive certification covering frontend and backend development with JavaScript, Node.js, and databases.",
            status: "Certified"
        },
        {
            name: "AWS Cloud Practitioner",
            issuer: "Amazon Web Services",
            date: "2024",
            description: "Foundation-level certification demonstrating understanding of AWS cloud services and architecture.",
            status: "In Progress"
        }
    ];

    return (
        <section className={styles.section} id="certifications">
            <div className={styles.container}>
                <h2 className={styles.title}>Certifications</h2>
                <div className={styles.certificationsGrid}>
                    {certifications.map((cert, index) => (
                        <CertificationCard key={index} certification={cert} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function CertificationCard({ certification }) {
    return (
        <div className={styles.certificationCard}>
            <div className={styles.certIcon}>🏆</div>
            <h3 className={styles.certName}>{certification.name}</h3>
            <p className={styles.certIssuer}>{certification.issuer}</p>
            <p className={styles.certDate}>{certification.date}</p>
            <p className={styles.certDescription}>{certification.description}</p>
            <span className={styles.certBadge}>{certification.status}</span>
        </div>
    );
}

export default Certification;