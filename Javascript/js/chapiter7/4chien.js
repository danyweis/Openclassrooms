var chien = {
  nom: "Miro",
  race: "mâtin de Naples",
  taille : 75,
  aboyer: function() {
    var bruit = "Grrr ! Grrr !";
    return bruit;
  }
};
console.log(chien.nom + " est un " + chien.race + " mesurant " + chien.taille + " cm");
console.log("Tiens, un chat! " + chien.nom + " aboie : " + chien.aboyer());
