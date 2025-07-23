import { useEffect } from 'react';

export const useLayeredScroll = () => {
    useEffect(() => {
        let isScrolling = false;
        let currentSection = 0;
        const sections = document.querySelectorAll('.section-layer');
        
        const snapToSection = (sectionIndex) => {
            if (sectionIndex >= 0 && sectionIndex < sections.length) {
                const targetSection = sections[sectionIndex];
                const targetTop = sectionIndex * window.innerHeight;
                
                window.scrollTo({
                    top: targetTop,
                    behavior: 'smooth'
                });
                
                currentSection = sectionIndex;
            }
        };

        const handleWheel = (event) => {
            if (isScrolling) return;
            
            event.preventDefault();
            isScrolling = true;
            
            const delta = event.deltaY;
            const scrollDirection = delta > 0 ? 1 : -1;
            
            let targetSection = currentSection + scrollDirection;
            
            // Don't include footer in snap scrolling (last section should be contact)
            const maxScrollableSection = sections.length - 2; // Exclude footer
            
            // Ensure we don't go past the boundaries
            if (targetSection > maxScrollableSection) {
                targetSection = maxScrollableSection;
            }
            
            if (targetSection < 0) {
                targetSection = 0;
            }
            
            // Only snap if we're actually changing sections
            if (targetSection !== currentSection) {
                snapToSection(targetSection);
            }
            
            setTimeout(() => {
                isScrolling = false;
            }, 800);
        };

        const handleKeyDown = (event) => {
            if (isScrolling) return;
            
            let targetSection = currentSection;
            const maxScrollableSection = sections.length - 2; // Exclude footer
            
            switch (event.key) {
                case 'ArrowDown':
                case 'PageDown':
                    event.preventDefault();
                    targetSection = Math.min(currentSection + 1, maxScrollableSection);
                    break;
                case 'ArrowUp':
                case 'PageUp':
                    event.preventDefault();
                    targetSection = Math.max(currentSection - 1, 0);
                    break;
                case 'Home':
                    event.preventDefault();
                    targetSection = 0;
                    break;
                case 'End':
                    event.preventDefault();
                    targetSection = maxScrollableSection;
                    break;
                default:
                    return;
            }
            
            if (targetSection !== currentSection) {
                isScrolling = true;
                snapToSection(targetSection);
                setTimeout(() => {
                    isScrolling = false;
                }, 800);
            }
        };

        const updateCurrentSection = () => {
            const scrollTop = window.pageYOffset;
            const newSection = Math.round(scrollTop / window.innerHeight);
            if (newSection !== currentSection && newSection >= 0 && newSection < sections.length) {
                currentSection = newSection;
            }
        };

        const handleScroll = () => {
            if (!isScrolling) {
                updateCurrentSection();
            }
        };

        // Initial setup
        currentSection = 0;
        
        window.addEventListener('wheel', handleWheel, { passive: false });
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('wheel', handleWheel);
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
};
