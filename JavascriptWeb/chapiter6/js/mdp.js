// => les deux mots de passe saisis doivent être identiques
// => leur longueur doit être au minimum de 6 caractères
// => ils doivent contenir au moins un chiffredo

//MOI

var form = document.querySelector("form");
var infoMap = document.getElementById("infoMap");

form.addEventListener("submit", function (e) {
	
	// identique
	var mdp1 = form.elements.mdp1.value;
	var mdp2 = form.elements.mdp2.value;
	var mdpErreur = "";
	var regexMdp = /\d+/;
	console.log(regexMdp.test("qwerty"));
	console.log(regexMdp.test("a1sdegj"));
	console.log(regexMdp.test("16526543"));
	
	if (mdp1 !== mdp2){
		mdpErreur = "Vos deux mots de passe ne sont pas identiques";
	}else if (mdp1.length<6){
		mdpErreur = "Le mot de passe doit contenir au minimum 6 caractères";
	}else if (!regexMdp.test(mdp1)) {
		mdpErreur = "Il vous faut minimum un chiffre dans votre mot de passe";
	}

	
	infoMap.textContent = mdpErreur;
	e.preventDefault()
});


// OPC
var form = document.querySelector("form");
form.addEventListener("submit", function (e) {

	var mdp1 = form.elements.mdp1.value;
	var mdp2 = form.elements.mdp2.value;
	var message = "Mots de passe OK";

	if (mdp1 === mdp2) {
		if(mdp1.length>=6){
			var regexMdp = /\d+/;
			if(!regexMdp.test(mdp1)) {
				message = "Erreur : le mot de passe ne contient aucun chiffre";
			}
		} else {
			message = "Erreur : la longueurminimale du mot de passe est de 6 caractères";
		}
	} else {
		message = "Erreur : les mots de passe saisis sont différents";
	}
	document.getElementById("infoMap").textContent = message;
	e.preventDefault();
});