// jeu de rôle multijoueur

var perso = {
  nom: "Aurora",
  sante: 150,
  force: 25,
  xp: 0,

  // Renvoie de la description du personnage
  decrire: function(){
    var description = this.nom + " a " + this.sante + " points de vie, " + this.force + " en force et " + this.xp + " points d'expériance";
    return description;
  }
};

console.log(perso.decrire());

perso.sante = perso.sante - 20;

perso.force = perso.force + 10;

perso.xp = perso.xp + 15;

console.log(perso.decrire());

// Ajout d'un deuxième perso

var perso2 = {
  nom: "Glacius",
  sante: 130,
  force: 30,
  xp: 0,
  decrire: function(){
    var description = this.nom + " a " + this.sante + " points de vie, " + this.force + " en force et " + this.xp + " points d'expériance";
    return description;
  }
};

//
console.log("*****************************");
//              *
//             ***
//            *****
//           *******
//              *
//              *
//              *
//              *
//
//   comme les perso le resemble a par des valeurs on va les centraliser
//
//

var Personnage = {
  nom: "",
  sante: 0,
  force: 0,
  xp: 0,
  decrire : function(){
    var description = this.nom + " a " + this.sante + " points de vie, " + this.force + " de force et " + this.xp + " points d'expériance";
    return description;
  }
};

var personnage1 = Object.create(Personnage);
personnage1.nom = "Aurora";
personnage1.sante = 150;
personnage1.force = 20;

var personnage2 = Object.create(Personnage);
personnage2.nom = "Glacius";
personnage2.sante = 130;
personnage2.force = 35;

console.log(personnage1.decrire());
console.log(personnage2.decrire());

//
console.log("**************************************");
//                *
//               ***
//              *****
//             *******
//                *
//                *
//                *
//                *
//
//   Pour ne pas devoire répéter le processus de création d'un personnage
//   on crée une fonction d'initialisation dans l'Object
//
//

var Personne = {
  //Initialise le personnage
  init: function(nom, sante, force) {
    this.nom = nom;
    this.sante = sante;
    this.force = force;
    this.xp = 0;
  },
  // Renvoie la description du personnage
  decrire: function(){
    var description = this.nom + " a " + this.sante + " points de vie, " + this.force + " de force et " + this.xp + " points d'experience";
    return description;
  }
};

var personne1 = Object.create(Personne);
personne1.init("Aurora", 150, 20);

var personne2 = Object.create(Personne);
personne2.init("Glacius", 130, 30);

console.log(personne1.decrire());
console.log(personne2.decrire());

//
console.log("****************************");
//
//                                        *
//                                       **
//                                      ***
//                                     ************
// si on ajoute des Adversaires       **************
//                                     ************
//                                      ***
//                                       **
//                                        *





var LesPersonnages = {
  // Initialise le personnage
  initPerso: function(nom, sante, force) {
    this.nom = nom;
    this.sante = sante;
    this.force = force;
  }
};

var Hero = Object.create(LesPersonnages);

// Initialise les Hero
Hero.initHero = function (nom, sante,force) {
  this.initPerso(nom, sante, force);
  this.xp = 0;
};

//Renvoie la description de Hero
Hero.decrire = function () {
  var description = this.nom + " a " + this.sante + " points de vie, " + this.force + " de force et " + this.xp + " points d'expérience";
  return description;
};


var Adversaire = Object.create(LesPersonnages);

// Initialise les Adversaire
Adversaire.initAdversaire = function(nom, sante, force, race, valeur) {
  this.initPerso(nom, sante, force);
  this.race = race;
  this.valeur = valeur;
};

//
//            *
//           ***
//          *****
//         *******
//            *
//            *
//            *
//            *
//
// les caracteristique des personnages sont crée
//

// CREATION DES HEROS ET ADVERSAIRES

var hero1 = Object.create(Hero);
hero1.initHero("Aurora", 150, 20);

var hero2 = Object.create(Hero);
hero2.initHero("Glacius", 130, 30);

console.log("Bienvenu dans ce jeu d'aventure ! Voici nos courageux héros :");
console.log(hero1.decrire());
console.log(hero2.decrire());


var monster1 = Object.create(Adversaire);
monster1.initAdversaire("Zogzog", 40, 20, "orc", 10);

console.log("Un affreux monstre arrive : c'est un " + monster1.race + " nommé " + monster1.nom);


//
//
//
//        Le Jeu commence!!!!
//
//                *
//                *
//                *
//           *    *    *
//           ***  *  ***
//            *********
//             *******
//              *****
//               ***
//                *
//

var Personnage = {
  initPerso: function(nom, sante, force) {
    this.nom = nom;
    this.sante = sante;
    this.force = force;
  },

  // Attaque un personnage cible
  attaquer: function (cible) {
    if (this.sante > 0){
      var degats = this.force;
      console.log(this.nom + "attaque " + cible.nom + "et lui fait " + degats + " points de dégâts");
      cible.sante = cible.sante - degats;
      if (cible.sante > 0){
        console.log(cible.nom + " a encore " + cible.sante + "de points de vie");
      } else {
        cible.sante = 0;
        console.log(cible.nom + " est mort");
      }
    } else{
      console.log(this.nom + "ne peut pas attaquer : il est mort...");
    }
  }
};
