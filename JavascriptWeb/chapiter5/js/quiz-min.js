var questions=[{enonce:"Combien font 2+2 ?",reponse:"2+2 = 4"},{enonce:"En quelle année Christophe Colombe a-t-il découvert lÁmérique ?",reponse:"1492"},{enonce:"On me trouve 2 fois dans l'année, 1 fois dans la semaine, mais pas du tout dans le jour... Qui suis-je ?",reponse:"La lettre N"}],i=1;questions.forEach(function(e){var n=document.createElement("strong");n.textContent="Question "+i+" : ";var t=document.createElement("i");t.textContent=e.enonce;var o=document.createElement("div");o.appendChild(n),o.appendChild(t);var a=document.createElement("div"),d=document.createElement("button");d.textContent="Afficher la re'ponse",a.appendChild(d),d.addEventListener("click",function(){var n=document.createElement("div");n.textContent=e.reponse,a.innerHTML="",a.appendChild(n)});var r=document.createElement("p");r.appendChild(o),r.appendChild(a),document.getElementById("contenu").appendChild(r),i++});