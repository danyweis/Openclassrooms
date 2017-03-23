// ==> Requêtes synchrones (déconseiller)

/*
// Creation d'une requête HTTP
var req = new XMLHttpRequest();
// Requête HTTP GET synchrone vers les fichier langages.txt publié localement
req.open("GET", "http://localhost:8888/javascript-web-srv/data/langages.txt", false);
// Envoi de la requête
req.send(null); // Affiche la réponse reçue pour la requête
console.log(req.responseText);
*/

// ==> Requêtes asynchrones

/*
var req = new XMLHttpRequest();
// La requête est asynchrone lorsque le 3eme parametre vaut true ou est absent
req.open("GET", "http://localhost:8888/javascript-web-srv/data/langages.txt");
// Gestion de l'evenement indinquant la fin de la requête
req.addEventListener("load", function() {
    // Affichela réponse reçue pour la requête
    console.log(req.responseText);
});
req.send(null);
*/

// ==< Gestion des ERREURS

var req = new XMLHttpRequest();
req.open("GET", "http://localhost:8888/javascript-web-srv/data/langages.txt");
req.addEventListener("load", function() {
    if (req.status >= 200 && req.status < 400) { // Le serveur a réussi à traiter la requête
        console.log(req.responseText);
    } else {
        // Affiche des information sur l'echec du traitement de la requête
        console.error(req.status + " " + req.statusText);
    }
});
// La requête n'a pas réussi à atteindre le serveur (nom du serveur incorrect, erreur réseau, etc).
req.addEventListener("error", function() {
    // La requête n'a pas réussi à atteindre le serveur
    console.error("Erreur réseau");
});
req.send(null);
