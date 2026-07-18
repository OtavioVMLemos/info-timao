// function cadastrarAvaliacaoCdb(req, res) {
//     var fkCopaDoBrasil = req.body.fkCopaDoBrasilServer || '';
//     var fkBrasileirao  = req.body.fkBrasileiraoServer  || '';
//     var notaPartida    = req.body.notaPartidaServer;
//     var fkUsuario      = req.body.fkUsuarioServer;
//     var comentario     = req.body.comentarioServer;
//     var dataAvaliacao  = req.body.dataAvaliacaoServer;

//     if (!fkUsuario) {
//         return res.status(400).send("Usuário não identificado!");
//     } else if (!notaPartida) {
//         return res.status(400).send("Nota da partida está undefined!");
//     }

//     // ordem correta: fkCopaDoBrasil, fkBrasileirao, fkUsuario, notaPartida, comentario, dataAvaliacao
//     avaliacaoModel.cadastrarAvaliacaoCdb(fkCopaDoBrasil, fkBrasileirao, fkUsuario, notaPartida, comentario, dataAvaliacao)
//         .then(resultado => res.json(resultado))
//         .catch(erro => {
//             console.log(erro);
//             res.status(500).json(erro.sqlMessage);
//         });
// }
// module.exports = {
//     cadastrarAvaliacaoCdb  
// }

var quizzModel = require("../models/quizzModel");


// function resultado(req, res){
//     var fkUsuario = req.body.fkUsuario;
//     var Pontuacao  = req.body.Pontuacao;

//      if (!fkUsuario) {         
//         return res.status(400).send("Usuário não identificado!");
//      } 
//      else if (!Pontuacao) {
//         return res.status(400).send("Pontuação está undefined!");
//     }

//     quizzModel.resultado(pontuacao, fkUsuario)
//          .then(resultado => res.json(resultado))
//          .catch(erro => {
//              console.log(erro);
//              res.status(500).json(erro.sqlMessage);
//       });
//  }


function respostasUsuario(req, res){
    
    var respostaMarcada  = req.body.respostasServer ;
    var acertou = req.body.acertouServer;
    // var fkPergunta = req.body.fkPergunta;
    // var fkResultado = req.body.fkResultado
    var fkUsuario = req.body.fkUsuarioServer;


     if (acertou == undefined) {         
        return res.status(400).send("Usuário não identificado!");
     } 
     else if (!respostaMarcada) {
        return res.status(400).send("Resposta Marcada está undefined!");
   }
    else if (fkUsuario == undefined) {
        return res.status(400).send("Pergunta está undefined!");
   }
//     else if (fkResultado == undefined) {
//         return res.status(400).send("Resultado está undefined!");
//    }
    
   quizzModel.respostaUsuario(respostaMarcada, acertou, fkUsuario)
         .then(resultado => res.json(resultado))
         .catch(erro => {
             console.log(erro);
             res.status(500).json(erro.sqlMessage);
      });
}
module.exports = {
    respostasUsuario
}