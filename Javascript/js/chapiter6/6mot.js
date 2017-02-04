var mot = "Supattra"; // prompt("Entrez votre nom pour l'analyse:");
console.log("Le mot " + mot + " contien " + mot.length + " de caractères");
console.log("Il s'écrit en minuscules " + mot.toLowerCase());
console.log("il s'écrit en majuscules " + mot.toUpperCase());

// Comptage de voyelle et de consonne

// voyelles : a e i o u y

function compterNbVoyelles(mot) {
  var motPetit = mot.toLowerCase(); // Je met tout en minuscule
  var voyelles = 0; // je crée la variable qui vea compter les voyelles
  for (var i = 0; i < motPetit.length; i++) { // je passe dans chaque caractère
    switch(motPetit[i]){ // je lui dit pour chaque caractère si il y a une voyelle tu compte un sur voyelles
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
      case "y":
      voyelles++;
      break;
    }
  }
  return voyelles;
}
var voyelles = compterNbVoyelles(mot);

console.log("Il contient " + voyelles + " voyelle(s) et " + (mot.length - voyelles) + " consonne(s)");

// Inverser le mot

function inverser(mot) {

  var motInverse = "";
  for (var i = mot.length - 1; i >= 0; i--) {
    motInverse += (mot.charAt(i)); // ici je tourne le mot
  }
return motInverse;
}

console.log("Il s'écrit à l'envers " + inverser(mot));


/*// Solution 1 : ajouter chaque lettre au début du mot inversé
    for (var i = 0; i < mot.length; i++) {
        motInverse = mot[i] + motInverse;
    }

    // Solution 2 : parcourir le mot de la fin vers le début
    /*for (var i = mot.length - 1; i >= 0; i--) {
        motInverse = motInverse + mot[i];
    }*/




// Palindrome

if (inverser(mot).toLowerCase() === mot.toLowerCase()){
  console.log(mot + " est un palindrome");
} else {
  console.log(mot + " n'est pas un palindrome");
}

// leet speak
function convertirEnLeetSpeak(mot) {
var leet = "";
for (var x = 0; x < mot.length; x++){
  leet = leet + trouverLettreLeek(mot[x]);
}
return leet;
}


function trouverLettreLeek(lettre) {
  var lettreLeet = lettre;
     switch(lettre.toLowerCase()){
       case "a":
       lettreLeet = "4";
       break;
       case "b":
       lettreLeet = "8";
       break;
       case "e":
       lettreLeet = "3";
       break;
       case "l":
       lettreLeet = "1";
       break;
       case "o":
       lettreLeet = "0";
       break;
       case "s":
       lettreLeet = "5";
       break;
     }

  return lettreLeet;
}
var motLeetSpeak = convertirEnLeetSpeak(mot);
console.log("Il s'écrit en leek speak " + motLeetSpeak);
