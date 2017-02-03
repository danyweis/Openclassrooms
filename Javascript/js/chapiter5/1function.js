// ICI ON CREE UNE FONCTION QUI S'APPELLE direBonjour

function direBonjour(){
  console.log('Bonjour');
}

console.log('Beginning of programme');

// ICI ON DEMANDE D'EXECUTER LE CONTENU DE LA FONCTION
// DANS CE CAS DIRE Bonjour
direBonjour();
console.log('End of the programme');

/*
**
***

L'appel d'une fonction s'éffectue en ecrivant le nom de la fonction suivi d'une paire de parenthèses.

maFonction();

***
**
*/

/*
**
***
****
*****
AUTRE POSSIBILITE
*****
****
***
**
*/

function direSalut() {
  return 'Salut'; // ici il faut faire un return et non un console.log
}

console.log('Beginning of the programme');
var resultat = direSalut();
console.log(resultat);
console.log('End of the programme');

// Déclaration dúne fonction nommée maFonction
function maFonction(){
    // Calcul de la valeur de retour
    // ....
    return valeurRetour;
}

//Récupération de la valeur de retour de maFonction
var valeur = maFonction();
// ...

/*
**
***
Si on essaie de récupérer la valeur de retour d'une fonction qui n'inclut pas d'instruction RETURN, on obtien la valeur JavaScript UNDEFINED.
***
**
*/

function maFonction() {
  // pas d'instrucyion return
}

var result = maFonction();

console.log(result); // Affiche undefined
