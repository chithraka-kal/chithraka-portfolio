import styles from './Certification.module.css';
import Certificate1 from '../assets/react.jpg';
import Certificate2 from '../assets/Certificate1.png';
import { useState } from 'react';

function Certification() {
    const [showAllCertifications, setShowAllCertifications] = useState(false);
    
    const certifications = [
        {
            name: "React Developer Certification",
            issuer: "Scrimba",
            date: "2025",
            description: "Advanced certification covering React hooks, state management, and modern patterns.",
            image: Certificate1,
            credentialId: "cert24zAwPPowRMuqKUfo",
            certificateUrl: "https://scrimba.com/certificate-cert24zAwPPowRMuqKUfo9kSpSqoY84FktbyfiztY"
        },
        {
            name: "Full Stack JavaScript Developer",
            issuer: "freeCodeCamp",
            date: "2023",
            description: "Comprehensive certification covering frontend and backend development with JavaScript.",
            image: Certificate2,
            credentialId: "FCC-FULLSTACK-2023-002",
            certificateUrl: "https://www.freecodecamp.org/certification/chithraka/full-stack"
        },
        {
            name: "AWS Cloud Practitioner",
            issuer: "Amazon Web Services",
            date: "2024",
            description: "Foundation-level certification demonstrating understanding of AWS cloud services.",
            image: Certificate1,
            credentialId: "AWS-CCP-2024-003",
            certificateUrl: "https://aws.amazon.com/certification/certified-cloud-practitioner/"
        },
        {
            name: "JavaScript Algorithms and Data Structures",
            issuer: "freeCodeCamp",
            date: "2023",
            description: "Advanced algorithms, data structures, and functional programming concepts.",
            image: Certificate1,
            credentialId: "FCC-ALGO-2023-004",
            certificateUrl: "https://www.freecodecamp.org/certification/chithraka/javascript-algorithms-and-data-structures"
        },
        {
            name: "Node.js Application Development",
            issuer: "OpenJS Foundation",
            date: "2024",
            description: "Server-side JavaScript development with Node.js and Express framework.",
            image: Certificate1,
            credentialId: "NODE-DEV-2024-005",
            certificateUrl: "https://nodejs.org/en/certification"
        },
        {
            name: "MongoDB Developer Certification",
            issuer: "MongoDB University",
            date: "2023",
            description: "Database design, queries, and application development with MongoDB.",
            image: Certificate1,
            credentialId: "MONGO-DEV-2023-006",
            certificateUrl: "https://university.mongodb.com/certification"
        },
        {
            name: "Git and GitHub Mastery",
            issuer: "GitHub",
            date: "2024",
            description: "Version control, collaboration, and advanced Git workflows.",
            image: Certificate1,
            credentialId: "GIT-MASTER-2024-007",
            certificateUrl: "https://github.com/achievements"
        },
        {
            name: "Web Performance Optimization",
            issuer: "Google",
            date: "2024",
            description: "Advanced techniques for optimizing web application performance.",
            image: Certificate1,
            credentialId: "GOOGLE-PERF-2024-008",
            certificateUrl: "https://developers.google.com/web/fundamentals/performance"
        }
    ];

    const displayedCertifications = showAllCertifications ? certifications : certifications.slice(0, 4);
    
    const handleToggleCertifications = (e) => {
        e.preventDefault();
        setShowAllCertifications(!showAllCertifications);
    };

    const handleViewCertificate = (certificateUrl, certName) => {
        if (certificateUrl) {
            // Open certificate in new tab
            window.open(certificateUrl, '_blank', 'noopener,noreferrer');
        } else {
            // Fallback: show alert if no URL is available
            alert(`Certificate details for ${certName} will be available soon.`);
        }
    };

    return (
        <section className={styles.section} id="certifications">
            <div className={styles.container}>
                <div className={styles.sectionHeader}>
                    <p className={styles.sectionTag}>ACHIEVEMENTS</p>
                    <h2 className={styles.title}>
                        Certifications <br />
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
                                        <button 
                                            className={styles.viewBtn}
                                            onClick={() => handleViewCertificate(cert.certificateUrl, cert.name)}
                                            title={`View ${cert.name} certificate`}
                                        >
                                            <svg className={styles.linkIcon} viewBox="0 0 16 16" width="16" height="16">
                                                <path d="M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z"></path>
                                            </svg>
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
                                <div 
                                    className={styles.credentialId}
                                    onClick={() => handleViewCertificate(cert.certificateUrl, cert.name)}
                                    title="Click to view certificate"
                                >
                                    ID: {cert.credentialId}
                                    <svg className={styles.externalLinkIcon} viewBox="0 0 12 12" width="12" height="12">
                                        <path d="M6 1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V2.707L2.354 5.854a.5.5 0 1 1-.708-.708L4.793 2H1.5a.5.5 0 0 1 0-1H6ZM1 4v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7.5a.5.5 0 0 0-1 0V10H2V5h2.5a.5.5 0 0 0 0-1H1Z"></path>
                                    </svg>
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