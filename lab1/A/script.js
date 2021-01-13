document.getElementById("container").style.height = "50px";
var container = document.getElementById("container");

var button1 = document.createElement("BUTTON");
var button2 = document.createElement("BUTTON");
var button3 = document.createElement("BUTTON");

container.appendChild(button1);
container.appendChild(button2);
container.appendChild(button3);

document.body.appendChild(container);
container.style.width = "400px";
container.style.height = "100px";
container.style.backgroundColor = "white";
document.body.style.backgroundColor = "grey";
document.getElementById("container").setAttribute("align", "center");

button1.style.height = "50px";
button1.style.width = "100px";
button1.style.top = "25px";
button1.style.backgroundColor = "green";
button1.innerHTML = "button 1";

button2.style.height = "50px";
button2.style.width = "100px";
button2.style.top = "25px";
button2.style.backgroundColor = "red";
button2.innerHTML = "button 2";

button3.style.height = "50px";
button3.style.width = "100px";
button3.style.top = "25px";
button3.style.backgroundColor = "blue";
button3.innerHTML = "button 3";

button1.addEventListener("click", groen);
button2.addEventListener("click", rood);
button3.addEventListener("click", blauw);

function rood(){
	document.body.style.backgroundColor = "red";
}

function groen(){
	document.body.style.backgroundColor = "green";
}

function blauw(){
	document.body.style.backgroundColor = "blue";
}