//ICI ON CREE UNE FONCTION QUI S'APPELLE direBonjour

function direBonjour(){
  console.log('Bonjour');
}

console.log('Beginning of programme');

// ICI ON DEMANDE D'EXECUTER LE CONTENU DE LA FONCTION
//DANS CE CAS DIRE Bonjour
direBonjour();
console.log('End of the programme');

/*
*
*
AUTRE POSSIBILITE
*
*
*/

function direSalut(){
  return'Salut';
}

console.log('Beginning of the programme');
var resultat = direSalut();
console.log(resultat);
console.log('End of the programme');
