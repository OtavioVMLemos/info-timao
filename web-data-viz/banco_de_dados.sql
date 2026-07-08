create database info_coringao;

use info_coringao;

CREATE TABLE usuarios (
    idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(100) NOT NULL
);

CREATE TABLE pergunta (
    idPergunta INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    enunciado VARCHAR(255) NOT NULL,
    alternativaA VARCHAR(100) NOT NULL,
    alternativaB VARCHAR(100) NOT NULL,
    alternativaC VARCHAR(100) NOT NULL,
    alternativaD VARCHAR(100) NOT NULL,
    respostaCorreta CHAR(1) NOT NULL
);

CREATE TABLE resultado (
    idResultado INT PRIMARY KEY AUTO_INCREMENT,
    pontuacao INT NOT NULL,
    dataRealizacao DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    fkUsuario INT NOT NULL,
    CONSTRAINT fkResultadoUsuario FOREIGN KEY (fkUsuario)
        REFERENCES usuario (idUsuario)
);

CREATE TABLE resposta_usuario (
    idResposta INT PRIMARY KEY AUTO_INCREMENT,
    respostaMarcada CHAR(1) NOT NULL,
    acertou BOOLEAN NOT NULL,
    fkResultado INT NOT NULL,
    fkPergunta INT NOT NULL,
    CONSTRAINT fkRespostaResultado FOREIGN KEY (fkResultado)
        REFERENCES resultado (idResultado),
    CONSTRAINT fkRespostaPergunta FOREIGN KEY (fkPergunta)
        REFERENCES pergunta (idPergunta)
);

