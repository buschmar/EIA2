var A5;
(function (A5) {
    class Snowdata {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        update() {
            this.draw();
            this.move();
        }
        move() {
            if (this.y >= 600) {
                this.y = 0;
            }
            this.y += 0.75;
        }
        draw() {
            A5.crc2.beginPath();
            A5.crc2.arc(this.x, this.y, 5, 0, 5 * Math.PI);
            A5.crc2.strokeStyle = "lightgrey";
            A5.crc2.stroke();
            A5.crc2.fillStyle = "white";
            A5.crc2.fill();
        }
    }
    A5.Snowdata = Snowdata;
})(A5 || (A5 = {}));
//# sourceMappingURL=snow.js.map