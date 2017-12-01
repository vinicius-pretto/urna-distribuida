const { CREATED } = require('http-status');
const VoterService = require('./voter.service');

module.exports = (app) => {
    const voterModel = app.db.models.voters;
    const voterService = new VoterService(voterModel);

    app.post('/voters', (req, res, next) => {
        return voterService.create(req.body)
            .then(() => res.sendStatus(CREATED))
            .catch(next);
    });

    app.get('/voters', (req, res, next) => {
        return voterService.findAll()
            .then(voters => res.json({ voters }))
            .catch(next);
    });
}   