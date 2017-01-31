/*
WHILE est bien à utiliser si on ne connait pas encore
le nombre de boucle que l'on doit exécuter.

Sinon il est préférable de utilise FOR comme ça on
peut éviter d'écrire des boucle infinie.
*/
//      WHILE

var lettre = "";
while (lettre !== "X") {
    lettre = prompt("Tapez une lettre ou tappez X pour sortir :");
    console.log(lettre);
}


//      FOR

var lettre = "";
for (; lettre !== "X";) {
    lettre = prompt("Tapez une lettre ou la lettre X pour sortir :");
    console.log(lettre);
}
