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