/* 
Activité 1
*/

// Liste des liens Web à afficher. Un lien est défini par :
// - son titre
// - son URL
// - son auteur (la personne qui l'a publié)
var listeLiens = [{
    titre: "So Foot",
    url: "http://sofoot.com",
    auteur: "yann.usaille"
}, {
    titre: "Guide d'autodéfense numérique",
    url: "http://guide.boum.org",
    auteur: "paulochon"
}, {
    titre: "L'encyclopédie en ligne Wikipedia",
    url: "http://Wikipedia.org",
    auteur: "annie.zette"
}];

// Crée et renvoie un élément DOM affichant les données d'un lien
// Le paramètre lien est un objet JS représentant un lien
function creerElementLien(lien) {
    var titreLien = document.createElement("a");
    titreLien.href = lien.url;
    titreLien.style.color = "#428bca";
    titreLien.style.textDecoration = "none";
    titreLien.style.marginRight = "5px";
    titreLien.appendChild(document.createTextNode(lien.titre));

    var urlLien = document.createElement("span");
    urlLien.appendChild(document.createTextNode(lien.url));

    // Cette ligne contient le titre et l'URL du lien
    var ligneTitre = document.createElement("h4");
    ligneTitre.style.margin = "0px";
    ligneTitre.appendChild(titreLien);
    ligneTitre.appendChild(urlLien);

    // Cette ligne contient l'auteur
    var ligneDetails = document.createElement("span");
    ligneDetails.appendChild(document.createTextNode("Ajouté par " + lien.auteur));

    var divLien = document.createElement("div");
    divLien.classList.add("lien");
    divLien.appendChild(ligneTitre);
    divLien.appendChild(ligneDetails);

    return divLien;
}

// boite ou tout le contenu sera dans la html

var contenu = document.getElementById("contenu");

// creation d'un p pour le bouton et formulaire

var boiteElt = document.createElement("p");
var btnElt = document.createElement("p");

// Creation des differents inputs

var inputAuteur = document.createElement("input");
inputAuteur.type = "text";
inputAuteur.name = "auteur";
inputAuteur.classList = "inputBox";
inputAuteur.placeholder = "Nom de l'auteur";
inputAuteur.style.marginRight = "20px";

var inputTitre = document.createElement("input");
inputTitre.type = "text";
inputTitre.name = "titre";
inputTitre.classList = "inputBox";
inputTitre.placeholder = "Entrez le Titre du lien";
inputTitre.style.marginRight = "20px";

var inputLien = document.createElement("input");
inputLien.type = "text";
inputLien.name = "lien";
inputLien.classList = "inputBox";
inputLien.placeholder = "Entrez l'URL du lien";
inputLien.style.marginRight = "20px";
inputLien.required = true;

// creation du bouton du formulaire

var inputValidation = document.createElement("button");
inputValidation.id = "validationLien";
inputValidation.type = "submit";
inputValidation.textContent = "Ajouter";
inputValidation.addEventListener("click", function(e) {

});


// creation du boutton qui affiche les input

var ajoutLien = document.createElement("button");
ajoutLien.id = "ajoutLien";
ajoutLien.textContent = "Ajouter un lien";
ajoutLien.addEventListener("click", function() {


    boiteElt.appendChild(inputAuteur);
    boiteElt.appendChild(inputTitre);
    boiteElt.appendChild(inputLien);
    boiteElt.appendChild(inputValidation);
    contenu.replaceChild(boiteElt, contenu.childNodes[1]);
});



inputValidation.addEventListener("click", function(e) {
    var nouveauLiens = {
        init: function(titre, url, auteur) {
            this.titre = titre;
            this.url = url;
            this.auteur = auteur;
        }
    };

    if (inputLien.value === "") {
        e.preventDefault();
    } else {
        var creationLiens = Object.create(nouveauLiens);
        creationLiens.init(inputTitre.value, inputLien.value, inputAuteur.value);

        listeLiens.push(creationLiens);

        contenu.insertBefore(creerElementLien(creationLiens), contenu.childNodes[2]);
        contenu.replaceChild(btnElt, contenu.childNodes[1]);

        // VIDE LES INPUTS
        inputAuteur.value = "";
        inputLien.value = "";
        inputTitre.value = "";
    }

});







btnElt.appendChild(ajoutLien);
contenu.appendChild(btnElt);

// Parcours de la liste des liens et ajout d'un élément au DOM pour chaque lien

listeLiens.forEach(function(lien) {
    var elementLien = creerElementLien(lien);
    contenu.appendChild(elementLien);
});