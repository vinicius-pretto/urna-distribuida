class VoteService {
    constructor(VoteModel) {
        this.VoteModel = VoteModel;
    }

    create(vote) {
        return this.VoteModel.create(vote);
    }

    findAll() {
        return this.VoteModel.findAll({
            attributes: ['id', 'candidate', 'voter', 'name', ['created_at', 'createdAt'], ['updated_at', 'updatedAt']],
            where: {}
        })
    }
}

module.exports = VoteService;