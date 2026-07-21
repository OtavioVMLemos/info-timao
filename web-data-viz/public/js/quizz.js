let respostas = new Array(5);

let gabarito = ["A", "C", "B", "C", "D"];

function corrigirQuiz(gabarito, respostas) {

    let pontuacao = 0;

    for (let i = 0; i < gabarito.length; i++) {

        if (gabarito[i] == respostas[i]) {
            pontuacao++;
        }

    }

    return pontuacao;
}


function corrigirQuiz2(gabarito, respostas) {

    let listaDeAcertos = [];

    for (let i = 0; i < gabarito.length; i++) {

        if (gabarito[i] == respostas[i]) {
            listaDeAcertos.push(1);
        }
        else {
            listaDeAcertos.push(0)
        }

    }

    return listaDeAcertos;
}

function pergunta1() {
    let Ano1995 = ipt_1995
    let Ano1996 = ipt_1996
    let Ano2002 = ipt_2002
    let Ano2009 = ipt_2009
    let Ano2003 = ipt_2003

    div_mensagem.innerHTML = "";

    if (!Ano1995.checked && !Ano1996.checked && !Ano2002.checked && !Ano2009.checked && !Ano2003.checked) {
        div_mensagem.innerHTML = ("Selecione alguma alternativa!")
        return
    }

    if (Ano1995.checked) {
        respostas[0] = "A"
    }
    else if (Ano1996.checked) {
        respostas[0] = "B"
    }
    else if (Ano2002.checked) {
        respostas[0] = "C"
    }
    else if (Ano2009.checked) {
        respostas[0] = "D"
    }
    else if (Ano2003.checked) {
        respostas[0] = "E"
    }

    //           fetch("/quizz/respostas", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //      body: JSON.stringify({
    //         //  respostasServer: respostas,
    //          respostasServer: respostas[0],
    //          acertouServer: corrigirQuiz2(gabarito, respostas)[0],
    //          fkPerguntaServer: 0,
    //          fkResultadoServer: 0
    //     })
    // })
    // .then(respostas => console.log(respostas))
    // .then(json => {
    //     setTimeout(function () {

    //                       window.location = "quizz2.html";

    //                     }, 0);
    // })
    // .catch(erro => {
    //     console.log(erro);
    // });

    fetch("/quizz/respostas", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            respostasServer: respostas[0],
            acertouServer: corrigirQuiz2(gabarito, respostas)[0],
            fkUsuarioServer: sessionStorage.getItem("ID_USUARIO")
        })
    })
        .then(async resposta => {
            console.log(resposta.status);

            const texto = await resposta.text();
            console.log(texto);

            setTimeout(function () {

                window.location = "quizz2.html";

            }, 0);
        })
        .catch(console.error);


}
function pergunta2() {
    let marcelinho = ipt_marcelinho
    let edilson = ipt_edílson
    let luizao = ipt_luizao
    let ricardinho = ipt_ricardinho
    let vampeta = ipt_vampeta

    div_mensagem.innerHTML = "";

    if (!marcelinho.checked && !edilson.checked && !luizao.checked && !ricardinho.checked && !vampeta.checked) {
        div_mensagem.innerHTML = ("Selecione alguma alternativa!")
        return
    }

    if (marcelinho.checked) {
        respostas[1] = "A"
    }
    else if (edilson.checked) {
        respostas[1] = "B"
    }
    else if (luizao.checked) {
        respostas[1] = "C"
    }
    else if (ricardinho.checked) {
        respostas[1] = "D"
    }
    else if (vampeta.checked) {
        respostas[1] = "E"
    }

    fetch("/quizz/respostas", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            respostasServer: respostas[1],
            acertouServer: corrigirQuiz2(gabarito, respostas)[1],
            fkUsuarioServer: sessionStorage.getItem("ID_USUARIO")
        })
    })
        .then(async resposta => {
            console.log(resposta.status);

            const texto = await resposta.text();
            console.log(texto);

            setTimeout(function () {

                window.location = "quizz3.html";

            }, 0);
        })
        .catch(console.error);


}
function pergunta3() {
    let mano = ipt_manoMenezes
    let tite = ipt_tite
    let carille = ipt_fabioCarille
    let oswaldo = ipt_oswaldoDeOliveira
    let luxemburgo = ipt_vanderleiLuxemburgo

    div_mensagem.innerHTML = "";

    if (!mano.checked && !tite.checked && !carille.checked && !oswaldo.checked && !luxemburgo.checked) {
        div_mensagem.innerHTML = ("Selecione alguma alternativa!")
        return
    }

    if (mano.checked) {
        respostas[2] = "A"
    }
    else if (tite.checked) {
        respostas[2] = "B"
    }
    else if (carille.checked) {
        respostas[2] = "C"
    }
    else if (oswaldo.checked) {
        respostas[2] = "D"
    }
    else if (luxemburgo.checked) {
        respostas[2] = "E"
    }

    fetch("/quizz/respostas", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            respostasServer: respostas[2],
            acertouServer: corrigirQuiz2(gabarito, respostas)[2],
            fkUsuarioServer: sessionStorage.getItem("ID_USUARIO")
        })
    })
        .then(async resposta => {
            console.log(resposta.status);

            const texto = await resposta.text();
            console.log(texto);
            setTimeout(function () {

                window.location = "quizz4.html";

            }, 0);
        })
        .catch(console.error);

}
function pergunta4() {
    let mooca = ipt_mooca
    let bras = ipt_bras
    let bomRetiro = ipt_bomRetiro
    let tatuape = ipt_tatuape
    let barraFunda = ipt_barraFunda

    div_mensagem.innerHTML = "";

    if (!mooca.checked && !bras.checked && !bomRetiro.checked && !tatuape.checked && !barraFunda.checked) {
        div_mensagem.innerHTML = ("Selecione alguma alternativa!")
        return
    }
    if (mooca.checked) {
        respostas[3] = "A"
    }
    else if (bras.checked) {
        respostas[3] = "B"
    }
    else if (bomRetiro.checked) {
        respostas[3] = "C"
    }
    else if (tatuape.checked) {
        respostas[3] = "D"
    }
    else if (barraFunda.checked) {
        respostas[3] = "E"
    }

    fetch("/quizz/respostas", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            respostasServer: respostas[3],
            acertouServer: corrigirQuiz2(gabarito, respostas)[3],
            fkUsuarioServer: sessionStorage.getItem("ID_USUARIO")
        })
    })
        .then(async resposta => {
            console.log(resposta.status);

            const texto = await resposta.text();
            console.log(texto);
            setTimeout(function () {

                window.location = "quizz5.html";

            }, 0);
        })
        .catch(console.error);

}
function pergunta5() {
    let guerrero = ipt_guerrero
    let cassio = ipt_cassio
    let paulinho = ipt_paulinho
    let pato = ipt_pato
    let ralf = ipt_ralf

    div_mensagem.innerHTML = "";

    if (!guerrero.checked && !cassio.checked && !paulinho.checked && !pato.checked && !ralf.checked) {
        div_mensagem.innerHTML = ("Selecione alguma alternativa!")
        return
    }
    if (guerrero.checked) {
        respostas[4] = "A"
    }
    else if (cassio.checked) {
        respostas[4] = "B"
    }
    else if (paulinho.checked) {
        respostas[4] = "C"
    }
    else if (pato.checked) {
        respostas[4] = "D"
    }
    else if (ralf.checked) {
        respostas[4] = "E"
    }

    fetch("/quizz/respostas", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            respostasServer: respostas[4],
            acertouServer: corrigirQuiz2(gabarito, respostas)[4],
            fkUsuarioServer: sessionStorage.getItem("ID_USUARIO")
        })
    })
        .then(async resposta => {
            console.log(resposta.status);

            const texto = await resposta.text();
            console.log(texto);
            setTimeout(function () {

                window.location = "./dashboard/dashboard.html";

            }, 0);
        })
        .catch(console.error);


}

//   fetch("/quizz/respostas", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//          body: JSON.stringify({
//             //  respostasServer: respostas,
//              respostaMarcadaServer: respostaMarcada,
//              acertouServer: acertou,
//              fkPerguntaServer: fkPergunta,
//              fkResultadoServer: fkResultado
//         })
//     })
//     .then(resposta => resposta.json())
//     .then(json => {
//         setTimeout.location 
//     })
//     .catch(erro => {
//         console.log(erro);
//     });
