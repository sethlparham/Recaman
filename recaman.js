
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.canvas.width  = window.innerWidth;
ctx.canvas.height = window.innerHeight;

var visitednums = [0];
var lastnum = 0;
var startang = Math.PI;
var endang = 0;
var zoom = 1;


for (i = 1; i < 1000; i++) {
	var x1 = 1;
	const y1 = canvas.height / 2;
	var rad1 = (i / 2) * zoom;
	var imod2 = (i % 2);
	var direction = false;
	
	
	var nextcheck = (lastnum - i);
	
	if (nextcheck < 0) {
		nextcheck = 0;
	}
	
	if (imod2 == 1) {
		direction = false;
	} else {
		direction = true;
	}
	
	var visited = visitednums.includes(nextcheck);
	
	if (visited == true) {
		x1 = (x1 + lastnum + (i / 2)) * zoom;
		ctx.beginPath();
		ctx.arc(x1, y1, rad1, startang, endang, direction);
		ctx.strokeStyle = "#FF0000";
		ctx.stroke();
		nextnum = (lastnum + i);
		lastnum = nextnum;
		visitednums.push(nextnum);
	} else{
		x1 = (x1 + lastnum - ((lastnum - nextcheck) / 2)) * zoom;
		ctx.beginPath();
		ctx.arc(x1, y1, rad1, startang, endang, direction);
		ctx.strokeStyle = "#000000";
		ctx.stroke();
		nextnum = nextcheck;
		lastnum = nextnum;
		visitednums.push(nextnum);
	}
}

