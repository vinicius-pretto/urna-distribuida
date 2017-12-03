const { ACCEPTED, UNAUTHORIZED } = require('http-status');

const CacheClient = require('../cache/client.cache');
const CandidateService = require('../candidates/candidate.service');
const VotoValidator = require('../votos/voto.validator');

module.exports = (app) => {
  const cacheClient = new CacheClient();
  const candidateService = new CandidateService(cacheClient);
  const votoValidator = new VotoValidator(candidateService);

  app.post('/auth', (req, res, next) => {
    return votoValidator.validate(req.body)
      .then(() => res.sendStatus(ACCEPTED))
      .catch((error) => {
        console.log(error);
        res.sendStatus(UNAUTHORIZED);
      });
  });
}