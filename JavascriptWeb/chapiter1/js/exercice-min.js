function afficherEnfant(e,o){"#text"===e.nodeName?console.error("Type de noeud incorrect"):o<0?console.error("Indice incorrect"):o>document.body.childNodes.length?console.error("Indice incorrect"):console.log(e.childNodes[o])}function afficherEnfant(e,o){e.nodeType===document.ELEMENT_NODE?o>=0&&o<e.childNodes.length?console.log(e.childNodes[o]):console.error("Indice incorrect"):console.error("Type de noeud incorrect")}afficherEnfant(document.body,1),afficherEnfant(document.body,-1),afficherEnfant(document.body,8),afficherEnfant(document.body.childNodes[0],0);