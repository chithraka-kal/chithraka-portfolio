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
                                        <svg viewBox="0 0 24 24" width="24" height="24">
                                            <path d="M1.75 3h20.5c.966 0 1.75.784 1.75 1.75v14.5A1.75 1.75 0 0 1 22.25 21H1.75A1.75 1.75 0 0 1 0 19.25V4.75C0 3.784.784 3 1.75 3ZM1.5 7.412V19.25c0 .138.112.25.25.25h20.5a.25.25 0 0 0 .25-.25V7.412l-9.52 6.433c-.592.4-1.368.4-1.96 0L1.5 7.412Zm0-2.662v.852l10.36 7a.25.25 0 0 0 .28 0l10.36-7V4.75a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25Z" fill="currentColor"/>
                                        </svg>
                                    </div>
                                    <div className={styles.cardContent}>
                                        <h3>Email</h3>
                                        <p>isharamadunika9@gmail.com</p>
                                    </div>
                                </div>

                                <div className={styles.contactCard}>
                                    <div className={styles.cardIcon}>
                                        <svg viewBox="0 0 24 24" width="24" height="24">
                                            <path d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511Z" fill="currentColor"/>
                                        </svg>
                                    </div>
                                    <div className={styles.cardContent}>
                                        <h3>Phone</h3>
                                        <p>+94 77 026 4992</p>
                                    </div>
                                </div>

                                <div className={styles.contactCard}>
                                    <div className={styles.cardIcon}>
                                        <svg viewBox="0 0 24 24" width="24" height="24">
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
                                        <svg viewBox="0 0 24 24" width="24" height="24">
                                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" fill="currentColor"/>
                                        </svg>
                                    </div>
                                    <div className={styles.cardContent}>
                                        <h3>Website</h3>
                                        <p>IsharaMadunika.lk</p>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className={styles.socialLinks}>
                                <a href="https://linkedin.com" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                                    <svg viewBox="0 0 24 24" width="20" height="20">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="currentColor"/>
                                    </svg>
                                </a>
                                <a href="https://github.com" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                                    <svg viewBox="0 0 24 24" width="20" height="20">
                                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" fill="currentColor"/>
                                    </svg>
                                </a>
                                <a href="https://twitter.com" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                                    <svg viewBox="0 0 24 24" width="20" height="20">
                                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" fill="currentColor"/>
                                    </svg>
                                </a>
                                <a href="https://medium.com" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                                    <svg viewBox="0 0 24 24" width="20" height="20">
                                        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" fill="currentColor"/>
                                    </svg>
                                </a>
                                <a href="https://kaggle.com" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                                    <svg viewBox="0 0 24 24" width="20" height="20">
                                        <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.285.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.07.336" fill="currentColor"/>
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
                                    <select
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        className={styles.formSelect}
                                        required
                                    >
                                        <option value="">Select a subject</option>
                                        <option value="general">General Inquiry</option>
                                        <option value="project">Project Discussion</option>
                                        <option value="collaboration">Collaboration</option>
                                        <option value="job">Job Opportunity</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div className={styles.formGroup}>
                                    <label className={styles.formLabel}>Message</label>
                                    <textarea
                                        name="message"
                                        placeholder="Tell me about your project or opportunity..."
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        className={styles.formTextarea}
                                        rows="5"
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