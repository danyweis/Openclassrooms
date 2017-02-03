// Il est possible de déclarer des variables à l'interieur d'une fonction

function direBonjour() {
  var message = "Bonjour !";
  return message;
}
 console.log(direBonjour());

 // les variables dans les fonctions sont des variables locales et ne peuvent pas être appelées en dehors sinon ils provoquent une erreur

console.log(message); // donne une erreur
