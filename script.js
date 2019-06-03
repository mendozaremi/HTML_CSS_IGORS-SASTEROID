var canvas = document.getElementById("gameCanvas"),
    ctx = canvas.getContext("2d");

canvas.width = 934;
canvas.height = 622;


var background = new Image();
background.src = "Photos/NEBULA.jpg";

background.onload = function(){
    ctx.drawImage(background,0,0);   
}