const { ACCEPTED, UNAUTHORIZED } = require('http-status');
const CacheClient = require('../cache/client.cache');
const VoterService = require('../voters/voter.service');

module.exports = (app) => {
  const cacheClient = new CacheClient();
  const voterService = new VoterService(cacheClient);

  app.post('/auth', (req, res, next) => {
    return voterService.validate(req.body)
      .then(user => {
        res.status(ACCEPTED).json(user);
      })
      .catch(error => {
        console.log('Erro unauthorized', error);
        res.sendStatus(UNAUTHORIZED);
      });
  });
}