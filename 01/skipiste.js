window.addEventListener("load", init);
function init() {
    let canvas = document.getElementsByTagName("canvas")[0];
    console.log(canvas);
    let crc2 = canvas.getContext("2d");
    console.log(crc2);
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
    crc2.moveTo(520, 250);
    crc2.lineTo(300, 600);
    crc2.lineTo(550, 600);
    crc2.lineTo(580, 250);
    crc2.lineTo(520, 250);
    crc2.closePath();
    crc2.strokeStyle = "#ffffff";
    crc2.stroke();
    crc2.fillStyle = "#ffffff";
    crc2.fill();
    //baum1
    crc2.beginPath();
    crc2.moveTo(-20, 550);
    crc2.lineTo(100, 550);
    crc2.lineTo(40, 350);
    crc2.closePath();
    crc2.strokeStyle = "#477248";
    crc2.stroke();
    crc2.fillStyle = "#477248";
    crc2.fill();
    //baum2
    crc2.beginPath();
    crc2.moveTo(70, 450);
    crc2.lineTo(120, 450);
    crc2.lineTo(95, 325);
    crc2.closePath();
    crc2.strokeStyle = "#477248";
    crc2.stroke();
    crc2.fillStyle = "#477248";
    crc2.fill();
    //baum3
    crc2.beginPath();
    crc2.moveTo(140, 500);
    crc2.lineTo(200, 500);
    crc2.lineTo(170, 360);
    crc2.closePath();
    crc2.strokeStyle = "#477248";
    crc2.stroke();
    crc2.fillStyle = "#477248";
    crc2.fill();
    //baum4
    crc2.beginPath();
    crc2.moveTo(670, 550);
    crc2.lineTo(750, 550);
    crc2.lineTo(710, 360);
    crc2.closePath();
    crc2.strokeStyle = "#477248";
    crc2.stroke();
    crc2.fillStyle = "#477248";
    crc2.fill();
    //baum5
    crc2.beginPath();
    crc2.moveTo(720, 335);
    crc2.lineTo(740, 335);
    crc2.lineTo(730, 275);
    crc2.closePath();
    crc2.strokeStyle = "#477248";
    crc2.stroke();
    crc2.fillStyle = "#477248";
    crc2.fill();
    //baum7
    crc2.beginPath();
    crc2.moveTo(730, 375);
    crc2.lineTo(770, 375);
    crc2.lineTo(750, 305);
    crc2.closePath();
    crc2.strokeStyle = "#477248";
    crc2.stroke();
    crc2.fillStyle = "#477248";
    crc2.fill();
    //baum8
    crc2.beginPath();
    crc2.moveTo(140, 325);
    crc2.lineTo(170, 325);
    crc2.lineTo(155, 275);
    crc2.closePath();
    crc2.strokeStyle = "#477248";
    crc2.stroke();
    crc2.fillStyle = "#477248";
    crc2.fill();
    //goal
    crc2.beginPath();
    crc2.moveTo(300, 500);
    crc2.lineTo(550, 500);
    crc2.lineTo(550, 455);
    crc2.lineTo(300, 455);
    crc2.closePath();
    crc2.strokeStyle = "red";
    crc2.stroke();
    crc2.fillStyle = "red";
    crc2.fill();
    crc2.beginPath();
    crc2.moveTo(300, 500);
    crc2.lineTo(300, 600);
    crc2.closePath();
    crc2.strokeStyle = "red";
    crc2.stroke();
    crc2.beginPath();
    crc2.moveTo(550, 500);
    crc2.lineTo(550, 600);
    crc2.closePath();
    crc2.strokeStyle = "red";
    crc2.stroke();
    //start
    crc2.beginPath();
    crc2.moveTo(520, 225);
    crc2.lineTo(580, 225);
    crc2.lineTo(580, 235);
    crc2.lineTo(520, 235);
    crc2.lineTo(520, 225);
    crc2.closePath();
    crc2.strokeStyle = "red";
    crc2.stroke();
    crc2.fillStyle = "red";
    crc2.fill();
    crc2.beginPath();
    crc2.moveTo(520, 225);
    crc2.lineTo(530, 225);
    crc2.lineTo(530, 250);
    crc2.lineTo(520, 250);
    crc2.lineTo(520, 225);
    crc2.closePath();
    crc2.strokeStyle = "red";
    crc2.stroke();
    crc2.fillStyle = "red";
    crc2.fill();
    crc2.beginPath();
    crc2.moveTo(570, 225);
    crc2.lineTo(580, 225);
    crc2.lineTo(580, 250);
    crc2.lineTo(570, 250);
    crc2.lineTo(570, 225);
    crc2.closePath();
    crc2.strokeStyle = "red";
    crc2.stroke();
    crc2.fillStyle = "red";
    crc2.fill();
}
