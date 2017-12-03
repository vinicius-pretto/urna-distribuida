const Promise = require('bluebird');
const axios = require('axios');
const COMISSARIO_URL = require('../../config').comissarioURL;

class VoterService {
  constructor(CacheClient) {
    this.CacheClient = CacheClient;
  }

  buildKey(voter) {
    return `${voter.name}:${voter.voterTitle}`;
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
    return this.CacheClient.getAll('*');
  }
}

module.exports = VoterService;