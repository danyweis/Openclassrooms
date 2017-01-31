//      WHILE

var saisie = "";
while ((saisie !== "oui") && (saisie !== "non")) {
    saisie = prompt("Ne dis ni oui ni non ok?");
    console.log(saisie);
}
if (saisie === "oui") {
    console.log("pourquoi tu as dis OUI???");
} else if (saisie === "non") {
    console.log("Fallait surtout pas dire NON!!!");
}


//      FOR

for (;
    (saisie !== "ok") && (saisie !== "ahh");) {
    saisie = prompt("Ne dis ni ok ni ahh ok?");
    console.log(saisie);
}
if (saisie === "ok") {
    console.log("pourquoi tu as dis OK???");
} else if (saisie === "ahh") {
    console.log("Fallait surtout pas dire AHH!!!");
}
