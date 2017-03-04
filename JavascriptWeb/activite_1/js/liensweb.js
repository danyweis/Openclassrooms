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

// création des éléments

var lienElt = document.createElement("span");
var titreElt = document.createElement("h2");
var urlElt = document.createElement("p");
var auteurElt = document.createElement("p");
var titreCouleur = "#428bca"
// boucle qui chercher les infos

for (var i = 0; i < listeLiens.length; i++) {

    lienElt.setAttribute("class", "lien");
    
    titreElt.setAttribute("class", "titre");
    titreElt.href = listeLiens[i].url;
    titreElt.textContent = listeLiens[i].titre;
    
   

    //urlElt.textContent = titreElt.textContent + " " + listeLiens[i].url;
    //urlElt.textContent =  listeLiens[i].url;

    auteurElt.textContent = "Ajouté par " + listeLiens[i].auteur
    var topElt = document.createElement("span");
    topElt.textContent = titreElt + listeLiens[i].url;
    lienElt.appendChild(topElt);
    //lienElt.appendChild(titreElt);
    //lienElt.appendChild(urlElt);
    lienElt.appendChild(auteurElt);

    sendInfo(lienElt);

};


function sendInfo(info) {
document.getElementById("contenu").appendChild(lienElt);
}
 
// CSS

lienElt.style.display = "block"; 
titreElt.style.color = titreCouleur;
