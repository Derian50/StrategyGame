 var canvas = document.getElementById("canvas");
 var ctx = canvas.getContext("2d");
 canvas.style.background = "white";
 var width = 640,
 	 height = 360
canvas.width = width;
canvas.height = height;
ctx.font = "74px Comic Sans MS"
var startButton_img = new Image();   
startButton_img.src = 'assets/YOU_PIDOR.png'; 

//объекты для игры
var buttons = {

	width: 48,
	height: 48,

	x: [0,150,206,262,318,374,430,486,542,600],
	y: 8,

	img: []
	
}
//ща заготовлю функции для игры

var clickStatus = 0; //0 - ничего не нажато, 1 - выбор места для здания, 2 - выбора линии для юнита
var WhatButtonClick = function(x,y){
	for(var i = 0; i < buttons.x.length; i++){
		if(x > buttons.x[i] && x < buttons.x[i]+buttons.width && y < (buttons.y+buttons.height)){
			console.log(x + " " + y)
			break;
		}
	}
}

window.onclick = function(e){
	if(clickStatus === 0) WhatButtonClick(e.clientX, e.clientY);
	if(!isStartGame){
		isStartGame = true;
		gameLoop();
	}
	//fullScreen(canvas);
}



function fullScreen(element) {
  if(element.requestFullscreen) {
    element.requestFullscreen();
  } else if(element.webkitrequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if(element.mozRequestFullscreen) {
    element.mozRequestFullScreen();
  }
}

var gameLoop = function(){
	ctx.clearRect(0,0,width,height);

	/*for(var i = 0; i < buttons.x.length; i++){
		ctx.fillRect(buttons.x[i], buttons.y, buttons.width, buttons.height);
		buttons.y+=0.01;
	}*/
	ctx.fillText("Да, да, ты пидор", 10, 100);

	requestAnimationFrame(gameLoop);
}
var isStartGame = false;
var startGame = function(){
	ctx.drawImage(startButton_img, 200, 200, 300, 75);
	if(!isStartGame) requestAnimationFrame(startGame);
}
startGame();

