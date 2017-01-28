var nombre = Number(prompt("Entrez un nombre :"));
if (nombre > 0) {
    console.log(nombre + " est positif");

} else {
    console.log(nombre + " est négatif ou nul");
}

/*
if (condition) {
    // instructions exécutées quand la condition est vraie
} else {
    // instructions exécutées quand la condition est fausse
}
*/

var nr = Number(prompt("Entrez un nombre :"));
if (nr > 0) {
    console.log(nr + " est positif");
} else { // nr <= 0
    if (nr < 0) {
        console.log(nr + " est négatif");
    } else { // nr === 0
        console.log(nr + " est nul");
    }
}


var nombre = Number(prompt("Entrez un nombre :"));
if (nombre > 0) {
    console.log(nombre + " est positif");
} else if (nombre < 0) {
    console.log(nombre + " est négatif");
} else {
    console.log(nombre + " est nul");
}
