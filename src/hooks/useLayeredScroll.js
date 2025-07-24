import { useEffect } from 'react';

export const useLayeredScroll = () => {
    useEffect(() => {
        let isScrolling = false;
        let currentSection = 0;
        let scrollTimeout = null;
        // Exclude hero section from scroll snapping
        const sections = document.querySelectorAll('.section-layer:not([data-section="hero"])');
        
        const snapToSection = (sectionIndex) => {
            if (sectionIndex >= 0 && sectionIndex < sections.length) {
                const targetSection = sections[sectionIndex];
                
                // Use the section's offsetTop for accurate positioning
                const targetTop = targetSection.offsetTop;
                
                // Use requestAnimationFrame for smoother scrolling
                const smoothScroll = () => {
                    window.scrollTo({
                        top: targetTop,
                        behavior: 'smooth'
                    });
                };
                
                requestAnimationFrame(smoothScroll);
                currentSection = sectionIndex;
            }
        };

        const handleWheel = (event) => {
            if (isScrolling) return;
            
            event.preventDefault();
            
            // Clear any existing timeout
            if (scrollTimeout) {
                clearTimeout(scrollTimeout);
            }
            
            isScrolling = true;
            
            const delta = event.deltaY;
            const scrollDirection = delta > 0 ? 1 : -1;
            
            let targetSection = currentSection + scrollDirection;
            
            // Allow scrolling to all sections including footer
            const maxScrollableSection = sections.length - 1;
            
            // Ensure we don't go past the boundaries
            targetSection = Math.max(0, Math.min(targetSection, maxScrollableSection));
            
            // Only snap if we're actually changing sections
            if (targetSection !== currentSection) {
                snapToSection(targetSection);
            }
            
            // Reduced timeout for more responsive scrolling
            scrollTimeout = setTimeout(() => {
                isScrolling = false;
            }, 600);
        };

        const handleKeyDown = (event) => {
            if (isScrolling) return;
            
            let targetSection = currentSection;
            const maxScrollableSection = sections.length - 1;
            
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
                scrollTimeout = setTimeout(() => {
                    isScrolling = false;
                }, 600);
            }
        };

        const updateCurrentSection = () => {
            const scrollTop = window.pageYOffset;
            let newSection = 0;
            
            // Find which section we're currently in based on scroll position
            for (let i = 0; i < sections.length; i++) {
                const sectionTop = sections[i].offsetTop;
                const sectionHeight = sections[i].offsetHeight;
                const sectionBottom = sectionTop + sectionHeight;
                
                // Check if we're in this section (with some tolerance)
                if (scrollTop >= sectionTop - 100 && scrollTop < sectionBottom - 100) {
                    newSection = i;
                    break;
                }
                
                // If we're past all sections, we're in the last one
                if (i === sections.length - 1) {
                    newSection = i;
                }
            }
            
            if (newSection !== currentSection) {
                currentSection = newSection;
            }
        };

        const handleScroll = () => {
            if (!isScrolling) {
                // Debounce the section update for better performance
                if (scrollTimeout) {
                    clearTimeout(scrollTimeout);
                }
                
                scrollTimeout = setTimeout(() => {
                    updateCurrentSection();
                }, 50);
            }
        };

        // Initial setup
        currentSection = 0;
        
        // Initialize current section based on scroll position
        updateCurrentSection();
        
        window.addEventListener('wheel', handleWheel, { passive: false });
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            // Clean up timeouts
            if (scrollTimeout) {
                clearTimeout(scrollTimeout);
            }
            
            window.removeEventListener('wheel', handleWheel);
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
};
