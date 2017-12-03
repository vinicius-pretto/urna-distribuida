const CacheClient = require('../cache/client.cache');
const CandidateService = require('./candidate.service');

module.exports = (app) => {
  const cacheClient = new CacheClient();
  const candidateService = new CandidateService(cacheClient);

  app.get('/candidates', (req, res, next) => {
    return candidateService.findAllOnCache()
      .then(candidates => res.json({ candidates }))
      .catch(next);
  });

  app.get('/candidates/:candidateNumber', (req, res, next) => {
    return candidateService.findBy(req.params.candidateNumber)
      .then(candidate => res.json(candidate))
      .catch(next);
  });
}