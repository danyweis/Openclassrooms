/*
// Création d'un objet FormData
var identite = new FormData();
// Ajout d'information dans l'objet
identite.append("login", "Bob");
identite.append("password", "azerty");
// Création et configuration d'une requette HTTP POST vers le fichier post_form.php
var req = new XMLHttpRequest();
req.open("POST", "http://localhost/javascript-web-srv/post_form.php");
// Envoi de la requete en y incluant l'objet
req.send(identite);

*/
/*
// AVEC AJAXPOST
var commande = new FormData();
commande.append("couleur", "rouge");
commande.append("pointure", "43");
// Envoi de l'objet FormData au serveur
ajaxPost("http://localhost/javascript-web-srv/post_form.php", commande, function (reponse) {
    // Affiche dans la console en cas de succés
    console.log("Envoi au serveur avec succés");
});
*/

// soumission d'un formulaire avec FormData

var form = document.querySelector('form');
// Gestion de la soumission de formulaire
form.addEventListener('submit', function (e) {
    e.preventDefault();
    // Récupération des champs du formulaire dans l'objet FormData
    var data = new FormData(form);
    // Envoi des données du formulaire au serveur
    // La fonction callback est ici vide
    ajaxPost('http://localhost/javascript-web-srv/post_form.php', data, function () {});
});

/*
// TRAVAILLER AVEC JSON
// creation d'un objet representant un film
var film = {
    titre: "Zootopie",
    annee: "2016",
    realisateur: "Bryon Howard et Rich Moore"
};
// Envoi de l'objet au serveur
ajaxPost('http://localhost/javascript-web-srv/post_json.php', film,
    function (reponse) {
        // Le film est affiché dans la console en cas de succés
        console.log('Le film ' + JSON.stringify(film) + ' a été envoyé au serveur');
    },
    true // Valeur du paramètre isJson 
);
*/
