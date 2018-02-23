namespace AA {
    
    
    export class PacmanData extends _MovingObjects {
       
    
        constructor (_x: number, _y: number, _dx:number, _dy:number) {
            super(_x, _y, _dx, _dy);
        }
        
       
        
        
        
     move(): void {
            this.x += 0.5;
            this.y += 0;
         
               
                if (this.x > 45) {
                this.y = this.dy;
                this.x = this.dx;
                }
               
                
                    
     }
         
     
        
      draw(): void{
          
                    //PacMan
                crc2.beginPath();
     
                
                //kopf
                crc2.arc(this.x, this.y, 25, 0.2 * Math.PI, 1.8 * Math.PI);
                //mund
                crc2.lineTo(this.x, this.y);
                crc2.closePath();
                 
                //farbe kopf
                crc2.fillStyle = "yellow";
                crc2.fill();
            
                //kopf border
                crc2.strokeStyle = "#000";
                crc2.lineWidth=1;
                crc2.stroke();
            
                //auge
                crc2.beginPath();
                crc2.arc(this.x, this.y-12, 3, 0, 2 * Math.PI);
                crc2.fillStyle = "#000";
                crc2.fill();
    
          }
        
       
        
}
}