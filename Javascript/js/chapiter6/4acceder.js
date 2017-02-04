var sport = "Tennis-ballon"; // 13 caractères
console.log(sport.charAt(0)); // Affiche "T"
console.log(sport[0]); // Affiche "T"
console.log(sport.charAt(6)); // Affiche "-"
console.log(sport[6]); // Affiche "-"

// Pour accéder au dernier , attention de ne pas oublier qu'une chaîne est indicée à partir de 0!

var longueurSport = sport.length;
console.log(sport[longueurSport - 1]); // Affiche "n"
console.log(sport[longueurSport]); // Affiche undefined : longueur dépassée !
