function direBonjour(prenom){
  var message = "Bonjour " + prenom + " !";
  return message;
}

console.log(direBonjour("Supattra"));
console.log(direBonjour("Samsi"));

/********************

// déclaration de la fonction maFonction

function maFonction(parametre1, parametre2,...){

  // Instruction pouvant utiliser parametre1, parametre2, ...

}
// Appel de la fonction maFonction
// parametre1 reçoit la valeur de argument1, paramtre2 la valeur de argument2, ...

maFonction(argument1, argument2, ...);


*********************/

// ATTENTION AU ERREUR

function presentation(prenom, age){
  console.log("Tu t'appelles " + prenom + " et tu as " + age + " ans");
}

presentation("Supattra", 31);
presentation(7, "Samsi");

// il existe déjà beaucoup de fonction prédéfini dans JavaScript et il est préférables de les utiliser voici deux exemples

// Math.min()
console.log(Math.min(4.5, 5)); // Affiche 4.5
console.log(Math.min(19, 9)); // Affiche 9
console.log(Math.min(1, 1)); // Affiche 1

// Math.random()
console.log(Math.random()); // Affiche un nombre aléatoire entre 0 et 1
