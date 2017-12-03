class CandidateService {
    constructor(CandidateModel) {
        this.CandidateModel = CandidateModel;
    }

    create(candidate) {
        return this.CandidateModel.create(candidate);
    }

    findAll() {
        return this.CandidateModel.findAll({
            where: {}
        });
    }
}

module.exports = CandidateService;