var number1 = 5;
var number2 = 3;

var number3 = number1;
// je stock le 5 dans une autre variable pour faire le transfert

number1 = number2;
// puis je met le 2 dans le 1

number2 = number3;
// et ici je remat le 3 dans le deux

console.log(number1); // doit afficher 3
console.log(number2); // doit afficher 5
