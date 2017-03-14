/*var bouton = document.getElementById("btn");
var text = document.getElementById("chrono");
var dem = "Démarrer";
var stop = "Arrêter";

bouton.textContent = dem;
bouton.addEventListener("click", function(e) {
    if (bouton.textContent === dem) {
        bouton.textContent = stop;

        function monter() {
            var plus = Number(text.textContent);
            text.textContent = plus + 1;
        }
        var intervalId = setInterval(monter, 1000);
    } else {
        bouton.textContent = dem;
        console.log('ok');


        setTimeout(intervalId);


    }
});
*/

// ==> CODE PAR OPC <== //

var bouton = document.getElementById("btn");
var compteurElt = document.getElementById("chrono");
var intervalId = null;
var demarre = false; // Etat du chronomètre : démarré (true) ou arrêté (false)

// Augmente le compteur de 1
function augmenterCompteur() {
    compteurElt.textContent = Number(compteurElt.textContent) + 1;
}

bouton.addEventListener("click", function() {
    if (!demarre) {
        // Démarre le chronomètre : appelle augmenterCompteur toutes les secondes
        intervalId = setInterval(augmenterCompteur, 1000);
        bouton.textContent = "Arrêter"; // Modifie le texte du bouton
    } else {
        clearInterval(intervalId); // Arrête le chronomètre
        bouton.textContent = "Démarrer"; // Modifie le text du bouton
    }
    // inverse la valeur de l'état de chronomètre
    demarre = !demarre;
});