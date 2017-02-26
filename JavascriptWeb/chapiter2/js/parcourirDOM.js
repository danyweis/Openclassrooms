console.log(document.body.childNodes[5].childNodes[1]);

// Sélection d'élémens selon leurs balise

// Tous les titres h2
var titresElts = document.getElementsByTagName("h2");
// Affiche le premier titre h2
console.log(titresElts[0]);
// Affiche 3
console.log(titresElts.length);

// Sélection d'éléments selon leur classe

// Tous les éléments ayant la classe "merveilles"
var merveillesElts = document.getElementsByClassName("merveilles");
for (var i = 0; i < merveillesElts.length; i++) {
    console.log(merveillesElts[i]);
}

// Sélection d'un élément selon son identifiant

// Elément portant l'identifiant "nouvelles"
console.log(document.getElementById("nouvelles"));

// Sélection d'éléments à partir d'un sélecteur classe

// Tous les éléments fils de l'élément d'identifiant "antiques" ayant la clesse "existe"
console.log(document.getElementById("antiques").getElementsByClassName("existe").length);
// Affiche 1
