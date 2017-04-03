var userBTN = document.getElementById("btnRechercher");
userBTN.addEventListener("click", function() {
    //console.log("hello");
    var user = document.getElementById("inputRechercher").value;
    recherch(user);
    user.textContent = "";
});

function recherch(user) {
    console.log(user);
    //    ajaxGet()
}