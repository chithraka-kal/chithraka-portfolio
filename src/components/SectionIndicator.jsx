import React, { useState, useEffect } from 'react';

function SectionIndicator() {
    const [currentSection, setCurrentSection] = useState(0);
    const sections = ['hero', 'about', 'projects', 'skills', 'education', 'certification', 'contact'];

    useEffect(() => {
        const handleScroll = () => {
            const sectionElements = document.querySelectorAll('.section-layer:not([data-section="footer"])');
            const scrollTop = window.pageYOffset;
            const windowHeight = window.innerHeight;

            sectionElements.forEach((section, index) => {
                const sectionTop = section.offsetTop;
                const sectionBottom = sectionTop + section.offsetHeight;

                if (scrollTop >= sectionTop - windowHeight / 2 && scrollTop < sectionBottom - windowHeight / 2) {
                    setCurrentSection(index);
                }
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial call

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (index) => {
        const sectionElements = document.querySelectorAll('.section-layer');
        if (sectionElements[index]) {
            const targetTop = sectionElements[index].offsetTop;
            window.scrollTo({
                top: targetTop,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="section-indicator">
            {sections.map((section, index) => (
                <div
                    key={section}
                    className={`section-dot ${currentSection === index ? 'active' : ''}`}
                    onClick={() => scrollToSection(index)}
                    title={section.charAt(0).toUpperCase() + section.slice(1)}
                />
            ))}
        </div>
    );
}

export default SectionIndicator;
