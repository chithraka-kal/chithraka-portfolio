import styles from './Certification.module.css';
import Certificate1 from '../assets/Certificate1.png';
import { useState } from 'react';

function Certification() {
    const [showAllCertifications, setShowAllCertifications] = useState(false);
    
    const certifications = [
        {
            name: "React Developer Certification",
            issuer: "Meta (Facebook)",
            date: "2024",
            description: "Advanced certification covering React hooks, state management, and modern patterns.",
            image: Certificate1,
            credentialId: "FB-REACT-2024-001"
        },
        {
            name: "Full Stack JavaScript Developer",
            issuer: "freeCodeCamp",
            date: "2023",
            description: "Comprehensive certification covering frontend and backend development with JavaScript.",
            image: Certificate1,
            credentialId: "FCC-FULLSTACK-2023-002"
        },
        {
            name: "AWS Cloud Practitioner",
            issuer: "Amazon Web Services",
            date: "2024",
            description: "Foundation-level certification demonstrating understanding of AWS cloud services.",
            image: Certificate1,
            credentialId: "AWS-CCP-2024-003"
        },
        {
            name: "JavaScript Algorithms and Data Structures",
            issuer: "freeCodeCamp",
            date: "2023",
            description: "Advanced algorithms, data structures, and functional programming concepts.",
            image: Certificate1,
            credentialId: "FCC-ALGO-2023-004"
        },
        {
            name: "Node.js Application Development",
            issuer: "OpenJS Foundation",
            date: "2024",
            description: "Server-side JavaScript development with Node.js and Express framework.",
            image: Certificate1,
            credentialId: "NODE-DEV-2024-005"
        },
        {
            name: "MongoDB Developer Certification",
            issuer: "MongoDB University",
            date: "2023",
            description: "Database design, queries, and application development with MongoDB.",
            image: Certificate1,
            credentialId: "MONGO-DEV-2023-006"
        },
        {
            name: "Git and GitHub Mastery",
            issuer: "GitHub",
            date: "2024",
            description: "Version control, collaboration, and advanced Git workflows.",
            image: Certificate1,
            credentialId: "GIT-MASTER-2024-007"
        },
        {
            name: "Web Performance Optimization",
            issuer: "Google",
            date: "2024",
            description: "Advanced techniques for optimizing web application performance.",
            image: Certificate1,
            credentialId: "GOOGLE-PERF-2024-008"
        }
    ];

    const displayedCertifications = showAllCertifications ? certifications : certifications.slice(0, 4);
    
    const handleToggleCertifications = (e) => {
        e.preventDefault();
        setShowAllCertifications(!showAllCertifications);
    };

    return (
        <section className={styles.section} id="certifications">
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <p className={styles.sectionTag}>ACHIEVEMENTS</p>
                    <h2 className={styles.title}>
                        Certifications & <br /> Credentials
                    </h2>
                    <p className={styles.subtitle}>
                        Professional certifications and credentials that validate my expertise in modern web development technologies.
                    </p>
                </div>

                <div className={styles.certificationsGrid}>
                    {displayedCertifications.map((cert, index) => (
                        <div key={index} className={styles.certificationCard}>
                            <div className={styles.imageContainer}>
                                <img
                                    src={cert.image}
                                    alt={cert.name}
                                    className={styles.certImage}
                                />
                                <div className={styles.overlay}>
                                    <div className={styles.overlayContent}>
                                        <button className={styles.viewBtn}>
                                            View Certificate
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.cardContent}>
                                <h3 className={styles.certName}>{cert.name}</h3>
                                <p className={styles.certIssuer}>{cert.issuer}</p>
                                <p className={styles.certDate}>{cert.date}</p>
                                <p className={styles.certDescription}>{cert.description}</p>
                                <div className={styles.credentialId}>
                                    ID: {cert.credentialId}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.viewAllSection}>
                    <button onClick={handleToggleCertifications} className={styles.viewAllButton}>
                        {showAllCertifications ? 'Show Less' : 'View all certifications'}
                        <svg className={styles.arrowIcon} viewBox="0 0 16 16" width="16" height="16">
                            <path d="M7.28 3.22a.75.75 0 0 0-1.06 1.06L9.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L12 8.06a.75.75 0 0 0 0-1.06L7.28 3.22Z"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Certification;