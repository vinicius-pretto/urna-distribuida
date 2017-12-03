class VoterService {
    constructor(VoterModel) {
        this.VoterModel = VoterModel;
    }

    create(voter) {
        const payload = {
            name: voter.name,
            voter_title: voter.voterTitle
        }
        return this.VoterModel.create(payload);
    }

    findAll() {
        return this.VoterModel.findAll({
            attributes: ['id', 'name', ['voter_title', 'voterTitle']],
            where: {}
        });
    }
}

module.exports = VoterService;