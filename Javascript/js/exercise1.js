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

var saisie = "";
var i = 0;

while ((saisie !== solution) && (i < 6)) {
  i++;
  saisie = Number(prompt('Deviner le numéreau au quel je pense:'));
  if (saisie > solution) {
    console.log(saisie + " est trop");
  } else if (saisie < solution) {
    console.log(saisie + " est pas assez");
  }
}

  if (saisie === solution) {
   console.log('Bravo la solution est ' + solution );
   console.log('est tout ça en ' + i + ' essai(s)');
  } else {
    console.log('Perdu ... la solution était ' + solution);
  }
