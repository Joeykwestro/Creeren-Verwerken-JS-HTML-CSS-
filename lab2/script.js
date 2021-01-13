var aantal = Number(prompt("Hoeveel namen wilt u in de array stoppen?"));
var arr = [];
var number = aantal - 1;

for(i = 1; i<= aantal; i++){
	arr.push(prompt("Welke naam wilt u toevoegen?"));
}

for(i = 0; i<=number; i++){
	document.write(arr[i] + "<br>");
}

