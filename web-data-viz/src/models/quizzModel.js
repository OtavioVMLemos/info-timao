var database = require("../database/config")

// function cadastrarAvaliacaoBra(dataPartida, fkbrasileirao, notaPartida) {
//     var instrucaoSql = `
// INSERT INTO avaliacao
// (dataPartida, fkBrasileirao, notaPartida)
// VALUES
// ('${dataPartida}' , '${fkbrasileirao}', '${notaPartida}');
// `;
//     console.log("Executando a instrução SQL: \n" + instrucaoSql);
//     return database.executar(instrucaoSql);
// }

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
// function resultado(pontuacao, dataRealizacao, fkUsuario) {

//       var instrucaoSql = `
//             INSERT INTO resultado (pontuacao, fkUsuario)
//             VALUES ('${pontuacao}','${fkUsuario}');
//         `;

//     console.log("Executando SQL:\n" + instrucaoSql);
//     return database.executar(instrucaoSql);
// }

function respostaUsuario(respostaMarcada, acertou, fkUsuario) {

       var instrucaoSql = `
            INSERT INTO resposta_usuario (respostaMarcada, acertou, fkUsuario)
            VALUES ('${respostaMarcada}', '${acertou}', '${fkUsuario}');
        `;

    console.log("Executando SQL:\n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    respostaUsuario
};