var radius = prompt("Donnez moi le radius d'un cercle :");
// diametre * pi
function perimetre(radius) {
  var perim = " Le perimetre d'un cercle avec " + radius + " fait " + ( radius + radius * Math.PI) + " !";
  return  perim;
}
// aires = pi * r * r
function aire(radius) {
 var air = "l'aire d'un cercle avec " + radius + " de radius fait " +(Math.PI * radius * radius) + " !";
 return air;
}
console.log(perimetre(radius));
console.log(aire(radius));
// r = radius
// radius + radius = diametre


("Le périmetre d'un cercle de " + radius + " de radius et de " + perim)


("Les aires d'un cercle de " + radius + " de radius est de " + air)
