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
// ==> LES MODIFICATIONS ACTIVITE2 COMMENCENT ICI








// EMPLACEMENT DE TOUT LE CONTENU DANS LE HTML
var contenu = document.getElementById("contenu");

// CREATION DES p ET DU form POUR INTRODUIRE LES INPUTS
var boiteElt = document.createElement("p");
var btnElt = document.createElement("p");
var formElt = document.createElement("form");

// CREATION DES DIFFERENTS INPUTS
var inputAuteur = document.createElement("input");
inputAuteur.type = "text";
inputAuteur.name = "auteur";
inputAuteur.placeholder = "Nom de l'auteur";
inputAuteur.style.marginRight = "20px";
inputAuteur.required = true;

var inputTitre = document.createElement("input");
inputTitre.type = "text";
inputTitre.name = "titre";
inputTitre.placeholder = "Entrez le Titre du lien";
inputTitre.style.marginRight = "20px";
inputTitre.required = true;

var inputLien = document.createElement("input");
inputLien.type = "text";
inputLien.name = "lien";
inputLien.placeholder = "Entrez l'URL du lien";
inputLien.style.marginRight = "20px";
inputLien.required = true;







// CREATION DU BOUTON DU FORMULAIRE
var inputValidation = document.createElement("button");
inputValidation.id = "validationLien";
inputValidation.type = "submit";
inputValidation.textContent = "Ajouter";



// CREATION DU BOUTON QUI AFFICHE LES INPUT
var ajoutLien = document.createElement("button");
ajoutLien.id = "ajoutLien";
ajoutLien.textContent = "Ajouter un lien";
ajoutLien.addEventListener("click", function () {

    boiteElt.appendChild(inputAuteur);
    boiteElt.appendChild(inputTitre);
    boiteElt.appendChild(inputLien);
    boiteElt.appendChild(inputValidation);
    formElt.appendChild(boiteElt);
    contenu.replaceChild(formElt, contenu.childNodes[1]);
    console.log("test");
});




prendreInfo();




// VALIDATION DU FORMULAIRE
inputValidation.addEventListener("click", function (e) {

    // LA BASE DE MON OBJECT
    var nouveauLiens = {
        init: function (titre, url, auteur) {
            this.titre = titre;
            this.url = url;
            this.auteur = auteur;
        }
    };

    // CREATION DU CONTROL POUR LE HTTP ET HTTPS

    if ((inputLien.value.indexOf("http://") !== 0) && (inputLien.value.indexOf("https://") !== 0)) {
        // On la préfixe par "http://"
        inputLien.value = "http://" + inputLien.value;
    }

    // CONTROLE SI LE LIEN SE TERMINE PAR XXX.XXX

    var regexLienHttp = /^https?:\/\/.+\..+/;
    if (!regexLienHttp.test(inputLien.value)) {
        console.log(inputLien.value);
        console.log("addresse invalide");
        inputLien.setCustomValidity("addresse invalide");
        inputLien.value = "";

    } else {

    }

    // SI LES INPUT SON VIDE IL AFFICHE LE MESSAGE 
    if (inputLien.value === "" || inputAuteur.value === "" || inputTitre.value === "") {

    } else {

        // CREATION DU MESSAGE DE VALIDATION
        var validationBoxElt = document.createElement("div");
        validationBoxElt.style.backgroundColor = "#AFE3F1";
        validationBoxElt.style.color = "#066782";
        validationBoxElt.style.padding = "1px 20px";
        var validationTextElt = document.createElement("h4");
        validationTextElt.textContent = 'Le lien "' + inputTitre.value + '" a bien été ajouté.';
        validationBoxElt.appendChild(validationTextElt)

        // JE CREE UN OJECT DANS LEQUEL J'AJOUTE LES VALEUR DE L'INPUT
        var creationLiens = Object.create(nouveauLiens);
        creationLiens.init(inputTitre.value, inputLien.value, inputAuteur.value);
        listeLiens.push(creationLiens);

        // J'AJOUTE TOUT DANS LE DOM
        contenu.insertBefore(creerElementLien(creationLiens), contenu.childNodes[2]);
        contenu.replaceChild(btnElt, contenu.childNodes[1]);

        // AJOUT DU MESSAGE DE VALIDATION ET ENLEVE APRES 2SEC
        contenu.insertBefore(validationBoxElt, contenu.childNodes[0]);
        setTimeout(function () {
            contenu.removeChild(contenu.childNodes[0]);

        }, 2000);

        // VIDE LES INPUTS
        inputAuteur.value = "";
        inputLien.value = "";
        inputTitre.value = "";

    }

});


btnElt.appendChild(ajoutLien);

contenu.appendChild(btnElt);

// Parcours de la liste des liens et ajout d'un élément au DOM pour chaque lien

/*listeLiens.forEach(function (lien) {
    var elementLien = creerElementLien(lien);
    contenu.appendChild(elementLien);
});
*/







// APPELER LES INFO DU SERVEUR

function prendreInfo() {
    ajaxGet('https://oc-jswebsrv.herokuapp.com/api/liens', function (reponse) {
        //console.log(JSON.parse(reponse));
        var lesInfo = JSON.parse(reponse);
        console.log(lesInfo);
        for (var i = 0; i < lesInfo.length; i++) {
            console.log(lesInfo[i]);
        }
    });
}
