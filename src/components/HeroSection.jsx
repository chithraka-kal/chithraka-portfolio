import styles from './HeroSection.module.css';

function HeroSection() {
    return (
        <section className={styles.heroSection} id="home">
            <div className={styles.container}>
                <div className={styles.heroContent}>
                    <h1 className={styles.title}>
                        <span className={styles.highlight}>Chithraka Kalanamith</span>
                    </h1>
                    <p className={styles.subtitle}>
                        Full Stack Developer | React | Node.js
                    </p>
                    <p className={styles.description}>
                        Passionate about creating innovative web solutions and bringing ideas to life through code. 
                        Let's build something amazing together!
                    </p>
                    <div className={styles.ctaButtons}>
                        <a href="#projects" className={styles.primaryButton}>
                            View My Work
                        </a>
                        <a href="#contact" className={styles.secondaryButton}>
                            Get In Touch
                        </a>
                    </div>
                </div>
                <div className={styles.heroVisual}>
                    <div className={styles.codeBlock}>
                        <div className={styles.codeHeader}>
                            <div className={styles.dots}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <span className={styles.fileName}>portfolio.js</span>
                        </div>
                        <div className={styles.codeContent}>
                            <div className={styles.codeLine}>
                                <span className={styles.keyword}>const</span>{' '}
                                <span className={styles.variable}>developer</span>{' '}
                                <span className={styles.operator}>=</span>{' '}
                                <span className={styles.string}>"Chithraka"</span>;
                            </div>
                            <div className={styles.codeLine}>
                                <span className={styles.variable}>developer</span>
                                <span className={styles.operator}>.</span>
                                <span className={styles.method}>buildAmazingThings</span>
                                <span className={styles.parentheses}>()</span>;
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;