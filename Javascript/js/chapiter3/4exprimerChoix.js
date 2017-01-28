// exprimer un choix avec => if/else

var meteo = prompt("Quel temps fait-il dehors ?");
if (meteo === "soleil") {
    console.log("sortez en T-Shirt.");
} else if (meteo === "vent") {
    console.log("Sortez en pull.");
} else if (meteo === "pluie") {
    console.log("Sortez en blouson.");
} else if (meteo === "neige") {
    console.log("Restez au chaud à la maison");
} else {
    console.log("Je n'ai pas compris !");
}

// exprimer un choix avec => switch

var meteo = prompt("Quel etmps fait-il ?");
switch (meteo) {
    case "soleil":
        console.log("Sortez en T=Shirt");
        break;
    case "vent":
        console.log("Sortez en pull");
        break;
    case "pluie":
        console.log("Sortez en blouson");
        break;
    case "neige":
        console.log("Restez au chaud à la maison");
        break;
    default:
        console.log("Je n'ai pas compris");
}

/*

switch (expression) {
    case valeur1:
        // instructions exécutées quand vaut valeur1
        break;
    case valeur2:
        // instructions exécutées quand vaut valeur2
        break;
        ...
    default:
        // instructions exécutées quand aucune des valeurs ne correspond
}
*/


/*********** exemple  **********/

var x = "abc";
switch (x) {
    case "abc":
        console.log("x vaut abc");
        // pas de break: on passe au bloc suivant !
    case "def":
        console.log("x vaut def");
        break;
}

/*
l'exécution de cet exemple affiche deux messages : "x vaut abc"(résultat attendu)
mais aussi "x vaut def".
*/
