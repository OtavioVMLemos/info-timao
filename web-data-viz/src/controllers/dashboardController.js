var dashboardModel = require("../models/dashboardModel");



function buscarKpiTotalRespostas(req, res) {
    console.log(req.body)
    console.log(aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa)
    var fkUsuario = req.body.fkUsuarioServer;
    console.log(fkUsuario)
    if (!fkUsuario) {
    return res.status(400).send("Usuário não identificado!");
     }

    dashboardModel.buscarKpiTotalRespostas(fkUsuario)
        .then(dados => {
            res.json(dados);
        })
        .catch(erro => {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}


function buscarKpiPercentualAcertos(req, res) {

    var fkUsuario = req.body.fkUsuarioServer;

    if (!fkUsuario) {
        return res.status(400).send("Usuário não identificado!");
    }

    dashboardModel.buscarKpiPercentualAcertos(fkUsuario)
        .then(dados => {
            res.json(dados);
        })
        .catch(erro => {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}



function buscarKpiTotalAcertos(req, res) {
    console.log(req.body)
    var fkUsuario = req.body.fkUsuarioServer;
    console.log(fkUsuario)
    if (!fkUsuario) {
        return res.status(400).send("Usuário não identificado!");
    }

    dashboardModel.buscarKpiTotalAcertos(fkUsuario)
        .then(dados => {
            res.json(dados);
        })
        .catch(erro => {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}


function buscarComparacaoAcertosErros(req, res) {

    var fkUsuario = req.body.fkUsuarioServer;

    if (!fkUsuario) {
        return res.status(400).send("Usuário não identificado!");
    }

    dashboardModel.buscarComparacaoAcertosErros(fkUsuario)
        .then(dados => {
            res.json(dados);
        })
        .catch(erro => {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}


function buscarEvolucaoAcertos(req, res) {

    var fkUsuario = req.body.fkUsuarioServer;

    if (!fkUsuario) {
        return res.status(400).send("Usuário não identificado!");
    }

    dashboardModel.buscarEvolucaoAcertos(fkUsuario)
        .then(dados => {
            res.json(dados);
        })
        .catch(erro => {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}


module.exports = {
    buscarKpiTotalRespostas,
    buscarKpiPercentualAcertos,
    buscarKpiTotalAcertos,
    buscarComparacaoAcertosErros,
    buscarEvolucaoAcertos
};