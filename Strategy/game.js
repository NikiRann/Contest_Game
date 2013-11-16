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
function map(_size){
	this.size = _size;
	this.array = create2darray(this.size);
	this.create2darray = function(n){
		var array = [];
		for(var i = 0;i < n.y;i ++)
		{
			this.array[i] = [];
			for(var o = 0;o < n.x;o ++)
			{
				this.array[i][o] = new Tile("water");
			}	
		}
		return array;
	}
	this.generate = function(){
		var numLand = Math.floor(Math.random() * 15) + 4;
		for (var i = 0;i < numLand;i ++){
			var biomeSize = Math.floor(Math.random() * 70) + 20;
			var coordinates = {x : Math.floor(Math.random() * mapSizeX),y : Math.floor(Math.random() * mapSizeY)};
			for(var o = 0;o < biomeSize;o ++)
			{
				var dir = Math.floor(Math.random() * 4) + 1;
				if(dir === 1)
				{
					if(coordinates.y - 1 > 0)
					{
						coordinates.y += -1;
					}
				}
				if(dir === 2)
				{
					if(coordinates.y + 1 < mapSizeY)
					{
						coordinates.y += 1;
					}
				}
				if(dir === 3)
				{
					if(coordinates.x - 1 > 0)
					{
						coordinates.x += -1;
					}
				}
				if(dir === 4)
				{
					if(coordinates.x + 1 < mapSizeX)
					{
						coordinates.x += 1;
					}
				}			
				this.array[coordinates.y][coordinates.x].biome = "plains";
			}
		}
	}
	this.render = function(){
		for(var y = 0;y < this.size.y;y ++){
			for(var x = 0;x < this.size.x;x ++){
				if(this.array[y][x] === "water"){
					ctx.fillRect(x * array[y][x].size.x,y * array[y][x].size.y,array[y][x].size.x,array.size.y);
				}
			}	
		}
	}
}
function Tile(_biome,_size){
	this.biome = _biome;
	this.size = _size;
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