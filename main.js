var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "maroon";
ctx.fillRect(50,100,100,150);

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
ctx.stroke();
