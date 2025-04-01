const botaologin = document.querySelector("#button-login");

botaologin.addEventListener("click", () => {
    const inputEmail = document.querySelector("#email");
    const inputSenha = document.querySelector("#senha");

    logar(inputEmail.value, inputSenha.value)
});

function logar(email, senha) {
    let valido = validarInfo(email, senha)

    if (!valido) {
        return;
    }

    let urlBase = "https://reqres.in/"
    let options = {
        method: "POST",
        headers: {
            'content-type': "application/json"
        },
        body: JSON.stringify({
            email: email,
            password: senha,
        })
    }
    fetch(urlBase + "api/login", options)
        .then(resposta => {
            if (!resposta.ok) {
                alert("infomações incorretas")
                return;
            }
            else {
                alert("Redirecionando para tela de login")
                window.location.href = "/home/index.html"
            }
        })
}

function validarInfo(email, senha) {
    if (email == "" || senha == "") {
        alert("email ou senha vazio")
        return false;
    }
    return true;
}

