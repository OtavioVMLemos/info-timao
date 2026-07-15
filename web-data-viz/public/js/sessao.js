// sessão
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    var b_usuario = document.getElementById("b_usuario");

    if (email != null && nome != null) {
        b_usuario.innerHTML = nome;
    } else {
        window.location = "../login.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../login.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.style.display = "flex";
        divErrosLogin.innerHTML = texto;
    }
}

function pergunta1(){

    let respostas = [];


    function pergunta1 (){
       let Ano1995 = ipt_1995
       let Ano1996 = ipt_1996
       let Ano2002 = ipt_2002
       let Ano2009 = ipt_2009
       let Ano2003 = ipt_2003 

       div_mensagem.innerHTML = "";

       if(!Ano1995.checked && !Ano1996.checked && !Ano2002.checked && !Ano2009.checked && !Ano2003.checked){
         div_mensagem.innerHTML = ("Selecione alguma alternativa!")
        return 
       }

       if(Ano1995.checked){
        respostas.push("A")
       }
       else if(Ano1996.checked){
        respostas.push("B")
       }
       else if(Ano2002.checked){
        respostas.push("C")
       }
       else if(Ano2009.checked){
        respostas.push("D")
       }
       else if(Ano2003.checked){
        respostas.push("E")
       }

       
        setTimeout(function () {

                          window.location = "quizz2.html";

                        }, 0);
  
    }   
}
