module.exports = (app) => {
  require('./cache/cache.routes')(app);
  require('./votes/vote.routes')(app);
};