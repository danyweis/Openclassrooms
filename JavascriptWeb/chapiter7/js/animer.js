// ==> REPETER UNE ACTION A INTERVALLES REGULIERS <== //

// ==> Démarrer une action répétée <==

/*

===> !!! MISE EN COMMENTAIRE POUR EXEMPLE 2 !!! <===

var compteurElt = document.getElementById("compteur");

// Diminue le compteur jusqu'à 0
function diminuerCompteur() {
    // Conversion en nombre du texte du compteur
    var compteur = Number(compteurElt.textContent);
    compteurElt.textContent = compteur - 1;
}

// Appelle la fonction diminuerCompteur toutes les secondes (1000 millisecondes)
setInterval(diminuerCompteur, 1000);
*/


// ==> Annuler une action répétée
/*

===> MISE EN COMMENTAIRE POUR EXERCICE 3 <===
var compteurElt = document.getElementById("compteur");

// Diminue le compteur jusqu'à 0
function diminueCompteur() {
    // Conversion en nombre du texte du compteur
    var compteur = Number(compteurElt.textContent);
    if (compteur > 1) {
        compteurElt.textContent = compteur - 1;
    } else {
        // Annule l'exécution répétée
        clearInterval(intervealId);
        // Modifie le titre de la page
        var titre = document.getElementById("titre");
        titre.textContent = "BOUM !!!";
    }
}

// Appelle la fonction diminuerCompteur toutes les secondes
var intervealId = setInterval(diminueCompteur, 1000);
*/

// ==> EFFECTUER UNE ACTION APRES UN DELAI <== //

var compteurElt = document.getElementById("compteur");

function diminuerCompteur() {
    var compteur = Number(compteurElt.textContent);
    if (compteur > 1) {
        compteurElt.textContent = compteur - 1;
    } else {
        clearInterval(intervalId);

        var titre = document.getElementById("titre");
        titre.textContent = "BOUM !!!";
        // Modification du titre au bout de 2 secondes
        setTimeout(function() {
            titre.textContent = "Tout est cassé :(";
        }, 2000);
    }
}

var intervalId = setInterval(diminuerCompteur, 1000);