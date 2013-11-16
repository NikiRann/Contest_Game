var requestAnimationFrame = window.requestAnimationFrame ||
		window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
		window.msRequestAnimationFrame ||
		function (callback) { setTimeout (callback, 1000 / 30); };
var canvas = document.getElementById("canvas-id");
canvas.width = 800;
canvas.height = 500;
var ctx = canvas.getContext("2d");
var mapSizeY = 50, mapSizeX = 50;
var water = 0, plains = 1, deserts = 2;
var map = create2darray(mapSizeY,mapSizeX);
var tileSize = {x :50, y : 50};
var windowX = 0, windowY = 0, mouseX, mouseY;
var grassTexture = new Image();
grassTexture.src = 'images/grass.png';
var sandTexture = new Image();
sandTexture.src = 'images/sand.jpg';
var waterTexture = new Image();
waterTexture.src = 'images/water.jpg';
function create2darray(nY , nX)
{
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
window.addEventListener("mousemove", function (args) {
	mouseX = args.pageX - canvas.offsetLeft;
	mouseY = args.pageY - canvas.offsetTop;
}, false);
function tile()
{
	this.biome = water;
}
function generateMap()
{
	generateBiome(plains);
	generateBiome(deserts);
}
function generateBiome(biometype)
{
	var numOfBiomes = Math.floor(Math.random() * 15) + 4;
	for(var i = 0;i < numOfBiomes;i ++){
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
			map[coordinates.y][coordinates.x].biome = biometype;
		}
	}
}
window.addEventListener("keydown", function (args) {
}, false);
window.addEventListener("keyup", function (args) {
}, false);
window.addEventListener("mousemove", function (args) {
}, false);
function update()
{
	if(mouseX < 0 && mouseX > -50 && windowX > 0)
	{
		windowX -= 3;
	}
	if(mouseX > canvas.width && mouseX < canvas.width + 50 && windowX < mapSizeX * tileSize.x - canvas.width / tileSize.x)
	{
		windowX += 3;
	}
	if(mouseY < 0 && mouseY > -50)
	{

		windowY -= 3;
	}
	if(mouseY > canvas.height && mouseY < canvas.height + 50 && windowY < mapSizeY * tileSize.y)
	{
		windowY += 3;
	}
	setTimeout(update, 10);
}
function draw()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.globalAlpha = 1;
    var drawX = 0, drawY = 0;
    for(var y = 0;y < mapSizeY;y ++)
    {
    	//console.log("zdr");
    	drawX = 0;
    	for(var x = 0;x < mapSizeX;x ++)
    	{
    		if(map[y][x].biome === plains)
    		{
    			ctx.drawImage(grassTexture,drawX - windowX,drawY - windowY,tileSize.x,tileSize.y);
    		}
    		if(map[y][x].biome === deserts)
    		{
    			ctx.drawImage(sandTexture,drawX - windowX,drawY - windowY,tileSize.x,tileSize.y);
    		}
    		if(map[y][x].biome === water)
    		{
    			ctx.drawImage(waterTexture,drawX - windowX,drawY - windowY,tileSize.x,tileSize.y);
    		}
    		drawX += tileSize.x;
    	}
    	drawY += tileSize.y;
    }
    ctx.lineWidth = 3;
    ctx.strokeRect(canvas.width - mapSizeX * 2,canvas.height - mapSizeY * 2,mapSizeX * 2,mapSizeY * 2);
    for(var y = 0;y < mapSizeY;y ++)
    {
    	for(var x = 0;x < mapSizeX;x ++)
    	{
    		if(map[y][x].biome === plains)
    		{
    			ctx.fillStyle = 'green';
    			ctx.fillRect(canvas.width - (mapSizeX * 2 - x * 2),canvas.height - (mapSizeY * 2 - y * 2),2,2);
    		}
    		if(map[y][x].biome === deserts)
    		{
    			ctx.fillStyle = 'yellow';
    			ctx.fillRect(canvas.width - (mapSizeX * 2 - x * 2),canvas.height - (mapSizeY * 2 - y * 2),2,2);
    		}
    		if(map[y][x].biome === water)
    		{
    			ctx.fillStyle = 'blue';
    			ctx.fillRect(canvas.width - (mapSizeX * 2 - x * 2),canvas.height - (mapSizeY * 2 - y * 2),2,2);
    		}
    	}
    }
    ctx.fillRect(mouseX,mouseY,15,15);
    ctx.lineWidth = 2;
    ctx.strokeRect(canvas.width - (mapSizeX * 2 - (windowX / tileSize.x)),canvas.height - (mapSizeY * 2 - (windowY / tileSize.y)),(canvas.width / tileSize.x) * 2,(canvas.height / tileSize.y) * 2);
    requestAnimationFrame(draw);
}
update();
draw();
generateMap();