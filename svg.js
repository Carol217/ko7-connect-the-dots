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

var clearScreen = function(e){
    pic.innerHTML = "";
}

var drawDot = function(x,y){
    var cl = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    cl.setAttribute("cx", x);
    cl.setAttribute("cy", y);
    cl.setAttribute("r", "30");
    cl.setAttribute("fill", "green");
    pic.appendChild(cl)
    return
}

var clicked = function(e){
    console.log(e.ToElement == this); //<-- it's false?
    if (e.ToElement == this){
	drawDot(e.offsetX,e.offsetY);
    }
}

clear.addEventListener("click", clearScreen)
pic.addEventListener("click", clicked)

drawDot(100,200)
