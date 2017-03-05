function clic() {
	console.log("Clic !");
}

var boutonElt = document.getElementById("bouton");
// Ajout d'un gestionnaire pour l'événement click
boutonElt.addEventListener("click", clic);


// Evenement anonyme
/*
var boutonElt = document.getElementById("bouton");
// Ajout d'un gestionnaire pour l'événement click
boutonElt.addEventListener("click", function() {
	console.log("Clic !");
});
*/

// ==> Suppression d'un gestionnaire d'événement <==

// Suppression du gestionnaire pour l'événement click
boutonElt.removeEventListener("click", clic);
// ne fonction pas avec un événement anonyme


/* ==> FAMILLE DES EVENEMENTS <== */

// Ajout d'un gestionnaire qui affich le type et la cible de l'événement
document.getElementById("bouton").addEventListener("click", function(e) {
	console.log("Evènement : " + e.type + ", texte de la cible : " + e.target.textContent);
});

/* ==> GESTION DES EVENEMENTS LES PLUS COURANTS <== */

// ==> Appui sur une touche du clavier

// Gestion de l'appui sur une touche du clavier produisant un caractère
document.addEventListener("keypress", function(e) {
	console.log("Vous avez appuyé sur la touche " + String.fromCharCode(e.charCode));
});

// Affiche des informations sur un événement clavier
function infosClavier(e) {
	console.log("Evènement clavier : " + e.type + ", touche : " + e.keyCode);
}

// Gestion de l'appui et du relâchement d'une touche du clavier
document.addEventListener("keydown", infosClavier);
document.addEventListener("keyup", infosClavier);

// ==> Clic sur le bouton de la souris <==

// Dans le cas d'une interface tactile (tablette, smartphone), l'événement "click" 
// associé à un bouton est déclenché par l'appui avec le doigt sur ce bouton

// Renvoie le nom du bouton souris à partir de son code 
function getBoutonSouris(code) {
	var bouton = "inconnu"
	switch (code) {
	case 0: // 0 est le code du bouton gauche
		bouton = "gauche";
		break;
	case 1: // 1 est le code du bouton du milieu
		bouton = "milieu";
		break;
	case 2: // 2 est le code du bouton de droit
		bouton = "droit";
		break;
	}
	return bouton;
}

// Affiche des infos sur un événement souris
function infosSouris(e) {
	console.log("Evènement souris : " + e.type + ", bouton " + getBoutonSouris(e.button) + ", X : " + e.clientX + ", Y : " + e.clientY);
}

// Gestion du clic souris
document.addEventListener("click", infosSouris);
document.addEventListener("mousedown", infosSouris);
document.addEventListener("mouseup", infosSouris);

// ==> Fin du chargement de la page <==

// Gestion de la fin du chargement de la page web
window.addEventListener("load", function() {
	console.log("Page entièrement chargée");
});

// ==> Fermeture de la page web <==

// Gestion de la fermeture de la page web
/*window.addEventListener("beforeunload", function(e){
	var message = "On est bien ici !";
	e.returnValue = message; // Provoque une demande de confirmation (standard)
	return message; // Provoque une demande de confirmation (certains navigateurs)
});*/







