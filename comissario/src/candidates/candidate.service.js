class CandidateService {
    constructor(CandidateModel) {
        this.CandidateModel = CandidateModel;
    }

    create(candidate) {
        return this.CandidateModel.create(candidate);
    }

    findAll() {
        return this.CandidateModel.findAll({
            attributes: ['id', 'name', ['created_at', 'createdAt'], ['updated_at', 'updatedAt']],
            where: {}
        });
    }
}

module.exports = CandidateService;