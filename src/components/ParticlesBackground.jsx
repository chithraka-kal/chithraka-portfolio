import { useEffect, useRef } from 'react';
import styles from './ParticlesBackground.module.css';

function ParticlesBackground() {
    const canvasRef = useRef(null);
    const animationRef = useRef(null);
    const particlesRef = useRef([]);

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

        // Falling Particle class
        class FallingParticle {
            constructor() {
                this.reset();
                this.opacity = Math.random() * 0.6 + 0.2;
                this.size = Math.random() * 2.5 + 0.5; // Smaller particles
                this.speed = Math.random() * 0.8 + 0.2; // Much slower speed
                this.drift = (Math.random() - 0.5) * 0.2; // Less horizontal drift
                this.rotation = Math.random() * Math.PI * 2;
                this.rotationSpeed = (Math.random() - 0.5) * 0.005; // Much slower rotation
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = -10; // Start above the screen
            }

            update() {
                // Fall down
                this.y += this.speed;
                this.x += this.drift;
                this.rotation += this.rotationSpeed;

                // Reset when off screen
                if (this.y > canvas.height + 10) {
                    this.reset();
                }

                // Wrap horizontally
                if (this.x > canvas.width + 10) {
                    this.x = -10;
                } else if (this.x < -10) {
                    this.x = canvas.width + 10;
                }
            }

            draw() {
                ctx.save();
                ctx.globalAlpha = this.opacity;
                ctx.translate(this.x, this.y);
                ctx.rotate(this.rotation);

                // Draw different shapes for variety
                const shapes = ['circle', 'square', 'triangle'];
                const shape = shapes[Math.floor(this.size * 1.5) % shapes.length];

                ctx.fillStyle = '#2f81f7'; // GitHub blue

                switch (shape) {
                    case 'circle':
                        ctx.beginPath();
                        ctx.arc(0, 0, this.size, 0, Math.PI * 2);
                        ctx.fill();
                        break;
                    case 'square':
                        ctx.fillRect(-this.size/2, -this.size/2, this.size, this.size);
                        break;
                    case 'triangle':
                        ctx.beginPath();
                        ctx.moveTo(0, -this.size);
                        ctx.lineTo(-this.size/2, this.size/2);
                        ctx.lineTo(this.size/2, this.size/2);
                        ctx.closePath();
                        ctx.fill();
                        break;
                }

                // Add subtle glow
                ctx.globalAlpha = this.opacity * 0.3;
                ctx.shadowColor = '#2f81f7';
                ctx.shadowBlur = 5;
                ctx.beginPath();
                ctx.arc(0, 0, this.size + 1, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(47, 129, 247, 0.3)';
                ctx.fill();

                ctx.restore();
            }
        }

        // Rising Particle class
        class RisingParticle {
            constructor() {
                this.reset();
                this.opacity = Math.random() * 0.4 + 0.1; // More subtle
                this.size = Math.random() * 2 + 0.3; // Even smaller
                this.speed = Math.random() * 0.6 + 0.15; // Much slower rising
                this.drift = (Math.random() - 0.5) * 0.15; // Less drift
                this.rotation = Math.random() * Math.PI * 2;
                this.rotationSpeed = (Math.random() - 0.5) * 0.003; // Very slow rotation
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = canvas.height + 10; // Start below the screen
            }

            update() {
                // Rise up
                this.y -= this.speed;
                this.x += this.drift;
                this.rotation += this.rotationSpeed;

                // Reset when off screen
                if (this.y < -10) {
                    this.reset();
                }

                // Wrap horizontally
                if (this.x > canvas.width + 10) {
                    this.x = -10;
                } else if (this.x < -10) {
                    this.x = canvas.width + 10;
                }
            }

            draw() {
                ctx.save();
                ctx.globalAlpha = this.opacity;
                ctx.translate(this.x, this.y);
                ctx.rotate(this.rotation);

                // Draw only circles for rising particles (more subtle)
                ctx.fillStyle = '#2f81f7'; // GitHub blue
                ctx.beginPath();
                ctx.arc(0, 0, this.size, 0, Math.PI * 2);
                ctx.fill();

                // Add very subtle glow
                ctx.globalAlpha = this.opacity * 0.2;
                ctx.shadowColor = '#2f81f7';
                ctx.shadowBlur = 3;
                ctx.beginPath();
                ctx.arc(0, 0, this.size + 0.5, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(47, 129, 247, 0.2)';
                ctx.fill();

                ctx.restore();
            }
        };

        // Create particles
        const createParticles = () => {
            const totalParticleCount = Math.floor((canvas.width * canvas.height) / 12000);
            const fallingCount = Math.floor(totalParticleCount * 0.7); // 70% falling
            const risingCount = totalParticleCount - fallingCount; // 30% rising
            
            particlesRef.current = [];
            
            // Create falling particles
            for (let i = 0; i < fallingCount; i++) {
                const particle = new FallingParticle();
                // Spread initial positions across the screen height for smoother start
                particle.y = Math.random() * canvas.height;
                particlesRef.current.push(particle);
            }
            
            // Create rising particles
            for (let i = 0; i < risingCount; i++) {
                const particle = new RisingParticle();
                // Spread initial positions across the screen height for smoother start
                particle.y = Math.random() * canvas.height;
                particlesRef.current.push(particle);
            }
        };

        // Animation loop
        const animate = () => {
            // Clear the canvas completely for clean particles
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Update and draw particles
            particlesRef.current.forEach(particle => {
                particle.update();
                particle.draw();
            });
            
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
