module.exports = (app) => {
  app.get('/candidates', (req, res, next) => {
    res.json({ "candidates": [ { "id": 1, "name": "Chapolin Colorado", "number": 10, "picture": "/images/chapolin-colorado.jpg" }, { "id": 2, "name": "Alma Negra", "number": 11, "picture": "/images/alma-negra.jpg" }, { "id": 3, "name": "Almondega", "number": 12, "picture": "/images/almondega.jpg" }, { "id": 4, "name": "Chinesinho", "number": 13, "picture": "/images/chinesinho.jpg" }, { "id": 5, "name": "Quase Nada", "number": 14, "picture": "/images/quase-nada.jpg" }, { "id": 6, "name": "Tripa Seca", "number": 15, "picture": "/images/tripa-seca.png" } ] });
  });
}