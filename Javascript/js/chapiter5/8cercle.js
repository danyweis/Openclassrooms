var radius = prompt("Donnez moi le radius d'un cercle :");

function perimetre(radius) {
  var perim = " Le perimetre d'un cercle avec " + radius + " fait " + (radius * Math.PI) + " !";
  return  perim;
}

function aire(radius) {
 var air = "l'aire d'un cercle avec " + radius + " de radius fait " +(Math.PI * radius * radius) + " !";
 return air;
}
console.log(perimetre(radius));
console.log(aire(radius));
