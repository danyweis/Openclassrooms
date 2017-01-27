var f = 100;
console.log("La variable f contient la valeur " + f);

var g = "cinq" * 2;
// ceci n'est pas correct on ne peut pas multiplier un string et une valeur
console.log(g);
// la console affiche NaN
// NaN = Not a Number

var h = "5";
console.log(h + 1);
// Concaténation : affiche le string "51"
h = Number("5");
console.log(h + 1);
// Addition numérique : affiche le nombre 6
