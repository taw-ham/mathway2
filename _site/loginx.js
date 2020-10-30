

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
                $("#tipologinx").css('background-color', 'lightgreen');
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
            const aluno_service = new Aluno_Service(`https://bancodedados.tawham.repl.co/Alunos?email=${usuario}`);
            aluno_service.listar().then(resposta => {
                if (resposta.length === 0) {
                    swal('Login Inválido!', '- email -', 'error');
                } else {
                    const combination = "1234567890abcdefghijklmnopqrstuvwxyz";
                    const email = resposta[0].email;
                    let id = resposta[0].id;
                    id = id.toString();
                    const nome_user = resposta[0].nome;
                    const senha_banco =resposta[0].senha;
                    
                    const descypted_senha = CryptoJS.AES.decrypt(senha_banco,combination);
                    const senha_descrypted = descypted_senha.toString(CryptoJS.enc.Utf8);
                
                    (senha_descrypted)
                    if(senha == senha_descrypted){
                        const encrypted_id = CryptoJS.AES.encrypt(id,combination);
                        const encrypted_email = CryptoJS.AES.encrypt(email,combination);
                        const encrypted_nome = CryptoJS.AES.encrypt(nome_user,combination);
                        localStorage.setItem('id',encrypted_id);
                        localStorage.setItem('email',encrypted_email);
                        localStorage.setItem('nome',encrypted_nome);
                        window.location.assign("./pagina_aluno.html");
                    }else{
                        swal('Login Inválido!', '- Senha Incorreta -', 'error')
                    }
                }
            })
        } else if (tipo_loginx === "ccx") {
            let loginservice = new ProfessorService(`https://bancodedados.tawham.repl.co/professores?email=${usuario}`);
            loginservice.listar().then(results => {
                (results);
                if (results.length == 0) {
                    swal('Login Inválido!', '- email ou senha incorretos -', 'error');
                } else {
                    ("passou")
                    const combination = "1234567890abcdefghijklmnopqrstuvwxyz";
                    let id = results[0].id;
                    id = id.toString();
                    const email = results[0].email;
                    const nome_user = results[0].nome;
                    const senha_banco =results[0].senha;
                    const descypted_senha = CryptoJS.AES.decrypt(senha_banco,combination);
                    const senha_descrypted = descypted_senha.toString(CryptoJS.enc.Utf8);
                    (senha_descrypted);
                    if(senha == senha_descrypted){
                        const encrypted_id = CryptoJS.AES.encrypt(id,combination);
                        const encrypted_email = CryptoJS.AES.encrypt(email,combination);
                        const encrypted_nome = CryptoJS.AES.encrypt(nome_user,combination);
                        localStorage.setItem('id',encrypted_id);
                        localStorage.setItem('email',encrypted_email);
                        localStorage.setItem('nome',encrypted_nome);
                        window.location.assign("./professor_pagina.html");

                       
                        
                    }else{
                        swal('Login Inválido!', '- Senha Incorreta -', 'error')
                    }
                }
            })
            
        } else {
            swal('Login Inválido!', '- escolha seu tipo de usuário -', 'error');
        }
    }
