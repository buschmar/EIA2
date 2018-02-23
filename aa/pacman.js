var AA;
(function (AA) {
    class PacmanData extends AA._MovingObjects {
        constructor(_x, _y, _dx, _dy) {
            super(_x, _y, _dx, _dy);
        }
        move() {
            this.x += 0.5;
            this.y += 0;
            if (this.x > 45) {
                this.y = this.dy;
                this.x = this.dx;
            }
        }
        draw() {
            //PacMan
            AA.crc2.beginPath();
            //kopf
            AA.crc2.arc(this.x, this.y, 25, 0.2 * Math.PI, 1.8 * Math.PI);
            //mund
            AA.crc2.lineTo(this.x, this.y);
            AA.crc2.closePath();
            //farbe kopf
            AA.crc2.fillStyle = "yellow";
            AA.crc2.fill();
            //kopf border
            AA.crc2.strokeStyle = "#000";
            AA.crc2.lineWidth = 1;
            AA.crc2.stroke();
            //auge
            AA.crc2.beginPath();
            AA.crc2.arc(this.x, this.y - 12, 3, 0, 2 * Math.PI);
            AA.crc2.fillStyle = "#000";
            AA.crc2.fill();
        }
    }
    AA.PacmanData = PacmanData;
})(AA || (AA = {}));
//# sourceMappingURL=pacman.js.map