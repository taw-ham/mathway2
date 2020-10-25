class Aluno {
    constructor(email, nome, senha) {
        this.email = email;
        this.nome = nome;
        this.senha = senha;
    }
}
class Aluno_Service {
    constructor(url) {
        this.url = url;
    }
    inserir(nome, senha) {
        return fetch(this.url, {
            method: "POST",
            body: JSON.stringify(nome, senha),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(resposta => resposta.json())
    }
    listar() {
        return fetch(this.url, {
            method: "GET"
        }).then(resposta => resposta.json())
    }
}
class PROFESSOR {
    constructor(nome, senha, email) {
        this.nome = nome;
        this.senha = senha;
        this.email = email;
    }
}
class ProfessorService {
    constructor(url) {
        this.url = url
    }
    listar() {
        return fetch(this.url, {
            method: "GET"
        }).then(resposta => resposta.json())
    }
    inserir(nome, senha) {
        return fetch(this.url, {
            method: "POST",
            body: JSON.stringify(nome, senha),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(resposta => resposta.json())
    }
}

let tipo_loginx;

let tipo_userx = document.getElementsByTagName("button");
for (let i = 0; i <= tipo_userx.length - 1; i++) {
    tipo_userx[i].onclick = function () {
        tipo_loginx = event.target.id
        if (tipo_loginx == "bbx") {
            $("#logx").css('background', 'linear-gradient(whitesmoke,lightblue)');
            $("#obx").hide("fast");
            $("#tipologinx").css('background-color', 'lightblue');
            $("#bbx").css('background-color', 'blue');
            $("#ccx").css('background-color', 'lightslategray');
            $("#wallx").css('padding-bottom', '7.2%');
        } else {
            $("#logx").css('background', 'linear-gradient(whitesmoke,lightgreen');
            $("#obx").hide("fast");
            $("#tipologinx").css('background-color', 'lightlimegreen');
            $("#ccx").css('background-color', 'green');
            $("#bbx").css('background-color', 'lightslategray');
            $("#wallx").css('padding-bottom', '7.2%');
        }
    }
}
document.getElementById("fazer_login").onclick = function () {
    const usuario = $("#nome_login").val();
    const senha = $("#senha_login").val();
    if (tipo_loginx == "bbx") {
        const aluno_service = new Aluno_Service(`https://yprto.sse.codesandbox.io/Alunos?email=${usuario}&senha=${senha}`);
        aluno_service.listar().then(resposta => {
            if (resposta.length === 0) {
                swal('Login Inválido!', '- email ou senha incorretos -', 'error');
            } else {
                console.log(resposta);
                const id_login = resposta[0].id;
                const nome_login = resposta[0].nome;
                localStorage.setItem('id', id_login);
                localStorage.setItem('e-mail', usuario);
                localStorage.setItem('nome', nome_login);
                window.location.assign("./pagina_aluno.html");
            }
        })
    } else if (tipo_loginx === "ccx") {
        let loginservice = new ProfessorService(`https://bancodedados.tawham.repl.co/professores?email=${usuario}&senha=${senha}`);
        loginservice.listar().then(results => {
            if (results.length === 0) {
                swal('Login Inválido!', '- email ou senha incorretos -', 'error');
            } else {
                console.log(results);
                const id = results[0].id;
                const email = results[0].email;
                const nome_user = results[0].nome;
                localStorage.setItem('id', id);
                localStorage.setItem('email', email);
                localStorage.setItem('nome', nome_user);
                window.location.assign("./professor_pagina.html")
            }
        })
    } else {
        swal('Login Inválido!', '- escolha seu tipo de usuário -', 'error');
    }
}