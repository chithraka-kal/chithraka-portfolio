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
        const handleMouseMove = (e) => {
            mouseRef.current = {
                x: e.clientX,
                y: e.clientY
            };
        };

        window.addEventListener('mousemove', handleMouseMove);

        // Get theme-aware particle color
        const getParticleColor = () => {
            const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
            return {
                hex: isDark ? '#4dabf7' : '#2f81f7',
                rgba: isDark ? '77, 171, 247' : '47, 129, 247'
            };
        };

        // Falling Particle class
        class FallingParticle {
            constructor() {
                this.reset();
                this.opacity = Math.random() * 0.6 + 0.2; // Back to normal opacity
                this.size = Math.random() * 2.5 + 0.5; // Back to normal smaller particles
                this.speed = Math.random() * 0.8 + 0.2; // Much slower speed
                this.drift = (Math.random() - 0.5) * 0.2; // Less horizontal drift
                this.rotation = Math.random() * Math.PI * 2;
                this.rotationSpeed = (Math.random() - 0.5) * 0.005; // Much slower rotation
                this.baseSpeed = this.speed;
                this.baseDrift = this.drift;
                this.vx = 0; // Velocity X for mouse repulsion
                this.vy = 0; // Velocity Y for mouse repulsion
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = -10; // Start above the screen
            }

            update() {
                // Mouse repulsion
                const dx = this.x - mouseRef.current.x;
                const dy = this.y - mouseRef.current.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const repulsionRadius = 100;
                
                if (distance < repulsionRadius) {
                    const force = (repulsionRadius - distance) / repulsionRadius;
                    const angle = Math.atan2(dy, dx);
                    this.vx += Math.cos(angle) * force * 0.5;
                    this.vy += Math.sin(angle) * force * 0.5;
                }
                
                // Apply repulsion velocity
                this.x += this.vx;
                this.y += this.vy;
                
                // Damping to return to normal movement
                this.vx *= 0.95;
                this.vy *= 0.95;

                // Normal falling movement
                this.y += this.baseSpeed;
                this.x += this.baseDrift;
                this.rotation += this.rotationSpeed;

                // Reset when off screen
                if (this.y > canvas.height + 10) {
                    this.reset();
                    this.vx = 0;
                    this.vy = 0;
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

                const particleColor = getParticleColor();
                ctx.fillStyle = particleColor.hex;

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
                ctx.shadowColor = particleColor.hex;
                ctx.shadowBlur = 5;
                ctx.beginPath();
                ctx.arc(0, 0, this.size + 1, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${particleColor.rgba}, 0.3)`;
                ctx.fill();

                ctx.restore();
            }
        }

        // Rising Particle class
        class RisingParticle {
            constructor() {
                this.reset();
                this.opacity = Math.random() * 0.4 + 0.1; // Back to more subtle
                this.size = Math.random() * 2 + 0.3; // Back to smaller particles
                this.speed = Math.random() * 0.6 + 0.15; // Much slower rising
                this.drift = (Math.random() - 0.5) * 0.15; // Less drift
                this.rotation = Math.random() * Math.PI * 2;
                this.rotationSpeed = (Math.random() - 0.5) * 0.003; // Very slow rotation
                this.baseSpeed = this.speed;
                this.baseDrift = this.drift;
                this.vx = 0; // Velocity X for mouse repulsion
                this.vy = 0; // Velocity Y for mouse repulsion
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = canvas.height + 10; // Start below the screen
            }

            update() {
                // Mouse repulsion
                const dx = this.x - mouseRef.current.x;
                const dy = this.y - mouseRef.current.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const repulsionRadius = 100;
                
                if (distance < repulsionRadius) {
                    const force = (repulsionRadius - distance) / repulsionRadius;
                    const angle = Math.atan2(dy, dx);
                    this.vx += Math.cos(angle) * force * 0.5;
                    this.vy += Math.sin(angle) * force * 0.5;
                }
                
                // Apply repulsion velocity
                this.x += this.vx;
                this.y += this.vy;
                
                // Damping to return to normal movement
                this.vx *= 0.95;
                this.vy *= 0.95;

                // Normal rising movement
                this.y -= this.baseSpeed;
                this.x += this.baseDrift;
                this.rotation += this.rotationSpeed;

                // Reset when off screen
                if (this.y < -10) {
                    this.reset();
                    this.vx = 0;
                    this.vy = 0;
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
                const particleColor = getParticleColor();
                ctx.fillStyle = particleColor.hex;
                ctx.beginPath();
                ctx.arc(0, 0, this.size, 0, Math.PI * 2);
                ctx.fill();

                // Add very subtle glow
                ctx.globalAlpha = this.opacity * 0.2;
                ctx.shadowColor = particleColor.hex;
                ctx.shadowBlur = 3;
                ctx.beginPath();
                ctx.arc(0, 0, this.size + 0.5, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${particleColor.rgba}, 0.2)`;
                ctx.fill();

                ctx.restore();
            }
        };

        // Create particles
        const createParticles = () => {
            const totalParticleCount = Math.floor((canvas.width * canvas.height) / 8000); // Increased particle density
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
