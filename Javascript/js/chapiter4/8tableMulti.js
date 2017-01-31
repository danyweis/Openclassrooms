//      WHILE
var table = prompt("Entrez un nombre:");
var i = 1;
console.log("Voici la table de mulitplication des " + table);
while (i <= 10) {
    console.log(table + " x " +
        i + " = " + (table * i));
    i++;
}


//      FOR

var table = prompt("Entrez un nombre:");
console.log("Voici la table de mulitplication des " + table);
for (var i = 1; i <= 10; i++) {
    console.log(table + " x " +
        i + " = " + (table * i));
}
