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

	console.log(question.textContent);
	console.log(questionText.textContent);
	console.log(reponse.textContent);

	ligne.appendChild(question);
	ligne.appendChild(questionText);
	divs.appendChild(ligne);
	divs.appendChild(bouton);
	document.getElementById("contenu").appendChild(divs);

	
}

bouton.addEventListener("click", function(e) {
		document.getElementById("contenu").appendChild(reponse);
	console.log(e.target);
	});