import styles from './Footer.module.css';
import { useState } from 'react';

function Footer() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
        // Reset form
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    };

    return (
        <footer className={styles.footer}>
            {/* Get in Touch Section */}
            <section className={styles.getInTouchSection}>
                <div className={styles.maxWidthContainer}>
                    <h2 className={styles.sectionTitle}>Get in Touch</h2>
                    <div className={styles.getInTouchContent}>
                        <div className={styles.leftContent}>
                            {/* Contact Details Cards */}
                            <div className={styles.contactCards}>
                                <div className={styles.contactCard}>
                                    <div className={styles.cardIcon}>
                                        <svg viewBox="0 0 24 24" width="20" height="20">
                                            <path d="M1.75 3h20.5c.966 0 1.75.784 1.75 1.75v14.5A1.75 1.75 0 0 1 22.25 21H1.75A1.75 1.75 0 0 1 0 19.25V4.75C0 3.784.784 3 1.75 3ZM1.5 7.412V19.25c0 .138.112.25.25.25h20.5a.25.25 0 0 0 .25-.25V7.412l-9.52 6.433c-.592.4-1.368.4-1.96 0L1.5 7.412Zm0-2.662v.852l10.36 7a.25.25 0 0 0 .28 0l10.36-7V4.75a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25Z" fill="currentColor"/>
                                        </svg>
                                    </div>
                                    <div className={styles.cardContent}>
                                        <h3>Email</h3>
                                        <p>chithrakakalanamith@gmail.com</p>
                                    </div>
                                </div>

                                <div className={styles.contactCard}>
                                    <div className={styles.cardIcon}>
                                        <svg viewBox="0 0 24 24" width="20" height="20">
                                            <path d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511Z" fill="currentColor"/>
                                        </svg>
                                    </div>
                                    <div className={styles.cardContent}>
                                        <h3>Phone</h3>
                                        <p>+94 77 312 6764</p>
                                    </div>
                                </div>

                                <div className={styles.contactCard}>
                                    <div className={styles.cardIcon}>
                                        <svg viewBox="0 0 24 24" width="20" height="20">
                                            <path d="m12.596 11.596-3.535 3.536a1.5 1.5 0 0 1-2.122 0l-3.535-3.536a6.5 6.5 0 1 1 9.192-9.193 6.5 6.5 0 0 1 0 9.193Zm-1.06-8.132v-.001a5 5 0 1 0-7.072 7.072L8 14.07l3.536-3.534a5 5 0 0 0 0-7.072ZM8 9a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 9Z" fill="currentColor"/>
                                        </svg>
                                    </div>
                                    <div className={styles.cardContent}>
                                        <h3>Location</h3>
                                        <p>Homagama, Colombo, Sri Lanka</p>
                                    </div>
                                </div>

                                <div className={styles.contactCard}>
                                    <div className={styles.cardIcon}>
                                        <svg viewBox="0 0 24 24" width="20" height="20">
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="currentColor"/>
                                        </svg>
                                    </div>
                                    <div className={styles.cardContent}>
                                        <h3>Website</h3>
                                        <p>https://chithraka-dev.netlify.app/</p>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className={styles.socialLinks}>
                                <a href="https://www.linkedin.com/in/chithraka-kalanamith/" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                                    <svg viewBox="0 0 24 24" width="20" height="20">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="currentColor"/>
                                    </svg>
                                </a>
                                <a href="https://github.com/chithraka-kal" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                                    <svg viewBox="0 0 24 24" width="20" height="20">
                                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" fill="currentColor"/>
                                    </svg>
                                </a>
                                <a href="https://web.facebook.com/chithraka.kalanamith/" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                                    <svg viewBox="0 0 24 24" width="20" height="20">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="currentColor"/>
                                    </svg>
                                </a>
                                <a href="https://www.instagram.com/chithraka_kalanamith/" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                                    <svg viewBox="0 0 24 24" width="20" height="20">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="currentColor"/>
                                    </svg>
                                </a>
                                <a href="https://medium.com/@chithrakakalanamith" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                                    <svg viewBox="0 0 24 24" width="20" height="20">
                                        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" fill="currentColor"/>
                                    </svg>
                                </a>
                                <a href="https://www.researchgate.net/profile/Chithraka-Kalanamith?ev=hdr_xprf&_sg=niH2BN6OY3C5zobPWTZ60Er9PWUZTIKgiNJcqZX5GSV6pJ17yvASZQ74cspd3lPRcU_UVGqCjnRn59BQ2qDxwE1W" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                                    <svg viewBox="0 0 24 24" width="20" height="20">
                                        <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM8.262 17.456c-.814 0-1.482-.234-2.003-.703-.521-.469-.782-1.048-.782-1.737 0-.703.268-1.282.803-1.737.535-.455 1.196-.682 1.982-.682.8 0 1.468.227 2.003.682.535.455.803 1.034.803 1.737 0 .689-.261 1.268-.782 1.737-.521.469-1.189.703-2.024.703zm7.421-2.319c0 .8-.268 1.435-.803 1.903-.535.468-1.261.703-2.177.703-.903 0-1.622-.235-2.157-.703-.535-.468-.803-1.103-.803-1.903v-5.474h1.537v5.474c0 .469.124.834.372 1.096.248.261.6.392 1.051.392.465 0 .824-.131 1.075-.392.251-.261.377-.627.377-1.096V9.663h1.528v5.474z" fill="currentColor"/>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div className={styles.rightContent}>
                            {/* Contact Form */}
                            <form className={styles.contactForm} onSubmit={handleSubmit}>
                                <div className={styles.formRow}>
                                    <div className={styles.formGroup}>
                                        <label className={styles.formLabel}>Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className={styles.formInput}
                                            required
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label className={styles.formLabel}>Phone Number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className={styles.formInput}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className={styles.formGroup}>
                                    <label className={styles.formLabel}>Subject</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        className={styles.formSelect}
                                        required
                                    >
                    
                                    </input>
                                </div>

                                <div className={styles.formGroup}>
                                    <label className={styles.formLabel}>Message</label>
                                    <textarea
                                        name="message"
                                        placeholder="Tell me about your project or opportunity..."
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        className={styles.formTextarea}
                                        rows="3"
                                        required
                                    ></textarea>
                                </div>

                                <button type="submit" className={styles.submitBtn}>
                                    <svg className={styles.sendIcon} viewBox="0 0 24 24" width="20" height="20">
                                        <path d="M1.101 21.757 23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z" fill="currentColor"/>
                                    </svg>
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <div className={styles.container}>
                <div className={styles.footerContent}>
                    <div className={styles.divider}></div>
                    
                    <p className={styles.copyright}>
                         Design and Developed by <br />©  Chithraka Kalanamith | 2025
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;