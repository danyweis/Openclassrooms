var nombre1 = prompt("Donnez moi un premier nombre :");
var nombre2 = prompt("Maintenant donnez moi un deuxième nombre :");

if (nombre1 === nombre2) {
    console.log(nombre1 + " et " + nombre2 + " sont égaux");
} else if (nombre1 > nombre2) {
    console.log(nombre1 + " est plus grand que " + nombre2);
} else {
    console.log(nombre1 + " est plus petit que " + nombre2);
}
