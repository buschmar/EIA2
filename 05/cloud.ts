namespace A5 {
    
    
    export class Clouddata {
        
        x: number;
        y: number;
        dy : number;
        dx : number;
    
        constructor (_x: number, _y: number, _dx:number, _dy:number) {
            this.x = _x;
            this.y = _y;
            this.dx = _dx;
            this.dy = _dy;
        }
        
        update(): void {
            this.move();
            this.draw();
        }
        
        
     move(): void {
            this.x += +0.5;
            this.y += 0;

            if (this.x > 800) {
                this.y = this.dy;
                this.x = this.dx;
            }
            }
        
        
      draw(): void{
          crc2.beginPath();
            crc2.arc(this.x-5, this.y+30, 20, 0, 2 * Math.PI);
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            
            crc2.beginPath();
            crc2.arc(this.x+10, this.y+50, 20, 0, 2 * Math.PI);
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            
            crc2.beginPath();
            crc2.arc(this.x+35, this.y+50, 20, 0, 2 * Math.PI);
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            
            crc2.beginPath();
            crc2.arc(this.x+50, this.y+15, 15, 0, 2 * Math.PI);
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            
            crc2.beginPath();
            crc2.arc(this.x+25, this.y+15, 25, 0, 2 * Math.PI);
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            
            crc2.beginPath();
            crc2.arc(this.x+60, this.y+40, 25, 0, 2 * Math.PI);
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            
          }
        
}
      }