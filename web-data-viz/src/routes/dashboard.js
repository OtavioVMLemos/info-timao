var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");



router.post("/totalRespostas", function (req, res) {
    dashboardController.buscarKpiTotalRespostas(req, res);
});

router.post("/percentualAcertos", function (req, res) {
    dashboardController.buscarKpiPercentualAcertos(req, res);
});

router.post("/totalAcertos", function (req, res) {
    dashboardController.buscarKpiTotalAcertos(req, res);
});

router.post("/comparacaoAcertosErros", function (req, res) {
    dashboardController.buscarComparacaoAcertosErros(req, res);
});

router.post("/evolucaoAcertos", function (req, res) {
    dashboardController.buscarEvolucaoAcertos(req, res);
});

module.exports = router;