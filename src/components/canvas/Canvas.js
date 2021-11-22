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
        let waves = [];
        let gap = 15;
        let glY = 0;
        let bY = dimensions.height * .6;
        let alpha = 0.1;


        function Wave( y, color ){
            this.force = 0;
            this.wavePower = 80;
            this.count = y;
            this.y = y + glY;

            this.draw = function(){
                ctx.beginPath();
                ctx.moveTo(0, this.y);
                ctx.quadraticCurveTo(canvas.width, this.y + ( this.wavePower * this.force ), canvas.width, this.y);
                ctx.quadraticCurveTo(canvas.width * .75, this.y - ( this.wavePower * this.force ), canvas.width, this.y);
                ctx.lineTo(canvas.width, dimensions.height);
                ctx.lineTo(0, canvas.height);
                ctx.lineTo(0, this.y);
                ctx.closePath();
                ctx.fillStyle = color;
                ctx.fill();
            }

            this.update = function(){
                this.y = this.y + glY;
                this.force = Math.sin(this.count);
                this.count += 0.02;

                this.draw();
            }
        }

        for(let i = 0; i < 10; i++) {
            let color = "rgba("
                + Math.round(Math.random()*255)
                + ", "
                + Math.round(Math.random()*255)
                + ", "
                + Math.floor(Math.random() * (255 - 50) + 50)
                + ", "
                + alpha + ")";
            waves.push(new Wave(bY, color));
            bY += gap;
        }

/*        function Bubble(x, y, dx, dy, radius, color, perc) {
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

                if (this.y >= (dimensions.height) || this.y < (dimensions.height + (dimensions.height / 4))) {
                    this.dy = -this.dy;
                }

                this.x+=this.dx;
                this.y+=this.dy;

                this.draw();
            }

        }*/

/*        for(let i = 0; i < 100; i++) {
            if(window.innerHeight <= 600) {
                radius = Math.floor(Math.random() * (15-5) + 5);
            } else {
                radius = Math.floor(Math.random() * (35-15) + 15);
            }
            color = colors[Math.floor(Math.random() * colors.length)];
            x = Math.random() * canvas.width;
            y = Math.floor(Math.random() * (dimensions.height - (dimensions.height + (dimensions.height / 4))) + dimensions.height);
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
            y = Math.floor(Math.random() * (dimensions.height - (dimensions.height + (dimensions.height / 7))) + dimensions.height);
            x = (Math.random() * canvas.width);
            dx = velocities[Math.floor(Math.random() * velocities.length)];
            dy = velocities[Math.floor(Math.random() * velocities.length)];
            perc = 1;
            bubbles.push(new Bubble(x, y, dx, dy, radius, color, perc));
        }*/

        const animate = () => {
            requestAnimationFrame(animate);
            ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height);

            for(let i = 0; i < waves.length; i++) {
                waves[i].update();
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

