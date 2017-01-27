var nombre = Number(prompt("Entrez un nombre"));
if (nombre > 0) {
    console.log(nombre + " est positif");
}



// La notion de condition

if (true) {
    // la condition du if est toujours vraie :
    // les instructions de ce bloc seront toujours exécutées
}
if (false) {
    // la condition du if est toujours false :
    // les instructions de ce bloc ne seront jamais exécutées
}

// Operateur     **   Signification
// *************************************
// ===           **   égal à
// !==           **   différent de
// <             **   inférieur à
// <=            **   inférieur ou égal à
// >             **   supérieur à
// >=            **   supérieur ou égal à

var test = Number(prompt("Entrez un nombre :"));
if (test >= 0) {
    console.log(test + " est positif ou nul");
}
