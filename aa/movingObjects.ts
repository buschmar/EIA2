namespace AA {
    
    export class _MovingObjects {
        x: number;
        y: number;
        dy : number;
        dx : number;
        
        constructor (_x: number, _y:number, _dx:number, _dy:number) {
            this.x= _x;
            this.y=_y;
            this.dx=_dx;
            this.dy=_dy;
            }
        
        update(): void {
            this.move();
            this.draw();
            }
        
        draw(): void {
            }
        
        move(): void {
            }
        
        
        }
    }