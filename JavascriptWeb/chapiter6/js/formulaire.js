/********** FORMULAIRE **********/

// ==> ZONE DE TEXTE <== //

// ==> Accès à la valeur saisie

//	En JavaScript, on accède à la valeur d'une zone de 
//	texte en utilisant la propriété "value" de l'élément 
//	du DOM correspond. En donnant une nouvelle valeur 
//	à cette propriété, on modifie la valeur affichée 
//	dans la zone de texte.

var pseudoElt = document.getElementById("pseudo");
pseudoElt.value = "MonPseudo";

// ==> Gestion du focus

// Affiche d'un message contextuel pour la saisie du pseudo

pseudoElt.addEventListener("focus", function(){
	document.getElementById("aidePseudo").textContent = "Entrez votre pseudo";
});

// Suppression du message contextuel pour la saisie du pseudo

pseudoElt.addEventListener("blur", function (e) {
	document.getElementById("aidePseudo").textContent = "";
});

//il se met automatiquement sur l'element des chargement de la page
pseudoElt.focus();


// ==> LES ELEMENT D'OPTIONS <== //

// ==> Cases à cocher

//	Lorsque la case change de valeur, l'objet "Event" 
//	associé à l'événement dispose d'une propriété 
//	booléenne "checked" qui indique le nouvel état de 
//	la case (cochée/décochée).

// Affichage de la demande de confirmation d'inscription
document.getElementById("confirmation").addEventListener("change", function(e) {
	console.log("Demande de confirmation : " + e.target.checked);
});

// ==> Bouton radio

// Affichage du type d'abonnement choisi
var aboElts = document.getElementsByName("abonnement");
for (var i = 0; i < aboElts.length; i++) {
	aboElts[i].addEventListener("change", function(e) {
		console.log("Formule d'abonnement choisi : " + e.target.value);
	});
}

// ==> Listes déroulantes

// Affichage du code de nationalité choisi
document.getElementById("nationalite").addEventListener("change", function (e) {
	console.log("Code de nationalité : " + e.target.value);
});


// ==> LE FORMULAIRE COMME ELEMENT DU "DOM" <== //

// ==> Accès aux champs du formulaire

var form = document.querySelector("form");
console.log("Nombre de champs de saisie : " + form.elements.length); // Affiche 10 (tous les elements dans le formulaire)
console.log(form.elements[0].name); // Affiche "pseudo"
console.log(form.elements.mdp.type); // Affiche "password"

// ==> Soumission du formulaire

// Affiche de toutes les données saisies ou choisies
form.addEventListener("submit", function (e) {
	var pseudo = form.elements.pseudo.value;
	var mdp = form.elements.mdp.value;
	var courriel = form.elements.courriel.value;
	console.log("Vous avez choisi le pseudo " + pseudo + ", le mot de passe " + mdp + " et le courriel " + courriel);

	if (form.elements.confirmation.checked) {
	
		console.log("Vous avez demandé une confirmation d'inscription par courriel");

	} else {

		console.log("Vous n'avez pas demandé de confirmation d'inscription par courriel");


	}

	switch(form.elements.abonnement.value) {
		case "abonewpromo":
			console.log("Vous êtes abonné(e) à la newsletter et aux promotions");
			break;
		case "abonews":
			console.log("Vous êtes abonné(e) à la newsletter");
			break;
		case "aborien":
			console.log("Vous êtes abonné(e) à rien");
			break;
		default:
			console.log("Erreur : code d'abonnement non reconnu");		
	}

	switch (form.elements.nationalite.value) {
		case "FR":
			console.log("Vous êtes français(e)");
			break;
		case "BE":
			console.log("Vous êtes belge");
			break;
		case "SUI":
			console.log("Vous êtes suisse");
			break;
		default:
			console.log("Erreur : code de nationalité non reconnu");
	}

	e.preventDefault() // Annulation de l'envoi des données
});


// ==> VALIDATION DES DONNEES SAISIES <== //

// ==> Validation pendant la saisie

// Vérification de la longueur du mot de passe saisi
document.getElementById("mdp").addEventListener("input", function (e) {

	var mdp = e.target.value; // Valeur saisie dans le champ mdp
	var longueurMdp = "faible";
	var couleurMsg = "red"; // longueur faible => couleur rouge

	if (mdp.length >= 8) {
		
		longueurMdp = "suffisante";
		couleurMsg = "green"; // Longueur suffisante => couleur verte

	} else if (mdp.length >= 4) {
		longueurMdp = "moyenne";
		couleurMsg = "orange"; // Longueur moyenne => couleur orange

	}

	var aideMdpElt = document.getElementById("aideMdp");
	aideMdp.textContent = "Longueur : " + longueurMdp; // Text de l'aide
	aideMdp.style.color = couleurMsg // Couleur du texte de l'aide
});


// ==> Validation à la fin de la saisie

// Contrôle du courriel en fin de saisie (présence d'un "@")
document.getElementById("courriel").addEventListener("blur", function (e) {

	var validiteCourriel = "";

	if ( e.target.value.indexOf("@") === -1) {
		// Le courriel saisi ne contient pas le caracrère @
		validiteCourriel = "Adresse invalive";

	}

	document.getElementById("aideCourriel").textContent = validiteCourriel;

});


// ==> Utilisation d'une expression régulière

//	Ce qui suit va sans doute vous paraître un 
//	peu difficile à digérer pour le moment. 
//	Ne vous en faites pas, c'est en les utilisant 
//	qu'on apprend à maîtriser les expressions régulières, 
//	et vous avez tout le temps pour cela !

var regex = /@/; // La chaine doit contenir le caractère @
console.log(regex.test("")); // Affiche false
console.log(regex.test("@")); // Affiche true
console.log(regex.test("sophie&mail.fr")); // Affiche false
console.log(regex.test("sophie@mail.fr")); // Affiche true

// Contrôle du courriel en fin de saisie
document.getElementById("courriel").addEventListener("blur", function (e) {
	
	// Correspond à une chaine de la forme xxx@yyy.zzz
	var regexCourriel = /.+@.+\..+/;
	var validateCourriel = "";

	if (!regexCourriel.test(e.target.value)) {
		validateCourriel = "Adresse invalide";
	}

	document.getElementById("aideCourriel").textContent = validateCourriel;
});