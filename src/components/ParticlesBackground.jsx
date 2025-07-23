import { useEffect, useRef } from 'react';
import styles from './ParticlesBackground.module.css';

function ParticlesBackground() {
    const canvasRef = useRef(null);
    const animationRef = useRef(null);
    const particlesRef = useRef([]);
    const mouseRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        
        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Mouse tracking
        const handleMouseMove = (event) => {
            mouseRef.current = {
                x: event.clientX,
                y: event.clientY
            };
        };

        window.addEventListener('mousemove', handleMouseMove);

        // Particle class
        class Particle {
            constructor() {
                this.reset();
                this.opacity = Math.random() * 0.3 + 0.7; // Much more opaque
                this.originalOpacity = this.opacity;
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 5 + 3; // Larger particles
                this.baseSpeedX = (Math.random() - 0.5) * 1; // Faster movement
                this.baseSpeedY = (Math.random() - 0.5) * 1;
                this.speedX = this.baseSpeedX;
                this.speedY = this.baseSpeedY;
            }

            update() {
                // Mouse interaction
                const dx = mouseRef.current.x - this.x;
                const dy = mouseRef.current.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const maxDistance = 100;

                if (distance < maxDistance) {
                    const force = (maxDistance - distance) / maxDistance;
                    const angle = Math.atan2(dy, dx);
                    this.speedX = this.baseSpeedX - Math.cos(angle) * force * 2;
                    this.speedY = this.baseSpeedY - Math.sin(angle) * force * 2;
                    this.opacity = this.originalOpacity + force * 0.5;
                } else {
                    this.speedX += (this.baseSpeedX - this.speedX) * 0.05;
                    this.speedY += (this.baseSpeedY - this.speedY) * 0.05;
                    this.opacity += (this.originalOpacity - this.opacity) * 0.05;
                }

                this.x += this.speedX;
                this.y += this.speedY;

                // Wrap around screen
                if (this.x > canvas.width + 50) this.x = -50;
                if (this.x < -50) this.x = canvas.width + 50;
                if (this.y > canvas.height + 50) this.y = -50;
                if (this.y < -50) this.y = canvas.height + 50;
            }

            draw() {
                ctx.globalAlpha = this.opacity;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                
                // Use solid color instead of gradient for better visibility
                const accentColor = getComputedStyle(document.documentElement)
                    .getPropertyValue('--accent-color') || '#007bff';
                
                ctx.fillStyle = accentColor;
                ctx.fill();
                
                // Add a white glow effect
                ctx.globalAlpha = this.opacity * 0.3;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size + 2, 0, Math.PI * 2);
                ctx.fillStyle = 'white';
                ctx.fill();
            }
        }

        // Create particles
        const createParticles = () => {
            const particleCount = Math.floor((canvas.width * canvas.height) / 8000); // More particles
            particlesRef.current = [];
            
            for (let i = 0; i < particleCount; i++) {
                particlesRef.current.push(new Particle());
            }
        };

        // Draw connections between nearby particles
        const drawConnections = () => {
            for (let i = 0; i < particlesRef.current.length; i++) {
                for (let j = i + 1; j < particlesRef.current.length; j++) {
                    const particle1 = particlesRef.current[i];
                    const particle2 = particlesRef.current[j];
                    
                    const dx = particle1.x - particle2.x;
                    const dy = particle1.y - particle2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < 120) { // Increased connection distance
                        const opacity = 0.3 * (1 - distance / 120); // More visible connections
                        ctx.globalAlpha = opacity;
                        ctx.beginPath();
                        ctx.moveTo(particle1.x, particle1.y);
                        ctx.lineTo(particle2.x, particle2.y);
                        ctx.strokeStyle = getComputedStyle(document.documentElement)
                            .getPropertyValue('--accent-color') || '#007bff';
                        ctx.lineWidth = 2; // Thicker lines
                        ctx.stroke();
                    }
                }
            }
        };

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Debug: Add a visible test circle to ensure canvas is working
            ctx.globalAlpha = 1;
            ctx.beginPath();
            ctx.arc(50, 50, 10, 0, Math.PI * 2);
            ctx.fillStyle = 'red';
            ctx.fill();
            
            // Update and draw particles
            particlesRef.current.forEach(particle => {
                particle.update();
                particle.draw();
            });
            
            // Draw connections
            drawConnections();
            
            animationRef.current = requestAnimationFrame(animate);
        };

        // Initialize
        createParticles();
        animate();

        // Recreate particles on resize
        const handleResize = () => {
            resizeCanvas();
            createParticles();
        };

        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className={styles.particlesCanvas}
        />
    );
}

export default ParticlesBackground;
