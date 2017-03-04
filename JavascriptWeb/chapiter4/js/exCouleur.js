var couleurT = prompt("Quelle couleur tu veux pour le text:");
var couleurBg = prompt("Et quelle couleur pour le font:");

var divElt = document.querySelectorAll("div");

console.log(divElt)
for(var i = 0; i < divElt.length; i++) {
	divElt[i].style.color = couleurT;
	divElt[i].style.backgroundColor = couleurBg;
}

