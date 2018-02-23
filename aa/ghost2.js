var AA;
(function (AA) {
    class GhostData2 extends AA._MovingObjects {
        constructor(_x, _y, _dx, _dy) {
            super(_x, _y, _dx, _dy);
        }
        move() {
            this.x += -0.5;
            this.y += 0;
            if (this.x < 568) {
                this.x = this.dx;
                this.y = this.dy;
            }
        }
        draw() {
            //Ghost2
            //body
            AA.crc2.beginPath();
            AA.crc2.arc(this.x, this.y, 10, 0, Math.PI * 2, true);
            AA.crc2.closePath();
            //feet
            AA.crc2.arc(this.x - 6, this.y + 8, 4, 0, Math.PI * 2, true);
            AA.crc2.closePath();
            AA.crc2.arc(this.x, this.y + 8, 4, 0, Math.PI * 2, true);
            AA.crc2.closePath();
            AA.crc2.arc(this.x + 6, this.y + 8, 4, 0, Math.PI * 2, true);
            AA.crc2.closePath();
            AA.crc2.fillStyle = "#ffa000";
            AA.crc2.fill();
            AA.crc2.beginPath();
            AA.crc2.rect(this.x - 10, this.y, 20, 7);
            AA.crc2.closePath();
            AA.crc2.fillStyle = "#ffa000";
            AA.crc2.fill();
            //eyes
            AA.crc2.beginPath();
            AA.crc2.arc(this.x - 4, this.y - 2, 3.5, 0, Math.PI * 2, true);
            AA.crc2.fillStyle = "white";
            AA.crc2.fill();
            AA.crc2.beginPath();
            AA.crc2.arc(this.x - 2, this.y - 2, 2, 0, Math.PI * 2, true);
            AA.crc2.fillStyle = "black";
            AA.crc2.fill();
            AA.crc2.beginPath();
            AA.crc2.arc(this.x + 4, this.y - 2, 3.5, 0, Math.PI * 2, true);
            AA.crc2.fillStyle = "white";
            AA.crc2.fill();
            AA.crc2.beginPath();
            AA.crc2.arc(this.x + 6, this.y - 2, 2, 0, Math.PI * 2, true);
            AA.crc2.fillStyle = "black";
            AA.crc2.fill();
        }
    }
    AA.GhostData2 = GhostData2;
})(AA || (AA = {}));
//# sourceMappingURL=ghost2.js.map