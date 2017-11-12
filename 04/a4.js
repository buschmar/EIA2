var A4;
(function (A4) {
    window.addEventListener("load", init);
    let crc2;
    let skier = [];
    let arrayX = [];
    let arrayY = [];
    let image;
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
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
        //cloud1
        crc2.beginPath();
        crc2.arc(490, 70, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(520, 70, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(550, 70, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(530, 90, 15, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(510, 90, 15, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(530, 60, 25, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        //cloud2
        crc2.beginPath();
        crc2.arc(645, 80, 15, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(670, 70, 15, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(630, 70, 15, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(660, 80, 15, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(650, 60, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
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
        //goal
        crc2.beginPath();
        crc2.moveTo(250, 500);
        crc2.lineTo(500, 500);
        crc2.lineTo(500, 455);
        crc2.lineTo(250, 455);
        crc2.closePath();
        crc2.strokeStyle = "red";
        crc2.stroke();
        crc2.fillStyle = "red";
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(250, 500);
        crc2.lineTo(250, 600);
        crc2.closePath();
        crc2.strokeStyle = "red";
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(500, 500);
        crc2.lineTo(500, 600);
        crc2.closePath();
        crc2.strokeStyle = "red";
        crc2.stroke();
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
        //Skifahrer
        for (let i = 0; i < 3; i++) {
            skier[i] = {
                x: 520 + Math.random() * 50,
                y: 250 + Math.random() * 70,
                dx: 520 + Math.random() * 50,
                dy: 250 + Math.random() * 70,
                colorb: "hsl(" + Math.random() * 360 + ", 100%, 50%)",
                colors: "hsl(" + Math.random() * 360 + ", 100%, 50%)"
            };
        }
        //tree random
        for (let i = 0; i < 6; i++) {
            drawTree(Math.random() * 50 + i * 45, Math.random() * 130 + 300);
        }
        //snow random
        for (let i = 0; i < 300; i++) {
            arrayX[i] = 0 + Math.random() * 800;
            arrayY[i] = 0 + Math.random() * 600;
        }
        image = crc2.getImageData(0, 0, 800, 600);
        animate();
        //draw
        function drawTree(x, y) {
            var canvas = document.getElementsByTagName("canvas")[0];
            var crc2 = canvas.getContext("2d");
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
        function skifahrer(skier) {
            crc2.fillStyle = skier.colorb;
            crc2.fillRect(skier.x, skier.y, 3, -30);
            crc2.beginPath();
            crc2.arc(skier.x + 1.5, skier.y - 30, 6, 0, 2 * Math.PI);
            crc2.fill();
            crc2.beginPath();
            crc2.moveTo(skier.x - 10, skier.y + 15);
            crc2.lineTo(skier.x + 15, skier.y - 10);
            crc2.closePath();
            crc2.strokeStyle = skier.colors;
            crc2.stroke();
            crc2.beginPath();
            crc2.moveTo(skier.x - 20, skier.y + 10);
            crc2.lineTo(skier.x + 15, skier.y - 10);
            crc2.closePath();
            crc2.strokeStyle = skier.colors;
            crc2.lineWidth = 2;
            crc2.stroke();
        }
        //ANIMATE
        function animate() {
            //ski.clearRect(0,0,800,600);
            crc2.putImageData(image, 0, 0);
            //Schneeflocken
            for (let i = 0; i < arrayX.length; i++) {
                if (arrayY[i] > 600) {
                    arrayY[i] = 0;
                }
                if (arrayX[i] > 800) {
                    arrayX[i] = 0;
                }
                arrayX[i] += Math.random();
                arrayY[i] += Math.random();
                crc2.beginPath();
                crc2.arc(arrayX[i], arrayY[i], 5, 0, 5 * Math.PI);
                crc2.strokeStyle = "lightgrey";
                crc2.stroke();
                crc2.fillStyle = "white";
                crc2.fill();
            }
            //Skifahrer    
            for (let i = 0; i < skier.length; i++) {
                skier[i].x += -1;
                skier[i].y += 2;
                skifahrer(skier[i]);
                if (skier[i].y > 600) {
                    skier[i].y = skier[i].dy;
                    skier[i].x = skier[i].dx;
                }
            }
            window.setTimeout(animate, 5);
        }
    }
})(A4 || (A4 = {}));
//# sourceMappingURL=a4.js.map