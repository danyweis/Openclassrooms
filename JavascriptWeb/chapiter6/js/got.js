// Liste de quelques maisons de Game of Thrones. Chaque maison a un code et un nom

var maison = [
	{
		code: "ST",
		nom: "Stark"
	},
	{
		code: "LA",
		nom: "Lannister"
	},
	{
		code: "BA",
		nom: "Baratheon"
	},
	{
		code: "TA",
		nom: "Targagyen"
	}
];

// Renvoie un tableau contenant quelques personnages d'une maison

function getPersonnages(codeMaison) {
	switch (codeMaison) {
		case "ST":
			return["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
		case "LA":
			return["Tywin", "Cersei", "Jaime", "Tyrion"];
		case "BA":
			return["Robert", "Stannis", "Renly"];
		case "TA":
			return["Aerys", "Daenerys", "Viserys"];
		default:
			return[];
	}
}

// ==> START MY CODE <== //

// Création de la liste déroulante et des "value" des options
for(var i = 0; i < maison.length; i++){
	
	var listeElts = document.createElement("option");
	listeElts.textContent = maison[i].nom;
	listeElts.value = maison[i].code;

	var listeDown = document.getElementById("maison");
	listeDown.appendChild(listeElts);
} 

var form = document.querySelector("form");
form.addEventListener("change", function(e) {
	// change cést mieux que "click"
	var listePucesPersos = document.getElementById("persos"); 
	listePucesPersos.innerHTML = "";
	var listePersos = getPersonnages(e.target.value);

	for (var j = 0; j < listePersos.length; j++) {

		var perso = document.createElement("li");
		perso.textContent = listePersos[j];
		listePucesPersos.appendChild(perso);
	} 	
});


// ==> START OPC <== //


// Crée et renvoi un élement HTML <option>
function creerElementOption(texte,valeur) {
	var element = document.createElement("option");
	element.textContent = texte;
	element.value = valeur;
	return element;
}

// Crée et renvoie un element HTML <li>
function creerElementLi(texte) {
	var element = document.createElement("li");
	element.textContent = texte;
	return element;
}

var maisonElt = document.querySelector("select");
// Remplit la liste déroulante des maisons
maisons.forEach(function(maison) {
	
	maisonElt.appendChild(creerElementOption(maison.nom, maison.code));

});

maisonElt.addEventListener("change", function(e) {
	// La valeur cible de l'évènement est le code de la maison
	var persos = getPersonnages(e.target.value);
	var persosElt = document.getElementById("persos");
	persosElt.innerHTML = ""; // Vidage de la liste
	// Ajout de chaque personnage à la liste
	persos.forEach(function(perso) {
		persosElt.appendChild(creerElementLi(perso));
	});
});
