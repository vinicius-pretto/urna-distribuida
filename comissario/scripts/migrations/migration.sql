-- candidates
CREATE TABLE IF NOT EXISTS candidates (
  id SERIAL, 
  name VARCHAR NOT NULL,
  number INTEGER NOT NULL
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
INSERT INTO candidates (name, number) VALUES ('Chapolin Colorado', 10);
INSERT INTO candidates (name, number) VALUES ('Alma Negra', 11);
INSERT INTO candidates (name, number) VALUES ('Almondega', 12);
INSERT INTO candidates (name, number) VALUES ('Chinesinho', 13);
INSERT INTO candidates (name, number) VALUES ('Quase Nada', 14); 
INSERT INTO candidates (name, number) VALUES ('Tripa Seca', 15);

-- Inserindo os eleitores
INSERT INTO voters (name, voter_title) VALUES ('Vinicius', '00000000000000');
INSERT INTO voters (name, voter_title) VALUES ('Antonio', '11111111111111');
