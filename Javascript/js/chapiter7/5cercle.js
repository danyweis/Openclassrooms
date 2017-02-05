var r = Number(prompt("Entrez le rayon d'un cercle :"));

var cercle = {
  perimetre: function() {
    var perim = (r + r) * Math.PI;
    return perim;
  },

  aire: function() {
    var air = r * r * Math.PI;
    return air;
  }
};

console.log("Son perimetre vaut " + cercle.perimetre());
console.log("Son aire vaut " + cercle.aire());
