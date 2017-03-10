// Liste des questions à afficher. Une question est définie par son énoncé et sa réponse
var questions = [
	{
		enonce: "Combien font 2+2 ?",
		reponse: "2+2 = 4"
	},
	{
		enonce: "En quelle année Christophe Colombe a-t-il découvert lÁmérique ?",
		reponse: "1492"
	},
	{
		enonce: "On me trouve 2 fois dans l'année, 1 fois dans la semaine, mais pas du tout dans le jour... Qui suis-je ?",
        reponse: "La lettre N"
	}
];

// OPC

var i = 1; // Pour numeroter les questions

questions.forEach(function(question) {
	// Titre de la question
	var titreElt = document.createElement("strong");
	titreElt.textContent = "Question " + i + " : ";

	// Enoncé de la question (dans une balise <i>)
	var textEnonceElt = document.createElement("i");
	textEnonceElt.textContent = question.enonce;

	// Enonce de la question
	var enonceElt = document.createElement("div");
	enonceElt.appendChild(titreElt);
	enonceElt.appendChild(textEnonceElt);

	// La zone de reponse contient initialement un bouton
	var zoneReponseElt = document.createElement("div");
	var boutonElt = document.createElement("button");
	boutonElt.textContent = "Afficher la re'ponse";
	zoneReponseElt.appendChild(boutonElt);

	boutonElt.addEventListener("click", function() {
		// remplacer le bouton par la reponse de la question
		var reponseElt = document.createElement("div");
		reponseElt.textContent = question.reponse;
		zoneReponseElt.innerHTML = "";
		zoneReponseElt.appendChild(reponseElt);
	});

	// La question regroupe lénonce et la zone de reponse
	var questionElt = document.createElement("p");
	questionElt.appendChild(enonceElt);
	questionElt.appendChild(zoneReponseElt);
	document.getElementById("contenu").appendChild(questionElt);

	i++; 
});




















// MOI	
/*
for (var i = 0; i < questions.length; i++){
	
	var divs = document.createElement("div");
	var question = document.createElement("strong");
	var questionText = document.createElement("span");
	var reponse = document.createElement("p");
	var ligne = document.createElement("p")
	var bouton = document.createElement("button");
	var questionNr = "";
	
	questionNr = i + 1;
	divs.classList = "div";
	question.textContent = "Question " + (questionNr) + " : ";
	questionText.textContent = questions[i].enonce;
	reponse.textContent = questions[i].reponse;
	bouton.textContent = "Afficher la réponse";
	bouton.classList = "btn";

	console.log(question.textContent);
	console.log(questionText.textContent);
	console.log(reponse.textContent);

	ligne.appendChild(question);
	ligne.appendChild(questionText);
	divs.appendChild(ligne);
	divs.appendChild(bouton);
	document.getElementById("contenu").appendChild(divs);

	bouton.addEventListener("click", function(e) {
		if (e.target && e.target.matches("button")) {
			divs.replaceChild(reponse, e.target);
		}
		reponse = (reponse, e.target);
		e.target.textContent = reponse;
		//document.getElementById("contenu").appendChild(reponse);
	console.log(e.target.textContent);
	});


bouton.addEventListener("click", function(e) {
	console.log(e.type)
})




}


*/