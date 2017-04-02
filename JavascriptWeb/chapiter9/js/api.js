var articlesElt = document.getElementById("articles");
ajaxGet("https://oc-jswebsrv.herokuapp.com/api/articles", function(reponse) {
    // Transforme la réponse en un tableau d'articles
    var articles = JSON.parse(reponse);
    articles.forEach(function(article) {
        // Ajout du titre et du contenu de chaque article
        var titreElt = document.createElement("h2");
        titreElt.textContent = article.titre;
        var contenuElt = document.createElement("p");
        contenuElt.textContent = article.contenu;
        articlesElt.appendChild(titreElt);
        articlesElt.appendChild(contenuElt);
    });
});

var premMinElt = document.getElementById("premMin");
ajaxGet("https://www.data.gouv.fr/api/1/organizations/premier-ministre/", function(reponse) {
    var premierMinistre = JSON.parse(reponse);
    // Ajout de la description et du logo dans la page web
    var descriptionElt = document.createElement("p");
    descriptionElt.textContent = premierMinistre.description;
    var logoElt = document.createElement("img");
    logoElt.src = premierMinistre.logo;
    premMinElt.appendChild(descriptionElt);
    premMinElt.appendChild(logoElt);
});

ajaxGet("http://api.wunderground.com/api/50a65432f17cf542/conditions/q/France/Lyon.json", function(reponse) {
    var meteo = JSON.parse(reponse);
    var temperature = meteo.current_observation.temp_c;
    var humiditie = meteo.current_observation.relative_humidity;
    var imageUrl = meteo.current_observation.icon_url;
    // Affiche les resultats
    var conditionsElt = document.createElement("div");
    conditionsElt.textContent = "Il fait actuellement " + temperature + " &deg C et l'humiditié est de " + humiditie;
    var imageElt = document.createElement("img");
    imageElt.src = imageUrl;
    var meteoElt = document.createElement("meteo");
    meteoElt.appendChild(conditionsElt);
    meteoElt.appendChild(imageElt);
});