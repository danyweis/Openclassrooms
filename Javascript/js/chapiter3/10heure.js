var heures = prompt("Entrez les heures:");
var minutes = prompt("Entrez les minutes:");
var secondes = prompt("Entrez les secondes:");
var h = Number(heures);
var m = Number(minutes);
var s = Number(secondes);


if ((secondes > 59) || (minutes > 59) || (heures > 23)) {
    console.log("ERREUR DE FRAPPE");
} else {
    if (secondes < 59) {
        s++;
        console.log("Dans une seconde il sera " + h + "h " + m + "m " + s + "s");
    } else if ((secondes == 59) && (minutes < 59)) {
        m++;
        console.log("Dans une seconde il sera " + h + "heures, " + m + " minutes et 0 secondes");
    } else if ((secondes == 59) && (minutes == 59) && (heures < 23)) {
        h++;
        console.log("Dans une seconde il sera " + h++ + "heures, 0 minutes et 0 secondes");
    } else if ((secondes == 59) && (minutes == 59) && (heures == 23)) {
        console.log("Dans une seconde il sera minuit");
    }

}


// ******* solution OPC ********


/*
Exercice : afficher l'heure une seconde plus tard
*/
/*
var heures = Number(prompt("Entrez les heures :"));
var minutes = Number(prompt("Entrez les minutes :"));
var secondes = Number(prompt("Entrez les secondes :"));

// On teste tous les cas d'erreur
if ((heures >= 0) && (heures <= 23) && (minutes >= 0) && (minutes <= 59) &&
    (secondes >= 0) && (secondes <= 59)) {
    secondes++; // On incrémente les secondes
    if (secondes === 60) {
        // Il faut mettre les secondes à 0 et passer à la minute suivante
        secondes = 0;
        minutes++;
        if (minutes === 60) {
            // Il faut mettre les minutes à 0 et passer à l'heure suivante
            minutes = 0;
            heures++;
            if (heures === 24) { // L'heure suivante est minuit
                heures = 0;
            }
        }
    }
    console.log("Dans une seconde, il sera " + heures + " heures, " +
        minutes + " minutes et " + secondes + " secondes");
} else {
    console.log("Heure incorrecte !");
}
*/
