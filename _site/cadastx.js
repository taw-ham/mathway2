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
    inserir(email, nome, senha) {
        return fetch(this.url, {
            method: "POST",
            body: JSON.stringify(email, nome, senha),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(resposta => resposta.json());
    }
    listar() {
        return fetch(this.url, {
            method: "GET"
        }).then(resposta => resposta.json());
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
    inserir(nome, senha, email) {
        return fetch(this.url, {
            method: "POST",
            body: JSON.stringify(nome, senha, email),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(
            resposta => resposta.json());
    }
    listar() {
        return fetch(this.url, {
            method: "GET"
        }).then(
            resposta => resposta.json());
    }
}

let tipo_loginx;
$("#ramdom_code").hide("fast");
const tipo_userx = document.getElementsByName("tipo_login");
for (let i = 0; i <= tipo_userx.length - 1; i++) {
    tipo_userx[i].onclick = function () {
        tipo_loginx = event.target.id;
        (tipo_loginx);
        if (tipo_loginx === "bbx2") {
            $("#logx2").css('background', 'linear-gradient(lightblue,whitesmoke,whitesmoke)');
            $("#escolhaxa").css('background-color', 'lightblue');
            $("#obx02").hide("fast");
            $("#bbx2").css('background-color', 'blue');
            $("#ccx2").css('background-color', 'lightslategray');
            $("#wallx2").css('padding-bottom', '3%');
        } else if (tipo_loginx === "ccx2") {
            $("#logx2").css('background', 'linear-gradient(lightgreen,whitesmoke,whitesmoke)');
            $("#escolhaxa").css('background-color', 'lightgreen');
            $("#obx02").hide("fast");
            $("#ccx2").css('background-color', 'green');
            $("#bbx2").css('background-color', 'lightslategray');
            $("#wallx2").css('padding-bottom', '3%');
        }
    }
}

document.getElementById("fazer_cadastro").onclick = function () {
    const nome = document.getElementById("nome_cadastro").value;
    const senha = document.getElementById("senha_cadastro").value;
    const email = document.getElementById("email_cadastro").value;
    if (nome != "" && senha != "" && email != "") {
        if (tipo_loginx === "bbx2") {
            const aluno_service = new Aluno_Service(`https://bancodedados.tawham.repl.co/Alunos?email=${email}`)
            aluno_service.listar().then(resposta => {
                if (resposta.length > 0) {
                    swal('Cadastro Inválido!', '- e-mail existente em outra conta -', 'error')
                } else {
                    const combination = "1234567890abcdefghijklmnopqrstuvwxyz";
                    const encrypt_senha = CryptoJS.AES.encrypt(senha,combination);
                    document.getElementById("ramdom_code").innerText = encrypt_senha;
                    const senha_finish = document.getElementById("ramdom_code").textContent;
                    (senha_finish);
                    const aluno = new Aluno(email, nome, senha_finish);
                    const aluno_service2 = new Aluno_Service("https://bancodedados.tawham.repl.co/Alunos");
                    aluno_service2.inserir(aluno).then(resposta => {
                        window.location.assign("./index.html");
                    })
                }
            })

        } else if (tipo_loginx === "ccx2") {
            const professor_service = new ProfessorService(`https://bancodedados.tawham.repl.co/professores?email=${email}`);
            professor_service.listar().then(resposta => {
                if (resposta.length > 0) {
                    swal('Cadastro Inválido!', '- e-mail existente em outra conta -', 'error')

                } else {
                    const combination = "1234567890abcdefghijklmnopqrstuvwxyz";
                    const encrypt_senha =  CryptoJS.AES.encrypt(senha,combination);
                    document.getElementById("ramdom_code").innerText = encrypt_senha;
                    const senha_finish = document.getElementById("ramdom_code").textContent;
                    (senha_finish);
                    const professor_service = new ProfessorService("https://bancodedados.tawham.repl.co/professores");
                    const professor = new PROFESSOR(nome,senha_finish, email);
                    professor_service.inserir(professor).then(resposta => {
                        window.location.assign("./index.html");
                    })

                }
            })
        }
        if (tipo_loginx == "") {
            swal('Cadastro Inválido!', '- escolha um tipo de usuário -', 'error');
        }
    } else {
        swal('Cadastro Inválido!', '- preencha todos os campos -', 'error');
    }
}