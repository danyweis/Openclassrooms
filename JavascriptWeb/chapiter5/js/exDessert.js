var boutonElt = document.querySelector("button");
var list = document.getElementById("desserts");

// Ajouter un dessert
boutonElt.addEventListener("click", function() {
	//var ajoutDessert = prompt("Ajouter un dessert:");
	var dessert = document.createElement("li");
	dessert.textContent = prompt("Ajouter un dessert:");
	list.appendChild(dessert);
	console.log(dessert);
});

// Modifier un dessert
function changeDessert(){
	document.addEventListener("click" function(e){

	});
}