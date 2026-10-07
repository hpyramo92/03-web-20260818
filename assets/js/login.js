const email = "admin@email.com";
const senha = "1234";

function verificarCredenciais() {
    const emailInformado = document.getElementById("email").value;
    const senhaInformada = document.getElementById("senha").value;

    if(emailInformado === email) {
        alert("E-mail infomado corretamente");
        if(senhaInformada === senha) {
            alert("Senha infomada corretamente");
            window.location = "home.html"
        } else {
            alert("Senha informada incorretamente!");
        }
    } else {
        alert("E-mail informado incorretamente!");
    }
}