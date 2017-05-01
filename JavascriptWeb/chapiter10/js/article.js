var article = {
    titre: , //ici la valeur du input titre
    contenu: // ici la valeur du contenu
};

// Envoi
ajaxPost('http://localhost/javascript-web-srv/post_json.php', article,
    function () {});
