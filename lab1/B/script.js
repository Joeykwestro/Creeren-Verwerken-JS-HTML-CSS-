var container = document.getElementById("container");
var kleuren = ["green", "red"];

for(var aantal = 1; aantal <= 30; aantal++){
	var button = document.createElement("button");
	container.appendChild(button);
	button.id = "button" + aantal;
	button.backgroundColor = kleuren[0];
	document.body.appendChild(container);
	button.innerHTML = aantal;
	button.onclick = function(){
		buttonColor(this);
	}
}
function buttonColor(knop){
knop.style.backgroundColor = kleuren[1];
}

