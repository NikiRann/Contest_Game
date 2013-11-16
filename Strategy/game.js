var requestAnimationFrame = window.requestAnimationFrame ||
		window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
		window.msRequestAnimationFrame ||
		function (callback) { setTimeout (callback, 1000 / 30); };
var canvas = document.getElementById("canvas-id");
canvas.width = 800;
canvas.height = 600;
function map(){
	this.array = create2darray();
	function create2darray(nY , nX){
		var array = [];
		for(var i = 0;i < nY;i ++)
		{
			array[i] = [];
			for(var o = 0;o < nX;o ++)
			{
				array[i][o] = new tile();
			}	
		}
		return array;
	}
}
var context = canvas.getContext("2d");
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