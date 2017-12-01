const { CREATED } = require('http-status');
const VoteService = require('./vote.service');

module.exports = (app) => {
    const voteModel = app.db.models.votes;
    const voteService = new VoteService(voteModel);

    app.post('/votes', (req, res, next) => {
        return voteService.create(req.body)
            .then(() => res.sendStatus(CREATED))
            .catch(next);
    });

    app.get('/votes', (req, res, next) => {
        return voteService.findAll()
            .then(votes => res.json({ votes }))
            .catch(next);
    });
}