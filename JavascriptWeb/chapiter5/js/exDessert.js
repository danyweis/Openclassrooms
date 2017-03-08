// MOI
/*
var boutonElt = document.querySelector("button");
var list = document.getElementById("desserts");
var dessert = "";
var textInput = "";
var okBtn = "";

// boutton pour ajout
function bttn(){
	textInput = document.createElement("input");
	textInput.setAttribut = ("type", "text");
	
	okBtn = document.createElement("button");
	okBtn.id = "btn";
	okBtn.textContent = "Send";
}

// Ajouter un dessert
boutonElt.addEventListener("click", function() {
	inputElt();
});

// input
function inputElt() { 
	bttn();
	list.appendChild(textInput);
	list.appendChild(okBtn);
	
	okBtn.addEventListener("click", function(){
		
		//console.log("ok");
		dessert = document.createElement("li");
		dessert.textContent = textInput.value;
		dessert.classList = "leDessert";
		
		//console.log(dessert);
		list.appendChild(dessert);
		list.removeChild(textInput);
		list.removeChild(okBtn);
	});
	
};

// Modifier un dessert

document.getElementById("desserts").addEventListener("click", function (e){
	if (e.target && e.target.matches("li.leDessert")) {
		bttn();
		list.appendChild(textInput);
		list.appendChild(okBtn);
		okBtn.addEventListener("click", function(){
		
		//console.log("ok");
		dessert = document.createElement("li");
		dessert.textContent = textInput.value;
		dessert.classList = "leDessert";
		
		//console.log(dessert);
		list.replaceChild(dessert, e.target);
		list.removeChild(textInput);
		list.removeChild(okBtn);
	});
		//e.target
	}
});
*/

// OPC

document.querySelector("button").addEventListener("click", function() {
	var nomDessert = prompt("Entrez le nom de nouveau dessert :");

	var dessertElt = document.createElement("li");
	dessertElt.textContent = nomDessert;
	dessertElt.addEventListener("click", function (e) {
		var nouveauNom = prompt("Modifiez le nom du dessert : ", e.target.textContent);
		e.target.textContent = nouveauNom;
	});

	document.getElementById("desserts").appendChild(dessertElt);
});



