// Liste des journaux

var journaux = ["http://lemonde.fr", "http://lefigaro.fr", "http://liberation.fr"];

// TODO : ajouter laliste des journaux sur la page, dans la div "contenu"
	
for (var i = 0; i < journaux.length; i++) {
	var journal = document.createElement("a");
	journal.href = journaux[i];
	journal.textContent = journaux[i];
	document.getElementById('contenu').appendChild(journal);
	document.getElementById('contenu').appendChild(document.createElement("br"));
};