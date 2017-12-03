const Promise = require('bluebird');
const axios = require('axios');
const _ = require('lodash');

const COMISSARIO_URL = require('../../config').comissarioURL;

class CandidateService {
  constructor(CacheClient) {
    this.CacheClient = CacheClient;
  }

  buildKey(candidateNumber) {
    return `candidate:${candidateNumber}`;
  }

  putCandidatesOnCache() {
    return this.findAll()
      .then(candidates => {
        return Promise.mapSeries(candidates, candidate => this.putOnCache(candidate));
      });
  }

  putOnCache(candidate) {
    const key = this.buildKey(candidate.number);
    return this.CacheClient.set(key, candidate);
  }

  findAll() {
    return axios.get(`${COMISSARIO_URL}/candidates`)
      .then(response => response.data.candidates);
  }

  findAllOnCache() {
    return this.CacheClient.getAll('*');
  }

  findBy(candidateNumber) {
    const key = this.buildKey(candidateNumber);
    return this.CacheClient.get(key);
  }

  isValid(candidateNumber) {
    return this.findBy(candidateNumber)
      .then(candidate => {
          if (_.isEmpty(candidate)) {
            return Promise.reject('Inválid candidate');
          }
          return Promise.resolve();
      });
  }
}

module.exports = CandidateService;