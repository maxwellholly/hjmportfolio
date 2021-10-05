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
        let radius;
        let color;
        let x;
        let y;
        let dx;
        let dy;
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
            if(window.innerHeight <= 600) {
                radius = Math.floor(Math.random() * (15-5) + 5);
            } else {
                radius = Math.floor(Math.random() * (35-15) + 15);
            }
            color = colors[Math.floor(Math.random() * colors.length)];
            y = (Math.random() * ceiling) * 2;
            x = Math.random() * canvas.width;
            dx = velocities[Math.floor(Math.random() * velocities.length)];
            dy = velocities[Math.floor(Math.random() * velocities.length)];
            perc = 2;
            bubbles.push(new Bubble(x, y, dx, dy, radius, color, perc));
        }

        for(let i = 0; i < 400; i++) {
            if(window.innerHeight <= 600) {
                radius = Math.floor(Math.random() * (55-10) + 10);
            } else {
                radius = Math.floor(Math.random() * (85-15) + 15);
            }
            color = colors[Math.floor(Math.random() * colors.length)];
            y = (Math.random() * ceiling);
            x = (Math.random() * canvas.width);
            dx = velocities[Math.floor(Math.random() * velocities.length)];
            dy = velocities[Math.floor(Math.random() * velocities.length)];
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
        <div id={styles.canvasWrapper}>
            <canvas ref={canvasRef}/>
        </div>
    );
};

export default Canvas;

