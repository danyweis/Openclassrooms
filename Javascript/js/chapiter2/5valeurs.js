var a = 2;
a = a - 1;
a++;
// a = 2

var b = 8;
b += 2;
// b = 10

var c = a + b * b;
// c = 102
var d = a * b + b;
// d = 30
var e = a * (b + b);
// e = 40
var f = a * b / a;
// f = 10
var g = b / a * a;
// g = 10

console.log("Les résultats sont : " + a + ", " + b + ", " + c + ", " + d + ", " + e + ", " + f + " et " + g);
