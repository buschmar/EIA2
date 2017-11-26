var A6;
(function (A6) {
    class Snowdata extends A6.MovingObjects {
        constructor(_x, _y) {
            super(_x, _y);
        }
        move() {
            if (this.y >= 600) {
                this.y = 0;
            }
            this.y += 0.75;
        }
        draw() {
            A6.crc2.beginPath();
            A6.crc2.arc(this.x, this.y, 5, 0, 5 * Math.PI);
            A6.crc2.strokeStyle = "lightgrey";
            A6.crc2.stroke();
            A6.crc2.fillStyle = "white";
            A6.crc2.fill();
        }
    }
    A6.Snowdata = Snowdata;
})(A6 || (A6 = {}));
//# sourceMappingURL=6snow.js.map