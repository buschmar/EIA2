var A6;
(function (A6) {
    class Skierdata extends A6.MovingObjects {
        constructor(_x, _y, _dx, _dy, _colorb, _colors) {
            super(_x, _y);
            this.x = _x;
            this.y = _y;
            this.dx = _dx;
            this.dy = _dy;
            this.colorb = _colorb;
            this.colors = _colors;
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
            A6.crc2.fillStyle = this.colorb;
            A6.crc2.fillRect(this.x, this.y, 3, -30);
            A6.crc2.beginPath();
            A6.crc2.arc(this.x + 1.5, this.y - 30, 6, 0, 2 * Math.PI);
            A6.crc2.fill();
            A6.crc2.beginPath();
            A6.crc2.moveTo(this.x - 10, this.y + 15);
            A6.crc2.lineTo(this.x + 15, this.y - 10);
            A6.crc2.closePath();
            A6.crc2.strokeStyle = this.colors;
            A6.crc2.stroke();
            A6.crc2.beginPath();
            A6.crc2.moveTo(this.x - 20, this.y + 10);
            A6.crc2.lineTo(this.x + 15, this.y - 10);
            A6.crc2.closePath();
            A6.crc2.strokeStyle = this.colors;
            A6.crc2.lineWidth = 2;
            A6.crc2.stroke();
        }
    }
    A6.Skierdata = Skierdata;
})(A6 || (A6 = {}));
//# sourceMappingURL=6ski.js.map