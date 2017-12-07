const { OK } = require('http-status');
const CacheClient = require('../cache/client.cache');
const VoteService = require('./vote.service');

module.exports = (app) => {
  const cacheClient = new CacheClient();
  const webSocket = app.webSocket;
  const voteService = new VoteService(cacheClient, webSocket);

  app.post('/votes', (req, res, next) => {
    return voteService.putOnCache(req.body)
      .then(() => res.json(OK))
      .catch(next);
  });
}