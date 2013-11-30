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

var Constants = {
	mapSize: new Vector(800,600);
}

function damager(_location,_size,_movmentPoints,_damage,_health){
	this.location = _location;
	this.size = _size;
	this.movmentPoints = _movmentPoints;
	this.damage = _damage;
	this.health = _health;

	this.strike = function strike(unit){
		unit.health -= this.damage;
	}
}

function worker(_location,_size,_movmentPoints,_damage,_health){
	this.location = _location;
	this.size = _size;
	this.movmentPoints = _movmentPoints;
	this.damage = _damage;
	this.health = _health;

	this.build = function build(type,location,size){
		// new build;
	}
}

/*function Unit(_location,_size,_movmentPoints,_damage,_health){
	this.location = _location;
	this.size = _size;
	this.movmentPoints = _movmentPoints;
	this.damage = _damage;
	this.health = _health;
}*/