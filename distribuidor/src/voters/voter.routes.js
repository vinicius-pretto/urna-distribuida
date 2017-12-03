const CacheClient = require('../cache/client.cache');
const VoterService = require('./voter.service');

module.exports = (app) => {
  const cacheClient = new CacheClient();
  const voterService = new VoterService(cacheClient);

  app.get('/voters', (req, res, next) => {
    return voterService.findAllOnCache()
      .then(voters => res.json({ voters }))
      .catch(next);
  });
}