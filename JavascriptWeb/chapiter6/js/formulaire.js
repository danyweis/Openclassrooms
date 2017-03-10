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
