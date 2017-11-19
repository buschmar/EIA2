    namespace A5 {
        
        export let crc2: CanvasRenderingContext2D;
        
        let i: number;
        
        let skier: Skierdata[] = [];
        let cloud: Clouddata[] = [];
        let snow: Snowdata[] = [];
        
         window.addEventListener("load", init);
  
        let image: ImageData;

        function init(): void {
                let canvas = <HTMLCanvasElement>document.getElementsByTagName("canvas")[0];
                crc2 = canvas.getContext("2d");
                
                crc2.fillStyle = "#ffffaa";
                crc2.fillRect(0, 0, 800, 600);
        
            //sky
            crc2.fillStyle = "#add0ff";
            crc2.fillRect(0, 0, 800, 600);
            
            //sun
            crc2.beginPath();
            crc2.arc(190, 70, 40, 0, 2 * Math.PI);
            crc2.fillStyle = "#ffff02";
            crc2.fill();
            
            //berg1
            crc2.beginPath();
            crc2.moveTo(-300, 600);
            crc2.lineTo(500, 600);
            crc2.lineTo(100, 50);
            crc2.closePath();
            crc2.strokeStyle = "#c2c2c2";
            crc2.stroke();
            crc2.fillStyle = "#c2c2c2";
            crc2.fill();
            
             //berg2
            crc2.beginPath();
            crc2.moveTo(0, 600);
            crc2.lineTo(600, 600);
            crc2.lineTo(300, 100);
            crc2.closePath();
            crc2.strokeStyle = "#c2c2c2";
            crc2.stroke();
            crc2.fillStyle = "#c2c2c2";
            crc2.fill();
             
            //berg3
            crc2.beginPath();
            crc2.moveTo(450, 600);
            crc2.lineTo(1050, 600);
            crc2.lineTo(750, 50);
            crc2.closePath();
            crc2.strokeStyle = "#c2c2c2";
            crc2.stroke();
            crc2.fillStyle = "#c2c2c2";
            crc2.fill();
            
            //piste
            crc2.fillStyle = "#efefef";
            crc2.fillRect(0, 250, 800, 350);
            
            //slalom
            crc2.beginPath();
            crc2.moveTo(550, 250);
            crc2.lineTo(250, 600);
            crc2.lineTo(500, 600);
            crc2.lineTo(580, 250);
            crc2.lineTo(500, 250);
            
            crc2.closePath();
            crc2.strokeStyle = "#ffffff";
            crc2.stroke();
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            
              //tree1
            crc2.beginPath();
            crc2.moveTo(730, 375);
            crc2.lineTo(770, 375);
            crc2.lineTo(750, 305);
            crc2.closePath();
            crc2.strokeStyle = "#477248";
            crc2.stroke();
            crc2.fillStyle = "#477248";
            crc2.fill();
            
            crc2.beginPath();
            crc2.moveTo(745, 375);
            crc2.lineTo(755, 375);
            crc2.lineTo(755, 395);
            crc2.lineTo(745, 395);
            crc2.closePath();
            crc2.strokeStyle = "#5b3d06";
            crc2.stroke();
            crc2.fillStyle = "#5b3d06";
            crc2.fill();
            
            //tree2
            crc2.beginPath();
            crc2.moveTo(680, 420);
            crc2.lineTo(720, 420);
            crc2.lineTo(700, 350);
            crc2.closePath();
            crc2.strokeStyle = "#477248";
            crc2.stroke();
            crc2.fillStyle = "#477248";
            crc2.fill();
            
            crc2.beginPath();
            crc2.moveTo(695, 420);
            crc2.lineTo(705, 420);
            crc2.lineTo(705, 440);
            crc2.lineTo(695, 440);
            crc2.closePath();
            crc2.strokeStyle = "#5b3d06";
            crc2.stroke();
            crc2.fillStyle = "#5b3d06";
            crc2.fill();
            
            //tree3
            crc2.beginPath();
            crc2.moveTo(710, 460);
            crc2.lineTo(730, 530);
            crc2.lineTo(690, 530);
            crc2.closePath();
            crc2.strokeStyle = "#477248";
            crc2.stroke();
            crc2.fillStyle = "#477248";
            crc2.fill();
            
            crc2.beginPath();
            crc2.moveTo(705, 530);
            crc2.lineTo(715, 530);
            crc2.lineTo(715, 550);
            crc2.lineTo(705, 550);
            crc2.closePath();
            crc2.strokeStyle = "#5b3d06";
            crc2.stroke();
            crc2.fillStyle = "#5b3d06";
            crc2.fill();
            
            //tree4
            crc2.beginPath();
            crc2.moveTo(650, 445);
            crc2.lineTo(670, 515);
            crc2.lineTo(630, 515);
            crc2.closePath();
            crc2.strokeStyle = "#477248";
            crc2.stroke();
            crc2.fillStyle = "#477248";
            crc2.fill();
            
            crc2.beginPath();
            crc2.moveTo(645, 515);
            crc2.lineTo(655, 515);
            crc2.lineTo(655, 535);
            crc2.lineTo(645, 535);
            crc2.closePath();
            crc2.strokeStyle = "#5b3d06";
            crc2.stroke();
            crc2.fillStyle = "#5b3d06";
            crc2.fill();
            
            //start
            crc2.beginPath();
            crc2.moveTo(540, 225);
            crc2.lineTo(580, 225);
            crc2.lineTo(580, 235);
            crc2.lineTo(540, 235);
            crc2.lineTo(540, 225);
            crc2.closePath();
            crc2.strokeStyle = "red";
            crc2.stroke();
            crc2.fillStyle = "red";
            crc2.fill();
            
            
            crc2.beginPath();
            crc2.moveTo(540, 225);
            crc2.lineTo(550, 225);
            crc2.lineTo(550, 250);
            crc2.lineTo(540, 250);
            crc2.lineTo(540, 225);
            crc2.closePath();
            crc2.strokeStyle = "red";
            crc2.stroke();
            crc2.fillStyle = "red";
            crc2.fill();
            
            crc2.beginPath();
            crc2.moveTo(580, 225);
            crc2.lineTo(590, 225);
            crc2.lineTo(590, 250);
            crc2.lineTo(580, 250);
            crc2.lineTo(580, 225);
            crc2.closePath();
            crc2.strokeStyle = "red";
            crc2.stroke();
            crc2.fillStyle = "red";
            crc2.fill();
                
            //lift
            crc2.beginPath();
            crc2.moveTo(210, 400);
            crc2.lineTo(210, 600);
            crc2.closePath();
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            
            crc2.beginPath();
            crc2.moveTo(510, 220);
            crc2.lineTo(510, 250);
            crc2.closePath();
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            
            crc2.beginPath();
            crc2.moveTo(510, 220);
            crc2.lineTo(210, 400);
            crc2.closePath();
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            
            //gondel
            crc2.beginPath();
            crc2.moveTo(390, 292);
            crc2.lineTo(390, 320);
            crc2.closePath();
            crc2.strokeStyle = "blue";
            crc2.stroke();
            
            crc2.beginPath();
            crc2.lineTo(370, 360);
            crc2.lineTo(410, 360);
            crc2.lineTo(410, 320);
            crc2.lineTo(370, 320);
            crc2.lineTo(370, 360);
            crc2.closePath();
            crc2.strokeStyle = "blue";
            crc2.stroke();
            crc2.fillStyle = "blue";
            crc2.fill();
            
            crc2.beginPath();
            crc2.moveTo(380, 350);
            crc2.lineTo(380, 330);
            crc2.lineTo(400, 330);
            crc2.lineTo(400, 350);
            
            
            crc2.closePath();
            crc2.strokeStyle = "#f6f7aa";
            crc2.stroke();
            
            crc2.fillStyle = "#f6f7aa";
            crc2.fill();
            
        //tree random
        for (let i: number = 0; i < 6; i++) {
                drawTree(Math.random() * 50 + i * 45, Math.random() * 130 + 300);
            }
        
        //Skifahrer
        for (let i:number=0; i<3;i++) {
           
            let skiX = 520+Math.random()*50;
            let skiY = 250+Math.random()*70;
            let skiDX = 520+Math.random()*50;
            let skiDY = 250+Math.random()*70;
            let skiColorb ="hsl(" + Math.random() * 360 + ", 100%, 50%)";
            let skiColors ="hsl(" + Math.random() * 360 + ", 100%, 50%)";
               
            skier[i] = new Skierdata(skiX, skiY, skiDX, skiDY, skiColorb, skiColors);
        }
     
        //Cloud
        for (let i:number=0; i<3;i++) {
           
            let cloudX = Math.random()*300;
            let cloudY = 20+Math.random()*100;
            let cloudDX = Math.random()*300;
            let cloudDY = 20+Math.random()*100;
            
            cloud[i] = new Clouddata(cloudX, cloudY, cloudDX, cloudDY);
        }
            
        //snow
        for (let i: number = 0; i < 500; i++) {
            let snowX = 0 + Math.random() * 800;
            let snowY = 0 + Math.random() * 600;

            snow[i] = new Snowdata(snowX, snowY);
        }
        
 
        image = crc2.getImageData(0, 0, 800, 600);

        animate();
    
        
    //drawtree
    function drawTree(x: number, y: number): void {
        var canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        var crc2: CanvasRenderingContext2D = canvas.getContext("2d");

        crc2.fillStyle = "#5b3d06";
        crc2.fillRect(x, y, 10, 20);
        crc2.beginPath();
        crc2.moveTo(x - 15, y + 1);
        crc2.lineTo(x + 5, y - 70);
        crc2.lineTo(x + 25, y + 1);
        crc2.closePath();
        crc2.fillStyle = "#477248";
        crc2.fill();
        }
   
    
    
    function animate(): void {
        crc2.putImageData(image, 0, 0);
        
       
    //Skifahrer    
        for (let i: number = 0; i < skier.length; i++) {
            skier[i].update();
            }
        
        //cloud
        for (i = 0; i < cloud.length; i++) {
            cloud[i].update();
         }
        
        //snow
        for (i = 0; i < snow.length; i++) {
            snow[i].update();
         }
    
    window.setTimeout(animate, 10);
        }
  }}