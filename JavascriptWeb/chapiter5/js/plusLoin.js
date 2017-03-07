// Gestion du clic sur le document
document.addEventListener("click", function () {
	console.log("Gestionnaire document");
});

// Gestion du cilic sur le paragraphe
document.getElementById("para").addEventListener("click", function () {
	console.log("Gestionnaire paragraphe");
});

// Gestion du clic sur le bouton
document.getElementById("propa").addEventListener("click", function (e) {
	console.log("Gestionnaire bouton");
	e.stopPropagation(); // Arrêt de la propagation de l'événement
});

// Gestion du clic sur le lien interdit
document.getElementById("interdit").addEventListener("click", function (e) {
	console.log("Continuez plutôt à lire le cours ;)");
	e.preventDefault(); // Annulation de la navigation vers la cible du lien
});

//	==> EN RESUME <==

/*

-	On peut rendre une page web interactive en écrivant du code JavaScript qui réagit
	aux événements déclenchés sur la page.
-	De nombreux types d'événements peuvent être gérés. Chaque type d'événement est 
	associé	à un objet "Event" spécifique qui apporte des informations sur l'événement 
	via ses propriétés.
-	Les événements "keypress", "keydown" et "keyup" permettent de réagir à l'utilisation 
	du clavier.
-	Les événements "click", "mousedown" et "mouseup" permettent de gérer les interactions
	avec la souris.
-	Le chargement et la fermeture de la page web sont associés aux événements "load" 
	et "beforunload".
-	un événement se propage dans l'arborescence du DOM depuis son noeud d'origine jusqu'à
	la racine du document. Cette propagation peiut être interrompue à l'aide de la méthode
	"stopPropagation".
-	Il est possible d'annuler le comportement par défault lié à un événement en appelant 
	la méthode "preventDefault".

*/