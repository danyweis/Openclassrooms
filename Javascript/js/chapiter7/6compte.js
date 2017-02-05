var compte = {
  titulaire: "Alex",
  solde: 0,
  crediter: function(credit) {
    this.solde = this.solde + credit;
    return this.solde;
  },
  debiter: function(debit) {
    this.solde = this.solde - debit;
    return this.solde;
  },
  decrire: function() {
  var message = "Titulaire : " + this.titulaire + ", solde : " + this.solde + " euros"
  return message;
  }
};

console.log(compte.decrire());

compte.crediter(200);
compte.debiter(150);

console.log(compte.decrire());
