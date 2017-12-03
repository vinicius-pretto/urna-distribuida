const Promise = require('bluebird');
const redisMock = require('redis-mock');

class CacheClient {
  constructor() {
    this.client = redisMock.createClient();
    Promise.promisifyAll(redisMock);
  }

  toJSON(data) {
    return data ? JSON.parse(data) : {};
  }

  set(key, value) {
    return this.client.setAsync(key, JSON.stringify(value));
  }

  get(key) {
    return this.client.getAsync(key)
      .then(response => this.toJSON(response));
  }

  getAll(pattern) {
    return this.client.keysAsync(pattern)
      .then(keys => {
        const promises = keys.map(key => this.get(key));
        return Promise.all(promises);
      });
  }
}

module.exports = CacheClient;