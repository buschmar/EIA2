var A6;
(function (A6) {
    class Clouddata extends A6.MovingObjects {
        constructor(_x, _y) {
            super(_x, _y);
        }
        draw() {
            A6.crc2.beginPath();
            A6.crc2.arc(this.x - 5, this.y + 30, 20, 0, 2 * Math.PI);
            A6.crc2.fillStyle = "#ffffff";
            A6.crc2.fill();
            A6.crc2.beginPath();
            A6.crc2.arc(this.x + 10, this.y + 50, 20, 0, 2 * Math.PI);
            A6.crc2.fillStyle = "#ffffff";
            A6.crc2.fill();
            A6.crc2.beginPath();
            A6.crc2.arc(this.x + 35, this.y + 50, 20, 0, 2 * Math.PI);
            A6.crc2.fillStyle = "#ffffff";
            A6.crc2.fill();
            A6.crc2.beginPath();
            A6.crc2.arc(this.x + 50, this.y + 15, 15, 0, 2 * Math.PI);
            A6.crc2.fillStyle = "#ffffff";
            A6.crc2.fill();
            A6.crc2.beginPath();
            A6.crc2.arc(this.x + 25, this.y + 15, 25, 0, 2 * Math.PI);
            A6.crc2.fillStyle = "#ffffff";
            A6.crc2.fill();
            A6.crc2.beginPath();
            A6.crc2.arc(this.x + 60, this.y + 40, 25, 0, 2 * Math.PI);
            A6.crc2.fillStyle = "#ffffff";
            A6.crc2.fill();
        }
        move() {
            if (this.x > 800) {
                this.x = 0;
            }
            this.x += 0.5;
        }
    }
    A6.Clouddata = Clouddata;
})(A6 || (A6 = {}));
//# sourceMappingURL=6cloud.js.map