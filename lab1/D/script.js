var color = ["green", "red", "blue", "purple", "black"];
var aantalKnoppen = 200;


var container = document.getElementById("container");

for(var aantal = 1; aantal <= aantalKnoppen; aantal++){
	var button = document.createElement("button");
	container.appendChild(button);
	button.id = "button" + aantal;
	button.backgroundColor = color[0];
	document.body.appendChild(container);
	button.innerHTML = aantal;
	button.onclick = function(){
		buttonColor(this);
	}
}	

function buttonColor(knop){
	if(knop.style.backgroundColor == "black"){
		knop.style.display = "none";
	}
	var currentColor = color.indexOf(knop.style.backgroundColor);
	knop.style.backgroundColor = color[currentColor+1];
}
