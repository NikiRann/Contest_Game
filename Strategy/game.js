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
	this.mapSize = new Vector(100,75);
	this.tileSize = new Vector(50,50);
	this.cameraPos = new Vector(0,0);
	this.mouse = new Vector(0,0);
	this.selectedTile = new Vector(0,0);
	this.map = new Map(this.mapSize,this.tileSize,this.cameraPos);
	this.render = function(){
		this.map.render();
	}

}

function MoveSelected(){
	if(game.map.array[game.selectedTile.x][game.selectedTile.y].Unit != undefined){
		game.map.array[game.selectedTile.x][game.selectedTile.y].Unit.move(new Vector(1, 0))
	}
}

window.addEventListener("keydown", function (args) {
	if(args.keyCode == 38){
		game.map.camera.y -= 5;
	}
	if(args.keyCode == 40){
		game.map.camera.y += 5;
	}
	if(args.keyCode == 39){
		game.map.camera.x += 5;
	}
	if(args.keyCode == 37){
		game.map.camera.x -= 5;
	}
}, false);
window.addEventListener("mousemove", function (args) {
	game.mouse.x = args.pageX - canvas.offsetLeft;
	game.mouse.y = args.pageY - canvas.offsetTop;
}, false);
window.addEventListener("mousedown", function (args) {
	if(game.mouse.x < canvas.width && game.mouse.y < canvas.height){	
		game.selectedTile.x = Math.floor((game.mouse.x + game.cameraPos.x) / game.tileSize.x);
		game.selectedTile.y = Math.floor((game.mouse.y + game.cameraPos.y) / game.tileSize.y);
	}
}, false);
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