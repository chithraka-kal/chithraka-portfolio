import React, { useState, useEffect } from 'react';

function SectionIndicator() {
    const [currentSection, setCurrentSection] = useState(0);
    const sections = [
        { id: 'home', name: 'Hero' },
        { id: 'about', name: 'About' },
        { id: 'skills', name: 'Skills' },
        { id: 'projects', name: 'Projects' },
        { id: 'education', name: 'Education' },
        { id: 'certification', name: 'Certification' },
        { id: 'footer', name: 'Contact' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            const windowHeight = window.innerHeight;
            let currentIndex = 0;

            // Check hero section first (it has id="home")
            const heroSection = document.getElementById('home');
            if (heroSection) {
                const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
                if (scrollTop < heroBottom - windowHeight / 2) {
                    setCurrentSection(0);
                    return;
                }
            }

            // Check other sections
            sections.slice(1).forEach((section, index) => {
                const element = document.getElementById(section.id);
                if (element) {
                    const sectionTop = element.offsetTop;
                    const sectionBottom = sectionTop + element.offsetHeight;

                    if (scrollTop >= sectionTop - windowHeight / 2 && scrollTop < sectionBottom - windowHeight / 2) {
                        currentIndex = index + 1; // +1 because we're starting from slice(1)
                    }
                }
            });

            setCurrentSection(currentIndex);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial call

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (index) => {
        const sectionId = sections[index].id;
        const element = document.getElementById(sectionId);
        if (element) {
            const targetTop = element.offsetTop;
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
                    key={section.id}
                    className={`section-dot ${currentSection === index ? 'active' : ''}`}
                    onClick={() => scrollToSection(index)}
                    title={section.name}
                />
            ))}
        </div>
    );
}

export default SectionIndicator;
