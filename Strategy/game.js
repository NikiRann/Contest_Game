var requestAnimationFrame = window.requestAnimationFrame ||
		window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
		window.msRequestAnimationFrame ||
		function (callback) { setTimeout (callback, 1000 / 30); };
var canvas = document.getElementById("canvas-id");
canvas.width = 800;
canvas.height = 600;
var context = canvas.getContext("2d");
<<<<<<< HEAD

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

window.addEventListener("keydown", function (args) {
}, false);
window.addEventListener("keyup", function (args) {
}, false);
window.addEventListener("mousemove", function (args) {
}, false);

function update() {

=======
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
>>>>>>> 1f23bbfc45e1e5c37210635d19972d7eb00073bd
	setTimeout(update, 10);
}
function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.globalAlpha = 1;
<<<<<<< HEAD

=======
    game.render();
>>>>>>> 1f23bbfc45e1e5c37210635d19972d7eb00073bd
    requestAnimationFrame(draw);
}
update();
draw();