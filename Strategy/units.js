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
	this.x=_x;
	this.y=_y;

	this.add = function add(sec2){
		this.x+=sec2.x;
		this.y+=sec2.y;
	}
}

function Building(_location,_health,_type){ //worker,dameger,building,
	this.location = _location;
	this.health = _health;
	this.type = _type;
}

function Unit(_location,_movmentPoints,_damage,_health,_type){ //worker,dameger,building,
	this.location = _location;
	this.movmentPoints = _movmentPoints;
	this.damage = _damage;
	this.health = _health;
	this.type = _type;
	this.build = function(location,health,buildingtype){
		game.map.array[location.x][location.y].Buildings.push(new Building(location,health,buildingtype))
	}
	this.move = function(direction){
		game.map.array[this.location.x + direction.x][this.location.y + direction.y].Unit = this;
		console.log(game.map.array[this.location.x + direction.x][this.location.y + direction.y].Unit);
		game.map.array[this.location.x][this.location.y].Unit = undefined;
	}
}