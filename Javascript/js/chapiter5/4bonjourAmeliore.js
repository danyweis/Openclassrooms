function direBonjour(prenom, nom){
  var message = "Bonjour " + prenom + " " + nom + " !";
  return message;
}

/* Avec des variables */

var prenom = prompt("Quel est ton prénom?");
var nom = prompt("Quel est ton nom?");
console.log(direBonjour(prenom, nom));

/* tout en un */

// console.log(direBonjour(prompt("Quel est ton prénom?"), prompt("Quel est ton nom?")));
