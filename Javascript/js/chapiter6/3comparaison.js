var chaine = "azerty";
console.log(chaine === "qwerty"); // Affiche false
console.log(chaine === "azerty"); // Affiche true
console.log(chaine === "Azerty"); // Affiche false à cause du A majuscule

var valeurSaisie = "Quitter";
console.log(valeurSaisie === "quitter"); // Affiche false à cause du Q
console.log(valeurSaisie.toLowerCase() === "quitter"); // Affiche true
