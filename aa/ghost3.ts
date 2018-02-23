namespace AA {
    
    
    export class GhostData3 extends _MovingObjects {
    
        constructor (_x: number, _y: number, _dx:number, _dy:number) {
            super(_x, _y, _dx, _dy); 
        }
        
        
        
        
     move(): void {
            this.x += -0.5;
            this.y += 0;
         
                if (this.x < 148) {
                this.x = this.dx;
                this.y = this.dy;
                }     
     }
             
        
      draw(): void{
      
              
             //Ghost
            
            //body
            crc2.beginPath();
            crc2.arc(this.x, this.y, 10, 0, Math.PI * 2, true); 
            crc2.closePath();
            
            //feet
            crc2.arc(this.x-6, this.y+8, 4, 0, Math.PI * 2, true); 
            crc2.closePath();
            crc2.arc(this.x, this.y+8, 4, 0, Math.PI * 2, true); 
            crc2.closePath();
            crc2.arc(this.x+6, this.y+8, 4, 0, Math.PI * 2, true);
            crc2.closePath();
            crc2.fillStyle = "#00dee1";
            crc2.fill();
          
            crc2.beginPath();
            crc2.rect(this.x-10,this.y,20,7);
            crc2.closePath();
            crc2.fillStyle = "#00dee1";
            crc2.fill();
            
           
            //eyes
            crc2.beginPath();
            crc2.arc(this.x-4,this.y-2, 3.5, 0, Math.PI * 2, true); 
            crc2.fillStyle = "white";
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x-2, this.y-2, 2, 0, Math.PI * 2, true); 
            crc2.fillStyle = "black";
            crc2.fill();
            crc2.beginPath();
            
            crc2.arc(this.x+4,this.y-2, 3.5, 0, Math.PI * 2, true); 
            crc2.fillStyle = "white";
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x+6, this.y-2, 2, 0, Math.PI * 2, true); 
            crc2.fillStyle = "black";
            crc2.fill();   
          }
        
       
        
}
}