const CacheClient = require('./client.cache');

module.exports = (app) => {
  const cacheClient = new CacheClient();

  app.get('/cache', (req, res, next) => {
    return cacheClient.keys('*')
      .then(keys => res.json({ keys }))
      .catch(next);
  });

  app.get('/cache/:key', (req, res, next) => {
    return cacheClient.get(req.params.key)
      .then(value => res.json(value))
      .catch(next);
  });
}