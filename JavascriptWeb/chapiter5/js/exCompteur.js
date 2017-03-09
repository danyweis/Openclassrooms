// Moi

var compteur = document.getElementById("compteurClics");

document.getElementById("clic").addEventListener("click", function(e) {	
	compteur.innerHTML++;
});

document.getElementById("desactiver").addEventListener("click", function(e) {
	compteur.innerHTML = 0;
});

// J'AVAIS MAL COMPRIS JE PENSAIS REMTTRE A 0

// OPC

function clic() {
	compteurClics++;
	document.getElementById("compteurClics").textContent = compteurClics;
}

var compteurClics = 0;

document.getElementById("clic").addEventListener("click", clic);

	document.getElementById("desactiver").addEventListener("click", function() {
	document.getElementById("clic").removeEventListener("click", clic);
});