 namespace AA {
        
       export let crc2: CanvasRenderingContext2D;
     
       let i: number;
       let objects: _MovingObjects[] = [];
       
       let pacman: PacmanData[] = [];
       let ghosta: GhostData1[] = [];
       let ghostb: GhostData2[] = [];
       let ghostc: GhostData3[] = [];
       let ghostd: GhostData4[] = [];
       
     
         window.addEventListener("load", init);
  
        let image: ImageData;

        function init(): void {
            
            let pac: HTMLDivElement = document.createElement("div"); 
                    pac.style.position = "absolute";
                    pac.id = "ghost1";
                    pac.style.width = "55px";
                    pac.style.height = "55px";  
                    pac.style.left ="20px";
                    pac.style.top =  "290px";
                  
                    pac.onclick = function(){alert('You already know who it is...\n Pac to the Man!');};
             
                    document.body.appendChild(pac);
            
            let ghost1: HTMLDivElement = document.createElement("div"); 
                    ghost1.style.position = "absolute";
                    ghost1.id = "ghost1";
                    ghost1.style.width = "115px";
                    ghost1.style.height = "35px";  
                    ghost1.style.left ="140px";
                    ghost1.style.top =  "130px";
                   
                    ghost1.onclick = function(){alert('HEY! My name is Blinky.');};
             
                    document.body.appendChild(ghost1);
            
            let ghost2: HTMLDivElement = document.createElement("div"); 
                    ghost2.style.position = "absolute";
                    ghost2.id = "ghost1";
                    ghost2.style.width = "115px";
                    ghost2.style.height = "35px";  
                    ghost2.style.left ="560px";
                    ghost2.style.top =  "130px";
                   
                    ghost2.onclick = function(){alert('HELLO! I`m Clyde.');};
             
                    document.body.appendChild(ghost2);
            
            let ghost3: HTMLDivElement = document.createElement("div"); 
                    ghost3.style.position = "absolute";
                    ghost3.id = "ghost1";
                    ghost3.style.width = "115px";
                    ghost3.style.height = "35px";  
                    ghost3.style.left ="560px";
                    ghost3.style.top =  "450px";
                   
                    ghost3.onclick = function(){alert('HUHU! Pinky is my name.');};
             
                    document.body.appendChild(ghost3);

            let ghost4: HTMLDivElement = document.createElement("div"); 
                    ghost4.style.position = "absolute";
                    ghost4.id = "ghost1";
                    ghost4.style.width = "115px";
                    ghost4.style.height = "35px";  
                    ghost4.style.left ="140px";
                    ghost4.style.top =  "450px";
                   
                    ghost4.onclick = function(){alert('WHAT`S UP! It´s Inky.');};
             
                    document.body.appendChild(ghost4);
            
                
                
            
                let canvas = <HTMLCanvasElement>document.getElementsByTagName("canvas")[0];
                crc2 = canvas.getContext("2d");
                
                crc2.fillStyle = "#000000";
                crc2.fillRect(0, 0, 800, 600);
                
            
            //start drawing background
            crc2.beginPath();
           
            //obenlinks
            crc2.moveTo(30, 270);
            crc2.lineTo(30, 30);
            crc2.lineTo(350, 30);
            crc2.lineTo(350, 60);
            //obenrechts
            crc2.moveTo(450, 60);
            crc2.lineTo(450, 30);
            crc2.lineTo(770, 30);
            crc2.lineTo(770, 250);
            //untenrechts
            crc2.moveTo(770, 350);
            crc2.lineTo(770, 570);
            crc2.lineTo(450, 570);
            crc2.lineTo(450, 540);
            //untenlinks
            crc2.moveTo(350, 540);
            crc2.lineTo(350, 570);
            crc2.lineTo(30, 570);
            crc2.lineTo(30, 350);
            //mitte
            crc2.moveTo(230, 250);
            crc2.lineTo(570, 250);
            crc2.lineTo(570, 350);
            crc2.lineTo(230, 350);
            crc2.closePath();
            //trenner.obenlinks
            crc2.moveTo(130, 270);
            crc2.lineTo(130, 120);
            crc2.lineTo(250, 120);
            crc2.lineTo(250, 160);
            crc2.moveTo(130, 160);
            crc2.lineTo(355, 160);
            //trenner.obenrechts
            crc2.moveTo(670, 270);
            crc2.lineTo(670, 120);
            crc2.lineTo(550, 120);
            crc2.lineTo(550, 160);
            crc2.moveTo(670, 160);
            crc2.lineTo(445, 160);
            //trenner.untenrechts
            crc2.moveTo(670, 350);
            crc2.lineTo(670, 480);
            crc2.lineTo(550, 480);
            crc2.lineTo(550, 440);
            crc2.moveTo(670, 440);
            crc2.lineTo(445, 440);
             //trenner.untenrechts
            crc2.moveTo(130, 350);
            crc2.lineTo(130, 480);
            crc2.lineTo(250, 480);
            crc2.lineTo(250, 440);
            crc2.moveTo(130, 440);
            crc2.lineTo(355, 440);
            
            crc2.closePath();
            crc2.strokeStyle = "blue";
            crc2.lineWidth=7;
            crc2.stroke();
           
            
            //dots
            crc2.beginPath();
            crc2.arc(85, 80, 6, 0, 2 * Math.PI, true);
            crc2.closePath();
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            crc2.beginPath();
            crc2.arc(155, 80, 6, 0, 2 * Math.PI, true);
            crc2.closePath();
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            crc2.beginPath();
            crc2.arc(225, 80, 6, 0, 2 * Math.PI, true);
            crc2.closePath();
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            crc2.beginPath();
            crc2.arc(295, 80, 6, 0, 2 * Math.PI, true);
            crc2.closePath();
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            crc2.arc(295, 120, 6, 0, 2 * Math.PI, true);
            crc2.closePath();
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            crc2.arc(350, 120, 6, 0, 2 * Math.PI, true);
            crc2.closePath();
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            crc2.arc(400, 120, 6, 0, 2 * Math.PI, true);
            crc2.closePath();
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            crc2.arc(400, 160, 6, 0, 2 * Math.PI, true);
            crc2.closePath();
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            crc2.arc(400, 200, 6, 0, 2 * Math.PI, true);
            crc2.closePath();
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.fillStyle = "#ffffff";
            crc2.fill();
             
            crc2.arc(455, 120, 6, 0, 2 * Math.PI, true);
            crc2.closePath();
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            crc2.arc(505, 120, 6, 0, 2 * Math.PI, true);
            crc2.closePath();
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            crc2.arc(505, 80, 6, 0, 2 * Math.PI, true);
            crc2.closePath();
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            crc2.arc(575, 80, 6, 0, 2 * Math.PI, true);
            crc2.closePath();
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            crc2.arc(645, 80, 6, 0, 2 * Math.PI, true);
            crc2.closePath();
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            crc2.arc(715, 80, 6, 0, 2 * Math.PI, true);
            crc2.closePath();
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            crc2.beginPath();
            crc2.arc(85, 140, 6, 0, 2 * Math.PI, true);
            crc2.closePath();
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            crc2.arc(85, 200, 6, 0, 2 * Math.PI, true);
            crc2.closePath();
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            crc2.arc(85, 260, 6, 0, 2 * Math.PI, true);
            crc2.closePath();
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            crc2.arc(85, 320, 6, 0, 2 * Math.PI, true);
            crc2.closePath();
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            crc2.arc(85, 380, 6, 0, 2 * Math.PI, true);
            crc2.closePath();
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            crc2.arc(85, 450, 6, 0, 2 * Math.PI, true);
            crc2.closePath();
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            crc2.arc(85, 520, 6, 0, 2 * Math.PI, true);
            crc2.closePath();
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            crc2.beginPath();
            crc2.arc(150, 520, 6, 0, 2 * Math.PI, true);
            crc2.closePath();
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            crc2.arc(220, 520, 6, 0, 2 * Math.PI, true);
            crc2.closePath();
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            crc2.arc(290, 520, 6, 0, 2 * Math.PI, true);
            crc2.closePath();
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            crc2.arc(290, 480, 6, 0, 2 * Math.PI, true);
            crc2.closePath();
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            crc2.arc(350, 480, 6, 0, 2 * Math.PI, true);
            crc2.closePath();
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            crc2.arc(400, 480, 6, 0, 2 * Math.PI, true);
            crc2.closePath();
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            crc2.arc(460, 480, 6, 0, 2 * Math.PI, true);
            crc2.closePath();
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            crc2.arc(510, 480, 6, 0, 2 * Math.PI, true);
            crc2.closePath();
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            crc2.arc(510, 520, 6, 0, 2 * Math.PI, true);
            crc2.closePath();
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            crc2.arc(580, 520, 6, 0, 2 * Math.PI, true);
            crc2.closePath();
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            crc2.arc(650, 520, 6, 0, 2 * Math.PI, true);
            crc2.closePath();
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            crc2.arc(720, 520, 6, 0, 2 * Math.PI, true);
            crc2.closePath();
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            crc2.beginPath();
            crc2.arc(720, 460, 6, 0, 2 * Math.PI, true);
            crc2.closePath();
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            crc2.arc(720, 400, 6, 0, 2 * Math.PI, true);
            crc2.closePath();
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            crc2.arc(720, 340, 6, 0, 2 * Math.PI, true);
            crc2.closePath();
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            crc2.arc(720, 280, 6, 0, 2 * Math.PI, true);
            crc2.closePath();
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            crc2.arc(720, 210, 6, 0, 2 * Math.PI, true);
            crc2.closePath();
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            crc2.arc(720, 140, 6, 0, 2 * Math.PI, true);
            crc2.closePath();
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            crc2.beginPath();
            crc2.arc(460, 200, 6, 0, 2 * Math.PI, true);
            crc2.closePath();
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            crc2.arc(540, 200, 6, 0, 2 * Math.PI, true);
            crc2.closePath();
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            crc2.beginPath();
            crc2.arc(610, 200, 6, 0, 2 * Math.PI, true);
            crc2.closePath();
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            crc2.arc(610, 260, 6, 0, 2 * Math.PI, true);
            crc2.closePath();
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            crc2.arc(610, 320, 6, 0, 2 * Math.PI, true);
            crc2.closePath();
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            crc2.beginPath();
            crc2.arc(610, 390, 6, 0, 2 * Math.PI, true);
            crc2.closePath();
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            crc2.arc(610, 390, 6, 0, 2 * Math.PI, true);
            crc2.closePath();
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            crc2.arc(540, 390, 6, 0, 2 * Math.PI, true);
            crc2.closePath();
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            crc2.arc(470, 390, 6, 0, 2 * Math.PI, true);
            crc2.closePath();
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            crc2.arc(400, 390, 6, 0, 2 * Math.PI, true);
            crc2.closePath();
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            crc2.arc(400, 430, 6, 0, 2 * Math.PI, true);
            crc2.closePath();
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            crc2.arc(330, 390, 6, 0, 2 * Math.PI, true);
            crc2.closePath();
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            crc2.arc(260, 390, 6, 0, 2 * Math.PI, true);
            crc2.closePath();
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            crc2.arc(180, 390, 6, 0, 2 * Math.PI, true);
            crc2.closePath();
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            crc2.beginPath();
            crc2.arc(180, 330, 6, 0, 2 * Math.PI, true);
            crc2.closePath();
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            crc2.arc(180, 270, 6, 0, 2 * Math.PI, true);
            crc2.closePath();
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            crc2.arc(180, 200, 6, 0, 2 * Math.PI, true);
            crc2.closePath();
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            crc2.beginPath();
            crc2.arc(250, 200, 6, 0, 2 * Math.PI, true);
            crc2.closePath();
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            crc2.arc(320, 200, 6, 0, 2 * Math.PI, true);
            crc2.closePath();
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            
            
            alert("Do you want to know the character-names? \n Just click on them and you'll find out!");
            
            var song = new Audio("pacman.wav");
            song.loop = true;
            song.play();
            document.body.appendChild(song);​
            
            
            
            //Pacman
        for (let i:number=0; i<1;i++) {
           
            let pacmanX = 30;
            let pacmanY = 310;
            let pacmanDX = 30;
            let pacmanDY = 310;
            
            pacman[i] = new PacmanData(pacmanX, pacmanY, pacmanDX, pacmanDY);
        }
            
            //Ghost
        for (let i:number=0; i<1;i++) {
           
            let ghostX = 148;
            let ghostY = 138;
            let ghostDX = 148;
            let ghostDY = 138;
            
            ghosta[i] = new GhostData1(ghostX, ghostY, ghostDX, ghostDY);
        }
            
            for (let i:number=0; i<1;i++) {
           
            let ghostX = 588;
            let ghostY = 138;
            let ghostDX = 650;
            let ghostDY = 138;
            
            ghostb[i] = new GhostData2(ghostX, ghostY, ghostDX, ghostDY);
        }
            
            for (let i:number=0; i<1;i++) {
           
            let ghostX = 200;
            let ghostY = 460;
            let ghostDX = 230;
            let ghostDY = 460;
            
            ghostc[i] = new GhostData3(ghostX, ghostY, ghostDX, ghostDY);
        }
            
            for (let i:number=0; i<1;i++) {
           
            let ghostX = 598;
            let ghostY = 460;
            let ghostDX = 568;
            let ghostDY = 460;
            
            ghostd[i] = new GhostData4(ghostX, ghostY, ghostDX, ghostDY);
        }
            
            
            
            
            image = crc2.getImageData(0, 0, 800, 600);
            
            
            animate();

            function animate(): void {
        crc2.putImageData(image, 0, 0);
                
                for (i = 0; i < pacman.length; i++) {
                        pacman[i].update();
         }
                
                for (i = 0; i < ghosta.length; i++) {
                        ghosta[i].update();
         }
                for (i = 0; i < ghostb.length; i++) {
                        ghostb[i].update();
         }
                
                for (i = 0; i < ghosta.length; i++) {
                        ghostc[i].update();
         }
                for (i = 0; i < ghostb.length; i++) {
                        ghostd[i].update();
         }
                
                
                window.setTimeout(animate, 20);
        }
            
            }
     
     
     }