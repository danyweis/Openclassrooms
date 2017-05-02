var form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var data = new FormData(form);
    ajaxPost('http://localhost/javascript-web-srv/post_form.php', data,
        function (reponse) { // LE SERVEUR DE OPC=> http://oc-jswebsrv.herokuapp.com/article
            // CREATION DU MESSAGE DE CONFIRMATION
            var messageText = document.getElementById('messageText');
            var message = document.createElement('p');
            message.textContent = "Article ajouter avec succés";
            messageText.appendChild(message);
            console.log("ok");
            setTimeout(function () {
                messageText.innerHTML = ""; // LE MESSAGE REPART APRES 2 SEC
            }, 2000);
        });

});
