/*
document.querySelector('form').addEventListener('submit', function (e) {
    //e.preventDefault();
    var pseudoElt = document.getElementById('pseudo').value;
    var radios = document.getElementsByName("evaluation");
    var evalElt = "";
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            evalElt = radios[i].value;
        }
    }
    var messageElt = document.getElementById('message').value;
    var data = {
        pseudo: pseudoElt,
        evaluation: evalElt,
        message: messageElt,

    }
    console.log(data);
    ajaxPost('http://oc-jswebsrv.herokuapp.com/api/temoignage', data,
        function (reponse) {
            console.log('Le témoiniage ' + JSON.stringify(data) + ' a été envoyé au serveur');
        },
        true // Valeur du paramètre isJson 
    );
    var messageText = document.getElementById('messageText');
    var message = document.createElement('p');
    message.textContent = "Article ajouter avec succés";
    messageText.appendChild(message);
    console.log("ok");
    setTimeout(function () {
        messageText.innerHTML = ""; // LE MESSAGE REPART APRES 2 SEC
    }, 2000);
});

*/


//http://localhost/javascript-web-srv/post_json.php
//http://oc-jswebsrv.herokuapp.com/api/temoignage

// ==> OPC <== //

document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    var temoignage = {
        pseudo: e.target.elements.pseudo.value,
        evaluation: e.target.elements.evaluation.value,
        message: e.target.elements.message.value,
    };
    ajaxPost("http://oc-jswebsrv.herokuapp.com/api/temoignage", temoignage, function (reponse) {
        var messageElt = document.createElement('p');
        messageElt.textContent = "Témoignage ajouté.";
        document.getElementById('messageText').appendChild(messageElt);
        setTimeout(function () {
            messageText.innerHTML = ""; // LE MESSAGE REPART APRES 2 SEC
        }, 2000);
    }, true);
});
