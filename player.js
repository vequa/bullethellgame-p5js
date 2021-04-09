class Player {
    constructor(x, y, size, speed) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speed = speed;
    }

    display() {
        fill(20, 120, 200)
        stroke(20, 120, 200)

        ellipse(this.x, this.y, this.size)
    }

    move() {
        if(keys['a'] || keys['ArrowLeft']) {
            this.x -= this.speed;
        }
        if(keys['d'] || keys['ArrowRight']) {
            this.x += this.speed;
        }

        if(this.x - this.size/2 < 0) this.x = this.size/2;
        if(this.x + this.size/2 > width) this.x = width - this.size/2;
    }
}