// R red J jaune V vert B blanc les div

// MOI
/*
document.addEventListener("keypress", function(e){
	//var changeElt = document.getElementsByTagName("div");
	console.log(String.fromCharCode(e.charCode));
	var couleur = "";
	if (String.fromCharCode(e.charCode) == "r"){
		couleur = "red";
	} else if (String.fromCharCode(e.charCode) == "v") {
		couleur = "green";
	} else if (String.fromCharCode(e.charCode) == "j") {
		couleur = "yellow";
	} else if (String.fromCharCode(e.charCode) == "b") {
		couleur = "white";
	} else {

	}
	var test = document.querySelectorAll("div");
	for (var i = 0; i < test.length; i++){
		test[i].style.backgroundColor = couleur;
	}
});
*/
// OPC

document.addEventListener("keypress", function(e) {
	var touche = String.fromCharCode(e.charCode); // Récupération de la touche pressée
	touche = touche.toUpperCase(); // Pour gérer indifféremment minuscule et majuscules
	var couleur = "";
	switch (touche) {
	case "B":
		couleur = "white";
		break;
	case "J":
		couleur = "yellow";
		break;
	case "V":
		couleur = "green";
		break;
	case "R":
		couleur = "red";
		break;
	default:
		console.log("Touche " + touche + " non gérée");
	}
	// Changement de couleur de fond pour toutes les divs
	var divs = document.getElementsByTagName("div");
	for (var i = 0; i < divs.length; i++){
		divs[i].style.backgroundColor = couleur;
	}
});