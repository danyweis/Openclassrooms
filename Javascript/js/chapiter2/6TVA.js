var prixHT = Number(prompt("Donnez moi un prix HT et je vous donne le prix TTC :"));

var tvaActuel = 19.6;
// ici on insert le taux de TVA
var tva = tvaActuel / 100;
// j'ai déclaré une variable pour facilement changer le taux de TVA

var tvaDuPrix = prixHT * tva;
// ici on calcul la TVA du prix
var prixTTC = prixHT + tvaDuPrix;
// ici on calcul le prix HT + la TVA

alert("Le prix TTC de " + prixHT + " avec une TVA actuelle de " + tvaActuel + " % est de " + prixTTC + " euro!");
