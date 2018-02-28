//var b = document.getElementById("change_color");
var pic = document.getElementById("vimage");
var clear = document.getElementById("clear")

/*
var cl = document.createElementNS("http://www.w3.org/2000/svg", "circle");
cl.setAttribute("cx", "0");
cl.setAttribute("cy", "0");
cl.setAttribute("r", "100");
cl.setAttribute("fill", "green");
pic.appendChild(cl)
*/

/*
var changeColor = function(){
    circles = document.getElementsByTagName("circle");
    var i;
    for (i = 0; i < circles.length; i++){
	circles[i].setAttribute("fill", "red");
    };
};
*/

var prevX = null;
var prevY = null;

var clearScreen = function(e){
    pic.innerHTML = "";
    console.log("Cleared Screen.")
    prevX = null;
    prevY = null;
}

var drawLine = function(x,y){
    if (prevX != null){
	var l = document.createElementNS("http://www.w3.org/2000/svg", "line");
	l.setAttribute("x1", prevX);
	l.setAttribute("x2", x);
	l.setAttribute("y1", prevY);
	l.setAttribute("y2", y);
	l.setAttribute("stroke", "black");
	l.setAttribute("stroke-width", 2);
	pic.appendChild(l);
	drawDot(prevX, prevY);
    }
    prevX = x;
    prevY = y;
}

var drawDot = function(x,y){
    var cl = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    cl.setAttribute("cx", x);
    cl.setAttribute("cy", y);
    cl.setAttribute("r", "15");
    cl.setAttribute("fill", "green");
    pic.appendChild(cl)
    return
}

var clicked = function(e){
    console.log(e.target);
    console.log(this);
    console.log(e.target == this);
    if (e.target == this){  //<-- toElement is undefined
	console.log("coords: ", e.offsetX, ", ", e.offsetY);
	drawLine(e.offsetX, e.offsetY);
	drawDot(e.offsetX,e.offsetY);
    };
}

clear.addEventListener("click", clearScreen)
pic.addEventListener("click", clicked)

//drawDot(100,200)
