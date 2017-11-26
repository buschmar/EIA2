namespace A6 {
    
    export class Skierdata extends MovingObjects {
        x: number;
        y: number;
        dx: number;
        dy: number;
        colorb: string;
        colors: string;

        constructor(_x: number, _y: number, _dx: number, _dy: number, _colorb: string, _colors: string) {
            super(_x,_y);
            this.x = _x;
            this.y = _y;
            this.dx = _dx;
            this.dy = _dy;
            this.colorb = _colorb;
            this.colors = _colors;
        }
        
        
        move(): void {
            this.x += -2; //Geschwindigkeit
            this.y += 4;

            if (this.y > 600) {
                this.y = this.dy;
                this.x = this.dx;
            }
        }


        draw(): void {
            crc2.fillStyle = this.colorb;
            crc2.fillRect(this.x, this.y, 3, -30);
            crc2.beginPath();
            crc2.arc(this.x + 1.5, this.y - 30, 6, 0, 2 * Math.PI);
            crc2.fill();
            
            crc2.beginPath();
            crc2.moveTo(this.x - 10, this.y + 15);
            crc2.lineTo(this.x + 15, this.y - 10);
            crc2.closePath();
            crc2.strokeStyle = this.colors;
            crc2.stroke();
        
            crc2.beginPath();
            crc2.moveTo(this.x - 20, this.y + 10);
            crc2.lineTo(this.x + 15, this.y - 10);
            crc2.closePath();
            crc2.strokeStyle = this.colors;
            crc2.lineWidth = 2;
            crc2.stroke();
        }


    }
}
