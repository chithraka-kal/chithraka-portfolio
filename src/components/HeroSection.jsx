import { useEffect, useRef, useState } from 'react';
import styles from './HeroSection.module.css';

function HeroSection() {
    const heroRef = useRef(null);
    const contentRef = useRef(null);
    const cursorRef = useRef(null);
    const trailRefs = useRef([]);
    const mousePosition = useRef({ x: 0, y: 0 });
    const trailPositions = useRef(Array(5).fill().map(() => ({ x: 0, y: 0 })));
    const animationId = useRef(null);

    // Typing animation states
    const [displayedText, setDisplayedText] = useState('');
    const [isTyping, setIsTyping] = useState(true);
    const [isDeleting, setIsDeleting] = useState(false);
    const subtitleTexts = [
        "Full Stack Developer",
        "React Specialist", 
        "JavaScript Expert",
        "UI/UX Enthusiast"
    ];
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    // Function to handle CV download
    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = '/Chithraka_Kalanamith_Resume.pdf';
        link.download = 'Chithraka_Kalanamith_Resume.pdf';
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    useEffect(() => {
        const handleMouseMove = (e) => {
            mousePosition.current = { x: e.clientX, y: e.clientY };
            
            if (cursorRef.current) {
                cursorRef.current.style.left = e.clientX + 'px';
                cursorRef.current.style.top = e.clientY + 'px';
            }
        };

        const updateTrail = () => {
            // Smooth interpolation for trail positions with closer spacing
            const lerpFactor = 0.25; // Higher value for more responsive, closer trail
            
            // Update first trail position to mouse position with smoothing
            trailPositions.current[0].x += (mousePosition.current.x - trailPositions.current[0].x) * lerpFactor;
            trailPositions.current[0].y += (mousePosition.current.y - trailPositions.current[0].y) * lerpFactor;
            
            // Update subsequent trail positions with progressive delay
            for (let i = 1; i < trailPositions.current.length; i++) {
                const targetX = trailPositions.current[i - 1].x;
                const targetY = trailPositions.current[i - 1].y;
                const currentLerpFactor = lerpFactor * (0.9 - i * 0.1); // Less spread between dots
                
                trailPositions.current[i].x += (targetX - trailPositions.current[i].x) * currentLerpFactor;
                trailPositions.current[i].y += (targetY - trailPositions.current[i].y) * currentLerpFactor;
            }

            // Update trail elements
            trailRefs.current.forEach((trail, index) => {
                if (trail && trailPositions.current[index]) {
                    trail.style.left = trailPositions.current[index].x + 'px';
                    trail.style.top = trailPositions.current[index].y + 'px';
                }
            });

            animationId.current = requestAnimationFrame(updateTrail);
        };

        const handleMouseEnter = () => {
            if (cursorRef.current) {
                cursorRef.current.style.opacity = '1';
            }
            trailRefs.current.forEach(trail => {
                if (trail) trail.style.opacity = '1';
            });
        };

        const handleMouseLeave = () => {
            if (cursorRef.current) {
                cursorRef.current.style.opacity = '0';
            }
            trailRefs.current.forEach(trail => {
                if (trail) trail.style.opacity = '0';
            });
        };

        const handleLinkHover = () => {
            if (cursorRef.current) {
                cursorRef.current.style.transform = 'translate(-50%, -50%) scale(2.5)';
                cursorRef.current.style.opacity = '0.6'; // More transparent
                cursorRef.current.style.background = 'rgba(255, 255, 255, 0.5)'; // More transparent background
                cursorRef.current.style.boxShadow = `
                    0 0 5px rgba(255, 255, 255, 0.3),
                    0 0 10px rgba(255, 255, 255, 0.2),
                    0 0 15px rgba(255, 255, 255, 0.1)
                `;
            }
            // Also affect trail dots
            trailRefs.current.forEach((trail, index) => {
                if (trail) {
                    const baseScale = Math.max(0.3, (5 - index) / 6);
                    trail.style.transform = `translate(-50%, -50%) scale(${baseScale * 1.8})`;
                    trail.style.opacity = `${Math.max(0.1, (5 - index) / 8)}`; // More transparent trail
                    trail.style.boxShadow = `
                        0 0 4px rgba(255, 255, 255, 0.2),
                        0 0 8px rgba(255, 255, 255, 0.1)
                    `;
                }
            });
        };

        const handleLinkLeave = () => {
            if (cursorRef.current) {
                cursorRef.current.style.transform = 'translate(-50%, -50%) scale(1)';
                cursorRef.current.style.opacity = '1'; // Reset opacity
                cursorRef.current.style.background = 'rgba(255, 255, 255, 0.95)'; // Reset background
                cursorRef.current.style.boxShadow = `
                    0 0 15px rgba(255, 255, 255, 0.9),
                    0 0 30px rgba(255, 255, 255, 0.7),
                    0 0 45px rgba(255, 255, 255, 0.5)
                `;
            }
            // Reset trail dots
            trailRefs.current.forEach((trail, index) => {
                if (trail) {
                    const baseScale = Math.max(0.3, (5 - index) / 6);
                    trail.style.transform = `translate(-50%, -50%) scale(${baseScale})`;
                    trail.style.opacity = `${Math.max(0.2, (5 - index) / 6)}`; // Reset trail opacity
                    trail.style.boxShadow = `
                        0 0 12px rgba(255, 255, 255, 0.6),
                        0 0 24px rgba(255, 255, 255, 0.4)
                    `;
                }
            });
        };

        // Add event listeners
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseenter', handleMouseEnter);
        document.addEventListener('mouseleave', handleMouseLeave);

        // Add hover effects for interactive elements
        const links = document.querySelectorAll('a, button');
        links.forEach(link => {
            link.addEventListener('mouseenter', handleLinkHover);
            link.addEventListener('mouseleave', handleLinkLeave);
        });

        // Start trail animation
        updateTrail();

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseenter', handleMouseEnter);
            document.removeEventListener('mouseleave', handleMouseLeave);
            
            links.forEach(link => {
                link.removeEventListener('mouseenter', handleLinkHover);
                link.removeEventListener('mouseleave', handleLinkLeave);
            });
            
            if (animationId.current) {
                cancelAnimationFrame(animationId.current);
            }
        };
    }, []);

    // Typing animation effect
    useEffect(() => {
        const currentText = subtitleTexts[currentTextIndex];
        let timeoutId;

        if (isDeleting) {
            if (displayedText.length > 0) {
                timeoutId = setTimeout(() => {
                    setDisplayedText(prev => prev.slice(0, -1));
                }, 50);
            } else {
                setIsDeleting(false);
                setCurrentTextIndex((prev) => (prev + 1) % subtitleTexts.length);
                timeoutId = setTimeout(() => setIsTyping(true), 500);
            }
        } else if (isTyping) {
            if (displayedText.length < currentText.length) {
                timeoutId = setTimeout(() => {
                    setDisplayedText(currentText.slice(0, displayedText.length + 1));
                }, Math.random() * 100 + 50);
            } else {
                setIsTyping(false);
                timeoutId = setTimeout(() => setIsDeleting(true), 2000);
            }
        }

        return () => {
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, [displayedText, isTyping, isDeleting, currentTextIndex, subtitleTexts]);

    useEffect(() => {
        const handleScroll = () => {
            if (!heroRef.current || !contentRef.current) return;

            const scrolled = window.pageYOffset;
            const windowHeight = window.innerHeight;
            const scrollProgress = Math.min(scrolled / windowHeight, 1);

            // Scale down and completely disappear - creating "going into screen" effect
            const scale = 1 - (scrollProgress * 0.6); // Scale from 1 to 0.4
            const opacity = 1 - (scrollProgress * 1.2); // Fade from 1 to completely gone
            const blur = scrollProgress * 4; // Add more blur for depth

            // Ensure opacity doesn't go below 0
            const finalOpacity = Math.max(opacity, 0);

            // Apply transformations to main content
            contentRef.current.style.transform = `scale(${scale})`;
            contentRef.current.style.opacity = finalOpacity;
            contentRef.current.style.filter = `blur(${blur}px)`;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Custom Cursor */}
            <div className={styles.customCursor} ref={cursorRef}></div>
            
            {/* Trail Elements */}
            {Array(5).fill().map((_, index) => (
                <div 
                    key={index}
                    className={styles.trailDot}
                    ref={el => trailRefs.current[index] = el}
                    style={{
                        opacity: Math.max(0.2, (5 - index) / 6),
                        transform: `translate(-50%, -50%) scale(${Math.max(0.4, (5 - index) / 6)})`
                    }}
                ></div>
            ))}
            
            <section className={styles.heroSection} id="home" ref={heroRef}>
            <div className={styles.container} ref={contentRef}>
                <div className={styles.heroContent}>
                    <h1 className={styles.title}>
                        <span className={styles.highlight}>Chithraka Kalanamith</span>
                    </h1>
                    <p className={styles.subtitle}>
                        {displayedText}
                        <span className={`${styles.typingCursor} ${!isTyping && !isDeleting ? styles.blinking : ''}`}>|</span>
                    </p>
                    <p className={styles.description}>
                        Passionate about creating innovative web solutions and bringing ideas to life through code. 
                        Let's build something amazing together!
                    </p>
                    <div className={styles.ctaButtons}>
                        <a href="#projects" className={styles.primaryButton}>
                            View My Work
                        </a>
                        <button 
                            onClick={handleDownloadCV}
                            className={styles.secondaryButton}
                        >
                            Download CV
                        </button>
                    </div>
                    <div className={styles.socialLinks}>
                        <a href="https://github.com/chithraka-kal" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                            <svg viewBox="0 0 24 24" className={styles.socialIcon}>
                                <path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </a>
                        <a href="https://linkedin.com/in/chithraka-kalanamith" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                            <svg viewBox="0 0 24 24" className={styles.socialIcon}>
                                <path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                        </a>
                        <a href="mailto:chithrakakalanamith@gmail.com" className={styles.socialLink}>
                            <svg viewBox="0 0 24 24" className={styles.socialIcon}>
                                <path fill="currentColor" d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.781L12 12.023l9.583-8.202h.781A1.636 1.636 0 0 1 24 5.457z"/>
                            </svg>
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
        </>
    );
}

export default HeroSection;