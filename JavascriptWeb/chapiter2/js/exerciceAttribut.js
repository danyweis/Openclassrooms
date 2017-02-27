function infoLiens() {
    var hrefs = document.querySelectorAll("a");
    console.log(hrefs.length);
    console.log(hrefs[0].getAttribute("href"));
    var last = (hrefs.length - 1);
    console.log(hrefs[last].getAttribute("href"));
}
infoLiens();

function possede(id, classe) {
    var instrument = document.getElementById(id);
    if (instrument !== null) {
        console.log(instrument.classList.contains(classe));
    } else {
        console.error("Aucun élément ne possède l'identifiant " + id);
    }
}
possede("saxophone", "bois"); // Doit afficher true
possede("saxophone", "cuivre"); // Doit afficher false
possede("trompette", "cuivre"); // Doit afficher true
possede("contrebasse", "cordes"); // Doit afficher une erreur
