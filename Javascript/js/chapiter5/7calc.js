// je dois reflechir pourquoi le signe n'est pas vu comme signe
function calc(nomb1, signe, nomb2){
  var total = nomb1 + signe + nomb2;
  return total;
}

console.log(calc(4, "+", 6));
console.log(calc(4, "-", 6));
console.log(calc(2, "*", 0));
console.log(calc(12, "/", 0));
