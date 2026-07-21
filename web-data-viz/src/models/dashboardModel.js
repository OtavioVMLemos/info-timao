var database = require("../database/config")

function buscarKpiTotalRespostas() {
        var instrucaoSql = `
        SELECT COUNT(*) AS totalRespostas
        FROM resposta_usuario
        WHERE fkUsuario = ${fkUsuario};
    `;

    return database.executar(instrucaoSql);
}

function buscarKpiPercentualAcertos() {
      var instrucaoSql = `
        SELECT 
            AVG(acertou) * 100 AS percentualAcertos
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
            DATE(dataRealizacao) AS data,
            SUM(acertou = 1) AS acertos,
            SUM(acertou = 0) AS erros
        FROM resposta_usuario
        WHERE fkUsuario = ${fkUsuario}
        GROUP BY DATE(dataRealizacao)
        ORDER BY data;
    `;

    return database.executar(instrucaoSql);
}


module.exports = {
    buscarKpiTotalRespostas,
    buscarKpiPercentualAcertos,
    buscarKpiTotalAcertos,
    buscarComparacaoAcertosErros,
    buscarEvolucaoAcertos
};