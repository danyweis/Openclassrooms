/* 
Activité 1
*/

// Liste des liens Web à afficher. Un lien est défini par :
// - son titre
// - son URL
// - son auteur (la personne qui l'a publié)
var listeLiens = [
    {
        titre: "So Foot",
        url: "http://sofoot.com",
        auteur: "yann.usaille"
    },
    {
        titre: "Guide d'autodéfense numérique",
        url: "http://guide.boum.org",
        auteur: "paulochon"
    },
    {
        titre: "L'encyclopédie en ligne Wikipedia",
        url: "http://Wikipedia.org",
        auteur: "annie.zette"
    }
];

// TODO : compléter ce fichier pour ajouter les liens à la page web


for (var i = 0; i < listeLiens.length; i++) {

// Crátion du lien titre 
var titreElt = document.createElement("a");
    titreElt.setAttribute("class", "titre");
    titreElt.href = listeLiens[i].url;
    titreElt.appendChild(document.createTextNode(listeLiens[i].titre));
// CSS   
    titreElt.style.color = "#428bca";
    titreElt.style.textDecoration = "none";

// Création du span contien le lien
var urlElt = document.createElement("span");
    urlElt.appendChild(document.createTextNode(" " + listeLiens[i].url));

// Création d'un titre h4 pour mettre mon titreElt et urlElt
var titreBoxElt = document.createElement("h4");
    titreBoxElt.appendChild(titreElt);
    titreBoxElt.appendChild(urlElt);
// CSS 
    titreBoxElt.style.margin = "0px";

// Création du span qui contien l'auteur
var auteurElt = document.createElement("span");
    auteurElt.textContent = "Ajouté par " + listeLiens[i].auteur
 
// Création de la div qui contien le contenu 
var lienBoxElt = document.createElement("div");
    lienBoxElt.setAttribute("class", "lien");
    lienBoxElt.appendChild(titreBoxElt);
    lienBoxElt.appendChild(auteurElt);

// envoi de chaque div par tour de boucle
document.getElementById("contenu").appendChild(lienBoxElt);
   
};







