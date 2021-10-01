import React, {useRef, useEffect, Component} from 'react';
import styles from './Canvas.module.css';

const Canvas = () => {
    const [dimensions] = React.useState({
        height: window.innerHeight,
        width: window.innerWidth
    });

    const canvasRef = useRef(null);

    const getPixelRatio = (context) => {
        var backingStore =
        context.backingStorePixelRatio ||
        context.webkitBackingStorePixelRatio ||
        context.mozBackingStorePixelRatio ||
        context.msBackingStorePixelRatio ||
        context.oBackingStorePixelRatio ||
        context.backingStorePixelRatio ||
        1;

        return (window.devicePixelRatio || 1) / backingStore;
    };

    useEffect(() => {
        let canvas = canvasRef.current;
        let ctx = canvas.getContext('2d');
        let ratio = getPixelRatio(ctx);
        ctx.canvas.width = dimensions.height * ratio;
        ctx.canvas.height = dimensions.height * ratio;
        let ceiling = (dimensions.height / 6);
        let colors = ["#E181A0","#A1C9AD","#9AB7CE","#F2DF67","#E99F73"];
        let velocities = [.1, -.1];
        let bubbles = [];
        let perc;

        function Bubble(x, y, dx, dy, radius, color, perc) {
            this.x = x;
            this.y = y;
            this.dx = dx;
            this.dy = dy;
            this.radius = radius;
            this.color = color;

            this.draw = function() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
                ctx.fillStyle = this.color;
                ctx.fill();
            }

            this.update = function() {
                if (this.x > dimensions.width || this.x < 0) {
                    this.dx = -this.dx;
                }

                if (this.y > (ceiling * perc) || this.y < 0) {
                    this.dy = -this.dy;
                }

                this.x+=this.dx;
                this.y+=this.dy;

                this.draw();
            }

        }

        for(let i = 0; i < 100; i++) {
            let radius = Math.floor(Math.random() * (35-15) + 15);
            let color = colors[Math.floor(Math.random() * colors.length)];
            let y = (Math.random() * ceiling) * 2;
            let x = Math.random() * canvas.width;
            let dx = velocities[Math.floor(Math.random() * velocities.length)];
            let dy = velocities[Math.floor(Math.random() * velocities.length)];
            perc = 2;
            bubbles.push(new Bubble(x, y, dx, dy, radius, color, perc));
        }

        for(let i = 0; i < 400; i++) {
            let radius = Math.floor(Math.random() * (85-15) + 15);
            let color = colors[Math.floor(Math.random() * colors.length)];
            let y = (Math.random() * ceiling);
            let x = (Math.random() * canvas.width);
            let dx = velocities[Math.floor(Math.random() * velocities.length)];
            let dy = velocities[Math.floor(Math.random() * velocities.length)];
            perc = 1;
            bubbles.push(new Bubble(x, y, dx, dy, radius, color, perc));
        }

        const animate = () => {
            requestAnimationFrame(animate);
            ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height);

            for(let i = 0; i < bubbles.length; i++) {
                bubbles[i].update();
            }

        };

        animate();

    });

    return (
        <canvas ref={canvasRef}/>
    );
};

export default Canvas;

/*        ctx.beginPath();
        ctx.arc(center * .95, floor-42.5, 95, 0, Math.PI*2, false);
        ctx.fillStyle = '#9AB7CE';
        ctx.fill();
        ctx.beginPath();
        ctx.arc(center * 1.15, floor, 45, 0, Math.PI*2, false);
        ctx.fillStyle = '#E181A0';
        ctx.fill();
        ctx.beginPath();
        ctx.arc(center * .80, floor-125, 75, 0, Math.PI*2, false);
        ctx.fillStyle = '#A1C9AD';
        ctx.fill();
        ctx.beginPath();
        ctx.arc(center * 1.05, floor-130, 55, 0, Math.PI*2, false);
        ctx.fillStyle = '#E99F73';
        ctx.fill();
        ctx.beginPath();
        ctx.arc(center * 1.2, floor-85, 80, 0, Math.PI*2, false);
        ctx.fillStyle = '#F2DF67';
        ctx.fill();*/