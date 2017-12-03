const axios = require('axios');
const COMISSARIO_URL = require('../../config').comissarioURL;

class VoterService {
  constructor() {}

  findAll() {
    return axios.get(`${COMISSARIO_URL}/voters`)
      .then(response => response.data.voters);
  }
}

module.exports = VoterService;