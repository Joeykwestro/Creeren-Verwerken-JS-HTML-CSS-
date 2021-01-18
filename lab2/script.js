var aantal = Number(prompt("Hoeveel namen wilt u in de array stoppen?"));
var arr = [];
var number = aantal - 1;

for(i = 1; i<= aantal; i++){
	arr.push(prompt("Welke naam wilt u toevoegen?"));
}

var h2 = document.createElement("h2");
document.body.appendChild(h2);

for(i = 0; i<=number; i++){
	h2.innerHTML = h2.innerHTML + "<br>" + arr[i];
}

