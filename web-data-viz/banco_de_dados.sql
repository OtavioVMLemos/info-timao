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
        REFERENCES usuarios (idUsuario)
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

INSERT INTO pergunta
(enunciado, alternativaA, alternativaB, alternativaC, alternativaD, alternativaE, respostaCorreta)
VALUES
('Quando o Corinthians ganhou a primeira Copa do Brasil?', '1995','1996', '2002', '2009', '2003', 'A'),
('Quem marcou os dois gols do Corinthians na final do Mundial de 2000?', 'Marcelinho Carioca', 'Edílson', 'Luizão', 'Ricardinho', 'Vampeta', 'C' ),
('Quem era o técnico do Corinthians na Libertadores de 2012?', 'Mano Menezes', 'Tite', 'Fábio Carille', 'Oswaldo de Oliveira', 'Vanderlei Luxemburgo', 'B' ),
('Em qual bairro o Corinthians foi fundado?', 'Mooca', 'Brás', 'Bom Retiro', 'Tatuapé', 'Barra Funda', 'C' ),
('Quem NÃO foi titular na final do Mundial de 2012?', 'Paolo Guerrero', 'Cássio', 'Paulinho', 'Alexandre Pato', 'Ralf', 'D');

ALTER TABLE pergunta
ADD COLUMN alternativaE VARCHAR(100) NOT NULL;

select * from resposta_usuario;

ALTER TABLE resposta_usuario
DROP COLUMN fkPergunta;


ALTER TABLE resposta_usuario
DROP FOREIGN KEY fkRespostaPergunta;

ALTER TABLE resposta_usuario
DROP COLUMN fkPergunta;


ALTER TABLE resposta_usuario
DROP FOREIGN KEY fkRespostaResultado;

ALTER TABLE resposta_usuario
DROP COLUMN fkResultado;

DROP TABLE pergunta;
DROP TABLE resultado;

ALTER TABLE resposta_usuario
ADD COLUMN fkUsuario INT NOT NULL;

ALTER TABLE resposta_usuario
ADD COLUMN dataRealizacao DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP;

ALTER TABLE resposta_usuario
ADD CONSTRAINT fkRespostaUsuario
FOREIGN KEY (fkUsuario)
REFERENCES usuarios(idUsuario);

