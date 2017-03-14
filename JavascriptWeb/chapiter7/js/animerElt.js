// ==> ANIMER DES ELEMENTS DE LA PAGE <== //

/* 

===> MISE EN COMMENTAIRE POUR EXEMPLE 2 <===
var cadre = document.getElementById("cadre");
var bloc = document.getElementById("bloc");

// Conversion en nombre du diametre du bloc (valeur de la forme "XXpx")
var diametreBloc = parseFloat(getComputedStyle(bloc).width);
// Valeur du deplacement en pixels
var vitesse = 0.1;

// Deplace le bloc sur sa gauche
function deplacerBloc() {
    // Conversion en nombre de la position gauche du bloc (valeur de la forme "XXpx")
    var xBloc = parseFloat(getComputedStyle(bloc).left);
    // Deplacement du bloc
    bloc.style.left = (xBloc + vitesse) + "px";
    // Demande au navigateur dáppeler deplacerBloc des que possible
    requestAnimationFrame(deplacerBloc);
}

// Debut de l'animation
requestAnimationFrame(deplacerBloc);
*/


// ==> Débuter une animation <==

//	Voici comment utiliser "requestAnimationFrame" en 
//	combinaison avec une fonction d'animation.

/*
function animer() {
    // code de l'animation
    // ...
    requestAnimationFrame(animer);
}
requestAnimationFrame(animer);
*/

// ==> Stopper une animation <==

var cadre = document.getElementById("cadre");
var bloc = document.getElementById("bloc");
var vitesse = 7;

var largeurBloc = parseFloat(getComputedStyle(bloc).width);
// Identifiant de l'animation
var animationId = null;

function deplacerBloc() {
    var xBloc = parseFloat(getComputedStyle(bloc).left);
    var xMax = parseFloat(getComputedStyle(cadre).width);
    // Si le bloc n'est pas encore au bout du cadre
    if (xBloc + largeurBloc <= xMax) {
        bloc.style.left = (xBloc + vitesse) + "px";
        animationId = requestAnimationFrame(deplacerBloc);
    } else {
        // Annulation de l'animation
        cancelAnimationFrame(animationId);
    }
}

animationId = requestAnimationFrame(deplacerBloc);

// ==> UNE ALTERNATIVE : LES ANIMATION CSS <== //

// ==> Exemple d'animation avec CSS ==> dans la file CSS