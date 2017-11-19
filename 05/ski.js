var A5;
(function (A5) {
    class Skierdata {
        constructor(_x, _y, _dx, _dy, _colorb, _colors) {
            this.x = _x;
            this.y = _y;
            this.dx = _dx;
            this.dy = _dy;
            this.colorb = _colorb;
            this.colors = _colors;
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.x += -2; //Geschwindigkeit
            this.y += 4;
            if (this.y > 600) {
                this.y = this.dy;
                this.x = this.dx;
            }
        }
        draw() {
            A5.crc2.fillStyle = this.colorb;
            A5.crc2.fillRect(this.x, this.y, 3, -30);
            A5.crc2.beginPath();
            A5.crc2.arc(this.x + 1.5, this.y - 30, 6, 0, 2 * Math.PI);
            A5.crc2.fill();
            A5.crc2.beginPath();
            A5.crc2.moveTo(this.x - 10, this.y + 15);
            A5.crc2.lineTo(this.x + 15, this.y - 10);
            A5.crc2.closePath();
            A5.crc2.strokeStyle = this.colors;
            A5.crc2.stroke();
            A5.crc2.beginPath();
            A5.crc2.moveTo(this.x - 20, this.y + 10);
            A5.crc2.lineTo(this.x + 15, this.y - 10);
            A5.crc2.closePath();
            A5.crc2.strokeStyle = this.colors;
            A5.crc2.lineWidth = 2;
            A5.crc2.stroke();
        }
    }
    A5.Skierdata = Skierdata;
})(A5 || (A5 = {}));
//# sourceMappingURL=ski.js.map