const Joi = require('joi');
const votoSchema = require('./voto.schema');

class VotoValidator {
  constructor(CandidateService) {
    this.CandidateService = CandidateService;
  }

  validate(voto) {
    return Joi.validate(voto, votoSchema)
      .then(() => {
        const candidateNumber = voto.candidate;
        return this.CandidateService.isValid(candidateNumber);
      })
      .catch(error => {
        return Promise.reject(error);
      });
  }
}

module.exports = VotoValidator;