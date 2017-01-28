var notes = prompt("Dites moi votre moyenne :");
if ((notes >= 0) && (notes < 10)) {
    console.log("Je suis désoler mais avec " + notes + " vous devez refaire l'année");
} else if ((notes >= 10) && (notes <= 12)) {
    console.log("Avec " + notes + " de moyenne vous passez avec justèsse");
} else if ((notes > 12) && (notes <= 20)) {
    console.log("Avec " + notes + " de moyenne vous passez avec bravoure");
} else {
    console.log("Je sais pas ou vous avez passez votre Baccalaureat mais " + notes + " n'est pas une moyenne valide!");
}
