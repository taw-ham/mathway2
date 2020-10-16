class Sala {
    constructor(participantes, participantes_id) {
        this.participantes = participantes;
        this.participantes_id = participantes_id;
    }
}

class Sala_Service {
    constructor(url) {
        this.url = url
    }
    listar() {
        return fetch(this.url, {
            method: "GET"
        }).then(resposta => resposta.json())
    }
    atualizar(participantes, participantes_id) {
        return fetch(this.url, {
            method: "PATCH",
            body: JSON.stringify(participantes, participantes_id),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(resposta => resposta.json())
    }
}
class NOTA_ALUNO_2 {
    constructor(nota, perguntas_certas, perguntas_erradas) {
        this.nota = nota;
        this.perguntas_certas = perguntas_certas;
        this.perguntas_erradas = perguntas_erradas;
    }
}
class Nota {
    constructor(nome_aluno, nota, id_aluno, id_lista_teorica, nome_lista_teorica, perguntas_certas, perguntas_erradas, perguntas_nao_feitas, situacao, data_de_entrega) {
        this.nome_aluno = nome_aluno;
        this.nota = nota;
        this.id_aluno = id_aluno;
        this.id_lista_teorica = id_lista_teorica;
        this.nome_lista_teorica = nome_lista_teorica
        this.perguntas_certas = perguntas_certas;
        this.perguntas_erradas = perguntas_erradas;
        this.perguntas_nao_feitas = perguntas_nao_feitas;
        this.situacao = situacao;
        this.data_de_entrega = data_de_entrega;
    }
}
class Nota_Service {
    constructor(url) {
        this.url = url;
    }
    inserir(nome_aluno, nota, id_aluno, id_lista_teorica, nome_lista_teorica, perguntas_certas, perguntas_erradas, perguntas_nao_feitas, situacao, data_de_entrega) {
        return fetch(this.url, {
            method: "POST",
            body: JSON.stringify(nome_aluno, nota, id_aluno, id_lista_teorica, nome_lista_teorica, perguntas_certas, perguntas_erradas, perguntas_nao_feitas, situacao, data_de_entrega),
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
class NOTA_SERVIDOR {
    constructor(nome_aluno, nota, id_aluno, id_lista_teorica_servidor, nome_lista_teorica, perguntas_certas, perguntas_erradas) {
        this.nome_aluno = nome_aluno;
        this.nota = nota;
        this.id_aluno = id_aluno;
        this.id_lista_teorica = id_lista_teorica_servidor;
        this.nome_lista_teorica = nome_lista_teorica
        this.perguntas_certas = perguntas_certas;
        this.perguntas_erradas = perguntas_erradas;
    }
}

class NOTA_SERVIDOR_SERVICE {
    constructor(url) {
        this.url = url;
    }
    inserir(nome_aluno, nota, id_aluno, id_lista_teorica_servidor, nome_lista_teorica, perguntas_certas, perguntas_erradas) {
        return fetch(this.url, {
            method: "POST",
            body: JSON.stringify(nome_aluno, nota, id_aluno, id_lista_teorica_servidor, nome_lista_teorica, perguntas_certas, perguntas_erradas),
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
    atualizar(nota, perguntas_certas, perguntas_erradas) {
        return fetch(this.url, {
            method: "PATCH",
            body: JSON.stringify(nota, perguntas_certas, perguntas_erradas),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(resposta => resposta.json())
    }
}
class NOTA_ALUNO {
    constructor(nome_aluno, nota, id_aluno, id_lista_teorica_aluno, nome_lista_teorica, perguntas_certas, perguntas_erradas) {
        this.nome_aluno = nome_aluno;
        this.nota = nota;
        this.id_aluno = id_aluno;
        this.id_lista_teorica = id_lista_teorica_aluno;
        this.nome_lista_teorica = nome_lista_teorica
        this.perguntas_certas = perguntas_certas;
        this.perguntas_erradas = perguntas_erradas;
    }
}
class NOTA_ALUNO_SERVICE {
    constructor(url) {
        this.url = url;
    }
    inserir(nome_aluno, nota, id_aluno, id_lista_teorica_aluno, nome_lista_teorica, perguntas_certas, perguntas_erradas) {
        return fetch(this.url, {
            method: "POST",
            body: JSON.stringify(nome_aluno, nota, id_aluno, id_lista_teorica_aluno, nome_lista_teorica, perguntas_certas, perguntas_erradas),
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
    atualizar(nota, perguntas_certas, perguntas_erradas) {
        return fetch(this.url, {
            method: "PATCH",
            body: JSON.stringify(nota, perguntas_certas, perguntas_erradas),
            headers: {
                'Content-Type': 'application/json'

            }

        }).then(resposta => resposta.json())


    }
}
class Comentario {
    constructor(nome_aluno, comentario, id_aluno) {
        this.nome_aluno = nome_aluno;
        this.comentario = comentario;
        this.id_aluno = id_aluno
    }
}
class Comentario_Service {
    constructor(url) {
        this.url = url;
    }
    inserir(nome_aluno, comentario, id_aluno) {
        return fetch(this.url, {
            method: "POST",
            body: JSON.stringify(nome_aluno, comentario, id_aluno),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(resposta => resposta.json())
    }
    listar() {
        return fetch(this.url, {
            method: "GET"
        }).then(resposta => resposta.json());
    }
}
class Pergunta_Service {
    constructor(url) {
        this.url = url;
    }
    listar() {
        return fetch(this.url, {
            method: "GET"
        }).then(resposta => resposta.json());
    }
}
class Lista_Teorica_Service {
    constructor(url) {
        this.url = url;
    }
    listar() {
        return fetch(this.url, {
            method: "GET"
        }).then(resposta => resposta.json())
    }
}
class Lista_Teorica_Aluno {
    constructor(nome, id_criador, perguntas, opcoes, opcoes_certas) {
        this.nome = nome;
        this.id_criador = id_criador;
        this.perguntas = perguntas;
        this.opcoes = opcoes;
        this.opcoes_certas = opcoes_certas;
    }
}
class Lista_Teorica_Aluno_Service {
    constructor(url) {
        this.url = url;
    }
    listar() {
        return fetch(this.url, {
            method: "GET"
        }).then(resposta => resposta.json())
    }
    inserir(nome, id_criador, perguntas, opcoes, opcoes_certas) {
        return fetch(this.url, {
            method: "POST",
            body: JSON.stringify(nome, id_criador, perguntas, opcoes, opcoes_certas),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(resposta => resposta.json())
    }
}
class Lista_Teorica_Servidor {
    constructor(nome, id_aluno, perguntas, opcoes, opcoes_certas) {
        this.nome = nome;
        this.id_aluno = id_aluno;
        this.perguntas = perguntas;
        this.opcoes = opcoes;
        this.opcoes_certas = opcoes_certas;

    }
}
class Lista_Teorica_Servidor_Service {
    constructor(url) {
        this.url = url;
    }
    inserir(nome, id_aluno, perguntas, opcoes, opcoes_certas) {
        return fetch(this.url, {
            method: "POST",
            body: JSON.stringify(nome, id_aluno, perguntas, opcoes, opcoes_certas),
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
const id_login = localStorage.getItem('id');
const email_login = localStorage.getItem('e-mail');
const nome_login = localStorage.getItem('nome');
const logout = document.getElementById("logout");
logout.onclick = function () {
    localStorage.removeItem('id');
    localStorage.removeItem('nome');
    localStorage.removeItem('e-mail');
}
document.getElementById("nome_user").innerText = `Nome: ${nome_login}`;
document.getElementById("email_user").innerText = `E-mail: ${email_login}`
$("#fazer_perguntas_erradas").hide("fast")
$("#escolha_de_sala").hide("fast");
$("#area_escolha_lista_teorica").hide("fast");
$("#fazer_exercicio_lista_teorica").hide("fast");
$("#termino_exercicio").hide("fast");
$("#escolha_modo_exercicio").hide("fast");
$("#tema_lista_teorica").hide("fast");
$("#criacao_lista_teorica").hide("fast");
$("#lugar_de_notas").hide("fast");
$("#lugar_entrada_sala").hide("fast");
$("#comentario").show("fast");
$("#place_lista_teoricas").hide("fast");
$("#infalunx").hide("fast");
$("#codeprofx").hide("fast");
$("#codeprofx2").hide("fast");

document.getElementById("voltar_area_de_escolhas_inicial2").onclick = function () {
    $("#wallalunx").css('padding-bottom', '32%');
    $("#area_de_escolhas").show("fast");
    $("#lugar_entrada_sala").hide("fast");
    $("#comentario").show("fast");
}

let ul = document.getElementById("lugar_comentario");
let comentario_service = new Comentario_Service("https://whispering-hollows-11624.herokuapp.com/comentario");
comentario_service.listar().then(resposta => {
    for (let i = 0; i <= resposta.length - 1; i++) {
        let li = document.createElement("li");
        let span_nome = document.createElement("span");
        let span_comentario = document.createElement("span");
        let br = document.createElement("br")
        span_nome.innerHTML = resposta[i].nome_aluno;
        span_comentario.innerHTML = resposta[i].comentario;
        li.append(span_nome);
        li.append(br);
        li.append(span_comentario);
        ul.append(li);
    }
})
document.getElementById("enviar_comentario").onclick = function () {
    let ul = document.getElementById("lugar_comentario");
    $("#lugar_comentario").empty();
    let comentario = $("#comentario_user").val();
    if (comentario == "") {
        swal('Comentário Inválido', '- digite alguma coisa -', 'error')

    } else {
        document.getElementById("comentario_user").value = ""

        let comentario_class = new Comentario(nome_login, comentario, id_login);
        let comentario_service = new Comentario_Service("https://whispering-hollows-11624.herokuapp.com/comentario")
        comentario_service.inserir(comentario_class).then(resposta => {
            console.log(resposta);
            comentario_service.listar().then(resposta => {
                for (let i = 0; i <= resposta.length - 1; i++) {
                    let li = document.createElement("li");
                    let span_nome = document.createElement("span");
                    let span_comentario = document.createElement("span");
                    let br = document.createElement("br")
                    span_nome.innerHTML = resposta[i].nome_aluno;
                    span_comentario.innerHTML = resposta[i].comentario;
                    li.append(span_nome);
                    li.append(br);
                    li.append(span_comentario);
                    ul.append(li);
                }
            })
        })
    }
}
document.getElementById("entrar_sala").onclick = function () {
    $("#comentario").hide("fast");
    $("#area_de_escolhas").hide("fast");
    $("#lugar_entrada_sala").show("fast");
    document.getElementById("salvar_codigo").onclick = function () {
        let codigo_sala = document.getElementById("codigo_sala").value;
        if (codigo_sala == "") {
            swal('Código Inválido', '- insira algum código -', 'error');
        } else {
            console.log(codigo_sala)
            let sala_service = new Sala_Service(`https://whispering-hollows-11624.herokuapp.com/salas?codigo=${codigo_sala}`)
            sala_service.listar().then(resposta => {
                console.log(resposta);
                if (resposta.length > 0) {
                    let id_sala = resposta[0].id
                    let participantes = (resposta[0].participantes);
                    let participantes_id = (resposta[0].participantes_id);
                    participantes.push(email_login);
                    participantes_id.push(id_login);
                    let sala = new Sala(participantes, participantes_id);
                    let sala_service = new Sala_Service(`https://whispering-hollows-11624.herokuapp.com/salas/${id_sala}`)
                    sala_service.atualizar(sala).then(resposta => {
                        console.log(resposta)
                        location.reload();
                    })

                } else {
                    swal('Código Inválido', '- esta sala não existe -', 'error');
                }
            })
        }
    }
}
document.getElementById("notas").onclick = function () {
    $("#wallalunx").css('padding-bottom', '36%');
    $("#comentario").hide("fast");
    $("#area_de_escolhas").hide("fast");
    $("#lugar_de_notas").show("fast");
    let boletim = document.getElementById("boletim");
    let titulo_table = document.createElement("th");
    titulo_table.innerHTML = "Listas teóricas | Notas"
    titulo_table.setAttribute('colspan', 4);
    boletim.append(titulo_table);
    let nota_service = new Nota_Service(`https://whispering-hollows-11624.herokuapp.com/notas_professor?id_aluno=${id_login}`);
    nota_service.listar().then(resposta => {
        for (let i = 0; i <= resposta.length - 1; i++) {
            const acertos = resposta[i].perguntas_certas;
            const erros = resposta[i].perguntas_erradas
            let tr = document.createElement("tr");
            let td_nome = document.createElement("td");
            let td_nota = document.createElement("td");
            let td_acertos = document.createElement("td");
            let td_erros = document.createElement("td")
            td_nome.innerHTML = resposta[i].nome_lista_teorica;
            td_nota.innerHTML = resposta[i].nota;
            td_acertos.innerHTML = "acertos: " + acertos.length;
            td_erros.innerHTML = "erros: " + erros.length;
            tr.append(td_nome);
            tr.append(td_nota);
            tr.append(td_acertos);
            tr.append(td_erros);
            boletim.append(tr);
        }
    })
    let nota_service2 = new Nota_Service(`https://whispering-hollows-11624.herokuapp.com/notas_servidor?id_aluno=${id_login}`);
    nota_service2.listar().then(resposta => {
        
        for (let i = 0; i <= resposta.length - 1; i++) {
            const acertos = resposta[i].perguntas_certas;
            const erros = resposta[i].perguntas_erradas
            let tr = document.createElement("tr");
            let td_nome = document.createElement("td");
            let td_nota = document.createElement("td");
            let td_acertos = document.createElement("td");
            let td_erros = document.createElement("td")
            td_nome.innerHTML = resposta[i].nome_lista_teorica;
            td_nota.innerHTML = resposta[i].nota;
            td_acertos.innerHTML = "acertos: " + acertos.length;
            td_erros.innerHTML = "erros: " + erros.length;
            tr.append(td_nome);
            tr.append(td_nota);
            tr.append(td_acertos);
            tr.append(td_erros);
            boletim.append(tr);
        }
    })
    let nota_service3 = new Nota_Service(`https://whispering-hollows-11624.herokuapp.com/notas_aluno?=id_aluno=${id_login}`)
    nota_service3.listar().then(resposta => {
        for (let i = 0; i <= resposta.length - 1; i++) {
            const acertos = resposta[i].perguntas_certas;
            const erros = resposta[i].perguntas_erradas
            let tr = document.createElement("tr");
            let td_nome = document.createElement("td");
            let td_nota = document.createElement("td");
            let td_acertos = document.createElement("td");
            let td_erros = document.createElement("td");
            td_nome.innerHTML = resposta[i].nome_lista_teorica;
            td_nota.innerHTML = resposta[i].nota;
            td_acertos.innerHTML = "acertos: " + acertos.length;
            td_erros.innerHTML = "erros: " + erros.length;
            tr.append(td_nome);
            tr.append(td_nota);
            tr.append(td_acertos);
            tr.append(td_erros);
            boletim.append(tr);
        }

    })
    document.getElementById("voltar_area_de_escolhas_inicial").onclick = function () {
        $("#wallalunx").css('padding-bottom', '32%');
        $("#area_de_escolhas").show("fast");
        $("#lugar_de_notas").hide("fast");
        $("#boletim").empty();
        $("#comentario").show("fast");
    }
}
document.getElementById("exercicios").onclick = function () {
    $("#muralxalun").hide("fast");
    $("#wallalunx").css('padding-bottom', '12%');
    $("#infalunx").show("fast");
    $("#codeprofx").show("fast");
    $("#area_de_escolhas").hide("fast");
    $("#escolha_modo_exercicio").show("fast");
    $("#comentario").hide("fast");
    document.getElementById("voltar_da_area_escolha_modo_exercicio").onclick = function () {
        $("#muralxalun").show("fast");
        $("#wallalunx").css('padding-bottom', '32%');
        $("#codeprofx").hide("fast");
        $("#infalunx").hide("fast");
        $("#escolha_modo_exercicio").hide("fast");
        $("#area_de_escolhas").show("fast");
        $("#comentario").show("fast");
    }
    document.getElementById("historico_listas_teoricas_server").onclick = function () {
        $("#codeprofx").hide("fast");
        $("#infalunx").show("fast");
        $("#wallalunx").css('padding-bottom', '30%');
        $("#escolha_modo_exercicio").hide("fast");
        $("#place_lista_teoricas").show("fast");
        let ul = document.getElementById("escolha_lista_teorica");
        const lista_teorica_servidor_service = new NOTA_SERVIDOR_SERVICE(`https://whispering-hollows-11624.herokuapp.com/notas_servidor?id_aluno=${id_login}`);
        lista_teorica_servidor_service.listar().then(resposta => {
            for (let i = 0; i <= resposta.length - 1; i++) {
                let li = document.createElement("li");
                let button = document.createElement("button");
                button.setAttribute('id', resposta[i].id_lista_teorica);
                button.innerHTML = resposta[i].nome_lista_teorica;
                button.setAttribute("class", "btn btn-primary");
                li.append(button);
                ul.append(li);
                button.onclick = function () {
                    $("#infalunx").hide("fast");
                    const id_lista_teorica = event.target.id;
                    console.log(id_lista_teorica);
                    const lista_teorica_servidor_service = new Lista_Teorica_Servidor_Service(`https://yprto.sse.codesandbox.io/Lista_Teorica_Servidor/${id_lista_teorica}`);
                    lista_teorica_servidor_service.listar().then(resposta => {
                        console.log(resposta);
                        let lista_pergunta_server;
                        let opcoes_server;
                        let opcoes_corretas_server;
                        let lista_opcoes_falsas = [1, 2, 3, 4, 5];
                        let posicao_pergunta = 0;
                        let posicao_opcoes = 0;
                        let posicao_certa = [];
                        let posicao_erradas_perguntas = [];
                        let posicao_opcoes_certas = 0;
                        let lista_perguntas_erradas_usuario = [];
                        let lista_perguntas_certas_user = []
                        let t_number = 1;
                        let nota = 0;
                        let nota_final = 0;
                        let lista_opcoes2s = [];
                        let opcoes_correta2 = [];
                        lista_pergunta_server = resposta.perguntas
                        opcoes_server = resposta.opcoes
                        opcoes_corretas_server = resposta.opcoes_certas;
                        console.log(lista_pergunta_server);
                        opcoes_server.push(lista_opcoes_falsas);
                        $("#place_lista_teoricas").hide("fast");
                        $("#fazer_exercicio_lista_teorica").show("fast");
                        let lugar_opcoes_resposta = document.querySelectorAll("#escolha");
                        let input_radio = document.querySelectorAll("#valor");
                        let lugar_perguntas = document.getElementById("place_perguntas");
                        lugar_perguntas.innerHTML = `${t_number}/${lista_pergunta_server.length} ${lista_pergunta_server[posicao_pergunta]}`;
                        for (let i = 0; i <= lugar_opcoes_resposta.length - 1; i++) {
                            lugar_opcoes_resposta[i].innerHTML = opcoes_server[posicao_opcoes][i];
                            input_radio[i].setAttribute('value', opcoes_server[posicao_opcoes][i]);
                        }
                        document.getElementById("proxima_pergunta").onclick = function () {
                            $("#wallalunx").css('padding-bottom', '20%');
                            let input_radio_situacao = $("input[name='opcoes']:checked").val();
                            console.log(input_radio_situacao)
                            if (typeof input_radio_situacao != "undefined") {
                                if (opcoes_corretas_server[posicao_opcoes_certas] == input_radio_situacao) {
                                    lista_perguntas_certas_user.push(lista_pergunta_server[posicao_pergunta]);
                                    posicao_certa.push(posicao_pergunta + 1)
                                    console.log(lista_perguntas_certas_user);
                                    swal('Certa Resposta!', '<img height="6%" width="6%" src="./fotis/smile.png" />  parabéns', 'success');
                                    nota += 100
                                } else {
                                    lista_perguntas_erradas_usuario.push(lista_pergunta_server[posicao_pergunta])
                                    posicao_erradas_perguntas.push(posicao_pergunta + 1);
                                    console.log(posicao_erradas_perguntas);
                                    for (let i = 0; i <= 4; i++) {
                                        lista_opcoes2s.push(opcoes_server[posicao_opcoes][i]);
                                        console.log(lista_opcoes2s);
                                    }
                                    console.log(lista_opcoes2s)
                                    opcoes_correta2.push(opcoes_corretas_server[posicao_opcoes_certas]);
                                    swal('Resposta Errada!', '<img height="6%" width="6%" src="./fotis/sad.png" />  estude mais um pouco', 'error')
                                }
                                t_number++;
                                posicao_pergunta++;
                                posicao_opcoes++;
                                posicao_opcoes_certas++;

                                let input_radio_checker = $("input[name='opcoes']")
                                for (let i = 0; i <= input_radio_checker.length - 1; i++) {
                                    input_radio_checker[i].checked = false;
                                }
                                lugar_perguntas.innerHTML = `${t_number}/${lista_pergunta_server.length})  ${lista_pergunta_server[posicao_pergunta]}`;
                                for (let i = 0; i <= lugar_opcoes_resposta.length - 1; i++) {
                                    lugar_opcoes_resposta[i].innerHTML = opcoes_server[posicao_opcoes][i];
                                    input_radio[i].setAttribute('value', opcoes_server[posicao_opcoes][i]);
                                }
                                if (posicao_pergunta == lista_pergunta_server.length) {
                                    console.log("termino lista");
                                    console.log("termino da lista teórica");
                                    $("#fazer_exercicio_lista_teorica").hide("fast");
                                    $("#termino_exercicio").show("fast");
                                    nota = parseInt((nota / lista_pergunta_server.length).toFixed(0));
                                    nota_final = nota;
                                    $("#lugar_nota").text(`Sua nota foi ${nota} | acertos: ${lista_perguntas_certas_user.length}, erros: ${lista_perguntas_erradas_usuario.length}`)
                                    posicao_pergunta = 0;
                                    nota = 0;
                                    posicao_opcoes = 0;
                                    posicao_opcoes_certas = 0;
                                    t_number = 1;
                                    let ul_resposta_certa = document.getElementById("reposta_certa");
                                    let ul_resposta_errada = document.getElementById("pergunta_errada");
                                    for (let i = 0; i <= lista_perguntas_certas_user.length - 1; i++) {
                                        let li = document.createElement("li");
                                        li.setAttribute('id', 'certas')
                                        let button = document.createElement("button");
                                        button.innerHTML = "V";
                                        button.setAttribute('id', 'perguntas_certas');
                                        li.innerHTML = `${posicao_certa[i]}) ${lista_perguntas_certas_user[i]}`;
                                        li.append(button);
                                        ul_resposta_certa.append(li);
                                    }
                                    for (let i = 0; i <= lista_perguntas_erradas_usuario.length - 1; i++) {
                                        let li = document.createElement("li");
                                        let button = document.createElement("button");
                                        button.innerHTML = "X";
                                        button.setAttribute('id', 'perguntas_erradas');
                                        li.innerHTML = `${posicao_erradas_perguntas[i]}) ${lista_perguntas_erradas_usuario[i]}`;
                                        li.append(button);
                                        ul_resposta_errada.append(li);

                                    }
                                    if (lista_perguntas_erradas_usuario.length > 0) {
                                        $("#fazer_perguntas_erradas").show("fast");
                                    }
                                    document.getElementById("voltar_escolha_lista_teorica").onclick = function () {
                                        $("#wallalunx").css('background-image', 'url("./fotis/wood.png")');
                                        $("#wallalunx").css('padding-bottom', '26%');
                                        $("#infalunx").show("fast");
                                        $("#termino_exercicio").hide("fast");
                                        $("#place_lista_teoricas").show("fast");
                                        $("#lugar_nota").empty();

                                        $("#reposta_certa").empty();
                                        $("#pergunta_errada").empty();
                                        t_number = 1;
                                        lugar_perguntas.innerHTML = `${t_number} ${lista_pergunta_server.length})`
                                        let nota_servidor_service = new NOTA_SERVIDOR_SERVICE(`https://whispering-hollows-11624.herokuapp.com/notas_servidor?id_lista_teorica=${id_lista_teorica}&id_aluno=${id_login}`);
                                        nota_servidor_service.listar().then(resposta => {
                                            console.log(resposta);
                                            const id = resposta[0].id;
                                            console.log(id);
                                            const nota_servidor_service = new NOTA_SERVIDOR_SERVICE(`https://whispering-hollows-11624.herokuapp.com/notas_servidor/${id}`)
                                            nota_servidor_service.listar().then(resposta => {
                                                console.log(resposta)
                                                const nota_aluno = new NOTA_ALUNO_2(nota_final, lista_perguntas_certas_user, lista_perguntas_erradas_usuario)
                                                nota_servidor_service.atualizar(nota_aluno).then(resposta => {
                                                    console.log(resposta)
                                                })

                                            })

                                        })

                                    }

                                    document.getElementById("fazer_perguntas_erradas").onclick = function () {
                                        $("#reposta_certa").empty();
                                        $("#pergunta_errada").empty();
                                        $("#lugar_nota").empty();
                                        let pergunta_final_errada = [];
                                        let pergunta_certa_final = [];
                                        posicao_erradas_perguntas = []
                                        posicao_certa = []

                                        $("#termino_exercicio").hide("fast");
                                        $("#fazer_exercicio_lista_teorica").show("fast");
                                        lugar_perguntas.innerHTML = `${t_number}/${lista_perguntas_erradas_usuario.length})  ${lista_perguntas_erradas_usuario[posicao_pergunta]}`;
                                        for (let i = 0; i <= lugar_opcoes_resposta.length - 1; i++) {
                                            lugar_opcoes_resposta[i].innerHTML = lista_opcoes2s[posicao_opcoes];
                                            input_radio[i].setAttribute('value', lista_opcoes2s[posicao_opcoes]);
                                            posicao_opcoes++;
                                        }
                                        document.getElementById("proxima_pergunta").onclick = function () {
                                            $("#wallalunx").css('padding-bottom', '20%');
                                            let input_radio_situacao = $("input[name='opcoes']:checked").val();
                                            console.log(input_radio_situacao)
                                            if (typeof input_radio_situacao != "undefined") {
                                                if (opcoes_correta2[posicao_opcoes_certas] == input_radio_situacao) {
                                                    pergunta_certa_final.push(lista_perguntas_erradas_usuario[posicao_pergunta]);
                                                    posicao_certa.push(posicao_pergunta + 1)
                                                    swal('Certa Resposta!', '<img height="6%" width="6%" src="./fotis/smile.png" />  parabéns', 'success');
                                                    nota += 100;

                                                } else {
                                                    pergunta_final_errada.push(lista_perguntas_erradas_usuario[posicao_pergunta]);
                                                    posicao_erradas_perguntas.push(posicao_pergunta + 1);
                                                    console.log(lista_perguntas_erradas_usuario, lista_opcoes2s, opcoes_correta2);
                                                    swal('Resposta Errada!', '<img height="6%" width="6%" src="./fotis/sad.png" />  estude mais um pouco', 'error')
                                                }
                                                t_number++;
                                                posicao_pergunta++;
                                                posicao_opcoes_certas++;
                                                let input_radio_checker = $("input[name='opcoes']")
                                                for (let i = 0; i <= input_radio_checker.length - 1; i++) {
                                                    input_radio_checker[i].checked = false;
                                                }
                                                lugar_perguntas.innerHTML = `${t_number}/${lista_perguntas_erradas_usuario.length})  ${lista_perguntas_erradas_usuario[posicao_pergunta]}`;
                                                for (let i = 0; i <= lugar_opcoes_resposta.length - 1; i++) {
                                                    lugar_opcoes_resposta[i].innerHTML = lista_opcoes2s[posicao_opcoes];
                                                    input_radio[i].setAttribute('value', lista_opcoes2s[posicao_opcoes]);
                                                    posicao_opcoes++
                                                }
                                                let encerrar = lista_perguntas_erradas_usuario.length
                                                if (encerrar == posicao_pergunta) {
                                                    $("#fazer_exercicio_lista_teorica").hide("fast");
                                                    $("#termino_exercicio").show("fast");
                                                    $("#fazer_perguntas_erradas").hide("fast");
                                                    t_number = 1;
                                                    lugar_perguntas.innerHTML = `${t_number}/${lista_pergunta_server.length})`
                                                    nota = parseInt((nota / lista_pergunta_server.length).toFixed(0));
                                                    nota_final += nota;
                                                    $("#lugar_nota").text(`A sua nota foi: ${nota_final} | acertos: ${pergunta_certa_final.length}, erros: ${pergunta_final_errada.length}`)
                                                    nota = 0;
                                                    posicao_pergunta = 0;
                                                    posicao_opcoes = 0;
                                                    posicao_opcoes_certas = 0;
                                                    t_number = 1;
                                                    for (let i = 0; i <= pergunta_certa_final.length - 1; i++) {
                                                        lista_perguntas_certas_user.push(pergunta_certa_final[i])
                                                    }
                                                    let nota_servidor_service = new NOTA_SERVIDOR_SERVICE(`https://whispering-hollows-11624.herokuapp.com/notas_servidor?id_lista_teorica=${id_lista_teorica}&id_aluno=${id_login}`)
                                                    nota_servidor_service.listar().then(resposta => {
                                                        let id = resposta[0].id
                                                        console.log(id);
                                                        let nota_servidor_service = new NOTA_SERVIDOR_SERVICE(`https://whispering-hollows-11624.herokuapp.com/notas_servidor/${id}`)
                                                        let nota_aluno = new NOTA_ALUNO_2(nota_final, lista_perguntas_certas_user, pergunta_final_errada)
                                                        nota_servidor_service.atualizar(nota_aluno).then(resposta => {
                                                            console.log(resposta)
                                                        })
                                                    })

                                                    for (let i = 0; i <= pergunta_certa_final.length - 1; i++) {
                                                        let li = document.createElement("li");
                                                        let button = document.createElement("button");
                                                        button.innerHTML = "V"
                                                        li.innerHTML = `${posicao_certa[i]}) ${pergunta_certa_final[i]}`;
                                                        li.append(button);
                                                        ul_resposta_certa.append(li);
                                                    }
                                                    for (let i = 0; i <= pergunta_final_errada.length - 1; i++) {
                                                        let li = document.createElement("li");
                                                        let button = document.createElement("button");
                                                        button.innerHTML = "X"
                                                        li.innerHTML = `${posicao_erradas_perguntas[i]}) ${pergunta_final_errada[i]}`;
                                                        li.append(button);
                                                        ul_resposta_errada.append(li)
                                                    }
                                                    document.getElementById("voltar_escolha_lista_teorica").onclick = function () {
                                                        $("#wallalunx").css('background-image', 'url("./fotis/wood.jpg")');
                                                        $("#wallalunx").css('padding-bottom', '26%');
                                                        $("#infalunx").show("fast");
                                                        $("#reposta_certa").empty();
                                                        $("#pergunta_errada").empty();
                                                        $("#termino_exercicio").hide("fast");
                                                        $("#place_lista_teoricas").show("fast");
                                                        $("#lugar_nota").empty();

                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    })
                }
            }
        })
        document.getElementById("voltar_place_lista_teoricas").onclick = function () {
            $("#wallalunx").css('padding-bottom', '12%');
            $("#codeprofx").show("fast");
            $("#infalunx").show("fast");
            $("#escolha_modo_exercicio").show("fast");
            $("#escolha_lista_teorica").empty();
            $("#place_lista_teoricas").hide("fast");

        }
    }
    document.getElementById("historico_listas_teoricas_user").onclick = function () {
        $("#codeprofx").hide("fast");
        $("#infalunx").show("fast");
        $("#wallalunx").css('padding-bottom', '30%');
        $("#escolha_modo_exercicio").hide("fast");
        $("#place_lista_teoricas").show("fast");
        let ul = document.getElementById("escolha_lista_teorica");
        const lista_toericas_feitas = new NOTA_ALUNO_SERVICE(`https://whispering-hollows-11624.herokuapp.com/notas_aluno?id_aluno=${id_login}`);
        lista_toericas_feitas.listar().then(resposta => {
            for (let i = 0; i <= resposta.length - 1; i++) {
                let li = document.createElement("li");
                let button = document.createElement("button");
                button.setAttribute('id', resposta[i].id_lista_teorica);
                button.innerHTML = resposta[i].nome_lista_teorica;
                button.setAttribute("class", "btn btn-primary");
                li.append(button);
                ul.append(li);
                button.onclick = function () {
                    $("#infalunx").hide("fast");
                    const id_lista_teorica = event.target.id;
                    const lista_teorica_aluno = new Lista_Teorica_Aluno_Service(`https://whispering-hollows-11624.herokuapp.com/Lista_Teorica_aluno/${id_lista_teorica}`)
                    lista_teorica_aluno.listar().then(resposta => {
                        console.log(resposta)
                        let lista_pergunta_server;
                        let opcoes_server;
                        let opcoes_corretas_server;
                        let lista_opcoes_falsas = [1, 2, 3, 4, 5];
                        let posicao_pergunta = 0;
                        let posicao_opcoes = 0;
                        let posicao_certa = [];
                        let posicao_erradas_perguntas = [];
                        let posicao_opcoes_certas = 0;
                        let lista_perguntas_erradas_usuario = [];
                        let lista_perguntas_certas_user = []
                        let t_number = 1;
                        let nota = 0;
                        var nota_final = 0;
                        let lista_opcoes2s = [];
                        let opcoes_correta2 = [];
                        lista_pergunta_server = resposta.perguntas
                        opcoes_server = resposta.opcoes
                        opcoes_corretas_server = resposta.opcoes_certas;
                        console.log(lista_pergunta_server)
                        opcoes_server.push(lista_opcoes_falsas);
                        $("#place_lista_teoricas").hide("fast");
                        $("#fazer_exercicio_lista_teorica").show("fast");
                        let lugar_opcoes_resposta = document.querySelectorAll("#escolha");
                        let input_radio = document.querySelectorAll("#valor");
                        let lugar_perguntas = document.getElementById("place_perguntas");
                        lugar_perguntas.innerHTML = `${t_number}/${lista_pergunta_server.length} ${lista_pergunta_server[posicao_pergunta]}`;
                        for (let i = 0; i <= lugar_opcoes_resposta.length - 1; i++) {
                            lugar_opcoes_resposta[i].innerHTML = opcoes_server[posicao_opcoes][i];
                            input_radio[i].setAttribute('value', opcoes_server[posicao_opcoes][i]);
                        }
                        document.getElementById("proxima_pergunta").onclick = function () {
                            $("#wallalunx").css('padding-bottom', '20%');
                            let input_radio_situacao = $("input[name='opcoes']:checked").val();
                            console.log(input_radio_situacao)
                            if (typeof input_radio_situacao != "undefined") {
                                if (opcoes_corretas_server[posicao_opcoes_certas] == input_radio_situacao) {
                                    lista_perguntas_certas_user.push(lista_pergunta_server[posicao_pergunta]);
                                    posicao_certa.push(posicao_pergunta + 1)
                                    console.log(lista_perguntas_certas_user);
                                    swal('Certa Resposta!', '<img height="6%" width="6%" src="./fotis/smile.png" />  parabéns', 'success');
                                    nota += 100
                                } else {
                                    lista_perguntas_erradas_usuario.push(lista_pergunta_server[posicao_pergunta])
                                    posicao_erradas_perguntas.push(posicao_pergunta + 1);
                                    console.log(posicao_erradas_perguntas);
                                    for (let i = 0; i <= 4; i++) {
                                        lista_opcoes2s.push(opcoes_server[posicao_opcoes][i]);
                                        console.log(lista_opcoes2s);
                                    }
                                    console.log(lista_opcoes2s)
                                    opcoes_correta2.push(opcoes_corretas_server[posicao_opcoes_certas]);
                                    swal('Resposta Errada!', '<img height="6%" width="6%" src="./fotis/sad.png" />  estude mais um pouco', 'error')
                                }
                                t_number++;
                                posicao_pergunta++;
                                posicao_opcoes++;
                                posicao_opcoes_certas++;

                                let input_radio_checker = $("input[name='opcoes']")
                                for (let i = 0; i <= input_radio_checker.length - 1; i++) {
                                    input_radio_checker[i].checked = false;
                                }
                                lugar_perguntas.innerHTML = `${t_number}/${lista_pergunta_server.length})  ${lista_pergunta_server[posicao_pergunta]}`;
                                for (let i = 0; i <= lugar_opcoes_resposta.length - 1; i++) {
                                    lugar_opcoes_resposta[i].innerHTML = opcoes_server[posicao_opcoes][i];
                                    input_radio[i].setAttribute('value', opcoes_server[posicao_opcoes][i]);
                                }
                                if (posicao_pergunta == lista_pergunta_server.length) {
                                    console.log("termino lista");
                                    console.log("termino da lista teórica");
                                    $("#fazer_exercicio_lista_teorica").hide("fast");
                                    $("#termino_exercicio").show("fast");
                                    nota = parseInt((nota / lista_pergunta_server.length).toFixed(0));
                                    $("#lugar_nota").text(`Sua nota foi ${nota} | acertos: ${lista_perguntas_certas_user.length}, erros: ${lista_perguntas_erradas_usuario.length}`);
                                    nota_final = nota
                                    posicao_pergunta = 0;
                                    posicao_opcoes = 0;
                                    posicao_opcoes_certas = 0;
                                    t_number = 1;
                                    nota = 0
                                    let ul_resposta_certa = document.getElementById("reposta_certa");
                                    let ul_resposta_errada = document.getElementById("pergunta_errada");
                                    for (let i = 0; i <= lista_perguntas_certas_user.length - 1; i++) {
                                        let li = document.createElement("li");
                                        li.setAttribute('id', 'certas')
                                        let button = document.createElement("button");
                                        button.innerHTML = "V";
                                        button.setAttribute('id', 'perguntas_certas');
                                        li.innerHTML = `${posicao_certa[i]}) ${lista_perguntas_certas_user[i]}`;
                                        li.append(button);
                                        ul_resposta_certa.append(li);
                                    }
                                    for (let i = 0; i <= lista_perguntas_erradas_usuario.length - 1; i++) {
                                        let li = document.createElement("li");
                                        let button = document.createElement("button");
                                        button.innerHTML = "X";
                                        button.setAttribute('id', 'perguntas_erradas');
                                        li.innerHTML = `${posicao_erradas_perguntas[i]}) ${lista_perguntas_erradas_usuario[i]}`;
                                        li.append(button);
                                        ul_resposta_errada.append(li);

                                    }
                                    if (lista_perguntas_erradas_usuario.length > 0) {
                                        $("#fazer_perguntas_erradas").show("fast");

                                    }
                                    document.getElementById("voltar_escolha_lista_teorica").onclick = function () {
                                        $("#wallalunx").css('background-image', 'url("./fotis/wood.jpg")');
                                        $("#wallalunx").css('padding-bottom', '26%');
                                        $("#infalunx").show("fast");
                                        $("#termino_exercicio").hide("fast");
                                        $("#place_lista_teoricas").show("fast");
                                        $("#reposta_certa").empty();
                                        $("#pergunta_errada").empty();
                                        $("#lugar_nota").empty();
                                        t_number = 1;
                                        lugar_perguntas.innerHTML = `${t_number}/${lista_pergunta_server.length})`
                                        let nota_aluno_service = new NOTA_ALUNO_SERVICE(`https://whispering-hollows-11624.herokuapp.com/notas_aluno?id_lista_teorica=${id_lista_teorica}&id_aluno=${id_login}`)
                                        nota_aluno_service.listar().then(resposta => {
                                            console.log(resposta);
                                            let id = resposta[0].id
                                            let nota_aluno_service = new NOTA_ALUNO_SERVICE(`https://whispering-hollows-11624.herokuapp.com/notas_aluno/${id}`)
                                            let nota_aluno = new NOTA_ALUNO_2(nota_final, lista_perguntas_certas_user, lista_perguntas_erradas_usuario)
                                            nota_aluno_service.atualizar(nota_aluno).then(resposta => {
                                                console.log(resposta)
                                            })
                                        })

                                    }
                                    document.getElementById("fazer_perguntas_erradas").onclick = function () {
                                        $("#reposta_certa").empty();
                                        $("#pergunta_errada").empty();
                                        $("#lugar_nota").empty();
                                        let pergunta_final_errada = [];
                                        let pergunta_certa_final = [];
                                        posicao_erradas_perguntas = []
                                        posicao_certa = []

                                        $("#termino_exercicio").hide("fast");
                                        $("#fazer_exercicio_lista_teorica").show("fast");
                                        lugar_perguntas.innerHTML = `${t_number}/${lista_perguntas_erradas_usuario.length})  ${lista_perguntas_erradas_usuario[posicao_pergunta]}`;
                                        for (let i = 0; i <= lugar_opcoes_resposta.length - 1; i++) {
                                            lugar_opcoes_resposta[i].innerHTML = lista_opcoes2s[posicao_opcoes];
                                            input_radio[i].setAttribute('value', lista_opcoes2s[posicao_opcoes]);
                                            posicao_opcoes++;
                                        }
                                        document.getElementById("proxima_pergunta").onclick = function () {
                                            $("#wallalunx").css('padding-bottom', '20%');
                                            let input_radio_situacao = $("input[name='opcoes']:checked").val();
                                            console.log(input_radio_situacao)
                                            if (typeof input_radio_situacao != "undefined") {
                                                if (opcoes_correta2[posicao_opcoes_certas] == input_radio_situacao) {
                                                    pergunta_certa_final.push(lista_perguntas_erradas_usuario[posicao_pergunta]);
                                                    posicao_certa.push(posicao_pergunta + 1)
                                                    swal('Certa Resposta!', '<img height="6%" width="6%" src="./fotis/smile.png" />  parabéns', 'success');
                                                    nota += 100;

                                                } else {
                                                    pergunta_final_errada.push(lista_perguntas_erradas_usuario[posicao_pergunta]);
                                                    posicao_erradas_perguntas.push(posicao_pergunta + 1);
                                                    console.log(lista_perguntas_erradas_usuario, lista_opcoes2s, opcoes_correta2);
                                                    swal('Resposta Errada!', '<img height="6%" width="6%" src="./fotis/sad.png" />  estude mais um pouco', 'error')
                                                }
                                                t_number++;
                                                posicao_pergunta++;
                                                posicao_opcoes_certas++;

                                                let input_radio_checker = $("input[name='opcoes']")
                                                for (let i = 0; i <= input_radio_checker.length - 1; i++) {
                                                    input_radio_checker[i].checked = false;
                                                }
                                                lugar_perguntas.innerHTML = `${t_number}/${lista_perguntas_erradas_usuario.length})  ${lista_perguntas_erradas_usuario[posicao_pergunta]}`;
                                                for (let i = 0; i <= lugar_opcoes_resposta.length - 1; i++) {
                                                    lugar_opcoes_resposta[i].innerHTML = lista_opcoes2s[posicao_opcoes];
                                                    input_radio[i].setAttribute('value', lista_opcoes2s[posicao_opcoes]);
                                                    posicao_opcoes++
                                                }
                                                let encerrar = lista_perguntas_erradas_usuario.length
                                                if (encerrar == posicao_pergunta) {
                                                    $("#fazer_exercicio_lista_teorica").hide("fast");
                                                    $("#termino_exercicio").show("fast");
                                                    $("#fazer_perguntas_erradas").hide("fast");
                                                    t_number = 1;
                                                    lugar_perguntas.innerHTML = `${t_number}/${lista_pergunta_server.length})`
                                                    console.log(encerrar + "lista teorica");
                                                    nota = parseInt((nota / lista_pergunta_server.length).toFixed(0));
                                                    nota_final += nota;
                                                    $("#lugar_nota").text(`A sua nota foi: ${nota_final} | acertos: ${pergunta_certa_final.length}, erros: ${pergunta_final_errada.length}`);
                                                    nota = 0;
                                                    posicao_pergunta = 0;
                                                    posicao_opcoes = 0;
                                                    posicao_opcoes_certas = 0;
                                                    t_number = 1;
                                                    for (let i = 0; i <= pergunta_certa_final.length - 1; i++) {
                                                        lista_perguntas_certas_user.push(pergunta_certa_final[i])
                                                    }
                                                    let nota_aluno_service = new NOTA_ALUNO_SERVICE(`https://whispering-hollows-11624.herokuapp.com/notas_aluno?id_lista_teorica=${id_lista_teorica}&id_aluno=${id_login}`)
                                                    nota_aluno_service.listar().then(resposta => {
                                                        console.log(resposta)
                                                        let id = resposta[0].id
                                                        console.log(id);
                                                        let nota_aluno_service = new NOTA_ALUNO_SERVICE(`https://whispering-hollows-11624.herokuapp.com/notas_aluno/${id}`)
                                                        let nota_aluno = new NOTA_ALUNO_2(nota_final, lista_perguntas_certas_user, pergunta_final_errada)
                                                        nota_aluno_service.atualizar(nota_aluno).then(resposta => {
                                                            console.log(resposta)
                                                        })
                                                    })

                                                    for (let i = 0; i <= pergunta_certa_final.length - 1; i++) {
                                                        let li = document.createElement("li");
                                                        let button = document.createElement("button");
                                                        button.innerHTML = "V"
                                                        li.innerHTML = `${posicao_certa[i]}) ${pergunta_certa_final[i]}`;
                                                        li.append(button);
                                                        ul_resposta_certa.append(li);
                                                    }
                                                    for (let i = 0; i <= pergunta_final_errada.length - 1; i++) {
                                                        let li = document.createElement("li");
                                                        let button = document.createElement("button");
                                                        button.innerHTML = "X"
                                                        li.innerHTML = `${posicao_erradas_perguntas[i]}/${pergunta_final_errada[i]})`;
                                                        li.append(button);
                                                        ul_resposta_errada.append(li)
                                                    }
                                                    document.getElementById("voltar_escolha_lista_teorica").onclick = function () {
                                                        $("#wallalunx").css('background-image', 'url("./fotis/wood.jpg")');
                                                        $("#wallalunx").css('padding-bottom', '26%');
                                                        $("#infalunx").show("fast");
                                                        $("#reposta_certa").empty();
                                                        $("#pergunta_errada").empty();
                                                        $("#termino_exercicio").hide("fast");
                                                        $("#place_lista_teoricas").show("fast");
                                                        $("#lugar_nota").empty();
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    })
                }
            }
        })
        document.getElementById("voltar_place_lista_teoricas").onclick = function () {
            $("#wallalunx").css('padding-bottom', '12%');
            $("#codeprofx").show("fast");
            $("#escolha_modo_exercicio").show("fast");
            $("#escolha_lista_teorica").empty();
            $("#place_lista_teoricas").hide("fast");
        }

    }
    document.getElementById("criar_lista_teorica_automatica").onclick = function () {
        $("#infalunx").show("fast");
        $("#codeprofx").hide("fast");
        $("#escolha_modo_exercicio").hide("fast");
        $("#tema_lista_teorica").show("fast");
        document.getElementById("salvar_temas").onclick = function () {
            $("#wallalunx").css('padding-bottom', '36%');
            $("#criacao_lista_teorica").css('width', '50%');
            let temas_lista = [];
            let temas = $("input[name='opcoes_temas']");
            let temas_verificar = $("input[name='opcoes_temas']:checked").val();
            let nome_temas = [];
            if (typeof temas_verificar == "undefined") {
                swal('Lista Inválida!', '- escolha algum tema -', 'error');
            } else {
                for (let i = 0; i <= temas.length - 1; i++) {
                    if (temas[i].checked) {
                        nome_temas.push(temas[i].id)
                        console.log(nome_temas);
                        temas_lista.push(temas[i].value);
                        console.log(temas_lista);
                    }
                }
                $("#tema_lista_teorica").hide("fast");
                $("#criacao_lista_teorica").show("fast");
                $("#pegar_nome").show("fast");
                $("#cont_perguntas").show("fast");
                $("#proximo_passo_criacao").hide("fast");
                $("#fazer_lista_teorica").hide("fast");
                for (let i = 0; i <= temas.length - 1; i++) {
                    temas[i].checked = false;
                }
                document.getElementById("salvar_nome_lista_teorica").onclick = function () {
                    $("#wallalunx").css('padding-bottom', '12%');
                    $("#wallalunx").css('background-image', 'url("./fotis/classroom.jpg")');
                    $("#wallalunx").css('background-size', 'cover');
                    $("#criacao_lista_teorica").css('width', '80%');
                    $("#infalunx").hide("fast");
                    var nome_lista_teorica_automatica = $("#nome_lista_teorica").val();
                    let quantidade_perguntas = $("#cont_perguntas").val()
                    if (nome_lista_teorica_automatica != "" && quantidade_perguntas != "") {
                        $("#criacao_lista_teorica").hide("fast");
                        let lista_pergunta_server = [];
                        let opcoes_server = [];
                        let opcoes_corretas_server = [];
                        let lista_opcoes_falsas = [1, 2, 3, 4, 5];
                        let posicao_pergunta = 0;
                        let posicao_opcoes = 0;
                        let posicao_certa = [];
                        let posicao_erradas_perguntas = [];
                        let posicao_opcoes_certas = 0;
                        let lista_perguntas_erradas_usuario = [];
                        let lista_perguntas_certas_user = []
                        let t_number = 1;
                        let nota = 0;
                        var nota_final = 0;
                        let lista_opcoes2s = [];
                        let opcoes_correta2 = [];

                        let link_banco = `https://whispering-hollows-11624.herokuapp.com/perguntas?`;
                        for (let i = 0; i <= temas_lista.length - 1; i++) {
                            let operacao_logica = `id_tema=${temas_lista[i]}&`;
                            link_banco = link_banco + operacao_logica;
                        }
                        let pergunta_service = new Pergunta_Service(`${link_banco}&_sort=opcoes&_limit=${quantidade_perguntas}&order=asc`);
                        pergunta_service.listar().then(resposta => {
                            console.log(resposta);
                            for (let i = 0; i <= resposta.length - 1; i++) {
                                lista_pergunta_server.push(resposta[i].pergunta);
                                opcoes_server.push(resposta[i].opcoes);
                                opcoes_corretas_server.push(resposta[i].opcao_certa);
                            }
                            let lista_teorica_servidor = new Lista_Teorica_Servidor(nome_lista_teorica_automatica, id_login, lista_pergunta_server, opcoes_server, opcoes_corretas_server);
                            let lista_teorica_servidor_service = new Lista_Teorica_Servidor_Service("https://whispering-hollows-11624.herokuapp.com/Lista_Teorica_Servidor");
                            lista_teorica_servidor_service.inserir(lista_teorica_servidor).then(resposta => {
                                console.log(resposta);
                                var id_lista_teorica = resposta.id;
                                opcoes_server.push(lista_opcoes_falsas);
                                let lugar_opcoes_resposta = document.querySelectorAll("#escolha");
                                let input_radio = document.querySelectorAll("#valor");
                                $("#fazer_lista_teorica").hide("fast");
                                $("#fazer_exercicio_lista_teorica").show("fast");
                                let lugar_perguntas = document.getElementById("place_perguntas");
                                lugar_perguntas.innerHTML = `${t_number}/${lista_pergunta_server.length} ${lista_pergunta_server[posicao_pergunta]}`;
                                for (let i = 0; i <= lugar_opcoes_resposta.length - 1; i++) {
                                    lugar_opcoes_resposta[i].innerHTML = opcoes_server[posicao_opcoes][i];
                                    input_radio[i].setAttribute('value', opcoes_server[posicao_opcoes][i]);
                                }
                                document.getElementById("proxima_pergunta").onclick = function () {
                                    $("#wallalunx").css('padding-bottom', '20%');
                                    let input_radio_situacao = $("input[name='opcoes']:checked").val();
                                    console.log(input_radio_situacao)
                                    if (typeof input_radio_situacao != "undefined") {
                                        if (opcoes_corretas_server[posicao_opcoes_certas] == input_radio_situacao) {
                                            lista_perguntas_certas_user.push(lista_pergunta_server[posicao_pergunta]);
                                            posicao_certa.push(posicao_pergunta + 1)
                                            console.log(lista_perguntas_certas_user);
                                            swal('Certa Resposta!', '<img height="6%" width="6%" src="./fotis/smile.png" />  parabéns', 'success');
                                            nota += 100
                                        } else {
                                            lista_perguntas_erradas_usuario.push(lista_pergunta_server[posicao_pergunta])
                                            posicao_erradas_perguntas.push(posicao_pergunta + 1);
                                            console.log(posicao_erradas_perguntas);
                                            for (let i = 0; i <= 4; i++) {
                                                lista_opcoes2s.push(opcoes_server[posicao_opcoes][i]);
                                                console.log(lista_opcoes2s);
                                            }
                                            console.log(lista_opcoes2s)
                                            opcoes_correta2.push(opcoes_corretas_server[posicao_opcoes_certas]);
                                            swal('Resposta Errada!', '<img height="6%" width="6%" src="./fotis/sad.png" />  estude mais um pouco', 'error');
                                        }
                                        t_number++;
                                        posicao_pergunta++;
                                        posicao_opcoes++;
                                        posicao_opcoes_certas++;

                                        let input_radio_checker = $("input[name='opcoes']")
                                        for (let i = 0; i <= input_radio_checker.length - 1; i++) {
                                            input_radio_checker[i].checked = false;
                                        }
                                        lugar_perguntas.innerHTML = `${t_number}/${lista_pergunta_server.length})  ${lista_pergunta_server[posicao_pergunta]}`;
                                        for (let i = 0; i <= lugar_opcoes_resposta.length - 1; i++) {
                                            lugar_opcoes_resposta[i].innerHTML = opcoes_server[posicao_opcoes][i];
                                            input_radio[i].setAttribute('value', opcoes_server[posicao_opcoes][i]);
                                        }
                                    }
                                    if (posicao_pergunta == lista_pergunta_server.length) {
                                        console.log("termino lista");
                                        console.log("termino da lista teórica");
                                        $("#fazer_exercicio_lista_teorica").hide("fast");
                                        $("#termino_exercicio").show("fast");
                                        nota = parseInt((nota / lista_pergunta_server.length).toFixed(0));
                                        $("#lugar_nota").text(`Sua nota foi ${nota} | acertos: ${lista_perguntas_certas_user.length}, erros: ${lista_perguntas_erradas_usuario.length}`);
                                        nota_final = nota
                                        posicao_pergunta = 0;
                                        posicao_opcoes = 0;
                                        posicao_opcoes_certas = 0;
                                        t_number = 1;
                                        nota = 0
                                        let ul_resposta_certa = document.getElementById("reposta_certa");
                                        let ul_resposta_errada = document.getElementById("pergunta_errada");
                                        document.getElementById("voltar_escolha_lista_teorica").onclick = function () {
                                            $("#wallalunx").css('background-image', 'url("./fotis/wood.jpg")');
                                            $("#wallalunx").css('padding-bottom', '26%');
                                            $("#infalunx").show("fast");
                                            $("#termino_exercicio").hide("fast");
                                            $("#escolha_modo_exercicio").show("fast");
                                            $("#reposta_certa").empty();
                                            $("#pergunta_errada").empty();
                                            $("#lugar_nota").empty();
                                            t_number = 1;
                                            lugar_perguntas.innerHTML = `${t_number} ${lista_pergunta_server.length})`
                                            let nota_class = new NOTA_SERVIDOR(nome_login, nota_final, id_login, id_lista_teorica, nome_lista_teorica_automatica, lista_perguntas_certas_user, lista_perguntas_erradas_usuario);
                                            let nota_service = new NOTA_SERVIDOR_SERVICE("https://whispering-hollows-11624.herokuapp.com/notas_servidor");
                                            nota_service.inserir(nota_class).then(resposta => {})
                                        }
                                        for (let i = 0; i <= lista_perguntas_certas_user.length - 1; i++) {
                                            let li = document.createElement("li");
                                            li.setAttribute('id', 'certas')
                                            let button = document.createElement("button");
                                            button.innerHTML = "V";
                                            button.setAttribute('id', 'perguntas_certas');
                                            li.innerHTML = `${posicao_certa[i]}) ${lista_perguntas_certas_user[i]}`;
                                            li.append(button);
                                            ul_resposta_certa.append(li);
                                        }
                                        for (let i = 0; i <= lista_perguntas_erradas_usuario.length - 1; i++) {
                                            let li = document.createElement("li");
                                            let button = document.createElement("button");
                                            button.innerHTML = "X";
                                            button.setAttribute('id', 'perguntas_erradas');
                                            li.innerHTML = `${posicao_erradas_perguntas[i]}) ${lista_perguntas_erradas_usuario[i]}`;
                                            li.append(button);
                                            ul_resposta_errada.append(li);
                                        }
                                        if (lista_perguntas_erradas_usuario.length > 0) {
                                            $("#fazer_perguntas_erradas").show("fast");
                                        }
                                        document.getElementById("fazer_perguntas_erradas").onclick = function () {
                                            $("#reposta_certa").empty();
                                            $("#pergunta_errada").empty();
                                            let pergunta_final_errada = [];
                                            let pergunta_certa_final = [];
                                            posicao_erradas_perguntas = []
                                            posicao_certa = []
                                            $("#lugar_nota").empty();

                                            $("#termino_exercicio").hide("fast");
                                            $("#fazer_exercicio_lista_teorica").show("fast");
                                            lugar_perguntas.innerHTML = `${t_number}/${lista_perguntas_erradas_usuario.length})  ${lista_perguntas_erradas_usuario[posicao_pergunta]}`;
                                            for (let i = 0; i <= lugar_opcoes_resposta.length - 1; i++) {
                                                lugar_opcoes_resposta[i].innerHTML = lista_opcoes2s[posicao_opcoes];
                                                input_radio[i].setAttribute('value', lista_opcoes2s[posicao_opcoes]);
                                                posicao_opcoes++;
                                            }
                                            document.getElementById("proxima_pergunta").onclick = function () {
                                                $("#wallalunx").css('padding-bottom', '20%');
                                                let input_radio_situacao = $("input[name='opcoes']:checked").val();
                                                console.log(input_radio_situacao)
                                                if (typeof input_radio_situacao != "undefined") {
                                                    if (opcoes_correta2[posicao_opcoes_certas] == input_radio_situacao) {
                                                        pergunta_certa_final.push(lista_perguntas_erradas_usuario[posicao_pergunta]);
                                                        posicao_certa.push(posicao_pergunta + 1)
                                                        swal('Certa Resposta!', '<img height="6%" width="6%" src="./fotis/smile.png" />  parabéns', 'success');
                                                        nota += 100;

                                                    } else {
                                                        pergunta_final_errada.push(lista_perguntas_erradas_usuario[posicao_pergunta]);
                                                        posicao_erradas_perguntas.push(posicao_pergunta + 1);
                                                        console.log(lista_perguntas_erradas_usuario, lista_opcoes2s, opcoes_correta2);
                                                        swal('Resposta Errada!', '<img height="6%" width="6%" src="./fotis/sad.png" />  estude mais um pouco', 'error')
                                                    }
                                                    t_number++;
                                                    posicao_pergunta++;
                                                    posicao_opcoes_certas++;

                                                    let input_radio_checker = $("input[name='opcoes']")
                                                    for (let i = 0; i <= input_radio_checker.length - 1; i++) {
                                                        input_radio_checker[i].checked = false;
                                                    }
                                                    lugar_perguntas.innerHTML = `${t_number}/${lista_perguntas_erradas_usuario.length})  ${lista_perguntas_erradas_usuario[posicao_pergunta]}`;
                                                    for (let i = 0; i <= lugar_opcoes_resposta.length - 1; i++) {
                                                        lugar_opcoes_resposta[i].innerHTML = lista_opcoes2s[posicao_opcoes];
                                                        input_radio[i].setAttribute('value', lista_opcoes2s[posicao_opcoes]);
                                                        posicao_opcoes++
                                                    }
                                                    let encerrar = lista_perguntas_erradas_usuario.length
                                                    if (encerrar == posicao_pergunta) {
                                                        $("#fazer_exercicio_lista_teorica").hide("fast");
                                                        $("#termino_exercicio").show("fast");
                                                        $("#fazer_perguntas_erradas").hide("fast");
                                                        t_number = 1;
                                                        lugar_perguntas.innerHTML = `${t_number}/${lista_pergunta_server.length})`
                                                        nota = parseInt((nota / lista_pergunta_server.length).toFixed(0));
                                                        console.log(encerrar + "lista teorica");
                                                        nota_final += nota;
                                                        $("#lugar_nota").text(`A sua nota foi: ${nota_final} | acertos: ${pergunta_certa_final.length}, erros: ${pergunta_final_errada.length}`)
                                                        nota = 0;
                                                        posicao_pergunta = 0;
                                                        posicao_opcoes = 0;
                                                        posicao_opcoes_certas = 0;
                                                        t_number = 1;
                                                        for (let i = 0; i <= pergunta_certa_final.length - 1; i++) {
                                                            lista_perguntas_certas_user.push(pergunta_certa_final[i])
                                                        }
                                                        let nota_class = new NOTA_SERVIDOR(nome_login, nota_final, id_login, id_lista_teorica, nome_lista_teorica_automatica, lista_perguntas_certas_user, pergunta_final_errada);
                                                        let nota_service = new NOTA_SERVIDOR_SERVICE("https://whispering-hollows-11624.herokuapp.com/notas_servidor");
                                                        nota_service.inserir(nota_class).then(resposta => {
                                                            console.log(resposta);
                                                        })
                                                        for (let i = 0; i <= pergunta_certa_final.length - 1; i++) {
                                                            let li = document.createElement("li");
                                                            let button = document.createElement("button");
                                                            button.innerHTML = "V"
                                                            li.innerHTML = `${posicao_certa[i]}) ${pergunta_certa_final[i]}`;
                                                            li.append(button);
                                                            ul_resposta_certa.append(li);
                                                        }
                                                        for (let i = 0; i <= pergunta_final_errada.length - 1; i++) {
                                                            let li = document.createElement("li");
                                                            let button = document.createElement("button");
                                                            button.innerHTML = "X"
                                                            li.innerHTML = `${posicao_erradas_perguntas[i]}) ${pergunta_final_errada[i]}`;
                                                            li.append(button);
                                                            ul_resposta_errada.append(li)
                                                        }
                                                        document.getElementById("voltar_escolha_lista_teorica").onclick = function () {
                                                            $("#wallalunx").css('background-image', 'url("./fotis/wood.jpg")');
                                                            $("#wallalunx").css('padding-bottom', '26%');
                                                            $("#infalunx").show("fast");
                                                            $("#reposta_certa").empty();
                                                            $("#pergunta_errada").empty();
                                                            $("#termino_exercicio").hide("fast");
                                                            $("#escolha_modo_exercicio").show("fast");
                                                            $("#lugar_nota").empty();
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            })
                        })
                    }
                }
            }
        }
    }
    document.getElementById("criar_lista_teorica").onclick = function () {
        $("#infalunx").show("fast");
        $("#codeprofx").hide("fast");
        $("#escolha_modo_exercicio").hide("fast");
        $("#tema_lista_teorica").show("fast");
        document.getElementById("salvar_temas").onclick = function () {
            $("#wallalunx").css('padding-bottom', '36%');
            $("#criacao_lista_teorica").css('width', '50%');
            let temas_lista = [];
            let temas = $("input[name='opcoes_temas']");
            let temas_verificar = $("input[name='opcoes_temas']:checked").val();
            let nome_temas = [];
            if (typeof temas_verificar == "undefined") {
                swal('Lista Inválida!', '- escolha algum tema -', 'error');
            } else {
                for (let i = 0; i <= temas.length - 1; i++) {
                    if (temas[i].checked) {
                        nome_temas.push(temas[i].id)
                        console.log(nome_temas);
                        temas_lista.push(temas[i].value);
                        console.log(temas_lista);
                    }
                }
                $("#tema_lista_teorica").hide("fast");
                $("#criacao_lista_teorica").show("fast");
                $("#pegar_nome").show("fast");
                $("#cont_perguntas").hide("fast");
                $("#proximo_passo_criacao").hide("fast");
                $("#fazer_lista_teorica").hide("fast");
                for (let i = 0; i <= temas.length - 1; i++) {
                    temas[i].checked = false;
                }
                document.getElementById("salvar_nome_lista_teorica").onclick = function () {
                    $("#wallalunx").css('padding-bottom', '12%');
                    $("#criacao_lista_teorica").css('width', '80%');
                    $("#infalunx").hide("fast");
                    $("#wallalunx").css('background-image', 'url("./fotis/classroom.jpg")');
                    $("#wallalunx").css('background-size', 'cover');
                    let input_nome = $("#nome_lista_teorica").val();
                    if (input_nome == "") {
                        swal('Lista Inválida!', '- escolha algum nome -', 'error')
                    } else {
                        $("#fazer_lista_teorica").show("fast");
                        document.getElementById("nome_lista_teorica").value = ""
                        $("#pegar_nome").hide("fast");
                        $("#proximo_passo_criacao").show("fast");
                        let lista_pergunta_server = [];
                        let opcoes_server = [];
                        let opcoes_certas_server = [];
                        let contador_perguntas_adicionadas = 0;
                        let ul = document.getElementById("perguntasserver");
                        for (let i = 0; i <= temas_lista.length - 1; i++) {
                            let h3 = document.createElement("h3");
                            h3.innerHTML = nome_temas[i].toUpperCase();
                            console.log(nome_temas[i]);
                            let li_nome = document.createElement("li");
                            li_nome.append(h3);
                            let pergunta_service = new Pergunta_Service(`https://whispering-hollows-11624.herokuapp.com/perguntas?id_tema=${temas_lista[i]}`);
                            pergunta_service.listar().then(resposta => {
                                ul.append(li_nome);
                                for (let i = 0; i <= resposta.length - 1; i++) {
                                    let li = document.createElement("li");
                                    let button = document.createElement("button");
                                    li.setAttribute('id', resposta[i].id)
                                    button.innerHTML = resposta[i].pergunta;
                                    button.setAttribute('id', resposta[i].id);
                                    li.append(button);
                                    ul.append(li);
                                    button.onclick = function () {
                                        let id_pergunta = resposta[i].id
                                        console.log(id_pergunta)
                                        $("#perguntasserver > li").remove(`#${id_pergunta}`)
                                        contador_perguntas_adicionadas++;
                                        $("#contador_perguntas").text(`${contador_perguntas_adicionadas} pergunta(s) adicionadas`);
                                        lista_pergunta_server.push(resposta[i].pergunta);
                                        console.log(lista_pergunta_server);
                                        opcoes_server.push(resposta[i].opcoes);
                                        opcoes_certas_server.push(resposta[i].opcao_certa);
                                    }
                                }
                            })
                        }
                        document.getElementById("fazer_lista_teorica").onclick = function () {
                            $("#criacao_lista_teorica").css('background', 'none');
                            $("#wallalunx").css('background-image', 'url("./fotis/classroom.jpg")');
                            $("#wallalunx").css('background-size', 'cover');
                            $("#infalunx").hide("fast");
                            $("#wallalunx").css('padding-bottom', '20%');
                            let lista_teorica_aluno = new Lista_Teorica_Aluno(input_nome, id_login, lista_pergunta_server, opcoes_server, opcoes_certas_server);
                            let lista_teorica_aluno_service = new Lista_Teorica_Aluno_Service("https://whispering-hollows-11624.herokuapp.com/Lista_Teorica_aluno");
                            lista_teorica_aluno_service.inserir(lista_teorica_aluno).then(resposta => {
                                var id_lista_teorica = resposta.id;
                                $("#proximo_passo_criacao").hide("fast");
                                $("#fazer_lista_teorica").show("fast");
                                $("#perguntasserver").empty();
                                $("#contador_perguntas").text("0");
                                let t_number = 1;
                                let lista_certas_usuario = [];
                                let lista_perguntas_erradas_usuario = [];
                                let lista_opcoes2s = [];
                                let opcoes_correta2 = []
                                let nota = 0;
                                let nota_final = 0;
                                lista_opcoes_falsas = [1, 2, 3, 4, 5];
                                opcoes_server.push(lista_opcoes_falsas);
                                let posicao_pergunta = 0;
                                let posicao_certa_pergunta = []
                                let posicao_errada_pergunta = []
                                let posicao_opcoes = 0;
                                let posicao_opcoes_certas = 0;
                                let lugar_opcoes_resposta = document.querySelectorAll("#escolha");
                                let input_radio = document.querySelectorAll("#valor");
                                $("#fazer_lista_teorica").hide("fast");
                                $("#fazer_exercicio_lista_teorica").show("fast");
                                let lugar_perguntas = document.getElementById("place_perguntas");
                                lugar_perguntas.innerHTML = `${t_number}/${lista_pergunta_server.length}) ${lista_pergunta_server[posicao_pergunta]}`;
                                for (let i = 0; i <= lugar_opcoes_resposta.length - 1; i++) {
                                    lugar_opcoes_resposta[i].innerHTML = opcoes_server[posicao_opcoes][i];
                                    input_radio[i].setAttribute('value', opcoes_server[posicao_opcoes][i]);
                                }
                                document.getElementById("proxima_pergunta").onclick = function () {
                                    $("#wallalunx").css('padding-bottom', '20%');
                                    let input_radio_situacao = $("input[name='opcoes']:checked").val();
                                    console.log(input_radio_situacao)
                                    if (typeof input_radio_situacao != "undefined") {
                                        if (opcoes_certas_server[posicao_opcoes_certas] == input_radio_situacao) {
                                            lista_certas_usuario.push(lista_pergunta_server[posicao_pergunta]);
                                            console.log(lista_certas_usuario);
                                            posicao_certa_pergunta.push(posicao_pergunta + 1)

                                            swal('Certa Resposta!', '<img height="6%" width="6%" src="./fotis/smile.png" />  parabéns', 'success');
                                            nota += 100;

                                        } else {
                                            lista_perguntas_erradas_usuario.push(lista_pergunta_server[posicao_pergunta])
                                            posicao_errada_pergunta.push(posicao_pergunta + 1);
                                            for (let i = 0; i <= 4; i++) {
                                                lista_opcoes2s.push(opcoes_server[posicao_opcoes][i]);
                                                console.log(lista_opcoes2s);

                                            }
                                            console.log(lista_opcoes2s)
                                            opcoes_correta2.push(opcoes_certas_server[posicao_opcoes_certas]);


                                            swal('Resposta Errada!', '<img height="6%" width="6%" src="./fotis/sad.png" />  estude mais um pouco', 'error')
                                        }
                                        t_number++;
                                        posicao_pergunta++;
                                        posicao_opcoes++;
                                        posicao_opcoes_certas++;

                                        let input_radio_checker = $("input[name='opcoes']")
                                        for (let i = 0; i <= input_radio_checker.length - 1; i++) {
                                            input_radio_checker[i].checked = false;
                                        }
                                        lugar_perguntas.innerHTML = `${t_number}/${lista_pergunta_server.length})  ${lista_pergunta_server[posicao_pergunta]}`;
                                        for (let i = 0; i <= lugar_opcoes_resposta.length - 1; i++) {
                                            lugar_opcoes_resposta[i].innerHTML = opcoes_server[posicao_opcoes][i];
                                            input_radio[i].setAttribute('value', opcoes_server[posicao_opcoes][i]);
                                        }
                                        if (posicao_pergunta == lista_pergunta_server.length) {

                                            $("#fazer_exercicio_lista_teorica").hide("fast");
                                            $("#termino_exercicio").show("fast");
                                            nota = parseInt((nota / lista_pergunta_server.length).toFixed(0));
                                            $("#lugar_nota").text(`Sua nota foi ${nota} | acertos: ${lista_certas_usuario.length}, erros: ${lista_perguntas_erradas_usuario.length}`);
                                     
                                            nota_final = nota;
                                            nota = 0;
                                            posicao_pergunta = 0;
                                            posicao_opcoes = 0;
                                            posicao_opcoes_certas = 0;
                                            t_number = 1;
                                            let ul_resposta_certa = document.getElementById("reposta_certa");
                                            let ul_resposta_errada = document.getElementById("pergunta_errada");
                                            for (let i = 0; i <= lista_certas_usuario.length - 1; i++) {
                                                let li = document.createElement("li");
                                                li.setAttribute('id', 'certas')
                                                let button = document.createElement("button");
                                                button.innerHTML = "V";
                                                button.setAttribute('id', 'perguntas_certas');
                                                li.innerHTML = `${posicao_certa_pergunta[i]}) ${lista_certas_usuario[i]}`;
                                                li.append(button);
                                                ul_resposta_certa.append(li);
                                            }
                                            for (let i = 0; i <= lista_perguntas_erradas_usuario.length - 1; i++) {
                                                let li = document.createElement("li");
                                                let button = document.createElement("button");
                                                button.innerHTML = "X";
                                                button.setAttribute('id', 'perguntas_erradas');
                                                li.innerHTML = `${posicao_errada_pergunta[i]}) ${lista_perguntas_erradas_usuario[i]}`;
                                                li.append(button);
                                                ul_resposta_errada.append(li);
                                            }
                                            if (lista_perguntas_erradas_usuario.length > 0) {
                                                $("#fazer_perguntas_erradas").show("fast");

                                            }
                                            document.getElementById("voltar_escolha_lista_teorica").onclick = function () {
                                                $("#wallalunx").css('background-image', 'url("./fotis/wood.jpg")');
                                                $("#wallalunx").css('padding-bottom', '26%');
                                                $("#infalunx").show("fast");
                                                $("#termino_exercicio").hide("fast");
                                                $("#escolha_modo_exercicio").show("fast");
                                                $("#reposta_certa").empty();
                                                $("#pergunta_errada").empty();
                                                $("#lugar_nota").empty();
                                                posicao_errada_pergunta = [];
                                                posicao_errada_pergunta = [];
                                                t_number = 1;
                                                lugar_perguntas.innerHTML = `${t_number}/${lista_pergunta_server.length})`

                                                let nota_class = new NOTA_ALUNO(nome_login, nota_final, id_login, id_lista_teorica, input_nome, lista_certas_usuario, lista_perguntas_erradas_usuario);
                                                nota_final = 0;
                                                let nota_service = new NOTA_ALUNO_SERVICE("https://whispering-hollows-11624.herokuapp.com/notas_aluno");
                                                nota_service.inserir(nota_class).then(resposta => {
                                                    console.log(resposta);
                                                })

                                            }
                                            document.getElementById("fazer_perguntas_erradas").onclick = function () {
                                                posicao_certa_pergunta = [];
                                                posicao_errada_pergunta = [];
                                                $("#reposta_certa").empty();
                                                $("#pergunta_errada").empty();
                                                $("#lugar_nota").empty();
                                                let pergunta_final_errada = [];
                                                let pergunta_certa_final = [];
                                                $("#termino_exercicio").hide("fast");
                                                $("#fazer_exercicio_lista_teorica").show("fast");
                                                lugar_perguntas.innerHTML = `${t_number}/${lista_perguntas_erradas_usuario.length})  ${lista_perguntas_erradas_usuario[posicao_pergunta]}`;
                                                for (let i = 0; i <= lugar_opcoes_resposta.length - 1; i++) {
                                                    lugar_opcoes_resposta[i].innerHTML = lista_opcoes2s[posicao_opcoes];
                                                    input_radio[i].setAttribute('value', lista_opcoes2s[posicao_opcoes]);
                                                    posicao_opcoes++;
                                                }
                                                document.getElementById("proxima_pergunta").onclick = function () {
                                                    $("#wallalunx").css('padding-bottom', '20%');
                                                    let input_radio_situacao = $("input[name='opcoes']:checked").val();
                                                    console.log(input_radio_situacao)
                                                    if (typeof input_radio_situacao != "undefined") {
                                                        if (opcoes_correta2[posicao_opcoes_certas] == input_radio_situacao) {
                                                            pergunta_certa_final.push(lista_perguntas_erradas_usuario[posicao_pergunta]);
                                                            posicao_certa_pergunta.push(posicao_pergunta + 1);

                                                            swal('Certa Resposta!', '<img height="6%" width="6%" src="./fotis/smile.png" />  parabéns', 'success');
                                                            nota += 100;

                                                        } else {

                                                            pergunta_final_errada.push(lista_perguntas_erradas_usuario[posicao_pergunta]);
                                                            console.log(lista_perguntas_erradas_usuario, lista_opcoes2s, opcoes_correta2);
                                                            swal('Resposta Errada!', '<img height="6%" width="6%" src="./fotis/sad.png" />  estude mais um pouco', 'error')
                                                            posicao_errada_pergunta.push(posicao_pergunta + 1);
                                                        }
                                                        t_number++;
                                                        posicao_pergunta++;
                                                        posicao_opcoes_certas++;

                                                        let input_radio_checker = $("input[name='opcoes']")
                                                        for (let i = 0; i <= input_radio_checker.length - 1; i++) {
                                                            input_radio_checker[i].checked = false;
                                                        }
                                                        lugar_perguntas.innerHTML = `${t_number}/${lista_perguntas_erradas_usuario.length})  ${lista_perguntas_erradas_usuario[posicao_pergunta]}`;
                                                        for (let i = 0; i <= lugar_opcoes_resposta.length - 1; i++) {
                                                            lugar_opcoes_resposta[i].innerHTML = lista_opcoes2s[posicao_opcoes];
                                                            input_radio[i].setAttribute('value', lista_opcoes2s[posicao_opcoes]);
                                                            posicao_opcoes++
                                                        }
                                                        let encerrar = lista_perguntas_erradas_usuario.length
                                                        if (encerrar == posicao_pergunta) {
                                                            $("#fazer_exercicio_lista_teorica").hide("fast");
                                                            $("#termino_exercicio").show("fast");
                                                            $("#fazer_perguntas_erradas").hide("fast");
                                                            console.log(encerrar + "lista teorica");
                                                            nota = parseInt((nota / lista_pergunta_server.length).toFixed(0));
                                                            nota_final += nota;
                                                            $("#lugar_nota").text(`Sua nota foi: ${nota_final} | certas: ${pergunta_certa_final.length}, erradas: ${pergunta_final_errada.length}`)
                                                            nota = 0;
                                                            posicao_pergunta = 0;
                                                            posicao_opcoes = 0;
                                                            posicao_opcoes_certas = 0;
                                                            t_number = 1;
                                                            lugar_perguntas.innerHTML = `${t_number}/${lista_pergunta_server.length})`
                                                            for (let i = 0; i <= pergunta_certa_final.length - 1; i++) {
                                                                lista_certas_usuario.push(pergunta_certa_final[i])

                                                            }
                                                            let nota_class = new NOTA_ALUNO(nome_login, nota_final, id_login, id_lista_teorica, input_nome, lista_certas_usuario, pergunta_final_errada);
                                                            let nota_service = new NOTA_ALUNO_SERVICE("https://whispering-hollows-11624.herokuapp.com/notas_aluno");
                                                            nota_service.inserir(nota_class).then(resposta => {
                                                                console.log(resposta);
                                                            })
                                                            for (let i = 0; i <= pergunta_certa_final.length - 1; i++) {
                                                                let li = document.createElement("li");
                                                                let button = document.createElement("button");
                                                                button.innerHTML = "V"
                                                                li.innerHTML = `${posicao_certa_pergunta[i]}) ${pergunta_certa_final[i]}`;
                                                                li.append(button);
                                                                ul_resposta_certa.append(li);
                                                            }
                                                            for (let i = 0; i <= pergunta_final_errada.length - 1; i++) {
                                                                let li = document.createElement("li");
                                                                let button = document.createElement("button");
                                                                button.innerHTML = "X"
                                                                li.innerHTML = `${posicao_errada_pergunta[i]}) ${pergunta_final_errada[i]}`;
                                                                li.append(button);
                                                                ul_resposta_errada.append(li)
                                                            }
                                                            document.getElementById("voltar_escolha_lista_teorica").onclick = function () {
                                                                $("#wallalunx").css('background-image', 'url("./fotis/wood.jpg")');
                                                                $("#wallalunx").css('padding-bottom', '26%');
                                                                $("#infalunx").show("fast");
                                                                $("#reposta_certa").empty();
                                                                $("#pergunta_errada").empty();
                                                                $("#lugar_nota").empty();
                                                                $("#termino_exercicio").hide("fast");
                                                                $("#escolha_modo_exercicio").show("fast");

                                                                posicao_errada_pergunta = [];
                                                                posicao_certa_pergunta = [];
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    } else {
                                        swal('Resposta Inválida!', '- escolha sua opção -', 'error')

                                    }
                                }
                            })
                        }
                    }
                }
            }
        }
    }
}
document.getElementById("salas_presentes").onclick = function () {
    $("#muralxalun").hide("fast");
    $("#infalunx").show("fast");
    $("#codeprofx2").show("fast");
    $("#wallalunx").css('padding-bottom', '32%');
    $("#comentario").hide("fast");
    $("#area_de_escolhas").hide("fast");
    $("#escolha_de_sala").show("fast");
    let sala_service = new Sala_Service(`https://whispering-hollows-11624.herokuapp.com/salas?participantes_like=${email_login}`);
    sala_service.listar().then(resposta => {
        console.log(resposta);
        let ul = document.getElementById("salas_inseridas");
        for (let i = 0; i <= resposta.length - 1; i++) {
            let li = document.createElement("li");
            let button_acessar_sala = document.createElement("button");
            button_acessar_sala.innerHTML = resposta[i].nome;
            button_acessar_sala.setAttribute('id', resposta[i].id);
            button_acessar_sala.setAttribute("class", "btn btn-primary");
            li.append(button_acessar_sala);
            ul.append(li);
            button_acessar_sala.onclick = function () {
                $("#codeprofx2").hide("fast");
                $("#escolha_de_sala").hide("fast");
                $("#area_escolha_lista_teorica").show("fast");
                let id_sala = event.target.id;
                let lista_teorica_service = new Lista_Teorica_Service(`https://whispering-hollows-11624.herokuapp.com/lista_teoricas?id_sala=${id_sala}`);
                let ul = document.getElementById("listas_teoricas");
                lista_teorica_service.listar().then(resposta => {
                    for (let i = 0; i <= resposta.length - 1; i++) {
                        let data_de_entrega = resposta[i].Data_de_entrega;
                        let li = document.createElement("li");
                        let button_acessar_lista = document.createElement("button");
                        button_acessar_lista.innerHTML = resposta[i].nome
                        button_acessar_lista.setAttribute('id', resposta[i].id);
                        button_acessar_lista.setAttribute("class", "btn btn-primary");
                        let target_date;
                        if (data_de_entrega != "") {
                            console.log(data_de_entrega);
                            target_date = new Date(data_de_entrega).getTime();

                            function DATA_ENTREGA() {
                                target_date = new Date(data_de_entrega).getTime();
                                console.log(target_date)
                                var current_date = new Date().getTime();
                                console.log(current_date)
                                if (current_date > target_date) {
                                    var atrasado = Math.abs((target_date - current_date) / 1000)
                                    days = `já FAZEM DA DATA DE ENTREGA: ${parseInt(atrasado / 86400)} dias`
                                    atrasado = atrasado % 86400;
                                    hours = `${parseInt(atrasado / 3600)}:`;
                                    atrasado = atrasado % 3600;
                                    minutes = `${parseInt(atrasado / 60)}:`;
                                    seconds = `${parseInt(atrasado % 60)}`;
                                    let data = [];
                                    data.push(days);
                                    data.push(hours);
                                    data.push(minutes);
                                    data.push(seconds)

                                    button_acessar_lista.innerHTML = resposta[i].nome + "   " + data
                                } else {
                                    let prazo = Math.abs((target_date - current_date) / 1000);
                                    let data = [];

                                    days = `| Prazo: ${parseInt(prazo / 86400)} dias`;
                                    prazo = prazo % 86400;
                                    hours = `${parseInt(prazo / 3600)} horas:`;
                                    prazo = prazo % 3600;
                                    minutes = `${parseInt(prazo / 60)} minutos:`;
                                    seconds = `${parseInt(prazo % 60)} segundos`;

                                    data.push(days, hours, minutes, seconds);
                                    console.log(data)
                                    button_acessar_lista.innerHTML = resposta[i].nome + "   " + data
                                }
                            }
                            var tempo_entrega = setInterval(DATA_ENTREGA, 1000)
                        }

                        li.append(button_acessar_lista);
                        ul.append(li);
                        button_acessar_lista.onclick = function () {
                            $("#codeprofx2").hide("fast");
                            $("#infalunx").hide("fast");
                            $("#wallalunx").css('background-image', 'url("./fotis/classroom.jpg")');
                            $("#wallalunx").css('background-size', 'cover');
                            $("#area_escolha_lista_teorica").hide("fast");
                            var id_lista_teorica = event.target.id;
                            console.log(id_lista_teorica)

                            let lista_teorica = new Lista_Teorica_Service(`https://whispering-hollows-11624.herokuapp.com/lista_teoricas?id=${id_lista_teorica}`);
                            lista_teorica.listar().then(resposta => {
                                data_de_entrega = resposta[0].Data_de_entrega

                            })
                            let nota_service = new Nota_Service(`https://whispering-hollows-11624.herokuapp.com/notas_professor?id_aluno=${id_login}&id_lista_teorica=${id_lista_teorica}`);
                            nota_service.listar().then(resposta => {
                                if (resposta.length > 0) {
                                    $("#termino_exercicio").show("fast");
                                    $("#lugar_nota").text(`Sua Nota foi ${resposta[0].nota}, certas: ${resposta[0].perguntas_certas.length}, erradas: ${resposta[0].perguntas_erradas.length}, não feitas: ${resposta[0].perguntas_nao_feitas.length}`);
                                    let pergunta_errada = resposta[0].perguntas_erradas;
                                    let perguntas_certas = resposta[0].perguntas_certas;
                                    let perguntas_nao_feitas = resposta[0].perguntas_nao_feitas;

                                    let ul_resposta_certa = document.getElementById("reposta_certa");
                                    let ul_resposta_errada = document.getElementById("pergunta_errada");
                                    let ul_perguntas_nao_feitas = document.getElementById("perguntas_nao_feitas");
                                    for (let i = 0; i <= perguntas_certas.length - 1; i++) {
                                        let li = document.createElement("li");
                                        let button = document.createElement("button");
                                        li.innerHTML = perguntas_certas[i];
                                        button.innerHTML = "V"
                                        li.append(button);
                                        ul_resposta_certa.append(li);
                                    }
                                    for (let i = 0; i <= pergunta_errada.length - 1; i++) {
                                        let li = document.createElement("li");
                                        let button = document.createElement("button");
                                        li.innerHTML = pergunta_errada[i];
                                        button.innerHTML = "X"
                                        li.append(button);
                                        ul_resposta_errada.append(li);
                                    }
                                    for (let i = 0; i <= perguntas_nao_feitas.length - 1; i++) {
                                        let li = document.createElement("li");
                                        let button = document.createElement("button");
                                        button.innerHTML = "?";
                                        li.innerHTML = perguntas_nao_feitas[i];
                                        li.append(button);
                                        ul_perguntas_nao_feitas.append(li);
                                    }
                                    document.getElementById("voltar_escolha_lista_teorica").onclick = function () {
                                        $("#wallalunx").css('background-image', 'url("./fotis/wood.jpg")');
                                        $("#wallalunx").css('padding-bottom', '26%');
                                        $("#infalunx").show("fast");
                                        $("#termino_exercicio").hide("fast");
                                        $("#area_escolha_lista_teorica").show("fast");
                                        $("#reposta_certa").empty();
                                        $("#pergunta_errada").empty();
                                        $("#perguntas_nao_feitas").empty();
                                        $("#lugar_nota").empty();
                                    }

                                } else {
                                    $("#fazer_exercicio_lista_teorica").show("fast");
                                    let lista_teorica_service = new Lista_Teorica_Service(`https://whispering-hollows-11624.herokuapp.com/lista_teoricas?id=${id_lista_teorica}&id_sala=${id_sala}`);
                                    lista_teorica_service.listar().then(resposta => {
                                        var tempo_de_termino;
                                        let lista_pergunta;
                                        let lista_opcoes;
                                        let lista_perguntas_nao_feitas = [];
                                        let lista_opcoes_corretas;
                                        var nome_lista_teorica;
                                        tempo_de_termino = resposta[0].tempo_de_termino
                                        console.log(tempo_de_termino);
                                        lista_pergunta = resposta[0].perguntas;
                                        lista_opcoes = resposta[0].opcoes;
                                        lista_opcoes_corretas = resposta[0].opcoes_certas;
                                        nome_lista_teorica = resposta[0].nome
                                        let nota = 0;
                                        let posicao_certa_pergunta = [];
                                        let posicao_errada_pergunta = [];
                                        let t_number = 1;
                                        let lista_opcoes2 = [1, 2, 3, 4, 5]
                                        lista_opcoes.push(lista_opcoes2);
                                        let posicao_pergunta = 0;
                                        let posicao_opcoes = 0;
                                        let posicao_opcoes_certas = 0;
                                        let lista_erradas_usuario = [];
                                        let lista_certas_usuario = [];
                                        let input_radio = document.querySelectorAll("#valor");
                                        let label_escolhas = document.querySelectorAll("#escolha");
                                        let perguntas = document.getElementById("place_perguntas");
                                        perguntas.innerHTML = `${t_number}/${lista_pergunta.length}) ${lista_pergunta[posicao_pergunta]}`;
                                        for (let i = 0; i <= label_escolhas.length - 1; i++) {
                                            label_escolhas[i].innerHTML = lista_opcoes[posicao_opcoes][i];
                                            input_radio[i].setAttribute('value', lista_opcoes[posicao_opcoes][i]);
                                        }
                                        document.getElementById("proxima_pergunta").onclick = function () {
                                            $("#wallalunx").css('padding-bottom', '20%');
                                            let input_radio_situacao = $("input[name='opcoes']:checked").val();
                                            console.log(input_radio_situacao)
                                            if (typeof input_radio_situacao != "undefined") {

                                                if (lista_opcoes_corretas[posicao_opcoes_certas] == input_radio_situacao) {
                                                    lista_certas_usuario.push(lista_pergunta[posicao_pergunta]);
                                                    console.log(lista_certas_usuario);
                                                    posicao_certa_pergunta.push(posicao_pergunta + 1);

                                                    swal('Certa Resposta!', '<img height="6%" width="6%" src="./fotis/smile.png" />  parabéns', 'success');
                                                    nota += 100;

                                                } else {
                                                    lista_erradas_usuario.push(lista_pergunta[posicao_pergunta])
                                                    posicao_errada_pergunta.push(posicao_pergunta + 1);

                                                    swal('Resposta Errada!', '<img height="6%" width="6%" src="./fotis/sad.png" />  estude mais um pouco', 'error')
                                                }
                                                t_number++;
                                                posicao_pergunta++;

                                                posicao_opcoes++;
                                                posicao_opcoes_certas++;

                                                let input_radio_checker = $("input[name='opcoes']")
                                                for (let i = 0; i <= input_radio_checker.length - 1; i++) {
                                                    input_radio_checker[i].checked = false;
                                                }
                                                perguntas.innerHTML = `${t_number}/${lista_pergunta.length})  ${lista_pergunta[posicao_pergunta]}`;
                                                for (let i = 0; i <= label_escolhas.length - 1; i++) {
                                                    label_escolhas[i].innerHTML = lista_opcoes[posicao_opcoes][i];
                                                    input_radio[i].setAttribute('value', lista_opcoes[posicao_opcoes][i]);
                                                }
                                                if (posicao_pergunta == lista_pergunta.length) {
                                                    t_number = 1;
                                                    perguntas.innerHTML = `${t_number}/${lista_pergunta.length})`
                                                    console.log("termino da lista teórica");
                                                    $("#fazer_exercicio_lista_teorica").hide("fast");
                                                    $("#termino_exercicio").show("fast");
                                                    nota = parseInt((nota / lista_pergunta.length).toFixed(0));
                                                    $("#lugar_nota").text(`Sua nota foi ${nota} | acertos: ${lista_certas_usuario.length}, erros: ${lista_erradas_usuario.length}`);
                                                    let ul_resposta_certa = document.getElementById("reposta_certa");
                                                    let ul_resposta_errada = document.getElementById("pergunta_errada");
                                                    let current_date = new Date().getTime();
                                                    let data_errada = new Date();
                                                    let dia = data_errada.getDate();
                                                    let mes = data_errada.getMonth() + 1;
                                                    let ano = data_errada.getFullYear()
                                                    let current_date_enviar = `${dia}/${mes}/${ano}`;
                                                    console.log(current_date_enviar);
                                                    let situacao_envio;
                                                    if (data_de_entrega != "") {
                                                        if (target_date < current_date) {
                                                            situacao_envio = "atrasado";
                                                        } else {
                                                            situacao_envio = "prazo"
                                                        }

                                                        let nota_enviar = new Nota(nome_login, nota, id_login, id_lista_teorica, nome_lista_teorica, lista_certas_usuario, lista_erradas_usuario, lista_perguntas_nao_feitas, situacao_envio, current_date_enviar);
                                                        let nota_service = new Nota_Service("https://whispering-hollows-11624.herokuapp.com/notas_professor");
                                                        nota_service.inserir(nota_enviar).then(resposta => {
                                                            console.log(resposta);
                                                        })
                                                    } else {
                                                        let nota_enviar = new Nota(nome_login, nota, id_login, id_lista_teorica, nome_lista_teorica, lista_certas_usuario, lista_erradas_usuario, lista_perguntas_nao_feitas);
                                                        let nota_service = new Nota_Service("https://whispering-hollows-11624.herokuapp.com/notas_professor");
                                                        nota_service.inserir(nota_enviar).then(resposta => {
                                                            console.log(resposta);
                                                        })
                                                    }
                                                    clearInterval(tempo);
                                                    clearInterval(tempo2);
                                                    for (let i = 0; i <= lista_certas_usuario.length - 1; i++) {
                                                        let li = document.createElement("li");
                                                        li.setAttribute('id', 'certas')
                                                        let button = document.createElement("button");
                                                        button.innerHTML = "V";
                                                        button.setAttribute('id', 'perguntas_certas');
                                                        li.innerHTML = `${posicao_certa_pergunta[i]}) ${lista_certas_usuario[i]}`;
                                                        li.append(button);
                                                        ul_resposta_certa.append(li);

                                                    }
                                                    for (let i = 0; i <= lista_erradas_usuario.length - 1; i++) {
                                                        let li = document.createElement("li");
                                                        let button = document.createElement("button");
                                                        button.innerHTML = "X";
                                                        button.setAttribute('id', 'perguntas_erradas');
                                                        $("#perguntas_erradas").css({
                                                            "background-color": "red",
                                                            "color": "#F5F5F5"
                                                        })
                                                        li.innerHTML = `${posicao_errada_pergunta[i]}) ${lista_erradas_usuario[i]}`;
                                                        li.append(button);
                                                        ul_resposta_errada.append(li);
                                                    }
                                                    document.getElementById("voltar_escolha_lista_teorica").onclick = function () {
                                                        $("#wallalunx").css('background-image', 'url("./fotis/wood.jpg")');
                                                        $("#wallalunx").css('padding-bottom', '26%');
                                                        $("#infalunx").show("fast");
                                                        $("#termino_exercicio").hide("fast");
                                                        $("#area_escolha_lista_teorica").show("fast");
                                                        $("#reposta_certa").empty();
                                                        $("#pergunta_errada").empty();
                                                        $("#perguntas_nao_feitas").empty();
                                                        $("#hora").empty();
                                                        $("#minutos").empty();
                                                        $("#segundos").empty();
                                                        posicao_pergunta = 0;
                                                        posicao_opcoes = 0;
                                                        posicao_opcoes_certas = 0;
                                                        t_number = 1;
                                                        nota = 0;
                                                        hora = 0;
                                                        minutos = 0;
                                                        segundos = 0;
                                                        posicao_certa_pergunta = [];
                                                        posicao_errada_pergunta = [];
                                                        $("#lugar_nota").empty();
                                                    }
                                                }
                                            } else {
                                                swal('Resposta Inválida!', '- escolha sua opção -', 'error')
                                            }
                                        }
                                        if (tempo_de_termino != "") {
                                            var relogio = [];
                                            relogio.push(tempo_de_termino.split(":"))


                                            if (relogio[0][0] <= 0) {

                                                var t_hora = document.getElementById("hora");
                                                var t_minutos = document.getElementById("minutos");
                                                var t_segundos = document.getElementById("segundos");

                                                console.log(relogio);
                                                t_hora.innerHTML = (relogio[0][0] > 9) ? ("" + relogio[0][0] + ":") : ("0" + relogio[0][0] + ":");
                                                t_minutos.innerHTML = (relogio[0][1] > 9) ? ("" + relogio[0][1] + ":") : ("0" + relogio[0][1] + ":");
                                                t_segundos.innerHTML = 59;
                                                var hora = relogio[0][0];
                                                var minutos = relogio[0][1] - 1;
                                                var segundos = 59;

                                                function contador() {

                                                    t_minutos.innerHTML = (minutos > 9) ? ("" + minutos + ":") : ("0" + minutos + ":");
                                                    t_segundos.innerHTML = (segundos > 9) ? ("" + segundos) : ("0" + segundos);
                                                    if (segundos > 0) segundos--;
                                                    else if (segundos == 0 && minutos > 0) {
                                                        segundos = 59;
                                                        minutos -= 1;
                                                    } else {
                                                        clearInterval(tempo);
                                                        $("#fazer_exercicio_lista_teorica").hide("fast");
                                                        $("#termino_exercicio").show("fast");
                                                        nota = parseInt((nota / lista_pergunta.length).toFixed(0));
                                                        $("#lugar_nota").text(`Sua nota foi ${nota} | acertos: ${lista_certas_usuario.length}, erros: ${lista_erradas_usuario.length}, não realizadas: ${lista_pergunta.length - posicao_pergunta}`);
                                                        let ul_resposta_certa = document.getElementById("reposta_certa");
                                                        let ul_resposta_errada = document.getElementById("pergunta_errada");
                                                        let ul_perguntas_nao_feitas = document.getElementById("perguntas_nao_feitas");
                                                        t_number = 1;
                                                        perguntas.innerHTML = `${t_number}/${lista_pergunta.length})`

                                                        for (let i = 0; i <= lista_certas_usuario.length - 1; i++) {
                                                            let li = document.createElement("li");
                                                            li.setAttribute('id', 'certas')
                                                            let button = document.createElement("button");
                                                            button.innerHTML = "V";
                                                            button.setAttribute('id', 'perguntas_certas');
                                                            li.innerHTML = `${posicao_certa_pergunta[i]}) ${lista_certas_usuario[i]}`;
                                                            li.append(button);
                                                            ul_resposta_certa.append(li);

                                                        }
                                                        for (let i = 0; i <= lista_erradas_usuario.length - 1; i++) {
                                                            let li = document.createElement("li");
                                                            let button = document.createElement("button");
                                                            button.innerHTML = "X";
                                                            button.setAttribute('id', 'perguntas_erradas');
                                                            $("#perguntas_erradas").css({
                                                                "background-color": "red",
                                                                "color": "#F5F5F5"
                                                            })
                                                            li.innerHTML = `${posicao_errada_pergunta[i]})   ${lista_erradas_usuario[i]}`;
                                                            li.append(button);
                                                            ul_resposta_errada.append(li);
                                                        }
                                                        for (let i = posicao_pergunta; i <= lista_pergunta.length - 1; i++) {
                                                            console.log(i);
                                                            let li = document.createElement("li");
                                                            let button = document.createElement("button");
                                                            button.innerHTML = "?";
                                                            li.innerHTML = `${i + 1}) ${lista_pergunta[i]}`;
                                                            lista_perguntas_nao_feitas.push(lista_pergunta[i]);
                                                            li.append(button);
                                                            ul_perguntas_nao_feitas.append(li)
                                                        }
                                                        let situacao_envio = "";
                                                        let current_date = new Date().getTime();
                                                        let data_errada = new Date();
                                                        let dia = data_errada.getDate();
                                                        let mes = data_errada.getMonth() + 1;
                                                        let ano = data_errada.getFullYear()
                                                        let current_date_enviar = `${dia}/${mes}/${ano}`;
                                                        console.log(current_date_enviar);
                                                        if (data_de_entrega != "") {
                                                            if (target_date < current_date) {
                                                                situacao_envio = "atrasado";
                                                            } else {
                                                                situacao_envio = "prazo"
                                                            }
                                                            let nota_class = new Nota(nome_login, nota, id_login, id_lista_teorica, nome_lista_teorica, lista_certas_usuario, lista_erradas_usuario, lista_perguntas_nao_feitas, situacao_envio, current_date_enviar);
                                                            let nota_service = new Nota_Service("https://whispering-hollows-11624.herokuapp.com/notas_professor");
                                                            nota_service.inserir(nota_class).then(resposta => {
                                                                console.log(resposta);
                                                            })
                                                        } else {
                                                            let nota_class = new Nota(nome_login, nota, id_login, id_lista_teorica, nome_lista_teorica, lista_certas_usuario, lista_erradas_usuario, lista_perguntas_nao_feitas);
                                                            let nota_service = new Nota_Service("https://whispering-hollows-11624.herokuapp.com/notas_professor");
                                                            nota_service.inserir(nota_class).then(resposta => {
                                                                console.log(resposta);
                                                            })
                                                        }

                                                        document.getElementById("voltar_escolha_lista_teorica").onclick = function () {
                                                            $("#wallalunx").css('background-image', 'url("./fotis/wood.jpg")');
                                                            $("#wallalunx").css('padding-bottom', '26%');
                                                            $("#infalunx").show("fast");
                                                            $("#termino_exercicio").hide("fast");
                                                            $("#area_escolha_lista_teorica").show("fast");
                                                            $("#reposta_certa").empty();
                                                            $("#pergunta_errada").empty();
                                                            $("#hora").empty();
                                                            $("#minutos").empty();
                                                            $("#segundos").empty();
                                                            $("#perguntas_nao_feitas").empty();
                                                            $("#lugar_nota").empty();
                                                            posicao_pergunta = 0;
                                                            posicao_opcoes = 0;
                                                            posicao_opcoes_certas = 0;
                                                            t_number = 1;
                                                            nota = 0;
                                                            hora = 0;
                                                            minutos = 0;
                                                            segundos = 0;
                                                            posicao_errada_pergunta = [];
                                                            posicao_certa_pergunta = [];

                                                        }

                                                    }

                                                }
                                                var tempo = setInterval(contador, 1000);

                                            } else {

                                                var t_hora = document.getElementById("hora");
                                                var t_minutos = document.getElementById("minutos");
                                                var t_segundos = document.getElementById("segundos");
                                                t_hora.innerHTML = (relogio[0][0] > 9) ? ("" + relogio[0][0] + ":") : ("0" + relogio[0][0] + ":");
                                                t_minutos.innerHTML = (relogio[0][1] > 9) ? ("" + relogio[0][1] + ":") : ("0" + relogio[0][1] + ":");
                                                t_segundos.innerHTML = 59;
                                                var hora = relogio[0][0];
                                                var minutos = relogio[0][1];
                                                var segundos = 59;

                                                function contador2() {

                                                    t_minutos.innerHTML = (minutos > 9) ? ("" + minutos + ":") : ("0" + minutos + ":");
                                                    t_segundos.innerHTML = (segundos > 9) ? ("" + segundos) : ("0" + segundos);
                                                    t_hora.innerHTML = (hora > 9) ? ("" + hora + ":") : ("0" + hora + ":");
                                                    if (segundos > 0) segundos--;
                                                    else if (segundos == 0 && minutos > 0) {
                                                        segundos = 59;
                                                        minutos -= 1;
                                                    } else if (minutos == 0 && hora > 0) {
                                                        minutos = 60;
                                                        hora -= 1;
                                                    } else {
                                                        clearInterval(tempo2);
                                                        t_number = 1;
                                                        perguntas.innerHTML = `${t_number}/${lista_pergunta.length})`
                                                        $("#fazer_exercicio_lista_teorica").hide("fast");
                                                        $("#termino_exercicio").show("fast");
                                                        nota = parseInt((nota / lista_pergunta.length).toFixed(0));
                                                        $("#lugar_nota").text(`Sua nota foi ${nota} | acertos: ${lista_certas_usuario.length}, erros: ${lista_erradas_usuario.length}, não realizadas: ${lista_pergunta.length - posicao_pergunta}`);
                                                        let ul_resposta_certa = document.getElementById("reposta_certa");
                                                        let ul_resposta_errada = document.getElementById("pergunta_errada");
                                                        let ul_perguntas_nao_feitas = document.getElementById("perguntas_nao_feitas");
                                                        for (let i = 0; i <= lista_certas_usuario.length - 1; i++) {
                                                            let li = document.createElement("li");
                                                            li.setAttribute('id', 'certas')
                                                            let button = document.createElement("button");
                                                            button.innerHTML = "V";
                                                            button.setAttribute('id', 'perguntas_certas');
                                                            li.innerHTML = `${posicao_certa_pergunta[i]}) ${lista_certas_usuario[i]}`;
                                                            li.append(button);
                                                            ul_resposta_certa.append(li);

                                                        }
                                                        for (let i = 0; i <= lista_erradas_usuario.length - 1; i++) {
                                                            let li = document.createElement("li");
                                                            let button = document.createElement("button");
                                                            button.innerHTML = "X";
                                                            button.setAttribute('id', 'perguntas_erradas');
                                                            $("#perguntas_erradas").css({
                                                                "background-color": "red",
                                                                "color": "#F5F5F5"
                                                            })
                                                            li.innerHTML = `${posicao_errada_pergunta[i]}) ${lista_erradas_usuario[i]}`;
                                                            li.append(button);
                                                            ul_resposta_errada.append(li);
                                                        }

                                                        for (let i = posicao_pergunta; i <= lista_pergunta.length - 1; i++) {
                                                            console.log(i);
                                                            let li = document.createElement("li");
                                                            let button = document.createElement("button");
                                                            button.innerHTML = "?";
                                                            li.innerHTML = `${i + 1}) ${lista_pergunta[i]}`;
                                                            lista_perguntas_nao_feitas.push(lista_pergunta[i]);
                                                            li.append(button);
                                                            ul_perguntas_nao_feitas.append(li)
                                                        }
                                                        let situacao_envio;
                                                        let current_date = new Date().getTime();
                                                        let data_errada = new Date();
                                                        let dia = data_errada.getDate();
                                                        let mes = data_errada.getMonth() + 1;
                                                        let ano = data_errada.getFullYear()
                                                        let current_date_enviar = `${dia}/${mes}/${ano}`;
                                                        console.log(current_date_enviar);
                                                        if (data_de_entrega != "") {
                                                            if (target_date < current_date) {
                                                                situacao_envio = "atrasado";
                                                            } else {
                                                                situacao_envio = "prazo"
                                                            }
                                                            let nota_class = new Nota(nome_login, nota, id_login, id_lista_teorica, nome_lista_teorica, lista_certas_usuario, lista_erradas_usuario, lista_perguntas_nao_feitas, situacao_envio, current_date_enviar);
                                                            let nota_service = new Nota_Service("https://whispering-hollows-11624.herokuapp.com/notas_professor");
                                                            nota_service.inserir(nota_class).then(resposta => {
                                                                console.log(resposta);
                                                            })
                                                        } else {
                                                            let nota_class = new Nota(nome_login, nota, id_login, id_lista_teorica, nome_lista_teorica, lista_certas_usuario, lista_erradas_usuario, lista_perguntas_nao_feitas);
                                                            let nota_service = new Nota_Service("https://whispering-hollows-11624.herokuapp.com/notas_professor");
                                                            nota_service.inserir(nota_class).then(resposta => {
                                                                console.log(resposta);
                                                            })
                                                        }
                                                        document.getElementById("voltar_escolha_lista_teorica").onclick = function () {
                                                            $("#wallalunx").css('background-image', 'url("./fotis/wood.jpg")');
                                                            $("#wallalunx").css('padding-bottom', '26%');
                                                            $("#infalunx").show("fast");
                                                            $("#termino_exercicio").hide("fast");
                                                            $("#area_escolha_lista_teorica").show("fast");
                                                            $("#reposta_certa").empty();
                                                            $("#pergunta_errada").empty();
                                                            $("#hora").empty();
                                                            $("#minutos").empty();
                                                            $("#segundos").empty();
                                                            $("#perguntas_nao_feitas").empty();
                                                            $("#lugar_nota").empty();
                                                            posicao_pergunta = 0;
                                                            posicao_opcoes = 0;
                                                            posicao_opcoes_certas = 0;
                                                            t_number = 1;
                                                            hora = 0;
                                                            minutos = 0;
                                                            segundos = 0;
                                                            posicao_certa_pergunta = [];
                                                            posicao_errada_pergunta = [];

                                                        }
                                                    }

                                                }
                                                var tempo2 = setInterval(contador2, 1000);
                                            }
                                        }
                                    })
                                }
                            })
                        }
                    }
                })
                document.getElementById("voltar_da_area_sala_especifica").onclick = function () {
                    $("#listas_teoricas").empty();
                    $("#area_escolha_lista_teorica").hide("fast");
                    $("#escolha_de_sala").show("fast");
                    $("#wallalunx").css('padding-bottom', '32%');
                }
            }
        }
    })
    document.getElementById("voltar_da_area_de_escolha_de_salas").onclick = function () {
        $("#muralxalun").show("fast");
        $("#wallalunx").css('padding-bottom', '32%');
        $("#codeprofx2").hide("fast");
        $("#infalunx").hide("fast");
        $("#salas_inseridas").empty();
        $("#area_de_escolhas").show("fast");
        $("#comentario").show("fast");
        $("#escolha_de_sala").hide("fast");
    }
}