import { useEffect } from 'react';

export const useLayeredScroll = () => {
    useEffect(() => {
        let isScrolling = false;
        let currentSection = 0;
        let scrollTimeout = null;
        const sections = document.querySelectorAll('.section-layer:not([data-section="hero"])');
        
        const snapToSection = (sectionIndex) => {
            if (sectionIndex >= 0 && sectionIndex < sections.length) {
                const targetSection = sections[sectionIndex];
                const targetTop = targetSection.offsetTop;
                
                window.scrollTo({
                    top: targetTop,
                    behavior: 'smooth'
                });
                currentSection = sectionIndex;
            }
        };

        // Very conservative wheel handling - only engage on very large, intentional scrolls
        const handleWheel = (event) => {
            // Only engage for very large scroll movements (trackpad/mouse wheel full swipes)
            if (Math.abs(event.deltaY) < 150) return; // Increased threshold significantly
            
            if (isScrolling) {
                return; // Don't prevent default, allow normal scrolling
            }
            
            // Only prevent default for very large scroll movements
            if (Math.abs(event.deltaY) > 200) {
                event.preventDefault();
            }
            
            if (scrollTimeout) {
                clearTimeout(scrollTimeout);
            }
            
            isScrolling = true;
            
            const delta = event.deltaY;
            const scrollDirection = delta > 0 ? 1 : -1;
            
            let targetSection = currentSection + scrollDirection;
            const maxScrollableSection = sections.length - 1;
            
            targetSection = Math.max(0, Math.min(targetSection, maxScrollableSection));
            
            if (targetSection !== currentSection) {
                snapToSection(targetSection);
            }
            
            // Longer timeout for less aggressive snapping
            scrollTimeout = setTimeout(() => {
                isScrolling = false;
            }, 1000);
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
                }, 1000);
            }
        };

        const updateCurrentSection = () => {
            const scrollTop = window.pageYOffset;
            let newSection = 0;
            
            for (let i = 0; i < sections.length; i++) {
                const sectionTop = sections[i].offsetTop;
                const sectionHeight = sections[i].offsetHeight;
                const sectionBottom = sectionTop + sectionHeight;
                
                if (scrollTop >= sectionTop - 200 && scrollTop < sectionBottom - 200) {
                    newSection = i;
                    break;
                }
                
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
                if (scrollTimeout) {
                    clearTimeout(scrollTimeout);
                }
                
                scrollTimeout = setTimeout(() => {
                    updateCurrentSection();
                }, 100);
            }
        };

        // Initial setup
        currentSection = 0;
        updateCurrentSection();
        
        // Use passive: false only for wheel events that need preventDefault
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
