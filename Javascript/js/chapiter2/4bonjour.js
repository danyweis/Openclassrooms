var prenom = prompt("Entrez votre prénom :");
// prompt ouvre une boite d'interaction
alert("Bonjour, " + prenom);

// Combinaison  

var tonPrenom = prompt("Entrez votre prénom :");
var tonNom = prompt("Entrez votre nom :");
alert("Bonjour, " + tonNom + " " + tonPrenom);



/*
prompt renvoi toujours un string il faut
penser à convertir ci ca doit etre une valeur
avec l'ordre Number()
*/

var saisie = prompt("Entrez un nombre :");
// la saisie est un string
var nb = Number(saisie);
// nb est de type nombre
alert(nb)
/*
possible d'écrire :
*/
var nombre = Number(prompt("Entrez un nombre"));
alert(nombre)
// nombre est de type nombre

// alert(nombre + 5)
// il fait automatiquement l'addition
