function cadastrarAvaliacaoCdb(req, res) {
    var fkCopaDoBrasil = req.body.fkCopaDoBrasilServer || '';
    var fkBrasileirao  = req.body.fkBrasileiraoServer  || '';
    var notaPartida    = req.body.notaPartidaServer;
    var fkUsuario      = req.body.fkUsuarioServer;
    var comentario     = req.body.comentarioServer;
    var dataAvaliacao  = req.body.dataAvaliacaoServer;

    if (!fkUsuario) {
        return res.status(400).send("Usuário não identificado!");
    } else if (!notaPartida) {
        return res.status(400).send("Nota da partida está undefined!");
    }

    // ordem correta: fkCopaDoBrasil, fkBrasileirao, fkUsuario, notaPartida, comentario, dataAvaliacao
    avaliacaoModel.cadastrarAvaliacaoCdb(fkCopaDoBrasil, fkBrasileirao, fkUsuario, notaPartida, comentario, dataAvaliacao)
        .then(resultado => res.json(resultado))
        .catch(erro => {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}
module.exports = {
    cadastrarAvaliacaoCdb  
}