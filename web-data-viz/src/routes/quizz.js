var express = require("express");
var Router = express.Router();

var quizzController = require("../controllers/quizzController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
// router.post("/cadastrarAvaliacaoBra", function (req, res) {
//     avaliacaoController.cadastrarAvaliacaoBra(req, res);
// });
router.post("/resultado", function (req, res) {
    quizzController.cadastrarPontuacao(req, res);
})  
router.post("/respotas", function (req, res) {
    quizzController.cadastrarRespostas(req, res);
})  


module.exports = router;