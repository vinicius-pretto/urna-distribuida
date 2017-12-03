class VoteService {
    constructor(VoteModel) {
        this.VoteModel = VoteModel;
    }

    create(vote) {
        return this.VoteModel.create(vote);
    }

    findAll() {
        return this.VoteModel.findAll({
            where: {}
        })
    }
}

module.exports = VoteService;