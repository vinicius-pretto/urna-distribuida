const SocketEvent = require('../socket-events.enum');
const NOT_SET = 0;

class VoteService {
  constructor(CacheClient, WebSocket) {
    this.CacheClient = CacheClient;
    this.WebSocket = WebSocket;
  }

  buildKey(vote) {
    return `vote:candidate:${vote.candidate}:voter:${vote.voter}`;
  }

  containsVote(codeNumber) {
    return codeNumber === NOT_SET;
  }

  putOnCache(vote) {
    const key = this.buildKey(vote);

    return this.CacheClient.setnx(key, vote)
      .then(codeNumber => {
        if (!this.containsVote(codeNumber)) {
          return this.WebSocket.emit(SocketEvent.VOTES_INCREMENT, vote);
        }
        return Promise.resolve();
      });
  }
}

module.exports = VoteService;