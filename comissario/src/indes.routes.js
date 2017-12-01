module.exports = (app) => {
    require('./candidates/candidate.routes')(app);
    require('./voters/voter.routes')(app);
    require('./votes/vote.routes')(app);
}