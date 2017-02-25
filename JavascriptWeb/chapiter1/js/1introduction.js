var h = document.head;
console.log(h);

var b = document.body;
console.log(b);

if (document.body.nodeType === document.ELEMENT_NODE) {
    console.log("Body est un noeud élément");
} else {
    console.log("Body est un noeud textuel");
};

// Accès au premier enfant du noeud body
// console.log(document.body.childNodes[0]);
//      *
//     ***
//    *****
//   *******
//      *
//      *
//      *
//      *
// les espaces entre les balises ainsi que les retours à la ligne dans le code HTML sont considérés par le navigateur comme des nœuds textuels. Ici, le noeudh1n'est donc que le deuxième enfant du nœudbody

// Accès au  deuxième enfant du noeud body
// console.log(document.body.childNodes[1]);

/*
pour que h1 soit le premier child de body il aurait fallu écrire notre page web <body><h1>Ma page Web </h1>
*/

// PARCOURIR LA LISTE DES NOEUDS CHILD

// Affiche les noeuds enfant du noeud body

for (i = 0; i < document.body.childNodes.length; i++) {
    console.log(document.body.childNodes[i]);
};

// ACCEDER AU PARENT D'U NOEUDS
var h1 = document.body.childNodes[1];
console.log(h1.parentNode); // Affiche le noeud body
console.log(document.parentNode); // Affiche null : document ná aucun noeud parent
