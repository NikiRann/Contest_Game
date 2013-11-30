var requestAnimationFrame = window.requestAnimationFrame ||
		window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
		window.msRequestAnimationFrame ||
		function (callback) { setTimeout (callback, 1000 / 30); };
var canvas = document.getElementById("canvas-id");
canvas.width = 800;
canvas.height = 600;
var ctx = canvas.getContext("2d");
function Vector(_x,_y){
	this.x = _x;
	this.y = _y;
}
function Map(_size,_tilesize,_cameraPos){
	this.size = _size;
	this.tilesize = _tilesize;
	this.camera = _cameraPos;
	this.create2darray = function(n){
		var array = [];
		for(var i = 0;i < n.x;i ++)
		{
			array[i] = [];
			for(var o = 0;o < n.y;o ++)
			{
				array[i][o] = new Tile("water",this.tilesize);
			}	
		}
		return array;
	}	
	this.array = this.create2darray(this.size);
	this.generate = function(){
		var numLand = Math.floor(Math.random() * 25) + 10;
		for (var i = 0;i < numLand;i ++){
			var biomeSize = Math.floor(Math.random() * 500) + 100;
			var coordinates = {x : Math.floor(Math.random() * this.size.x),y : Math.floor(Math.random() * this.size.y)};
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
					if(coordinates.y + 1 < this.size.y)
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
					if(coordinates.x + 1 < this.size.x)
					{
						coordinates.x += 1;
					}
				}			
				this.array[coordinates.x][coordinates.y].biome = "plains";
			}
		}
	}
	this.generate();
	this.render = function(){

		for(var y = 0;y < this.size.y;y ++){
			for(var x = 0;x < this.size.x;x ++){
				if(this.array[x][y].biome === "water"){
					ctx.fillStyle = "blue";
					ctx.fillRect(x * this.array[x][y].size.x - this.camera.x,y * this.array[x][y].size.y - this.camera.y,this.array[x][y].size.x,this.array[x][y].size.y);
				}
				if(this.array[x][y].biome === "plains"){
					ctx.fillStyle = "green";
					ctx.fillRect(x * this.array[x][y].size.x - this.camera.x,y * this.array[x][y].size.y - this.camera.y,this.array[x][y].size.x,this.array[x][y].size.y);
				}
			}	
		}
	}
}
function Tile(_biome,_size){
	this.biome = _biome;
	this.size = _size;
}