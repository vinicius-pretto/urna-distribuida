const VoterService = require('./voter.service');

module.exports = (app) => {
  const voterService = new VoterService();

  app.get('/voters', (req, res, next) => {
    return voterService.findAll()
      .then(voters => res.json({ voters }))
      .catch(next);
  });
}