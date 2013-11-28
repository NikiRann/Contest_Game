var requestAnimationFrame = window.requestAnimationFrame ||
		window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
		window.msRequestAnimationFrame ||
		function (callback) { setTimeout (callback, 1000 / 30); };
var canvas = document.getElementById("canvas-id");
canvas.width = 800;
canvas.height = 600;
var context = canvas.getContext("2d");
var game = new Game();
function Vector(_x,_y){
	this.x = _x;
	this.y = _y;
	this.add = function(v){
		this.x += v.x;
		this.y += v.y;
	}
}
function Game(){
	this.mapSize = new Vector(200,150);
	this.tileSize = new Vector(500,500);
	this.cameraPos = new Vector(0,0);
	this.map = new Map(this.mapSize,this.tileSize,this.cameraPos);
	this.render = function(){
		this.map.render();
	}

}
function update() {
	setTimeout(update, 10);
}
function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.globalAlpha = 1;
    game.render();
    requestAnimationFrame(draw);
}
update();
draw();