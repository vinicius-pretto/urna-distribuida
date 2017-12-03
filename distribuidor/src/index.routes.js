module.exports = (app) => {
  require('./voters/voter.routes')(app);
}