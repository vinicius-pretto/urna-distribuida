const Promise = require('bluebird');
const axios = require('axios');
const _ = require('lodash');
const COMISSARIO_URL = require('../../config').comissarioURL;

class VoterService {
  constructor(CacheClient) {
    this.CacheClient = CacheClient;
  }

  buildKey(voter) {
    return `voter:${voter.name}:${voter.voterTitle}`;
  }

  putVotersOnCache() {
    return this.findAll()
      .then(voters => {
        return Promise.mapSeries(voters, voter => this.putOnCache(voter));
      });
  }

  putOnCache(voter) {
    const key = this.buildKey(voter);
    return this.CacheClient.set(key, voter);
  }

  findAll() {
    return axios.get(`${COMISSARIO_URL}/voters`)
      .then(response => response.data.voters);
  }

  findAllOnCache() {
    return this.CacheClient.getAll('voter:*');
  }

  validate(voter) {
    const key = this.buildKey(voter);
    return this.CacheClient.get(key)
      .then(response => {
        if (_.isEmpty(response)) {
          return Promise.reject('Unauthorized');
        }
        return Promise.resolve();
      });
  }
}

module.exports = VoterService;