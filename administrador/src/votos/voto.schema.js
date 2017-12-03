const Joi = require('joi');

module.exports = {
  candidate: Joi.number().required(),
  voter: Joi.number().required(),
  date: Joi.string().required()
}