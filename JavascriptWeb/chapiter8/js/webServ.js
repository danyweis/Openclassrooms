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

/*
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
*/

// ==> Écrire une fonction AJAX générique

// Exécute un appel AJAX GET
// Prnd en paramètre l'URL cible et la fonction callback appelée en cas de succès

/*  // ceci se retrouve maintenant dans le fichier ajax.js

function ajaxGet(url, callback) {
    var req = new XMLHttpRequest();
    req.open("GET", url);
    req.addEventListener("load", function() {
        if (req.status >= 200 && req.status < 400) {
            // Appelle la fonction callback en lui passant le réponse de la requête
            callback(req.responseText);
        } else {
            console.error(req.status + " " + req.statusText + " " + url);
        }
    });
    req.addEventListener("error", function() {
        console.error("Erreur réseau avec l'URL " + url);
    });
    req.send(null);
}

*/


// ==> !!!!! ici on appelle dans le fichier ajax.js !!!!! <== //

ajaxGet("http://localhost:8888/javascript-web-srv/data/langages.txt", function(reponse) {
    //console.log(reponse);
});

ajaxGet("http://localhost:8888/javascript-web-srv/data/films.json", function(film) {
    //console.log(film);
});



// ===> APPELS AJAX ET JSON <=== //

var avion = {
    marque: "Airbus",
    couleur: "A320"
};
console.log(avion);
// Transforme l'objet JavaScript en chaine de caractères JSON
var texteAvion = JSON.stringify(avion);
console.log(texteAvion);
// Transforme la chaine de caracteres JSON en objet JavaScript
console.log(JSON.parse(texteAvion)); 

 
var avions = [{
    marque: "Airbus",
    couleur: "A320"
}, {
    marque: "Airbus",
    couleur: "A380"
}];
console.log(avions);
// Transform le tableau d'objets JS en chaine de caracteres JSON
var texteAvions = JSON.stringify(avions);
console.log(texteAvions);
// Transform la chaine de caracteres JSON en tableaux d'objets JS
console.log(JSON.parse(texteAvions));




// ==> Recuperer des donnees JSON depuis un serveur

ajaxGet("http://localhost:8888/javascript-web-srv/data/films.json", function(reponse) {
    var films = JSON.parse(reponse);
    films.forEach(function(film) {
        console.log(film.titre);
    })
});

// ==> ACTIVITE 1 <== //
// ==> MON CODE
ajaxGet("http://localhost:8888/javascript-web-srv/data/langages.txt", function(reponseTxt) {
    console.log(reponseTxt);
    var langages = reponseTxt;
    var regex = /\s*;\s*/;
    var langagesSplit = langages.split(regex);
    console.log(langagesSplit);

    for (i = 0; i < langagesSplit.length; i++) {
        var langage = document.createElement("li");
        langage.textContent = langagesSplit[i];
        document.getElementById("langages").appendChild(langage);

    };
});

// ==> CODE OPC

ajaxGet("http://localhost:8888/javascript-web-srv/data/langages.txt", function(reponseTxt) {
    var langages = reponseTxt.split(";");
    var listElt = document.getElementById('langages');
    // Ajout de chaque langage dans la liste
    langages.forEach(function(langage) {
        var langageElt = document.createElement("li");
        langageElt.textContent = langage;
        listeElt.appendChild(langageElt);
    });
});