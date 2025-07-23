import styles from './Contact.module.css';

function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        alert('Thank you for your message! I will get back to you soon.');
    };

    return (
        <section className={styles.section} id="contact">
            <div className={styles.container}>
                <h2 className={styles.title}>Get In Touch</h2>
                <p className={styles.subtitle}>
                    Have a project in mind or just want to say hello? I'd love to hear from you!
                </p>
                
                <form className={styles.contactForm} onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="name">Name</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            className={styles.input}
                            required 
                        />
                    </div>
                    
                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            className={styles.input}
                            required 
                        />
                    </div>
                    
                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="message">Message</label>
                        <textarea 
                            id="message" 
                            name="message" 
                            className={styles.textarea}
                            placeholder="Tell me about your project or just say hello!"
                            required
                        ></textarea>
                    </div>
                    
                    <button type="submit" className={styles.submitButton}>
                        Send Message
                    </button>
                </form>

                <div className={styles.contactInfo}>
                    <div className={styles.contactItem}>
                        <span className={styles.contactIcon}>📧</span>
                        <div className={styles.contactLabel}>Email</div>
                        <div className={styles.contactValue}>
                            <a href="mailto:chithraka@example.com" className={styles.contactLink}>
                                chithraka@example.com
                            </a>
                        </div>
                    </div>
                    
                    <div className={styles.contactItem}>
                        <span className={styles.contactIcon}>📱</span>
                        <div className={styles.contactLabel}>Phone</div>
                        <div className={styles.contactValue}>
                            <a href="tel:+1234567890" className={styles.contactLink}>
                                +1 (234) 567-890
                            </a>
                        </div>
                    </div>
                    
                    <div className={styles.contactItem}>
                        <span className={styles.contactIcon}>🌍</span>
                        <div className={styles.contactLabel}>Location</div>
                        <div className={styles.contactValue}>Sri Lanka</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;