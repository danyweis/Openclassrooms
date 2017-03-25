// ==> MON CODE

ajaxGet("http://localhost:8888/javascript-web-srv/data/tableaux.json", function(reponse) {
    var reponseServer = JSON.parse(reponse);
    var titreElts = document.createElement("tr");
    var nomElt = document.createElement("th");
    nomElt.textContent = "Nom";
    var anneeElt = document.createElement("th");
    anneeElt.textContent = "Année";
    var auteurElt = document.createElement("th");
    auteurElt.textContent = "Auteur";
    console.log(titreElts);
    titreElts.appendChild(nomElt);
    titreElts.appendChild(anneeElt);
    titreElts.appendChild(auteurElt);
    document.getElementById("tabel").appendChild(titreElts);

    for (i = 0; i < reponseServer.length; i++) {
        console.log(i);
        var horizontalElts = document.createElement("tr");
        var leNomElt = document.createElement("td");
        leNomElt.textContent = reponseServer[i].nom;
        var lAnneeElt = document.createElement("td");
        lAnneeElt.textContent = reponseServer[i].annee;
        var lAuteurElt = document.createElement("td");
        lAuteurElt.textContent = reponseServer[i].auteur;
        //console.log(lAuteurElt);
        horizontalElts.appendChild(leNomElt);
        horizontalElts.appendChild(lAnneeElt);
        horizontalElts.appendChild(lAuteurElt);
        document.getElementById("tabel").appendChild(horizontalElts);

    }
});



// code de OPC il a mise le titre du tableau dans le html
/*
ajaxGet("http://localhost:8888/javascript-web-srv/data/tableaux.json", function(reponse) {
    var tableaux = JSON.parse(reponse);
    var tableauxElt = document.getElementById("tabel");
    tableaux.forEach(function(tableau) {
        // Cree une ligne de tableau HTML pour chaque tableau
        var ligneElt = document.createElement("tr");
        ligneElt.innerHTML = "<td>" + tableau.nom + "</td>" + "<td>" + tableau.annee + "</td>" + "<td>" + tableau.auteur + "</td>";
        tableauxElt.appendChild(ligneElt);
    });
});
*/