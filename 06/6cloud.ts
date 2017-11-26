namespace A6 {
    
    
    export class Clouddata extends MovingObjects {
        x: number;
        y: number;
    
        constructor (_x: number, _y: number) {
            super(_x,_y);
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
        
        move(): void {

            if (this.x > 800) {
                this.x = 0;
            }
            this.x += 0.5;

        }
        
}
}