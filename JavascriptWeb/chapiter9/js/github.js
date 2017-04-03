var userBTN = document.getElementById("btnRechercher");
userBTN.addEventListener("click", function() {

    //console.log("hello");
    var user = document.getElementById("inputRechercher").value;
    recherch(user);
});

function recherch(user) {
    var box = document.getElementById("contenu");
    box.innerHTML = "";
    console.log(user);
    ajaxGet("https://api.github.com/users/" + user, function(reponse) {
        var info = JSON.parse(reponse);
        console.log(info.login);
        var login = document.createElement("h2");
        login.textContent = info.login;
        var avatar = document.createElement("img");
        avatar.src = info.avatar_url;
        var name = document.createElement("h4");
        name.textContent = info.name;
        var company = document.createElement("p");
        company.textContent = info.company;
        var siteWeb = document.createElement("a");
        siteWeb.textContent = info.blog;
        siteWeb.href = info.blog;
        siteWeb.target = "_blank"

        box.appendChild(login);
        box.appendChild(avatar);
        box.appendChild(name);
        box.appendChild(company);
        box.appendChild(siteWeb);
    });
}