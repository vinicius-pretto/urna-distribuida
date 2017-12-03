class VoteService {
  constructor(CacheClient) {
    this.CacheClient = CacheClient;
  }

  buildKey(vote) {
    return `vote:candidate:${vote.candidate}:voter:${vote.voter}`;
  }

  putOnCache(vote) {
    const key = this.buildKey(vote);
    return this.CacheClient.setnx(key, vote);
  }
}

module.exports = VoteService;