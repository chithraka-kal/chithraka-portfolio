import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footerContent}>
                    <div className={styles.logo}>
                        Chithraka Kalanamith
                    </div>
                    
                    <nav>
                        <ul className={styles.quickLinks}>
                            <li><a href="#home" className={styles.quickLink}>Home</a></li>
                            <li><a href="#about" className={styles.quickLink}>About</a></li>
                            <li><a href="#projects" className={styles.quickLink}>Projects</a></li>
                            <li><a href="#skills" className={styles.quickLink}>Skills</a></li>
                            <li><a href="#contact" className={styles.quickLink}>Contact</a></li>
                        </ul>
                    </nav>
                    
                    <div className={styles.socialLinks}>
                        <a href="https://github.com" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                            🐙
                        </a>
                        <a href="https://linkedin.com" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                            💼
                        </a>
                        <a href="https://twitter.com" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                            🐦
                        </a>
                    </div>
                </div>
                
                <div className={styles.divider}></div>
                
                <p className={styles.copyright}>
                    © 2025 Chithraka Kalanamith. All rights reserved. Built with React & ❤️
                </p>
            </div>
        </footer>
    );
}

export default Footer;