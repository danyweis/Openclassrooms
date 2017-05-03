var form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var data = new FormData(form);
    ajaxPost('http://oc-jswebsrv.herokuapp.com/article', data, function (reponse) {
        // CREATION DU MESSAGE DE CONFIRMATION
        var message = document.createElement('p');
        message.textContent = "Article ajouter avec succés";
        document.getElementById('messageText').appendChild(message);
        //console.log("ok");
        setTimeout(function () {
            messageText.innerHTML = ""; // LE MESSAGE REPART APRES 2 SEC
        }, 2000);
    });

});
//http://localhost/javascript-web-srv/post_form.php'
// LE SERVEUR DE OPC=> http://oc-jswebsrv.herokuapp.com/article
