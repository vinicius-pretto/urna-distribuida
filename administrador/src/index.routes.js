module.exports = (app) => {
  require('./auth/auth.routes')(app);
  require('./cache/cache.routes')(app);
};