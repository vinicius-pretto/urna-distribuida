module.exports = (app) => {
  require('./auth/auth.routes')(app);
};