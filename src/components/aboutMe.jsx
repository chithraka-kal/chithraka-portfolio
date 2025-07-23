import styles from './AboutMe.module.css';

function AboutMe() {
    return (
        <section className={styles.section}>
            <div className="section-content">
                <div className={styles.container}>
                    <h1 className={styles.title}>About Me</h1>
                    <div className={styles.content}>
                        <div className={styles.imageContainer}>
                            <img 
                                src="./src/assets/profile.jpg" 
                                alt="Chithraka Kalanamith Profile" 
                                className={styles.profileImage}
                            />
                        </div>
                        <div className={styles.textContainer}>
                            <p className={styles.description}>
                                Hi, I'm Chithraka Kalanamith, a passionate Full Stack Developer with expertise in React and Node.js. 
                                I love building interactive web applications and exploring new technologies. With a strong foundation 
                                in both frontend and backend development, I enjoy creating seamless user experiences and robust server-side solutions.
                            </p>
                            <p className={styles.description}>
                                When I'm not coding, you can find me learning about the latest web technologies, contributing to open-source projects, 
                                or working on personal projects that challenge my skills and creativity.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;