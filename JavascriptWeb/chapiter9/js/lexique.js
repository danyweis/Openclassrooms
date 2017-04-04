/*
var debut = document.createElement("p");
var lexA = document.createElement("a");
lexA.textContent = "A";
lexA.id = "lexA";
var lexB = document.createElement("a");
lexB.textContent = "B"
lexB.id = "lexB";
var lexC = document.createElement("a");
lexC.textContent = "C";
lexC.id = "lexC"
var lexD = document.createElement("a");
lexD.textContent = "D";
lexD.id = "lexD";
var lexE = document.createElement("a");
lexE.textContent = "E";
lexE.id = "lexE";
var points = document.createElement("span");
points.textContent = "...";
var sep = document.createElement("span");
sep.textContent = " | ";
debut.appendChild(lexA);
debut.appendChild(sep);
debut.appendChild(lexB);
debut.appendChild(sep);
debut.appendChild(lexC);
debut.appendChild(sep);
debut.appendChild(lexD);
debut.appendChild(sep);
debut.appendChild(lexE);
debut.appendChild(sep);
debut.appendChild(points);
var contenu = document.getElementById("contenu");
contenu.appendChild(debut);
console.log(debut);
*/

document.getElementById("choix").addEventListener("click", function(e) {
    var targetElt = event.target;
    if (targetElt.textContent !== "A" && targetElt.textContent !== "B" && targetElt.textContent !== "C" && targetElt.textContent !== "D" && targetElt.textContent !== "E") {
        targetElt = "";
    } else {
        appelle(targetElt.textContent);

    }

});

function appelle(quoi) {
    console.log(quoi);
    ajaxGet("https://oc-jswebsrv.herokuapp.com/api/lexique/" + quoi, function(reponse) {
        var mot = JSON.parse(reponse)
        console.log(mot);



        //var box = document.createElement("div");

        for (var i = 0; i < mot.length; i++) {
            //if (mot[i].term === "") {
            //console.log(mot[i].term);
            //} else {
            var term = document.createElement("dt");
            term.textContent = mot[i].term;
            var def = document.createElement("dd");
            def.textContent = mot[i].definition;

            console.log(term);
            console.log(def);
            // box.appendChild(term);
            // box.appendChild(def);
            //}
        }


    });
}