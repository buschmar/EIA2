var AA;
(function (AA) {
    class _MovingObjects {
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
        draw() {
        }
        move() {
        }
    }
    AA._MovingObjects = _MovingObjects;
})(AA || (AA = {}));
//# sourceMappingURL=movingObjects.js.map