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