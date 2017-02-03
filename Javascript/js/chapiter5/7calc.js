// je dois reflechir pourquoi le signe n'est pas vu comme signe
function calculer(nomb1, signe, nomb2) {

// EVAL()  fait le calcule de l'interieur d'une array ou d'un objet

  var total = eval(nomb1 + signe + nomb2);
  return total;

  // ou faire avec switch ou if
  var resultat;
  switch(signe){
    case "+":
    resultat = nomb1 + nomb2;
    break;
    case "-":
    resultat = nomb1 - nomb2;
    break;
    case "*":
    resultat = nomb1 * nomb2;
    break;
    case "/":
    resultat = nomb1 / nomb2;
    break;
  }
  return resultat;
}

console.log(calculer(4, "+", 6));
console.log(calculer(4, "-", 6));
console.log(calculer(2, "*", 0));
console.log(calculer(12, "/", 0));
