// import usuario from "./bd.js"


function verificarCredenciais() {
    const emailInformado = document.getElementById("email").value;
    const senhaInformada = document.getElementById("senha").value;

    if(emailInformado === usuario.email) {
        alert("E-mail infomado corretamente");
        if(senhaInformada === usuario.senha) {
            alert("Senha infomada corretamente");
            window.location = "home.html"
        } else {
            alert("Senha informada incorretamente!");
        }
    } else {
        alert("E-mail informado incorretamente!");
    }
}
