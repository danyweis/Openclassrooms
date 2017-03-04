var taille = getComputedStyle(document.getElementById("contenu"));

// test

// console.log(taille.height); 
// console.log(taille.width);
// console.log(listeEltH.textContent); 
// console.log(listeEltW.textContent);

var info = document.createElement("p");
info.textContent = "Informations sur l'élément";
var liste = document.createElement("ul");
liste.id = "liste";
var listeEltH = document.createElement("li");
listeEltH.textContent = "Hauteur: " + taille.height;
var listeEltW = document.createElement("li");
listeEltW.textContent = "Longeur: " + taille.width;

liste.appendChild(listeEltH);
liste.appendChild(listeEltW);

document.getElementById("infos").appendChild(info);
document.getElementById("infos").appendChild(liste);

