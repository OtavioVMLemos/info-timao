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
function pergunta2 (){
       let marcelinho = ipt_marcelinho
       let edilson = ipt_edílson
       let luizao = ipt_luizao
       let ricardinho = ipt_ricardinho
       let vampeta = ipt_vampeta 

       div_mensagem.innerHTML = "";

       if(!marcelinho.checked && !edilson.checked && !luizao.checked && !ricardinho.checked && !vampeta.checked){
        div_mensagem.innerHTML = ("Selecione alguma alternativa!")
        return 
       }

       if(marcelinho.checked){
        respostas.push("A")
       }
       else if(edilson.checked){
        respostas.push("B")
       }
       else if(luizao.checked){
        respostas.push("C")
       }
       else if(ricardinho.checked){
        respostas.push("D")
       }
       else if(vampeta.checked){
        respostas.push("E")
       }

        setTimeout(function () {

                          window.location = "quizz3.html";

                        }, 0);

       }
function pergunta3 (){
       let mano = ipt_manoMenezes
       let tite = ipt_tite
       let carille = ipt_fabioCarille
       let oswaldo = ipt_oswaldoDeOliveira
       let luxemburgo = ipt_vanderleiLuxemburgo 

       div_mensagem.innerHTML = "";

       if(!mano.checked && !tite.checked && !carille.checked && !oswaldo.checked && !luxemburgo.checked){
        div_mensagem.innerHTML = ("Selecione alguma alternativa!")
        return 
       }
        
       if(mano.checked){
        respostas.push("A")
       }
       else if(tite.checked){
        respostas.push("B")
       }
       else if(carille.checked){
        respostas.push("C")
       }
       else if(oswaldo.checked){
        respostas.push("D")
       }
       else if(luxemburgo.checked){
        respostas.push("E")
       }

        setTimeout(function () {

                          window.location = "quizz4.html";

                        }, 0);
    }
 function pergunta4 (){
       let mooca = ipt_mooca
       let bras = ipt_bras
       let bomRetiro = ipt_bomRetiro
       let tatuape = ipt_tatuape
       let barraFunda = ipt_barraFunda

       div_mensagem.innerHTML = "";

       if(!mooca.checked && !bras.checked && !bomRetiro.checked && !tatuape.checked && !barraFunda.checked){
        div_mensagem.innerHTML = ("Selecione alguma alternativa!")
        return 
       }
        if(mooca.checked){
        respostas.push("A")
       }
       else if(bras.checked){
        respostas.push("B")
       }
       else if(bomRetiro.checked){
        respostas.push("C")
       }
       else if(tatuape.checked){
        respostas.push("D")
       }
       else if(barraFunda.checked){
        respostas.push("E")
       }

        setTimeout(function () {

                          window.location = "quizz4.html";

                        }, 0);
    }
  function pergunta5 (){
       let guerrero = ipt_guerrero
       let cassio = ipt_cassio
       let paulinho = ipt_paulinho
       let pato = ipt_pato
       let ralf = ipt_ralf

       div_mensagem.innerHTML = "";

       if(!guerrero.checked && !cassio.checked && !paulinho.checked && !pato.checked && !ralf.checked){
        div_mensagem.innerHTML = ("Selecione alguma alternativa!")
        return 
       }
        if(guerrero.checked){
        respostas.push("A")
       }
       else if(cassio.checked){
        respostas.push("B")
       }
       else if(paulinho.checked){
        respostas.push("C")
       }
       else if(pato.checked){
        respostas.push("D")
       }
       else if(ralf.checked){
        respostas.push("E")
       }

        setTimeout(function () {

                          window.location = "dashboard.html";

                        }, 0);
    }