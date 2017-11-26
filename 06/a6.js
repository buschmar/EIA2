var A6;
(function (A6) {
    let objects = [];
    window.addEventListener("load", init);
    let image;
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        A6.crc2 = canvas.getContext("2d");
        A6.crc2.fillStyle = "#ffffaa";
        A6.crc2.fillRect(0, 0, 800, 600);
        //sky
        A6.crc2.fillStyle = "#add0ff";
        A6.crc2.fillRect(0, 0, 800, 600);
        //sun
        A6.crc2.beginPath();
        A6.crc2.arc(190, 70, 40, 0, 2 * Math.PI);
        A6.crc2.fillStyle = "#ffff02";
        A6.crc2.fill();
        //berg1
        A6.crc2.beginPath();
        A6.crc2.moveTo(-300, 600);
        A6.crc2.lineTo(500, 600);
        A6.crc2.lineTo(100, 50);
        A6.crc2.closePath();
        A6.crc2.strokeStyle = "#c2c2c2";
        A6.crc2.stroke();
        A6.crc2.fillStyle = "#c2c2c2";
        A6.crc2.fill();
        //berg2
        A6.crc2.beginPath();
        A6.crc2.moveTo(0, 600);
        A6.crc2.lineTo(600, 600);
        A6.crc2.lineTo(300, 100);
        A6.crc2.closePath();
        A6.crc2.strokeStyle = "#c2c2c2";
        A6.crc2.stroke();
        A6.crc2.fillStyle = "#c2c2c2";
        A6.crc2.fill();
        //berg3
        A6.crc2.beginPath();
        A6.crc2.moveTo(450, 600);
        A6.crc2.lineTo(1050, 600);
        A6.crc2.lineTo(750, 50);
        A6.crc2.closePath();
        A6.crc2.strokeStyle = "#c2c2c2";
        A6.crc2.stroke();
        A6.crc2.fillStyle = "#c2c2c2";
        A6.crc2.fill();
        //piste
        A6.crc2.fillStyle = "#efefef";
        A6.crc2.fillRect(0, 250, 800, 350);
        //slalom
        A6.crc2.beginPath();
        A6.crc2.moveTo(550, 250);
        A6.crc2.lineTo(250, 600);
        A6.crc2.lineTo(500, 600);
        A6.crc2.lineTo(580, 250);
        A6.crc2.lineTo(500, 250);
        A6.crc2.closePath();
        A6.crc2.strokeStyle = "#ffffff";
        A6.crc2.stroke();
        A6.crc2.fillStyle = "#ffffff";
        A6.crc2.fill();
        //tree1
        A6.crc2.beginPath();
        A6.crc2.moveTo(730, 375);
        A6.crc2.lineTo(770, 375);
        A6.crc2.lineTo(750, 305);
        A6.crc2.closePath();
        A6.crc2.strokeStyle = "#477248";
        A6.crc2.stroke();
        A6.crc2.fillStyle = "#477248";
        A6.crc2.fill();
        A6.crc2.beginPath();
        A6.crc2.moveTo(745, 375);
        A6.crc2.lineTo(755, 375);
        A6.crc2.lineTo(755, 395);
        A6.crc2.lineTo(745, 395);
        A6.crc2.closePath();
        A6.crc2.strokeStyle = "#5b3d06";
        A6.crc2.stroke();
        A6.crc2.fillStyle = "#5b3d06";
        A6.crc2.fill();
        //tree2
        A6.crc2.beginPath();
        A6.crc2.moveTo(680, 420);
        A6.crc2.lineTo(720, 420);
        A6.crc2.lineTo(700, 350);
        A6.crc2.closePath();
        A6.crc2.strokeStyle = "#477248";
        A6.crc2.stroke();
        A6.crc2.fillStyle = "#477248";
        A6.crc2.fill();
        A6.crc2.beginPath();
        A6.crc2.moveTo(695, 420);
        A6.crc2.lineTo(705, 420);
        A6.crc2.lineTo(705, 440);
        A6.crc2.lineTo(695, 440);
        A6.crc2.closePath();
        A6.crc2.strokeStyle = "#5b3d06";
        A6.crc2.stroke();
        A6.crc2.fillStyle = "#5b3d06";
        A6.crc2.fill();
        //tree3
        A6.crc2.beginPath();
        A6.crc2.moveTo(710, 460);
        A6.crc2.lineTo(730, 530);
        A6.crc2.lineTo(690, 530);
        A6.crc2.closePath();
        A6.crc2.strokeStyle = "#477248";
        A6.crc2.stroke();
        A6.crc2.fillStyle = "#477248";
        A6.crc2.fill();
        A6.crc2.beginPath();
        A6.crc2.moveTo(705, 530);
        A6.crc2.lineTo(715, 530);
        A6.crc2.lineTo(715, 550);
        A6.crc2.lineTo(705, 550);
        A6.crc2.closePath();
        A6.crc2.strokeStyle = "#5b3d06";
        A6.crc2.stroke();
        A6.crc2.fillStyle = "#5b3d06";
        A6.crc2.fill();
        //tree4
        A6.crc2.beginPath();
        A6.crc2.moveTo(650, 445);
        A6.crc2.lineTo(670, 515);
        A6.crc2.lineTo(630, 515);
        A6.crc2.closePath();
        A6.crc2.strokeStyle = "#477248";
        A6.crc2.stroke();
        A6.crc2.fillStyle = "#477248";
        A6.crc2.fill();
        A6.crc2.beginPath();
        A6.crc2.moveTo(645, 515);
        A6.crc2.lineTo(655, 515);
        A6.crc2.lineTo(655, 535);
        A6.crc2.lineTo(645, 535);
        A6.crc2.closePath();
        A6.crc2.strokeStyle = "#5b3d06";
        A6.crc2.stroke();
        A6.crc2.fillStyle = "#5b3d06";
        A6.crc2.fill();
        //start
        A6.crc2.beginPath();
        A6.crc2.moveTo(540, 225);
        A6.crc2.lineTo(580, 225);
        A6.crc2.lineTo(580, 235);
        A6.crc2.lineTo(540, 235);
        A6.crc2.lineTo(540, 225);
        A6.crc2.closePath();
        A6.crc2.strokeStyle = "red";
        A6.crc2.stroke();
        A6.crc2.fillStyle = "red";
        A6.crc2.fill();
        A6.crc2.beginPath();
        A6.crc2.moveTo(540, 225);
        A6.crc2.lineTo(550, 225);
        A6.crc2.lineTo(550, 250);
        A6.crc2.lineTo(540, 250);
        A6.crc2.lineTo(540, 225);
        A6.crc2.closePath();
        A6.crc2.strokeStyle = "red";
        A6.crc2.stroke();
        A6.crc2.fillStyle = "red";
        A6.crc2.fill();
        A6.crc2.beginPath();
        A6.crc2.moveTo(580, 225);
        A6.crc2.lineTo(590, 225);
        A6.crc2.lineTo(590, 250);
        A6.crc2.lineTo(580, 250);
        A6.crc2.lineTo(580, 225);
        A6.crc2.closePath();
        A6.crc2.strokeStyle = "red";
        A6.crc2.stroke();
        A6.crc2.fillStyle = "red";
        A6.crc2.fill();
        //lift
        A6.crc2.beginPath();
        A6.crc2.moveTo(210, 400);
        A6.crc2.lineTo(210, 600);
        A6.crc2.closePath();
        A6.crc2.strokeStyle = "#000000";
        A6.crc2.stroke();
        A6.crc2.beginPath();
        A6.crc2.moveTo(510, 220);
        A6.crc2.lineTo(510, 250);
        A6.crc2.closePath();
        A6.crc2.strokeStyle = "#000000";
        A6.crc2.stroke();
        A6.crc2.beginPath();
        A6.crc2.moveTo(510, 220);
        A6.crc2.lineTo(210, 400);
        A6.crc2.closePath();
        A6.crc2.strokeStyle = "#000000";
        A6.crc2.stroke();
        //gondel
        A6.crc2.beginPath();
        A6.crc2.moveTo(390, 292);
        A6.crc2.lineTo(390, 320);
        A6.crc2.closePath();
        A6.crc2.strokeStyle = "blue";
        A6.crc2.stroke();
        A6.crc2.beginPath();
        A6.crc2.lineTo(370, 360);
        A6.crc2.lineTo(410, 360);
        A6.crc2.lineTo(410, 320);
        A6.crc2.lineTo(370, 320);
        A6.crc2.lineTo(370, 360);
        A6.crc2.closePath();
        A6.crc2.strokeStyle = "blue";
        A6.crc2.stroke();
        A6.crc2.fillStyle = "blue";
        A6.crc2.fill();
        A6.crc2.beginPath();
        A6.crc2.moveTo(380, 350);
        A6.crc2.lineTo(380, 330);
        A6.crc2.lineTo(400, 330);
        A6.crc2.lineTo(400, 350);
        A6.crc2.closePath();
        A6.crc2.strokeStyle = "#f6f7aa";
        A6.crc2.stroke();
        A6.crc2.fillStyle = "#f6f7aa";
        A6.crc2.fill();
        //tree random
        for (let i = 0; i < 6; i++) {
            drawTree(Math.random() * 50 + i * 45, Math.random() * 130 + 300);
        }
        //Skifahrer
        for (let i = 0; i < 3; i++) {
            let skiX = 520 + Math.random() * 50;
            let skiY = 250 + Math.random() * 70;
            let skiDX = 520 + Math.random() * 50;
            let skiDY = 250 + Math.random() * 70;
            let skiColorb = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            let skiColors = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            let s = new A6.Skierdata(skiX, skiY, skiDX, skiDY, skiColorb, skiColors);
            objects.push(s);
        }
        //Cloud
        for (let i = 0; i < 3; i++) {
            let cloudX = Math.random() * 300;
            let cloudY = 20 + Math.random() * 100;
            let s = new A6.Clouddata(cloudX, cloudY);
            objects.push(s);
        }
        //snow
        for (let i = 0; i < 300; i++) {
            let snowX = 0 + Math.random() * 800;
            let snowY = 0 + Math.random() * 600;
            let s = new A6.Snowdata(snowX, snowY);
            objects.push(s);
        }
        image = A6.crc2.getImageData(0, 0, 800, 600);
        animate();
    }
    //drawtree
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
    //--ANIMATE--
    function animate() {
        A6.crc2.clearRect(0, 0, 800, 600);
        A6.crc2.putImageData(image, 0, 0);
        for (let i = 0; i < objects.length; i++) {
            let s = objects[i];
            s.update();
        }
        window.setTimeout(animate, 10);
    }
})(A6 || (A6 = {}));
//# sourceMappingURL=a6.js.map