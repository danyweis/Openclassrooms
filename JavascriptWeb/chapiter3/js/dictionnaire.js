// liste des mots du dictionaire

var mots = [
{
	terme: "Procrastination",
	definition: "Tendance pathologique a remettre systématiquement au lendemain"
},
{
	terme: "Tautologie",
	definition: "Phrase dont la formoulation ne peut être que vraie"
},
{
	terme: "Oxymore",
	definition: "Figure de style qui reunit dans un même syntagme deux termes semantiquement opposés"
}
];

// TODO :  créer le dictionnaire sur la page web, dans la div "contenu"

var dlElt = document.createElement("dl"); // Création de la liste

// Pour chaque mot, on construit une balise <dt> avec le terme et une balise <dd> avec sa définition
mots.forEach(function (mot) {
	var dtElt = document.createElement("dt");
	var strongElt = document.createElement("strong");
	strongElt.textContent = mot.terme;
	var ddElt = document.createElement("dd");
	ddElt.textContent = mot.definition;

	dtElt.appendChild(strongElt);
	dlElt.appendChild(dtElt);
	dlElt.appendChild(ddElt);
});

// Ajout de la liste à la page
document.getElementById('contenu').appendChild(dlElt);