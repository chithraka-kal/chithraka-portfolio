import styles from './Certification.module.css';
import Certificate1 from '../assets/react.jpg';
import Certificate2 from '../assets/google-tensflowr.png';
import Certificate3 from '../assets/inro-gen-AI.png';
import Certificate4 from '../assets/Intro-LLM.png';
import Certificate5 from '../assets/c.png'
import Certificate6 from '../assets/java.png';
import Certificate7 from '../assets/sql.png';
import Certificate8 from '../assets/wordpress.jpg';

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
            name: "Images with TensorFlow on Google Cloud",
            issuer: "Google Cloud Skills Boost",
            date: "2025",
            description: "Machine learning certification focusing on image processing and computer vision using TensorFlow on Google Cloud Platform.",
            image: Certificate2,
            credentialId: "Skill Badge",
            certificateUrl: "https://www.cloudskillsboost.google/public_profiles/56de2524-5c7c-4cb1-a8e8-103275fdca9a/badges/14813477?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share"
        },
        {
            name: "Introduction to Generative AI",
            issuer: "Google Cloud Skills Boost",
            date: "2023",
            description: "Foundational certification covering the principles and applications of generative artificial intelligence technologies.",
            image: Certificate3,
            credentialId: "4985670",
            certificateUrl: "https://www.cloudskillsboost.google/public_profiles/56de2524-5c7c-4cb1-a8e8-103275fdca9a/badges/4985670"
        },
        {
            name: "Introduction to Large Language Models",
            issuer: "Google Cloud Skills Boost",
            date: "2023",
            description: "Comprehensive introduction to large language models, their architecture, training, and practical applications in AI.",
            image: Certificate4,
            credentialId: "5143668",
            certificateUrl: "https://www.cloudskillsboost.google/public_profiles/56de2524-5c7c-4cb1-a8e8-103275fdca9a/badges/5143668"
        },
        {
            name: "Introduction to C",
            issuer: "SoloLearn",
            date: "2023",
            description: "Fundamental programming concepts and syntax in C language, covering variables, functions, and memory management.",
            image: Certificate5,
            credentialId: "CC-YUDZDLZ1",
            certificateUrl: "https://www.sololearn.com/en/certificates/CC-YUDZDLZ1"
        },
        {
            name: "Introduction to Java",
            issuer: "SoloLearn",
            date: "2023",
            description: "Object-oriented programming fundamentals in Java, including classes, inheritance, and core Java concepts.",
            image: Certificate6,
            credentialId: "CC-VW0OJ8RW",
            certificateUrl: "https://www.sololearn.com/en/certificates/CC-VW0OJ8RW"
        },
        {
            name: "Introduction to SQL",
            issuer: "SoloLearn",
            date: "2023",
            description: "Database fundamentals and SQL query language, covering data manipulation, joins, and database design principles.",
            image: Certificate7,
            credentialId: "CC-M57EB8RY",
            certificateUrl: "https://www.sololearn.com/en/certificates/CC-M57EB8RY"
        },
        {
            name: "Build a Full Website using WordPress",
            issuer: "Coursera",
            date: "2023",
            description: "Complete WordPress development course covering theme customization, plugin integration, and website deployment.",
            image: Certificate8,
            credentialId: "6A99B4XT57S5",
            certificateUrl: "https://www.coursera.org/account/accomplishments/certificate/6A99B4XT57S5"
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
                                            <svg className={styles.certificateIcon} viewBox="0 0 24 24" width="18" height="18">
                                                <path fill="currentColor" d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                                            </svg>
                                            View Certificate
                                            <svg className={styles.externalIcon} viewBox="0 0 16 16" width="14" height="14">
                                                <path fill="currentColor" d="M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z"/>
                                            </svg>
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