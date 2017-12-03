module.exports = (app) => {
  require('./voters/voter.routes')(app);
  require('./cache/cache.routes')(app);
  require('./candidates/candidate.routes')(app);
  require('./auth/auth.routes')(app);
}