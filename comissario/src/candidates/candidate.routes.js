const { CREATED } = require('http-status');
const CandidateService = require('./candidate.service');

module.exports = (app) => {
    const candidateModel = app.db.models.candidates;
    const candidateService = new CandidateService(candidateModel);

    app.post('/candidates', (req, res, next) => {
        return candidateService.create(req.body)
            .then(() => res.sendStatus(CREATED))
            .catch(next);
    });

    app.get('/candidates', (req, res, next) => {
        return candidateService.findAll()
            .then(candidates => res.json({ candidates }))
            .catch(next);
    });
}