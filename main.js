var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
canvas.width = canvas.scrollWidth;
canvas.height = canvas.scrollHeight;


// Create gradient
var grd = ctx.createLinearGradient(0,0,200,0);
grd.addColorStop(0,"black");
grd.addColorStop(1,"yellow");

ctx.fillStyle = grd;
ctx.fillRect(140,190,100,150);



// warna biasa
// ctx.fillStyle = "maroon";
// ctx.fillRect(140,190,100,150);


function tutup(){
ctx.translate(90, 90);
ctx.beginPath();
ctx.moveTo(50,100);
ctx.lineTo(50,80);
ctx.lineTo(90,80);
ctx.lineTo(90,60);
ctx.lineTo(110,60);
ctx.lineTo(110,80);
ctx.lineTo(150,80);
ctx.lineTo(150,100);
ctx.closePath();
ctx.fillStyle = "black";
ctx.fill();
ctx.stroke();
}
//tutup();

function buka1(){
ctx.translate(203, 11);
ctx.rotate(Math.PI/4);
ctx.moveTo(50,100);
ctx.lineTo(50,80);
ctx.lineTo(90,80);
ctx.lineTo(90,60);
ctx.lineTo(110,60);
ctx.lineTo(110,80);
ctx.lineTo(150,80);
ctx.lineTo(150,100);
ctx.closePath();
ctx.fillStyle = "black";
ctx.fill();
ctx.stroke();
}
buka1();

function buka2(){
ctx.translate(320, 40);
ctx.rotate(Math.PI/2);
ctx.moveTo(50,100);
ctx.lineTo(50,80);
ctx.lineTo(90,80);
ctx.lineTo(90,60);
ctx.lineTo(110,60);
ctx.lineTo(110,80);
ctx.lineTo(150,80);
ctx.lineTo(150,100);
ctx.closePath();
ctx.fillStyle = "black";
ctx.fill();
ctx.stroke();


}
//buka2();
