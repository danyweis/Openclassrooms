var unObjet = {
  a: 2
};

// Crée unAutreObjet avec unObjet comme Prototype
var unAutreObjet = Object.create(unObjet);

console.log(unAutreObjet.a);  // Affiche 2

// Crée encoreUnObjet avec unAutreObjet comme Prototype
var encoreUnObjet = Object.create(unAutreObjet);

console.log(encoreUnObjet.a); // Affiche 2
console.log(encoreUnObjet.b); // Affiche undefined
