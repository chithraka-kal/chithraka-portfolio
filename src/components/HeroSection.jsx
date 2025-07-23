import styles from './HeroSection.module.css';

function HeroSection() {
    return (
        <section className={styles.heroSection} id="home">
            <div className={styles.container}>
                <h1 className={styles.title}>Chithraka Kalanamith</h1>
                <p className={styles.subtitle}>Full Stack Developer | React | Node.js</p>
                <p className={styles.description}>
                    Passionate about creating innovative web solutions and bringing ideas to life through code. 
                    Let's build something amazing together!
                </p>
                <a href="#projects" className={styles.ctaButton}>
                    View My Work
                </a>
            </div>
        </section>
    );
}

export default HeroSection;