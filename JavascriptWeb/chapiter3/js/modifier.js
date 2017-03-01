/* ==> Contenu HTML <== */

// Modification du cotenu HTML de la liste: ajout d'un langage
document.getElementById("langages").innerHTML += '<li id="c">C</li>';

// Suppression du contenu HTML de la liste
/**/
//document.getElementById("langages").innerHTML = "";
/**/
// Ici je vides tout le contenu


/* ==> Contenu textuel <== */

// Modification du contenu textuel du premier titre
document.querySelector("h1").textContent += " de programmation";


/* ==> Les attributs <== */

// Définition de l'attribut "id" du premier titre
document.querySelector("h1").setAttribute("id", "titre");

// Certains attributs comme id ,href et value sont directement modifiables
// sous la forme de propriétés. Le code ci-dessous est équivalent au précédent
document.querySelector("h1").id = "titer";

/* ==> Les classes <== */

// On peut utiliser la propriété "classList" pour ajouter ou supprimer des classas
// à un élément de DOM. Pour cela, on emploie les méthodes "add" (ajout) et 
// "remove" (suppression), comme dans l'exemple suivant.
var titreElt = document.querySelector("h1"); // Accès au premier titre h1
titreElt.classList.remove("debut"); // Suppression de la classe "debut"
titreElt.classList.add("titre"); // Ajout de la classe "titre"
console.log(titreElt);

/* ==> AJOUTER UN NOUVEAU ELEMENT <== */

// 1. Création d'un nouvel élément
// 2. Définition des informations de l'élément
// 3. Ibnsertion du nouvel élément dans le DOM
var pythonElt = document.createElement("li"); // Création d'un élément "li"
pythonElt.id = "python"; // Définition de son identifiant
pythonElt.textContent = "Python"; // Définition de son contenu textuel
document.getElementById("langages").appendChild(pythonElt); // Insertion du nouvel élément

/* ==> VARIANTES POUR AJOUTER UN ELEMENT <== */

/* ==> Création d'un noeud textuel <== */

var rubyElt = document.createElement("li"); // Création d'un élément li
rubyElt.id = "ruby"; // Définition de son identifiant
rubyElt.appendChild(document.createTextNode("Ruby")); // Définition de son contenu textuel
document.getElementById("langages").appendChild(rubyElt); // Insertion du nouvel élément

/* ==> Ajout d'un noeud avant un autre noeud <== */

var perlElt = document.createElement("li"); // Création d'un élément li
perlElt.id = "perl"; // Définition de son identifiant
perlElt.textContent = "Perl"; // Définition de son contenu textuel
// Ajout du nouvel élément avant l'identifiant identifié par "php"
document.getElementById("langages").insertBefore(perlElt, document.getElementById("php"));

/* ==> Choix de la position exacte du nouveau noeud <== */

/* ==> insertAdjacentHTML <== */

// On l'appelle sur un élément existant et elle prend en paramètres une position et 
// une chaîne de caractères HTML qui représente le nouveau contenu à ajouter.
// La position du nouveau contenu doit être une valeur parmi

// - beforeBegin : avant l'élément existant lui-même
// - afterBegin : juste à l'intérieur de l'élément existant, avant son premier enfant
// - beforeEnd : juste à l'intérieur de l'élément existant, après son dernier enfant
// - afterEnd : après l'élément existant lui-même

// Ajout d'un élément au tout début de la liste
document.getElementById('langages').insertAdjacentHTML("afterBegin", '<li id="javascript">JavaScript</li>');

/* ==> REMPLACER OU SUPPRIMER UN NOEUD <== */

/* ==> Remplacer un  noeud existant <== */

// Le remplacement d'un élément du DOM par un autre s'effectue au moyen de la méthode "replaceChild"
// Celle-ci remplace un noeud enfant de l'élément courant par un autre noeud.
// Elle prend en paramètre (dans cet ordre) le nouveau noeud et celui qui est remplacé.
var bashElt = document.createElement("li"); //creation d'un élément li
bashElt.id = "bash"; // Définition de son identifiant
bashElt.textContent= "Bash"; // Définition de son contenu textuel
// Remplaceent de l'élément identifié par "perl" par le nouvel élément
document.getElementById("langages").replaceChild(bashElt, document.getElementById("perl"));

/* ==> Supprimer un noeud existant <== */

// "removeChild" 

// Suppression de l'élément identifié par "bash"
document.getElementById("langages").removeChild(document.getElementById("bash"));


// ==> EXERCICE <== //

var paraElt = document.createElement("p");
var lienElt = document.createElement("a");
lienElt.href = "https://fr.wikipedia.org/wiki/Liste_des_langages_de_programmation";
lienElt.textContent = "liste";
console.log(lienElt);
paraElt.appendChild(document.createTextNode("En voici une "));
paraElt.appendChild(lienElt);
paraElt.appendChild(document.createTextNode(" plus complète."));
document.getElementById("contenu").appendChild(paraElt);