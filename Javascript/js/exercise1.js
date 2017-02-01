/*
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log('Bienvenue dans ce jeu de devinette !');

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
console.log('(La solution est ' + solution + ')');

// TODO : complétez le programme

var saisie = prompt('Deviner le numéreau au quel je pense:');
for(var i = 1; i<= 6; i++){
  if (saisie < solution){
    console.log(saisie + ' est trop petit');
    prompt('encore une fois');
  } else if (saisie > solution){
    console.log(saisie + ' est trop grand');
    prompt('encore une fois');
  } else if (i === 6){
    console.log('Perdu');
  } else {
    console.log('Bravo ls solution est ' + solution + '!\nEt seulement en ' + i + ' fois');
  }
}


/*while ((i <= 6) || (saisie !== solution)) {

  if (saisie < solution) {
    console.log('La ' + saisie + 'est trop petite');

    prompt('encore une fois');
    i++;
  } else if (saisie > solution) {
    console.log('La ' + saisie + ' est trop grand');
    i++;
    prompt('encore une fois');
  } else if (i === 6) {
    console.log('Perdu la solution était ' + solution + ' !');
  } else {
    console.log('Bravo la solution etait ' + solution + ',\n juste ' + i + ' essai(s)');
  }
}
/*    if (saisie === solution) {
        console.log("Bravo la solution etait " + solution + ",/n juste " + i + "essai(s)");
    } else {
        if (saisie < solution) {
            console.log(saisie + " est trop petit!");
            prompt("en reessaie:");
            i++;
        } else if (saisie > solution) {
            console.log(saisie + " est trop grand!");
            prompt("en reessaie:");
            i++;
        } else {
            console.log("Perdu .... La solution etait " + solution);
        }
    }
}
*/
