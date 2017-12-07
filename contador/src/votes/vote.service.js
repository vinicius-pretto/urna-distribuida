class VoteService {
  constructor(CacheClient, WebSocket) {
    this.CacheClient = CacheClient;
    this.WebSocket = WebSocket;
  }

  buildKey(vote) {
    return `vote:candidate:${vote.candidate}:voter:${vote.voter}`;
  }

  putOnCache(vote) {
    const key = this.buildKey(vote);
    return this.CacheClient.setnx(key, vote)
      .then(() => {
        this.WebSocket.emit('votes.add', vote);
      });
  }
}

module.exports = VoteService;