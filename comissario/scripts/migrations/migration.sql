-- candidates
CREATE TABLE IF NOT EXISTS candidates (
  id SERIAL, 
  name VARCHAR NOT NULL,
  number INTEGER NOT NULL,
  picture VARCHAR NOT NULL
);

-- votes
CREATE TABLE IF NOT EXISTS votes (
  id SERIAL,
  candidate INTEGER NOT NULL,
  voter INTEGER NOT NULL,
  date VARCHAR NOT NULL 
);

-- voters
CREATE TABLE IF NOT EXISTS voters (
  id SERIAL,
  name VARCHAR NOT NULL,
  voter_title VARCHAR NOT NULl
);

-- Inserindo os candidatos
INSERT INTO candidates (name, number, picture) VALUES ('Chapolin Colorado', 10, '/images/chapolin-colorado.jpg');
INSERT INTO candidates (name, number, picture) VALUES ('Alma Negra', 11, '/images/alma-negra.jpg');
INSERT INTO candidates (name, number, picture) VALUES ('Almondega', 12, '/images/almondega.jpg');
INSERT INTO candidates (name, number, picture) VALUES ('Chinesinho', 13, '/images/chinesinho.jpg');
INSERT INTO candidates (name, number, picture) VALUES ('Quase Nada', 14, '/images/quase-nada.jpg'); 
INSERT INTO candidates (name, number, picture) VALUES ('Tripa Seca', 15, '/images/tripa-seca.png');

-- Inserindo os eleitores
INSERT INTO voters (name, voter_title) VALUES ('Vinicius', '00000000000000');
INSERT INTO voters (name, voter_title) VALUES ('Antonio', '11111111111111');
