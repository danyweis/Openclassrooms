var articlesElt=document.getElementById("articles");ajaxGet("https://oc-jswebsrv.herokuapp.com/api/articles",function(e){JSON.parse(e).forEach(function(e){var t=document.createElement("h2");t.textContent=e.titre;var n=document.createElement("p");n.textContent=e.contenu,articlesElt.appendChild(t),articlesElt.appendChild(n)})});var premMinElt=document.getElementById("premMin");ajaxGet("https://www.data.gouv.fr/api/1/organizations/premier-ministre/",function(e){var t=JSON.parse(e),n=document.createElement("p");n.textContent=t.description;var a=document.createElement("img");a.src=t.logo,premMinElt.appendChild(n),premMinElt.appendChild(a)}),ajaxGet("http://api.wunderground.com/api/50a65432f17cf542/conditions/q/France/Lyon.json",function(e){var t=JSON.parse(e),n=t.current_observation.temp_c,a=t.current_observation.relative_humidity,r=t.current_observation.icon_url,i=document.createElement("div");i.textContent="Il fait actuellement "+n+" &deg C et l'humiditié est de "+a;var c=document.createElement("img");c.src=r;var o=document.createElement("meteo");o.appendChild(i),o.appendChild(c)});