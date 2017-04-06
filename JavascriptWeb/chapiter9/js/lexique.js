// ==> MOI <==

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

// ==> OPC <==

var motsElt = document.getElementById("mots");

function afficherMots(lettre) {
  ajaxGet("http://oc-jswebsrv.herokuapp.com/api/lexique/" + lettre, funktion(reponse){
          var mots = JSON.parse(reponse);
          motsElt.innerHTML = "";
          if (mots.length > 0){
          mots.forEach(function (mot) {
          var termeElt = document.createElement("h3");
            termeElt.textContent = mot.term;
            var definitionElt = document.createElement("div");
            definitionElt.textContent = mot.definition;
            motsElt.appendChild(termeElt);
            motsElt.appendChild(definitionElt);
          });
          } else {
            var msgElt = document.createElement("p");
            msgElt.textContent = "Aucun mot trouvé pour " + lettre;
            motsElt.appendChild("msgElt");
          }
          });
}

var lettres = ["A", "B", "C", "D", "E"];
lettres.forEach(function (lettre) {
  var lettreElt = document.createElement("a");
  lettreElt.textContent = lettre;
  lettreElt.href = "#";
  lettreElt.addEventListener("click", function() {
    afficherMots(lettre);
  });
  lettresElt.appendChild(lettreElt);
  lettresElt.appendChild(document.createTextNode(" | "));
});
lettresElt.appendChild(document.createTextNode("..."));






