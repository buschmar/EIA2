namespace A5 {
    
    export class Snowdata {
        x: number;
        y: number;
        
    constructor(_x: number, _y: number) {

            this.x = _x;
            this.y = _y;

        }
        
        update(): void {
            this.draw();
            this.move();
        }

        
        
       
        move(): void{
            if(this.y >= 600){
                this.y = 0;
                }
            this.y += 0.75;
            }
        
        draw(): void{
            crc2.beginPath();
            crc2.arc(this.x, this.y, 5, 0, 5 * Math.PI);
            crc2.strokeStyle = "lightgrey";
            crc2.stroke();
            crc2.fillStyle = "white";
            crc2.fill(); 
        }
        
            
    }   
            
            
}