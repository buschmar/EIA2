var A5;
(function (A5) {
    class Clouddata {
        constructor(_x, _y, _dx, _dy) {
            this.x = _x;
            this.y = _y;
            this.dx = _dx;
            this.dy = _dy;
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.x += +0.5;
            this.y += 0;
            if (this.x > 800) {
                this.y = this.dy;
                this.x = this.dx;
            }
        }
        draw() {
            A5.crc2.beginPath();
            A5.crc2.arc(this.x - 5, this.y + 30, 20, 0, 2 * Math.PI);
            A5.crc2.fillStyle = "#ffffff";
            A5.crc2.fill();
            A5.crc2.beginPath();
            A5.crc2.arc(this.x + 10, this.y + 50, 20, 0, 2 * Math.PI);
            A5.crc2.fillStyle = "#ffffff";
            A5.crc2.fill();
            A5.crc2.beginPath();
            A5.crc2.arc(this.x + 35, this.y + 50, 20, 0, 2 * Math.PI);
            A5.crc2.fillStyle = "#ffffff";
            A5.crc2.fill();
            A5.crc2.beginPath();
            A5.crc2.arc(this.x + 50, this.y + 15, 15, 0, 2 * Math.PI);
            A5.crc2.fillStyle = "#ffffff";
            A5.crc2.fill();
            A5.crc2.beginPath();
            A5.crc2.arc(this.x + 25, this.y + 15, 25, 0, 2 * Math.PI);
            A5.crc2.fillStyle = "#ffffff";
            A5.crc2.fill();
            A5.crc2.beginPath();
            A5.crc2.arc(this.x + 60, this.y + 40, 25, 0, 2 * Math.PI);
            A5.crc2.fillStyle = "#ffffff";
            A5.crc2.fill();
        }
    }
    A5.Clouddata = Clouddata;
})(A5 || (A5 = {}));
//# sourceMappingURL=cloud.js.map