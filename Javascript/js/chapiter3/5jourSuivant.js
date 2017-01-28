var jourDeSemaine = prompt("Entrez un jour de semaine :");
if ((jourDeSemaine === "lundi") || (jourDeSemaine === "Lundi")) {
    console.log("Si aujourd'hui on est " + jourDeSemaine + " alors demain on est mardi");
} else if ((jourDeSemaine === "mardi") || (jourDeSemaine === "Mardi")) {
    console.log("Si aujourd'hui on est " + jourDeSemaine + " alors demain on est mercredi");
} else if ((jourDeSemaine === "mercredi") || (jourDeSemaine === "Mercredi")) {
    console.log("Si aujourd'hui on est " + jourDeSemaine + " alors demain on est jeudi");
} else if ((jourDeSemaine === "jeudi") || (jourDeSemaine === "Jeudi")) {
    console.log("Si aujourd'hui on est " + jourDeSemaine + " alors demain on est vendredi");
} else if ((jourDeSemaine === "vendredi") || (jourDeSemaine === "Vendredi")) {
    console.log("Si aujourd'hui on est " + jourDeSemaine + " alors demain on est samedi");
} else if ((jourDeSemaine === "samedi") || (jourDeSemaine === "Samedi")) {
    console.log("Si aujourd'hui on est " + jourDeSemaine + " alors demain on est dimanche");
} else if ((jourDeSemaine === "dimanche") || (jourDeSemaine === "Dimanche")) {
    console.log("Si aujourd'hui on est " + jourDeSemaine + " alors demain on est lundi");
} else {
    console.log("Je ne pense pas que " + jourDeSemaine + " est un jour de semaine");
}
