var requestAnimationFrame = window.requestAnimationFrame ||
		window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
		window.msRequestAnimationFrame ||
		function (callback) { setTimeout (callback, 1000 / 30); };
var canvas = document.getElementById("canvas-id");
canvas.width = 800;
canvas.height = 600;
var context = canvas.getContext("2d");
function Vector(_x,_y){
	this.x = _x;
	this.y = _y;
}
function Game(){
	this.MapSize = new Vector(50,50);
	this.Map = new map(this.MapSize);
	this.Units = new array();
}
function map(size){
	this.array = create2darray(size);
	this.create2darray = function(n){
		var array = [];
		for(var i = 0;i < n.y;i ++)
		{
			this.array[i] = [];
			for(var o = 0;o < n.x;o ++)
			{
				this.array[i][o] = new Tile();
			}	
		}
		return array;
	}
}
function Tile(_biome){
	this.biome = _biome;
}
window.addEventListener("keydown", function (args) {
}, false);
window.addEventListener("keyup", function (args) {
}, false);
window.addEventListener("mousemove", function (args) {
}, false);
function update() {
	setTimeout(update, 10);
}
function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.globalAlpha = 1;
    requestAnimationFrame(draw);
}
update();
draw();