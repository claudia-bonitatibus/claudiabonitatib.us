var gridIcon = [
document.getElementById("creature1Icon"),
document.getElementById("creature2Icon"),
document.getElementById("creature3Icon"),
document.getElementById("creature4Icon"),
document.getElementById("creature5Icon"),
document.getElementById("creature6Icon"),
document.getElementById("creature7Icon"),
document.getElementById("creature8Icon"),
document.getElementById("creature9Icon"),
document.getElementById("creature10Icon"),
document.getElementById("creature11Icon"),
document.getElementById("creature12Icon"),]

var descriptionCard = [
document.getElementById("creature1"),
document.getElementById("creature2"),
document.getElementById("creature3"),
document.getElementById("creature4"),
document.getElementById("creature5"),
document.getElementById("creature6"),
document.getElementById("creature7"),
document.getElementById("creature8"),
document.getElementById("creature9"),
document.getElementById("creature10"),
document.getElementById("creature11"),
document.getElementById("creature12"),]

var deselect= 0;
var clicked = 0;

var width = window.innerWidth;

function showHidden(){
	for (deselect= 0; deselect< descriptionCard.length; deselect++) {
		    if (descriptionCard[deselect].classList == "showDescription" && descriptionCard[deselect] != descriptionCard[clicked]){
		    	descriptionCard[deselect].classList = "hide";
		    }
	}

	if(descriptionCard[clicked].classList == "hide"){
		descriptionCard[clicked].classList = "showDescription";
	}
	else if(descriptionCard[clicked].classList == "showDescription") {
		descriptionCard[clicked].classList = "hide";
	}
}

gridIcon[0].addEventListener('click', (function(){
	clicked = 0;
	showHidden();
}),false);

gridIcon[1].addEventListener('click',  (function(){
	clicked = 1;
	showHidden();
}),false);

gridIcon[2].addEventListener('click',  (function(){
	clicked = 2;
	showHidden();
}),false);

gridIcon[3].addEventListener('click',  (function(){
	clicked = 3;
	showHidden();
}),false);

gridIcon[4].addEventListener('click',  (function(){
	clicked = 4;
	showHidden();
}),false);

gridIcon[5].addEventListener('click',  (function(){
	clicked = 5;
	showHidden();
}),false);

gridIcon[6].addEventListener('click',  (function(){
	clicked = 6;
	showHidden();	
}),false);

gridIcon[7].addEventListener('click',  (function(){
	clicked = 7;
	showHidden();
}),false);

gridIcon[8].addEventListener('click',  (function(){
	clicked = 8;
	showHidden();
}),false);

gridIcon[9].addEventListener('click',  (function(){
	clicked = 9;
	showHidden();
}),false);

gridIcon[10].addEventListener('click',  (function(){
	clicked = 10;
	showHidden();
}),false);

gridIcon[11].addEventListener('click',  (function(){
	clicked = 11;
	showHidden();
}),false);
