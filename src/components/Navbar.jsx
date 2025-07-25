import styles from './Navbar.module.css';
import { useTheme } from '../contexts/ThemeContext';
import { useState, useEffect } from 'react';

function Navbar() {
    const { isDarkMode, toggleTheme } = useTheme();
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const currentProgress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(currentProgress);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className={styles.progressBar}>
                <div 
                    className={styles.progressFill}
                    style={{ width: `${scrollProgress}%` }}
                ></div>
            </div>
            <nav className={styles.navbar}>
                <div className={styles.container}>
                    <a href="#home" className={styles.logo}>
                       {"<"}Chithraka-Dev{"/>"}
                    </a>
                    <div className={styles.nav}>
                        <ul className={styles.navList}>
                            <li className={styles.navItem}>
                                <a href="#" className={styles.navLink} onClick={(e) => {
                                    e.preventDefault();
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }}>Home</a>
                            </li>
                            <li className={styles.navItem}>
                                <a href="#about" className={styles.navLink}>About</a>
                            </li>
                            <li className={styles.navItem}>
                                <a href="#skills" className={styles.navLink}>Skills</a>
                            </li>
                            <li className={styles.navItem}>
                                <a href="#projects" className={styles.navLink}>Projects</a>
                            </li>
                            <li className={styles.navItem}>
                                <a href="#education" className={styles.navLink}>Education</a>
                            </li>
                            <li className={styles.navItem}>
                                <a href="#certification" className={styles.navLink}>Certifications</a>
                            </li>
                            <li className={styles.navItem}>
                                <a href="#footer" className={styles.navLink}>Contact</a>
                            </li>
                        </ul>
                        <button 
                            className={styles.themeToggle} 
                            onClick={() => {
                                console.log('Theme toggle clicked! Current mode:', isDarkMode);
                                toggleTheme();
                            }}
                            aria-label="Toggle theme"
                            title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                        >
                            {isDarkMode ? (
                                // Sun icon (light mode) - shows when in dark mode
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" fill="currentColor"/>
                                    <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" strokeWidth="2"/>
                                    <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" strokeWidth="2"/>
                                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" strokeWidth="2"/>
                                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" strokeWidth="2"/>
                                    <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" strokeWidth="2"/>
                                    <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2"/>
                                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" strokeWidth="2"/>
                                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" strokeWidth="2"/>
                                </svg>
                            ) : (
                                // Moon icon (dark mode) - shows when in light mode
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" strokeWidth="2" fill="currentColor"/>
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;