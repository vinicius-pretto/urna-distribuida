class VoterService {
    constructor(VoterModel) {
        this.VoterModel = VoterModel;
    }

    create(voter) {
        return this.VoterModel.create(voter);
    }

    findAll() {
        return this.VoterModel.findAll({
            attributes: ['id', 'name', ['voter_title', 'voterTitle'], ['created_at', 'createdAt'], ['updated_at', 'updatedAt']],
            where: {}
        });
    }
}

module.exports = VoterService;