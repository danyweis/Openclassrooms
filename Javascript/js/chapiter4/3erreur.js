// ERREUR avec WHILE

var nombre = 1;
while (nombre <= 5) {
    console.log(nombre);
    /*
    est ici il ne faut pas oublier d'ajouter la
    condition pour ajouter un "++" sinon c'est une
    boucle infinie qui reste toujours sur 1 est
    reste donc toujours sous 5
    */
}

// ERREUR avec for

for (var compteur = 1; compteur <= 5; compteur++) {
    console.log(compteur);
    compteur++; // pas refaire ce que l'on fais déjà plus haut

    /* RÉSULTAT :
        1
        3
        5
    */
}
