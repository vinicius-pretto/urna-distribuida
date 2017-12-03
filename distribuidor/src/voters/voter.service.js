const axios = require('axios');
const COMISSARIO_URL = require('../../config').comissarioURL;

class VoterService {
  constructor(CacheClient) {
    this.CacheClient = CacheClient;
    this.findAll();
  }

  buildKey(voter) {
    return `${voter.name}:${voter.voterTitle}`;
  }

  putOnCache(voters) {
    const promises = voters.map(voter => {
      const key = this.buildKey(voter);
      return this.CacheClient.set(key, voter);
    });
    return Promise.all(promises);
  }

  findAll() {
    return axios.get(`${COMISSARIO_URL}/voters`)
      .then(response => {
        const voters = response.data.voters;
        return this.putOnCache(voters);
      });
  }

  findAllOnCache() {
    return this.CacheClient.getAll('*');
  }
}

module.exports = VoterService;