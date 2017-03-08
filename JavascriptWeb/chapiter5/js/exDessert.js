var boutonElt = document.querySelector("button");
var list = document.getElementById("desserts");
var dessert = "";


// input
function inputElt(){
	
	var textInput = document.createElement("input");
	var okBtn = document.createElement("button");
	okBtn.id = "btn";
	okBtn.textContent = "Send";
	textInput.setAttribut = ("type", "text");
	textInput.id = "la";
	list.appendChild(textInput);
	list.appendChild(okBtn);
	okBtn.addEventListener("click", function(){
		console.log("ok");
		dessert = document.createElement("li");
		dessert.textContent = textInput.value;
		dessert.classList = "leDessert";
		list.appendChild(dessert);
		console.log(dessert);
		list.removeChild(textInput);
		list.removeChild(okBtn);
	});
	
};
//inputElt();


// Ajouter un dessert
boutonElt.addEventListener("click", function() {
	inputElt();
});


// Modifier un dessert
/*
document.getElementsByName(dessert).addEventListener("click", function() {
	
	console.log("ok");
});*/
/*test.addEventListener("click", function() {
	
	console.log("ok");
});
addEventListener("click", function () {
	console.log("Gestionnaire paragraphe");
});

*/
var test = document.getElementsByClassName("leDessert");

for (var i = 0; i<test.length; i++){
	
	test[i].addEventListener("click", function() {
		console.log(test.length);
	})
}
