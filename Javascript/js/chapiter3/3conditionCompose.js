/* *******  Opérateur logique >>>>>ET<<<<<  *******/

// si on souhaite verifier qu'un nombre est compris entre 0 et 100
var nombre = prompt("Entrez un nombre :");
if ((nombre >= 0) && (nombre <= 100)) {
    console.log(nombre + " est compris entre 0 et 100");
}

/*
L'Operateur " && " s'applique à deux valeurs de type booléen.
Son résultat est la valeur " TRUE " uniquement si les deux valeurs auxquelles
il s'applique valent " TRUE ".
*/

console.log(true && true); //Affiche true
console.log(true && false); //Affich false
console.log(false && true); //Affiche false
console.log(false && false); //Affiche false


/*****************************************************************************/


/* *******  Opérateur logique >>>>>OU<<<<<  ****** */

// si on souhaite vérifier qu'un nombre est inferieur à 0 OU superieur à 100

var nombre = prompt("Entrez un nombre :");
if ((nombre <= 0) || (nombre >= 100)) {
    console.log(nombre + " est en dehors de l'intervalle [0,100]");
}

/*
L'opérateur " || " s'applique à deux valeurs de type booléen.
Son résultat est la valeur " TRUE " si au moinns une des deux valeurs auxquellles
il s'applique vaut " TRUE ".
*/

console.log(true || true); // Affiche true
console.log(true || false); // Affiche true
console.log(false || true); // Affiche true
console.log(false || false); // Affiche false


/************************************************************************/

/* *******  Opérateur logique >>>>>NON<<<<<  *******/

/*
L'opérateur " NON " s'écrit sous forme d'un point d'exclamation " ! "
*/

var nombre = prompt("Entrez un nomre : ");
if (!(nombre > 100)) {
    console.log(nombre + " est inférieur à 100");
}

console.log(!true); // affiche false
console.log(!false); // affiche true
