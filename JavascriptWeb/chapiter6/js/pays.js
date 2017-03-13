// Liste des pays

var listePays = [
    "Afghanistan",
    "Afrique du Sud",
    "Albanie",
    "Algérie",
    "Allemagne",
    "Andorre",
    "Angola",
    "Anguilla",
    "Antarctique",
    "Antigua-et-Barbuda",
    "Antilles néerlandaises",
    "Arabie saoudite",
    "Argentine",
    "Arménie",
    "Aruba",
    "Australie",
    "Autriche",
    "Azerbaïdjan"
];

// ==> MON CODE <== //

var inboxElt = document.querySelector("input");
inboxElt.addEventListener("input", function(e) {
    var suggestionBox = document.getElementById("suggestions");
    suggestionBox.innerHTML = "";

    for (var i = 0; i < listePays.length; i++) {

        var suggestion = document.createElement("div");
        suggestion.classList = "suggestion";

        if (e.target.value == "") {
            suggestionBox.innerHTML = "";
        } else if (listePays[i].indexOf(e.target.value) !== -1) {
            suggestion.textContent = listePays[i];
        }

        suggestionBox.appendChild(suggestion);
    }

});

// ==> CODE OPC <== //

var paysElt = document.querySelector("input");
var suggestionsElt = document.getElementById("suggestions");

// Gère le changement de la valeur saisie
paysElt.addEventListener("input", function() {
    suggestionsElt.innerHTML = ""; // Vidage de la liste des suggestions
    listePays.forEach(function(pays) {
        // Si valeur en cours de saisie correspond au début du pays
        if (pays.indexOf(paysElt.valeur) === 0) {
            var suggestionElt = document.createElement("div");
            suggestionElt.classList.add("suggestion");
            suggestionElt.textContent = pays;
            // Gère le lic sur une suggestion
            suggestionElt.addEventListener("click", function(e) {
                // Remplacement de la valeur saisie par le suggestion
                paysElt.value = e.target.textContent;
                // Vidage de la liste des suggestions
                suggestionsElt.innerHTML = "";
            });
            suggestionsElt.appendChild(suggestionElt);
        }
    });
});