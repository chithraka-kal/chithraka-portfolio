import styles from './Projects.module.css';
import shouetopea from '../assets/shouetopea.png';
import { useState, useEffect, useRef } from 'react';

const projects = [
    {
        title: "E-commerce Platform",
        description: "A modern e-commerce platform built with React and Node.js",
        image: shouetopea,
        tags: ["React", "Node.js", "MongoDB"],
        link: "#",
        github: "#"
    },
    {
        title: "Task Management App",
        description: "A collaborative task management application with real-time updates",
        image: shouetopea,
        tags: ["React", "Socket.io", "Express"],
        link: "#",
        github: "#"
    },
    {
        title: "Weather Dashboard",
        description: "A responsive weather dashboard with location-based forecasts",
        image: shouetopea,
        tags: ["JavaScript", "API", "CSS"],
        link: "#",
        github: "#"
    },
    {
        title: "Blog Platform",
        description: "A full-featured blog platform with admin panel",
        image: shouetopea,
        tags: ["React", "Firebase", "Tailwind"],
        link: "#",
        github: "#"
    },
    {
        title: "Portfolio Website",
        description: "A responsive portfolio website showcasing my work",
        image: shouetopea,
        tags: ["React", "Vite", "CSS"],
        link: "#",
        github: "#"
    },
    {
        title: "Chat Application",
        description: "A real-time chat application with rooms and notifications",
        image: shouetopea,
        tags: ["React", "Socket.io", "Node.js"],
        link: "#",
        github: "#"
    },
    {
        title: "Music Player",
        description: "A responsive music player with playlist management",
        image: shouetopea,
        tags: ["React", "Web Audio API", "CSS"],
        link: "#",
        github: "#"
    },
    {
        title: "Recipe App",
        description: "A recipe sharing app with search and favorites",
        image: shouetopea,
        tags: ["React", "Firebase", "Material-UI"],
        link: "#",
        github: "#"
    }
];

const CARD_WIDTH = 350;
const GAP = 24;
const VISIBLE_CARDS = 4;

function Projects() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const intervalRef = useRef(null);

    const totalCards = projects.length;
    const extendedProjects = [...projects, ...projects.slice(0, VISIBLE_CARDS)];
    const maxIndex = totalCards;

    const startAutoSlide = () => {
        intervalRef.current = setInterval(() => {
            setCurrentIndex(prev => prev + 1);
            setIsTransitioning(true);
        }, 4000);
    };

    useEffect(() => {
        startAutoSlide();
        return () => clearInterval(intervalRef.current);
    }, []);

    useEffect(() => {
        if (currentIndex === maxIndex) {
            setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(0);
            }, 700);
        }
    }, [currentIndex, maxIndex]);

    useEffect(() => {
        clearInterval(intervalRef.current);
        startAutoSlide();
        return () => clearInterval(intervalRef.current);
    }, [currentIndex]);

    const getTransformStyle = () => {
        return {
            transform: `translateX(-${(CARD_WIDTH + GAP) * currentIndex}px)`,
            transition: isTransitioning ? 'transform 700ms ease-in-out' : 'none',
            width: `${(CARD_WIDTH + GAP) * extendedProjects.length}px`,
        };
    };

    const handlePrev = () => {
        if (currentIndex === 0) {
            setIsTransitioning(false);
            setCurrentIndex(totalCards);
            setTimeout(() => {
                setIsTransitioning(true);
                setCurrentIndex(totalCards - 1);
            }, 20);
        } else {
            setIsTransitioning(true);
            setCurrentIndex(prev => prev - 1);
        }
    };

    const handleNext = () => {
        setIsTransitioning(true);
        setCurrentIndex(prev => prev + 1);
    };

    const handleDotClick = (i) => {
        setIsTransitioning(true);
        setCurrentIndex(i);
    };

    return (
        <section className={styles.section} id="projects">
            <div className={styles.fullWidthContainer}>
                <div className={styles.sectionHeader}>
                    <div className={styles.headerContent}>
                        <p className={styles.sectionTag}>MY PORTFOLIO</p>
                        <h2 className={styles.title}>
                            Recent Projects <br /> & Work
                        </h2>
                        <p className={styles.subtitle}>
                            Explore my latest projects showcasing modern web development techniques, 
                            creative problem-solving, and innovative user experiences.
                        </p>
                    </div>
                    <div className={styles.carouselControls}>
                        <button 
                            onClick={handlePrev}
                            className={styles.controlBtn}
                        >
                            &#8592;
                        </button>
                        <button 
                            onClick={handleNext}
                            className={styles.controlBtn}
                        >
                            &#8594;
                        </button>
                    </div>
                </div>

                <div className={styles.carouselWrapper}>
                    <div className={styles.carousel}>
                        <div 
                            className={styles.carouselTrack}
                            style={getTransformStyle()}
                        >
                            {extendedProjects.map((project, index) => (
                                <div
                                    key={index}
                                    className={styles.projectCard}
                                    style={{ width: `${CARD_WIDTH}px` }}
                                >
                                    <div className={styles.imageContainer}>
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className={styles.projectImage}
                                        />
                                        <div className={styles.overlay}>
                                            <div className={styles.overlayContent}>
                                                <a href={project.link} className={styles.actionBtn}>
                                                    View Live
                                                </a>
                                                <a href={project.github} className={styles.actionBtn}>
                                                    GitHub
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.cardContent}>
                                        <h3 className={styles.projectTitle}>{project.title}</h3>
                                        <p className={styles.projectDescription}>{project.description}</p>
                                        <div className={styles.tags}>
                                            {project.tags.map((tag, tagIndex) => (
                                                <span key={tagIndex} className={styles.tag}>
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={styles.carouselIndicators}>
                    {Array.from({ length: totalCards - VISIBLE_CARDS + 1 }).map((_, i) => (
                        <button
                            key={i}
                            className={`${styles.indicator} ${i === currentIndex % totalCards ? styles.active : ''}`}
                            onClick={() => handleDotClick(i)}
                        />
                    ))}
                </div>

                <div className={styles.viewAllSection}>
                    <a href="#" className={styles.viewAllButton}>
                        View all projects
                        <svg className={styles.arrowIcon} viewBox="0 0 16 16" width="16" height="16">
                            <path d="M7.28 3.22a.75.75 0 0 0-1.06 1.06L9.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L12 8.06a.75.75 0 0 0 0-1.06L7.28 3.22Z"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Projects;
