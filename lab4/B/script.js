var container = document.getElementById("container");
var text1 = document.getElementById("text1");
var input1 = document.getElementById("input1");
var text2 = document.getElementById("text2");
var input2 = document.getElementById("input2");
var buttonCheck = document.getElementById("buttonCheck")
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");
var button5 = document.getElementById("button5");

buttonCheck.addEventListener("click", Check);

function Check(){
	var input1 = document.getElementById("input1").value;
	var input2 = document.getElementById("input2").value;
	String(input1);
	String(input2);
	var woord = input1.split("");
	var letter = input2.split("");
	if(input1 == [4]){
		alert("goed zo");
	}
	else{
		alert("U kunt alleen maar 5 letters invoeren.");
	}
}