var mois = prompt("Entrez un mois :");
if (mois === 1 || 3 || 5 || 6 || 8 || 10 || 12){
    console.log("Ce mois contient 31 jours");
} else if (mois === 4 || 7 || 9 || 11) {
    console.log("Ce mois contient 30 jours");
} else if (mois === 2) {
    console.log("Ce mois contient 28 voir 29 jours");
} else {
    console.log("Tu me prend pour qui? Ce mois n'existe pas!!");
}
