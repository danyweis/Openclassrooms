var perso = {
  nom: "Aurora",
  sante: 150,
  force: 25
};

console.log(perso.nom + " a " + perso.sante + " points de vie et " + perso.force + " en force.");

// Aurora est blesser par une flèche
perso.sante = perso.sante - 20;

// Aurora trouve un bracelet de force
perso.force = perso.force + 10;

console.log(perso.nom + " a " + perso.sante + " points de vie et " + perso.force + " en force.");

/*******/

//mieux vaut de créer une fonction qui d'écrit le personnage

function decrire(personnage){
  var description = personnage.nom + " a " + personnage.sante + " points de vie et " + personnage.force + " en force.";
  return description;
}
console.log(decrire(perso));

//      *
//     ***
//    *****
//   *******
//      *
//      *
//      *
//      *
//
//    Tout ça c'est
//    encore mieux dans
//    l'objet lui même
//

console.log("***********************")

var perso = {
  nom: "Aurora",
  sante: 150,
  force: 25,

  // renvoie la description de personnage
  decrire: function(){
    var description = this.nom + " a " + this.sante + " points de vie et " + this.force + " en force";
    return description;
  }
};
console.log(perso.decrire());

// Aurora est blesser par une flèche
perso.sante = perso.sante - 20;

// Aurora trouve un bracelet de force
perso.force = perso.force + 10;

console.log(perso.decrire());

//      *
//     ***
//    *****
//   *******
//      *
//      *
//      *
//      *
//
//    Encore une façon
//    pour créer ce perso
//    dans un objet
//

console.log("***********************")

var perso = {}; // Création d'un objet sans aucune propriété
perso.nom = "Aurore";
perso.sante = 150;
perso.force = 35;
// Renvoie la description du personnage
perso.decrire = function(){
  var description = this.nom + " a " + this.sante + " points de vie et " + this.force + " en force.";
  return description;
};
console.log(perso.decrire());

//
//
//
//
//
//  SYNTAXE GENERALE DE CREATION ET D'UTILISATION D'UN OBJET
//
//
//

var monObjet = {
  propriete1: valeur1,
  propriete2: valeur2,
  // .....,
  methode1: function( /* .... */){
    // ....
  },
  methode2: function( /* .... */){
    // ....
  },
  // ....
};

console.log(monObjet.propriete1); // Affiche la propriete1 de monObjet

console.log(monObjet.methode(/*...*/console.log())); // Affiche le résultat de l'appel de la methode1 de monObjet
