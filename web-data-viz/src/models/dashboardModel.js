var database = require("../database/config")

function buscarUsuario(fkUsuario) {
     var instrucaoSql = `
        SELECT nome
        FROM usuarios
        WHERE idUsuario = ${fkUsuario};
    `;

    return database.executar(instrucaoSql);
}


function buscarKpiTotalRespostas(fkUsuario) {
        var instrucaoSql = `
        SELECT COUNT(*) AS totalRespostas
        FROM resposta_usuario
        WHERE fkUsuario = ${fkUsuario};
    `;

    return database.executar(instrucaoSql);
}

function buscarKpiPercentualAcertos(fkUsuario) {
      var instrucaoSql = `
        SELECT 
            ROUND (AVG(acertou) * 100, 1) AS percentualAcertos
        FROM resposta_usuario
        WHERE fkUsuario = ${fkUsuario};
    `;

    return database.executar(instrucaoSql);
    
}

function buscarKpiTotalAcertos(fkUsuario){
      var instrucaoSql = `
        SELECT COUNT(*) AS totalAcertos
        FROM resposta_usuario
        WHERE fkUsuario = ${fkUsuario}
        AND acertou = 1;
    `;

    return database.executar(instrucaoSql);
} 
function buscarComparacaoAcertosErros(fkUsuario){
     var instrucaoSql = `
        SELECT
            SUM(acertou = 1) AS acertos,
            SUM(acertou = 0) AS erros
        FROM resposta_usuario
        WHERE fkUsuario = ${fkUsuario};
    `;

    return database.executar(instrucaoSql);
}

function buscarEvolucaoAcertos(fkUsuario){
      var instrucaoSql = `
        SELECT
            DATE_FORMAT(dataRealizacao, '%d/%m/%Y') AS data,
            SUM(acertou = 1) AS acertos,
            SUM(acertou = 0) AS erros
        FROM resposta_usuario
        WHERE fkUsuario = ${fkUsuario}
        GROUP BY DATE_FORMAT(dataRealizacao, '%d/%m/%Y')
        ORDER BY data;
    `;

    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUsuario,
    buscarKpiTotalRespostas,
    buscarKpiPercentualAcertos,
    buscarKpiTotalAcertos,
    buscarComparacaoAcertosErros,
    buscarEvolucaoAcertos
};