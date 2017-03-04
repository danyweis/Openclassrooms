/* ==> MODIFIER LE STYLE D'UN ELEMENT <== */

var pElt = document.querySelector('p');
pElt.style.color = "red";
pElt.style.margin = "50px";

// les noms composées comme font-family ou background-color

pElt.style.fontFamily = "Arial";
pElt.style.backgroundColor = "black";

/* ==> ACCEDER AU STYLE D'UN ELEMENT <== */

// Les limites de la propriété style

var paragraphesElts = document.getElementsByTagName("p");
console.log(paragraphesElts[0].style.color); // Affiche "red"
console.log(paragraphesElts[1].style.color); // Affiche "green"
console.log(paragraphesElts[2].style.color); // N'affiche rien

// le script va pas dans le fichier CSS extern pour prendre la couleur pour ca il n'affiche rien

/* ==> La fonction getComputedStyle <== */

var stylePara = getComputedStyle(document.getElementById("para"));
console.log(stylePara.fontStyle); // Affiche "italic"
console.log(stylePara.color); // Affiche la couleur bleu en valeur RGB


// RESUME

/* 

->  La propriété JavaScript style représente l'attribut "style" d'un élément du DOM
	Elle permet de modifier le style de cet élément en définissant la valeur de ses propriétés CSS

->  Les propriétés CSS composées s'écrivent avec la norme camelCase en JavaScript.
	Par exemple "font-family" devient fontFamily

->  La propriété JavaScript "style" est insuffisante pour accéder au style d'un élément.
Pour cela on utilise la fonction "getComputedStyle"

*/	