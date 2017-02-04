// réprésentation d'un stylo bleu en javascript

var stylo = {
  type: "bille",
  couleur: "bleu",
  marque: "Bic"
};

// création d'un objet à l'aide d'un constructeur

// constructur MonObjet
function MonObjet() {
  // Initialisation de l'objet
  // ...
}
// Instanciation d'un objet à partir du constructeur
var monObj = new MonObjet();

/*
Une fois l'objet créé, on peut accéder à la valeur d'une de ses propriétés
en utilisant la notion pointée " nomObjet.nomPropriete " on utilise un point ( . )
entre l'objet et la propriété dont on veut obtenir la valeur.
*/

console.log(stylo.type); // Affiche bille
console.log(stylo.couleur); // Affiche bleu
console.log(stylo.marque); // Affiche Bic

// syntaxe []

console.log(stylo['type']); // Affiche bille
console.log(stylo['couleur']); // Affiche bleu
console.log(stylo['marque']); // Affiche Bic

// Cette syntaxe est moins utilisée que la pointée

console.log('Mon stylo ' + stylo.marque + ' à ' + stylo.type + ' écrit en ' + stylo.couleur);

stylo.couleur = "rouge"; // Modifie la couleur du stylo

console.log('Mon stylo ' + stylo.marque + ' à ' + stylo.type + ' écrit en ' + stylo.couleur);

stylo.prix = 2.5;

console.log('Mon stylo ' + stylo.marque + ' à ' + stylo.type + ' écrit en ' + stylo.couleur);
console.log('et il coûte ' + stylo.prix + '€')
