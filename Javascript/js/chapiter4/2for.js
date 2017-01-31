var compteur;
for (compteur = 1; compteur <= 5; compteur++) {
    console.log(compteur);
}

// mieux de cette façon si pas besoin de la variable en dehors de la boucle
console.log("Début du programme");
for (var compteur = 1; compteur <= 5; compteur++) {
    console.log(compteur);
}
console.log("Fin du programme");

for (initialisation; condition; étape) {
    // instructions exécutées tant que la condition est vérifiée
}
/*
*
*
-   L'initialisation se produit une seule fois,
    au début de l'exécution
-   La condition est évaluée avant chaque tour de boucle.
    Si elle est vraie, un nouveau tpur de boucle est effectué.
    Sinon, la boucle est terminée.
-   L'étape est réalisée après chaque tour de boucle.
*
*
*/
