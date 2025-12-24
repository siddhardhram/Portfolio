import { useEffect, useRef } from 'react';

export const BackgroundBeams = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Beam class
        class Beam {
            x: number;
            y: number;
            length: number;
            speed: number;
            angle: number;
            opacity: number;

            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = -50;
                this.length = Math.random() * 100 + 50;
                this.speed = Math.random() * 2 + 1;
                this.angle = Math.random() * 20 - 10; // -10 to 10 degrees
                this.opacity = Math.random() * 0.3 + 0.1;
            }

            update() {
                this.y += this.speed;
                this.x += Math.sin(this.angle * Math.PI / 180) * this.speed;

                // Reset when off screen
                if (this.y > canvas.height + 50) {
                    this.y = -50;
                    this.x = Math.random() * canvas.width;
                }
            }

            draw() {
                if (!ctx) return;

                const gradient = ctx.createLinearGradient(
                    this.x,
                    this.y,
                    this.x,
                    this.y + this.length
                );

                gradient.addColorStop(0, `rgba(6, 182, 212, 0)`);
                gradient.addColorStop(0.5, `rgba(6, 182, 212, ${this.opacity})`);
                gradient.addColorStop(1, `rgba(6, 182, 212, 0)`);

                ctx.strokeStyle = gradient;
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(this.x, this.y + this.length);
                ctx.stroke();
            }
        }

        // Create beams (only a few for subtlety)
        const beams: Beam[] = [];
        for (let i = 0; i < 5; i++) {
            beams.push(new Beam());
        }

        // Animation loop
        let animationId: number;
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            beams.forEach(beam => {
                beam.update();
                beam.draw();
            });

            animationId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ opacity: 0.4 }}
        />
    );
};
