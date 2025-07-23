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
                        Chithraka Kalanamith
                    </a>
                    <div className={styles.nav}>
                        <ul className={styles.navList}>
                            <li className={styles.navItem}>
                                <a href="#home" className={styles.navLink}>Home</a>
                            </li>
                            <li className={styles.navItem}>
                                <a href="#about" className={styles.navLink}>About</a>
                            </li>
                            <li className={styles.navItem}>
                                <a href="#projects" className={styles.navLink}>Projects</a>
                            </li>
                            <li className={styles.navItem}>
                                <a href="#skills" className={styles.navLink}>Skills</a>
                            </li>
                            <li className={styles.navItem}>
                                <a href="#contact" className={styles.navLink}>Contact</a>
                            </li>
                        </ul>
                        <button 
                            className={styles.themeToggle} 
                            onClick={toggleTheme}
                            aria-label="Toggle theme"
                        >
                            {isDarkMode ? '☀️' : '🌙'}
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;