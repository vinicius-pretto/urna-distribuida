const { CREATED, OK } = require('http-status');
const CacheClient = require('../cache/client.cache');
const VoteService = require('./vote.service');

module.exports = (app) => {
  const cacheClient = new CacheClient();
  const webSocket = app.webSocket;
  const voteService = new VoteService(cacheClient, webSocket);

  app.post('/votes', (req, res, next) => {
    const containsVote = code => code === 0;

    return voteService.putOnCache(req.body)
      .then(code => {
        if (containsVote(code)) {
          return res.sendStatus(OK);
        }
        return res.sendStatus(CREATED);
      })
      .catch(next);
  });
}